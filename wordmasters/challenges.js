const CHALLENGE_BANK = [
  [
    {
      "id": 7,
      "target": "Subdue",
      "prompt": "ANGER : SUBDUE :: ____",
      "options": [
        "music : perform",
        "hunger : cause",
        "problem : create",
        "lamp : brighten",
        "pain : ease"
      ],
      "answer": 4,
      "relation": "Something unpleasant and an action that reduces it",
      "explanation": "To subdue anger is to bring it under control. To ease pain is to make it less strong. Both pairs begin with something unpleasant and end with an action that reduces it.",
      "trap": "Causing hunger or creating a problem makes trouble rather than reducing it. Performing music is an action involving music, but it does not mean reducing it."
    },
    {
      "id": 9,
      "target": "Ruse",
      "prompt": "RUSE : PLAN :: ____",
      "options": [
        "map : journey",
        "truth : fact",
        "lie : statement",
        "game : rule",
        "promise : trust"
      ],
      "answer": 2,
      "relation": "A dishonest kind and its broader group",
      "explanation": "A ruse is a plan made to fool someone. A lie is a statement made to fool someone. In both pairs, the first item is a dishonest kind of the second.",
      "trap": "A map can guide a journey, but it is not a kind of journey. Truth and fact have similar meanings; their relationship does not include dishonesty."
    },
    {
      "id": 12,
      "target": "Residue",
      "prompt": "RESIDUE : REMOVAL :: ____",
      "options": [
        "ash : burning",
        "seed : planting",
        "flour : baking",
        "hole : filling",
        "ice : melting"
      ],
      "answer": 0,
      "relation": "What remains after a process",
      "explanation": "Residue is material left after the rest is removed. Ash is material left after something burns. Each pair puts the leftover material first and the process that leaves it behind second.",
      "trap": "Flour is an ingredient used in baking, not a leftover. Ice changes into water during melting, and a hole disappears when it is filled. Look for what stays behind, not what the process uses or changes."
    },
    {
      "id": 20,
      "target": "Furtive",
      "prompt": "FURTIVE : NOTICE :: ____",
      "options": [
        "hungry : food",
        "patient : waiting",
        "careful : error",
        "polite : manners",
        "swift : speed"
      ],
      "answer": 2,
      "relation": "A quality and what it helps someone avoid",
      "explanation": "Someone furtive tries to avoid notice. Someone careful tries to avoid an error. The second word in each pair names something the person wants to prevent.",
      "trap": "A hungry person wants food instead of avoiding it. A patient person can tolerate waiting; patience does not mean trying to prevent waiting."
    }
  ],
  [
    {
      "id": 3,
      "target": "Ember",
      "prompt": "EMBER : BLAZE :: ____",
      "options": [
        "root : tree",
        "wave : sea",
        "dust : wind",
        "bell : ring",
        "echo : shout"
      ],
      "answer": 4,
      "relation": "A lingering trace of something stronger",
      "explanation": "An ember can remain glowing after a blaze dies down. An echo can still be heard after the original shout stops. Each first item is a weaker trace that lingers after the second.",
      "trap": "A root is a part of a tree, just as a wave is part of the sea. Neither pair describes a weaker trace that continues after a stronger event has ended. A bell makes a ring; that pair puts the source first."
    },
    {
      "id": 10,
      "target": "Vanquish",
      "prompt": "VANQUISH : COMPETE :: ____",
      "options": [
        "race : win",
        "study : read",
        "ask : reply",
        "find : search",
        "rest : sleep"
      ],
      "answer": 3,
      "relation": "A successful result and the effort aimed at it",
      "explanation": "Someone who competes against an opponent may succeed by vanquishing that opponent. Someone who searches for a lost object may succeed by finding it. The success comes first in each pair; the effort comes second.",
      "trap": "Race : win reverses the order: effort comes before success. Asking and replying are connected actions, but replying is not an effort to ask."
    },
    {
      "id": 18,
      "target": "Glimmer",
      "prompt": "GLIMMER : DARKNESS :: ____",
      "options": [
        "whisper : silence",
        "shout : noise",
        "cloud : shade",
        "flood : rain",
        "shadow : sunlight"
      ],
      "answer": 0,
      "relation": "A small sign that breaks an absence",
      "explanation": "A glimmer supplies a little light where there is darkness. A whisper supplies a little sound where there is silence. Both introduce a small amount of something that was absent.",
      "trap": "A shout adds to noise that is already present. A shadow reduces sunlight, while a glimmer adds light. Match both the direction of change and the small amount."
    },
    {
      "id": 23,
      "target": "Toxic",
      "prompt": "POISONING : TOXIC :: ____",
      "options": [
        "sharp : cutting",
        "falling : slippery",
        "freezing : warm",
        "cutting : blunt",
        "dryness : wet"
      ],
      "answer": 1,
      "relation": "A harmful result and a quality that can cause it",
      "explanation": "Something toxic can cause poisoning. Something slippery can cause falling. Each pair puts the possible harmful result first and the quality that helps cause it second.",
      "trap": "Sharp : cutting reverses the order by putting the quality first. A blunt edge makes cutting harder; it does not help cause it. Warmth works against freezing."
    }
  ]
]
;
