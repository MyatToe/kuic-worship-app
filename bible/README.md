# Bible texts

Format: `bible/<id>.json` = `books[book][chapter][verse]`, books in Protestant canon order (Genesis = 0 … Revelation = 65).
Verse *n* is always at index *n − 1*; a verse the source leaves out (or merges into the verse before) is `""`.
Every file holds 66 book slots. A translation with only the New Testament is marked `books: 'nt'` in
`TRANSLATIONS` (`js/bible.js`) and keeps empty arrays for the Old Testament books (only `jpn1965` so far).

All texts are public domain or under an open licence that allows copying and redistribution (CC BY 4.0 / CC BY-SA 4.0).
Not included because they are copyrighted: NIV, ESV, NASB, NLT, CSB, NKJV, AMP, CEV, GNT, 개역개정, 새번역, 한글 킹제임스.
Also checked and left out: NET Bible (its own licence, not an open one), Lexham English Bible (not openly licensed),
Thai KJV, German Elberfelder (bibelkommentare.de), Indonesian AYT and Turkish YTC (NC and/or ND licences),
Dutch NBG 1951 (a third-party GFDL claim on a Bible-society text), Burmese Common Language Bible (© 2005 Bible Society
of Myanmar; eBible calls it public domain only because Myanmar is outside the Berne Convention), Sainte Bible
néo-Crampon Libre (open, but Catholic numbering: Esther 16 chapters, Daniel 14, Joel 4, Malachi 3), and texts that
are still incomplete: Open English Bible (17 OT books), unfoldingWord Literal/Simplified Text (ULT/UST, not all books).
There is no openly licensed modern Korean, Burmese or Thai Bible on eBible.org.

## Original eight (from thiagobodruk/bible)

Data source: [thiagobodruk/bible](<https://github.com/thiagobodruk/bible>) (MIT-licensed data files).

| File | Language | Translation | Year | Licence |
| --- | --- | --- | --- | --- |
| `kjv.json` | English | King James Version (1769 text) | 1769 | Public domain (outside the UK) |
| `bsb.json` | English | Berean Standard Bible | 2023 | Public domain (dedicated 2023) |
| `web.json` | English | World English Bible | 2000 | Public domain |
| `asv.json` | English | American Standard Version | 1901 | Public domain |
| `ylt.json` | English | Young's Literal Translation | 1898 | Public domain |
| `darby.json` | English | Darby Translation | 1890 | Public domain |
| `dra.json` | English | Douay-Rheims (Catholic; Psalms numbered differently) | 1899 | Public domain |
| `krv.json` | 한국어 Korean | 개역한글 Korean Revised Version | 1961 | Copyright term expired |

## From eBible.org

Downloaded from [eBible.org](<https://ebible.org/Scriptures/>) (`<id>_vpl.zip`, verse-per-line text) and converted with
`node tools/import-ebible.mjs <id>_vpl.txt bible/<file>.json` (add `--fix-vni` for `vie1934`, `--t4t` for `eng-t4t`). The converter keeps only
the 66 Protestant books, removes translators' notes, inline cross-references and bracket marks, and keeps each
source's own verse numbering.

| File | Language | Translation | Year | Licence | Source |
| --- | --- | --- | --- | --- | --- |
| `lsv.json` | English | Literal Standard Version — modern, word-for-word | 2020 | CC BY-SA 4.0 | [englsv](<https://ebible.org/englsv/>) |
| `fbv.json` | English | Free Bible Version — modern, easy to read | 2018 | CC BY-SA 4.0 | [engfbv](<https://ebible.org/engfbv/>) |
| `t4t.json` | English | Translation for Translators — modern, spells out implied meaning | 2017 | CC BY-SA 4.0 | [eng-t4t](<https://ebible.org/eng-t4t/>) |
| `myajvb.json` | မြန်မာ Burmese | Judson Bible (မြန်မာကျမ်းစာ) | 1840 | Public domain | [myajvb](<https://ebible.org/myajvb/>) |
| `sparv1909.json` | Español Spanish | Reina-Valera 1909 | 1909 | Public domain | [spaRV1909](<https://ebible.org/spaRV1909/>) |
| `spaonbv.json` | Español Spanish | Open Nueva Biblia Viva — modern paraphrase | 2008 | CC BY-SA 4.0 | [spaonbv](<https://ebible.org/spaonbv/>) |
| `spavbl.json` | Español Spanish | Versión Biblia Libre (Spanish Free Bible Version) — modern | 2020 | CC BY-SA 4.0 | [spavbl](<https://ebible.org/spavbl/>) |
| `fralsg.json` | Français French | Louis Segond 1910 | 1910 | Public domain | [fraLSG](<https://ebible.org/fraLSG/>) |
| `deu1912.json` | Deutsch German | Lutherbibel 1912 | 1912 | Public domain | [deu1912](<https://ebible.org/deu1912/>) |
| `porbr2018.json` | Português Portuguese | Bíblia Livre (Almeida, Textus Receptus) | 2018 | CC BY 4.0 | [porbr2018](<https://ebible.org/porbr2018/>) |
| `poronbv.json` | Português Portuguese | Open Nova Bíblia Viva — modern paraphrase | 2010 | CC BY-SA 4.0 | [poronbv](<https://ebible.org/poronbv/>) |
| `ita1927.json` | Italiano Italian | Riveduta 1927 (Luzzi) | 1927 | Public domain | [ita1927](<https://ebible.org/ita1927/>) |
| `nld.json` | Nederlands Dutch | De Heilige Schrift (Statenvertaling, 1917 edition) | 1917 | Public domain | [nld](<https://ebible.org/nld/>) |
| `ces1613.json` | Čeština Czech | Bible kralická 1613 | 1613 | Public domain | [ces1613](<https://ebible.org/ces1613/>) |
| `russyn.json` | Русский Russian | Синодальный перевод (Synodal) | 1876 | Public domain | [russyn](<https://ebible.org/russyn/>) |
| `ukr1871.json` | Українська Ukrainian | Біблія, пер. П. Куліша та І. Пулюя | 1905 | Public domain | [ukr1871](<https://ebible.org/ukr1871/>) |
| `cmncu89s.json` | 中文 (简体) Chinese | 和合本 Chinese Union Version, simplified (新标点) | 1919 | Public domain | [cmn-cu89s](<https://ebible.org/cmn-cu89s/>) |
| `cmncu89t.json` | 中文 (繁體) Chinese | 和合本 Chinese Union Version, traditional (新標點) | 1919 | Public domain | [cmn-cu89t](<https://ebible.org/cmn-cu89t/>) |
| `cmncbs.json` | 中文 (简体) Chinese | Open Chinese Contemporary Bible, Simplified (当代译本) — modern | 2022 | CC BY-SA 4.0 | [cmncbs](<https://ebible.org/cmncbs/>) |
| `cmncbt.json` | 中文 (繁體) Chinese | Open Chinese Contemporary Bible, Traditional (當代譯本) — modern | 2023 | CC BY-SA 4.0 | [cmncbt](<https://ebible.org/cmncbt/>) |
| `jpnm.json` | 日本語 Japanese | フリーダム・バイブル Freedom Bible (draft) | 2026 | Public domain | [jpnm](<https://ebible.org/jpnm/>) |
| `jpn1965.json` | 日本語 Japanese | 新改訳 新約聖書 1965 (Shinkaiyaku New Testament) — **New Testament only** | 1965 | Public domain (copyright expired 2015, abandoned) | [jpn1965](<https://ebible.org/jpn1965/>) |
| `vie1934.json` | Tiếng Việt Vietnamese | Kinh Thánh (Bản Truyền Thống 1923/1934) | 1934 | Public domain | [vie1934](<https://ebible.org/vie1934/>) |
| `vieovcb.json` | Tiếng Việt Vietnamese | Open Vietnamese Contemporary Bible (Kinh Thánh Hiện Đại) — modern | 2015 | CC BY-SA 4.0 | [vieovcb](<https://ebible.org/vieovcb/>) |
| `thafb.json` | ไทย Thai | พระคัมภีร์แห่งเสรีภาพ Freedom Bible (draft) | 2026 | Public domain | [thafb](<https://ebible.org/thafb/>) |
| `tglulb.json` | Tagalog | Banal na Bibliya, Tagalog Unlocked Literal Bible | 2018 | CC BY-SA 4.0 | [tglulb](<https://ebible.org/tglulb/>) |
| `cebulb.json` | Cebuano | Balaan nga Bibliya, Cebuano Unlocked Literal Bible | 2019 | CC BY-SA 4.0 | [cebulb](<https://ebible.org/cebulb/>) |
| `cebocb.json` | Cebuano | Open Cebuano Contemporary Bible (Ang Pulong sa Dios) — modern | 2024 | CC BY-SA 4.0 | [cebocb](<https://ebible.org/cebocb/>) |
| `hin2017.json` | हिन्दी Hindi | Indian Revised Version (IRV) हिंदी | 2019 | CC BY-SA 4.0 | [hin2017](<https://ebible.org/hin2017/>) |
| `hincv.json` | हिन्दी Hindi | Open Hindi Contemporary Version (हिंदी समकालीन संस्करण) — modern | 2019 | CC BY-SA 4.0 | [hincv](<https://ebible.org/hincv/>) |
| `benirv.json` | বাংলা Bengali | Indian Revised Version (IRV) বাংলা | 2019 | CC BY-SA 4.0 | [benirv](<https://ebible.org/benirv/>) |
| `tam2017.json` | தமிழ் Tamil | Indian Revised Version (IRV) தமிழ் | 2019 | CC BY-SA 4.0 | [tam2017](<https://ebible.org/tam2017/>) |
| `tel2017.json` | తెలుగు Telugu | Indian Revised Version (IRV) తెలుగు | 2019 | CC BY-SA 4.0 | [tel2017](<https://ebible.org/tel2017/>) |
| `mal.json` | മലയാളം Malayalam | Indian Revised Version (IRV) മലയാളം | 2019 | CC BY-SA 4.0 | [mal](<https://ebible.org/mal/>) |
| `mar.json` | मराठी Marathi | Indian Revised Version (IRV) मराठी | 2019 | CC BY-SA 4.0 | [mar](<https://ebible.org/mar/>) |
| `npiulb.json` | नेपाली Nepali | पवित्र बाइबल, Nepali Unlocked Literal Bible | 2019 | CC BY-SA 4.0 | [npiulb](<https://ebible.org/npiulb/>) |
| `npioncb.json` | नेपाली Nepali | Open Nepali Contemporary Version (नेपाली समकालीन संस्करण) — modern | 2024 | CC BY-SA 4.0 | [npioncb](<https://ebible.org/npioncb/>) |
| `swhulb.json` | Kiswahili Swahili | Biblia Takatifu, Swahili Unlocked Literal Bible | 2019 | CC BY-SA 4.0 | [swhulb](<https://ebible.org/swhulb/>) |
| `swhonen.json` | Kiswahili Swahili | Open Kiswahili Contemporary Version (Neno: Bibilia Takatifu) — modern | 2015 | CC BY-SA 4.0 | [swhonen](<https://ebible.org/swhonen/>) |
| `arbvd.json` | العربية Arabic | الكتاب المقدس، فان دايك (Van Dyck) | 1865 | Public domain | [arb-vd](<https://ebible.org/arb-vd/>) |
| `arbnav.json` | العربية Arabic | Open New Arabic Version (كتاب الحياة, Ketab El Hayat) — modern | 2012 | CC BY-SA 4.0 | [arbnav](<https://ebible.org/arbnav/>) |
| `pesopv.json` | فارسی Persian | ترجمه قدیم (Old Persian Version) | 1895 | Public domain | [pesOPV](<https://ebible.org/pesOPV/>) |
| `pesopcb.json` | فارسی Persian | Open Persian Contemporary Bible (ترجمه معاصر) — modern | 2022 | CC BY-SA 4.0 | [pesopcb](<https://ebible.org/pesopcb/>) |
| `heb.json` | עברית Hebrew | Hebrew Bible: Masoretic OT + Delitzsch NT | 1877 | Public domain | [heb](<https://ebible.org/heb/>) |

### Required attribution (CC BY / CC BY-SA texts)

These texts were changed only by format conversion (verse-per-line → JSON) and removal of notes, cross-references and
bracket marks; the licensors do not endorse these changes. Under CC BY-SA, the converted files are shared under the
same licence ([CC BY-SA 4.0](<https://creativecommons.org/licenses/by-sa/4.0/>)).

- **Bíblia Livre** (`porbr2018.json`) — Todas as Escrituras em português citadas são da Bíblia Livre (BLIVRE),
  Copyright © 2018 Diego Santos, Mario Sérgio, e Marco Teles, <http://sites.google.com/site/biblialivre/> —
  [CC BY 4.0](<https://creativecommons.org/licenses/by/4.0/>). Source: <https://ebible.org/porbr2018/>
- **Indian Revised Version** — Hindi (`hin2017.json`, © 2017, 2018, 2019), Bengali (`benirv.json`, © 2018, 2019),
  Tamil (`tam2017.json`, © 2017, 2019), Telugu (`tel2017.json`, © 2017, 2019), Malayalam (`mal.json`, © 2017, 2019),
  Marathi (`mar.json`, © 2017, 2019): copyright Bridge Connectivity Solutions Pvt. Ltd., CC BY-SA 4.0.
  Source: <https://ebible.org/hin2017/>, /benirv/, /tam2017/, /tel2017/, /mal/, /mar/
- **Literal Standard Version** (`lsv.json`) — The Holy Bible in English, Literal Standard Version, copyright © 2020
  Covenant Press and the Covenant Christian Coalition, CC BY-SA 4.0, <https://www.lsvbible.com/>.
  Source: <https://ebible.org/englsv/>
- **Free Bible Version** (`fbv.json`) — copyright © 2018 Dr. Jonathan Gallagher, CC BY-SA 4.0. Source: <https://ebible.org/engfbv/>
- **Versión Biblia Libre** (`spavbl.json`) — copyright © 2018–2020 Jonathan Gallagher y Shelly Barrios de Avila,
  CC BY-SA 4.0. Source: <https://ebible.org/spavbl/>
- **Translation for Translators** (`t4t.json`) — copyright © 2008–2017 Ellis W. Deibler, Jr., CC BY-SA 4.0.
  Source: <https://ebible.org/eng-t4t/>. Also changed: of the translator alternatives `<a/b>` and `◄…/…►` only the first
  is kept, and the figure-of-speech tags (`[MTY]`, `[RHQ]`, …), `[#2]` and grammar marks (`(sg)`, `(exc)`, …) are removed.
- **Open Contemporary Bibles from Biblica** — these files are derivative works (format conversion; notes and
  cross-references removed), so the Biblica® trademark is not used in their names in the app. The original work by
  Biblica, Inc. is available for free at www.biblica.com and open.bible. Copyright notices, as required:
  - Biblica® 圣经当代译本™开放资源 版权所有©1979, 2005, 2007, 2011, 2022 Biblica, Inc. / Biblica® Open Chinese Contemporary
    Bible™ (Simplified Script) Copyright © 1979, 2005, 2007, 2011, 2022 by Biblica, Inc. (`cmncbs.json`)
  - Biblica® Open Chinese Contemporary Bible™ (Traditional Script) Copyright © 1979, 2005, 2007, 2012, 2023 by Biblica, Inc. (`cmncbt.json`)
  - Biblica® Open Hindi Contemporary Version™ Copyright © 1978, 2009, 2016, 2019 by Biblica, Inc. (`hincv.json`)
  - Biblica® Open Nepali Contemporary Version™ Copyright © 1998, 2006, 2021, 2024 by Biblica, Inc. (`npioncb.json`)
  - Biblica® Open Persian Contemporary Bible™ Copyright © 1995, 2005, 2018, 2022 by Biblica, Inc. (`pesopcb.json`)
  - Biblica® Open New Arabic Version, Biblica® Ketab El Hayat Majani, Copyright © 1988, 1997, 2012 by Biblica, Inc. (`arbnav.json`)
  - Biblica® Open Nueva Biblia Viva™ Copyright © 2006, 2008 by Biblica, Inc. (`spaonbv.json`)
  - Biblica® Open Nova Bíblia Viva™ Copyright © 2007, 2010 by Biblica, Inc. (`poronbv.json`)
  - Biblica® Open Vietnamese Contemporary Bible™ Copyright © 1982, 1987, 1994, 2005, 2015 by Biblica, Inc. (`vieovcb.json`)
  - Biblica® Toleo Wazi Neno: Bibilia Takatifu™ (Open Kiswahili Contemporary Version) Copyright © 1984, 1989, 2009, 2015
    by Biblica, Inc. (`swhonen.json`)
  - Biblica® Open Cebuano Contemporary Bible™ Copyright © 2009, 2010, 2014, 2024 by Biblica, Inc. (`cebocb.json`)

  “Biblica” is a trademark registered in the United States Patent and Trademark Office by Biblica, Inc. Used with permission.
  Licence: [CC BY-SA 4.0](<https://creativecommons.org/licenses/by-sa/4.0/>). Sources: <https://ebible.org/cmncbs/>,
  /cmncbt/, /hincv/, /npioncb/, /pesopcb/, /arbnav/, /spaonbv/, /poronbv/, /vieovcb/, /swhonen/, /cebocb/
- **Unlocked Literal Bible** — Tagalog (`tglulb.json`, © 2018), Cebuano (`cebulb.json`, © 2019),
  Nepali (`npiulb.json`, © 2019), Swahili (`swhulb.json`, © 2019): copyright Door43 World Missions Community, CC BY-SA 4.0.
  Source: <https://ebible.org/tglulb/>, /cebulb/, /npiulb/, /swhulb/

### Notes on the texts

- **Versification** follows each source. Most match the KJV. Different numbering: `russyn` (Psalms use the
  Greek/Septuagint numbers, so Psalm 23 in English is Psalm 22 here; some other chapters differ), `fralsg`, `ces1613`
  (Psalm titles counted as verse 1, so many Psalms have one more verse), `ukr1871`, `pesopv` (a few chapters).
  Showing two versions side by side lines up verse numbers, not meaning, in those places.
- **Merged verses**: the Chinese Union Version joins some verses (80 empty slots); Telugu IRV has 95 and Marathi IRV 17
  empty slots (e.g. Marathi Genesis 1:18 is missing in the source).
- **Drafts**: `jpnm` and `thafb` are new eBible.org “Freedom Bible” drafts, not established church translations.
- **Burmese** (`myajvb`): the eBible text puts spaces between many words and particles.
- **Vietnamese** (`vie1934`): the source had capitals in the old VNI encoding (`Aùp-ra-ham`); `--fix-vni` repairs them.
- **Merged verses** in the modern texts (a verse range printed as one verse, the other slots `""`): Open Nueva
  Biblia Viva 1850, Open Persian 1507, Open Cebuano 522, T4T 445, Open Chinese 140 each, Japanese 1965 NT 18,
  Hindi 16, Nepali 9, Vietnamese 8.
- **Paraphrases**: Nueva Biblia Viva / Nova Bíblia Viva and T4T are free renderings, good for understanding, less suited
  to close word study. The LSV is literal and uses “YHWH”; T4T and the Hindi/Nepali contemporary versions use
  “Yahweh” (याहवेह).
- **Japanese 1965 NT** (`jpn1965`): the first edition of 新改訳, New Testament only (Old Testament books are empty).
- A few Cebuano and Swahili ULB verses still contain short text-critical notes that are part of the source verse.
