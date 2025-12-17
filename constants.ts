import { GameRule, Cocktail, GameContent } from './types';

export const DARES: GameContent[] = [
  // ==========================================
  // 1. DRINKING (Social & Interactive)
  // ==========================================
  { id: 1, text: "喝一杯", engText: "Drink one full cup", type: 'DARE', category: "drinking" },
  { id: 2, text: "全場每人喝一口", engText: "Everyone takes a sip", type: 'DARE', category: "drinking" },
  { id: 3, text: "找左手邊第一位乾杯，兩人各喝半杯", engText: "Cheers with Left #1, both drink half", type: 'DARE', category: "drinking" },
  { id: 4, text: "找右手邊第一位乾杯，兩人各喝半杯", engText: "Cheers with Right #1, both drink half", type: 'DARE', category: "drinking" },
  
  { id: 5, text: "各位紳士喝一杯 (男生喝)", engText: "All gentlemen drink", type: 'DARE', category: "drinking" },
  { id: 6, text: "各位淑女喝一杯 (女生喝)", engText: "All ladies drink", type: 'DARE', category: "drinking" },
  { id: 7, text: "和正對面的人喝交杯酒", engText: "Cross arms and drink with opposite person", type: 'DARE', category: "drinking" },
  { id: 12, text: "單身狗喝一杯", engText: "Singles drink one cup", type: 'DARE', category: "drinking" },
  { id: 13, text: "非單身的人喝一杯", engText: "In a relationship? Drink!", type: 'DARE', category: "drinking" },
  { id: 15, text: "指定右手邊第二位陪你喝完這杯", engText: "Person 2 seats to right finishes this with you", type: 'DARE', category: "drinking" },
  { id: 151, text: "指定左手邊第二位陪你喝完這杯", engText: "Person 2 seats to left finishes this with you", type: 'DARE', category: "drinking" },
  { id: 16, text: "大喊「我是酒鬼」三聲，然後喝", engText: "Shout 'I am a drunkard' 3 times, then drink", type: 'DARE', category: "drinking" },
  { id: 18, text: "自罰一杯", engText: "Punish yourself: Drink a full cup", type: 'DARE', category: "drinking" },
  
  // [NEW] Chaos Drinking
  { id: 20, text: "最後一個摸到鼻子的人喝一杯", engText: "Last person to touch their nose drinks", type: 'DARE', category: "drinking" },
  { id: 21, text: "所有人把手機拿出來，電量最低的人喝", engText: "Lowest phone battery drinks", type: 'DARE', category: "drinking" },
  { id: 22, text: "拿出一張證件，照片看起來最年輕/最不像的喝", engText: "Person with the most different ID photo drinks", type: 'DARE', category: "drinking" },
  { id: 23, text: "假裝你在拍鐵達尼號，找右手邊的人從後面抱著你喝", engText: "Titanic pose drinking with Right person", type: 'DARE', category: "drinking" },
  { id: 24, text: "含著一口酒唱一首歌的副歌，吞下去算輸(再喝一杯)", engText: "Sing chorus with drink in mouth", type: 'DARE', category: "drinking" },

  // ==========================================
  // 2. KING'S ORDERS (Power & Control)
  // ==========================================
  { id: 301, text: "你是國王！指定右手邊第一位喝完這杯", engText: "King! Right person finishes this glass", type: 'DARE', category: "drinking" },
  { id: 302, text: "你是國王！指定全場除了你以外的人各喝一口", engText: "King! Everyone drinks a sip except you", type: 'DARE', category: "drinking" },
  { id: 305, text: "你是國王！指定左邊第一位與第二位喝交杯酒", engText: "King! Left #1 & Left #2 drink cross-armed", type: 'DARE', category: "drinking" },
  { id: 308, text: "你是國王！指定右手邊第一位異性餵你喝", engText: "King! 1st opposite sex on right feeds you", type: 'DARE', category: "drinking" },
  
  // [NEW] Creative King Commands
  { id: 309, text: "你是國王！指定正對面的人當你的「扶手」直到下一輪", engText: "King! Opposite person is your armrest", type: 'DARE', category: "wild" },
  { id: 310, text: "你是國王！給右手邊的人取一個綽號，大家這局都要這樣叫他", engText: "King! Give right person a nickname for this round", type: 'DARE', category: "mild" },
  { id: 311, text: "你是國王！指定左一和右一深情對唱情歌副歌", engText: "King! Left #1 & Right #1 sing a love song", type: 'DARE', category: "wild" },
  { id: 312, text: "你是國王！沒收左手邊第一位的手機一回合", engText: "King! Confiscate Left #1's phone for 1 round", type: 'DARE', category: "mild" },
  { id: 313, text: "你是國王！指定正對面的兩個人互換座位", engText: "King! Swap seats for 2 opposite people", type: 'DARE', category: "mild" },
  { id: 314, text: "你是國王！指定右手邊第一位異性坐在你旁邊(換位置)一回合", engText: "King! Right #1 opposite sex sits next to you 1 round", type: 'DARE', category: "wild" },

  // ==========================================
  // 3. HUMOR & SOCIAL CHAOS (Meme Vibes)
  // ==========================================
  { id: 52, text: "講一個笑話，沒人笑就喝", engText: "Tell a joke, drink if no laugh", type: 'DARE', category: "mild" },
  { id: 54, text: "讓左手邊第一位把你的頭髮弄亂，維持一回合", engText: "Left #1 messes up your hair for 1 round", type: 'DARE', category: "mild" },
  { id: 55, text: "跟右手邊的人一起做鬼臉自拍", engText: "Funny face selfie with right person", type: 'DARE', category: "mild" },
  { id: 613, text: "對著大家擺一個時尚雜誌名模POSE堅持1分鐘", engText: "Vogue pose for 1 min", type: 'DARE', category: "mild" },
  
  // [NEW] Phone & Digital Chaos (Modern Risks)
  { id: 630, text: "打開Google搜尋紀錄，大聲唸出最近的三筆", engText: "Read out last 3 Google searches", type: 'DARE', category: "wild" },
  { id: 631, text: "解鎖手機，讓右手邊的人隨機唸出一則LINE/IG訊息", engText: "Right person reads 1 random msg", type: 'DARE', category: "wild" },
  { id: 632, text: "打開相簿，讓左邊的人快速滑動並隨機點開一張展示", engText: "Show a random photo from gallery", type: 'DARE', category: "wild" },
  { id: 633, text: "讓大家看你的螢幕使用時間(看誰最成癮)", engText: "Show your Screen Time", type: 'DARE', category: "mild" },
  
  // [NEW] Roleplay & Acting (Funny)
  { id: 640, text: "假裝你是直播帶貨主，用超誇張語氣推銷正對面的人", engText: "Sell the opposite person like a livestreamer", type: 'DARE', category: "wild" },
  { id: 641, text: "假裝你是酒店公關，向左邊的人撒嬌推銷自己", engText: "Act like a host/hostess selling yourself to left person", type: 'DARE', category: "wild" },
  { id: 642, text: "模仿在場其中一個人的招牌動作/口頭禪，讓大家猜", engText: "Imitate someone here, let others guess", type: 'DARE', category: "mild" },
  { id: 643, text: "接下來一輪，每句話結尾都要加「喵」/「啾咪」", engText: "End every sentence with 'Meow' for 1 round", type: 'DARE', category: "mild" },
  { id: 644, text: "用RAP的方式抱怨你的工作/學業", engText: "Rap about your job/study complaints", type: 'DARE', category: "wild" },
  { id: 645, text: "把頭放在桌上，假裝你是盤子裡的菜，維持30秒", engText: "Put head on table, act like a dish for 30s", type: 'DARE', category: "mild" },

  // ==========================================
  // 4. FLIRTY & SENSUAL (Specific Targets & Durations)
  // ==========================================
  { id: 5301, text: "和右手邊第一位擁抱10秒", engText: "Hug right person for 10s", type: 'DARE', category: "mild" },
  { id: 5302, text: "和左手邊第一位擁抱20秒", engText: "Hug left person for 20s", type: 'DARE', category: "mild" },
  { id: 5601, text: "讓右手邊第一位幫你按摩肩膀1分鐘", engText: "Right #1 massages you 1 min", type: 'DARE', category: "mild" },
  { id: 5602, text: "讓左手邊第一位幫你按摩肩膀30秒", engText: "Left #1 massages you 30s", type: 'DARE', category: "mild" },
  
  { id: 60, text: "跟右手邊第一位異性深情對視10秒 (不能笑)", engText: "Stare at Right #1 opposite sex 10s (No laughing)", type: 'DARE', category: "wild" },
  { id: 601, text: "跟左手邊第一位異性深情對視20秒 (不能笑)", engText: "Stare at Left #1 opposite sex 20s (No laughing)", type: 'DARE', category: "wild" },
  
  { id: 6041, text: "對著正對面的人深情告白30秒 (越肉麻越好)", engText: "Confess love to opposite person 30s", type: 'DARE', category: "wild" },
  { id: 6042, text: "對著左手邊第一位異性單膝下跪求婚(假裝)", engText: "Fake propose to Left #1 opposite sex", type: 'DARE', category: "wild" },
  
  { id: 61, text: "對著正對面的人跳一段性感的舞20秒", engText: "Sexy dance for opposite person 20s", type: 'DARE', category: "wild" },
  { id: 65, text: "對著右邊的人用嫵媚的聲音說：我好熱", engText: "Seductively say 'I'm so hot' to right person", type: 'DARE', category: "wild" },
  
  // [NEW] Physical Escalation (Safe but Hot)
  { id: 701, text: "用手指幫右手邊的人梳頭/整理瀏海", engText: "Fix Right #1's hair with fingers", type: 'DARE', category: "wild" },
  { id: 702, text: "抓著左邊的人的手，放在自己心臟位置說「你有感覺到嗎」", engText: "Put left person's hand on your heart", type: 'DARE', category: "wild" },
  { id: 703, text: "讓右手邊的人用手指抹掉你嘴唇上的酒漬", engText: "Right person wipes drink off your lips", type: 'DARE', category: "wild" },
  { id: 704, text: "讓左手邊的人聞你脖子的味道，並評價像什麼", engText: "Let left person smell your neck & rate it", type: 'DARE', category: "wild" },
  { id: 705, text: "找一位異性共用一根吸管喝一口酒 (眼神要對視)", engText: "Share a straw with opposite sex & stare", type: 'DARE', category: "wild" },
  { id: 706, text: "和右手邊第一位異性十指緊扣，講出他/她的三個優點", engText: "Hold hands with Right #1 opposite sex & say 3 good traits", type: 'DARE', category: "wild" },
  { id: 707, text: "咬住下嘴唇，用一種「要把你吃掉」的眼神看著正對面的人", engText: "Bite lip and stare hungrily at opposite person", type: 'DARE', category: "wild" },
  { id: 708, text: "用你的臉頰去蹭左邊的人的臉頰，持續5秒", engText: "Rub your cheek against left person's cheek 5s", type: 'DARE', category: "wild" },
  
  { id: 76, text: "被左邊的人壁咚10秒", engText: "Kabedon by left person 10s", type: 'DARE', category: "wild" },
  { id: 761, text: "被右邊的人壁咚10秒", engText: "Kabedon by right person 10s", type: 'DARE', category: "wild" },
  { id: 762, text: "壁咚正對面的人20秒", engText: "Kabedon opposite person 20s", type: 'DARE', category: "wild" },

  { id: 78, text: "從後面環抱左邊的人10秒", engText: "Back hug left person 10s", type: 'DARE', category: "wild" },
  { id: 79, text: "親吻右邊的人的手背", engText: "Kiss right person's hand", type: 'DARE', category: "wild" },

  // ==========================================
  // 5. 18+ EXPLICIT (Evil Mode Only - The Danger Zone)
  // ==========================================
  { id: 201, text: "嘴對嘴傳冰塊給右手邊第一位", engText: "Pass ice mouth-to-mouth to Right #1", type: 'DARE', category: "r18" },
  { id: 2011, text: "嘴對嘴傳冰塊給左手邊第一位", engText: "Pass ice mouth-to-mouth to Left #1", type: 'DARE', category: "r18" },
  
  { id: 202, text: "用嘴巴解開左手邊第一位異性的上衣扣子/拉鍊", engText: "Mouth unbutton Left #1's shirt/zipper", type: 'DARE', category: "r18" },
  
  // Sitting on Laps (Time Variations)
  { id: 2030, text: "坐在右手邊第一位異性的大腿上，持續一回合", engText: "Sit on Right #1 opposite sex's lap for 1 round", type: 'DARE', category: "r18" },
  { id: 2031, text: "坐在左手邊第一位異性的大腿上，持續3分鐘", engText: "Sit on Left #1 opposite sex's lap for 3 mins", type: 'DARE', category: "r18" },
  { id: 2032, text: "坐在正對面異性的大腿上，直到有人喝完下一杯酒", engText: "Sit on Opposite sex's lap until next drink", type: 'DARE', category: "r18" },
  
  { id: 204, text: "對右邊的人耳朵吹氣5秒", engText: "Blow in right person's ear 5s", type: 'DARE', category: "r18" },
  { id: 205, text: "用嘴含冰塊在左邊的人脖子上滑動", engText: "Ice on left person's neck", type: 'DARE', category: "r18" },
  
  { id: 206, text: "讓左邊第一位異性摸你的腹肌/鎖骨/大腿", engText: "Left #1 touches abs/collarbone/thigh", type: 'DARE', category: "r18" },
  { id: 207, text: "讓右邊的人手伸進你衣服裡摸肚子/背10秒", engText: "Right person hand inside shirt touching skin 10s", type: 'DARE', category: "r18" },
  
  { id: 208, text: "輕咬左邊的人的耳朵/耳垂", engText: "Bite left person's ear/earlobe", type: 'DARE', category: "r18" },
  { id: 209, text: "用身體磨蹭左手邊異性10秒", engText: "Grind body on left opposite sex 10s", type: 'DARE', category: "r18" },
  
  { id: 210, text: "在右邊的人大腿內側用手指寫字", engText: "Finger write on right person's inner thigh", type: 'DARE', category: "r18" },
  { id: 2120, text: "種草莓在右邊的人脖子上 (或親吻脖子10秒)", engText: "Hickey/Kiss on Right person's neck", type: 'DARE', category: "r18" },
  
  // Swap Shirts (Time Variations)
  { id: 2110, text: "跟右手邊第一位異性互換上衣，持續一回合", engText: "Swap shirts with Right #1 opposite sex for 1 round", type: 'DARE', category: "r18" },
  { id: 2111, text: "跟左手邊第一位異性互換上衣，持續10分鐘", engText: "Swap shirts with Left #1 opposite sex for 10 mins", type: 'DARE', category: "r18" },
  { id: 2112, text: "跟正對面的異性互換上衣，直到遊戲結束", engText: "Swap shirts with opposite person until game ends", type: 'DARE', category: "r18" },

  // [NEW] R18 Escalated (Sensory & Hot)
  { id: 2201, text: "蒙上眼睛，讓左邊的人隨機親你臉的一個部位", engText: "Blindfold, left person kisses face randomly", type: 'DARE', category: "r18" },
  { id: 2202, text: "用嘴巴餵右手邊的人吃東西 (或冰塊/檸檬片)", engText: "Mouth feed right person", type: 'DARE', category: "r18" },
  { id: 2203, text: "讓正對面的人用手指輕輕劃過你的脊椎", engText: "Opposite person traces your spine", type: 'DARE', category: "r18" },
  { id: 2204, text: "把手放在左邊異性的胸口(心臟處)感受心跳20秒", engText: "Hand on left opposite sex's chest for 20s", type: 'DARE', category: "r18" },
  { id: 2205, text: "在右邊的人耳邊用氣音說一句你覺得最色情的話", engText: "Whisper something dirty to right person", type: 'DARE', category: "r18" },
  { id: 2206, text: "脫掉襪子，用腳去磨蹭正對面的人的小腿", engText: "Rub opposite person's calf with bare foot", type: 'DARE', category: "r18" },
  { id: 2207, text: "讓左邊的人在你的鎖骨倒一點酒，並吸乾淨", engText: "Drink shot off collarbone", type: 'DARE', category: "r18" },
  { id: 2208, text: "輕輕拉扯右邊的人的衣服/領帶，把他拉向自己", engText: "Pull right person close by their clothes", type: 'DARE', category: "r18" }
];

export const TRUTHS: GameContent[] = [
    // Mild / Fun
    { id: 1001, text: "你現在有喜歡的人嗎？", engText: "Do you have a crush right now?", type: 'TRUTH', category: "mild" },
    { id: 1002, text: "初吻是在什麼時候？", engText: "When was your first kiss?", type: 'TRUTH', category: "mild" },
    { id: 1003, text: "說出在場一位異性的三個優點", engText: "Name 3 good traits of someone opposite sex here", type: 'TRUTH', category: "mild" },
    { id: 1009, text: "上一次哭是因為什麼？", engText: "Why did you cry last time?", type: 'TRUTH', category: "mild" },
    { id: 1010, text: "手機裡最後一張照片是什麼？(拿出來看)", engText: "Show the last photo in your phone", type: 'TRUTH', category: "mild" },
    { id: 1012, text: "說出你做過最丟臉的一件事", engText: "Most embarrassing moment?", type: 'TRUTH', category: "mild" },
    
    // Wild / Deep
    { id: 1004, text: "你覺得在場誰最性感？", engText: "Who is the sexiest person here?", type: 'TRUTH', category: "wild" },
    { id: 1006, text: "曾經對朋友的另一半動心過嗎？", engText: "Ever had feelings for a friend's partner?", type: 'TRUTH', category: "wild" },
    { id: 1007, text: "能夠接受一夜情嗎？", engText: "Can you accept one night stands?", type: 'TRUTH', category: "wild" },
    { id: 1011, text: "如果必須跟在場的一個人交往，你會選誰？", engText: "Who here would you date?", type: 'TRUTH', category: "wild" },
    { id: 1013, text: "最近一次說謊是什麼時候？對誰？", engText: "When was the last time you lied?", type: 'TRUTH', category: "wild" },
    { id: 1014, text: "曾經偷看過另一半的手機嗎？", engText: "Checked partner's phone secretly?", type: 'TRUTH', category: "wild" },
    { id: 1015, text: "這輩子做過最後悔的一件事？", engText: "Biggest regret in life?", type: 'TRUTH', category: "wild" },

    // R18 / Spicy
    { id: 1005, text: "最後一次性幻想對象是誰？", engText: "Who was your last sexual fantasy about?", type: 'TRUTH', category: "r18" },
    { id: 1008, text: "最喜歡的愛愛姿勢是什麼？", engText: "Favorite position?", type: 'TRUTH', category: "r18" },
    { id: 1016, text: "最近一次DIY是什麼時候？", engText: "Last time you masturbated?", type: 'TRUTH', category: "r18" },
    { id: 1017, text: "有沒有在公共場所做過壞壞的事？", engText: "Had sex in public?", type: 'TRUTH', category: "r18" },
    { id: 1018, text: "覺得自己的性能力幾分 (1-10)？", engText: "Rate your sex skills (1-10)", type: 'TRUTH', category: "r18" },
    { id: 1019, text: "看過最奇怪的A片類型是什麼？", engText: "Weirdest porn category watched?", type: 'TRUTH', category: "r18" },
    { id: 1020, text: "身上哪裡是絕對不能被碰的敏感帶？", engText: "Where is your 'no touch' zone?", type: 'TRUTH', category: "r18" },
    { id: 1021, text: "喜歡開燈做還是關燈做？", engText: "Lights on or off?", type: 'TRUTH', category: "r18" }
];

export const SOLO_CONTENT: GameContent[] = [
    // Drinking
    { id: 9001, text: "喝一杯", engText: "Drink one cup", type: 'DARE', category: "drinking" },
    { id: 9002, text: "喝半杯", engText: "Drink half cup", type: 'DARE', category: "drinking" },
    
    // Main Character Energy (Cool & Funny)
    { id: 9004, text: "找一個陌生人借火(或問時間)，並稱讚他/她", engText: "Ask stranger for fire/time & compliment them", type: 'DARE', category: "wild" },
    { id: 9005, text: "去隔壁桌舉杯敬酒，說聲「辛苦了」", engText: "Cheers with a nearby table", type: 'DARE', category: "wild" },
    { id: 9006, text: "找店員合照一張，說他是你偶像", engText: "Selfie with the bartender, call them idol", type: 'DARE', category: "wild" },
    { id: 9026, text: "假裝你是外國人，用英文跟店員點一杯水", engText: "Order water in English with fake accent", type: 'DARE', category: "wild" },
    { id: 9027, text: "問隔壁桌的人覺得你今天穿得好看嗎", engText: "Ask neighbors if your outfit is nice", type: 'DARE', category: "wild" },

    // Social Media / Phone
    { id: 9010, text: "拍一杯酒發IG限動，打上「今晚嫁給它」", engText: "IG Story: 'Marrying this drink tonight'", type: 'DARE', category: "wild" },
    { id: 9012, text: "隨機打給一個朋友，接通後唱兩句生日快樂歌再掛掉", engText: "Call friend, sing HBD, hang up", type: 'DARE', category: "wild" },
    { id: 9013, text: "開直播1分鐘，甚麼都不說只喝酒", engText: "Live stream 1 min silently drinking", type: 'DARE', category: "wild" },
    { id: 9028, text: "發一則限動問「我在哪裡？猜對匯款500」", engText: "IG Story: 'Where am I? Guess for cash'", type: 'DARE', category: "mild" },

    // Self-Entertainment
    { id: 9020, text: "去廁所對著鏡子裡的自己猜拳，直到贏為止", engText: "RPS with yourself in mirror until you win", type: 'DARE', category: "wild" },
    { id: 9021, text: "假裝自己在講電話，大聲說「幾千萬的案子我不在乎啦！」", engText: "Fake call: 'I don't care about the millions!'", type: 'DARE', category: "wild" },
    { id: 9023, text: "模仿店裡放的音樂跳舞30秒", engText: "Dance to bgm for 30s", type: 'DARE', category: "wild" },
    { id: 9029, text: "打開前鏡頭，深情看著自己說「你這該死的小妖精」", engText: "Tell yourself 'You damn sexy thing'", type: 'DARE', category: "wild" }
];

// --- Specialized 2-Player Content (1v1 Chemistry Test) ---
export const TWO_PLAYER_CONTENT: GameContent[] = [
    // Social / Drinking
    { id: 8001, text: "喝一杯", engText: "Drink one full cup", type: 'DARE', category: "drinking" },
    { id: 8002, text: "指定對方喝半杯", engText: "Assign the other person to drink half a cup", type: 'DARE', category: "drinking" },
    { id: 8004, text: "拍一張兩人合照，上傳到你的限時動態", engText: "Post a selfie of you two on IG story", type: 'DARE', category: "wild" },
    { id: 8007, text: "錄一段正在玩這個APP的影片發IG", type: 'DARE', category: "wild" },
    
    // Bonding / Chemistry
    { id: 8040, text: "互看對方眼睛30秒，誰先笑誰喝", engText: "Staring contest 30s, loser drinks", type: 'DARE', category: "wild" },
    { id: 8041, text: "用一分鐘幫對方畫一張似顏繪(用紙或手機)", engText: "Draw each other in 1 min", type: 'DARE', category: "mild" },
    { id: 8042, text: "同時回答：最喜歡的食物？不一樣就喝", engText: "Sync Answer: Fav food? Mismatch drinks", type: 'DARE', category: "mild" },
    { id: 8043, text: "讓對方檢查你的 Youtube 觀看紀錄", engText: "Let them check YouTube history", type: 'DARE', category: "wild" },

    // Truths (Deep)
    { id: 8010, text: "第一次見到對方的印象是什麼？", engText: "First impression of each other?", type: 'TRUTH', category: "mild" },
    { id: 8011, text: "覺得對方身上最迷人的部位是？", engText: "Most attractive part of them?", type: 'TRUTH', category: "mild" },
    { id: 8014, text: "分享一個從來沒跟別人說過的秘密", engText: "Share a secret you've never told anyone", type: 'TRUTH', category: "wild" },
    { id: 8044, text: "你覺得我們兩個有可能發展嗎？", engText: "Do you think we have a chance?", type: 'TRUTH', category: "wild" },

    // 18+ Touch (High Tension)
    { id: 8020, text: "深情親吻對方的脖子5秒", engText: "Kiss their neck for 5s", type: 'DARE', category: "r18" },
    { id: 8022, text: "讓對方坐在你大腿上1分鐘", engText: "Sit on lap for 1 min", type: 'DARE', category: "r18" },
    { id: 8023, text: "把手伸進對方衣服裡摸背/腰", engText: "Touch back/waist under shirt", type: 'DARE', category: "r18" },
    { id: 8045, text: "用嘴巴解開對方一個扣子或拉鍊", engText: "Undo a button/zipper with mouth", type: 'DARE', category: "r18" },
    { id: 8046, text: "蒙上對方的眼睛，用手觸碰他/她三個部位猜", engText: "Blindfold touch & guess", type: 'DARE', category: "r18" },
    { id: 8048, text: "用嘴巴餵對方吃冰塊", engText: "Feed ice with mouth", type: 'DARE', category: "r18" },

    // 18+ Truths
    { id: 8030, text: "你最喜歡的愛愛體位是什麼？", engText: "Favorite position?", type: 'TRUTH', category: "r18" },
    { id: 8031, text: "曾經對在場的人(對方)有過性幻想嗎？", engText: "Ever had a fantasy about the other person?", type: 'TRUTH', category: "r18" },
    { id: 8047, text: "現在有沒有想色色的事？", engText: "Thinking about naughty things now?", type: 'TRUTH', category: "r18" }
];

export const COCKTAILS: Cocktail[] = [
    {
        id: "c1",
        name: "野格炸彈",
        engName: "Jager Bomb",
        ingredients: [
            { name: "野格 (Jägermeister)", ratio: 1 },
            { name: "紅牛 (Red Bull)", ratio: 2 }
        ],
        description: "喝完這杯，你可能會看到過世的阿嬤在向你招手。心悸首選。",
        tags: ["High Energy", "Party", "Sweet"]
    },
    {
        id: "c2",
        name: "威士忌可樂",
        engName: "Whiskey Coke",
        ingredients: [
            { name: "威士忌 (Whiskey)", ratio: 1 },
            { name: "可樂 (Coke)", ratio: 3 }
        ],
        description: "超商調酒界的公務員，樸實無華且枯燥，但有效。不知道喝什麼就喝這個。",
        tags: ["Classic", "Simple", "Sweet"]
    },
    {
        id: "c3",
        name: "燒酒多多",
        engName: "Soju Yakult",
        ingredients: [
            { name: "燒酒 (Soju)", ratio: 1 },
            { name: "養樂多 (Yakult)", ratio: 2 },
            { name: "雪碧 (Sprite)", ratio: 1 }
        ],
        description: "妹酒？喝三杯你就知道誰是妹了。隱形殺手，專殺不信邪的。",
        tags: ["Sweet", "Easy", "Popular"]
    },
    {
        id: "c4",
        name: "螺絲起子",
        engName: "Screwdriver",
        ingredients: [
            { name: "伏特加 (Vodka)", ratio: 1 },
            { name: "柳橙汁 (Orange Juice)", ratio: 2 }
        ],
        description: "滿滿的維他命C？別騙自己了，這只是讓你隔天宿醉時感覺稍微健康一點。",
        tags: ["Fruity", "Classic", "Vitamin C"]
    },
    {
        id: "c5",
        name: "金湯力",
        engName: "Gin Tonic",
        ingredients: [
            { name: "琴酒 (Gin)", ratio: 1 },
            { name: "通寧水 (Tonic)", ratio: 3 }
        ],
        description: "這杯喝起來像高級木頭味氣泡水。適合想裝成熟但又不想太醉的你。",
        tags: ["Refreshing", "Classic", "Bubbly"]
    }
];

export const GAMES: GameRule[] = [
  {
    id: 'wheel',
    title: '大冒險轉盤',
    subtitle: 'Wheel of Destiny',
    description: '配置幽默又超鬧的50種以上大冒險內容，轉盤抽取。',
    detailedSteps: [
      '設定玩家人數與模式 (真心話/大冒險/混合)。',
      '點擊 SPIN 按鈕轉動轉盤。',
      '指針停下後，大聲唸出指令並執行。',
      '如果不敢做，就自罰三杯！'
    ],
    minPlayers: 1,
    icon: 'Aperture',
    isWheel: true
  },
  {
    id: 'ktv',
    title: 'KTV 關鍵字',
    subtitle: 'Word Trigger',
    description: '聽到"我"這個字就喝(字隨機指定，以常出現在歌詞內的字為主)。',
    detailedSteps: [
      '指定一個常見字 (如: "我", "愛", "你")',
      '點歌開始唱',
      '歌詞每出現一次這個字，全場就要喝一口',
      '唱到副歌通常會死人'
    ],
    minPlayers: 2,
    icon: 'Mic'
  },
  {
    id: 'rps_accumulate',
    title: '無限猜拳',
    subtitle: 'Accumulative RPS',
    description: '一群人一起猜拳，每猜一次若沒有產生最輸的一位，就口頭上喊加半杯。',
    detailedSteps: [
      '所有人一起猜拳',
      '第一輪沒人最輸: 喊「一杯！」(累積)',
      '第二輪沒人最輸: 喊「一杯半！」',
      '第三輪沒人最輸: 喊「兩杯！」',
      '直到出現最輸者，把累積的量喝掉'
    ],
    minPlayers: 2,
    icon: 'Hand'
  },
  {
    id: 'crush_watch',
    title: '進店路人',
    subtitle: 'Crush Watch',
    description: '適合朋友局，路人是自己的菜就喝。',
    detailedSteps: [
      '觀察進來的路人',
      '如果是你的菜，就喝一口',
      '如果是大家的菜，全場乾杯',
      '如果進來的是前任...自罰三杯'
    ],
    minPlayers: 2,
    icon: 'Eye'
  },
  {
    id: 'blow_card',
    title: '吹撲克牌',
    subtitle: 'Blow The Card',
    description: '把撲克疊放在調好的烈酒酒杯上，吹掉最後一張的喝。',
    detailedSteps: [
      '調製一杯滿滿的烈酒',
      '將一副撲克牌疊在杯口',
      '輪流吹氣，至少要吹掉一張',
      '如果不小心把最後一張吹掉，或把酒吹灑出來，就要把酒喝掉'
    ],
    minPlayers: 2,
    icon: 'Wind'
  },
  {
    id: 'look_up',
    title: '抬頭遊戲',
    subtitle: 'Look Up',
    description: '全部低頭，數到三抬頭，沒有人對到眼的喝，若全部都沒抬就全部都喝。',
    detailedSteps: [
      '所有人圍成一圈，低頭',
      '數到三，同時抬頭看向一個人',
      '如果你看的人也正在看你 (對到眼)，兩個人都要喝',
      '如果沒人對到眼，安全',
      '如果大家都低頭沒抬起來，全部罰喝'
    ],
    minPlayers: 3,
    icon: 'UserCheck'
  },
  {
    id: 'rps_pair',
    title: '猜拳配對',
    subtitle: 'RPS Pairing',
    description: '適合4人以上，猜拳，之後迅速抓住同樣的兩兩一組，落單者喝。',
    detailedSteps: [
      '所有人一起猜拳',
      '出一樣拳的人要迅速抓在一起 (兩兩一組)',
      '例如: 出石頭的找石頭的抱在一起',
      '最後落單沒有配對成功的人喝'
    ],
    minPlayers: 4,
    icon: 'Users'
  },
  {
    id: 'count_seven',
    title: '數數遊戲',
    subtitle: 'Count Seven',
    description: '數數字，若有7人就數到7，同時喊出數字的喝，喊完沒有人重複，找路人喝(之類的)。',
    detailedSteps: [
      '順時針輪流報數 (1, 2, 3...)',
      '如果總人數是N，數到N的人要同時喊數字並喝一杯',
      '或者: 遇到7的倍數或含7的數字不能唸，要拍手，錯了喝',
      '喊完如果沒人重複或出錯，找路人喝(誤)'
    ],
    minPlayers: 3,
    icon: 'Hash'
  },
  {
    id: 'you_drink',
    title: '你喝',
    subtitle: 'You Drink',
    description: '適合6人以上，第一位指兩位說你喝，被指到的人指一位說你喝，同時被兩人指到的喝。',
    detailedSteps: [
      '莊家喊「我喝」(莊家不喝)，同時指兩個人',
      '被指的兩個人喊「你喝」，並分別指另外一個人',
      '如果某人同時被兩個人指到，那個人就要喝',
      '如果沒有人重複被指，就繼續下一輪'
    ],
    minPlayers: 6,
    icon: 'Navigation'
  },
  {
    id: 'surface_tension',
    title: '表面張力',
    subtitle: 'Surface Tension',
    description: '倒滿一杯，溢出來的喝。',
    detailedSteps: [
      '準備一個杯子倒滿酒',
      '輪流往杯子裡加酒 (或丟硬幣)',
      '利用水的表面張力讓它越來越滿',
      '誰讓酒溢出來，誰就要把那杯喝光'
    ],
    minPlayers: 2,
    icon: 'Droplets'
  }
];