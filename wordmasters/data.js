const WORDS = [
  {
    "id": 0,
    "word": "Cascade",
    "examples": [
      "Water cascaded over the rocks into a clear pool.",
      "A cascade of questions followed the surprising announcement."
    ],
    "note": "Think about downward movement or a flowing series. A cascade is more than a few isolated drops.",
    "syn": "waterfall; tumble",
    "contrast": "trickle (a much smaller flow)",
    "senses": [
      {
        "pos": "noun",
        "definition": "A waterfall, especially one falling in steps; also, a large amount of something arriving in a flowing series."
      },
      {
        "pos": "verb",
        "definition": "To pour, fall, or tumble downward, often in a flowing series."
      }
    ]
  },
  {
    "id": 1,
    "word": "Quibble",
    "examples": [
      "We agreed on the plan but quibbled over the color of the poster.",
      "Her only quibble was that the title was too small."
    ],
    "note": "A quibble is a minor objection, not necessarily a serious disagreement. Notice the scale of the problem.",
    "syn": "nitpick; minor objection",
    "contrast": "agree; accept",
    "senses": [
      {
        "pos": "noun",
        "definition": "A complaint or objection about a small, unimportant detail."
      },
      {
        "pos": "verb",
        "definition": "To argue or complain about small, unimportant details."
      }
    ]
  },
  {
    "id": 2,
    "word": "Witty",
    "examples": [
      "His witty reply made the whole debate team laugh.",
      "The author is known for witty dialogue."
    ],
    "note": "Witty combines humor with quick, clever thinking. A silly noise can be funny without being witty.",
    "syn": "clever; humorous",
    "contrast": "dull; humorless",
    "senses": [
      {
        "pos": "adjective",
        "definition": "Clever and funny, especially in the way someone uses words."
      }
    ]
  },
  {
    "id": 3,
    "word": "Ember",
    "examples": [
      "One orange ember glowed beneath the ashes.",
      "An ember of hope remained after the first plan failed."
    ],
    "note": "An ember is a glowing leftover of a fire, not the same as cold ash or a flying spark. Figuratively, it can be a feeling that has almost faded.",
    "syn": "glowing coal",
    "contrast": "Compare: spark; flame; ash",
    "senses": [
      {
        "pos": "noun",
        "definition": "A small piece of wood or coal that is still glowing after a fire has died down."
      }
    ]
  },
  {
    "id": 4,
    "word": "Glare",
    "examples": [
      "The glare from the snow made her squint.",
      "He glared at the player who had cheated."
    ],
    "note": "Choose the meaning that fits. Glare can describe light or a look. A glare is stronger and less pleasant than a glimmer.",
    "syn": "dazzle; scowl",
    "contrast": "glimmer (faint light); friendly look",
    "senses": [
      {
        "pos": "noun",
        "definition": "A harsh, bright light; or an angry, fixed stare."
      },
      {
        "pos": "verb",
        "definition": "To shine with a harsh, bright light; or to stare angrily at someone."
      }
    ]
  },
  {
    "id": 5,
    "word": "Brawny",
    "examples": [
      "The brawny sailor pulled the heavy rope.",
      "Even a brawny athlete needs teamwork."
    ],
    "note": "Brawny describes muscle and strength, not bravery or intelligence. Gaunt describes thinness, so it is not an exact opposite in every context.",
    "syn": "muscular; powerful",
    "contrast": "weak; puny",
    "senses": [
      {
        "pos": "adjective",
        "definition": "Physically strong and muscular."
      }
    ]
  },
  {
    "id": 6,
    "word": "Quagmire",
    "examples": [
      "The muddy trail became a quagmire after the storm.",
      "Conflicting rules trapped the club in a quagmire."
    ],
    "note": "Connect the literal and figurative meanings: in both, it is hard to get out. A puddle need not trap anyone.",
    "syn": "bog; predicament",
    "contrast": "Compare: obstacle; dilemma",
    "senses": [
      {
        "pos": "noun",
        "definition": "Soft, wet ground that is hard to cross; a complicated situation that is hard to escape."
      }
    ]
  },
  {
    "id": 7,
    "word": "Subdue",
    "examples": [
      "The trainer used a calm voice to subdue the excited dog.",
      "She took slow breaths to subdue her fear."
    ],
    "note": "Subdue can mean control an opponent OR quiet a feeling. Vanquish stresses defeating; subdue stresses bringing under control.",
    "syn": "tame; restrain; quiet",
    "contrast": "provoke; intensify",
    "senses": [
      {
        "pos": "verb",
        "definition": "To bring under control; to make less strong or intense."
      }
    ]
  },
  {
    "id": 8,
    "word": "Crafty",
    "examples": [
      "The crafty fox led the guard away from the gate.",
      "Her crafty plan hid the surprise until the last moment."
    ],
    "note": "In these exercises, crafty means cunning, not simply good at arts and crafts. Cleverness alone does not always imply trickery.",
    "syn": "cunning; sly",
    "contrast": "guileless; straightforward",
    "senses": [
      {
        "pos": "adjective",
        "definition": "Clever at getting what one wants, often by tricking others."
      }
    ]
  },
  {
    "id": 9,
    "word": "Ruse",
    "examples": [
      "The pretend treasure map was a ruse to distract the pirates.",
      "The detective saw through the ruse."
    ],
    "note": "A ruse is the trick itself; crafty describes the person or plan. Keep nouns and adjectives in matching roles.",
    "syn": "trick; deception",
    "contrast": "Compare: honest explanation",
    "senses": [
      {
        "pos": "noun",
        "definition": "A trick or plan intended to fool someone."
      }
    ]
  },
  {
    "id": 10,
    "word": "Vanquish",
    "examples": [
      "The hero hoped to vanquish the dragon.",
      "The team finally vanquished its strongest rival."
    ],
    "note": "Stronger than merely compete with or challenge. The winner vanquishes the opponent; the opponent is vanquished.",
    "syn": "conquer; defeat",
    "contrast": "lose to; surrender to",
    "senses": [
      {
        "pos": "verb",
        "definition": "To defeat completely."
      }
    ]
  },
  {
    "id": 11,
    "word": "Gaunt",
    "examples": [
      "The lost traveler looked gaunt after days without enough food.",
      "The artist drew a gaunt face with hollow cheeks."
    ],
    "note": "Gaunt suggests more than ordinary slimness. Do not treat every thin or fit person as gaunt.",
    "syn": "haggard; emaciated",
    "contrast": "plump; well-fed",
    "senses": [
      {
        "pos": "adjective",
        "definition": "Very thin and often looking tired or unhealthy."
      }
    ]
  },
  {
    "id": 12,
    "word": "Residue",
    "examples": [
      "The sticker left a sticky residue on the jar.",
      "A white residue remained after the salt water evaporated."
    ],
    "note": "Residue is a remainder. Think process → what remains. Not every residue is dirt, and not every residue is toxic.",
    "syn": "remainder; deposit",
    "contrast": "Compare: original material",
    "senses": [
      {
        "pos": "noun",
        "definition": "Something left behind after the rest has been removed or used."
      }
    ]
  },
  {
    "id": 13,
    "word": "Hustle",
    "examples": [
      "We had to hustle to catch the bus.",
      "She liked the hustle of the busy market."
    ],
    "note": "Use context: hustle can be hurry, energetic effort, or a dishonest scheme. In a movement analogy, it contrasts with lingering.",
    "syn": "hurry; bustle",
    "contrast": "dawdle; linger",
    "senses": [
      {
        "pos": "verb",
        "definition": "To move or work quickly and energetically; to urge someone to move quickly. It can also mean to trick someone, especially for money."
      },
      {
        "pos": "noun",
        "definition": "Busy, energetic activity or effort; also, a dishonest scheme to get money."
      }
    ]
  },
  {
    "id": 14,
    "word": "Rotund",
    "examples": [
      "The cartoon featured a rotund snowman.",
      "A rotund pumpkin sat on the porch."
    ],
    "note": "Rotund emphasizes roundness. It does not mean strong or muscular. Use body-description words thoughtfully.",
    "syn": "round; plump",
    "contrast": "slender; angular",
    "senses": [
      {
        "pos": "adjective",
        "definition": "Round in shape; plump or rounded in body."
      }
    ]
  },
  {
    "id": 15,
    "word": "Precipice",
    "examples": [
      "The hikers stayed well back from the precipice.",
      "The failing project stood on the precipice of disaster."
    ],
    "note": "Think steep drop and risky edge. A mountain is not automatically a precipice; the shape matters.",
    "syn": "cliff; brink",
    "contrast": "Compare: gentle slope",
    "senses": [
      {
        "pos": "noun",
        "definition": "A very steep cliff or the edge of one; the brink of a dangerous situation."
      }
    ]
  },
  {
    "id": 16,
    "word": "Loiter",
    "examples": [
      "Please do not loiter in the doorway after the show.",
      "The children loitered near the shop while deciding where to go."
    ],
    "note": "Loiter is not simply wait: waiting may have a clear purpose. It suggests hanging around or lingering.",
    "syn": "linger; hang around",
    "contrast": "hurry; depart",
    "senses": [
      {
        "pos": "verb",
        "definition": "To stay around a place without a clear purpose, often longer than expected."
      }
    ]
  },
  {
    "id": 17,
    "word": "Sheer",
    "examples": [
      "They looked up at the sheer cliff.",
      "Sunlight passed through the sheer curtains."
    ],
    "note": "A sheer cliff is steep; sheer fabric is see-through; sheer luck is pure luck. As a verb, sheer can mean turn sharply aside. Do not confuse it with shear (cut).",
    "syn": "steep; transparent; utter",
    "contrast": "sloping; opaque (depending on meaning)",
    "senses": [
      {
        "pos": "adjective",
        "definition": "Almost vertical, as in a cliff; thin and transparent, as in fabric; or complete and absolute, as in sheer luck."
      },
      {
        "pos": "adverb",
        "definition": "Straight up or down, as in a wall that rises sheer from the water."
      },
      {
        "pos": "verb",
        "definition": "To turn or swerve sharply aside, often to avoid something."
      }
    ]
  },
  {
    "id": 18,
    "word": "Glimmer",
    "examples": [
      "A glimmer from the lantern guided us home.",
      "The first correct answer gave him a glimmer of confidence."
    ],
    "note": "A glimmer is faint, while glare is harsh and bright. A glimmer of hope is a small sign of hope, not actual light.",
    "syn": "gleam; faint glow",
    "contrast": "glare (contrasting intensity)",
    "senses": [
      {
        "pos": "noun",
        "definition": "A faint or unsteady light; also, a small sign of a feeling or possibility."
      },
      {
        "pos": "verb",
        "definition": "To shine faintly or unsteadily; or to begin to appear faintly."
      }
    ]
  },
  {
    "id": 19,
    "word": "Jeer",
    "examples": [
      "The coach told the crowd not to jeer at a missed shot.",
      "A jeer from the audience interrupted the speech."
    ],
    "note": "Jeering aims to ridicule or hurt. Jesting can be playful and friendly; they are not exact synonyms.",
    "syn": "taunt; mock",
    "contrast": "cheer; applaud",
    "senses": [
      {
        "pos": "noun",
        "definition": "A rude, mocking remark or shout intended to ridicule someone."
      },
      {
        "pos": "verb",
        "definition": "To make rude, mocking remarks or sounds at someone."
      }
    ]
  },
  {
    "id": 20,
    "word": "Furtive",
    "examples": [
      "She cast a furtive glance at the hidden birthday gift.",
      "The animal made a furtive trip out of its burrow."
    ],
    "note": "Furtive describes concealed behavior. Being quiet is not enough: a quiet librarian is not necessarily furtive.",
    "syn": "sneaky; stealthy",
    "contrast": "open; conspicuous",
    "senses": [
      {
        "pos": "adjective",
        "definition": "Secretive and trying not to be noticed."
      }
    ]
  },
  {
    "id": 21,
    "word": "Vagrant",
    "examples": [
      "In the old story, a vagrant traveled from village to village.",
      "Birdwatchers spotted a vagrant bird far outside its usual range."
    ],
    "note": "This word appears in older writing and can sound judgmental when used about people. Wandering or lacking a home does not imply dishonesty. A vagrant bird is simply outside its usual range.",
    "syn": "wanderer; wandering",
    "contrast": "settled; resident (in context)",
    "senses": [
      {
        "pos": "noun",
        "definition": "A person who wanders without a settled home or regular work. This word can sound judgmental when used about people."
      },
      {
        "pos": "adjective",
        "definition": "Wandering from place to place; for a bird or animal, found outside its usual range."
      }
    ]
  },
  {
    "id": 22,
    "word": "Filch",
    "examples": [
      "The raccoon tried to filch a cracker from the picnic basket.",
      "Someone had filched a pencil from the desk."
    ],
    "note": "Filch means take without permission, not borrow. It suggests a sneaky small theft rather than a forceful robbery.",
    "syn": "pilfer; steal",
    "contrast": "return; give",
    "senses": [
      {
        "pos": "verb",
        "definition": "To steal something, usually something small, secretly."
      }
    ]
  },
  {
    "id": 23,
    "word": "Toxic",
    "examples": [
      "The scientist wore gloves when handling the toxic chemical.",
      "Cruel rumors created a toxic atmosphere in the club."
    ],
    "note": "Toxic describes a harmful property, not an unpleasant smell. Something can be toxic without smelling bad, and bad-smelling without being toxic.",
    "syn": "poisonous; harmful",
    "contrast": "nontoxic; harmless",
    "senses": [
      {
        "pos": "adjective",
        "definition": "Poisonous or able to cause harm; figuratively, deeply harmful."
      }
    ]
  },
  {
    "id": 24,
    "word": "Jest",
    "examples": [
      "Her comment was meant as a jest, not an insult.",
      "He was jesting when he said his backpack weighed a ton."
    ],
    "note": "In jest means jokingly. Contrast with in earnest (seriously). A jest need not be as clever as a witty remark, and need not be cruel like a jeer.",
    "syn": "joke; banter",
    "contrast": "serious statement; speak in earnest",
    "senses": [
      {
        "pos": "noun",
        "definition": "A joke or playful remark."
      },
      {
        "pos": "verb",
        "definition": "To speak or act jokingly rather than seriously."
      }
    ]
  }
];
const TEST_SETS = [
  [
    {
      "id": 0,
      "prompt": "CASCADE : DESCEND :: SPRINT : ____",
      "options": [
        "jump",
        "rest",
        "run",
        "turn",
        "swim"
      ],
      "answer": 2,
      "relation": "Specific action and broader action",
      "explanation": "To cascade is to descend in a flowing or tumbling way. To sprint is to run at top speed.",
      "trap": "Jumping and turning can happen during a race, but neither names the broader action of sprinting."
    },
    {
      "id": 1,
      "prompt": "WHISPER : SPEAK :: ____",
      "options": [
        "nibble : eat",
        "quibble : agree",
        "listen : hear",
        "draw : erase",
        "read : book"
      ],
      "answer": 0,
      "relation": "A particular way of doing something",
      "explanation": "Whispering is speaking very quietly. Nibbling is eating in small bites.",
      "trap": "To quibble means to argue over small details, not to agree. Read : book pairs an action with an object."
    },
    {
      "id": 2,
      "prompt": "WITTY : LAUGHTER :: FRIGHTENING : ____",
      "options": [
        "surprise",
        "noise",
        "darkness",
        "danger",
        "fear"
      ],
      "answer": 4,
      "relation": "A quality and the response it can cause",
      "explanation": "A witty comment can cause laughter. Something frightening can cause fear.",
      "trap": "Danger is something that may cause fear, not the feeling that matches laughter as a response."
    },
    {
      "id": 3,
      "prompt": "EMBER : HEAT :: DRUM : ____",
      "options": [
        "wood",
        "sound",
        "stick",
        "circle",
        "skin"
      ],
      "answer": 1,
      "relation": "Source and what it gives off",
      "explanation": "An ember gives off heat. A drum that is struck gives off sound.",
      "trap": "Wood and skin are possible materials. A stick is a tool used to play the drum."
    },
    {
      "id": 4,
      "prompt": "GLARE : ANGRY :: GRIN : ____",
      "options": [
        "thirsty",
        "sleepy",
        "puzzled",
        "pleased",
        "lonely"
      ],
      "answer": 3,
      "relation": "Expression and feeling",
      "explanation": "A glare can show that someone is angry. A grin can show that someone is pleased.",
      "trap": "Both pairs connect a facial expression with the feeling it commonly shows."
    },
    {
      "id": 5,
      "prompt": "BRAVE : COURAGE :: ____ : STRENGTH",
      "options": [
        "patient",
        "gentle",
        "wealthy",
        "brawny",
        "clever"
      ],
      "answer": 3,
      "relation": "Describing word and matching quality",
      "explanation": "A brave person has courage. A brawny person has physical strength.",
      "trap": "Wealth concerns possessions, and cleverness concerns thinking. Neither means strong muscles."
    },
    {
      "id": 6,
      "prompt": "QUAGMIRE : STUCK :: MAZE : ____",
      "options": [
        "tired",
        "lost",
        "muddy",
        "small",
        "silent"
      ],
      "answer": 1,
      "relation": "Place and a difficulty it can cause",
      "explanation": "Someone in a quagmire may get stuck in soft ground. Someone in a maze may get lost among its many paths.",
      "trap": "A person can become tired in either place, but getting lost is the special difficulty created by a maze."
    },
    {
      "id": 7,
      "prompt": "SUBDUE : CONTROL :: REPAIR : ____",
      "options": [
        "check",
        "break",
        "build",
        "paint",
        "fix"
      ],
      "answer": 4,
      "relation": "Words with similar meanings",
      "explanation": "To subdue is to bring under control. To repair is to fix.",
      "trap": "Checking something may help you find damage, but it does not necessarily repair it."
    },
    {
      "id": 8,
      "prompt": "CAREFUL : AVOID MISTAKES :: ____ : TELL THE TRUTH",
      "options": [
        "honest",
        "crafty",
        "sleepy",
        "shy",
        "busy"
      ],
      "answer": 0,
      "relation": "A quality and the behavior it supports",
      "explanation": "A careful person tries to avoid mistakes. An honest person tries to tell the truth.",
      "trap": "Crafty suggests clever trickery. It does not mean committed to telling the truth."
    },
    {
      "id": 9,
      "prompt": "RUSE : FOOL :: WARNING : ____",
      "options": [
        "entertain",
        "confuse",
        "protect",
        "measure",
        "decorate"
      ],
      "answer": 2,
      "relation": "Something and its intended purpose",
      "explanation": "A ruse is meant to fool someone. A warning is meant to protect someone by pointing out danger.",
      "trap": "A warning might be confusing, but confusion is not its intended purpose."
    },
    {
      "id": 10,
      "prompt": "VANQUISH : OPPONENT :: SOLVE : ____",
      "options": [
        "questioner",
        "answer",
        "victory",
        "helper",
        "puzzle"
      ],
      "answer": 4,
      "relation": "Action and what it acts on",
      "explanation": "You vanquish an opponent. You solve a puzzle.",
      "trap": "An answer is a result of solving, just as victory is a result of defeating someone."
    },
    {
      "id": 11,
      "prompt": "GAUNT : THIN :: SOAKED : ____",
      "options": [
        "clean",
        "cold",
        "wet",
        "heavy",
        "dry"
      ],
      "answer": 2,
      "relation": "Stronger description and basic quality",
      "explanation": "Gaunt describes someone who is very thin, often looking unhealthy. Soaked describes something that is very wet.",
      "trap": "A soaked coat may feel cold or heavy, but soaked specifically describes wetness."
    },
    {
      "id": 12,
      "prompt": "RESIDUE : CLEAN AWAY :: KNOT : ____",
      "options": [
        "untie",
        "tighten",
        "color",
        "weave",
        "measure"
      ],
      "answer": 0,
      "relation": "Something unwanted and an action that removes it",
      "explanation": "You can clean away residue. You can untie a knot.",
      "trap": "Tightening makes a knot firmer. Coloring or measuring it does not undo it."
    },
    {
      "id": 13,
      "prompt": "HUSTLE : QUICKLY :: CREEP : ____",
      "options": [
        "carelessly",
        "loudly",
        "proudly",
        "slowly",
        "suddenly"
      ],
      "answer": 3,
      "relation": "Action and its usual manner",
      "explanation": "To hustle is to move quickly and energetically. To creep is to move slowly and carefully.",
      "trap": "Creeping may be quiet, but loudly is the opposite. The matching answer describes speed."
    },
    {
      "id": 14,
      "prompt": "ROTUND : SHAPE :: NOISY : ____",
      "options": [
        "size",
        "sound",
        "color",
        "taste",
        "weight"
      ],
      "answer": 1,
      "relation": "Describing word and the feature it describes",
      "explanation": "Rotund describes a rounded shape. Noisy describes sound.",
      "trap": "A noisy object can be any size or color. Those features do not explain what noisy means."
    },
    {
      "id": 15,
      "prompt": "PRECIPICE : FALL :: ICY ROAD : ____",
      "options": [
        "swim",
        "skid",
        "climb",
        "melt",
        "shine"
      ],
      "answer": 1,
      "relation": "Dangerous place and a risk there",
      "explanation": "A precipice presents the risk of a fall. An icy road presents the risk that a vehicle will skid.",
      "trap": "Melting happens to ice itself. The matching action is a danger to someone using the place."
    },
    {
      "id": 16,
      "prompt": "LOITER : CLEAR PURPOSE :: GUESS : ____",
      "options": [
        "attempt",
        "answer",
        "thought",
        "choice",
        "certainty"
      ],
      "answer": 4,
      "relation": "Action and something it lacks",
      "explanation": "To loiter is to stay around without a clear purpose. To guess is to answer without certainty.",
      "trap": "A guess is still an answer, a choice, and an attempt. What it lacks is knowing for sure."
    },
    {
      "id": 17,
      "prompt": "SHEER : FABRIC :: SPICY : ____",
      "options": [
        "weather",
        "music",
        "stone",
        "food",
        "paper"
      ],
      "answer": 3,
      "relation": "A quality and the thing it can describe",
      "explanation": "Sheer can describe thin fabric that lets light through. Spicy can describe food with a strong, hot flavor.",
      "trap": "The relationship is a describing word and the kind of thing it fits."
    },
    {
      "id": 18,
      "prompt": "GLIMMER : FAINT :: WHISPER : ____",
      "options": [
        "angry",
        "bright",
        "quiet",
        "short",
        "rough"
      ],
      "answer": 2,
      "relation": "Something and its defining level of strength",
      "explanation": "A glimmer is faint light. A whisper is quiet speech.",
      "trap": "A whisper can be angry or short, but those details are not what makes it a whisper."
    },
    {
      "id": 19,
      "prompt": "JEER : HURT :: SOOTHE : ____",
      "options": [
        "comfort",
        "startle",
        "warn",
        "question",
        "annoy"
      ],
      "answer": 0,
      "relation": "Action and its intended effect",
      "explanation": "To jeer at someone is to mock them, often to hurt their feelings. To soothe someone is to comfort or calm them.",
      "trap": "Warning may help someone avoid danger, but it does not mean calming their distress."
    },
    {
      "id": 20,
      "prompt": "FURTIVE : OPEN :: TIMID : ____",
      "options": [
        "quiet",
        "nervous",
        "bold",
        "young",
        "polite"
      ],
      "answer": 2,
      "relation": "Opposite qualities",
      "explanation": "Furtive behavior is secretive rather than open. Timid means shy or fearful, while bold means willing to act without fear.",
      "trap": "Nervous is close to timid, so it follows the wrong direction."
    },
    {
      "id": 21,
      "prompt": "DROWSY : SLEEPY :: ____",
      "options": [
        "narrow : wide",
        "vagrant : settled",
        "cheerful : sad",
        "silent : quiet",
        "heavy : weight"
      ],
      "answer": 3,
      "relation": "Words with similar meanings",
      "explanation": "Drowsy and sleepy mean nearly the same thing. Silent and quiet also have similar meanings.",
      "trap": "Vagrant describes wandering, while settled means staying in one place. Heavy : weight gives a quality and a feature."
    },
    {
      "id": 22,
      "prompt": "FILCH : STEAL :: GIGGLE : ____",
      "options": [
        "smile",
        "laugh",
        "talk",
        "shout",
        "sing"
      ],
      "answer": 1,
      "relation": "Specific action and broader action",
      "explanation": "To filch is to steal, usually something small and secretly. To giggle is to laugh in a light, repeated way.",
      "trap": "Smiling is related to laughter, but a giggle is a kind of laugh, not just a smile."
    },
    {
      "id": 23,
      "prompt": "POISON : TOXIC :: GLUE : ____",
      "options": [
        "sticky",
        "sweet",
        "sharp",
        "soft",
        "round"
      ],
      "answer": 0,
      "relation": "Thing and its main property",
      "explanation": "Poison is toxic: it can harm the body. Glue is sticky: it holds things together.",
      "trap": "Glue may have different colors or forms, but stickiness is the property that makes it useful as glue."
    },
    {
      "id": 24,
      "prompt": "JEST : JOKE :: ERROR : ____",
      "options": [
        "secret",
        "lesson",
        "question",
        "excuse",
        "mistake"
      ],
      "answer": 4,
      "relation": "Words with similar meanings",
      "explanation": "A jest is a joke. An error is a mistake.",
      "trap": "A mistake can lead to a lesson or an excuse, but those are not other words for the mistake itself."
    }
  ],
  [
    {
      "id": 0,
      "prompt": "CASCADE : WATER :: AVALANCHE : ____",
      "options": [
        "wind",
        "snow",
        "smoke",
        "rain",
        "dust"
      ],
      "answer": 1,
      "relation": "Moving mass and its material",
      "explanation": "A cascade is falling water. A snow avalanche is a large mass of snow moving down a slope.",
      "trap": "Wind may move snow, but wind is not the main material in a snow avalanche."
    },
    {
      "id": 1,
      "prompt": "QUIBBLE : MINOR :: CRISIS : ____",
      "options": [
        "ordinary",
        "silent",
        "funny",
        "serious",
        "brief"
      ],
      "answer": 3,
      "relation": "A problem and how serious it is",
      "explanation": "A quibble is a minor objection about a small detail. A crisis is a serious problem that needs attention.",
      "trap": "Brief tells how long something lasts. A crisis can be brief and still serious."
    },
    {
      "id": 2,
      "prompt": "FEARLESS : BRAVE :: ____",
      "options": [
        "truthful : honest",
        "witty : serious",
        "silent : noisy",
        "simple : difficult",
        "careful : mistake"
      ],
      "answer": 0,
      "relation": "Words with similar meanings",
      "explanation": "Fearless and brave have similar meanings. Truthful and honest do too.",
      "trap": "Witty means cleverly funny, not serious. Careful : mistake names a quality and something it may help avoid."
    },
    {
      "id": 3,
      "prompt": "EMBER : PUT OUT :: STAIN : ____",
      "options": [
        "write down",
        "spread out",
        "fold up",
        "heat up",
        "wash out"
      ],
      "answer": 4,
      "relation": "Thing and an action that removes it",
      "explanation": "You put out an ember so it stops burning. You wash out a stain so it no longer marks the material.",
      "trap": "Spreading a stain makes it larger. Folding the material does not remove the stain."
    },
    {
      "id": 4,
      "prompt": "GLARE : EYES :: WHISTLE : ____",
      "options": [
        "ears",
        "hands",
        "lips",
        "feet",
        "hair"
      ],
      "answer": 2,
      "relation": "Action and body part used",
      "explanation": "You use your eyes to glare at someone. You use your lips to whistle a tune.",
      "trap": "Ears receive sound; they are not what produces a whistle."
    },
    {
      "id": 5,
      "prompt": "BRAWNY : LIFTING :: SHARP : ____",
      "options": [
        "cutting",
        "carrying",
        "folding",
        "painting",
        "measuring"
      ],
      "answer": 0,
      "relation": "Quality that helps with an action",
      "explanation": "Being brawny helps a person lift heavy things. A sharp edge helps a tool cut.",
      "trap": "A tool may be carried or measured, but sharpness does not make those tasks easier."
    },
    {
      "id": 6,
      "prompt": "QUAGMIRE : MUD :: SNOWDRIFT : ____",
      "options": [
        "rain",
        "wind",
        "snow",
        "sand",
        "ice"
      ],
      "answer": 2,
      "relation": "A mass and the material that forms it",
      "explanation": "A quagmire is a deep, soft area of wet muddy ground. A snowdrift is a pile formed from snow blown by the wind.",
      "trap": "Wind builds a snowdrift, but snow is the material in the pile. Match material, not cause."
    },
    {
      "id": 7,
      "prompt": "SUBDUE : ANGER :: DIM : ____",
      "options": [
        "darkness",
        "light",
        "switch",
        "window",
        "shadow"
      ],
      "answer": 1,
      "relation": "Make something less strong",
      "explanation": "To subdue anger is to bring it under control and reduce its force. To dim light is to make it less bright.",
      "trap": "A switch may be used to dim a lamp, but it is a tool, not what is reduced."
    },
    {
      "id": 8,
      "prompt": "CRAFTY : TRICK :: GENEROUS : ____",
      "options": [
        "rule",
        "prize",
        "request",
        "loss",
        "gift"
      ],
      "answer": 4,
      "relation": "Personal quality and an action or thing that shows it",
      "explanation": "A clever trick can show that someone is crafty. Giving a gift can show that someone is generous.",
      "trap": "Receiving a prize does not show generosity. The relationship concerns something a person does or gives."
    },
    {
      "id": 9,
      "prompt": "MISTAKE : ERROR :: TRICK : ____",
      "options": [
        "schedule",
        "recipe",
        "receipt",
        "ruse",
        "ruler"
      ],
      "answer": 3,
      "relation": "Words with similar meanings",
      "explanation": "A mistake is an error. A trick meant to fool someone is a ruse.",
      "trap": "A recipe gives cooking instructions and a receipt records a purchase. Neither means a trick."
    },
    {
      "id": 10,
      "prompt": "VANQUISH : DEFEAT :: SHATTER : ____",
      "options": [
        "drop",
        "hold",
        "shine",
        "break",
        "bend"
      ],
      "answer": 3,
      "relation": "Stronger action and broader action",
      "explanation": "To vanquish is to defeat completely. To shatter is to break into many pieces.",
      "trap": "Dropping something may cause it to shatter, but dropping is a cause rather than the broader action."
    },
    {
      "id": 11,
      "prompt": "GAUNT : PLUMP :: EMPTY : ____",
      "options": [
        "large",
        "shallow",
        "open",
        "clean",
        "full"
      ],
      "answer": 4,
      "relation": "Opposite qualities",
      "explanation": "Gaunt describes a very thin body, while plump describes a fuller, rounded body. Empty and full are also opposites.",
      "trap": "A large box can still be empty. Size is a different feature from how much it contains."
    },
    {
      "id": 12,
      "prompt": "RESIDUE : LEFTOVER :: FRAGMENT : ____",
      "options": [
        "pattern",
        "whole",
        "piece",
        "surface",
        "mixture"
      ],
      "answer": 2,
      "relation": "Word and a simpler meaning",
      "explanation": "Residue is material left over. A fragment is a piece of something.",
      "trap": "Whole is the opposite direction: a fragment is only part of a whole."
    },
    {
      "id": 13,
      "prompt": "SAVE : SPEND :: ____",
      "options": [
        "freeze : melt",
        "hustle : hurry",
        "shout : yell",
        "whisper : speak",
        "float : water"
      ],
      "answer": 0,
      "relation": "Actions with opposite meanings",
      "explanation": "Saving money and spending it move in opposite directions. Freezing and melting also move in opposite directions.",
      "trap": "Hustle and hurry have similar meanings, not opposite meanings. Whispering is a way of speaking."
    },
    {
      "id": 14,
      "prompt": "ROTUND : ROUND :: HOLLOW : ____",
      "options": [
        "flat on top",
        "empty inside",
        "rough outside",
        "sharp at one end",
        "heavy all over"
      ],
      "answer": 1,
      "relation": "Describing word and its meaning",
      "explanation": "Rotund means round in shape. Hollow means having empty space inside.",
      "trap": "Hollow describes the inside of an object, not how its outer surface feels."
    },
    {
      "id": 15,
      "prompt": "PRECIPICE : CLIFF :: BOULDER : ____",
      "options": [
        "pebble",
        "hill",
        "sand",
        "cave",
        "rock"
      ],
      "answer": 4,
      "relation": "A particular kind and its larger group",
      "explanation": "A precipice is a very steep cliff. A boulder is a large rock.",
      "trap": "A pebble is a small rock, not the larger group that includes a boulder. A hill is a land shape rather than a single rock."
    },
    {
      "id": 16,
      "prompt": "LOITER : REMAIN :: FLEE : ____",
      "options": [
        "hide",
        "leave",
        "follow",
        "rest",
        "wait"
      ],
      "answer": 1,
      "relation": "Specific action and broader action",
      "explanation": "To loiter is to remain around without a clear purpose. To flee is to leave quickly to escape danger.",
      "trap": "Hiding may happen after fleeing, but fleeing itself means moving away."
    },
    {
      "id": 17,
      "prompt": "MILD : GENTLE :: ____ : COMPLETE",
      "options": [
        "partial",
        "thin",
        "slight",
        "sheer",
        "plain"
      ],
      "answer": 3,
      "relation": "Words with similar meanings in context",
      "explanation": "Mild can mean gentle. Sheer can mean complete or absolute, as in sheer nonsense.",
      "trap": "Partial means only some, which is the opposite of complete. Sheer has several meanings; use the one that fits this pair."
    },
    {
      "id": 18,
      "prompt": "GLIMMER : LIGHT :: DROP : ____",
      "options": [
        "liquid",
        "bottle",
        "cloud",
        "thirst",
        "ice"
      ],
      "answer": 0,
      "relation": "A small amount and what it is an amount of",
      "explanation": "A glimmer is a small amount of light. A drop is a small amount of liquid.",
      "trap": "A bottle is a container for liquid, not the material that makes up a drop."
    },
    {
      "id": 19,
      "prompt": "JEER : PRAISE :: DAMAGE : ____",
      "options": [
        "break",
        "harm",
        "repair",
        "destroy",
        "scratch"
      ],
      "answer": 2,
      "relation": "Actions that work in opposite directions",
      "explanation": "To jeer at someone is to mock rather than praise them. To damage something is the opposite of repairing it.",
      "trap": "Harm, break, destroy, and scratch all point toward damage instead of reversing it."
    },
    {
      "id": 20,
      "prompt": "FURTIVE : HIDE :: CURIOUS : ____",
      "options": [
        "sleep",
        "refuse",
        "explore",
        "forget",
        "obey"
      ],
      "answer": 2,
      "relation": "A quality and an action it encourages",
      "explanation": "A furtive person tries to hide what they are doing. A curious person wants to explore and find things out.",
      "trap": "Everyone needs sleep sometimes, but sleeping does not show a wish to learn. Match the action linked to the quality."
    },
    {
      "id": 21,
      "prompt": "VAGRANT : WANDERING :: RESIDENT : ____",
      "options": [
        "settled",
        "lost",
        "wealthy",
        "dishonest",
        "young"
      ],
      "answer": 0,
      "relation": "Person and a feature of where they live",
      "explanation": "A vagrant is a wandering person without a settled home. A resident is someone who lives in a particular place.",
      "trap": "These words concern where someone lives, not their age, wealth, or honesty."
    },
    {
      "id": 22,
      "prompt": "FILCH : HONESTY :: BETRAY : ____",
      "options": [
        "speed",
        "surprise",
        "memory",
        "success",
        "loyalty"
      ],
      "answer": 4,
      "relation": "An action that breaks a value",
      "explanation": "To filch is to steal, which goes against honesty. To betray someone is to break their trust, which goes against loyalty.",
      "trap": "Betrayal can be surprising, but surprise is an effect. Loyalty is the value being broken."
    },
    {
      "id": 23,
      "prompt": "TOXIC : POISONOUS :: FRAGILE : ____",
      "options": [
        "easy to carry",
        "easily broken",
        "hard to find",
        "slow to grow",
        "ready to eat"
      ],
      "answer": 1,
      "relation": "Word and its meaning",
      "explanation": "Toxic means poisonous or harmful. Fragile means easily broken.",
      "trap": "Something light may be easy to carry without being easy to break. Keep the exact meaning."
    },
    {
      "id": 24,
      "prompt": "PROMISE : COMMITMENT :: ____",
      "options": [
        "greeting : goodbye",
        "jest : threat",
        "question : answer",
        "apology : regret",
        "story : paper"
      ],
      "answer": 3,
      "relation": "Expression and the meaning it communicates",
      "explanation": "A promise communicates a commitment to do something. An apology communicates regret for something wrong.",
      "trap": "A jest is a joke, not a threat. A question asks for an answer rather than communicating one."
    }
  ]
];
