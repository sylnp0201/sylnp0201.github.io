'use strict';
const KEY = 'wordtrail-g5-fall-v1';
const $ = id => document.getElementById(id);
let state = {word:0, studied:[], answers:Array(25).fill(null), question:0, submitted:false};
try {
 const saved=JSON.parse(localStorage.getItem(KEY));
 if(saved && Array.isArray(saved.answers) && saved.answers.length===25){
  state.answers=saved.answers.map(a=>Number.isInteger(a)&&a>=0&&a<5?a:null);
  state.studied=Array.isArray(saved.studied)?[...new Set(saved.studied.filter(i=>Number.isInteger(i)&&i>=0&&i<25))]:[];
  state.word=Number.isInteger(saved.word)&&saved.word>=0&&saved.word<25?saved.word:0;
  state.question=Number.isInteger(saved.question)&&saved.question>=0&&saved.question<25?saved.question:0;
  state.submitted=saved.submitted===true&&state.answers.every(a=>a!==null);
 }
} catch {}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{$('storage-status').textContent='Browser storage is unavailable. Your progress will last only while this page is open.';}}
function renderList(){
 const filter=$('search').value.trim().toLowerCase();
 $('learn-count').textContent=state.studied.length+' / 25';
 $('word-list').innerHTML=WORDS.filter(w=>w.word.toLowerCase().includes(filter)).map(w=>'<button class="word-button '+(w.id===state.word?'selected':'')+'" data-word="'+w.id+'" aria-current="'+(w.id===state.word?'true':'false')+'"><span class="num">'+String(w.id+1).padStart(2,'0')+'</span>'+w.word+(state.studied.includes(w.id)?'<span class="check" aria-label="Studied">✓</span>':'')+'</button>').join('') || '<p class="small">No words found. Try another spelling.</p>';
 $('word-list').querySelectorAll('button').forEach(b=>b.onclick=()=>{state.word=Number(b.dataset.word);save();renderLearn();});
}
function renderLearn(){
 renderList();const w=WORDS[state.word],done=state.studied.includes(w.id);
 $('word-detail').innerHTML='<div class="card-top"><span class="badge">Word '+String(w.id+1).padStart(2,'0')+' / 25</span><button id="study" class="study-button '+(done?'done':'')+'" aria-pressed="'+done+'">'+(done?'✓ Studied':'Mark as studied')+'</button></div><h2>'+w.word+'</h2><p class="pos">'+w.pos+'</p><p class="definition">'+w.definition+'</p><h3 class="section-label">IN THE WILD</h3><div class="examples">'+w.examples.map(e=>'<p>“'+e+'”</p>').join('')+'</div><div class="note"><h3>Think like a word detective</h3><p>'+w.note+'</p></div><div class="word-relations"><div><h3 class="section-label">NEARBY MEANINGS</h3><p>'+w.syn+'</p></div><div><h3 class="section-label">CONTRAST & COMPARE</h3><p>'+w.contrast+'</p></div></div><div class="word-controls"><button id="prev-word" class="plain" '+(w.id===0?'disabled':'')+'>← Previous word</button><button id="next-word" class="plain" '+(w.id===24?'disabled':'')+'>Next word →</button></div>';
 $('study').onclick=()=>{state.studied=done?state.studied.filter(i=>i!==w.id):[...state.studied,w.id];save();renderLearn();};
 $('prev-word').onclick=()=>{if(state.word>0){state.word--;save();renderLearn();}};
 $('next-word').onclick=()=>{if(state.word<24){state.word++;save();renderLearn();}};
}
function answered(){return state.answers.filter(a=>a!==null).length;}
function moveQuestion(i){state.question=i;save();renderTest();$('question-heading').focus();}
function renderTest(){
 if(state.submitted){renderResults();return;}
 const q=QUESTIONS[state.question], count=answered();
 $('test-content').innerHTML='<div class="test-layout"><div class="test-card"><div class="q-top"><span>FALL PRACTICE · ORIGINAL SET 01</span><span>Question '+(q.id+1)+' of 25</span></div><progress aria-label="Questions answered" value="'+count+'" max="25"></progress><h2 class="analogy" id="question-heading" tabindex="-1">'+q.prompt+'</h2><fieldset><legend>Choose the word or pair that completes the same relationship.</legend>'+q.options.map((o,i)=>'<label class="option"><input type="radio" name="answer" value="'+i+'" '+(state.answers[q.id]===i?'checked':'')+'><span class="letter">'+String.fromCharCode(65+i)+'</span><span>'+o+'</span></label>').join('')+'</fieldset><div class="question-controls"><button class="button" id="prev-q" '+(q.id===0?'disabled':'')+'>← Previous</button><button class="button primary" id="next-q" '+(q.id===24?'disabled':'')+'>Next question →</button></div><p class="small">You can change any answer before submitting. Explanations appear after all 25 questions are answered.</p></div><aside class="test-sidebar"><h2>Your answer map</h2><p class="test-intro">Read A : B :: C : D as “A is to B as C is to D.” Match the relationship, not just the topic.</p><p id="answer-count" class="small" aria-live="polite">'+count+' of 25 answered</p><div class="q-grid">'+QUESTIONS.map(x=>'<button data-question="'+x.id+'" class="'+(state.answers[x.id]!==null?'answered ':'')+(x.id===q.id?'current':'')+'" aria-label="Question '+(x.id+1)+(state.answers[x.id]!==null?', answered':', unanswered')+'" '+(x.id===q.id?'aria-current="step"':'')+'>'+(x.id+1)+'</button>').join('')+'</div><p class="small">Green = answered · outlined = current</p><div class="submit-area"><button id="submit" class="button primary" '+(count<25?'disabled':'')+'>Finish & see results</button><p id="submit-hint">'+(count<25?'Answer all '+(25-count)+' remaining questions to unlock your results.':'All questions answered. Ready when you are!')+'</p><button id="unanswered" class="plain" '+(count===25?'hidden':'')+'>Go to next unanswered →</button></div></aside></div>';
 document.querySelectorAll('input[name=answer]').forEach(input=>input.onchange=()=>{
 state.answers[q.id]=Number(input.value);save();
 const count=answered();$('answer-count').textContent=count+' of 25 answered';
 document.querySelector('progress').value=count;
 const b=document.querySelector('[data-question="'+q.id+'"]');b.classList.add('answered');b.setAttribute('aria-label','Question '+(q.id+1)+', answered');
 $('submit').disabled=count<25;$('unanswered').hidden=count===25;
 $('submit-hint').textContent=count<25?'Answer all '+(25-count)+' remaining questions to unlock your results.':'All questions answered. Ready when you are!';
 });
 $('prev-q').onclick=()=>{if(q.id>0)moveQuestion(q.id-1);};
 $('next-q').onclick=()=>{if(q.id<24)moveQuestion(q.id+1);};
 document.querySelectorAll('[data-question]').forEach(b=>b.onclick=()=>moveQuestion(Number(b.dataset.question)));
 $('unanswered').onclick=()=>{const i=state.answers.findIndex(a=>a===null);if(i>=0)moveQuestion(i);};
 $('submit').onclick=()=>{if(answered()===25){state.submitted=true;save();renderResults();$('result-heading').focus();}};
}
function renderResults(){
 const score=QUESTIONS.reduce((n,q)=>n+(state.answers[q.id]===q.answer?1:0),0);
 $('test-content').innerHTML='<div class="result-hero"><div><p class="eyebrow" style="color:#ebca8f">PRACTICE COMPLETE</p><h2 id="result-heading" tabindex="-1">'+(score===25?'Every connection found.':'Every connection is a chance to learn.')+'</h2><p>'+score+' correct out of 25 · '+(25-score)+' to revisit</p></div><div class="score">'+(score*4)+'%</div></div><div class="review-toolbar"><h2>Your answer notebook</h2><label><input type="checkbox" id="missed-only"> Show only missed questions</label></div><div id="reviews"></div><div class="review-actions"><a class="button" href="#learn">Back to word study</a><button id="retry" class="button primary">Try this set again</button></div><p class="small">This is a fixed practice set. Retaking it uses the same questions, so a higher score may reflect remembering the answers.</p>';
 function reviews(){
 const qs=QUESTIONS.filter(q=>!$('missed-only').checked||state.answers[q.id]!==q.answer);
 $('reviews').innerHTML=qs.map(q=>{
 const correct=state.answers[q.id]===q.answer;
 return '<article class="review-card"><span class="outcome '+(correct?'correct':'incorrect')+'">Question '+(q.id+1)+' · '+(correct?'✓ Correct':'↗ Revisit')+'</span><h3>'+q.prompt+'</h3><ul class="answer-list">'+q.options.map((o,i)=>'<li class="'+(i===q.answer?'right':i===state.answers[q.id]?'wrong':'')+'">'+String.fromCharCode(65+i)+'. '+o+(i===q.answer?' · Correct answer':'')+(i===state.answers[q.id]?' · Your choice':'')+'</li>').join('')+'</ul><div class="review-explanation"><p><b>'+q.relation+':</b> '+q.explanation+'</p><p><b>Watch the trap:</b> '+q.trap+'</p></div></article>';
 }).join('')||'<p>No missed questions. You found every connection!</p>';
 }
 $('missed-only').onchange=reviews;reviews();
 $('retry').onclick=()=>{if(confirm('Start this same set again? Your current test answers and score will be cleared. Your studied words will stay saved.')){state.answers=Array(25).fill(null);state.question=0;state.submitted=false;save();renderTest();$('question-heading').focus();}};
}
function route(){
 const test=location.hash==='#test';
 $('learn-view').hidden=test;$('test-view').hidden=!test;
 $('learn-nav').classList.toggle('active',!test);$('test-nav').classList.toggle('active',test);
 $('learn-nav').setAttribute('aria-current',!test?'page':'false');$('test-nav').setAttribute('aria-current',test?'page':'false');
 $('page-title').innerHTML=test?'Find the link.<br><em>Follow your thinking.</em>':'Big words.<br><em>Bigger connections.</em>';
 $('page-description').textContent=test?'25 original analogies. Take your time, make connections, and learn from every answer.':'Get to know each word. Then discover how ideas connect.';
 if(test)renderTest();else renderLearn();
}
$('search').oninput=renderList;window.addEventListener('hashchange',route);route();
