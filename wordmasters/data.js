const WORDS = [
  {
    "id": 0,
    "word": "Cascade",
    "pos": "noun · verb",
    "definition": "A waterfall, especially one falling in steps; to pour or tumble downward.",
    "examples": [
      "Water cascaded over the rocks into a clear pool.",
      "A cascade of questions followed the surprising announcement."
    ],
    "note": "Think about downward movement or a flowing series. A cascade is more than a few isolated drops.",
    "syn": "waterfall; tumble",
    "contrast": "trickle (a much smaller flow)"
  },
  {
    "id": 1,
    "word": "Quibble",
    "pos": "verb · noun",
    "definition": "To argue or complain about a small, unimportant detail; such an objection.",
    "examples": [
      "We agreed on the plan but quibbled over the color of the poster.",
      "Her only quibble was that the title was too small."
    ],
    "note": "A quibble is a minor objection, not necessarily a serious disagreement. Notice the scale of the problem.",
    "syn": "nitpick; minor objection",
    "contrast": "agree; accept"
  },
  {
    "id": 2,
    "word": "Witty",
    "pos": "adjective",
    "definition": "Clever and funny, especially in the way someone uses words.",
    "examples": [
      "His witty reply made the whole debate team laugh.",
      "The author is known for witty dialogue."
    ],
    "note": "Witty combines humor with quick, clever thinking. A silly noise can be funny without being witty.",
    "syn": "clever; humorous",
    "contrast": "dull; humorless"
  },
  {
    "id": 3,
    "word": "Ember",
    "pos": "noun",
    "definition": "A small piece of wood or coal that is still glowing after a fire has died down.",
    "examples": [
      "One orange ember glowed beneath the ashes.",
      "An ember of hope remained after the first plan failed."
    ],
    "note": "An ember is a glowing leftover of a fire, not the same as cold ash or a flying spark. Figuratively, it can be a feeling that has almost faded.",
    "syn": "glowing coal",
    "contrast": "Compare: spark; flame; ash"
  },
  {
    "id": 4,
    "word": "Glare",
    "pos": "noun · verb",
    "definition": "A harsh, bright light; an angry stare; to shine harshly or stare angrily.",
    "examples": [
      "The glare from the snow made her squint.",
      "He glared at the player who had cheated."
    ],
    "note": "Choose the meaning that fits. Glare can describe light or a look. A glare is stronger and less pleasant than a glimmer.",
    "syn": "dazzle; scowl",
    "contrast": "glimmer (faint light); friendly look"
  },
  {
    "id": 5,
    "word": "Brawny",
    "pos": "adjective",
    "definition": "Physically strong and muscular.",
    "examples": [
      "The brawny sailor pulled the heavy rope.",
      "Even a brawny athlete needs teamwork."
    ],
    "note": "Brawny describes muscle and strength, not bravery or intelligence. Gaunt describes thinness, so it is not an exact opposite in every context.",
    "syn": "muscular; powerful",
    "contrast": "weak; puny"
  },
  {
    "id": 6,
    "word": "Quagmire",
    "pos": "noun",
    "definition": "Soft, wet ground that is hard to cross; a complicated situation that is hard to escape.",
    "examples": [
      "The muddy trail became a quagmire after the storm.",
      "Conflicting rules trapped the club in a quagmire."
    ],
    "note": "Connect the literal and figurative meanings: in both, it is hard to get out. A puddle need not trap anyone.",
    "syn": "bog; predicament",
    "contrast": "Compare: obstacle; dilemma"
  },
  {
    "id": 7,
    "word": "Subdue",
    "pos": "verb",
    "definition": "To bring under control; to make less strong or intense.",
    "examples": [
      "The trainer used a calm voice to subdue the excited dog.",
      "She took slow breaths to subdue her fear."
    ],
    "note": "Subdue can mean control an opponent OR quiet a feeling. Vanquish stresses defeating; subdue stresses bringing under control.",
    "syn": "tame; restrain; quiet",
    "contrast": "provoke; intensify"
  },
  {
    "id": 8,
    "word": "Crafty",
    "pos": "adjective",
    "definition": "Clever at getting what one wants, often by tricking others.",
    "examples": [
      "The crafty fox led the guard away from the gate.",
      "Her crafty plan hid the surprise until the last moment."
    ],
    "note": "In these exercises, crafty means cunning, not simply good at arts and crafts. Cleverness alone does not always imply trickery.",
    "syn": "cunning; sly",
    "contrast": "guileless; straightforward"
  },
  {
    "id": 9,
    "word": "Ruse",
    "pos": "noun",
    "definition": "A trick or plan intended to fool someone.",
    "examples": [
      "The pretend treasure map was a ruse to distract the pirates.",
      "The detective saw through the ruse."
    ],
    "note": "A ruse is the trick itself; crafty describes the person or plan. Keep nouns and adjectives in matching roles.",
    "syn": "trick; deception",
    "contrast": "Compare: honest explanation"
  },
  {
    "id": 10,
    "word": "Vanquish",
    "pos": "verb",
    "definition": "To defeat completely.",
    "examples": [
      "The hero hoped to vanquish the dragon.",
      "The team finally vanquished its strongest rival."
    ],
    "note": "Stronger than merely compete with or challenge. The winner vanquishes the opponent; the opponent is vanquished.",
    "syn": "conquer; defeat",
    "contrast": "lose to; surrender to"
  },
  {
    "id": 11,
    "word": "Gaunt",
    "pos": "adjective",
    "definition": "Very thin and often looking tired or unhealthy.",
    "examples": [
      "The lost traveler looked gaunt after days without enough food.",
      "The artist drew a gaunt face with hollow cheeks."
    ],
    "note": "Gaunt suggests more than ordinary slimness. Do not treat every thin or fit person as gaunt.",
    "syn": "haggard; emaciated",
    "contrast": "plump; well-fed"
  },
  {
    "id": 12,
    "word": "Residue",
    "pos": "noun",
    "definition": "Something left behind after the rest has been removed or used.",
    "examples": [
      "The sticker left a sticky residue on the jar.",
      "A white residue remained after the salt water evaporated."
    ],
    "note": "Residue is a remainder. Think process → what remains. Not every residue is dirt, and not every residue is toxic.",
    "syn": "remainder; deposit",
    "contrast": "Compare: original material"
  },
  {
    "id": 13,
    "word": "Hustle",
    "pos": "verb · noun",
    "definition": "To move or work quickly and energetically; busy, energetic activity. It can also mean to trick someone for money.",
    "examples": [
      "We had to hustle to catch the bus.",
      "She liked the hustle of the busy market."
    ],
    "note": "Use context: hustle can be hurry, energetic effort, or a dishonest scheme. In a movement analogy, it contrasts with lingering.",
    "syn": "hurry; bustle",
    "contrast": "dawdle; linger"
  },
  {
    "id": 14,
    "word": "Rotund",
    "pos": "adjective",
    "definition": "Round in shape; plump or rounded in body.",
    "examples": [
      "The cartoon featured a rotund snowman.",
      "A rotund pumpkin sat on the porch."
    ],
    "note": "Rotund emphasizes roundness. It does not mean strong or muscular. Use body-description words thoughtfully.",
    "syn": "round; plump",
    "contrast": "slender; angular"
  },
  {
    "id": 15,
    "word": "Precipice",
    "pos": "noun",
    "definition": "A very steep cliff or the edge of one; the brink of a dangerous situation.",
    "examples": [
      "The hikers stayed well back from the precipice.",
      "The failing project stood on the precipice of disaster."
    ],
    "note": "Think steep drop and risky edge. A mountain is not automatically a precipice; the shape matters.",
    "syn": "cliff; brink",
    "contrast": "Compare: gentle slope"
  },
  {
    "id": 16,
    "word": "Loiter",
    "pos": "verb",
    "definition": "To stay around a place without a clear purpose, often longer than expected.",
    "examples": [
      "Please do not loiter in the doorway after the show.",
      "The children loitered near the shop while deciding where to go."
    ],
    "note": "Loiter is not simply wait: waiting may have a clear purpose. It suggests hanging around or lingering.",
    "syn": "linger; hang around",
    "contrast": "hurry; depart"
  },
  {
    "id": 17,
    "word": "Sheer",
    "pos": "adjective · adverb · verb",
    "definition": "As an adjective: almost vertical; very thin and transparent; or complete and absolute.",
    "examples": [
      "They looked up at the sheer cliff.",
      "Sunlight passed through the sheer curtains."
    ],
    "note": "A sheer cliff is steep; sheer fabric is see-through; sheer luck is pure luck. As a verb, sheer can mean turn sharply aside. Do not confuse it with shear (cut).",
    "syn": "steep; transparent; utter",
    "contrast": "sloping; opaque (depending on meaning)"
  },
  {
    "id": 18,
    "word": "Glimmer",
    "pos": "noun · verb",
    "definition": "A faint or unsteady light; to shine faintly. Also, a small sign of something.",
    "examples": [
      "A glimmer from the lantern guided us home.",
      "The first correct answer gave him a glimmer of confidence."
    ],
    "note": "A glimmer is faint, while glare is harsh and bright. A glimmer of hope is a small sign of hope, not actual light.",
    "syn": "gleam; faint glow",
    "contrast": "glare (contrasting intensity)"
  },
  {
    "id": 19,
    "word": "Jeer",
    "pos": "verb · noun",
    "definition": "To make a rude, mocking remark or sound; a mocking shout.",
    "examples": [
      "The coach told the crowd not to jeer at a missed shot.",
      "A jeer from the audience interrupted the speech."
    ],
    "note": "Jeering aims to ridicule or hurt. Jesting can be playful and friendly; they are not exact synonyms.",
    "syn": "taunt; mock",
    "contrast": "cheer; applaud"
  },
  {
    "id": 20,
    "word": "Furtive",
    "pos": "adjective",
    "definition": "Secretive and trying not to be noticed.",
    "examples": [
      "She cast a furtive glance at the hidden birthday gift.",
      "The animal made a furtive trip out of its burrow."
    ],
    "note": "Furtive describes concealed behavior. Being quiet is not enough: a quiet librarian is not necessarily furtive.",
    "syn": "sneaky; stealthy",
    "contrast": "open; conspicuous"
  },
  {
    "id": 21,
    "word": "Vagrant",
    "pos": "noun · adjective",
    "definition": "As a noun, a person who wanders without a settled home or regular work; as an adjective, wandering.",
    "examples": [
      "In the old story, a vagrant traveled from village to village.",
      "Birdwatchers spotted a vagrant bird far outside its usual range."
    ],
    "note": "This word appears in older writing and can sound judgmental when used about people. Wandering or lacking a home does not imply dishonesty. A vagrant bird is simply outside its usual range.",
    "syn": "wanderer; wandering",
    "contrast": "settled; resident (in context)"
  },
  {
    "id": 22,
    "word": "Filch",
    "pos": "verb",
    "definition": "To steal something, usually something small, secretly.",
    "examples": [
      "The raccoon tried to filch a cracker from the picnic basket.",
      "Someone had filched a pencil from the desk."
    ],
    "note": "Filch means take without permission, not borrow. It suggests a sneaky small theft rather than a forceful robbery.",
    "syn": "pilfer; steal",
    "contrast": "return; give"
  },
  {
    "id": 23,
    "word": "Toxic",
    "pos": "adjective",
    "definition": "Poisonous or able to cause harm; figuratively, deeply harmful.",
    "examples": [
      "The scientist wore gloves when handling the toxic chemical.",
      "Cruel rumors created a toxic atmosphere in the club."
    ],
    "note": "Toxic describes a harmful property, not an unpleasant smell. Something can be toxic without smelling bad, and bad-smelling without being toxic.",
    "syn": "poisonous; harmful",
    "contrast": "nontoxic; harmless"
  },
  {
    "id": 24,
    "word": "Jest",
    "pos": "noun · verb",
    "definition": "A joke or a playful remark; to speak or act jokingly.",
    "examples": [
      "Her comment was meant as a jest, not an insult.",
      "He was jesting when he said his backpack weighed a ton."
    ],
    "note": "In jest means jokingly. Contrast with in earnest (seriously). A jest need not be as clever as a witty remark, and need not be cruel like a jeer.",
    "syn": "joke; banter",
    "contrast": "serious statement; speak in earnest"
  }
];
const QUESTIONS = [
  {
    "id": 0,
    "prompt": "CASCADE : WATER :: AVALANCHE : ____",
    "options": [
      "wind",
      "ember",
      "snow",
      "residue",
      "rain"
    ],
    "answer": 2,
    "relation": "Moving material",
    "explanation": "A cascade is a falling mass of water; an avalanche is a falling mass of snow.",
    "trap": "Rain is water falling from clouds, not the material that defines a snow avalanche."
  },
  {
    "id": 1,
    "prompt": "QUIBBLE : MINOR :: CRISIS : ____",
    "options": [
      "serious",
      "witty",
      "furtive",
      "ordinary",
      "brief"
    ],
    "answer": 0,
    "relation": "Defining quality",
    "explanation": "A quibble is a minor objection; a crisis is a serious problem.",
    "trap": "Brief describes duration, not seriousness. A crisis can be brief and still serious."
  },
  {
    "id": 2,
    "prompt": "WITTY : HUMOR :: BRAWNY : ____",
    "options": [
      "speed",
      "ruse",
      "jest",
      "height",
      "strength"
    ],
    "answer": 4,
    "relation": "Quality and trait",
    "explanation": "A witty person shows clever humor; a brawny person has physical strength.",
    "trap": "Height and speed do not necessarily come with muscular strength."
  },
  {
    "id": 3,
    "prompt": "EMBER : FIRE :: CRUMB : ____",
    "options": [
      "oven",
      "bread",
      "plate",
      "glimmer",
      "flour"
    ],
    "answer": 1,
    "relation": "Small remnant",
    "explanation": "An ember is a small glowing remnant of a fire; a crumb is a small remnant of bread.",
    "trap": "Flour is an ingredient, not a piece left from bread. The relationship is what remains."
  },
  {
    "id": 4,
    "prompt": "GLIMMER : GLARE :: WHISPER : ____",
    "options": [
      "jest",
      "silence",
      "listen",
      "shout",
      "murmur"
    ],
    "answer": 3,
    "relation": "Increasing intensity",
    "explanation": "A glimmer is faint light and a glare is harsh, strong light. A whisper is a soft voice and a shout is a loud one.",
    "trap": "Murmur stays quiet; silence removes sound altogether. We need greater intensity."
  },
  {
    "id": 5,
    "prompt": "MUSCULAR : BRAWNY :: EMACIATED : ____",
    "options": [
      "athletic",
      "rotund",
      "cheerful",
      "gaunt",
      "crafty"
    ],
    "answer": 3,
    "relation": "Synonyms",
    "explanation": "Muscular and brawny are synonyms; emaciated and gaunt both describe an extremely thin, often unhealthy appearance.",
    "trap": "Athletic can describe fitness, while gaunt suggests an unusually thin, worn appearance."
  },
  {
    "id": 6,
    "prompt": "BOG : QUAGMIRE :: TRICK : ____",
    "options": [
      "jest",
      "ruse",
      "truth",
      "residue",
      "argument"
    ],
    "answer": 1,
    "relation": "Synonyms",
    "explanation": "A bog is a quagmire; a trick intended to deceive is a ruse.",
    "trap": "A jest is meant as a joke, while a ruse is designed to deceive. An argument is not necessarily either."
  },
  {
    "id": 7,
    "prompt": "SUBDUE : RESISTANCE :: SOOTHE : ____",
    "options": [
      "ruse",
      "victory",
      "residue",
      "comfort",
      "distress"
    ],
    "answer": 4,
    "relation": "Action reduces something",
    "explanation": "To subdue resistance is to bring it under control; to soothe distress is to calm or reduce it.",
    "trap": "Comfort is what soothing may provide, not what it reduces. Keep the direction the same."
  },
  {
    "id": 8,
    "prompt": "CRAFTY : GUILELESS :: TOXIC : ____",
    "options": [
      "harmless",
      "furtive",
      "bitter",
      "poisonous",
      "dangerous"
    ],
    "answer": 0,
    "relation": "Opposites",
    "explanation": "Crafty means cunning, while guileless means free of deceit. Toxic means harmful or poisonous; harmless is the opposite.",
    "trap": "Poisonous and dangerous point toward toxic, not away from it. Bitter is a taste."
  },
  {
    "id": 9,
    "prompt": "RUSE : DECEIVE :: KEY : ____",
    "options": [
      "filch",
      "metal",
      "unlock",
      "locksmith",
      "door"
    ],
    "answer": 2,
    "relation": "Thing and purpose",
    "explanation": "A ruse is used to deceive; a key is used to unlock.",
    "trap": "Door is a thing a key may work on. The matching answer needs an action describing purpose."
  },
  {
    "id": 10,
    "prompt": "VANQUISH : OPPONENT :: SOLVE : ____",
    "options": [
      "gaunt",
      "victory",
      "subdue",
      "answer",
      "puzzle"
    ],
    "answer": 4,
    "relation": "Action and object",
    "explanation": "You vanquish an opponent; you solve a puzzle.",
    "trap": "Victory and answer are results, not what the action is performed on."
  },
  {
    "id": 11,
    "prompt": "GAUNT : PLUMP :: SPARSE : ____",
    "options": [
      "brawny",
      "empty",
      "dense",
      "rotund",
      "tiny"
    ],
    "answer": 2,
    "relation": "Opposites",
    "explanation": "Gaunt and plump contrast thinness with fullness. Sparse means thinly scattered; dense means closely packed.",
    "trap": "Empty goes further in the same direction as sparse. Rotund concerns round shape, not how closely things are packed."
  },
  {
    "id": 12,
    "prompt": "EVAPORATION : RESIDUE :: COMBUSTION : ____",
    "options": [
      "ash",
      "toxic",
      "flame",
      "fuel",
      "glare"
    ],
    "answer": 0,
    "relation": "Process and remainder",
    "explanation": "Evaporation can leave a residue; combustion (burning) can leave ash.",
    "trap": "Fuel is consumed and flame occurs during burning. Ash matches the idea of material left afterward."
  },
  {
    "id": 13,
    "prompt": "HUSTLE : DAWDLE :: HASTEN : ____",
    "options": [
      "run",
      "filch",
      "vanquish",
      "delay",
      "subdue"
    ],
    "answer": 3,
    "relation": "Opposing actions",
    "explanation": "Hustle means hurry, while dawdle means waste time or move slowly. Hasten means speed up; delay means hold back.",
    "trap": "Run also suggests speed. The second word must oppose the first action."
  },
  {
    "id": 14,
    "prompt": "ROUNDNESS : ROTUND :: STEEPNESS : ____",
    "options": [
      "toxic",
      "sheer",
      "glimmer",
      "brawny",
      "gaunt"
    ],
    "answer": 1,
    "relation": "Quality named by adjective",
    "explanation": "An object with roundness can be called rotund. A cliff with extreme steepness can be called sheer.",
    "trap": "Brawny describes muscle, gaunt describes thinness, and toxic describes harmfulness. Sheer has the matching cliff meaning."
  },
  {
    "id": 15,
    "prompt": "CLIFF : PRECIPICE :: JOKE : ____",
    "options": [
      "jeer",
      "jest",
      "ruse",
      "quibble",
      "glare"
    ],
    "answer": 1,
    "relation": "Synonyms",
    "explanation": "A steep cliff is a precipice; a joke is a jest.",
    "trap": "A jeer mocks someone, a ruse deceives, and a quibble objects to a small detail. None simply means joke."
  },
  {
    "id": 16,
    "prompt": "LINGER : LOITER :: STEAL : ____",
    "options": [
      "borrow",
      "guard",
      "hustle",
      "return",
      "filch"
    ],
    "answer": 4,
    "relation": "Synonyms",
    "explanation": "Loiter is to linger without a clear purpose; filch is to steal, usually something small and secretly.",
    "trap": "Borrow implies permission and an intention to return. Filch does not."
  },
  {
    "id": 17,
    "prompt": "SHEER : OPAQUE :: FURTIVE : ____",
    "options": [
      "quiet",
      "crafty",
      "hidden",
      "conspicuous",
      "witty"
    ],
    "answer": 3,
    "relation": "Opposites in context",
    "explanation": "Sheer fabric lets light through; opaque fabric does not. Furtive behavior avoids notice; conspicuous behavior is easily noticed.",
    "trap": "Hidden is similar to furtive. Quiet does not tell you whether something is concealed."
  },
  {
    "id": 18,
    "prompt": "GLIMMER : LIGHT :: WHIFF : ____",
    "options": [
      "wind",
      "ember",
      "scent",
      "toxic",
      "hustle"
    ],
    "answer": 2,
    "relation": "Small amount of something sensed",
    "explanation": "A glimmer is a small amount of light; a whiff is a small amount of a scent.",
    "trap": "A breeze can carry a scent, but wind is not the matching thing sensed in this use of whiff."
  },
  {
    "id": 19,
    "prompt": "JEER : RIDICULE :: APPLAUD : ____",
    "options": [
      "approval",
      "silence",
      "glare",
      "complaint",
      "jest"
    ],
    "answer": 0,
    "relation": "Action and message",
    "explanation": "A jeer expresses ridicule; applause expresses approval.",
    "trap": "Silence is absence of applause. A jest can express humor, which is not the message of applause."
  },
  {
    "id": 20,
    "prompt": "FURTIVE : NOTICE :: CAMOUFLAGED : ____",
    "options": [
      "noise",
      "hustle",
      "detection",
      "motion",
      "residue"
    ],
    "answer": 2,
    "relation": "What a quality helps avoid",
    "explanation": "Furtive behavior tries to avoid notice; being camouflaged helps avoid detection.",
    "trap": "Camouflage hides something from being spotted; it does not necessarily stop it from moving or making noise."
  },
  {
    "id": 21,
    "prompt": "VAGRANT : WANDER :: SENTINEL : ____",
    "options": [
      "filch",
      "loiter",
      "jest",
      "guard",
      "quibble"
    ],
    "answer": 3,
    "relation": "Role and characteristic action",
    "explanation": "A vagrant wanders; a sentinel is a person whose job is to stand guard.",
    "trap": "Loiter means linger without a clear purpose. A sentinel has the clear purpose of keeping watch."
  },
  {
    "id": 22,
    "prompt": "FILCH : STEAL :: VANQUISH : ____",
    "options": [
      "challenge",
      "defeat",
      "surrender",
      "compete",
      "subdue"
    ],
    "answer": 1,
    "relation": "Specific action and broader meaning",
    "explanation": "To filch is to steal in a small, sneaky way; to vanquish is to defeat completely.",
    "trap": "Subdue focuses on control or quieting and need not mean complete defeat. Challenge and compete do not guarantee a win."
  },
  {
    "id": 23,
    "prompt": "TOXIC : HARM :: ____",
    "options": [
      "nutritious : nourishment",
      "furtive : attention",
      "rotund : speed",
      "brawny : weakness",
      "witty : silence"
    ],
    "answer": 0,
    "relation": "Property and characteristic effect",
    "explanation": "Something toxic can cause harm; something nutritious provides nourishment.",
    "trap": "Brawny does not mean weak, furtive aims to avoid attention, and the remaining pairs do not express the same effect."
  },
  {
    "id": 24,
    "prompt": "JEST : JOKE :: ____",
    "options": [
      "glare : glimmer",
      "ruse : honest",
      "residue : remove",
      "quagmire : escape",
      "quibble : nitpick"
    ],
    "answer": 4,
    "relation": "Synonyms with matching word roles",
    "explanation": "To jest is to joke; to quibble is to nitpick. Each pair gives two verbs with similar meanings.",
    "trap": "Glare and glimmer differ in light intensity. The other pairs are related in different ways or mismatch word roles."
  }
];
