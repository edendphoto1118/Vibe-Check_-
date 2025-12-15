import { GameRule, Cocktail, GameContent } from './types';

export const DARES: GameContent[] = [
  // --- 1. Basic Drinking Punishments (Direct & Simple) ---
  { id: 1, text: "喝一杯", engText: "Drink one full cup", type: 'DARE', category: "drinking" },
  { id: 2, text: "全場每人喝一口", engText: "Everyone takes a sip", type: 'DARE', category: "drinking" },
  { id: 3, text: "左邊的人喝半杯", engText: "Person to your left drinks half a cup", type: 'DARE', category: "drinking" },
  { id: 4, text: "右邊的人喝半杯", engText: "Person to your right drinks half a cup", type: 'DARE', category: "drinking" },
  { id: 5, text: "各位紳士喝一杯 (男生喝)", engText: "All gentlemen drink", type: 'DARE', category: "drinking" },
  { id: 6, text: "各位淑女喝一杯 (女生喝)", engText: "All ladies drink", type: 'DARE', category: "drinking" },
  { id: 7, text: "和正對面的人喝交杯酒", engText: "Cross arms and drink with the person opposite you", type: 'DARE', category: "drinking" },
  { id: 12, text: "單身狗喝一杯", engText: "Singles drink one cup", type: 'DARE', category: "drinking" },
  { id: 13, text: "非單身的人喝一杯", engText: "Those in a relationship drink one cup", type: 'DARE', category: "drinking" },
  { id: 14, text: "穿黑衣服的人喝", engText: "Wearing black? Drink!", type: 'DARE', category: "drinking" },
  { id: 15, text: "指定一個人陪你喝完這杯 (連坐)", engText: "Pick a mate to finish this cup with you", type: 'DARE', category: "drinking" },
  { id: 16, text: "大喊「我是酒鬼」三聲，然後喝", engText: "Shout 'I am a drunkard' 3 times, then drink", type: 'DARE', category: "drinking" },
  { id: 17, text: "不用手把桌上一杯酒喝光", engText: "Drink a glass without hands", type: 'DARE', category: "drinking" },
  { id: 18, text: "自罰一杯", engText: "Punish yourself: Drink a full cup", type: 'DARE', category: "drinking" },
  { id: 19, text: "大家投票選出酒量最差的喝", engText: "Vote for worst tolerance, they drink", type: 'DARE', category: "drinking" },

  // --- 2. King's Orders (Simple Assignments) ---
  { id: 301, text: "你是國王！指定一個人喝完這杯", engText: "King! Order someone to finish this glass", type: 'DARE', category: "drinking" },
  { id: 302, text: "你是國王！指定全場除了你以外的人各喝一口", engText: "King! Everyone drinks a sip except you", type: 'DARE', category: "drinking" },
  { id: 303, text: "你是國王！指定兩個人猜拳，輸的喝兩杯", engText: "King! Pick 2 people to RPS, loser drinks 2 cups", type: 'DARE', category: "drinking" },
  { id: 304, text: "你是國王！指定現場年紀最小的人喝一杯", engText: "King! Youngest person drinks a cup", type: 'DARE', category: "drinking" },
  { id: 305, text: "你是國王！指定現場兩個人喝交杯酒", engText: "King! Order 2 people to drink cross-armed", type: 'DARE', category: "drinking" },
  { id: 306, text: "你是國王！指定一個人代替你喝這輪的酒", engText: "King! Designate someone to drink for you", type: 'DARE', category: "drinking" },
  { id: 307, text: "你是國王！指定三個人一起乾杯", engText: "King! Pick 3 people to cheers and drink", type: 'DARE', category: "drinking" },
  { id: 308, text: "你是國王！指定一個異性餵你喝", engText: "King! Pick opposite sex to feed you a drink", type: 'DARE', category: "drinking" },

  // --- 3. Funny & Crazy Dares (New & Existing) ---
  { id: 50, text: "模仿一種動物叫聲，直到有人笑", engText: "Imitate an animal until someone laughs", type: 'DARE', category: "mild" },
  { id: 51, text: "用屁股寫字給大家猜", engText: "Write with butt", type: 'DARE', category: "mild" },
  { id: 52, text: "講一個笑話，沒人笑就喝", engText: "Tell a joke, drink if no laugh", type: 'DARE', category: "mild" },
  { id: 53, text: "和在場每個人擁抱", engText: "Hug everyone", type: 'DARE', category: "mild" },
  { id: 54, text: "把頭髮弄亂直到下一輪", engText: "Mess up hair", type: 'DARE', category: "mild" },
  { id: 55, text: "做鬼臉自拍", engText: "Funny face selfie", type: 'DARE', category: "mild" },
  { id: 56, text: "讓右邊的人幫你按摩肩膀", engText: "Right person massage you", type: 'DARE', category: "mild" },
  { id: 57, text: "跟牆壁說話10秒", engText: "Talk to wall", type: 'DARE', category: "mild" },
  { id: 58, text: "只能用氣音說話一輪", engText: "Whisper only", type: 'DARE', category: "mild" },
  { id: 59, text: "這局pass，沒事", engText: "Pass", type: 'DARE', category: "mild" },
  
  // New Humorous/Crazy Dares (Replaces Drinking Games)
  { id: 601, text: "學嬰兒哭聲，持續10秒", engText: "Cry like a baby for 10s", type: 'DARE', category: "wild" },
  { id: 602, text: "假裝自己在騎馬，繞著桌子跑一圈", engText: "Ride a fake horse around table", type: 'DARE', category: "wild" },
  { id: 603, text: "讓在場所有人選一張你手機裡最醜的照片發限動", engText: "Post ugliest photo on IG story", type: 'DARE', category: "wild" },
  { id: 604, text: "對著空氣深情告白30秒", engText: "Confess love to air 30s", type: 'DARE', category: "wild" },
  { id: 605, text: "模仿在場其中一個人的動作/說話方式", engText: "Imitate someone here", type: 'DARE', category: "mild" },
  { id: 606, text: "用RAP的方式自我介紹", engText: "Self intro in RAP", type: 'DARE', category: "wild" },
  { id: 607, text: "聞自己的腳，然後說「真香」", engText: "Smell own foot and say Yummy", type: 'DARE', category: "wild" },
  { id: 608, text: "假裝中彈身亡，演得越像越好", engText: "Act like dying from gunshot", type: 'DARE', category: "mild" },
  { id: 609, text: "深蹲5下，每下都要發出奇怪的聲音", engText: "5 squats with weird noises", type: 'DARE', category: "mild" },
  { id: 610, text: "讓左邊的人用口紅/筆在你臉上畫一顆痣", engText: "Draw a mole on face", type: 'DARE', category: "wild" },
  { id: 611, text: "學殭屍跳，跳到門口再跳回來", engText: "Zombie jump to door and back", type: 'DARE', category: "wild" },
  { id: 612, text: "對著Siri說「我好寂寞」並唸出Siri的回答", engText: "Tell Siri I'm lonely", type: 'DARE', category: "mild" },
  { id: 613, text: "擺一個時尚雜誌名模POSE堅持1分鐘", engText: "Vogue pose for 1 min", type: 'DARE', category: "mild" },
  { id: 614, text: "把鞋子脫下來當電話打給前任(假裝)", engText: "Use shoe as phone call ex", type: 'DARE', category: "wild" },
  { id: 615, text: "做出「便秘」的表情自拍一張", engText: "Constipation face selfie", type: 'DARE', category: "wild" },
  { id: 616, text: "向陌生人推薦這個 APP，並強迫他現場玩一次", engText: "Recommend this APP to a stranger & make them play once", type: 'DARE', category: "wild" },

  // King's Wild Actions
  { id: 401, text: "你是國王！指定一個人當你的僕人，幫你拿酒/按摩一回合", engText: "King! Assign a servant for 1 round", type: 'DARE', category: "mild" },
  { id: 402, text: "你是國王！指定兩個人進行深情對視比賽，先笑的喝", engText: "King! 2 people staring contest, loser drinks", type: 'DARE', category: "wild" },
  { id: 403, text: "你是國王！指定一個人模仿猴子，直到下一輪", engText: "King! Assign someone to act like a monkey", type: 'DARE', category: "mild" },
  { id: 404, text: "你是國王！指定一個人去搭訕路人/隔壁桌", engText: "King! Assign someone to hit on a stranger", type: 'DARE', category: "wild" },
  { id: 405, text: "你是國王！指定兩個人十指緊扣一回合", engText: "King! Assign 2 people to hold hands for 1 round", type: 'DARE', category: "wild" },
  { id: 406, text: "你是國王！指定三個人一起做深蹲5下", engText: "King! Assign 3 people to do 5 squats", type: 'DARE', category: "wild" },
  { id: 407, text: "你是國王！指定一個異性坐在你旁邊(換位置)", engText: "King! Make an opposite sex sit next to you", type: 'DARE', category: "wild" },
  { id: 408, text: "你是國王！指定兩個人互換外套穿", engText: "King! Assign 2 people to swap jackets", type: 'DARE', category: "wild" },
  { id: 409, text: "你是國王！指定一個人對著大家撒嬌", engText: "King! Assign someone to act cute", type: 'DARE', category: "wild" },
  { id: 410, text: "你是國王！指定兩個人合唱一首歌", engText: "King! Assign 2 people to sing a duet", type: 'DARE', category: "wild" },
  { id: 411, text: "你是國王！指定一個人被你畫臉", engText: "King! Draw on someone's face", type: 'DARE', category: "wild" },
  { id: 412, text: "你是國王！指定三個人疊在一起拍照", engText: "King! 3 people stack for a photo", type: 'DARE', category: "wild" },
  { id: 413, text: "你是國王！指定一個人和你玩剪刀石頭布，輸的脫一件", engText: "King! RPS with someone, loser removes item", type: 'DARE', category: "wild" },
  { id: 414, text: "你是國王！指定一個人做伏地挺身，上面坐另一個人", engText: "King! Pushups with someone sitting on back", type: 'DARE', category: "wild" },

  // Wild Actions
  { id: 60, text: "選一個異性深情對視10秒", engText: "Stare at opposite sex 10s", type: 'DARE', category: "wild" },
  { id: 61, text: "跳一段性感的舞20秒", engText: "Sexy dance 20s", type: 'DARE', category: "wild" },
  { id: 62, text: "向在場一位異性告白（假裝的）", engText: "Fake confess love", type: 'DARE', category: "wild" },
  { id: 63, text: "聞右邊的人的腋下", engText: "Smell right person's armpit", type: 'DARE', category: "wild" },
  { id: 64, text: "隨機打給通訊錄一個人說我愛你", engText: "Call contact say I love you", type: 'DARE', category: "wild" },
  { id: 65, text: "用嫵媚的聲音說：我要", engText: "Seductively say 'I want it'", type: 'DARE', category: "wild" },
  { id: 66, text: "讓大家檢查你的包包/口袋", engText: "Bag/Pocket check", type: 'DARE', category: "wild" },
  { id: 67, text: "對這杯酒深情告白然後喝掉", engText: "Confess to drink then drink", type: 'DARE', category: "wild" },
  { id: 68, text: "用舌頭舔一下杯緣一圈", engText: "Lick glass rim", type: 'DARE', category: "wild" },
  { id: 69, text: "說出初吻的年齡", engText: "Age of first kiss", type: 'DARE', category: "wild" },
  { id: 70, text: "發出性感的呻吟聲", engText: "Sexy moan", type: 'DARE', category: "wild" },
  { id: 71, text: "說出在場最有好感的人", engText: "Who do you like here", type: 'DARE', category: "wild" },
  { id: 72, text: "脫掉身上的一件配件或外衣", engText: "Remove item", type: 'DARE', category: "wild" },
  { id: 73, text: "用公主抱抱起現場一位異性深蹲三下", engText: "Bridal carry squat", type: 'DARE', category: "wild" },
  { id: 74, text: "讓左邊的人聞你的頭髮", engText: "Left person smell hair", type: 'DARE', category: "wild" },
  { id: 75, text: "和右邊的人臉貼臉堅持10秒", engText: "Cheek to cheek 10s", type: 'DARE', category: "wild" },
  { id: 76, text: "被左邊的人壁咚10秒", engText: "Kabedon 10s", type: 'DARE', category: "wild" },
  { id: 77, text: "讓右邊的人幫你塗護唇膏(用手指)", engText: "Lip balm by finger", type: 'DARE', category: "wild" },
  { id: 78, text: "從後面環抱左邊的人10秒", engText: "Back hug 10s", type: 'DARE', category: "wild" },
  { id: 79, text: "親吻右邊的人的手背", engText: "Kiss hand", type: 'DARE', category: "wild" },

  // --- 4. 18+ Explicit (IDs 200+, 500+) ---
  { id: 201, text: "嘴對嘴傳冰塊給下一位", engText: "Pass ice mouth-to-mouth", type: 'DARE', category: "r18" },
  { id: 202, text: "用嘴巴解開一個人的扣子", engText: "Mouth unbutton", type: 'DARE', category: "r18" },
  { id: 203, text: "選一個人坐在他大腿上一分鐘", engText: "Sit on lap 1 min", type: 'DARE', category: "r18" },
  { id: 204, text: "對右邊的人耳朵吹氣", engText: "Blow in ear", type: 'DARE', category: "r18" },
  { id: 205, text: "用嘴含冰塊在左邊的人脖子上滑動", engText: "Ice on neck", type: 'DARE', category: "r18" },
  { id: 206, text: "讓異性摸你的腹肌/鎖骨", engText: "Touch abs/collarbone", type: 'DARE', category: "r18" },
  { id: 207, text: "讓手伸進你衣服裡摸肚子", engText: "Hand inside shirt", type: 'DARE', category: "r18" },
  { id: 208, text: "輕咬左邊的人的耳朵", engText: "Bite ear", type: 'DARE', category: "r18" },
  { id: 209, text: "用身體磨蹭異性十秒", engText: "Grind body 10s", type: 'DARE', category: "r18" },
  { id: 210, text: "在大腿內側寫字", engText: "Write on inner thigh", type: 'DARE', category: "r18" },
  { id: 211, text: "互換上衣", engText: "Swap shirts", type: 'DARE', category: "r18" }
];

export const TRUTHS: GameContent[] = [
    { id: 1001, text: "你現在有喜歡的人嗎？", engText: "Do you have a crush right now?", type: 'TRUTH', category: "mild" },
    { id: 1002, text: "初吻是在什麼時候？", engText: "When was your first kiss?", type: 'TRUTH', category: "mild" },
    { id: 1003, text: "說出在場一位異性的優點", engText: "Name a good trait of someone opposite sex here", type: 'TRUTH', category: "mild" },
    { id: 1004, text: "你覺得在場誰最性感？", engText: "Who is the sexiest person here?", type: 'TRUTH', category: "wild" },
    { id: 1005, text: "最後一次性幻想對象是誰？", engText: "Who was your last sexual fantasy about?", type: 'TRUTH', category: "r18" },
    { id: 1006, text: "曾經對朋友的另一半動心過嗎？", engText: "Ever had feelings for a friend's partner?", type: 'TRUTH', category: "wild" },
    { id: 1007, text: "能夠接受一夜情嗎？", engText: "Can you accept one night stands?", type: 'TRUTH', category: "wild" },
    { id: 1008, text: "最喜歡的體位是什麼？", engText: "Favorite position?", type: 'TRUTH', category: "r18" },
    { id: 1009, text: "上一次哭是因為什麼？", engText: "Why did you cry last time?", type: 'TRUTH', category: "mild" },
    { id: 1010, text: "手機裡最後一張照片是什麼？", engText: "What is the last photo in your phone?", type: 'TRUTH', category: "mild" }
];

export const SOLO_CONTENT: GameContent[] = [
    // Existing Drinking
    { id: 9001, text: "喝一杯", engText: "Drink one cup", type: 'DARE', category: "drinking" },
    { id: 9002, text: "喝半杯", engText: "Drink half cup", type: 'DARE', category: "drinking" },
    { id: 9003, text: "休息一回", engText: "Rest one round", type: 'DARE', category: "mild" },
    
    // Social / Stranger Interaction
    { id: 9004, text: "找一個陌生人借火(或問時間)，並稱讚他/她", engText: "Ask stranger for fire/time & compliment them", type: 'DARE', category: "wild" },
    { id: 9005, text: "去隔壁桌舉杯敬酒，說聲「辛苦了」", engText: "Cheers with a nearby table", type: 'DARE', category: "wild" },
    { id: 9006, text: "找店員合照一張", engText: "Selfie with the bartender/staff", type: 'DARE', category: "wild" },
    { id: 9007, text: "跟陌生人玩一次剪刀石頭布，贏了才能回來", engText: "Win RPS against a stranger", type: 'DARE', category: "wild" },
    { id: 9008, text: "問一個路人「現在是民國幾年？」並裝作很驚訝", engText: "Ask stranger the year & look shocked", type: 'DARE', category: "wild" },
    { id: 9025, text: "向陌生人推薦這個 APP，並強迫他現場玩一次", engText: "Recommend this APP to a stranger & make them play once", type: 'DARE', category: "wild" },

    // Social Media / Phone
    { id: 9010, text: "拍一杯酒發IG限動，打上「今晚嫁給它」", engText: "IG Story: 'Marrying this drink tonight'", type: 'DARE', category: "wild" },
    { id: 9011, text: "發一則全黑限動，小字打「...」", engText: "Post black IG story with '...'", type: 'DARE', category: "wild" },
    { id: 9012, text: "隨機打給一個朋友，接通後唱兩句生日快樂歌再掛掉", engText: "Call friend, sing HBD, hang up", type: 'DARE', category: "wild" },
    { id: 9013, text: "開直播1分鐘，甚麼都不說只喝酒", engText: "Live stream 1 min silently drinking", type: 'DARE', category: "wild" },
    { id: 9014, text: "發一個投票問大家「我看起來醉了嗎？」", engText: "IG Poll: 'Do I look drunk?'", type: 'DARE', category: "mild" },

    // Self-Entertainment / Absurd
    { id: 9020, text: "去廁所對著鏡子裡的自己猜拳，直到贏為止", engText: "RPS with yourself in mirror until you win", type: 'DARE', category: "wild" },
    { id: 9021, text: "假裝自己在講電話，大聲說「幾千萬的案子我不在乎啦！」", engText: "Fake call: 'I don't care about the millions!'", type: 'DARE', category: "wild" },
    { id: 9022, text: "對著空氣乾杯，說「敬 孤獨」", engText: "Cheers to the air: 'To loneliness'", type: 'DARE', category: "mild" },
    { id: 9023, text: "模仿店裡放的音樂跳舞30秒", engText: "Dance to bgm for 30s", type: 'DARE', category: "wild" },
    { id: 9024, text: "深情看著自己的手掌心10秒", engText: "Stare at your palm deeply 10s", type: 'DARE', category: "mild" },
];

// --- Specialized 2-Player Content (1v1) ---
export const TWO_PLAYER_CONTENT: GameContent[] = [
    // Social / Drinking Dares
    { id: 8001, text: "喝一杯", engText: "Drink one full cup", type: 'DARE', category: "drinking" },
    { id: 8002, text: "指定對方喝半杯", engText: "Assign the other person to drink half a cup", type: 'DARE', category: "drinking" },
    { id: 8003, text: "去跟一位陌生人敬酒", engText: "Go cheers with a stranger", type: 'DARE', category: "wild" },
    { id: 8004, text: "拍一張兩人合照，上傳到你的限時動態", engText: "Post a selfie of you two on IG story", type: 'DARE', category: "wild" },
    { id: 8005, text: "自拍一張超醜的照片，上傳到IG限動", type: 'DARE', category: "wild" },
    { id: 8006, text: "上傳一則文不對題的限時動態 (例如拍地板說好飽)", type: 'DARE', category: "wild" },
    { id: 8007, text: "錄一段正在玩這個APP的影片發IG", type: 'DARE', category: "wild" },
    { id: 8008, text: "向陌生人推薦這個 APP，並強迫他現場玩一次", engText: "Recommend this APP to a stranger & make them play once", type: 'DARE', category: "wild" },

    // Bonding Truths (Mild/Deep)
    { id: 8010, text: "第一次見到對方的印象是什麼？", engText: "First impression of each other?", type: 'TRUTH', category: "mild" },
    { id: 8011, text: "覺得對方身上最迷人的部位是？", engText: "Most attractive part of them?", type: 'TRUTH', category: "mild" },
    { id: 8012, text: "如果要跟對方去一個地方旅行，會選哪裡？", engText: "Where would you travel with them?", type: 'TRUTH', category: "mild" },
    { id: 8013, text: "最近一次哭是因為什麼事情？", engText: "Why did you last cry?", type: 'TRUTH', category: "mild" },
    { id: 8014, text: "分享一個從來沒跟別人說過的秘密", engText: "Share a secret you've never told anyone", type: 'TRUTH', category: "wild" },
    { id: 8015, text: "你覺得我們兩個之間最像的地方是？", engText: "How are we most alike?", type: 'TRUTH', category: "mild" },

    // 18+ Physical Dares (Touch)
    { id: 8020, text: "深情親吻對方的脖子5秒", engText: "Kiss their neck for 5s", type: 'DARE', category: "r18" },
    { id: 8021, text: "用手指輕劃對方的嘴唇", engText: "Trace their lips with finger", type: 'DARE', category: "r18" },
    { id: 8022, text: "讓對方坐在你大腿上1分鐘", engText: "Sit on lap for 1 min", type: 'DARE', category: "r18" },
    { id: 8023, text: "把手伸進對方衣服裡摸背/腰", engText: "Touch back/waist under shirt", type: 'DARE', category: "r18" },
    { id: 8024, text: "在對方耳邊發出性感的呻吟聲", engText: "Moan sexily in their ear", type: 'DARE', category: "r18" },
    { id: 8025, text: "用舌頭舔一下對方的耳垂", engText: "Lick their earlobe", type: 'DARE', category: "r18" },

    // 18+ Sexual Truths
    { id: 8030, text: "你最喜歡的愛愛體位是什麼？", engText: "Favorite position?", type: 'TRUTH', category: "r18" },
    { id: 8031, text: "曾經對在場的人(對方)有過性幻想嗎？", engText: "Ever had a fantasy about the other person?", type: 'TRUTH', category: "r18" },
    { id: 8032, text: "身上哪個部位最敏感？", engText: "Most sensitive body part?", type: 'TRUTH', category: "r18" },
    { id: 8033, text: "描述一次你最難忘的性經驗", engText: "Describe your most memorable sex experience", type: 'TRUTH', category: "r18" },
    { id: 8034, text: "喜歡開燈做還是關燈做？", engText: "Lights on or off?", type: 'TRUTH', category: "r18" }
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
    minPlayers: 3, // Removed for 2P
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
    minPlayers: 4, // Removed for 2P
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
    minPlayers: 3, // Removed for 2P
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
    minPlayers: 6, // Removed for 2P
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