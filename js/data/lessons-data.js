// Darija30 lesson data — D77 collaborator level preview baseline.
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
  },
  {
    "id": "level02-lesson-001",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 1,
    "week": 1,
    "title": "الدخول إلى الرياض أول مرة",
    "situation": "Level 2 hospitality scene: الدخول إلى الرياض أول مرة.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D01-P01",
        "scenario": "The learner arrives at the riad door and opens the interaction politely.",
        "goal": "Say: Hello, I have arrived now.",
        "english": "Hello, I have arrived now.",
        "friendlyLatin": "salam aalikom, ana wasel daba",
        "moroccanChat": "salam aalikom, ana wasel daba",
        "arabic": "السلام عليكم، أنا واصل دابا",
        "showArabicByDefault": false,
        "literal": "Hello, I have arrived now.",
        "meaning": "Hello, I have arrived now.",
        "intent": "Use this in Level 2 hospitality context: الدخول إلى الرياض أول مرة.",
        "cultureNote": "Opening with salam is a safe respectful start in riads and homes.",
        "memoryHook": "Pronunciation chunks: salam aalikom / ana wasel daba",
        "pronunciationParts": [
          "salam aalikom",
          "ana wasel daba"
        ],
        "possibleMoroccanReply": "wa aalikom salam, mrehba bik",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 1: الدخول إلى الرياض أول مرة. Show a foreign learner politely handling this situation: The learner arrives at the riad door and opens the interaction politely.. Visual focus: the phrase 'salam aalikom, ana wasel daba' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الدخول إلى الرياض أول مرة'. Trigger: The learner arrives at the riad door and opens the interaction politely.. Learner says 'salam aalikom, ana wasel daba'. Moroccan host/staff replies 'wa aalikom salam, mrehba bik'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day01/l02-d01-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day01/l02-d01-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "salam aalikom, ana wasel daba",
            "english": "Hello, I have arrived now.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wa aalikom salam, mrehba bik",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 1: The learner arrives at the riad door and opens the interaction politely.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D01-P02",
        "scenario": "The learner is at the entrance and needs permission/help to enter.",
        "goal": "Say: I would like to enter the riad, please.",
        "english": "I would like to enter the riad, please.",
        "friendlyLatin": "bghit ndkhol l-riad aafak",
        "moroccanChat": "bghit ndkhol l-riad aafak",
        "arabic": "بغيت ندخل للرياض عافاك",
        "showArabicByDefault": false,
        "literal": "I would like to enter the riad, please.",
        "meaning": "I would like to enter the riad, please.",
        "intent": "Use this in Level 2 hospitality context: الدخول إلى الرياض أول مرة.",
        "cultureNote": "Use aafak to soften a direct request with staff or hosts.",
        "memoryHook": "Pronunciation chunks: bghit ndkhol / l-riad aafak",
        "pronunciationParts": [
          "bghit ndkhol",
          "l-riad aafak"
        ],
        "possibleMoroccanReply": "mrehba, dkhol",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 1: الدخول إلى الرياض أول مرة. Show a foreign learner politely handling this situation: The learner is at the entrance and needs permission/help to enter.. Visual focus: the phrase 'bghit ndkhol l-riad aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الدخول إلى الرياض أول مرة'. Trigger: The learner is at the entrance and needs permission/help to enter.. Learner says 'bghit ndkhol l-riad aafak'. Moroccan host/staff replies 'mrehba, dkhol'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day01/l02-d01-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day01/l02-d01-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit ndkhol l-riad aafak",
            "english": "I would like to enter the riad, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mrehba, dkhol",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 1: The learner is at the entrance and needs permission/help to enter.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D01-P03",
        "scenario": "The learner is inside the courtyard and looks for reception.",
        "goal": "Say: Is reception here?",
        "english": "Is reception here?",
        "friendlyLatin": "wash hna reception?",
        "moroccanChat": "wash hna reception?",
        "arabic": "واش هنا الريسبسيون؟",
        "showArabicByDefault": false,
        "literal": "Is reception here?",
        "meaning": "Is reception here?",
        "intent": "Use this in Level 2 hospitality context: الدخول إلى الرياض أول مرة.",
        "cultureNote": "French words like reception are common in accommodation contexts.",
        "memoryHook": "Pronunciation chunks: wash / hna / reception",
        "pronunciationParts": [
          "wash",
          "hna",
          "reception"
        ],
        "possibleMoroccanReply": "iyeh, hna",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 1: الدخول إلى الرياض أول مرة. Show a foreign learner politely handling this situation: The learner is inside the courtyard and looks for reception.. Visual focus: the phrase 'wash hna reception?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الدخول إلى الرياض أول مرة'. Trigger: The learner is inside the courtyard and looks for reception.. Learner says 'wash hna reception?'. Moroccan host/staff replies 'iyeh, hna'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day01/l02-d01-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day01/l02-d01-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash hna reception?",
            "english": "Is reception here?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, hna",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 1: The learner is inside the courtyard and looks for reception.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D01-P04",
        "scenario": "The learner explains they are staying at this place.",
        "goal": "Say: I am a guest here for one night.",
        "english": "I am a guest here for one night.",
        "friendlyLatin": "ana guest hna lila",
        "moroccanChat": "ana guest hna lila",
        "arabic": "أنا ضيف هنا ليلة",
        "showArabicByDefault": false,
        "literal": "I am a guest here for one night.",
        "meaning": "I am a guest here for one night.",
        "intent": "Use this in Level 2 hospitality context: الدخول إلى الرياض أول مرة.",
        "cultureNote": "Short identity statements help staff place the reservation without long conversation.",
        "memoryHook": "Pronunciation chunks: ana guest / hna lila",
        "pronunciationParts": [
          "ana guest",
          "hna lila"
        ],
        "possibleMoroccanReply": "wakha, shno smitk?",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 1: الدخول إلى الرياض أول مرة. Show a foreign learner politely handling this situation: The learner explains they are staying at this place.. Visual focus: the phrase 'ana guest hna lila' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الدخول إلى الرياض أول مرة'. Trigger: The learner explains they are staying at this place.. Learner says 'ana guest hna lila'. Moroccan host/staff replies 'wakha, shno smitk?'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day01/l02-d01-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day01/l02-d01-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ana guest hna lila",
            "english": "I am a guest here for one night.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha, shno smitk?",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 1: The learner explains they are staying at this place.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D01-P05",
        "scenario": "The learner closes the welcome moment with a compliment.",
        "goal": "Say: Thank you, the place is beautiful.",
        "english": "Thank you, the place is beautiful.",
        "friendlyLatin": "shukran, l-blasa zwina",
        "moroccanChat": "shukran, l-blasa zwina",
        "arabic": "شكرا، البلاصة زوينة",
        "showArabicByDefault": false,
        "literal": "Thank you, the place is beautiful.",
        "meaning": "Thank you, the place is beautiful.",
        "intent": "Use this in Level 2 hospitality context: الدخول إلى الرياض أول مرة.",
        "cultureNote": "A simple compliment to the place fits Moroccan hospitality and feels warm.",
        "memoryHook": "Pronunciation chunks: shukran / l-blasa zwina",
        "pronunciationParts": [
          "shukran",
          "l-blasa zwina"
        ],
        "possibleMoroccanReply": "allah ykhalik, mrehba",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 1: الدخول إلى الرياض أول مرة. Show a foreign learner politely handling this situation: The learner closes the welcome moment with a compliment.. Visual focus: the phrase 'shukran, l-blasa zwina' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الدخول إلى الرياض أول مرة'. Trigger: The learner closes the welcome moment with a compliment.. Learner says 'shukran, l-blasa zwina'. Moroccan host/staff replies 'allah ykhalik, mrehba'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day01/l02-d01-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day01/l02-d01-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran, l-blasa zwina",
            "english": "Thank you, the place is beautiful.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "allah ykhalik, mrehba",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 1: The learner closes the welcome moment with a compliment.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-002",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 2,
    "week": 1,
    "title": "تأكيد الحجز والاستقبال",
    "situation": "Level 2 hospitality scene: تأكيد الحجز والاستقبال.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D02-P01",
        "scenario": "The learner stands at reception and confirms the booking.",
        "goal": "Say: I have a reservation under my name.",
        "english": "I have a reservation under my name.",
        "friendlyLatin": "aandi reservation b smiya dyali",
        "moroccanChat": "aandi reservation b smiya dyali",
        "arabic": "عندي رزيرفاسيون بسميتي",
        "showArabicByDefault": false,
        "literal": "I have a reservation under my name.",
        "meaning": "I have a reservation under my name.",
        "intent": "Use this in Level 2 hospitality context: تأكيد الحجز والاستقبال.",
        "cultureNote": "Reservation is a common loanword; keep the phrase short and functional.",
        "memoryHook": "Pronunciation chunks: aandi reservation / b smiya / dyali",
        "pronunciationParts": [
          "aandi reservation",
          "b smiya",
          "dyali"
        ],
        "possibleMoroccanReply": "shno smitk?",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 2: تأكيد الحجز والاستقبال. Show a foreign learner politely handling this situation: The learner stands at reception and confirms the booking.. Visual focus: the phrase 'aandi reservation b smiya dyali' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'تأكيد الحجز والاستقبال'. Trigger: The learner stands at reception and confirms the booking.. Learner says 'aandi reservation b smiya dyali'. Moroccan host/staff replies 'shno smitk?'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day02/l02-d02-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day02/l02-d02-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "aandi reservation b smiya dyali",
            "english": "I have a reservation under my name.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "shno smitk?",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 2: The learner stands at reception and confirms the booking.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D02-P02",
        "scenario": "The learner gives their name after being asked.",
        "goal": "Say: My name is ...",
        "english": "My name is ...",
        "friendlyLatin": "smiti ...",
        "moroccanChat": "smiti ...",
        "arabic": "سميتي ...",
        "showArabicByDefault": false,
        "literal": "My name is ...",
        "meaning": "My name is ...",
        "intent": "Use this in Level 2 hospitality context: تأكيد الحجز والاستقبال.",
        "cultureNote": "Use placeholder dots to keep the sentence global for all learners.",
        "memoryHook": "Pronunciation chunks: smiti / ...",
        "pronunciationParts": [
          "smiti",
          "..."
        ],
        "possibleMoroccanReply": "mzyan, shwiya aafak",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 2: تأكيد الحجز والاستقبال. Show a foreign learner politely handling this situation: The learner gives their name after being asked.. Visual focus: the phrase 'smiti ...' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'تأكيد الحجز والاستقبال'. Trigger: The learner gives their name after being asked.. Learner says 'smiti ...'. Moroccan host/staff replies 'mzyan, shwiya aafak'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day02/l02-d02-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day02/l02-d02-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "smiti ...",
            "english": "My name is ...",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mzyan, shwiya aafak",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 2: The learner gives their name after being asked.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D02-P03",
        "scenario": "The learner needs to know if they can go to the room now.",
        "goal": "Say: Is the room ready?",
        "english": "Is the room ready?",
        "friendlyLatin": "wash l-bit wajed?",
        "moroccanChat": "wash l-bit wajed?",
        "arabic": "واش البيت واجد؟",
        "showArabicByDefault": false,
        "literal": "Is the room ready?",
        "meaning": "Is the room ready?",
        "intent": "Use this in Level 2 hospitality context: تأكيد الحجز والاستقبال.",
        "cultureNote": "Room readiness is a common check-in need.",
        "memoryHook": "Pronunciation chunks: wash / l-bit / wajed",
        "pronunciationParts": [
          "wash",
          "l-bit",
          "wajed"
        ],
        "possibleMoroccanReply": "mazal shwiya / iyeh wajed",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 2: تأكيد الحجز والاستقبال. Show a foreign learner politely handling this situation: The learner needs to know if they can go to the room now.. Visual focus: the phrase 'wash l-bit wajed?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'تأكيد الحجز والاستقبال'. Trigger: The learner needs to know if they can go to the room now.. Learner says 'wash l-bit wajed?'. Moroccan host/staff replies 'mazal shwiya / iyeh wajed'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day02/l02-d02-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day02/l02-d02-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash l-bit wajed?",
            "english": "Is the room ready?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mazal shwiya / iyeh wajed",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 2: The learner needs to know if they can go to the room now.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D02-P04",
        "scenario": "The learner asks to view the room politely.",
        "goal": "Say: Can I see the room?",
        "english": "Can I see the room?",
        "friendlyLatin": "nqder nshuf l-bit?",
        "moroccanChat": "nqder nshuf l-bit?",
        "arabic": "نقدر نشوف البيت؟",
        "showArabicByDefault": false,
        "literal": "Can I see the room?",
        "meaning": "Can I see the room?",
        "intent": "Use this in Level 2 hospitality context: تأكيد الحجز والاستقبال.",
        "cultureNote": "Seeing the room before accepting is a practical accommodation scenario.",
        "memoryHook": "Pronunciation chunks: nqder / nshuf / l-bit",
        "pronunciationParts": [
          "nqder",
          "nshuf",
          "l-bit"
        ],
        "possibleMoroccanReply": "iyeh, tfdal",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 2: تأكيد الحجز والاستقبال. Show a foreign learner politely handling this situation: The learner asks to view the room politely.. Visual focus: the phrase 'nqder nshuf l-bit?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'تأكيد الحجز والاستقبال'. Trigger: The learner asks to view the room politely.. Learner says 'nqder nshuf l-bit?'. Moroccan host/staff replies 'iyeh, tfdal'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day02/l02-d02-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day02/l02-d02-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nshuf l-bit?",
            "english": "Can I see the room?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, tfdal",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 2: The learner asks to view the room politely.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D02-P05",
        "scenario": "The room is not ready and the learner accepts waiting calmly.",
        "goal": "Say: Okay, I will wait here.",
        "english": "Okay, I will wait here.",
        "friendlyLatin": "wakha, ghadi ntsenna hna",
        "moroccanChat": "wakha, ghadi ntsenna hna",
        "arabic": "واخا، غادي نتسنى هنا",
        "showArabicByDefault": false,
        "literal": "Okay, I will wait here.",
        "meaning": "Okay, I will wait here.",
        "intent": "Use this in Level 2 hospitality context: تأكيد الحجز والاستقبال.",
        "cultureNote": "A calm response avoids conflict and gives a natural closure.",
        "memoryHook": "Pronunciation chunks: wakha / ghadi ntsenna hna",
        "pronunciationParts": [
          "wakha",
          "ghadi ntsenna hna"
        ],
        "possibleMoroccanReply": "shukran bzaf",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 2: تأكيد الحجز والاستقبال. Show a foreign learner politely handling this situation: The room is not ready and the learner accepts waiting calmly.. Visual focus: the phrase 'wakha, ghadi ntsenna hna' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'تأكيد الحجز والاستقبال'. Trigger: The room is not ready and the learner accepts waiting calmly.. Learner says 'wakha, ghadi ntsenna hna'. Moroccan host/staff replies 'shukran bzaf'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day02/l02-d02-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day02/l02-d02-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wakha, ghadi ntsenna hna",
            "english": "Okay, I will wait here.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "shukran bzaf",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 2: The room is not ready and the learner accepts waiting calmly.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-003",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 3,
    "week": 1,
    "title": "الغرفة والمفتاح والحقائب",
    "situation": "Level 2 hospitality scene: الغرفة والمفتاح والحقائب.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D03-P01",
        "scenario": "The learner receives check-in and asks where to go.",
        "goal": "Say: Where is my room, please?",
        "english": "Where is my room, please?",
        "friendlyLatin": "fin l-bit dyali aafak?",
        "moroccanChat": "fin l-bit dyali aafak?",
        "arabic": "فين البيت ديالي عافاك؟",
        "showArabicByDefault": false,
        "literal": "Where is my room, please?",
        "meaning": "Where is my room, please?",
        "intent": "Use this in Level 2 hospitality context: الغرفة والمفتاح والحقائب.",
        "cultureNote": "This is a core riad/hotel navigation phrase.",
        "memoryHook": "Pronunciation chunks: fin l-bit / dyali aafak",
        "pronunciationParts": [
          "fin l-bit",
          "dyali aafak"
        ],
        "possibleMoroccanReply": "f l-fouq / m3aya",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 3: الغرفة والمفتاح والحقائب. Show a foreign learner politely handling this situation: The learner receives check-in and asks where to go.. Visual focus: the phrase 'fin l-bit dyali aafak?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الغرفة والمفتاح والحقائب'. Trigger: The learner receives check-in and asks where to go.. Learner says 'fin l-bit dyali aafak?'. Moroccan host/staff replies 'f l-fouq / m3aya'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day03/l02-d03-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day03/l02-d03-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "fin l-bit dyali aafak?",
            "english": "Where is my room, please?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "f l-fouq / m3aya",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 3: The learner receives check-in and asks where to go.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D03-P02",
        "scenario": "The learner needs the key at reception.",
        "goal": "Say: Where is the room key?",
        "english": "Where is the room key?",
        "friendlyLatin": "fin l-kle dyal l-bit?",
        "moroccanChat": "fin l-kle dyal l-bit?",
        "arabic": "فين الكلي ديال البيت؟",
        "showArabicByDefault": false,
        "literal": "Where is the room key?",
        "meaning": "Where is the room key?",
        "intent": "Use this in Level 2 hospitality context: الغرفة والمفتاح والحقائب.",
        "cultureNote": "French loanword clé/key is common in Moroccan speech.",
        "memoryHook": "Pronunciation chunks: fin l-kle / dyal l-bit",
        "pronunciationParts": [
          "fin l-kle",
          "dyal l-bit"
        ],
        "possibleMoroccanReply": "ha l-kle",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 3: الغرفة والمفتاح والحقائب. Show a foreign learner politely handling this situation: The learner needs the key at reception.. Visual focus: the phrase 'fin l-kle dyal l-bit?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الغرفة والمفتاح والحقائب'. Trigger: The learner needs the key at reception.. Learner says 'fin l-kle dyal l-bit?'. Moroccan host/staff replies 'ha l-kle'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day03/l02-d03-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day03/l02-d03-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "fin l-kle dyal l-bit?",
            "english": "Where is the room key?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "ha l-kle",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 3: The learner needs the key at reception.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D03-P03",
        "scenario": "The learner politely signals they need help with luggage.",
        "goal": "Say: My suitcase is a little heavy.",
        "english": "My suitcase is a little heavy.",
        "friendlyLatin": "had shnati tqila shwiya",
        "moroccanChat": "had shnati tqila shwiya",
        "arabic": "هاد شنطتي تقيلة شوية",
        "showArabicByDefault": false,
        "literal": "My suitcase is a little heavy.",
        "meaning": "My suitcase is a little heavy.",
        "intent": "Use this in Level 2 hospitality context: الغرفة والمفتاح والحقائب.",
        "cultureNote": "Indirect request sounds more polite than demanding help.",
        "memoryHook": "Pronunciation chunks: had shnati / tqila shwiya",
        "pronunciationParts": [
          "had shnati",
          "tqila shwiya"
        ],
        "possibleMoroccanReply": "n3awnk?",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 3: الغرفة والمفتاح والحقائب. Show a foreign learner politely handling this situation: The learner politely signals they need help with luggage.. Visual focus: the phrase 'had shnati tqila shwiya' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الغرفة والمفتاح والحقائب'. Trigger: The learner politely signals they need help with luggage.. Learner says 'had shnati tqila shwiya'. Moroccan host/staff replies 'n3awnk?'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day03/l02-d03-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day03/l02-d03-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "had shnati tqila shwiya",
            "english": "My suitcase is a little heavy.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "n3awnk?",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 3: The learner politely signals they need help with luggage.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D03-P04",
        "scenario": "The room is not ready or the learner will go out.",
        "goal": "Say: Can I leave my suitcase here?",
        "english": "Can I leave my suitcase here?",
        "friendlyLatin": "nqder nkhli shnati hna?",
        "moroccanChat": "nqder nkhli shnati hna?",
        "arabic": "نقدر نخلي شنطتي هنا؟",
        "showArabicByDefault": false,
        "literal": "Can I leave my suitcase here?",
        "meaning": "Can I leave my suitcase here?",
        "intent": "Use this in Level 2 hospitality context: الغرفة والمفتاح والحقائب.",
        "cultureNote": "Luggage storage is common before check-in or after check-out.",
        "memoryHook": "Pronunciation chunks: nqder nkhli / shnati hna",
        "pronunciationParts": [
          "nqder nkhli",
          "shnati hna"
        ],
        "possibleMoroccanReply": "iyeh, khlliha hna",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 3: الغرفة والمفتاح والحقائب. Show a foreign learner politely handling this situation: The room is not ready or the learner will go out.. Visual focus: the phrase 'nqder nkhli shnati hna?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الغرفة والمفتاح والحقائب'. Trigger: The room is not ready or the learner will go out.. Learner says 'nqder nkhli shnati hna?'. Moroccan host/staff replies 'iyeh, khlliha hna'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day03/l02-d03-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day03/l02-d03-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nkhli shnati hna?",
            "english": "Can I leave my suitcase here?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, khlliha hna",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 3: The room is not ready or the learner will go out.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D03-P05",
        "scenario": "The staff helps with key or bags and the learner closes politely.",
        "goal": "Say: Thank you for the help.",
        "english": "Thank you for the help.",
        "friendlyLatin": "shukran ala l-musaada",
        "moroccanChat": "shukran ala l-musaada",
        "arabic": "شكرا على المساعدة",
        "showArabicByDefault": false,
        "literal": "Thank you for the help.",
        "meaning": "Thank you for the help.",
        "intent": "Use this in Level 2 hospitality context: الغرفة والمفتاح والحقائب.",
        "cultureNote": "Warm thanks are central in guest-host exchanges.",
        "memoryHook": "Pronunciation chunks: shukran / ala / l-musaada",
        "pronunciationParts": [
          "shukran",
          "ala",
          "l-musaada"
        ],
        "possibleMoroccanReply": "bla jmil",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 3: الغرفة والمفتاح والحقائب. Show a foreign learner politely handling this situation: The staff helps with key or bags and the learner closes politely.. Visual focus: the phrase 'shukran ala l-musaada' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الغرفة والمفتاح والحقائب'. Trigger: The staff helps with key or bags and the learner closes politely.. Learner says 'shukran ala l-musaada'. Moroccan host/staff replies 'bla jmil'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day03/l02-d03-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day03/l02-d03-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran ala l-musaada",
            "english": "Thank you for the help.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bla jmil",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 3: The staff helps with key or bags and the learner closes politely.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-004",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 4,
    "week": 1,
    "title": "السؤال عن Wi‑Fi والمرافق",
    "situation": "Level 2 hospitality scene: السؤال عن Wi‑Fi والمرافق.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D04-P01",
        "scenario": "The learner arrives and needs internet access.",
        "goal": "Say: Is there Wi‑Fi?",
        "english": "Is there Wi‑Fi?",
        "friendlyLatin": "kayn wifi?",
        "moroccanChat": "kayn wifi?",
        "arabic": "كاين ويفي؟",
        "showArabicByDefault": false,
        "literal": "Is there Wi‑Fi?",
        "meaning": "Is there Wi‑Fi?",
        "intent": "Use this in Level 2 hospitality context: السؤال عن Wi‑Fi والمرافق.",
        "cultureNote": "Wi‑Fi questions appear in hotel/riad phrase guides and are essential for travelers.",
        "memoryHook": "Pronunciation chunks: kayn / wifi",
        "pronunciationParts": [
          "kayn",
          "wifi"
        ],
        "possibleMoroccanReply": "iyeh kayn",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 4: السؤال عن Wi‑Fi والمرافق. Show a foreign learner politely handling this situation: The learner arrives and needs internet access.. Visual focus: the phrase 'kayn wifi?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'السؤال عن Wi‑Fi والمرافق'. Trigger: The learner arrives and needs internet access.. Learner says 'kayn wifi?'. Moroccan host/staff replies 'iyeh kayn'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day04/l02-d04-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day04/l02-d04-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "kayn wifi?",
            "english": "Is there Wi‑Fi?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh kayn",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 4: The learner arrives and needs internet access.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D04-P02",
        "scenario": "The learner asks for the Wi‑Fi code.",
        "goal": "Say: What is the Wi‑Fi password?",
        "english": "What is the Wi‑Fi password?",
        "friendlyLatin": "shno l-code dyal l-wifi?",
        "moroccanChat": "shno l-code dyal l-wifi?",
        "arabic": "شنو الكود ديال الويفي؟",
        "showArabicByDefault": false,
        "literal": "What is the Wi‑Fi password?",
        "meaning": "What is the Wi‑Fi password?",
        "intent": "Use this in Level 2 hospitality context: السؤال عن Wi‑Fi والمرافق.",
        "cultureNote": "A code/password question is common at riads and cafés.",
        "memoryHook": "Pronunciation chunks: shno l-code / dyal l-wifi",
        "pronunciationParts": [
          "shno l-code",
          "dyal l-wifi"
        ],
        "possibleMoroccanReply": "ha l-code",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 4: السؤال عن Wi‑Fi والمرافق. Show a foreign learner politely handling this situation: The learner asks for the Wi‑Fi code.. Visual focus: the phrase 'shno l-code dyal l-wifi?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'السؤال عن Wi‑Fi والمرافق'. Trigger: The learner asks for the Wi‑Fi code.. Learner says 'shno l-code dyal l-wifi?'. Moroccan host/staff replies 'ha l-code'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day04/l02-d04-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day04/l02-d04-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shno l-code dyal l-wifi?",
            "english": "What is the Wi‑Fi password?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "ha l-code",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 4: The learner asks for the Wi‑Fi code.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D04-P03",
        "scenario": "The learner asks for a bathroom inside the riad.",
        "goal": "Say: Where is the bathroom, please?",
        "english": "Where is the bathroom, please?",
        "friendlyLatin": "fin l-hmam aafak?",
        "moroccanChat": "fin l-hmam aafak?",
        "arabic": "فين الحمام عافاك؟",
        "showArabicByDefault": false,
        "literal": "Where is the bathroom, please?",
        "meaning": "Where is the bathroom, please?",
        "intent": "Use this in Level 2 hospitality context: السؤال عن Wi‑Fi والمرافق.",
        "cultureNote": "Keep it simple: location phrases remain useful across levels.",
        "memoryHook": "Pronunciation chunks: fin / l-hmam / aafak",
        "pronunciationParts": [
          "fin",
          "l-hmam",
          "aafak"
        ],
        "possibleMoroccanReply": "hna ala limn",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 4: السؤال عن Wi‑Fi والمرافق. Show a foreign learner politely handling this situation: The learner asks for a bathroom inside the riad.. Visual focus: the phrase 'fin l-hmam aafak?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'السؤال عن Wi‑Fi والمرافق'. Trigger: The learner asks for a bathroom inside the riad.. Learner says 'fin l-hmam aafak?'. Moroccan host/staff replies 'hna ala limn'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day04/l02-d04-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day04/l02-d04-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "fin l-hmam aafak?",
            "english": "Where is the bathroom, please?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "hna ala limn",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 4: The learner asks for a bathroom inside the riad.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D04-P04",
        "scenario": "The learner hears there is a terrace and asks where it is.",
        "goal": "Say: Where is the rooftop?",
        "english": "Where is the rooftop?",
        "friendlyLatin": "fin stah?",
        "moroccanChat": "fin stah?",
        "arabic": "فين السطح؟",
        "showArabicByDefault": false,
        "literal": "Where is the rooftop?",
        "meaning": "Where is the rooftop?",
        "intent": "Use this in Level 2 hospitality context: السؤال عن Wi‑Fi والمرافق.",
        "cultureNote": "Rooftop terraces are common in riads; useful for realistic visuals.",
        "memoryHook": "Pronunciation chunks: fin / stah",
        "pronunciationParts": [
          "fin",
          "stah"
        ],
        "possibleMoroccanReply": "f l-fouq",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 4: السؤال عن Wi‑Fi والمرافق. Show a foreign learner politely handling this situation: The learner hears there is a terrace and asks where it is.. Visual focus: the phrase 'fin stah?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'السؤال عن Wi‑Fi والمرافق'. Trigger: The learner hears there is a terrace and asks where it is.. Learner says 'fin stah?'. Moroccan host/staff replies 'f l-fouq'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day04/l02-d04-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day04/l02-d04-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "fin stah?",
            "english": "Where is the rooftop?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "f l-fouq",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 4: The learner hears there is a terrace and asks where it is.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D04-P05",
        "scenario": "The learner asks about hot water.",
        "goal": "Say: Is there hot water?",
        "english": "Is there hot water?",
        "friendlyLatin": "wash kayn l-ma skhon?",
        "moroccanChat": "wash kayn l-ma skhon?",
        "arabic": "واش كاين الما سخون؟",
        "showArabicByDefault": false,
        "literal": "Is there hot water?",
        "meaning": "Is there hot water?",
        "intent": "Use this in Level 2 hospitality context: السؤال عن Wi‑Fi والمرافق.",
        "cultureNote": "Hot water is a practical accommodation need and easy to visualize.",
        "memoryHook": "Pronunciation chunks: wash kayn / l-ma skhon",
        "pronunciationParts": [
          "wash kayn",
          "l-ma skhon"
        ],
        "possibleMoroccanReply": "iyeh kayn",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 4: السؤال عن Wi‑Fi والمرافق. Show a foreign learner politely handling this situation: The learner asks about hot water.. Visual focus: the phrase 'wash kayn l-ma skhon?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'السؤال عن Wi‑Fi والمرافق'. Trigger: The learner asks about hot water.. Learner says 'wash kayn l-ma skhon?'. Moroccan host/staff replies 'iyeh kayn'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day04/l02-d04-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day04/l02-d04-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash kayn l-ma skhon?",
            "english": "Is there hot water?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh kayn",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 4: The learner asks about hot water.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-005",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 5,
    "week": 1,
    "title": "الفطور المغربي في الرياض",
    "situation": "Level 2 hospitality scene: الفطور المغربي في الرياض.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D05-P01",
        "scenario": "The learner asks the breakfast time.",
        "goal": "Say: What time is breakfast?",
        "english": "What time is breakfast?",
        "friendlyLatin": "imta l-ftor?",
        "moroccanChat": "imta l-ftor?",
        "arabic": "إيمتا الفطور؟",
        "showArabicByDefault": false,
        "literal": "What time is breakfast?",
        "meaning": "What time is breakfast?",
        "intent": "Use this in Level 2 hospitality context: الفطور المغربي في الرياض.",
        "cultureNote": "Breakfast time appears in hotel/riad scenarios.",
        "memoryHook": "Pronunciation chunks: imta / l-ftor",
        "pronunciationParts": [
          "imta",
          "l-ftor"
        ],
        "possibleMoroccanReply": "m3a tmnya",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 5: الفطور المغربي في الرياض. Show a foreign learner politely handling this situation: The learner asks the breakfast time.. Visual focus: the phrase 'imta l-ftor?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الفطور المغربي في الرياض'. Trigger: The learner asks the breakfast time.. Learner says 'imta l-ftor?'. Moroccan host/staff replies 'm3a tmnya'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day05/l02-d05-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day05/l02-d05-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "imta l-ftor?",
            "english": "What time is breakfast?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "m3a tmnya",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 5: The learner asks the breakfast time.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D05-P02",
        "scenario": "The learner checks if breakfast is included.",
        "goal": "Say: Is breakfast included in the price?",
        "english": "Is breakfast included in the price?",
        "friendlyLatin": "wash l-ftor dakhel f l-hsab?",
        "moroccanChat": "wash l-ftor dakhel f l-hsab?",
        "arabic": "واش الفطور داخل فالحساب؟",
        "showArabicByDefault": false,
        "literal": "Is breakfast included in the price?",
        "meaning": "Is breakfast included in the price?",
        "intent": "Use this in Level 2 hospitality context: الفطور المغربي في الرياض.",
        "cultureNote": "Breakfast is often part of riad stays and important to ask about.",
        "memoryHook": "Pronunciation chunks: wash l-ftor / dakhel f / l-hsab",
        "pronunciationParts": [
          "wash l-ftor",
          "dakhel f",
          "l-hsab"
        ],
        "possibleMoroccanReply": "iyeh dakhel",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 5: الفطور المغربي في الرياض. Show a foreign learner politely handling this situation: The learner checks if breakfast is included.. Visual focus: the phrase 'wash l-ftor dakhel f l-hsab?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الفطور المغربي في الرياض'. Trigger: The learner checks if breakfast is included.. Learner says 'wash l-ftor dakhel f l-hsab?'. Moroccan host/staff replies 'iyeh dakhel'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day05/l02-d05-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day05/l02-d05-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash l-ftor dakhel f l-hsab?",
            "english": "Is breakfast included in the price?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh dakhel",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 5: The learner checks if breakfast is included.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D05-P03",
        "scenario": "The learner needs the location: patio, terrace, room.",
        "goal": "Say: Where do I eat breakfast?",
        "english": "Where do I eat breakfast?",
        "friendlyLatin": "fin nakol l-ftor?",
        "moroccanChat": "fin nakol l-ftor?",
        "arabic": "فين ناكل الفطور؟",
        "showArabicByDefault": false,
        "literal": "Where do I eat breakfast?",
        "meaning": "Where do I eat breakfast?",
        "intent": "Use this in Level 2 hospitality context: الفطور المغربي في الرياض.",
        "cultureNote": "Riad breakfast may be on a terrace or courtyard, so location matters.",
        "memoryHook": "Pronunciation chunks: fin / nakol / l-ftor",
        "pronunciationParts": [
          "fin",
          "nakol",
          "l-ftor"
        ],
        "possibleMoroccanReply": "f stah / hna",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 5: الفطور المغربي في الرياض. Show a foreign learner politely handling this situation: The learner needs the location: patio, terrace, room.. Visual focus: the phrase 'fin nakol l-ftor?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الفطور المغربي في الرياض'. Trigger: The learner needs the location: patio, terrace, room.. Learner says 'fin nakol l-ftor?'. Moroccan host/staff replies 'f stah / hna'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day05/l02-d05-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day05/l02-d05-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "fin nakol l-ftor?",
            "english": "Where do I eat breakfast?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "f stah / hna",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 5: The learner needs the location: patio, terrace, room.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D05-P04",
        "scenario": "The learner customizes Moroccan tea politely.",
        "goal": "Say: I would like tea without sugar, please.",
        "english": "I would like tea without sugar, please.",
        "friendlyLatin": "bghit atay bla sokar aafak",
        "moroccanChat": "bghit atay bla sokar aafak",
        "arabic": "بغيت أتاي بلا سكر عافاك",
        "showArabicByDefault": false,
        "literal": "I would like tea without sugar, please.",
        "meaning": "I would like tea without sugar, please.",
        "intent": "Use this in Level 2 hospitality context: الفطور المغربي في الرياض.",
        "cultureNote": "Tea is central, but sugar preference should be asked politely.",
        "memoryHook": "Pronunciation chunks: bghit atay / bla sokar / aafak",
        "pronunciationParts": [
          "bghit atay",
          "bla sokar",
          "aafak"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 5: الفطور المغربي في الرياض. Show a foreign learner politely handling this situation: The learner customizes Moroccan tea politely.. Visual focus: the phrase 'bghit atay bla sokar aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الفطور المغربي في الرياض'. Trigger: The learner customizes Moroccan tea politely.. Learner says 'bghit atay bla sokar aafak'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day05/l02-d05-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day05/l02-d05-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit atay bla sokar aafak",
            "english": "I would like tea without sugar, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 5: The learner customizes Moroccan tea politely.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D05-P05",
        "scenario": "The learner compliments breakfast.",
        "goal": "Say: Breakfast is delicious, thank you.",
        "english": "Breakfast is delicious, thank you.",
        "friendlyLatin": "l-ftor bnin, shukran",
        "moroccanChat": "l-ftor bnin, shukran",
        "arabic": "الفطور بنين، شكرا",
        "showArabicByDefault": false,
        "literal": "Breakfast is delicious, thank you.",
        "meaning": "Breakfast is delicious, thank you.",
        "intent": "Use this in Level 2 hospitality context: الفطور المغربي في الرياض.",
        "cultureNote": "Complimenting food is a warm cultural response.",
        "memoryHook": "Pronunciation chunks: l-ftor bnin / shukran",
        "pronunciationParts": [
          "l-ftor bnin",
          "shukran"
        ],
        "possibleMoroccanReply": "bsaha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 5: الفطور المغربي في الرياض. Show a foreign learner politely handling this situation: The learner compliments breakfast.. Visual focus: the phrase 'l-ftor bnin, shukran' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الفطور المغربي في الرياض'. Trigger: The learner compliments breakfast.. Learner says 'l-ftor bnin, shukran'. Moroccan host/staff replies 'bsaha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day05/l02-d05-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day05/l02-d05-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-ftor bnin, shukran",
            "english": "Breakfast is delicious, thank you.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bsaha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 5: The learner compliments breakfast.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-006",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 6,
    "week": 1,
    "title": "طلب الشاي والماء بأدب",
    "situation": "Level 2 hospitality scene: طلب الشاي والماء بأدب.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D06-P01",
        "scenario": "The learner asks for tea in a riad/home.",
        "goal": "Say: Can I have tea?",
        "english": "Can I have tea?",
        "friendlyLatin": "nqder nakhod atay?",
        "moroccanChat": "nqder nakhod atay?",
        "arabic": "نقدر ناخد أتاي؟",
        "showArabicByDefault": false,
        "literal": "Can I have tea?",
        "meaning": "Can I have tea?",
        "intent": "Use this in Level 2 hospitality context: طلب الشاي والماء بأدب.",
        "cultureNote": "Ask gently; tea is hospitality, not just a drink.",
        "memoryHook": "Pronunciation chunks: nqder / nakhod / atay",
        "pronunciationParts": [
          "nqder",
          "nakhod",
          "atay"
        ],
        "possibleMoroccanReply": "iyeh, daba",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 6: طلب الشاي والماء بأدب. Show a foreign learner politely handling this situation: The learner asks for tea in a riad/home.. Visual focus: the phrase 'nqder nakhod atay?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب الشاي والماء بأدب'. Trigger: The learner asks for tea in a riad/home.. Learner says 'nqder nakhod atay?'. Moroccan host/staff replies 'iyeh, daba'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day06/l02-d06-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day06/l02-d06-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nakhod atay?",
            "english": "Can I have tea?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, daba",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 6: The learner asks for tea in a riad/home.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D06-P02",
        "scenario": "The learner asks for water after arriving.",
        "goal": "Say: I would like a glass of water, please.",
        "english": "I would like a glass of water, please.",
        "friendlyLatin": "bghit kas dyal l-ma aafak",
        "moroccanChat": "bghit kas dyal l-ma aafak",
        "arabic": "بغيت كاس ديال الما عافاك",
        "showArabicByDefault": false,
        "literal": "I would like a glass of water, please.",
        "meaning": "I would like a glass of water, please.",
        "intent": "Use this in Level 2 hospitality context: طلب الشاي والماء بأدب.",
        "cultureNote": "Water requests should be simple and polite.",
        "memoryHook": "Pronunciation chunks: bghit kas / dyal l-ma / aafak",
        "pronunciationParts": [
          "bghit kas",
          "dyal l-ma",
          "aafak"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 6: طلب الشاي والماء بأدب. Show a foreign learner politely handling this situation: The learner asks for water after arriving.. Visual focus: the phrase 'bghit kas dyal l-ma aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب الشاي والماء بأدب'. Trigger: The learner asks for water after arriving.. Learner says 'bghit kas dyal l-ma aafak'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day06/l02-d06-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day06/l02-d06-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit kas dyal l-ma aafak",
            "english": "I would like a glass of water, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 6: The learner asks for water after arriving.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D06-P03",
        "scenario": "The host serves tea and the learner responds warmly.",
        "goal": "Say: The tea is very good.",
        "english": "The tea is very good.",
        "friendlyLatin": "l-atay bnin bzaf",
        "moroccanChat": "l-atay bnin bzaf",
        "arabic": "الأتاي بنين بزاف",
        "showArabicByDefault": false,
        "literal": "The tea is very good.",
        "meaning": "The tea is very good.",
        "intent": "Use this in Level 2 hospitality context: طلب الشاي والماء بأدب.",
        "cultureNote": "Complimenting tea respects the host’s effort.",
        "memoryHook": "Pronunciation chunks: l-atay / bnin / bzaf",
        "pronunciationParts": [
          "l-atay",
          "bnin",
          "bzaf"
        ],
        "possibleMoroccanReply": "bsaha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 6: طلب الشاي والماء بأدب. Show a foreign learner politely handling this situation: The host serves tea and the learner responds warmly.. Visual focus: the phrase 'l-atay bnin bzaf' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب الشاي والماء بأدب'. Trigger: The host serves tea and the learner responds warmly.. Learner says 'l-atay bnin bzaf'. Moroccan host/staff replies 'bsaha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day06/l02-d06-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day06/l02-d06-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-atay bnin bzaf",
            "english": "The tea is very good.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bsaha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 6: The host serves tea and the learner responds warmly.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D06-P04",
        "scenario": "The learner asks for less sugar without rejecting tea.",
        "goal": "Say: A little sugar, please.",
        "english": "A little sugar, please.",
        "friendlyLatin": "shwiya sokar aafak",
        "moroccanChat": "shwiya sokar aafak",
        "arabic": "شوية سكر عافاك",
        "showArabicByDefault": false,
        "literal": "A little sugar, please.",
        "meaning": "A little sugar, please.",
        "intent": "Use this in Level 2 hospitality context: طلب الشاي والماء بأدب.",
        "cultureNote": "Better to adjust gently than refuse hospitality directly.",
        "memoryHook": "Pronunciation chunks: shwiya / sokar / aafak",
        "pronunciationParts": [
          "shwiya",
          "sokar",
          "aafak"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 6: طلب الشاي والماء بأدب. Show a foreign learner politely handling this situation: The learner asks for less sugar without rejecting tea.. Visual focus: the phrase 'shwiya sokar aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب الشاي والماء بأدب'. Trigger: The learner asks for less sugar without rejecting tea.. Learner says 'shwiya sokar aafak'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day06/l02-d06-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day06/l02-d06-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shwiya sokar aafak",
            "english": "A little sugar, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 6: The learner asks for less sugar without rejecting tea.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D06-P05",
        "scenario": "The learner thanks the host in a warmer Moroccan way.",
        "goal": "Say: God bless you / thank you.",
        "english": "God bless you / thank you.",
        "friendlyLatin": "baraka allah fik",
        "moroccanChat": "baraka allah fik",
        "arabic": "بارك الله فيك",
        "showArabicByDefault": false,
        "literal": "God bless you / thank you.",
        "meaning": "God bless you / thank you.",
        "intent": "Use this in Level 2 hospitality context: طلب الشاي والماء بأدب.",
        "cultureNote": "This formula feels more heartfelt than a basic thank you.",
        "memoryHook": "Pronunciation chunks: baraka / allah / fik",
        "pronunciationParts": [
          "baraka",
          "allah",
          "fik"
        ],
        "possibleMoroccanReply": "amin",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 6: طلب الشاي والماء بأدب. Show a foreign learner politely handling this situation: The learner thanks the host in a warmer Moroccan way.. Visual focus: the phrase 'baraka allah fik' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب الشاي والماء بأدب'. Trigger: The learner thanks the host in a warmer Moroccan way.. Learner says 'baraka allah fik'. Moroccan host/staff replies 'amin'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day06/l02-d06-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day06/l02-d06-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "baraka allah fik",
            "english": "God bless you / thank you.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "amin",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 6: The learner thanks the host in a warmer Moroccan way.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-007",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 7,
    "week": 1,
    "title": "مراجعة أسبوع 1: الضيافة الأساسية",
    "situation": "Level 2 hospitality scene: مراجعة أسبوع 1: الضيافة الأساسية.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D07-P01",
        "scenario": "Review of arrival and booking.",
        "goal": "Say: Hello, I have a reservation.",
        "english": "Hello, I have a reservation.",
        "friendlyLatin": "salam, aandi reservation",
        "moroccanChat": "salam, aandi reservation",
        "arabic": "سلام، عندي رزيرفاسيون",
        "showArabicByDefault": false,
        "literal": "Hello, I have a reservation.",
        "meaning": "Hello, I have a reservation.",
        "intent": "Use this in Level 2 hospitality context: مراجعة أسبوع 1: الضيافة الأساسية.",
        "cultureNote": "Combines greeting with the core booking function.",
        "memoryHook": "Pronunciation chunks: salam / aandi reservation",
        "pronunciationParts": [
          "salam",
          "aandi reservation"
        ],
        "possibleMoroccanReply": "mrehba, shno smitk?",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 7: مراجعة أسبوع 1: الضيافة الأساسية. Show a foreign learner politely handling this situation: Review of arrival and booking.. Visual focus: the phrase 'salam, aandi reservation' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة أسبوع 1: الضيافة الأساسية'. Trigger: Review of arrival and booking.. Learner says 'salam, aandi reservation'. Moroccan host/staff replies 'mrehba, shno smitk?'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day07/l02-d07-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day07/l02-d07-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "salam, aandi reservation",
            "english": "Hello, I have a reservation.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mrehba, shno smitk?",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 7: Review of arrival and booking.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D07-P02",
        "scenario": "Review of Wi‑Fi need at the riad.",
        "goal": "Say: What is the Wi‑Fi code?",
        "english": "What is the Wi‑Fi code?",
        "friendlyLatin": "shno l-code dyal l-wifi?",
        "moroccanChat": "shno l-code dyal l-wifi?",
        "arabic": "شنو الكود ديال الويفي؟",
        "showArabicByDefault": false,
        "literal": "What is the Wi‑Fi code?",
        "meaning": "What is the Wi‑Fi code?",
        "intent": "Use this in Level 2 hospitality context: مراجعة أسبوع 1: الضيافة الأساسية.",
        "cultureNote": "A highly practical phrase worth early review.",
        "memoryHook": "Pronunciation chunks: shno l-code / dyal l-wifi",
        "pronunciationParts": [
          "shno l-code",
          "dyal l-wifi"
        ],
        "possibleMoroccanReply": "ha l-code",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 7: مراجعة أسبوع 1: الضيافة الأساسية. Show a foreign learner politely handling this situation: Review of Wi‑Fi need at the riad.. Visual focus: the phrase 'shno l-code dyal l-wifi?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة أسبوع 1: الضيافة الأساسية'. Trigger: Review of Wi‑Fi need at the riad.. Learner says 'shno l-code dyal l-wifi?'. Moroccan host/staff replies 'ha l-code'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day07/l02-d07-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day07/l02-d07-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shno l-code dyal l-wifi?",
            "english": "What is the Wi‑Fi code?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "ha l-code",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 7: Review of Wi‑Fi need at the riad.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D07-P03",
        "scenario": "Review of breakfast timing.",
        "goal": "Say: What time is breakfast?",
        "english": "What time is breakfast?",
        "friendlyLatin": "imta l-ftor?",
        "moroccanChat": "imta l-ftor?",
        "arabic": "إيمتا الفطور؟",
        "showArabicByDefault": false,
        "literal": "What time is breakfast?",
        "meaning": "What time is breakfast?",
        "intent": "Use this in Level 2 hospitality context: مراجعة أسبوع 1: الضيافة الأساسية.",
        "cultureNote": "A short useful question for riads.",
        "memoryHook": "Pronunciation chunks: imta / l-ftor",
        "pronunciationParts": [
          "imta",
          "l-ftor"
        ],
        "possibleMoroccanReply": "m3a tmnya",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 7: مراجعة أسبوع 1: الضيافة الأساسية. Show a foreign learner politely handling this situation: Review of breakfast timing.. Visual focus: the phrase 'imta l-ftor?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة أسبوع 1: الضيافة الأساسية'. Trigger: Review of breakfast timing.. Learner says 'imta l-ftor?'. Moroccan host/staff replies 'm3a tmnya'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day07/l02-d07-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day07/l02-d07-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "imta l-ftor?",
            "english": "What time is breakfast?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "m3a tmnya",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 7: Review of breakfast timing.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D07-P04",
        "scenario": "Review of room navigation.",
        "goal": "Say: Where is my room?",
        "english": "Where is my room?",
        "friendlyLatin": "fin l-bit dyali?",
        "moroccanChat": "fin l-bit dyali?",
        "arabic": "فين البيت ديالي؟",
        "showArabicByDefault": false,
        "literal": "Where is my room?",
        "meaning": "Where is my room?",
        "intent": "Use this in Level 2 hospitality context: مراجعة أسبوع 1: الضيافة الأساسية.",
        "cultureNote": "This checks comprehension of place words and possession.",
        "memoryHook": "Pronunciation chunks: fin / l-bit / dyali",
        "pronunciationParts": [
          "fin",
          "l-bit",
          "dyali"
        ],
        "possibleMoroccanReply": "m3aya aafak",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 7: مراجعة أسبوع 1: الضيافة الأساسية. Show a foreign learner politely handling this situation: Review of room navigation.. Visual focus: the phrase 'fin l-bit dyali?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة أسبوع 1: الضيافة الأساسية'. Trigger: Review of room navigation.. Learner says 'fin l-bit dyali?'. Moroccan host/staff replies 'm3aya aafak'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day07/l02-d07-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day07/l02-d07-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "fin l-bit dyali?",
            "english": "Where is my room?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "m3aya aafak",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 7: Review of room navigation.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D07-P05",
        "scenario": "Review closure after welcome help.",
        "goal": "Say: Thank you for everything.",
        "english": "Thank you for everything.",
        "friendlyLatin": "shukran ala kolshi",
        "moroccanChat": "shukran ala kolshi",
        "arabic": "شكرا على كلشي",
        "showArabicByDefault": false,
        "literal": "Thank you for everything.",
        "meaning": "Thank you for everything.",
        "intent": "Use this in Level 2 hospitality context: مراجعة أسبوع 1: الضيافة الأساسية.",
        "cultureNote": "A polite closing phrase anchors the hospitality theme.",
        "memoryHook": "Pronunciation chunks: shukran / ala / kolshi",
        "pronunciationParts": [
          "shukran",
          "ala",
          "kolshi"
        ],
        "possibleMoroccanReply": "bla jmil",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 7: مراجعة أسبوع 1: الضيافة الأساسية. Show a foreign learner politely handling this situation: Review closure after welcome help.. Visual focus: the phrase 'shukran ala kolshi' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة أسبوع 1: الضيافة الأساسية'. Trigger: Review closure after welcome help.. Learner says 'shukran ala kolshi'. Moroccan host/staff replies 'bla jmil'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day07/l02-d07-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day07/l02-d07-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran ala kolshi",
            "english": "Thank you for everything.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bla jmil",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 7: Review closure after welcome help.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-008",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 8,
    "week": 2,
    "title": "الاستئذان قبل الدخول أو الجلوس",
    "situation": "Level 2 hospitality scene: الاستئذان قبل الدخول أو الجلوس.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D08-P01",
        "scenario": "The learner is at a room/courtyard/host space and asks permission.",
        "goal": "Say: Can I come in?",
        "english": "Can I come in?",
        "friendlyLatin": "nqder ndkhol?",
        "moroccanChat": "nqder ndkhol?",
        "arabic": "نقدر ندخل؟",
        "showArabicByDefault": false,
        "literal": "Can I come in?",
        "meaning": "Can I come in?",
        "intent": "Use this in Level 2 hospitality context: الاستئذان قبل الدخول أو الجلوس.",
        "cultureNote": "Permission language is important in homes and guest spaces.",
        "memoryHook": "Pronunciation chunks: nqder / ndkhol",
        "pronunciationParts": [
          "nqder",
          "ndkhol"
        ],
        "possibleMoroccanReply": "iyeh, tfdal",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 8: الاستئذان قبل الدخول أو الجلوس. Show a foreign learner politely handling this situation: The learner is at a room/courtyard/host space and asks permission.. Visual focus: the phrase 'nqder ndkhol?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الاستئذان قبل الدخول أو الجلوس'. Trigger: The learner is at a room/courtyard/host space and asks permission.. Learner says 'nqder ndkhol?'. Moroccan host/staff replies 'iyeh, tfdal'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day08/l02-d08-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day08/l02-d08-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder ndkhol?",
            "english": "Can I come in?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, tfdal",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 8: The learner is at a room/courtyard/host space and asks permission.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D08-P02",
        "scenario": "The learner wants to sit in the patio or salon.",
        "goal": "Say: Can I sit here?",
        "english": "Can I sit here?",
        "friendlyLatin": "nqder njles hna?",
        "moroccanChat": "nqder njles hna?",
        "arabic": "نقدر نجلس هنا؟",
        "showArabicByDefault": false,
        "literal": "Can I sit here?",
        "meaning": "Can I sit here?",
        "intent": "Use this in Level 2 hospitality context: الاستئذان قبل الدخول أو الجلوس.",
        "cultureNote": "Asking before sitting is culturally safe in private spaces.",
        "memoryHook": "Pronunciation chunks: nqder / njles / hna",
        "pronunciationParts": [
          "nqder",
          "njles",
          "hna"
        ],
        "possibleMoroccanReply": "iyeh, gls",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 8: الاستئذان قبل الدخول أو الجلوس. Show a foreign learner politely handling this situation: The learner wants to sit in the patio or salon.. Visual focus: the phrase 'nqder njles hna?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الاستئذان قبل الدخول أو الجلوس'. Trigger: The learner wants to sit in the patio or salon.. Learner says 'nqder njles hna?'. Moroccan host/staff replies 'iyeh, gls'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day08/l02-d08-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day08/l02-d08-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder njles hna?",
            "english": "Can I sit here?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, gls",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 8: The learner wants to sit in the patio or salon.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D08-P03",
        "scenario": "The learner wants fresh air in a shared room/salon.",
        "goal": "Say: Can I open the window?",
        "english": "Can I open the window?",
        "friendlyLatin": "nqder nhell l-shrjem?",
        "moroccanChat": "nqder nhell l-shrjem?",
        "arabic": "نقدر نحل الشرجم؟",
        "showArabicByDefault": false,
        "literal": "Can I open the window?",
        "meaning": "Can I open the window?",
        "intent": "Use this in Level 2 hospitality context: الاستئذان قبل الدخول أو الجلوس.",
        "cultureNote": "Ask before changing shared space conditions.",
        "memoryHook": "Pronunciation chunks: nqder / nhell / l-shrjem",
        "pronunciationParts": [
          "nqder",
          "nhell",
          "l-shrjem"
        ],
        "possibleMoroccanReply": "iyeh / la, shwiya",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 8: الاستئذان قبل الدخول أو الجلوس. Show a foreign learner politely handling this situation: The learner wants fresh air in a shared room/salon.. Visual focus: the phrase 'nqder nhell l-shrjem?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الاستئذان قبل الدخول أو الجلوس'. Trigger: The learner wants fresh air in a shared room/salon.. Learner says 'nqder nhell l-shrjem?'. Moroccan host/staff replies 'iyeh / la, shwiya'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day08/l02-d08-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day08/l02-d08-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nhell l-shrjem?",
            "english": "Can I open the window?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh / la, shwiya",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 8: The learner wants fresh air in a shared room/salon.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D08-P04",
        "scenario": "The learner passes through a narrow riad corridor.",
        "goal": "Say: Excuse me, can I pass?",
        "english": "Excuse me, can I pass?",
        "friendlyLatin": "smehli, wach nqder ndouz?",
        "moroccanChat": "smehli, wach nqder ndouz?",
        "arabic": "سمحلي، واش نقدر ندوز؟",
        "showArabicByDefault": false,
        "literal": "Excuse me, can I pass?",
        "meaning": "Excuse me, can I pass?",
        "intent": "Use this in Level 2 hospitality context: الاستئذان قبل الدخول أو الجلوس.",
        "cultureNote": "Smehli softens movement in tight public/private spaces.",
        "memoryHook": "Pronunciation chunks: smehli / wach nqder ndouz",
        "pronunciationParts": [
          "smehli",
          "wach nqder ndouz"
        ],
        "possibleMoroccanReply": "iyeh, tfdal",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 8: الاستئذان قبل الدخول أو الجلوس. Show a foreign learner politely handling this situation: The learner passes through a narrow riad corridor.. Visual focus: the phrase 'smehli, wach nqder ndouz?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الاستئذان قبل الدخول أو الجلوس'. Trigger: The learner passes through a narrow riad corridor.. Learner says 'smehli, wach nqder ndouz?'. Moroccan host/staff replies 'iyeh, tfdal'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day08/l02-d08-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day08/l02-d08-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "smehli, wach nqder ndouz?",
            "english": "Excuse me, can I pass?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, tfdal",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 8: The learner passes through a narrow riad corridor.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D08-P05",
        "scenario": "The host asks the learner to wait.",
        "goal": "Say: No problem, I will wait.",
        "english": "No problem, I will wait.",
        "friendlyLatin": "la bas, ghadi ntsenna",
        "moroccanChat": "la bas, ghadi ntsenna",
        "arabic": "لا باس، غادي نتسنى",
        "showArabicByDefault": false,
        "literal": "No problem, I will wait.",
        "meaning": "No problem, I will wait.",
        "intent": "Use this in Level 2 hospitality context: الاستئذان قبل الدخول أو الجلوس.",
        "cultureNote": "Patience is culturally valued in hospitality moments.",
        "memoryHook": "Pronunciation chunks: la bas / ghadi ntsenna",
        "pronunciationParts": [
          "la bas",
          "ghadi ntsenna"
        ],
        "possibleMoroccanReply": "shukran",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 8: الاستئذان قبل الدخول أو الجلوس. Show a foreign learner politely handling this situation: The host asks the learner to wait.. Visual focus: the phrase 'la bas, ghadi ntsenna' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الاستئذان قبل الدخول أو الجلوس'. Trigger: The host asks the learner to wait.. Learner says 'la bas, ghadi ntsenna'. Moroccan host/staff replies 'shukran'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day08/l02-d08-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day08/l02-d08-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "la bas, ghadi ntsenna",
            "english": "No problem, I will wait.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "shukran",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 8: The host asks the learner to wait.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-009",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 9,
    "week": 2,
    "title": "التعامل مع عاملة/عامل الرياض",
    "situation": "Level 2 hospitality scene: التعامل مع عاملة/عامل الرياض.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D09-P01",
        "scenario": "The learner gets the attention of a staff member politely.",
        "goal": "Say: Hello, excuse me.",
        "english": "Hello, excuse me.",
        "friendlyLatin": "salam, smhliya",
        "moroccanChat": "salam, smhliya",
        "arabic": "سلام، سمحليا",
        "showArabicByDefault": false,
        "literal": "Hello, excuse me.",
        "meaning": "Hello, excuse me.",
        "intent": "Use this in Level 2 hospitality context: التعامل مع عاملة/عامل الرياض.",
        "cultureNote": "Use smhliya/smehli before a request to avoid sounding abrupt.",
        "memoryHook": "Pronunciation chunks: salam / smhliya",
        "pronunciationParts": [
          "salam",
          "smhliya"
        ],
        "possibleMoroccanReply": "na3am?",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 9: التعامل مع عاملة/عامل الرياض. Show a foreign learner politely handling this situation: The learner gets the attention of a staff member politely.. Visual focus: the phrase 'salam, smhliya' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التعامل مع عاملة/عامل الرياض'. Trigger: The learner gets the attention of a staff member politely.. Learner says 'salam, smhliya'. Moroccan host/staff replies 'na3am?'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day09/l02-d09-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day09/l02-d09-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "salam, smhliya",
            "english": "Hello, excuse me.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "na3am?",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 9: The learner gets the attention of a staff member politely.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D09-P02",
        "scenario": "The learner is unsure and opens a small question.",
        "goal": "Say: Can I ask something?",
        "english": "Can I ask something?",
        "friendlyLatin": "nqder nsawl shwiya?",
        "moroccanChat": "nqder nsawl shwiya?",
        "arabic": "نقدر نسول شوية؟",
        "showArabicByDefault": false,
        "literal": "Can I ask something?",
        "meaning": "Can I ask something?",
        "intent": "Use this in Level 2 hospitality context: التعامل مع عاملة/عامل الرياض.",
        "cultureNote": "A soft opening is useful with workers or hosts.",
        "memoryHook": "Pronunciation chunks: nqder / nsawl / shwiya",
        "pronunciationParts": [
          "nqder",
          "nsawl",
          "shwiya"
        ],
        "possibleMoroccanReply": "iyeh, tfdal",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 9: التعامل مع عاملة/عامل الرياض. Show a foreign learner politely handling this situation: The learner is unsure and opens a small question.. Visual focus: the phrase 'nqder nsawl shwiya?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التعامل مع عاملة/عامل الرياض'. Trigger: The learner is unsure and opens a small question.. Learner says 'nqder nsawl shwiya?'. Moroccan host/staff replies 'iyeh, tfdal'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day09/l02-d09-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day09/l02-d09-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nsawl shwiya?",
            "english": "Can I ask something?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, tfdal",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 9: The learner is unsure and opens a small question.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D09-P03",
        "scenario": "The learner needs a fresh towel.",
        "goal": "Say: I would like to change the towel, please.",
        "english": "I would like to change the towel, please.",
        "friendlyLatin": "bghit tbdel l-manshfa aafak",
        "moroccanChat": "bghit tbdel l-manshfa aafak",
        "arabic": "بغيت تبدل المنشفة عافاك",
        "showArabicByDefault": false,
        "literal": "I would like to change the towel, please.",
        "meaning": "I would like to change the towel, please.",
        "intent": "Use this in Level 2 hospitality context: التعامل مع عاملة/عامل الرياض.",
        "cultureNote": "Amenity requests should be polite and specific.",
        "memoryHook": "Pronunciation chunks: bghit tbdel / l-manshfa aafak",
        "pronunciationParts": [
          "bghit tbdel",
          "l-manshfa aafak"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 9: التعامل مع عاملة/عامل الرياض. Show a foreign learner politely handling this situation: The learner needs a fresh towel.. Visual focus: the phrase 'bghit tbdel l-manshfa aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التعامل مع عاملة/عامل الرياض'. Trigger: The learner needs a fresh towel.. Learner says 'bghit tbdel l-manshfa aafak'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day09/l02-d09-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day09/l02-d09-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit tbdel l-manshfa aafak",
            "english": "I would like to change the towel, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 9: The learner needs a fresh towel.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D09-P04",
        "scenario": "The learner asks staff to clean later, not now.",
        "goal": "Say: Can you clean the room later?",
        "english": "Can you clean the room later?",
        "friendlyLatin": "wach tqdri tnqyi l-bit mn b3d?",
        "moroccanChat": "wach tqdri tnqyi l-bit mn b3d?",
        "arabic": "واش تقدري تنقي البيت من بعد؟",
        "showArabicByDefault": false,
        "literal": "Can you clean the room later?",
        "meaning": "Can you clean the room later?",
        "intent": "Use this in Level 2 hospitality context: التعامل مع عاملة/عامل الرياض.",
        "cultureNote": "This respects privacy and staff schedule.",
        "memoryHook": "Pronunciation chunks: wach tqdri / tnqyi l-bit / mn b3d",
        "pronunciationParts": [
          "wach tqdri",
          "tnqyi l-bit",
          "mn b3d"
        ],
        "possibleMoroccanReply": "iyeh, mn b3d",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 9: التعامل مع عاملة/عامل الرياض. Show a foreign learner politely handling this situation: The learner asks staff to clean later, not now.. Visual focus: the phrase 'wach tqdri tnqyi l-bit mn b3d?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التعامل مع عاملة/عامل الرياض'. Trigger: The learner asks staff to clean later, not now.. Learner says 'wach tqdri tnqyi l-bit mn b3d?'. Moroccan host/staff replies 'iyeh, mn b3d'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day09/l02-d09-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day09/l02-d09-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wach tqdri tnqyi l-bit mn b3d?",
            "english": "Can you clean the room later?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, mn b3d",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 9: The learner asks staff to clean later, not now.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D09-P05",
        "scenario": "The worker helps and the learner gives warm thanks.",
        "goal": "Say: Thank you very much, may God protect you.",
        "english": "Thank you very much, may God protect you.",
        "friendlyLatin": "shukran bzaf, lah ykhalik",
        "moroccanChat": "shukran bzaf, lah ykhalik",
        "arabic": "شكرا بزاف، الله يخليك",
        "showArabicByDefault": false,
        "literal": "Thank you very much, may God protect you.",
        "meaning": "Thank you very much, may God protect you.",
        "intent": "Use this in Level 2 hospitality context: التعامل مع عاملة/عامل الرياض.",
        "cultureNote": "Allah ykhalik is a warm politeness formula.",
        "memoryHook": "Pronunciation chunks: shukran bzaf / lah ykhalik",
        "pronunciationParts": [
          "shukran bzaf",
          "lah ykhalik"
        ],
        "possibleMoroccanReply": "lah yhafdk",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 9: التعامل مع عاملة/عامل الرياض. Show a foreign learner politely handling this situation: The worker helps and the learner gives warm thanks.. Visual focus: the phrase 'shukran bzaf, lah ykhalik' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التعامل مع عاملة/عامل الرياض'. Trigger: The worker helps and the learner gives warm thanks.. Learner says 'shukran bzaf, lah ykhalik'. Moroccan host/staff replies 'lah yhafdk'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day09/l02-d09-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day09/l02-d09-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran bzaf, lah ykhalik",
            "english": "Thank you very much, may God protect you.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "lah yhafdk",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 9: The worker helps and the learner gives warm thanks.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-010",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 10,
    "week": 2,
    "title": "طلب منشفة أو صابون أو غطاء",
    "situation": "Level 2 hospitality scene: طلب منشفة أو صابون أو غطاء.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D10-P01",
        "scenario": "The learner needs an extra towel.",
        "goal": "Say: I would like another towel.",
        "english": "I would like another towel.",
        "friendlyLatin": "bghit manshfa okhra",
        "moroccanChat": "bghit manshfa okhra",
        "arabic": "بغيت منشفة أخرى",
        "showArabicByDefault": false,
        "literal": "I would like another towel.",
        "meaning": "I would like another towel.",
        "intent": "Use this in Level 2 hospitality context: طلب منشفة أو صابون أو غطاء.",
        "cultureNote": "Keep amenity requests short and clear.",
        "memoryHook": "Pronunciation chunks: bghit / manshfa / okhra",
        "pronunciationParts": [
          "bghit",
          "manshfa",
          "okhra"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 10: طلب منشفة أو صابون أو غطاء. Show a foreign learner politely handling this situation: The learner needs an extra towel.. Visual focus: the phrase 'bghit manshfa okhra' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب منشفة أو صابون أو غطاء'. Trigger: The learner needs an extra towel.. Learner says 'bghit manshfa okhra'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day10/l02-d10-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day10/l02-d10-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit manshfa okhra",
            "english": "I would like another towel.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 10: The learner needs an extra towel.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D10-P02",
        "scenario": "The learner is missing soap in the room.",
        "goal": "Say: I would like soap, please.",
        "english": "I would like soap, please.",
        "friendlyLatin": "bghit sabon aafak",
        "moroccanChat": "bghit sabon aafak",
        "arabic": "بغيت صابون عافاك",
        "showArabicByDefault": false,
        "literal": "I would like soap, please.",
        "meaning": "I would like soap, please.",
        "intent": "Use this in Level 2 hospitality context: طلب منشفة أو صابون أو غطاء.",
        "cultureNote": "Basic room supplies are practical early hospitality content.",
        "memoryHook": "Pronunciation chunks: bghit / sabon / aafak",
        "pronunciationParts": [
          "bghit",
          "sabon",
          "aafak"
        ],
        "possibleMoroccanReply": "daba njibo",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 10: طلب منشفة أو صابون أو غطاء. Show a foreign learner politely handling this situation: The learner is missing soap in the room.. Visual focus: the phrase 'bghit sabon aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب منشفة أو صابون أو غطاء'. Trigger: The learner is missing soap in the room.. Learner says 'bghit sabon aafak'. Moroccan host/staff replies 'daba njibo'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day10/l02-d10-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day10/l02-d10-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit sabon aafak",
            "english": "I would like soap, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "daba njibo",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 10: The learner is missing soap in the room.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D10-P03",
        "scenario": "The learner is cold and asks for a blanket.",
        "goal": "Say: I would like another blanket.",
        "english": "I would like another blanket.",
        "friendlyLatin": "bghit manta okhra",
        "moroccanChat": "bghit manta okhra",
        "arabic": "بغيت مانطة أخرى",
        "showArabicByDefault": false,
        "literal": "I would like another blanket.",
        "meaning": "I would like another blanket.",
        "intent": "Use this in Level 2 hospitality context: طلب منشفة أو صابون أو غطاء.",
        "cultureNote": "Riad rooms can feel cool; blanket requests are realistic.",
        "memoryHook": "Pronunciation chunks: bghit / manta / okhra",
        "pronunciationParts": [
          "bghit",
          "manta",
          "okhra"
        ],
        "possibleMoroccanReply": "iyeh, daba",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 10: طلب منشفة أو صابون أو غطاء. Show a foreign learner politely handling this situation: The learner is cold and asks for a blanket.. Visual focus: the phrase 'bghit manta okhra' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب منشفة أو صابون أو غطاء'. Trigger: The learner is cold and asks for a blanket.. Learner says 'bghit manta okhra'. Moroccan host/staff replies 'iyeh, daba'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day10/l02-d10-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day10/l02-d10-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit manta okhra",
            "english": "I would like another blanket.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, daba",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 10: The learner is cold and asks for a blanket.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D10-P04",
        "scenario": "The learner looks for towels in the room/bathroom.",
        "goal": "Say: Where are the towels?",
        "english": "Where are the towels?",
        "friendlyLatin": "fin l-manshaf?",
        "moroccanChat": "fin l-manshaf?",
        "arabic": "فين المناشف؟",
        "showArabicByDefault": false,
        "literal": "Where are the towels?",
        "meaning": "Where are the towels?",
        "intent": "Use this in Level 2 hospitality context: طلب منشفة أو صابون أو غطاء.",
        "cultureNote": "A simple place question tied to a real object.",
        "memoryHook": "Pronunciation chunks: fin / l-manshaf",
        "pronunciationParts": [
          "fin",
          "l-manshaf"
        ],
        "possibleMoroccanReply": "f l-hmam",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 10: طلب منشفة أو صابون أو غطاء. Show a foreign learner politely handling this situation: The learner looks for towels in the room/bathroom.. Visual focus: the phrase 'fin l-manshaf?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب منشفة أو صابون أو غطاء'. Trigger: The learner looks for towels in the room/bathroom.. Learner says 'fin l-manshaf?'. Moroccan host/staff replies 'f l-hmam'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day10/l02-d10-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day10/l02-d10-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "fin l-manshaf?",
            "english": "Where are the towels?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "f l-hmam",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 10: The learner looks for towels in the room/bathroom.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D10-P05",
        "scenario": "The staff gives the blanket and learner closes positively.",
        "goal": "Say: This blanket is good, thank you.",
        "english": "This blanket is good, thank you.",
        "friendlyLatin": "had l-manta mzyana, shukran",
        "moroccanChat": "had l-manta mzyana, shukran",
        "arabic": "هاد المانطة مزيانة، شكرا",
        "showArabicByDefault": false,
        "literal": "This blanket is good, thank you.",
        "meaning": "This blanket is good, thank you.",
        "intent": "Use this in Level 2 hospitality context: طلب منشفة أو صابون أو غطاء.",
        "cultureNote": "End service requests with thanks to maintain warmth.",
        "memoryHook": "Pronunciation chunks: had l-manta mzyana / shukran",
        "pronunciationParts": [
          "had l-manta mzyana",
          "shukran"
        ],
        "possibleMoroccanReply": "bsaha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 10: طلب منشفة أو صابون أو غطاء. Show a foreign learner politely handling this situation: The staff gives the blanket and learner closes positively.. Visual focus: the phrase 'had l-manta mzyana, shukran' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب منشفة أو صابون أو غطاء'. Trigger: The staff gives the blanket and learner closes positively.. Learner says 'had l-manta mzyana, shukran'. Moroccan host/staff replies 'bsaha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day10/l02-d10-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day10/l02-d10-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "had l-manta mzyana, shukran",
            "english": "This blanket is good, thank you.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bsaha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 10: The staff gives the blanket and learner closes positively.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-011",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 11,
    "week": 2,
    "title": "مشكلة بسيطة في الغرفة",
    "situation": "Level 2 hospitality scene: مشكلة بسيطة في الغرفة.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D11-P01",
        "scenario": "The learner notices a broken light.",
        "goal": "Say: The light is not working.",
        "english": "The light is not working.",
        "friendlyLatin": "l-daw ma khdamsh",
        "moroccanChat": "l-daw ma khdamsh",
        "arabic": "الضو ما خدامش",
        "showArabicByDefault": false,
        "literal": "The light is not working.",
        "meaning": "The light is not working.",
        "intent": "Use this in Level 2 hospitality context: مشكلة بسيطة في الغرفة.",
        "cultureNote": "Useful problem phrase for room issues.",
        "memoryHook": "Pronunciation chunks: l-daw / ma / khdamsh",
        "pronunciationParts": [
          "l-daw",
          "ma",
          "khdamsh"
        ],
        "possibleMoroccanReply": "daba nshufu",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 11: مشكلة بسيطة في الغرفة. Show a foreign learner politely handling this situation: The learner notices a broken light.. Visual focus: the phrase 'l-daw ma khdamsh' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مشكلة بسيطة في الغرفة'. Trigger: The learner notices a broken light.. Learner says 'l-daw ma khdamsh'. Moroccan host/staff replies 'daba nshufu'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day11/l02-d11-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day11/l02-d11-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-daw ma khdamsh",
            "english": "The light is not working.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "daba nshufu",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 11: The learner notices a broken light.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D11-P02",
        "scenario": "The learner has no hot water.",
        "goal": "Say: The water is not hot.",
        "english": "The water is not hot.",
        "friendlyLatin": "l-ma ma skhonsh",
        "moroccanChat": "l-ma ma skhonsh",
        "arabic": "الما ما سخونش",
        "showArabicByDefault": false,
        "literal": "The water is not hot.",
        "meaning": "The water is not hot.",
        "intent": "Use this in Level 2 hospitality context: مشكلة بسيطة في الغرفة.",
        "cultureNote": "Room problem phrases should be direct but not aggressive.",
        "memoryHook": "Pronunciation chunks: l-ma / ma / skhonsh",
        "pronunciationParts": [
          "l-ma",
          "ma",
          "skhonsh"
        ],
        "possibleMoroccanReply": "smehli, daba ntsawbo",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 11: مشكلة بسيطة في الغرفة. Show a foreign learner politely handling this situation: The learner has no hot water.. Visual focus: the phrase 'l-ma ma skhonsh' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مشكلة بسيطة في الغرفة'. Trigger: The learner has no hot water.. Learner says 'l-ma ma skhonsh'. Moroccan host/staff replies 'smehli, daba ntsawbo'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day11/l02-d11-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day11/l02-d11-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-ma ma skhonsh",
            "english": "The water is not hot.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "smehli, daba ntsawbo",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 11: The learner has no hot water.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D11-P03",
        "scenario": "The learner reports a door problem.",
        "goal": "Say: The door does not close well.",
        "english": "The door does not close well.",
        "friendlyLatin": "l-bab ma kaytsedsh mzyan",
        "moroccanChat": "l-bab ma kaytsedsh mzyan",
        "arabic": "الباب ما كيتسدش مزيان",
        "showArabicByDefault": false,
        "literal": "The door does not close well.",
        "meaning": "The door does not close well.",
        "intent": "Use this in Level 2 hospitality context: مشكلة بسيطة في الغرفة.",
        "cultureNote": "Safety/service issue inside room.",
        "memoryHook": "Pronunciation chunks: l-bab ma / kaytsedsh mzyan",
        "pronunciationParts": [
          "l-bab ma",
          "kaytsedsh mzyan"
        ],
        "possibleMoroccanReply": "n3ayto l-m3ellem",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 11: مشكلة بسيطة في الغرفة. Show a foreign learner politely handling this situation: The learner reports a door problem.. Visual focus: the phrase 'l-bab ma kaytsedsh mzyan' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مشكلة بسيطة في الغرفة'. Trigger: The learner reports a door problem.. Learner says 'l-bab ma kaytsedsh mzyan'. Moroccan host/staff replies 'n3ayto l-m3ellem'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day11/l02-d11-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day11/l02-d11-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-bab ma kaytsedsh mzyan",
            "english": "The door does not close well.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "n3ayto l-m3ellem",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 11: The learner reports a door problem.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D11-P04",
        "scenario": "The problem continues and learner asks for a room change.",
        "goal": "Say: Can I change the room?",
        "english": "Can I change the room?",
        "friendlyLatin": "nqder nbdel l-bit?",
        "moroccanChat": "nqder nbdel l-bit?",
        "arabic": "نقدر نبدل البيت؟",
        "showArabicByDefault": false,
        "literal": "Can I change the room?",
        "meaning": "Can I change the room?",
        "intent": "Use this in Level 2 hospitality context: مشكلة بسيطة في الغرفة.",
        "cultureNote": "This is more advanced but still practical in hospitality.",
        "memoryHook": "Pronunciation chunks: nqder / nbdel / l-bit",
        "pronunciationParts": [
          "nqder",
          "nbdel",
          "l-bit"
        ],
        "possibleMoroccanReply": "ila kayn bit khor",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 11: مشكلة بسيطة في الغرفة. Show a foreign learner politely handling this situation: The problem continues and learner asks for a room change.. Visual focus: the phrase 'nqder nbdel l-bit?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مشكلة بسيطة في الغرفة'. Trigger: The problem continues and learner asks for a room change.. Learner says 'nqder nbdel l-bit?'. Moroccan host/staff replies 'ila kayn bit khor'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day11/l02-d11-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day11/l02-d11-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nbdel l-bit?",
            "english": "Can I change the room?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "ila kayn bit khor",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 11: The problem continues and learner asks for a room change.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D11-P05",
        "scenario": "The learner closes the problem politely.",
        "goal": "Say: Thank you if you fix it.",
        "english": "Thank you if you fix it.",
        "friendlyLatin": "shukran ila tsawbtoha",
        "moroccanChat": "shukran ila tsawbtoha",
        "arabic": "شكرا إلا تصلحتوها",
        "showArabicByDefault": false,
        "literal": "Thank you if you fix it.",
        "meaning": "Thank you if you fix it.",
        "intent": "Use this in Level 2 hospitality context: مشكلة بسيطة في الغرفة.",
        "cultureNote": "Politeness keeps complaint language softer.",
        "memoryHook": "Pronunciation chunks: shukran / ila / tsawbtoha",
        "pronunciationParts": [
          "shukran",
          "ila",
          "tsawbtoha"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 11: مشكلة بسيطة في الغرفة. Show a foreign learner politely handling this situation: The learner closes the problem politely.. Visual focus: the phrase 'shukran ila tsawbtoha' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مشكلة بسيطة في الغرفة'. Trigger: The learner closes the problem politely.. Learner says 'shukran ila tsawbtoha'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day11/l02-d11-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day11/l02-d11-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran ila tsawbtoha",
            "english": "Thank you if you fix it.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 11: The learner closes the problem politely.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-012",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 12,
    "week": 2,
    "title": "الهدوء والنوم والضجيج",
    "situation": "Level 2 hospitality scene: الهدوء والنوم والضجيج.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D12-P01",
        "scenario": "The learner reports noise at night.",
        "goal": "Say: There is a little noise.",
        "english": "There is a little noise.",
        "friendlyLatin": "kayn shwiya dyal sda",
        "moroccanChat": "kayn shwiya dyal sda",
        "arabic": "كاين شوية ديال الصداع",
        "showArabicByDefault": false,
        "literal": "There is a little noise.",
        "meaning": "There is a little noise.",
        "intent": "Use this in Level 2 hospitality context: الهدوء والنوم والضجيج.",
        "cultureNote": "Use shwiya to soften the complaint.",
        "memoryHook": "Pronunciation chunks: kayn shwiya / dyal sda",
        "pronunciationParts": [
          "kayn shwiya",
          "dyal sda"
        ],
        "possibleMoroccanReply": "smehli, daba nshufu",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 12: الهدوء والنوم والضجيج. Show a foreign learner politely handling this situation: The learner reports noise at night.. Visual focus: the phrase 'kayn shwiya dyal sda' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الهدوء والنوم والضجيج'. Trigger: The learner reports noise at night.. Learner says 'kayn shwiya dyal sda'. Moroccan host/staff replies 'smehli, daba nshufu'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day12/l02-d12-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day12/l02-d12-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "kayn shwiya dyal sda",
            "english": "There is a little noise.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "smehli, daba nshufu",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 12: The learner reports noise at night.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D12-P02",
        "scenario": "The learner explains why quiet matters.",
        "goal": "Say: I want to sleep early.",
        "english": "I want to sleep early.",
        "friendlyLatin": "bghit n3es bakri",
        "moroccanChat": "bghit n3es bakri",
        "arabic": "بغيت نعس بكري",
        "showArabicByDefault": false,
        "literal": "I want to sleep early.",
        "meaning": "I want to sleep early.",
        "intent": "Use this in Level 2 hospitality context: الهدوء والنوم والضجيج.",
        "cultureNote": "Giving a reason makes the request less confrontational.",
        "memoryHook": "Pronunciation chunks: bghit / n3es / bakri",
        "pronunciationParts": [
          "bghit",
          "n3es",
          "bakri"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 12: الهدوء والنوم والضجيج. Show a foreign learner politely handling this situation: The learner explains why quiet matters.. Visual focus: the phrase 'bghit n3es bakri' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الهدوء والنوم والضجيج'. Trigger: The learner explains why quiet matters.. Learner says 'bghit n3es bakri'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day12/l02-d12-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day12/l02-d12-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit n3es bakri",
            "english": "I want to sleep early.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 12: The learner explains why quiet matters.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D12-P03",
        "scenario": "The learner wants to reduce noise or keep privacy.",
        "goal": "Say: Can I close the door?",
        "english": "Can I close the door?",
        "friendlyLatin": "nqder nsed l-bab?",
        "moroccanChat": "nqder nsed l-bab?",
        "arabic": "نقدر نسد الباب؟",
        "showArabicByDefault": false,
        "literal": "Can I close the door?",
        "meaning": "Can I close the door?",
        "intent": "Use this in Level 2 hospitality context: الهدوء والنوم والضجيج.",
        "cultureNote": "Permission phrases remain useful in shared spaces.",
        "memoryHook": "Pronunciation chunks: nqder / nsed / l-bab",
        "pronunciationParts": [
          "nqder",
          "nsed",
          "l-bab"
        ],
        "possibleMoroccanReply": "iyeh",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 12: الهدوء والنوم والضجيج. Show a foreign learner politely handling this situation: The learner wants to reduce noise or keep privacy.. Visual focus: the phrase 'nqder nsed l-bab?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الهدوء والنوم والضجيج'. Trigger: The learner wants to reduce noise or keep privacy.. Learner says 'nqder nsed l-bab?'. Moroccan host/staff replies 'iyeh'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day12/l02-d12-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day12/l02-d12-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nsed l-bab?",
            "english": "Can I close the door?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 12: The learner wants to reduce noise or keep privacy.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D12-P04",
        "scenario": "The learner requests quiet politely.",
        "goal": "Say: A little quiet, please.",
        "english": "A little quiet, please.",
        "friendlyLatin": "shwiya dyal l-hdu aafak",
        "moroccanChat": "shwiya dyal l-hdu aafak",
        "arabic": "شوية ديال الهدو عافاك",
        "showArabicByDefault": false,
        "literal": "A little quiet, please.",
        "meaning": "A little quiet, please.",
        "intent": "Use this in Level 2 hospitality context: الهدوء والنوم والضجيج.",
        "cultureNote": "Direct request but softened with shwiya and aafak.",
        "memoryHook": "Pronunciation chunks: shwiya dyal / l-hdu aafak",
        "pronunciationParts": [
          "shwiya dyal",
          "l-hdu aafak"
        ],
        "possibleMoroccanReply": "smeh lia",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 12: الهدوء والنوم والضجيج. Show a foreign learner politely handling this situation: The learner requests quiet politely.. Visual focus: the phrase 'shwiya dyal l-hdu aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الهدوء والنوم والضجيج'. Trigger: The learner requests quiet politely.. Learner says 'shwiya dyal l-hdu aafak'. Moroccan host/staff replies 'smeh lia'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day12/l02-d12-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day12/l02-d12-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shwiya dyal l-hdu aafak",
            "english": "A little quiet, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "smeh lia",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 12: The learner requests quiet politely.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D12-P05",
        "scenario": "The issue improves and learner closes.",
        "goal": "Say: Now it is good, thank you.",
        "english": "Now it is good, thank you.",
        "friendlyLatin": "daba mzyan, shukran",
        "moroccanChat": "daba mzyan, shukran",
        "arabic": "دابا مزيان، شكرا",
        "showArabicByDefault": false,
        "literal": "Now it is good, thank you.",
        "meaning": "Now it is good, thank you.",
        "intent": "Use this in Level 2 hospitality context: الهدوء والنوم والضجيج.",
        "cultureNote": "Always close a resolved problem with thanks.",
        "memoryHook": "Pronunciation chunks: daba mzyan / shukran",
        "pronunciationParts": [
          "daba mzyan",
          "shukran"
        ],
        "possibleMoroccanReply": "hamdullah",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 12: الهدوء والنوم والضجيج. Show a foreign learner politely handling this situation: The issue improves and learner closes.. Visual focus: the phrase 'daba mzyan, shukran' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الهدوء والنوم والضجيج'. Trigger: The issue improves and learner closes.. Learner says 'daba mzyan, shukran'. Moroccan host/staff replies 'hamdullah'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day12/l02-d12-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day12/l02-d12-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "daba mzyan, shukran",
            "english": "Now it is good, thank you.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "hamdullah",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 12: The issue improves and learner closes.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-013",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 13,
    "week": 2,
    "title": "التكييف/التدفئة والنافذة",
    "situation": "Level 2 hospitality scene: التكييف/التدفئة والنافذة.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D13-P01",
        "scenario": "The learner has an AC problem.",
        "goal": "Say: The air conditioner is not working.",
        "english": "The air conditioner is not working.",
        "friendlyLatin": "l-klimatizor ma khdamsh",
        "moroccanChat": "l-klimatizor ma khdamsh",
        "arabic": "الكليماتيزور ما خدامش",
        "showArabicByDefault": false,
        "literal": "The air conditioner is not working.",
        "meaning": "The air conditioner is not working.",
        "intent": "Use this in Level 2 hospitality context: التكييف/التدفئة والنافذة.",
        "cultureNote": "French loanwords are common for modern room amenities.",
        "memoryHook": "Pronunciation chunks: l-klimatizor / ma / khdamsh",
        "pronunciationParts": [
          "l-klimatizor",
          "ma",
          "khdamsh"
        ],
        "possibleMoroccanReply": "daba nshufu",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 13: التكييف/التدفئة والنافذة. Show a foreign learner politely handling this situation: The learner has an AC problem.. Visual focus: the phrase 'l-klimatizor ma khdamsh' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التكييف/التدفئة والنافذة'. Trigger: The learner has an AC problem.. Learner says 'l-klimatizor ma khdamsh'. Moroccan host/staff replies 'daba nshufu'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day13/l02-d13-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day13/l02-d13-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-klimatizor ma khdamsh",
            "english": "The air conditioner is not working.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "daba nshufu",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 13: The learner has an AC problem.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D13-P02",
        "scenario": "The learner wants air in the room.",
        "goal": "Say: Can I open the window?",
        "english": "Can I open the window?",
        "friendlyLatin": "nqder nhell l-shrjem?",
        "moroccanChat": "nqder nhell l-shrjem?",
        "arabic": "نقدر نحل الشرجم؟",
        "showArabicByDefault": false,
        "literal": "Can I open the window?",
        "meaning": "Can I open the window?",
        "intent": "Use this in Level 2 hospitality context: التكييف/التدفئة والنافذة.",
        "cultureNote": "Ask before opening if shared or staff present.",
        "memoryHook": "Pronunciation chunks: nqder / nhell / l-shrjem",
        "pronunciationParts": [
          "nqder",
          "nhell",
          "l-shrjem"
        ],
        "possibleMoroccanReply": "iyeh, mumkin",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 13: التكييف/التدفئة والنافذة. Show a foreign learner politely handling this situation: The learner wants air in the room.. Visual focus: the phrase 'nqder nhell l-shrjem?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التكييف/التدفئة والنافذة'. Trigger: The learner wants air in the room.. Learner says 'nqder nhell l-shrjem?'. Moroccan host/staff replies 'iyeh, mumkin'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day13/l02-d13-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day13/l02-d13-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nhell l-shrjem?",
            "english": "Can I open the window?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, mumkin",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 13: The learner wants air in the room.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D13-P03",
        "scenario": "The learner explains the room is cold.",
        "goal": "Say: The room is a little cold.",
        "english": "The room is a little cold.",
        "friendlyLatin": "l-bit bared shwiya",
        "moroccanChat": "l-bit bared shwiya",
        "arabic": "البيت بارد شوية",
        "showArabicByDefault": false,
        "literal": "The room is a little cold.",
        "meaning": "The room is a little cold.",
        "intent": "Use this in Level 2 hospitality context: التكييف/التدفئة والنافذة.",
        "cultureNote": "Use shwiya to soften the complaint.",
        "memoryHook": "Pronunciation chunks: l-bit / bared / shwiya",
        "pronunciationParts": [
          "l-bit",
          "bared",
          "shwiya"
        ],
        "possibleMoroccanReply": "njib lik manta",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 13: التكييف/التدفئة والنافذة. Show a foreign learner politely handling this situation: The learner explains the room is cold.. Visual focus: the phrase 'l-bit bared shwiya' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التكييف/التدفئة والنافذة'. Trigger: The learner explains the room is cold.. Learner says 'l-bit bared shwiya'. Moroccan host/staff replies 'njib lik manta'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day13/l02-d13-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day13/l02-d13-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-bit bared shwiya",
            "english": "The room is a little cold.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "njib lik manta",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 13: The learner explains the room is cold.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D13-P04",
        "scenario": "The learner explains the room is hot.",
        "goal": "Say: The room is a little hot.",
        "english": "The room is a little hot.",
        "friendlyLatin": "l-bit skhon shwiya",
        "moroccanChat": "l-bit skhon shwiya",
        "arabic": "البيت سخون شوية",
        "showArabicByDefault": false,
        "literal": "The room is a little hot.",
        "meaning": "The room is a little hot.",
        "intent": "Use this in Level 2 hospitality context: التكييف/التدفئة والنافذة.",
        "cultureNote": "Useful comfort phrase for different seasons/cities.",
        "memoryHook": "Pronunciation chunks: l-bit / skhon / shwiya",
        "pronunciationParts": [
          "l-bit",
          "skhon",
          "shwiya"
        ],
        "possibleMoroccanReply": "nhello shrjem?",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 13: التكييف/التدفئة والنافذة. Show a foreign learner politely handling this situation: The learner explains the room is hot.. Visual focus: the phrase 'l-bit skhon shwiya' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التكييف/التدفئة والنافذة'. Trigger: The learner explains the room is hot.. Learner says 'l-bit skhon shwiya'. Moroccan host/staff replies 'nhello shrjem?'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day13/l02-d13-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day13/l02-d13-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-bit skhon shwiya",
            "english": "The room is a little hot.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "nhello shrjem?",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 13: The learner explains the room is hot.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D13-P05",
        "scenario": "The learner asks if heating exists.",
        "goal": "Say: Is there heating?",
        "english": "Is there heating?",
        "friendlyLatin": "wash kayn chauffage?",
        "moroccanChat": "wash kayn chauffage?",
        "arabic": "واش كاين شوفاج؟",
        "showArabicByDefault": false,
        "literal": "Is there heating?",
        "meaning": "Is there heating?",
        "intent": "Use this in Level 2 hospitality context: التكييف/التدفئة والنافذة.",
        "cultureNote": "Heating/AC are useful hotel service questions.",
        "memoryHook": "Pronunciation chunks: wash / kayn / chauffage",
        "pronunciationParts": [
          "wash",
          "kayn",
          "chauffage"
        ],
        "possibleMoroccanReply": "iyeh / ma kaynsh",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 13: التكييف/التدفئة والنافذة. Show a foreign learner politely handling this situation: The learner asks if heating exists.. Visual focus: the phrase 'wash kayn chauffage?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التكييف/التدفئة والنافذة'. Trigger: The learner asks if heating exists.. Learner says 'wash kayn chauffage?'. Moroccan host/staff replies 'iyeh / ma kaynsh'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day13/l02-d13-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day13/l02-d13-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash kayn chauffage?",
            "english": "Is there heating?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh / ma kaynsh",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 13: The learner asks if heating exists.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-014",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 14,
    "week": 2,
    "title": "طلب نصيحة من المضيف",
    "situation": "Level 2 hospitality scene: طلب نصيحة من المضيف.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D14-P01",
        "scenario": "The learner asks the host for a nearby food recommendation.",
        "goal": "Say: Where can I eat well nearby?",
        "english": "Where can I eat well nearby?",
        "friendlyLatin": "fin nakol mzyan qrib?",
        "moroccanChat": "fin nakol mzyan qrib?",
        "arabic": "فين ناكل مزيان قريب؟",
        "showArabicByDefault": false,
        "literal": "Where can I eat well nearby?",
        "meaning": "Where can I eat well nearby?",
        "intent": "Use this in Level 2 hospitality context: طلب نصيحة من المضيف.",
        "cultureNote": "Hosts often give local recommendations.",
        "memoryHook": "Pronunciation chunks: fin nakol / mzyan qrib",
        "pronunciationParts": [
          "fin nakol",
          "mzyan qrib"
        ],
        "possibleMoroccanReply": "kayn wahd blasa qriba",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 14: طلب نصيحة من المضيف. Show a foreign learner politely handling this situation: The learner asks the host for a nearby food recommendation.. Visual focus: the phrase 'fin nakol mzyan qrib?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب نصيحة من المضيف'. Trigger: The learner asks the host for a nearby food recommendation.. Learner says 'fin nakol mzyan qrib?'. Moroccan host/staff replies 'kayn wahd blasa qriba'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day14/l02-d14-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day14/l02-d14-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "fin nakol mzyan qrib?",
            "english": "Where can I eat well nearby?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "kayn wahd blasa qriba",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 14: The learner asks the host for a nearby food recommendation.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D14-P02",
        "scenario": "The learner asks for sightseeing advice.",
        "goal": "Say: What do you recommend I see here?",
        "english": "What do you recommend I see here?",
        "friendlyLatin": "ash katsahliya nshuf hna?",
        "moroccanChat": "ash katsahliya nshuf hna?",
        "arabic": "آش كتساهليا نشوف هنا؟",
        "showArabicByDefault": false,
        "literal": "What do you recommend I see here?",
        "meaning": "What do you recommend I see here?",
        "intent": "Use this in Level 2 hospitality context: طلب نصيحة من المضيف.",
        "cultureNote": "Host advice makes the riad interaction more human.",
        "memoryHook": "Pronunciation chunks: ash katsahliya / nshuf hna",
        "pronunciationParts": [
          "ash katsahliya",
          "nshuf hna"
        ],
        "possibleMoroccanReply": "sir l-medina",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 14: طلب نصيحة من المضيف. Show a foreign learner politely handling this situation: The learner asks for sightseeing advice.. Visual focus: the phrase 'ash katsahliya nshuf hna?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب نصيحة من المضيف'. Trigger: The learner asks for sightseeing advice.. Learner says 'ash katsahliya nshuf hna?'. Moroccan host/staff replies 'sir l-medina'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day14/l02-d14-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day14/l02-d14-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ash katsahliya nshuf hna?",
            "english": "What do you recommend I see here?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "sir l-medina",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 14: The learner asks for sightseeing advice.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D14-P03",
        "scenario": "The learner asks for a local market.",
        "goal": "Say: Where is there a nearby market?",
        "english": "Where is there a nearby market?",
        "friendlyLatin": "fin kayn souq qrib?",
        "moroccanChat": "fin kayn souq qrib?",
        "arabic": "فين كاين سوق قريب؟",
        "showArabicByDefault": false,
        "literal": "Where is there a nearby market?",
        "meaning": "Where is there a nearby market?",
        "intent": "Use this in Level 2 hospitality context: طلب نصيحة من المضيف.",
        "cultureNote": "Market/souk directions are common travel needs.",
        "memoryHook": "Pronunciation chunks: fin kayn / souq qrib",
        "pronunciationParts": [
          "fin kayn",
          "souq qrib"
        ],
        "possibleMoroccanReply": "tlaa nishan",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 14: طلب نصيحة من المضيف. Show a foreign learner politely handling this situation: The learner asks for a local market.. Visual focus: the phrase 'fin kayn souq qrib?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب نصيحة من المضيف'. Trigger: The learner asks for a local market.. Learner says 'fin kayn souq qrib?'. Moroccan host/staff replies 'tlaa nishan'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day14/l02-d14-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day14/l02-d14-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "fin kayn souq qrib?",
            "english": "Where is there a nearby market?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "tlaa nishan",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 14: The learner asks for a local market.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D14-P04",
        "scenario": "The learner asks safety advice respectfully.",
        "goal": "Say: Is this area safe at night?",
        "english": "Is this area safe at night?",
        "friendlyLatin": "wash had blasa amna b-lil?",
        "moroccanChat": "wash had blasa amna b-lil?",
        "arabic": "واش هاد البلاصة آمنة بالليل؟",
        "showArabicByDefault": false,
        "literal": "Is this area safe at night?",
        "meaning": "Is this area safe at night?",
        "intent": "Use this in Level 2 hospitality context: طلب نصيحة من المضيف.",
        "cultureNote": "Practical guest question tied to local knowledge.",
        "memoryHook": "Pronunciation chunks: wash had / blasa amna / b-lil",
        "pronunciationParts": [
          "wash had",
          "blasa amna",
          "b-lil"
        ],
        "possibleMoroccanReply": "iyeh, walakin khlli balk",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 14: طلب نصيحة من المضيف. Show a foreign learner politely handling this situation: The learner asks safety advice respectfully.. Visual focus: the phrase 'wash had blasa amna b-lil?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب نصيحة من المضيف'. Trigger: The learner asks safety advice respectfully.. Learner says 'wash had blasa amna b-lil?'. Moroccan host/staff replies 'iyeh, walakin khlli balk'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day14/l02-d14-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day14/l02-d14-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash had blasa amna b-lil?",
            "english": "Is this area safe at night?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, walakin khlli balk",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 14: The learner asks safety advice respectfully.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D14-P05",
        "scenario": "The learner asks for route advice.",
        "goal": "Say: What is the best way to the medina?",
        "english": "What is the best way to the medina?",
        "friendlyLatin": "shno ahsan tariq l-medina?",
        "moroccanChat": "shno ahsan tariq l-medina?",
        "arabic": "شنو أحسن طريق للمدينة؟",
        "showArabicByDefault": false,
        "literal": "What is the best way to the medina?",
        "meaning": "What is the best way to the medina?",
        "intent": "Use this in Level 2 hospitality context: طلب نصيحة من المضيف.",
        "cultureNote": "Medina navigation is a frequent issue for visitors.",
        "memoryHook": "Pronunciation chunks: shno ahsan / tariq l-medina",
        "pronunciationParts": [
          "shno ahsan",
          "tariq l-medina"
        ],
        "possibleMoroccanReply": "sir mn hna",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 14: طلب نصيحة من المضيف. Show a foreign learner politely handling this situation: The learner asks for route advice.. Visual focus: the phrase 'shno ahsan tariq l-medina?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب نصيحة من المضيف'. Trigger: The learner asks for route advice.. Learner says 'shno ahsan tariq l-medina?'. Moroccan host/staff replies 'sir mn hna'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day14/l02-d14-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day14/l02-d14-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shno ahsan tariq l-medina?",
            "english": "What is the best way to the medina?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "sir mn hna",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 14: The learner asks for route advice.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-015",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 15,
    "week": 3,
    "title": "الدفع أو تمديد ليلة",
    "situation": "Level 2 hospitality scene: الدفع أو تمديد ليلة.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D15-P01",
        "scenario": "The learner is ready to pay.",
        "goal": "Say: I want to pay now.",
        "english": "I want to pay now.",
        "friendlyLatin": "bghit nkhalles daba",
        "moroccanChat": "bghit nkhalles daba",
        "arabic": "بغيت نخلص دابا",
        "showArabicByDefault": false,
        "literal": "I want to pay now.",
        "meaning": "I want to pay now.",
        "intent": "Use this in Level 2 hospitality context: الدفع أو تمديد ليلة.",
        "cultureNote": "Payment phrase belongs to stay management.",
        "memoryHook": "Pronunciation chunks: bghit / nkhalles / daba",
        "pronunciationParts": [
          "bghit",
          "nkhalles",
          "daba"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 15: الدفع أو تمديد ليلة. Show a foreign learner politely handling this situation: The learner is ready to pay.. Visual focus: the phrase 'bghit nkhalles daba' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الدفع أو تمديد ليلة'. Trigger: The learner is ready to pay.. Learner says 'bghit nkhalles daba'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day15/l02-d15-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day15/l02-d15-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit nkhalles daba",
            "english": "I want to pay now.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 15: The learner is ready to pay.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D15-P02",
        "scenario": "The learner wants to extend the stay.",
        "goal": "Say: Can I add one night?",
        "english": "Can I add one night?",
        "friendlyLatin": "wash nqder nzid lila?",
        "moroccanChat": "wash nqder nzid lila?",
        "arabic": "واش نقدر نزيد ليلة؟",
        "showArabicByDefault": false,
        "literal": "Can I add one night?",
        "meaning": "Can I add one night?",
        "intent": "Use this in Level 2 hospitality context: الدفع أو تمديد ليلة.",
        "cultureNote": "Extension request is a realistic accommodation need.",
        "memoryHook": "Pronunciation chunks: wash nqder / nzid lila",
        "pronunciationParts": [
          "wash nqder",
          "nzid lila"
        ],
        "possibleMoroccanReply": "nshufu wash kayn blasa",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 15: الدفع أو تمديد ليلة. Show a foreign learner politely handling this situation: The learner wants to extend the stay.. Visual focus: the phrase 'wash nqder nzid lila?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الدفع أو تمديد ليلة'. Trigger: The learner wants to extend the stay.. Learner says 'wash nqder nzid lila?'. Moroccan host/staff replies 'nshufu wash kayn blasa'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day15/l02-d15-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day15/l02-d15-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash nqder nzid lila?",
            "english": "Can I add one night?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "nshufu wash kayn blasa",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 15: The learner wants to extend the stay.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D15-P03",
        "scenario": "The learner asks remaining balance.",
        "goal": "Say: How much remains on the bill?",
        "english": "How much remains on the bill?",
        "friendlyLatin": "shhal baki f l-hsab?",
        "moroccanChat": "shhal baki f l-hsab?",
        "arabic": "شحال باقي فالحساب؟",
        "showArabicByDefault": false,
        "literal": "How much remains on the bill?",
        "meaning": "How much remains on the bill?",
        "intent": "Use this in Level 2 hospitality context: الدفع أو تمديد ليلة.",
        "cultureNote": "Bill language links Level 1 money to hospitality.",
        "memoryHook": "Pronunciation chunks: shhal baki / f l-hsab",
        "pronunciationParts": [
          "shhal baki",
          "f l-hsab"
        ],
        "possibleMoroccanReply": "baki ... dirham",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 15: الدفع أو تمديد ليلة. Show a foreign learner politely handling this situation: The learner asks remaining balance.. Visual focus: the phrase 'shhal baki f l-hsab?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الدفع أو تمديد ليلة'. Trigger: The learner asks remaining balance.. Learner says 'shhal baki f l-hsab?'. Moroccan host/staff replies 'baki ... dirham'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day15/l02-d15-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day15/l02-d15-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shhal baki f l-hsab?",
            "english": "How much remains on the bill?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "baki ... dirham",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 15: The learner asks remaining balance.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D15-P04",
        "scenario": "The learner asks about payment method.",
        "goal": "Say: Do you accept card?",
        "english": "Do you accept card?",
        "friendlyLatin": "wash tqblo carte?",
        "moroccanChat": "wash tqblo carte?",
        "arabic": "واش تقبلو كارط؟",
        "showArabicByDefault": false,
        "literal": "Do you accept card?",
        "meaning": "Do you accept card?",
        "intent": "Use this in Level 2 hospitality context: الدفع أو تمديد ليلة.",
        "cultureNote": "Many places may prefer cash, so this is practical.",
        "memoryHook": "Pronunciation chunks: wash / tqblo / carte",
        "pronunciationParts": [
          "wash",
          "tqblo",
          "carte"
        ],
        "possibleMoroccanReply": "iyeh / la ghir cash",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 15: الدفع أو تمديد ليلة. Show a foreign learner politely handling this situation: The learner asks about payment method.. Visual focus: the phrase 'wash tqblo carte?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الدفع أو تمديد ليلة'. Trigger: The learner asks about payment method.. Learner says 'wash tqblo carte?'. Moroccan host/staff replies 'iyeh / la ghir cash'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day15/l02-d15-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day15/l02-d15-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash tqblo carte?",
            "english": "Do you accept card?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh / la ghir cash",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 15: The learner asks about payment method.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D15-P05",
        "scenario": "The learner pays and closes politely.",
        "goal": "Say: Here is the money, thank you.",
        "english": "Here is the money, thank you.",
        "friendlyLatin": "hak l-flous, shukran",
        "moroccanChat": "hak l-flous, shukran",
        "arabic": "هاك الفلوس، شكرا",
        "showArabicByDefault": false,
        "literal": "Here is the money, thank you.",
        "meaning": "Here is the money, thank you.",
        "intent": "Use this in Level 2 hospitality context: الدفع أو تمديد ليلة.",
        "cultureNote": "A simple payment closure phrase.",
        "memoryHook": "Pronunciation chunks: hak l-flous / shukran",
        "pronunciationParts": [
          "hak l-flous",
          "shukran"
        ],
        "possibleMoroccanReply": "shukran",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 15: الدفع أو تمديد ليلة. Show a foreign learner politely handling this situation: The learner pays and closes politely.. Visual focus: the phrase 'hak l-flous, shukran' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الدفع أو تمديد ليلة'. Trigger: The learner pays and closes politely.. Learner says 'hak l-flous, shukran'. Moroccan host/staff replies 'shukran'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day15/l02-d15-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day15/l02-d15-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "hak l-flous, shukran",
            "english": "Here is the money, thank you.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "shukran",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 15: The learner pays and closes politely.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-016",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 16,
    "week": 3,
    "title": "الخروج من الرياض والعودة إليه",
    "situation": "Level 2 hospitality scene: الخروج من الرياض والعودة إليه.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D16-P01",
        "scenario": "The learner tells the host/reception they are leaving.",
        "goal": "Say: I am going out now.",
        "english": "I am going out now.",
        "friendlyLatin": "ghadi nkhroj daba",
        "moroccanChat": "ghadi nkhroj daba",
        "arabic": "غادي نخرج دابا",
        "showArabicByDefault": false,
        "literal": "I am going out now.",
        "meaning": "I am going out now.",
        "intent": "Use this in Level 2 hospitality context: الخروج من الرياض والعودة إليه.",
        "cultureNote": "Useful in small riads where hosts track guests.",
        "memoryHook": "Pronunciation chunks: ghadi / nkhroj / daba",
        "pronunciationParts": [
          "ghadi",
          "nkhroj",
          "daba"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 16: الخروج من الرياض والعودة إليه. Show a foreign learner politely handling this situation: The learner tells the host/reception they are leaving.. Visual focus: the phrase 'ghadi nkhroj daba' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الخروج من الرياض والعودة إليه'. Trigger: The learner tells the host/reception they are leaving.. Learner says 'ghadi nkhroj daba'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day16/l02-d16-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day16/l02-d16-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ghadi nkhroj daba",
            "english": "I am going out now.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 16: The learner tells the host/reception they are leaving.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D16-P02",
        "scenario": "The learner explains expected return.",
        "goal": "Say: I will come back at night.",
        "english": "I will come back at night.",
        "friendlyLatin": "ghadi nrjea b-lil",
        "moroccanChat": "ghadi nrjea b-lil",
        "arabic": "غادي نرجع بالليل",
        "showArabicByDefault": false,
        "literal": "I will come back at night.",
        "meaning": "I will come back at night.",
        "intent": "Use this in Level 2 hospitality context: الخروج من الرياض والعودة إليه.",
        "cultureNote": "Communicating return time is polite in small guesthouses.",
        "memoryHook": "Pronunciation chunks: ghadi / nrjea / b-lil",
        "pronunciationParts": [
          "ghadi",
          "nrjea",
          "b-lil"
        ],
        "possibleMoroccanReply": "wakha, bslama",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 16: الخروج من الرياض والعودة إليه. Show a foreign learner politely handling this situation: The learner explains expected return.. Visual focus: the phrase 'ghadi nrjea b-lil' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الخروج من الرياض والعودة إليه'. Trigger: The learner explains expected return.. Learner says 'ghadi nrjea b-lil'. Moroccan host/staff replies 'wakha, bslama'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day16/l02-d16-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day16/l02-d16-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ghadi nrjea b-lil",
            "english": "I will come back at night.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha, bslama",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 16: The learner explains expected return.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D16-P03",
        "scenario": "The learner asks about late access.",
        "goal": "Say: Does the door stay open?",
        "english": "Does the door stay open?",
        "friendlyLatin": "wash l-bab kaybqa maftoh?",
        "moroccanChat": "wash l-bab kaybqa maftoh?",
        "arabic": "واش الباب كيبقى مفتوح؟",
        "showArabicByDefault": false,
        "literal": "Does the door stay open?",
        "meaning": "Does the door stay open?",
        "intent": "Use this in Level 2 hospitality context: الخروج من الرياض والعودة إليه.",
        "cultureNote": "Door access matters in riads with locked entrances.",
        "memoryHook": "Pronunciation chunks: wash l-bab / kaybqa maftoh",
        "pronunciationParts": [
          "wash l-bab",
          "kaybqa maftoh"
        ],
        "possibleMoroccanReply": "la, 3ndk l-kle",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 16: الخروج من الرياض والعودة إليه. Show a foreign learner politely handling this situation: The learner asks about late access.. Visual focus: the phrase 'wash l-bab kaybqa maftoh?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الخروج من الرياض والعودة إليه'. Trigger: The learner asks about late access.. Learner says 'wash l-bab kaybqa maftoh?'. Moroccan host/staff replies 'la, 3ndk l-kle'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day16/l02-d16-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day16/l02-d16-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash l-bab kaybqa maftoh?",
            "english": "Does the door stay open?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "la, 3ndk l-kle",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 16: The learner asks about late access.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D16-P04",
        "scenario": "The learner asks about taking the key.",
        "goal": "Say: Can I take the key with me?",
        "english": "Can I take the key with me?",
        "friendlyLatin": "nqder nakhod l-kle m3aya?",
        "moroccanChat": "nqder nakhod l-kle m3aya?",
        "arabic": "نقدر ناخد الكلي معايا؟",
        "showArabicByDefault": false,
        "literal": "Can I take the key with me?",
        "meaning": "Can I take the key with me?",
        "intent": "Use this in Level 2 hospitality context: الخروج من الرياض والعودة إليه.",
        "cultureNote": "Key handling is a practical routine.",
        "memoryHook": "Pronunciation chunks: nqder nakhod / l-kle m3aya",
        "pronunciationParts": [
          "nqder nakhod",
          "l-kle m3aya"
        ],
        "possibleMoroccanReply": "iyeh, khodha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 16: الخروج من الرياض والعودة إليه. Show a foreign learner politely handling this situation: The learner asks about taking the key.. Visual focus: the phrase 'nqder nakhod l-kle m3aya?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الخروج من الرياض والعودة إليه'. Trigger: The learner asks about taking the key.. Learner says 'nqder nakhod l-kle m3aya?'. Moroccan host/staff replies 'iyeh, khodha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day16/l02-d16-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day16/l02-d16-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nakhod l-kle m3aya?",
            "english": "Can I take the key with me?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, khodha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 16: The learner asks about taking the key.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D16-P05",
        "scenario": "The learner promises to call if late.",
        "goal": "Say: If I am late, I will call.",
        "english": "If I am late, I will call.",
        "friendlyLatin": "ila tkhrtt, ghadi ntsel",
        "moroccanChat": "ila tkhrtt, ghadi ntsel",
        "arabic": "إلا تأخرت، غادي نتاصل",
        "showArabicByDefault": false,
        "literal": "If I am late, I will call.",
        "meaning": "If I am late, I will call.",
        "intent": "Use this in Level 2 hospitality context: الخروج من الرياض والعودة إليه.",
        "cultureNote": "This adds responsible guest behavior.",
        "memoryHook": "Pronunciation chunks: ila tkhrtt / ghadi ntsel",
        "pronunciationParts": [
          "ila tkhrtt",
          "ghadi ntsel"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 16: الخروج من الرياض والعودة إليه. Show a foreign learner politely handling this situation: The learner promises to call if late.. Visual focus: the phrase 'ila tkhrtt, ghadi ntsel' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الخروج من الرياض والعودة إليه'. Trigger: The learner promises to call if late.. Learner says 'ila tkhrtt, ghadi ntsel'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day16/l02-d16-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day16/l02-d16-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ila tkhrtt, ghadi ntsel",
            "english": "If I am late, I will call.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 16: The learner promises to call if late.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-017",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 17,
    "week": 3,
    "title": "الحديث القصير مع صاحب المكان",
    "situation": "Level 2 hospitality scene: الحديث القصير مع صاحب المكان.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D17-P01",
        "scenario": "The learner greets the host with a friendly question.",
        "goal": "Say: How are you?",
        "english": "How are you?",
        "friendlyLatin": "labas aalik?",
        "moroccanChat": "labas aalik?",
        "arabic": "لاباس عليك؟",
        "showArabicByDefault": false,
        "literal": "How are you?",
        "meaning": "How are you?",
        "intent": "Use this in Level 2 hospitality context: الحديث القصير مع صاحب المكان.",
        "cultureNote": "Small talk builds warmth beyond transactions.",
        "memoryHook": "Pronunciation chunks: labas / aalik",
        "pronunciationParts": [
          "labas",
          "aalik"
        ],
        "possibleMoroccanReply": "labas, shukran",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 17: الحديث القصير مع صاحب المكان. Show a foreign learner politely handling this situation: The learner greets the host with a friendly question.. Visual focus: the phrase 'labas aalik?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الحديث القصير مع صاحب المكان'. Trigger: The learner greets the host with a friendly question.. Learner says 'labas aalik?'. Moroccan host/staff replies 'labas, shukran'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day17/l02-d17-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day17/l02-d17-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "labas aalik?",
            "english": "How are you?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "labas, shukran",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 17: The learner greets the host with a friendly question.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D17-P02",
        "scenario": "The learner compliments the place.",
        "goal": "Say: The riad is very beautiful.",
        "english": "The riad is very beautiful.",
        "friendlyLatin": "l-riad zwin bzaf",
        "moroccanChat": "l-riad zwin bzaf",
        "arabic": "الرياض زوين بزاف",
        "showArabicByDefault": false,
        "literal": "The riad is very beautiful.",
        "meaning": "The riad is very beautiful.",
        "intent": "Use this in Level 2 hospitality context: الحديث القصير مع صاحب المكان.",
        "cultureNote": "Complimenting the place fits riad hospitality.",
        "memoryHook": "Pronunciation chunks: l-riad / zwin / bzaf",
        "pronunciationParts": [
          "l-riad",
          "zwin",
          "bzaf"
        ],
        "possibleMoroccanReply": "allah ykhalik",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 17: الحديث القصير مع صاحب المكان. Show a foreign learner politely handling this situation: The learner compliments the place.. Visual focus: the phrase 'l-riad zwin bzaf' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الحديث القصير مع صاحب المكان'. Trigger: The learner compliments the place.. Learner says 'l-riad zwin bzaf'. Moroccan host/staff replies 'allah ykhalik'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day17/l02-d17-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day17/l02-d17-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-riad zwin bzaf",
            "english": "The riad is very beautiful.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "allah ykhalik",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 17: The learner compliments the place.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D17-P03",
        "scenario": "The learner shares simple personal context.",
        "goal": "Say: It is my first time in Morocco.",
        "english": "It is my first time in Morocco.",
        "friendlyLatin": "ana awel mara f l-mghrib",
        "moroccanChat": "ana awel mara f l-mghrib",
        "arabic": "أنا أول مرة فالمغرب",
        "showArabicByDefault": false,
        "literal": "It is my first time in Morocco.",
        "meaning": "It is my first time in Morocco.",
        "intent": "Use this in Level 2 hospitality context: الحديث القصير مع صاحب المكان.",
        "cultureNote": "This creates a natural host conversation.",
        "memoryHook": "Pronunciation chunks: ana awel / mara f / l-mghrib",
        "pronunciationParts": [
          "ana awel",
          "mara f",
          "l-mghrib"
        ],
        "possibleMoroccanReply": "mrehba bik",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 17: الحديث القصير مع صاحب المكان. Show a foreign learner politely handling this situation: The learner shares simple personal context.. Visual focus: the phrase 'ana awel mara f l-mghrib' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الحديث القصير مع صاحب المكان'. Trigger: The learner shares simple personal context.. Learner says 'ana awel mara f l-mghrib'. Moroccan host/staff replies 'mrehba bik'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day17/l02-d17-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day17/l02-d17-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ana awel mara f l-mghrib",
            "english": "It is my first time in Morocco.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mrehba bik",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 17: The learner shares simple personal context.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D17-P04",
        "scenario": "The learner talks about the city.",
        "goal": "Say: I liked the city.",
        "english": "I liked the city.",
        "friendlyLatin": "l-mdina aajbatni",
        "moroccanChat": "l-mdina aajbatni",
        "arabic": "المدينة عجباتني",
        "showArabicByDefault": false,
        "literal": "I liked the city.",
        "meaning": "I liked the city.",
        "intent": "Use this in Level 2 hospitality context: الحديث القصير مع صاحب المكان.",
        "cultureNote": "Short positive comments are safe for beginners.",
        "memoryHook": "Pronunciation chunks: l-mdina / aajbatni",
        "pronunciationParts": [
          "l-mdina",
          "aajbatni"
        ],
        "possibleMoroccanReply": "mzyan!",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 17: الحديث القصير مع صاحب المكان. Show a foreign learner politely handling this situation: The learner talks about the city.. Visual focus: the phrase 'l-mdina aajbatni' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الحديث القصير مع صاحب المكان'. Trigger: The learner talks about the city.. Learner says 'l-mdina aajbatni'. Moroccan host/staff replies 'mzyan!'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day17/l02-d17-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day17/l02-d17-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-mdina aajbatni",
            "english": "I liked the city.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mzyan!",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 17: The learner talks about the city.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D17-P05",
        "scenario": "The learner closes the small talk warmly.",
        "goal": "Say: Thank you for the welcome.",
        "english": "Thank you for the welcome.",
        "friendlyLatin": "shukran ala l-istiQbal",
        "moroccanChat": "shukran ala l-istiQbal",
        "arabic": "شكرا على الاستقبال",
        "showArabicByDefault": false,
        "literal": "Thank you for the welcome.",
        "meaning": "Thank you for the welcome.",
        "intent": "Use this in Level 2 hospitality context: الحديث القصير مع صاحب المكان.",
        "cultureNote": "Hospitality deserves explicit thanks.",
        "memoryHook": "Pronunciation chunks: shukran / ala / l-istiQbal",
        "pronunciationParts": [
          "shukran",
          "ala",
          "l-istiQbal"
        ],
        "possibleMoroccanReply": "bla jmil",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 17: الحديث القصير مع صاحب المكان. Show a foreign learner politely handling this situation: The learner closes the small talk warmly.. Visual focus: the phrase 'shukran ala l-istiQbal' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'الحديث القصير مع صاحب المكان'. Trigger: The learner closes the small talk warmly.. Learner says 'shukran ala l-istiQbal'. Moroccan host/staff replies 'bla jmil'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day17/l02-d17-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day17/l02-d17-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran ala l-istiQbal",
            "english": "Thank you for the welcome.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bla jmil",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 17: The learner closes the small talk warmly.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-018",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 18,
    "week": 3,
    "title": "قبول دعوة شاي",
    "situation": "Level 2 hospitality scene: قبول دعوة شاي.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D18-P01",
        "scenario": "The host offers tea and the learner accepts.",
        "goal": "Say: Thank you, I will drink tea.",
        "english": "Thank you, I will drink tea.",
        "friendlyLatin": "shukran, nshrbo atay",
        "moroccanChat": "shukran, nshrbo atay",
        "arabic": "شكرا، نشربو أتاي",
        "showArabicByDefault": false,
        "literal": "Thank you, I will drink tea.",
        "meaning": "Thank you, I will drink tea.",
        "intent": "Use this in Level 2 hospitality context: قبول دعوة شاي.",
        "cultureNote": "Accepting tea is often the culturally safe response.",
        "memoryHook": "Pronunciation chunks: shukran / nshrbo atay",
        "pronunciationParts": [
          "shukran",
          "nshrbo atay"
        ],
        "possibleMoroccanReply": "bsaha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 18: قبول دعوة شاي. Show a foreign learner politely handling this situation: The host offers tea and the learner accepts.. Visual focus: the phrase 'shukran, nshrbo atay' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'قبول دعوة شاي'. Trigger: The host offers tea and the learner accepts.. Learner says 'shukran, nshrbo atay'. Moroccan host/staff replies 'bsaha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day18/l02-d18-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day18/l02-d18-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran, nshrbo atay",
            "english": "Thank you, I will drink tea.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bsaha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 18: The host offers tea and the learner accepts.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D18-P02",
        "scenario": "The learner responds before tasting tea.",
        "goal": "Say: The tea looks delicious.",
        "english": "The tea looks delicious.",
        "friendlyLatin": "l-atay kayban bnin",
        "moroccanChat": "l-atay kayban bnin",
        "arabic": "الأتاي كيبان بنين",
        "showArabicByDefault": false,
        "literal": "The tea looks delicious.",
        "meaning": "The tea looks delicious.",
        "intent": "Use this in Level 2 hospitality context: قبول دعوة شاي.",
        "cultureNote": "Warm appreciation validates the ritual.",
        "memoryHook": "Pronunciation chunks: l-atay / kayban / bnin",
        "pronunciationParts": [
          "l-atay",
          "kayban",
          "bnin"
        ],
        "possibleMoroccanReply": "iwa tfdal",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 18: قبول دعوة شاي. Show a foreign learner politely handling this situation: The learner responds before tasting tea.. Visual focus: the phrase 'l-atay kayban bnin' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'قبول دعوة شاي'. Trigger: The learner responds before tasting tea.. Learner says 'l-atay kayban bnin'. Moroccan host/staff replies 'iwa tfdal'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day18/l02-d18-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day18/l02-d18-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-atay kayban bnin",
            "english": "The tea looks delicious.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iwa tfdal",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 18: The learner responds before tasting tea.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D18-P03",
        "scenario": "The learner wants to accept without drinking much.",
        "goal": "Say: Can I take just a little?",
        "english": "Can I take just a little?",
        "friendlyLatin": "nqder nkhod ghir shwiya?",
        "moroccanChat": "nqder nkhod ghir shwiya?",
        "arabic": "نقدر ناخد غير شوية؟",
        "showArabicByDefault": false,
        "literal": "Can I take just a little?",
        "meaning": "Can I take just a little?",
        "intent": "Use this in Level 2 hospitality context: قبول دعوة شاي.",
        "cultureNote": "This avoids direct refusal while respecting hospitality.",
        "memoryHook": "Pronunciation chunks: nqder nkhod / ghir shwiya",
        "pronunciationParts": [
          "nqder nkhod",
          "ghir shwiya"
        ],
        "possibleMoroccanReply": "iyeh, ghir shwiya",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 18: قبول دعوة شاي. Show a foreign learner politely handling this situation: The learner wants to accept without drinking much.. Visual focus: the phrase 'nqder nkhod ghir shwiya?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'قبول دعوة شاي'. Trigger: The learner wants to accept without drinking much.. Learner says 'nqder nkhod ghir shwiya?'. Moroccan host/staff replies 'iyeh, ghir shwiya'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day18/l02-d18-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day18/l02-d18-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nkhod ghir shwiya?",
            "english": "Can I take just a little?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, ghir shwiya",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 18: The learner wants to accept without drinking much.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D18-P04",
        "scenario": "The learner takes tea and thanks host.",
        "goal": "Say: Cheers/health, God bless you.",
        "english": "Cheers/health, God bless you.",
        "friendlyLatin": "saha, baraka allah fik",
        "moroccanChat": "saha, baraka allah fik",
        "arabic": "صحة، بارك الله فيك",
        "showArabicByDefault": false,
        "literal": "Cheers/health, God bless you.",
        "meaning": "Cheers/health, God bless you.",
        "intent": "Use this in Level 2 hospitality context: قبول دعوة شاي.",
        "cultureNote": "Saha and baraka allah fik are warm social formulas.",
        "memoryHook": "Pronunciation chunks: saha / baraka allah fik",
        "pronunciationParts": [
          "saha",
          "baraka allah fik"
        ],
        "possibleMoroccanReply": "allah ykhalik",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 18: قبول دعوة شاي. Show a foreign learner politely handling this situation: The learner takes tea and thanks host.. Visual focus: the phrase 'saha, baraka allah fik' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'قبول دعوة شاي'. Trigger: The learner takes tea and thanks host.. Learner says 'saha, baraka allah fik'. Moroccan host/staff replies 'allah ykhalik'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day18/l02-d18-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day18/l02-d18-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "saha, baraka allah fik",
            "english": "Cheers/health, God bless you.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "allah ykhalik",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 18: The learner takes tea and thanks host.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D18-P05",
        "scenario": "The learner compliments after tasting tea.",
        "goal": "Say: Your tea is good.",
        "english": "Your tea is good.",
        "friendlyLatin": "l-atay dyalkom zwin",
        "moroccanChat": "l-atay dyalkom zwin",
        "arabic": "الأتاي ديالكم زوين",
        "showArabicByDefault": false,
        "literal": "Your tea is good.",
        "meaning": "Your tea is good.",
        "intent": "Use this in Level 2 hospitality context: قبول دعوة شاي.",
        "cultureNote": "Tea compliment can open conversation and trust.",
        "memoryHook": "Pronunciation chunks: l-atay / dyalkom / zwin",
        "pronunciationParts": [
          "l-atay",
          "dyalkom",
          "zwin"
        ],
        "possibleMoroccanReply": "bsaha w raha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 18: قبول دعوة شاي. Show a foreign learner politely handling this situation: The learner compliments after tasting tea.. Visual focus: the phrase 'l-atay dyalkom zwin' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'قبول دعوة شاي'. Trigger: The learner compliments after tasting tea.. Learner says 'l-atay dyalkom zwin'. Moroccan host/staff replies 'bsaha w raha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day18/l02-d18-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day18/l02-d18-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-atay dyalkom zwin",
            "english": "Your tea is good.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bsaha w raha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 18: The learner compliments after tasting tea.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-019",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 19,
    "week": 3,
    "title": "رفض شيء بأدب",
    "situation": "Level 2 hospitality scene: رفض شيء بأدب.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D19-P01",
        "scenario": "The host offers more food and learner refuses gently.",
        "goal": "Say: No thank you, I am full.",
        "english": "No thank you, I am full.",
        "friendlyLatin": "la shukran, shbaat",
        "moroccanChat": "la shukran, shbaat",
        "arabic": "لا شكرا، شبعت",
        "showArabicByDefault": false,
        "literal": "No thank you, I am full.",
        "meaning": "No thank you, I am full.",
        "intent": "Use this in Level 2 hospitality context: رفض شيء بأدب.",
        "cultureNote": "Give a reason when refusing food.",
        "memoryHook": "Pronunciation chunks: la shukran / shbaat",
        "pronunciationParts": [
          "la shukran",
          "shbaat"
        ],
        "possibleMoroccanReply": "bsaha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 19: رفض شيء بأدب. Show a foreign learner politely handling this situation: The host offers more food and learner refuses gently.. Visual focus: the phrase 'la shukran, shbaat' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'رفض شيء بأدب'. Trigger: The host offers more food and learner refuses gently.. Learner says 'la shukran, shbaat'. Moroccan host/staff replies 'bsaha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day19/l02-d19-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day19/l02-d19-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "la shukran, shbaat",
            "english": "No thank you, I am full.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bsaha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 19: The host offers more food and learner refuses gently.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D19-P02",
        "scenario": "The learner wants a small portion instead of a full refusal.",
        "goal": "Say: Just a little, please.",
        "english": "Just a little, please.",
        "friendlyLatin": "ghir shwiya aafak",
        "moroccanChat": "ghir shwiya aafak",
        "arabic": "غير شوية عافاك",
        "showArabicByDefault": false,
        "literal": "Just a little, please.",
        "meaning": "Just a little, please.",
        "intent": "Use this in Level 2 hospitality context: رفض شيء بأدب.",
        "cultureNote": "Taking a little can be more polite than refusing.",
        "memoryHook": "Pronunciation chunks: ghir / shwiya / aafak",
        "pronunciationParts": [
          "ghir",
          "shwiya",
          "aafak"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 19: رفض شيء بأدب. Show a foreign learner politely handling this situation: The learner wants a small portion instead of a full refusal.. Visual focus: the phrase 'ghir shwiya aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'رفض شيء بأدب'. Trigger: The learner wants a small portion instead of a full refusal.. Learner says 'ghir shwiya aafak'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day19/l02-d19-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day19/l02-d19-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ghir shwiya aafak",
            "english": "Just a little, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 19: The learner wants a small portion instead of a full refusal.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D19-P03",
        "scenario": "The learner refuses a suggestion or invitation politely.",
        "goal": "Say: I cannot now, sorry.",
        "english": "I cannot now, sorry.",
        "friendlyLatin": "ma nqdersh daba, smeh lia",
        "moroccanChat": "ma nqdersh daba, smeh lia",
        "arabic": "ما نقدرش دابا، سمح ليا",
        "showArabicByDefault": false,
        "literal": "I cannot now, sorry.",
        "meaning": "I cannot now, sorry.",
        "intent": "Use this in Level 2 hospitality context: رفض شيء بأدب.",
        "cultureNote": "Add apology to reduce harshness.",
        "memoryHook": "Pronunciation chunks: ma nqdersh daba / smeh lia",
        "pronunciationParts": [
          "ma nqdersh daba",
          "smeh lia"
        ],
        "possibleMoroccanReply": "la bas",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 19: رفض شيء بأدب. Show a foreign learner politely handling this situation: The learner refuses a suggestion or invitation politely.. Visual focus: the phrase 'ma nqdersh daba, smeh lia' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'رفض شيء بأدب'. Trigger: The learner refuses a suggestion or invitation politely.. Learner says 'ma nqdersh daba, smeh lia'. Moroccan host/staff replies 'la bas'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day19/l02-d19-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day19/l02-d19-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ma nqdersh daba, smeh lia",
            "english": "I cannot now, sorry.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "la bas",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 19: The learner refuses a suggestion or invitation politely.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D19-P04",
        "scenario": "The learner refuses another glass politely.",
        "goal": "Say: The tea is good, but enough.",
        "english": "The tea is good, but enough.",
        "friendlyLatin": "l-atay zwin walakin kafi",
        "moroccanChat": "l-atay zwin walakin kafi",
        "arabic": "الأتاي زوين ولكن كافي",
        "showArabicByDefault": false,
        "literal": "The tea is good, but enough.",
        "meaning": "The tea is good, but enough.",
        "intent": "Use this in Level 2 hospitality context: رفض شيء بأدب.",
        "cultureNote": "Compliment first, then decline.",
        "memoryHook": "Pronunciation chunks: l-atay zwin / walakin kafi",
        "pronunciationParts": [
          "l-atay zwin",
          "walakin kafi"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 19: رفض شيء بأدب. Show a foreign learner politely handling this situation: The learner refuses another glass politely.. Visual focus: the phrase 'l-atay zwin walakin kafi' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'رفض شيء بأدب'. Trigger: The learner refuses another glass politely.. Learner says 'l-atay zwin walakin kafi'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day19/l02-d19-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day19/l02-d19-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-atay zwin walakin kafi",
            "english": "The tea is good, but enough.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 19: The learner refuses another glass politely.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D19-P05",
        "scenario": "The learner closes an offer warmly.",
        "goal": "Say: Enough, thank you / may God protect you.",
        "english": "Enough, thank you / may God protect you.",
        "friendlyLatin": "baraka, allah ykhalik",
        "moroccanChat": "baraka, allah ykhalik",
        "arabic": "باركا، الله يخليك",
        "showArabicByDefault": false,
        "literal": "Enough, thank you / may God protect you.",
        "meaning": "Enough, thank you / may God protect you.",
        "intent": "Use this in Level 2 hospitality context: رفض شيء بأدب.",
        "cultureNote": "Baraka softens “enough” when said kindly.",
        "memoryHook": "Pronunciation chunks: baraka / allah ykhalik",
        "pronunciationParts": [
          "baraka",
          "allah ykhalik"
        ],
        "possibleMoroccanReply": "bla jmil",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 19: رفض شيء بأدب. Show a foreign learner politely handling this situation: The learner closes an offer warmly.. Visual focus: the phrase 'baraka, allah ykhalik' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'رفض شيء بأدب'. Trigger: The learner closes an offer warmly.. Learner says 'baraka, allah ykhalik'. Moroccan host/staff replies 'bla jmil'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day19/l02-d19-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day19/l02-d19-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "baraka, allah ykhalik",
            "english": "Enough, thank you / may God protect you.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bla jmil",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 19: The learner closes an offer warmly.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-020",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 20,
    "week": 3,
    "title": "مدح الأكل أو الديكور",
    "situation": "Level 2 hospitality scene: مدح الأكل أو الديكور.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D20-P01",
        "scenario": "The learner compliments food.",
        "goal": "Say: The food is very delicious.",
        "english": "The food is very delicious.",
        "friendlyLatin": "l-makla bnina bzaf",
        "moroccanChat": "l-makla bnina bzaf",
        "arabic": "الماكلة بنينة بزاف",
        "showArabicByDefault": false,
        "literal": "The food is very delicious.",
        "meaning": "The food is very delicious.",
        "intent": "Use this in Level 2 hospitality context: مدح الأكل أو الديكور.",
        "cultureNote": "Food compliments are key hospitality language.",
        "memoryHook": "Pronunciation chunks: l-makla / bnina / bzaf",
        "pronunciationParts": [
          "l-makla",
          "bnina",
          "bzaf"
        ],
        "possibleMoroccanReply": "bsaha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 20: مدح الأكل أو الديكور. Show a foreign learner politely handling this situation: The learner compliments food.. Visual focus: the phrase 'l-makla bnina bzaf' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مدح الأكل أو الديكور'. Trigger: The learner compliments food.. Learner says 'l-makla bnina bzaf'. Moroccan host/staff replies 'bsaha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day20/l02-d20-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day20/l02-d20-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-makla bnina bzaf",
            "english": "The food is very delicious.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bsaha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 20: The learner compliments food.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D20-P02",
        "scenario": "The learner compliments the place respectfully.",
        "goal": "Say: The riad is beautiful, mashallah.",
        "english": "The riad is beautiful, mashallah.",
        "friendlyLatin": "l-riad zwin mashallah",
        "moroccanChat": "l-riad zwin mashallah",
        "arabic": "الرياض زوين ما شاء الله",
        "showArabicByDefault": false,
        "literal": "The riad is beautiful, mashallah.",
        "meaning": "The riad is beautiful, mashallah.",
        "intent": "Use this in Level 2 hospitality context: مدح الأكل أو الديكور.",
        "cultureNote": "Mashallah is culturally warm when admiring something.",
        "memoryHook": "Pronunciation chunks: l-riad / zwin / mashallah",
        "pronunciationParts": [
          "l-riad",
          "zwin",
          "mashallah"
        ],
        "possibleMoroccanReply": "allah ybarek fik",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 20: مدح الأكل أو الديكور. Show a foreign learner politely handling this situation: The learner compliments the place respectfully.. Visual focus: the phrase 'l-riad zwin mashallah' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مدح الأكل أو الديكور'. Trigger: The learner compliments the place respectfully.. Learner says 'l-riad zwin mashallah'. Moroccan host/staff replies 'allah ybarek fik'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day20/l02-d20-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day20/l02-d20-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-riad zwin mashallah",
            "english": "The riad is beautiful, mashallah.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "allah ybarek fik",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 20: The learner compliments the place respectfully.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D20-P03",
        "scenario": "The learner reacts to Moroccan zellij decor.",
        "goal": "Say: This tilework is amazing.",
        "english": "This tilework is amazing.",
        "friendlyLatin": "had zliij kayhammaq",
        "moroccanChat": "had zliij kayhammaq",
        "arabic": "هاد الزليج كيحمق",
        "showArabicByDefault": false,
        "literal": "This tilework is amazing.",
        "meaning": "This tilework is amazing.",
        "intent": "Use this in Level 2 hospitality context: مدح الأكل أو الديكور.",
        "cultureNote": "Zellij is a very Moroccan visual/cultural object for scenes.",
        "memoryHook": "Pronunciation chunks: had / zliij / kayhammaq",
        "pronunciationParts": [
          "had",
          "zliij",
          "kayhammaq"
        ],
        "possibleMoroccanReply": "iyeh, taqlidi",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 20: مدح الأكل أو الديكور. Show a foreign learner politely handling this situation: The learner reacts to Moroccan zellij decor.. Visual focus: the phrase 'had zliij kayhammaq' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مدح الأكل أو الديكور'. Trigger: The learner reacts to Moroccan zellij decor.. Learner says 'had zliij kayhammaq'. Moroccan host/staff replies 'iyeh, taqlidi'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day20/l02-d20-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day20/l02-d20-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "had zliij kayhammaq",
            "english": "This tilework is amazing.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, taqlidi",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 20: The learner reacts to Moroccan zellij decor.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D20-P04",
        "scenario": "The learner compliments room cleanliness.",
        "goal": "Say: The room is very clean.",
        "english": "The room is very clean.",
        "friendlyLatin": "l-bit nqiya bzaf",
        "moroccanChat": "l-bit nqiya bzaf",
        "arabic": "البيت نقية بزاف",
        "showArabicByDefault": false,
        "literal": "The room is very clean.",
        "meaning": "The room is very clean.",
        "intent": "Use this in Level 2 hospitality context: مدح الأكل أو الديكور.",
        "cultureNote": "Simple positive feedback to staff/host.",
        "memoryHook": "Pronunciation chunks: l-bit / nqiya / bzaf",
        "pronunciationParts": [
          "l-bit",
          "nqiya",
          "bzaf"
        ],
        "possibleMoroccanReply": "shukran",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 20: مدح الأكل أو الديكور. Show a foreign learner politely handling this situation: The learner compliments room cleanliness.. Visual focus: the phrase 'l-bit nqiya bzaf' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مدح الأكل أو الديكور'. Trigger: The learner compliments room cleanliness.. Learner says 'l-bit nqiya bzaf'. Moroccan host/staff replies 'shukran'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day20/l02-d20-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day20/l02-d20-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-bit nqiya bzaf",
            "english": "The room is very clean.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "shukran",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 20: The learner compliments room cleanliness.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D20-P05",
        "scenario": "The learner thanks after food/decor welcome.",
        "goal": "Say: Thank you for this welcome.",
        "english": "Thank you for this welcome.",
        "friendlyLatin": "shukran ala had l-istiQbal",
        "moroccanChat": "shukran ala had l-istiQbal",
        "arabic": "شكرا على هاد الاستقبال",
        "showArabicByDefault": false,
        "literal": "Thank you for this welcome.",
        "meaning": "Thank you for this welcome.",
        "intent": "Use this in Level 2 hospitality context: مدح الأكل أو الديكور.",
        "cultureNote": "This anchors hospitality as the level’s core.",
        "memoryHook": "Pronunciation chunks: shukran ala / had l-istiQbal",
        "pronunciationParts": [
          "shukran ala",
          "had l-istiQbal"
        ],
        "possibleMoroccanReply": "mrehba bik",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 20: مدح الأكل أو الديكور. Show a foreign learner politely handling this situation: The learner thanks after food/decor welcome.. Visual focus: the phrase 'shukran ala had l-istiQbal' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مدح الأكل أو الديكور'. Trigger: The learner thanks after food/decor welcome.. Learner says 'shukran ala had l-istiQbal'. Moroccan host/staff replies 'mrehba bik'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day20/l02-d20-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day20/l02-d20-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran ala had l-istiQbal",
            "english": "Thank you for this welcome.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mrehba bik",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 20: The learner thanks after food/decor welcome.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-021",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 21,
    "week": 3,
    "title": "طلب اتجاه من داخل الرياض",
    "situation": "Level 2 hospitality scene: طلب اتجاه من داخل الرياض.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D21-P01",
        "scenario": "The learner is inside the riad and asks for exit.",
        "goal": "Say: Where is the exit, please?",
        "english": "Where is the exit, please?",
        "friendlyLatin": "fin l-kharja aafak?",
        "moroccanChat": "fin l-kharja aafak?",
        "arabic": "فين الخرجة عافاك؟",
        "showArabicByDefault": false,
        "literal": "Where is the exit, please?",
        "meaning": "Where is the exit, please?",
        "intent": "Use this in Level 2 hospitality context: طلب اتجاه من داخل الرياض.",
        "cultureNote": "Riads can be maze-like; this is visually useful.",
        "memoryHook": "Pronunciation chunks: fin / l-kharja / aafak",
        "pronunciationParts": [
          "fin",
          "l-kharja",
          "aafak"
        ],
        "possibleMoroccanReply": "mn hna",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 21: طلب اتجاه من داخل الرياض. Show a foreign learner politely handling this situation: The learner is inside the riad and asks for exit.. Visual focus: the phrase 'fin l-kharja aafak?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب اتجاه من داخل الرياض'. Trigger: The learner is inside the riad and asks for exit.. Learner says 'fin l-kharja aafak?'. Moroccan host/staff replies 'mn hna'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day21/l02-d21-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day21/l02-d21-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "fin l-kharja aafak?",
            "english": "Where is the exit, please?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mn hna",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 21: The learner is inside the riad and asks for exit.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D21-P02",
        "scenario": "The learner asks for direction from the riad to the medina.",
        "goal": "Say: Where is the way to the medina?",
        "english": "Where is the way to the medina?",
        "friendlyLatin": "fin triq l-medina?",
        "moroccanChat": "fin triq l-medina?",
        "arabic": "فين طريق المدينة؟",
        "showArabicByDefault": false,
        "literal": "Where is the way to the medina?",
        "meaning": "Where is the way to the medina?",
        "intent": "Use this in Level 2 hospitality context: طلب اتجاه من داخل الرياض.",
        "cultureNote": "Medina navigation is a real visitor issue.",
        "memoryHook": "Pronunciation chunks: fin / triq / l-medina",
        "pronunciationParts": [
          "fin",
          "triq",
          "l-medina"
        ],
        "possibleMoroccanReply": "sir nishan",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 21: طلب اتجاه من داخل الرياض. Show a foreign learner politely handling this situation: The learner asks for direction from the riad to the medina.. Visual focus: the phrase 'fin triq l-medina?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب اتجاه من داخل الرياض'. Trigger: The learner asks for direction from the riad to the medina.. Learner says 'fin triq l-medina?'. Moroccan host/staff replies 'sir nishan'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day21/l02-d21-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day21/l02-d21-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "fin triq l-medina?",
            "english": "Where is the way to the medina?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "sir nishan",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 21: The learner asks for direction from the riad to the medina.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D21-P03",
        "scenario": "The learner asks if taxis are nearby.",
        "goal": "Say: Is the taxi near here?",
        "english": "Is the taxi near here?",
        "friendlyLatin": "wash l-taxi qrib mn hna?",
        "moroccanChat": "wash l-taxi qrib mn hna?",
        "arabic": "واش الطاكسي قريب من هنا؟",
        "showArabicByDefault": false,
        "literal": "Is the taxi near here?",
        "meaning": "Is the taxi near here?",
        "intent": "Use this in Level 2 hospitality context: طلب اتجاه من داخل الرياض.",
        "cultureNote": "Connects Level 1 transport with Level 2 accommodation.",
        "memoryHook": "Pronunciation chunks: wash l-taxi / qrib mn / hna",
        "pronunciationParts": [
          "wash l-taxi",
          "qrib mn",
          "hna"
        ],
        "possibleMoroccanReply": "iyeh f dak l-koutchi",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 21: طلب اتجاه من داخل الرياض. Show a foreign learner politely handling this situation: The learner asks if taxis are nearby.. Visual focus: the phrase 'wash l-taxi qrib mn hna?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب اتجاه من داخل الرياض'. Trigger: The learner asks if taxis are nearby.. Learner says 'wash l-taxi qrib mn hna?'. Moroccan host/staff replies 'iyeh f dak l-koutchi'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day21/l02-d21-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day21/l02-d21-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash l-taxi qrib mn hna?",
            "english": "Is the taxi near here?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh f dak l-koutchi",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 21: The learner asks if taxis are nearby.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D21-P04",
        "scenario": "The learner asks if walking is possible.",
        "goal": "Say: Can I go on foot?",
        "english": "Can I go on foot?",
        "friendlyLatin": "nqder nmshi b rjli?",
        "moroccanChat": "nqder nmshi b rjli?",
        "arabic": "نقدر نمشي برجلي؟",
        "showArabicByDefault": false,
        "literal": "Can I go on foot?",
        "meaning": "Can I go on foot?",
        "intent": "Use this in Level 2 hospitality context: طلب اتجاه من داخل الرياض.",
        "cultureNote": "Practical route question for old medina/riad areas.",
        "memoryHook": "Pronunciation chunks: nqder nmshi / b rjli",
        "pronunciationParts": [
          "nqder nmshi",
          "b rjli"
        ],
        "possibleMoroccanReply": "iyeh, qriba",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 21: طلب اتجاه من داخل الرياض. Show a foreign learner politely handling this situation: The learner asks if walking is possible.. Visual focus: the phrase 'nqder nmshi b rjli?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب اتجاه من داخل الرياض'. Trigger: The learner asks if walking is possible.. Learner says 'nqder nmshi b rjli?'. Moroccan host/staff replies 'iyeh, qriba'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day21/l02-d21-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day21/l02-d21-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nmshi b rjli?",
            "english": "Can I go on foot?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, qriba",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 21: The learner asks if walking is possible.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D21-P05",
        "scenario": "The learner asks for a simple map/direction.",
        "goal": "Say: Draw the route for me, please.",
        "english": "Draw the route for me, please.",
        "friendlyLatin": "rsem lia tariq aafak",
        "moroccanChat": "rsem lia tariq aafak",
        "arabic": "رسم ليا الطريق عافاك",
        "showArabicByDefault": false,
        "literal": "Draw the route for me, please.",
        "meaning": "Draw the route for me, please.",
        "intent": "Use this in Level 2 hospitality context: طلب اتجاه من داخل الرياض.",
        "cultureNote": "A visual route request fits app image/video logic.",
        "memoryHook": "Pronunciation chunks: rsem lia / tariq aafak",
        "pronunciationParts": [
          "rsem lia",
          "tariq aafak"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 21: طلب اتجاه من داخل الرياض. Show a foreign learner politely handling this situation: The learner asks for a simple map/direction.. Visual focus: the phrase 'rsem lia tariq aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب اتجاه من داخل الرياض'. Trigger: The learner asks for a simple map/direction.. Learner says 'rsem lia tariq aafak'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day21/l02-d21-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day21/l02-d21-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "rsem lia tariq aafak",
            "english": "Draw the route for me, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 21: The learner asks for a simple map/direction.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-022",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 22,
    "week": 4,
    "title": "تسليم المفتاح والخروج",
    "situation": "Level 2 hospitality scene: تسليم المفتاح والخروج.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D22-P01",
        "scenario": "The learner returns/leaves the room and gives the key.",
        "goal": "Say: I want to hand over the key.",
        "english": "I want to hand over the key.",
        "friendlyLatin": "bghit nselm l-kle",
        "moroccanChat": "bghit nselm l-kle",
        "arabic": "بغيت نسلم الكلي",
        "showArabicByDefault": false,
        "literal": "I want to hand over the key.",
        "meaning": "I want to hand over the key.",
        "intent": "Use this in Level 2 hospitality context: تسليم المفتاح والخروج.",
        "cultureNote": "Key handover is common in small riads.",
        "memoryHook": "Pronunciation chunks: bghit / nselm / l-kle",
        "pronunciationParts": [
          "bghit",
          "nselm",
          "l-kle"
        ],
        "possibleMoroccanReply": "wakha, shukran",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 22: تسليم المفتاح والخروج. Show a foreign learner politely handling this situation: The learner returns/leaves the room and gives the key.. Visual focus: the phrase 'bghit nselm l-kle' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'تسليم المفتاح والخروج'. Trigger: The learner returns/leaves the room and gives the key.. Learner says 'bghit nselm l-kle'. Moroccan host/staff replies 'wakha, shukran'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day22/l02-d22-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day22/l02-d22-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit nselm l-kle",
            "english": "I want to hand over the key.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha, shukran",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 22: The learner returns/leaves the room and gives the key.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D22-P02",
        "scenario": "The learner asks check-out time.",
        "goal": "Say: What time is check-out?",
        "english": "What time is check-out?",
        "friendlyLatin": "imta check-out?",
        "moroccanChat": "imta check-out?",
        "arabic": "إيمتا تشيك أوت؟",
        "showArabicByDefault": false,
        "literal": "What time is check-out?",
        "meaning": "What time is check-out?",
        "intent": "Use this in Level 2 hospitality context: تسليم المفتاح والخروج.",
        "cultureNote": "Hotel/riad phrase guides highlight check-out time.",
        "memoryHook": "Pronunciation chunks: imta / check-out",
        "pronunciationParts": [
          "imta",
          "check-out"
        ],
        "possibleMoroccanReply": "m3a hdash",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 22: تسليم المفتاح والخروج. Show a foreign learner politely handling this situation: The learner asks check-out time.. Visual focus: the phrase 'imta check-out?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'تسليم المفتاح والخروج'. Trigger: The learner asks check-out time.. Learner says 'imta check-out?'. Moroccan host/staff replies 'm3a hdash'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day22/l02-d22-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day22/l02-d22-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "imta check-out?",
            "english": "What time is check-out?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "m3a hdash",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 22: The learner asks check-out time.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D22-P03",
        "scenario": "The learner has checked out but wants to walk around.",
        "goal": "Say: Can I leave my suitcase here?",
        "english": "Can I leave my suitcase here?",
        "friendlyLatin": "nqder nkhli shnati hna?",
        "moroccanChat": "nqder nkhli shnati hna?",
        "arabic": "نقدر نخلي شنطتي هنا؟",
        "showArabicByDefault": false,
        "literal": "Can I leave my suitcase here?",
        "meaning": "Can I leave my suitcase here?",
        "intent": "Use this in Level 2 hospitality context: تسليم المفتاح والخروج.",
        "cultureNote": "Luggage after check-out is practical and frequent.",
        "memoryHook": "Pronunciation chunks: nqder nkhli / shnati hna",
        "pronunciationParts": [
          "nqder nkhli",
          "shnati hna"
        ],
        "possibleMoroccanReply": "iyeh, khlliha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 22: تسليم المفتاح والخروج. Show a foreign learner politely handling this situation: The learner has checked out but wants to walk around.. Visual focus: the phrase 'nqder nkhli shnati hna?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'تسليم المفتاح والخروج'. Trigger: The learner has checked out but wants to walk around.. Learner says 'nqder nkhli shnati hna?'. Moroccan host/staff replies 'iyeh, khlliha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day22/l02-d22-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day22/l02-d22-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nkhli shnati hna?",
            "english": "Can I leave my suitcase here?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, khlliha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 22: The learner has checked out but wants to walk around.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D22-P04",
        "scenario": "The learner checks if payment is complete.",
        "goal": "Say: Is the bill finished?",
        "english": "Is the bill finished?",
        "friendlyLatin": "wash l-hsab sali?",
        "moroccanChat": "wash l-hsab sali?",
        "arabic": "واش الحساب سالى؟",
        "showArabicByDefault": false,
        "literal": "Is the bill finished?",
        "meaning": "Is the bill finished?",
        "intent": "Use this in Level 2 hospitality context: تسليم المفتاح والخروج.",
        "cultureNote": "Payment closure avoids misunderstanding.",
        "memoryHook": "Pronunciation chunks: wash / l-hsab / sali",
        "pronunciationParts": [
          "wash",
          "l-hsab",
          "sali"
        ],
        "possibleMoroccanReply": "iyeh sali",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 22: تسليم المفتاح والخروج. Show a foreign learner politely handling this situation: The learner checks if payment is complete.. Visual focus: the phrase 'wash l-hsab sali?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'تسليم المفتاح والخروج'. Trigger: The learner checks if payment is complete.. Learner says 'wash l-hsab sali?'. Moroccan host/staff replies 'iyeh sali'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day22/l02-d22-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day22/l02-d22-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash l-hsab sali?",
            "english": "Is the bill finished?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh sali",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 22: The learner checks if payment is complete.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D22-P05",
        "scenario": "The learner leaves with a final thanks.",
        "goal": "Say: Thank you, it was a nice stay.",
        "english": "Thank you, it was a nice stay.",
        "friendlyLatin": "shukran, kanet iqama zwina",
        "moroccanChat": "shukran, kanet iqama zwina",
        "arabic": "شكرا، كانت إقامة زوينة",
        "showArabicByDefault": false,
        "literal": "Thank you, it was a nice stay.",
        "meaning": "Thank you, it was a nice stay.",
        "intent": "Use this in Level 2 hospitality context: تسليم المفتاح والخروج.",
        "cultureNote": "Thanking hosts before leaving is polite.",
        "memoryHook": "Pronunciation chunks: shukran / kanet iqama zwina",
        "pronunciationParts": [
          "shukran",
          "kanet iqama zwina"
        ],
        "possibleMoroccanReply": "tji m3a lkhir",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 22: تسليم المفتاح والخروج. Show a foreign learner politely handling this situation: The learner leaves with a final thanks.. Visual focus: the phrase 'shukran, kanet iqama zwina' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'تسليم المفتاح والخروج'. Trigger: The learner leaves with a final thanks.. Learner says 'shukran, kanet iqama zwina'. Moroccan host/staff replies 'tji m3a lkhir'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day22/l02-d22-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day22/l02-d22-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran, kanet iqama zwina",
            "english": "Thank you, it was a nice stay.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "tji m3a lkhir",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 22: The learner leaves with a final thanks.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-023",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 23,
    "week": 4,
    "title": "مراجعة أسبوع 3: ضيافة + خدمة",
    "situation": "Level 2 hospitality scene: مراجعة أسبوع 3: ضيافة + خدمة.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D23-P01",
        "scenario": "Review service problem.",
        "goal": "Say: The Wi‑Fi is not working.",
        "english": "The Wi‑Fi is not working.",
        "friendlyLatin": "l-wifi ma khdamsh",
        "moroccanChat": "l-wifi ma khdamsh",
        "arabic": "الويفي ما خدامش",
        "showArabicByDefault": false,
        "literal": "The Wi‑Fi is not working.",
        "meaning": "The Wi‑Fi is not working.",
        "intent": "Use this in Level 2 hospitality context: مراجعة أسبوع 3: ضيافة + خدمة.",
        "cultureNote": "Combines amenity + problem pattern.",
        "memoryHook": "Pronunciation chunks: l-wifi / ma / khdamsh",
        "pronunciationParts": [
          "l-wifi",
          "ma",
          "khdamsh"
        ],
        "possibleMoroccanReply": "daba nshufu",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 23: مراجعة أسبوع 3: ضيافة + خدمة. Show a foreign learner politely handling this situation: Review service problem.. Visual focus: the phrase 'l-wifi ma khdamsh' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة أسبوع 3: ضيافة + خدمة'. Trigger: Review service problem.. Learner says 'l-wifi ma khdamsh'. Moroccan host/staff replies 'daba nshufu'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day23/l02-d23-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day23/l02-d23-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-wifi ma khdamsh",
            "english": "The Wi‑Fi is not working.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "daba nshufu",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 23: Review service problem.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D23-P02",
        "scenario": "Review room supply request.",
        "goal": "Say: I would like another towel.",
        "english": "I would like another towel.",
        "friendlyLatin": "bghit manshfa okhra",
        "moroccanChat": "bghit manshfa okhra",
        "arabic": "بغيت منشفة أخرى",
        "showArabicByDefault": false,
        "literal": "I would like another towel.",
        "meaning": "I would like another towel.",
        "intent": "Use this in Level 2 hospitality context: مراجعة أسبوع 3: ضيافة + خدمة.",
        "cultureNote": "Essential polite request pattern.",
        "memoryHook": "Pronunciation chunks: bghit / manshfa / okhra",
        "pronunciationParts": [
          "bghit",
          "manshfa",
          "okhra"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 23: مراجعة أسبوع 3: ضيافة + خدمة. Show a foreign learner politely handling this situation: Review room supply request.. Visual focus: the phrase 'bghit manshfa okhra' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة أسبوع 3: ضيافة + خدمة'. Trigger: Review room supply request.. Learner says 'bghit manshfa okhra'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day23/l02-d23-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day23/l02-d23-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit manshfa okhra",
            "english": "I would like another towel.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 23: Review room supply request.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D23-P03",
        "scenario": "Review compliment.",
        "goal": "Say: The food is very delicious.",
        "english": "The food is very delicious.",
        "friendlyLatin": "l-makla bnina bzaf",
        "moroccanChat": "l-makla bnina bzaf",
        "arabic": "الماكلة بنينة بزاف",
        "showArabicByDefault": false,
        "literal": "The food is very delicious.",
        "meaning": "The food is very delicious.",
        "intent": "Use this in Level 2 hospitality context: مراجعة أسبوع 3: ضيافة + خدمة.",
        "cultureNote": "Positive feedback belongs with hospitality.",
        "memoryHook": "Pronunciation chunks: l-makla / bnina / bzaf",
        "pronunciationParts": [
          "l-makla",
          "bnina",
          "bzaf"
        ],
        "possibleMoroccanReply": "bsaha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 23: مراجعة أسبوع 3: ضيافة + خدمة. Show a foreign learner politely handling this situation: Review compliment.. Visual focus: the phrase 'l-makla bnina bzaf' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة أسبوع 3: ضيافة + خدمة'. Trigger: Review compliment.. Learner says 'l-makla bnina bzaf'. Moroccan host/staff replies 'bsaha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day23/l02-d23-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day23/l02-d23-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-makla bnina bzaf",
            "english": "The food is very delicious.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bsaha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 23: Review compliment.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D23-P04",
        "scenario": "Review stay extension.",
        "goal": "Say: Can I add one night?",
        "english": "Can I add one night?",
        "friendlyLatin": "nqder nzid lila?",
        "moroccanChat": "nqder nzid lila?",
        "arabic": "نقدر نزيد ليلة؟",
        "showArabicByDefault": false,
        "literal": "Can I add one night?",
        "meaning": "Can I add one night?",
        "intent": "Use this in Level 2 hospitality context: مراجعة أسبوع 3: ضيافة + خدمة.",
        "cultureNote": "Practical accommodation management.",
        "memoryHook": "Pronunciation chunks: nqder / nzid / lila",
        "pronunciationParts": [
          "nqder",
          "nzid",
          "lila"
        ],
        "possibleMoroccanReply": "nshufu",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 23: مراجعة أسبوع 3: ضيافة + خدمة. Show a foreign learner politely handling this situation: Review stay extension.. Visual focus: the phrase 'nqder nzid lila?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة أسبوع 3: ضيافة + خدمة'. Trigger: Review stay extension.. Learner says 'nqder nzid lila?'. Moroccan host/staff replies 'nshufu'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day23/l02-d23-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day23/l02-d23-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nzid lila?",
            "english": "Can I add one night?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "nshufu",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 23: Review stay extension.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D23-P05",
        "scenario": "Review direction from the riad.",
        "goal": "Say: Where is the medina, please?",
        "english": "Where is the medina, please?",
        "friendlyLatin": "fin l-medina aafak?",
        "moroccanChat": "fin l-medina aafak?",
        "arabic": "فين المدينة عافاك؟",
        "showArabicByDefault": false,
        "literal": "Where is the medina, please?",
        "meaning": "Where is the medina, please?",
        "intent": "Use this in Level 2 hospitality context: مراجعة أسبوع 3: ضيافة + خدمة.",
        "cultureNote": "Connects guest stay with local navigation.",
        "memoryHook": "Pronunciation chunks: fin / l-medina / aafak",
        "pronunciationParts": [
          "fin",
          "l-medina",
          "aafak"
        ],
        "possibleMoroccanReply": "sir nishan",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 23: مراجعة أسبوع 3: ضيافة + خدمة. Show a foreign learner politely handling this situation: Review direction from the riad.. Visual focus: the phrase 'fin l-medina aafak?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة أسبوع 3: ضيافة + خدمة'. Trigger: Review direction from the riad.. Learner says 'fin l-medina aafak?'. Moroccan host/staff replies 'sir nishan'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day23/l02-d23-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day23/l02-d23-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "fin l-medina aafak?",
            "english": "Where is the medina, please?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "sir nishan",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 23: Review direction from the riad.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-024",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 24,
    "week": 4,
    "title": "موقف سوء فهم مع المضيف",
    "situation": "Level 2 hospitality scene: موقف سوء فهم مع المضيف.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D24-P01",
        "scenario": "The host says something fast and learner does not understand.",
        "goal": "Say: I did not understand, sorry.",
        "english": "I did not understand, sorry.",
        "friendlyLatin": "ma fhemtsh, smeh lia",
        "moroccanChat": "ma fhemtsh, smeh lia",
        "arabic": "ما فهمتش، سمح ليا",
        "showArabicByDefault": false,
        "literal": "I did not understand, sorry.",
        "meaning": "I did not understand, sorry.",
        "intent": "Use this in Level 2 hospitality context: موقف سوء فهم مع المضيف.",
        "cultureNote": "A safe repair phrase for any conversation.",
        "memoryHook": "Pronunciation chunks: ma fhemtsh / smeh lia",
        "pronunciationParts": [
          "ma fhemtsh",
          "smeh lia"
        ],
        "possibleMoroccanReply": "ma mushkil",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 24: موقف سوء فهم مع المضيف. Show a foreign learner politely handling this situation: The host says something fast and learner does not understand.. Visual focus: the phrase 'ma fhemtsh, smeh lia' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'موقف سوء فهم مع المضيف'. Trigger: The host says something fast and learner does not understand.. Learner says 'ma fhemtsh, smeh lia'. Moroccan host/staff replies 'ma mushkil'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day24/l02-d24-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day24/l02-d24-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ma fhemtsh, smeh lia",
            "english": "I did not understand, sorry.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "ma mushkil",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 24: The host says something fast and learner does not understand.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D24-P02",
        "scenario": "The learner asks for repetition.",
        "goal": "Say: Repeat, please.",
        "english": "Repeat, please.",
        "friendlyLatin": "aawed aafak",
        "moroccanChat": "aawed aafak",
        "arabic": "عاود عافاك",
        "showArabicByDefault": false,
        "literal": "Repeat, please.",
        "meaning": "Repeat, please.",
        "intent": "Use this in Level 2 hospitality context: موقف سوء فهم مع المضيف.",
        "cultureNote": "Repair strategies prevent panic in real interactions.",
        "memoryHook": "Pronunciation chunks: aawed / aafak",
        "pronunciationParts": [
          "aawed",
          "aafak"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 24: موقف سوء فهم مع المضيف. Show a foreign learner politely handling this situation: The learner asks for repetition.. Visual focus: the phrase 'aawed aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'موقف سوء فهم مع المضيف'. Trigger: The learner asks for repetition.. Learner says 'aawed aafak'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day24/l02-d24-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day24/l02-d24-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "aawed aafak",
            "english": "Repeat, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 24: The learner asks for repetition.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D24-P03",
        "scenario": "The learner asks host to slow down.",
        "goal": "Say: Speak slowly, please.",
        "english": "Speak slowly, please.",
        "friendlyLatin": "hder b-shwiya aafak",
        "moroccanChat": "hder b-shwiya aafak",
        "arabic": "هضر بشوية عافاك",
        "showArabicByDefault": false,
        "literal": "Speak slowly, please.",
        "meaning": "Speak slowly, please.",
        "intent": "Use this in Level 2 hospitality context: موقف سوء فهم مع المضيف.",
        "cultureNote": "Slow-speech request is essential beyond Level 1.",
        "memoryHook": "Pronunciation chunks: hder / b-shwiya / aafak",
        "pronunciationParts": [
          "hder",
          "b-shwiya",
          "aafak"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 24: موقف سوء فهم مع المضيف. Show a foreign learner politely handling this situation: The learner asks host to slow down.. Visual focus: the phrase 'hder b-shwiya aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'موقف سوء فهم مع المضيف'. Trigger: The learner asks host to slow down.. Learner says 'hder b-shwiya aafak'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day24/l02-d24-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day24/l02-d24-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "hder b-shwiya aafak",
            "english": "Speak slowly, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 24: The learner asks host to slow down.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D24-P04",
        "scenario": "The learner clarifies timing.",
        "goal": "Say: Do you mean now?",
        "english": "Do you mean now?",
        "friendlyLatin": "wash t3ni daba?",
        "moroccanChat": "wash t3ni daba?",
        "arabic": "واش تعني دابا؟",
        "showArabicByDefault": false,
        "literal": "Do you mean now?",
        "meaning": "Do you mean now?",
        "intent": "Use this in Level 2 hospitality context: موقف سوء فهم مع المضيف.",
        "cultureNote": "Clarifying one element is better than full translation.",
        "memoryHook": "Pronunciation chunks: wash / t3ni / daba",
        "pronunciationParts": [
          "wash",
          "t3ni",
          "daba"
        ],
        "possibleMoroccanReply": "iyeh, daba",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 24: موقف سوء فهم مع المضيف. Show a foreign learner politely handling this situation: The learner clarifies timing.. Visual focus: the phrase 'wash t3ni daba?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'موقف سوء فهم مع المضيف'. Trigger: The learner clarifies timing.. Learner says 'wash t3ni daba?'. Moroccan host/staff replies 'iyeh, daba'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day24/l02-d24-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day24/l02-d24-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash t3ni daba?",
            "english": "Do you mean now?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, daba",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 24: The learner clarifies timing.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D24-P05",
        "scenario": "The misunderstanding is resolved.",
        "goal": "Say: Okay, now I understood.",
        "english": "Okay, now I understood.",
        "friendlyLatin": "wakha, daba fhemt",
        "moroccanChat": "wakha, daba fhemt",
        "arabic": "واخا، دابا فهمت",
        "showArabicByDefault": false,
        "literal": "Okay, now I understood.",
        "meaning": "Okay, now I understood.",
        "intent": "Use this in Level 2 hospitality context: موقف سوء فهم مع المضيف.",
        "cultureNote": "Closing the repair confirms communication success.",
        "memoryHook": "Pronunciation chunks: wakha / daba fhemt",
        "pronunciationParts": [
          "wakha",
          "daba fhemt"
        ],
        "possibleMoroccanReply": "mzyan",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 24: موقف سوء فهم مع المضيف. Show a foreign learner politely handling this situation: The misunderstanding is resolved.. Visual focus: the phrase 'wakha, daba fhemt' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'موقف سوء فهم مع المضيف'. Trigger: The misunderstanding is resolved.. Learner says 'wakha, daba fhemt'. Moroccan host/staff replies 'mzyan'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day24/l02-d24-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day24/l02-d24-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wakha, daba fhemt",
            "english": "Okay, now I understood.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mzyan",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 24: The misunderstanding is resolved.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-025",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 25,
    "week": 4,
    "title": "التعامل مع تأخر الفطور أو التنظيف",
    "situation": "Level 2 hospitality scene: التعامل مع تأخر الفطور أو التنظيف.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D25-P01",
        "scenario": "Breakfast is late and learner asks gently.",
        "goal": "Say: Breakfast has not come yet.",
        "english": "Breakfast has not come yet.",
        "friendlyLatin": "l-ftor mazal ma jash",
        "moroccanChat": "l-ftor mazal ma jash",
        "arabic": "الفطور مازال ما جاش",
        "showArabicByDefault": false,
        "literal": "Breakfast has not come yet.",
        "meaning": "Breakfast has not come yet.",
        "intent": "Use this in Level 2 hospitality context: التعامل مع تأخر الفطور أو التنظيف.",
        "cultureNote": "Use “mazal” to report without sounding angry.",
        "memoryHook": "Pronunciation chunks: l-ftor mazal / ma jash",
        "pronunciationParts": [
          "l-ftor mazal",
          "ma jash"
        ],
        "possibleMoroccanReply": "smeh lia, daba yji",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 25: التعامل مع تأخر الفطور أو التنظيف. Show a foreign learner politely handling this situation: Breakfast is late and learner asks gently.. Visual focus: the phrase 'l-ftor mazal ma jash' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التعامل مع تأخر الفطور أو التنظيف'. Trigger: Breakfast is late and learner asks gently.. Learner says 'l-ftor mazal ma jash'. Moroccan host/staff replies 'smeh lia, daba yji'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day25/l02-d25-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day25/l02-d25-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-ftor mazal ma jash",
            "english": "Breakfast has not come yet.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "smeh lia, daba yji",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 25: Breakfast is late and learner asks gently.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D25-P02",
        "scenario": "The learner asks timing without complaint.",
        "goal": "Say: Is breakfast soon?",
        "english": "Is breakfast soon?",
        "friendlyLatin": "wash l-ftor qrib?",
        "moroccanChat": "wash l-ftor qrib?",
        "arabic": "واش الفطور قريب؟",
        "showArabicByDefault": false,
        "literal": "Is breakfast soon?",
        "meaning": "Is breakfast soon?",
        "intent": "Use this in Level 2 hospitality context: التعامل مع تأخر الفطور أو التنظيف.",
        "cultureNote": "Soft timing question fits hospitality.",
        "memoryHook": "Pronunciation chunks: wash / l-ftor / qrib",
        "pronunciationParts": [
          "wash",
          "l-ftor",
          "qrib"
        ],
        "possibleMoroccanReply": "iyeh, qrib",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 25: التعامل مع تأخر الفطور أو التنظيف. Show a foreign learner politely handling this situation: The learner asks timing without complaint.. Visual focus: the phrase 'wash l-ftor qrib?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التعامل مع تأخر الفطور أو التنظيف'. Trigger: The learner asks timing without complaint.. Learner says 'wash l-ftor qrib?'. Moroccan host/staff replies 'iyeh, qrib'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day25/l02-d25-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day25/l02-d25-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash l-ftor qrib?",
            "english": "Is breakfast soon?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, qrib",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 25: The learner asks timing without complaint.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D25-P03",
        "scenario": "The room cleaning is delayed.",
        "goal": "Say: The room has not been cleaned yet.",
        "english": "The room has not been cleaned yet.",
        "friendlyLatin": "l-bit mazal ma tnqash",
        "moroccanChat": "l-bit mazal ma tnqash",
        "arabic": "البيت مازال ما تنقاش",
        "showArabicByDefault": false,
        "literal": "The room has not been cleaned yet.",
        "meaning": "The room has not been cleaned yet.",
        "intent": "Use this in Level 2 hospitality context: التعامل مع تأخر الفطور أو التنظيف.",
        "cultureNote": "Useful service issue language.",
        "memoryHook": "Pronunciation chunks: l-bit mazal / ma tnqash",
        "pronunciationParts": [
          "l-bit mazal",
          "ma tnqash"
        ],
        "possibleMoroccanReply": "daba tji l-khdama",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 25: التعامل مع تأخر الفطور أو التنظيف. Show a foreign learner politely handling this situation: The room cleaning is delayed.. Visual focus: the phrase 'l-bit mazal ma tnqash' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التعامل مع تأخر الفطور أو التنظيف'. Trigger: The room cleaning is delayed.. Learner says 'l-bit mazal ma tnqash'. Moroccan host/staff replies 'daba tji l-khdama'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day25/l02-d25-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day25/l02-d25-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "l-bit mazal ma tnqash",
            "english": "The room has not been cleaned yet.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "daba tji l-khdama",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 25: The room cleaning is delayed.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D25-P04",
        "scenario": "The learner asks when cleaning will happen.",
        "goal": "Say: When will the housekeeper come?",
        "english": "When will the housekeeper come?",
        "friendlyLatin": "imta tji l-khdama?",
        "moroccanChat": "imta tji l-khdama?",
        "arabic": "إيمتا تجي الخدامة؟",
        "showArabicByDefault": false,
        "literal": "When will the housekeeper come?",
        "meaning": "When will the housekeeper come?",
        "intent": "Use this in Level 2 hospitality context: التعامل مع تأخر الفطور أو التنظيف.",
        "cultureNote": "A specific time question avoids vague frustration.",
        "memoryHook": "Pronunciation chunks: imta / tji / l-khdama",
        "pronunciationParts": [
          "imta",
          "tji",
          "l-khdama"
        ],
        "possibleMoroccanReply": "mn b3d shwiya",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 25: التعامل مع تأخر الفطور أو التنظيف. Show a foreign learner politely handling this situation: The learner asks when cleaning will happen.. Visual focus: the phrase 'imta tji l-khdama?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التعامل مع تأخر الفطور أو التنظيف'. Trigger: The learner asks when cleaning will happen.. Learner says 'imta tji l-khdama?'. Moroccan host/staff replies 'mn b3d shwiya'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day25/l02-d25-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day25/l02-d25-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "imta tji l-khdama?",
            "english": "When will the housekeeper come?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mn b3d shwiya",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 25: The learner asks when cleaning will happen.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D25-P05",
        "scenario": "The learner accepts delay politely.",
        "goal": "Say: No problem, I will wait.",
        "english": "No problem, I will wait.",
        "friendlyLatin": "la mushkil, ghadi ntsenna",
        "moroccanChat": "la mushkil, ghadi ntsenna",
        "arabic": "لا مشكل، غادي نتسنى",
        "showArabicByDefault": false,
        "literal": "No problem, I will wait.",
        "meaning": "No problem, I will wait.",
        "intent": "Use this in Level 2 hospitality context: التعامل مع تأخر الفطور أو التنظيف.",
        "cultureNote": "Patience phrase keeps tone friendly.",
        "memoryHook": "Pronunciation chunks: la mushkil / ghadi ntsenna",
        "pronunciationParts": [
          "la mushkil",
          "ghadi ntsenna"
        ],
        "possibleMoroccanReply": "shukran bzaf",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 25: التعامل مع تأخر الفطور أو التنظيف. Show a foreign learner politely handling this situation: The learner accepts delay politely.. Visual focus: the phrase 'la mushkil, ghadi ntsenna' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'التعامل مع تأخر الفطور أو التنظيف'. Trigger: The learner accepts delay politely.. Learner says 'la mushkil, ghadi ntsenna'. Moroccan host/staff replies 'shukran bzaf'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day25/l02-d25-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day25/l02-d25-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "la mushkil, ghadi ntsenna",
            "english": "No problem, I will wait.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "shukran bzaf",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 25: The learner accepts delay politely.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-026",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 26,
    "week": 4,
    "title": "طلب خصوصية باحترام",
    "situation": "Level 2 hospitality scene: طلب خصوصية باحترام.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D26-P01",
        "scenario": "The learner needs private time in the room.",
        "goal": "Say: I would like a little privacy.",
        "english": "I would like a little privacy.",
        "friendlyLatin": "bghit shwiya dyal l-khousousiya",
        "moroccanChat": "bghit shwiya dyal l-khousousiya",
        "arabic": "بغيت شوية ديال الخصوصية",
        "showArabicByDefault": false,
        "literal": "I would like a little privacy.",
        "meaning": "I would like a little privacy.",
        "intent": "Use this in Level 2 hospitality context: طلب خصوصية باحترام.",
        "cultureNote": "Direct but polite privacy language is important in guest spaces.",
        "memoryHook": "Pronunciation chunks: bghit shwiya / dyal l-khousousiya",
        "pronunciationParts": [
          "bghit shwiya",
          "dyal l-khousousiya"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 26: طلب خصوصية باحترام. Show a foreign learner politely handling this situation: The learner needs private time in the room.. Visual focus: the phrase 'bghit shwiya dyal l-khousousiya' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب خصوصية باحترام'. Trigger: The learner needs private time in the room.. Learner says 'bghit shwiya dyal l-khousousiya'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day26/l02-d26-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day26/l02-d26-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit shwiya dyal l-khousousiya",
            "english": "I would like a little privacy.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 26: The learner needs private time in the room.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D26-P02",
        "scenario": "Staff wants to enter; learner asks them not to enter now.",
        "goal": "Say: I do not want you to come in now, please.",
        "english": "I do not want you to come in now, please.",
        "friendlyLatin": "ma bghitsh tdkhlo daba aafak",
        "moroccanChat": "ma bghitsh tdkhlo daba aafak",
        "arabic": "ما بغيتش تدخلو دابا عافاك",
        "showArabicByDefault": false,
        "literal": "I do not want you to come in now, please.",
        "meaning": "I do not want you to come in now, please.",
        "intent": "Use this in Level 2 hospitality context: طلب خصوصية باحترام.",
        "cultureNote": "Useful for cleaning/maintenance timing.",
        "memoryHook": "Pronunciation chunks: ma bghitsh / tdkhlo daba / aafak",
        "pronunciationParts": [
          "ma bghitsh",
          "tdkhlo daba",
          "aafak"
        ],
        "possibleMoroccanReply": "wakha, mn b3d",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 26: طلب خصوصية باحترام. Show a foreign learner politely handling this situation: Staff wants to enter; learner asks them not to enter now.. Visual focus: the phrase 'ma bghitsh tdkhlo daba aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب خصوصية باحترام'. Trigger: Staff wants to enter; learner asks them not to enter now.. Learner says 'ma bghitsh tdkhlo daba aafak'. Moroccan host/staff replies 'wakha, mn b3d'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day26/l02-d26-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day26/l02-d26-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ma bghitsh tdkhlo daba aafak",
            "english": "I do not want you to come in now, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha, mn b3d",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 26: Staff wants to enter; learner asks them not to enter now.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D26-P03",
        "scenario": "The learner explains they need rest.",
        "goal": "Say: Can I rest a little?",
        "english": "Can I rest a little?",
        "friendlyLatin": "nqder nrtah shwiya?",
        "moroccanChat": "nqder nrtah shwiya?",
        "arabic": "نقدر نرتاح شوية؟",
        "showArabicByDefault": false,
        "literal": "Can I rest a little?",
        "meaning": "Can I rest a little?",
        "intent": "Use this in Level 2 hospitality context: طلب خصوصية باحترام.",
        "cultureNote": "Giving a reason softens privacy requests.",
        "memoryHook": "Pronunciation chunks: nqder / nrtah / shwiya",
        "pronunciationParts": [
          "nqder",
          "nrtah",
          "shwiya"
        ],
        "possibleMoroccanReply": "iyeh, tfdal",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 26: طلب خصوصية باحترام. Show a foreign learner politely handling this situation: The learner explains they need rest.. Visual focus: the phrase 'nqder nrtah shwiya?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب خصوصية باحترام'. Trigger: The learner explains they need rest.. Learner says 'nqder nrtah shwiya?'. Moroccan host/staff replies 'iyeh, tfdal'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day26/l02-d26-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day26/l02-d26-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nrtah shwiya?",
            "english": "Can I rest a little?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, tfdal",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 26: The learner explains they need rest.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D26-P04",
        "scenario": "The learner postpones a service politely.",
        "goal": "Say: If possible, later.",
        "english": "If possible, later.",
        "friendlyLatin": "ila mumkin, mn b3d",
        "moroccanChat": "ila mumkin, mn b3d",
        "arabic": "إلا ممكن، من بعد",
        "showArabicByDefault": false,
        "literal": "If possible, later.",
        "meaning": "If possible, later.",
        "intent": "Use this in Level 2 hospitality context: طلب خصوصية باحترام.",
        "cultureNote": "Short polite delay phrase works in many contexts.",
        "memoryHook": "Pronunciation chunks: ila mumkin / mn b3d",
        "pronunciationParts": [
          "ila mumkin",
          "mn b3d"
        ],
        "possibleMoroccanReply": "wakha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 26: طلب خصوصية باحترام. Show a foreign learner politely handling this situation: The learner postpones a service politely.. Visual focus: the phrase 'ila mumkin, mn b3d' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب خصوصية باحترام'. Trigger: The learner postpones a service politely.. Learner says 'ila mumkin, mn b3d'. Moroccan host/staff replies 'wakha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day26/l02-d26-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day26/l02-d26-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ila mumkin, mn b3d",
            "english": "If possible, later.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 26: The learner postpones a service politely.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D26-P05",
        "scenario": "The staff agrees and learner closes respectfully.",
        "goal": "Say: Thank you for understanding.",
        "english": "Thank you for understanding.",
        "friendlyLatin": "shukran ala tfahom",
        "moroccanChat": "shukran ala tfahom",
        "arabic": "شكرا على التفهم",
        "showArabicByDefault": false,
        "literal": "Thank you for understanding.",
        "meaning": "Thank you for understanding.",
        "intent": "Use this in Level 2 hospitality context: طلب خصوصية باحترام.",
        "cultureNote": "Thanking for understanding avoids awkwardness.",
        "memoryHook": "Pronunciation chunks: shukran / ala / tfahom",
        "pronunciationParts": [
          "shukran",
          "ala",
          "tfahom"
        ],
        "possibleMoroccanReply": "bla jmil",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 26: طلب خصوصية باحترام. Show a foreign learner politely handling this situation: The staff agrees and learner closes respectfully.. Visual focus: the phrase 'shukran ala tfahom' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'طلب خصوصية باحترام'. Trigger: The staff agrees and learner closes respectfully.. Learner says 'shukran ala tfahom'. Moroccan host/staff replies 'bla jmil'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day26/l02-d26-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day26/l02-d26-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran ala tfahom",
            "english": "Thank you for understanding.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bla jmil",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 26: The staff agrees and learner closes respectfully.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-027",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 27,
    "week": 4,
    "title": "دعوة لزيارة بيت مغربي",
    "situation": "Level 2 hospitality scene: دعوة لزيارة بيت مغربي.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D27-P01",
        "scenario": "The learner is invited to a Moroccan home.",
        "goal": "Say: Thank you for the invitation.",
        "english": "Thank you for the invitation.",
        "friendlyLatin": "shukran ala d-daawa",
        "moroccanChat": "shukran ala d-daawa",
        "arabic": "شكرا على الدعوة",
        "showArabicByDefault": false,
        "literal": "Thank you for the invitation.",
        "meaning": "Thank you for the invitation.",
        "intent": "Use this in Level 2 hospitality context: دعوة لزيارة بيت مغربي.",
        "cultureNote": "Acknowledging invitation is central to guest etiquette.",
        "memoryHook": "Pronunciation chunks: shukran / ala / d-daawa",
        "pronunciationParts": [
          "shukran",
          "ala",
          "d-daawa"
        ],
        "possibleMoroccanReply": "mrehba bik",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 27: دعوة لزيارة بيت مغربي. Show a foreign learner politely handling this situation: The learner is invited to a Moroccan home.. Visual focus: the phrase 'shukran ala d-daawa' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'دعوة لزيارة بيت مغربي'. Trigger: The learner is invited to a Moroccan home.. Learner says 'shukran ala d-daawa'. Moroccan host/staff replies 'mrehba bik'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day27/l02-d27-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day27/l02-d27-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran ala d-daawa",
            "english": "Thank you for the invitation.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mrehba bik",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 27: The learner is invited to a Moroccan home.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D27-P02",
        "scenario": "The learner confirms they can join the visit.",
        "goal": "Say: Can I come with you?",
        "english": "Can I come with you?",
        "friendlyLatin": "nqder nji m3akom?",
        "moroccanChat": "nqder nji m3akom?",
        "arabic": "نقدر نجي معاكم؟",
        "showArabicByDefault": false,
        "literal": "Can I come with you?",
        "meaning": "Can I come with you?",
        "intent": "Use this in Level 2 hospitality context: دعوة لزيارة بيت مغربي.",
        "cultureNote": "Permission/confirmation protects social boundaries.",
        "memoryHook": "Pronunciation chunks: nqder / nji / m3akom",
        "pronunciationParts": [
          "nqder",
          "nji",
          "m3akom"
        ],
        "possibleMoroccanReply": "iyeh, mrehba",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 27: دعوة لزيارة بيت مغربي. Show a foreign learner politely handling this situation: The learner confirms they can join the visit.. Visual focus: the phrase 'nqder nji m3akom?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'دعوة لزيارة بيت مغربي'. Trigger: The learner confirms they can join the visit.. Learner says 'nqder nji m3akom?'. Moroccan host/staff replies 'iyeh, mrehba'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day27/l02-d27-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day27/l02-d27-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nji m3akom?",
            "english": "Can I come with you?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, mrehba",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 27: The learner confirms they can join the visit.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D27-P03",
        "scenario": "The learner asks what gift/thing to bring.",
        "goal": "Say: What should I bring with me?",
        "english": "What should I bring with me?",
        "friendlyLatin": "shno njib m3aya?",
        "moroccanChat": "shno njib m3aya?",
        "arabic": "شنو نجيب معايا؟",
        "showArabicByDefault": false,
        "literal": "What should I bring with me?",
        "meaning": "What should I bring with me?",
        "intent": "Use this in Level 2 hospitality context: دعوة لزيارة بيت مغربي.",
        "cultureNote": "Guests may ask this to avoid arriving empty-handed or awkward.",
        "memoryHook": "Pronunciation chunks: shno / njib / m3aya",
        "pronunciationParts": [
          "shno",
          "njib",
          "m3aya"
        ],
        "possibleMoroccanReply": "ma tjib walo",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 27: دعوة لزيارة بيت مغربي. Show a foreign learner politely handling this situation: The learner asks what gift/thing to bring.. Visual focus: the phrase 'shno njib m3aya?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'دعوة لزيارة بيت مغربي'. Trigger: The learner asks what gift/thing to bring.. Learner says 'shno njib m3aya?'. Moroccan host/staff replies 'ma tjib walo'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day27/l02-d27-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day27/l02-d27-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shno njib m3aya?",
            "english": "What should I bring with me?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "ma tjib walo",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 27: The learner asks what gift/thing to bring.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D27-P04",
        "scenario": "The learner proposes a simple gift.",
        "goal": "Say: Can I bring sweets?",
        "english": "Can I bring sweets?",
        "friendlyLatin": "nqder njib halwa?",
        "moroccanChat": "nqder njib halwa?",
        "arabic": "نقدر نجيب حلوى؟",
        "showArabicByDefault": false,
        "literal": "Can I bring sweets?",
        "meaning": "Can I bring sweets?",
        "intent": "Use this in Level 2 hospitality context: دعوة لزيارة بيت مغربي.",
        "cultureNote": "Sweets are a safe social gift in many contexts.",
        "memoryHook": "Pronunciation chunks: nqder / njib / halwa",
        "pronunciationParts": [
          "nqder",
          "njib",
          "halwa"
        ],
        "possibleMoroccanReply": "iyeh, ila bghiti",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 27: دعوة لزيارة بيت مغربي. Show a foreign learner politely handling this situation: The learner proposes a simple gift.. Visual focus: the phrase 'nqder njib halwa?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'دعوة لزيارة بيت مغربي'. Trigger: The learner proposes a simple gift.. Learner says 'nqder njib halwa?'. Moroccan host/staff replies 'iyeh, ila bghiti'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day27/l02-d27-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day27/l02-d27-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder njib halwa?",
            "english": "Can I bring sweets?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, ila bghiti",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 27: The learner proposes a simple gift.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D27-P05",
        "scenario": "The learner closes a social invitation warmly.",
        "goal": "Say: It was an honor to meet you.",
        "english": "It was an honor to meet you.",
        "friendlyLatin": "tsharrafna bikom",
        "moroccanChat": "tsharrafna bikom",
        "arabic": "تشرفنا بكم",
        "showArabicByDefault": false,
        "literal": "It was an honor to meet you.",
        "meaning": "It was an honor to meet you.",
        "intent": "Use this in Level 2 hospitality context: دعوة لزيارة بيت مغربي.",
        "cultureNote": "A more social phrase marks progress beyond survival travel.",
        "memoryHook": "Pronunciation chunks: tsharrafna / bikom",
        "pronunciationParts": [
          "tsharrafna",
          "bikom"
        ],
        "possibleMoroccanReply": "hna li tsharrafna",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 27: دعوة لزيارة بيت مغربي. Show a foreign learner politely handling this situation: The learner closes a social invitation warmly.. Visual focus: the phrase 'tsharrafna bikom' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'دعوة لزيارة بيت مغربي'. Trigger: The learner closes a social invitation warmly.. Learner says 'tsharrafna bikom'. Moroccan host/staff replies 'hna li tsharrafna'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day27/l02-d27-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day27/l02-d27-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "tsharrafna bikom",
            "english": "It was an honor to meet you.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "hna li tsharrafna",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 27: The learner closes a social invitation warmly.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-028",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 28,
    "week": 4,
    "title": "مغادرة المكان مع شكر",
    "situation": "Level 2 hospitality scene: مغادرة المكان مع شكر.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D28-P01",
        "scenario": "The learner announces they are leaving.",
        "goal": "Say: I am going to leave now.",
        "english": "I am going to leave now.",
        "friendlyLatin": "ghadi nmshi daba",
        "moroccanChat": "ghadi nmshi daba",
        "arabic": "غادي نمشي دابا",
        "showArabicByDefault": false,
        "literal": "I am going to leave now.",
        "meaning": "I am going to leave now.",
        "intent": "Use this in Level 2 hospitality context: مغادرة المكان مع شكر.",
        "cultureNote": "Clear leave-taking is polite in homes/riads.",
        "memoryHook": "Pronunciation chunks: ghadi / nmshi / daba",
        "pronunciationParts": [
          "ghadi",
          "nmshi",
          "daba"
        ],
        "possibleMoroccanReply": "bslama",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 28: مغادرة المكان مع شكر. Show a foreign learner politely handling this situation: The learner announces they are leaving.. Visual focus: the phrase 'ghadi nmshi daba' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مغادرة المكان مع شكر'. Trigger: The learner announces they are leaving.. Learner says 'ghadi nmshi daba'. Moroccan host/staff replies 'bslama'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day28/l02-d28-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day28/l02-d28-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ghadi nmshi daba",
            "english": "I am going to leave now.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bslama",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 28: The learner announces they are leaving.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D28-P02",
        "scenario": "The learner thanks the host before leaving.",
        "goal": "Say: Thank you for the hospitality.",
        "english": "Thank you for the hospitality.",
        "friendlyLatin": "shukran ala diyafa",
        "moroccanChat": "shukran ala diyafa",
        "arabic": "شكرا على الضيافة",
        "showArabicByDefault": false,
        "literal": "Thank you for the hospitality.",
        "meaning": "Thank you for the hospitality.",
        "intent": "Use this in Level 2 hospitality context: مغادرة المكان مع شكر.",
        "cultureNote": "This phrase is directly tied to Moroccan guest etiquette.",
        "memoryHook": "Pronunciation chunks: shukran / ala / diyafa",
        "pronunciationParts": [
          "shukran",
          "ala",
          "diyafa"
        ],
        "possibleMoroccanReply": "mrehba bik dima",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 28: مغادرة المكان مع شكر. Show a foreign learner politely handling this situation: The learner thanks the host before leaving.. Visual focus: the phrase 'shukran ala diyafa' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مغادرة المكان مع شكر'. Trigger: The learner thanks the host before leaving.. Learner says 'shukran ala diyafa'. Moroccan host/staff replies 'mrehba bik dima'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day28/l02-d28-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day28/l02-d28-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran ala diyafa",
            "english": "Thank you for the hospitality.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mrehba bik dima",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 28: The learner thanks the host before leaving.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D28-P03",
        "scenario": "The learner gives final positive feedback.",
        "goal": "Say: Everything was good.",
        "english": "Everything was good.",
        "friendlyLatin": "kolshi kan zwin",
        "moroccanChat": "kolshi kan zwin",
        "arabic": "كلشي كان زوين",
        "showArabicByDefault": false,
        "literal": "Everything was good.",
        "meaning": "Everything was good.",
        "intent": "Use this in Level 2 hospitality context: مغادرة المكان مع شكر.",
        "cultureNote": "Positive closure matters in hospitality settings.",
        "memoryHook": "Pronunciation chunks: kolshi / kan / zwin",
        "pronunciationParts": [
          "kolshi",
          "kan",
          "zwin"
        ],
        "possibleMoroccanReply": "lah ykhalik",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 28: مغادرة المكان مع شكر. Show a foreign learner politely handling this situation: The learner gives final positive feedback.. Visual focus: the phrase 'kolshi kan zwin' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مغادرة المكان مع شكر'. Trigger: The learner gives final positive feedback.. Learner says 'kolshi kan zwin'. Moroccan host/staff replies 'lah ykhalik'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day28/l02-d28-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day28/l02-d28-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "kolshi kan zwin",
            "english": "Everything was good.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "lah ykhalik",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 28: The learner gives final positive feedback.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D28-P04",
        "scenario": "The learner says they would return.",
        "goal": "Say: If I come back, I will come here.",
        "english": "If I come back, I will come here.",
        "friendlyLatin": "ila rjeat, ghadi nji hna",
        "moroccanChat": "ila rjeat, ghadi nji hna",
        "arabic": "إلا رجعت، غادي نجي هنا",
        "showArabicByDefault": false,
        "literal": "If I come back, I will come here.",
        "meaning": "If I come back, I will come here.",
        "intent": "Use this in Level 2 hospitality context: مغادرة المكان مع شكر.",
        "cultureNote": "A warm compliment for riad/hospitality.",
        "memoryHook": "Pronunciation chunks: ila rjeat / ghadi nji hna",
        "pronunciationParts": [
          "ila rjeat",
          "ghadi nji hna"
        ],
        "possibleMoroccanReply": "mrehba bik",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 28: مغادرة المكان مع شكر. Show a foreign learner politely handling this situation: The learner says they would return.. Visual focus: the phrase 'ila rjeat, ghadi nji hna' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مغادرة المكان مع شكر'. Trigger: The learner says they would return.. Learner says 'ila rjeat, ghadi nji hna'. Moroccan host/staff replies 'mrehba bik'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day28/l02-d28-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day28/l02-d28-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "ila rjeat, ghadi nji hna",
            "english": "If I come back, I will come here.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mrehba bik",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 28: The learner says they would return.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D28-P05",
        "scenario": "The learner says goodbye warmly.",
        "goal": "Say: Goodbye, take care.",
        "english": "Goodbye, take care.",
        "friendlyLatin": "bslama, thalla f rask",
        "moroccanChat": "bslama, thalla f rask",
        "arabic": "بسلامة، تهلا فراسك",
        "showArabicByDefault": false,
        "literal": "Goodbye, take care.",
        "meaning": "Goodbye, take care.",
        "intent": "Use this in Level 2 hospitality context: مغادرة المكان مع شكر.",
        "cultureNote": "Goodbye formula with care belongs to social hospitality.",
        "memoryHook": "Pronunciation chunks: bslama / thalla f rask",
        "pronunciationParts": [
          "bslama",
          "thalla f rask"
        ],
        "possibleMoroccanReply": "bslama",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 28: مغادرة المكان مع شكر. Show a foreign learner politely handling this situation: The learner says goodbye warmly.. Visual focus: the phrase 'bslama, thalla f rask' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مغادرة المكان مع شكر'. Trigger: The learner says goodbye warmly.. Learner says 'bslama, thalla f rask'. Moroccan host/staff replies 'bslama'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day28/l02-d28-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day28/l02-d28-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bslama, thalla f rask",
            "english": "Goodbye, take care.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "bslama",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 28: The learner says goodbye warmly.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-029",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 29,
    "week": 5,
    "title": "مراجعة مختلطة للضيافة",
    "situation": "Level 2 hospitality scene: مراجعة مختلطة للضيافة.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D29-P01",
        "scenario": "Mixed review: arrival + identity.",
        "goal": "Say: I have a reservation, my name is ...",
        "english": "I have a reservation, my name is ...",
        "friendlyLatin": "aandi reservation, smiti ...",
        "moroccanChat": "aandi reservation, smiti ...",
        "arabic": "عندي رزيرفاسيون، سميتي ...",
        "showArabicByDefault": false,
        "literal": "I have a reservation, my name is ...",
        "meaning": "I have a reservation, my name is ...",
        "intent": "Use this in Level 2 hospitality context: مراجعة مختلطة للضيافة.",
        "cultureNote": "Final review keeps placeholder for global learners.",
        "memoryHook": "Pronunciation chunks: aandi reservation / smiti ...",
        "pronunciationParts": [
          "aandi reservation",
          "smiti ..."
        ],
        "possibleMoroccanReply": "mrehba bik",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 29: مراجعة مختلطة للضيافة. Show a foreign learner politely handling this situation: Mixed review: arrival + identity.. Visual focus: the phrase 'aandi reservation, smiti ...' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة مختلطة للضيافة'. Trigger: Mixed review: arrival + identity.. Learner says 'aandi reservation, smiti ...'. Moroccan host/staff replies 'mrehba bik'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day29/l02-d29-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day29/l02-d29-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "aandi reservation, smiti ...",
            "english": "I have a reservation, my name is ...",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mrehba bik",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 29: Mixed review: arrival + identity.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D29-P02",
        "scenario": "Mixed review: service question.",
        "goal": "Say: What is the Wi‑Fi code?",
        "english": "What is the Wi‑Fi code?",
        "friendlyLatin": "shno l-code dyal l-wifi?",
        "moroccanChat": "shno l-code dyal l-wifi?",
        "arabic": "شنو الكود ديال الويفي؟",
        "showArabicByDefault": false,
        "literal": "What is the Wi‑Fi code?",
        "meaning": "What is the Wi‑Fi code?",
        "intent": "Use this in Level 2 hospitality context: مراجعة مختلطة للضيافة.",
        "cultureNote": "High-frequency accommodation phrase.",
        "memoryHook": "Pronunciation chunks: shno l-code / dyal l-wifi",
        "pronunciationParts": [
          "shno l-code",
          "dyal l-wifi"
        ],
        "possibleMoroccanReply": "ha l-code",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 29: مراجعة مختلطة للضيافة. Show a foreign learner politely handling this situation: Mixed review: service question.. Visual focus: the phrase 'shno l-code dyal l-wifi?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة مختلطة للضيافة'. Trigger: Mixed review: service question.. Learner says 'shno l-code dyal l-wifi?'. Moroccan host/staff replies 'ha l-code'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day29/l02-d29-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day29/l02-d29-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shno l-code dyal l-wifi?",
            "english": "What is the Wi‑Fi code?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "ha l-code",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 29: Mixed review: service question.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D29-P03",
        "scenario": "Mixed review: room check.",
        "goal": "Say: Can I see the room?",
        "english": "Can I see the room?",
        "friendlyLatin": "nqder nshuf l-bit?",
        "moroccanChat": "nqder nshuf l-bit?",
        "arabic": "نقدر نشوف البيت؟",
        "showArabicByDefault": false,
        "literal": "Can I see the room?",
        "meaning": "Can I see the room?",
        "intent": "Use this in Level 2 hospitality context: مراجعة مختلطة للضيافة.",
        "cultureNote": "Pre-acceptance room request is practical.",
        "memoryHook": "Pronunciation chunks: nqder / nshuf / l-bit",
        "pronunciationParts": [
          "nqder",
          "nshuf",
          "l-bit"
        ],
        "possibleMoroccanReply": "iyeh, tfdal",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 29: مراجعة مختلطة للضيافة. Show a foreign learner politely handling this situation: Mixed review: room check.. Visual focus: the phrase 'nqder nshuf l-bit?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة مختلطة للضيافة'. Trigger: Mixed review: room check.. Learner says 'nqder nshuf l-bit?'. Moroccan host/staff replies 'iyeh, tfdal'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day29/l02-d29-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day29/l02-d29-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nshuf l-bit?",
            "english": "Can I see the room?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, tfdal",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 29: Mixed review: room check.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D29-P04",
        "scenario": "Mixed review: breakfast + bill.",
        "goal": "Say: Is breakfast included in the price?",
        "english": "Is breakfast included in the price?",
        "friendlyLatin": "wash l-ftor dakhel f l-hsab?",
        "moroccanChat": "wash l-ftor dakhel f l-hsab?",
        "arabic": "واش الفطور داخل فالحساب؟",
        "showArabicByDefault": false,
        "literal": "Is breakfast included in the price?",
        "meaning": "Is breakfast included in the price?",
        "intent": "Use this in Level 2 hospitality context: مراجعة مختلطة للضيافة.",
        "cultureNote": "Breakfast inclusion is a key riad question.",
        "memoryHook": "Pronunciation chunks: wash l-ftor / dakhel f / l-hsab",
        "pronunciationParts": [
          "wash l-ftor",
          "dakhel f",
          "l-hsab"
        ],
        "possibleMoroccanReply": "iyeh dakhel",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 29: مراجعة مختلطة للضيافة. Show a foreign learner politely handling this situation: Mixed review: breakfast + bill.. Visual focus: the phrase 'wash l-ftor dakhel f l-hsab?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة مختلطة للضيافة'. Trigger: Mixed review: breakfast + bill.. Learner says 'wash l-ftor dakhel f l-hsab?'. Moroccan host/staff replies 'iyeh dakhel'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day29/l02-d29-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day29/l02-d29-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "wash l-ftor dakhel f l-hsab?",
            "english": "Is breakfast included in the price?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh dakhel",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 29: Mixed review: breakfast + bill.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D29-P05",
        "scenario": "Mixed review: final cultural closure.",
        "goal": "Say: Thank you for the hospitality.",
        "english": "Thank you for the hospitality.",
        "friendlyLatin": "shukran ala diyafa",
        "moroccanChat": "shukran ala diyafa",
        "arabic": "شكرا على الضيافة",
        "showArabicByDefault": false,
        "literal": "Thank you for the hospitality.",
        "meaning": "Thank you for the hospitality.",
        "intent": "Use this in Level 2 hospitality context: مراجعة مختلطة للضيافة.",
        "cultureNote": "This phrase is the signature of Level 2.",
        "memoryHook": "Pronunciation chunks: shukran / ala / diyafa",
        "pronunciationParts": [
          "shukran",
          "ala",
          "diyafa"
        ],
        "possibleMoroccanReply": "mrehba bik",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 29: مراجعة مختلطة للضيافة. Show a foreign learner politely handling this situation: Mixed review: final cultural closure.. Visual focus: the phrase 'shukran ala diyafa' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'مراجعة مختلطة للضيافة'. Trigger: Mixed review: final cultural closure.. Learner says 'shukran ala diyafa'. Moroccan host/staff replies 'mrehba bik'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day29/l02-d29-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day29/l02-d29-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran ala diyafa",
            "english": "Thank you for the hospitality.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mrehba bik",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 29: Mixed review: final cultural closure.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  },
  {
    "id": "level02-lesson-030",
    "level": 2,
    "levelName": "Guest / Riad / Hospitality",
    "levelArabicName": "الضيف والرياض والضيافة",
    "levelVisibilityDefault": "collaborators",
    "day": 30,
    "week": 5,
    "title": "اختبار Level 2: ضيف محترم",
    "situation": "Level 2 hospitality scene: اختبار Level 2: ضيف محترم.",
    "method": "Learn what to say as a guest in a riad, home, or hospitality situation before producing audio, image, and video.",
    "isFree": false,
    "isLocked": true,
    "isDraftForCollaborators": true,
    "contentStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
    "phrases": [
      {
        "id": "L02-D30-P01",
        "scenario": "Final test begins at riad entrance.",
        "goal": "Say: Hello, I have arrived now.",
        "english": "Hello, I have arrived now.",
        "friendlyLatin": "salam, ana wasel daba",
        "moroccanChat": "salam, ana wasel daba",
        "arabic": "سلام، أنا واصل دابا",
        "showArabicByDefault": false,
        "literal": "Hello, I have arrived now.",
        "meaning": "Hello, I have arrived now.",
        "intent": "Use this in Level 2 hospitality context: اختبار Level 2: ضيف محترم.",
        "cultureNote": "Tests greeting + arrival.",
        "memoryHook": "Pronunciation chunks: salam / ana wasel daba",
        "pronunciationParts": [
          "salam",
          "ana wasel daba"
        ],
        "possibleMoroccanReply": "mrehba bik",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 30: اختبار Level 2: ضيف محترم. Show a foreign learner politely handling this situation: Final test begins at riad entrance.. Visual focus: the phrase 'salam, ana wasel daba' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'اختبار Level 2: ضيف محترم'. Trigger: Final test begins at riad entrance.. Learner says 'salam, ana wasel daba'. Moroccan host/staff replies 'mrehba bik'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day30/l02-d30-p01-normal.mp3",
        "audioSlow": "assets/audio/level02/day30/l02-d30-p01-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "salam, ana wasel daba",
            "english": "Hello, I have arrived now.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "mrehba bik",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 30: Final test begins at riad entrance.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D30-P02",
        "scenario": "Learner asks for the room.",
        "goal": "Say: I would like my room, please.",
        "english": "I would like my room, please.",
        "friendlyLatin": "bghit l-bit dyali aafak",
        "moroccanChat": "bghit l-bit dyali aafak",
        "arabic": "بغيت البيت ديالي عافاك",
        "showArabicByDefault": false,
        "literal": "I would like my room, please.",
        "meaning": "I would like my room, please.",
        "intent": "Use this in Level 2 hospitality context: اختبار Level 2: ضيف محترم.",
        "cultureNote": "Tests room request.",
        "memoryHook": "Pronunciation chunks: bghit l-bit / dyali aafak",
        "pronunciationParts": [
          "bghit l-bit",
          "dyali aafak"
        ],
        "possibleMoroccanReply": "wakha, tfdal",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 30: اختبار Level 2: ضيف محترم. Show a foreign learner politely handling this situation: Learner asks for the room.. Visual focus: the phrase 'bghit l-bit dyali aafak' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'اختبار Level 2: ضيف محترم'. Trigger: Learner asks for the room.. Learner says 'bghit l-bit dyali aafak'. Moroccan host/staff replies 'wakha, tfdal'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day30/l02-d30-p02-normal.mp3",
        "audioSlow": "assets/audio/level02/day30/l02-d30-p02-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "bghit l-bit dyali aafak",
            "english": "I would like my room, please.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "wakha, tfdal",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 30: Learner asks for the room.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D30-P03",
        "scenario": "Learner reports a room problem.",
        "goal": "Say: There is a problem with the hot water.",
        "english": "There is a problem with the hot water.",
        "friendlyLatin": "kayn mushkil f l-ma skhon",
        "moroccanChat": "kayn mushkil f l-ma skhon",
        "arabic": "كاين مشكل فالما سخون",
        "showArabicByDefault": false,
        "literal": "There is a problem with the hot water.",
        "meaning": "There is a problem with the hot water.",
        "intent": "Use this in Level 2 hospitality context: اختبار Level 2: ضيف محترم.",
        "cultureNote": "Tests problem reporting with politeness.",
        "memoryHook": "Pronunciation chunks: kayn mushkil / f l-ma / skhon",
        "pronunciationParts": [
          "kayn mushkil",
          "f l-ma",
          "skhon"
        ],
        "possibleMoroccanReply": "daba nshufu",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 30: اختبار Level 2: ضيف محترم. Show a foreign learner politely handling this situation: Learner reports a room problem.. Visual focus: the phrase 'kayn mushkil f l-ma skhon' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'اختبار Level 2: ضيف محترم'. Trigger: Learner reports a room problem.. Learner says 'kayn mushkil f l-ma skhon'. Moroccan host/staff replies 'daba nshufu'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day30/l02-d30-p03-normal.mp3",
        "audioSlow": "assets/audio/level02/day30/l02-d30-p03-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "kayn mushkil f l-ma skhon",
            "english": "There is a problem with the hot water.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "daba nshufu",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 30: Learner reports a room problem.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D30-P04",
        "scenario": "Learner manages luggage after check-out.",
        "goal": "Say: Can I leave my suitcase here?",
        "english": "Can I leave my suitcase here?",
        "friendlyLatin": "nqder nkhli shnati hna?",
        "moroccanChat": "nqder nkhli shnati hna?",
        "arabic": "نقدر نخلي شنطتي هنا؟",
        "showArabicByDefault": false,
        "literal": "Can I leave my suitcase here?",
        "meaning": "Can I leave my suitcase here?",
        "intent": "Use this in Level 2 hospitality context: اختبار Level 2: ضيف محترم.",
        "cultureNote": "Tests service request.",
        "memoryHook": "Pronunciation chunks: nqder nkhli / shnati hna",
        "pronunciationParts": [
          "nqder nkhli",
          "shnati hna"
        ],
        "possibleMoroccanReply": "iyeh, khlliha",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 30: اختبار Level 2: ضيف محترم. Show a foreign learner politely handling this situation: Learner manages luggage after check-out.. Visual focus: the phrase 'nqder nkhli shnati hna?' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'اختبار Level 2: ضيف محترم'. Trigger: Learner manages luggage after check-out.. Learner says 'nqder nkhli shnati hna?'. Moroccan host/staff replies 'iyeh, khlliha'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day30/l02-d30-p04-normal.mp3",
        "audioSlow": "assets/audio/level02/day30/l02-d30-p04-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "nqder nkhli shnati hna?",
            "english": "Can I leave my suitcase here?",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "iyeh, khlliha",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 30: Learner manages luggage after check-out.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      },
      {
        "id": "L02-D30-P05",
        "scenario": "Learner closes the level as a respectful guest.",
        "goal": "Say: Thank you, it was a good stay.",
        "english": "Thank you, it was a good stay.",
        "friendlyLatin": "shukran, kanet iqama mzyana",
        "moroccanChat": "shukran, kanet iqama mzyana",
        "arabic": "شكرا، كانت إقامة مزيانة",
        "showArabicByDefault": false,
        "literal": "Thank you, it was a good stay.",
        "meaning": "Thank you, it was a good stay.",
        "intent": "Use this in Level 2 hospitality context: اختبار Level 2: ضيف محترم.",
        "cultureNote": "Final cultural closure for Level 2.",
        "memoryHook": "Pronunciation chunks: shukran / kanet iqama mzyana",
        "pronunciationParts": [
          "shukran",
          "kanet iqama mzyana"
        ],
        "possibleMoroccanReply": "tji m3a lkhir",
        "imagePromptSeed": "Realistic Moroccan riad/guesthouse scene, Level 2 Day 30: اختبار Level 2: ضيف محترم. Show a foreign learner politely handling this situation: Learner closes the level as a respectful guest.. Visual focus: the phrase 'shukran, kanet iqama mzyana' without putting text on the image. Warm natural light, Moroccan zellij, riad courtyard or room when relevant.",
        "videoActionSeed": "Short interactive video: learner is in a Moroccan riad/guesthouse during 'اختبار Level 2: ضيف محترم'. Trigger: Learner closes the level as a respectful guest.. Learner says 'shukran, kanet iqama mzyana'. Moroccan host/staff replies 'tji m3a lkhir'. End with clear action showing the problem/request resolved.",
        "mediaProductionStatus": "DRAFT_WEB_RESEARCHED_NEEDS_NATIVE_AUDIO_QA",
        "mediaRule": "No audio/image/video production before native Darija QA and final sentence approval.",
        "audioNormal": "assets/audio/level02/day30/l02-d30-p05-normal.mp3",
        "audioSlow": "assets/audio/level02/day30/l02-d30-p05-slow.mp3",
        "dialogueLines": [
          {
            "speaker": "Guest",
            "friendlyLatin": "shukran, kanet iqama mzyana",
            "english": "Thank you, it was a good stay.",
            "isCore": true
          },
          {
            "speaker": "Host",
            "friendlyLatin": "tji m3a lkhir",
            "english": "Possible Moroccan reply.",
            "isCore": false
          }
        ],
        "sceneVisualAlt": "Level 2 Day 30: Learner closes the level as a respectful guest.",
        "sceneCaption": "Draft Level 2 hospitality scene. Produce image/video only after native Darija QA.",
        "visualSystem": "future-scene-only-image-plus-ui-overlay",
        "sceneVisualMode": "wide-16-9-context-image"
      }
    ]
  }
];
