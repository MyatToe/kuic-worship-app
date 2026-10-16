/* KUIC Worship — © 2026 Myat Toe (Matthew). All rights reserved. Not licensed for reuse. */
const e=[{id:"free-simple-sunday",name:"Simple Sunday Service",church:"",note:"A complete Sunday order of worship in English. Change the Bible reading and songs each week; type the names on the heading slides.",settings:{bgStyle:"kuic",font:"noto",showTitle:!0},items:[{kind:"countdown",title:"⏱ Service starts in",text:`{title: Countdown}
{start_of_verse: Countdown}
Service starts in
{end_of_verse}
`,countdown:{label:"Service starts in",mode:"duration",minutes:5,time:"11:00"}},{kind:"deck",title:"Welcome",text:`{title: Welcome}

{start_of_verse: Welcome}
Welcome
Your church name
Let us prepare our hearts to worship the Lord
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Welcome",bg:"",subtitle:"Your church name",note:"Let us prepare our hearts to worship the Lord",logo:"behind"}]}},{kind:"bible",title:"Call to Worship — Psalm 95:1-7",text:`{title: Psalm 95:1-7}

{start_of_verse: 95:1-4}
1 Come, let us sing for joy to the LORD; let us shout to the Rock of our salvation!
2 Let us enter His presence with thanksgiving; let us make a joyful noise to Him in song.
3 For the LORD is a great God, a great King above all gods.
4 In His hand are the depths of the earth, and the mountain peaks belong to Him.
{end_of_verse}

{start_of_verse: 95:5-7}
5 The sea is His, for He made it, and His hands formed the dry land.
6 O come, let us worship and bow down; let us kneel before the LORD our Maker.
7 For He is our God, and we are the people of His pasture, the sheep under His care. Today, if you hear His voice,
{end_of_verse}
`},{kind:"song",title:"Holy, Holy, Holy",text:`{title: Holy, Holy, Holy}\r
{artist: Reginald Heber / John B. Dykes}\r
{genre: Hymn}\r
{flow: Opening}\r
{key: D}\r
{tempo: 92}\r
{time: 4/4}\r
{hymnal: 새찬송가 8장}\r
{title_ko: 거룩 거룩 거룩 전능하신 주님}\r
{score: holy-holy-holy.abc}\r
\r
{start_of_verse: Verse 1}\r
[D]Holy, holy, [Bm]holy! [G]Lord God Al[D]mighty!\r
Early in the [G]morn[A]ing our [E7]song shall rise to [A]Thee\r
[D]Holy, holy, [Bm]holy, [G]merciful and [D]mighty!\r
[G]God in three [D]Per[Bm]sons, [D/A]bless[A]ed [D]Trinity!\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[D]Holy, holy, [Bm]holy! [G]All the saints a[D]dore Thee\r
Casting down their [G]golden [A]crowns a[E7]round the glassy [A]sea\r
[D]Cherubim and [Bm]seraphim [G]falling down be[D]fore Thee\r
[G]Who wast, and [D]art, and [Bm]ever[D/A]more [A]shalt [D]be\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[D]Holy, holy, [Bm]holy! [G]Though the darkness [D]hide Thee\r
Though the eye of [G]sinful [A]man Thy [E7]glory may not [A]see\r
[D]Only Thou art [Bm]holy; [G]there is none be[D]side Thee\r
[G]Perfect in [D]power, in [Bm]love, [D/A]and [A]puri[D]ty\r
{end_of_verse}\r
\r
{start_of_verse: Verse 4}\r
[D]Holy, holy, [Bm]holy! [G]Lord God Al[D]mighty!\r
All Thy works shall [G]praise Thy [A]name, in [E7]earth, and sky, and [A]sea\r
[D]Holy, holy, [Bm]holy; [G]merciful and [D]mighty!\r
[G]God in three [D]Per[Bm]sons, [D/A]bless[A]ed [D]Trinity!\r
{end_of_verse}\r
`},{kind:"song",title:"Come Thou Fount of Every Blessing",text:`{title: Come Thou Fount of Every Blessing}\r
{artist: Robert Robinson / John Wyeth (Nettleton)}\r
{genre: Hymn}\r
{flow: Opening, Response}\r
{style: Traditional}\r
{key: D}\r
{tempo: 76}\r
{time: 4/4}\r
{hymnal: 새찬송가 28장}\r
{title_ko: 복의 근원 강림하사}\r
{score: come-thou-fount.abc}\r
\r
{start_of_verse: Verse 1}\r
[D]Come, Thou Fount of [G]every [D]blessing\r
Tune my [Bm]heart to [A]sing Thy [D]grace\r
[D]Streams of mercy, [G]never [D]ceasing\r
Call for [Bm]songs of [A]loudest [D]praise\r
Teach me some me[G]lodious [D]sonnet\r
Sung by [Bm]flaming [A]tongues a[D]bove\r
[D]Praise the mount, I'm [G]fixed up[D]on it\r
Mount of [A]Thy re[G]deeming [D]love\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[D]Here I raise mine [G]Eben[D]ezer\r
Hither [Bm]by Thy [A]help I'm [D]come\r
[D]And I hope, by [G]Thy good [D]pleasure\r
Safely [Bm]to ar[A]rive at [D]home\r
Jesus [G]sought me when a [D]stranger\r
Wandering [Bm]from the [A]fold of [D]God\r
[D]He, to rescue [G]me from [D]danger\r
Interposed His [A]precious [G]blood [D]\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[D]O to grace how [G]great a [D]debtor\r
Daily [Bm]I'm con[A]strained to [D]be\r
[D]Let Thy goodness, [G]like a [D]fetter\r
Bind my [Bm]wandering [A]heart to [D]Thee\r
Prone to [G]wander, Lord, I [D]feel it\r
Prone to [Bm]leave the [A]God I [D]love\r
[D]Here's my heart, O [G]take and [D]seal it\r
Seal it [A]for Thy [G]courts a[D]bove\r
{end_of_verse}\r
`},{kind:"deck",title:"Apostles' Creed",text:`{title: Apostles' Creed}

{start_of_verse: The Apostles' Creed}
The Apostles' Creed
I believe in God the Father Almighty, maker of heaven and earth:
And in Jesus Christ his only Son our Lord, who was conceived by the Holy Ghost, born of the Virgin Mary,
suffered under Pontius Pilate, was crucified, dead, and buried. He descended into hell;
{end_of_verse}

{start_of_verse: Slide 2}
the third day he rose again from the dead; he ascended into heaven, and sitteth on the right hand of God the Father Almighty;
from thence he shall come to judge the quick and the dead.
I believe in the Holy Ghost; the holy catholic Church; the communion of saints; the forgiveness of sins;
the resurrection of the body, and the life everlasting. Amen.
{end_of_verse}
`,deck:{slides:[{layout:"text",title:"The Apostles' Creed",bg:"",body:["I believe in God the Father Almighty, maker of heaven and earth:","And in Jesus Christ his only Son our Lord, who was conceived by the Holy Ghost, born of the Virgin Mary,","suffered under Pontius Pilate, was crucified, dead, and buried. He descended into hell;"],align:"center"},{layout:"text",title:"",bg:"",body:["the third day he rose again from the dead; he ascended into heaven, and sitteth on the right hand of God the Father Almighty;","from thence he shall come to judge the quick and the dead.","I believe in the Holy Ghost; the holy catholic Church; the communion of saints; the forgiveness of sins;","the resurrection of the body, and the life everlasting. Amen."],align:"center"}]}},{kind:"deck",title:"Prayer",text:`{title: Prayer}

{start_of_verse: Prayer}
Prayer
Pastoral prayer
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Prayer",bg:"",subtitle:"Pastoral prayer",name:""}]}},{kind:"bible",title:"Scripture Reading — Romans 12:1-8",text:`{title: Romans 12:1-8}

{start_of_verse: 12:1}
1 Therefore I urge you, brothers, on account of God’s mercy, to offer your bodies as living sacrifices, holy and pleasing to God, which is your spiritual service of worship.
{end_of_verse}

{start_of_verse: 12:2}
2 Do not be conformed to this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what is the good, pleasing, and perfect will of God.
{end_of_verse}

{start_of_verse: 12:3-4}
3 For by the grace given me I say to every one of you: Do not think of yourself more highly than you ought, but think of yourself with sober judgment, according to the measure of faith God has given you.
4 Just as each of us has one body with many members, and not all members have the same function,
{end_of_verse}

{start_of_verse: 12:5-7}
5 so in Christ we who are many are one body, and each member belongs to one another.
6 We have different gifts according to the grace given us. If one’s gift is prophecy, let him use it in proportion to his faith;
7 if it is serving, let him serve; if it is teaching, let him teach;
{end_of_verse}

{start_of_verse: 12:8}
8 if it is encouraging, let him encourage; if it is giving, let him give generously; if it is leading, let him lead with diligence; if it is showing mercy, let him do it cheerfully.
{end_of_verse}
`},{kind:"deck",title:"Sermon",text:`{title: Sermon}

{start_of_verse: Sermon}
Sermon
Sermon title
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Sermon",bg:"",subtitle:"Sermon title",name:""}]}},{kind:"song",title:"It Is Well with My Soul",text:`{title: It Is Well with My Soul}\r
{artist: Horatio Spafford / Philip Bliss}\r
{genre: Hymn}\r
{flow: Meditative, Response}\r
{style: Traditional}\r
{key: C}\r
{tempo: 72}\r
{time: 4/4}\r
{hymnal: 새찬송가 413장}\r
{title_ko: 내 평생에 가는 길}\r
{score: it-is-well.abc}\r
\r
{start_of_verse: Verse 1}\r
[C]When peace like a [F]river at[C]tendeth my way\r
When [C]sorrows like [G]sea billows [C]roll\r
Whatever my [F]lot, Thou hast [C]taught me to say\r
[C]It is well, [F]it is well with my [C]soul\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[C]It is well [F]with my [C]soul\r
[G]It is well, it is well with my [C]soul\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
[C]Though Satan should [F]buffet, though [C]trials should come\r
Let this [C]blest assurance [G]con[C]trol\r
That Christ hath re[F]garded my [C]helpless estate\r
And hath [C]shed His own [F]blood for my [C]soul\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
[C]My sin, oh the [F]bliss of this [C]glorious thought\r
My sin, not in [G]part but the [C]whole\r
Is nailed to the [F]cross and I [C]bear it no more\r
Praise the [C]Lord, praise the [F]Lord, O my [C]soul\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 4}\r
[C]And Lord haste the [F]day when my [C]faith shall be sight\r
The clouds be [C]rolled back as a [G]scroll\r
The trump shall re[F]sound and the [C]Lord shall descend\r
Even [C]so, it is [F]well with my [C]soul\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Offering",text:`{title: Offering}

{start_of_verse: Offering}
Offering
We give with thankful hearts
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Offering",bg:"",subtitle:"We give with thankful hearts",name:""}]}},{kind:"song",title:"Doxology (Praise God from Whom All Blessings Flow)",text:`{title: Doxology (Praise God from Whom All Blessings Flow)}\r
{artist: Thomas Ken / Louis Bourgeois (Old Hundredth)}\r
{genre: Hymn}\r
{flow: Response, Closing}\r
{style: Traditional}\r
{key: G}\r
{tempo: 80}\r
{time: 4/4}\r
{hymnal: 새찬송가 1장}\r
{title_ko: 만복의 근원 하나님}\r
{score: doxology.abc}\r
\r
{start_of_verse: Verse 1}\r
[G]Praise God, from [D]whom all [Em]blessings [C]flow\r
[G]Praise Him, all [D]creatures [Em]here be[D]low\r
[G]Praise Him a[C]bove, ye [G]heavenly [D]host\r
[G]Praise Father, [C]Son, and [G]Holy [D]Ghost. [G]A[C]men [G]\r
{end_of_verse}\r
`},{kind:"deck",title:"Announcements",text:`{title: Announcements}

{start_of_verse: Announcements}
Announcements
Welcome to everyone visiting today
This week
Day, time and place
Next Sunday
Add your announcement here
{end_of_verse}
`,deck:{slides:[{layout:"list",title:"Announcements",bg:"",items:["Welcome to everyone visiting today","This week","- Day, time and place","Next Sunday","- Add your announcement here"],columns:1,numbered:!0}]}},{kind:"deck",title:"Benediction",text:`{title: Benediction}

{start_of_verse: Benediction}
Benediction
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Benediction",bg:"",subtitle:"",name:""}]}},{kind:"deck",title:"Closing",text:`{title: Closing}

{start_of_verse: Go in peace}
Go in peace
Thank you for worshipping with us today
See you next Sunday
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Go in peace",bg:"",subtitle:"",note:`Thank you for worshipping with us today
See you next Sunday`,logo:""}]}}],category:"sunday",tags:["sunday","hymns","english"],languages:["en"],updatedAt:1791936e6,builtin:!0},{id:"free-bilingual-sunday",name:"Bilingual Sunday Service · 이중언어 주일예배",church:"",note:"English and 한국어 on one slide (Bible: BSB + 개역한글). Songs are public-domain hymns in English — add your own Korean lyrics if you have the right to use them.",settings:{bgStyle:"kuic",font:"nanumsquare",bilingual:!0,showTitle:!0},items:[{kind:"countdown",title:"⏱ Service starts in · 예배가 곧 시작됩니다",text:`{title: Countdown}
{start_of_verse: Countdown}
Service starts in · 예배가 곧 시작됩니다
{end_of_verse}
`,countdown:{label:"Service starts in · 예배가 곧 시작됩니다",mode:"duration",minutes:5,time:"11:00"}},{kind:"deck",title:"Welcome · 환영",text:`{title: Welcome · 환영}

{start_of_verse: Welcome · 환영합니다}
Welcome · 환영합니다
Your church name · 교회 이름
Let us prepare our hearts to worship
주님 앞에 마음을 준비합시다
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Welcome · 환영합니다",bg:"",subtitle:"Your church name · 교회 이름",note:`Let us prepare our hearts to worship
주님 앞에 마음을 준비합시다`,logo:"behind"}]}},{kind:"bible",title:"Call to Worship · 예배로의 부름 — Psalm 100:1-5",text:`{title: Psalm 100:1-5}

{start_of_verse: 100:1-2}
1 A Psalm of thanksgiving. Make a joyful noise to the LORD, all the earth.
2 Serve the LORD with gladness; come into His presence with joyful songs.
{end_of_verse}

{start_of_verse: 100:3}
3 Know that the LORD is God. It is He who made us, and we are His; we are His people, and the sheep of His pasture.
{end_of_verse}

{start_of_verse: 100:4-5}
4 Enter His gates with thanksgiving and His courts with praise; give thanks to Him and bless His name.
5 For the LORD is good, and His loving devotion endures forever; His faithfulness continues to all generations.
{end_of_verse}
`,title2:"시편 100장 1-5절",text2:`{title: 시편 100장 1-5절}

{start_of_verse: 100:1-2}
1 온 땅이여 여호와께 즐거이 부를찌어다
2 기쁨으로 여호와를 섬기며 노래하면서 그 앞에 나아갈찌어다
{end_of_verse}

{start_of_verse: 100:3}
3 여호와가 우리 하나님이신줄 너희는 알찌어다 그는 우리를 지으신 자시요 우리는 그의 것이니 그의 백성이요 그의 기르시는 양이로다
{end_of_verse}

{start_of_verse: 100:4-5}
4 감사함으로 그 문에 들어가며 찬송함으로 그 궁정에 들어가서 그에게 감사하며 그 이름을 송축할찌어다
5 대저 여호와는 선하시니 그 인자하심이 영원하고 그 성실하심이 대대에 미치리로다
{end_of_verse}
`},{kind:"song",title:"Joyful, Joyful, We Adore Thee",text:`{title: Joyful, Joyful, We Adore Thee}\r
{artist: Henry van Dyke / Ludwig van Beethoven}\r
{genre: Hymn}\r
{flow: Opening}\r
{style: Traditional}\r
{key: D}\r
{key_original: G}\r
{tempo: 100}\r
{time: 4/4}\r
{hymnal: 새찬송가 64장}\r
{title_ko: 기뻐하며 경배하세}\r
{score: joyful-joyful.abc}\r
\r
{start_of_verse: Verse 1}\r
[D]Joyful, joyful, we a[A]dore Thee\r
[D]God of glory, [A]Lord of [D]love\r
[D]Hearts unfold like [A]flowers before Thee\r
[D]Opening to the [A]sun a[D]bove\r
[Bm]Melt the clouds of [F#m]sin and sadness\r
[G]Drive the dark of [D]doubt away\r
[D]Giver of im[A7]mortal gladness\r
[D]Fill us with the [A7]light of [D]day\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[D]All Thy works with [A]joy surround Thee\r
[D]Earth and heaven re[A]flect Thy [D]rays\r
[D]Stars and angels [A]sing around Thee\r
[D]Center of un[A]broken [D]praise\r
[Bm]Field and forest, [F#m]vale and mountain\r
[G]Flowery meadow, [D]flashing sea\r
[D]Singing bird and [A7]flowing fountain\r
[D]Call us to re[A7]joice in [D]Thee\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[D]Thou art giving [A]and forgiving\r
[D]Ever blessing, [A]ever [D]blessed\r
[D]Wellspring of the [A]joy of living\r
[D]Ocean depth of [A]happy [D]rest\r
[Bm]Thou our Father, [F#m]Christ our Brother\r
[G]All who live in [D]love are Thine\r
[D]Teach us how to [A7]love each other\r
[D]Lift us to the [A7]joy di[D]vine\r
{end_of_verse}\r
\r
{start_of_verse: Verse 4}\r
[D]Mortals, join the [A]mighty chorus\r
[D]Which the morning [A]stars be[D]gan\r
[D]Father love is [A]reigning o'er us\r
[D]Brother love binds [A]man to [D]man\r
[Bm]Ever singing, [F#m]march we onward\r
[G]Victors in the [D]midst of strife\r
[D]Joyful music [A7]leads us sunward\r
[D]In the triumph [A7]song of [D]life\r
{end_of_verse}\r
`},{kind:"song",title:"Blessed Assurance",text:`{title: Blessed Assurance}\r
{artist: Fanny Crosby / Phoebe Knapp}\r
{genre: Hymn, Gospel}\r
{style: Traditional}\r
{flow: Opening}\r
{key: D}\r
{tempo: 60}\r
{time: 9/8}\r
{hymnal: 새찬송가 288장}\r
{title_ko: 예수를 나의 구주 삼고}\r
{score: blessed-assurance.abc}\r
\r
{start_of_verse: Verse 1}\r
[D]Blessed assurance, [G]Jesus is [D]mine!\r
O what a foretaste of [E7]glory di[A]vine!\r
[D]Heir of salvation, [G]purchase of [D]God\r
[G]Born of His [D]Spirit, [A]washed in His [D]blood\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[D]This is my story, [G]this is my [D]song\r
Praising my Savior [A]all the day long\r
[D]This is my story, [G]this is my [D]song\r
[G]Praising my [D]Savior [A]all the day [D]long\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
[D]Perfect submission, [G]perfect de[D]light\r
Visions of rapture now [E7]burst on my [A]sight\r
[D]Angels descending [G]bring from a[D]bove\r
[G]Echoes of [D]mercy, [A]whispers of [D]love\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
[D]Perfect submission, [G]all is at [D]rest\r
I in my Savior am [E7]happy and [A]blest\r
[D]Watching and waiting, [G]looking a[D]bove\r
[G]Filled with His [D]goodness, [A]lost in His [D]love\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Apostles' Creed · 사도신경",text:`{title: Apostles' Creed · 사도신경}

{start_of_verse: The Apostles' Creed}
The Apostles' Creed
I believe in God the Father Almighty, maker of heaven and earth:
And in Jesus Christ his only Son our Lord, who was conceived by the Holy Ghost, born of the Virgin Mary,
suffered under Pontius Pilate, was crucified, dead, and buried. He descended into hell;
{end_of_verse}

{start_of_verse: Slide 2}
the third day he rose again from the dead; he ascended into heaven, and sitteth on the right hand of God the Father Almighty;
from thence he shall come to judge the quick and the dead.
I believe in the Holy Ghost; the holy catholic Church; the communion of saints; the forgiveness of sins;
the resurrection of the body, and the life everlasting. Amen.
{end_of_verse}

{start_of_verse: 사도신경}
사도신경
전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며,
그 외아들 우리 주 예수 그리스도를 믿사오니, 이는 성령으로 잉태하사 동정녀 마리아에게 나시고,
본디오 빌라도에게 고난을 받으사, 십자가에 못 박혀 죽으시고, 장사한 지 사흘 만에 죽은 자 가운데서 다시 살아나시며,
{end_of_verse}

{start_of_verse: Slide 4}
하늘에 오르사, 전능하신 하나님 우편에 앉아 계시다가, 저리로서 산 자와 죽은 자를 심판하러 오시리라.
성령을 믿사오며, 거룩한 공회와, 성도가 서로 교통하는 것과, 죄를 사하여 주시는 것과,
몸이 다시 사는 것과, 영원히 사는 것을 믿사옵나이다. 아멘.
{end_of_verse}
`,deck:{slides:[{layout:"text",title:"The Apostles' Creed",bg:"",body:["I believe in God the Father Almighty, maker of heaven and earth:","And in Jesus Christ his only Son our Lord, who was conceived by the Holy Ghost, born of the Virgin Mary,","suffered under Pontius Pilate, was crucified, dead, and buried. He descended into hell;"],align:"center"},{layout:"text",title:"",bg:"",body:["the third day he rose again from the dead; he ascended into heaven, and sitteth on the right hand of God the Father Almighty;","from thence he shall come to judge the quick and the dead.","I believe in the Holy Ghost; the holy catholic Church; the communion of saints; the forgiveness of sins;","the resurrection of the body, and the life everlasting. Amen."],align:"center"},{layout:"text",title:"사도신경",bg:"",body:["전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며,","그 외아들 우리 주 예수 그리스도를 믿사오니, 이는 성령으로 잉태하사 동정녀 마리아에게 나시고,","본디오 빌라도에게 고난을 받으사, 십자가에 못 박혀 죽으시고, 장사한 지 사흘 만에 죽은 자 가운데서 다시 살아나시며,"],align:"center"},{layout:"text",title:"",bg:"",body:["하늘에 오르사, 전능하신 하나님 우편에 앉아 계시다가, 저리로서 산 자와 죽은 자를 심판하러 오시리라.","성령을 믿사오며, 거룩한 공회와, 성도가 서로 교통하는 것과, 죄를 사하여 주시는 것과,","몸이 다시 사는 것과, 영원히 사는 것을 믿사옵나이다. 아멘."],align:"center"}]}},{kind:"deck",title:"Prayer · 기도",text:`{title: Prayer · 기도}

{start_of_verse: Prayer · 기도}
Prayer · 기도
Representative prayer · 대표 기도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Prayer · 기도",bg:"",subtitle:"Representative prayer · 대표 기도",name:""}]}},{kind:"bible",title:"Bible Reading · 성경 봉독 — John 15:1-11",text:`{title: John 15:1-11}

{start_of_verse: 15:1-2}
1 "I am the true vine, and My Father is the keeper of the vineyard.
2 He cuts off every branch in Me that bears no fruit, and every branch that does bear fruit, He prunes to make it even more fruitful.
{end_of_verse}

{start_of_verse: 15:3}
3 You are already clean because of the word I have spoken to you.
{end_of_verse}

{start_of_verse: 15:4}
4 Remain in Me, and I will remain in you. Just as no branch can bear fruit by itself unless it remains in the vine, neither can you bear fruit unless you remain in Me.
{end_of_verse}

{start_of_verse: 15:5}
5 I am the vine and you are the branches. The one who remains in Me, and I in him, will bear much fruit. For apart from Me you can do nothing.
{end_of_verse}

{start_of_verse: 15:6}
6 If anyone does not remain in Me, he is like a branch that is thrown away and withers. Such branches are gathered up, thrown into the fire, and burned.
{end_of_verse}

{start_of_verse: 15:7-8}
7 If you remain in Me and My words remain in you, ask whatever you wish, and it will be done for you.
8 This is to My Father’s glory, that you bear much fruit, proving yourselves to be My disciples.
{end_of_verse}

{start_of_verse: 15:9-10}
9 As the Father has loved Me, so have I loved you. Remain in My love.
10 If you keep My commandments, you will remain in My love, just as I have kept My Father’s commandments and remain in His love.
{end_of_verse}

{start_of_verse: 15:11}
11 I have told you these things so that My joy may be in you and your joy may be complete.
{end_of_verse}
`,title2:"요한복음 15장 1-11절",text2:`{title: 요한복음 15장 1-11절}

{start_of_verse: 15:1-2}
1 내가 참 포도나무요 내 아버지는 그 농부라
2 무릇 내게 있어 과실을 맺지 아니하는 가지는 아버지께서 이를 제해 버리시고 무릇 과실을 맺는 가지는 더 과실을 맺게 하려하여 이를 깨끗케 하시느니라
{end_of_verse}

{start_of_verse: 15:3}
3 너희는 내가 일러준 말로 이미 깨끗하였으니
{end_of_verse}

{start_of_verse: 15:4}
4 내 안에 거하라 나도 너희 안에 거하리라 가지가 포도나무에 붙어 있지 아니하면 절로 과실을 맺을 수 없음 같이 너희도 내 안에 있지 아니하면 그러하리라
{end_of_verse}

{start_of_verse: 15:5}
5 나는 포도나무요 너희는 가지니 저가 내 안에, 내가 저 안에 있으면 이 사람은 과실을 많이 맺나니 나를 떠나서는 너희가 아무 것도 할 수 없음이라
{end_of_verse}

{start_of_verse: 15:6}
6 사람이 내 안에 거하지 아니하면 가지처럼 밖에 버리워 말라지나니 사람들이 이것을 모아다가 불에 던져 사르느니라
{end_of_verse}

{start_of_verse: 15:7-8}
7 너희가 내 안에 거하고 내 말이 너희 안에 거하면 무엇이든지 원하는대로 구하라 그리하면 이루리라
8 너희가 과실을 많이 맺으면 내 아버지께서 영광을 받으실 것이요 너희가 내 제자가 되리라
{end_of_verse}

{start_of_verse: 15:9-10}
9 아버지께서 나를 사랑하신 것 같이 나도 너희를 사랑하였으니 나의 사랑 안에 거하라
10 내가 아버지의 계명을 지켜 그의 사랑 안에 거하는것 같이 너희도 내 계명을 지키면 내 사랑 안에 거하리라
{end_of_verse}

{start_of_verse: 15:11}
11 내가 이것을 너희에게 이름은 내 기쁨이 너희 안에 있어 너희 기쁨을 충만하게 하려함이니라
{end_of_verse}
`},{kind:"deck",title:"Sermon · 설교",text:`{title: Sermon · 설교}

{start_of_verse: Sermon · 설교}
Sermon · 설교
Sermon title · 설교 제목
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Sermon · 설교",bg:"",subtitle:"Sermon title · 설교 제목",name:""}]}},{kind:"song",title:"Amazing Grace",text:`{title: Amazing Grace}\r
{artist: John Newton}\r
{genre: Hymn}\r
{pair: nagateun-joein}\r
{flow: Response}\r
{key: G}\r
{tempo: 76}\r
{time: 3/4}\r
{hymnal: 새찬송가 305장}\r
{title_ko: 나 같은 죄인 살리신}\r
{score: amazing-grace.abc}\r
# Add reference/practice videos like this (URL first, then an optional label):\r
# {youtube: https://youtu.be/VIDEO_ID Original}\r
# {practice: https://youtu.be/VIDEO_ID Guitar tutorial}\r
\r
{start_of_verse: Verse 1}\r
A[G]mazing [G7]grace, how [C]sweet the [G]sound\r
That saved a wretch like [D]me\r
I [G]once was [G7]lost, but [C]now am [G]found\r
Was [Em]blind, but [D]now I [G]see\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
'Twas [G]grace that [G7]taught my [C]heart to [G]fear\r
And grace my fears re[D]lieved\r
How [G]precious [G7]did that [C]grace ap[G]pear\r
The [Em]hour I [D]first be[G]lieved\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
Through [G]many [G7]dangers, [C]toils and [G]snares\r
I have already [D]come\r
'Tis [G]grace hath [G7]brought me [C]safe thus [G]far\r
And [Em]grace will [D]lead me [G]home\r
{end_of_verse}\r
\r
{start_of_verse: Verse 4}\r
When [G]we've been [G7]there ten [C]thousand [G]years\r
Bright shining as the [D]sun\r
We've [G]no less [G7]days to [C]sing God's [G]praise\r
Than [Em]when we'd [D]first be[G]gun\r
{end_of_verse}\r
`},{kind:"deck",title:"Offering · 헌금",text:`{title: Offering · 헌금}

{start_of_verse: Offering · 헌금}
Offering · 헌금
Offering prayer · 헌금 기도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Offering · 헌금",bg:"",subtitle:"Offering prayer · 헌금 기도",name:""}]}},{kind:"song",title:"Doxology (Praise God from Whom All Blessings Flow)",text:`{title: Doxology (Praise God from Whom All Blessings Flow)}\r
{artist: Thomas Ken / Louis Bourgeois (Old Hundredth)}\r
{genre: Hymn}\r
{flow: Response, Closing}\r
{style: Traditional}\r
{key: G}\r
{tempo: 80}\r
{time: 4/4}\r
{hymnal: 새찬송가 1장}\r
{title_ko: 만복의 근원 하나님}\r
{score: doxology.abc}\r
\r
{start_of_verse: Verse 1}\r
[G]Praise God, from [D]whom all [Em]blessings [C]flow\r
[G]Praise Him, all [D]creatures [Em]here be[D]low\r
[G]Praise Him a[C]bove, ye [G]heavenly [D]host\r
[G]Praise Father, [C]Son, and [G]Holy [D]Ghost. [G]A[C]men [G]\r
{end_of_verse}\r
`},{kind:"deck",title:"Announcements · 광고",text:`{title: Announcements · 광고}

{start_of_verse: Announcements · 광고}
Announcements · 광고
Welcome to everyone visiting today · 처음 오신 분들을 환영합니다
This week · 이번 주
Day, time and place
Next Sunday · 다음 주일
Add your announcement here
{end_of_verse}
`,deck:{slides:[{layout:"list",title:"Announcements · 광고",bg:"",items:["Welcome to everyone visiting today · 처음 오신 분들을 환영합니다","This week · 이번 주","- Day, time and place","Next Sunday · 다음 주일","- Add your announcement here"],columns:1,numbered:!0}]}},{kind:"deck",title:"Benediction · 축도",text:`{title: Benediction · 축도}

{start_of_verse: Benediction · 축도}
Benediction · 축도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Benediction · 축도",bg:"",subtitle:"",name:""}]}},{kind:"deck",title:"Closing · 마침",text:`{title: Closing · 마침}

{start_of_verse: Go in peace · 평안히 가십시오}
Go in peace · 평안히 가십시오
See you next Sunday
다음 주일에 뵙겠습니다
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Go in peace · 평안히 가십시오",bg:"",subtitle:"",note:`See you next Sunday
다음 주일에 뵙겠습니다`,logo:""}]}}],category:"bilingual",tags:["sunday","bilingual","korean","english"],languages:["en","ko"],updatedAt:1791936e6,builtin:!0},{id:"free-prayer-meeting",name:"Prayer Meeting · 기도회",church:"",note:"A quiet midweek prayer meeting: hymns of prayer, a short reading, prayer topics and the Lord’s Prayer. Edit the prayer topics each week.",settings:{bgStyle:"candles-dark",font:"nanumsquare",bilingual:!0,showTitle:!0},items:[{kind:"deck",title:"Welcome · 환영",text:`{title: Welcome · 환영}

{start_of_verse: Prayer Meeting · 기도회}
Prayer Meeting · 기도회
Your church name · 교회 이름
“Do not be anxious about anything…” (Philippians 4:6)
아무것도 염려하지 말고
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Prayer Meeting · 기도회",bg:"",subtitle:"Your church name · 교회 이름",note:`“Do not be anxious about anything…” (Philippians 4:6)
아무것도 염려하지 말고`,logo:"behind"}]}},{kind:"song",title:"Sweet Hour of Prayer",text:`{title: Sweet Hour of Prayer}\r
{artist: William W. Walford / William B. Bradbury}\r
{genre: Hymn}\r
{style: Traditional}\r
{flow: Meditative}\r
{key: G}\r
{key_original: D}\r
{tempo: 66}\r
{time: 4/4}\r
\r
{start_of_verse: Verse 1}\r
[G]Sweet hour of prayer! [D]sweet hour of [G]prayer!\r
That [C]calls me from a [G]world of [D]care\r
And [G]bids me at my [C]Father's [G]throne\r
Make [Am]all my wants and [D]wishes [G]known\r
In [G]seasons of dis[D]tress and [G]grief\r
My [C]soul has often [G]found re[D]lief\r
And [G]oft escaped the [C]tempter's [G]snare\r
By [Am]thy re[D]turn, sweet [G]hour of prayer\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[G]Sweet hour of prayer! [D]sweet hour of [G]prayer!\r
The [C]joys I feel, the [G]bliss I [D]share\r
Of [G]those whose anxious [C]spirits [G]burn\r
With [Am]strong desires for [D]thy re[G]turn\r
With [G]such I hasten [D]to the [G]place\r
Where [C]God my Savior [G]shows His [D]face\r
And [G]gladly take my [C]station [G]there\r
And [Am]wait for [D]thee, sweet [G]hour of prayer\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[G]Sweet hour of prayer! [D]sweet hour of [G]prayer!\r
Thy [C]wings shall my pe[G]tition [D]bear\r
To [G]Him whose truth and [C]faithful[G]ness\r
En[Am]gage the waiting [D]soul to [G]bless\r
And [G]since He bids me [D]seek His [G]face\r
Be[C]lieve His Word and [G]trust His [D]grace\r
I'll [G]cast on Him my [C]every [G]care\r
And [Am]wait for [D]thee, sweet [G]hour of prayer\r
{end_of_verse}\r
`},{kind:"song",title:"What a Friend We Have in Jesus",text:`{title: What a Friend We Have in Jesus}\r
{artist: Joseph Scriven / Charles Converse}\r
{genre: Hymn}\r
{flow: Meditative}\r
{style: Traditional}\r
{key: F}\r
{hymnal: 새찬송가 369장}\r
{title_ko: 죄짐 맡은 우리 구주}\r
{tempo: 80}\r
{time: 4/4}\r
{score: what-a-friend-we-have-in-jesus.abc}\r
\r
{start_of_verse: Verse 1}\r
[F]What a friend we have in [Bb]Jesus\r
[F]All our sins and griefs to [C]bear\r
[F]What a privilege to [Bb]carry\r
[F]Everything to [C]God in [F]prayer\r
[F]O what peace we often [Bb]forfeit\r
[F]O what needless pain we [C]bear\r
[F]All because we do not [Bb]carry\r
[F]Everything to [C]God in [F]prayer\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[F]Have we trials and tempta[Bb]tions\r
[F]Is there trouble any[C]where\r
[F]We should never be dis[Bb]couraged\r
[F]Take it to the [C]Lord in [F]prayer\r
[F]Can we find a friend so [Bb]faithful\r
[F]Who will all our sorrows [C]share\r
[F]Jesus knows our every [Bb]weakness\r
[F]Take it to the [C]Lord in [F]prayer\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[F]Are we weak and heavy-[Bb]laden\r
[F]Cumbered with a load of [C]care\r
[F]Precious Savior, still our [Bb]refuge\r
[F]Take it to the [C]Lord in [F]prayer\r
[F]Do thy friends despise, for[Bb]sake thee\r
[F]Take it to the Lord in [C]prayer\r
[F]In His arms He'll take and [Bb]shield thee\r
[F]Thou wilt find a [C]solace [F]there\r
{end_of_verse}\r
`},{kind:"bible",title:"Scripture · 말씀 — Philippians 4:4-7",text:`{title: Philippians 4:4-7}

{start_of_verse: 4:4-5}
4 Rejoice in the Lord always. I will say it again: Rejoice!
5 Let your gentleness be apparent to all. The Lord is near.
{end_of_verse}

{start_of_verse: 4:6}
6 Be anxious for nothing, but in everything, by prayer and petition, with thanksgiving, present your requests to God.
{end_of_verse}

{start_of_verse: 4:7}
7 And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.
{end_of_verse}
`,title2:"빌립보서 4장 4-7절",text2:`{title: 빌립보서 4장 4-7절}

{start_of_verse: 4:4-5}
4 주 안에서 항상 기뻐하라 내가 다시 말하노니 기뻐하라
5 너희 관용을 모든 사람에게 알게 하라 주께서 가까우시니라
{end_of_verse}

{start_of_verse: 4:6}
6 아무 것도 염려하지 말고 오직 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라
{end_of_verse}

{start_of_verse: 4:7}
7 그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라
{end_of_verse}
`},{kind:"deck",title:"Prayer topics · 기도 제목",text:`{title: Prayer topics · 기도 제목}

{start_of_verse: Prayer topics · 기도 제목}
Prayer topics · 기도 제목
For our church and its leaders · 교회와 지도자를 위하여
For the sick and those who grieve · 아픈 이들과 슬픈 이들을 위하여
For our families and the next generation · 가정과 다음 세대를 위하여
For our city and nation · 도시와 나라를 위하여
For missionaries and the nations · 선교사와 열방을 위하여
{end_of_verse}
`,deck:{slides:[{layout:"list",title:"Prayer topics · 기도 제목",bg:"",items:["For our church and its leaders · 교회와 지도자를 위하여","For the sick and those who grieve · 아픈 이들과 슬픈 이들을 위하여","For our families and the next generation · 가정과 다음 세대를 위하여","For our city and nation · 도시와 나라를 위하여","For missionaries and the nations · 선교사와 열방을 위하여"],columns:1,numbered:!0}]}},{kind:"deck",title:"Praying together · 합심 기도",text:`{title: Praying together · 합심 기도}

{start_of_verse: Praying together · 합심 기도}
Praying together · 합심 기도
Pray aloud or silently · 함께 기도합니다
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Praying together · 합심 기도",bg:"",subtitle:"Pray aloud or silently · 함께 기도합니다",name:""}]}},{kind:"song",title:"I Need Thee Every Hour",text:`{title: I Need Thee Every Hour}\r
{artist: Annie Hawks / Robert Lowry}\r
{genre: Hymn}\r
{flow: Meditative}\r
{style: Traditional}\r
{key: G}\r
{key_original: Ab}\r
{tempo: 72}\r
{time: 3/4}\r
{hymnal: 새찬송가 446장}\r
{title_ko: 주 음성 외에는}\r
{score: i-need-thee-every-hour.abc}\r
\r
{start_of_verse: Verse 1}\r
[G]I need Thee every [C]hour, most [G]gracious Lord\r
No [G]tender voice like [D]Thine can peace af[G]ford\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[G]I need Thee, O I need Thee\r
[C]Every hour I [G]need Thee\r
O [G]bless me now, my [D]Savior\r
I [G]come to [D]Thee [G]\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
[G]I need Thee every [C]hour, stay [G]Thou near by\r
Temp[G]tations lose their [D]power when Thou art [G]nigh\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
[G]I need Thee every [C]hour, in [G]joy or pain\r
Come [G]quickly and a[D]bide, or life is [G]vain\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 4}\r
[G]I need Thee every [C]hour, teach [G]me Thy will\r
And [G]Thy rich pro[D]mises in me ful[G]fill\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 5}\r
[G]I need Thee every [C]hour, most [G]Holy One\r
O [G]make me Thine in[D]deed, Thou blessed [G]Son\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Lord's Prayer · 주기도문",text:`{title: Lord's Prayer · 주기도문}

{start_of_verse: The Lord's Prayer}
The Lord's Prayer
Our Father, which art in heaven, hallowed be thy name.
Thy kingdom come. Thy will be done in earth, as it is in heaven.
Give us this day our daily bread. And forgive us our trespasses, as we forgive them that trespass against us.
And lead us not into temptation; but deliver us from evil. For thine is the kingdom, and the power, and the glory, for ever and ever. Amen.
{end_of_verse}

{start_of_verse: 주기도문}
주기도문
하늘에 계신 우리 아버지여, 이름이 거룩히 여김을 받으시오며, 나라이 임하옵시며,
뜻이 하늘에서 이룬 것 같이 땅에서도 이루어지이다.
오늘날 우리에게 일용할 양식을 주옵시고, 우리가 우리에게 죄 지은 자를 사하여 준 것 같이 우리 죄를 사하여 주옵시고,
우리를 시험에 들게 하지 마옵시고, 다만 악에서 구하옵소서. 대개 나라와 권세와 영광이 아버지께 영원히 있사옵나이다. 아멘.
{end_of_verse}
`,deck:{slides:[{layout:"text",title:"The Lord's Prayer",bg:"",body:["Our Father, which art in heaven, hallowed be thy name.","Thy kingdom come. Thy will be done in earth, as it is in heaven.","Give us this day our daily bread. And forgive us our trespasses, as we forgive them that trespass against us.","And lead us not into temptation; but deliver us from evil. For thine is the kingdom, and the power, and the glory, for ever and ever. Amen."],align:"center"},{layout:"text",title:"주기도문",bg:"",body:["하늘에 계신 우리 아버지여, 이름이 거룩히 여김을 받으시오며, 나라이 임하옵시며,","뜻이 하늘에서 이룬 것 같이 땅에서도 이루어지이다.","오늘날 우리에게 일용할 양식을 주옵시고, 우리가 우리에게 죄 지은 자를 사하여 준 것 같이 우리 죄를 사하여 주옵시고,","우리를 시험에 들게 하지 마옵시고, 다만 악에서 구하옵소서. 대개 나라와 권세와 영광이 아버지께 영원히 있사옵나이다. 아멘."],align:"center"}]}},{kind:"song",title:"Blest Be the Tie That Binds",text:`{title: Blest Be the Tie That Binds}\r
{artist: John Fawcett / Hans G. Nägeli}\r
{genre: Hymn}\r
{style: Traditional}\r
{flow: Closing}\r
{key: G}\r
{key_original: F}\r
{tempo: 72}\r
{time: 3/4}\r
{score: blest-be-the-tie-that-binds.abc}\r
\r
{start_of_verse: Verse 1}\r
[G]Blest be the tie that [C]binds\r
Our [G]hearts in Chris[D]tian [G]love\r
The [G]fellowship of [C]kindred [G]minds\r
Is [Em]like to [D]that a[G]bove\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[G]Before our Father's [C]throne\r
We [G]pour our ar[D]dent [G]prayers\r
Our [G]fears, our hopes, our [C]aims are [G]one\r
Our [Em]comforts [D]and our [G]cares\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[G]We share our mutual [C]woes\r
Our [G]mutual bur[D]dens [G]bear\r
And [G]often for each [C]other [G]flows\r
The [Em]sympa[D]thizing [G]tear\r
{end_of_verse}\r
\r
{start_of_verse: Verse 4}\r
[G]When we asunder [C]part\r
It [G]gives us in[D]ward [G]pain\r
But [G]we shall still be [C]joined in [G]heart\r
And [Em]hope to [D]meet a[G]gain\r
{end_of_verse}\r
`},{kind:"deck",title:"Closing · 마침",text:`{title: Closing · 마침}

{start_of_verse: Go in peace · 평안히 가십시오}
Go in peace · 평안히 가십시오
The Lord bless you and keep you
여호와는 네게 복을 주시고 너를 지키시기를 원하며
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Go in peace · 평안히 가십시오",bg:"",subtitle:"",note:`The Lord bless you and keep you
여호와는 네게 복을 주시고 너를 지키시기를 원하며`,logo:""}]}}],category:"prayer",tags:["prayer","midweek","bilingual"],languages:["en","ko"],updatedAt:1791936e6,builtin:!0},{id:"free-youth",name:"Youth / Young Adults Worship · 청년 예배",church:"",note:"Upbeat gospel songs, a message and small-group questions. Add your licensed modern worship songs (CCLI) from the library.",settings:{bgStyle:"stars-blue",font:"nanumsquare",bilingual:!0,showTitle:!0},items:[{kind:"countdown",title:"⏱ Starting soon · 곧 시작합니다",text:`{title: Countdown}
{start_of_verse: Countdown}
Starting soon · 곧 시작합니다
{end_of_verse}
`,countdown:{label:"Starting soon · 곧 시작합니다",mode:"duration",minutes:5,time:"11:00"}},{kind:"deck",title:"Welcome · 환영",text:`{title: Welcome · 환영}

{start_of_verse: Welcome · 환영합니다}
Welcome · 환영합니다
Your church name · 교회 이름
Youth & Young Adults Worship
청년 예배
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Welcome · 환영합니다",bg:"",subtitle:"Your church name · 교회 이름",note:`Youth & Young Adults Worship
청년 예배`,logo:"behind"}]}},{kind:"song",title:"Since Jesus Came into My Heart",text:`{title: Since Jesus Came into My Heart}\r
{artist: Rufus H. McDaniel / Charles H. Gabriel}\r
{genre: Gospel}\r
{flow: Opening}\r
{style: Traditional}\r
{key: G}\r
{key_original: A}\r
{tempo: 88}\r
{time: 4/4}\r
\r
{start_of_verse: Verse 1}\r
What a [G]wonderful change in my life has been wrought\r
Since Jesus came into my [D7]heart\r
I have [G]light in my soul for which long I had sought\r
Since Jesus came into my [D7]heart[G]\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[G]Since Jesus came into my [C]heart\r
Since Jesus came into my [G]heart\r
Floods of [G]joy o'er my soul like the sea billows [D7]roll\r
Since Jesus came into my [G]heart\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
I have [G]ceased from my wandering and going astray\r
Since Jesus came into my [D7]heart\r
And my [G]sins which were many are all washed away\r
Since Jesus came into my [D7]heart[G]\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
I'm pos[G]sessed of a hope that is steadfast and sure\r
Since Jesus came into my [D7]heart\r
And no [G]dark clouds of doubt now my pathway obscure\r
Since Jesus came into my [D7]heart[G]\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"song",title:"Standing on the Promises",text:`{title: Standing on the Promises}\r
{artist: R. Kelso Carter}\r
{genre: Gospel}\r
{flow: Opening}\r
{style: Traditional}\r
{key: C}\r
{key_original: Bb}\r
{tempo: 96}\r
{time: 4/4}\r
\r
{start_of_verse: Verse 1}\r
[C]Standing on the promises of [F]Christ my [C]King\r
Through e[C]ternal ages let His [G7]praises [C]ring\r
[C]Glory in the highest, [F]I will shout and [C]sing\r
Standing on the [G7]promises of [C]God\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[C]Standing, standing\r
Standing on the [F]promises of God my [C]Saviour\r
[C]Standing, standing\r
I'm standing on the [G7]promises of [C]God\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
[C]Standing on the promises that [F]cannot [C]fail\r
When the [C]howling storms of doubt and [G7]fear as[C]sail\r
By the [C]living Word of God I [F]shall pre[C]vail\r
Standing on the [G7]promises of [C]God\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
[C]Standing on the promises of [F]Christ the [C]Lord\r
[C]Bound to Him eter[G7]nally by love's strong [C]cord\r
[C]Overcoming daily with the [F]Spirit's [C]sword\r
Standing on the [G7]promises of [C]God\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 4}\r
[C]Standing on the promises I [F]now can [C]see\r
[C]Perfect, present cleansing in the [G7]blood for [C]me\r
[C]Standing in the liberty where [F]Christ makes [C]free\r
Standing on the [G7]promises of [C]God\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"song",title:"Be Thou My Vision",text:`{title: Be Thou My Vision}\r
{artist: Mary Byrne / Eleanor Hull (trans.) / Traditional Irish}\r
{genre: Hymn}\r
{flow: Meditative, Response}\r
{style: Traditional}\r
{key: D}\r
{key_original: Eb}\r
{tempo: 72}\r
{time: 3/4}\r
{score: be-thou-my-vision.abc}\r
\r
{start_of_verse: Verse 1}\r
[D]Be Thou my [G]Vision, O [D]Lord of my [Bm]heart\r
[D]Naught be all [G]else to me, [D]save that Thou [A]art\r
[D]Thou my best [G]Thought, by [D]day or by [Bm]night\r
[G]Waking or [D]sleeping, Thy [A]presence my [D]light\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[D]Be Thou my [G]Wisdom, and [D]Thou my true [Bm]Word\r
[D]I ever with [G]Thee and Thou [D]with me, [A]Lord\r
[D]Thou my great [G]Father, I [D]Thy true [Bm]son\r
[G]Thou in me [D]dwelling, and [A]I with Thee [D]one\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[D]Be Thou my battle [G]Shield, sword for the [D]fight\r
[D]Be Thou my [G]Dignity, [D]Thou my de[A]light\r
[D]Thou my soul's [G]Shelter, [D]Thou my high [Bm]Tower\r
[G]Raise Thou me [D]heavenward, [A]O Power of my [D]power\r
{end_of_verse}\r
\r
{start_of_verse: Verse 4}\r
[D]Riches I [G]heed not, nor [D]man's empty [Bm]praise\r
[D]Thou mine In[G]heritance, [D]now and al[A]ways\r
[D]Thou and Thou [G]only, [D]first in my [Bm]heart\r
[G]High King of [D]Heaven, my [A]Treasure Thou [D]art\r
{end_of_verse}\r
\r
{start_of_verse: Verse 5}\r
[D]High King of [G]Heaven, my [D]victory [Bm]won\r
[D]May I reach [G]Heaven's joys, O [D]bright Heaven's [A]Sun\r
[D]Heart of my [G]own heart, what[D]ever be[Bm]fall\r
[G]Still be my [D]Vision, O [A]Ruler of [D]all\r
{end_of_verse}\r
`},{kind:"deck",title:"Prayer · 기도",text:`{title: Prayer · 기도}

{start_of_verse: Prayer · 기도}
Prayer · 기도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Prayer · 기도",bg:"",subtitle:"",name:""}]}},{kind:"bible",title:"Scripture · 말씀 — 1 Timothy 4:12-16",text:`{title: 1 Timothy 4:12-16}

{start_of_verse: 4:12-13}
12 Let no one despise your youth, but set an example for the believers in speech, in conduct, in love, in faith, in purity.
13 Until I come, devote yourself to the public reading of Scripture, to exhortation, and to teaching.
{end_of_verse}

{start_of_verse: 4:14-15}
14 Do not neglect the gift that is in you, which was given you through the prophecy spoken over you at the laying on of the hands of the elders.
15 Be diligent in these matters and absorbed in them, so that your progress will be evident to all.
{end_of_verse}

{start_of_verse: 4:16}
16 Pay close attention to your life and to your teaching. Persevere in these things, for by so doing you will save both yourself and those who hear you.
{end_of_verse}
`,title2:"디모데전서 4장 12-16절",text2:`{title: 디모데전서 4장 12-16절}

{start_of_verse: 4:12-13}
12 누구든지 네 연소함을 업신여기지 못하게 하고 오직 말과 행실과 사랑과 믿음과 정절에 대하여 믿는 자에게 본이 되어
13 내가 이를 때까지 읽는 것과 권하는 것과 가르치는 것에 착념하라
{end_of_verse}

{start_of_verse: 4:14-15}
14 네 속에 있는 은사 곧 장로의 회에서 안수 받을 때에 예언으로 말미암아 받은 것을 조심 없이 말며
15 이 모든 일에 전심전력하여 너의 진보를 모든 사람에게 나타나게 하라
{end_of_verse}

{start_of_verse: 4:16}
16 네가 네 자신과 가르침을 삼가 이 일을 계속하라 이것을 행함으로 네 자신과 네게 듣는 자를 구원하리라
{end_of_verse}
`},{kind:"deck",title:"Message · 말씀",text:`{title: Message · 말씀}

{start_of_verse: Message · 말씀}
Message · 말씀
Message title · 제목
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Message · 말씀",bg:"",subtitle:"Message title · 제목",name:""}]}},{kind:"song",title:"I Have Decided to Follow Jesus",text:`{title: I Have Decided to Follow Jesus}\r
{artist: Traditional (attributed to Sadhu Sundar Singh)}\r
{genre: Gospel, Children}\r
{style: Traditional}\r
{flow: Response}\r
{key: G}\r
{tempo: 84}\r
{time: 4/4}\r
\r
{start_of_verse: Verse 1}\r
I have de[G]cided to follow Je[C]sus\r
I have de[G]cided to follow Je[D]sus\r
I have de[G]cided to follow Je[C]sus\r
No turning [G]back, no turning [D]back[G]\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
Though none go [G]with me, I still will fol[C]low\r
Though none go [G]with me, I still will fol[D]low\r
Though none go [G]with me, I still will fol[C]low\r
No turning [G]back, no turning [D]back[G]\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
The world be[G]hind me, the cross be[C]fore me\r
The world be[G]hind me, the cross be[D]fore me\r
The world be[G]hind me, the cross be[C]fore me\r
No turning [G]back, no turning [D]back[G]\r
{end_of_verse}\r
`},{kind:"deck",title:"Small groups · 소그룹 나눔",text:`{title: Small groups · 소그룹 나눔}

{start_of_verse: Small groups · 소그룹 나눔}
Small groups · 소그룹 나눔
What stood out to you in today’s message? · 오늘 말씀에서 마음에 남은 것은?
How can you live this out this week? · 이번 주에 어떻게 실천할 수 있을까요?
How can we pray for each other? · 서로를 위해 어떻게 기도할까요?
{end_of_verse}
`,deck:{slides:[{layout:"list",title:"Small groups · 소그룹 나눔",bg:"",items:["What stood out to you in today’s message? · 오늘 말씀에서 마음에 남은 것은?","How can you live this out this week? · 이번 주에 어떻게 실천할 수 있을까요?","How can we pray for each other? · 서로를 위해 어떻게 기도할까요?"],columns:1,numbered:!0}]}},{kind:"deck",title:"Announcements · 광고",text:`{title: Announcements · 광고}

{start_of_verse: Announcements · 광고}
Announcements · 광고
Welcome to everyone visiting today · 처음 오신 분들을 환영합니다
This week · 이번 주
Day, time and place
Next Sunday · 다음 주일
Add your announcement here
{end_of_verse}
`,deck:{slides:[{layout:"list",title:"Announcements · 광고",bg:"",items:["Welcome to everyone visiting today · 처음 오신 분들을 환영합니다","This week · 이번 주","- Day, time and place","Next Sunday · 다음 주일","- Add your announcement here"],columns:1,numbered:!0}]}},{kind:"song",title:"This Little Light of Mine",text:`{title: This Little Light of Mine}\r
{artist: Traditional spiritual}\r
{genre: Gospel}\r
{style: Traditional}\r
{flow: Closing}\r
{key: G}\r
{tempo: 108}\r
{time: 4/4}\r
\r
{start_of_chorus}\r
This little [G]light of mine, I'm gonna let it shine\r
This little light of [C]mine, I'm gonna let it [G]shine\r
This little light of mine, I'm gonna let it [Em]shine\r
Let it [G]shine, let it [D]shine, let it [G]shine\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 1}\r
Everywhere I [G]go, I'm gonna let it shine\r
Everywhere I [C]go, I'm gonna let it [G]shine\r
Everywhere I go, I'm gonna let it [Em]shine\r
Let it [G]shine, let it [D]shine, let it [G]shine\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 2}\r
Hide it under a [G]bushel? No! I'm gonna let it shine\r
Hide it under a [C]bushel? No! I'm gonna let it [G]shine\r
Hide it under a bushel? No! I'm gonna let it [Em]shine\r
Let it [G]shine, let it [D]shine, let it [G]shine\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Closing · 마침",text:`{title: Closing · 마침}

{start_of_verse: See you next week! · 다음 주에 만나요!}
See you next week! · 다음 주에 만나요!
Go and shine
세상의 빛으로 살아갑시다
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"See you next week! · 다음 주에 만나요!",bg:"",subtitle:"",note:`Go and shine
세상의 빛으로 살아갑시다`,logo:""}]}}],category:"youth",tags:["youth","young-adults","small-groups"],languages:["en","ko"],updatedAt:1791936e6,builtin:!0},{id:"free-communion",name:"Communion Sunday · 성찬 주일",church:"",note:"Sunday worship with the Lord’s Supper (1 Corinthians 11:23-26). The bread and cup slides quote the BSB and 개역한글.",settings:{bgStyle:"candles-church",font:"nanumsquare",bilingual:!0,showTitle:!0},items:[{kind:"deck",title:"Welcome · 환영",text:`{title: Welcome · 환영}

{start_of_verse: Welcome · 환영합니다}
Welcome · 환영합니다
Your church name · 교회 이름
Let us prepare our hearts to worship
주님 앞에 마음을 준비합시다
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Welcome · 환영합니다",bg:"",subtitle:"Your church name · 교회 이름",note:`Let us prepare our hearts to worship
주님 앞에 마음을 준비합시다`,logo:"behind"}]}},{kind:"song",title:"Praise to the Lord, the Almighty",text:`{title: Praise to the Lord, the Almighty}\r
{artist: Joachim Neander / Catherine Winkworth (trans.)}\r
{genre: Hymn}\r
{flow: Opening}\r
{style: Traditional}\r
{key: G}\r
{key_original: F}\r
{tempo: 84}\r
{time: 4/4}\r
{score: praise-to-the-lord-the-almighty.abc}\r
\r
{start_of_verse: Verse 1}\r
[G]Praise to the Lord, the Al[D]mighty, the [G]King of cre[C]ation\r
O my [G]soul, praise Him, for [D]He is thy [G]health and sal[D]vation\r
All ye who [G]hear\r
Now to His [C]temple draw [G]near\r
Join me in [D]glad ado[G]ration\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[G]Praise to the Lord, who o'er [D]all things so [G]wondrously [C]reigneth\r
Shelters thee [G]under His wings, yea, so [D]gently sus[G]tain[D]eth\r
Hast thou not [G]seen\r
How thy de[C]sires e'er have [G]been\r
Granted in [D]what He or[G]daineth\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[G]Praise to the Lord, who doth [D]prosper thy [G]work and de[C]fend thee\r
Surely His [G]goodness and mercy here [D]daily at[G]tend [D]thee\r
Ponder a[G]new\r
What the Al[C]mighty can [G]do\r
If with His [D]love He be[G]friend thee\r
{end_of_verse}\r
\r
{start_of_verse: Verse 4}\r
[G]Praise to the Lord! O let [D]all that is [G]in me a[C]dore Him\r
All that hath [G]life and breath, come [D]now with [G]praises be[D]fore Him\r
Let the A[G]men\r
Sound from His [C]people a[G]gain\r
Gladly for [D]aye we a[G]dore Him\r
{end_of_verse}\r
`},{kind:"song",title:"When I Survey the Wondrous Cross",text:`{title: When I Survey the Wondrous Cross}\r
{artist: Isaac Watts / Lowell Mason}\r
{genre: Easter}\r
{flow: Response}\r
{style: Traditional}\r
{key: G}\r
{key_original: F}\r
{tempo: 72}\r
{time: 4/4}\r
{score: when-i-survey-the-wondrous-cross.abc}\r
\r
{start_of_verse: Verse 1}\r
When I [G]survey the [C]wondrous [G]cross\r
On [Em]which the [D]Prince of [G]glory died\r
My [G]richest [C]gain I [G]count but loss\r
And [Em]pour con[D]tempt on [G]all my pride\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
For[G]bid it, [C]Lord, that [G]I should boast\r
Save [Em]in the [D]death of [G]Christ my God\r
All the [G]vain things that [C]charm me [G]most\r
I [Em]sacri[D]fice them [G]to His blood\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
See, [G]from His [C]head, His [G]hands, His feet\r
Sor[Em]row and [D]love flow [G]mingling down\r
Did e'er such [G]love and [C]sorrow [G]meet\r
Or [Em]thorns com[D]pose so [G]rich a crown\r
{end_of_verse}\r
\r
{start_of_verse: Verse 4}\r
Were the [G]whole realm of [C]nature [G]mine\r
That [Em]were a [D]present [G]far too small\r
Love so a[G]mazing, [C]so di[G]vine\r
De[Em]mands my [D]soul, my [G]life, my all\r
{end_of_verse}\r
`},{kind:"deck",title:"Apostles' Creed · 사도신경",text:`{title: Apostles' Creed · 사도신경}

{start_of_verse: The Apostles' Creed}
The Apostles' Creed
I believe in God the Father Almighty, maker of heaven and earth:
And in Jesus Christ his only Son our Lord, who was conceived by the Holy Ghost, born of the Virgin Mary,
suffered under Pontius Pilate, was crucified, dead, and buried. He descended into hell;
{end_of_verse}

{start_of_verse: Slide 2}
the third day he rose again from the dead; he ascended into heaven, and sitteth on the right hand of God the Father Almighty;
from thence he shall come to judge the quick and the dead.
I believe in the Holy Ghost; the holy catholic Church; the communion of saints; the forgiveness of sins;
the resurrection of the body, and the life everlasting. Amen.
{end_of_verse}

{start_of_verse: 사도신경}
사도신경
전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며,
그 외아들 우리 주 예수 그리스도를 믿사오니, 이는 성령으로 잉태하사 동정녀 마리아에게 나시고,
본디오 빌라도에게 고난을 받으사, 십자가에 못 박혀 죽으시고, 장사한 지 사흘 만에 죽은 자 가운데서 다시 살아나시며,
{end_of_verse}

{start_of_verse: Slide 4}
하늘에 오르사, 전능하신 하나님 우편에 앉아 계시다가, 저리로서 산 자와 죽은 자를 심판하러 오시리라.
성령을 믿사오며, 거룩한 공회와, 성도가 서로 교통하는 것과, 죄를 사하여 주시는 것과,
몸이 다시 사는 것과, 영원히 사는 것을 믿사옵나이다. 아멘.
{end_of_verse}
`,deck:{slides:[{layout:"text",title:"The Apostles' Creed",bg:"",body:["I believe in God the Father Almighty, maker of heaven and earth:","And in Jesus Christ his only Son our Lord, who was conceived by the Holy Ghost, born of the Virgin Mary,","suffered under Pontius Pilate, was crucified, dead, and buried. He descended into hell;"],align:"center"},{layout:"text",title:"",bg:"",body:["the third day he rose again from the dead; he ascended into heaven, and sitteth on the right hand of God the Father Almighty;","from thence he shall come to judge the quick and the dead.","I believe in the Holy Ghost; the holy catholic Church; the communion of saints; the forgiveness of sins;","the resurrection of the body, and the life everlasting. Amen."],align:"center"},{layout:"text",title:"사도신경",bg:"",body:["전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며,","그 외아들 우리 주 예수 그리스도를 믿사오니, 이는 성령으로 잉태하사 동정녀 마리아에게 나시고,","본디오 빌라도에게 고난을 받으사, 십자가에 못 박혀 죽으시고, 장사한 지 사흘 만에 죽은 자 가운데서 다시 살아나시며,"],align:"center"},{layout:"text",title:"",bg:"",body:["하늘에 오르사, 전능하신 하나님 우편에 앉아 계시다가, 저리로서 산 자와 죽은 자를 심판하러 오시리라.","성령을 믿사오며, 거룩한 공회와, 성도가 서로 교통하는 것과, 죄를 사하여 주시는 것과,","몸이 다시 사는 것과, 영원히 사는 것을 믿사옵나이다. 아멘."],align:"center"}]}},{kind:"deck",title:"Gloria Patri",text:`{title: Gloria Patri}

{start_of_verse: Gloria Patri}
Gloria Patri
Glory be to the Father, and to the Son, and to the Holy Ghost;
as it was in the beginning, is now, and ever shall be,
world without end. Amen. Amen.
{end_of_verse}
`,deck:{slides:[{layout:"text",title:"Gloria Patri",bg:"",body:["Glory be to the Father, and to the Son, and to the Holy Ghost;","as it was in the beginning, is now, and ever shall be,","world without end. Amen. Amen."],align:"center"}]}},{kind:"deck",title:"Prayer · 기도",text:`{title: Prayer · 기도}

{start_of_verse: Prayer · 기도}
Prayer · 기도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Prayer · 기도",bg:"",subtitle:"",name:""}]}},{kind:"bible",title:"Bible Reading · 성경 봉독 — 1 Corinthians 11:23-26",text:`{title: 1 Corinthians 11:23-26}

{start_of_verse: 11:23}
23 For I received from the Lord what I also passed on to you: The Lord Jesus, on the night He was betrayed, took bread,
{end_of_verse}

{start_of_verse: 11:24}
24 and when He had given thanks, He broke it and said, "This is My body, which is for you; do this in remembrance of Me."
{end_of_verse}

{start_of_verse: 11:25}
25 In the same way, after supper He took the cup, saying, "This cup is the new covenant in My blood; do this, as often as you drink it, in remembrance of Me."
{end_of_verse}

{start_of_verse: 11:26}
26 For as often as you eat this bread and drink this cup, you proclaim the Lord’s death until He comes.
{end_of_verse}
`,title2:"고린도전서 11장 23-26절",text2:`{title: 고린도전서 11장 23-26절}

{start_of_verse: 11:23}
23 내가 너희에게 전한 것은 주께 받은 것이니 곧 주 예수께서 잡히시던 밤에 떡을 가지사
{end_of_verse}

{start_of_verse: 11:24}
24 축사하시고 떼어 가라사대 이것은 너희를 위하는 내 몸이니 이것을 행하여 나를 기념하라 하시고
{end_of_verse}

{start_of_verse: 11:25}
25 식후에 또한 이와 같이 잔을 가지시고 가라사대 이 잔은 내 피로 세운 새 언약이니 이것을 행하여 마실 때마다 나를 기념하라 하셨으니
{end_of_verse}

{start_of_verse: 11:26}
26 너희가 이 떡을 먹으며 이 잔을 마실 때마다 주의 죽으심을 오실 때까지 전하는 것이니라
{end_of_verse}
`},{kind:"deck",title:"Sermon · 설교",text:`{title: Sermon · 설교}

{start_of_verse: Sermon · 설교}
Sermon · 설교
Sermon title · 설교 제목
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Sermon · 설교",bg:"",subtitle:"Sermon title · 설교 제목",name:""}]}},{kind:"deck",title:"The Lord's Supper · 성찬",text:`{title: The Lord's Supper · 성찬}

{start_of_verse: The Lord's Supper · 성찬}
The Lord's Supper · 성찬
Do this in remembrance of me · 나를 기념하라
{end_of_verse}

{start_of_verse: The bread · 떡}
The bread · 떡
and when He had given thanks, He broke it and said, "This is My body, which is for you; do this in remembrance of Me."
축사하시고 떼어 가라사대 이것은 너희를 위하는 내 몸이니 이것을 행하여 나를 기념하라 하시고
{end_of_verse}

{start_of_verse: The cup · 잔}
The cup · 잔
In the same way, after supper He took the cup, saying, "This cup is the new covenant in My blood; do this, as often as you drink it, in remembrance of Me."
식후에 또한 이와 같이 잔을 가지시고 가라사대 이 잔은 내 피로 세운 새 언약이니 이것을 행하여 마실 때마다 나를 기념하라 하셨으니
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"The Lord's Supper · 성찬",bg:"",subtitle:"Do this in remembrance of me · 나를 기념하라",name:""},{layout:"text",title:"The bread · 떡",bg:"",body:['and when He had given thanks, He broke it and said, "This is My body, which is for you; do this in remembrance of Me."',"축사하시고 떼어 가라사대 이것은 너희를 위하는 내 몸이니 이것을 행하여 나를 기념하라 하시고"],align:"center"},{layout:"text",title:"The cup · 잔",bg:"",body:['In the same way, after supper He took the cup, saying, "This cup is the new covenant in My blood; do this, as often as you drink it, in remembrance of Me."',"식후에 또한 이와 같이 잔을 가지시고 가라사대 이 잔은 내 피로 세운 새 언약이니 이것을 행하여 마실 때마다 나를 기념하라 하셨으니"],align:"center"}]}},{kind:"song",title:"Let Us Break Bread Together",text:`{title: Let Us Break Bread Together}\r
{artist: Traditional spiritual}\r
{genre: Gospel, Communion}\r
{style: Spiritual}\r
{flow: Response}\r
{key: F}\r
{key_original: Eb}\r
{tempo: 66}\r
{time: 4/4}\r
{hymnal: 새찬송가 231장}\r
{title_ko: 우리 다 같이 무릎 꿇고서}\r
\r
{start_of_verse: Verse 1}\r
[F]Let us break bread together on our [Bb]knees\r
Let us break [F]bread together on our [C7]knees\r
When I fall on my knees with my face to the rising [F]sun\r
O Lord, have [C7]mercy on [F]me\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[F]Let us drink wine together on our [Bb]knees\r
Let us drink [F]wine together on our [C7]knees\r
When I fall on my knees with my face to the rising [F]sun\r
O Lord, have [C7]mercy on [F]me\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[F]Let us praise God together on our [Bb]knees\r
Let us praise [F]God together on our [C7]knees\r
When I fall on my knees with my face to the rising [F]sun\r
O Lord, have [C7]mercy on [F]me\r
{end_of_verse}\r
`},{kind:"song",title:"Jesus Paid It All",text:`{title: Jesus Paid It All}\r
{artist: Elvina M. Hall / John T. Grape}\r
{genre: Hymn, Communion}\r
{flow: Response}\r
{style: Traditional}\r
{key: D}\r
{tempo: 72}\r
{time: 4/4}\r
\r
{start_of_verse: Verse 1}\r
I [D]hear the Saviour say\r
"Thy [G]strength indeed is [D]small\r
Child of [D]weakness, watch and [A7]pray\r
Find in [D]Me thine all in all"\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[D]Jesus paid it [G]all\r
[D]All to Him I [A7]owe\r
[D]Sin had left a [G]crimson stain\r
He [D]washed it [A7]white as [D]snow\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
Lord, now in[D]deed I find\r
Thy [G]power, and Thine a[D]lone\r
Can change the [D]leper's spots\r
And [A7]melt the heart of [D]stone\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
For [D]nothing good have I\r
Where[G]by Thy grace to [D]claim\r
I'll wash my [D]garments white\r
In the [A7]blood of Calvary's [D]Lamb\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 4}\r
And [D]when before the throne\r
I [G]stand in Him com[D]plete\r
"Jesus [D]died my soul to save"\r
My [A7]lips shall still re[D]peat\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Offering · 헌금",text:`{title: Offering · 헌금}

{start_of_verse: Offering · 헌금}
Offering · 헌금
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Offering · 헌금",bg:"",subtitle:"",name:""}]}},{kind:"song",title:"Doxology (Praise God from Whom All Blessings Flow)",text:`{title: Doxology (Praise God from Whom All Blessings Flow)}\r
{artist: Thomas Ken / Louis Bourgeois (Old Hundredth)}\r
{genre: Hymn}\r
{flow: Response, Closing}\r
{style: Traditional}\r
{key: G}\r
{tempo: 80}\r
{time: 4/4}\r
{hymnal: 새찬송가 1장}\r
{title_ko: 만복의 근원 하나님}\r
{score: doxology.abc}\r
\r
{start_of_verse: Verse 1}\r
[G]Praise God, from [D]whom all [Em]blessings [C]flow\r
[G]Praise Him, all [D]creatures [Em]here be[D]low\r
[G]Praise Him a[C]bove, ye [G]heavenly [D]host\r
[G]Praise Father, [C]Son, and [G]Holy [D]Ghost. [G]A[C]men [G]\r
{end_of_verse}\r
`},{kind:"deck",title:"Benediction · 축도",text:`{title: Benediction · 축도}

{start_of_verse: Benediction · 축도}
Benediction · 축도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Benediction · 축도",bg:"",subtitle:"",name:""}]}},{kind:"deck",title:"Closing · 마침",text:`{title: Closing · 마침}

{start_of_verse: Go in peace · 평안히 가십시오}
Go in peace · 평안히 가십시오
See you next Sunday
다음 주일에 뵙겠습니다
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Go in peace · 평안히 가십시오",bg:"",subtitle:"",note:`See you next Sunday
다음 주일에 뵙겠습니다`,logo:""}]}}],category:"communion",tags:["communion","lords-supper","sunday"],languages:["en","ko"],updatedAt:1791936e6,builtin:!0},{id:"free-christmas",name:"Christmas Service · 성탄 예배",church:"",note:"Christmas carols and the Christmas story from Luke 2.",settings:{bgStyle:"christmas-lights",font:"nanumsquare",bilingual:!0,showTitle:!0},items:[{kind:"deck",title:"Welcome · 환영",text:`{title: Welcome · 환영}

{start_of_verse: Merry Christmas · 성탄을 축하합니다}
Merry Christmas · 성탄을 축하합니다
Your church name · 교회 이름
For unto us a child is born
한 아기가 우리에게 났고
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Merry Christmas · 성탄을 축하합니다",bg:"",subtitle:"Your church name · 교회 이름",note:`For unto us a child is born
한 아기가 우리에게 났고`,logo:"behind"}]}},{kind:"song",title:"O Come, All Ye Faithful",text:`{title: O Come, All Ye Faithful}\r
{artist: John Francis Wade / Frederick Oakeley}\r
{genre: Christmas}\r
{flow: Opening}\r
{style: Carol}\r
{key: G}\r
{hymnal: 새찬송가 122장}\r
{title_ko: 참 반가운 성도여}\r
{tempo: 96}\r
{time: 4/4}\r
{score: o-come-all-ye-faithful.abc}\r
\r
{start_of_verse: Verse 1}\r
O [G]come, all ye [D]faithful, joyful and tri[G]umphant\r
O [G]come ye, O [D]come ye to Beth[G]lehem\r
[Em]Come and be[D]hold Him, born the King of [G]angels\r
{end_of_verse}\r
\r
{start_of_chorus}\r
O [G]come, let us a[D]dore Him\r
O [G]come, let us a[D]dore Him\r
O [G]come, let us a[C]dore [G]Him\r
Christ the [D]Lord[G]\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
God of [G]God, Light of [D]Light\r
Lo, He abhors not the [G]Virgin's womb\r
Very [Em]God, begotten [D]not created\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
Sing, [G]choirs of [D]angels, sing in exul[G]tation\r
Sing, [G]all ye citi[D]zens of heaven a[G]bove\r
[Em]Glory to [D]God, in the high[G]est\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 4}\r
Yea, [G]Lord, we greet [D]Thee, born this happy [G]morning\r
[G]Jesus, to Thee be [D]glory [G]given\r
[Em]Word of the [D]Father, now in flesh ap[G]pearing\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"song",title:"Joy to the World",text:`{title: Joy to the World}\r
{artist: Isaac Watts / George Frideric Handel}\r
{genre: Christmas}\r
{flow: Opening}\r
{style: Carol}\r
{key: D}\r
{tempo: 100}\r
{time: 4/4}\r
{hymnal: 새찬송가 115장}\r
{title_ko: 기쁘다 구주 오셨네}\r
{score: joy-to-the-world.abc}\r
\r
{start_of_verse: Verse 1}\r
[D]Joy to the world, the [A]Lord is come\r
Let [D]earth re[G]ceive her [D]King\r
Let every [D]heart pre[G]pare Him [D]room\r
And heaven and [A]nature [D]sing\r
And heaven and [A]nature [D]sing\r
And heaven, and heaven and [D]nature [A]sing[D]\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[D]Joy to the world, the [A]Saviour reigns\r
Let [D]men their [G]songs em[D]ploy\r
While fields and [D]floods, rocks, [G]hills and [D]plains\r
Repeat the sounding [A]joy\r
Repeat the sounding [A]joy\r
Repeat, repeat the sounding [D]joy[A][D]\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[D]No more let sins and [A]sorrows grow\r
Nor [D]thorns in[G]fest the [D]ground\r
He comes to [D]make His [G]blessings [D]flow\r
Far as the curse is [A]found\r
Far as the curse is [A]found\r
Far as, far as the curse is [D]found[A][D]\r
{end_of_verse}\r
\r
{start_of_verse: Verse 4}\r
[D]He rules the world with [A]truth and grace\r
And [D]makes the [G]nations [D]prove\r
The glories of His [D]righteous[G]ness\r
And wonders of His [A]love\r
And wonders of His [A]love\r
And wonders, wonders of His [D]love[A][D]\r
{end_of_verse}\r
`},{kind:"deck",title:"Prayer · 기도",text:`{title: Prayer · 기도}

{start_of_verse: Prayer · 기도}
Prayer · 기도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Prayer · 기도",bg:"",subtitle:"",name:""}]}},{kind:"bible",title:"The Christmas Story · 성탄 이야기 — Luke 2:1-14",text:`{title: Luke 2:1-14}

{start_of_verse: 2:1-3}
1 Now in those days a decree went out from Caesar Augustus that a census should be taken of the whole empire.
2 This was the first census to take place while Quirinius was governor of Syria.
3 And everyone went to his own town to register.
{end_of_verse}

{start_of_verse: 2:4}
4 So Joseph also went up from Nazareth in Galilee to Judea, to the city of David called Bethlehem, since he was from the house and line of David.
{end_of_verse}

{start_of_verse: 2:5-6}
5 He went there to register with Mary, who was pledged to him in marriage and was expecting a child.
6 While they were there, the time came for her Child to be born.
{end_of_verse}

{start_of_verse: 2:7-8}
7 And she gave birth to her firstborn, a Son. She wrapped Him in swaddling cloths and laid Him in a manger, because there was no room for them in the inn.
8 And there were shepherds residing in the fields nearby, keeping watch over their flocks by night.
{end_of_verse}

{start_of_verse: 2:9}
9 Just then an angel of the Lord stood before them, and the glory of the Lord shone around them, and they were terrified.
{end_of_verse}

{start_of_verse: 2:10-11}
10 But the angel said to them, "Do not be afraid! For behold, I bring you good news of great joy that will be for all the people:
11 Today in the city of David a Savior has been born to you. He is Christ the Lord!
{end_of_verse}

{start_of_verse: 2:12-13}
12 And this will be a sign to you: You will find a baby wrapped in swaddling cloths and lying in a manger."
13 And suddenly there appeared with the angel a great multitude of the heavenly host, praising God and saying:
{end_of_verse}

{start_of_verse: 2:14}
14 "Glory to God in the highest, and on earth peace to men on whom His favor rests!"
{end_of_verse}
`,title2:"누가복음 2장 1-14절",text2:`{title: 누가복음 2장 1-14절}

{start_of_verse: 2:1-3}
1 이때에 가이사 아구스도가 영을 내려 천하로 다 호적하라 하였으니
2 이 호적은 구레뇨가 수리아 총독 되었을 때에 첫번 한것이라
3 모든 사람이 호적하러 각각 고향으로 돌아가매
{end_of_verse}

{start_of_verse: 2:4}
4 요셉도 다윗의 집 족속인 고로 갈릴리 나사렛 동네에서 유대를 향하여 베들레헴이라 하는 다윗의 동네로
{end_of_verse}

{start_of_verse: 2:5-6}
5 그 정혼한 마리아와 함께 호적하러 올라가니 마리아가 이미 잉태되었더라
6 거기 있을 그 때에 해산할 날이 차서
{end_of_verse}

{start_of_verse: 2:7-8}
7 맏아들을 낳아 강보로 싸서 구유에 뉘었으니 이는 사관에 있을 곳이 없음이러라
8 그 지경에 목자들이 밖에서 밤에 자기 양떼를 지키더니
{end_of_verse}

{start_of_verse: 2:9}
9 주의 사자가 곁에 서고 주의 영광이 저희를 두루 비취매 크게 무서워하는지라
{end_of_verse}

{start_of_verse: 2:10-11}
10 천사가 이르되 무서워 말라 보라 내가 온 백성에게 미칠 큰 기쁨의 좋은 소식을 너희에게 전하노라
11 오늘날 다윗의 동네에 너희를 위하여 구주가 나셨으니 곧 그리스도 주시니라
{end_of_verse}

{start_of_verse: 2:12-13}
12 너희가 가서 강보에 싸여 구유에 누인 아기를 보리니 이것이 너희에게 표적이니라 하더니
13 홀연히 허다한 천군이 그 천사와 함께 있어 하나님을 찬송하여 가로되
{end_of_verse}

{start_of_verse: 2:14}
14 지극히 높은 곳에서는 하나님께 영광이요 땅에서는 기뻐하심을 입은 사람들 중에 평화로다 하니라
{end_of_verse}
`},{kind:"song",title:"Silent Night",text:`{title: Silent Night}\r
{title_ko: 고요한 밤 거룩한 밤}\r
{hymnal: 새찬송가 109장}\r
{artist: Joseph Mohr / Franz Gruber}\r
{genre: Christmas}\r
{flow: Meditative}\r
{style: Carol}\r
{key: C}\r
{key_original: Bb}\r
{tempo: 66}\r
{time: 3/4}\r
{score: silent-night.abc}\r
\r
{start_of_verse: Verse 1}\r
[C]Silent night, [G]holy night\r
[G7]All is calm, [C]all is bright\r
Round yon [F]virgin, mother and [C]child\r
Holy infant so [F]tender and [C]mild\r
Sleep in heavenly [G]peace\r
Sleep in heavenly [C]peace\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[C]Silent night, [G]holy night\r
[G7]Shepherds quake [C]at the sight\r
Glories [F]stream from heaven a[C]far\r
Heavenly hosts sing [F]Alle[C]luia\r
Christ the Saviour is [G]born\r
Christ the Saviour is [C]born\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[C]Silent night, [G]holy night\r
[G7]Son of God, [C]love's pure light\r
Radiant [F]beams from thy holy [C]face\r
With the dawn of re[F]deeming [C]grace\r
Jesus, Lord, at thy [G]birth\r
Jesus, Lord, at thy [C]birth\r
{end_of_verse}\r
`},{kind:"deck",title:"Sermon · 설교",text:`{title: Sermon · 설교}

{start_of_verse: Sermon · 설교}
Sermon · 설교
Sermon title · 설교 제목
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Sermon · 설교",bg:"",subtitle:"Sermon title · 설교 제목",name:""}]}},{kind:"song",title:"Hark! The Herald Angels Sing",text:`{title: Hark! The Herald Angels Sing}\r
{artist: Charles Wesley / Felix Mendelssohn}\r
{genre: Christmas}\r
{flow: Opening}\r
{style: Carol}\r
{key: G}\r
{tempo: 104}\r
{time: 4/4}\r
{hymnal: 새찬송가 126장}\r
{title_ko: 천사 찬송하기를}\r
{score: hark-the-herald-angels-sing.abc}\r
\r
{start_of_verse: Verse 1}\r
[G]Hark! the herald [D]angels sing\r
"[G]Glory to the [D]newborn [G]King\r
[G]Peace on earth and [D]mercy mild\r
[G]God and sinners [D]recon[G]ciled"\r
[C]Joyful, all ye [G]nations rise\r
[Am]Join the triumph [D]of the skies\r
[G]With the angelic [D]host pro[G]claim\r
"[C]Christ is [G]born in [D]Beth[G]lehem"\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[G]Hark! the herald [D]angels sing\r
"[G]Glory to the [D]newborn [G]King"\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
[G]Christ, by highest [D]heaven adored\r
[G]Christ, the everlasting [D]Lord\r
[G]Late in time be[D]hold Him come\r
[G]Offspring of a [D]Vir[G]gin's womb\r
[C]Veiled in flesh the [G]Godhead see\r
[Am]Hail the incar[D]nate Deity\r
[G]Pleased as man with [D]men to dwell\r
[C]Jesus, our Em[G]manu[D]el[G]\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
[G]Hail the heaven-born [D]Prince of Peace\r
[G]Hail the Sun of [D]Righteous[G]ness\r
[G]Light and life to [D]all He brings\r
[G]Risen with healing [D]in His [G]wings\r
[C]Mild He lays His [G]glory by\r
[Am]Born that man no [D]more may die\r
[G]Born to raise the [D]sons of earth\r
[C]Born to give them [G]second [D]birth[G]\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Offering · 헌금",text:`{title: Offering · 헌금}

{start_of_verse: Offering · 헌금}
Offering · 헌금
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Offering · 헌금",bg:"",subtitle:"",name:""}]}},{kind:"deck",title:"Announcements · 광고",text:`{title: Announcements · 광고}

{start_of_verse: Announcements · 광고}
Announcements · 광고
Welcome to everyone visiting today · 처음 오신 분들을 환영합니다
This week · 이번 주
Day, time and place
Next Sunday · 다음 주일
Add your announcement here
{end_of_verse}
`,deck:{slides:[{layout:"list",title:"Announcements · 광고",bg:"",items:["Welcome to everyone visiting today · 처음 오신 분들을 환영합니다","This week · 이번 주","- Day, time and place","Next Sunday · 다음 주일","- Add your announcement here"],columns:1,numbered:!0}]}},{kind:"deck",title:"Benediction · 축도",text:`{title: Benediction · 축도}

{start_of_verse: Benediction · 축도}
Benediction · 축도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Benediction · 축도",bg:"",subtitle:"",name:""}]}},{kind:"song",title:"Go, Tell It on the Mountain",text:`{title: Go, Tell It on the Mountain}\r
{artist: Traditional spiritual}\r
{genre: Gospel, Christmas}\r
{flow: Closing}\r
{style: Spiritual}\r
{key: F}\r
{tempo: 108}\r
{time: 4/4}\r
\r
{start_of_chorus}\r
[F]Go, tell it on the mountain\r
Over the [Bb]hills and every[F]where\r
Go, tell it on the mountain\r
That [C7]Jesus Christ is [F]born\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 1}\r
While [F]shepherds kept their watching\r
O'er [Bb]silent flocks by [F]night\r
Behold, throughout the heavens\r
There [C7]shone a holy [F]light\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 2}\r
The [F]shepherds feared and trembled\r
When [Bb]lo! above the [F]earth\r
Rang out the angel chorus\r
That [C7]hailed our Saviour's [F]birth\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
Down [F]in a lowly manger\r
The [Bb]humble Christ was [F]born\r
And God sent us salvation\r
That [C7]blessed Christmas [F]morn\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Closing · 마침",text:`{title: Closing · 마침}

{start_of_verse: Merry Christmas! · 메리 크리스마스!}
Merry Christmas! · 메리 크리스마스!
Glory to God in the highest
지극히 높은 곳에서는 하나님께 영광이요
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Merry Christmas! · 메리 크리스마스!",bg:"",subtitle:"",note:`Glory to God in the highest
지극히 높은 곳에서는 하나님께 영광이요`,logo:""}]}}],category:"christmas",tags:["christmas","carols","luke-2"],languages:["en","ko"],updatedAt:1791936e6,builtin:!0},{id:"free-easter",name:"Easter Service · 부활절 예배",church:"",note:"Easter hymns with the resurrection accounts from Luke 24 and Matthew 28.",settings:{bgStyle:"easter-lilies",font:"nanumsquare",bilingual:!0,showTitle:!0},items:[{kind:"deck",title:"Welcome · 환영",text:`{title: Welcome · 환영}

{start_of_verse: He is risen! · 주님이 부활하셨습니다!}
He is risen! · 주님이 부활하셨습니다!
Your church name · 교회 이름
He is risen indeed!
참으로 부활하셨습니다!
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"He is risen! · 주님이 부활하셨습니다!",bg:"",subtitle:"Your church name · 교회 이름",note:`He is risen indeed!
참으로 부활하셨습니다!`,logo:"behind"}]}},{kind:"bible",title:"Call to Worship · 예배로의 부름 — Luke 24:1-8",text:`{title: Luke 24:1-8}

{start_of_verse: 24:1-3}
1 On the first day of the week, very early in the morning, the women came to the tomb, bringing the spices they had prepared.
2 They found the stone rolled away from the tomb,
3 but when they entered, they did not find the body of the Lord Jesus.
{end_of_verse}

{start_of_verse: 24:4-5}
4 While they were puzzling over this, suddenly two men in radiant apparel stood beside them.
5 As the women bowed their faces to the ground in terror, the two men asked them, "Why do you look for the living among the dead?
{end_of_verse}

{start_of_verse: 24:6-7}
6 He is not here; He has risen! Remember how He told you while He was still in Galilee:
7 ‘The Son of Man must be delivered into the hands of sinful men, and be crucified, and on the third day rise again.’"
{end_of_verse}

{start_of_verse: 24:8}
8 Then they remembered His words.
{end_of_verse}
`,title2:"누가복음 24장 1-8절",text2:`{title: 누가복음 24장 1-8절}

{start_of_verse: 24:1-3}
1 안식후 첫날 새벽에 이 여자들이 그 예비한 향품을 가지고 무덤에 가서
2 돌이 무덤에서 굴려 옮기운 것을 보고
3 들어가니 주 예수의 시체가 뵈지 아니하더라
{end_of_verse}

{start_of_verse: 24:4-5}
4 이를 인하여 근심할 때에 문득 찬란한 옷을 입은 두 사람이 곁에 섰는지라
5 여자들이 두려워 얼굴을 땅에 대니 두 사람이 이르되 어찌하여 산 자를 죽은 자 가운데서 찾느냐
{end_of_verse}

{start_of_verse: 24:6-7}
6 여기 계시지 않고 살아나셨느니라 갈릴리에 계실 때에 너희에게 어떻게 말씀하신 것을 기억하라
7 이르시기를 인자가 죄인의 손에 넘기워 십자가에 못 박히고 제 삼일에 다시 살아나야 하리라 하셨느니라 한대
{end_of_verse}

{start_of_verse: 24:8}
8 저희가 예수의 말씀을 기억하고
{end_of_verse}
`},{kind:"song",title:"Christ the Lord Is Risen Today",text:`{title: Christ the Lord Is Risen Today}\r
{artist: Charles Wesley}\r
{genre: Easter}\r
{flow: Opening}\r
{style: Traditional}\r
{key: D}\r
{tempo: 100}\r
{time: 4/4}\r
{hymnal: 새찬송가 164장}\r
{title_ko: 예수 부활했으니}\r
{score: christ-the-lord-is-risen-today.abc}\r
\r
{start_of_verse: Verse 1}\r
[D]Christ the Lord is [A]risen to[D]day, Alle[A]lu[D]ia\r
[D]Sons of men and [A]angels [D]say, Alle[A]lu[D]ia\r
[G]Raise your joys and [D]triumphs high, Alle[A]lu[D]ia\r
[D]Sing, ye heavens, and [A]earth re[D]ply, Alle[A]lu[D]ia\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[D]Love's redeeming [A]work is [D]done, Alle[A]lu[D]ia\r
[D]Fought the fight, the [A]battle [D]won, Alle[A]lu[D]ia\r
[G]Death in vain for[D]bids Him rise, Alle[A]lu[D]ia\r
[D]Christ has opened [A]paradise, Alle[A]lu[D]ia\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[D]Lives again our [A]glorious [D]King, Alle[A]lu[D]ia\r
[D]Where, O death, is [A]now thy [D]sting, Alle[A]lu[D]ia\r
[G]Once He died our [D]souls to save, Alle[A]lu[D]ia\r
[D]Where thy victory, [A]O grave, Alle[A]lu[D]ia\r
{end_of_verse}\r
\r
{start_of_verse: Verse 4}\r
[D]Soar we now where [A]Christ has [D]led, Alle[A]lu[D]ia\r
[D]Following our ex[A]alted [D]Head, Alle[A]lu[D]ia\r
[G]Made like Him, like [D]Him we rise, Alle[A]lu[D]ia\r
[D]Ours the cross, the [A]grave, the skies, Alle[A]lu[D]ia\r
{end_of_verse}\r
`},{kind:"song",title:"Low in the Grave He Lay (Christ Arose)",text:`{title: Low in the Grave He Lay (Christ Arose)}\r
{title_ko: 무덤에 머물러}\r
{hymnal: 새찬송가 160장}\r
{artist: Robert Lowry}\r
{genre: Easter}\r
{flow: Opening}\r
{style: Traditional}\r
{key: G}\r
{key_original: Bb}\r
{tempo: 92}\r
{time: 4/4}\r
{score: low-in-the-grave-he-lay.abc}\r
\r
{start_of_verse: Verse 1}\r
[G]Low in the grave He [C]lay, [G]Jesus my [D]Saviour\r
[G]Waiting the coming [C]day, [G]Jesus my [D]Lord\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[G]Up from the grave He a[C]rose\r
With a [G]mighty triumph o'er His [D]foes\r
He a[G]rose a victor from the [C]dark do[G]main\r
And He [G]lives forever with His [C]saints to [D]reign\r
He a[G]rose! He a[C]rose! [G]Hallelu[D]jah! [G]Christ a[D]rose[G]\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
[G]Vainly they watch His [C]bed, [G]Jesus my [D]Saviour\r
[G]Vainly they seal the [C]dead, [G]Jesus my [D]Lord\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
[G]Death cannot keep his [C]prey, [G]Jesus my [D]Saviour\r
[G]He tore the bars a[C]way, [G]Jesus my [D]Lord\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Apostles' Creed · 사도신경",text:`{title: Apostles' Creed · 사도신경}

{start_of_verse: The Apostles' Creed}
The Apostles' Creed
I believe in God the Father Almighty, maker of heaven and earth:
And in Jesus Christ his only Son our Lord, who was conceived by the Holy Ghost, born of the Virgin Mary,
suffered under Pontius Pilate, was crucified, dead, and buried. He descended into hell;
{end_of_verse}

{start_of_verse: Slide 2}
the third day he rose again from the dead; he ascended into heaven, and sitteth on the right hand of God the Father Almighty;
from thence he shall come to judge the quick and the dead.
I believe in the Holy Ghost; the holy catholic Church; the communion of saints; the forgiveness of sins;
the resurrection of the body, and the life everlasting. Amen.
{end_of_verse}

{start_of_verse: 사도신경}
사도신경
전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며,
그 외아들 우리 주 예수 그리스도를 믿사오니, 이는 성령으로 잉태하사 동정녀 마리아에게 나시고,
본디오 빌라도에게 고난을 받으사, 십자가에 못 박혀 죽으시고, 장사한 지 사흘 만에 죽은 자 가운데서 다시 살아나시며,
{end_of_verse}

{start_of_verse: Slide 4}
하늘에 오르사, 전능하신 하나님 우편에 앉아 계시다가, 저리로서 산 자와 죽은 자를 심판하러 오시리라.
성령을 믿사오며, 거룩한 공회와, 성도가 서로 교통하는 것과, 죄를 사하여 주시는 것과,
몸이 다시 사는 것과, 영원히 사는 것을 믿사옵나이다. 아멘.
{end_of_verse}
`,deck:{slides:[{layout:"text",title:"The Apostles' Creed",bg:"",body:["I believe in God the Father Almighty, maker of heaven and earth:","And in Jesus Christ his only Son our Lord, who was conceived by the Holy Ghost, born of the Virgin Mary,","suffered under Pontius Pilate, was crucified, dead, and buried. He descended into hell;"],align:"center"},{layout:"text",title:"",bg:"",body:["the third day he rose again from the dead; he ascended into heaven, and sitteth on the right hand of God the Father Almighty;","from thence he shall come to judge the quick and the dead.","I believe in the Holy Ghost; the holy catholic Church; the communion of saints; the forgiveness of sins;","the resurrection of the body, and the life everlasting. Amen."],align:"center"},{layout:"text",title:"사도신경",bg:"",body:["전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며,","그 외아들 우리 주 예수 그리스도를 믿사오니, 이는 성령으로 잉태하사 동정녀 마리아에게 나시고,","본디오 빌라도에게 고난을 받으사, 십자가에 못 박혀 죽으시고, 장사한 지 사흘 만에 죽은 자 가운데서 다시 살아나시며,"],align:"center"},{layout:"text",title:"",bg:"",body:["하늘에 오르사, 전능하신 하나님 우편에 앉아 계시다가, 저리로서 산 자와 죽은 자를 심판하러 오시리라.","성령을 믿사오며, 거룩한 공회와, 성도가 서로 교통하는 것과, 죄를 사하여 주시는 것과,","몸이 다시 사는 것과, 영원히 사는 것을 믿사옵나이다. 아멘."],align:"center"}]}},{kind:"deck",title:"Prayer · 기도",text:`{title: Prayer · 기도}

{start_of_verse: Prayer · 기도}
Prayer · 기도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Prayer · 기도",bg:"",subtitle:"",name:""}]}},{kind:"bible",title:"Bible Reading · 성경 봉독 — Matthew 28:1-10",text:`{title: Matthew 28:1-10}

{start_of_verse: 28:1}
1 After the Sabbath, at dawn on the first day of the week, Mary Magdalene and the other Mary went to see the tomb.
{end_of_verse}

{start_of_verse: 28:2-3}
2 Suddenly there was a great earthquake, for an angel of the Lord descended from heaven, rolled away the stone, and sat on it.
3 His appearance was like lightning, and his clothes were white as snow.
{end_of_verse}

{start_of_verse: 28:4-5}
4 The guards trembled in fear of him and became like dead men.
5 But the angel said to the women, "Do not be afraid, for I know that you are looking for Jesus, who was crucified.
{end_of_verse}

{start_of_verse: 28:6}
6 He is not here; He has risen, just as He said! Come, see the place where He lay.
{end_of_verse}

{start_of_verse: 28:7}
7 Then go quickly and tell His disciples, ‘He has risen from the dead and is going ahead of you into Galilee. There you will see Him.’ See, I have told you."
{end_of_verse}

{start_of_verse: 28:8-9}
8 So they hurried away from the tomb in fear and great joy, and ran to tell His disciples.
9 Suddenly Jesus met them and said, "Greetings!" They came to Him, grasped His feet, and worshiped Him.
{end_of_verse}

{start_of_verse: 28:10}
10 "Do not be afraid," said Jesus. "Go and tell My brothers to go to Galilee. There they will see Me."
{end_of_verse}
`,title2:"마태복음 28장 1-10절",text2:`{title: 마태복음 28장 1-10절}

{start_of_verse: 28:1}
1 안식일이 다하여가고 안식 후 첫날이 되려는 미명에 막달라 마리아와 다른 마리아가 무덤을 보려고 왔더니
{end_of_verse}

{start_of_verse: 28:2-3}
2 큰 지진이 나며 주의 천사가 하늘로서 내려와 돌을 굴려 내고 그 위에 앉았는데
3 그 형상이 번개 같고 그 옷은 눈 같이 희거늘
{end_of_verse}

{start_of_verse: 28:4-5}
4 수직하던 자들이 저를 무서워하여 떨며 죽은 사람과 같이 되었더라
5 천사가 여자들에게 일러 가로되 너희는 무서워 말라 십자가에 못 박히신 예수를 너희가 찾는 줄을 내가 아노라
{end_of_verse}

{start_of_verse: 28:6}
6 그가 여기 계시지 않고 그의 말씀하시던대로 살아나셨느니라 와서 그의 누우셨던 곳을 보라
{end_of_verse}

{start_of_verse: 28:7}
7 또 빨리 가서 그의 제자들에게 이르되 그가 죽은 자 가운데서 살아나셨고 너희보다 먼저 갈릴리로 가시나니 거기서 너희가 뵈오리라 하라 보라 내가 너희에게 일렀느니라 하거늘
{end_of_verse}

{start_of_verse: 28:8-9}
8 그 여자들이 무서움과 큰 기쁨으로 무덤을 빨리 떠나 제자들에게 알게 하려고 달음질할쌔
9 예수께서 저희를 만나 가라사대 평안하뇨 하시거늘 여자들이 나아가 그 발을 붙잡고 경배하니
{end_of_verse}

{start_of_verse: 28:10}
10 이에 예수께서 가라사대 무서워 말라 가서 내 형제들에게 갈릴리로 가라 하라 거기서 나를 보리라 하시니라
{end_of_verse}
`},{kind:"deck",title:"Sermon · 설교",text:`{title: Sermon · 설교}

{start_of_verse: Sermon · 설교}
Sermon · 설교
Sermon title · 설교 제목
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Sermon · 설교",bg:"",subtitle:"Sermon title · 설교 제목",name:""}]}},{kind:"song",title:"Thine Be the Glory",text:`{title: Thine Be the Glory}\r
{artist: Edmond Budry; tr. R. B. Hoyle}\r
{genre: Easter}\r
{style: Hymn}\r
{flow: Closing}\r
{key: G}\r
{tempo: 96}\r
{time: 4/4}\r
\r
{start_of_verse: Verse 1}\r
[G]Thine be the glory, [D]risen, con[G]quering Son\r
[G]Endless is the vic[D]tory Thou o'er [G]death hast won\r
[G]Angels in bright [C]raiment rolled the [G]stone away\r
[Em]Kept the folded [D]graveclothes where Thy [G]body lay\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[G]Thine be the glory, [D]risen, con[G]quering Son\r
[G]Endless is the vic[D]tory Thou o'er [G]death hast won\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
[G]Lo, Jesus meets us, [D]risen from the [G]tomb\r
[G]Lovingly He greets us, [D]scatters fear and [G]gloom\r
[G]Let the church with [C]gladness hymns of [G]triumph sing\r
[Em]For her Lord now [D]liveth, death hath lost its [G]sting\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[G]No more we doubt Thee, [D]glorious Prince of [G]life\r
[G]Life is nought with[D]out Thee, aid us in our [G]strife\r
[G]Make us more than [C]conquerors, through Thy deathless [G]love\r
[Em]Bring us safe through [D]Jordan to Thy home a[G]bove\r
{end_of_verse}\r
`},{kind:"deck",title:"Offering · 헌금",text:`{title: Offering · 헌금}

{start_of_verse: Offering · 헌금}
Offering · 헌금
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Offering · 헌금",bg:"",subtitle:"",name:""}]}},{kind:"deck",title:"Announcements · 광고",text:`{title: Announcements · 광고}

{start_of_verse: Announcements · 광고}
Announcements · 광고
Welcome to everyone visiting today · 처음 오신 분들을 환영합니다
This week · 이번 주
Day, time and place
Next Sunday · 다음 주일
Add your announcement here
{end_of_verse}
`,deck:{slides:[{layout:"list",title:"Announcements · 광고",bg:"",items:["Welcome to everyone visiting today · 처음 오신 분들을 환영합니다","This week · 이번 주","- Day, time and place","Next Sunday · 다음 주일","- Add your announcement here"],columns:1,numbered:!0}]}},{kind:"song",title:"The Strife Is O'er",text:`{title: The Strife Is O'er}\r
{artist: Anon. Latin; tr. Francis Pott}\r
{genre: Easter}\r
{style: Hymn}\r
{flow: Closing}\r
{key: G}\r
{tempo: 92}\r
{time: 4/4}\r
{score: the-strife-is-oer.abc}\r
\r
{start_of_verse: Verse 1}\r
[G]The strife is o'er, the [D]battle done\r
[G]The victory of [C]life is [D]won\r
[G]The song of tri[D]umph has be[Em]gun\r
[C]Al__[G]__le__[D]__lu__[G]__ia\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[G]The powers of death have [D]done their worst\r
[G]But Christ their legions [C]hath dis[D]persed\r
[G]Let shouts of ho[D]ly joy out[Em]burst\r
[C]Al__[G]__le__[D]__lu__[G]__ia\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[G]The three sad days have [D]quickly sped\r
[G]He rises glorious [C]from the [D]dead\r
[G]All glory to our [D]risen [Em]Head\r
[C]Al__[G]__le__[D]__lu__[G]__ia\r
{end_of_verse}\r
\r
{start_of_verse: Verse 4}\r
[G]He broke the age-bound [D]chains of hell\r
[G]The bars from heaven's [C]high por[D]tals fell\r
[G]Let hymns of praise His [D]triumph [Em]tell\r
[C]Al__[G]__le__[D]__lu__[G]__ia\r
{end_of_verse}\r
\r
{start_of_verse: Verse 5}\r
[G]Lord, by the stripes which [D]wounded Thee\r
[G]From death's dread sting Thy [C]servants [D]free\r
[G]That we may live and [D]sing to [Em]Thee\r
[C]Al__[G]__le__[D]__lu__[G]__ia\r
{end_of_verse}\r
`},{kind:"deck",title:"Benediction · 축도",text:`{title: Benediction · 축도}

{start_of_verse: Benediction · 축도}
Benediction · 축도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Benediction · 축도",bg:"",subtitle:"",name:""}]}},{kind:"deck",title:"Closing · 마침",text:`{title: Closing · 마침}

{start_of_verse: Happy Easter! · 부활절을 축하합니다!}
Happy Easter! · 부활절을 축하합니다!
Christ is risen!
그리스도께서 부활하셨습니다!
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Happy Easter! · 부활절을 축하합니다!",bg:"",subtitle:"",note:`Christ is risen!
그리스도께서 부활하셨습니다!`,logo:""}]}}],category:"easter",tags:["easter","resurrection","hymns"],languages:["en","ko"],updatedAt:1791936e6,builtin:!0},{id:"free-thanksgiving",name:"Thanksgiving Service · 감사 예배",church:"",note:"A service of thanks with Psalm 100, thanksgiving hymns and time to share what God has done.",settings:{bgStyle:"wheat-gold",font:"nanumsquare",bilingual:!0,showTitle:!0},items:[{kind:"deck",title:"Welcome · 환영",text:`{title: Welcome · 환영}

{start_of_verse: Give thanks to the Lord · 여호와께 감사하라}
Give thanks to the Lord · 여호와께 감사하라
Your church name · 교회 이름
For He is good; His loving devotion endures forever
그는 선하시며 그 인자하심이 영원함이로다
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Give thanks to the Lord · 여호와께 감사하라",bg:"",subtitle:"Your church name · 교회 이름",note:`For He is good; His loving devotion endures forever
그는 선하시며 그 인자하심이 영원함이로다`,logo:"behind"}]}},{kind:"bible",title:"Call to Worship · 예배로의 부름 — Psalm 100:1-5",text:`{title: Psalm 100:1-5}

{start_of_verse: 100:1-2}
1 A Psalm of thanksgiving. Make a joyful noise to the LORD, all the earth.
2 Serve the LORD with gladness; come into His presence with joyful songs.
{end_of_verse}

{start_of_verse: 100:3}
3 Know that the LORD is God. It is He who made us, and we are His; we are His people, and the sheep of His pasture.
{end_of_verse}

{start_of_verse: 100:4-5}
4 Enter His gates with thanksgiving and His courts with praise; give thanks to Him and bless His name.
5 For the LORD is good, and His loving devotion endures forever; His faithfulness continues to all generations.
{end_of_verse}
`,title2:"시편 100장 1-5절",text2:`{title: 시편 100장 1-5절}

{start_of_verse: 100:1-2}
1 온 땅이여 여호와께 즐거이 부를찌어다
2 기쁨으로 여호와를 섬기며 노래하면서 그 앞에 나아갈찌어다
{end_of_verse}

{start_of_verse: 100:3}
3 여호와가 우리 하나님이신줄 너희는 알찌어다 그는 우리를 지으신 자시요 우리는 그의 것이니 그의 백성이요 그의 기르시는 양이로다
{end_of_verse}

{start_of_verse: 100:4-5}
4 감사함으로 그 문에 들어가며 찬송함으로 그 궁정에 들어가서 그에게 감사하며 그 이름을 송축할찌어다
5 대저 여호와는 선하시니 그 인자하심이 영원하고 그 성실하심이 대대에 미치리로다
{end_of_verse}
`},{kind:"song",title:"Come, Ye Thankful People, Come",text:`{title: Come, Ye Thankful People, Come}\r
{artist: Henry Alford / George J. Elvey}\r
{genre: Hymn}\r
{style: Traditional}\r
{flow: Opening}\r
{key: G}\r
{tempo: 96}\r
{time: 4/4}\r
{hymnal: 새찬송가 587장}\r
{title_ko: 감사하는 성도여}\r
\r
{start_of_verse: Verse 1}\r
[G]Come, ye thankful [D]people, [G]come\r
[C]Raise the [G]song of [D]harvest [G]home\r
[G]All is safely [D]gathered [G]in\r
[C]Ere the [G]winter [D]storms be[G]gin\r
[G]God our Maker [D]doth pro[G]vide\r
[C]For our [G]wants to [D]be sup[G]plied\r
[G]Come to God's own [D]temple, [G]come\r
[C]Raise the [G]song of [D]harvest [G]home\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[G]All the world is [D]God's own [G]field\r
[C]Fruit unto His [G]praise to [D]yield\r
[G]Wheat and tares to[D]gether [G]sown\r
[C]Unto [G]joy or [D]sorrow [G]grown\r
[G]First the blade and [D]then the [G]ear\r
[C]Then the [G]full corn [D]shall ap[G]pear\r
[G]Lord of harvest, [D]grant that [G]we\r
[C]Wholesome [G]grain and [D]pure may [G]be\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[G]For the Lord our [D]God shall [G]come\r
[C]And shall [G]take His [D]harvest [G]home\r
[G]From His field shall [D]in that [G]day\r
[C]All of[G]fenses [D]purge a[G]way\r
[G]Give His angels [D]charge at [G]last\r
[C]In the [G]fire the [D]tares to [G]cast\r
[G]But the fruitful [D]ears to [G]store\r
[C]In His [G]garner [D]ever[G]more\r
{end_of_verse}\r
\r
{start_of_verse: Verse 4}\r
[G]Even so, Lord, [D]quickly [G]come\r
[C]Bring Thy [G]final [D]harvest [G]home\r
[G]Gather Thou Thy [D]people [G]in\r
[C]Free from [G]sorrow, [D]free from [G]sin\r
[G]There, forever [D]purified\r
[C]In Thy [G]garner [D]to a[G]bide\r
[G]Come, with all Thine [D]angels, [G]come\r
[C]Raise the [G]glorious [D]harvest [G]home\r
{end_of_verse}\r
`},{kind:"song",title:"Now Thank We All Our God",text:`{title: Now Thank We All Our God}\r
{title_ko: 다 감사드리세}\r
{hymnal: 새찬송가 66장}\r
{artist: Martin Rinkart, tr. Catherine Winkworth / Johann Crüger}\r
{genre: Hymn}\r
{style: Traditional}\r
{flow: Opening}\r
{key: G}\r
{key_original: F}\r
{tempo: 88}\r
{time: 4/4}\r
{score: now-thank-we-all-our-god.abc}\r
\r
{start_of_verse: Verse 1}\r
[G]Now thank we all our [D]God\r
With [Em]heart and hands and [C]voices\r
[G]Who wondrous things hath [D]done\r
In [Em]whom His world re[D]joices\r
[G]Who from our mothers' [D]arms\r
Hath [Em]blessed us on our [C]way\r
With [G]countless gifts of [D]love\r
And [C]still is [D]ours to[G]day\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[G]O may this bounteous [D]God\r
Through [Em]all our life be [C]near us\r
With [G]ever joyful [D]hearts\r
And [Em]blessed peace to [D]cheer us\r
And [G]keep us in His [D]grace\r
And [Em]guide us when per[C]plexed\r
And [G]free us from all [D]ills\r
In [C]this world [D]and the [G]next\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[G]All praise and thanks to [D]God\r
The [Em]Father now be [C]given\r
The [G]Son, and Him who [D]reigns\r
With [Em]them in highest [D]heaven\r
The [G]one eternal [D]God\r
Whom [Em]earth and heaven a[C]dore\r
For [G]thus it was, is [D]now\r
And [C]shall be [D]ever[G]more\r
{end_of_verse}\r
`},{kind:"deck",title:"Prayer of thanksgiving · 감사 기도",text:`{title: Prayer of thanksgiving · 감사 기도}

{start_of_verse: Prayer of thanksgiving · 감사 기도}
Prayer of thanksgiving · 감사 기도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Prayer of thanksgiving · 감사 기도",bg:"",subtitle:"",name:""}]}},{kind:"deck",title:"Sharing our thanks · 감사 나눔",text:`{title: Sharing our thanks · 감사 나눔}

{start_of_verse: Sharing our thanks · 감사 나눔}
Sharing our thanks · 감사 나눔
What God has done this year · 올해 하나님이 하신 일
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Sharing our thanks · 감사 나눔",bg:"",subtitle:"What God has done this year · 올해 하나님이 하신 일",name:""}]}},{kind:"bible",title:"Bible Reading · 성경 봉독 — Luke 17:11-19",text:`{title: Luke 17:11-19}

{start_of_verse: 17:11-12}
11 While Jesus was on His way to Jerusalem, He was passing between Samaria and Galilee.
12 As He entered one of the villages, He was met by ten lepers. They stood at a distance
{end_of_verse}

{start_of_verse: 17:13-14}
13 and raised their voices, shouting, "Jesus, Master, have mercy on us!"
14 When Jesus saw them, He said, "Go, show yourselves to the priests." And as they were on their way, they were cleansed.
{end_of_verse}

{start_of_verse: 17:15-16}
15 When one of them saw that he was healed, he came back, praising God in a loud voice.
16 He fell facedown at Jesus’ feet in thanksgiving to Him — and he was a Samaritan.
{end_of_verse}

{start_of_verse: 17:17-18}
17 "Were not all ten cleansed?" Jesus asked. "Where then are the other nine?
18 Was no one found except this foreigner to return and give glory to God?"
{end_of_verse}

{start_of_verse: 17:19}
19 Then Jesus said to him, "Rise and go; your faith has made you well! "
{end_of_verse}
`,title2:"누가복음 17장 11-19절",text2:`{title: 누가복음 17장 11-19절}

{start_of_verse: 17:11-12}
11 예수께서 예루살렘으로 가실 때에 사마리아와 갈릴리 사이로 지나가시다가
12 한 촌에 들어가시니 문둥병자 열 명이 예수를 만나 멀리 서서
{end_of_verse}

{start_of_verse: 17:13-14}
13 소리를 높여 가로되 예수 선생님이여 우리를 긍휼히 여기소서 하거늘
14 보시고 가라사대 가서 제사장들에게 너희 몸을 보이라 하셨더니 저희가 가다가 깨끗함을 받은지라
{end_of_verse}

{start_of_verse: 17:15-16}
15 그 중에 하나가 자기의 나은 것을 보고 큰 소리로 하나님께 영광을 돌리며 돌아와
16 예수의 발아래 엎드리어 사례하니 저는 사마리아인이라
{end_of_verse}

{start_of_verse: 17:17-18}
17 예수께서 대답하여 가라사대 열 사람이 다 깨끗함을 받지 아니하였느냐 그 아홉은 어디 있느냐
18 이 이방인 외에는 하나님께 영광을 돌리러 돌아온 자가 없느냐 하시고
{end_of_verse}

{start_of_verse: 17:19}
19 그에게 이르시되 일어나 가라 네 믿음이 너를 구원하였느니라 하시더라
{end_of_verse}
`},{kind:"deck",title:"Sermon · 설교",text:`{title: Sermon · 설교}

{start_of_verse: Sermon · 설교}
Sermon · 설교
Sermon title · 설교 제목
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Sermon · 설교",bg:"",subtitle:"Sermon title · 설교 제목",name:""}]}},{kind:"song",title:"Count Your Blessings",text:`{title: Count Your Blessings}\r
{artist: Johnson Oatman Jr. / Edwin O. Excell}\r
{genre: Hymn, Gospel}\r
{style: Traditional}\r
{flow: Opening}\r
{key: G}\r
{tempo: 96}\r
{time: 4/4}\r
{hymnal: 새찬송가 429장}\r
{title_ko: 세상 모든 풍파 너를 흔들어}\r
\r
{start_of_verse: Verse 1}\r
[G]When upon life's billows you are [D]tempest tossed\r
When you are dis[G]couraged, thinking [D]all is lost\r
[G]Count your many [C]blessings, name them [G]one by one\r
And it [A7]will sur[D]prise you what the [G]Lord hath done\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[G]Count your blessings, [D]name them one by [G]one\r
Count your blessings, [D]see what God hath [G]done\r
Count your [G]blessings, [C]name them one by [G]one\r
Count your [A7]many [D]blessings, see what [G]God hath done\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
[G]Are you ever burdened with a [D]load of care?\r
Does the cross seem [G]heavy you are [D]called to bear?\r
[G]Count your many [C]blessings, every [G]doubt will fly\r
And you [A7]will be [D]singing as the [G]days go by\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
[G]When you look at others with their [D]lands and gold\r
Think that Christ has [G]promised you His [D]wealth untold\r
[G]Count your many [C]blessings, wealth can [G]never buy\r
Your re[A7]ward in [D]heaven, nor your [G]home on high\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 4}\r
[G]So, amid the conflict, whether [D]great or small\r
Do not be dis[G]couraged, God is [D]over all\r
[G]Count your many [C]blessings, angels [G]will attend\r
Help and [A7]comfort [D]give you to your [G]journey's end\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Offering · 감사 헌금",text:`{title: Offering · 감사 헌금}

{start_of_verse: Offering · 감사 헌금}
Offering · 감사 헌금
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Offering · 감사 헌금",bg:"",subtitle:"",name:""}]}},{kind:"song",title:"Doxology (Praise God from Whom All Blessings Flow)",text:`{title: Doxology (Praise God from Whom All Blessings Flow)}\r
{artist: Thomas Ken / Louis Bourgeois (Old Hundredth)}\r
{genre: Hymn}\r
{flow: Response, Closing}\r
{style: Traditional}\r
{key: G}\r
{tempo: 80}\r
{time: 4/4}\r
{hymnal: 새찬송가 1장}\r
{title_ko: 만복의 근원 하나님}\r
{score: doxology.abc}\r
\r
{start_of_verse: Verse 1}\r
[G]Praise God, from [D]whom all [Em]blessings [C]flow\r
[G]Praise Him, all [D]creatures [Em]here be[D]low\r
[G]Praise Him a[C]bove, ye [G]heavenly [D]host\r
[G]Praise Father, [C]Son, and [G]Holy [D]Ghost. [G]A[C]men [G]\r
{end_of_verse}\r
`},{kind:"deck",title:"Announcements · 광고",text:`{title: Announcements · 광고}

{start_of_verse: Announcements · 광고}
Announcements · 광고
Welcome to everyone visiting today · 처음 오신 분들을 환영합니다
This week · 이번 주
Day, time and place
Next Sunday · 다음 주일
Add your announcement here
{end_of_verse}
`,deck:{slides:[{layout:"list",title:"Announcements · 광고",bg:"",items:["Welcome to everyone visiting today · 처음 오신 분들을 환영합니다","This week · 이번 주","- Day, time and place","Next Sunday · 다음 주일","- Add your announcement here"],columns:1,numbered:!0}]}},{kind:"song",title:"Great Is Thy Faithfulness",text:`{title: Great Is Thy Faithfulness}\r
{artist: Thomas O. Chisholm / William M. Runyan}\r
{genre: Hymn}\r
{style: Traditional}\r
{flow: Opening, Response}\r
{key: D}\r
{tempo: 72}\r
{time: 4/4}\r
# Published 1923; in the US public domain since 2019.\r
\r
{start_of_verse: Verse 1}\r
[D]Great is Thy [G]faith[D]fulness, O [A7]God my Fa[D]ther\r
There is no [G]shadow of [D]turning with [A7]Thee\r
Thou [D]changest not, Thy [G]compassions, they [D]fail [Bm]not\r
As Thou [Em]hast been Thou for[A7]ever wilt [D]be\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[D]Great is Thy [G]faithfulness! [D]Great is Thy [Bm]faithfulness!\r
[Em]Morning by [D]morning new [A7]mercies I [D]see\r
All I have [G]needed Thy [D]hand hath pro[Bm]vided\r
[Em]Great is Thy [D/F#]faithfulness, [A7]Lord, unto [D]me!\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
[D]Summer and [G]winter, and [D]springtime and [A7]harvest\r
[D]Sun, moon and [G]stars in their [D]courses a[A7]bove\r
Join with [D]all nature in [G]manifold [D]wit[Bm]ness\r
To Thy [Em]great faithful[A7]ness, mercy and [D]love\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
[D]Pardon for [G]sin and a [D]peace that en[A7]dureth\r
Thine own [D]dear presence to [G]cheer and to [D]guide [A7]\r
[D]Strength for to[G]day and bright [D]hope for to[Bm]morrow\r
[Em]Blessings all [A7]mine, with ten [D]thousand be[A7]side[D]\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Benediction · 축도",text:`{title: Benediction · 축도}

{start_of_verse: Benediction · 축도}
Benediction · 축도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Benediction · 축도",bg:"",subtitle:"",name:""}]}},{kind:"deck",title:"Closing · 마침",text:`{title: Closing · 마침}

{start_of_verse: Thank you, Lord · 감사합니다}
Thank you, Lord · 감사합니다
Give thanks in all circumstances
범사에 감사하라
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"Thank you, Lord · 감사합니다",bg:"",subtitle:"",note:`Give thanks in all circumstances
범사에 감사하라`,logo:""}]}}],category:"thanksgiving",tags:["thanksgiving","harvest","psalm-100"],languages:["en","ko"],updatedAt:1791936e6,builtin:!0},{id:"free-memorial",name:"Memorial / Funeral Service · 추모 예배",church:"",note:"A gentle service of remembrance and hope: Psalm 23, John 14:1-6 and comforting hymns. Type the name and dates on the first slide.",settings:{bgStyle:"lake-mist",font:"nanumsquare",bilingual:!0,showTitle:!0},items:[{kind:"deck",title:"In loving memory · 추모",text:`{title: In loving memory · 추모}

{start_of_verse: In Loving Memory · 사랑하는 고인을 추모하며}
In Loving Memory · 사랑하는 고인을 추모하며
Name · 성함
Year of birth – year of death
생년 – 몰년
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"In Loving Memory · 사랑하는 고인을 추모하며",bg:"",subtitle:"Name · 성함",note:`Year of birth – year of death
생년 – 몰년`,logo:"behind"}]}},{kind:"song",title:"Abide with Me",text:`{title: Abide with Me}\r
{artist: Henry Francis Lyte / William Henry Monk}\r
{genre: Hymn}\r
{flow: Meditative, Closing}\r
{style: Traditional}\r
{key: G}\r
{key_original: Eb}\r
{tempo: 66}\r
{time: 4/4}\r
{hymnal: 새찬송가 481장}\r
{title_ko: 때 저물어서 날이 어두니}\r
{score: abide-with-me.abc}\r
\r
{start_of_verse: Verse 1}\r
[G]Abide with me; fast [C]falls the [G]eventide\r
The [G]darkness deepens; [D]Lord, with me a[G]bide\r
When [G]other helpers [C]fail and [G]comforts flee\r
Help of the [C]helpless, [D]O a[G]bide with me\r
{end_of_verse}\r
\r
{start_of_verse: Verse 2}\r
[G]Swift to its close ebbs [C]out life's [G]little day\r
Earth's [G]joys grow dim, its [D]glories pass a[G]way\r
[G]Change and decay in [C]all a[G]round I see\r
O Thou who [C]changest not, [D]a[G]bide with me\r
{end_of_verse}\r
\r
{start_of_verse: Verse 3}\r
[G]I need Thy presence [C]every [G]passing hour\r
What [G]but Thy grace can [D]foil the tempter's [G]power\r
[G]Who like Thyself my [C]guide and [G]stay can be\r
Through cloud and [C]sunshine, [D]O a[G]bide with me\r
{end_of_verse}\r
\r
{start_of_verse: Verse 4}\r
[G]I fear no foe, with [C]Thee at [G]hand to bless\r
Ills [G]have no weight, and [D]tears no bitter[G]ness\r
[G]Where is death's sting? [C]Where, grave, thy [G]victory\r
I tri[C]umph still, if [D]Thou a[G]bide with me\r
{end_of_verse}\r
\r
{start_of_verse: Verse 5}\r
[G]Hold Thou Thy cross be[C]fore my [G]closing eyes\r
Shine [G]through the gloom and [D]point me to the [G]skies\r
[G]Heaven's morning breaks, and [C]earth's vain [G]shadows flee\r
In life, in [C]death, O [D]Lord, a[G]bide with me\r
{end_of_verse}\r
`},{kind:"deck",title:"Prayer · 기도",text:`{title: Prayer · 기도}

{start_of_verse: Prayer · 기도}
Prayer · 기도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Prayer · 기도",bg:"",subtitle:"",name:""}]}},{kind:"bible",title:"Scripture · 말씀 — Psalm 23:1-6",text:`{title: Psalm 23:1-6}

{start_of_verse: 23:1-3}
1 A Psalm of David. The LORD is my shepherd; I shall not want.
2 He makes me lie down in green pastures; He leads me beside quiet waters.
3 He restores my soul; He guides me in the paths of righteousness for the sake of His name.
{end_of_verse}

{start_of_verse: 23:4}
4 Even though I walk through the valley of the shadow of death, I will fear no evil, for You are with me; Your rod and Your staff, they comfort me.
{end_of_verse}

{start_of_verse: 23:5-6}
5 You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows.
6 Surely goodness and mercy will follow me all the days of my life, and I will dwell in the house of the LORD forever.
{end_of_verse}
`,title2:"시편 23장 1-6절",text2:`{title: 시편 23장 1-6절}

{start_of_verse: 23:1-3}
1 여호와는 나의 목자시니 내가 부족함이 없으리로다
2 그가 나를 푸른 초장에 누이시며 쉴만한 물 가으로 인도하시는도다
3 내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다
{end_of_verse}

{start_of_verse: 23:4}
4 내가 사망의 음침한 골짜기로 다닐찌라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다
{end_of_verse}

{start_of_verse: 23:5-6}
5 주께서 내 원수의 목전에서 내게 상을 베푸시고 기름으로 내 머리에 바르셨으니 내 잔이 넘치나이다
6 나의 평생에 선하심과 인자하심이 정녕 나를 따르리니 내가 여호와의 집에 영원히 거하리로다
{end_of_verse}
`},{kind:"song",title:"It Is Well with My Soul",text:`{title: It Is Well with My Soul}\r
{artist: Horatio Spafford / Philip Bliss}\r
{genre: Hymn}\r
{flow: Meditative, Response}\r
{style: Traditional}\r
{key: C}\r
{tempo: 72}\r
{time: 4/4}\r
{hymnal: 새찬송가 413장}\r
{title_ko: 내 평생에 가는 길}\r
{score: it-is-well.abc}\r
\r
{start_of_verse: Verse 1}\r
[C]When peace like a [F]river at[C]tendeth my way\r
When [C]sorrows like [G]sea billows [C]roll\r
Whatever my [F]lot, Thou hast [C]taught me to say\r
[C]It is well, [F]it is well with my [C]soul\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[C]It is well [F]with my [C]soul\r
[G]It is well, it is well with my [C]soul\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
[C]Though Satan should [F]buffet, though [C]trials should come\r
Let this [C]blest assurance [G]con[C]trol\r
That Christ hath re[F]garded my [C]helpless estate\r
And hath [C]shed His own [F]blood for my [C]soul\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
[C]My sin, oh the [F]bliss of this [C]glorious thought\r
My sin, not in [G]part but the [C]whole\r
Is nailed to the [F]cross and I [C]bear it no more\r
Praise the [C]Lord, praise the [F]Lord, O my [C]soul\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 4}\r
[C]And Lord haste the [F]day when my [C]faith shall be sight\r
The clouds be [C]rolled back as a [G]scroll\r
The trump shall re[F]sound and the [C]Lord shall descend\r
Even [C]so, it is [F]well with my [C]soul\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Remembering a life · 고인의 약력",text:`{title: Remembering a life · 고인의 약력}

{start_of_verse: Remembering a life · 고인의 약력}
Remembering a life · 고인의 약력
Life story · 약력 소개
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Remembering a life · 고인의 약력",bg:"",subtitle:"Life story · 약력 소개",name:""}]}},{kind:"bible",title:"Scripture · 말씀 — John 14:1-6",text:`{title: John 14:1-6}

{start_of_verse: 14:1-2}
1 "Do not let your hearts be troubled. You believe in God; believe in Me as well.
2 In My Father’s house are many rooms. If it were not so, would I have told you that I am going there to prepare a place for you?
{end_of_verse}

{start_of_verse: 14:3-4}
3 And if I go and prepare a place for you, I will come back and welcome you into My presence, so that you also may be where I am.
4 You know the way to the place where I am going. "
{end_of_verse}

{start_of_verse: 14:5-6}
5 "Lord," said Thomas, "we do not know where You are going, so how can we know the way?"
6 Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through Me.
{end_of_verse}
`,title2:"요한복음 14장 1-6절",text2:`{title: 요한복음 14장 1-6절}

{start_of_verse: 14:1-2}
1 너희는 마음에 근심하지 말라 하나님을 믿으니 또 나를 믿으라
2 내 아버지 집에 거할 곳이 많도다 그렇지 않으면 너희에게 일렀으리라 내가 너희를 위하여 처소를 예비하러 가노니
{end_of_verse}

{start_of_verse: 14:3-4}
3 가서 너희를 위하여 처소를 예비하면 내가 다시 와서 너희를 내게로 영접하여 나 있는 곳에 너희도 있게 하리라
4 내가 가는 곳에 그 길을 너희가 알리라
{end_of_verse}

{start_of_verse: 14:5-6}
5 도마가 가로되 주여 어디로 가시는지 우리가 알지 못하거늘 그 길을 어찌 알겠삽나이까
6 예수께서 가라사대 내가 곧 길이요 진리요 생명이니 나로 말미암지 않고는 아버지께로 올 자가 없느니라
{end_of_verse}
`},{kind:"deck",title:"Message of hope · 위로의 말씀",text:`{title: Message of hope · 위로의 말씀}

{start_of_verse: Message of hope · 위로의 말씀}
Message of hope · 위로의 말씀
Message title · 제목
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Message of hope · 위로의 말씀",bg:"",subtitle:"Message title · 제목",name:""}]}},{kind:"song",title:"In the Sweet By and By",text:`{title: In the Sweet By and By}\r
{artist: Sanford F. Bennett / Joseph P. Webster}\r
{genre: Gospel}\r
{style: Traditional}\r
{flow: Closing}\r
{key: G}\r
{tempo: 76}\r
{time: 4/4}\r
\r
{start_of_verse: Verse 1}\r
There's a [G]land that is [C]fairer than [G]day\r
And by [D7]faith we can [G]see it a[D7]far\r
For the [G]Father waits [C]over the [G]way\r
To pre[D7]pare us a [G]dwelling place [D7]there\r
{end_of_verse}\r
\r
{start_of_chorus}\r
In the [G]sweet by and [C]by\r
We shall [G]meet on that [D7]beautiful [G]shore\r
In the [G]sweet by and [C]by\r
We shall [G]meet on that [D7]beautiful [G]shore\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
We shall [G]sing on that [C]beautiful [G]shore\r
The me[D7]lodious songs of the [G]blessed\r
And our [G]spirits shall [C]sorrow no [G]more\r
Not a [D7]sigh for the [G]blessing of [D7]rest\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
To our [G]bountiful [C]Father a[G]bove\r
We will [D7]offer our [G]tribute of [D7]praise\r
For the [G]glorious [C]gift of His [G]love\r
And the [D7]blessings that [G]hallow our [D7]days\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Benediction · 축도",text:`{title: Benediction · 축도}

{start_of_verse: Benediction · 축도}
Benediction · 축도
{end_of_verse}
`,deck:{slides:[{layout:"heading",title:"Benediction · 축도",bg:"",subtitle:"",name:""}]}},{kind:"song",title:"God Be with You Till We Meet Again",text:`{title: God Be with You Till We Meet Again}\r
{artist: Jeremiah E. Rankin / William G. Tomer}\r
{genre: Hymn}\r
{style: Traditional}\r
{flow: Closing}\r
{key: F}\r
{tempo: 76}\r
{time: 4/4}\r
{hymnal: 새찬송가 222장}\r
{title_ko: 우리 다시 만날 때까지}\r
\r
{start_of_verse: Verse 1}\r
[F]God be with you till we meet a[C]gain\r
By His [F]counsels guide, up[Bb]hold you\r
With His [F]sheep se[Dm]curely [C]fold you\r
[F]God be with you till we [C]meet a[F]gain\r
{end_of_verse}\r
\r
{start_of_chorus}\r
[F]Till we meet, till we meet\r
[Bb]Till we meet at [F]Jesus' feet\r
[F]Till we meet, till we meet\r
[Bb]God be with you [C]till we meet a[F]gain\r
{end_of_chorus}\r
\r
{start_of_verse: Verse 2}\r
[F]God be with you till we meet a[C]gain\r
'Neath His [F]wings protect[Bb]ing hide you\r
Daily [F]manna [Dm]still pro[C]vide you\r
[F]God be with you till we [C]meet a[F]gain\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 3}\r
[F]God be with you till we meet a[C]gain\r
When life's [F]perils thick con[Bb]found you\r
Put His [F]arms un[Dm]failing [C]round you\r
[F]God be with you till we [C]meet a[F]gain\r
{end_of_verse}\r
\r
{chorus}\r
\r
{start_of_verse: Verse 4}\r
[F]God be with you till we meet a[C]gain\r
Keep love's [F]banner float[Bb]ing o'er you\r
Smite death's [F]threat'ning [Dm]wave be[C]fore you\r
[F]God be with you till we [C]meet a[F]gain\r
{end_of_verse}\r
\r
{chorus}\r
`},{kind:"deck",title:"Closing · 마침",text:`{title: Closing · 마침}

{start_of_verse: The Lord bless you and keep you}
The Lord bless you and keep you
여호와는 네게 복을 주시고 너를 지키시기를 원하며
{end_of_verse}
`,deck:{slides:[{layout:"title",title:"The Lord bless you and keep you",bg:"",subtitle:"",note:"여호와는 네게 복을 주시고 너를 지키시기를 원하며",logo:""}]}}],category:"memorial",tags:["memorial","funeral","comfort"],languages:["en","ko"],updatedAt:1791936e6,builtin:!0}];export{e as BUILTIN_TEMPLATES};
