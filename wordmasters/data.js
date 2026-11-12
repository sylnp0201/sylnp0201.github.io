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
const QUESTIONS = [
  {
    "id": 0,
    "prompt": "CASCADE : DESCEND :: SPRINT : ____",
    "options": [
      "read",
      "swim",
      "run",
      "sleep",
      "grow"
    ],
    "answer": 2,
    "relation": "Specific action and broader action",
    "explanation": "To cascade is to descend in a flowing or tumbling way. To sprint is to run at full speed.",
    "trap": "The second pair must name the broader action, not a possible location or result."
  },
  {
    "id": 1,
    "prompt": "PRUNE : BRANCH :: ____",
    "options": [
      "delete : sentence",
      "plant : seed",
      "quibble : detail",
      "admire : flower",
      "count : leaf"
    ],
    "answer": 0,
    "relation": "Remove something from a larger whole",
    "explanation": "To prune a branch is to cut it away from a plant. To delete a sentence is to remove it from a piece of writing.",
    "trap": "To quibble over a detail is to dispute it, not remove it. Planting adds something instead of taking it away."
  },
  {
    "id": 2,
    "prompt": "WITTY : REMARK :: MELODIOUS : ____",
    "options": [
      "portrait",
      "perfume",
      "fabric",
      "recipe",
      "tune"
    ],
    "answer": 4,
    "relation": "A quality and what can have it",
    "explanation": "A remark can be witty, or cleverly funny. A tune can be melodious, or pleasant to hear.",
    "trap": "Match the kind of thing that can have the quality. A portrait is seen rather than heard."
  },
  {
    "id": 3,
    "prompt": "EMBER : HEAT :: BELL : ____",
    "options": [
      "metal",
      "sound",
      "rope",
      "tower",
      "silence"
    ],
    "answer": 1,
    "relation": "Source and what it gives off",
    "explanation": "An ember gives off heat. A ringing bell gives off sound.",
    "trap": "Metal is what a bell may be made of; a tower is where it may hang. Neither is what it produces."
  },
  {
    "id": 4,
    "prompt": "GLARE : DISPLEASURE :: BLUSH : ____",
    "options": [
      "temperature",
      "curiosity",
      "exhaustion",
      "embarrassment",
      "agreement"
    ],
    "answer": 3,
    "relation": "An outward sign and the feeling it can express",
    "explanation": "An angry glare can express displeasure. A blush can reveal embarrassment.",
    "trap": "A blush can have several causes, but embarrassment is the feeling that best matches this expression-to-emotion relationship."
  },
  {
    "id": 5,
    "prompt": "NIMBLE : AGILITY :: ____ : STRENGTH",
    "options": [
      "patient",
      "fragile",
      "solemn",
      "brawny",
      "wealthy"
    ],
    "answer": 3,
    "relation": "Adjective and the quality it implies",
    "explanation": "Someone nimble has agility, or the ability to move easily and quickly. Someone brawny has physical strength.",
    "trap": "Wealth concerns possessions, and patience concerns waiting. Neither describes the physical quality asked for."
  },
  {
    "id": 6,
    "prompt": "QUAGMIRE : MOVEMENT :: MUZZLE : ____",
    "options": [
      "fur",
      "biting",
      "scent",
      "feeding bowl",
      "leash"
    ],
    "answer": 1,
    "relation": "Something that restricts an activity",
    "explanation": "A quagmire can hinder movement by trapping feet in mud. A muzzle can prevent an animal from biting.",
    "trap": "Choose the activity that is restricted, not another object associated with the animal."
  },
  {
    "id": 7,
    "prompt": "SUBDUE : UPRISING :: EXTINGUISH : ____",
    "options": [
      "smoke",
      "water",
      "matchbox",
      "darkness",
      "blaze"
    ],
    "answer": 4,
    "relation": "Bring an active disturbance to an end",
    "explanation": "To subdue an uprising is to bring a rebellion under control. To extinguish a blaze is to put out a fire.",
    "trap": "Water may be a means of extinguishing, while smoke may be a result of burning. The blank names what is stopped."
  },
  {
    "id": 8,
    "prompt": "GENEROUS : SHARING :: ____ : WAITING",
    "options": [
      "patient",
      "impatient",
      "careless",
      "jealous",
      "crafty"
    ],
    "answer": 0,
    "relation": "A quality that supports an action",
    "explanation": "A generous person is willing to share. A patient person is willing to wait without becoming upset.",
    "trap": "Impatient reverses the relationship. Being crafty concerns clever trickery, not tolerance for waiting."
  },
  {
    "id": 9,
    "prompt": "FABLE : LESSON :: ____ : DECEPTION",
    "options": [
      "receipt",
      "recipe",
      "ruse",
      "greeting",
      "inventory"
    ],
    "answer": 2,
    "relation": "A creation and its intended purpose",
    "explanation": "A fable is a story intended to teach a lesson. A ruse is a plan intended to produce deception, or a false belief.",
    "trap": "A receipt records a purchase, and an inventory lists items. Neither is designed to mislead."
  },
  {
    "id": 10,
    "prompt": "VANQUISH : VICTORY :: ESCAPE : ____",
    "options": [
      "pursuit",
      "capture",
      "barrier",
      "entrance",
      "freedom"
    ],
    "answer": 4,
    "relation": "Successful action and its result",
    "explanation": "To vanquish is to achieve victory over someone. To escape is to gain freedom from confinement or danger.",
    "trap": "Pursuit may follow an escape, but it is not the successful result that defines escaping. Capture is the opposite result."
  },
  {
    "id": 11,
    "prompt": "FAMINE : GAUNT :: DROUGHT : ____",
    "options": [
      "flooded",
      "crowded",
      "parched",
      "frozen",
      "fertile"
    ],
    "answer": 2,
    "relation": "Cause and a resulting condition",
    "explanation": "A famine can leave people gaunt from severe lack of food. A drought can leave land parched, meaning extremely dry.",
    "trap": "Fertile means able to support growth. Flooded is the opposite of the dry condition caused by drought."
  },
  {
    "id": 12,
    "prompt": "RESIDUE : CLEANING :: WRINKLES : ____",
    "options": [
      "ironing",
      "weaving",
      "dyeing",
      "folding",
      "measuring"
    ],
    "answer": 0,
    "relation": "Unwanted condition and a way to remove it",
    "explanation": "Cleaning can remove unwanted residue from a surface. Ironing can remove wrinkles from fabric.",
    "trap": "Folding may create creases rather than smooth them out. Weaving makes fabric instead of removing wrinkles."
  },
  {
    "id": 13,
    "prompt": "WHITTLE : WOOD :: ____",
    "options": [
      "hustle : hurry",
      "paint : brush",
      "polish : shine",
      "carve : stone",
      "clay : sculpt"
    ],
    "answer": 3,
    "relation": "Shape a material by cutting pieces away",
    "explanation": "To whittle is to shape wood by cutting small pieces away. To carve stone is also to shape a material by cutting it.",
    "trap": "Polish : shine gives an action and its result. Clay : sculpt reverses the material-and-action order."
  },
  {
    "id": 14,
    "prompt": "ROTUND : SPHERE :: CUBICAL : ____",
    "options": [
      "circle",
      "cube",
      "cone",
      "triangle",
      "pyramid"
    ],
    "answer": 1,
    "relation": "Descriptive shape word and its model",
    "explanation": "Rotund means rounded, like a sphere. Cubical means shaped like a cube.",
    "trap": "A circle is flat, and a pyramid has a different solid shape. Match the precise shape named by the adjective."
  },
  {
    "id": 15,
    "prompt": "PRECIPICE : FALL :: WHIRLPOOL : ____",
    "options": [
      "float",
      "drown",
      "climb",
      "sail",
      "freeze"
    ],
    "answer": 1,
    "relation": "Hazard and the danger it presents",
    "explanation": "A precipice presents the danger of a fall. A whirlpool presents the danger of drowning.",
    "trap": "Floating or sailing can happen on water, but neither is the dangerous outcome that matches falling from a high edge."
  },
  {
    "id": 16,
    "prompt": "LOITER : PURPOSELESSLY :: STRUT : ____",
    "options": [
      "anxiously",
      "silently",
      "wearily",
      "accidentally",
      "proudly"
    ],
    "answer": 4,
    "relation": "Action and its characteristic manner",
    "explanation": "To loiter is to remain around without a clear purpose. To strut is to walk with a proud, self-important manner.",
    "trap": "A person may walk silently or anxiously, but those qualities do not define strutting."
  },
  {
    "id": 17,
    "prompt": "POROUS : WATER :: ____ : LIGHT",
    "options": [
      "luminous",
      "fragrant",
      "heavy",
      "sheer",
      "reflective"
    ],
    "answer": 3,
    "relation": "A property that allows something to pass through",
    "explanation": "Porous material lets water pass through its tiny spaces. Sheer material lets light pass through its thin fabric.",
    "trap": "Luminous means giving off light; reflective means bouncing light back. Neither means letting it pass through."
  },
  {
    "id": 18,
    "prompt": "GLIMMER : BLAZE :: DRIZZLE : ____",
    "options": [
      "mist",
      "puddle",
      "downpour",
      "cloud",
      "umbrella"
    ],
    "answer": 2,
    "relation": "Increase in intensity",
    "explanation": "A glimmer is faint light; a blaze is a strong, bright light. A drizzle is light rain; a downpour is heavy rain.",
    "trap": "A puddle is a result of rain, and an umbrella is protection from it. The answer needs a stronger version of the same phenomenon."
  },
  {
    "id": 19,
    "prompt": "JEER : DERISION :: SOB : ____",
    "options": [
      "sorrow",
      "volume",
      "breath",
      "story",
      "audience"
    ],
    "answer": 0,
    "relation": "Expression and the emotion or attitude behind it",
    "explanation": "A jeer expresses derision, meaning scornful mockery. A sob expresses sorrow.",
    "trap": "Volume describes loudness, not an emotion. An audience is a possible listener, not the feeling expressed."
  },
  {
    "id": 20,
    "prompt": "FURTIVE : SECRECY :: CANDID : ____",
    "options": [
      "caution",
      "ceremony",
      "openness",
      "speed",
      "uncertainty"
    ],
    "answer": 2,
    "relation": "A quality and the idea it expresses",
    "explanation": "Furtive behavior suggests secrecy. Candid speech is frank and expresses openness.",
    "trap": "Caution may lead someone to speak carefully, but it does not mean speaking frankly and honestly."
  },
  {
    "id": 21,
    "prompt": "ANCHOR : SHIP :: ____",
    "options": [
      "cloud : rain",
      "vagrant : resident",
      "sail : breeze",
      "root : tree",
      "harbor : coast"
    ],
    "answer": 3,
    "relation": "Part or device that holds something in place",
    "explanation": "An anchor holds a ship in place. A root holds a tree in place in the ground.",
    "trap": "Cloud : rain is a source relationship. Vagrant : resident compares wandering and settled ways of living; neither holds the other in place."
  },
  {
    "id": 22,
    "prompt": "FILCH : HONESTY :: BETRAY : ____",
    "options": [
      "surprise",
      "loyalty",
      "secrecy",
      "memory",
      "success"
    ],
    "answer": 1,
    "relation": "An action that violates a value",
    "explanation": "To filch is to take something dishonestly, violating honesty. To betray someone is to violate loyalty.",
    "trap": "Betrayal may be secret or surprising, but those are possible circumstances, not the value being broken."
  },
  {
    "id": 23,
    "prompt": "VENOM : TOXIC :: GLUE : ____",
    "options": [
      "adhesive",
      "flexible",
      "decorative",
      "colorful",
      "fragile"
    ],
    "answer": 0,
    "relation": "Substance and its defining property",
    "explanation": "Venom is toxic: it can poison. Glue is adhesive: it can stick things together.",
    "trap": "Glue can vary in color and flexibility, but adhesion is the property that makes it glue."
  },
  {
    "id": 24,
    "prompt": "LAMENT : GRIEF :: ____ : AMUSEMENT",
    "options": [
      "warning",
      "command",
      "report",
      "oath",
      "jest"
    ],
    "answer": 4,
    "relation": "A kind of expression and the feeling it conveys",
    "explanation": "A lament expresses grief or sadness. A jest is a playful expression of amusement.",
    "trap": "A warning expresses concern about danger, and an oath makes a serious promise. Neither is meant as playful humor."
  }
];
