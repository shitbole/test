// ==UserScript==
// @name       psntrophyleaders FIX
// @version       2.1.0
// @author       Luhari & DenDelisted
// @description       upgrade
// @icon       https://i.imgur.com/M32n7XP.png
// @match       https://psntrophyleaders.com/*
// @downloadURL       https://github.com/shitbole/test/raw/main/psntrophyleaders%20FIX.user.js
// @updateURL       https://github.com/shitbole/test/raw/main/psntrophyleaders%20FIX.user.js
// @grant         GM_addStyle
// @grant         GM_xmlhttpRequest
// ==/UserScript==







// admin only
var REMOVE_ID = true







GM_addStyle ( `
    html, body {
        background: url('https://i.imgur.com/jHChbSI.png') #10141B repeat !important;
    }
    a, a.game-title {
        text-decoration: none !important;
        text-decoration-line: none !important;
        text-decoration-thickness: initial !important;
        text-decoration-style: initial !important;
        text-decoration-color: initial !important;
    }
    a:hover , a.game-title:hover {

        text-decoration: none !important;
    }
    .mainBG {
        background: url('https://i.imgur.com/jHChbSI.png') #10141B repeat !important;
    }
    div.platformlabel.ps3 {
        padding: 1px 8px !important;
        font-weight: normal !important;
        text-align: center;
    }
    div.platformlabel.ps4 {
        padding: 1px 8px !important;
        font-weight: normal !important;
        text-align: center;
    }
    div.platformlabel.ps5 {
        padding: 0px 7px !important;
        font-weight: normal !important;
        text-align: center;
        border: 1px solid #b1b1b1 !important;
    }
    div.platformlabel.psv {
        padding: 1px 8px !important;
        font-weight: normal !important;
        text-align: center;
    }
   .progresscontainer {
       background-color: #292b2fbd !important;
       height: 5px !important;
       border: 0px !important;
       padding: 1px !important;
       border-radius: 999px !important;
    }
   .progressbar {
       background-color: #83a4e5 !important;
       height: 5px !important;
       border: 0px !important;
       padding: 0px !important;
       border-radius: 999px !important;
    }
   .partialprogressbar {
       background-color: #8cf !important;
       height: 5px !important;
       border: 0px !important;
       padding: 0px !important;
       border-radius: 999px !important;
    }
   .section_content .user_details .progresscontainer {
       width: 100%;
   }
    #subnav {
        background: url('https://i.imgur.com/jHChbSI.png') #10141B repeat !important;
    }
    .html {
        background: url('https://i.imgur.com/jHChbSI.png') #10141B repeat !important;
    }
    .body {
        background: url('https://i.imgur.com/jHChbSI.png') #10141B repeat  !important;
    }
    #userPage  {
        background-color: #1d2126 !important;
    }
    .userHeader {
        background-color: #1d2126 !important;
    }
    .recent-trophies>div.window {
        background-color: #1d2126 !important;
    }
    .sort-row {
        background-color: #33383e !important;
        color: #cecece !important;
        margin-bottom: 2px; !important
    }
    .page-header {
        background-color: #1d2126 !important;
        color: #cecece !important;
    }
    .mainSection {
        background-color: #ededed !important;
        color: #ededed !important;
    }
    .options {
        background-color: #1d2126 !important;
    }
    .gamesRight {
        background-color: #1d2126 !important;
    }
    .gamebreadcrumb {
        background-color: #1d2126 !important;
        padding-left: 10px;
    }
    .filter-row, .recent-trophies {
        background-color: #1d2126 !important;
    }

    .gameMain div.platformlabel {
       -webkit-transform: rotate(0deg)  !important;
       top: -25px  !important;
       right: auto !important;
       position: absolute  !important;
       bottom: auto  !important;

    }
    .gameHeadContainer {
        border: 3px solid #ccc !important;
        box-shadow: 0px 0px 6px 1px #000 !important;
    }
    .gameHeadSpace {
        border-radius: 4px !important;
        -webkit-border-radius: 4px !important;
        padding-right: 2px !important;
    }
    tr.oddrow, tr.odd {
        background-color: #ededed;
    }
    tr.complete.odd, tr.earned.odd {
        background-color: #e6ede5 !important;
    }
    tr.complete.even, tr.earned.even {
        background-color: #e6ede5 !important;
    }
    tr.complete.hid, tr.earned.hid {
        background-color: #e4de42 !important;
    }

`


/*
   tr.oddrow, tr.odd {
        background-color: #2e3236;
    }
    tr.evenrow, tr.even {
        background-color: #24282c;
    }
    a.game-title {
       color: #dfdfdf !important;
   }
*/

);



var REPLACE_FLAGS = true
var REMOVE_FLAGGLOSS = true





const arrayDELISTEDorange = [
'babylons-fall-ps5',
'babylons-fall-ps4',
'minecraft-story-mode-ps3',
'minecraft-story-mode-ps4',
'minecraft-story-mode-season-2-ps4',
'assetto-corsa-ps4-1',
'will-a-wonderful-world-ps4-2',
'will-a-wonderful-world-ps4-1',
'godzilla-ps4',
'walking-dead-the-telltale-series-collection-ps4',
'sherlock-holmes-the-devils-daughter-ps4',
'sherlock-holmes-the-devils-daughter-ps4-1',
'sherlock-holmes-the-devils-daughter-ps4-2',
'sherlock-holmes-crimes-and-punishments-ps4-ps3',
'ドラゴンクエストxi　過ぎ去りし時を求めて-ps4',
];
const arrayDELISTED = [
'fall-guys-ps4',
'marvel-ultimate-alliance-ps4',
'legend-of-korra-ps4',
'marvel-ultimate-alliance-2-ps4',
'affected-the-manor-ps4-1',
'affected-the-manor-ps4',
'catan-ps3',
'cybxus-heart-ps4-3',
'grand-theft-auto-3-ps4',
'bellator-ps3',
'grand-theft-auto-vice-city-ps4',
'aborigenus-ps4-2',
'castle-of-no-escape-2-ps4-2',
'nightmares-from-the-deep-3-davy-jones-ps4',
'nightmares-from-the-deep-2-the-sirens-call-ps4',
'sea-of-memories-ps4-1',
'1000-top-rated-ps4',
'adams-venture-chronicles-ps3',
'battle-rockets-psvita',
'grand-theft-auto-san-andreas-ps4',
'invector-ps4',
'nightmares-from-the-deep-the-cursed-heart-ps4',
'octonaut-ps4',
'octonaut-ps4-1',
'octonaut-ps4-3',
'whiteboyz-wit-attitude-the-pursuit-of-money-ps4',
'whiteboyz-wit-attitude-the-pursuit-of-money-ps4-1',
'will-a-wonderful-world-ps4',
'will：素晴らしき世界-ps4',
'ドラゴンクエスト無料版-ps4',
];
const arrayCODE = [
'メモリーズオフ-innocent-fille-　ノエル-fullbloom-ps4',
'ペルソナ４-ダンシング・オールナイト-ps4',
];
const arrayPHYSICAL = [
'foxyland-2-psvita-3',
'mooseman-psvita',
'foxyland-psvita-3',
'just-ignore-them-psvita-2',
'nicole-psvita',
'steinsgate-ps3-1',
'tales-from-the-borderlands-ps4-ps3',
'takotan-psvita-4',
'task-force-kampas-psvita-4',
'winters-daydream-psvita-3',
'walking-dead-the-final-season-ps4-3',
'walking-dead-the-final-season-ps4-2',
];
const arrayDIGITAL = [
'tales-from-the-borderlands-ps4',
'bioshock-2-remastered-ps4-1',
'bioshock-2-remastered-ps4',
'bioshock-remastered-ps4-1',
'bioshock-remastered-ps4',
'walking-dead-the-final-season-ps4',
'sly-3-psvita',
'assassins-creed-chronicles-china-ps4',
'assassins-creed-chronicles-india-ps4',
'assassins-creed-chronicles-russia-ps4',
'walking-dead-the-final-season-ps4-1',
];
const arrayREMOVEVITA = [
'ratchet-clank-into-the-nexus-ps3-psvita',
'alteric-ps4-psvita',
'alteric-ps4-psvita-1',
'one-eyed-kutkh-ps4-psvita-1',
'batman-arkham-origins-ps3-psvita',
'creepy-road-ps4-psvita',
'月の彼方で逢いましょう-ps4-psvita',
'creepy-road-ps4-psvita-1',
'deep-ones-ps4-psvita-1',
'deep-ones-ps4-psvita-2',
'drowning-ps4-psvita',
'drowning-ps4-psvita-1',
'one-eyed-kutkh-ps4-psvita',
'energy-balance-ps4-psvita',
'energy-balance-ps4-psvita-2',
'energy-cycle-edge-ps4-psvita',
'energy-cycle-edge-ps4-psvita-2',
'energy-cycle-ps4-psvita',
'energy-cycle-ps4-psvita-2',
'energy-invasion-ps4-psvita',
'energy-invasion-ps4-psvita-1',
'iconoclasts-ps4-psvita',
'metropolis-lux-obscura-ps4-psvita',
'metropolis-lux-obscura-ps4-psvita-1',
'mooseman-ps4-psvita',
'mooseman-ps4-psvita-1',
'north-ps4-psvita',
'north-ps4-psvita-1',
'planet-rix-13-ps4-psvita-1',
'planet-rix-13-ps4-psvita-2',
'save-the-ninja-clan-ps4-psvita',
'save-the-ninja-clan-ps4-psvita-1',
'sigi-a-fart-for-melusina-ps4-psvita',
'sigi-a-fart-for-melusina-ps4-psvita-1',
'skytime-ps4-psvita',
'skytime-ps4-psvita-1',
'spiral-splatter-ps4-psvita-2',
'spiral-splatter-ps4-psvita-3',
'steinsgate-0-ps4-ps3-psvita',
'twin-robots-ps4-psvita-1',
'twin-robots-ps4-psvita-3',
'キスベル-ps4-psvita',
'ホチキス-ps4-psvita',
];
const arrayREMOVEPS3 = [
'hohokum-ps4-ps3-psvita-3',
'7scarlet-ps3-psvita',
'steinsgate-0-ps4-ps3-psvita',
'steinsgate-0-ps4-ps3-psvita-1',
'かりぐらし恋愛-ps4-ps3-psvita',
'スキとスキとでサンカク恋愛-ps4-ps3-psvita',
'レイジングループ-ps4-ps3-psvita',
];
const arrayREMOVEPS4 = [
'alteric-ps4-psvita-2',
'alteric-ps4-psvita-3',
'deep-ones-ps4-psvita',
'deep-ones-ps4-psvita-3',
'drowning-ps4-psvita-2',
'one-eyed-kutkh-ps4-psvita-3',
'one-eyed-kutkh-ps4-psvita-2',
'drowning-ps4-psvita-3',
'energy-balance-ps4-psvita-1',
'energy-balance-ps4-psvita-3',
'energy-cycle-edge-ps4-psvita-1',
'energy-cycle-edge-ps4-psvita-3',
'energy-cycle-ps4-psvita-1',
'energy-cycle-ps4-psvita-3',
'energy-invasion-ps4-psvita-2',
'energy-invasion-ps4-psvita-3',
'its-spring-again-ps4-psvita',
'its-spring-again-ps4-psvita-1',
'metropolis-lux-obscura-ps4-psvita-2',
'metropolis-lux-obscura-ps4-psvita-3',
'north-ps4-psvita-2',
'north-ps4-psvita-3',
'planet-rix-13-ps4-psvita',
'planet-rix-13-ps4-psvita-3',
'sigi-a-fart-for-melusina-ps4-psvita-2',
'sigi-a-fart-for-melusina-ps4-psvita-3',
'spiral-splatter-ps4-psvita',
'spiral-splatter-ps4-psvita-1',
'steinsgate-0-ps4-ps3-psvita-1',
'twin-robots-ps4-psvita',
'twin-robots-ps4-psvita-2',
'콥스-파티-blood-drive-ps4-psvita',
];

const arrayOR =[
/*'invector-ps4',
'battle-rockets-psvita',*/
];
const arrayRR =[
/*'invector-ps4-1',
'battle-rockets-2-0-psvita-1',
'battle-rockets-2-0-psvita',*/
];


const arrayEU = [
'aery-broken-memories-ps4',
'active-neurons-3-wonders-of-the-world-ps5-1',
'desert-racing-gst-ps4',
'murder-diaries-2-ps4-1',
'splash-cars-ps5-3',
'splash-cars-ps4-2',
'personality-and-psychology-premium-ps5',
'tarot-readings-premium-ps5-1',
'cow-g-ps4-1',
'cow-g-ps5',
'quick-mafs-advanced-ps4-1',
'quick-mafs-advanced-ps5-1',
'pizza-delivery-boy-who-saved-the-world-ps5-1',
'pizza-delivery-boy-who-saved-the-world-ps4-1',
'donut-break-ps5',
'burger-break-ps5',
'burger-break-ps4',
'burger-break-head-to-head-ps5',
'burger-break-head-to-head-ps4',
'saint-patricks-day-break-2-head-to-head-ps4',
'saint-patricks-day-break-2-head-to-head-ps5',
'moto-roader-mc-ps4-1',
'moto-roader-mc-ps5-1',
'radioactive-dwarfs-evil-from-the-sewers-ps4',
'blackberry-honey-ps4-1',
'blitz-breaker-ps5-1',
'pretty-girls-breakers-ps4-1',
'pretty-girls-breakers-ps5-1',
'blackberry-honey-ps5-1',
'dead-tree-of-ranchiuna-ps5',
'arkan-the-dog-adventurer-ps5-1',
'lucid-cycle-ps5',
'akinofa-ps5-2',
'null-drifter-ps5',
'mages-and-treasures-ps5-1',
'mages-and-treasures-ps4-1',
'castle-of-pixel-skulls-ps5-1',
'phlegethon-ps4',
'lucid-cycle-ps4-1',
'gardeners-path-ps5',
'el-gancho-ps5-1',
'el-gancho-ps4-1',
'ammo-pigs-cocked-and-loaded-ps4-1',
'top-gun-air-combat-ps4',
'dead-tree-of-ranchiuna-ps4-1',
'futbol-break-ps5-1',
'ketchup-story-ps4',
'would-you-like-to-run-an-idol-cafe-2-ps5-1',
'would-you-like-to-run-an-idol-cafe-2-ps4-1',
'rogue-explorer-ps5',
'memories-of-east-coast-ps5',
'santas-workshop-ps5',
'6souls-ps5',
'ketchup-story-ps5',
'one-night-stand-ps5',
'valentine-candy-break-2-ps4',
'valentine-candy-break-2-ps5',
'saint-patricks-day-break-2-ps4',
'saint-patricks-day-break-2-ps5',
'valentine-candy-break-2-head-to-head-ps5-1',
'valentine-candy-break-2-head-to-head-ps4',
'trivia-for-dummies-ps4',
'christmas-run-ps5',
'brotherhood-united-ps5-2',
'chick-c-ps5',
'round-invaders-ps4-1',
'task-force-kampas-ps5-3',
'mekabolt-ps5',
'mad-rat-dead-ps4-2',
'orbibot-ps5-1',
'aery-dreamscape-ps4',
'chick-c-ps4-1',
'barry-the-bunny-ps5',
'gleylancer-ps5-1',
'meme-run-2-ps4-1',
'bai-qu-hundreds-of-melodies-ps5',
'nape-retroverse-collection-ps5',
'nape-retroverse-collection-ps4',
'dr-oil-ps4',
'kansei-the-second-turn-hd-ps5-1',
'from-heaven-to-earth-ps4-1',
'last-dead-end-ps4-1',
'stilstand-ps4',
'active-neurons-2-ps4-1',
'sushi-run-eu-ps5',
'mymaitê-ps4-1',
'can-you-escape-ps4-1',
'super-onion-boy-2-ps4',
'super-onion-boy-2-ps5',
'aery-a-journey-beyond-time-ps4-1',
'henchman-story-ps5',
'henchman-story-ps4-1',
'pretty-girls-mahjong-solitaire-blue-ps4-1',
'pretty-girls-mahjong-solitaire-blue-ps5-2',
'football-cup-2022-ps5',
'football-cup-2022-ps4',
'lovechoice-ps5-1',
'grey-skies-ps4-1',
'gav-gav-odyssey-ps4',
'starlight-shores-ps4',
'starlight-shores-ps5',
'save-your-nuts-ps4-1',
'ice-cream-break-ps5-1',
'ice-cream-break-head-to-head-ps5',
'sushi-break-2-ps5',
'ravva-and-the-cyclops-curse-ps5-3',
'titan-chaser-ps4',
'roombo-first-blood-ps4-1',
'alveole-ps5',
'alveole-ps4',
'takotan-ps5-2',
'cattch-ps4',
'3d-dot-game-heroes-ps3-1',
'retrace-memories-of-death-ps4-1',
'pantsu-hunter-back-to-the-90s-ps5',
'mythic-ocean-ps4-1',
'mastho-is-together-ps5-2',
'pig-d-ps5',
'tower-of-balloons-otterrific-arcade-ps4',
'ladders-by-powgi-ps5',
'prince-of-landis-ps5-1',
'kinduo-ps5',
'kinduo-ps4-1',
'space-revenge-ps5-1',
'cross-the-moon-ps5',
'jacknhat-ps4',
'jacknhat-ps5',
'gutwhale-ps5',
'magi-trials-ps4',
'magi-trials-ps5',
'murder-diaries-ps4-1',
'active-neurons-puzzle-game-ps5',
'futbol-break-head-to-head-ps5',
'cake-invaders-ps5-1',
'cake-invaders-ps4-2',
'donut-run-ps4',
'donut-run-ps5',
'pantsu-hunter-back-to-the-90s-ps5',
'darker-skies-ps5',
'breakneck-city-ps5-2',
'alba-a-wildlife-adventure-ps4',
'alba-a-wildlife-adventure-ps5',
'ball-lab-ps5-1',
'nowhere-girl-ps5',
'minesweeper-genius-ps4',
'forgotten-city-ps4-1',
'tilting-tiles-ps4-1',
'infestor-ps4',
'bai-qu-hundreds-of-melodies-ps4-1',
'our-church-and-halloween-rpg-story-five-james-version-ps4',
'our-church-and-halloween-rpg-story-five-scott-version-ps4',
'one-eyed-kutkh-ps4-psvita',
'0-degrees-ps5-1',
'little-lily-princess-ps5',
'little-lily-princess-ps4',
'super-destronaut-dx-2-ps5',
'sheep-p-ps4',
'sheep-p-ps5',
'one-escape-ps4',
'farm-frenzy-refreshed-ps4',
'cross-the-moon-ps4',
'castle-of-pixel-skulls-ps4',
'barry-the-bunny-ps4',
'orbibot-ps4-1',
'arrog-ps4-1',
'rusty-gun-ps4',
'one-eyed-lee-and-the-dinner-party-ps4',
'gutwhale-ps4-1',
'whiskey-mafia-franks-story-ps4',
'0-degrees-ps4-2',
'blitz-breaker-ps4-2',
'apple-slash-ps4',
'highschool-romance-ps4-1',
'lovechoice-ps4-1',
'rogue-explorer-ps4',
'space-revenge-ps4-1',
'storytale-ps4-1',
'shiro-ps4',
'gleylancer-ps4-1',
'pukan-bye-bye-ps4',
'whiskey-mafia-leos-family-ps4',
'890b-ps4-1',
'nowhere-girl-ps4',
'pig-d-ps4',
'20-bunnies-ps4',
'sushi-run-ps4',
'ball-lab-ps4-1',
'memories-of-east-coast-ps4-1',
'icecream-break-ps4',
'catch-the-bowling-balls-challenge-mode-edition-breakthrough-gaming-arcade-ps4',
'tanks-vs-tanks-pvp-ps4-1',
'drizzlepath-deja-vu-ps4',
'6souls-ps4',
'zj-the-ball-challenge-level-1c-ps4',
'zj-the-ball-challenge-level-2c-ps4',
'zippy-the-circle-challenge-level-1c-and-level-2c-ps4',
'alexio-ps4',
'36-fragments-of-midnight-ps4-1',
'arkan-the-dog-adventurer-ps4',
'iconoclasts-ps4-psvita',
'grood-ps4',
'lego-dc-super-villains-ps4-1',
'mighty-aphid-ps4',
'we-are-the-dwarves-ps4',
'stranded-deep-ps4',
'lost-castle-ps4',
'star-wars-jedi-fallen-order-ps4-1',
'sid-meiers-civilization-vi-ps4-1',
'fire-pro-wrestling-world-ps4-1',
'burnout-paradise-remastered-ps4-1',
'hex-card-clash-ps4-1',
'knights-of-valour-ps4',
'skyforge-ps4',
'final-fantasy-xv-ps4',
'galak-z-the-dimensional-ps4-1',
'heavy-weapon-ps3-1',
'socom-special-forces-ps3',
'shank-ps3-1',
'clash-of-the-titans-ps3-2',
'queeny-army-ps4',
'futbol-break-head-to-head-ps4-1',
'zj-the-ball-challenge-level-5c-ps4',
'bunny-memory-ps4',
'kansei-the-second-turn-hd-ps4',
'zj-the-ball-challenge-level-4c-ps4',
'breakneck-city-ps4-2',
'mastho-is-together-ps4-1',
'contrast-ps4-1',
'zj-the-ball-challenge-level-3c-ps4',
'prince-of-landis-ps4',
'gardeners-path-ps4',
'ice-cream-break-head-to-head-ps4',
'futbol-break-ps4',
'christmas-run-ps4',
'santas-workshop-ps4',
'36-fragments-of-midnight-psvita-1',
'angels-with-scaly-wings-ps5-1',
'aery-little-bird-adventure-ps4',
'miles-kilo-psvita',
'one-eyed-kutkh-ps4-psvita-3',
'my-aunt-is-a-witch-psvita',
'active-neurons-puzzle-game-psvita-1',
'99vidas-ps4-ps3-psvita-1',
'112th-seed-ps4-1',
'void-gore-ps5-2',
'112th-seed-ps5-1',
'access-denied-ps4-1',
'access-denied-psvita-2',
'active-neurons-puzzle-game-ps4',
'actual-sunlight-psvita-1',
'adventures-of-tintin-the-secret-of-the-unicorn-ps3',
'aegis-of-earth-protonovus-assault-ps4-ps3-psvita-1',
'aer-ps4-1',
'akinofa-ps4-1',
'albedo-eyes-from-outer-space-ps4',
'alien-destroyer-ps4',
'alphaset-by-powgi-ps4',
'alphaset-by-powgi-psvita',
'alteric-ps4-psvita-1',
'alteric-ps4-psvita-3',
'american-football-breakthrough-gaming-arcade-ps4',
'amnesia-memories-psvita-1',
'ancient-stories-gods-of-egypt-ps4',
'angels-with-scaly-wings-ps4-1',
'arcana-heart-3-love-max-ps3-1',
'armored-core-v-ps3-2',
'ascendshaft-and-endless-shaft-ps4',
'ascendshaft-ps4-1',
'astrology-and-horoscope-premium-ps4',
'attack-of-the-toy-tanks-ps4-1',
'attack-of-the-toy-tanks-psvita-1',
'autumns-journey-ps4-1',
'avoid-them-challenge-mode-edition-breakthrough-gaming-arcade-ps4',
'awesome-pea-2-ps4',
'awesome-pea-2-psvita-1',
'awesome-pea-ps4',
'awesome-pea-psvita',
'back-in-1995-ps4',
'back-in-1995-psvita-1',
'balancelot-ps4-1',
'baseball-bout-otterrific-arcade-ps4-1',
'baseball-challenge-mode-edition-breakthrough-gaming-arcade-ps4',
'battle-rockets-2-0-psvita',
'bff-or-die-ps4',
'bioshock-2-remastered-ps4',
'bioshock-remastered-ps4',
'bird-game-ps4-1',
'birthday-of-midnight-ps4-1',
'bishoujo-battle-cyber-panic-ps4-1',
'bishoujo-battle-cyber-panic-ps5-2',
'bishoujo-battle-mahjong-solitaire-ps4-1',
'bishoujo-battle-mahjong-solitaire-ps5',
'black-the-fall-ps4',
'black-white-bushido-ps4-1',
'blackwood-crossing-ps4',
'blasftul-ps4',
'bleep-bloop-ps4',
'blind-men-ps4',
'blind-men-psvita-2',
'bouncy-bullets-2-ps4-1',
'bouncy-bullets-2-ps5-1',
'bouncy-bullets-ps4-2',
'bouncy-bullets-psvita',
'bowling-breakthrough-gaming-arcade-ps4',
'bowling-story-one-jane-version-project-summer-ice-ps4',
'bowling-story-one-mark-version-project-summer-ice-ps4',
'bowling-story-one-pammy-version-project-summer-ice-ps4',
'bowling-story-three-jane-version-project-summer-ice-ps4',
'bowling-story-three-pammy-version-project-summer-ice-ps4',
'bowling-story-two-jane-version-project-summer-ice-ps4',
'bowling-story-two-mark-version-project-summer-ice-ps4',
'bowling-story-two-pammy-version-project-summer-ice-ps4',
'brave-match-ps4',
'breeder-homegrown-directors-cut-ps4',
'breeder-homegrown-directors-cut-psvita',
'briks-2-ps4',
'briks-head-to-head-ps4',
'briks-ps4',
'brotherhood-united-ps4',
'brotherhood-united-psvita-1',
'bucket-knight-ps4',
'bucket-knight-psvita-1',
'bullet-beat-ps4',
'c14-dating-ps4-1',
'c14-dating-ps5-1',
'car-mayhem-ps4-1',
'castle-of-no-escape-2-ps4',
'castle-pals-ps4',
'catch-the-bowling-balls-breakthrough-gaming-arcade-ps4',
'cats-of-war-ps5-1',
'catsofwar-ps4-1',
'cave-bad-ps4-2',
'cave-bad-ps5-2',
'chaoschild-ps4-3',
'chaoschild-psvita-3',
'chickens-on-the-road-ps4',
'christmas-break-2-head-to-head-ps4',
'christmas-break-2-ps4',
'christmas-break-head-to-head-ps4',
'christmas-break-ps4',
'chromagun-ps4',
'chromagun-ps4-3',
'clash-force-ps4',
'classic-snake-adventures-ps4-1',
'coastertrophyset-ps4',
'concept-destruction-ps4',
'concept-destruction-ps5',
'contraptions-ps4-1',
'coolpaintr-ps4-1',
'coolpaintr-ps4-4',
'crazy-gravity-ps4-1',
'crazy-gravity-ps5',
'crazy-machines-vr-ps4',
'creepy-road-ps4-psvita',
'crimson-spires-ps4',
'crimson-spires-ps5',
'crisis-wing-ps4-1',
'crisis-wing-ps5',
'crosskrush-ps4-1',
'crosskrush-ps5',
'crossovers-by-powgi-ps4',
'crossovers-by-powgi-psvita',
'crypt-of-the-serpent-king-ps4-1',
'crypto-by-powgi-ps4',
'crypto-by-powgi-psvita-1',
'cybarian-the-time-travelling-warrior-ps4-1',
'cybarian-the-time-travelling-warrior-psvita-1',
'cybxus-heart-ps4',
'daggerhood-ps4',
'daggerhood-psvita-1',
'dark-mystery-ps4-1',
'dark-sauce-ps4-1',
'date-a-live-rio-reincarnation-ps4-1',
'dating-life-miley-x-emily-ps4',
'dating-life-miley-x-emily-ps5',
'day-without-me-ps4',
'dead-secret-ps4-1',
'deep-ones-ps4-psvita',
'deep-ones-ps4-psvita-1',
'deep-space-rush-ps4-1',
'deep-space-rush-psvita-2',
'delicious-pretty-girls-mahjong-solitaire-ps4-1',
'delicious-pretty-girls-mahjong-solitaire-ps5-1',
'delta-squad-ps4-1',
'demetrios-ps4-1',
'demons-souls-ps3-2',
'devious-dungeon-2-ps4-1',
'devious-dungeon-2-psvita',
'devious-dungeon-ps4',
'devious-dungeon-psvita',
'discovery-ps4-1',
'distraint-2-ps4-1',
'distraint-deluxe-edition-ps4-1',
'distraint-deluxe-edition-psvita',
'dojoran-ps4',
'dojoran-ps5',
'dont-touch-this-button-ps4',
'dont-touch-this-button-ps5-1',
'donut-break-2-head-to-head-ps4',
'donut-break-2-ps4',
'donut-break-head-to-head-ps4',
'donut-break-ps4-1',
'donut-county-ps4-1',
'donutsnjustice-ps4',
'donutsnjustice-ps5',
'doodle-devil-ps3',
'doodle-devil-ps4',
'doodle-devil-psvita',
'doodle-god-ps3',
'doodle-god-ps4',
'doodle-god-psvita',
'doodle-kingdom-ps3',
'doodle-kingdom-ps4',
'doodle-kingdom-psvita',
'dragon-break-classic-head-to-head-ps4',
'dragon-break-classic-ps4',
'dreaming-canvas-ps4-1',
'dreaming-sarah-ps4',
'dreaming-sarah-ps5',
'drowning-ps4-psvita-1',
'drowning-ps4-psvita-2',
'drowning-ps5',
'drunken-fist-ps4-1',
'drunken-fist-ps5-2',
'duck-souls-ps4-1',
'duck-souls-psvita-2',
'dull-grey-ps4-1',
'dull-grey-psvita',
'dungeon-escape-ps4-1',
'dungeons-bombs-ps4-1',
'dungeons-bombs-ps5-1',
'dying：-reborn-ps4',
'dying：-reborn-psvita-2',
'easter-candy-break-head-to-head-ps4',
'easter-candy-break-ps4',
'energy-balance-ps4-psvita-2',
'energy-balance-ps4-psvita-3',
'energy-cycle-edge-ps4-psvita',
'energy-cycle-edge-ps4-psvita-1',
'energy-cycle-edge-ps5',
'energy-cycle-ps4-psvita-2',
'energy-cycle-ps4-psvita-3',
'energy-cycle-ps5',
'energy-invasion-ps4-psvita',
'energy-invasion-ps4-psvita-2',
'enter-digiton-heart-of-corruption-ps4',
'enter-digiton-heart-of-corruption-ps5',
'epic-word-search-collection-2-ps4',
'epic-word-search-collection-2-psvita',
'epic-word-search-collection-ps4',
'epic-word-search-collection-psvita',
'erica-ps4-1',
'etherborn-ps4',
'even-the-ocean-ps4-1',
'evil-inside-ps4-1',
'evil-inside-ps5-1',
'explosive-jake-ps4',
'explosive-jake-psvita',
'fast-striker-ps4-1',
'fast-striker-psvita-1',
'fifty-words-by-powgi-ps4',
'fifty-words-by-powgi-psvita',
'fight-ps4-1',
'fill-a-pix-phils-epic-adventure-ps4-1',
'five-nights-at-freddys-3-ps4-1',
'five-nights-at-freddys-ps4-1',
'flowers-by-powgi-ps4',
'flowers-by-powgi-ps5',
'fluxteria-ps4-1',
'flying-soldiers-ps4',
'football-game-ps4-1',
'football-game-psvita-1',
'foxyland-2-ps4-1',
'foxyland-2-psvita',
'foxyland-ps4-1',
'foxyland-psvita',
'freddy-spaghetti-2-ps4-1',
'freddy-spaghetti-2-ps5',
'freddy-spaghetti-ps4',
'freddy-spaghetti-ps5',
'frogger-returns-ps3-1',
'from-eath-to-heaven-ps4',
'fullblast-ps4',
'fullblast-psvita',
'funny-truck-ps4',
'gabbuchi-ps4',
'ganbare-super-strikers-ps4-1',
'ganbare-super-strikers-psvita-1',
'gaps-by-powgi-ps4',
'gaps-by-powgi-ps5',
'get-to-the-top-breakthrough-gaming-arcade-ps4',
'glo-ps4',
'glo-ps5',
'golf-zero-ps4-1',
'gorogoa-ps4-1',
'grand-museum-vr-ps4',
'grass-cutter-ps4-1',
'grass-cutter-psvita',
'gravity-duck-ps4-1',
'gravity-duck-psvita-1',
'grizzland-ps4',
'guard-duty-ps4',
'guard-duty-psvita-1',
'gun-crazy-ps4-1',
'habroxia-ps4-1',
'habroxia-psvita-1',
'hajwala-ps4',
'halloween-candy-break-2-head-to-head-ps4',
'halloween-candy-break-2-ps4',
'halloween-candy-break-head-to-head-ps4',
'halloween-candy-break-ps4',
'hardcube-ps4',
'hellblade-senuas-sacrifice-ps4',
'hellbreachers-ps4',
'hellbreachers-ps5',
'hentai-vs-evil-ps4-2',
'hentai-vs-evil-ps5-1',
'hero-and-a-garden-ps4-1',
'heroes-trials-ps4',
'heroes-trials-psvita-1',
'hex-tunnel-ps4-1',
'hex-tunnel-touch-ps4',
'highschool-romance-ps5',
'himno-ps4-1',
'himno-psvita-1',
'hiq-ace-ps4',
'hiq-ace-unlimited-ps4-1',
'hoggy2-ps4',
'hoggy2-psvita',
'homestar-vr-special-edition-ps4-2',
'horned-knight-ps4-1',
'horror-break-head-to-head-ps4',
'horror-break-ps4',
'how-to-take-off-your-mask-remastered-ps4-1',
'how-we-soar-ps4',
'i-am-the-hero-ps4',
'i-am-the-hero-psvita-1',
'i-and-me-ps4',
'i-and-me-psvita',
'independence-day-break-head-to-head-ps4',
'independence-day-break-ps4',
'inferno-2-ps4',
'inksplosion-ps4',
'inksplosion-psvita',
'inner-world-ps4-1',
'inner-world-the-last-wind-monk-ps4',
'iro-hero-ps4-1',
'iron-snout-ps4-1',
'iron-snout-psvita-1',
'its-spring-again-ps4-psvita-1',
'jack-n-jill-dx-ps4-2',
'jack-n-jill-dx-psvita-1',
'jackquest-ps4-1',
'jazzpunk-ps4-1',
'jet-set-knights-ps4-1',
'jigsaw-abundance-ps4-1',
'jigsaw-finale-ps4',
'jigsaw-solace-ps4-1',
'jisei-ps4-1',
'jolt-family-robot-racer-ps4-1',
'just-a-phrase-by-powgi-ps4-2',
'just-a-phrase-by-powgi-psvita-1',
'just-ignore-them-ps4-1',
'just-ignore-them-psvita-1',
'knightin-ps4-1',
'knightin-psvita',
'koi-ps4-2',
'ladders-by-powgi-ps4',
'lady-in-a-leotard-with-a-gun-ps4',
'language-of-love-ps4-1',
'league-of-evil-ps4',
'league-of-evil-psvita',
'legend-of-the-skyfish-ps4-1',
'legend-of-the-skyfish-psvita-1',
'legends-of-talia-arcadia-ps4',
'legends-of-talia-arcadia-ps5',
'lego-indiana-jones-2-the-adventure-continues-ps3-1',
'lizard-lady-vs-the-cats-platinum-edition-ps4',
'lizard-lady-vs-the-cats-ps4',
'long-reach-ps4',
'long-reach-psvita',
'loot-hero-dx-ps4',
'lost-wing-ps4-1',
'lumini-ps4-1',
'maitetsupure-station-ps4-1',
'many-faces-ps4',
'marauder-chronicles-curse-over-valdria-ps4',
'marauder-chronicles-curse-over-valdria-ps5',
'mars-odyssey-ps4',
'mask-of-mists-ps4-1',
'mask-of-mists-ps5',
'maze-pedestal-of-trials-ps4-1',
'mecho-tales-ps4-1',
'megaquarium-ps4-1',
'mekabolt-ps4',
'mekabolt-psvita-1',
'mekorama-ps4',
'mekorama-psvita-1',
'memory-lane-2-ps4',
'memory-lane-ps4-1',
'metagal-ps4-1',
'metagal-psvita-1',
'metropolis-lux-obscura-ps4-psvita',
'metropolis-lux-obscura-ps4-psvita-2',
'micetopia-ps4-1',
'midnight-deluxe-ps4',
'midnight-deluxe-psvita',
'milos-quest-ps4',
'milos-quest-psvita',
'mina-michi-ps4-2',
'mina-michi-ps5-2',
'mine-my-mind-ps4-1',
'minefield-ps4-1',
'mixups-by-powgi-ps4',
'mixups-by-powgi-psvita',
'mochi-mochi-boy-ps4',
'mochi-mochi-boy-psvita-1',
'mooseman-ps4-psvita-1',
'more-dark-ps4-1',
'mortal-shell-ps4-1',
'mosaic-ps4',
'moss-ps4',
'music-racer-ps4',
'my-big-sister-ps4',
'my-big-sister-psvita-1',
'nekopara-vol-3-ps4',
'nekopara-vol-4-ps4-1',
'neon-junctions-ps4-1',
'neon-junctions-psvita-1',
'newtonian-inversion-ps4',
'nextgen-sandbox-ps4-1',
'nicole-ps4',
'night-lights-ps4',
'night-lights-ps5',
'normans-great-illusion-ps4-1',
'normans-great-illusion-psvita',
'north-ps4-psvita-1',
'north-ps4-psvita-2',
'nubla-ps4',
'null-drifter-ps4-2',
'nurse-love-addiction-psvita',
'obduction-ps4-1',
'octonaut-ps4-1',
'of-tanks-and-demons-iii-ps4',
'oktoberfest-break-head-to-head-ps4',
'oktoberfest-break-ps4',
'one-finger-death-punch-2-ps4-1',
'one-night-stand-ps4',
'one-word-by-powgi-ps4',
'one-word-by-powgi-psvita',
'orc-slayer-ps4',
'ord-ps4-1',
'our-church-and-halloween-rpg-story-four-ps4-1',
'our-church-and-halloween-rpg-story-one-ps4-1',
'our-church-and-halloween-rpg-story-three-ps4-1',
'our-church-and-halloween-rpg-story-two-ps4-1',
'pacific-wings-trophys-ps4',
'palm-reading-premium-ps4-1',
'pantsu-hunter-back-to-the-90s-ps4-1',
'pantsu-hunter-back-to-the-90s-psvita-1',
'paradox-error-ps4',
'paradox-soul-ps4-1',
'paradox-soul-psvita-1',
'paranormal-activity-ps4-1',
'path-of-motus-ps4-1',
'peasant-knight-ps4',
'peasant-knight-psvita-2',
'perils-of-baking-eu-ps4',
'personality-and-psychology-premium-ps4-1',
'pic-a-pix-classic-2-ps4-1',
'pic-a-pix-classic-2-psvita-1',
'pic-a-pix-classic-ps4',
'pic-a-pix-classic-psvita',
'pic-a-pix-color-2-ps4',
'pic-a-pix-color-2-psvita',
'pic-a-pix-color-psvita',
'pic-a-pix-pieces-ps4',
'pic-a-pix-pieces-psvita',
'pillar-puzzle-escape-ps4',
'pinkman-ps4-1',
'pinkman-ps5',
'pity-pit-ps4-1',
'pizza-break-head-to-head-ps4',
'pizza-break-ps4',
'planet-rix-13-ps4-psvita',
'planet-rix-13-ps4-psvita-2',
'poker-pretty-girls-battle-fantasy-world-edition-ps4-1',
'poker-pretty-girls-battle-fantasy-world-edition-ps5-1',
'poker-pretty-girls-battle-texas-holdem-ps4-1',
'poker-pretty-girls-battle-texas-holdem-ps5-1',
'prehistoric-dude-ps4',
'pretty-girls-klondike-solitaire-ps4-1',
'pretty-girls-klondike-solitaire-ps5-1',
'pretty-girls-mahjong-solitaire-ps4-2',
'pretty-girls-mahjong-solitaire-ps5',
'pretty-girls-panic-plus-ps4-3',
'pretty-girls-panic-plus-ps5-3',
'pretty-girls-panic-ps4-1',
'pretty-girls-panic-ps5-1',
'project-starship-ps4',
'project-starship-x-ps4',
'promesa-ps4',
'punchline-ps4-1',
'punchline-psvita-1',
'puzzle-frenzy-ps4',
'quick-mafs-ps4',
'quick-mafs-ps5',
'rabisco-ps4',
'rabisco-ps5',
'racing-breakthrough-gaming-arcade-ps4-1',
'racing-challenge-mode-edition-breakthrough-gaming-arcade-ps4',
'radio-squid-ps4',
'rally-racing-ps4',
'rally-racing-ps5-1',
'random-heroes-gold-edition-ps4',
'random-heroes-gold-edition-psvita-1',
'ravva-and-the-cyclops-curse-ps4-2',
'red-bow-ps4-1',
'red-bow-psvita',
'red-death-ps4-2',
'reed-2-ps4-1',
'reed-2-psvita',
'reed-remastered-ps4-1',
'reed-remastered-psvita-2',
'reflection-of-mine-ps4',
'reknum-ps4',
'rememoried-ps4-1',
'reminiscence-in-the-night-ps4-1',
'reminiscence-in-the-night-ps5-1',
'reverie-ps4-2',
'reverie-psvita-1',
'rift-racoon-ps4-2',
'rift-racoon-ps5-1',
'road-bustle-ps4-1',
'robozarro-ps4-1',
'rocketsrocketsrockets-ps4',
'roguecube-ps4-1',
'roundout-by-powgi-ps4',
'rush-rover-ps4',
'rush-rover-psvita',
'sables-grimoire-ps4',
'sables-grimoire-ps5-1',
'sagebrush-ps4',
'saint-patricks-day-break-head-to-head-ps4-1',
'saint-patricks-day-break-ps4',
'sakura-nova-ps4-1',
'sakura-nova-ps5-1',
'sakura-succubus-2-ps4',
'sakura-succubus-2-ps5',
'sakura-succubus-3-ps4-1',
'sakura-succubus-3-ps5-1',
'sakura-succubus-4-ps4',
'sakura-succubus-4-ps5',
'sakura-succubus-ps4',
'sakura-succubus-ps5',
'sakura-swim-club-ps4',
'sakura-swim-club-ps5-1',
'salt-and-sanctuary-ps4-1',
'save-the-ninja-clan-ps4-psvita-1',
'semispheres-ps4-1',
'semispheres-psvita-1',
'shikhondo-soul-eater-ps4-1',
'shinrai-broken-beyond-despair-ps4-1',
'shinrai-broken-beyond-despair-ps5-1',
'sigi-a-fart-for-melusina-ps4-psvita',
'sigi-a-fart-for-melusina-ps4-psvita-2',
'sinuca-attack-ps4-1',
'skateboarding-breakthrough-gaming-arcade-ps4-1',
'skatemasta-tcheco-ps4',
'skatemasta-tcheco-ps5',
'skytime-ps4-psvita-1',
'slyde-ps4',
'snake-boat-otterrific-arcade-ps4-1',
'snakes-and-ladders-ps4',
'soulfrost-ps4',
'sound-shapes-ps4-1',
'space-break-2-head-to-head-ps4',
'space-break-2-ps4-1',
'space-break-head-to-head-ps4',
'space-break-ps4',
'space-breakthrough-gaming-arcade-ps4',
'space-intervention-ps4-1',
'space-kabaam-ps4-1',
'space-kabaam-ps5-1',
'spectrewoods-ps4',
'spiral-splatter-ps4-psvita-1',
'spiral-splatter-ps4-psvita-3',
'spirit-of-the-north-ps4-1',
'spot-the-difference-ps4',
'squad-killer-ps4-2',
'squareboy-vs-bullies-ps4',
'squareboy-vs-bullies-psvita-1',
'station-ps4-1',
'steinsgate-ps3-3',
'steinsgate-psvita-2',
'storm-boy-ps4',
'strawberry-vinegar-ps4',
'stretch-ps4',
'suicide-guy-ps4',
'suicide-guy-ps4-2',
'summer-with-the-shiba-inu-ps4',
'super-box-land-demake-ps4',
'super-box-land-demake-psvita-1',
'super-destronaut-dx-2-ps4',
'super-destronaut-dx-ps4-1',
'super-destronaut-dx-psvita-1',
'super-destronaut-land-wars-ps4',
'super-destronaut-land-wars-psvita',
'super-kids-racing-ps4',
'super-korotama-ps4-1',
'super-weekend-mode-ps4',
'super-weekend-mode-psvita',
'super-wiloo-demake-ps4',
'super-wiloo-demake-psvita-1',
'superhero-x-ps4-1',
'survive-mr-cube-ps4-4',
'sushi-break-2-head-to-head-eu-ps5',
'sushi-break-2-head-to-head-ps4',
'sushi-break-2-ps4',
'sushi-break-head-to-head-ps4-1',
'sushi-break-ps4',
'sushi-break-ps5',
'swordbreaker-the-game-ps4',
'swordbreaker-the-game-psvita-1',
'syrup-and-the-ultimate-sweet-ps4-1',
'syrup-and-the-ultimate-sweet-psvita',
'söldner-x-2-final-prototype-definitive-edition-ps4-1',
'taco-break-head-to-head-ps4',
'taco-break-ps4',
'takorita-meets-fries-ps4',
'takorita-meets-fries-ps5',
'takotan-ps4',
'takotan-psvita-3',
'tamiku-ps4-1',
'tannenberg-ps4',
'tarot-readings-premium-ps4-1',
'task-force-kampas-ps4-1',
'task-force-kampas-psvita-3',
'tetras-escape-ps4',
'tetras-escape-psvita',
'theme-park-simulator-ps4',
'through-the-woods-ps4',
'thunder-paw-ps4',
'thunder-paw-psvita-1',
'thunderflash-ps4',
'thunderflash-ps5',
'thy-sword-ps4',
'thy-sword-psvita-1',
'tic-tac-letters-by-powgi-ps4',
'tic-tac-letters-by-powgi-psvita',
'timbermanvs-ps4',
'tokyo-run-ps4-1',
'toon-war-ps4',
'tower-of-beatrice-ps4-1',
'tower-of-beatrice-psvita-1',
'track-breakthrough-gaming-arcade-ps4',
'track-challenge-mode-edition-breakthrough-gaming-arcade-ps4',
'trophy-set-racing-bros-ps5-1',
'twin-robots-ps4-psvita-2',
'twin-robots-ps4-psvita-3',
'twin-robots-ultimate-edition-ps5-1',
'ultra-hat-dimension-ps4',
'ultra-mission-psvita',
'ultragoodness-2-ps4-1',
'ultragoodness-2-ps5-1',
'unicorn-break-head-to-head-ps4',
'unicorn-break-ps4',
'valentine-candy-break-head-to-head-ps4-1',
'valentine-candy-break-ps4-1',
'vasilis-ps4-1',
'vasilis-psvita',
'venus-improbable-dream-ps4-1',
'venus-improbable-dream-ps5-1',
'vera-blanc-full-moon-ps4-1',
'vera-blanc-ghost-in-the-castle-ps4-1',
'violetti-goottii-ps4',
'virtuous-western-ps4',
'virtuous-western-ps5',
'void-gore-ps4-1',
'walking-dead-the-final-season-ps4',
'walking-dead-the-final-season-ps4-3',
'warlocks-tower-ps4',
'warlocks-tower-psvita',
'what-remains-of-edith-finch-ps4-1',
'whiteboyz-wit-attitude-the-pursuit-of-money-ps4-1',
'will-a-wonderful-world-ps4-2',
'winters-daydream-ps4',
'winters-daydream-psvita-1',
'without-escape-ps4-1',
'without-escape-ps5',
'without-escape-psvita-1',
'word-maze-by-powgi-ps4-1',
'word-maze-by-powgi-psvita',
'word-search-by-powgi-ps4',
'word-search-by-powgi-psvita',
'word-sudoku-by-powgi-ps4',
'word-sudoku-by-powgi-psvita',
'word-wheel-by-powgi-ps4',
'word-wheel-by-powgi-psvita',
'wordsweeper-by-powgi-ps4',
'wordsweeper-by-powgi-psvita',
'world-of-nubla-ps4',
'worldend-syndrome-ps4',
'would-you-like-to-run-an-idol-café-ps4-1',
'would-you-like-to-run-an-idol-café-ps5-1',
'xblaze-code-embryo-ps3-2',
'xblaze-code-embryo-psvita-2',
'year-of-springs-ps4-2',
'year-of-springs-ps5-1',
'yoko-yuki-dr-rats-revenge-ps4',
'you-are-king-drift-ps4',
'zero-strain-ps4-1',
'zero-strain-ps5',
'zero-zero-zero-zero-ps4-1',
'zero-zero-zero-zero-psvita-2',
'zeroptian-invasion-ps4',
'zeroptian-invasion-psvita',
'zeus-quest-remastered-ps4-1',
'zippy-the-circle-level-1-and-level-2-ps4',
'zippy-the-circle-level-3-and-level-4-ps4',
'zippy-the-circle-level-5-level-6-and-level-7-ps4',
'zippy-the-circle-level-8-level-9-and-level-10-ps4',
'zippy-the-circle-level-11-level-12-and-level-13-ps4',
'zj-the-ball-level-1-ps4',
'zj-the-ball-level-2-ps4',
'zj-the-ball-level-3-ps4',
'zj-the-ball-level-4-ps4',
'zj-the-ball-level-5-ps4',
'zomb-ps4-1',
'√letter-ps4-2',
'ever-forward-ps4-1',
'√letter-psvita-2',

];
const arrayNA = [
'3d-dot-game-heroes-ps3',
'alveole-ps5-1',
'gardeners-path-ps5-1',
'splash-cars-ps4-3',
'splash-cars-ps5-1',
'alveole-ps4-1',
'moto-roader-mc-ps5',
'moto-roader-mc-ps4',
'saint-patricks-day-run-ps4-1',
'tarot-readings-premium-ps5',
'12-minutes-ps4',
'el-gancho-ps5',
'el-gancho-ps4',
'dr-oil-ps4-2',
'quick-mafs-advanced-ps5',
'donut-break-ps5-1',
'burger-break-ps5-1',
'burger-break-ps4-1',
'burger-break-head-to-head-ps5-1',
'burger-break-head-to-head-ps4-1',
'saint-patricks-day-break-2-head-to-head-ps5-1',
'saint-patricks-day-break-2-head-to-head-ps4-1',
'personality-and-psychology-premium-ps5-1',
'saint-patricks-day-run-ps5-1',
'pretty-girls-breakers-ps5',
'pretty-girls-breakers-ps4',
'quick-mafs-advanced-ps4',
'ice-cream-break-head-to-head-ps5-1',
'valentine-candy-break-2-ps4-1',
'radioactive-dwarfs-evil-from-the-sewers-ps4-2',
'broken-pipe-ps4',
'akinofa-ps5-1',
'futbol-break-ps5',
'castle-of-pixel-skulls-ps4-1',
'blackberry-honey-ps5',
'summertime-madness-ps4',
'summertime-madness-ps5',
'mages-and-treasures-ps5',
'mages-and-treasures-ps4',
'phlegethon-ps4-2',
'from-heaven-to-earth-ps4',
'blackberry-honey-ps4',
'ketchup-story-ps4-1',
'ketchup-story-ps5-1',
'valentine-candy-break-2-ps5-1',
'saint-patricks-day-break-2-ps4-1',
'saint-patricks-day-break-2-ps5-1',
'valentine-candy-break-2-head-to-head-ps4-1',
'valentine-candy-break-2-head-to-head-ps5',
'takorita-meets-fries-ps5-1',
'drizzlepath-deja-vu-ps5-3',
'stilstand-ps4-1',
'active-neurons-2-ps4',
'meme-run-2-ps4',
'alien-destroyer-ps4-1',
'chick-c-ps4',
'chick-c-ps5-1',
'one-night-stand-ps5-1',
'my-friend-peppa-pig-ps5',
'grey-skies-ps4',
'mymaitê-ps4',
'mekabolt-ps5-1',
'gothic-murder-adventure-that-changes-destiny-ps4',
'brotherhood-united-ps5-3',
'mad-rat-dead-ps4-1',
'kansei-the-second-turn-hd-ps5',
'ammo-pigs-cocked-and-loaded-ps4',
'jacknhat-ps4-1',
'ever-forward-ps4',
'prince-of-landis-ps5',
'little-lily-princess-ps5-1',
'little-lily-princess-ps4-1',
'immortus-temporus-ps4-1',
'flowers-by-powgi-ps5-1',
'flowers-by-powgi-ps4-1',
'kinduo-ps4',
'kinduo-ps5-1',
'save-your-nuts-ps4',
'roombo-first-blood-ps4',
'trophy-set-racing-bros-ps5',
'active-neurons-3-wonders-of-the-world-ps5',
'memories-of-east-coast-ps5-2',
'dont-touch-this-button-ps5',
'aery-a-journey-beyond-time-ps4',
'takotan-ps5-3',
'football-cup-2022-ps4-1',
'football-cup-2022-ps5-1',
'cattch-ps4-1',
'retrace-memories-of-death-ps4',
'marauder-chronicles-curse-over-valdria-ps5-1',
'tanks-vs-tanks-ps4-1',
'pig-d-ps5-1',
'brave-match-ps4-1',
'gutwhale-ps5-1',
'gutwhale-ps4',
'20-bunnies-ps4-2',
'donut-run-ps5-1',
'mythic-ocean-ps4',
'donut-run-ps4-1',
'futbol-break-head-to-head-ps5-1',
'cake-invaders-ps5-3',
'cake-invaders-ps4-3',
'breakneck-city-ps5',
'gav-gav-odyssey-ps4-1',
'alba-a-wildlife-adventure-ps4-1',
'alba-a-wildlife-adventure-ps5-1',
'round-invaders-ps4',
'active-neurons-puzzle-game-ps5-1',
'cinders-ps4',
'aery-broken-memories-ps4-1',
'ice-cream-break-ps5',
'sushi-break-2-ps5-1',
'sushi-break-2-head-to-head-na-ps5',
'starlight-shores-ps5-1',
'starlight-shores-ps4-1',
'finger-fitness-ps5-2',
'gleylancer-ps5',
'one-last-memory-ps4',
'arkan-the-dog-adventurer-ps5',
'forgotten-city-ps4',
'jacknhat-ps5-1',
'ravva-and-the-cyclops-curse-ps5-2',
'active-neurons-3-wonders-of-the-world-ps4-1',
'marauder-chronicles-curse-over-valdria-ps4-1',
'blasftul-ps4-1',
'gleylancer-ps4',
'fluxteria-ps4',
'aery-dreamscape-ps4-1',
'titan-chaser-ps4-1',
'last-dead-end-ps4',
'murder-diaries-2-ps4',
'murder-diaries-ps4',
'sushi-run-na-ps5',
'0-degrees-ps5-2',
'pantsu-hunter-back-to-the-90s-ps5-1',
'bowling-breakthrough-gaming-arcade-ps4-1',
'arkan-the-dog-adventurer-ps4-1',
'queeny-army-ps4-1',
'futbol-break-head-to-head-ps4',
'zj-the-ball-challenge-level-5c-ps4-1',
'bunny-memory-ps4-1',
'kansei-the-second-turn-hd-ps4-2',
'zj-the-ball-challenge-level-4c-ps4-1',
'breakneck-city-ps4',
'zj-the-ball-challenge-level-3c-ps4-1',
'prince-of-landis-ps4-1',
'futbol-break-ps4-1',
'gardeners-path-ps4-1',
'ice-cream-break-head-to-head-ps4-1',
'santas-workshop-ps4-1',
'zippy-the-circle-challenge-level-1c-and-level-2c-ps4-1',
'zj-the-ball-challenge-level-2c-ps4-1',
'zj-the-ball-challenge-level-1c-ps4-1',
'farm-frenzy-refreshed-ps4-1',
'6souls-ps4-1',
'drizzlepath-deja-vu-ps4-3',
'tanks-vs-tanks-pvp-ps4',
'catch-the-bowling-balls-challenge-mode-edition-breakthrough-gaming-arcade-ps4-1',
'icecream-break-ps4-1',
'memories-of-east-coast-ps4',
'one-escape-ps4-1',
'racing-challenge-mode-edition-breakthrough-gaming-arcade-ps4-1',
'sushi-run-ps4-1',
'avoid-them-challenge-mode-edition-breakthrough-gaming-arcade-ps4-1',
'bowling-story-two-mark-version-project-summer-ice-ps4-1',
'pig-d-ps4-1',
'one-eyed-lee-and-the-dinner-party-ps4-1',
'day-without-me-ps4-1',
'arrog-ps4',
'whiskey-mafia-leos-family-ps4-1',
'bowling-story-one-mark-version-project-summer-ice-ps4-1',
'pukan-bye-bye-ps4-1',
'our-church-and-halloween-rpg-story-five-james-version-ps4-1',
'our-church-and-halloween-rpg-story-five-scott-version-ps4-1',
'tower-of-balloons-otterrific-arcade-ps4-1',
'balancelot-ps4',
'promesa-ps4-1',
'dont-touch-this-button-ps4-1',
'bff-or-die-ps4-1',
'takorita-meets-fries-ps4-1',
'whiskey-mafia-franks-story-ps4-1',
'rusty-gun-ps4-1',
'cave-bad-ps4',
'virtuous-western-ps4-1',
'dojoran-ps4-1',
'orbibot-ps4',
'yoko-yuki-dr-rats-revenge-ps4-1',
'one-eyed-kutkh-ps4-psvita-1',
'tilting-tiles-ps4',
'alexio-ps4-1',
'ball-lab-ps4-2',
'ball-lab-ps5-2',
'how-to-take-off-your-mask-remastered-ps4',
'angels-with-scaly-wings-ps5',
'walking-dead-the-final-season-ps4-2',
'music-racer-ps4-1',
'void-gore-ps5-3',
'miles-kilo-psvita-1',
'my-aunt-is-a-witch-psvita-1',
'active-neurons-puzzle-game-psvita',
'takotan-psvita-2',
'20-bunnies-ps5-2',
'36-fragments-of-midnight-ps4',
'36-fragments-of-midnight-psvita',
'99vidas-ps4-ps3-psvita',
'112th-seed-ps4',
'112th-seed-ps5-3',
'access-denied-ps4',
'access-denied-psvita',
'active-neurons-puzzle-game-ps4-1',
'actual-sunlight-psvita',
'adventures-of-tintin-ps3',
'aegis-of-earth-protonovus-assault-ps4-ps3-psvita',
'aer-ps4',
'aery-little-bird-adventure-ps4-1',
'akinofa-ps4',
'albedo-eyes-from-outer-space-ps4-1',
'alphaset-by-powgi-ps4-1',
'alphaset-by-powgi-psvita-1',
'alteric-ps4-psvita',
'alteric-ps4-psvita-2',
'amnesia-memories-psvita',
'ancient-stories-gods-of-egypt-ps4-1',
'angels-with-scaly-wings-ps4',
'annihilation-ps4',
'arcana-heart-3-love-max-ps3',
'armored-core-v-ps3-1',
'ascendshaft-and-endless-shaft-ps4-1',
'ascendshaft-ps4',
'astrology-and-horoscope-premium-ps4-1',
'attack-of-the-toy-tanks-ps4',
'attack-of-the-toy-tanks-psvita',
'autumns-journey-ps4',
'awesome-pea-2-ps4-1',
'awesome-pea-2-psvita',
'awesome-pea-ps4-1',
'awesome-pea-psvita-1',
'back-in-1995-ps4-1',
'back-in-1995-psvita',
'bai-qu-hundreds-of-melodies-ps4',
'bai-qu-hundreds-of-melodies-ps5-1',
'barry-the-bunny-ps4-1',
'barry-the-bunny-ps5-1',
'baseball-bout-otterrific-arcade-ps4',
'baseball-challenge-mode-edition-breakthrough-gaming-arcade-ps4-1',
'battle-rockets-2-0-psvita-1',
'betty-bat-ps4',
'big-dipper-psvita',
'bird-game-ps4',
'birthday-of-midnight-ps4',
'bishoujo-battle-cyber-panic-ps4',
'bishoujo-battle-cyber-panic-ps5-3',
'bishoujo-battle-mahjong-solitaire-ps4',
'bishoujo-battle-mahjong-solitaire-ps5-1',
'black-the-fall-ps4-1',
'black-white-bushido-ps4',
'blackwood-crossing-ps4-1',
'bleep-bloop-ps4-1',
'blind-men-ps4-1',
'blind-men-psvita-1',
'blitz-breaker-ps4',
'blitz-breaker-ps5',
'bouncy-bullets-2-ps4',
'bouncy-bullets-2-ps5',
'bouncy-bullets-ps4-1',
'bouncy-bullets-psvita-1',
'bowling-story-one-jane-version-project-summer-ice-ps4-1',
'bowling-story-one-pammy-version-project-summer-ice-ps4-1',
'bowling-story-three-jane-version-project-summer-ice-ps4-1',
'bowling-story-three-pammy-version-project-summer-ice-ps4-1',
'bowling-story-two-jane-version-project-summer-ice-ps4-1',
'bowling-story-two-pammy-version-project-summer-ice-ps4-1',
'breeder-homegrown-directors-cut-ps4-1',
'breeder-homegrown-directors-cut-psvita-1',
'briks-2-ps4-1',
'briks-head-to-head-ps4-1',
'briks-ps4-1',
'brotherhood-united-ps4-2',
'brotherhood-united-psvita-2',
'bucket-knight-ps4-1',
'bucket-knight-psvita',
'bullet-beat-ps4-1',
'c14-dating-ps4',
'c14-dating-ps5',
'car-mayhem-ps4',
'castle-of-no-escape-2-ps4-1',
'castle-pals-ps4-1',
'catch-the-bowling-balls-breakthrough-gaming-arcade-ps4-1',
'cats-of-war-ps5',
'catsofwar-ps4',
'cave-bad-ps5',
'chaoschild-ps4-4',
'chaoschild-psvita-4',
'chickens-on-the-road-ps4-2',
'christmas-break-2-head-to-head-ps4-1',
'christmas-break-2-ps4-1',
'christmas-break-head-to-head-ps4-1',
'christmas-break-ps4-1',
'christmas-run-ps4-1',
'christmas-run-ps5-1',
'chromagun-ps4-1',
'chromagun-ps4-2',
'clash-force-ps4-1',
'classic-snake-adventures-ps4',
'coastertrophyset-ps4-1',
'concept-destruction-ps4-1',
'concept-destruction-ps5-2',
'contraptions-ps4',
'coolpaintr-ps4-2',
'crazy-machines-vr-ps4-1',
'crimson-spires-ps4-1',
'crimson-spires-ps5-1',
'crisis-wing-ps4-2',
'crisis-wing-ps5-2',
'cross-the-moon-ps4-1',
'cross-the-moon-ps5-1',
'crosskrush-ps4',
'crosskrush-ps5-1',
'crossovers-by-powgi-ps4-1',
'crossovers-by-powgi-psvita-1',
'crypt-of-the-serpent-king-ps4',
'crypto-by-powgi-ps4-1',
'crypto-by-powgi-psvita',
'cybarian-the-time-travelling-warrior-ps4',
'cybarian-the-time-travelling-warrior-psvita',
'cybxus-heart-ps4-1',
'daggerhood-ps4-1',
'daggerhood-psvita',
'dark-mystery-ps4',
'dark-sauce-ps4',
'darker-skies-ps5-1',
'date-a-live-rio-reincarnation-ps4',
'dating-life-miley-x-emily-ps4-1',
'dating-life-miley-x-emily-ps5-1',
'dead-secret-ps4',
'deep-ones-ps4-psvita-2',
'deep-ones-ps4-psvita-3',
'deep-space-rush-ps4',
'deep-space-rush-psvita',
'delicious-pretty-girls-mahjong-solitaire-ps4',
'delicious-pretty-girls-mahjong-solitaire-ps5-2',
'delta-squad-ps4',
'demetrios-ps4',
'demons-souls-ps3-1',
'devious-dungeon-2-ps4',
'devious-dungeon-2-psvita-1',
'devious-dungeon-ps4-1',
'devious-dungeon-psvita-1',
'discovery-ps4',
'distraint-2-ps4',
'distraint-deluxe-edition-ps4',
'distraint-deluxe-edition-psvita-1',
'donut-break-2-head-to-head-ps4-1',
'donut-break-2-ps4-1',
'donut-break-head-to-head-ps4-1',
'donut-break-ps4',
'donut-county-ps4',
'donutsnjustice-ps4-1',
'donutsnjustice-ps5-1',
'doodle-devil-ps3-1',
'doodle-devil-ps4-1',
'doodle-devil-psvita-1',
'doodle-god-ps3-1',
'doodle-god-ps4-1',
'doodle-god-psvita-1',
'doodle-kingdom-ps3-1',
'doodle-kingdom-ps4-1',
'doodle-kingdom-psvita-1',
'dragon-break-classic-head-to-head-ps4-1',
'dragon-break-classic-ps4-1',
'dreaming-canvas-ps4',
'dreaming-sarah-ps4-1',
'dreaming-sarah-ps5-1',
'drowning-ps4-psvita',
'drowning-ps4-psvita-3',
'drowning-ps5-1',
'duck-souls-ps4',
'duck-souls-psvita',
'dull-grey-ps4',
'dull-grey-psvita-1',
'dungeon-escape-ps4',
'dungeons-bombs-ps4',
'dungeons-bombs-ps5',
'dw2-ps4',
'dying：-reborn-ps4-1',
'dying：-reborn-psvita-1',
'easter-candy-break-head-to-head-ps4-1',
'easter-candy-break-ps4-1',
'energy-balance-ps4-psvita',
'energy-balance-ps4-psvita-1',
'energy-cycle-edge-ps4-psvita-2',
'energy-cycle-edge-ps4-psvita-3',
'energy-cycle-edge-ps5-1',
'energy-cycle-ps4-psvita',
'energy-cycle-ps4-psvita-1',
'energy-cycle-ps5-1',
'energy-invasion-ps4-psvita-1',
'energy-invasion-ps4-psvita-3',
'enter-digiton-heart-of-corruption-ps4-2',
'enter-digiton-heart-of-corruption-ps5-2',
'epic-word-search-collection-2-ps4-1',
'epic-word-search-collection-2-psvita-1',
'epic-word-search-collection-ps4-1',
'epic-word-search-collection-psvita-1',
'erica-ps4',
'etherborn-ps4-1',
'even-the-ocean-ps4',
'evil-inside-ps4',
'evil-inside-ps5',
'explosive-jake-ps4-1',
'explosive-jake-psvita-2',
'fast-striker-ps4',
'fast-striker-psvita-2',
'fifty-words-by-powgi-ps4-1',
'fifty-words-by-powgi-psvita-1',
'fight-ps4',
'five-nights-at-freddys-3-ps4',
'five-nights-at-freddys-4-ps4',
'five-nights-at-freddys-ps4',
'flowers-are-dead-ps4',
'football-breakthrough-gaming-arcade-ps4',
'football-game-ps4',
'football-game-psvita',
'foxyland-2-ps4',
'foxyland-2-psvita-1',
'foxyland-ps4',
'foxyland-psvita-1',
'freddy-spaghetti-2-ps4',
'freddy-spaghetti-2-ps5-1',
'freddy-spaghetti-ps4-1',
'freddy-spaghetti-ps5-1',
'frogger-returns-ps3',
'from-eath-to-heaven-ps4-1',
'fullblast-ps4-1',
'fullblast-psvita-1',
'funny-truck-ps4-1',
'gabbuchi-ps4-1',
'ganbare-super-strikers-ps4',
'ganbare-super-strikers-psvita-2',
'gaps-by-powgi-ps4-2',
'gaps-by-powgi-ps5-2',
'get-to-the-top-breakthrough-gaming-arcade-ps4-1',
'glo-ps4-2',
'glo-ps5-2',
'golf-zero-ps4',
'gorogoa-ps4',
'grand-museum-vr-ps4-1',
'grass-cutter-ps4',
'grass-cutter-psvita-1',
'gravity-duck-ps4',
'gravity-duck-psvita',
'grizzland-ps4-1',
'guard-duty-ps4-1',
'guard-duty-psvita',
'gun-crazy-ps4',
'habroxia-ps4',
'habroxia-psvita',
'hajwala-ps4-1',
'halloween-candy-break-2-head-to-head-ps4-1',
'halloween-candy-break-2-ps4-1',
'halloween-candy-break-head-to-head-ps4-1',
'halloween-candy-break-ps4-1',
'hardcube-ps4-1',
'hellblade-senuas-sacrifice-ps4-1',
'hellbreachers-ps4-2',
'hellbreachers-ps5-2',
'hentai-vs-evil-ps4',
'hentai-vs-evil-ps5-2',
'hero-and-a-garden-ps4',
'heroes-trials-ps4-1',
'heroes-trials-psvita',
'hex-tunnel-ps4',
'hex-tunnel-touch-ps4-1',
'highschool-romance-ps4',
'highschool-romance-ps5-1',
'himno-ps4',
'himno-psvita',
'hiq-ace-unlimited-ps4',
'hoggy2-ps4-1',
'hoggy2-psvita-1',
'homestar-vr-special-edition-ps4-1',
'horned-knight-ps4',
'horror-break-head-to-head-ps4-1',
'horror-break-ps4-1',
'how-we-soar-ps4-1',
'i-am-the-hero-ps4-1',
'i-am-the-hero-psvita',
'i-and-me-ps4-1',
'i-and-me-psvita-1',
'independence-day-break-head-to-head-ps4-1',
'independence-day-break-ps4-1',
'inferno-2-ps4-1',
'inksplosion-ps4-1',
'inksplosion-psvita-1',
'inner-world-ps4',
'inner-world-the-last-wind-monk-ps4-1',
'iro-hero-ps4-2',
'iron-snout-ps4',
'iron-snout-psvita',
'its-spring-again-ps4-psvita',
'jack-n-jill-dx-ps4-1',
'jack-n-jill-dx-psvita-2',
'jackquest-ps4',
'jazzpunk-ps4',
'jet-set-knights-ps4',
'jigsaw-abundance-ps4',
'jigsaw-finale-ps4-1',
'jigsaw-solace-ps4',
'jisei-ps4',
'jolt-family-robot-racer-ps4',
'just-a-phrase-by-powgi-ps4-1',
'just-a-phrase-by-powgi-psvita-2',
'just-ignore-them-ps4',
'just-ignore-them-psvita',
'knightin-ps4',
'knightin-psvita-1',
'koi-ps4',
'koi-psvita',
'ladders-by-powgi-ps4-1',
'ladders-by-powgi-ps5-1',
'lady-in-a-leotard-with-a-gun-ps4-1',
'language-of-love-ps4',
'league-of-evil-ps4-1',
'league-of-evil-psvita-1',
'legend-of-the-skyfish-ps4',
'legend-of-the-skyfish-psvita',
'legends-of-talia-arcadia-ps4-1',
'legends-of-talia-arcadia-ps5-1',
'lizard-lady-vs-the-cats-platinum-edition-ps4-1',
'lizard-lady-vs-the-cats-ps4-1',
'long-reach-ps4-1',
'long-reach-psvita-1',
'loot-hero-dx-ps4-1',
'lost-wing-ps4',
'lovechoice-ps4',
'lovechoice-ps5',
'lumini-ps4',
'maitetsupure-station-ps4',
'many-faces-ps4-2',
'mask-of-mists-ps4',
'mask-of-mists-ps5-1',
'mastho-is-together-ps4-2',
'mastho-is-together-ps5-1',
'maze-pedestal-of-trials-ps4',
'mecho-tales-ps4',
'mecho-tales-psvita',
'megaquarium-ps4',
'mekabolt-ps4-1',
'mekabolt-psvita',
'mekorama-ps4-1',
'mekorama-psvita',
'memory-lane-2-ps4-1',
'memory-lane-ps4',
'metagal-ps4',
'metagal-psvita',
'metropolis-lux-obscura-ps4-psvita-1',
'metropolis-lux-obscura-ps4-psvita-3',
'micetopia-ps4',
'midnight-deluxe-psvita-1',
'milos-quest-ps4-1',
'milos-quest-psvita-1',
'mina-michi-ps4',
'mina-michi-ps5',
'minefield-ps4',
'mixups-by-powgi-ps4-1',
'mixups-by-powgi-psvita-1',
'mochi-mochi-boy-ps4-1',
'mochi-mochi-boy-psvita',
'mooseman-ps4-psvita',
'more-dark-ps4',
'mortal-shell-ps4',
'mosaic-ps4-1',
'moss-ps4-1',
'mufuu_doujin/brave-match-ps4-1',
'my-big-sister-ps4-1',
'my-big-sister-psvita',
'nekopara-vol-3-ps4-1',
'nekopara-vol-4-ps4',
'neon-junctions-ps4',
'neon-junctions-psvita',
'newtonian-inversion-ps4-1',
'nextgen-sandbox-ps4',
'nicole-ps4-1',
'night-lights-ps4-1',
'night-lights-ps5-1',
'normans-great-illusion-ps4',
'normans-great-illusion-psvita-1',
'north-ps4-psvita',
'north-ps4-psvita-3',
'nowhere-girl-ps4-1',
'nowhere-girl-ps5-1',
'nubla-ps4-1',
'null-drifter-ps4',
'nurse-love-addiction-psvita-1',
'obduction-ps4',
'octonaut-ps4',
'of-tanks-and-demons-iii-ps4-1',
'oktoberfest-break-head-to-head-ps4-1',
'oktoberfest-break-ps4-1',
'one-eyed-kutkh-ps4-psvita-1',
'one-eyed-kutkh-ps4-psvita-2',
'one-finger-death-punch-2-ps4-2',
'one-night-stand-ps4-1',
'one-word-by-powgi-ps4-1',
'one-word-by-powgi-psvita-1',
'orc-slayer-ps4-1',
'ord-ps4',
'our-church-and-halloween-rpg-story-four-ps4',
'our-church-and-halloween-rpg-story-one-ps4',
'our-church-and-halloween-rpg-story-three-ps4',
'our-church-and-halloween-rpg-story-two-ps4',
'palm-reading-premium-ps4',
'pantsu-hunter-back-to-the-90s-ps4',
'pantsu-hunter-back-to-the-90s-psvita',
'paradox-error-ps4-2',
'paradox-soul-ps4',
'paradox-soul-psvita',
'paranormal-activity-ps4',
'path-of-motus-ps4',
'peasant-knight-ps4-1',
'peasant-knight-psvita',
'perils-of-baking-ps4',
'persona-4-dancing-all-night-psvita',
'personality-and-psychology-premium-ps4',
'pic-a-pix-classic-2-ps4-2',
'pic-a-pix-classic-2-psvita-2',
'pic-a-pix-classic-ps4-1',
'pic-a-pix-classic-psvita-1',
'pic-a-pix-color-2-ps4-1',
'pic-a-pix-color-2-psvita-1',
'pic-a-pix-color-psvita-1',
'pic-a-pix-pieces-2-ps4-1',
'pic-a-pix-pieces-ps4-1',
'pic-a-pix-pieces-psvita-1',
'pillar-puzzle-escape-ps4-2',
'pinkman-ps4',
'pinkman-ps5-1',
'pity-pit-ps4',
'pizza-break-head-to-head-ps4-1',
'pizza-break-ps4-1',
'planet-rix-13-ps4-psvita-1',
'planet-rix-13-ps4-psvita-3',
'poker-pretty-girls-battle-fantasy-world-edition-ps4',
'poker-pretty-girls-battle-fantasy-world-edition-ps5',
'poker-pretty-girls-battle-texas-holdem-ps4',
'poker-pretty-girls-battle-texas-holdem-ps5',
'prehistoric-dude-ps4-1',
'pretty-girls-klondike-solitaire-ps4',
'pretty-girls-klondike-solitaire-ps5',
'pretty-girls-mahjong-solitaire-ps4',
'pretty-girls-mahjong-solitaire-ps5-3',
'pretty-girls-panic-plus-ps4',
'pretty-girls-panic-plus-ps5',
'pretty-girls-panic-ps4-3',
'pretty-girls-panic-ps5-3',
'project-starship-ps4-2',
'project-starship-x-ps4-1',
'punchline-ps4-2',
'punchline-psvita-2',
'puzzle-frenzy-ps4-1',
'quick-mafs-ps4-1',
'quick-mafs-ps5-1',
'rabisco-ps4-1',
'rabisco-ps5-1',
'racing-breakthrough-gaming-arcade-ps4',
'radio-squid-ps4-1',
'rally-racing-ps4-1',
'rally-racing-ps5',
'random-heroes-gold-edition-ps4-1',
'random-heroes-gold-edition-psvita',
'ravva-and-the-cyclops-curse-ps4',
'red-bow-ps4',
'red-bow-psvita-1',
'red-death-ps4-1',
'reed-2-ps4',
'reed-2-psvita-1',
'reed-remastered-ps4',
'reed-remastered-psvita-1',
'reflection-of-mine-ps4-1',
'reknum-ps4-1',
'rememoried-ps4',
'reminiscence-in-the-night-ps4',
'reminiscence-in-the-night-ps5',
'reverie-ps4-1',
'reverie-psvita',
'rift-racoon-ps4',
'rift-racoon-ps5-2',
'road-bustle-ps4',
'robozarro-ps4',
'rocketsrocketsrockets-ps4-1',
'rogue-explorer-ps4-3',
'rogue-explorer-ps5-3',
'roguecube-ps4',
'root-film-ps4-1',
'roundout-by-powgi-ps4-1',
'rush-rover-ps4-1',
'rush-rover-psvita-1',
'sables-grimoire-ps4-1',
'sables-grimoire-ps5',
'sagebrush-ps4-1',
'saint-patricks-day-break-head-to-head-ps4',
'saint-patricks-day-break-ps4-1',
'sakura-nova-ps4',
'sakura-nova-ps5',
'sakura-succubus-2-ps4-1',
'sakura-succubus-2-ps5-1',
'sakura-succubus-3-ps4',
'sakura-succubus-3-ps5',
'sakura-succubus-4-ps4-1',
'sakura-succubus-4-ps5-1',
'sakura-succubus-ps4-1',
'sakura-succubus-ps5-1',
'sakura-swim-club-ps4-1',
'sakura-swim-club-ps5',
'salt-and-sanctuary-ps4',
'santas-workshop-ps5-1',
'save-the-ninja-clan-ps4-psvita',
'semispheres-ps4',
'semispheres-psvita',
'shikhondo-soul-eater-ps4-2',
'shinrai-broken-beyond-despair-ps4',
'shinrai-broken-beyond-despair-ps5',
'sigi-a-fart-for-melusina-ps4-psvita-1',
'sigi-a-fart-for-melusina-ps4-psvita-3',
'sinuca-attack-ps4',
'skateboarding-breakthrough-gaming-arcade-ps4',
'skatemasta-tcheco-ps4-1',
'skatemasta-tcheco-ps5-2',
'skyscrappers-ps4-1',
'skytime-ps4-psvita',
'snake-boat-otterrific-arcade-ps4',
'snakes-and-ladders-ps4-1',
'son-ps4',
'soulfrost-ps4-1',
'sound-shapes-ps4',
'space-break-2-head-to-head-ps4-1',
'space-break-2-ps4',
'space-break-head-to-head-ps4-1',
'space-break-ps4-1',
'space-breakthrough-gaming-arcade-ps4-1',
'space-intervention-ps4-2',
'space-kabaam-ps4-2',
'space-kabaam-ps5-2',
'space-revenge-ps4',
'space-revenge-ps5',
'spectrewoods-ps4-1',
'spiral-splatter-ps4-psvita',
'spiral-splatter-ps4-psvita-2',
'spirit-of-the-north-ps4',
'spot-the-difference-ps4-1',
'squad-killer-ps4',
'squareboy-vs-bullies-ps4-1',
'squareboy-vs-bullies-psvita',
'station-ps4',
'steinsgate-ps3-4',
'steinsgate-psvita-3',
'storm-boy-ps4-1',
'storytale-ps4',
'strawberry-vinegar-ps4-1',
'stretch-ps4-2',
'suicide-guy-ps4-1',
'suicide-guy-ps4-3',
'summer-with-the-shiba-inu-ps4-1',
'sun-wukong-vs-robot-ps4-1',
'sun-wukong-vs-robot-ps5-1',
'super-box-land-demake-ps4-1',
'super-box-land-demake-psvita',
'super-destronaut-dx-2-ps4-1',
'super-destronaut-dx-2-ps5-1',
'super-destronaut-dx-ps4',
'super-destronaut-dx-psvita',
'super-destronaut-land-wars-ps4-1',
'super-destronaut-land-wars-psvita-1',
'super-kids-racing-ps4-1',
'super-korotama-ps4',
'super-weekend-mode-ps4-1',
'super-weekend-mode-psvita-1',
'super-wiloo-demake-ps4-1',
'super-wiloo-demake-psvita',
'superhero-x-ps4',
'survive-mr-cube-ps4-1',
'sushi-break-2-head-to-head-ps4-1',
'sushi-break-2-ps4-1',
'sushi-break-head-to-head-ps4',
'sushi-break-ps4-1',
'sushi-break-ps5-1',
'swordbreaker-the-game-ps4-1',
'swordbreaker-the-game-psvita',
'synergia-psvita-1',
'syrup-and-the-ultimate-sweet-ps4',
'syrup-and-the-ultimate-sweet-psvita-1',
'taco-break-head-to-head-ps4-1',
'taco-break-ps4-1',
'takotan-ps4-1',
'tamiku-ps4',
'tannenberg-ps4-1',
'tarot-readings-premium-ps4',
'task-force-kampas-ps4',
'task-force-kampas-psvita-2',
'tetras-escape-ps4-1',
'tetras-escape-psvita-1',
'theme-park-simulator-ps4-1',
'through-the-woods-ps4-1',
'thunder-paw-ps4-1',
'thunder-paw-psvita',
'thunderflash-ps4-1',
'thunderflash-ps5-1',
'thy-sword-ps4-1',
'thy-sword-psvita',
'tic-tac-letters-by-powgi-ps4-1',
'tic-tac-letters-by-powgi-psvita-1',
'timbermanvs-ps4-1',
'tokyo-run-ps4-2',
'toren-ps4',
'tower-of-beatrice-ps4',
'tower-of-beatrice-psvita',
'track-breakthrough-gaming-arcade-ps4-1',
'track-challenge-mode-edition-breakthrough-gaming-arcade-ps4-1',
'twin-robots-ps4-psvita',
'twin-robots-ps4-psvita-1',
'twin-robots-ultimate-edition-ps5',
'ultra-hat-dimension-ps4-1',
'ultra-mission-psvita-1',
'ultragoodness-2-ps4',
'ultragoodness-2-ps5',
'unicorn-break-head-to-head-ps4-1',
'unicorn-break-ps4-1',
'valentine-candy-break-head-to-head-ps4',
'valentine-candy-break-ps4',
'vasilis-ps4',
'vasilis-psvita-1',
'venus-improbable-dream-ps4',
'venus-improbable-dream-ps5',
'vera-blanc-full-moon-ps4',
'vera-blanc-ghost-in-the-castle-ps4',
'violetti-goottii-ps4-1',
'void-gore-ps4',
'walking-dead-the-final-season-ps4-1',
'warlocks-tower-ps4-1',
'warlocks-tower-psvita-1',
'what-remains-of-edith-finch-ps4',
'whiteboyz-wit-attitude-the-pursuit-of-money-ps4',
'will-a-wonderful-world-ps4-1',
'winters-daydream-ps4-1',
'winters-daydream-psvita',
'without-escape-ps4-2',
'without-escape-ps5-2',
'without-escape-psvita-2',
'word-maze-by-powgi-ps4',
'word-maze-by-powgi-psvita-1',
'word-search-by-powgi-ps4-1',
'word-search-by-powgi-psvita-1',
'word-sudoku-by-powgi-ps4-1',
'word-sudoku-by-powgi-psvita-1',
'word-wheel-by-powgi-ps4-1',
'word-wheel-by-powgi-psvita-1',
'wordsweeper-by-powgi-ps4-1',
'wordsweeper-by-powgi-psvita-1',
'world-of-nubla-ps4-1',
'worldend-syndrome-ps4-1',
'would-you-like-to-run-an-idol-café-ps4',
'would-you-like-to-run-an-idol-café-ps5',
'xblaze-code-embryo-ps3-1',
'xblaze-code-embryo-psvita-1',
'year-of-springs-ps4-1',
'year-of-springs-ps5-2',
'zero-strain-ps4',
'zero-strain-ps5-3',
'zero-zero-zero-zero-ps4',
'zero-zero-zero-zero-psvita-1',
'zeroptian-invasion-ps4-1',
'zeroptian-invasion-psvita-1',
'zeus-quest-remastered-ps4',
'zippy-the-circle-level-1-and-level-2-ps4-1',
'zippy-the-circle-level-3-and-level-4-ps4-1',
'zippy-the-circle-level-5-level-6-and-level-7-ps4-1',
'zippy-the-circle-level-8-level-9-and-level-10-ps4-1',
'zippy-the-circle-level-11-level-12-and-level-13-ps4-1',
'zj-the-ball-level-1-ps4-1',
'zj-the-ball-level-2-ps4-1',
'zj-the-ball-level-3-ps4-1',
'zj-the-ball-level-4-ps4-1',
'zj-the-ball-level-5-ps4-1',
'zomb-ps4',
'zombo-buster-rising-ps4-1',
'midnight-deluxe-ps4-1',
'√letter-ps4-3',
'√letter-psvita-3',
'crazy-gravity-ps4-2',
'crazy-gravity-ps5-2',

];
const arrayAS = [
'20-bunnies-ps4-1',
'cross-the-moon-ps5-2',
'cattch-ps4-2',
'immortus-temporus-ps4-2',
'reflection-of-mine-ps4-2',
'dead-dust-ps4-1',
'el-gancho-ps4-2',
'splash-cars-ps5-2',
'splash-cars-ps4-1',
'blitz-breaker-ps5-2',
'delicious-pretty-girls-mahjong-solitaire-ps4-2',
'lucid-cycle-ps4-3',
'lucid-cycle-ps5-2',
'wordbreaker-by-powgi-ps4-2',
'wordbreaker-by-powgi-ps5-2',
'radioactive-dwarfs-evil-from-the-sewers-ps4-1',
'ammo-pigs-cocked-and-loaded-ps4-2',
'round-invaders-ps4-2',
'blitz-breaker-ps4-1',
'retrace-memories-of-death-ps4-2',
'pretty-girls-breakers-ps5-2',
'pretty-girls-breakers-ps4-2',
'el-gancho-ps5-2',
'dr-oil-ps4-1',
'gutwhale-ps4-2',
'sun-wukong-vs-robot-ps4-2',
'sun-wukong-vs-robot-ps5-2',
'crisis-wing-ps5-1',
'crisis-wing-ps4',
'cake-invaders-ps5-2',
'cake-invaders-ps4-1',
'rabisco-ps5-2',
'rabisco-ps4-2',
'phlegethon-ps4-1',
'freddy-spaghetti-2-ps5-2',
'dont-touch-this-button-ps5-2',
'dont-touch-this-button-ps4-2',
'ravva-and-the-cyclops-curse-ps4-1',
'crazy-gravity-ps4',
'crazy-gravity-ps5-1',
'rogue-explorer-ps5-1',
'rogue-explorer-ps4-1',
'virtuous-western-ps5-2',
'dont-touch-this-button-ps5-2',
'gav-gav-odyssey-ps4-2',
'akinofa-ps5',
'castle-of-pixel-skulls-ps4-3',
'castle-of-pixel-skulls-ps5-3',
'rpgmaker-mv-ps4',
'kingdom-hearts-iii-ps4-1',
'gutwhale-ps5-2',
'brotherhood-united-ps5',
'project-starship-x-ps4-3',
'takotan-ps5',
'mad-rat-dead-ps4',
'pretty-girls-panic-ps5-2',
'breakneck-city-ps5-1',
'memories-of-east-coast-ps5-1',
'big-dipper-ps4-1',
'cave-bad-ps5-1',
'zero-strain-ps5-2',
'castle-of-no-escape-2-ps4-3',
'mina-michi-ps4-1',
'dojoran-ps4-2',
'sinuca-attack-ps4-2',
'metropolis-lux-obscura-ps4',
'bff-or-die-ps4-2',
'tamiku-ps4-2',
'cave-bad-ps4-1',
'freddy-spaghetti-2-ps4-2',
'cross-the-moon-ps4-2',
'cybxus-heart-ps4-2',
'pretty-girls-panic-ps4-2',
'poker-pretty-girls-battle-texas-holdem-ps4-2',
'poker-pretty-girls-battle-fantasy-world-edition-ps4-2',
'virtuous-western-ps4-2',
'skatemasta-tcheco-ps4-2',
'one-eyed-lee-and-the-dinner-party-ps4-2',
'enter-digiton-heart-of-corruption-ps4-1',
'pinkman-ps4-2',
'hellbreachers-ps4-1',
'squad-killer-ps4-1',
'one-escape-ps4-2',
'aborigenus-ps4-1',
'thunderflash-ps4-2',
'memories-of-east-coast-ps4-2',
'more-dark-ps4-2',
'brotherhood-united-ps4-1',
'donutsnjustice-ps4-2',
'dont-touch-this-button-ps4-2',
'evil-inside-ps4-3',
'batu-ta-batu-ps4-1',
'20-bunnies-ps5-1',
'ravva-and-the-cyclops-curse-ps5-1',
'0-degrees-ps5',
'space-intervention-ps4',
'akinofa-ps4-2',
'dreaming-sarah-ps4-2',
'c14-dating-ps5-2',
'c14-dating-ps4-2',
'gaps-by-powgi-ps5-1',
'gaps-by-powgi-ps4-1',
'twin-robots-ultimate-edition-ps5-2',
'inferno-2-ps4-2',
'void-gore-ps4-3',
'queeny-army-ps4-2',
'paradox-error-ps4-1',
'horned-knight-ps4-2',
'bullet-beat-ps4-2',
'breakneck-city-ps4-1',
'pretty-girls-panic-plus-ps4-1',
'pretty-girls-panic-plus-ps5-2',
'how-to-take-off-your-mask-remastered-ps4-2',
'glo-ps5-1',
'glo-ps4-1',
'ladders-by-powgi-ps5-2',
'112th-seed-ps5-2',
'ladders-by-powgi-ps4-2',
'miles-kilo-psvita-3',
'kid-tripp-psvita-1',
'finger-fitness-ps5',
'ghoulboy-psvita',
'habroxia-psvita-2',
'deep-ones-psvita',
'guard-duty-psvita-2',
'my-aunt-is-a-witch-psvita-2',
'distraint-deluxe-edition-psvita-2',
'devious-dungeon-2-psvita-2',
'awesome-pea-2-psvita-2',
'breeder-homegrown-directors-cut-psvita-2',
'alphaset-by-powgi-psvita-2',
'36-fragments-of-midnight-ps4-2',
'36-fragments-of-midnight-psvita-2',
'112th-seed-ps4-3',
'access-denied-ps4-2',
'access-denied-psvita-1',
'void-gore-ps5',
'takotan-psvita-1',
'akibas-trip-2-獎盃組-ps3',
'alphaset-by-powgi-ps4-2',
'alteric-ps4',
'alteric-psvita',
'armored-core-v-ps3-3',
'attack-of-the-toy-tanks-ps4-2',
'attack-of-the-toy-tanks-psvita-2',
'autumns-journey-ps4-2',
'awesome-pea-2-ps4-2',
'awesome-pea-ps4-2',
'awesome-pea-psvita-2',
'back-in-1995-ps4-2',
'back-in-1995-psvita-3',
'ball-lab-ps4',
'ball-lab-ps5',
'bird-game-ps4-2',
'blind-men-ps4-2',
'blind-men-psvita',
'bouncy-bullets-ps4',
'midnight-deluxe-ps4-2',
'bouncy-bullets-psvita-2',
'breeder-homegrown-directors-cut-ps4-2',
'bucket-knight-ps4-2',
'bucket-knight-psvita-2',
'candleman-ps4-1',
'castle-pals-ps4-2',
'chickens-on-the-road-ps4-1',
'clash-force-ps4-2',
'concept-destruction-ps4-2',
'concept-destruction-ps5-1',
'crimson-spires-ps4-2',
'crimson-spires-ps5-2',
'crossovers-by-powgi-ps4-2',
'crossovers-by-powgi-psvita-2',
'crypto-by-powgi-ps4-2',
'crypto-by-powgi-psvita-2',
'cybarian-the-time-travelling-warrior-ps4-2',
'cybarian-the-time-travelling-warrior-psvita-2',
'daggerhood-ps4-2',
'daggerhood-psvita-2',
'deep-space-rush-ps4-2',
'deep-space-rush-psvita-1',
'devious-dungeon-ps4-2',
'devious-dungeon-psvita-2',
'drizzlepath-deja-vu-ps4-2',
'drizzlepath-deja-vu-ps5-1',
'drowning-ps4',
'drowning-psvita',
'duck-souls-ps4-2',
'duck-souls-psvita-1',
'energy-balance-ps4',
'energy-balance-psvita',
'energy-cycle-edge-ps4',
'energy-cycle-edge-psvita',
'energy-cycle-ps4',
'energy-cycle-psvita',
'energy-invasion-ps4',
'energy-invasion-psvita',
'epic-word-search-collection-ps4-2',
'epic-word-search-collection-psvita-2',
'explosive-jake-ps4-2',
'explosive-jake-psvita-1',
'fifty-words-by-powgi-ps4-2',
'fifty-words-by-powgi-psvita-2',
'football-game-ps4-2',
'football-game-psvita-2',
'foxyland-2-ps4-2',
'foxyland-2-psvita-2',
'foxyland-ps4-2',
'foxyland-psvita-2',
'fullblast-ps4-2',
'fullblast-psvita-2',
'funny-truck-ps4-2',
'golf-zero-ps4-2',
'grass-cutter-ps4-2',
'grass-cutter-psvita-2',
'gravity-duck-ps4-2',
'gravity-duck-psvita-2',
'grizzland-ps4-2',
'gun-crazy-ps4-2',
'hentai-vs-evil-ps4-1',
'hentai-vs-evil-ps5',
'hero-and-a-garden-ps4-2',
'heroes-trials-ps4-2',
'heroes-trials-psvita-2',
'himno-ps4-2',
'himno-psvita-2',
'hoggy2-ps4-2',
'hoggy2-psvita-2',
'i-am-the-hero-ps4-2',
'i-am-the-hero-psvita-2',
'inksplosion-ps4-2',
'inksplosion-psvita-2',
'iro-hero-ps4',
'iron-snout-ps4-2',
'iron-snout-psvita-2',
'jack-n-jill-dx-ps4',
'jack-n-jill-dx-psvita',
'jisei-ps4-2',
'just-a-phrase-by-powgi-ps4',
'just-a-phrase-by-powgi-psvita',
'knightin-ps4-2',
'knightin-psvita-2',
'language-of-love-ps4-2',
'league-of-evil-ps4-2',
'league-of-evil-psvita-2',
'lost-in-the-rain-ps3',
'many-faces-ps4-1',
'mastho-is-together-ps4',
'mastho-is-together-ps5',
'mekabolt-ps4-2',
'mekabolt-psvita-2',
'metagal-ps4-2',
'metagal-psvita-2',
'midnight-deluxe-psvita-2',
'milos-quest-ps4-2',
'milos-quest-psvita-2',
'mixups-by-powgi-ps4-2',
'mixups-by-powgi-psvita-2',
'mochi-mochi-boy-ps4-2',
'mochi-mochi-boy-psvita-2',
'neon-junctions-ps4-2',
'neon-junctions-psvita-2',
'nicole-ps4-2',
'null-drifter-ps4-1',
'octonaut-ps4-3',
'one-night-stand-ps4-2',
'one-word-by-powgi-ps4-2',
'one-word-by-powgi-psvita-2',
'pantsu-hunter-back-to-the-90s-ps4-2',
'pantsu-hunter-back-to-the-90s-psvita-2',
'paradox-soul-ps4-2',
'paradox-soul-psvita-2',
'peasant-knight-ps4-2',
'peasant-knight-psvita-1',
'pity-pit-ps4-2',
'planet-rix-13-ps4',
'planet-rix-13-psvita',
'prehistoric-dude-ps4-2',
'project-starship-ps4-1',
'radio-squid-ps4-2',
'random-heroes-gold-edition-ps4-2',
'random-heroes-gold-edition-psvita-2',
'red-bow-ps4-2',
'red-bow-psvita-2',
'red-death-ps4',
'reed-2-ps4-2',
'reed-remastered-ps4-2',
'reed-remastered-psvita',
'reverie-ps4',
'reverie-psvita-2',
'road-bustle-ps4-2',
'robozarro-ps4-2',
'rush-rover-ps4-2',
'sigi-a-fart-for-melusina-ps4',
'sigi-a-fart-for-melusina-psvita',
'soulfrost-ps4-2',
'sound-shapes-ps4-2',
'space-kabaam-ps4',
'space-kabaam-ps5',
'squareboy-vs-bullies-ps4-2',
'storytale-ps4-2',
'strawberry-vinegar-ps4-2',
'stretch-ps4-1',
'summer-with-the-shiba-inu-ps4-2',
'super-box-land-demake-ps4-2',
'super-box-land-demake-psvita-2',
'super-destronaut-dx-ps4-2',
'super-destronaut-dx-psvita-2',
'super-destronaut-land-wars-ps4-2',
'super-destronaut-land-wars-psvita-2',
'super-korotama-ps4-2',
'super-weekend-mode-ps4-2',
'super-weekend-mode-psvita-2',
'super-wiloo-demake-ps4-2',
'super-wiloo-demake-psvita-2',
'synergia-ps4',
'syrup-and-the-ultimate-sweet-ps4-2',
'syrup-and-the-ultimate-sweet-psvita-2',
'takotan-ps4-2',
'task-force-kampas-ps4-2',
'task-force-kampas-psvita-1',
'tetras-escape-ps4-2',
'tetras-escape-psvita-2',
'thunder-paw-ps4-2',
'thunder-paw-psvita-2',
'tic-tac-letters-by-powgi-ps4-2',
'tic-tac-letters-by-powgi-psvita-2',
'tokyo-run-ps4',
'venus-improbable-dream-ps4-2',
'venus-improbable-dream-ps5-2',
'vera-blanc-full-moon-ps4-2',
'vera-blanc-ghost-in-the-castle-ps4-2',
'warlocks-tower-ps4-2',
'warlocks-tower-psvita-2',
'winters-daydream-ps4-2',
'winters-daydream-psvita-2',
'without-escape-ps4',
'without-escape-ps5-1',
'without-escape-psvita',
'word-maze-by-powgi-ps4-2',
'word-maze-by-powgi-psvita-2',
'word-sudoku-by-powgi-ps4-2',
'word-sudoku-by-powgi-psvita-2',
'word-wheel-by-powgi-ps4-2',
'word-wheel-by-powgi-psvita-2',
'wordsweeper-by-powgi-ps4-2',
'wordsweeper-by-powgi-psvita-2',
'yumeutsutsu-reafter-ps4-psvita',
'zero-strain-ps4-2',
'zero-zero-zero-zero-ps4-2',
'zero-zero-zero-zero-psvita',
'zeroptian-invasion-ps4-2',
'zeroptian-invasion-psvita-2',
'ドラゴンクエスト-ps4',
'夢現remaster-ps4-psvita',
'survive-mr-cube-ps4-3',
];
const arrayHK = [
'aer-ps4-2',
'chaoschild-ps4-2',
'chaoschild-psvita-2',
'icey-ps4',
'obduction-ps4-2',
'steinsgate-ps3-1',
'√letter-方根書簡-ps4',
'放逐選舉-ps4',
];
const arrayJP = [
'3dドットゲームヒーローズ-ps3',
'batu-ta-batu-ps4-2',
'fallen-legion-sins-of-an-empire-ps4-1',
'splash-cars-ps4',
'splash-cars-ps5',
'bishoujo-battle-mahjong-solitaire-ps5-3',
'bishoujo-battle-mahjong-solitaire-ps4-3',
'ワン・ナイト・スタンド-ps4',
'death-come-true-ps4',
'恋がさくころ桜どき-ps4',
'pretty-girls-mahjong-solitaire-ps5-1',
'デート・ア・ライブ-蓮ディストピア-ps4',
'シックスソウルズ-ps4',
'シックスソウルズ-ps5',
'アイドルカフェを経営しませんか？２-ps5',
'アイドルカフェを経営しませんか？２-ps4',
'drizzlepath-deja-vu-ps5-2',
'drizzlepath-deja-vu-ps4-1',
'pretty-girls-breakers-ps5-3',
'pretty-girls-breakers-ps4-3',
'ガラス姫と鏡の従者-ps4',
'モトローダーmc-ps4',
'モトローダーmc-ps5',
'brotherhood-united-ps5-1',
'spirit-of-the-north-ps4-2',
'night-in-the-woods-ps4-1',
'rogue-explorer-ps5-2',
'rogue-explorer-ps4-2',
'bishoujo-battle-cyber-panic-ps4-2',
'月の彼方で逢いましょう-ps4-psvita',
'task-force-kampas-ps5-1',
'cake-invaders-ps4',
'cake-invaders-ps5',
'beat-souls-ps4-3',
'beat-souls-ps5-3',
'delicious-pretty-girls-mahjong-solitaire-ps4-3',
'ワン・ナイト・スタンド-ps5',
'ボク姫project-ps4',
'cybxus-heart-ps4-3',
'サンダーフラッシュ-ps5',
'サンダーフラッシュ-ps4',
'pretty-girls-mahjong-solitaire-ps4-1',
'ravva-and-the-cyclops-curse-ps5',
'castle-of-pixel-skulls-ps4-2',
'castle-of-pixel-skulls-ps5-2',
'kansei-～豪邸殺人事件～-ps5',
'kansei-the-second-turn-hd-ps4-1',
'crisis-wing-ps4-3',
'pretty-girls-klondike-solitaire-ps4-3',
'pretty-girls-klondike-solitaire-ps5-2',
'poker-pretty-girls-battle-fantasy-world-edition-ps5-2',
'アーケードアーカイブス　ワンダーボーイ-ps4',
'jisei-～喫茶店殺人事件～-ps4',
'さくらの雲＊スカアレットの恋-ps4',
'daymare-1998-ps4',
'フレディ-スパゲッティ-２-ps5',
'blackberry-honey-～メイド物語～-ps5',
'blackberry-honey-～メイド物語～-ps4',
'takotan-ps5-1',
'alien-isolation-ps4-1',
'project-starship-x-ps4-2',
'immortus-temporus-ps4-3',
'bullet-beat-ps4-3',
'フレディ-スパゲッティ-２-ps4',
'バルーンボーイ-ps4',
'bff-or-die-ps4-3',
'crosskrush-ps4-2',
'poker-pretty-girls-battle-fantasy-world-edition-ps4-3',
'poker-pretty-girls-battle-texas-holdem-ps4-3',
'ravva-and-the-cyclops-curse-ps4-3',
'brotherhood-united-ps4-3',
'fallen-legion-flames-of-rebellion-ps4',
'フォールンレギオン-救いの亡霊-ps4',
'50-cent-blood-on-the-sand-ps3',
'112th-seed-ps4-2',
'pretty-girls-panic-plus-ps4-2',
'pretty-girls-panic-plus-ps5-1',
'amenitys-life-アメニティーズ-ライフ-psvita',
'alias-carnival-サクラメント-psvita',
'112th-seed-ps5',
'pretty-girls-panic-plus-ps4-2',
'pretty-girls-panic-plus-ps5-1',
'amenitys-life-アメニティーズ-ライフ-psvita',
'alias-carnival-サクラメント-psvita',
'takotan-psvita',
'aborigenus-ps4-2',
'void-gore-ps5-1',
'miles-kilo-psvita-2',
'distraint-deluxe-edition-psvita-3',
'subnautica-ps4-1',
'air-psvita',
'akb1149-恋愛総選挙（playstation3版）-ps3',
'akibas-trip-2-トロフィーセット-ps3',
'albedo-eyes-from-outer-space-ps4-2',
'alias-carnival-サクラメントプラス-ps4',
'amnesia-laterxcrowd-psvita',
'amnesia-world-psvita',
'aquanauts-holiday-%e3%80%80～隠された記録～-ps3',
'armored-core-v-ps3',
'armored-core-verdict-day-ps3-1',
'army-of-two-the-40th-day-jp-ps3',
'back-in-1995-ps4-3',
'back-in-1995-psvita-2',
'believer！-psvita',
'binarystar-psvita',
'bioshock-2-remastered-ps4-1',
'bioshock-ps3-1',
'bioshock-remastered-ps4-1',
'block-builder-dx-ps4',
'chaoschild-ps3',
'chaoschild-ps4',
'chaoschild-psvita',
'chaoschild-らぶchu☆chu-ps4',
'chaoschild-らぶchu☆chu-psvita',
'chaoshead-noah-ps3',
'chaoshead-noah-psvita',
'chaoshead-らぶchu☆chu-ps3',
'chaoshead-らぶchu☆chu-psvita',
'charademaniacs-psvita',
'clannad-ps3',
'clannad-ps4',
'clannad-psvita',
'clash-force-ps4-3',
'code：realize-～創世の姫君～-psvita',
'code：realize-～彩虹の花束～-ps4',
'code：realize-～白銀の奇跡～-ps4',
'code：realize-～白銀の奇跡～-psvita',
'code：realize-～祝福の未来～-psvita',
'conan-outcasts-ps4',
'crisis-wing-ps5-3',
'cross†channel-～for-all-people～-ps3',
'cross†channel-～for-all-people～-psvita',
'd-c-4-～ダ・カーポ4～-ps4',
'd-s-dal-segno-ps4-psvita',
'daggerhood-ps4-3',
'dating-life-マイリーエミリー-ps4',
'dating-life-マイリーエミリー-ps5',
'dramatical-murder-recode-psvita',
'dynamic-chord-feat-apple-polisher-v-edition-psvita',
'dynamic-chord-feat-kyohso-v-edition-psvita',
'dynamic-chord-feat-liar-s-v-edition-psvita',
'dynamic-chord-feat-rêve-parfait-v-edition-psvita',
'end-sleep-psvita',
'eスクールライフ-ps4',
'fatal-twelve-ps4',
'fate-hollow-ataraxia-psvita',
'fatestay-night-realta-nua-psvita',
'flowers-psvita',
'flowers-四季-ps4',
'flowers冬篇-psvita',
'flowers夏篇-psvita',
'flowers秋篇-psvita',
'friend-to-lover-～フレラバ～-psvita',
'fullblast-ps4-3',
'galtia-v-edition-psvita',
'goes-psvita',
'grizzland-ps4-3',
'hentai-vs-evil-ps4-3',
'hentai-vs-evil-ps5-3',
'hero-and-a-garden-ps4-3',
'homestar-vr-special-edition-ps4',
'id-イド-rebirth-session-psvita',
'iro-hero-ps4-3',
'ixshe-tell-ps4-psvita',
'jackquest-ps4-2',
'klap-～kind-love-and-punish～-fun-party-psvita',
'klap-～kind-love-and-punish～-psvita',
'late-shift-ps4-1',
'love-choice-愛の選択-ps4',
'love-choice-愛の選択-ps5',
'love：quiz～恋する乙女のファイナルアンサー～-psvita',
'makinglovers-ps4-psvita',
'marginal4-idol-of-supernova-psvita',
'melty-moment-psvita',
'metagal-ps4-3',
'metagal-psvita-3',
'ni-no-kuni-wrath-of-the-white-witch-ps3',
'ni-no-kuni-wrath-of-the-white-witch-remastered-ps4-1',
'norn9-act-tune-psvita',
'norn9-last-era-psvita',
'norn9-var-commons-psvita',
'norn9-var-commons-psvita-1',
'null-drifter-ps4-3',
'obduction-ps4-3',
'occulticnine-ps4',
'occulticnine-psvita',
'ozmafia-vivace-psvita',
'pity-pit-ps4-3',
'possession-magenta-psvita',
'present-for-you-psvita',
'pretty-girls-panic-ps4',
'pretty-girls-panic-ps5',
'psychicemotion6-psvita',
'punchline-ps4',
'punchline-psvita',
'rayman-origins-ps3-2',
'rebirthday-song～恋を唄う死神～another-record-psvita',
'red-death-ps4-3',
'reviced-psvita',
'rewrite-harvest-festa-psvita',
'rewrite-ps3',
'rewrite-ps4',
'rewrite-psvita',
'reゼロから始める異世界生活-death-or-kiss-ps4',
'roboticsnotes-dash-ps4',
'roboticsnotes-elite-ps4',
'roboticsnotes-ps3',
'robozarro-ps4-3',
'side-kicks-psvita',
'silverchains-ps4-1',
'sound-shapes-ps4-3',
'starry☆sky～autumn-stories～-psvita',
'starry☆sky～spring-stories～-psvita',
'starry☆sky～summer-stories～-psvita',
'starry☆sky～winter-stories～-psvita',
'steinsgate-0-ps3',
'steinsgate-0-ps4-ps3-psvita',
'steinsgate-0-psvita',
'steinsgate-elite-ps4',
'steinsgate-elite-psvita',
'steinsgate-ps3',
'steinsgate-psvita',
'steinsgate-比翼恋理のだーりん-ps3',
'steinsgate-比翼恋理のだーりん-psvita',
'steinsgate-線形拘束のフェノグラム-ps3',
'steinsgate-線形拘束のフェノグラム-psvita',
'sugarstyle-ps4',
'super-destronaut-dx-intruders-edition-psvita',
'survive-mr-cube-ps4-2',
'sweet-pool-psvita',
'takotan-ps4-3',
'task-force-kampas-psvita',
'tear-終わりとはじまりの雫-ps4',
'toheart2-dx-plus-ps3',
'unbirthday-song～愛を唄う死神～another-record-psvita',
'vamwolf-cross†-psvita',
'void-gore-ps4-2',
'walking-dead-ps3-1',
'warlocks-tower-ps4-3',
'worldend-ps4',
'xblaze-lost-memories-psvita',
'year-of-springs-ps4',
'year-of-springs-ps5',
'zero-strain-ps4-3',
'zero-strain-ps5-1',
'√letter-last-answer-psvita',
'√letter-ps4',
'√letter-psvita',
'あざやかな彩りの中で、君らしく-ps4-psvita',
'あまつみそらに！-雲のはたてに-psvita',
'あやかしごはん～おおもりっ！～-psvita',
'いろとりどりのセカイ-worlds-end-rebirth-psvita',
'うみねこのなく頃に咲-～猫箱と夢想の交響曲～-ps4',
'おにあま-ps4',
'かけぬけ★青春スパーキング！-ps4',
'かりぐらし恋愛-ps4-ps3-psvita',
'この素晴らしい世界に祝福を-この欲深いゲーム-ps4',
'この青空に約束を―-psvita',
'さくらさくら-ps4-psvita',
'となりに彼女のいる幸せ-summer-surprise-ps4',
'となりに彼女のいる幸せ-～curious-queen～-ps4',
'となりに彼女のいる幸せ-～two-farce～-ps4-psvita',
'なないろリンカネーション-psvita',
'はつゆきさくら-ps4',
'はつゆきさくら-psvita',
'ひとつ飛ばし恋愛ｖ-psvita',
'ひまわり-pebble-in-the-sky-psvita',
'ひめひび-続！二学期-new-princess-days-psvita',
'まいてつ-pure-station-ps4',
'ものべの-pure-smile-psvita',
'やはりゲームでも俺の青春ラブコメはまちがって-psvita-1',
'ゆのはなspring！-psvita',
'ゆのはなspring！～cherishing-time～-psvita',
'らぶおぶ恋愛皇帝-of-love！-psvita',
'アイカギ2-ps4',
'アイカギ-きみと一緒にパック-ps4',
'アイカノ～雪空のトライアングル～-ps4',
'アイキス2-ps4',
'アイキス-ps4-psvita',
'アイドルカフェを経営しませんか？-ps4',
'アイドルカフェを経営しませんか？-ps5',
'アイベヤ-ps4',
'アエリアル・ライフ-ps4-psvita',
'アオナツライン-ps4-psvita',
'アストラエアの白き永遠-white-eternity-psvita',
'アブナイ☆恋の捜査室～eternal-happiness～-psvita',
'アマツツミ-psvita',
'アママネ2-ps4',
'アママネ-ps4-psvita',
'アメイジング・グレイス-what-color-is-your-attribute-ps4',
'アーキタイプ・アーカディア-ps4',
'アーキタイプ・アーカディア-ps5',
'オルフレール-～幸福の花束～-psvita',
'カエル畑-ｄｅ-つかまえて・夏%e3%80%80千木良参戦！-psvita',
'カエル畑-ｄｅ-つかまえて・夏　千木良参戦！-psvita',
'カエル畑ｄｅつかまえて-psvita',
'カタハネ-―an-call-belle―-psvita',
'カルマルカ＊サークル-ps4',
'カルマルカ＊サークル-psvita',
'ガチンコヒーローズ-ps3',
'キスアト-ps4',
'キスアト-psvita',
'キスベル-ps4-psvita',
'キスベル-psvita',
'キミの瞳にヒットミー-ps4-psvita',
'キャプテン・アース-mind-labyrinth-psvita',
'クランク・イン-psvita',
'グリザイア-ファントムトリガー-０１＆０２-psvita',
'グリザイア-ファントムトリガー-０３＆０４-psvita',
'グリザイアの果実-le-fruit-de-la-grisaia-psvita',
'グリザイアの果実-side-episode-psvita',
'グリザイアの果実スピンアウト！？アイドル魔法-psvita',
'グリザイアの楽園-le-eden-de-la-grisaia-psvita',
'グリザイアの迷宮-le-labyrinthe-de-la-grisaia-psvita',
'ゴルフ・ゼロ-ps4',
'サクラ・サキュバス-～モテ期は唐突に～-ps4',
'サクラ・サキュバス-～モテ期は唐突に～-ps5',
'サクラ水泳部-～転校生の決意～-ps4',
'サクラ水泳部-～転校生の決意～-ps5',
'サクラ･サキュバス２-～止まらぬ出会い～-ps4',
'サクラ･サキュバス２-～止まらぬ出会い～-ps5',
'サクラ･サキュバス３-～魔性の支配者～-ps4',
'サクラ･サキュバス３-～魔性の支配者～-ps5',
'サクラ･サキュバス４-～真夏のハーレム休暇～-ps4',
'サクラ･サキュバス４-～真夏のハーレム休暇～-ps5',
'サクラ･ノヴァ-～騎士学園物語～-ps4',
'サクラ･ノヴァ-～騎士学園物語～-ps5',
'シロガネxスピリッツ！-psvita',
'シンスメモリーズ-星天の下で-ps4',
'ジンキ・リザレクション-ps4',
'スキとスキとでサンカク恋愛-ps4-ps3-psvita',
'スチームプリズン-七つの美徳-psvita',
'ストロベリーノーツ-psvita',
'セヴンデイズ-あなたとすごす七日間-psvita',
'ソラユメ-psvita',
'タコリタ・ミーツ・ポテト-ps4',
'タコリタ・ミーツ・ポテト-ps5',
'タスクフォース-カンパス-ps4',
'タリアの伝説-女騎士アルカディア-ps4',
'タリアの伝説-女騎士アルカディア-ps5',
'ダイイングリボーン-ps4',
'ダイイングリボーン-psvita',
'ダイイングリボーンvr-ps4',
'ツキトモ。-tsukiuta-12-memories-psvita',
'デスマッチラブコメ！-ps4',
'トラベリングスターズ-traveling-stars-psvita',
'ドラゴンクエスト無料版-ps4',
'ドリームクラブホストガール%e3%80%80オンステージ-ps4',
'ドリームクラブホストガール　オンステージ-ps4',
'ナツイロココロログ-psvita',
'ナツメグ-psvita',
'ナデレボ！-psvita',
'ニル・アドミラリの天秤-クロユリ炎陽譚-psvita',
'ニル・アドミラリの天秤-帝都幻惑綺譚-psvita',
'ノラと皇女と野良猫ハート2-ps4-psvita',
'ノラと皇女と野良猫ハート2-ps4-psvita-1',
'ノラと皇女と野良猫ハート-hd-ps4-psvita',
'ノラと皇女と野良猫ハート-ps4-psvita',
'ハイリゲンシュタットの歌-psvita',
'ハミダシクリエイティブ-ps4',
'ハロー・レディ！-superior-dynamis-ps4',
'ハロー・レディ！-superior-dynamis-psvita',
'バースデー・オブ・ミッドナイト-ps4',
'パルフェ-psvita',
'パルフェリメイク-ps4',
'ファタモルガーナの館-dreams-of-the-revenants-edition-ps4',
'ファタモルガーナの館-psvita',
'フォルティッシモ-ps3-psvita',
'フユキス-ps4',
'フルキス-ps4-psvita',
'フルキスs-ps4',
'フローラル・フローラブ-ps4-psvita',
'プライミニスター-psvita',
'プラスティック・メモリーズ-psvita',
'プラマイウォーズv-psvita',
'ペルソナ３-ダンシング・ムーンナイト-ps4-psvita',
'ペルソナ４-ダンシング・オールナイト-ps4',
'ペルソナ５-ダンシング・スターナイト-ps4-psvita',
'ホチキス-ps4-psvita',
'ホチキス-psvita',
'ボクと彼女の研修日誌-ps4-psvita',
'ボクと彼女（女医）の診察日誌-ps4-psvita',
'マジきゅんっ！　ルネッサンス-psvita',
'マンガ・カ・ケール-ps4',
'メイドさんのいる暮らし-ps4',
'メモリーズオフ2nd-ps4',
'メモリーズオフ5-とぎれたフィルム-ps4',
'メモリーズオフ6-complete-ps3',
'メモリーズオフ6-complete-psvita',
'メモリーズオフ6～t-wave～-ps4',
'メモリーズオフ-innocent-fille-for-dearest-ps4',
'メモリーズオフ-innocent-fille-for-dearest-psvita',
'メモリーズオフ-innocent-fille-ps4',
'メモリーズオフ-innocent-fille-psvita',
'メモリーズオフ-innocent-fille-　ノエル-fullbloom-ps4',
'メモリーズオフ-ps4',
'メモリーズオフ-ゆびきりの記憶-ps3',
'メモリーズオフ-ゆびきりの記憶-ps4',
'メモリーズオフ-ゆびきりの記憶-psvita',
'メモリーズオフ～それから～-ps4',
'メルキス-ps4-psvita',
'ラズベリーキューブ-ps4',
'ラッキードッグ１-psvita',
'ラブクリア-ps4-psvita',
'リプキス-ps4-psvita',
'レイジングループ-ps4-ps3-psvita',
'レンドフルール-psvita',
'ワールド・エレクション-psvita',
'ヴァルプルガの詩-psvita',
'三国恋戦記-psvita',
'三国恋戦記～思いでがえし～-psvita',
'三色絵恋-tricolour-lovestory-ps4',
'乙女理論とその周辺-bon-voyage-psvita',
'人気声優のつくりかた-ps4-psvita',
'円環のメモーリア-カケラ灯し-psvita',
'冴えない彼女の育てかた～blessing-flowers～-psvita',
'初情スプリンクル-ps4',
'初情スプリンクル-psvita',
'千の刃濤、桃花染の皇姫-ps4-psvita',
'参千世界遊戯-～re-multi-universe-myself～-psvita',
'双子座のパラドクス-psvita',
'古書店街の橋姫-々-psvita',
'吉原彼岸花-久遠の契り-psvita',
'嘘月シャングリラ-psvita',
'執事が姫を選ぶとき-psvita',
'夜、灯す-ps4',
'夢現reidol-ps4',
'大図書館の羊飼い-library-party-ps4',
'大正x対称アリス-all-in-one-psvita',
'大正x対称アリス-heads-tails-psvita',
'大正メビウスライン-vitable-psvita',
'大正メビウスライン帝都備忘録ハレ-psvita',
'学園club-～ヒミツのナイトクラブ～-psvita',
'学園k-wonderful-school-days-v-edition-psvita',
'学園ヘヴン2～double-scramble～-psvita',
'学園ヘヴン-boys-love-scramble-psvita',
'巫女学校物語～楓編-ps4',
'帝国海軍恋慕情～明治横須賀行進曲～-psvita',
'帝國カレイド-革命の輪舞曲-psvita',
'幻想牢獄のカレイドスコープ-ps4',
'彼女（あのコ）はオレからはなれない-ps4',
'彼女（あのコ）はオレからはなれない-psvita',
'忍び、恋うつつ-―-甘蜜花絵巻-―-psvita',
'忍び、恋うつつ-―-雪月花恋絵巻-―-psvita',
'恋する乙女と守護の楯reboot-the-shield-9-ps4',
'恋する乙女と守護の楯～薔薇の聖母～-ps4-psvita',
'恋愛、借りちゃいました-ps4',
'恋愛（ラブ）リベンジ-psvita',
'悠久のティアブレイド-fragments-of-memory-psvita',
'悠久のティアブレイド-lost-chronicle-psvita',
'想い出にかわる君～メモリーズオフ～-ps4',
'戦国恋姫-ps4',
'探偵神宮寺三郎-prism-of-eyes-ps4',
'数乱digit-psvita',
'新装版魔法使いとご主人様～wizard-and-the-master～-psvita',
'明治東亰恋伽-full-moon-psvita',
'春音＊アリスグラム-snow-drop-ps4-psvita',
'最悪なる災厄人間に捧ぐ-ps4',
'月に寄りそう乙女の作法-～ひだまりの日々～-ps4',
'月に寄りそう乙女の作法-～ひだまりの日々～-psvita',
'月姫-a-piece-of-blue-glass-moon-ps4',
'月影の鎖-狂爛モラトリアム-psvita',
'月影の鎖-錯乱パラノイア-psvita',
'果つることなき未来ヨリ-psvita',
'桜花裁き-斬-psvita',
'殺し屋とストロベリー-psvita',
'殺人探偵ジャック・ザ・リッパー-ps4',
'添いカノ-ps4-psvita',
'灰鷹のサイケデリカ-psvita',
'熱血異能部活譚-trigger-kiss-psvita',
'爽海バッカニアーズ！-psvita',
'猛獣たちとお姫様-psvita',
'猛獣たちとお姫様-～in-blossom～-psvita',
'甘えかたは彼女なりに。-ps4-psvita',
'男遊郭-psvita',
'白と黒のアリス-psvita',
'白と黒のアリス-twilight-line-psvita',
'白衣性恋愛症候群-retherapy-psvita',
'白衣性愛情依存症-psvita',
'百花繚乱エリクシル～record-of-torenia-revival～-psvita',
'百華夜光-psvita',
'真-流行り神-ps3',
'真-流行り神-psvita',
'真-流行り神２-ps4',
'祝姫-祀-ps4',
'祝姫-祀-psvita',
'神さまと恋ゴコロ-psvita',
'神凪ノ杜-五月雨綴り-psvita',
'神様のような君へ-ps4',
'穢翼のユースティア-angels-blessing-psvita',
'空の向こうで咲きますように‐-ps3',
'空の向こうで咲きますように‐-psvita',
'空蝉の廻-psvita',
'竜翼のメロディア-diva-with-the-blessed-dragonol-psvita',
'紅色天井艶妖綺譚-二藍-psvita',
'終わる世界とバースデイ-psvita',
'絆きらめく恋いろは-ps4',
'絶対階級学園-psvita',
'罪喰い～千の呪い、千の祈り～-for-v-psvita',
'脱出ゲーム-aloha-ハワイの海に浮かぶ家-ps4',
'花咲くまにまに-ps3',
'花咲くまにまに-psvita',
'蒼の彼方のフォーリズム-psvita',
'薄桜鬼-随想録-面影げ花-psvita',
'薄桜鬼-黎明録-思馳せ空-psvita',
'薄桜鬼ssl-～sweet-school-life～-psvita',
'見鏡澄香の制服活動-ps4-psvita',
'謎解きメール-ps4',
'貴方の仮面の外し方★リマスター版-ps4',
'赤い砂堕ちる月-psvita',
'越えざるは紅い花～恋は月に導かれる～-psvita',
'軍靴をはいた猫-psvita',
'追放選挙-ps4',
'追放選挙-psvita',
'逢魔が刻-～かくりよの縁～-psvita',
'金色ラブリッチェ-golden-time-ps4',
'金色ラブリッチェ-ps4-psvita',
'鏡界の白雪-psvita',
'雷子-psvita',
'雷子‐紺碧の章‐-psvita',
'魔女こいにっき-dragonxcaravan-psvita',
'鯨神のティアスティラ-psvita',
'鳥籠のマリアージュ-～初恋の翼～-psvita',
'５人の恋プリンス～ヒミツの契約結婚～-psvita',
'Ｃｌｏｖｅｒ　Ｄａｙ’ｓ　～Ｍａｋｉｎｇ　ｆｏｒ　Ｈａｐｐｉｎｅｓｓ．～-psvita',
'ｃｌｏｖｅｒ　ｄａｙｓ　～ｍａｋｉｎｇ　ｆ-psvita',
];
const arrayKR = [
'chaoschild-ps4-1',
'chaoschild-psvita-1',
'cybxus-heart-ps4-4',
'탐정-진구지-사부로-prism-of-eyes-ps4',
'chaoschild-러브-chu☆chu-ps4',
'roboticsnotes-elite-psvita-2',
'steinsgate-0-ps4',
'steinsgate-0-psvita-1',
'steinsgate-ps3-2',
'steinsgate-psvita-1',
'steinsgate-비익연리의-달링-ps3',
'steinsgate-비익연리의-달링-psvita',
'steinsgate-선형구속의-페노그램-ps3',
'steinsgate-선형구속의-페노그램-psvita',
'survive-mr-cube-ps4',
'√letter-ps4-1',
'√letter-psvita-1',
'신-하야리가미2-ps4',
'신-하야리가미2-psvita',
'신-하야리가미-psvita',
'추방선거-ps4',
'콥스-파티-blood-drive-ps4-psvita',
];
const arrayCN = [
'koi-ps4-1',
'candleman-ps4',
'raincity-ps4-1',
'hohokum-ps4-ps3-psvita-3',
'rayman-legends-ps4-1',
'临终-重生试炼vr-ps4',
'临终：重生试炼-ps4',
];
const arrayGR =[
'wolfenstein-the-new-order-ps4-1',
];
const arrayES =[
'dfgjihgfhijfdsihufdshijfshjigdfihjgfdihjkgfdshijkgfdshjkifdghjfdghjikdsghjikdsfhjikgdhjgdhsjikghijsdfhjiggiojionh32huir3hjusiuhj',
];
const arrayRU =[
'rayman-origins-ps3-1',
];
const arrayVR = [

'ace-banana-ps4',
'ace-banana-ps4-1',
'affected-the-manor-ps4',
'affected-the-manor-ps4-1',
'affected-the-manor-ps4-2',
'affected-the-manor-ps4-3',
'after-the-fall-ps4',
'airtone-ps4',
'along-together-ps4',
'along-together-ps4-1',
'altdeus-beyond-chronos-ps4',
'altdeus-beyond-chronos-ps4-1',
'alvo-ps4',
'american-dream-ps4',
'ancient-amuletor-ps4',
'ancient-amuletor-ps4-1',
'angry-birds-movie-2-vr-under-pressure-ps4',
'angry-birds-vr-isle-of-pigs-ps4',
'animal-force-ps4',
'animal-force-ps4-1',
'anyones-diary-ps4',
'anywherevr-ps4',
'concrete-genie-ps4',
'apex-construct-ps4',
'apocalypse-rider-ps4',
'arashi-castles-of-sin-ps4',
'arcas-path-vr-ps4',
'archangel-ps4',
'archangel-ps4-1',
'arcslinger-ps4',
'arizona-sunshine-ps4',
'ark-park-ps4',
'artpulse-ps4',
'audica-ps4',
'audio-beats-ps4',
'baby-hands-ps4',
'bandit-six-combined-arms-ps4',
'bandit-six-combined-arms-ps4-1',
'bandit-six-combined-arms-ps4-2',
'bartender-vr-ps4',
'bartender-vr-ps4-1',
'baskhead-training-ps4',
'batman-arkham-vr-ps4',
'battlewake-ps4',
'beat-blaster-ps4',
'beat-saber-ps4',
'beats-fever　vrリズムステージ-ps4',
'beats-fever-ps4',
'beats-fever-ps4-1',
'bellows-ps4',
'bikeridervr-ps4',
'black-hat-cooperative-ps4',
'blair-witch-vr-ps4',
'blair-witch-vr-ps4-1',
'blasters-of-the-universe-ps4',
'blasters-of-the-universe-ps4-1',
'blind-ps4',
'blind-spot-ps4',
'blind-spot-ps4-1',
'blindfold-ps4',
'blood-truth-ps4',
'bonfire-ps4',
'borderlands-2-vr-ps4',
'borderlands-2-vr-ps4-1',
'boxing-apocalypse-ps4',
'boxvr-ps4',
'brain-beats-ps4',
'bravo-team-ps4',
'brookhaven-experiment-ps4',
'budget-cuts-ps4',
'bugsbox-vr-ps4',
'bullet-roulette-ps4',
'carly-and-the-reaperman-ps4',
'carly-and-the-reaperman-ps4-1',
'carnival-games-vr-ps4',
'carnival-games-vr-ps4-1',
'castlestorm-vr-edition-ps4',
'catan-vr-ps4',
'catch-and-release-ps4',
'catch-and-release-ps4-1',
'cave-digger-riches-ps4',
'chain-man-ps4',
'chair-in-a-room-ps4',
'chantry-ps4',
'chromagun-ps4-2',
'chromagun-ps4-3',
'coastertrophyset-ps4',
'coastertrophyset-ps4-1',
'code-51-mecha-arena-ps4',
'code-51-mecha-arena-ps4-1',
'cold-iron-ps4',
'contagion-vr-outbreak-ps4',
'coolpaintr-ps4',
'coolpaintr-ps4-1',
'coolpaintr-ps4-2',
'coolpaintr-ps4-3',
'coolpaintr-ps4-4',
'copper-canyon-shoot-out-ps4',
'copper-canyon-shoot-out-ps4-1',
'counter-fight3-vr-ps4',
'counter-fight-vr-ps4',
'counter-fight-vr-ps4-1',
'covert-ps4',
'covert-ps4-1',
'crazy-machines-vr-ps4',
'crazy-machines-vr-ps4-1',
'creed-rise-to-glory-ps4',
'crisis-on-the-planet-of-the-apes-vr-ps4',
'crisis-vrigade-2-ps4',
'crisis-vrigade-ps4',
'cubeworks-ps4',
'cubians-vr-ps4',
'curious-tale-of-the-stolen-pets-ps4',
'curious-tale-of-the-stolen-pets-ps4-1',
'dance-collider-ps4',
'dance-collider-ps4-1',
'dancing-beauty：idol-project-ps4',
'dark-eclipse-ps4',
'dark-legion-ps4',
'darkness-rollercoaster-ultimate-shooter-edition-ps4',
'darknet-ps4',
'dead-hungry-ps4',
'dead-hungry-ps4-1',
'dead-hungry-ps4-2',
'dead-realm-no-way-out-ps4',
'dead-realm-no-way-out-ps4-1',
'deadland-vr-ps4',
'deadland-vr-ps4-1',
'demagnete-vr-ps4',
'detached-ps4',
'dexed-ps4',
'dexed-ps4-1',
'dick-wilde-ps4',
'dick-wilde-ps4-1',
'dino-frontier-ps4',
'dino-frontier-ps4-1',
'doctor-who-the-edge-of-time-ps4',
'doctor-who-the-edge-of-time-ps4-1',
'domino-craft-ps4',
'doom-3-vr-ps4',
'doom-vfr-ps4',
'down-the-rabbit-hole-ps4',
'down-the-rabbit-hole-ps4-1',
'dream-angling-ps4',
'dream-match-tennis-vr-ps4',
'dream-match-tennis-vr-ps4-1',
'dream-match-tennis-vr-ps4-2',
'dreamworks-voltron-vr-chronicles-ps4',
'driveclub-vr-ps4',
'drone-striker-ps4',
'drone-striker-ps4-1',
'drunkn-bar-fight-ps4',
'dw2-ps4',
'dw2-ps4-1',
'dwvr-ps4',
'dying-reborn-vr-ps4',
'déraciné-ps4',
'eagle-flight-ps4',
'eclipse-ps4',
'eden-tommorrow-ps4',
'electronauts-ps4',
'electronauts-ps4-1',
'end-space-ps4',
'esper-ps4',
'espire-vr-operative-ps4',
'evasion-ps4',
'everybodys-golf-vr-ps4',
'exorcist-legion-vr-ps4',
'exorcist-legion-vr-ps4-1',
'fantastic-contraption-ps4',
'farpoint-ps4',
'fat-city-nyc-ps4-psvita',
'fat-city-nyc-ps4-psvita-1',
'fat-city-nyc-ps4-psvita-2',
'fated-the-silent-oath-ps4',
'fated-the-silent-oath-ps4-1',
'fated-the-silent-oath-ps4-2',
'final-assault-ps4',
'firewall-ps4',
'fishermans-tale-ps4',
'fishing-master-ps4',
'five-nights-at-freddys-vr-help-wanted-ps4',
'flipys-tesla-ps4',
'flipys-tesla-ps4-1',
'floor-plan-hands-on-edition-ps4',
'focus-on-you-ps4',
'focus-on-you-ps4-1',
'focus-on-you-ps4-2',
'focus-on-you-ps4-3',
'football-nation-vr-tournament-2018-ps4',
'form-ps4',
'fracked-ps4',
'freediver-triton-down-ps4',
'freediver-triton-down-ps4-1',
'fujii-ps4',
'fujii-ps4-1',
'gadgeteer-ps4',
'ghost-giant-ps4',
'ghosts-in-the-toybox-chapter-1-ps4',
'golem-ps4',
'good-goliath-ps4',
'gorn-ps4',
'gorn-ps4-1',
'grand-museum-vr-ps4',
'grand-museum-vr-ps4-1',
'groundhog-day-like-father-like-son-ps4',
'gun-club-vr-ps4',
'gun-club-vr-ps4-1',
'gungrave-vr-u-n-achievements-ps4',
'gungrave-vr-u-n-achievements-ps4-1',
'gungrave-vr-挑戦課題-ps4',
'gunjack-ps4',
'gunjack-ps4-1',
'gunsnstories-bulletproof-vr-ps4',
'guy-vr-ps4',
'guy-vr-ps4-1',
'happy-drummer-ps4',
'happy-drummer-ps4-1',
'harmonix-music-vr-ps4',
'hatsune-miku-vr-ps4',
'headmaster-ps4',
'herocade-ps4',
'herocade-ps4-1',
'heroes-of-the-seven-seas-ps4',
'hex-tunnel-ps4',
'hex-tunnel-ps4-1',
'holoball-ps4',
'home-run-derby-vr-ps4',
'home-run-derby-vr-ps4-1',
'homestar-vr-special-edition-ps4',
'homestar-vr-special-edition-ps4-1',
'homestar-vr-special-edition-ps4-2',
'hopalong-ps4',
'horror-adventure-vr-ps4',
'horror-adventure-vr-ps4-1',
'hotel-rnr-ps4',
'hotel-rnr-ps4-1',
'how-we-soar-ps4',
'how-we-soar-ps4-1',
'hyper-attraction-sky-games-ps4',
'i-expect-you-to-die-2-ps4',
'i-expect-you-to-die-ps4',
'idolmster-cinderella-girls-viewing-revolution-ps4',
'im-hungry-ps4',
'immortal-legacy-the-jade-cipher-ps4',
'in-death-ps4',
'inpatient-ps4',
'island-time-ps4',
'job-simulator-ps4',
'job-simulator-ps4-1',
'just-in-time-incorporated-ps4',
'kaiji-vr～the-nightmare-bridge～-ps4',
'killing-floor-incursion-ps4',
'kingdom-of-blades-ps4',
'kittend-ps4',
'kittend-ps4-1',
'knockout-league-ps4',
'konrad-the-kitten-ps4',
'konrad-the-kitten-ps4-1',
'korix-ps4',
'kowloons-gate-vr-suzaku-ps4',
'l-a-noire-the-vr-case-files-ps4',
'last-labyrinth-ps4',
'layers-of-fear-vr-ps4',
'league-of-war-vr-arena-ps4',
'leave-the-nest-complete-ps4',
'lethal-vr-ps4',
'loading-human-trophy-set-ps4-ps4',
'lost-bear-ps4',
'lunar-stone-origin-of-blood-ps4',
'mages-tale-ps4',
'marsalive-ps4',
'marsalive-ps4-1',
'marsalive-ps4-2',
'marsalive-ps4-3',
'marvels-iron-man-vr-ps4',
'maskmaker-ps4',
'medusa-and-her-lover-ps4',
'megalith-ps4',
'megaton-rainfall-ps4',
'megaton-rainfall-ps4-1',
'mervils-a-vr-adventure-ps4',
'mervils-a-vr-adventure-ps4-1',
'mind-labyrinth-vr-dreams-ps4',
'mini-motor-racing-x-ps4',
'minimechtrophies-ps4',
'miniwood-vr-ps4',
'minotaur-arcade-volume-10-ps4',
'monster-of-the-deep-final-fantasy-xv-ps4',
'monster-of-the-deep-final-fantasy-xv-ps4-1',
'monster-of-the-deep-final-fantasy-xv-ps4-2',
'monster-of-the-deep-final-fantasy-xv-ps4-3',
'moonshot-galaxy-ps4',
'moose-life-ps4',
'moose-life-ps4-1',
'mortal-blitz-combat-arena-ps4',
'mortal-blitz-ps4',
'mortal-blitz-ps4-1',
'mortal-blitz-ps4-2',
'mortal-blitz-ps4-3',
'moss-ps4',
'moss-ps4-1',
'nba-2kvr-experience-ps4',
'nba-2kvr-experience-ps4-1',
'neonhat-ps4',
'night-in-the-forum-ps4',
'night-in-the-forum-vr-ps4',
'ninja-legends-ps4',
'ninja-legends-ps4-1',
'no-heroes-allowed-ps4',
'o-my-genesis-vr-ps4',
'ohshape-ps4',
'one-piece-grand-cruise-ps4',
'operation-warcade-ps4',
'out-of-ammo-ps4',
'pancake-house-ps4',
'paper-beast-ps4',
'paper-beast-ps4-1',
'paperdolls-ps4',
'paperdolls-ps4-1',
'paperdolls-ps4-2',
'paperdolls-ps4-3',
'party-pumper-ps4',
'penn-teller-vr-frankly-unfair-unkind-unnecessary-underhanded-ps4',
'perfect-sniper-ps4',
'perfect-sniper-ps4-1',
'picture-party-vr-ps4',
'piecefallvr-ps4',
'pierhead-arcade-ps4',
'pinball-fx2-vr-ps4',
'pirate-flight-ps4',
'pistol-whip-ps4',
'pixel-ripped-1989-ps4',
'pixel-ripped-1989-ps4-1',
'pixel-ripped-1995-ps4',
'pixel-ripped-1995-ps4-1',
'pixelgear-ps4',
'playroom-vr-ps4',
'playstation-vr-worlds-ps4',
'pop-up-pilgrims-ps4',
'pop-up-pilgrims-ps4-1',
'potteryvr-ps4',
'predator-vr-ps4',
'preta-ps4',
'prison-boss-vr-ps4',
'projectlux-ps4',
'proton-pulse-ps4',
'proton-pulse-ps4-1',
'psychonauts-in-the-rhombus-of-ruin-ps4',
'quar-infernal-machines-ps4',
'quar-infernal-machines-ps4-1',
'quiz-night-tonight-trophies-ps4',
'rabbit-hole-ps4',
'racket-fury-ps4',
'racket-fury-ps4-1',
'ranchplanet-ps4-psvita',
'rangi-ps4',
'raw-data-ps4',
'reborn-ps4',
'reborn-ps4-1',
'reborn-ps4-2',
'reborn-ps4-3',
'red-matter-ps4',
'red-matter-ps4-1',
'rhythm-n-bullets-ps4',
'rick-and-morty-virtual-rick-ality-ps4',
'rick-and-morty-virtual-rick-ality-ps4-1',
'rigs-mcl-ps4',
'robinson-the-journey-ps4',
'robinson-the-journey-ps4-1',
'room-vr-a-dark-matter-ps4',
'room-where-art-conceals-ps4',
'rotu-ionia-ps4',
'run-dorothy-run-ps4',
'rush-vr-ps4',
'sacralith-ps4',
'sairento-ps4',
'sairento-ps4-1',
'sairento-ps4-2',
'scraper-ps4',
'scraper-ps4-1',
'sculptrvr-ps4',
'sculptrvr-ps4-1',
'sea-of-memories-ps4',
'sea-of-memories-ps4-1',
'separation-ps4',
'shadow-legend-vr-ps4',
'shadow-legend-vr-ps4-1',
'sharknado-vr-ps4',
'shooty-fruity-ps4',
'shuttle-commander-ps4',
'shuttle-commander-ps4-1',
'ski-jumping-pro-vr-ps4',
'ski-jumping-pro-vr-ps4-1',
'skyrim-vr-ps4',
'skyworld-ps4',
'slum-ball-ps4',
'slum-ball-ps4-1',
'smash-hit-plunder-ps4',
'smashbox-arena-ps4',
'sneaky-bears-ps4',
'sneaky-bears-ps4-1',
'sniper-elite-vr-ps4',
'snow-fortress-ps4',
'solaris-offworld-combat-ps4',
'song-in-the-smoke-ps4',
'soul-demension-ps4',
'space-channel-5-vr-kinda-funky-news-flash-ps4',
'space-explore-vr-ps4',
'space-explore-vr-ps4-1',
'space-jones-vr-ps4',
'space-junkies-ps4',
'space-pirate-trainer-ps4',
'space-rift-ps4',
'space-rift-ps4-1',
'sparc-ps4',
'special-delivery-ps4',
'special-delivery-ps4-1',
'spice-and-wolf-vr-ps4',
'sports-bar-vr-hangout-2-0-ps4',
'sprint-vector-ps4',
'spuds-unearthed-ps4',
'spuds-unearthed-ps4-1',
'squishies-ps4',
'star-wars-pinball-vr-ps4',
'starblood-arena-ps4',
'stardrone-ps4',
'stardust-odyssey-ps4',
'starship-disco-ps4',
'statik-ps4',
'steel-combat-ps4',
'stunt-kite-masters-vr-ps4',
'summer-funland-ps4',
'summer-lesson-allison-snow-seven-days-garden-ps4',
'summer-lesson-chisato-shinjo-seven-day-etude-ps4',
'summer-lesson-hikari-miyamoto-seven-days-room-ps4',
'super-amazeballs-ps4',
'super-ninja-hero-ps4',
'superhot-vr-ps4',
'superhypercube-ps4',
'surgeon-simulator-experience-reality-ps4',
'swords-of-gargantua-ps4',
'swordsman-ps4',
'swordsman-ps4-1',
'symphony-of-the-machine-ps4',
'synth-riders-ps4',
'table-of-tales-the-crooked-crown-ps4',
'tale-of-the-fragmented-star-single-fragment-version-ps4',
'telefrag-vr-ps4',
'theseus-ps4',
'throw-anything-ps4',
'thug-life-ps4',
'time-carnage-ps4',
'time-machine-vr-ps4',
'time-machine-vr-ps4-1',
'tiny-trax-ps4',
'to-the-top-ps4',
'tokyo-chronos-ps4',
'tokyo-chronos-ps4-1',
'torn-ps4',
'toy-clash-ps4',
'track-lab-ps4',
'traffic-jams-ps4',
'trainervr-ps4',
'transpose-ps4',
'transpose-ps4-1',
'trickster-vr-ps4',
'tripp-ps4',
'trover-saves-the-universe-ps4',
'tumble-vr-ps4',
'twilight-path-ps4',
'ultrawings-ps4',
'unearthing-mars2-the-ancient-war-ps4',
'unearthing-mars2-the-ancient-war-ps4-1',
'unearthing-mars2-the-ancient-war-ps4-2',
'unearthing-mars2-the-ancient-war-ps4-3',
'unearthing-mars-ps4',
'unearthing-mars-ps4-1',
'unearthing-mars-ps4-2',
'unearthing-mars-ps4-3',
'unearthing-mars-ps4-4',
'until-dawn-rush-of-blood-ps4',
'until-you-fall-ps4',
'until-you-fall-ps4-1',
'vacation-simulator-ps4',
'vacation-simulator-ps4-1',
'vader-immortal-episode-1-ps4',
'vader-immortal-episode-2-ps4',
'vader-immortal-episode-3-ps4',
'vertigohome-ps4',
'vertigohome-ps4-1',
'viking-days-ps4',
'virtualvirtualreality-ps4',
'virzoom-arcade-ps4',
'volume-vr-ps4',
'vr-invaders-ps4',
'vr-invaders-ps4-1',
'vr-karts-ps4',
'vr-ping-pong-pro-ps4',
'vr-ping-pong-ps4',
'vr-ping-pong-ps4-1',
'vr-tennis-online-ps4',
'vr-the-diner-duo-ps4',
'luckys-tale-ps4',
'vr-the-diner-duo-ps4-1',
'vrapocalypse-ps4',
'vrobot-ps4',
'vrobot-ps4-1',
'vrock-ps4',
'vrog-ps4',
'vrog-ps4-1',
'waddle-home-ps4',
'walker-ps4',
'walker-ps4-1',
'walking-dead-onslaught-ps4',
'walking-dead-saints-sinners-ps4',
'waltz-of-the-wizard-extended-edition-ps4',
'wands-ps4',
'wands-ps4-1',
'warbot-ps4',
'warzone-ps4',
'warzone-ps4-1',
'wayward-sky-ps4',
'wayward-sky-ps4-1',
'weeping-doll-ps4',
'werewolves-within-ps4',
'wild-turkey-hunter-ps4-1',
'wind-wind-ps4',
'windlands-2-ps4',
'windlands-ps4',
'winds-and-leaves-ps4',
'witching-tower-ps4',
'witching-tower-ps4-1',
'wizards-ps4',
'wizards-ps4-1',
'wizards-ps4-2',
'wolfenstein-cyberpilot-ps4',
'wolfenstein-cyberpilot-ps4-1',
'wraith-ps4',
'wraith-ps4-1',
'wraith-the-oblivion-afterlife-ps4',
'you-are-being-followed-ps4',
'yuki-ps4',
'yupitergrad-ps4',
'zenith-the-last-city-ps4',
'ゴキs-room-ps4',
'ダイイングリボーンvr-ps4',
'ホラー-sense-～だるまさんがころんだ～-ps4',
'リトルウィッチアカデミアvr-ほうき星に願いを-ps4',
'リトルウィッチアカデミアvr-ほうき星に願いを-ps4-1',
'临终-重生试炼vr-ps4',
'乖離性ミリオンアーサーvr-ps4',
'星の欠片の物語、ひとかけら版-ps4',
'星战钢甲-ps4',
'最终幻想15-深渊魔兽-ps4',
'第一章：悦霖-ps4',
'虚拟现实乐园-ps4',
'超级节拍-ps4',

]


function measureText(str, fontSize) {
  const widths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2796875,0.2765625,0.3546875,0.5546875,0.5546875,0.8890625,0.665625,0.190625,0.3328125,0.3328125,0.3890625,0.5828125,0.2765625,0.3328125,0.2765625,0.3015625,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.2765625,0.2765625,0.584375,0.5828125,0.584375,0.5546875,1.0140625,0.665625,0.665625,0.721875,0.721875,0.665625,0.609375,0.7765625,0.721875,0.2765625,0.5,0.665625,0.5546875,0.8328125,0.721875,0.7765625,0.665625,0.7765625,0.721875,0.665625,0.609375,0.721875,0.665625,0.94375,0.665625,0.665625,0.609375,0.2765625,0.3546875,0.2765625,0.4765625,0.5546875,0.3328125,0.5546875,0.5546875,0.5,0.5546875,0.5546875,0.2765625,0.5546875,0.5546875,0.221875,0.240625,0.5,0.221875,0.8328125,0.5546875,0.5546875,0.5546875,0.5546875,0.3328125,0.5,0.2765625,0.5546875,0.5,0.721875,0.5,0.5,0.5,0.3546875,0.259375,0.353125,0.5890625]
  const avg = 0.5279276315789471
  return str
    .split('')
    .map(c => c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg)
    .reduce((cur, acc) => acc + cur) * fontSize
}
var code = 0;

(function() {
    //setTimeout(function() {
    'use strict';

    console.log('number of / splits: ', document.URL.split('/').length)

	var currentProgress = 0;
	var totalProgress = 0;
    if ((document.URL.split('/')[3]) === "games") {
        code = 1
GM_addStyle ( `
    .gameTable td {
        padding-top: 30px !important;
    }
`)

        let rows = document.getElementsByClassName('gameCell');
        for (let i = 0; i < rows.length; ++i) {
            checkRegionGame(rows[i]);
        }

        console.log("code 1")
    }
    else if ((((document.URL.split('/').length) === 7) && (document.URL.split('/')[3] === '')) || ((document.URL.split('/').length) === 6) || ((document.URL.split('/').length) === 4)) {
			// Modify style so it shows horizontal scrolls too
			let page = document.getElementById('page');
			page.style = 'overflow: unset !important;'


        if (document.URL.split('/')[3] === 'game') {
            code = 2





                GM_addStyle ( `
                    .gamesContent {
                        background-color: #1d2126;
                    }
                    .gamesRight {
                        background-color: #1d2126 !important;
                        position: absolute;
                        top: 226px;
                    }


               `)
             // Fix Footer
                let gamesHeader = document.getElementById('gamesHeader').parentNode.children[1].style = `width:100%;height:25px; background-color: #1d2126;`;
                let links = document.getElementById('links').parentNode.parentNode.parentNode;
                links.children[0].style = `background-color: #1d2126; !important"`
                links.children[1].style = `display: table-cell; background-color: #1d2126; padding: 10px; !important"`
                document.getElementById('mainbody').style = `box-shadow: 0px -11px 20px 0px #000;`


















            injectLoadingBar();
			checkRegion(null);
            inlineTitleTags();
			parseGameDetails();
			let table = document.getElementById('game_details_table');
			let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
					totalProgress = rows.length;
					var loadingInterval = setInterval(() => {
						if (currentProgress >= totalProgress) {
							clearInterval(loadingInterval);
							return;
						}
						modifyProgressBar(rows[currentProgress]);
						currentProgress++;
						updateLoadingBar(currentProgress, totalProgress);
					}, 1);

            console.log("code 2")
            return // game + no user
        }
        else {
            if (document.URL.split('/')[3] == "event") {
                console.log("code 2a") //tournamnets
            }
            else{
                code = 3
                injectLoadingBar();
                let userInfo = document.getElementsByClassName('userInfo')[0];
                let userName = userInfo.children[0].children[0].innerText.replace(/\s/g,'').split('(')[0]
                console.log()
                let userAbout = "[w[%^jsj211~]|__~!=mom"
                if (userInfo.children[2] && userInfo.children[2].innerText) {
                    userAbout = userInfo.children[2].innerText
                }
                let flagdata = userInfo.children[0].children[1].innerHTML.split('="')
                let flag1 = flagdata[2].split('"')[0]
                let region = flagdata[3].split('"')[0].split('countries/')[1].split('_')[0]
                let flag2 = flagdata[3].split('"')[0].replace('small', 'large')
                let flag3 = flagdata[4].split('"')[0]
                let flag4 = flagdata[5].split('"')[0]
                let textSize = measureText(userAbout, 16) * 1.15
                if (textSize < 33) {
                    textSize = 33
                }
                let newuserInfo = document.createElement("div");
                newuserInfo.style='width: 200px; height: 100px; position:relative; font-family: Microsoft YaHei UI;'
                if (userAbout == "[w[%^jsj211~]|__~!=mom") {
                    newuserInfo.innerHTML = `
                                    <span style="display: inline-block;"><span class="flag" title="${flag1}"></span><img src="${flag2}" alt="${flag3}" title="${flag4}" width="50" height="auto"></span>


                                    <big style="width: 250px; text-align: left; color: #fff; font-size: 21px; font-weight: bold; position:absolute; top:0px; left:60px;">${userName}</big>
                                    `
                }
                else {
                newuserInfo.innerHTML = `
                                    <span style="display: inline-block;"><span class="flag" title="${flag1}"></span><img src="${flag2}" alt="${flag3}" title="${flag4}" width="50" height="auto"></span>


                                    <big style="width: 250px; text-align: left; color: #fff; font-size: 21px; font-weight: bold; position:absolute; top:0px; left:60px;">${userName}</big>

                                    <div style="position: absolute; top:37px; left:15px;">
                                         <div style="width: 0px;height: 0px;

                                                  border-left: 2vh solid transparent;
                                                  border-top: 3vh solid #33383e;
                                                  transform: rotate(55deg);
                                                  position: absolute; top: 5px; left: 5px; "></div>

                                         <div style="width: ${textSize}px; height: 25px; background-color: #33383e; border-radius: 4px; margin-bottom:50px"></div>
                                    </div>
                                    <small style="width: ${textSize}px; color: #ccc; text-align: center; font-size: 14px; position:absolute; top:41px; left:16px;">${userAbout}</small>
                                    `


                }

                insertBefore(newuserInfo, userInfo);
                userInfo.remove()
                //= `font-family: Microsoft YaHei UI;`


GM_addStyle ( `
    #id-avatar {
        overflow: visible !important;
    }

    .profileLogo img.plus {
        position: absolute;
        top: -15px;
        left: -25px;
        width: 50px;
        z-index: 999 !important;
    }

    .profileLogo {
        position: sticky !important;
        top: 20px !important;
        z-index: 997 !important;
    }

    .avatar-large {
        position: sticky !important;
        top: 20px !important;
        z-index: 998 !important;

        transition: width .2s, height .2s, transform .2s;
    }
    #id-avatar img.avatar-large {
        width: 160px;
        height: 160px;
        background-color: #001118;
        border-radius: 5px 5px 5px 5px !important;
        -moz-border-radius: 5px 5px 5px 5px !important;
        -webkit-border-radius: 5px 5px 5px 5px !important;
        box-shadow: 0px 0px 5px 1px #0000008c;
    }
    .usergrouper.lifetime-member {
        border-radius: 5px 5px 0px 0px !important;
        -moz-border-radius: 5px 5px 0px 0px !important;
        -webkit-border-radius: 5px 5px 0px 0px !important;
    }
    .iconTrophy {
        z-index: 996 !important;
        transition: transform .2s;
    }
    .iconTrophy:hover {
        transform: scale(1.5) rotate(-15deg);
    }
    .iconTrophy2 {
        z-index: 996 !important;
        transition: transform .2s;
    }
    .iconTrophy2:hover {
        transform: scale(1.3);


    }

`)



                let Lifetime_Member = document.getElementsByClassName('usergrouper')[0]
                if (Lifetime_Member) {
                    Lifetime_Member.parentElement.style = `
        padding: 2px; background-color: #FFFFFF; color: #169DFC;
        border-radius: 5px 5px 5px 5px !important;
        -moz-border-radius: 5px 5px 5px 5px !important;
        -webkit-border-radius: 5px 5px 5px 5px !important;
                    `
                }
                let addBufferSticky= 0
                let profile_badge = document.getElementsByClassName('profile_badge')[0]
                if (profile_badge) {
                    addBufferSticky = 50
                }
                let Cheater_Team = document.getElementsByClassName('team_cheater')[0]
                if (Cheater_Team) {
                    Cheater_Team.title = `PSNTL Cheater Removal Team`
                }
                var new_avatar_bool = false
                let new_avatar = document.getElementsByClassName('avatar-large')[0].currentSrc.slice(0, -5) + "xl.png"
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: `${new_avatar}`,
                    responseType: 'document',
                    onload: function(res) {
                        if (res.status == 404) {
                            console.log('could not locate higher res avatar');

			                                	GM_addStyle ( `

                                                .avatar-large:hover {
                                                    transform: scale(1.5) translate(25px, 25px);
                                                }

                                                `)//cursor: url('${document.getElementsByClassName('avatar-large')[0].currentSrc}'), auto;
                            document.getElementsByClassName('avatar-large')[0].src = document.getElementsByClassName('avatar-large')[0].currentSrc
                        }
                        else {
                            if (new_avatar) {
				                                GM_addStyle ( `

                                                .avatar-large:hover {
                                                    transform: scale(2) translate(40px, 40px);
                                                }

                                                `) //cursor: url('${document.getElementsByClassName('avatar-large')[0].currentSrc.slice(0, -5) + "xl.png"}'), auto;
                                document.getElementsByClassName('avatar-large')[0].src = new_avatar
                            }
                        }
                    },
                    onerror: function(res) {
                        console.log('fatal error');
                    }
                });




                //console.log(avatarSrc)




                remove(document.querySelector("#displaySummary"))


                let maincontainer = document.getElementById('maincontainer');
                maincontainer.style = 'margin: 0 auto !important;'

                let content = document.getElementsByClassName('content')[0];
                content.style = 'margin-left: -160px !important;'

                //grabbing info
                let childarray = document.getElementsByClassName('userstats')[0].children[0].children[0].children;
                //console.log(childarray);

                /*let increaseamount = 0;
            if (childarray[6].outerText.split("\n").length > 3)
            {
                increaseamount = 2;
                console.log("increase amount changed");
            }
            let trophypoints = childarray[6].outerText.split("\n")[2 + increaseamount].split(" points")[0];*/




                let platinumtrophies = childarray[1].outerText.split("\n")[1].replace(',', '');
                //console.log(platinumtrophies);

                let goldtrophies = childarray[2].outerText.split("\n")[1].replace(',', '');
                //console.log(goldtrophies);

                let silvertrophies = childarray[3].outerText.split("\n")[1].replace(',', '');
                //console.log(silvertrophies);

                let bronzetrophies = childarray[4].outerText.split("\n")[1].replace(',', '');
                //console.log(bronzetrophies);

                let trophypoints = ""
                let worldRank = ""
                let worldRankChange = ""
                if (childarray[6].outerText.slice(14, 29) == "inaccurate data") {
                    trophypoints = (((platinumtrophies * 300) + (goldtrophies * 90) + (silvertrophies * 30) + (bronzetrophies * 15)).toLocaleString())
                    worldRank = ":("
                    worldRankChange = ""
                }
                else {
                    trophypoints = childarray[6].outerText.split("\n")[childarray[6].outerText.split("\n").length > 3 ? 4 : 2].split(" points")[0];
                    //console.log(trophypoints);

                    worldRank = childarray[6].outerText.split("\n")[0]
                    //console.log(worldRank);

                    worldRankChange = childarray[6].outerText.split("\n")[2]
                    //console.log(worldRankChange);
                }

                let topstats = document.getElementById("toprightstats").children
                //console.log(topstats);

                let gamecount = topstats[2].outerText.split("games")[0].replace(',', '');
                //console.log(gamecount);

                let commatrophycount = document.getElementsByClassName("rankhead")[0].children[0].innerText.split('(')[1].split(')')[0];
                let trophycount = commatrophycount.replace(',', '');
                //console.log(trophycount);

                let trophiesperday = topstats[6].outerText.split("trophies per day")[0].slice(0, -1);
                //console.log(trophiesperday);

                //let averageprogress = topstats[8].outerText.split("average progress")[0];
                let averageprogress = topstats[8].innerHTML.split('title="')[1].split('%')[0].split('.')

                if (averageprogress.length > 1) {
                    averageprogress = ([averageprogress[0], averageprogress[1].slice(0, 1)].join('.'))
                }
                
                //console.log(averageprogress);

                let level = topstats[0].children[0].innerText;
                //console.log(level);

                let levelpercent = topstats[0].children[1].children[0].children[1].innerText;
                //console.log(levelpercent);

                let imagesource = topstats[0].children[0].innerHTML.split('src=\"')[1].split("\">")[0];
                //console.log(imagesource);

                //remove top elements now that we've gotten info from them
                let topstatsnum = 8;
                while (topstatsnum != -1)
                {
                    remove(topstats[topstatsnum]);
                    topstatsnum -= 1;
                }









                let boardrank = document.getElementById('boardrank');
                //console.log(boardrank)

                let bonusTrophies = document.createElement("div");
                bonusTrophies.id = ["bonusTrophies"];
                bonusTrophies.class = "bonusTrophiesContainer"
                bonusTrophies.style = `text-align:right; display: block; font-family: 'Microsoft YaHei UI'; margin-left: auto; margin-right: auto; width: auto; height: 150px; color: #1d2126; background-color: #1d2126; position:sticky; top: ${200+addBufferSticky}px; !important`

                bonusTrophies.innerHTML = `
                                                               <big style="width: 80px; text-align: right; font-size: 18px; font-weight: bold; color: #EEE; position:absolute; top:40px; right:20px;">${platinumtrophies}</big>
                                                               <img class="iconTrophy" style="position:absolute; top:20px; left:20px;" width=auto height=50px  src="https://i.imgur.com/VnkHuFc.png">

                                                               <big style="width: 80px; text-align: right; font-size: 18px; font-weight: bold; color: #EEE; position:absolute; top:90px; right:20px;">${goldtrophies}</big>
                                                               <img class="iconTrophy" style="position:absolute; top:70px; left:20px;" width=auto height=50px  src="https://i.imgur.com/dP1FS6L.png">

                                                               <big style="width: 80px; text-align: right; font-size: 18px; font-weight: bold; color: #EEE; position:absolute; top:140px; right:20px;">${silvertrophies}</big>
                                                               <img class="iconTrophy" style="position:absolute; top:120px; left:20px;" width=auto height=50px  src="https://i.imgur.com/TDJmHUc.png">

                                                               <big style="width: 80px; text-align: right; font-size: 18px; font-weight: bold; color: #EEE; position:absolute; top:190px; right:20px;">${bronzetrophies}</big>
                                                               <img class="iconTrophy" style="position:absolute; top:170px; left:20px;" width=auto height=50px  src="https://i.imgur.com/EjoXyJB.png">

                                                        `





                insertBefore(bonusTrophies, boardrank)











                let bottomstatselement = document.createElement("div");
                bottomstatselement.id = ["bottomrightstats"];
                bottomstatselement.style='width: 800px; height: 60px; position:relative; font-family: Microsoft YaHei UI;'
                bottomstatselement.innerHTML = `
                                            <big style="width: 120px; text-align: center; font-size: 25px; font-weight: bold; position:absolute; bottom:20px; right:20px;">${averageprogress}%</big><small style="width: 120px; text-align: center; font-size: 12px; position:absolute; bottom:10px; right:20px;">Average completion</small>
                                            <big style="width: 120px; text-align: center; font-size: 25px; font-weight: bold; position:absolute; bottom:20px; right:160px;">${trophiesperday}</big><small style="width: 120px; text-align: center; font-size: 12px; position:absolute; bottom:10px; right:160px;">Trophies per day</small>
                                            <big style="width: 120px; text-align: center; font-size: 25px; font-weight: bold; position:absolute; bottom:20px; right:280px;">${gamecount}</big><small style="width: 120px; text-align: center; font-size: 12px; position:absolute; bottom:10px; right:280px;">Games</small>
                                            <big style="width: 120px; text-align: center; font-size: 25px; font-weight: bold; position:absolute; bottom:20px; right:450px;">${trophypoints}</big><small style="width: 120px; text-align: center; font-size: 12px; position:absolute; bottom:10px; right:450px;">Points</small>`

                insertBefore(bottomstatselement, document.getElementById('toprightstats'));


                //

                let newtopstatselement = document.createElement("div");
                newtopstatselement.id = ["newtoprightstats"];
                newtopstatselement.style='width: 800px; height: 80px; position:relative; font-family: Microsoft YaHei UI; image-rendering: crisp-edges;'
                newtopstatselement.innerHTML = `<big style="width: 80px; text-align: left; font-size: 18px; font-weight: bold; position:absolute; bottom:20px; right:20px;">${bronzetrophies}</big>
                                                               <img class="iconTrophy"style="position:absolute; bottom:15px; right:100px;" width=auto height=50px  src="https://i.imgur.com/EjoXyJB.png">
                                                               <big style="width: 80px; text-align: left; font-size: 18px; font-weight: bold; position:absolute; bottom:20px; right:135px;">${silvertrophies}</big>
                                                               <img class="iconTrophy"style="position:absolute; bottom:15px; right:215px;" width=auto height=50px  src="https://i.imgur.com/TDJmHUc.png">
                                                               <big style="width: 80px; text-align: left; font-size: 18px; font-weight: bold; position:absolute; bottom:20px; right:250px;">${goldtrophies}</big>
                                                               <img class="iconTrophy"style="position:absolute; bottom:15px; right:330px;" width=auto height=50px  src="https://i.imgur.com/dP1FS6L.png">
                                                               <big style="width: 80px; text-align: left; font-size: 18px; font-weight: bold; position:absolute; bottom:20px; right:345px;">${platinumtrophies}</big>
                                                               <img class="iconTrophy" style="position:absolute; bottom:15px; right:425px;" width=auto height=50px  src="https://i.imgur.com/VnkHuFc.png">



                                                               <big style="width: 80px; text-align: center; font-size: 18px; font-weight: bold; position:absolute; bottom:20px; right:480px;">${trophycount}</big>
                                                               <big style="width: 80px; text-align: center; font-size: 18px; font-weight: bold; position:absolute; bottom:45px; right:480px;">Total</big>

                                                               <big style="width: 80px; text-align: left; font-size: 25px; font-weight: bold; position:absolute; bottom:26px; right:555px;">${level}</big>
                                                               <img class="iconTrophy2" style="position:absolute; bottom:14px; right:635px;" width=auto height=55px  src="${imagesource}">



                                                               <div style="width: 90px; height: 4px; position:absolute; bottom:6px; right:580px;" class="progresscontainer stacked softshadow">
                                                                    <div style="width: ${levelpercent}; height: 4px;" class="progressbar">

                                                                    </div>
                                                               </div>
                                                               <small style="width: 92px; color: #ccc; text-align: center; font-size: 12px; position:absolute; bottom:-10px; right:580px;">${levelpercent}</small>
                                                               `/*

                                                               <div style="width: 70px; height: 2px; position:absolute; bottom:10px; right:600px; background-color: #CCC;" </div><div class="small progresscontainer" style="width: 36%; background-color: #F00;" </div>


                                                               `/*
                                            <td class="center"><img width=auto height=50px src="https://i.imgur.com/VnkHuFc.png"></td>
                                            <div class="center" style="width: auto; height: 70px; position:relative; !important"><big style="font-family: Microsoft YaHei UI; font-size: 19px; font-weight: bold; position:absolute; bottom:0; left:0;">${platinumtrophies}</big></td>
                                            <td class="center"><img width=auto height=50px src="https://i.imgur.com/dP1FS6L.png"></td>
                                            <div class="center" style="width: auto; height: 70px; position:relative; !important"><big style="font-family: Microsoft YaHei UI; font-size: 19px; font-weight: bold; position:absolute; bottom:0; left:0;">${goldtrophies}</big></td>
                                            <td class="center"><img width=auto height=50px src="https://i.imgur.com/TDJmHUc.png"></td>
                                            <div class="center" style="width: auto; height: 70px; position:relative; !important"><big style="font-family: Microsoft YaHei UI; font-size: 19px; font-weight: bold; position:absolute; bottom:0; left:0;">${silvertrophies}</big></td>
                                            <td class="center"><img width=auto height=50px src="https://i.imgur.com/EjoXyJB.png"></td>
                                            <div class="center" style="width: auto; height: 70px; position:relative; !important"><big style="font-family: Microsoft YaHei UI; font-size: 19px; font-weight: bold; position:absolute; bottom:0; left:0;">${bronzetrophies}</big></td>`;*/
                insertBefore(newtopstatselement, document.getElementById("bottomrightstats").previousSibling);



                let country_rank = ":("
                if (childarray[6].outerText.slice(14, 29) == "inaccurate data") {
                            let country_node = document.createElement("div");
                            country_node.id = ["countryRank"];
                            country_node.style='width: 8px; height: 0px; position:relative; font-family: Microsoft YaHei UI; image-rendering: crisp-edges; text-align: center;'
                            country_node.innerHTML = `
                                                               <big style="width: 170px; font-size: 22px; font-weight: bold; position:absolute; bottom:20px; right:7px;">${country_rank}</big>
                                                               <small style="width: 170px; font-size: 12px; position:absolute; bottom:10px; right:7px;">Country</small>`

                            insertBefore(country_node, document.getElementById("bottomrightstats"));
                }
                else {
                    childarray[6].remove()
                    GM_xmlhttpRequest({
                        method: 'GET',
                        url: `https://psntrophyleaders.com/leaderboard/main?country=${region}&user=${userName}`,
                        responseType: 'document',
                        onload: function(res) {
                            //console.log(res.response.body);
                            country_rank = Array.from(res.response.body.getElementsByClassName('tablerow user highlighted'))[0].outerText.split('\n')[1].replace(/\s/g,'')
                            country_rank = country_rank.slice(0, country_rank.length / 2)
                            //console.log(country_rank)
                            let country_node = document.createElement("div");
                            country_node.id = ["countryRank"];
                            country_node.style=`width: 8px; height: 0px; position:relative; font-family: Microsoft YaHei UI; image-rendering: crisp-edges; text-align: center;`
                            country_node.innerHTML = `<a href="https://psntrophyleaders.com/leaderboard/main?country=${region}&user=${userName}">
                                                                           <big style="color: #CCC; width: 170px; font-size: 22px; font-weight: bold; position:absolute; bottom:20px; right:7px;">${country_rank}
                                                                           </big>
                                                                           <small style="color: #888; width: 170px; font-size: 12px; position:absolute; bottom:10px; right:7px;">Country
                                                                           </small>
                                                                     </a>`

                            insertBefore(country_node, document.getElementById("bottomrightstats"));
                        },
                        onerror: function(res) {
                            console.log('could not locate country rank');
                        }
                    });
                }
                if (worldRankChange.slice(-6) == "points") {
                    worldRankChange = '='
                }
                let changeColour = '#CCC';
                if (worldRankChange.slice(0, 1) == "+") {
                    changeColour = '#3C0'
                }
                else if (worldRankChange.slice(0, 1) == "-") {
                    changeColour = '#E30';
                }
                let country_node = document.createElement("div");
                country_node.id = ["worldRank"];
                country_node.style=`width: 8px; height: 0px; position:relative; font-family: Microsoft YaHei UI; image-rendering: crisp-edges; text-align: center;`
                country_node.innerHTML = `<a href="https://psntrophyleaders.com/leaderboard/main?country=all&user=${userName}">
                                                               <big style="color: #CCC; width: 170px; font-size: 22px; font-weight: bold; position:absolute; bottom:20px; right:-140px;">${worldRank}
                                                               </big>
                                                               <small style="color: #888; width: 170px; font-size: 12px; position:absolute; bottom:10px; right:-140px;">World
                                                               </small>
                                                               <small style="color: ${changeColour};text-align: left; width: 170px; font-size: 12px; position:absolute; bottom:10px; right:-250px;">${worldRankChange}
                                                               </small>
                                                           </a>`

                insertBefore(country_node, document.getElementById("bottomrightstats"));

                /*document.getElementsByClassName("userLeft")[0].style = `    vertical-align: top;
    justify-content: space-around;
    width: 180px;
    overflow: auto;
    position: sticky;
    top: 5px;
height: 200px; !important
`*/
                //document.getElementsByClassName("userRight")[0].style = `padding-left: 180px;background-color: #1d2126;`

                //fixes spacing post trophy info deletion [placed here as removing indexes from the array seems to break]
                //document.getElementsByClassName("rankhead")[1].style = "margin-top: 0px;";
                //document.getElementsByClassName("rankhead")[1].parentNode.outerText = "asdfasdfasdfrds:"


                let totalTrophiesBoard = document.createElement("div");
                totalTrophiesBoard.id = ["testaaa"];
                totalTrophiesBoard.style=`width: 160px; height: 1px; position:relative; font-family: Helvetica; image-rendering: crisp-edges; text-align: center; background-color: rgb(68 68 68)`
                totalTrophiesBoard.innerHTML = `
                                                               <small style="color: #CCC; width: 170px; font-size: 12px; position:absolute; bottom:4px; left: -3px;">something
                                                               </small>
                                                           `

                //insertBefore(totalTrophiesBoard, document.getElementsByClassName("rankhead")[0].parentNode.parentNode.children[1]);







                //leaderboard clone for total trophies leaderboard

                let inaccurate = document.getElementsByClassName("cheatermessage")[0]
                if (inaccurate) {
                    console.log('__skip')
                }
                else {
                    let newLeaderboard = document.getElementsByClassName("rankhead")[0].parentNode.parentNode.parentNode.children[6]
                    let cloneLeaderboard = newLeaderboard.cloneNode(true);
                    GM_xmlhttpRequest({
                        method: 'GET',
                        url: `https://psntrophyleaders.com/leaderboard/main/?sort=total_trophies-desc&user=${userName}`,
                        responseType: 'document',
                        onload: function(res) {
                            //console.log(res.response.body);
                            let main_dat = Array.from(res.response.body.getElementsByClassName('tablerow user highlighted'))[0].outerText
                            let totaltrophies_rank = main_dat.split('\n')[1].replace(/\s/g,'')
                            let totaltrophies_rank_difference = main_dat.split('\n')[9].replace(/\s/g,'')
                            let change_name = 'not changed'
                            let change_color = 'CCC'
                            if (totaltrophies_rank_difference.slice(0,1) == "-") {
                                change_name = 'decreased'
                                change_color = '#E30'
                            }
                            else if (totaltrophies_rank_difference.slice(0,1) == "+") {
                                change_name = 'increased'
                                change_color = '#3C0'
                            }
                            else {
                                change_name = 'not changed'
                                change_color = 'CCC'
                            }
                            //console.log(main_dat.split('\n')[9].replace(/\s/g,''))
                            //console.log(main_dat.split('\n'))
                            //console.log(totaltrophies_rank)






                            cloneLeaderboard.innerHTML = newLeaderboard.innerHTML
                            insertBefore(cloneLeaderboard, newLeaderboard)
                            //newLeaderboard.style.display = 'none';
                            cloneLeaderboard.classList.add("clonedLB");

                            //console.log(newLeaderboard.innerHTML)
                            newLeaderboard.innerHTML = `

                                              <td style="text-align: right">
                                                  <big>${totaltrophies_rank}</big>
                                              </td>
                                              <td>
                                                 <small>
                                                    <a href="https://psntrophyleaders.com/leaderboard/main/?sort=total_trophies-desc&user=${userName}" style="font-size: 1.1em; color: #06C; font-weight: bold;">Total Trophies
                                                    </a>
                                                    <span title="${userName}'s rank has ${change_name} by ${totaltrophies_rank_difference.slice(1)} this week on the Total Trophies Leaderboard" class="week_change"><span style="color:${change_color}">${totaltrophies_rank_difference}</span></span><br>${commatrophycount} <span style="font-size: .8em;">trophies
                                                    </span>
                                                 </small>
                                              </td>
                    `
                        },
                        onerror: function(res) {
                            console.log('could not locate total trophy rank');
                        }
                    });

                    //newLeaderboard.innerHTML + (`<a href="https://psntrophyleaders.com/leaderboard/main/?sort=total_trophies-desc&user=${userName}">test</a>`)
                }






                let otherLeaderboards = document.createElement("div");
                otherLeaderboards.id = ["otherLeaderboards"];
                otherLeaderboards.style=`width: 160px; height: 1px; position:relative; font-family: Helvetica; image-rendering: crisp-edges; text-align: center; background-color: rgb(68 68 68)`
                otherLeaderboards.innerHTML = `
                                                               <small style="color: #CCC; width: 170px; font-size: 12px; position:absolute; bottom:4px; left: -3px;">Other Leaderboards
                                                               </small>
                                                           `

                insertBefore(otherLeaderboards, document.getElementsByClassName("rankhead")[1]);








                let otherLeaderboardsPadding = document.createElement("div");
                otherLeaderboardsPadding.id = ["otherLeaderboardsPadding"];
                otherLeaderboardsPadding.style=`width: 160px; height: 36px; position:relative; font-family: Helvetica; image-rendering: crisp-edges; text-align: center;`
                insertBefore(otherLeaderboardsPadding, document.getElementsByClassName("rankhead")[1]);
                document.getElementsByClassName("rankhead")[1].remove()







                //console.log(document.getElementById("subnav").nextElementSibling);
                remove(document.getElementById("subnav").nextElementSibling); //this removes the bar at the top asking for donations as well as links to psntl socials
                //removes trophy data from left hand tab
                remove(childarray[4]);
                remove(childarray[3]);
                remove(childarray[2]);
                remove(childarray[1]);
                remove(childarray[0]);

                let links = document.getElementById('links').parentNode.parentNode.parentNode;
                links.children[0].style = `background-color: #1d2126; !important"`
                links.children[1].style = `display: table-cell; background-color: #1d2126; padding: 10px; !important"`


                document.getElementById('mainbody').style = `box-shadow: -10px 145px 50px 145px #000;`

                let table = document.getElementById('usergamelist');
                table.style.tableLayout = 'fixed';
                table.style.width = '1020px'











                let cur_userHeader= document.getElementsByClassName("userHeader")[0]

                let __recentTrophies = document.createElement("ul");
                __recentTrophies.id = ["trophies-recent-container"];
                __recentTrophies.class = "trophies-recent-container flex"
                __recentTrophies.style = "text-align:left; display: block; margin-left: auto; margin-right: auto; width: auto; height: 55px; color: #1d2126; background-color: #1d2126; position:relative; !important"

                insertBefore(__recentTrophies, cur_userHeader);


                let fff = document.createElement("ul");
                let cur_recentTrophies = document.getElementsByClassName("hc-preview")
                //console.log(cur_recentTrophies)





                /*const now = Date.now()
                console.log(now)


                let last_update_date = document.getElementById('update_info').children[0].innerHTML.split('formatDate("')[1].split('")')[0]
                console.log(last_update_date + '000')
                console.log((now - last_update_date))




                /*var d = last_update_date.diff(now, 'days'); // 9
                console.log(d);*/

                //let defference_time = new Date(now - last_update_date)
                //console.log(defference_time)*/


                for (let i = 0; i < cur_recentTrophies.length; ++i) {
                    let rt = cur_recentTrophies[i]
                    let __length = rt.length
                    let __rarity = rt.innerText
                    let __img = rt.firstChild.children[0].currentSrc
                    let __trophy_link = rt.children[0].href
                    let __innerHTML = rt.childNodes[1].innerHTML
                    let __game_name = rt.getElementsByClassName("game_title")[0].innerText
                    let __trophy_name = rt.getElementsByClassName("title")[0].innerText
                    let __trophy_description = rt.getElementsByClassName("description")[0].innerText
                    let __trophy_timestamp = rt.getElementsByClassName("date_earned")[0].title
                    let __trophy_timestamp_inner = rt.getElementsByClassName("date_earned")[0].innerText
                    let __game_link = `https://psntrophyleaders.com/user/view/${__trophy_link.split('/')[5]}/${__trophy_link.split('/')[6]}`
                    let __game_img = rt.getElementsByClassName("game_image")[0].children[0]
                    let __game_img_src = __game_img.src
                    let __trophy_type = rt.getElementsByClassName("title")[0].children[0].className
                    let __rarity_src = "https://i.imgur.com/y45e4ng.png"
                    if (__rarity == "Common") {
                        __rarity_src = "https://i.imgur.com/0LuKHfY.png"
                    }
                    else if (__rarity == "Rare") {
                        __rarity_src = "https://i.imgur.com/ppJobwB.png"
                    }
                    else if (__rarity == "Very Rare") {
                        __rarity_src = "https://i.imgur.com/a00IBi5.png"
                    }
                    else if (__rarity == "Ultra Rare") {
                        __rarity_src = "https://i.imgur.com/y45e4ng.png"
                    }
                    else {
                        __rarity_src = "https://i.imgur.com/y45e4ng.png"
                    }
                    let __game_img_height = 91
                    if (__game_img.height == __game_img.width) {
                        __game_img_height = 53
                    }
                    else {
                        __game_img_height = 91
                    }
                    let __time = __trophy_timestamp_inner.split(' ')[0].replace(/\s/g,'')
                    //console.log(__time)
                    if (__time == "Lastyear") {
                      __trophy_timestamp_inner = __trophy_timestamp
                    }
                    let __trophy_acronym = __trophy_description
                    if (__trophy_description.length > 45) {
                      __trophy_description = __trophy_description.slice(0,45) + "..."
                    }

                    if (i == 0){
                        fff.id = "recent-trophies"
                        fff.className = "recent-trophies flex"
                    }
                    let empty = ""
                    fff.innerHTML = fff.innerHTML + `

			    <li class="${i}" data-id="${i}">
					<div class="info">
						<div class="box">
							<table>
								<tr class="text container">
									<td style="width: 100%; padding-left: 56px; text-align:left;">
										<div class="ellipsis">
                                            <span class="${__trophy_type}"</span>
											<b>
                                                <a class="title" href="${__trophy_link}">
												    <acronym title="${__trophy_name}">${__trophy_name}</acronym>
											    </a>
                                            </b>

										</div>
										<div class="ellipsis" style="width: 999px">
											<span><acronym title="${__trophy_acronym}">${__trophy_description}</acronym></span>
										</div>
										<div class="ellipsis">
											<span class="timestamp_info">
												<b><span style="color: #74962d"><acronym title="${__trophy_timestamp}">${__trophy_timestamp_inner}</acronym><span></b>${empty/*in <a style="color: #4486c6" href="${__game_link}" rel="nofollow">${__game_name}</a>*/}
											</span>
										</div>



				                	    <div class="imgg">
				                	        <a href="${__game_link}" class="" style="position:absolute; right: 4px; top: 3px;">
				                	            <picture class="trophy" alt="PLACEHOLDER">
				                	                <source srcset="${__game_img_src}, ${__game_img_src} 1.1x">
				                	                <img src="${__game_img_src}" style="background-color:#001118; height:45px; width: auto;" />
				                	            </picture>
				                	        </a>
				                	    </div>

									</td>
								</tr>
							</table>
						</div>
					</div>
					<div class="icon">
						<a href="${__trophy_link}" class="">
							<picture class="trophy" alt="PLACEHOLDER">
								<source srcset="${__img}, ${__img} 1.1x">
								<img src="${__img}" style="background-color:#001118; height:45px; width: 45px;" />
							</picture>
						</a>
					</div>
				</li>
                    `
  				                	            /*<picture class="trophy" alt="PLACEHOLDER">
				                	                <source srcset="${__rarity_src}, ${__rarity_src} 1.1x">
				                	                <img src="${__rarity_src}" style="background-color:rgba(0,0,0,0); height:20px; width: auto;" />
				                	            </picture>
				                	        </a>*/





                    __recentTrophies.append(fff)
                    if (i == cur_recentTrophies.length -1){
                        //console.log("removing")
                        remove(document.getElementsByClassName("recent-trophies")[1].children[0].children[0])
                    }
                }


                doAnimation()


				GM_addStyle ( `

				.small.progresscontainer {
				   width: 140px !important;
				}

				.flex {
					display: -moz-box;
					display: -ms-flexbox;
					display: flex;
				}
				.box {
					padding-left: 0px;
					border: 2px solid #5a5e62;
					position: absolute;
					left: 2px;
					width: 394px;
					height: 51px;
					border-radius: 5px;
					background: #ddd;
				}
				.box2 {
					padding-left: 0px;
					position: absolute;
					right: 0px;
                    top: 0px;
					height: 47px;
					border-radius: 5px;
					background: #ddd;
				}
				.box.light {
					background: #0000ff;
				}
				.box + div.title {
					margin-top: 10px;
				}
				*, *:before, *:after {
				  box-sizing: inherit;
				}


				ul.recent-trophies {
					margin-bottom: 0px;
					margin-left: 5px;
					overflow: hidden;
					height: 65px;
					-webkit-justify-content: space-between;
					justify-content: space-between;
				}
				ul.recent-trophies li {
					display: block;
					float: left;
					width: 55px;
					height: 55px;
					overflow: hidden;
					position: relative;
					background: #1d2126;
					transition: width 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
				}
				ul.recent-trophies li.active {
					width: 400px;
				}
				ul.recent-trophies li:last-child {
					margin-right: 0;
				}
				ul.recent-trophies li > div {
					float: left;
					position: absolute;
				}
				ul.recent-trophies li .info {
					position: absolute;
					width: 100%;
					height: 100%;
					opacity: 0;
					overflow: hidden;
					transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
				}
				ul.recent-trophies li.active .info {
					opacity: 1;
				}
				.text container {
					border-radius: 5px;
					background: #ddd;
				}
				ul.recent-trophies li .info {
					padding-left: 40px;
					width: 400px;
					height: 100%;
				}
				ul.recent-trophies li .info table {
					height: 100%;
				}
				ul.recent-trophies li .icon {
				margin-left: 7px;
					padding: 5px 5px 0 0;
					transition: margin 0.75s cubic-bezier(0.77, 0, 0.175, 1);
				}
				ul.recent-trophies li.active .icon {
					margin-left: 7px;
				}
				ul.recent-trophies li:last-child .icon {
					padding-right: 0px;
				}
				`)

GM_addStyle ( `
    .game-image-cell {
        background-color: #333;
        border-radius: 2px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
    }
    .trophy-border, .game-border {
        padding: 3px 3px 3px 3px;
        border-radius: 3px;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
    }

    #mainbody, #welcomebody, .mainbody {
        background-color: #1d2126;
    }

td.title-cell {
    padding-top: 5px !important;
}

#custom_leaderboard.user tr td {
    padding-top: 2px;
    padding-bottom: 2px;
}
.ps3_leaderboard td {
    text-align: left;
    padding: 10px 4px;
}
.image-cell {
    width: 90px !important;
}
`)
                remove(document.getElementsByClassName('sort-row')[0])
                let rows = document.getElementsByClassName('gamerow');
                totalProgress = rows.length;
                var loadingInterval = setInterval(() => {
                    if (currentProgress >= totalProgress) {
                        clearInterval(loadingInterval);
                        return;
                    }
                    moveRowContent(rows[currentProgress]);
                    checkRegion(rows[currentProgress]);
                    currentProgress++;
                    updateLoadingBar(currentProgress, totalProgress);
                }, 1);



                console.log("code 3")
            }
        }
    }
    else if (((document.URL.split('/').length) === 7) || ((document.URL.split('/')[3] === 'user') && ((document.URL.split('/').length) === 8))) {

        if ((((document.URL.split('/').length) === 7)/* && (document.URL.split('/')[6] === '')*/) || (((document.URL.split('/').length) === 8) && (document.URL.split('/')[7] === ''))) {
            if (document.getElementById('individual_swirl')) {
                console.log('detected viewing trophy without user')
            }
            else {
                code = 4

    GM_addStyle ( `
        .gamesContent {
            background-color: #1d2126;
        }
    `)

                injectLoadingBar();
                checkRegion(null);
                inlineTitleTags();
                parseGameDetails();


                let gamesHeader = document.getElementById('gamesHeader').parentNode.children[1].style = `width:100%;height:25px; background-color: #1d2126;`;

                let links = document.getElementById('links').parentNode.parentNode.parentNode;
                links.children[0].style = `background-color: #1d2126; !important"`
                links.children[1].style = `display: table-cell; background-color: #1d2126; padding: 10px; !important"`

                document.getElementById('mainbody').style = `box-shadow: 0px -11px 20px 0px #000;`

                let table = document.getElementById('game_details_table');
                let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');








                addButton("junktxt");










                totalProgress = rows.length;
                var loadingInterval = setInterval(() => {
                    if (currentProgress >= totalProgress) {
                        clearInterval(loadingInterval);
                        return;
                    }
                    modifyProgressBar(rows[currentProgress]);
                    currentProgress++;
                    updateLoadingBar(currentProgress, totalProgress);
                }, 1);
                console.log("code 4")
                //return // game + user
            }
        }
        else {
            code = 444
            console.log("code 444")
        }
    }
    else if ((document.URL.split('/').length) === 8) {
        code = 5
        console.log("code 5")
        return // trophy
    }
    /*else if ((document.URL.split('/').length) === 4) {
        injectLoadingBar();
        console.log("code 6")
        let maincontainer = document.getElementById('maincontainer');
        maincontainer.style = 'margin-left: 310px'
        let table = document.getElementById('usergamelist');
        table.style.tableLayout = 'fixed';
        table.style.width = '1020px'
        let rows = document.getElementsByClassName('gamerow');
			totalProgress = rows.length;
				var loadingInterval = setInterval(() => {
					if (currentProgress >= totalProgress) {
						clearInterval(loadingInterval);
						return;
					}
					moveRowContent(rows[currentProgress]);
					currentProgress++;
					updateLoadingBar(currentProgress, totalProgress);
				}, 1);
        return // trophy
    }*/
    else if ((document.URL.split('/').length) === 5) {
        code = 7
        console.log('code 7')
    }
    else {
        console.log("code 20")
        for (let i = 0; i < document.URL.split('/').length; ++i) {
            console.log("[" + i + "] - " + document.URL.split('/')[i])
        }
        return
    }
    //}, 1000);
})();


let i
let oldtime
let newtime
let firsttime
let lasttime
let gap
function addButton(text, onclick, cssObj) {
    cssObj = cssObj || {
        position: "relative",
        top: "0%",
        left: "-1%",
        "z-index": 3,
        fontWeight: "600",
        fontSize: "12px",
        backgroundColor: "#0099cc",
        color: "white",
        border: "none",
        padding: "1px 10px",
    }

    let button = document.createElement("button"),
    btnStyle = button.style;
    button.innerHTML = 'Load Time Gaps';
    button.onclick = onpress;

    function onpress() {


          GM_addStyle ( `
               .gamesLeft .date_earned {
                    min-width: 200px;
                    vertical-align: top !important;
                    padding-top: 2px;
               }
               .date_earned {
                   text-align: right;
               }
          `)

        let cells = document.getElementsByClassName('earned');
        for(i = 0; i < cells.length; i++) {
            if (valid(cells[i])) {
                let timestamp = cells[i].children[7].children[0].innerText
                if (i == 0) {
                    firsttime = timestamp
                    oldtime = timestamp
                    gap = 0
                }
                else if (i > 0) {
                    gap = timestamp - oldtime
                    oldtime = timestamp
                }



                let timeGaps = document.createElement('div');
                timeGaps.classList = ["timeGaps"];
                timeGaps.style = 'padding-top: 6px !important; color: #aabb49;'
                timeGaps.innerText = secondsToTime(gap, i)
                document.getElementsByClassName("time")[i].append(timeGaps)


                //console.log(timestamp + ", gap: " + secondsToTime(gap))
            }
        }









        button.innerHTML = 'Loading..'
        button.style.backgroundColor = "#0077cc",
        button.style.padding = "1px 20px";
        setTimeout(function() {
            button.innerHTML = 'Done!'
            button.style.backgroundColor = "#005fcc",
            button.style.padding = "1px 20px";
            setTimeout(function() {
                button.style.display = 'none';
            }, 1000);
        }, 200);
    }
    Object.keys(cssObj).forEach(key => (btnStyle[key] = cssObj[key]));
    document.getElementsByClassName("filter-row")[0].childNodes[0].insertBefore(button, document.getElementsByClassName("filter-row")[0].childNodes[0].childNodes[0]);
    return button;
}


function secondsToTime(sec, i){
    /*const second = Math.floor(sec % 60).toString()
    const minute = Math.floor(sec % 3600 / 60).toString()
    const hour = Math.floor(sec / 3600 % 24).toString()

    const day = Math.floor((sec / 3600)/ 24 % 7).toString()
    const week = Math.floor(((sec / 3600)/ 24)/ 7 % 30).toString()
    const month = Math.floor((((sec / 3600)/ 24)/ 7) / 30 % 12).toString()
    const year = Math.floor((((sec / 3600)/ 24)/ 7) / 30 / 12).toString()*/


    let minute = Math.floor(sec / 60);
    sec = sec % 60;
    let hour = Math.floor(minute / 60);
    minute = minute % 60;
    let day = Math.floor(hour / 24);
    let day_ = day
    hour = hour % 24;
    let week = Math.floor(day / 7);
    day = day % 7;
    let month = Math.floor(day_ / 30.4167);
    week = week % 4;
    let year = Math.floor(month / 12);
    month = month % 12;

    if (i ==0) {
        return "First Trophy"
    }




    let result = "+ "

    if (year > 1) {
        result = result + year + " years, "
    }
    else if (year > 0) {
        result = result + year + " year, "
    }


    if (month > 1) {
        result = result + month + " months, "
    }
    else if (month > 0) {
        result = result + month + " month, "
    }


    if (week > 1) {
        result = result + week + " weeks, "
    }
    else if (week > 0) {
        result = result + week + " week, "
    }



    if (day > 1) {
        result = result + day + " days, "
    }
    else if (day > 0) {
        result = result + day + " day, "
    }


    if (hour > 1) {
        result = result + hour + " hours, "
    }
    else if (hour > 0) {
        result = result + hour + " hour, "
    }


    if (minute > 1) {
        result = result + minute + " minutes and "
    }
    else if (minute > 0) {
        result = result + minute + " minute and "
    }

    if (sec == 0) {
        result = result + "0 seconds"
    }
    if (sec > 1) {
        result = result + sec + " seconds"
    }
    else if (sec > 0) {
        result = result + sec + " second"
    }



    return result
}


function valid(a) {
    if (a.children[7].children[0]) {
        return true
    }
    else {
        return false
    }
}


function doAnimation() {
    let first_load = true
    var recentTrophy = 0;
    var shouldSwitchRC = true;
    var recentTrophies = $('.recent-trophies > li:visible');
    if (first_load) {
        recentTrophies.eq(recentTrophy).addClass('active');
        first_load = false
    }

    function switchRecentTrophy() {
        if (!shouldSwitchRC) {
            return;
        }
        $('.recent-trophies > li').removeClass('active');
        recentTrophies = $('.recent-trophies > li:visible');

        if (recentTrophy >= (recentTrophies.length - 1)) {
            recentTrophy = 0;
        }
        else {
            recentTrophy++;
        }
        recentTrophies.eq(recentTrophy).addClass('active');
    }

    $(function() {
        $('#recent-trophies').mouseenter(function() {
            shouldSwitchRC = false;
        });

        $('#recent-trophies').mouseleave(function() {
            shouldSwitchRC = true;
        });

        $('#recent-trophies > li').mouseenter(function() {
            var that = $(this);
            if (!that.hasClass('active')) {
                recentTrophies.eq(recentTrophy).removeClass('active');
                recentTrophy = that.attr('data-id');
                that.addClass('active');
            }
        });

        setInterval(function() {
            switchRecentTrophy();
        }, 3000);
    });

}

function checkRegionGame(row) {





    let _Label = row ? row.getElementsByClassName('platformlabel') : document.getElementsByClassName('platformlabel');
    for (let i = 0; i < _Label.length; ++i) {
        let platformlabelstyle = _Label[i].parentNode.children[i]
        platformlabelstyle.style = `left: ${33*i}px !important;`
        //console.log(platformlabelstyle)
    }



    $(document.getElementById('search-content')).bind('DOMNodeInserted DOMNodeRemoved', function(){

    });
    //console.log(_Label)






	let url = decodeURI(row.getElementsByClassName('user-select')[0]);
    let game = url.split('/')[5]
    if (arrayVR.includes(game)) addTagGame(row, 'VR')
    if (arrayOR.includes(game)) addTagGame(row, 'OR')
    if (arrayRR.includes(game)) addTagGame(row, 'RR')
	if (arrayEU.includes(game)) addTagGame(row, 'EU')
	if (arrayNA.includes(game)) addTagGame(row, 'NA')
    if (arrayAS.includes(game)) addTagGame(row, 'AS')
    if (arrayHK.includes(game)) addTagGame(row, 'HK')
    if (arrayJP.includes(game)) addTagGame(row, 'JP')
    if (arrayKR.includes(game)) addTagGame(row, 'KR')
    if (arrayCN.includes(game)) addTagGame(row, 'CN')
    if (arrayGR.includes(game)) addTagGame(row, 'GR')
    if (arrayES.includes(game)) addTagGame(row, 'ES')
    if (arrayRU.includes(game)) addTagGame(row, 'RU')
    if (arrayDELISTED.includes(game)) addTagGame(row, 'DELISTED')
    if (arrayPHYSICAL.includes(game)) addTagGame(row, 'PHYSICAL')
    if (arrayDIGITAL.includes(game)) addTagGame(row, 'DIGITAL')
}

function addTagGame(row, label) {
    let Label = row ? row.getElementsByClassName('platformlabel') : document.getElementsByClassName('platformlabel');

    //
    //Label.style = 'webkit-transform: rotate(-180deg)';

	let lastLabel = Label[Label.length-1];
	let newLabel = document.createElement('div');

    //
	//newLabel.style = 'bottom: 37px; height: 14px; line-height: 14px; width: 15px'



    newLabel.style.left= `${(Label.length) * 33}px`
    newLabel.style.bottom = '37px'
    newLabel.style.height = '14px'
    newLabel.style.lineHeight = '14px'
    newLabel.style.width = '15px'
    newLabel.style.color = 'white';
    if (label === 'OR') {
        newLabel.style.backgroundColor= '#5c5c5c'
        newLabel.innerHTML = `<acronym title="Original">${label}</acronym>`
    }
    else if (label === 'RR') {
        newLabel.style.backgroundColor= '#b8b8b8'
        newLabel.style.color = 'black';
        newLabel.innerHTML = `<acronym title="Re-Released">${label}</acronym>`
    }
	else if (label === 'EU') {
        newLabel.style.backgroundColor= '#940000';
        newLabel.innerHTML = `<acronym title="Europe">${label}</acronym>`
    }
    else if (label === 'NA') {
        newLabel.style.backgroundColor= '#FF8C00'
        newLabel.innerHTML = `<acronym title="North America">${label}</acronym>`
    }
    else if (label === 'AS') {
        newLabel.style.backgroundColor= '#672787'
        newLabel.innerHTML = `<acronym title="Asia">${label}</acronym>`
    }
    else if (label === 'HK') {
        newLabel.style.backgroundColor= '#672787'
        newLabel.innerHTML = `<acronym title="Hong Kong">${label}</acronym>`
    }
    else if (label === 'JP') {
        newLabel.style.backgroundColor= '#14C9CC'
        newLabel.innerHTML = `<acronym title="Japan">${label}</acronym>`
    }
    else if (label === 'KR') {
        newLabel.style.backgroundColor= '#9BCC14'
        newLabel.innerHTML = `<acronym title="Korea">${label}</acronym>`
    }
    else if (label === 'CN') {
        newLabel.style.backgroundColor= '#030180'
        newLabel.innerHTML = `<acronym title="China">${label}</acronym>`
    }
    else if (label === 'GR') {
        newLabel.style.backgroundColor= '#CC067A'
        newLabel.innerHTML = `<acronym title="Germany">${label}</acronym>`
    }
    else if (label === 'ES') {
        newLabel.style.backgroundColor= '#089e67'
        newLabel.innerHTML = `<acronym title="Spain">${label}</acronym>`
    }
    else if (label === 'RU') {
        newLabel.style.backgroundColor= '#690052'
        newLabel.innerHTML = `<acronym title="Russia">${label}</acronym>`
    }
    else if (label === 'VR') {
        newLabel.style.backgroundColor= '#0068bf'
        newLabel.innerHTML = `<acronym title="VR Required to 100%">${label}</acronym>`
    }
    else if (label === 'DELISTED') {
        newLabel.style.backgroundColor= 'red'
        newLabel.style.width = '55px'
        newLabel.innerHTML = `<acronym title="Delisted from PSN Store">${label}</acronym>`
    }
    else if (label === 'PHYSICAL') {
        newLabel.style.backgroundColor= 'red'
        newLabel.style.width = '55px'
        newLabel.innerHTML = `<acronym title="Never got a digital release">${label}</acronym>`
    }
    else if (label === 'DIGITAL') {
        newLabel.style.backgroundColor= 'red'
        newLabel.style.width = '45px'
        newLabel.innerHTML = `<acronym title="Never got a physical release">${label}</acronym>`
    }
	else {
        newLabel.style.backgroundColor= 'red'; // change this to another specific color for each region if you want
        newLabel.innerHTML = `<acronym title="${label}">${label}</acronym>`
    }
	newLabel.classList = ['platformlabel']

	insertBefore(newLabel, lastLabel);
}

function injectLoadingBar() {
	let newLoadingBar = document.createElement('div');
	newLoadingBar.style = 'width: 300px; height: 40px; background-color: #1d2126; margin: 0 auto; border-radius: 3px; padding: 10px; margin-bottom:50px; box-shadow: 0px 0px 20px 0px #000;';
	newLoadingBar.innerHTML = '<div style="width: 100%; padding: 5px;"> <span id="loadingBarProgressRaw" style="color: white;"></span> <span class="loadingBarProgressPercent" style="color: white; float: right; font-size: 20px;"></span></div> <div class="progresscontainer stacked softshadow" style="100%"> <div class="progressbar" style="float:left; width: 0%"></div> </div>';
  newLoadingBar.classList = ["loadingBar"];
    let point = 1
    if (document.getElementsByClassName('container')[2]) {
        point = 2
    }
	insertBefore(newLoadingBar, document.getElementsByClassName('container')[point].previousSibling);
	//document.getElementById('social_media').parentElement.style = "width: 900px; margin: 0 auto; display:flex; justify-content: space-between;";
	// document.getElementById('social_media').parentElement.append(newLoadingBar);

    document.getElementsByClassName("mainBG")[0].style = "padding-top: 35px";
}

function updateLoadingBar(currentProgress, totalProgress) {
	let loadingBar = document.getElementsByClassName('loadingBar')[0];
	if (loadingBar && loadingBar.children[0]) {
		loadingBar.children[1].children[0].style = "float: left; width:" + currentProgress/totalProgress*100 + "%";
		loadingBar.children[0].children[0].innerHTML = currentProgress + " / " + totalProgress;
        if (currentProgress === totalProgress) {
            loadingBar.children[0].children[1].innerHTML = "100%";
        }
        else {
            loadingBar.children[0].children[1].innerHTML = (currentProgress/totalProgress*100).toFixed(1) + "%";
        }
    }
}

function checkRegion(row) {
	let url = row ? decodeURI(row.getElementsByClassName('gameImageLink')[0].href): decodeURI(location.href);

	let game = decodeURI(url.split('/')[6]);
    if (!row) {
        row = document
        row.getElementsByClassName('platformlabel')[row.getElementsByClassName('platformlabel').length-1].parentNode.style.padding = '0px'

        let gameIMG = document.getElementsByClassName('gameImage')[0]
        let manual_height = 0;
        let manual_width = 0;
        let scale_amount = 1.5;
        if (gameIMG.naturalHeight > 500) {
            manual_height = 31
            manual_width = 16
            scale_amount = 2

        }

        gameIMG.style = `background-color:#001118; width:${200}px; height:auto;`
			                                	GM_addStyle ( `

                                               .gameImage {
                                                   position: relative !important;
                                                   z-index: 998 !important;
                                                   transition: width .2s, height .2s, transform .2s;
                                               }
                                                .gameImage:hover {
                                                    transform: scale(${scale_amount}) translate(${34 + manual_width}px, ${19 + manual_height}px);
                                                }
                                                `)
        if ((document.URL.split('/').length) === 6) {
            game = decodeURI(url.split('/')[5]);
        }
    }
    if (arrayREMOVEVITA.includes(game)) removeTag(row, 'VITA')
    if (arrayREMOVEPS4.includes(game)) removeTag(row, 'PS4')
    if (arrayREMOVEPS3.includes(game)) removeTag(row, 'PS3')
    if (arrayVR.includes(game)) addTag(row, 'VR')
    if (arrayOR.includes(game)) addTag(row, 'OR')
    if (arrayRR.includes(game)) addTag(row, 'RR')
    //console.log(game)
    let flag = row.getElementsByClassName('flaggloss')[0]
    if (flag) {
        if (REPLACE_FLAGS) {
            let flagregion = flag.title
            if (flagregion == "Europe") {
                addTag(row, 'EU')
            }
            else if (flagregion == "United States") {
                addTag(row, 'NA')
            }
            else if (flagregion == "Asia") {
                addTag(row, 'AS')
            }
            else if (flagregion == "Hong Kong") {
                addTag(row, 'HK')
            }
            else if (flagregion == "Japan") {
                addTag(row, 'JP')
            }
            else if ((flagregion == "Korea") | (flagregion == "Korea, Republic of")) {
                addTag(row, 'KR')
            }
            else if (flagregion == "China") {
                addTag(row, 'CN')
            }
            else if (flagregion == "Germany") {
                addTag(row, 'GR')
            }
            else if (flagregion == "Spain") {
                addTag(row, 'ES')
            }
            else if ((flagregion == "Russia") | (flagregion == "Russian Federation")) {
                addTag(row, 'RU')
            }
            else if (flagregion == "Saudi Arabia") {
                addTag(row, 'SA')
            }
            else if (flagregion == "Australia") {
                addTag(row, 'AU')
            }
            else {
                console.log("unknown flag: " + flagregion)
            }
            flag.parentNode.parentNode.removeChild(flag.parentNode);
        }
        else {
            if (REMOVE_FLAGGLOSS) {
                flag.parentNode.removeChild(flag);
            }
        }
    }
    else {
        //alert("Logged game without a flag:\n\n" + game)
        if (arrayEU.includes(game)) {
            console.log(" ")
            console.log("EU")
            console.log("https://psntrophyleaders.com/game/view/" + game)
            console.log(" ")
        }
        else if (arrayNA.includes(game)) {
            console.log(" ")
            console.log("NA")
            console.log("https://psntrophyleaders.com/game/view/" + game)
            console.log(" ")
        }
        else if (arrayAS.includes(game)) {
            console.log(" ")
            console.log("AS")
            console.log("https://psntrophyleaders.com/game/view/" + game)
            console.log(" ")
        }
        else if (arrayHK.includes(game)) {
            console.log(" ")
            console.log("HK")
            console.log("https://psntrophyleaders.com/game/view/" + game)
            console.log(" ")
        }
        else if (arrayJP.includes(game)) {
            console.log(" ")
            console.log("JP")
            console.log("https://psntrophyleaders.com/game/view/" + game)
            console.log(" ")
        }
        else if (arrayKR.includes(game)) {
            console.log(" ")
            console.log("KR")
            console.log("https://psntrophyleaders.com/game/view/" + game)
            console.log(" ")
        }
        else if (arrayCN.includes(game)) {
            console.log(" ")
            console.log("CN")
            console.log("https://psntrophyleaders.com/game/view/" + game)
            console.log(" ")
        }
        else if (arrayGR.includes(game)) {
            console.log(" ")
            console.log("GR")
            console.log("https://psntrophyleaders.com/game/view/" + game)
            console.log(" ")
        }
        else if (arrayES.includes(game)) {
            console.log(" ")
            console.log("ES")
            console.log("https://psntrophyleaders.com/game/view/" + game)
            console.log(" ")
        }
        else if (arrayRU.includes(game)) {
            console.log(" ")
            console.log("RU")
            console.log("https://psntrophyleaders.com/game/view/" + game)
            console.log(" ")
        }
    }

	//if (arrayEU.includes(game)) addTag(row, 'EU')
	//if (arrayNA.includes(game)) addTag(row, 'NA')
    //if (arrayAS.includes(game)) addTag(row, 'AS')
    //if (arrayHK.includes(game)) addTag(row, 'HK')
    //if (arrayJP.includes(game)) addTag(row, 'JP')
    //if (arrayKR.includes(game)) addTag(row, 'KR')
    //if (arrayCN.includes(game)) addTag(row, 'CN')
    //if (arrayGR.includes(game)) addTag(row, 'GR')
    //if (arrayES.includes(game)) addTag(row, 'ES')
    //if (arrayRU.includes(game)) addTag(row, 'RU')
    if (arrayDELISTEDorange.includes(game)) addTag(row, 'DELISTEDorange')
    if (arrayDELISTED.includes(game)) addTag(row, 'DELISTED')
    if (arrayCODE.includes(game)) addTag(row, 'CODE')
    //if (arrayPHYSICAL.includes(game)) addTag(row, 'PHYSICAL')
    //console.log(document.URL.split('/')[3])
    if ((document.URL.split('/')[3] === 'game' && document.URL.split('/')[4] === 'view') || (document.URL.split('/')[3] === 'user' && document.URL.split('/').length === 7)) {
        //console.log('code ac3')
        let discpos = row.getElementById('gametitle').parentNode.parentNode.parentNode.children[1].children[row.getElementsByClassName('platformlabel').length + row.getElementsByClassName('flaggloss').length]
        if (discpos) {
            //console.log(discpos.innerHTML)
            if (discpos.innerHTML.slice(39, 48) == 'Disc-only') {
                console.log('removed disc')
                row.getElementById('gametitle').parentNode.parentNode.parentNode.children[1].removeChild(discpos);
                addTag(row, 'PHYSICAL')
                //
            }
            else {
                if (arrayPHYSICAL.includes(game)) {
                    console.log(" ")
                    console.log("PHYSICAL GAME NOT LOGGED:")
                    console.log("https://psntrophyleaders.com/game/view/" + game)
                    console.log(" ")
                }
            }
        }
    }
    else {
        let discpos = row.getElementsByClassName('gametitle')[0].parentNode.children[row.getElementsByClassName('platformlabel').length]
        if (discpos) {
            if (discpos.innerHTML.slice(39, 48) == 'Disc-only') {
                row.getElementsByClassName('gametitle')[0].parentNode.removeChild(discpos);
                addTag(row, 'PHYSICAL')
                //console.log('removed disc')
            }
        }
        else {
            if (arrayPHYSICAL.includes(game)) {
                console.log(" ")
                console.log("PHYSICAL GAME NOT LOGGED:")
                console.log("https://psntrophyleaders.com/game/view/" + game)
                console.log(" ")
            }
        }
    }

    if (arrayDIGITAL.includes(game)) addTag(row, 'DIGITAL')

    /*if ((document.URL.split('/').length) === 6) {
        if (document.URL.split('/')[3] === 'user') {
            let titleGame1 = row.getElementsByClassName('gametitle')[0]
            let innerT = titleGame1.innerText
            let mm = /[(-)]/g
            if (innerT.match(mm)) {
                console.log(innerT)
                const titleGame = innerT.slice(0, -4)
                let remove_junk = document.createElement('div');
                remove_junk.innerHTML = `<a href="${url}" class="game-title" title="View trophies for ${titleGame}">${titleGame}</a>`;
                remove_junk.style.color = titleGame.color;
                remove_junk.style.fontWeight = titleGame.fontWeight;
                titleGame1.innerText = ''
                titleGame1.append(remove_junk)
            }
        }
    }*/
    if (((document.URL.split('/').length) === 7) || ((document.URL.split('/')[3] === 'user') && ((document.URL.split('/').length) === 8))) {
        if ((((document.URL.split('/').length) === 7)) || (((document.URL.split('/').length) === 8) && (document.URL.split('/')[7] === ''))) {
            if (document.getElementById('individual_swirl')) {
                console.log('detected viewing trophy without user')
            }
            else {
                fixtag(game)
            }
        }
    }
    let nameStyle = row.getElementsByClassName('game-title')[0]
    if (document.URL.split('/')[3] === 'game') {
        fixtag(game)
    }
    else {
        if (!nameStyle) {
            nameStyle = row.getElementsByClassName('gametitle')[0]
        }
        let fixedName = fixstrings(nameStyle.innerText)
        nameStyle.innerText = fixedName
        nameStyle.title = 'View trophies for ' + fixedName
    }
    console.log(code)
    if (code == 3){
        if (game == '十三機兵防衛圏-ps4') {
            const newText = '13 Sentinels: Aegis Rim'
            let aaaa = document.createElement('div');

            aaaa.innerHTML = `<a href="${url}" class="game-title" title="View trophies for ${newText}">${newText}</a>`;
            aaaa.style.color = nameStyle.color;
            aaaa.style.fontWeight = nameStyle.fontWeight;
            nameStyle.innerText = ''
            nameStyle.append(aaaa)

        }

        if (game == 'coolpaintr-ps4-3' | game == 'coolpaintr-ps4-4') {
            const newText = 'CoolPaintr Deluxe'
            let aaaa = document.createElement('div');

            aaaa.innerHTML = `<a href="${url}" class="game-title" title="View trophies for ${newText}">${newText}</a>`;
            aaaa.style.color = nameStyle.color;
            aaaa.style.fontWeight = nameStyle.fontWeight;
            nameStyle.innerText = ''
            nameStyle.append(aaaa)

        }
    }
}


function fixtag(game) {
    GM_addStyle ( `
            .gameDetailTitle {
                font-size: 14pt;
            }
            .gameDetailTitle a {
                line-height: 15px !important;
                position: relative !important;
                height: 12px  !important;
                top: 3px !important;
            }
            .platformlabel {
                line-height: 12px !important;
                height: 11px  !important;
                position: relative !important;
                top: -2px !important;
            }
        `)
    GM_addStyle ( `
            .div.platformlabel.ps5{
                top: -4px !important;
                position: relative !important;
                padding: 2px 5px 2px 6px !important;
            }
            .div.platformlabel.ps4 {
                top: -4px !important;
                position: relative !important;
                padding: 2px 5px 2px 6px !important;
            }
            .div.platformlabel.psv{
                top: -4px !important;
                position: relative !important;
                padding: 2px 5px 2px 6px !important;
            }
            .div.platformlabel.ps3{
                top: -4px !important;
                position: relative !important;
                padding: 2px 5px 2px 6px !important;
            }
            .date_earned .date {
                color: #74962D;
                display:block;
            }
            .date_earned .time {
                color: #88AA55
            }
        `)
    GM_addStyle ( `
            .platformlabel.ps5{
                top: -2px !important;
                height: 13px  !important;
                position: relative !important;
                padding: 2px 5px 2px 6px !important;
            }
            .platformlabel.ps4 {
                top: -2px !important;
                height: 13px  !important;
                position: relative !important;
                padding: 2px 5px 2px 6px !important;
            }
            .platformlabel.psv{
                top: -2px !important;
                height: 13px  !important;
                position: relative !important;
                padding: 2px 5px 2px 6px !important;
            }
            .platformlabel.ps3{
                top: -2px !important;
                height: 13px  !important;
                position: relative !important;
                padding: 2px 5px 2px 6px !important;
            }

        `)
    //console.log(game)
    if (game == 'coolpaintr-ps4-3' | game == 'coolpaintr-ps4-4') {
        let aaac = document.querySelector("#gametitle > div")
        if (aaac) {
            let new_aaac = aaac.innerText + " Deluxe"
            aaac.innerText = new_aaac
        }
    }
    // gets used if there isn't a sub div
    let game_name_original = document.querySelector("#gametitle > div")

    let game_name = document.querySelector("#gametitle > div.main")
    let game_name2 = document.querySelector("#gametitle > div.sub")

    if (game_name && game_name2) {
        let new_name = game_name.innerText + " " + game_name2.innerText
        console.log("code AF1: " + game_name_original.innerText)
        let fixed_name = fixstrings(new_name)
        game_name.innerText = fixed_name
        remove(game_name2)
    }
    else if (game_name_original) {
        console.log("code AF2: " + game_name_original.innerText)
        let fixed_name = fixstrings(game_name_original.innerText)
        game_name_original.innerText = fixed_name
    }
    else {
        return
    }
}

function removeTag(row, platform) {
    var label
    if (platform === 'PS4') {
       label = row.getElementsByClassName('platformlabel ps4')
    }
    else if (platform === 'PS3') {
        label = row.getElementsByClassName('platformlabel ps3')
    }
    else if (platform === 'VITA') {
        label = row.getElementsByClassName('platformlabel psv')
    }
    else {
        return
    }
    label[0].parentNode.removeChild(label[0]);
}

function addTag(row, label) {
	let lastLabel = row.getElementsByClassName('platformlabel')[row.getElementsByClassName('platformlabel').length-1]
	let newLabel = document.createElement('div');
	//newLabel.style = 'bottom: 37px; height: 14px; line-height: 14px; width: 15px'
    newLabel.style.bottom = '37px'
    newLabel.style.height = '12px'
    newLabel.style.width = '15px'
    newLabel.style.color = 'white';
    if (code == 3) {
        newLabel.style.padding = '2px 4px'
    }
    else {
        newLabel.style.padding = '-3px 4px'
        newLabel.style.top = '-3px'
        newLabel.style.position = 'relative'
    }
    if (label === 'OR') {
        newLabel.style.backgroundColor= '#5c5c5c'
        newLabel.innerHTML = `<acronym title="Original">${label}</acronym>`
    }
    else if (label === 'RR') {
        newLabel.style.backgroundColor= '#b8b8b8'
        newLabel.style.color = 'black';
        newLabel.innerHTML = `<acronym title="Re-Released">${label}</acronym>`
    }
	else if (label === 'EU') {
        newLabel.style.backgroundColor= '#940000';
        newLabel.innerHTML = `<acronym title="Europe">${label}</acronym>`
    }
    else if (label === 'NA') {
        newLabel.style.backgroundColor= '#FF8C00'
        newLabel.innerHTML = `<acronym title="North America">${label}</acronym>`
    }
    else if (label === 'AS') {
        newLabel.style.backgroundColor= '#672787'
        newLabel.innerHTML = `<acronym title="Asia">${label}</acronym>`
    }
    else if (label === 'HK') {
        newLabel.style.backgroundColor= '#672787'
        newLabel.innerHTML = `<acronym title="Hong Kong">${label}</acronym>`
    }
    else if (label === 'JP') {
        newLabel.style.backgroundColor= '#14C9CC'
        newLabel.innerHTML = `<acronym title="Japan">${label}</acronym>`
    }
    else if (label === 'KR') {
        newLabel.style.backgroundColor= '#9BCC14'
        newLabel.innerHTML = `<acronym title="Korea">${label}</acronym>`
    }
    else if (label === 'CN') {
        newLabel.style.backgroundColor= '#030180'
        newLabel.innerHTML = `<acronym title="China">${label}</acronym>`
    }
    else if (label === 'GR') {
        newLabel.style.backgroundColor= '#CC067A'
        newLabel.innerHTML = `<acronym title="Germany">${label}</acronym>`
    }
    else if (label === 'ES') {
        newLabel.style.backgroundColor= '#FF00BA'
        newLabel.innerHTML = `<acronym title="Spain">${label}</acronym>`
    }
    else if (label === 'RU') {
        newLabel.style.backgroundColor= '#690052'
        newLabel.innerHTML = `<acronym title="Russia">${label}</acronym>`
    }
    else if (label === 'SA') {
        newLabel.style.backgroundColor= '#089e67'
        newLabel.innerHTML = `<acronym title="Saudi Arabia">${label}</acronym>`
    }
    else if (label === 'AU') {
        newLabel.style.backgroundColor= '#00B5FF'
        newLabel.innerHTML = `<acronym title="Australia">${label}</acronym>`
    }
    else if (label === 'VR') {
        newLabel.style.backgroundColor= '#0068bf'
        newLabel.innerHTML = `<acronym title="VR Required to 100%">${label}</acronym>`
    }
    else if (label === 'DELISTEDorange') {
        newLabel.style.backgroundColor= '#FF8C00'
        newLabel.style.width = '55px'
        newLabel.innerHTML = `<acronym title="Delisted from PSN Store, available Physically">DELISTED</acronym>`
    }
    else if (label === 'DELISTED') {
        newLabel.style.backgroundColor= 'red'
        newLabel.style.width = '55px'
        newLabel.innerHTML = `<acronym title="Delisted from PSN Store">${label}</acronym>`
    }
    else if (label === 'CODE') {
        newLabel.style.backgroundColor= 'red'
        newLabel.style.width = '33px'
        newLabel.innerHTML = `<acronym title="Only obtainable from a code">${label}</acronym>`
    }
    else if (label === 'PHYSICAL') {
        newLabel.style.backgroundColor= 'red'
        newLabel.style.width = '55px'
        newLabel.innerHTML = `<acronym title="Never got a digital release">${label}</acronym>`
    }
    else if (label === 'DIGITAL') {
        newLabel.style.backgroundColor= 'red'
        newLabel.style.width = '45px'
        newLabel.innerHTML = `<acronym title="Never got a physical release">${label}</acronym>`
    }
	else {
        newLabel.style.backgroundColor= 'red'; // change this to another specific color for each region if you want
        newLabel.innerHTML = `<acronym title="${label}">${label}</acronym>`
    }
	newLabel.classList = ['platformlabel']

	insertBefore(newLabel, lastLabel);
}


function fixstrings(str) {
    if (REMOVE_ID) {
        if (str.slice(-4) == "_00)") {
            str = str.slice(0, -15)
        }
    }
    return str.replace('®Vita',' Vita').replace('®3',' 3').replace('®2',' 2').replace('®4',' 4').replace('®5',' 5').replace('®','').replace('®','').replace('®','').replace('™','').replace(' :',':').replace('(JP)','').replace(' - Breakthrough Gaming Arcade','').replace('Ⅱ','II').replace('Ⅲ','III').replace('Ⅳ','IV')

}

function moveRowContent(original) {
	let offset = original.getElementsByClassName('platformlabel').length - 1;
    let FirstTag = original.getElementsByClassName('platformlabel')[0].innerText
    //                                                                                                         console.log("got innerText")
    let gameIMG = original.getElementsByClassName('game-image-cell')[0]
    //                                                                                                          console.log("got game-image-cell")

    //                                                                                                          console.log("got game-image-cell")
    let newGameIMG = document.createElement('span');
    if (gameIMG.naturalHeight > 1) {
        newGameIMG.innerHTML = `<img src="${gameIMG.src}" class="game-image-cell" style="background-color:#001118; height:${gameIMG.naturalHeight}px" title="${gameIMG.title}" alt=""!important>`
        insertBefore(newGameIMG, original.getElementsByClassName('game-image-cell')[0])
        original.getElementsByClassName('game-image-cell')[0].remove()
    }
    //                                                                                                              console.log("fixed image height")
    var flagoffset = 6
	const difficulty = original.getElementsByClassName('difficultyText')[0].children[0];
    //                                                                                                          console.log("got dificulty")
	const completionRateString = original.getElementsByClassName('difficultyText')[0].children[1];
     //                                                                                                     console.log("got date1")
    var dateHTML
    var nbn = original.getElementsByClassName('title-cell')[0].children
     //                                                                                                     console.log("got date2")
    if (nbn[6+offset].innerText.substring(1, 3) === 'of' | nbn[6+offset].innerText.substring(1, 3) === 'om') {
        dateHTML = original.getElementsByClassName('title-cell')[0].children[6+offset];
    }
    else if (nbn[5+offset].innerText.substring(1, 3) === 'of' | nbn[5+offset].innerText.substring(1, 3) === 'om') {
        dateHTML = original.getElementsByClassName('title-cell')[0].children[5+offset];
    }
    else {
        //console.log(nbn[7+offset].innerText)

        if (nbn[7+offset].innerText.substring(1, 3) === 'of' | nbn[7+offset].innerText.substring(1, 3) === 'om') {
            dateHTML = original.getElementsByClassName('title-cell')[0].children[7+offset];
        }
        else {
            dateHTML = original.getElementsByClassName('title-cell')[0].children[5+offset];
        }
    }
    //                                                                                                      console.log("got date3")

    //console.log(nbn[5+offset].innerText.substring(1, 3))
    //                                                                                                            console.log("starting replace1")
	const date = dateHTML.innerText.split('on ')[1] ? dateHTML.innerText.split('on ')[1].substring(0, 12).replace('i', ''): '';


    //                                                                                                            console.log("got replace1")
	const timestamp = dateHTML.innerText.split('on ')[1] ? dateHTML.innerText.split(date)[1].substring(0, 12).replace('i', ''): '';
    //                                                                                                            console.log("got replace2")
	var timer = dateHTML.innerText.split('in ')[1];
	const trophies = original.getElementsByClassName('title-cell')[0].innerText;
	let trophyHTML = original.getElementsByClassName('hasplatcell')[0];
    var date_colour = 'rgb(10, 10, 10)'
    if (dateHTML.style.color === 'rgb(136, 170, 85)') {
        date_colour = 'rgb(116, 150, 45)'
    }

	original.getElementsByClassName('difficultyText')[0].innerHTML = dateHTML.innerHTML;
	original.getElementsByClassName('difficultyText')[0].innerText = date;
	original.getElementsByClassName('difficultyText')[0].style.color = date_colour;
	original.getElementsByClassName('difficultyText')[0].style.fontWeight = 'bold';
	original.getElementsByClassName('difficultyText')[0].classList = [];

	//dateHTML.innerHTML = dateHTML.innerHTML;
	dateHTML.innerText = timestamp.split('.')[0];
	//dateHTML.style.color = dateHTML.style.color;
	dateHTML.style.fontWeight = 'bold';
    if (FirstTag == "PS5") {
        original.getElementsByClassName('title-cell')[0].style.verticalAlign = `middle`;
    }
    original.getElementsByClassName('title-cell')[0].style.width = `100%`;
	original.getElementsByClassName('title-cell')[0].colSpan = 'unset';
	original.getElementsByClassName('image-cell')[0].style.width = '105px';


    //                                                                                                            console.log("starting replace")
	let fraction = '';
	if (trophies.includes('Completed all')) {
		let n = trophies.split('Completed all ')[1].split(' trophies')[0]
		fraction = `${n}/${n}`
        //console.log('debug1')
    }
    else {
		fraction = trophies.split(' trophies.')[0].split('ints)')[1].replace(' of ', '/');
        //                                                                                          console.log(trophies)
		original.getElementsByClassName('title-cell')[0].removeChild(original.getElementsByClassName('title-cell')[0].getElementsByTagName('br')[1].nextSibling)
        //console.log('debug2')
	}
	let newFraction = document.createElement('span');
    //console.log(fraction)
	newFraction.innerHTML = `<div style="display: flex; justfy center"><span style="flex: 1; text-align:right; margin-right: 2px; font-size: 10pt;">${fraction.split("/")[0]}</span> / <span style="flex: 1; text-align:left; margin-left: 2px; font-size: 8pt;">${fraction.split("/")[1]}</span></div>`
    //console.log(fraction.split("/"))
	newFraction.style = 'float: right; color: #888';
	


    let newProgressdd = document.createElement('div');
	newProgressdd.innerHTML = newFraction.innerHTML;
    newProgressdd.style = 'float: right; color: #888';
	newProgressdd.style.marginLeft = '10px';
    newProgressdd.style.width = '10px';
    original.getElementsByClassName('title bronze')[0].append(newProgressdd);

	let progressPerc = original.getElementsByClassName('progperc')[0];
	let newProgressPerc = document.createElement('div');
	newProgressPerc.innerHTML = progressPerc.innerHTML;
	newProgressPerc.style.marginLeft = '10px';
    newProgressPerc.style.width = '10px';

	original.getElementsByClassName('progresscontainer')[0].parentElement.style.display = 'flex';
	original.getElementsByClassName('progresscontainer')[0].parentElement.style.alignItems = 'left';
	original.getElementsByClassName('progresscontainer')[0].parentElement.style.justifyContent = 'space-between';
	original.getElementsByClassName('progresscontainer')[0].style.width = '100%';
	original.getElementsByClassName('progress')[0].style.width = '90%';
	original.getElementsByClassName('prog;')[0].append(newProgressPerc);

    original.getElementsByClassName('progress-cell')[0].style = 'padding-right: 0px; text-align: center;';
	original.getElementsByClassName('progress-cell')[0].style.width = '150px';


	original.getElementsByClassName('progress-cell')[0].removeChild(original.getElementsByClassName('progperc')[0]);
	let plat_cell_offset = 0
    if (timer) {
        plat_cell_offset = 38
        if (timer == ".") {
            timer = '0 seconds'
        }
        else {
            timer = timer.slice(0, -1)
        }
		let newTimer = document.createElement('div');
		newTimer.innerHTML = timer;
        newTimer.style = "text-align: center;"
		newTimer.style.color = dateHTML.style.color;
        newTimer.style.paddingTop = '2px';
		newTimer.style.fontWeight = dateHTML.style.fontWeight;
		original.getElementsByClassName('progress-cell')[0].append(newTimer)
	}
    else {
        plat_cell_offset = 31
    }

	if (trophyHTML){
        original.removeChild(trophyHTML)
        let newPlatCell = document.createElement('div');
        newPlatCell.style ='width: 0px; height: 0px; position:relative; font-family: Microsoft YaHei UI;'
        newPlatCell.innerHTML = `<div style="position:absolute; left:-35px; top:-${plat_cell_offset}px;"><img width="auto" height="40px" float="left"  src="https://i.imgur.com/VnkHuFc.png">`
        //insertBefore(newPlatCell, original.getElementsByClassName('title gold')[0])
        original.getElementsByClassName('progress-cell')[0].append(newPlatCell)
    }

	let newEl = document.createElement('td');
	const num1 = completionRateString.innerText.split('/')[0].split(' ')[1];
	const denom1 = completionRateString.innerText.split('/')[1].split(' ')[1];
	const num = num1.replace(',', '');
	const denom = denom1.replace(',', '');
	const completionpercent = ((parseInt(num) / parseInt(denom)) * 100)

	newEl.innerHTML = `
	<div style="display: flex; justfy center"> <span style="flex: 1; text-align:right; margin-right: 2px">Difficulty </span> - <span style="flex: 1; text-align:left; margin-left: 2px"> ${difficulty.outerHTML}</span></div>
	<div style="display: flex; justfy center"> <span style="flex: 1; text-align:right; margin-right: 2px">Completion Rate </span> - <span  style="flex: 1; text-align:left; margin-left: 2px"><span style="color: ${difficulty.style.color}"> ${completionpercent.toFixed(1)}%</span> (${num1}/${denom1})</span></div>
	<div style="display: flex; justfy center"> <span style="flex: 1; text-align:right; margin-right: 2px">Difficulty Points </span> - <span  style="flex: 1; text-align:left; margin-left: 2px"> ${completionRateString.innerText.split('(')[1].split(')')[0].split(' ')[0]}</span></div>
	`;
	newEl.style.width = '75%';
	original.append(newEl);
}

function modifyProgressBar(row) {
	if (!row.classList.contains('dlc_header')) {
        let trophyHTML = row.getElementsByClassName('sonytrophyrare')[0];
        if (trophyHTML) {
            let percent = trophyHTML.innerHTML.split('title="')[1].split('%')[0]
           // console.log(percent)

            row.removeChild(trophyHTML)
            let newPlatCell = document.createElement('td');
            let text = trophyHTML.innerText.trim()
            //newLabel.innerHTML = `<acronym title="${label}">${label}</acronym>`
            if (text == "Common") {
                newPlatCell.innerHTML =`<img width="auto" height="19px" title="${percent}%" style="padding-bottom: 15px; padding-right: 15px;" src="https://i.imgur.com/0LuKHfY.png">`
            }
            else if (text == "Rare") {
                newPlatCell.innerHTML = `<img width="auto" height="19px" title="${percent}%" style="padding-bottom: 15px; padding-right: 15px;" src="https://i.imgur.com/ppJobwB.png">`
            }
            else if (text == "Very Rare") {
                newPlatCell.innerHTML = `<img width="auto" height="19px" title="${percent}%" style="padding-bottom: 15px; padding-right: 15px;" src="https://i.imgur.com/a00IBi5.png">`
            }
            else if (text == "Ultra Rare") {
                newPlatCell.innerHTML = `<img width="auto" height="19px" title="${percent}%" style="padding-bottom: 15px; padding-right: 15px;" src="https://i.imgur.com/y45e4ng.png">`
            }
            else {
                newPlatCell.innerHTML = `<img width="auto" height="19px" title="${percent}%" style="padding-bottom: 15px; padding-right: 15px;" src="https://i.imgur.com/y45e4ng.png">`
            }
            newPlatCell.style.paddingTop = "20px"
            insertBefore(newPlatCell, row.getElementsByClassName('trophyrare')[0])
        }

		let num = row.getElementsByClassName('percent_expand')[0].innerText.split(' of ')[0];
		let denum = row.getElementsByClassName('percent_expand')[0].innerText.split(' of ')[1].split('\n')[0];
        /*if (num > denum) {
           denum = num
        }*/
		let percent = row.getElementsByClassName('percent_earned')[0].innerText.trim().replace('%', '');

        let percentcolour = Math.ceil(255 * (percent / 100));
        let R = 255-(percentcolour/2)
        let G = 0+percentcolour

		let newProgressBar = document.createElement('div');
		newProgressBar.style = "width: 240px; height: 59px; display: flex; flex-direction: column; justify-content: center; align-items:center";
		newProgressBar.classList.add('progress-cell');
		newProgressBar.innerHTML = `
	<div
        class="prog; display:inline-block"
        style="display: flex; align-items: center; height: 20px; width: 100%"
    >
	<div
        class="progresscontainer stacked softshadow"
        style="width: calc(100% - 80px)">
	  <div
          class="progressbar" style="float: left; width: ${percent}%; background-color: rgb(${R} ${G} 0) !important;">
      </div>
	</div>





    <div style="margin-left: 10px; width: 10px; font-weight: 150; -webkit-text-stroke-width: 0.2px; -webkit-text-stroke-color: black; color: rgb(${R} ${G} 0)"> ${percent}% </div>
	</div>
	<div style="color: black; width: 166px; text-align: right;  font-size: 16px"> <b>${num}</b> /</span>  <span  style="font-size: 10pt">${denum}</span></div>
	`;

		row.getElementsByClassName('percent_expand')[0].style.display = 'none';
		row.getElementsByClassName('percent_earned')[0].style.display = 'none';

		row.appendChild(newProgressBar);

	}
}

function parseGameDetails() {
    setTimeout(function() {
	//remove(document.querySelector("#gamesHeader > div:nth-child(2) > div > table > tbody > tr > td > div.sub"))





                // new
        if (code == 2) {
            let gamestatscenter = document.getElementsByClassName('gamestats center')[0];
            gamestatscenter.style = `margin-top: 169px; margin-bottom: 15px; !important`
        }


















    const difficulty = document.getElementsByClassName('difficultyText')[0].children[0];
	const completionRateString = document.getElementsByClassName('difficultyText')[0].children[1];




        let platinumtrophies = 0
        let goldtrophies = 0
        let silvertrophies = 0
        let bronzetrophies = 0
        let trophycount = 0
        let currentpoints = 0
        let totalpoints = 0

        let noPlat = false
        let __trophy_totalsWIDTH = 211
        let __progress_floatWIDTH = 295

        let spriteTrophies = document.getElementsByClassName('sprite')[0];
        if (spriteTrophies.children.length == 5) {
            console.log('flow1')
            platinumtrophies = spriteTrophies.children[0].innerText
            goldtrophies = spriteTrophies.children[1].innerText
            silvertrophies = spriteTrophies.children[2].innerText
            bronzetrophies = spriteTrophies.children[3].innerText
            trophycount = spriteTrophies.children[4].innerText
        }
        else {
            console.log('flow2')
            //document.getElementsByClassName('trophy_totals').style = `width: ${__trophy_totalsWIDTH}px;`;
            noPlat = true
            platinumtrophies = '0/'
            goldtrophies = spriteTrophies.children[0].innerText
            silvertrophies = spriteTrophies.children[1].innerText
            bronzetrophies = spriteTrophies.children[2].innerText
            trophycount = spriteTrophies.children[3].innerText
        }
        //console.log('' + goldtrophies.slice(0, 1))
        if (goldtrophies.slice(0, 1)== "/") {
            goldtrophies = "0" + goldtrophies
        }
        if (silvertrophies.slice(0, 1)== "/") {
            silvertrophies = "0" + silvertrophies
        }
         if (bronzetrophies.slice(0, 1)== "/") {
            bronzetrophies = "0" + bronzetrophies
        }





    var num1, denom1, difficultyPoints
    if (((document.URL.split('/').length) === 6) || (((document.URL.split('/').length) === 7) && (document.URL.split('/')[6] === ''))) {
        num1 = document.getElementsByClassName('center')[0].children[0].innerText;
        denom1 = document.getElementsByClassName('center')[0].children[1].children[0].children[0].innerText;
        difficultyPoints = completionRateString.innerText.split('/')[0].split(' ')[1];
        remove(document.querySelector("#gamesHeader > div.page-right > div > table > tbody > tr > td.gamestats"))
        if (noPlat) {
            const trophies = document.getElementsByClassName('trophy_totals')[0]
            trophies.style = `border-top: unset; padding-left: 150px;`
        }
        else {
            const trophies = document.getElementsByClassName('trophy_totals')[0]
            trophies.style = `border-top: unset; padding-left: 217px;`
        }
    }
    else {

        num1 = completionRateString.innerText.split('/')[0].split(' ')[1];
        denom1 = completionRateString.innerText.split('/')[1].split(' ')[1];
        difficultyPoints = completionRateString.innerText.split('(')[1].split(')')[0].split(' ')[0]
    }
    const num = num1.replace(',', '');
    const denom = denom1.replace(',', '');
    const completionpercent = ((parseInt(num) / parseInt(denom)) * 100)







        currentpoints = (parseInt(platinumtrophies.split("/")[0]*300) + parseInt(goldtrophies.split("/")[0]*90) + parseInt(silvertrophies.split("/")[0]*30) + parseInt(bronzetrophies.split("/")[0]*15))

        let totalgoldtrophies = goldtrophies.split("/")[1] & goldtrophies.split("/")[1] | 0
        let totalsilvertrophies = silvertrophies.split("/")[1] & silvertrophies.split("/")[1] | 0
        let totalbronzetrophies = bronzetrophies.split("/")[1] & bronzetrophies.split("/")[1] | 0
        let totaltrophycount = trophycount.split("/")[1] & trophycount.split("/")[1] | 0
        if (noPlat) {
            __trophy_totalsWIDTH = 155
            __progress_floatWIDTH = 240
            totalpoints = (parseInt(totalgoldtrophies*90) + parseInt(totalsilvertrophies*30) + parseInt(totalbronzetrophies*15))
        }
        else {
            if (platinumtrophies.split("/")[1]) {
                totalpoints = (parseInt(platinumtrophies.split("/")[1]*300) + parseInt(totalgoldtrophies*90) + parseInt(totalsilvertrophies*30) + parseInt(totalbronzetrophies*15))
            }
        }
        /*if (goldtrophies.split("/")[1]) {
            totalgoldtrophies = goldtrophies.split("/")[1]
        }*/

        if (totalgoldtrophies == 0) {
            totalgoldtrophies = ""
        }
        else {
            totalgoldtrophies = " /" + totalgoldtrophies
        }

        if (totalsilvertrophies == 0) {
            totalsilvertrophies = ""
        }
        else {
            totalsilvertrophies = " /" + totalsilvertrophies
        }

        if (totalbronzetrophies == 0) {
            totalbronzetrophies = ""
        }
        else {
            totalbronzetrophies = " /" + totalbronzetrophies
        }

        if (totaltrophycount == 0) {
            totaltrophycount = ""
        }
        else {
            totaltrophycount = " /" + totaltrophycount
        }

        if (totalpoints == 0) {
            totalpoints = ""
        }
        else {
            totalpoints = " /" + totalpoints.toLocaleString()
        }





        let gameTrophiesInfo = document.createElement('div');
        gameTrophiesInfo.class = "gameTrophiesInfo"
        gameTrophiesInfo.style=`width: 0px; height: 0px; position:relative;`
        if (noPlat) {
            //console.log('game act 1')
                /// game has no platinum at all
                gameTrophiesInfo.innerHTML = `<span style="font-size: 10pt; position: absolute; left:50px; bottom: -90px; width: 284px; z-index: 38;">



                                                               <img class="iconTrophy"style="position:absolute; bottom:35px; right:425px;" width=auto height=50px  src="https://i.imgur.com/dP1FS6L.png">
                                                               <big style="width: 80px; text-align: left; font-size: 18px; position:absolute; bottom:40px; right:345px;"><b>${goldtrophies.split("/")[0]}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totalgoldtrophies}</span></big>

                                                               <img class="iconTrophy"style="position:absolute; bottom:35px; right:340px;" width=auto height=50px  src="https://i.imgur.com/TDJmHUc.png">
                                                               <big style="width: 80px; text-align: left; font-size: 18px; position:absolute; bottom:40px; right:260px;"><b>${silvertrophies.split("/")[0]}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totalsilvertrophies}</span></big>

                                                               <img class="iconTrophy"style="position:absolute; bottom:35px; right:255px;" width=auto height=50px  src="https://i.imgur.com/EjoXyJB.png">
                                                               <big style="width: 80px; text-align: left; font-size: 18px; position:absolute; bottom:40px; right:175px;"><b>${bronzetrophies.split("/")[0]}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totalbronzetrophies}</span></big>




                                                               <big style="width: 80px; text-align: center; font-size: 14px; position:absolute; bottom:0px; right:375px;"><b>${trophycount.split("/")[0]}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totaltrophycount}</span></big>
                                                               <big style="width: 80px; text-align: center; font-size: 13px; position:absolute; bottom:-15px; right:375px;">Trophies</big>



                                                               <big style="width: 100px; text-align: center; font-size: 14px; position:absolute; bottom:0px; right:238px;"><b>${currentpoints.toLocaleString()}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totalpoints}</span></big>
                                                               <big style="width: 100px; text-align: center; font-size: 13px; position:absolute; bottom:-15px; right:238px;">Points</big>

                                                          </span>
                                                          `;
        }
        else {
            //console.log('game act 2')
            if (parseInt(platinumtrophies) > 0) {

                /// game has plat and is obtained
                gameTrophiesInfo.innerHTML = `<span style="font-size: 10pt; position: absolute; left:50px; bottom: -90px; width: 284px; z-index: 38;">



                                                               <img class="iconTrophyPlat" style="position:absolute; bottom:0px; right:479px;" width=auto height=75px  src="https://i.imgur.com/VnkHuFc.png">

                                                               <img class="iconTrophy"style="position:absolute; bottom:35px; right:425px;" width=auto height=50px  src="https://i.imgur.com/dP1FS6L.png">
                                                               <big style="width: 80px; text-align: left; font-size: 18px; position:absolute; bottom:40px; right:345px;"><b>${goldtrophies.split("/")[0]}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totalgoldtrophies}</span></big>

                                                               <img class="iconTrophy"style="position:absolute; bottom:35px; right:340px;" width=auto height=50px  src="https://i.imgur.com/TDJmHUc.png">
                                                               <big style="width: 80px; text-align: left; font-size: 18px; position:absolute; bottom:40px; right:260px;"><b>${silvertrophies.split("/")[0]}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totalsilvertrophies}</span></big>

                                                               <img class="iconTrophy"style="position:absolute; bottom:35px; right:255px;" width=auto height=50px  src="https://i.imgur.com/EjoXyJB.png">
                                                               <big style="width: 80px; text-align: left; font-size: 18px; position:absolute; bottom:40px; right:175px;"><b>${bronzetrophies.split("/")[0]}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totalbronzetrophies}</span></big>




                                                               <big style="width: 80px; text-align: center; font-size: 14px; position:absolute; bottom:0px; right:375px;"><b>${trophycount.split("/")[0]}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totaltrophycount}</span></big>
                                                               <big style="width: 80px; text-align: center; font-size: 13px; position:absolute; bottom:-15px; right:375px;">Trophies</big>



                                                               <big style="width: 100px; text-align: center; font-size: 14px; position:absolute; bottom:0px; right:238px;"><b>${currentpoints.toLocaleString()}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totalpoints}</span></big>
                                                               <big style="width: 100px; text-align: center; font-size: 13px; position:absolute; bottom:-15px; right:238px;">Points</big>

                                                          </span>
                                                          `;

            }
            else {
                //console.log('game act 3')
                /// game has plat and is NOT obtained
                gameTrophiesInfo.innerHTML = `<span style="font-size: 10pt; position: absolute; left:50px; bottom: -90px; width: 284px; z-index: 38;">



                                                               <img class="iconTrophyOpaque" style="position:absolute; bottom:0px; right:479px;" width=auto height=75px  src="https://i.imgur.com/R1rU1Qn.png">
                                                               <img class="iconTrophyOpaqueInvis" style="position:absolute; bottom:0px; right:479px;" width=auto height=75px  src="https://i.imgur.com/R1rU1Qn.png">

                                                               <img class="iconTrophy"style="position:absolute; bottom:35px; right:425px;" width=auto height=50px  src="https://i.imgur.com/dP1FS6L.png">
                                                               <big style="width: 80px; text-align: left; font-size: 18px; position:absolute; bottom:40px; right:345px;"><b>${goldtrophies.split("/")[0]}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totalgoldtrophies}</span></big>

                                                               <img class="iconTrophy"style="position:absolute; bottom:35px; right:340px;" width=auto height=50px  src="https://i.imgur.com/TDJmHUc.png">
                                                               <big style="width: 80px; text-align: left; font-size: 18px; position:absolute; bottom:40px; right:260px;"><b>${silvertrophies.split("/")[0]}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totalsilvertrophies}</span></big>

                                                               <img class="iconTrophy"style="position:absolute; bottom:35px; right:255px;" width=auto height=50px  src="https://i.imgur.com/EjoXyJB.png">
                                                               <big style="width: 80px; text-align: left; font-size: 18px; position:absolute; bottom:40px; right:175px;"><b>${bronzetrophies.split("/")[0]}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totalbronzetrophies}</span></big>




                                                               <big style="width: 80px; text-align: center; font-size: 14px; position:absolute; bottom:0px; right:375px;"><b>${trophycount.split("/")[0]}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totaltrophycount}</span></big>
                                                               <big style="width: 80px; text-align: center; font-size: 13px; position:absolute; bottom:-15px; right:375px;">Trophies</big>



                                                               <big style="width: 100px; text-align: center; font-size: 14px; position:absolute; bottom:0px; right:238px;"><b>${currentpoints.toLocaleString()}</b><span  style="font-size: 9pt; color: #8b8b8b;">${totalpoints}</span></big>
                                                               <big style="width: 100px; text-align: center; font-size: 13px; position:absolute; bottom:-15px; right:238px;">Points</big>

                                                          </span>
                                                          `;

            }
        }


        // haha floating element html sucks
        //gameTrophiesInfo.style.width = '95%';
        gameTrophiesInfo.style.paddingTop = '0px';
        document.getElementsByClassName('trophy_totals')[0].appendChild(gameTrophiesInfo);




GM_addStyle ( `
    .iconTrophy {
        z-index: 996 !important;
        transition: transform .2s;
    }
    .iconTrophy:hover {
        transform: scale(1.5) rotate(-15deg);
    }
    .iconTrophyPlat {
        z-index: 996 !important;
        transition: transform .2s;
    }
    .iconTrophyPlat:hover {
        transform: scale(1.75) rotate(-15deg);
    }
    #gamesHeader {
        height: 150px !important;
    }

    .iconTrophyOpaqueInvis {
        z-index: 997 !important;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s linear;
    }
    .iconTrophyOpaqueInvis:hover {
      visibility: visible;
      opacity: 1;
    }







.pieGraph {
  --p:100;
  --c:#292b2fbd;
  --thickness:12px;
  --width:120px;
  width:var(--width);
  aspect-ratio:1;
  position:absolute;
  display:inline-grid;
  margin:0px;
  place-content:center;
  font-size:12px;
  font-family:sans-serif;
}
.pieGraph:before {
  content:"";
  position:absolute;
  border-radius:100%;
  inset:0;
  background:
    radial-gradient(farthest-side,var(--c) 100%,#f000) top/var(--thickness) var(--thickness) no-repeat, conic-gradient(var(--c) calc(var(--p)*1%),#f000 0);

  -webkit-mask:radial-gradient(farthest-side, #0000 calc(98% - var(--thickness)),#000 calc(100% - var(--thickness)));
}
.type1:before {
  background-size:0 0,auto;
}
`)







        let newEl = document.createElement('div');
        newEl.class = "gameTrophiesInfo"
        newEl.style=`width: 0px; height: 0px; position:relative;`
        newEl.innerHTML = `
                                       <span style="font-size: 10pt; position: absolute; left:185px; bottom: 13px; width: 284px; z-index: 40;">
                                            <div class="pieGraph type1" style="text-align:center;"></div>
                                            <div class="pieGraph type1" style="text-align:center; --p:${completionpercent};--c:${difficulty.style.color};">${difficulty.outerHTML}<span style="font-size: 18px;">${completionpercent.toFixed(1)}%</span>${difficultyPoints} Points</div>
                                       </span>

                                       <big style="display: flex; width: 250px; font-size: 10pt; text-align:center; position: absolute; left:120px; bottom: -129px;  z-index: 41;">
                                            <big style="width: 250px; text-align: center; font-size: 14px; height: 18px"><span style="color: #EEE"><acronym title="Users Completed / Game Owners">${num1} / ${denom1}</acronym></span></div>
                                       </span>

                                       `;

        /*newEl.innerHTML = `
    <span style="font-size: 10pt; position: absolute; left:175px; bottom: -80px; width: 284px; z-index: 39;">

	    <div style="display: flex; align-items: center; height: 18px"> <span style="flex: 1; text-align:right; margin-right: 2px; font-size: 10pt;">Difficulty </span> - <span style="flex: 1; text-align:left; margin-left: 2px;font-size: 10pt;"> ${difficulty.outerHTML}</span></div>
	    <div style="display: flex; align-items: center; height: 18px"> <span style="flex: 1; text-align:right; margin-right: 2px; font-size: 10pt;">Completion Rate </span> - <span  style="flex: 1; text-align:left; margin-left: 2px;font-size: 10pt;"><span style="color: ${difficulty.style.color}"> ${completionpercent.toFixed(1)}%</span> (${num1}/${denom1})</span></div>
	    <div style="display: flex; align-items: center; height: 18px"> <span style="flex: 1; text-align:right; margin-right: 2px; font-size: 10pt;">Difficulty Points </span> - <span  style="flex: 1; text-align:left; margin-left: 2px;font-size: 10pt;"> ${difficultyPoints}</span></div>
	</span>`;*/

        // haha floating element html sucks
        //newEl.style.width = '95%';
        newEl.style.paddingTop = '0px';
        document.getElementsByClassName('trophy_totals')[0].appendChild(newEl);


                                remove(document.getElementsByClassName('trophy_totals')[0].children[0])



	document.getElementsByClassName('difficultyText')[0].style.display = 'none';
	document.getElementsByClassName('gameDetailTitle')[0].children[0].children[0].children[0].children[1].style.display = 'none';
	let title = document.getElementsByClassName('gameDetailTitle')[0].children[0].children[0].children[0];
	let titleText = title.children[0];
	let clone = titleText.cloneNode(true);
	title.append(clone);
	titleText.style.display = 'none';
	clone.classList.add("clonedTitle");
	// clone.children[0].innerHTML = clone.children[0].innerHTML.replace('<div class="main">', '').replace('</div>', '').replace('<div class="sub">', '').replace('<br>', ' - ');
    if (!((document.URL.split('/').length) === 6)) {
        if (document.getElementsByClassName('sub')[2]) {
            document.getElementsByClassName('sub')[2].style.display = 'none';
        }
        else {
            if (document.getElementsByClassName('sub')[1]) {
                document.getElementsByClassName('sub')[1].style.display = 'none';
            }
        }
        if (document.getElementsByClassName('gamebreadcrumb')[1]) {
            document.getElementsByClassName('gamebreadcrumb')[1].style.display = 'none';
        }
        console.log(document.URL.split('/')[3])
        if (document.URL.split('/')[3] === 'user') {
            //const width = document.getElementsByClassName('page-header')[0].offsetWidth - document.getElementsByClassName('gameImage')[0].offsetWidth - 50;
            //console.log(width)
            //650 = correct, 850 = wrong
            document.getElementsByClassName('progress_float')[0].style = `width: ${__progress_floatWIDTH}px; margin-left: 70px; margin-top: 74px !important; display: flex; justify-content: flex-end`;
            document.getElementsByClassName('progress_float')[0].children[0].style.display = "none";
            document.getElementsByClassName('progress_float')[0].getElementsByClassName('progresscontainer')[0].style.width = "250px";
            console.log(document.getElementsByClassName('progress_float')[0].getElementsByClassName('progressbar')[0].style.width)
            if (document.getElementsByClassName('progress_float')[0].getElementsByClassName('progressbar')[0].style.width == "0%") {
                document.getElementsByClassName('progress_float')[0].getElementsByClassName('progressbar')[0].style.visibility = "hidden";
            }


            document.getElementsByClassName('progress_float')[0].children[1].style.marginRight = '10px';
            document.getElementsByClassName('progress_float')[0].children[1].style.marginTop = '2px';

            document.getElementsByClassName('trophy_totals')[0].style = `border-top: unset; width: ${__trophy_totalsWIDTH}px; display: flex; justify-content: flex-end; position: absolute; margin-top: 15px;`;
            //document.getElementsByClassName('trophy_totals')[0].getElementsByClassName('total')[0].style = 'border-left: unset; color: white !important;';
            remove(document.querySelector("#gamesHeader > div:nth-child(2) > div > table > tbody > tr > td > div.sub"))

GM_addStyle ( `
    gamesRight page-right {
        font-family: Helvetica,Arial,sans-serif;
        font-size: 14px;
        margin: 0;
        padding: 0;
        display: table-cell;
        vertical-align: top;
        padding-left: 10px;
        color: #FFF;
        padding-top: 21px;
        background-color: #1d2126 !important;
        position: absolute;
        width: 256px;
        top: 226px;
    }
`)
                      document.getElementsByClassName('gamesRight page-right')[0].innerHTML = `
                            <div class="gamestats center" style="margin-top: 169px; margin-bottom: 15px;">
                      `












        }
    }
        remove(document.querySelector("#gamesHeader > div:nth-child(2) > div > table > tbody > tr > td > div.gameDetailTitle > table > tbody > tr:nth-child(2)"))
    }, 100);
    if (((document.URL.split('/').length) === 6) || (((document.URL.split('/').length) === 7) && (document.URL.split('/')[6] === ''))) {
        let user = ''
        let usr = document.getElementsByClassName('username')[0]
        if (usr) {
            user = usr.innerText.split(' ')[0]
        }
        let newEl2 = document.createElement('div');
        newEl2.style=`width: 0px; height: 0px; position:relative; font-family: Microsoft YaHei UI; image-rendering: crisp-edges; text-align: center;`
        newEl2.innerHTML = `
	                                   <div style="display: flex; height: 18px;">
                                           <span style="font-size: 10pt; align-items: center; position: absolute; left:50px; bottom: 130px;">
                                               <a style ="color: #EEE;"; href="https://psntrophyleaders.com/user/view/${user}/${decodeURI(decodeURI(location.href).split('/')[5])}">${user}
                                               </a>
                                           </span>
                                       </div>`
           document.getElementsByClassName('gamestats center')[0].appendChild(newEl2);
    }
}

function insertBefore(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
function remove(att) {
   if (att) {
      att.remove()
   }
   else {
      return
   }
}

function inlineTitleTags() {
	let auxContainer = document.createElement('div');
	let span = document.createElement('span');
	span.appendChild(document.getElementsByClassName('platformlabel')[0].parentNode.cloneNode(true));
	auxContainer.appendChild(span);

	let title = document.getElementsByClassName('gameDetailTitle')[0].children[0].children[0].children[0].children[0];
	if (title) {
		title.children[0].children[0].children[0].innerHTML = auxContainer.innerHTML + title.children[0].children[0].children[0].innerHTML;
	}
}
