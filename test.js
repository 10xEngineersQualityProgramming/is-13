'use strict';

const tap = require('tap');
const is = require('./');

tap.equal(is(13,true).thirteen(), true);
tap.equal(is('13',true).thirteen(), true);
tap.equal(is('۱۳',true).thirteen(), true); //Arabic
tap.equal(is('XIII',true).thirteen(), true);
tap.equal(is('xiii',true).thirteen(), true);
tap.equal(is('IIIIIIIIIIIII',true).thirteen(), true); //Alternative form of roman numeral.
tap.equal(is('IlIlIlIlIlIlI',true).thirteen(), true); //Looks like an alternative form for roman numeral.

tap.equal(is('https://en.wikipedia.org/wiki/This_Is_Thirteen',true).thirteen(), true); // Because it is thirteen
tap.equal(is('https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg',true).thirteen(), true);
tap.equal(is('http://www.metal-archives.com/images/1/5/3/7/153772.jpg',true).thirteen(), false);
tap.equal(is('https://www.youtube.com/watch?v=pte3Jg-2Ax4',true).thirteen(), true);
tap.equal(is('https://www.youtube.com/watch?v=33Kv5D2zwyc',true).thirteen(), true);
tap.equal(is('thirteen',true).thirteen(), true);
tap.equal(is('Thirteen',true).thirteen(), true);
tap.equal(is('Remy Hadley',true).thirteen(), true);
tap.equal(is('Olivia Wilde',true).thirteen(), true);
tap.equal(is('weedle',true).thirteen(), true);
tap.equal(is("baker's dozen",true).thirteen(), true);
tap.equal(is("Dr. Remy Beauregard Hadley",true).thirteen(), true);
tap.equal(is("Patty Tsai",true).thirteen(), true);
tap.equal(is("PT",true).thirteen(), true);
tap.equal(is("Washington Luís",true).thirteen(), true);
tap.equal(is("Millard Fillmore",true).thirteen(), true);
tap.equal(is('https://en.wikipedia.org/wiki/XIII_(video_game)',true).thirteen(), true);

// imdbs
tap.equal(is("http://www.imdb.com/title/tt0798817/",true).thirteen(), true);
tap.equal(is("https://www.imdb.com/title/tt2991516/",true).thirteen(), true);

//year of birth test
tap.equal(is("2003",true).yearOfBirth(), false);

// Imaginary 13's tests
tap.equal(is("13+0i",true).thirteen(), true);
tap.equal(is("13i",true).thirteen(), true);
tap.equal(is("13 + 13i",true).thirteen(), true);
tap.equal(is("12i",true).thirteen(), false);

// upside down tests
tap.equal(is("Ei",true).thirteen(), true);
tap.equal(is("EI",true).thirteen(), true);
tap.equal(is("E1",true).thirteen(), true);
tap.equal(is("El",true).thirteen(), true);
tap.equal(is("E|",true).thirteen(), true);

// Flipped characters
tap.equal(is("ƖƐ",true).thirteen(), true);
tap.equal(is("ƐƖ",true).thirteen(), true);

// Password variations tests
tap.equal(is("th1rt33n",true).thirteen(), true);
tap.equal(is("th1rte3n",true).thirteen(), true);
tap.equal(is("th1rteen",true).thirteen(), true);
tap.equal(is("thirt3en",true).thirteen(), true);
tap.equal(is("thirt33n",true).thirteen(), true);
tap.equal(is("thirte3n",true).thirteen(), true);

// Languages tests
tap.equal(is("dertien",true).thirteen(), true); // Afrikaans / Dutch
tap.equal(is("ثلاثة عشر",true).thirteen(), true); // Arabic
tap.equal(is("تلطاشر",true).thirteen(), true); // Arabic Slang 
tap.equal(is("تلتاشر",true).thirteen(), true); // Arabic Slang
tap.equal(is("طلتاشر",true).thirteen(), true); // Arabic Slang
tap.equal(is("طلطاشر",true).thirteen(), true); // Arabic Slang
tap.equal(is("dertiendertien",true).thirteen(), true); // Double Dutch
tap.equal(is("seri-un-teng",true).thirteen(), true); // Belter creole
tap.equal(is("seriunteng",true).thirteen(), true);
tap.equal(is("serí-un-teng",true).thirteen(), true);
tap.equal(is("seríunteng",true).thirteen(), true);
tap.equal(is("тринадесет",true).thirteen(), true); // Bulgarian
tap.equal(is("тринайсет",true).thirteen(), true); // Also Bulgarian
tap.equal(is("tretze",true).thirteen(), true); // Catalan
tap.equal(is("napulo ug tulo",true).thirteen(), true); // Cebuano
tap.equal(is("třináct",true).thirteen(), true); // Czech
tap.equal(is("十三",true).thirteen(), true); // Chinese (Traditional)
tap.equal(is("拾參",true).thirteen(), true); // Chinese (Traditional, upper case)
tap.equal(is("拾叁",true).thirteen(), true); // Chinese (simplified, upper case)
tap.equal(is("拾叄",true).thirteen(), true); // Chinese (variant)
tap.equal(is("拾参",true).thirteen(), true); // Chinese (variant)
tap.equal(is("trinaest",true).thirteen(), true); // Croatian / Serbian (latin)
tap.equal(is("tretten",true).thirteen(), true); // Danish / Norwegian
tap.equal(is("senthi",true).thirteen(), true);  //Dothraki
tap.equal(is("kolmteist",true).thirteen(), true); // Estonian
tap.equal(is("thirteen",true).thirteen(), true); // English
tap.equal(is("labintatlo",true).thirteen(), true); // Filipino
tap.equal(is("kolmetoista",true).thirteen(), true); // Finnish
tap.equal(is("treize",true).thirteen(), true); // French
tap.equal(is("treizième",true).thirteen(), true); // French (ordinal form)
tap.equal(is("dreizehn",true).thirteen(), true); // German
tap.equal(is("ცამეტი",true).thirteen(), true);
tap.equal(is("‘umikūmākolu",true).thirteen(),true); //Hawaiian
tap.equal(is('שלוש עשרה',true).thirteen(), true); // Hebrew
tap.equal(is('שלושעשרה',true).thirteen(), true); // Hebrew (without space)
tap.equal(is('ֹשְלֹש- עֶשְֹרֵה',true).thirteen(), true); // Hebrew (with punctuation)
tap.equal(is('שלושה עשר',true).thirteen(), true); // Hebrew (male form)
tap.equal(is('שלושהעשר',true).thirteen(), true); // Hebrew (male form, without space)
tap.equal(is('ֹשְלֹשָה- עָשָֹר',true).thirteen(), true); // Hebrew (male form, with punctuation)
tap.equal(is('יג',true).thirteen(), true); // Hebrew (gematria)
tap.equal(is('י״ג',true).thirteen(), true); // Hebrew (gematria - apostrophes)
tap.equal(is("तेरह",true).thirteen(), true); // Hindi
tap.equal(is("tizenhárom",true).thirteen(), true); // Hungarian
tap.equal(is("trí déag",true).thirteen(), true); // Irish
tap.equal(is("tredici",true).thirteen(), true); // Italian
tap.equal(is("on üç",true).thirteen(), true); // Turkish
tap.equal(is("ಹದಿಮೂರು",true).thirteen(), true); //Kannada (thirteen)
tap.equal(is("పదమూడు",true).thirteen(), true); //Telugu
tap.equal(is("೧೩",true).thirteen(), true); //Kannada (13)
tap.equal(is("열셋",true).thirteen(), true); // Korean
tap.equal(is("십삼",true).thirteen(), true); // Korean
tap.equal(is("sêzdeh",true).thirteen(), true); // Kurdish
tap.equal(is("tredecim",true).thirteen(), true); // Latin
tap.equal(is("trīspadsmit",true).thirteen(), true); // Latvian
tap.equal(is("trylika",true).thirteen(), true); // Lithuanian
tap.equal(is("dräizéng",true).thirteen(), true); // Luxembourgishthirtees
tap.equal(is("тринаесет",true).thirteen(), true); // Macedonian
tap.equal(is("tiga belas",true).thirteen(), true); // Malay
tap.equal(is("арван",true).thirteen(), true); // Mongolian
tap.equal(is(".---- ...--",true).thirteen(), true); // Morse code
tap.equal(is("matlactlihuan yei",true).thirteen(), true); // Classical Nahuatl (Aztec)
tap.equal(is("mahtlactli omei",true).thirteen(), true); // Nahuatl variant
tap.equal(is("mahtlactli ihuan yei",true).thirteen(), true); // Nahuatl variant
tap.equal(is("irteenthay",true).thirteen(), true); // Pig Latin
// Beginning of all Polish variants 🇵🇱
tap.equal(is("trzynaście",true).thirteen(), true); // Polish
tap.equal(is("trzynasty",true).thirteen(), true); // Polish
tap.equal(is("trzynasta",true).thirteen(), true); // Polish
tap.equal(is("trzynaste",true).thirteen(), true); // Polish
tap.equal(is("trzynaści",true).thirteen(), true); // Polish
tap.equal(is("trzynastego",true).thirteen(), true); // Polish
tap.equal(is("trzynastej",true).thirteen(), true); // Polish
tap.equal(is("trzynastych",true).thirteen(), true); // Polish
tap.equal(is("trzynastemu",true).thirteen(), true); // Polish
tap.equal(is("trzynastym",true).thirteen(), true); // Polish
tap.equal(is("trzynastą",true).thirteen(), true); // Polish
tap.equal(is("trzynastymi",true).thirteen(), true); // Polish
tap.equal(is("trzynastu",true).thirteen(), true); // Polish
tap.equal(is("trzynastek",true).thirteen(), true); // Polish
tap.equal(is("trzynastoma",true).thirteen(), true); // Polish
tap.equal(is("trzynaścioro",true).thirteen(), true); // Polish
tap.equal(is("trzynastka",true).thirteen(), true); // Polish
tap.equal(is("trzynastki",true).thirteen(), true); // Polish
tap.equal(is("trzynastką",true).thirteen(), true); // Polish
tap.equal(is("trzynastce",true).thirteen(), true); // Polish
tap.equal(is("trzynastko",true).thirteen(), true); // Polish
tap.equal(is("trzynaściorgiem",true).thirteen(), true); // Polish
tap.equal(is("trzynaściorgu",true).thirteen(), true); // Polish
tap.equal(is("trzynaściorga",true).thirteen(), true); // Polish
tap.equal(is("trzynastokrotny",true).thirteen(), true); // Polish
tap.equal(is("trzynastokrotnie",true).thirteen(), true); // Polish
tap.equal(is("trzynastokrotną",true).thirteen(), true); // Polish
tap.equal(is("trzynastokrotnemu",true).thirteen(), true); // Polish
tap.equal(is("trzynastokrotnej",true).thirteen(), true); // Polish
tap.equal(is("trzynastokrotnych",true).thirteen(), true); // Polish
tap.equal(is("trzynastokrotność",true).thirteen(), true); // Polish
tap.equal(is("trzynastokrotności",true).thirteen(), true); // Polish
tap.equal(is("trzynastokrotnością",true).thirteen(), true); // Polish
// End of all Polish variants 🇵🇱
tap.equal(is("treze",true).thirteen(), true); // Portuguese
tap.equal(is("ਤੇਰਾਂ",true).thirteen(), true); // Punjabi
tap.equal(is("੧੩",true).thirteen(), true); // Punjabi
tap.equal(is("treisprezece",true).thirteen(), true); // Romanian
tap.equal(is("тринадцать",true).thirteen(), true); // Russian
tap.equal(is("тринаест",true).thirteen(), true); // Serbian (cyrillic)
tap.equal(is("trinásť",true).thirteen(), true); // Slovak
tap.equal(is("wa’maH wej",true).thirteen(), true); // Klingon
tap.equal(is("trinajst",true).thirteen(), true); // Slovenian
tap.equal(is("trece",true).thirteen(), true); // Spanish
tap.equal(is("dektri",true).thirteen(), true); // Speranto
tap.equal(is("trese",true).thirteen(), true); // Tagalog
tap.equal(is("tretton",true).thirteen(), true); // Swedish
tap.equal(is("பதின்மூன்று",true).thirteen(), true); // Tamil
tap.equal(is("สิบสาม",true).thirteen(), true); // Thai
tap.equal(is("тринадцять",true).thirteen(), true); // Ukrainian
tap.equal(is("تیرہ",true).thirteen(), true); // Urdu
tap.equal(is("tayra",true).thirteen(), true); // Roman Urdu
tap.equal(is("tri ar ddeg",true).thirteen(), true); // Welsh
tap.equal(is("דרייַצן",true).thirteen(), true); // Yiddish
tap.equal(is("דרייצן",true).thirteen(), true); // Yiddish (without diacritics),
tap.equal(is("kumi na tatu",true).thirteen(), true); // Swahili
tap.equal(is("പതിമൂന്ന്",true).thirteen(), true); // Malayalam
tap.equals(is("१३",true).thirteen(), true); //Devanagari
tap.equals(is("तेह्र",true).thirteen(), true); //Nepali
tap.equal(is("quainel",true).thirteen(), true); // Quenya
tap.equal(is("mînuiug",true).thirteen(), true); // Sindarin
tap.equal(is("7h1r733n",true).thirteen(), true); // Crypto


tap.equal(is("B",true).thirteen(), true); // B looks like 13
tap.equal(is("b",true).thirteen(), false); // b does not look like 13
tap.equal(is("ß",true).thirteen(), true); // German: looks like 13
tap.equal(is("ẞ",true).thirteen(), true); // German: looks like 13
tap.equal(is("Β",true).thirteen(), true); // Upper case beta, looks like 13
tap.equal(is("β",true).thirteen(), true); // lower case beta
tap.equal(is("阝",true).thirteen(), true); // Chinese Kangxi radical: Looks like 13

tap.equal(is("i3",true).thirteen(),true); //i3 looks like 13 when upper case
tap.equal(is("I3",true).thirteen(),true); //I3 looks like 13
tap.equal(is("l3",true).thirteen(),true); //l3 looks like 13
tap.equal(is("L3",true).thirteen(),true); //l3 looks like 13 when lower case
tap.equal(is("|3",true).thirteen(),true); //|3 looks like 13
tap.equal(is("!3",true).thirteen(),true); //!3 looks like 13

tap.equal(is("Dilma",true).thirteen(), true); // Because the supreme Queen of Brazil is 13, amigo
tap.equal(is("Lula",true).thirteen(), true); // Because the supreme King of Brazil is 13, companheiro
tap.equal(is("Lula-Livre",true).thirteen(), true); // Because the supreme King of Brazil is 13, companheiro

tap.equal(is(25,true).minus(12,true).thirteen(),true); // 25 - 12 === 13
tap.equal(is(1,true).plus(12,true).thirteen(),true);   // 1  + 12 === 13

tap.equal(is(2,true).times(8,true).plus(11,true).minus(1,true).dividedby(2,true).thirteen(), true) // (((2 * 8) + 11) - 1) / 2 === 13
tap.equal(is(10,true).minus(1,true).plus(32,true).dividedby(4,true).times(3,true).thirteen(), false) // (((10 - 1) + 32) / 4) * 3 === 30.75

tap.equal(is(5.3,true).plus(0.5,true).times(5,true).minus(4,true).dividedby(2,true).roughly.thirteen(), true) // (((12.5 * 2) + 4) / 5) - .5

tap.equal(is(13,true).base(10,true).thirteen(), true);
tap.equal(is(14,true).base(10,true).thirteen(), false);
tap.equal(is("1101",true).base(2,true).thirteen(), true);
tap.equal(is("1111",true).base(2,true).thirteen(), false);
tap.equal(is("15",true).base(8,true).thirteen(), true);
tap.equal(is("13",true).base(8,true).thirteen(), false);
tap.equal(is("d",true).base(16,true).thirteen(), true);
tap.equal(is("D",true).base(16,true).thirteen(), true);
tap.equal(is("A",true).base(16,true).thirteen(), false);

//test function that is returning 13
tap.equals(is(function(){return 13;},true).returning.thirteen(),true);

// Same 13 characters tests
tap.equal(is("|||||||||||||",true).thirteen(), true);
tap.equal(is("/////////////",true).thirteen(), true);
tap.equal(is("🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱",true).thirteen(), true);
tap.equal(is("oooooooooooooo",true).thirteen(), false);
tap.equal(is("bbbbbbbbbbb",true).thirteen(), false);
tap.equal(is("||h||||||||||",true).thirteen(), false);
tap.equal(is("///i/////////",true).thirteen(), false);

