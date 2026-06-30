// Darija30 lesson data — D73-A media cleanup baseline.
// Rule: keep only approved/referenced situational media assets in runtime. Missing audio/image/video slots remain placeholders for the next production phases.
window.DARIJA30_LESSONS = [
  {
    "id": "lesson-001",
    "day": 1,
    "week": 1,
    "title": "Taxi Survival",
    "situation": "You just arrived in Morocco and need to move around by taxi without panic.",
    "method": "Hear the phrase, say it, then understand the Moroccan taxi situation.",
    "isFree": true,
    "phrases": [
      {
        "id": "taxi-001",
        "scenario": "You are sitting in a taxi in Marrakech or Casablanca.",
        "goal": "Tell the driver you want to go to your hotel.",
        "english": "I want to go to the hotel.",
        "friendlyLatin": "bghit nmshi l-otel",
        "moroccanChat": "bghit nmshi l'otel",
        "arabic": "بغيت نمشي للأوطيل",
        "showArabicByDefault": false,
        "literal": "I want to go to the hotel.",
        "meaning": "I want to go to the hotel.",
        "intent": "A short, natural taxi phrase. It sounds practical, not formal.",
        "cultureNote": "In Moroccan taxis, short direct phrases are normal. Add “aafak” if you want to sound more polite.",
        "memoryHook": "“bghit” means “I want.” Reuse it with many needs: bghit qahwa = I want coffee; bghit l-ma = I want water.",
        "audioNormal": "assets/audio/day01/taxi-001-normal.mp3",
        "audioSlow": "assets/audio/day01/taxi-001-slow.mp3",
        "sceneVideo": "assets/video/day01/taxi-001-scene.mp4",
        "scenePoster": "assets/images/video-posters/taxi-001-scene.jpg",
        "dialogueLines": [
          {
            "speaker": "Driver",
            "friendlyLatin": "fin bghiti tmshi?",
            "english": "Where do you want to go?",
            "isCore": false
          },
          {
            "speaker": "Traveler",
            "friendlyLatin": "bghit nmshi l-otel",
            "english": "I want to go to the hotel.",
            "isCore": true
          }
        ],
        "sceneVisual": "assets/images/lesson-scenes/day01-taxi-001-bghit-nmshi-l-otel-scene.webp",
        "sceneVisualAlt": "Day 1 Taxi Survival: tourist tells the driver he wants to go to the hotel.",
        "sceneCaption": "Day 1 visual cue approved for the independent “Do you remember?” practice page.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "taxi-002",
        "scenario": "You are close to your destination.",
        "goal": "Ask the driver to stop here.",
        "english": "Stop here, please.",
        "friendlyLatin": "wqef hna aafak",
        "moroccanChat": "w9ef hna 3afak",
        "arabic": "وقف هنا عافاك",
        "showArabicByDefault": false,
        "literal": "Stop here please.",
        "meaning": "Please stop here.",
        "intent": "Polite and clear. Useful in taxis and buses.",
        "cultureNote": "“aafak” softens direct commands. English speakers should use it often because it makes requests feel respectful.",
        "memoryHook": "“hna” = here. Use it when you want the taxi to stop at this exact place.",
        "audioNormal": "assets/audio/day01/taxi-002-normal.mp3",
        "audioSlow": "assets/audio/day01/taxi-002-slow.mp3",
        "sceneVideo": "assets/video/day01/taxi-002-scene.mp4",
        "scenePoster": "assets/images/video-posters/taxi-002-scene.jpg",
        "dialogueLines": [
          {
            "speaker": "Traveler",
            "friendlyLatin": "wqef hna aafak",
            "english": "Stop here, please.",
            "isCore": true
          }
        ],
        "sceneVisual": "assets/images/lesson-scenes/day01-taxi-002-weqef-hna-aafak-scene.webp",
        "sceneVisualAlt": "Day 1 Taxi Survival: tourist asks the driver to stop here.",
        "sceneCaption": "Watch the taxi stop situation before repeating the phrase.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "taxi-003",
        "scenario": "The driver asks where exactly to go.",
        "goal": "Tell the driver to go straight.",
        "english": "Go straight, please.",
        "friendlyLatin": "sir nishan aafak",
        "moroccanChat": "sir nishan 3afak",
        "arabic": "سير نيشان عافاك",
        "showArabicByDefault": false,
        "literal": "Go straight please.",
        "meaning": "Please go straight.",
        "intent": "Simple direction language. Direct but polite.",
        "cultureNote": "“nishan” is a very useful street-direction word in Morocco. Use your hand gesture too if needed.",
        "memoryHook": "“sir” = go. “nishan” = straight.",
        "audioNormal": "assets/audio/day01/taxi-003-normal.mp3",
        "audioSlow": "assets/audio/day01/taxi-003-slow.mp3",
        "sceneVideo": "assets/video/day01/taxi-003-scene.mp4",
        "scenePoster": "assets/images/video-posters/taxi-003-scene.jpg",
        "dialogueLines": [
          {
            "speaker": "Traveler",
            "friendlyLatin": "sir nishan aafak",
            "english": "Go straight, please.",
            "isCore": true
          }
        ],
        "sceneVisual": "assets/images/lesson-scenes/day01-taxi-003-sir-nishan-aafak-scene.webp",
        "sceneVisualAlt": "Day 1 Taxi Survival: tourist tells the driver to go straight.",
        "sceneCaption": "Watch the taxi go-straight situation before repeating the phrase.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "taxi-004",
        "scenario": "You need the driver to turn right.",
        "goal": "Give a simple right-turn instruction.",
        "english": "Turn right, please.",
        "friendlyLatin": "dur l-limen aafak",
        "moroccanChat": "dur l-limen 3afak",
        "arabic": "دور لليمن عافاك",
        "showArabicByDefault": false,
        "literal": "Turn to the right please.",
        "meaning": "Please turn right.",
        "intent": "A direct navigation phrase. Use it when the driver is close to your destination.",
        "cultureNote": "Moroccans often combine words with gestures. Pointing right while saying this makes it clearer.",
        "memoryHook": "“limen” = right. Later you will use the same pattern with left: dur l-liser.",
        "audioNormal": "assets/audio/day01/taxi-004-normal.mp3",
        "audioSlow": "assets/audio/day01/taxi-004-slow.mp3",
        "sceneVideo": "assets/video/day01/taxi-004-scene.mp4",
        "scenePoster": "assets/images/video-posters/taxi-004-scene.jpg",
        "sceneVisual": "assets/images/lesson-scenes/day01-taxi-004-dor-l-limn-aafak-scene.webp",
        "sceneVisualAlt": "Day 1 Taxi Survival: tourist tells the driver to turn right.",
        "sceneCaption": "Day 1 visual cue approved for the independent “Do you remember?” practice page.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "taxi-005",
        "scenario": "The taxi has stopped near the riad or hotel entrance.",
        "goal": "Confirm that this place is good.",
        "english": "Here is good.",
        "friendlyLatin": "hna mezian",
        "moroccanChat": "hna mezian",
        "arabic": "هنا مزيان",
        "showArabicByDefault": false,
        "literal": "Here is good.",
        "meaning": "Here is good.",
        "intent": "A short natural taxi phrase for confirming that the driver can stop at this place.",
        "cultureNote": "When you arrive near your destination, a short phrase with a smile is natural. You can also add “aafak” if you want to sound softer.",
        "memoryHook": "“hna” means “here”; “mezian” means “good.” Together: “hna mezian” = here is good.",
        "audioNormal": "assets/audio/day01/taxi-005-hna-mezian-normal.mp3",
        "audioSlow": "assets/audio/day01/taxi-005-hna-mezian-slow.mp3",
        "sceneVideo": "assets/video/day01/taxi-005-scene.mp4",
        "scenePoster": "assets/images/video-posters/taxi-005-scene.jpg",
        "sceneVisual": "assets/images/lesson-scenes/day01-taxi-005-hna-mezian-scene.webp",
        "sceneVisualAlt": "Day 1 Taxi Survival: tourist confirms that this place is good.",
        "sceneCaption": "Day 1 visual cue approved for the independent “Do you remember?” practice page.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ],
    "quiz": [
      {
        "id": "taxi-q1",
        "question": "What does “bghit” mean?",
        "options": [
          "I want",
          "I know",
          "I have"
        ],
        "answer": "I want"
      },
      {
        "id": "taxi-q2",
        "question": "What makes a request sound more polite?",
        "options": [
          "aafak",
          "l-otel",
          "hna"
        ],
        "answer": "aafak"
      },
      {
        "id": "taxi-q3",
        "question": "Which phrase means “Go straight, please”?",
        "options": [
          "sir nishan aafak",
          "hna mezian",
          "bghit l-ma"
        ],
        "answer": "sir nishan aafak"
      }
    ],
    "bonusPhrases": [
      {
        "friendlyLatin": "hna wash qreb?",
        "meaning": "Is it near?"
      },
      {
        "friendlyLatin": "shhal ghadi takhod?",
        "meaning": "How much will you take?"
      },
      {
        "friendlyLatin": "dir l-compteur aafak",
        "meaning": "Turn on the meter, please."
      }
    ],
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "bghit nmshi l-otel",
        "meaning": "I want to go to the hotel.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "wqef hna aafak",
        "meaning": "Please stop here.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "sir nishan aafak",
        "meaning": "Please go straight.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "dur l-limen aafak",
        "meaning": "Please turn right.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "hna mezian",
        "meaning": "Here is good.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "unlockBenefit": "This free lesson already shows the full Darija30 method."
  },
  {
    "id": "lesson-002",
    "day": 2,
    "week": 1,
    "title": "Cafe Culture",
    "situation": "You are in a Moroccan café and want to order clearly without needing Arabic letters.",
    "method": "Learn café phrases as sound patterns, then understand politeness and Moroccan habits.",
    "isFree": true,
    "phrases": [
      {
        "id": "cafe-001",
        "scenario": "You are ordering at a café.",
        "goal": "Ask for black coffee politely.",
        "english": "Black coffee, please.",
        "friendlyLatin": "qahwa kahla aafak",
        "moroccanChat": "9ahwa ka7la 3afak",
        "arabic": "قهوة كحلة عافاك",
        "showArabicByDefault": false,
        "literal": "Black coffee please.",
        "meaning": "Black coffee, please.",
        "intent": "A simple café order. Clear and polite.",
        "cultureNote": "Moroccan cafés are social places. Saying “aafak” is a small politeness marker that helps you sound respectful.",
        "memoryHook": "“qahwa” = coffee. “kahla” = black. “aafak” = please.",
        "audioNormal": "assets/audio/day02/cafe-001-normal.mp3",
        "audioSlow": "assets/audio/day02/cafe-001-slow.mp3",
        "sceneVideo": "assets/video/day02/cafe-001-scene.mp4",
        "scenePoster": "assets/images/video-posters/cafe-001-scene.jpg",
        "dialogueLines": [
          {
            "speaker": "Waiter",
            "friendlyLatin": "shnu bghiti?",
            "english": "What would you like?",
            "isCore": false
          },
          {
            "speaker": "Traveler",
            "friendlyLatin": "qahwa kahla aafak",
            "english": "Black coffee please.",
            "isCore": true
          }
        ],
        "sceneVisual": "assets/images/lesson-scenes/day02-qahwa-kahla-aafak-scene.png",
        "sceneVisualAlt": "Independent uploaded-style scene image for Day 02: Cafe Culture",
        "sceneCaption": "Visual cue for the core phrase. The full lesson keeps the rest of the method unchanged.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay"
      },
      {
        "id": "cafe-002",
        "scenario": "You want mint tea instead of coffee.",
        "goal": "Order Moroccan mint tea.",
        "english": "Mint tea, please.",
        "friendlyLatin": "atay b naanaa aafak",
        "moroccanChat": "atay b n3na3 3afak",
        "arabic": "أتاي بنعناع عافاك",
        "showArabicByDefault": false,
        "literal": "Tea with mint please.",
        "meaning": "Mint tea, please.",
        "intent": "A culturally familiar order. It feels very Moroccan.",
        "cultureNote": "Mint tea is a hospitality symbol in Morocco. This phrase is useful in cafés, homes, and riads.",
        "memoryHook": "“atay” = tea. “naanaa” = mint.",
        "audioNormal": "assets/audio/day02/cafe-002-normal.mp3",
        "audioSlow": "assets/audio/day02/cafe-002-slow.mp3"
      },
      {
        "id": "cafe-003",
        "scenario": "You do not want sugar in your drink.",
        "goal": "Customize your order.",
        "english": "Without sugar, please.",
        "friendlyLatin": "bla sokkar aafak",
        "moroccanChat": "bla sokkar 3afak",
        "arabic": "بلا سكر عافاك",
        "showArabicByDefault": false,
        "literal": "Without sugar please.",
        "meaning": "No sugar, please.",
        "intent": "Useful because tea and coffee can be served sweet.",
        "cultureNote": "Moroccan mint tea is often very sweet. This phrase protects your preference without sounding rude.",
        "memoryHook": "“bla” = without. “sokkar” = sugar. Use the same pattern for other custom orders.",
        "audioNormal": "assets/audio/day02/cafe-003-normal.mp3",
        "audioSlow": "assets/audio/day02/cafe-003-slow.mp3"
      },
      {
        "id": "cafe-004",
        "scenario": "You want water with your order.",
        "goal": "Ask for water politely.",
        "english": "Water, please.",
        "friendlyLatin": "l-ma aafak",
        "moroccanChat": "lma 3afak",
        "arabic": "الما عافاك",
        "showArabicByDefault": false,
        "literal": "The water please.",
        "meaning": "Water, please.",
        "intent": "A very short, useful request.",
        "cultureNote": "In cafés, this is normal and not rude. A smile plus “aafak” makes it feel polite.",
        "memoryHook": "“l-ma” = water. You will use it every day.",
        "audioNormal": "assets/audio/day02/cafe-004-normal.mp3",
        "audioSlow": "assets/audio/day02/cafe-004-slow.mp3"
      },
      {
        "id": "cafe-005",
        "scenario": "You are ready to pay.",
        "goal": "Ask for the bill.",
        "english": "The bill, please.",
        "friendlyLatin": "l-hssab aafak",
        "moroccanChat": "l7ssab 3afak",
        "arabic": "الحساب عافاك",
        "showArabicByDefault": false,
        "literal": "The bill please.",
        "meaning": "Can I have the bill, please?",
        "intent": "A polite way to close the café interaction.",
        "cultureNote": "In many cafés, you ask for the bill when ready. It may not come automatically like in some restaurants outside Morocco.",
        "memoryHook": "“hssab” = bill/account. It also appears in money conversations.",
        "audioNormal": "assets/audio/day02/cafe-005-normal.mp3",
        "audioSlow": "assets/audio/day02/cafe-005-slow.mp3"
      }
    ],
    "quiz": [
      {
        "id": "cafe-q1",
        "question": "What does “bla” mean?",
        "options": [
          "without",
          "with",
          "here"
        ],
        "answer": "without"
      },
      {
        "id": "cafe-q2",
        "question": "Which phrase asks for the bill?",
        "options": [
          "l-hssab aafak",
          "qahwa kahla aafak",
          "sir nishan"
        ],
        "answer": "l-hssab aafak"
      },
      {
        "id": "cafe-q3",
        "question": "Why is “bla sokar” useful in Morocco?",
        "options": [
          "Drinks can be sweet",
          "It means hello",
          "It means taxi"
        ],
        "answer": "Drinks can be sweet"
      }
    ],
    "bonusPhrases": [
      {
        "friendlyLatin": "b l-hlib?",
        "meaning": "With milk?"
      },
      {
        "friendlyLatin": "bshhal l-hsab?",
        "meaning": "How much is the bill?"
      },
      {
        "friendlyLatin": "zid l-ma aafak",
        "meaning": "More water, please."
      }
    ],
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "qahwa kahla aafak",
        "meaning": "Black coffee, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "atay b naanaa aafak",
        "meaning": "Mint tea, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "bla sokkar aafak",
        "meaning": "No sugar, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "l-ma aafak",
        "meaning": "Water, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "l-hssab aafak",
        "meaning": "Can I have the bill, please?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "unlockBenefit": "This free lesson already shows the full Darija30 method."
  },
  {
    "id": "lesson-003",
    "day": 3,
    "week": 1,
    "title": "Market Price",
    "situation": "You are in a Moroccan market or small shop and need to ask prices without sounding formal.",
    "method": "Use one natural price question, then learn soft bargaining with cultural respect.",
    "isFree": true,
    "phrases": [
      {
        "id": "market-001",
        "scenario": "You are pointing at something in a market.",
        "goal": "Ask how much it costs.",
        "english": "How much is this?",
        "friendlyLatin": "bshhal hada?",
        "moroccanChat": "bsh7al hada?",
        "arabic": "بشحال هادا؟",
        "showArabicByDefault": false,
        "literal": "For how much is this?",
        "meaning": "How much is this?",
        "intent": "The normal first question before buying in a shop or souk.",
        "cultureNote": "Asking the price is expected. In many souks, bargaining can be part of the interaction, but stay friendly.",
        "memoryHook": "“hada” = this. Point and say “bshhal hada?”",
        "sceneVideo": "assets/video/day03/market-001-scene.mp4",
        "scenePoster": "assets/images/video-posters/market-001-scene.jpg",
        "audioNormal": "assets/audio/day03/market-001-normal.mp3",
        "audioSlow": "assets/audio/day03/market-001-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Traveler",
            "friendlyLatin": "bshhal hada?",
            "english": "How much is this?",
            "isCore": true
          },
          {
            "speaker": "Seller",
            "friendlyLatin": "khamsin drham",
            "english": "50 dirhams.",
            "isCore": false
          }
        ],
        "sceneVisual": "assets/images/lesson-scenes/day03-bsh-hal-hada-scene.png",
        "sceneVisualAlt": "Independent uploaded-style scene image for Day 03: Market Price",
        "sceneCaption": "Visual cue for the core phrase. The full lesson keeps the rest of the method unchanged.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay"
      },
      {
        "id": "market-002",
        "scenario": "The price feels high.",
        "goal": "React softly without sounding rude.",
        "english": "Too expensive.",
        "friendlyLatin": "ghali bzaf",
        "moroccanChat": "ghali bzaf",
        "arabic": "غالي بزاف",
        "showArabicByDefault": false,
        "literal": "Very expensive.",
        "meaning": "It is too expensive.",
        "intent": "A stronger but still common reaction when the price feels high.",
        "cultureNote": "Use it with a smile. In the souk, the sentence can open bargaining, but tone should stay friendly.",
        "memoryHook": "“ghali” = expensive. “bzaf” = very/a lot.",
        "audioNormal": "assets/audio/day03/market-002-normal.mp3",
        "audioSlow": "assets/audio/day03/market-002-slow.mp3"
      },
      {
        "id": "market-003",
        "scenario": "You want a small discount.",
        "goal": "Ask the seller to lower the price politely.",
        "english": "Lower it a little, please.",
        "friendlyLatin": "nqes shwiya aafak",
        "moroccanChat": "n9es shwiya 3afak",
        "arabic": "نقص شوية عافاك",
        "showArabicByDefault": false,
        "literal": "Reduce a little please.",
        "meaning": "Can you lower the price a bit, please?",
        "intent": "A soft bargaining phrase, not aggressive.",
        "cultureNote": "Friendly bargaining works better than confrontation. Smile and keep the tone light.",
        "memoryHook": "“nqes” = reduce/lower. “shwiya” = a little.",
        "audioNormal": "assets/audio/day03/market-003-normal.mp3",
        "audioSlow": "assets/audio/day03/market-003-slow.mp3"
      },
      {
        "id": "market-004",
        "scenario": "You want to know the final price.",
        "goal": "Ask for the last price.",
        "english": "What is the last price?",
        "friendlyLatin": "shnu akher taman?",
        "moroccanChat": "shnu akher taman?",
        "arabic": "شنو آخر ثمن؟",
        "showArabicByDefault": false,
        "literal": "What last price?",
        "meaning": "What is your final price?",
        "intent": "A common bargaining question when you are interested but want a better deal.",
        "cultureNote": "Use this after showing interest. It signals you may buy if the price feels fair.",
        "memoryHook": "“shnu” = what. “akher taman” = final price.",
        "audioNormal": "assets/audio/day03/market-004-normal.mp3",
        "audioSlow": "assets/audio/day03/market-004-slow.mp3"
      },
      {
        "id": "market-005",
        "scenario": "You decided to buy the item.",
        "goal": "Say that you want to buy it.",
        "english": "I want to buy this.",
        "friendlyLatin": "bghit nshri hada",
        "moroccanChat": "bghit nshri hada",
        "arabic": "بغيت نشري هادا",
        "showArabicByDefault": false,
        "literal": "I want to buy this.",
        "meaning": "I want to buy this.",
        "intent": "A natural closing phrase after asking about the price.",
        "cultureNote": "This sounds much more natural in the market than formal Arabic. Keep it simple and confident.",
        "memoryHook": "You already know “bghit.” Add “nshri” = buy.",
        "audioNormal": "assets/audio/day03/market-005-normal.mp3",
        "audioSlow": "assets/audio/day03/market-005-slow.mp3"
      }
    ],
    "quiz": [
      {
        "id": "market-q1",
        "question": "Where would you use “bshhal hada?”",
        "options": [
          "Market/shop",
          "Airport security",
          "Family dinner"
        ],
        "answer": "Market/shop"
      },
      {
        "id": "market-q2",
        "question": "Which phrase softly says “It is a little expensive”?",
        "options": [
          "ghali shwiya",
          "l-ma aafak",
          "sir nishan"
        ],
        "answer": "ghali shwiya"
      },
      {
        "id": "market-q3",
        "question": "What does “akher taman” mean?",
        "options": [
          "final price",
          "black coffee",
          "go straight"
        ],
        "answer": "final price"
      }
    ],
    "bonusPhrases": [
      {
        "friendlyLatin": "ghir kan-shuf",
        "meaning": "I am just looking."
      },
      {
        "friendlyLatin": "atini hada aafak",
        "meaning": "Give me this, please."
      },
      {
        "friendlyLatin": "kayna shi haja khra?",
        "meaning": "Is there another one?"
      }
    ],
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "bshhal hada?",
        "meaning": "How much is this?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "ghali bzaf",
        "meaning": "It is too expensive.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "nqes shwiya aafak",
        "meaning": "Can you lower the price a bit, please?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "shnu akher taman?",
        "meaning": "What is your final price?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "bghit nshri hada",
        "meaning": "I want to buy this.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "unlockBenefit": "This free lesson already shows the full Darija30 method."
  },
  {
    "id": "lesson-004",
    "day": 4,
    "week": 1,
    "title": "First Moroccan Greetings",
    "situation": "Walk into a shop, riad, taxi, or café and open the interaction warmly.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "First Contact & Confidence",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day04-salam-001",
        "scenario": "You are in a first moroccan greetings situation in Morocco.",
        "goal": "Start a conversation in a warm, natural Moroccan way.",
        "english": "Hello.",
        "friendlyLatin": "salam",
        "moroccanChat": "salam",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Hello.",
        "meaning": "Hello.",
        "intent": "Use this phrase in the first moroccan greetings context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “salam”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day04/day04-salam-001-normal.mp3",
        "audioSlow": "assets/audio/day04/day04-salam-001-slow.mp3",
        "memoryBubble": "",
        "sceneVisual": "assets/images/lesson-scenes/day04-salam-scene.png",
        "sceneVisualAlt": "Independent uploaded-style scene image for Day 04: First Moroccan Greetings",
        "sceneCaption": "Visual cue for the core phrase. The full lesson keeps the rest of the method unchanged.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay"
      },
      {
        "id": "day04-labas-002",
        "scenario": "You are in a first moroccan greetings situation in Morocco.",
        "goal": "Ask a simple friendly question after greeting someone.",
        "english": "How are you?",
        "friendlyLatin": "labas?",
        "moroccanChat": "labas?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "How are you?",
        "meaning": "How are you?",
        "intent": "Use this phrase in the first moroccan greetings context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “labas?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day04/day04-labas-002-normal.mp3",
        "audioSlow": "assets/audio/day04/day04-labas-002-slow.mp3",
        "memoryBubble": "labas?"
      },
      {
        "id": "day04-bikhir-lhamdullah-003",
        "scenario": "You are in a first moroccan greetings situation in Morocco.",
        "goal": "Answer politely when someone asks how you are.",
        "english": "I am good, thank God.",
        "friendlyLatin": "bikhir, lhamdullah",
        "moroccanChat": "bikhir, lhamdullah",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I am good, thank God.",
        "meaning": "I am good, thank God.",
        "intent": "Use this phrase in the first moroccan greetings context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bikhir, lhamdullah”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day04/day04-bikhir-lhamdullah-003-normal.mp3",
        "audioSlow": "assets/audio/day04/day04-bikhir-lhamdullah-003-slow.mp3",
        "memoryBubble": "bikhir, lhamdullah"
      },
      {
        "id": "day04-shukran-004",
        "scenario": "You are in a first moroccan greetings situation in Morocco.",
        "goal": "Show appreciation in any short interaction.",
        "english": "Thank you.",
        "friendlyLatin": "shukran",
        "moroccanChat": "shukran",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Thank you.",
        "meaning": "Thank you.",
        "intent": "Use this phrase in the first moroccan greetings context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “shukran”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day04/day04-shukran-004-normal.mp3",
        "audioSlow": "assets/audio/day04/day04-shukran-004-slow.mp3",
        "memoryBubble": "shukran"
      },
      {
        "id": "day04-bslama-005",
        "scenario": "You are in a first moroccan greetings situation in Morocco.",
        "goal": "Close the interaction politely.",
        "english": "Goodbye.",
        "friendlyLatin": "bslama",
        "moroccanChat": "bslama",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Goodbye.",
        "meaning": "Goodbye.",
        "intent": "Use this phrase in the first moroccan greetings context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bslama”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day04/day04-bslama-005-normal.mp3",
        "audioSlow": "assets/audio/day04/day04-bslama-005-slow.mp3",
        "memoryBubble": "bslama"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "salam",
        "meaning": "Hello.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "labas?",
        "meaning": "How are you?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "bikhir, lhamdullah",
        "meaning": "I am good, thank God.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "shukran",
        "meaning": "Thank you.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "bslama",
        "meaning": "Goodbye.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-004-q1",
        "question": "What does “salam” mean?",
        "options": [
          "Hello.",
          "How are you?",
          "I am good, thank God."
        ],
        "answer": "Hello."
      },
      {
        "id": "lesson-004-q2",
        "question": "Which phrase would you use to say “How are you?”?",
        "options": [
          "salam",
          "labas?",
          "bikhir, lhamdullah"
        ],
        "answer": "labas?"
      }
    ]
  },
  {
    "id": "lesson-005",
    "day": 5,
    "week": 1,
    "title": "Be Polite Without Sounding Formal",
    "situation": "Use small polite words that make you sound respectful, not stiff.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "First Contact & Confidence",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day05-aafak-001",
        "scenario": "You are in a be polite without sounding formal situation in Morocco.",
        "goal": "Add politeness to a request.",
        "english": "Please.",
        "friendlyLatin": "aafak",
        "moroccanChat": "aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Please.",
        "meaning": "Please.",
        "intent": "Use this phrase in the be polite without sounding formal context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day05/day05-aafak-001-normal.mp3",
        "audioSlow": "assets/audio/day05/day05-aafak-001-slow.mp3",
        "memoryBubble": "",
        "sceneVisual": "assets/images/lesson-scenes/day05-aafak-scene.png",
        "sceneVisualAlt": "Independent uploaded-style scene image for Day 05: Be Polite Without Sounding Formal",
        "sceneCaption": "Visual cue for the core phrase. The full lesson keeps the rest of the method unchanged.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay"
      },
      {
        "id": "day05-smh-liya-002",
        "scenario": "You are in a be polite without sounding formal situation in Morocco.",
        "goal": "Get attention politely or apologize lightly.",
        "english": "Excuse me / sorry.",
        "friendlyLatin": "smh liya",
        "moroccanChat": "smh liya",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Excuse me / sorry.",
        "meaning": "Excuse me / sorry.",
        "intent": "Use this phrase in the be polite without sounding formal context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “smh liya”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day05/day05-smh-liya-002-normal.mp3",
        "audioSlow": "assets/audio/day05/day05-smh-liya-002-slow.mp3",
        "memoryBubble": "smh liya"
      },
      {
        "id": "day05-maashi-mushkil-003",
        "scenario": "You are in a be polite without sounding formal situation in Morocco.",
        "goal": "Respond warmly when someone apologizes or helps you.",
        "english": "No problem.",
        "friendlyLatin": "mashi mushkil",
        "moroccanChat": "mashi mushkil",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "No problem.",
        "meaning": "No problem.",
        "intent": "Use this phrase in the be polite without sounding formal context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “mashi mushkil”. It means “no problem.”",
        "audioNormal": "assets/audio/day05/day05-maashi-mushkil-003-normal.mp3",
        "audioSlow": "assets/audio/day05/day05-maashi-mushkil-003-slow.mp3",
        "memoryBubble": "mashi mushkil"
      },
      {
        "id": "day05-wakha-004",
        "scenario": "You are in a be polite without sounding formal situation in Morocco.",
        "goal": "Show agreement in a natural Moroccan way.",
        "english": "Okay.",
        "friendlyLatin": "wakha",
        "moroccanChat": "wakha",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Okay.",
        "meaning": "Okay.",
        "intent": "Use this phrase in the be polite without sounding formal context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “wakha”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day05/day05-wakha-004-normal.mp3",
        "audioSlow": "assets/audio/day05/day05-wakha-004-slow.mp3",
        "memoryBubble": "wakha"
      },
      {
        "id": "day05-la-shukran-005",
        "scenario": "You are in a be polite without sounding formal situation in Morocco.",
        "goal": "Refuse something politely.",
        "english": "No, thank you.",
        "friendlyLatin": "la shukran",
        "moroccanChat": "la shukran",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "No, thank you.",
        "meaning": "No, thank you.",
        "intent": "Use this phrase in the be polite without sounding formal context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “la shukran”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day05/day05-la-shukran-005-normal.mp3",
        "audioSlow": "assets/audio/day05/day05-la-shukran-005-slow.mp3",
        "memoryBubble": "la shukran"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "aafak",
        "meaning": "Please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "smh liya",
        "meaning": "Excuse me / sorry.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "mashi mushkil",
        "meaning": "No problem.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "wakha",
        "meaning": "Okay.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "la shukran",
        "meaning": "No, thank you.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-005-q1",
        "question": "What does “aafak” mean?",
        "options": [
          "Please.",
          "Excuse me / sorry.",
          "No problem."
        ],
        "answer": "Please."
      },
      {
        "id": "lesson-005-q2",
        "question": "Which phrase would you use to say “Excuse me / sorry.”?",
        "options": [
          "aafak",
          "smh liya",
          "mashi mushkil"
        ],
        "answer": "smh liya"
      }
    ]
  },
  {
    "id": "lesson-006",
    "day": 6,
    "week": 2,
    "title": "Introduce Yourself",
    "situation": "Tell people who you are in simple Darija.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "First Contact & Confidence",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day06-smiti-john-001",
        "scenario": "You meet someone in Morocco and want to introduce yourself simply.",
        "goal": "Say your name using a placeholder you can replace.",
        "english": "My name is...",
        "friendlyLatin": "smiti ...",
        "moroccanChat": "smiti ...",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "My name is...",
        "meaning": "My name is...",
        "intent": "Use this phrase to introduce yourself without forcing a fixed nationality or name.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a pattern: “smiti ...”. Replace the dots with your own name.",
        "audioNormal": "assets/audio/day06/day06-smiti-john-001-normal.mp3",
        "audioSlow": "assets/audio/day06/day06-smiti-john-001-slow.mp3",
        "memoryBubble": "",
        "sceneVisual": "assets/images/lesson-scenes/day06-smiti-john-scene.png",
        "sceneVisualAlt": "Independent uploaded-style scene image for Day 06: Introduce Yourself",
        "sceneCaption": "Visual cue for the core phrase. The full lesson keeps the rest of the method unchanged.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay"
      },
      {
        "id": "day06-ana-mn-002",
        "scenario": "You are in a introduce yourself situation in Morocco.",
        "goal": "Say where you come from.",
        "english": "I am from...",
        "friendlyLatin": "ana mn...",
        "moroccanChat": "ana mn...",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I am from...",
        "meaning": "I am from...",
        "intent": "Use this phrase in the introduce yourself context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ana mn...”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day06/day06-ana-mn-002-normal.mp3",
        "audioSlow": "assets/audio/day06/day06-ana-mn-002-slow.mp3",
        "memoryBubble": "ana mn..."
      },
      {
        "id": "day06-ana-mn-mirikan-003",
        "scenario": "You meet someone in Morocco and need to make communication easier.",
        "goal": "Explain that you speak a little English when communication is difficult.",
        "english": "I speak a little English.",
        "friendlyLatin": "kanhder English shwiya",
        "moroccanChat": "kanhder English shwiya",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I speak English a little.",
        "meaning": "I speak a little English.",
        "intent": "A globally useful first-contact phrase for English-speaking learners of any nationality.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“kanhder” = I speak. “shwiya” = a little.",
        "audioNormal": "assets/audio/day06/day06-ana-mn-mirikan-003-normal.mp3",
        "audioSlow": "assets/audio/day06/day06-ana-mn-mirikan-003-slow.mp3",
        "memoryBubble": "kanhder English shwiya"
      },
      {
        "id": "day06-msharfin-004",
        "scenario": "You are in a introduce yourself situation in Morocco.",
        "goal": "Respond warmly after introductions.",
        "english": "Nice to meet you.",
        "friendlyLatin": "msharfin",
        "moroccanChat": "msharfin",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Nice to meet you.",
        "meaning": "Nice to meet you.",
        "intent": "Use this phrase in the introduce yourself context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “msharfin”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day06/day06-msharfin-004-normal.mp3",
        "audioSlow": "assets/audio/day06/day06-msharfin-004-slow.mp3",
        "memoryBubble": "msharfin"
      },
      {
        "id": "day06-ana-turist-005",
        "scenario": "You are in a introduce yourself situation in Morocco.",
        "goal": "Explain your role simply.",
        "english": "I am a tourist.",
        "friendlyLatin": "ana turist",
        "moroccanChat": "ana turist",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I am a tourist.",
        "meaning": "I am a tourist.",
        "intent": "Use this phrase in the introduce yourself context to keep the interaction simple and natural.",
        "cultureNote": "First Contact & Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ana turist”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day06/day06-ana-turist-005-normal.mp3",
        "audioSlow": "assets/audio/day06/day06-ana-turist-005-slow.mp3",
        "memoryBubble": "ana turist"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "smiti ...",
        "meaning": "My name is...",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "ana mn...",
        "meaning": "I am from...",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "kanhder English shwiya",
        "meaning": "I speak a little English.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "msharfin",
        "meaning": "Nice to meet you.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "ana turist",
        "meaning": "I am a tourist.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-006-q1",
        "question": "What does “smiti ...” mean?",
        "options": [
          "My name is...",
          "I am from...",
          "I speak a little English."
        ],
        "answer": "My name is..."
      },
      {
        "id": "lesson-006-q2",
        "question": "Which phrase means “I speak a little English”?",
        "options": [
          "smiti ...",
          "ana mn...",
          "kanhder English shwiya"
        ],
        "answer": "kanhder English shwiya"
      }
    ]
  },
  {
    "id": "lesson-007",
    "day": 7,
    "week": 2,
    "title": "I Don’t Understand",
    "situation": "Stay calm when you miss what someone said.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Move Around Morocco",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day07-ma-fhemtsh-001",
        "scenario": "You are in an i don’t understand situation in Morocco.",
        "goal": "Tell someone clearly that you missed the meaning.",
        "english": "I did not understand.",
        "friendlyLatin": "ma fhemtsh",
        "moroccanChat": "ma fhemtsh",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I did not understand.",
        "meaning": "I did not understand.",
        "intent": "Use this phrase in the i don’t understand context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ma fhemtsh”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day07/day07-ma-fhemtsh-001-normal.mp3",
        "audioSlow": "assets/audio/day07/day07-ma-fhemtsh-001-slow.mp3",
        "memoryBubble": "",
        "sceneVisual": "assets/images/lesson-scenes/day07-ma-fhemtsh-scene.png",
        "sceneVisualAlt": "Independent uploaded-style scene image for Day 07: I Don’t Understand",
        "sceneCaption": "Visual cue for the core phrase. The full lesson keeps the rest of the method unchanged.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay"
      },
      {
        "id": "day07-bshwiya-aafak-002",
        "scenario": "You are in an i don’t understand situation in Morocco.",
        "goal": "Ask the speaker to slow down.",
        "english": "Slowly, please.",
        "friendlyLatin": "bshwiya aafak",
        "moroccanChat": "bshwiya aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Slowly, please.",
        "meaning": "Slowly, please.",
        "intent": "Use this phrase in the i don’t understand context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bshwiya aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day07/day07-bshwiya-aafak-002-normal.mp3",
        "audioSlow": "assets/audio/day07/day07-bshwiya-aafak-002-slow.mp3",
        "memoryBubble": "bshwiya aafak"
      },
      {
        "id": "day07-aawed-aafak-003",
        "scenario": "You are in an i don’t understand situation in Morocco.",
        "goal": "Ask for repetition politely.",
        "english": "Repeat, please.",
        "friendlyLatin": "aawed aafak",
        "moroccanChat": "aawed aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Repeat, please.",
        "meaning": "Repeat, please.",
        "intent": "Use this phrase in the i don’t understand context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “aawed aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day07/day07-aawed-aafak-003-normal.mp3",
        "audioSlow": "assets/audio/day07/day07-aawed-aafak-003-slow.mp3",
        "memoryBubble": "aawed aafak"
      },
      {
        "id": "day07-wash-kat-hder-english-004",
        "scenario": "You are in an i don’t understand situation in Morocco.",
        "goal": "Check whether the person can switch languages.",
        "english": "Do you speak English?",
        "friendlyLatin": "wash kat-hder English?",
        "moroccanChat": "wash kat-hder English?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Do you speak English?",
        "meaning": "Do you speak English?",
        "intent": "Use this phrase in the i don’t understand context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “wash kat-hder English?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day07/day07-wash-kat-hder-english-004-normal.mp3",
        "audioSlow": "assets/audio/day07/day07-wash-kat-hder-english-004-slow.mp3",
        "memoryBubble": "wash kat-hder English?"
      },
      {
        "id": "day07-shnu-glti-005",
        "scenario": "You are in an i don’t understand situation in Morocco.",
        "goal": "Ask what was said in a casual way.",
        "english": "What did you say?",
        "friendlyLatin": "shnu glti?",
        "moroccanChat": "shnu glti?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "What did you say?",
        "meaning": "What did you say?",
        "intent": "Use this phrase in the i don’t understand context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “shnu glti?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day07/day07-shnu-glti-005-normal.mp3",
        "audioSlow": "assets/audio/day07/day07-shnu-glti-005-slow.mp3",
        "memoryBubble": "shnu glti?"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "ma fhemtsh",
        "meaning": "I did not understand.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "bshwiya aafak",
        "meaning": "Slowly, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "aawed aafak",
        "meaning": "Repeat, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "wash kat-hder English?",
        "meaning": "Do you speak English?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "shnu glti?",
        "meaning": "What did you say?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-007-q1",
        "question": "What does “ma fhemtsh” mean?",
        "options": [
          "I did not understand.",
          "Slowly, please.",
          "Repeat, please."
        ],
        "answer": "I did not understand."
      },
      {
        "id": "lesson-007-q2",
        "question": "Which phrase would you use to say “Slowly, please.”?",
        "options": [
          "ma fhemtsh",
          "bshwiya aafak",
          "aawed aafak"
        ],
        "answer": "bshwiya aafak"
      }
    ]
  },
  {
    "id": "lesson-008",
    "day": 8,
    "week": 2,
    "title": "Yes, No, Maybe, I Want",
    "situation": "Use the tiny survival words you need all day long.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Move Around Morocco",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day08-iyeh-001",
        "scenario": "You are in a yes, no, maybe, i want situation in Morocco.",
        "goal": "Agree or confirm.",
        "english": "Yes.",
        "friendlyLatin": "iyeh",
        "moroccanChat": "iyeh",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Yes.",
        "meaning": "Yes.",
        "intent": "Use this phrase in the yes, no, maybe, i want context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “iyeh”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day08/day08-iyeh-001-normal.mp3",
        "audioSlow": "assets/audio/day08/day08-iyeh-001-slow.mp3",
        "sceneVisual": "assets/images/lesson-scenes/day08-iyeh-scene.png",
        "sceneVisualAlt": "Independent uploaded-style scene image for Day 08: Yes, No, Maybe, I Want",
        "sceneCaption": "Visual cue for the core phrase. The full lesson keeps the rest of the method unchanged.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay"
      },
      {
        "id": "day08-0la-002",
        "scenario": "You are in a yes, no, maybe, i want situation in Morocco.",
        "goal": "Refuse or correct.",
        "english": "No.",
        "friendlyLatin": "la",
        "moroccanChat": "la",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "No.",
        "meaning": "No.",
        "intent": "Use this phrase in the yes, no, maybe, i want context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “la”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day08/day08-0la-002-normal.mp3",
        "audioSlow": "assets/audio/day08/day08-0la-002-slow.mp3"
      },
      {
        "id": "day08-momkin-003",
        "scenario": "You are in a yes, no, maybe, i want situation in Morocco.",
        "goal": "Show possibility or ask if something is possible.",
        "english": "Maybe / possible.",
        "friendlyLatin": "momkin",
        "moroccanChat": "momkin",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Maybe / possible.",
        "meaning": "Maybe / possible.",
        "intent": "Use this phrase in the yes, no, maybe, i want context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “momkin”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day08/day08-momkin-003-normal.mp3",
        "audioSlow": "assets/audio/day08/day08-momkin-003-slow.mp3"
      },
      {
        "id": "day08-bghit-004",
        "scenario": "You are in a yes, no, maybe, i want situation in Morocco.",
        "goal": "Start a need or request.",
        "english": "I want...",
        "friendlyLatin": "bghit...",
        "moroccanChat": "bghit...",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want...",
        "meaning": "I want...",
        "intent": "Use this phrase in the yes, no, maybe, i want context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bghit...”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day08/day08-bghit-004-normal.mp3",
        "audioSlow": "assets/audio/day08/day08-bghit-004-slow.mp3"
      },
      {
        "id": "day08-ma-bghitsh-005",
        "scenario": "You are in a yes, no, maybe, i want situation in Morocco.",
        "goal": "Refuse clearly.",
        "english": "I do not want.",
        "friendlyLatin": "ma bghitsh",
        "moroccanChat": "ma bghitsh",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I do not want.",
        "meaning": "I do not want.",
        "intent": "Use this phrase in the yes, no, maybe, i want context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ma bghitsh”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day08/day08-ma-bghitsh-005-normal.mp3",
        "audioSlow": "assets/audio/day08/day08-ma-bghitsh-005-slow.mp3"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "iyeh",
        "meaning": "Yes.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "la",
        "meaning": "No.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "momkin",
        "meaning": "Maybe / possible.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "bghit...",
        "meaning": "I want...",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "ma bghitsh",
        "meaning": "I do not want.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-008-q1",
        "question": "What does “iyeh” mean?",
        "options": [
          "Yes.",
          "No.",
          "Maybe / possible."
        ],
        "answer": "Yes."
      },
      {
        "id": "lesson-008-q2",
        "question": "Which phrase would you use to say “No.”?",
        "options": [
          "iyeh",
          "la",
          "momkin"
        ],
        "answer": "la"
      }
    ],
    "visualFixNote": "Phase D24: Day 8 now uses independent scene images; UI card and memory bubble are rendered by the website."
  },
  {
    "id": "lesson-009",
    "day": 9,
    "week": 2,
    "title": "Taxi: Price and Meter",
    "situation": "Protect yourself before or during a taxi ride.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Move Around Morocco",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day09-bsh-hal-taman-001",
        "scenario": "You are in a taxi: price and meter situation in Morocco.",
        "goal": "Ask the taxi price clearly.",
        "english": "How much is the fare?",
        "friendlyLatin": "bshhal taman?",
        "moroccanChat": "bshhal taman?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "How much is the fare?",
        "meaning": "How much is the fare?",
        "intent": "Use this phrase in the taxi: price and meter context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bshhal taman?”. Use it before agreeing on a taxi fare.",
        "audioNormal": "assets/audio/day09/day09-bsh-hal-taman-001-normal.mp3",
        "audioSlow": "assets/audio/day09/day09-bsh-hal-taman-001-slow.mp3",
        "memoryBubble": "",
        "sceneVisual": "assets/images/lesson-scenes/day09-bsh-hal-taman-scene.png",
        "sceneVisualAlt": "Independent uploaded-style scene image for Day 09: Taxi: Price and Meter",
        "sceneCaption": "Visual cue for the core phrase. The full lesson keeps the rest of the method unchanged.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay"
      },
      {
        "id": "day09-shaal-l-compteur-aafak-002",
        "scenario": "You are in a taxi: price and meter situation in Morocco.",
        "goal": "Ask the driver to use the meter.",
        "english": "Turn on the meter, please.",
        "friendlyLatin": "shael l-compteur aafak",
        "moroccanChat": "shael l-compteur aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Turn on the meter, please.",
        "meaning": "Turn on the meter, please.",
        "intent": "Use this phrase in the taxi: price and meter context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“compteur” = taxi meter. This phrase asks the driver to turn it on politely.",
        "audioNormal": "assets/audio/day09/day09-shaal-l-compteur-aafak-002-normal.mp3",
        "audioSlow": "assets/audio/day09/day09-shaal-l-compteur-aafak-002-slow.mp3",
        "memoryBubble": "shael l-compteur aafak"
      },
      {
        "id": "day09-ghali-bzaf-003",
        "scenario": "You are in a taxi: price and meter situation in Morocco.",
        "goal": "Push back when the price feels high.",
        "english": "It is too expensive.",
        "friendlyLatin": "ghali bzaf",
        "moroccanChat": "ghali bzaf",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "It is too expensive.",
        "meaning": "It is too expensive.",
        "intent": "Use this phrase in the taxi: price and meter context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ghali bzaf”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day09/day09-ghali-bzaf-003-normal.mp3",
        "audioSlow": "assets/audio/day09/day09-ghali-bzaf-003-slow.mp3",
        "memoryBubble": "ghali bzaf"
      },
      {
        "id": "day09-la-shukran-004",
        "scenario": "You are in a taxi: price and meter situation in Morocco.",
        "goal": "Refuse the ride politely.",
        "english": "No, thank you.",
        "friendlyLatin": "la, shukran",
        "moroccanChat": "la, shukran",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "No, thank you.",
        "meaning": "No, thank you.",
        "intent": "Use this phrase in the taxi: price and meter context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “la, shukran”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day09/day09-la-shukran-004-normal.mp3",
        "audioSlow": "assets/audio/day09/day09-la-shukran-004-slow.mp3",
        "memoryBubble": "la, shukran"
      },
      {
        "id": "day09-wakha-005",
        "scenario": "You are in a taxi: price and meter situation in Morocco.",
        "goal": "Accept the agreed condition.",
        "english": "Okay.",
        "friendlyLatin": "wakha",
        "moroccanChat": "wakha",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Okay.",
        "meaning": "Okay.",
        "intent": "Use this phrase in the taxi: price and meter context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “wakha”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day09/day09-wakha-005-normal.mp3",
        "audioSlow": "assets/audio/day09/day09-wakha-005-slow.mp3",
        "memoryBubble": "wakha"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "bshhal taman?",
        "meaning": "How much is the fare?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "shael l-compteur aafak",
        "meaning": "Turn on the meter, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "ghali bzaf",
        "meaning": "It is too expensive.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "la, shukran",
        "meaning": "No, thank you.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "wakha",
        "meaning": "Okay.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-009-q1",
        "question": "What does “bshhal taman?” mean?",
        "options": [
          "How much is the fare?",
          "Turn on the meter, please.",
          "It is too expensive."
        ],
        "answer": "How much is the fare?"
      },
      {
        "id": "lesson-009-q2",
        "question": "Which phrase would you use to say “Turn on the meter, please.”?",
        "options": [
          "bshhal taman?",
          "shael l-compteur aafak",
          "ghali bzaf"
        ],
        "answer": "shael l-compteur aafak"
      }
    ]
  },
  {
    "id": "lesson-010",
    "day": 10,
    "week": 2,
    "title": "Taxi: Stop and Directions",
    "situation": "Give simple street directions during the ride.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Move Around Morocco",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day10-wqef-hna-aafak-001",
        "scenario": "You are in a taxi: stop and directions situation in Morocco.",
        "goal": "Ask the driver to stop at the right place.",
        "english": "Stop here, please.",
        "friendlyLatin": "wqef hna aafak",
        "moroccanChat": "wqef hna aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Stop here, please.",
        "meaning": "Stop here, please.",
        "intent": "Use this phrase in the taxi: stop and directions context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “wqef hna aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day10/day10-wqef-hna-aafak-001-normal.mp3",
        "audioSlow": "assets/audio/day10/day10-wqef-hna-aafak-001-slow.mp3",
        "memoryBubble": "",
        "sceneVisual": "assets/images/lesson-scenes/day10-wqef-hna-aafak-scene.png",
        "sceneVisualAlt": "Independent uploaded-style scene image for Day 10: Taxi: Stop and Directions",
        "sceneCaption": "Visual cue for the core phrase. The full lesson keeps the rest of the method unchanged.",
        "sceneVisualIsUploadedScene": true,
        "visualSystem": "scene-only-image-plus-ui-overlay"
      },
      {
        "id": "day10-sir-nishan-002",
        "scenario": "You are in a taxi: stop and directions situation in Morocco.",
        "goal": "Tell the driver to continue straight.",
        "english": "Go straight.",
        "friendlyLatin": "sir nishan",
        "moroccanChat": "sir nishan",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Go straight.",
        "meaning": "Go straight.",
        "intent": "Use this phrase in the taxi: stop and directions context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “sir nishan”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day10/day10-sir-nishan-002-normal.mp3",
        "audioSlow": "assets/audio/day10/day10-sir-nishan-002-slow.mp3",
        "memoryBubble": "sir nishan"
      },
      {
        "id": "day10-dur-l-limen-003",
        "scenario": "You are in a taxi: stop and directions situation in Morocco.",
        "goal": "Give a right-turn instruction.",
        "english": "Turn right.",
        "friendlyLatin": "dur l-limen",
        "moroccanChat": "dur l-limen",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Turn right.",
        "meaning": "Turn right.",
        "intent": "Use this phrase in the taxi: stop and directions context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “dur l-limen”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day10/day10-dur-l-limen-003-normal.mp3",
        "audioSlow": "assets/audio/day10/day10-dur-l-limen-003-slow.mp3",
        "memoryBubble": "dur l-limen"
      },
      {
        "id": "day10-dur-l-lisar-004",
        "scenario": "You are in a taxi: stop and directions situation in Morocco.",
        "goal": "Give a left-turn instruction.",
        "english": "Turn left.",
        "friendlyLatin": "dur l-lisar",
        "moroccanChat": "dur l-lisar",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Turn left.",
        "meaning": "Turn left.",
        "intent": "Use this phrase in the taxi: stop and directions context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “dur l-lisar”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day10/day10-dur-l-lisar-004-normal.mp3",
        "audioSlow": "assets/audio/day10/day10-dur-l-lisar-004-slow.mp3",
        "memoryBubble": "dur l-lisar"
      },
      {
        "id": "day10-hna-mezian-005",
        "scenario": "You are in a taxi: stop and directions situation in Morocco.",
        "goal": "Tell the driver this spot is fine.",
        "english": "Here is good.",
        "friendlyLatin": "hna mezian",
        "moroccanChat": "hna mezian",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Here is good.",
        "meaning": "Here is good.",
        "intent": "Use this phrase in the taxi: stop and directions context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “hna mezian”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day10/day10-hna-mezian-005-normal.mp3",
        "audioSlow": "assets/audio/day10/day10-hna-mezian-005-slow.mp3",
        "memoryBubble": "hna mezian"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "wqef hna aafak",
        "meaning": "Stop here, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "sir nishan",
        "meaning": "Go straight.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "dur l-limen",
        "meaning": "Turn right.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "dur l-lisar",
        "meaning": "Turn left.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "hna mezian",
        "meaning": "Here is good.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-010-q1",
        "question": "What does “wqef hna aafak” mean?",
        "options": [
          "Stop here, please.",
          "Go straight.",
          "Turn right."
        ],
        "answer": "Stop here, please."
      },
      {
        "id": "lesson-010-q2",
        "question": "Which phrase would you use to say “Go straight.”?",
        "options": [
          "wqef hna aafak",
          "sir nishan",
          "dur l-limen"
        ],
        "answer": "sir nishan"
      }
    ]
  },
  {
    "id": "lesson-011",
    "day": 11,
    "week": 2,
    "title": "Train, Bus, Airport",
    "situation": "Handle transport beyond taxis.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Move Around Morocco",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day11-fin-l-mahatta-001",
        "scenario": "You are in a train, bus, airport situation in Morocco.",
        "goal": "Ask where the station is.",
        "english": "Where is the station?",
        "friendlyLatin": "fin l-mahatta?",
        "moroccanChat": "fin l-mahatta?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Where is the station?",
        "meaning": "Where is the station?",
        "intent": "Use this phrase in the train, bus, airport context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “fin l-mahatta?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day11/day11-fin-l-mahatta-001-normal.mp3",
        "audioSlow": "assets/audio/day11/day11-fin-l-mahatta-001-slow.mp3",
        "memoryBubble": "fin l-mahatta?"
      },
      {
        "id": "day11-fin-l-mtar-002",
        "scenario": "You are in a train, bus, airport situation in Morocco.",
        "goal": "Ask where the airport is.",
        "english": "Where is the airport?",
        "friendlyLatin": "fin l-mtar?",
        "moroccanChat": "fin l-mtar?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Where is the airport?",
        "meaning": "Where is the airport?",
        "intent": "Use this phrase in the train, bus, airport context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “fin l-mtar?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day11/day11-fin-l-mtar-002-normal.mp3",
        "audioSlow": "assets/audio/day11/day11-fin-l-mtar-002-slow.mp3",
        "memoryBubble": "fin l-mtar?"
      },
      {
        "id": "day11-bghit-ticket-l-003",
        "scenario": "You are in a train, bus, airport situation in Morocco.",
        "goal": "Buy a ticket to your destination.",
        "english": "I want a ticket to...",
        "friendlyLatin": "bghit ticket l...",
        "moroccanChat": "bghit ticket l...",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want a ticket to...",
        "meaning": "I want a ticket to...",
        "intent": "Use this phrase in the train, bus, airport context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bghit ticket l...”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day11/day11-bghit-ticket-l-003-normal.mp3",
        "audioSlow": "assets/audio/day11/day11-bghit-ticket-l-003-slow.mp3",
        "memoryBubble": "bghit ticket l..."
      },
      {
        "id": "day11-shhal-f-saa-004",
        "scenario": "You are in a train, bus, airport situation in Morocco.",
        "goal": "Ask the departure time.",
        "english": "What time?",
        "friendlyLatin": "shhal f saa?",
        "moroccanChat": "shhal f saa?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "What time?",
        "meaning": "What time?",
        "intent": "Use this phrase in the train, bus, airport context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “shhal f saa?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day11/day11-shhal-f-saa-004-normal.mp3",
        "audioSlow": "assets/audio/day11/day11-shhal-f-saa-004-slow.mp3",
        "memoryBubble": "shhal f saa?"
      },
      {
        "id": "day11-wash-baqi-kayn-005",
        "scenario": "You are in a train, bus, airport situation in Morocco.",
        "goal": "Check if tickets or departures are still available.",
        "english": "Is there still one?",
        "friendlyLatin": "wash baqi kayn?",
        "moroccanChat": "wash baqi kayn?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Is there still one?",
        "meaning": "Is there still one?",
        "intent": "Use this phrase in the train, bus, airport context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “wash baqi kayn?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day11/day11-wash-baqi-kayn-005-normal.mp3",
        "audioSlow": "assets/audio/day11/day11-wash-baqi-kayn-005-slow.mp3",
        "memoryBubble": "wash baqi kayn?"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "fin l-mahatta?",
        "meaning": "Where is the station?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "fin l-mtar?",
        "meaning": "Where is the airport?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "bghit ticket l...",
        "meaning": "I want a ticket to...",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "shhal f saa?",
        "meaning": "What time?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "wash baqi kayn?",
        "meaning": "Is there still one?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-011-q1",
        "question": "What does “fin l-mahatta?” mean?",
        "options": [
          "Where is the station?",
          "Where is the airport?",
          "I want a ticket to..."
        ],
        "answer": "Where is the station?"
      },
      {
        "id": "lesson-011-q2",
        "question": "Which phrase would you use to say “Where is the airport?”?",
        "options": [
          "fin l-mahatta?",
          "fin l-mtar?",
          "bghit ticket l..."
        ],
        "answer": "fin l-mtar?"
      }
    ]
  },
  {
    "id": "lesson-012",
    "day": 12,
    "week": 2,
    "title": "Lost in the Medina",
    "situation": "Recover when you lose your bearings.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Move Around Morocco",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day12-tliit-001",
        "scenario": "You are in a lost in the medina situation in Morocco.",
        "goal": "Tell someone you are lost.",
        "english": "I am lost.",
        "friendlyLatin": "tliit",
        "moroccanChat": "tliit",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I am lost.",
        "meaning": "I am lost.",
        "intent": "Use this phrase in the lost in the medina context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “tliit”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day12/day12-tliit-001-normal.mp3",
        "audioSlow": "assets/audio/day12/day12-tliit-001-slow.mp3",
        "memoryBubble": "tliit"
      },
      {
        "id": "day12-fin-kayn-002",
        "scenario": "You are in a lost in the medina situation in Morocco.",
        "goal": "Ask where a place is.",
        "english": "Where is ...?",
        "friendlyLatin": "fin kayn ...?",
        "moroccanChat": "fin kayn ...?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Where is ...?",
        "meaning": "Where is ...?",
        "intent": "Use this phrase in the lost in the medina context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “fin kayn ...?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day12/day12-fin-kayn-002-normal.mp3",
        "audioSlow": "assets/audio/day12/day12-fin-kayn-002-slow.mp3",
        "memoryBubble": "fin kayn ...?"
      },
      {
        "id": "day12-qreb-wla-b3id-003",
        "scenario": "You are in a lost in the medina situation in Morocco.",
        "goal": "Check the distance.",
        "english": "Is it near or far?",
        "friendlyLatin": "qreb wla b'id?",
        "moroccanChat": "qreb wla b'id?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Is it near or far?",
        "meaning": "Is it near or far?",
        "intent": "Use this phrase in the lost in the medina context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“qreb” = near. “b'id” = far. Use this when asking if a place is walkable.",
        "audioNormal": "assets/audio/day12/day12-qreb-wla-b3id-003-normal.mp3",
        "audioSlow": "assets/audio/day12/day12-qreb-wla-b3id-003-slow.mp3",
        "memoryBubble": "qreb wla b'id?"
      },
      {
        "id": "day12-aaweni-aafak-004",
        "scenario": "You are in a lost in the medina situation in Morocco.",
        "goal": "Ask for practical help.",
        "english": "Help me, please.",
        "friendlyLatin": "aaweni aafak",
        "moroccanChat": "aaweni aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Help me, please.",
        "meaning": "Help me, please.",
        "intent": "Use this phrase in the lost in the medina context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “aaweni aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day12/day12-aaweni-aafak-004-normal.mp3",
        "audioSlow": "assets/audio/day12/day12-aaweni-aafak-004-slow.mp3",
        "memoryBubble": "aaweni aafak"
      },
      {
        "id": "day12-shukran-bzaf-005",
        "scenario": "You are in a lost in the medina situation in Morocco.",
        "goal": "Thank someone warmly after help.",
        "english": "Thank you very much.",
        "friendlyLatin": "shukran bzaf",
        "moroccanChat": "shukran bzaf",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Thank you very much.",
        "meaning": "Thank you very much.",
        "intent": "Use this phrase in the lost in the medina context to keep the interaction simple and natural.",
        "cultureNote": "Move Around Morocco: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “shukran bzaf”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day12/day12-shukran-bzaf-005-normal.mp3",
        "audioSlow": "assets/audio/day12/day12-shukran-bzaf-005-slow.mp3",
        "memoryBubble": "shukran bzaf"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "tliit",
        "meaning": "I am lost.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "fin kayn ...?",
        "meaning": "Where is ...?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "qreb wla b'id?",
        "meaning": "Is it near or far?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "aaweni aafak",
        "meaning": "Help me, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "shukran bzaf",
        "meaning": "Thank you very much.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-012-q1",
        "question": "What does “tliit” mean?",
        "options": [
          "I am lost.",
          "Where is ...?",
          "Is it near or far?"
        ],
        "answer": "I am lost."
      },
      {
        "id": "lesson-012-q2",
        "question": "Which phrase would you use to say “Where is ...?”?",
        "options": [
          "tliit",
          "fin kayn ...?",
          "qreb wla b'id?"
        ],
        "answer": "fin kayn ...?"
      }
    ]
  },
  {
    "id": "lesson-013",
    "day": 13,
    "week": 3,
    "title": "Sugar, Milk, Custom Orders",
    "situation": "Customize drinks and small food orders.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Café, Restaurant & Food",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day13-bla-sokkar-001",
        "scenario": "You are in a sugar, milk, custom orders situation in Morocco.",
        "goal": "Remove sugar from your drink.",
        "english": "Without sugar.",
        "friendlyLatin": "bla sokkar",
        "moroccanChat": "bla sokkar",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Without sugar.",
        "meaning": "Without sugar.",
        "intent": "Use this phrase in the sugar, milk, custom orders context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bla sokkar”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day13/day13-bla-sokkar-001-normal.mp3",
        "audioSlow": "assets/audio/day13/day13-bla-sokkar-001-slow.mp3",
        "memoryBubble": "bla sokkar"
      },
      {
        "id": "day13-b-l-hlib-002",
        "scenario": "You are in a sugar, milk, custom orders situation in Morocco.",
        "goal": "Ask for milk in the drink.",
        "english": "With milk.",
        "friendlyLatin": "b l-hlib",
        "moroccanChat": "b l-hlib",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "With milk.",
        "meaning": "With milk.",
        "intent": "Use this phrase in the sugar, milk, custom orders context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “b l-hlib”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day13/day13-b-l-hlib-002-normal.mp3",
        "audioSlow": "assets/audio/day13/day13-b-l-hlib-002-slow.mp3",
        "memoryBubble": "b l-hlib"
      },
      {
        "id": "day13-messous-003",
        "scenario": "You are in a sugar, milk, custom orders situation in Morocco.",
        "goal": "Ask for the unsweetened version.",
        "english": "Unsweetened.",
        "friendlyLatin": "messous",
        "moroccanChat": "messous",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Unsweetened.",
        "meaning": "Unsweetened.",
        "intent": "Use this phrase in the sugar, milk, custom orders context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “messous”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day13/day13-messous-003-normal.mp3",
        "audioSlow": "assets/audio/day13/day13-messous-003-slow.mp3",
        "memoryBubble": "messous"
      },
      {
        "id": "day13-shwiya-sokkar-004",
        "scenario": "You are in a sugar, milk, custom orders situation in Morocco.",
        "goal": "Ask for less sugar.",
        "english": "A little sugar.",
        "friendlyLatin": "shwiya sokkar",
        "moroccanChat": "shwiya sokkar",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "A little sugar.",
        "meaning": "A little sugar.",
        "intent": "Use this phrase in the sugar, milk, custom orders context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “shwiya sokkar”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day13/day13-shwiya-sokkar-004-normal.mp3",
        "audioSlow": "assets/audio/day13/day13-shwiya-sokkar-004-slow.mp3",
        "memoryBubble": "shwiya sokkar"
      },
      {
        "id": "day13-ma-bghitsh-sokkar-005",
        "scenario": "You are in a sugar, milk, custom orders situation in Morocco.",
        "goal": "State clearly that you want no sugar.",
        "english": "I do not want sugar.",
        "friendlyLatin": "ma bghitsh sokkar",
        "moroccanChat": "ma bghitsh sokkar",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I do not want sugar.",
        "meaning": "I do not want sugar.",
        "intent": "Use this phrase in the sugar, milk, custom orders context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ma bghitsh sokkar”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day13/day13-ma-bghitsh-sokkar-005-normal.mp3",
        "audioSlow": "assets/audio/day13/day13-ma-bghitsh-sokkar-005-slow.mp3",
        "memoryBubble": "ma bghitsh sokkar"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "bla sokkar",
        "meaning": "Without sugar.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "b l-hlib",
        "meaning": "With milk.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "messous",
        "meaning": "Unsweetened.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "shwiya sokkar",
        "meaning": "A little sugar.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "ma bghitsh sokkar",
        "meaning": "I do not want sugar.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-013-q1",
        "question": "What does “bla sokkar” mean?",
        "options": [
          "Without sugar.",
          "With milk.",
          "Unsweetened."
        ],
        "answer": "Without sugar."
      },
      {
        "id": "lesson-013-q2",
        "question": "Which phrase would you use to say “With milk.”?",
        "options": [
          "bla sokkar",
          "b l-hlib",
          "messous"
        ],
        "answer": "b l-hlib"
      }
    ]
  },
  {
    "id": "lesson-014",
    "day": 14,
    "week": 3,
    "title": "Restaurant Basics",
    "situation": "Order the basics in a restaurant.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Café, Restaurant & Food",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day14-bghit-menu-001",
        "scenario": "You are in a restaurant basics situation in Morocco.",
        "goal": "Ask for the menu.",
        "english": "I want the menu.",
        "friendlyLatin": "bghit menu",
        "moroccanChat": "bghit menu",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want the menu.",
        "meaning": "I want the menu.",
        "intent": "Use this phrase in the restaurant basics context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bghit menu”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day14/day14-bghit-menu-001-normal.mp3",
        "audioSlow": "assets/audio/day14/day14-bghit-menu-001-slow.mp3",
        "memoryBubble": "bghit menu"
      },
      {
        "id": "day14-shnu-kayn-002",
        "scenario": "You are in a restaurant basics situation in Morocco.",
        "goal": "Ask about available dishes.",
        "english": "What do you have?",
        "friendlyLatin": "shnu kayn?",
        "moroccanChat": "shnu kayn?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "What do you have?",
        "meaning": "What do you have?",
        "intent": "Use this phrase in the restaurant basics context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “shnu kayn?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day14/day14-shnu-kayn-002-normal.mp3",
        "audioSlow": "assets/audio/day14/day14-shnu-kayn-002-slow.mp3",
        "memoryBubble": "shnu kayn?"
      },
      {
        "id": "day14-bghit-tajine-003",
        "scenario": "You are in a restaurant basics situation in Morocco.",
        "goal": "Order tagine.",
        "english": "I want tagine.",
        "friendlyLatin": "bghit tajine",
        "moroccanChat": "bghit tajine",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want tagine.",
        "meaning": "I want tagine.",
        "intent": "Use this phrase in the restaurant basics context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bghit tajine”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day14/day14-bghit-tajine-003-normal.mp3",
        "audioSlow": "assets/audio/day14/day14-bghit-tajine-003-slow.mp3",
        "memoryBubble": "bghit tajine"
      },
      {
        "id": "day14-bghit-couscous-004",
        "scenario": "You are in a restaurant basics situation in Morocco.",
        "goal": "Order couscous.",
        "english": "I want couscous.",
        "friendlyLatin": "bghit couscous",
        "moroccanChat": "bghit couscous",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want couscous.",
        "meaning": "I want couscous.",
        "intent": "Use this phrase in the restaurant basics context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bghit couscous”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day14/day14-bghit-couscous-004-normal.mp3",
        "audioSlow": "assets/audio/day14/day14-bghit-couscous-004-slow.mp3",
        "memoryBubble": "bghit couscous"
      },
      {
        "id": "day14-hadshi-bnin-005",
        "scenario": "You are in a restaurant basics situation in Morocco.",
        "goal": "Compliment the food.",
        "english": "This is delicious.",
        "friendlyLatin": "hadshi bnin",
        "moroccanChat": "hadshi bnin",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "This is delicious.",
        "meaning": "This is delicious.",
        "intent": "Use this phrase in the restaurant basics context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “hadshi bnin”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day14/day14-hadshi-bnin-005-normal.mp3",
        "audioSlow": "assets/audio/day14/day14-hadshi-bnin-005-slow.mp3",
        "memoryBubble": "hadshi bnin"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "bghit menu",
        "meaning": "I want the menu.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "shnu kayn?",
        "meaning": "What do you have?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "bghit tajine",
        "meaning": "I want tagine.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "bghit couscous",
        "meaning": "I want couscous.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "hadshi bnin",
        "meaning": "This is delicious.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-014-q1",
        "question": "What does “bghit menu” mean?",
        "options": [
          "I want the menu.",
          "What do you have?",
          "I want tagine."
        ],
        "answer": "I want the menu."
      },
      {
        "id": "lesson-014-q2",
        "question": "Which phrase would you use to say “What do you have?”?",
        "options": [
          "bghit menu",
          "shnu kayn?",
          "bghit tajine"
        ],
        "answer": "shnu kayn?"
      }
    ]
  },
  {
    "id": "lesson-015",
    "day": 15,
    "week": 3,
    "title": "The Bill and Payment",
    "situation": "Finish the meal and pay smoothly.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Café, Restaurant & Food",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day15-l-hssab-aafak-001",
        "scenario": "You are in a the bill and payment situation in Morocco.",
        "goal": "Ask for the bill.",
        "english": "The bill, please.",
        "friendlyLatin": "l-hssab aafak",
        "moroccanChat": "l-hssab aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "The bill, please.",
        "meaning": "The bill, please.",
        "intent": "Use this phrase in the the bill and payment context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “l-hssab aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day15/day15-l-hssab-aafak-001-normal.mp3",
        "audioSlow": "assets/audio/day15/day15-l-hssab-aafak-001-slow.mp3",
        "memoryBubble": "l-hssab aafak"
      },
      {
        "id": "day15-bsh-hal-002",
        "scenario": "You are in a the bill and payment situation in Morocco.",
        "goal": "Confirm the amount.",
        "english": "How much is it?",
        "friendlyLatin": "bshhal?",
        "moroccanChat": "bshhal?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "How much is it?",
        "meaning": "How much is it?",
        "intent": "Use this phrase in the the bill and payment context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bshhal?”. It is the shortest way to ask the amount.",
        "audioNormal": "assets/audio/day15/day15-bsh-hal-002-normal.mp3",
        "audioSlow": "assets/audio/day15/day15-bsh-hal-002-slow.mp3",
        "memoryBubble": "bshhal?"
      },
      {
        "id": "day15-nkhlles-b-carte-003",
        "scenario": "You are in a the bill and payment situation in Morocco.",
        "goal": "Check if card payment is accepted.",
        "english": "Can I pay by card?",
        "friendlyLatin": "nkhlles b carte?",
        "moroccanChat": "nkhlles b carte?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Can I pay by card?",
        "meaning": "Can I pay by card?",
        "intent": "Use this phrase in the the bill and payment context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “nkhlles b carte?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day15/day15-nkhlles-b-carte-003-normal.mp3",
        "audioSlow": "assets/audio/day15/day15-nkhlles-b-carte-003-slow.mp3",
        "memoryBubble": "nkhlles b carte?"
      },
      {
        "id": "day15-cash-004",
        "scenario": "You are paying in a café, shop, or taxi and want to confirm cash payment.",
        "goal": "Ask whether you can pay in cash.",
        "english": "Can I pay nkhlles cash?",
        "friendlyLatin": "nkhlles nkhlles cash?",
        "moroccanChat": "nkhlles nkhlles cash?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I pay nkhlles cash?",
        "meaning": "Can I pay nkhlles cash?",
        "intent": "A full payment sentence, clearer than saying only “nkhlles cash?”.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“nkhlles” = I pay. Add the payment method after it.",
        "audioNormal": "assets/audio/day15/day15-cash-004-normal.mp3",
        "audioSlow": "assets/audio/day15/day15-cash-004-slow.mp3",
        "memoryBubble": "nkhlles nkhlles cash?"
      },
      {
        "id": "day15-safi-shukran-005",
        "scenario": "You are in a the bill and payment situation in Morocco.",
        "goal": "Close the exchange politely.",
        "english": "That is all, thank you.",
        "friendlyLatin": "safi shukran",
        "moroccanChat": "safi shukran",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "That is all, thank you.",
        "meaning": "That is all, thank you.",
        "intent": "Use this phrase in the the bill and payment context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “safi shukran”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day15/day15-safi-shukran-005-normal.mp3",
        "audioSlow": "assets/audio/day15/day15-safi-shukran-005-slow.mp3",
        "memoryBubble": "safi shukran"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "l-hssab aafak",
        "meaning": "The bill, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "bshhal?",
        "meaning": "How much is it?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "nkhlles b carte?",
        "meaning": "Can I pay by card?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "nkhlles nkhlles cash?",
        "meaning": "Can I pay nkhlles cash?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "safi shukran",
        "meaning": "That is all, thank you.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-015-q1",
        "question": "What does “l-hssab aafak” mean?",
        "options": [
          "The bill, please.",
          "How much is it?",
          "Can I pay by card?"
        ],
        "answer": "The bill, please."
      },
      {
        "id": "lesson-015-q2",
        "question": "Which phrase would you use to say “How much is it?”?",
        "options": [
          "l-hssab aafak",
          "bshhal?",
          "nkhlles b carte?"
        ],
        "answer": "bshhal?"
      }
    ]
  },
  {
    "id": "lesson-016",
    "day": 16,
    "week": 3,
    "title": "Dietary Needs",
    "situation": "Explain simple food restrictions.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Café, Restaurant & Food",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day16-ana-vegetariyan-001",
        "scenario": "You are in a dietary needs situation in Morocco.",
        "goal": "Explain your diet simply.",
        "english": "I am vegetarian.",
        "friendlyLatin": "ana vegetariyan",
        "moroccanChat": "ana vegetariyan",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I am vegetarian.",
        "meaning": "I am vegetarian.",
        "intent": "Use this phrase in the dietary needs context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ana vegetariyan”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day16/day16-ana-vegetariyan-001-normal.mp3",
        "audioSlow": "assets/audio/day16/day16-ana-vegetariyan-001-slow.mp3",
        "memoryBubble": "ana vegetariyan"
      },
      {
        "id": "day16-ma-kan-akolsh-l-hm-002",
        "scenario": "You are in a dietary needs situation in Morocco.",
        "goal": "State that you do not eat meat.",
        "english": "I do not eat meat.",
        "friendlyLatin": "ma kan-akolsh l-hm",
        "moroccanChat": "ma kan-akolsh l-hm",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I do not eat meat.",
        "meaning": "I do not eat meat.",
        "intent": "Use this phrase in the dietary needs context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ma kan-akolsh l-hm”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day16/day16-ma-kan-akolsh-l-hm-002-normal.mp3",
        "audioSlow": "assets/audio/day16/day16-ma-kan-akolsh-l-hm-002-slow.mp3",
        "memoryBubble": "ma kan-akolsh l-hm"
      },
      {
        "id": "day16-wash-fih-l-hlib-003",
        "scenario": "You are in a dietary needs situation in Morocco.",
        "goal": "Ask about milk.",
        "english": "Does it have milk?",
        "friendlyLatin": "wash fih l-hlib?",
        "moroccanChat": "wash fih l-hlib?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Does it have milk?",
        "meaning": "Does it have milk?",
        "intent": "Use this phrase in the dietary needs context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “wash fih l-hlib?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day16/day16-wash-fih-l-hlib-003-normal.mp3",
        "audioSlow": "assets/audio/day16/day16-wash-fih-l-hlib-003-slow.mp3",
        "memoryBubble": "wash fih l-hlib?"
      },
      {
        "id": "day16-wash-fih-l-bid-004",
        "scenario": "You are in a dietary needs situation in Morocco.",
        "goal": "Ask about eggs.",
        "english": "Does it have eggs?",
        "friendlyLatin": "wash fih l-bid?",
        "moroccanChat": "wash fih l-bid?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Does it have eggs?",
        "meaning": "Does it have eggs?",
        "intent": "Use this phrase in the dietary needs context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “wash fih l-bid?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day16/day16-wash-fih-l-bid-004-normal.mp3",
        "audioSlow": "assets/audio/day16/day16-wash-fih-l-bid-004-slow.mp3",
        "memoryBubble": "wash fih l-bid?"
      },
      {
        "id": "day16-bla-aafak-005",
        "scenario": "You are in a dietary needs situation in Morocco.",
        "goal": "Remove an ingredient politely.",
        "english": "Without ..., please.",
        "friendlyLatin": "bla ... aafak",
        "moroccanChat": "bla ... aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Without ..., please.",
        "meaning": "Without ..., please.",
        "intent": "Use this phrase in the dietary needs context to keep the interaction simple and natural.",
        "cultureNote": "Café, Restaurant & Food: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bla ... aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day16/day16-bla-aafak-005-normal.mp3",
        "audioSlow": "assets/audio/day16/day16-bla-aafak-005-slow.mp3",
        "memoryBubble": "bla ... aafak"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "ana vegetariyan",
        "meaning": "I am vegetarian.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "ma kan-akolsh l-hm",
        "meaning": "I do not eat meat.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "wash fih l-hlib?",
        "meaning": "Does it have milk?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "wash fih l-bid?",
        "meaning": "Does it have eggs?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "bla ... aafak",
        "meaning": "Without ..., please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-016-q1",
        "question": "What does “ana vegetariyan” mean?",
        "options": [
          "I am vegetarian.",
          "I do not eat meat.",
          "Does it have milk?"
        ],
        "answer": "I am vegetarian."
      },
      {
        "id": "lesson-016-q2",
        "question": "Which phrase would you use to say “I do not eat meat.”?",
        "options": [
          "ana vegetariyan",
          "ma kan-akolsh l-hm",
          "wash fih l-hlib?"
        ],
        "answer": "ma kan-akolsh l-hm"
      }
    ]
  },
  {
    "id": "lesson-017",
    "day": 17,
    "week": 3,
    "title": "Ask the Price",
    "situation": "Start shopping with price questions and interest.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Markets & Money",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day17-bsh-hal-hada-001",
        "scenario": "You are in a ask the price situation in Morocco.",
        "goal": "Ask the price of a masculine item.",
        "english": "How much is this?",
        "friendlyLatin": "bshhal hada?",
        "moroccanChat": "bshhal hada?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "How much is this?",
        "meaning": "How much is this?",
        "intent": "Use this phrase in the ask the price context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bshhal hada?”. Point to a masculine item.",
        "audioNormal": "assets/audio/day17/day17-bsh-hal-hada-001-normal.mp3",
        "audioSlow": "assets/audio/day17/day17-bsh-hal-hada-001-slow.mp3",
        "memoryBubble": "bshhal hada?"
      },
      {
        "id": "day17-bsh-hal-hadi-002",
        "scenario": "You are in a ask the price situation in Morocco.",
        "goal": "Ask the price of a feminine item.",
        "english": "How much is this?",
        "friendlyLatin": "bshhal hadi?",
        "moroccanChat": "bshhal hadi?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "How much is this?",
        "meaning": "How much is this?",
        "intent": "Use this phrase in the ask the price context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bshhal hadi?”. Point to a feminine item.",
        "audioNormal": "assets/audio/day17/day17-bsh-hal-hadi-002-normal.mp3",
        "audioSlow": "assets/audio/day17/day17-bsh-hal-hadi-002-slow.mp3",
        "memoryBubble": "bshhal hadi?"
      },
      {
        "id": "day17-shhal-taman-003",
        "scenario": "You are in a ask the price situation in Morocco.",
        "goal": "Ask the price in a more general way.",
        "english": "What is the price?",
        "friendlyLatin": "shhal taman?",
        "moroccanChat": "shhal taman?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "What is the price?",
        "meaning": "What is the price?",
        "intent": "Use this phrase in the ask the price context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “shhal taman?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day17/day17-shhal-taman-003-normal.mp3",
        "audioSlow": "assets/audio/day17/day17-shhal-taman-003-slow.mp3",
        "memoryBubble": "shhal taman?"
      },
      {
        "id": "day17-hada-zwin-004",
        "scenario": "You are in a ask the price situation in Morocco.",
        "goal": "Show interest in an item.",
        "english": "This is nice.",
        "friendlyLatin": "hada zwin",
        "moroccanChat": "hada zwin",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "This is nice.",
        "meaning": "This is nice.",
        "intent": "Use this phrase in the ask the price context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “hada zwin”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day17/day17-hada-zwin-004-normal.mp3",
        "audioSlow": "assets/audio/day17/day17-hada-zwin-004-slow.mp3",
        "memoryBubble": "hada zwin"
      },
      {
        "id": "day17-bghit-nshuf-005",
        "scenario": "You are in a ask the price situation in Morocco.",
        "goal": "Say you just want to look.",
        "english": "I want to look.",
        "friendlyLatin": "bghit nshuf",
        "moroccanChat": "bghit nshuf",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want to look.",
        "meaning": "I want to look.",
        "intent": "Use this phrase in the ask the price context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bghit nshuf”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day17/day17-bghit-nshuf-005-normal.mp3",
        "audioSlow": "assets/audio/day17/day17-bghit-nshuf-005-slow.mp3",
        "memoryBubble": "bghit nshuf"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "bshhal hada?",
        "meaning": "How much is this?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "bshhal hadi?",
        "meaning": "How much is this?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "shhal taman?",
        "meaning": "What is the price?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "hada zwin",
        "meaning": "This is nice.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "bghit nshuf",
        "meaning": "I want to look.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-017-q1",
        "question": "What does “bshhal hada?” mean?",
        "options": [
          "How much is this?",
          "How much is this?",
          "What is the price?"
        ],
        "answer": "How much is this?"
      },
      {
        "id": "lesson-017-q2",
        "question": "Which phrase would you use to say “How much is this?”?",
        "options": [
          "bshhal hada?",
          "bshhal hadi?",
          "shhal taman?"
        ],
        "answer": "bshhal hadi?"
      }
    ]
  },
  {
    "id": "lesson-018",
    "day": 18,
    "week": 3,
    "title": "Bargain Politely",
    "situation": "Negotiate without sounding rude.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Markets & Money",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day18-ghali-bzaf-001",
        "scenario": "You are in a bargain politely situation in Morocco.",
        "goal": "Signal that the price is high.",
        "english": "Too expensive.",
        "friendlyLatin": "ghali bzaf",
        "moroccanChat": "ghali bzaf",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Too expensive.",
        "meaning": "Too expensive.",
        "intent": "Use this phrase in the bargain politely context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ghali bzaf”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day18/day18-ghali-bzaf-001-normal.mp3",
        "audioSlow": "assets/audio/day18/day18-ghali-bzaf-001-slow.mp3",
        "memoryBubble": "ghali bzaf"
      },
      {
        "id": "day18-nqes-shwiya-aafak-002",
        "scenario": "You are in a bargain politely situation in Morocco.",
        "goal": "Ask for a small reduction.",
        "english": "Lower it a little, please.",
        "friendlyLatin": "nqes shwiya aafak",
        "moroccanChat": "nqes shwiya aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Lower it a little, please.",
        "meaning": "Lower it a little, please.",
        "intent": "Use this phrase in the bargain politely context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “nqes shwiya aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day18/day18-nqes-shwiya-aafak-002-normal.mp3",
        "audioSlow": "assets/audio/day18/day18-nqes-shwiya-aafak-002-slow.mp3",
        "memoryBubble": "nqes shwiya aafak"
      },
      {
        "id": "day18-akher-taman-003",
        "scenario": "You are in a bargain politely situation in Morocco.",
        "goal": "Ask for the final price.",
        "english": "Last price?",
        "friendlyLatin": "akher taman?",
        "moroccanChat": "akher taman?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Last price?",
        "meaning": "Last price?",
        "intent": "Use this phrase in the bargain politely context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “akher taman?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day18/day18-akher-taman-003-normal.mp3",
        "audioSlow": "assets/audio/day18/day18-akher-taman-003-slow.mp3",
        "memoryBubble": "akher taman?"
      },
      {
        "id": "day18-ma-bghitsh-004",
        "scenario": "You are in a bargain politely situation in Morocco.",
        "goal": "Refuse and be ready to walk away.",
        "english": "I do not want it.",
        "friendlyLatin": "ma bghitsh",
        "moroccanChat": "ma bghitsh",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I do not want it.",
        "meaning": "I do not want it.",
        "intent": "Use this phrase in the bargain politely context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ma bghitsh”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day18/day18-ma-bghitsh-004-normal.mp3",
        "audioSlow": "assets/audio/day18/day18-ma-bghitsh-004-slow.mp3",
        "memoryBubble": "ma bghitsh"
      },
      {
        "id": "day18-wakha-005",
        "scenario": "You are in a bargain politely situation in Morocco.",
        "goal": "Accept the final price.",
        "english": "Okay.",
        "friendlyLatin": "wakha",
        "moroccanChat": "wakha",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Okay.",
        "meaning": "Okay.",
        "intent": "Use this phrase in the bargain politely context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “wakha”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day18/day18-wakha-005-normal.mp3",
        "audioSlow": "assets/audio/day18/day18-wakha-005-slow.mp3",
        "memoryBubble": "wakha"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "ghali bzaf",
        "meaning": "Too expensive.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "nqes shwiya aafak",
        "meaning": "Lower it a little, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "akher taman?",
        "meaning": "Last price?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "ma bghitsh",
        "meaning": "I do not want it.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "wakha",
        "meaning": "Okay.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-018-q1",
        "question": "What does “ghali bzaf” mean?",
        "options": [
          "Too expensive.",
          "Lower it a little, please.",
          "Last price?"
        ],
        "answer": "Too expensive."
      },
      {
        "id": "lesson-018-q2",
        "question": "Which phrase would you use to say “Lower it a little, please.”?",
        "options": [
          "ghali bzaf",
          "nqes shwiya aafak",
          "akher taman?"
        ],
        "answer": "nqes shwiya aafak"
      }
    ]
  },
  {
    "id": "lesson-019",
    "day": 19,
    "week": 3,
    "title": "Buy This, Not That",
    "situation": "Point, compare, and choose the item you want.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Markets & Money",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day19-bghit-hada-001",
        "scenario": "You are in a buy this, not that situation in Morocco.",
        "goal": "Choose an item directly.",
        "english": "I want this.",
        "friendlyLatin": "bghit hada",
        "moroccanChat": "bghit hada",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want this.",
        "meaning": "I want this.",
        "intent": "Use this phrase in the buy this, not that context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bghit hada”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day19/day19-bghit-hada-001-normal.mp3",
        "audioSlow": "assets/audio/day19/day19-bghit-hada-001-slow.mp3",
        "memoryBubble": "bghit hada"
      },
      {
        "id": "day19-ma-bghitsh-hadi-002",
        "scenario": "You are in a buy this, not that situation in Morocco.",
        "goal": "Reject an offered item.",
        "english": "I do not want this one.",
        "friendlyLatin": "ma bghitsh hadi",
        "moroccanChat": "ma bghitsh hadi",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I do not want this one.",
        "meaning": "I do not want this one.",
        "intent": "Use this phrase in the buy this, not that context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ma bghitsh hadi”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day19/day19-ma-bghitsh-hadi-002-normal.mp3",
        "audioSlow": "assets/audio/day19/day19-ma-bghitsh-hadi-002-slow.mp3",
        "memoryBubble": "ma bghitsh hadi"
      },
      {
        "id": "day19-atini-hada-aafak-003",
        "scenario": "You are in a buy this, not that situation in Morocco.",
        "goal": "Ask the seller to hand you an item.",
        "english": "Give me this, please.",
        "friendlyLatin": "atini hada aafak",
        "moroccanChat": "atini hada aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Give me this, please.",
        "meaning": "Give me this, please.",
        "intent": "Use this phrase in the buy this, not that context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “atini hada aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day19/day19-atini-hada-aafak-003-normal.mp3",
        "audioSlow": "assets/audio/day19/day19-atini-hada-aafak-003-slow.mp3",
        "memoryBubble": "atini hada aafak"
      },
      {
        "id": "day19-kayna-shi-haja-khra-004",
        "scenario": "You are in a buy this, not that situation in Morocco.",
        "goal": "Ask for an alternative.",
        "english": "Is there another one?",
        "friendlyLatin": "kayna shi haja khra?",
        "moroccanChat": "kayna shi haja khra?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Is there another one?",
        "meaning": "Is there another one?",
        "intent": "Use this phrase in the buy this, not that context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “kayna shi haja khra?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day19/day19-kayna-shi-haja-khra-004-normal.mp3",
        "audioSlow": "assets/audio/day19/day19-kayna-shi-haja-khra-004-slow.mp3",
        "memoryBubble": "kayna shi haja khra?"
      },
      {
        "id": "day19-safi-005",
        "scenario": "You are in a buy this, not that situation in Morocco.",
        "goal": "Say that the decision is complete.",
        "english": "Enough / done.",
        "friendlyLatin": "safi",
        "moroccanChat": "safi",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Enough / done.",
        "meaning": "Enough / done.",
        "intent": "Use this phrase in the buy this, not that context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “safi”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day19/day19-safi-005-normal.mp3",
        "audioSlow": "assets/audio/day19/day19-safi-005-slow.mp3",
        "memoryBubble": "safi"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "bghit hada",
        "meaning": "I want this.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "ma bghitsh hadi",
        "meaning": "I do not want this one.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "atini hada aafak",
        "meaning": "Give me this, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "kayna shi haja khra?",
        "meaning": "Is there another one?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "safi",
        "meaning": "Enough / done.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-019-q1",
        "question": "What does “bghit hada” mean?",
        "options": [
          "I want this.",
          "I do not want this one.",
          "Give me this, please."
        ],
        "answer": "I want this."
      },
      {
        "id": "lesson-019-q2",
        "question": "Which phrase would you use to say “I do not want this one.”?",
        "options": [
          "bghit hada",
          "ma bghitsh hadi",
          "atini hada aafak"
        ],
        "answer": "ma bghitsh hadi"
      }
    ]
  },
  {
    "id": "lesson-020",
    "day": 20,
    "week": 3,
    "title": "Sizes and Colors",
    "situation": "Use simple adjectives for shopping.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Markets & Money",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day20-kbir-001",
        "scenario": "You are choosing between two sizes in a Moroccan shop or market.",
        "goal": "Ask for the larger option in a shop or market.",
        "english": "I want the big one.",
        "friendlyLatin": "bghit l-kbir",
        "moroccanChat": "bghit l-kbir",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want the big one.",
        "meaning": "I want the big one.",
        "intent": "Turns a single adjective into a useful shopping sentence.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“kbir” = big. Add “bghit l-...” to make it a real request.",
        "audioNormal": "assets/audio/day20/day20-kbir-001-normal.mp3",
        "audioSlow": "assets/audio/day20/day20-kbir-001-slow.mp3",
        "memoryBubble": "bghit l-kbir"
      },
      {
        "id": "day20-sghir-002",
        "scenario": "You are choosing between two sizes in a Moroccan shop or market.",
        "goal": "Ask for the smaller option in a shop or market.",
        "english": "I want the small one.",
        "friendlyLatin": "bghit l-sghir",
        "moroccanChat": "bghit l-sghir",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want the small one.",
        "meaning": "I want the small one.",
        "intent": "Turns a single adjective into a useful shopping sentence.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“sghir” = small. Add “bghit l-...” to make it a real request.",
        "audioNormal": "assets/audio/day20/day20-sghir-002-normal.mp3",
        "audioSlow": "assets/audio/day20/day20-sghir-002-slow.mp3",
        "memoryBubble": "bghit l-sghir"
      },
      {
        "id": "day20-khal-003",
        "scenario": "You are choosing a color in a Moroccan shop or market.",
        "goal": "Ask for the black option.",
        "english": "I want the black one.",
        "friendlyLatin": "bghit l-khal",
        "moroccanChat": "bghit l-khal",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want the black one.",
        "meaning": "I want the black one.",
        "intent": "Turns a color word into a usable buying phrase.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“khal” = black. Use it after “bghit l-...” when choosing a color.",
        "audioNormal": "assets/audio/day20/day20-khal-003-normal.mp3",
        "audioSlow": "assets/audio/day20/day20-khal-003-slow.mp3",
        "memoryBubble": "bghit l-khal"
      },
      {
        "id": "day20-byed-004",
        "scenario": "You are choosing a color in a Moroccan shop or market.",
        "goal": "Ask for the white option.",
        "english": "I want the white one.",
        "friendlyLatin": "bghit l-byed",
        "moroccanChat": "bghit l-byed",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want the white one.",
        "meaning": "I want the white one.",
        "intent": "Turns a color word into a usable buying phrase.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“byed” = white. Use it after “bghit l-...” when choosing a color.",
        "audioNormal": "assets/audio/day20/day20-byed-004-normal.mp3",
        "audioSlow": "assets/audio/day20/day20-byed-004-slow.mp3",
        "memoryBubble": "bghit l-byed"
      },
      {
        "id": "day20-zraq-005",
        "scenario": "You are choosing a color in a Moroccan shop or market.",
        "goal": "Ask for the blue option.",
        "english": "I want the blue one.",
        "friendlyLatin": "bghit l-zraq",
        "moroccanChat": "bghit l-zraq",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want the blue one.",
        "meaning": "I want the blue one.",
        "intent": "Turns a color word into a usable buying phrase.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“zraq” = blue. Use it after “bghit l-...” when choosing a color.",
        "audioNormal": "assets/audio/day20/day20-zraq-005-normal.mp3",
        "audioSlow": "assets/audio/day20/day20-zraq-005-slow.mp3",
        "memoryBubble": "bghit l-zraq"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "bghit l-kbir",
        "meaning": "I want the big one.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "bghit l-sghir",
        "meaning": "I want the small one.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "bghit l-khal",
        "meaning": "I want the black one.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "bghit l-byed",
        "meaning": "I want the white one.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "bghit l-zraq",
        "meaning": "I want the blue one.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-020-q1",
        "question": "What does “kbir” mean?",
        "options": [
          "Big.",
          "Small.",
          "Black."
        ],
        "answer": "Big."
      },
      {
        "id": "lesson-020-q2",
        "question": "Which phrase would you use to say “Small.”?",
        "options": [
          "kbir",
          "sghir",
          "khal"
        ],
        "answer": "sghir"
      }
    ]
  },
  {
    "id": "lesson-021",
    "day": 21,
    "week": 3,
    "title": "Numbers for Prices",
    "situation": "Recognize or say small price numbers.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Markets & Money",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day21-wahed-001",
        "scenario": "You are buying something and want one item.",
        "goal": "Ask for one item.",
        "english": "I want one.",
        "friendlyLatin": "bghit wahed",
        "moroccanChat": "bghit wahed",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want one.",
        "meaning": "I want one.",
        "intent": "Turns a number into a usable buying phrase.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“wahed” = one. Use it after “bghit” when buying.",
        "audioNormal": "assets/audio/day21/day21-wahed-001-normal.mp3",
        "audioSlow": "assets/audio/day21/day21-wahed-001-slow.mp3",
        "memoryBubble": "bghit wahed",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day21-jouj-002",
        "scenario": "You are buying something and want two items.",
        "goal": "Ask for two items.",
        "english": "I want two.",
        "friendlyLatin": "bghit jouj",
        "moroccanChat": "bghit jouj",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want two.",
        "meaning": "I want two.",
        "intent": "Turns a number into a usable buying phrase.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“jouj” = two. Use it after “bghit” when buying.",
        "audioNormal": "assets/audio/day21/day21-jouj-002-normal.mp3",
        "audioSlow": "assets/audio/day21/day21-jouj-002-slow.mp3",
        "memoryBubble": "bghit jouj",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day21-tlata-003",
        "scenario": "You are buying something and want three items.",
        "goal": "Ask for three items.",
        "english": "I want three.",
        "friendlyLatin": "bghit tlata",
        "moroccanChat": "bghit tlata",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want three.",
        "meaning": "I want three.",
        "intent": "Turns a number into a usable buying phrase.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“tlata” = three. Use it after “bghit” when buying.",
        "audioNormal": "assets/audio/day21/day21-tlata-003-normal.mp3",
        "audioSlow": "assets/audio/day21/day21-tlata-003-slow.mp3",
        "memoryBubble": "bghit tlata",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day21-ashra-004",
        "scenario": "You are hearing or confirming a simple price in dirhams.",
        "goal": "Recognize or say a simple price.",
        "english": "Ten dirhams.",
        "friendlyLatin": "ashra drham",
        "moroccanChat": "ashra drham",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Ten dirhams.",
        "meaning": "Ten dirhams.",
        "intent": "Makes the number useful inside a price situation.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“ashra” = ten. “drham” = dirham.",
        "audioNormal": "assets/audio/day21/day21-ashra-004-normal.mp3",
        "audioSlow": "assets/audio/day21/day21-ashra-004-slow.mp3",
        "memoryBubble": "ashra drham",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day21-bsh-hal-b-drham-005",
        "scenario": "You are in a numbers for prices situation in Morocco.",
        "goal": "Ask the price in dirhams.",
        "english": "How much in dirhams?",
        "friendlyLatin": "bshhal b drham?",
        "moroccanChat": "bshhal b drham?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "How much in dirhams?",
        "meaning": "How much in dirhams?",
        "intent": "Use this phrase in the numbers for prices context to keep the interaction simple and natural.",
        "cultureNote": "Markets & Money: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bshhal b drham?”. Use it to confirm the price in dirhams.",
        "audioNormal": "assets/audio/day21/day21-bsh-hal-b-drham-005-normal.mp3",
        "audioSlow": "assets/audio/day21/day21-bsh-hal-b-drham-005-slow.mp3",
        "memoryBubble": "bshhal b drham?",
        "sceneVisualStatus": "pending-final-scene-image"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "bghit wahed",
        "meaning": "I want one.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "bghit jouj",
        "meaning": "I want two.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "bghit tlata",
        "meaning": "I want three.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "ashra drham",
        "meaning": "Ten dirhams.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "bshhal b drham?",
        "meaning": "How much in dirhams?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-021-q1",
        "question": "What does “wahed” mean?",
        "options": [
          "One.",
          "Two.",
          "Three."
        ],
        "answer": "One."
      },
      {
        "id": "lesson-021-q2",
        "question": "Which phrase would you use to say “Two.”?",
        "options": [
          "wahed",
          "jouj",
          "tlata"
        ],
        "answer": "jouj"
      }
    ]
  },
  {
    "id": "lesson-022",
    "day": 22,
    "week": 4,
    "title": "Hotel / Riad Check-in",
    "situation": "Handle a basic arrival at your accommodation.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Hotel, Help & Practical Needs",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day22-andi-reservation-001",
        "scenario": "You are in a hotel / riad check-in situation in Morocco.",
        "goal": "Tell reception you booked already.",
        "english": "I have a reservation.",
        "friendlyLatin": "andi reservation",
        "moroccanChat": "andi reservation",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I have a reservation.",
        "meaning": "I have a reservation.",
        "intent": "Use this phrase in the hotel / riad check-in context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “andi reservation”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day22/day22-andi-reservation-001-normal.mp3",
        "audioSlow": "assets/audio/day22/day22-andi-reservation-001-slow.mp3",
        "memoryBubble": "andi reservation",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day22-smiti-002",
        "scenario": "You are in a hotel / riad check-in situation in Morocco.",
        "goal": "Give the booking name.",
        "english": "My name is...",
        "friendlyLatin": "smiti...",
        "moroccanChat": "smiti...",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "My name is...",
        "meaning": "My name is...",
        "intent": "Use this phrase in the hotel / riad check-in context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “smiti...”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day22/day22-smiti-002-normal.mp3",
        "audioSlow": "assets/audio/day22/day22-smiti-002-slow.mp3",
        "memoryBubble": "smiti...",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day22-fin-l-bit-003",
        "scenario": "You are in a hotel / riad check-in situation in Morocco.",
        "goal": "Ask where the room is.",
        "english": "Where is the room?",
        "friendlyLatin": "fin l-bit?",
        "moroccanChat": "fin l-bit?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Where is the room?",
        "meaning": "Where is the room?",
        "intent": "Use this phrase in the hotel / riad check-in context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “fin l-bit?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day22/day22-fin-l-bit-003-normal.mp3",
        "audioSlow": "assets/audio/day22/day22-fin-l-bit-003-slow.mp3",
        "memoryBubble": "fin l-bit?",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day22-bghit-l-mftah-004",
        "scenario": "You are in a hotel / riad check-in situation in Morocco.",
        "goal": "Ask for the room key.",
        "english": "I want the key.",
        "friendlyLatin": "bghit l-mftah",
        "moroccanChat": "bghit l-mftah",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want the key.",
        "meaning": "I want the key.",
        "intent": "Use this phrase in the hotel / riad check-in context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bghit l-mftah”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day22/day22-bghit-l-mftah-004-normal.mp3",
        "audioSlow": "assets/audio/day22/day22-bghit-l-mftah-004-slow.mp3",
        "memoryBubble": "bghit l-mftah",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day22-shukran-005",
        "scenario": "You are in a hotel / riad check-in situation in Morocco.",
        "goal": "Close the check-in politely.",
        "english": "Thank you.",
        "friendlyLatin": "shukran",
        "moroccanChat": "shukran",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Thank you.",
        "meaning": "Thank you.",
        "intent": "Use this phrase in the hotel / riad check-in context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “shukran”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day22/day22-shukran-005-normal.mp3",
        "audioSlow": "assets/audio/day22/day22-shukran-005-slow.mp3",
        "memoryBubble": "shukran",
        "sceneVisualStatus": "pending-final-scene-image"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "andi reservation",
        "meaning": "I have a reservation.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "smiti...",
        "meaning": "My name is...",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "fin l-bit?",
        "meaning": "Where is the room?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "bghit l-mftah",
        "meaning": "I want the key.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "shukran",
        "meaning": "Thank you.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-022-q1",
        "question": "What does “andi reservation” mean?",
        "options": [
          "I have a reservation.",
          "My name is...",
          "Where is the room?"
        ],
        "answer": "I have a reservation."
      },
      {
        "id": "lesson-022-q2",
        "question": "Which phrase would you use to say “My name is...”?",
        "options": [
          "andi reservation",
          "smiti...",
          "fin l-bit?"
        ],
        "answer": "smiti..."
      }
    ]
  },
  {
    "id": "lesson-023",
    "day": 23,
    "week": 4,
    "title": "Hotel Problems",
    "situation": "Solve simple accommodation problems.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Hotel, Help & Practical Needs",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day23-ma-kaynsh-lma-skhun-001",
        "scenario": "You are in a hotel problems situation in Morocco.",
        "goal": "Report a hot water problem.",
        "english": "There is no hot water.",
        "friendlyLatin": "ma kaynsh lma skhun",
        "moroccanChat": "ma kaynsh lma skhun",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "There is no hot water.",
        "meaning": "There is no hot water.",
        "intent": "Use this phrase in the hotel problems context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ma kaynsh lma skhun”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day23/day23-ma-kaynsh-lma-skhun-001-normal.mp3",
        "audioSlow": "assets/audio/day23/day23-ma-kaynsh-lma-skhun-001-slow.mp3",
        "memoryBubble": "ma kaynsh lma skhun",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day23-l-wifi-ma-khdamsh-002",
        "scenario": "You are in a hotel problems situation in Morocco.",
        "goal": "Report internet trouble.",
        "english": "The Wi-Fi is not working.",
        "friendlyLatin": "l-wifi ma khdamsh",
        "moroccanChat": "l-wifi ma khdamsh",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "The Wi-Fi is not working.",
        "meaning": "The Wi-Fi is not working.",
        "intent": "Use this phrase in the hotel problems context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “l-wifi ma khdamsh”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day23/day23-l-wifi-ma-khdamsh-002-normal.mp3",
        "audioSlow": "assets/audio/day23/day23-l-wifi-ma-khdamsh-002-slow.mp3",
        "memoryBubble": "l-wifi ma khdamsh",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day23-bghit-nbedel-l-bit-003",
        "scenario": "You are in a hotel problems situation in Morocco.",
        "goal": "Request a different room.",
        "english": "I want to change the room.",
        "friendlyLatin": "bghit nbedel l-bit",
        "moroccanChat": "bghit nbedel l-bit",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want to change the room.",
        "meaning": "I want to change the room.",
        "intent": "Use this phrase in the hotel problems context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bghit nbedel l-bit”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day23/day23-bghit-nbedel-l-bit-003-normal.mp3",
        "audioSlow": "assets/audio/day23/day23-bghit-nbedel-l-bit-003-slow.mp3",
        "memoryBubble": "bghit nbedel l-bit",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day23-aaweni-aafak-004",
        "scenario": "You are in a hotel problems situation in Morocco.",
        "goal": "Ask the staff for assistance.",
        "english": "Help me, please.",
        "friendlyLatin": "aaweni aafak",
        "moroccanChat": "aaweni aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Help me, please.",
        "meaning": "Help me, please.",
        "intent": "Use this phrase in the hotel problems context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “aaweni aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day23/day23-aaweni-aafak-004-normal.mp3",
        "audioSlow": "assets/audio/day23/day23-aaweni-aafak-004-slow.mp3",
        "memoryBubble": "aaweni aafak",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day23-maashi-mushkil-005",
        "scenario": "You are in a hotel problems situation in Morocco.",
        "goal": "Respond calmly if the issue is solved.",
        "english": "No problem.",
        "friendlyLatin": "mashi mushkil",
        "moroccanChat": "mashi mushkil",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "No problem.",
        "meaning": "No problem.",
        "intent": "Use this phrase in the hotel problems context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “mashi mushkil”. It helps you stay polite and calm.",
        "audioNormal": "assets/audio/day23/day23-maashi-mushkil-005-normal.mp3",
        "audioSlow": "assets/audio/day23/day23-maashi-mushkil-005-slow.mp3",
        "memoryBubble": "mashi mushkil",
        "sceneVisualStatus": "pending-final-scene-image"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "ma kaynsh lma skhun",
        "meaning": "There is no hot water.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "l-wifi ma khdamsh",
        "meaning": "The Wi-Fi is not working.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "bghit nbedel l-bit",
        "meaning": "I want to change the room.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "aaweni aafak",
        "meaning": "Help me, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "mashi mushkil",
        "meaning": "No problem.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-023-q1",
        "question": "What does “ma kaynsh lma skhun” mean?",
        "options": [
          "There is no hot water.",
          "The Wi-Fi is not working.",
          "I want to change the room."
        ],
        "answer": "There is no hot water."
      },
      {
        "id": "lesson-023-q2",
        "question": "Which phrase would you use to say “The Wi-Fi is not working.”?",
        "options": [
          "ma kaynsh lma skhun",
          "l-wifi ma khdamsh",
          "bghit nbedel l-bit"
        ],
        "answer": "l-wifi ma khdamsh"
      }
    ]
  },
  {
    "id": "lesson-024",
    "day": 24,
    "week": 4,
    "title": "Ask Where Things Are",
    "situation": "Find practical places around you.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Hotel, Help & Practical Needs",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day24-fin-kayn-001",
        "scenario": "You are in a ask where things are situation in Morocco.",
        "goal": "Ask where a place is.",
        "english": "Where is ...?",
        "friendlyLatin": "fin kayn...?",
        "moroccanChat": "fin kayn...?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Where is ...?",
        "meaning": "Where is ...?",
        "intent": "Use this phrase in the ask where things are context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “fin kayn...?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day24/day24-fin-kayn-001-normal.mp3",
        "audioSlow": "assets/audio/day24/day24-fin-kayn-001-slow.mp3",
        "memoryBubble": "fin kayn...?",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day24-fin-toilet-002",
        "scenario": "You are in a café, restaurant, station, or public place and need the toilet.",
        "goal": "Ask where the toilet is using a full place question.",
        "english": "Where is the toilet?",
        "friendlyLatin": "fin kayn toilet?",
        "moroccanChat": "fin kayn toilet?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Where is there a toilet?",
        "meaning": "Where is the toilet?",
        "intent": "A fuller and more natural place question than only “fin kayn toilet?”.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“fin kayn...?” = where is there...? Use it for places and services.",
        "audioNormal": "assets/audio/day24/day24-fin-toilet-002-normal.mp3",
        "audioSlow": "assets/audio/day24/day24-fin-toilet-002-slow.mp3",
        "memoryBubble": "fin kayn toilet?",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day24-fin-pharmacy-003",
        "scenario": "You need a pharmacy in Morocco and ask someone nearby.",
        "goal": "Ask where the pharmacy is using a full place question.",
        "english": "Where is the pharmacy?",
        "friendlyLatin": "fin kayna pharmacie?",
        "moroccanChat": "fin kayna pharmacie?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Where is there a pharmacy?",
        "meaning": "Where is the pharmacy?",
        "intent": "Uses the Morocco-common French loanword “pharmacie” in a natural question.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“fin kayna...?” is the feminine form of “where is there...?”",
        "audioNormal": "assets/audio/day24/day24-fin-pharmacy-003-normal.mp3",
        "audioSlow": "assets/audio/day24/day24-fin-pharmacy-003-slow.mp3",
        "memoryBubble": "fin kayna pharmacie?",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day24-fin-atm-004",
        "scenario": "You need cash and ask where to find an ATM.",
        "goal": "Ask where an ATM is using a full place question.",
        "english": "Where is an ATM?",
        "friendlyLatin": "fin kayn ATM?",
        "moroccanChat": "fin kayn ATM?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Where is there an ATM?",
        "meaning": "Where is an ATM?",
        "intent": "A practical travel question for finding money withdrawal.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“fin kayn...?” works with many public services: toilet, ATM, parking.",
        "audioNormal": "assets/audio/day24/day24-fin-atm-004-normal.mp3",
        "audioSlow": "assets/audio/day24/day24-fin-atm-004-slow.mp3",
        "memoryBubble": "fin kayn ATM?",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day24-qreb-005",
        "scenario": "You are asking for directions and want to know if the place is nearby.",
        "goal": "Ask whether the place is close.",
        "english": "Is it near?",
        "friendlyLatin": "wash wash qreb?",
        "moroccanChat": "wash wash qreb?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Is it near?",
        "meaning": "Is it near?",
        "intent": "Turns a one-word fragment into a full yes/no question.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“wash” starts many yes/no questions. “qreb” = near.",
        "audioNormal": "assets/audio/day24/day24-qreb-005-normal.mp3",
        "audioSlow": "assets/audio/day24/day24-qreb-005-slow.mp3",
        "memoryBubble": "wash wash qreb?",
        "sceneVisualStatus": "pending-final-scene-image"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "fin kayn...?",
        "meaning": "Where is ...?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "fin kayn toilet?",
        "meaning": "Where is the toilet?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "fin kayna pharmacie?",
        "meaning": "Where is the pharmacy?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "fin kayn ATM?",
        "meaning": "Where is an ATM?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "wash wash qreb?",
        "meaning": "Is it near?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-024-q1",
        "question": "What does “fin kayn...?” mean?",
        "options": [
          "Where is ...?",
          "Where is the toilet?",
          "Where is the pharmacy?"
        ],
        "answer": "Where is ...?"
      },
      {
        "id": "lesson-024-q2",
        "question": "Which phrase would you use to say “Where is the toilet?”?",
        "options": [
          "fin kayn...?",
          "fin kayn toilet?",
          "fin kayna pharmacie?"
        ],
        "answer": "fin kayn toilet?"
      }
    ]
  },
  {
    "id": "lesson-025",
    "day": 25,
    "week": 4,
    "title": "Need Help / Emergency Light",
    "situation": "Use practical help phrases for urgent moments.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Hotel, Help & Practical Needs",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day25-aaweni-aafak-001",
        "scenario": "You are in a need help / emergency light situation in Morocco.",
        "goal": "Ask for immediate help.",
        "english": "Help me, please.",
        "friendlyLatin": "aaweni aafak",
        "moroccanChat": "aaweni aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Help me, please.",
        "meaning": "Help me, please.",
        "intent": "Use this phrase in the need help / emergency light context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “aaweni aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day25/day25-aaweni-aafak-001-normal.mp3",
        "audioSlow": "assets/audio/day25/day25-aaweni-aafak-001-slow.mp3",
        "memoryBubble": "aaweni aafak",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day25-bghit-doctor-002",
        "scenario": "You are in a need help / emergency light situation in Morocco.",
        "goal": "Ask for a doctor.",
        "english": "I need a doctor.",
        "friendlyLatin": "bghit tbib",
        "moroccanChat": "bghit tbib",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I need a doctor.",
        "meaning": "I need a doctor.",
        "intent": "Use this phrase in the need help / emergency light context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“tbib” = doctor. This is more Darija than saying only “doctor”.",
        "audioNormal": "assets/audio/day25/day25-bghit-doctor-002-normal.mp3",
        "audioSlow": "assets/audio/day25/day25-bghit-doctor-002-slow.mp3",
        "memoryBubble": "bghit tbib",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day25-ana-mrid-003",
        "scenario": "You are in a need help / emergency light situation in Morocco.",
        "goal": "Explain that you feel ill.",
        "english": "I am sick.",
        "friendlyLatin": "ana mrid",
        "moroccanChat": "ana mrid",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I am sick.",
        "meaning": "I am sick.",
        "intent": "Use this phrase in the need help / emergency light context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ana mrid”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day25/day25-ana-mrid-003-normal.mp3",
        "audioSlow": "assets/audio/day25/day25-ana-mrid-003-slow.mp3",
        "memoryBubble": "ana mrid",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day25-mshat-li-l-portefeuille-004",
        "scenario": "You are in a need help / emergency light situation in Morocco.",
        "goal": "Report that your wallet is missing.",
        "english": "I lost my wallet.",
        "friendlyLatin": "mshat li l-portefeuille",
        "moroccanChat": "mshat li l-portefeuille",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I lost my wallet.",
        "meaning": "I lost my wallet.",
        "intent": "Use this phrase in the need help / emergency light context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “mshat li l-portefeuille”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day25/day25-mshat-li-l-portefeuille-004-normal.mp3",
        "audioSlow": "assets/audio/day25/day25-mshat-li-l-portefeuille-004-slow.mp3",
        "memoryBubble": "mshat li l-portefeuille",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day25-fin-police-005",
        "scenario": "You need police help or need to find a police officer/station.",
        "goal": "Ask where the police are.",
        "english": "Where are the police?",
        "friendlyLatin": "fin l-police?",
        "moroccanChat": "fin l-police?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Where are the police?",
        "meaning": "Where are the police?",
        "intent": "A clearer emergency-light question than only “fin l-police?”.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“fin” = where. “l-police” is commonly understood in Morocco.",
        "audioNormal": "assets/audio/day25/day25-fin-police-005-normal.mp3",
        "audioSlow": "assets/audio/day25/day25-fin-police-005-slow.mp3",
        "memoryBubble": "fin l-police?",
        "sceneVisualStatus": "pending-final-scene-image"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "aaweni aafak",
        "meaning": "Help me, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "bghit tbib",
        "meaning": "I need a doctor.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "ana mrid",
        "meaning": "I am sick.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "mshat li l-portefeuille",
        "meaning": "I lost my wallet.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "fin l-police?",
        "meaning": "Where are the police?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-025-q1",
        "question": "What does “aaweni aafak” mean?",
        "options": [
          "Help me, please.",
          "I need a doctor.",
          "I am sick."
        ],
        "answer": "Help me, please."
      },
      {
        "id": "lesson-025-q2",
        "question": "Which phrase would you use to say “I need a doctor.”?",
        "options": [
          "aaweni aafak",
          "bghit tbib",
          "ana mrid"
        ],
        "answer": "bghit tbib"
      }
    ]
  },
  {
    "id": "lesson-026",
    "day": 26,
    "week": 4,
    "title": "Phone, SIM, Internet",
    "situation": "Get connected in Morocco.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Hotel, Help & Practical Needs",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day26-bghit-carte-sim-001",
        "scenario": "You are in a phone, sim, internet situation in Morocco.",
        "goal": "Ask for a SIM card.",
        "english": "I want a SIM card.",
        "friendlyLatin": "bghit carte SIM",
        "moroccanChat": "bghit carte SIM",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want a SIM card.",
        "meaning": "I want a SIM card.",
        "intent": "Use this phrase in the phone, sim, internet context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bghit carte SIM”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day26/day26-bghit-carte-sim-001-normal.mp3",
        "audioSlow": "assets/audio/day26/day26-bghit-carte-sim-001-slow.mp3",
        "memoryBubble": "bghit carte SIM",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day26-bghit-internet-002",
        "scenario": "You are in a phone, sim, internet situation in Morocco.",
        "goal": "Ask for internet service.",
        "english": "I want internet.",
        "friendlyLatin": "bghit internet",
        "moroccanChat": "bghit internet",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want internet.",
        "meaning": "I want internet.",
        "intent": "Use this phrase in the phone, sim, internet context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bghit internet”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day26/day26-bghit-internet-002-normal.mp3",
        "audioSlow": "assets/audio/day26/day26-bghit-internet-002-slow.mp3",
        "memoryBubble": "bghit internet",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day26-shhal-giga-003",
        "scenario": "You are in a phone, sim, internet situation in Morocco.",
        "goal": "Ask about data volume.",
        "english": "How many gigabytes?",
        "friendlyLatin": "shhal giga?",
        "moroccanChat": "shhal giga?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "How many gigabytes?",
        "meaning": "How many gigabytes?",
        "intent": "Use this phrase in the phone, sim, internet context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “shhal giga?”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day26/day26-shhal-giga-003-normal.mp3",
        "audioSlow": "assets/audio/day26/day26-shhal-giga-003-slow.mp3",
        "memoryBubble": "shhal giga?",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day26-ma-khdamsh-004",
        "scenario": "You are in a phone, sim, internet situation in Morocco.",
        "goal": "Say that the phone or connection is not working.",
        "english": "It does not work.",
        "friendlyLatin": "ma khdamsh",
        "moroccanChat": "ma khdamsh",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "It does not work.",
        "meaning": "It does not work.",
        "intent": "Use this phrase in the phone, sim, internet context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ma khdamsh”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day26/day26-ma-khdamsh-004-normal.mp3",
        "audioSlow": "assets/audio/day26/day26-ma-khdamsh-004-slow.mp3",
        "memoryBubble": "ma khdamsh",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day26-aaweni-aafak-005",
        "scenario": "You are in a phone, sim, internet situation in Morocco.",
        "goal": "Ask the seller or staff for help.",
        "english": "Help me, please.",
        "friendlyLatin": "aaweni aafak",
        "moroccanChat": "aaweni aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Help me, please.",
        "meaning": "Help me, please.",
        "intent": "Use this phrase in the phone, sim, internet context to keep the interaction simple and natural.",
        "cultureNote": "Hotel, Help & Practical Needs: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “aaweni aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day26/day26-aaweni-aafak-005-normal.mp3",
        "audioSlow": "assets/audio/day26/day26-aaweni-aafak-005-slow.mp3",
        "memoryBubble": "aaweni aafak",
        "sceneVisualStatus": "pending-final-scene-image"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "bghit carte SIM",
        "meaning": "I want a SIM card.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "bghit internet",
        "meaning": "I want internet.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "shhal giga?",
        "meaning": "How many gigabytes?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "ma khdamsh",
        "meaning": "It does not work.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "aaweni aafak",
        "meaning": "Help me, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-026-q1",
        "question": "What does “bghit carte SIM” mean?",
        "options": [
          "I want a SIM card.",
          "I want internet.",
          "How many gigabytes?"
        ],
        "answer": "I want a SIM card."
      },
      {
        "id": "lesson-026-q2",
        "question": "Which phrase would you use to say “I want internet.”?",
        "options": [
          "bghit carte SIM",
          "bghit internet",
          "shhal giga?"
        ],
        "answer": "bghit internet"
      }
    ]
  },
  {
    "id": "lesson-027",
    "day": 27,
    "week": 4,
    "title": "Compliments and Warm Phrases",
    "situation": "Sound warmer and more connected socially.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Cultural Confidence",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day27-bssaha-001",
        "scenario": "You are in a compliments and warm phrases situation in Morocco.",
        "goal": "Say it when someone eats, drinks, or uses something new.",
        "english": "Enjoy / with health.",
        "friendlyLatin": "bssaha",
        "moroccanChat": "bssaha",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Enjoy / with health.",
        "meaning": "Enjoy / with health.",
        "intent": "Use this phrase in the compliments and warm phrases context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bssaha”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day27/day27-bssaha-001-normal.mp3",
        "audioSlow": "assets/audio/day27/day27-bssaha-001-slow.mp3",
        "memoryBubble": "bssaha",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day27-llah-ykhalik-002",
        "scenario": "You are in a compliments and warm phrases situation in Morocco.",
        "goal": "Reply warmly to kindness or help.",
        "english": "May God keep you / thank you politely.",
        "friendlyLatin": "llah ykhalik",
        "moroccanChat": "llah ykhalik",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "May God keep you / thank you politely.",
        "meaning": "May God keep you / thank you politely.",
        "intent": "Use this phrase in the compliments and warm phrases context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “llah ykhalik”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day27/day27-llah-ykhalik-002-normal.mp3",
        "audioSlow": "assets/audio/day27/day27-llah-ykhalik-002-slow.mp3",
        "memoryBubble": "llah ykhalik",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day27-zwin-bzaf-003",
        "scenario": "You are in a compliments and warm phrases situation in Morocco.",
        "goal": "Compliment something directly.",
        "english": "Very nice.",
        "friendlyLatin": "zwin bzaf",
        "moroccanChat": "zwin bzaf",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Very nice.",
        "meaning": "Very nice.",
        "intent": "Use this phrase in the compliments and warm phrases context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “zwin bzaf”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day27/day27-zwin-bzaf-003-normal.mp3",
        "audioSlow": "assets/audio/day27/day27-zwin-bzaf-003-slow.mp3",
        "memoryBubble": "zwin bzaf",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day27-had-l-blad-zwina-004",
        "scenario": "You are in a compliments and warm phrases situation in Morocco.",
        "goal": "Say something warm about Morocco.",
        "english": "This country is beautiful.",
        "friendlyLatin": "had l-blad zwina",
        "moroccanChat": "had l-blad zwina",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "This country is beautiful.",
        "meaning": "This country is beautiful.",
        "intent": "Use this phrase in the compliments and warm phrases context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “had l-blad zwina”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day27/day27-had-l-blad-zwina-004-normal.mp3",
        "audioSlow": "assets/audio/day27/day27-had-l-blad-zwina-004-slow.mp3",
        "memoryBubble": "had l-blad zwina",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day27-shukran-bzaf-005",
        "scenario": "You are in a compliments and warm phrases situation in Morocco.",
        "goal": "Show strong gratitude.",
        "english": "Thank you very much.",
        "friendlyLatin": "shukran bzaf",
        "moroccanChat": "shukran bzaf",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Thank you very much.",
        "meaning": "Thank you very much.",
        "intent": "Use this phrase in the compliments and warm phrases context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “shukran bzaf”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day27/day27-shukran-bzaf-005-normal.mp3",
        "audioSlow": "assets/audio/day27/day27-shukran-bzaf-005-slow.mp3",
        "memoryBubble": "shukran bzaf",
        "sceneVisualStatus": "pending-final-scene-image"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "bssaha",
        "meaning": "Enjoy / with health.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "llah ykhalik",
        "meaning": "May God keep you / thank you politely.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "zwin bzaf",
        "meaning": "Very nice.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "had l-blad zwina",
        "meaning": "This country is beautiful.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "shukran bzaf",
        "meaning": "Thank you very much.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-027-q1",
        "question": "What does “bssaha” mean?",
        "options": [
          "Enjoy / with health.",
          "May God keep you / thank you politely.",
          "Very nice."
        ],
        "answer": "Enjoy / with health."
      },
      {
        "id": "lesson-027-q2",
        "question": "Which phrase would you use to say “May God keep you / thank you politely.”?",
        "options": [
          "bssaha",
          "llah ykhalik",
          "zwin bzaf"
        ],
        "answer": "llah ykhalik"
      }
    ]
  },
  {
    "id": "lesson-028",
    "day": 28,
    "week": 4,
    "title": "Decline Politely",
    "situation": "Say no without sounding cold.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Cultural Confidence",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day28-la-shukran-001",
        "scenario": "You are in a decline politely situation in Morocco.",
        "goal": "Refuse politely.",
        "english": "No, thank you.",
        "friendlyLatin": "la shukran",
        "moroccanChat": "la shukran",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "No, thank you.",
        "meaning": "No, thank you.",
        "intent": "Use this phrase in the decline politely context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “la shukran”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day28/day28-la-shukran-001-normal.mp3",
        "audioSlow": "assets/audio/day28/day28-la-shukran-001-slow.mp3",
        "memoryBubble": "la shukran",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day28-ma-bghitsh-002",
        "scenario": "You are in a decline politely situation in Morocco.",
        "goal": "Decline an offer clearly.",
        "english": "I do not want.",
        "friendlyLatin": "ma bghitsh",
        "moroccanChat": "ma bghitsh",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I do not want.",
        "meaning": "I do not want.",
        "intent": "Use this phrase in the decline politely context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ma bghitsh”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day28/day28-ma-bghitsh-002-normal.mp3",
        "audioSlow": "assets/audio/day28/day28-ma-bghitsh-002-slow.mp3",
        "memoryBubble": "ma bghitsh",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day28-ghir-kan-shuf-003",
        "scenario": "You are in a decline politely situation in Morocco.",
        "goal": "Tell a seller you are browsing only.",
        "english": "I am just looking.",
        "friendlyLatin": "ghir kan-shuf",
        "moroccanChat": "ghir kan-shuf",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I am just looking.",
        "meaning": "I am just looking.",
        "intent": "Use this phrase in the decline politely context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ghir kan-shuf”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day28/day28-ghir-kan-shuf-003-normal.mp3",
        "audioSlow": "assets/audio/day28/day28-ghir-kan-shuf-003-slow.mp3",
        "memoryBubble": "ghir kan-shuf",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day28-ma-andish-flus-daba-004",
        "scenario": "You are in a decline politely situation in Morocco.",
        "goal": "Avoid pressure politely.",
        "english": "I do not have money now.",
        "friendlyLatin": "ma andish flus daba",
        "moroccanChat": "ma andish flus daba",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I do not have money now.",
        "meaning": "I do not have money now.",
        "intent": "Use this phrase in the decline politely context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “ma andish flus daba”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day28/day28-ma-andish-flus-daba-004-normal.mp3",
        "audioSlow": "assets/audio/day28/day28-ma-andish-flus-daba-004-slow.mp3",
        "memoryBubble": "ma andish flus daba",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day28-safi-shukran-005",
        "scenario": "You are in a decline politely situation in Morocco.",
        "goal": "End the conversation politely.",
        "english": "That is enough, thank you.",
        "friendlyLatin": "safi shukran",
        "moroccanChat": "safi shukran",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "That is enough, thank you.",
        "meaning": "That is enough, thank you.",
        "intent": "Use this phrase in the decline politely context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “safi shukran”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day28/day28-safi-shukran-005-normal.mp3",
        "audioSlow": "assets/audio/day28/day28-safi-shukran-005-slow.mp3",
        "memoryBubble": "safi shukran",
        "sceneVisualStatus": "pending-final-scene-image"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "la shukran",
        "meaning": "No, thank you.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "ma bghitsh",
        "meaning": "I do not want.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "ghir kan-shuf",
        "meaning": "I am just looking.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "ma andish flus daba",
        "meaning": "I do not have money now.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "safi shukran",
        "meaning": "That is enough, thank you.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-028-q1",
        "question": "What does “la shukran” mean?",
        "options": [
          "No, thank you.",
          "I do not want.",
          "I am just looking."
        ],
        "answer": "No, thank you."
      },
      {
        "id": "lesson-028-q2",
        "question": "Which phrase would you use to say “I do not want.”?",
        "options": [
          "la shukran",
          "ma bghitsh",
          "ghir kan-shuf"
        ],
        "answer": "ma bghitsh"
      }
    ]
  },
  {
    "id": "lesson-029",
    "day": 29,
    "week": 4,
    "title": "Real Morocco Mixed Situations",
    "situation": "Review real Morocco survival phrases across taxi, café, market, and help situations.",
    "method": "Move through mixed real-life situations and say the phrase that solves each moment.",
    "module": "Mixed Morocco Survival Review",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day29-salam-001",
        "scenario": "You begin a mixed real-life interaction in Morocco.",
        "goal": "Open a real Moroccan interaction warmly.",
        "english": "Hello, how are you?",
        "friendlyLatin": "salam, labas?",
        "moroccanChat": "salam, labas?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Hello, all good?",
        "meaning": "Hello, how are you?",
        "intent": "Day 29 becomes a mixed survival review, starting with a natural greeting.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“labas?” is a warm Moroccan check-in after “salam”.",
        "audioNormal": "assets/audio/day29/day29-salam-001-normal.mp3",
        "audioSlow": "assets/audio/day29/day29-salam-001-slow.mp3",
        "memoryBubble": "salam, labas?",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day29-bghit-nmshi-l-otel-002",
        "scenario": "You are in a taxi and need to state your destination.",
        "goal": "Use a taxi destination phrase in a mixed review.",
        "english": "I want to go to the hotel.",
        "friendlyLatin": "bghit nmshi l-otel",
        "moroccanChat": "bghit nmshi l-otel",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want to go to the hotel.",
        "meaning": "I want to go to the hotel.",
        "intent": "Keeps one strong taxi survival line inside Day 29 mixed situations.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“bghit nmshi...” = I want to go. Reuse it with many places.",
        "audioNormal": "assets/audio/day29/day29-bghit-nmshi-l-otel-002-normal.mp3",
        "audioSlow": "assets/audio/day29/day29-bghit-nmshi-l-otel-002-slow.mp3",
        "memoryBubble": "bghit nmshi l-otel",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day29-shaal-l-compteur-aafak-003",
        "scenario": "You are in a Moroccan café during a mixed real-life review.",
        "goal": "Order a black coffee in a café.",
        "english": "Black coffee, please.",
        "friendlyLatin": "qahwa kahla aafak",
        "moroccanChat": "qahwa kahla 3afak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Black coffee please.",
        "meaning": "Black coffee, please.",
        "intent": "Replaces a repeated taxi meter line with a café order to make Day 29 more mixed.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“qahwa” = coffee. “kahla” = black.",
        "audioNormal": "assets/audio/day29/day29-shaal-l-compteur-aafak-003-normal.mp3",
        "audioSlow": "assets/audio/day29/day29-shaal-l-compteur-aafak-003-slow.mp3",
        "memoryBubble": "qahwa kahla aafak",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day29-wqef-hna-aafak-004",
        "scenario": "You are in a souk or small shop during a mixed real-life review.",
        "goal": "Ask the price in a shop or market.",
        "english": "How much is this?",
        "friendlyLatin": "bshhal hada?",
        "moroccanChat": "bsh7al hada?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "How much is this?",
        "meaning": "How much is this?",
        "intent": "Replaces a repeated taxi stop line with a market price question.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Point to the item and say: “bshhal hada?”",
        "audioNormal": "assets/audio/day29/day29-wqef-hna-aafak-004-normal.mp3",
        "audioSlow": "assets/audio/day29/day29-wqef-hna-aafak-004-slow.mp3",
        "memoryBubble": "bshhal hada?",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day29-shukran-bzaf-005",
        "scenario": "You need help in a street, hotel, station, or shop.",
        "goal": "Ask for help in a simple survival situation.",
        "english": "Please help me.",
        "friendlyLatin": "aaweni aafak",
        "moroccanChat": "3aweni 3afak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Help me please.",
        "meaning": "Please help me.",
        "intent": "Replaces a thanks-only closing line with a high-value survival phrase.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "“aaweni” = help me. Add “aafak” to keep it polite.",
        "audioNormal": "assets/audio/day29/day29-shukran-bzaf-005-normal.mp3",
        "audioSlow": "assets/audio/day29/day29-shukran-bzaf-005-slow.mp3",
        "memoryBubble": "aaweni aafak",
        "sceneVisualStatus": "pending-final-scene-image"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "salam, labas?",
        "meaning": "Hello, how are you?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "bghit nmshi l-otel",
        "meaning": "I want to go to the hotel.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "qahwa kahla aafak",
        "meaning": "Black coffee, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "bshhal hada?",
        "meaning": "How much is this?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "aaweni aafak",
        "meaning": "Please help me.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-029-q1",
        "question": "Which phrase would you use to order black coffee?",
        "options": [
          "qahwa kahla aafak",
          "bghit nmshi l-otel",
          "aaweni aafak"
        ],
        "answer": "qahwa kahla aafak"
      },
      {
        "id": "lesson-029-q2",
        "question": "What does “aaweni aafak” mean?",
        "options": [
          "Please help me.",
          "How much is this?",
          "Black coffee, please."
        ],
        "answer": "Please help me."
      }
    ]
  },
  {
    "id": "lesson-030",
    "day": 30,
    "week": 4,
    "title": "Final Morocco Survival Test",
    "situation": "Review the five most important survival outcomes before your trip.",
    "method": "Full Darija30 lesson data prepared. Audio and video can be dropped into the mapped folders later.",
    "module": "Cultural Confidence",
    "isFree": false,
    "isLocked": true,
    "phrasePageCount": 5,
    "lessonModel": "5 pages / 5 phrases — one phrase per page",
    "unlockBenefit": "Unlock this 5-page lesson inside the 30-Day Starter Pack.",
    "phrases": [
      {
        "id": "day30-salam-001",
        "scenario": "You are in a final morocco survival test situation in Morocco.",
        "goal": "Start a real interaction confidently.",
        "english": "Hello.",
        "friendlyLatin": "salam",
        "moroccanChat": "salam",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Hello.",
        "meaning": "Hello.",
        "intent": "Use this phrase in the final morocco survival test context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “salam”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day30/day30-salam-001-normal.mp3",
        "audioSlow": "assets/audio/day30/day30-salam-001-slow.mp3",
        "memoryBubble": "salam",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day30-bghit-nmshi-l-otel-002",
        "scenario": "You are in a final morocco survival test situation in Morocco.",
        "goal": "Handle taxi arrival.",
        "english": "I want to go to the hotel.",
        "friendlyLatin": "bghit nmshi l-otel",
        "moroccanChat": "bghit nmshi l-otel",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "I want to go to the hotel.",
        "meaning": "I want to go to the hotel.",
        "intent": "Use this phrase in the final morocco survival test context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bghit nmshi l-otel”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day30/day30-bghit-nmshi-l-otel-002-normal.mp3",
        "audioSlow": "assets/audio/day30/day30-bghit-nmshi-l-otel-002-slow.mp3",
        "memoryBubble": "bghit nmshi l-otel",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day30-qahwa-kahla-aafak-003",
        "scenario": "You are in a final morocco survival test situation in Morocco.",
        "goal": "Order in a café.",
        "english": "Black coffee, please.",
        "friendlyLatin": "qahwa kahla aafak",
        "moroccanChat": "qahwa kahla aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Black coffee, please.",
        "meaning": "Black coffee, please.",
        "intent": "Use this phrase in the final morocco survival test context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “qahwa kahla aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day30/day30-qahwa-kahla-aafak-003-normal.mp3",
        "audioSlow": "assets/audio/day30/day30-qahwa-kahla-aafak-003-slow.mp3",
        "memoryBubble": "qahwa kahla aafak",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day30-bsh-hal-hada-004",
        "scenario": "You are in a final morocco survival test situation in Morocco.",
        "goal": "Ask the price in a market.",
        "english": "How much is this?",
        "friendlyLatin": "bshhal hada?",
        "moroccanChat": "bshhal hada?",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "How much is this?",
        "meaning": "How much is this?",
        "intent": "Use this phrase in the final morocco survival test context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “bshhal hada?”. It is a final survival phrase for the market.",
        "audioNormal": "assets/audio/day30/day30-bsh-hal-hada-004-normal.mp3",
        "audioSlow": "assets/audio/day30/day30-bsh-hal-hada-004-slow.mp3",
        "memoryBubble": "bshhal hada?",
        "sceneVisualStatus": "pending-final-scene-image"
      },
      {
        "id": "day30-aaweni-aafak-005",
        "scenario": "You are in a final morocco survival test situation in Morocco.",
        "goal": "Ask for help in a stressful moment.",
        "english": "Help me, please.",
        "friendlyLatin": "aaweni aafak",
        "moroccanChat": "aaweni aafak",
        "arabic": "",
        "showArabicByDefault": false,
        "literal": "Help me, please.",
        "meaning": "Help me, please.",
        "intent": "Use this phrase in the final morocco survival test context to keep the interaction simple and natural.",
        "cultureNote": "Cultural Confidence: Moroccan interactions usually work best with short direct phrases plus a warm tone. Add “aafak” or a smile when appropriate.",
        "memoryHook": "Keep this phrase as a sound pattern: “aaweni aafak”. Repetition matters more than spelling.",
        "audioNormal": "assets/audio/day30/day30-aaweni-aafak-005-normal.mp3",
        "audioSlow": "assets/audio/day30/day30-aaweni-aafak-005-slow.mp3",
        "memoryBubble": "aaweni aafak",
        "sceneVisualStatus": "pending-final-scene-image"
      }
    ],
    "previewPhrases": [
      {
        "page": 1,
        "friendlyLatin": "salam",
        "meaning": "Hello.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 2,
        "friendlyLatin": "bghit nmshi l-otel",
        "meaning": "I want to go to the hotel.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 3,
        "friendlyLatin": "qahwa kahla aafak",
        "meaning": "Black coffee, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 4,
        "friendlyLatin": "bshhal hada?",
        "meaning": "How much is this?",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      },
      {
        "page": 5,
        "friendlyLatin": "aaweni aafak",
        "meaning": "Help me, please.",
        "pageModel": "One phrase page with scenario, audio, meaning, intent, memory hook, and quick check."
      }
    ],
    "quiz": [
      {
        "id": "lesson-030-q1",
        "question": "What does “salam” mean?",
        "options": [
          "Hello.",
          "I want to go to the hotel.",
          "Black coffee, please."
        ],
        "answer": "Hello."
      },
      {
        "id": "lesson-030-q2",
        "question": "Which phrase would you use to say “I want to go to the hotel.”?",
        "options": [
          "salam",
          "bghit nmshi l-otel",
          "qahwa kahla aafak"
        ],
        "answer": "bghit nmshi l-otel"
      }
    ]
  }
];
