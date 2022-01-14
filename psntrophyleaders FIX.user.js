// ==UserScript==
// @name              psntrophyleaders FIX
// @version           1.500
// @icon                https://www.google.com/s2/favicons?domain=psntrophyleaders.com
// @match             https://psntrophyleaders.com/*
// @downloadURL   https://www.dropbox.com/s/e7i051mdvvvpzhj/psntrophyleaders%20FIX.user.js?dl=0
// @updateURL       https://www.dropbox.com/s/e7i051mdvvvpzhj/psntrophyleaders%20FIX.user.js?dl=0
// ==/UserScript==


const arrayOR =[
'invector-ps4',
'battle-rockets-psvita',
];
const arrayRR =[
'invector-ps4-1',
'battle-rockets-2-0-psvita-1',
'battle-rockets-2-0-psvita',
];


const arrayEU = [
'energy-cycle-edge-ps5',
'trophy-set-racing-bros-ps5-1',
'fluxteria-ps4-1',
'sables-grimoire-ps5-1',
'dont-touch-this-button-ps5-1',
'reminiscence-in-the-night-ps5-1',
'lizard-lady-vs-the-cats-platinum-edition-ps4',
'lizard-lady-vs-the-cats-ps4',
'space-kabaam-ps4-1',
'space-kabaam-ps5-1',
'year-of-springs-ps4-2',
'year-of-springs-ps5-1',
'night-lights-ps5',
'night-lights-ps4',
'reminiscence-in-the-night-ps4-1',
'shinrai-broken-beyond-despair-ps5-1',
'shinrai-broken-beyond-despair-ps4-1',
'takorita-meets-fries-ps5',
'takorita-meets-fries-ps4',
'zeroptian-invasion-psvita',
'super-kids-racing-ps4',
'doodle-devil-ps3',
'doodle-devil-psvita',
'without-escape-ps5',
'walking-dead-the-final-season-ps4-3',
'snake-boat-otterrific-arcade-ps4-1',
'battle-rockets-2-0-psvita',
'planet-rix-13-ps4-psvita',
'sigi-a-fart-for-melusina-ps4-psvita-2',
'bouncy-bullets-2-ps5-1',
'without-escape-psvita-1',
'promesa-ps4',
'glo-ps5',
'day-without-me-ps4',
'creepy-road-ps4-psvita',
'fill-a-pix-phils-epic-adventure-ps4-1',
'mine-my-mind-ps4-1',
'racing-challenge-mode-edition-breakthrough-gaming-arcade-ps4',
'virtuous-western-ps5',
'virtuous-western-ps4',
'sushi-break-2-head-to-head-eu-ps5',
'yoko-yuki-dr-rats-revenge-ps4',
'drunken-fist-ps5-2',
'drunken-fist-ps4-1',
'flying-soldiers-ps4',
'dojoran-ps5',
'avoid-them-challenge-mode-edition-breakthrough-gaming-arcade-ps4',
'bff-or-die-ps4',
'coolpaintr-ps4-4',
'sushi-break-2-head-to-head-ps4',
'sushi-break-ps5',
'donutsnjustice-ps5',
'donutsnjustice-ps4',
'balancelot-ps4-1',
'how-to-take-off-your-mask-remastered-ps4-1',
'flowers-by-powgi-ps5',
'flowers-by-powgi-ps4',
'cave-bad-ps4-2',
'hellbreachers-ps5',
'hellbreachers-ps4',
'would-you-like-to-run-an-idol-café-ps5-1',
'would-you-like-to-run-an-idol-café-ps4-1',
'bowling-story-two-mark-version-project-summer-ice-ps4',
'mina-michi-ps5-2',
'mina-michi-ps4-2',
'quick-mafs-ps5',
'quick-mafs-ps4',
'ravva-and-the-cyclops-curse-ps4-2',
'thunderflash-ps5',
'thunderflash-ps4',
'sushi-break-2-ps4',
'ultragoodness-2-ps5-1',
'ultragoodness-2-ps4-1',
'freddy-spaghetti-2-ps5',
'freddy-spaghetti-ps5',
'hentai-vs-evil-ps4-2',
'hentai-vs-evil-ps5-1',
'hentai-vs-evil-ps4-2',
'squad-killer-ps4-2',
'bowling-story-one-mark-version-project-summer-ice-ps4',
'christmas-break-2-head-to-head-ps4',
'söldner-x-2-final-prototype-definitive-edition-ps4-1',
'crazy-gravity-ps5',
'enter-digiton-heart-of-corruption-ps4',
'enter-digiton-heart-of-corruption-ps5',
'dreaming-sarah-ps5',
'dreaming-sarah-ps4',
'chromagun-ps4-3',
'fight-ps4-1',
'bowling-breakthrough-gaming-arcade-ps4',
'epic-word-search-collection-2-psvita',
'epic-word-search-collection-2-ps4',
'christmas-break-2-ps4',
'pretty-girls-panic-plus-ps5-3',
'pretty-girls-panic-plus-ps4-3',
'guard-duty-psvita-1',
'guard-duty-ps4',
'lady-in-a-leotard-with-a-gun-ps4',
'amnesia-memories-psvita-1',
'evil-inside-ps5-1',
'evil-inside-ps4-1',
'awesome-pea-2-psvita-1',
'fast-striker-psvita-1',
'fast-striker-ps4-1',
'rabisco-ps5',
'rabisco-ps4',
'epic-word-search-collection-psvita',
'sakura-nova-ps5-1',
'sakura-nova-ps4-1',
'zippy-the-circle-level-11-level-12-and-level-13-ps4',
'pic-a-pix-classic-2-psvita-1',
'pic-a-pix-classic-2-ps4-1',
'space-break-2-head-to-head-ps4',
'thy-sword-psvita-1',
'thy-sword-ps4',
'micetopia-ps4-1',
'akinofa-ps4-1',
'distraint-2-ps4-1',
'brave-match-ps4',
'reflection-of-mine-ps4',
'more-dark-ps4-1',
'jet-set-knights-ps4-1',
'doodle-kingdom-psvita',
'doodle-kingdom-ps4',
'doodle-kingdom-ps3',
'normans-great-illusion-psvita',
'normans-great-illusion-ps4-1',
'rift-racoon-ps5-1',
'rift-racoon-ps4-2',
'vasilis-psvita',
'gaps-by-powgi-ps5',
'crimson-spires-ps5',
'crimson-spires-ps4',
'pretty-girls-mahjong-solitaire-ps5',
'pretty-girls-mahjong-solitaire-ps4-2',
'brotherhood-united-psvita-1',
'brotherhood-united-ps4',
'jigsaw-finale-ps4',
'reverie-ps4-2',
'reverie-psvita-1',
'sakura-swim-club-ps5-1',
'ultra-mission-psvita',
'crisis-wing-ps5',
'vera-blanc-ghost-in-the-castle-ps4-1',
'frogger-returns-ps3-1',
'delicious-pretty-girls-mahjong-solitaire-ps5-1',
'rally-racing-ps5-1',
'rally-racing-ps4',
'highschool-romance-ps5',
'c14-dating-ps5-1',
'c14-dating-ps4-1',
'ganbare-super-strikers-psvita-1',
'ganbare-super-strikers-ps4-1',
'skatemasta-tcheco-ps5',
'skatemasta-tcheco-ps4',
'timbermanvs-ps4',
'snakes-and-ladders-ps4',
'pillar-puzzle-escape-ps4',
'nextgen-sandbox-ps4-1',
'get-to-the-top-breakthrough-gaming-arcade-ps4',
'catch-the-bowling-balls-breakthrough-gaming-arcade-ps4',
'racing-breakthrough-gaming-arcade-ps4-1',
'skateboarding-breakthrough-gaming-arcade-ps4-1',
'space-breakthrough-gaming-arcade-ps4',
'poker-pretty-girls-battle-texas-holdem-ps5-1',
'poker-pretty-girls-battle-texas-holdem-ps4-1',
'mekorama-psvita-1',
'mekorama-ps4',
'rememoried-ps4-1',
'from-eath-to-heaven-ps4',
'grand-museum-vr-ps4',
'sinuca-attack-ps4-1',
'american-football-breakthrough-gaming-arcade-ps4',
'track-challenge-mode-edition-breakthrough-gaming-arcade-ps4',
'track-breakthrough-gaming-arcade-ps4',
'bishoujo-battle-cyber-panic-ps5-2',
'legend-of-the-skyfish-psvita-1',
'legend-of-the-skyfish-ps4-1',
'project-starship-x-ps4',
'newtonian-inversion-ps4',
'newtonian-inversion-ps4',
'deep-ones-ps4-psvita',
'deep-ones-ps4-psvita-1',
'coastertrophyset-ps4',
'lost-wing-ps4-1',
'autumns-journey-ps4-1',
'our-church-and-halloween-rpg-story-four-ps4-1',
'our-church-and-halloween-rpg-story-three-ps4-1',
'our-church-and-halloween-rpg-story-two-ps4-1',
'our-church-and-halloween-rpg-story-one-ps4-1',
'mask-of-mists-ps5',
'poker-pretty-girls-battle-fantasy-world-edition-ps5-1',
'pretty-girls-panic-ps5-1',
'pretty-girls-panic-ps4-1',
'loot-hero-dx-ps4',
'will-a-wonderful-world-ps4-2',
'void-gore-ps4-1',
'dull-grey-psvita',
'dull-grey-ps4-1',
'funny-truck-ps4',
'gabbuchi-ps4',
'tower-of-beatrice-psvita-1',
'tower-of-beatrice-ps4-1',
'bleep-bloop-ps4',
'sakura-succubus-4-ps5',
'mask-of-mists-ps4-1',
'bowling-story-three-pammy-version-project-summer-ice-ps4',
'bowling-story-three-jane-version-project-summer-ice-ps4',
'zero-strain-ps5',
'pinkman-ps5',
'pinkman-ps4-1',
'cybxus-heart-ps4',
'dating-life-miley-x-emily-ps5',
'dating-life-miley-x-emily-ps4',
'spot-the-difference-ps4',
'space-intervention-ps4-1',
'mooseman-ps4-psvita-1',
'tannenberg-ps4',
'tokyo-run-ps4-1',
'contraptions-ps4-1',
'bishoujo-battle-mahjong-solitaire-ps5',
'bishoujo-battle-mahjong-solitaire-ps4-1',
'bowling-story-two-pammy-version-project-summer-ice-ps4',
'bowling-story-two-jane-version-project-summer-ice-ps4',
'of-tanks-and-demons-iii-ps4',
'112th-seed-ps5-1',
'pic-a-pix-classic-psvita',
'pic-a-pix-classic-ps4',
'castle-of-no-escape-2-ps4',
'i-am-the-hero-psvita-1',
'etherborn-ps4',
'briks-head-to-head-ps4',
'delta-squad-ps4-1',
'tarot-readings-premium-ps4-1',
'lumini-ps4-1',
'memory-lane-2-ps4',
'dungeon-escape-ps4-1',
'distraint-deluxe-edition-psvita',
'distraint-deluxe-edition-ps4-1',
'bowling-story-one-jane-version-project-summer-ice-ps4',
'bowling-story-one-pammy-version-project-summer-ice-ps4',
'pretty-girls-klondike-solitaire-ps4-1',
'pretty-girls-klondike-solitaire-ps5-1',
'pic-a-pix-color-2-psvita',
'pic-a-pix-color-2-ps4',
'baseball-challenge-mode-edition-breakthrough-gaming-arcade-ps4',
'metropolis-lux-obscura-ps4-psvita-2',
'metropolis-lux-obscura-ps4-psvita',
'crypt-of-the-serpent-king-ps4-1',
'superhero-x-ps4-1',
'language-of-love-ps4-1',
'sakura-succubus-3-ps5-1',
'grass-cutter-psvita',
'wordsweeper-by-powgi-psvita',
'poker-pretty-girls-battle-fantasy-world-edition-ps4-1',
'delicious-pretty-girls-mahjong-solitaire-ps4-1',
'bishoujo-battle-cyber-panic-ps4-1',
'crosskrush-ps5',
'crosskrush-ps4-1',
'reknum-ps4',
'drowning-ps5',
'megaquarium-ps4-1',
'dreaming-canvas-ps4-1',
'hoggy2-psvita',
'sakura-succubus-2-ps5',
'horned-knight-ps4-1',
'hardcube-ps4',
'sakura-succubus-ps5',
'legends-of-talia-arcadia-ps5',
'legends-of-talia-arcadia-ps4',
'dungeons-bombs-ps5-1',
'dungeons-bombs-ps4-1',
'semispheres-ps4-1',
'semispheres-psvita-1',
'tamiku-ps4-1',
'jackquest-ps4-1',
'i-and-me-ps4',
'i-and-me-psvita',
'demons-souls-ps3-2',
'briks-2-ps4',
'jigsaw-solace-ps4-1',
'classic-snake-adventures-ps4-1',
'concept-destruction-ps5',
'homestar-vr-special-edition-ps4-2',
'station-ps4-1',
'xblaze-code-embryo-psvita-2',
'xblaze-code-embryo-ps3-2',
'long-reach-psvita',
'long-reach-ps4',
'palm-reading-premium-ps4-1',
'ord-ps4-1',
'salt-and-sanctuary-ps4-1',
'car-mayhem-ps4-1',
'mars-odyssey-ps4',
'zomb-ps4-1',
'twin-robots-ultimate-edition-ps5-1',
'shikhondo-soul-eater-ps4-1',
'dead-secret-ps4-1',
'task-force-kampas-psvita-3',
'date-a-live-rio-reincarnation-ps4-1',
'one-finger-death-punch-2-ps4-1',
'nekopara-vol-4-ps4-1',
'takotan-psvita-3',
'toon-war-ps4',
'mortal-shell-ps4-1',
'mosaic-ps4',
'cave-bad-ps5-2',
'puzzle-frenzy-ps4',
'crossovers-by-powgi-psvita',
'mixups-by-powgi-psvita',
'pantsu-hunter-back-to-the-90s-ps4-1',
'metagal-psvita-1',
'twin-robots-ps4-psvita-2',
'pic-a-pix-pieces-psvita',
'pic-a-pix-pieces-ps4',
'daggerhood-psvita-1',
'daggerhood-ps4',
'energy-cycle-edge-ps4-psvita-1',
'access-denied-psvita-2',
'dark-mystery-ps4-1',
'albedo-eyes-from-outer-space-ps4',
'drowning-ps4-psvita-2',
'heroes-trials-psvita-1',
'heroes-trials-ps4',
'one-word-by-powgi-psvita',
'word-search-by-powgi-psvita',
'word-sudoku-by-powgi-psvita',
'sound-shapes-ps4-1',
'devious-dungeon-psvita',
'league-of-evil-psvita',
'energy-invasion-ps4-psvita-2',
'super-destronaut-dx-psvita-1',
'dying：-reborn-psvita-2',
'dying：-reborn-ps4',
'pic-a-pix-color-psvita',
'koi-ps4-2',
'hiq-ace-ps4',
'doodle-devil-ps4',
'minefield-ps4-1',
'energy-balance-ps4-psvita-3',
'squareboy-vs-bullies-psvita-1',
'north-ps4-psvita-2',
'obduction-ps4-1',
'jolt-family-robot-racer-ps4-1',
'suicide-guy-ps4',
'zeus-quest-remastered-ps4-1',
'slyde-ps4',
'midnight-deluxe-psvita',
'inner-world-the-last-wind-monk-ps4',
'inner-world-ps4-1',
'rocketsrocketsrockets-ps4',
'spiral-splatter-ps4-psvita-1',
'spiral-splatter-ps4-psvita-3',
'alteric-ps4-psvita-3',
'black-the-fall-ps4',
'twin-robots-ps4-psvita-3',
'chromagun-ps4',
'blackwood-crossing-ps4',
'its-spring-again-ps4-psvita-1',
'energy-cycle-ps4-psvita-3',
'doodle-god-ps4',
'doodle-god-ps3',
'doodle-god-psvita',
'jazzpunk-ps4-1',
'actual-sunlight-psvita-1',
'lego-indiana-jones-2-the-adventure-continues-ps3-1',
'grass-cutter-ps4-1',
'bucket-knight-psvita-1',
'bioshock-2-remastered-ps4',
'hex-tunnel-ps4-1',
'punchline-ps4-1',
'random-heroes-gold-edition-psvita-1',
'grizzland-ps4',
'random-heroes-gold-edition-ps4',
'null-drifter-ps4-2',
'spirit-of-the-north-ps4-1',
'what-remains-of-edith-finch-ps4-1',
'project-starship-ps4',
'duck-souls-psvita-2',
'super-destronaut-land-wars-psvita',
'one-night-stand-ps4',
'path-of-motus-ps4-1',
'red-bow-psvita',
'save-the-ninja-clan-ps4-psvita-1',
'tic-tac-letters-by-powgi-psvita',
'iro-hero-ps4-1',
'survive-mr-cube-ps4-4',
'himno-ps4-1',
'syrup-and-the-ultimate-sweet-psvita',
'back-in-1995-psvita-1',
'himno-psvita-1',
'awesome-pea-psvita',
'winters-daydream-psvita-1',
'through-the-woods-ps4',
'donut-county-ps4-1',
'awesome-pea-ps4',
'mecho-tales-ps4-1',
'five-nights-at-freddys-3-ps4-1',
'briks-ps4',
'deep-space-rush-psvita-2',
'deep-space-rush-ps4-1',
'inferno-2-ps4',
'task-force-kampas-ps4-1',
'breeder-homegrown-directors-cut-psvita',
'bioshock-remastered-ps4',
'personality-and-psychology-premium-ps4-1',
'astrology-and-horoscope-premium-ps4',
'you-are-king-drift-ps4',
'pantsu-hunter-back-to-the-90s-psvita-1',
'explosive-jake-psvita',
'perils-of-baking-eu-ps4',
'i-am-the-hero-ps4',
'punchline-psvita-1',
'nurse-love-addiction-psvita',
'√letter-psvita-2',
'just-a-phrase-by-powgi-psvita-1',
'gorogoa-ps4-1',
'blind-men-psvita-2',
'vasilis-ps4-1',
'maitetsupure-station-ps4-1',
'swordbreaker-the-game-psvita-1',
'summer-with-the-shiba-inu-ps4',
'strawberry-vinegar-ps4',
'ultra-hat-dimension-ps4',
'prehistoric-dude-ps4',
'jisei-ps4-1',
'epic-word-search-collection-ps4',
'memory-lane-ps4-1',
'theme-park-simulator-ps4',
'crypto-by-powgi-psvita-1',
'coolpaintr-ps4-1',
'roguecube-ps4-1',
'reed-2-psvita',
'fifty-words-by-powgi-psvita',
'discovery-ps4-1',
'worldend-syndrome-ps4',
'112th-seed-ps4-1',
'how-we-soar-ps4',
'erica-ps4-1',
'steinsgate-psvita-2',
'steinsgate-ps3-3',
'jigsaw-abundance-ps4-1',
'clash-force-ps4',
'swordbreaker-the-game-ps4',
'golf-zero-ps4-1',
'robozarro-ps4-1',
'whiteboyz-wit-attitude-the-pursuit-of-money-ps4-1',
'3d-dot-game-heroes-ps3-1',
'vera-blanc-full-moon-ps4-1',
'chickens-on-the-road-ps4',
'nekopara-vol-3-ps4',
'hiq-ace-unlimited-ps4-1',
'chaoschild-psvita-3',
'chaoschild-ps4-3',
'paranormal-activity-ps4-1',
'octonaut-ps4-1',
'awesome-pea-2-ps4',
'radio-squid-ps4',
'alphaset-by-powgi-psvita',
'nicole-ps4',
'even-the-ocean-ps4-1',
'moss-ps4',
'active-neurons-puzzle-game-ps4',
'hero-and-a-garden-ps4-1',
'concept-destruction-ps4',
'99vidas-ps4-ps3-psvita-1',
'adventures-of-tintin-the-secret-of-the-unicorn-ps3',
'aegis-of-earth-protonovus-assault-ps4-ps3-psvita-1',
'arcana-heart-3-love-max-ps3-1',
'armored-core-v-ps3-2',
'energy-cycle-ps5',
'catsofwar-ps4-1',
'cats-of-war-ps5-1',
'suicide-guy-ps4-2',
'hajwala-ps4',
'hellblade-senuas-sacrifice-ps4',
'black-white-bushido-ps4-1',
'five-nights-at-freddys-ps4-1',
'word-wheel-by-powgi-ps4',
'fullblast-psvita',
'fullblast-ps4',
'jack-n-jill-dx-psvita-1',
'jack-n-jill-dx-ps4-2',
'super-destronaut-dx-ps4-1',
'north-ps4-psvita-1',
'planet-rix-13-ps4-psvita-2',
'syrup-and-the-ultimate-sweet-ps4-1',
'castle-pals-ps4',
'pity-pit-ps4-1',
'many-faces-ps4',
'crazy-gravity-ps4-1',
'space-break-2-ps4-1',
'dont-touch-this-button-ps4',
'glo-ps4',
'bouncy-bullets-2-ps4-1',
'donut-break-2-head-to-head-ps4',
'halloween-candy-break-2-ps4',
'zj-the-ball-level-5-ps4',
'zj-the-ball-level-4-ps4',
'zj-the-ball-level-3-ps4',
'zj-the-ball-level-2-ps4',
'zj-the-ball-level-1-ps4',
'zippy-the-circle-level-8-level-9-and-level-10-ps4',
'zippy-the-circle-level-5-level-6-and-level-7-ps4',
'zippy-the-circle-level-3-and-level-4-ps4',
'zippy-the-circle-level-1-and-level-2-ps4',
'paradox-error-ps4',
'ascendshaft-ps4-1',
'milos-quest-psvita',
'milos-quest-ps4',
'ascendshaft-and-endless-shaft-ps4',
'duck-souls-ps4-1',
'dark-sauce-ps4-1',
'blasftul-ps4',
'freddy-spaghetti-2-ps4-1',
'sushi-break-head-to-head-ps4-1',
'back-in-1995-ps4',
'energy-cycle-edge-ps4-psvita',
'pacific-wings-trophys-ps4',
'wordsweeper-by-powgi-ps4',
'knightin-psvita',
'knightin-ps4-1',
'devious-dungeon-2-psvita',
'dojoran-ps4',
'freddy-spaghetti-ps4',
'baseball-bout-otterrific-arcade-ps4-1',
'crypto-by-powgi-ps4',
'crossovers-by-powgi-ps4',
'mixups-by-powgi-ps4',
'tic-tac-letters-by-powgi-ps4',
'fifty-words-by-powgi-ps4',
'alphaset-by-powgi-ps4',
'roundout-by-powgi-ps4',
'ladders-by-powgi-ps4',
'gaps-by-powgi-ps4',
'halloween-candy-break-2-head-to-head-ps4',
'dragon-break-classic-head-to-head-ps4',
'dragon-break-classic-ps4',
'unicorn-break-head-to-head-ps4',
'unicorn-break-ps4',
'horror-break-head-to-head-ps4',
'horror-break-ps4',
'space-break-head-to-head-ps4',
'space-break-ps4',
'independence-day-break-head-to-head-ps4',
'independence-day-break-ps4',
'easter-candy-break-head-to-head-ps4',
'easter-candy-break-ps4',
'saint-patricks-day-break-head-to-head-ps4-1',
'saint-patricks-day-break-ps4',
'valentine-candy-break-head-to-head-ps4-1',
'valentine-candy-break-ps4-1',
'christmas-break-head-to-head-ps4',
'christmas-break-ps4',
'oktoberfest-break-head-to-head-ps4',
'oktoberfest-break-ps4',
'halloween-candy-break-head-to-head-ps4',
'halloween-candy-break-ps4',
'donut-break-head-to-head-ps4',
'donut-break-2-ps4',
'donut-break-ps4-1',
'taco-break-head-to-head-ps4',
'taco-break-ps4',
'pizza-break-head-to-head-ps4',
'pizza-break-ps4',
'sushi-break-ps4',
'just-a-phrase-by-powgi-ps4-2',
'reed-2-ps4-1',
'reed-remastered-ps4-1',
'reed-remastered-psvita-2',
'zero-strain-ps4-1',
'red-death-ps4-2',
'birthday-of-midnight-ps4-1',
'crisis-wing-ps4-1',
'sakura-swim-club-ps4',
'sakura-succubus-4-ps4',
'sakura-succubus-3-ps4-1',
'sakura-succubus-2-ps4',
'sakura-succubus-ps4',
'tetras-escape-psvita',
'thunder-paw-psvita-1',
'thunder-paw-ps4',
'rush-rover-psvita',
'rush-rover-ps4',
'devious-dungeon-2-ps4-1',
'violetti-goottii-ps4',
'spectrewoods-ps4',
'angels-with-scaly-wings-ps4-1',
'walking-dead-the-final-season-ps4',
'sagebrush-ps4',
'cybarian-the-time-travelling-warrior-ps4-1',
'attack-of-the-toy-tanks-ps4-1',
'gravity-duck-ps4-1',
'super-wiloo-demake-ps4',
'stretch-ps4',
'iron-snout-ps4-1',
'bouncy-bullets-ps4-2',
'mekabolt-ps4',
'foxyland-ps4-1',
'drowning-ps4-psvita-1',
'winters-daydream-ps4',
'neon-junctions-ps4-1',
'just-ignore-them-ps4-1',
'football-game-ps4-1',
'my-big-sister-ps4',
'without-escape-ps4-1',
'habroxia-ps4-1',
'paradox-soul-ps4-1',
'mochi-mochi-boy-ps4',
'foxyland-2-ps4-1',
'super-box-land-demake-ps4',
'music-racer-ps4',
'zero-zero-zero-zero-ps4-1',
'word-maze-by-powgi-ps4-1',
'super-weekend-mode-ps4',
'warlocks-tower-ps4',
'one-word-by-powgi-ps4',
'energy-cycle-ps4-psvita-2',
'word-sudoku-by-powgi-ps4',
'energy-balance-ps4-psvita-2',
'sigi-a-fart-for-melusina-ps4-psvita',
'energy-invasion-ps4-psvita',
'nubla-ps4',
'league-of-evil-ps4',
'word-search-by-powgi-ps4',
'alteric-ps4-psvita-1',
'world-of-nubla-ps4',
'aer-ps4-1',
'√letter-ps4-2',
'36-fragments-of-midnight-ps4-1',
'demetrios-ps4-1',
'midnight-deluxe-ps4',
'explosive-jake-ps4',
'access-denied-ps4-1',
'36-fragments-of-midnight-psvita-1',
'habroxia-psvita-1',
'iron-snout-psvita-1',
'paradox-soul-psvita-1',
'super-weekend-mode-psvita',
'cybarian-the-time-travelling-warrior-psvita-1',
'mekabolt-psvita-1',
'foxyland-psvita',
'foxyland-2-psvita',
'super-wiloo-demake-psvita-1',
'gravity-duck-psvita-1',
'attack-of-the-toy-tanks-psvita-1',
'zero-zero-zero-zero-psvita-2',
'super-box-land-demake-psvita-1',
'football-game-psvita-1',
'neon-junctions-psvita-1',
'bouncy-bullets-psvita',
'mochi-mochi-boy-psvita-1',
'metagal-ps4-1',
'hoggy2-ps4',
'zeroptian-invasion-ps4',
'super-destronaut-land-wars-ps4',
'bird-game-ps4-1',
'breeder-homegrown-directors-cut-ps4',
'red-bow-ps4-1',
'word-maze-by-powgi-psvita',
'bucket-knight-ps4',
'road-bustle-ps4-1',
'storm-boy-ps4',
'word-wheel-by-powgi-psvita',
'warlocks-tower-psvita',
'inksplosion-ps4',
'inksplosion-psvita',
'peasant-knight-ps4',
'peasant-knight-psvita-2',
'my-big-sister-psvita-1',
'super-destronaut-dx-2-ps4',
'takotan-ps4',
'super-korotama-ps4-1',
'gun-crazy-ps4-1',
'tetras-escape-ps4',
'devious-dungeon-ps4',
'blind-men-ps4',
'hex-tunnel-touch-ps4',
'squareboy-vs-bullies-ps4',
'skytime-ps4-psvita-1',
'bullet-beat-ps4',
'orc-slayer-ps4',
'just-ignore-them-psvita-1',
'alien-destroyer-ps4',
'marauder-chronicles-curse-over-valdria-ps4',
'marauder-chronicles-curse-over-valdria-ps5',

];
const arrayNA = [
'twin-robots-ps4-psvita',
'sun-wukong-vs-robot-ps5-1',
'from-eath-to-heaven-ps4-1',
'mastho-is-together-ps4-2',
'mastho-is-together-ps5-1',
'santas-workshop-ps5-1',
'christmas-run-ps5-1',
'christmas-run-ps4-1',
'sun-wukong-vs-robot-ps4-1',
'112th-seed-ps5-2',
'year-of-springs-ps4-1',
'year-of-springs-ps5-2',
'lovechoice-ps5',
'lovechoice-ps4',
'night-lights-ps4-1',
'night-lights-ps5-1',
'venus-improbable-dream-ps4',
'venus-improbable-dream-ps5',
'space-kabaam-ps4-2',
'space-kabaam-ps5-2',
'20-bunnies-ps4-2',
'20-bunnies-ps5-2',
'lizard-lady-vs-the-cats-ps4-1',
'lizard-lady-vs-the-cats-platinum-edition-ps4-1',
'baseball-bout-otterrific-arcade-ps4',
'zeroptian-invasion-psvita-1',
'doodle-devil-psvita-1',
'doodle-god-psvita-1',
'tetras-escape-ps4-1',
'hellbreachers-ps5-2',
'hellbreachers-ps4-2',
'perils-of-baking-ps4',
'deep-ones-ps4-psvita-3',
'deep-ones-ps4-psvita-2',
'coastertrophyset-ps4-1',
'lost-wing-ps4',
'zj-the-ball-level-3-ps4-1',
'zj-the-ball-level-2-ps4-1',
'zj-the-ball-level-1-ps4-1',
'autumns-journey-ps4',
'our-church-and-halloween-rpg-story-four-ps4',
'our-church-and-halloween-rpg-story-three-ps4',
'our-church-and-halloween-rpg-story-two-ps4',
'our-church-and-halloween-rpg-story-one-ps4',
'mask-of-mists-ps5-1',
'poker-pretty-girls-battle-fantasy-world-edition-ps5',
'pretty-girls-panic-ps5-3',
'pretty-girls-panic-ps5-3',
'pretty-girls-panic-ps4-3',
'loot-hero-dx-ps4-1',
'will-a-wonderful-world-ps4-1',
'void-gore-ps4',
'dull-grey-psvita-1',
'dull-grey-ps4',
'gabbuchi-ps4-1',
'devious-dungeon-2-psvita-1',
'devious-dungeon-2-ps4',
'tower-of-beatrice-psvita',
'tower-of-beatrice-ps4',
'bleep-bloop-ps4-1',
'mask-of-mists-ps4',
'bowling-story-three-pammy-version-project-summer-ice-ps4-1',
'bowling-story-three-jane-version-project-summer-ice-ps4-1',
'zero-strain-ps5-3',
'pinkman-ps5-1',
'pinkman-ps4',
'cybxus-heart-ps4-1',
'spot-the-difference-ps4-1',
'space-intervention-ps4-2',
'mooseman-ps4-psvita',
'paradox-error-ps4-2',
'tannenberg-ps4-1',
'dark-sauce-ps4',
'contraptions-ps4',
'bishoujo-battle-mahjong-solitaire-ps5-1',
'bishoujo-battle-mahjong-solitaire-ps4',
'bowling-story-two-pammy-version-project-summer-ice-ps4-1',
'bowling-story-two-jane-version-project-summer-ice-ps4-1',
'of-tanks-and-demons-iii-ps4-1',
'of-tanks-and-demons-iii-ps4-1',
'112th-seed-ps5-3',
'pic-a-pix-classic-psvita-1',
'pic-a-pix-classic-ps4-1',
'castle-of-no-escape-2-ps4-1',
'i-am-the-hero-ps4-1',
'i-am-the-hero-psvita',
'etherborn-ps4-1',
'briks-head-to-head-ps4-1',
'delta-squad-ps4',
'lumini-ps4',
'memory-lane-2-ps4-1',
'dungeon-escape-ps4',
'distraint-deluxe-edition-psvita-1',
'distraint-deluxe-edition-ps4',
'bowling-story-one-jane-version-project-summer-ice-ps4-1',
'bowling-story-one-pammy-version-project-summer-ice-ps4-1',
'pretty-girls-klondike-solitaire-ps5',
'pretty-girls-klondike-solitaire-ps4',
'pic-a-pix-color-2-psvita-1',
'pic-a-pix-color-2-ps4-1',
'baseball-challenge-mode-edition-breakthrough-gaming-arcade-ps4-1',
'metropolis-lux-obscura-ps4-psvita-3',
'metropolis-lux-obscura-ps4-psvita-1',
'crypt-of-the-serpent-king-ps4',
'superhero-x-ps4',
'sakura-succubus-3-ps5',
'grass-cutter-psvita-1',
'wordsweeper-by-powgi-psvita-1',
'wordsweeper-by-powgi-ps4-1',
'poker-pretty-girls-battle-fantasy-world-edition-ps4',
'delicious-pretty-girls-mahjong-solitaire-ps4',
'bishoujo-battle-cyber-panic-ps4',
'crosskrush-ps5-1',
'crosskrush-ps4',
'reknum-ps4-1',
'drowning-ps5-1',
'megaquarium-ps4',
'synergia-psvita-1',
'persona-4-dancing-all-night-psvita',
'dreaming-canvas-ps4',
'hoggy2-ps4-1',
'sakura-succubus-2-ps5-1',
'sakura-succubus-2-ps4-1',
'horned-knight-ps4',
'hardcube-ps4-1',
'sakura-succubus-ps4-1',
'sakura-succubus-ps5-1',
'legends-of-talia-arcadia-ps5-1',
'legends-of-talia-arcadia-ps4-1',
'dungeons-bombs-ps5',
'dungeons-bombs-ps4',
'habroxia-psvita',
'habroxia-ps4',
'semispheres-psvita',
'semispheres-ps4',
'tamiku-ps4',
'batu-ta-batu-ps4',
'i-and-me-psvita-1',
'i-and-me-ps4-1',
'pic-a-pix-color-psvita-1',
'demons-souls-ps3-1',
'one-eyed-kutkh-ps4-psvita-2',
'one-eyed-kutkh-ps4-psvita-1',
'word-search-by-powgi-psvita-1',
'classic-snake-adventures-ps4',
'super-kids-racing-ps4-1',
'concept-destruction-ps5-2',
'homestar-vr-special-edition-ps4-1',
'station-ps4',
'xblaze-code-embryo-psvita-1',
'xblaze-code-embryo-ps3-1',
'long-reach-psvita-1',
'long-reach-ps4-1',
'ord-ps4',
'salt-and-sanctuary-ps4',
'nurse-love-addiction-psvita-1',
'car-mayhem-ps4',
'zomb-ps4',
'twin-robots-ultimate-edition-ps5',
'shikhondo-soul-eater-ps4-2',
'dead-secret-ps4',
'task-force-kampas-psvita-2',
'date-a-live-rio-reincarnation-ps4',
'one-finger-death-punch-2-ps4-2',
'skytime-ps4-psvita',
'skyscrappers-ps4-1',
'spirit-of-the-north-ps4',
'annihilation-ps4',
'son-ps4',
'mortal-shell-ps4',
'mosaic-ps4-1',
'would-you-like-to-run-an-idol-café-ps5',
'would-you-like-to-run-an-idol-café-ps4',
'ravva-and-the-cyclops-curse-ps4',
'thunderflash-ps5-1',
'thunderflash-ps4-1',
'ultragoodness-2-ps5',
'ultragoodness-2-ps4',
'freddy-spaghetti-2-ps5-1',
'freddy-spaghetti-2-ps4',
'freddy-spaghetti-ps5-1',
'freddy-spaghetti-ps4-1',
'hentai-vs-evil-ps5-2',
'hentai-vs-evil-ps4',
'pic-a-pix-pieces-2-ps4-1',
'squad-killer-ps4',
'pic-a-pix-pieces-psvita-1',
'pic-a-pix-pieces-ps4-1',
'crazy-gravity-ps5-1',
'crazy-gravity-ps4',
'enter-digiton-heart-of-corruption-ps5-2',
'enter-digiton-heart-of-corruption-ps4-2',
'dreaming-sarah-ps5-1',
'dreaming-sarah-ps4-1',
'chromagun-ps4-2',
'fight-ps4',
'epic-word-search-collection-2-psvita-1',
'epic-word-search-collection-2-ps4-1',
'pretty-girls-panic-plus-ps5',
'pretty-girls-panic-plus-ps4',
'guard-duty-psvita',
'guard-duty-ps4-1',
'glo-ps5-2',
'glo-ps4-2',
'lady-in-a-leotard-with-a-gun-ps4-1',
'amnesia-memories-psvita',
'evil-inside-ps5',
'evil-inside-ps4',
'awesome-pea-2-psvita',
'awesome-pea-2-ps4-1',
'fast-striker-psvita-2',
'fast-striker-ps4',
'rabisco-ps4-1',
'epic-word-search-collection-psvita-1',
'zippy-the-circle-level-11-level-12-and-level-13-ps4-1',
'pic-a-pix-classic-2-psvita-2',
'pic-a-pix-classic-2-ps4-2',
'thy-sword-psvita',
'thy-sword-ps4-1',
'micetopia-ps4',
'akinofa-ps4',
'distraint-2-ps4',
'mufuu_doujin/brave-match-ps4-1',
'zippy-the-circle-level-8-level-9-and-level-10-ps4-1',
'reflection-of-mine-ps4-1',
'more-dark-ps4',
'jet-set-knights-ps4',
'doodle-kingdom-psvita-1',
'doodle-kingdom-ps3-1',
'normans-great-illusion-psvita-1',
'normans-great-illusion-ps4',
'doodle-god-psvita-1',
'rift-racoon-ps5-2',
'rift-racoon-ps4',
'vasilis-psvita-1',
'zippy-the-circle-level-5-level-6-and-level-7-ps4-1',
'doodle-devil-psvita-1',
'pretty-girls-mahjong-solitaire-ps5-3',
'pretty-girls-mahjong-solitaire-ps4',
'brotherhood-united-psvita-2',
'brotherhood-united-ps4-2',
'zippy-the-circle-level-3-and-level-4-ps4-1',
'jigsaw-finale-ps4-1',
'reverie-psvita',
'reverie-ps4-1',
'ultra-mission-psvita-1',
'crisis-wing-ps5-2',
'crisis-wing-ps4-2',
'zippy-the-circle-level-1-and-level-2-ps4-1',
'frogger-returns-ps3',
'delicious-pretty-girls-mahjong-solitaire-ps5-2',
'rally-racing-ps5',
'rally-racing-ps4-1',
'roundout-by-powgi-ps4-1',
'highschool-romance-ps5-1',
'highschool-romance-ps4',
'ganbare-super-strikers-psvita-2',
'ganbare-super-strikers-ps4',
'skatemasta-tcheco-ps5-2',
'skatemasta-tcheco-ps4-1',
'timbermanvs-ps4-1',
'snakes-and-ladders-ps4-1',
'pillar-puzzle-escape-ps4-2',
'nextgen-sandbox-ps4',
'get-to-the-top-breakthrough-gaming-arcade-ps4-1',
'catch-the-bowling-balls-breakthrough-gaming-arcade-ps4-1',
'racing-breakthrough-gaming-arcade-ps4',
'skateboarding-breakthrough-gaming-arcade-ps4',
'space-breakthrough-gaming-arcade-ps4-1',
'poker-pretty-girls-battle-texas-holdem-ps5',
'poker-pretty-girls-battle-texas-holdem-ps4',
'mekorama-psvita',
'mekorama-ps4-1',
'alphaset-by-powgi-psvita-1',
'alphaset-by-powgi-ps4-1',
'rememoried-ps4',
'grand-museum-vr-ps4-1',
'bullet-beat-ps4-1',
'sinuca-attack-ps4',
'zj-the-ball-level-5-ps4-1',
'football-breakthrough-gaming-arcade-ps4',
'track-challenge-mode-edition-breakthrough-gaming-arcade-ps4-1',
'track-breakthrough-gaming-arcade-ps4-1',
'bishoujo-battle-cyber-panic-ps5-3',
'legend-of-the-skyfish-psvita',
'legend-of-the-skyfish-ps4',
'project-starship-x-ps4-1',
'zj-the-ball-level-4-ps4-1',
'newtonian-inversion-ps4-1',
'koi-psvita',
'christmas-break-2-head-to-head-ps4-1',
'sakura-swim-club-ps4-1',
'sakura-swim-club-ps5',
'sushi-break-2-ps4-1',
'c14-dating-ps4',
'without-escape-ps5-2',
'c14-dating-ps5',
'shinrai-broken-beyond-despair-ps5',
'shinrai-broken-beyond-despair-ps4',
'quick-mafs-ps5-1',
'quick-mafs-ps4-1',
'sushi-break-2-head-to-head-ps4-1',
'christmas-break-2-ps4-1',
'sushi-break-ps5-1',
'space-break-2-head-to-head-ps4-1',
'sakura-nova-ps5',
'sakura-nova-ps4',
'mochi-mochi-boy-psvita',
'mochi-mochi-boy-ps4-1',
'zeroptian-invasion-ps4-1',
'five-nights-at-freddys-4-ps4',
'bouncy-bullets-2-ps4',
'bouncy-bullets-2-ps5',
'cave-bad-ps5',
'puzzle-frenzy-ps4-1',
'aery-little-bird-adventure-ps4-1',
'actual-sunlight-psvita',
'planet-rix-13-ps4-psvita-3',
'foxyland-psvita-1',
'foxyland-ps4',
'five-nights-at-freddys-3-ps4',
'planet-rix-13-ps4-psvita-1',
'black-the-fall-ps4-1',
'twin-robots-ps4-psvita-1',
'neon-junctions-psvita',
'neon-junctions-ps4',
'battle-rockets-2-0-psvita-1',
'iron-snout-psvita',
'aer-ps4',
'iron-snout-ps4',
'word-wheel-by-powgi-psvita-1',
'sigi-a-fart-for-melusina-ps4-psvita-1',
'attack-of-the-toy-tanks-psvita',
'attack-of-the-toy-tanks-ps4',
'crossovers-by-powgi-psvita-1',
'crossovers-by-powgi-ps4-1',
'bird-game-ps4',
'mixups-by-powgi-psvita-1',
'mixups-by-powgi-ps4-1',
'sigi-a-fart-for-melusina-ps4-psvita-3',
'super-weekend-mode-psvita-1',
'metagal-psvita',
'storm-boy-ps4-1',
'peasant-knight-psvita',
'albedo-eyes-from-outer-space-ps4-1',
'daggerhood-psvita',
'energy-cycle-edge-ps4-psvita-2',
'energy-cycle-edge-ps4-psvita-3',
'access-denied-psvita',
'energy-cycle-ps4-psvita',
'squareboy-vs-bullies-psvita',
'drowning-ps4-psvita-3',
'drowning-ps4-psvita',
'spiral-splatter-ps4-psvita',
'north-ps4-psvita-3',
'heroes-trials-psvita',
'heroes-trials-ps4-1',
'alteric-ps4-psvita-2',
'one-word-by-powgi-psvita-1',
'one-word-by-powgi-ps4-1',
'word-sudoku-by-powgi-psvita-1',
'energy-invasion-ps4-psvita-3',
'energy-cycle-ps4-psvita-1',
'energy-balance-ps4-psvita-1',
'devious-dungeon-psvita-1',
'league-of-evil-psvita-1',
'tetras-escape-psvita-1',
'inksplosion-psvita-1',
'midnight-deluxe-psvita-1',
'super-destronaut-dx-psvita',
'its-spring-again-ps4-psvita',
'dark-mystery-ps4',
'orc-slayer-ps4-1',
'hex-tunnel-touch-ps4-1',
'word-search-by-powgi-ps4-1',
'word-sudoku-by-powgi-ps4-1',
'league-of-evil-ps4-1',
'doodle-devil-ps3-1',
'doodle-god-ps3-1',
'doodle-god-ps4-1',
'super-destronaut-dx-ps4',
'devious-dungeon-ps4-1',
'demetrios-ps4',
'energy-invasion-ps4-psvita-1',
'dying：-reborn-ps4-1',
'doodle-kingdom-ps4-1',
'koi-ps4',
'inksplosion-ps4-1',
'minefield-ps4',
'energy-balance-ps4-psvita',
'jolt-family-robot-racer-ps4',
'squareboy-vs-bullies-ps4-1',
'obduction-ps4',
'suicide-guy-ps4-1',
'zeus-quest-remastered-ps4',
'midnight-deluxe-ps4-2',
'36-fragments-of-midnight-ps4',
'inner-world-the-last-wind-monk-ps4-1',
'inner-world-ps4',
'rocketsrocketsrockets-ps4-1',
'hellblade-senuas-sacrifice-ps4-1',
'jazzpunk-ps4',
'mecho-tales-ps4',
'world-of-nubla-ps4-1',
'nubla-ps4-1',
'chromagun-ps4-1',
'blackwood-crossing-ps4-1',
'sound-shapes-ps4',
'grass-cutter-ps4',
'pity-pit-ps4',
'bucket-knight-psvita',
'hex-tunnel-ps4',
'bucket-knight-ps4-1',
'knightin-psvita-1',
'knightin-ps4',
'many-faces-ps4-2',
'inferno-2-ps4-1',
'task-force-kampas-ps4',
'toren-ps4',
'betty-bat-ps4',
'personality-and-psychology-premium-ps4',
'astrology-and-horoscope-premium-ps4-1',
'breeder-homegrown-directors-cut-psvita-1',
'breeder-homegrown-directors-cut-ps4-1',
'briks-2-ps4-1',
'paranormal-activity-ps4',
'explosive-jake-psvita-2',
'blind-men-psvita-1',
'blind-men-ps4-1',
'rush-rover-psvita-1',
'random-heroes-gold-edition-psvita',
'null-drifter-ps4',
'sagebrush-ps4-1',
'word-maze-by-powgi-ps4',
'cybarian-the-time-travelling-warrior-ps4',
'word-maze-by-powgi-psvita-1',
'cybarian-the-time-travelling-warrior-psvita',
'duck-souls-psvita',
'duck-souls-ps4',
'super-destronaut-land-wars-ps4-1',
'super-destronaut-land-wars-psvita-1',
'red-death-ps4-1',
'super-korotama-ps4',
'what-remains-of-edith-finch-ps4',
'project-starship-ps4-2',
'just-ignore-them-psvita',
'just-ignore-them-ps4',
'super-box-land-demake-psvita',
'super-box-land-demake-ps4-1',
'red-bow-psvita-1',
'red-bow-ps4',
'save-the-ninja-clan-ps4-psvita',
'path-of-motus-ps4',
'paradox-soul-ps4',
'paradox-soul-psvita',
'mekabolt-psvita',
'mekabolt-ps4-1',
'briks-ps4-1',
'stretch-ps4-2',
'tic-tac-letters-by-powgi-psvita-1',
'tic-tac-letters-by-powgi-ps4-1',
'dying：-reborn-psvita-1',
'iro-hero-ps4-2',
'survive-mr-cube-ps4-1',
'without-escape-ps4-2',
'reed-remastered-ps4',
'syrup-and-the-ultimate-sweet-ps4',
'reed-remastered-psvita-1',
'syrup-and-the-ultimate-sweet-psvita-1',
'without-escape-psvita-2',
'himno-psvita',
'himno-ps4',
'zero-zero-zero-zero-psvita-1',
'zero-zero-zero-zero-ps4',
'awesome-pea-psvita-1',
'donut-county-ps4',
'awesome-pea-ps4-1',
'bouncy-bullets-psvita-1',
'back-in-1995-psvita',
'milos-quest-psvita-1',
'winters-daydream-psvita',
'foxyland-2-psvita-1',
'foxyland-2-ps4',
'back-in-1995-ps4-1',
'milos-quest-ps4-1',
'winters-daydream-ps4-1',
'√letter-psvita-3',
'√letter-ps4-3',
'deep-space-rush-psvita',
'mecho-tales-psvita',
'gravity-duck-psvita',
'walking-dead-the-final-season-ps4-1',
'hoggy2-psvita-1',
'my-big-sister-psvita',
'just-a-phrase-by-powgi-psvita-2',
'just-a-phrase-by-powgi-ps4-1',
'super-wiloo-demake-psvita',
'thunder-paw-ps4-1',
'thunder-paw-psvita',
'super-wiloo-demake-ps4-1',
'black-white-bushido-ps4',
'my-big-sister-ps4-1',
'gun-crazy-ps4',
'gorogoa-ps4',
'random-heroes-gold-edition-ps4-1',
'grizzland-ps4-1',
'explosive-jake-ps4-1',
'vasilis-ps4',
'rush-rover-ps4-1',
'memory-lane-ps4',
'epic-word-search-collection-ps4-1',
'even-the-ocean-ps4',
'flowers-are-dead-ps4',
'nicole-ps4-1',
'crypto-by-powgi-psvita',
'theme-park-simulator-ps4-1',
'crypto-by-powgi-ps4-1',
'steinsgate-ps3-4',
'112th-seed-ps4',
'football-game-ps4',
'big-dipper-psvita',
'ultra-hat-dimension-ps4-1',
'prehistoric-dude-ps4-1',
'tarot-readings-premium-ps4',
'warlocks-tower-psvita-1',
'warlocks-tower-ps4-1',
'jisei-ps4',
'palm-reading-premium-ps4',
'maitetsupure-station-ps4',
'nekopara-vol-3-ps4-1',
'worldend-syndrome-ps4-1',
'discovery-ps4',
'erica-ps4',
'reed-2-psvita-1',
'jigsaw-abundance-ps4',
'castle-pals-ps4-1',
'clash-force-ps4-1',
'summer-with-the-shiba-inu-ps4-1',
'strawberry-vinegar-ps4-1',
'fifty-words-by-powgi-psvita-1',
'football-game-psvita',
'snake-boat-otterrific-arcade-ps4',
'swordbreaker-the-game-ps4-1',
'swordbreaker-the-game-psvita',
'road-bustle-ps4',
'angels-with-scaly-wings-ps4',
'chickens-on-the-road-ps4-2',
'violetti-goottii-ps4-1',
'pantsu-hunter-back-to-the-90s-ps4',
'hiq-ace-unlimited-ps4',
'chaoschild-psvita-4',
'chaoschild-ps4-4',
'takotan-ps4-1',
'octonaut-ps4',
'birthday-of-midnight-ps4',
'fifty-words-by-powgi-ps4-1',
'radio-squid-ps4-1',
'active-neurons-puzzle-game-ps4-1',
'moss-ps4-1',
'steinsgate-psvita-3',
'how-we-soar-ps4-1',
'reed-2-ps4',
'coolpaintr-ps4-2',
'jigsaw-solace-ps4',
'zero-strain-ps4',
'hero-and-a-garden-ps4',
'golf-zero-ps4',
'robozarro-ps4',
'jackquest-ps4',
'language-of-love-ps4',
'pantsu-hunter-back-to-the-90s-psvita',
'storytale-ps4',
'whiteboyz-wit-attitude-the-pursuit-of-money-ps4',
'3d-dot-game-heroes-ps3',
'99vidas-ps4-ps3-psvita',
'adventures-of-tintin-ps3',
'aegis-of-earth-protonovus-assault-ps4-ps3-psvita',
'arcana-heart-3-love-max-ps3',
'armored-core-v-ps3-1',
'energy-cycle-ps5-1',
'root-film-ps4-1',
'cats-of-war-ps5',
'spectrewoods-ps4-1',
'alien-destroyer-ps4-1',
'catsofwar-ps4',
'suicide-guy-ps4-3',
'rogue-explorer-ps5-3',
'rogue-explorer-ps4-3',
'through-the-woods-ps4-1',
'sakura-succubus-3-ps4',
'sakura-succubus-4-ps4-1',
'sakura-succubus-4-ps5-1',
'donutsnjustice-ps5-1',
'donutsnjustice-ps4-1',
'sables-grimoire-ps4-1',
'sables-grimoire-ps5',
'cross-the-moon-ps4-1',
'cross-the-moon-ps5-1',
'dating-life-miley-x-emily-ps5-1',
'dating-life-miley-x-emily-ps4-1',
'pizza-break-ps4-1',
'dragon-break-classic-head-to-head-ps4-1',
'unicorn-break-head-to-head-ps4-1',
'taco-break-head-to-head-ps4-1',
'reminiscence-in-the-night-ps4',
'reminiscence-in-the-night-ps5',
'super-destronaut-dx-2-ps4-1',
'super-destronaut-dx-2-ps5-1',
'super-weekend-mode-ps4-1',
'36-fragments-of-midnight-psvita',
'hajwala-ps4-1',
'concept-destruction-ps4-1',
'five-nights-at-freddys-ps4',
'word-wheel-by-powgi-ps4-1',
'fullblast-psvita-1',
'fullblast-ps4-1',
'jack-n-jill-dx-ps4-1',
'jack-n-jill-dx-psvita-2',
'north-ps4-psvita',
'maze-pedestal-of-trials-ps4',
'metagal-ps4',
'daggerhood-ps4-1',
'barry-the-bunny-ps5-1',
'rabisco-ps5-1',
'mina-michi-ps4',
'mina-michi-ps5',
'space-revenge-ps5',
'space-revenge-ps4',
'darker-skies-ps5-1',
'ancient-stories-gods-of-egypt-ps4-1',
'peasant-knight-ps4-1',
'gravity-duck-ps4',
'access-denied-ps4',
'vera-blanc-ghost-in-the-castle-ps4',
'ladders-by-powgi-ps4-1',
'ladders-by-powgi-ps5-1',
'funny-truck-ps4-1',
'vera-blanc-full-moon-ps4',
'independence-day-break-head-to-head-ps4-1',
'alteric-ps4-psvita',
'bouncy-bullets-ps4-1',
'roguecube-ps4',
'spiral-splatter-ps4-psvita-2',
'deep-space-rush-ps4',
'doodle-devil-ps4-1',
'zombo-buster-rising-ps4-1',
'blitz-breaker-ps5',
'blitz-breaker-ps4',
'tokyo-run-ps4-2',
'bai-qu-hundreds-of-melodies-ps5-1',
'bai-qu-hundreds-of-melodies-ps4',
'nowhere-girl-ps5-1',
'nowhere-girl-ps4-1',
'one-night-stand-ps4-1',
'crimson-spires-ps4-1',
'crimson-spires-ps5-1',
'gaps-by-powgi-ps5-2',
'gaps-by-powgi-ps4-2',
'barry-the-bunny-ps4-1',
'sushi-break-ps4-1',
'sushi-break-head-to-head-ps4',
'halloween-candy-break-ps4-1',
'halloween-candy-break-head-to-head-ps4-1',
'halloween-candy-break-2-ps4-1',
'halloween-candy-break-2-head-to-head-ps4-1',
'horror-break-ps4-1',
'horror-break-head-to-head-ps4-1',
'dragon-break-classic-ps4-1',
'pizza-break-head-to-head-ps4-1',
'donut-break-ps4',
'donut-break-head-to-head-ps4-1',
'donut-break-2-ps4-1',
'ascendshaft-and-endless-shaft-ps4-1',
'ascendshaft-ps4',
'donut-break-2-head-to-head-ps4-1',
'oktoberfest-break-ps4-1',
'oktoberfest-break-head-to-head-ps4-1',
'taco-break-ps4-1',
'valentine-candy-break-ps4',
'valentine-candy-break-head-to-head-ps4',
'christmas-break-ps4-1',
'christmas-break-head-to-head-ps4-1',
'easter-candy-break-ps4-1',
'easter-candy-break-head-to-head-ps4-1',
'unicorn-break-ps4-1',
'space-break-ps4-1',
'space-break-head-to-head-ps4-1',
'space-break-2-ps4',
'independence-day-break-ps4-1',
'saint-patricks-day-break-ps4-1',
'saint-patricks-day-break-head-to-head-ps4',

];
const arrayAS = [
'golf-zero-ps4-2',
'candleman-ps4-1',
'awesome-pea-2-ps4-2',
'alphaset-by-powgi-ps4-2',
'gun-crazy-ps4-2',
'breeder-homegrown-directors-cut-ps4-2',
'vera-blanc-full-moon-ps4-2',
'vera-blanc-ghost-in-the-castle-ps4-2',
'crimson-spires-ps4-2',
'crimson-spires-ps5-2',
'epic-word-search-collection-ps4-2',
'epic-word-search-collection-psvita-2',
'concept-destruction-ps5-1',
'20-bunnies-ps4-1',
'20-bunnies-ps5-1',
'lost-in-the-rain-ps3',
'i-am-the-hero-psvita-2',
'robozarro-ps4-2',
'task-force-kampas-psvita-1',
'funny-truck-ps4-2',
'without-escape-ps5-1',
'winters-daydream-ps4-2',
'venus-improbable-dream-ps4-2',
'venus-improbable-dream-ps5-2',
'tetras-escape-ps4-2',
'winters-daydream-psvita-2',
'grass-cutter-psvita-2',
'blind-men-ps4-2',
'gravity-duck-psvita-2',
'gravity-duck-ps4-2',
'mochi-mochi-boy-psvita-2',
'warlocks-tower-psvita-2',
'mochi-mochi-boy-ps4-2',
'zeroptian-invasion-psvita-2',
'zeroptian-invasion-ps4-2',
'foxyland-psvita-2',
'foxyland-ps4-2',
'neon-junctions-psvita-2',
'neon-junctions-ps4-2',
'iron-snout-psvita-2',
'iron-snout-ps4-2',
'attack-of-the-toy-tanks-psvita-2',
'attack-of-the-toy-tanks-ps4-2',
'word-sudoku-by-powgi-ps4-2',
'word-sudoku-by-powgi-psvita-2',
'bird-game-ps4-2',
'energy-invasion-psvita',
'energy-invasion-ps4',
'energy-balance-psvita',
'energy-balance-ps4',
'energy-cycle-psvita',
'energy-cycle-ps4',
'energy-cycle-edge-ps4',
'energy-cycle-edge-psvita',
'heroes-trials-psvita-2',
'heroes-trials-ps4-2',
'metagal-psvita-2',
'super-weekend-mode-psvita-2',
'metagal-ps4-2',
'super-weekend-mode-ps4-2',
'peasant-knight-psvita-1',
'peasant-knight-ps4-2',
'daggerhood-psvita-2',
'daggerhood-ps4-2',
'access-denied-ps4-2',
'access-denied-psvita-1',
'devious-dungeon-psvita-2',
'league-of-evil-psvita-2',
'36-fragments-of-midnight-psvita-2',
'tetras-escape-psvita-2',
'inksplosion-psvita-2',
'super-destronaut-dx-psvita-2',
'midnight-deluxe-psvita-2',
'league-of-evil-ps4-2',
'devious-dungeon-ps4-2',
'36-fragments-of-midnight-ps4-2',
'inksplosion-ps4-2',
'midnight-deluxe-ps4-1',
'sound-shapes-ps4-2',
'explosive-jake-psvita-1',
'explosive-jake-ps4-2',
'random-heroes-gold-edition-psvita-2',
'random-heroes-gold-edition-ps4-2',
'grizzland-ps4-2',
'null-drifter-ps4-1',
'cybarian-the-time-travelling-warrior-ps4-2',
'cybarian-the-time-travelling-warrior-psvita-2',
'duck-souls-psvita-1',
'duck-souls-ps4-2',
'super-destronaut-land-wars-ps4-2',
'super-destronaut-land-wars-psvita-2',
'red-death-ps4',
'project-starship-ps4-1',
'super-box-land-demake-psvita-2',
'super-box-land-demake-ps4-2',
'red-bow-psvita-2',
'red-bow-ps4-2',
'crossovers-by-powgi-psvita-2',
'crossovers-by-powgi-ps4-2',
'paradox-soul-psvita-2',
'paradox-soul-ps4-2',
'mekabolt-psvita-2',
'mekabolt-ps4-2',
'word-maze-by-powgi-psvita-2',
'word-maze-by-powgi-ps4-2',
'stretch-ps4-1',
'one-night-stand-ps4-2',
'tic-tac-letters-by-powgi-psvita-2',
'tic-tac-letters-by-powgi-ps4-2',
'one-word-by-powgi-psvita-2',
'iro-hero-ps4',
'reed-remastered-psvita',
'one-word-by-powgi-ps4-2',
'reed-remastered-ps4-2',
'syrup-and-the-ultimate-sweet-psvita-2',
'syrup-and-the-ultimate-sweet-ps4-2',
'without-escape-ps4',
'without-escape-psvita',
'himno-psvita-2',
'himno-ps4-2',
'zero-zero-zero-zero-psvita',
'zero-zero-zero-zero-ps4-2',
'back-in-1995-psvita-3',
'milos-quest-psvita-2',
'foxyland-2-psvita-2',
'foxyland-2-ps4-2',
'back-in-1995-ps4-2',
'milos-quest-ps4-2',
'reverie-ps4',
'reverie-psvita-2',
'bouncy-bullets-psvita-2',
'bouncy-bullets-ps4',
'deep-space-rush-ps4-2',
'deep-space-rush-psvita-1',
'crypto-by-powgi-psvita-2',
'crypto-by-powgi-ps4-2',
'clash-force-ps4-2',
'bucket-knight-ps4-2',
'knightin-ps4-2',
'knightin-psvita-2',
'pantsu-hunter-back-to-the-90s-psvita-2',
'many-faces-ps4-1',
'task-force-kampas-ps4-2',
'pantsu-hunter-back-to-the-90s-ps4-2',
'hoggy2-psvita-2',
'hoggy2-ps4-2',
'i-am-the-hero-ps4-2',
'just-a-phrase-by-powgi-psvita',
'just-a-phrase-by-powgi-ps4',
'super-wiloo-demake-psvita-2',
'thunder-paw-ps4-2',
'thunder-paw-psvita-2',
'super-wiloo-demake-ps4-2',
'blind-men-psvita',
'112th-seed-ps4-3',
'road-bustle-ps4-2',
'jisei-ps4-2',
'prehistoric-dude-ps4-2',
'squareboy-vs-bullies-ps4-2',
'mixups-by-powgi-psvita-2',
'castle-pals-ps4-2',
'summer-with-the-shiba-inu-ps4-2',
'strawberry-vinegar-ps4-2',
'pity-pit-ps4-2',
'word-wheel-by-powgi-psvita-2',
'bucket-knight-psvita-2',
'awesome-pea-ps4-2',
'fifty-words-by-powgi-psvita-2',
'football-game-psvita-2',
'wordsweeper-by-powgi-psvita-2',
'wordsweeper-by-powgi-ps4-2',
'football-game-ps4-2',
'fifty-words-by-powgi-ps4-2',
'word-wheel-by-powgi-ps4-2',
'mixups-by-powgi-ps4-2',
'awesome-pea-psvita-2',
'alteric-ps4',
'alteric-psvita',
'grass-cutter-ps4-2',
'synergia-ps4',
'drowning-psvita',
'drowning-ps4',
'chickens-on-the-road-ps4-1',
'octonaut-ps4-3',
'takotan-ps4-2',
'radio-squid-ps4-2',
'concept-destruction-ps4-2',
'nicole-ps4-2',
'夢現remaster-ps4-psvita',
'yumeutsutsu-reafter-ps4-psvita',
'reed-2-ps4-2',
'zero-strain-ps4-2',
'hero-and-a-garden-ps4-2',
'ドラゴンクエスト-ps4',
'akibas-trip-2-獎盃組-ps3',
'armored-core-v-ps3-3',
'super-korotama-ps4-2',
'sigi-a-fart-for-melusina-psvita',
'sigi-a-fart-for-melusina-ps4',
'planet-rix-13-psvita',
'planet-rix-13-ps4',
'autumns-journey-ps4-2',
'fullblast-psvita-2',
'fullblast-ps4-2',
'jack-n-jill-dx-psvita',
'jack-n-jill-dx-ps4',
'super-destronaut-dx-ps4-2',
];
const arrayHK = [
'chaoschild-psvita-2',
'steinsgate-ps3-1',
'放逐選舉-ps4',
'√letter-方根書簡-ps4',
'obduction-ps4-2',
'aer-ps4-2',
'icey-ps4',
'chaoschild-ps4-2',
'survive-mr-cube-ps4-3',
];
const arrayJP = [
'crisis-wing-ps5-3',
'rewrite-psvita',
'cross†channel-～for-all-people～-ps3',
'cross†channel-～for-all-people～-psvita',
'dynamic-chord-feat-liar-s-v-edition-psvita',
'dynamic-chord-feat-rêve-parfait-v-edition-psvita',
'end-sleep-psvita',
'galtia-v-edition-psvita',
'rewrite-ps3',
'フユキス-ps4',
'パルフェリメイク-ps4',
'シンスメモリーズ-星天の下で-ps4',
'殺人探偵ジャック・ザ・リッパー-ps4',
'神様のような君へ-ps4',
'112th-seed-ps5',
'void-gore-ps4-2',
'year-of-springs-ps4',
'year-of-springs-ps5',
'アーキタイプ・アーカディア-ps5',
'アーキタイプ・アーカディア-ps4',
'zero-strain-ps5-1',
'rewrite-ps4',
'メモリーズオフ-innocent-fille-%e3%80%80ノエル-fullbloom-ps4',
'サクラ･サキュバス２-～止まらぬ出会い～-ps5',
'サクラ･サキュバス２-～止まらぬ出会い～-ps4',
'melty-moment-psvita',
'月影の鎖-狂爛モラトリアム-psvita',
'月影の鎖-錯乱パラノイア-psvita',
'セヴンデイズ-あなたとすごす七日間-psvita',
'フォルティッシモ-ps3-psvita',
'ノラと皇女と野良猫ハート2-ps4-psvita',
'ノラと皇女と野良猫ハート2-ps4-psvita-1',
'ノラと皇女と野良猫ハート-ps4-psvita',
'ノラと皇女と野良猫ハート-hd-ps4-psvita',
'プラマイウォーズv-psvita',
'ラッキードッグ１-psvita',
'魔女こいにっき-dragonxcaravan-psvita',
'絶対階級学園-psvita',
'ひとつ飛ばし恋愛ｖ-psvita',
'charademaniacs-psvita',
'双子座のパラドクス-psvita',
'binarystar-psvita',
'クランク・イン-psvita',
'殺し屋とストロベリー-psvita',
'サクラ・サキュバス-～モテ期は唐突に～-ps4',
'サクラ・サキュバス-～モテ期は唐突に～-ps5',
'タリアの伝説-女騎士アルカディア-ps5',
'プライミニスター-psvita',
'clannad-ps4',
'dramatical-murder-recode-psvita',
'薄桜鬼ssl-～sweet-school-life～-psvita',
'タリアの伝説-女騎士アルカディア-ps4',
'雷子‐紺碧の章‐-psvita',
'雷子-psvita',
'starry☆sky～spring-stories～-psvita',
'starry☆sky～winter-stories～-psvita',
'starry☆sky～autumn-stories～-psvita',
'norn9-act-tune-psvita',
'帝国海軍恋慕情～明治横須賀行進曲～-psvita',
'穢翼のユースティア-angels-blessing-psvita',
'百華夜光-psvita',
'ゆのはなspring！-psvita',
'ゆのはなspring！～cherishing-time～-psvita',
'熱血異能部活譚-trigger-kiss-psvita',
'越えざるは紅い花～恋は月に導かれる～-psvita',
'果つることなき未来ヨリ-psvita',
'あまつみそらに！-雲のはたてに-psvita',
'彼女（あのコ）はオレからはなれない-psvita',
'彼女（あのコ）はオレからはなれない-ps4',
'猛獣たちとお姫様-psvita',
'猛獣たちとお姫様-～in-blossom～-psvita',
'code：realize-～白銀の奇跡～-ps4',
'code：realize-～彩虹の花束～-ps4',
'code：realize-～創世の姫君～-psvita',
'code：realize-～祝福の未来～-psvita',
'code：realize-～白銀の奇跡～-psvita',
'clannad-psvita',
'clannad-ps3',
'巫女学校物語～楓編-ps4',
'吉原彼岸花-久遠の契り-psvita',
'ヴァルプルガの詩-psvita',
'軍靴をはいた猫-psvita',
'大正x対称アリス-all-in-one-psvita',
'大正x対称アリス-heads-tails-psvita',
'忍び、恋うつつ-―-甘蜜花絵巻-―-psvita',
'忍び、恋うつつ-―-雪月花恋絵巻-―-psvita',
'貴方の仮面の外し方★リマスター版-ps4',
'flowers-四季-ps4',
'flowers冬篇-psvita',
'flowers秋篇-psvita',
'flowers夏篇-psvita',
'flowers-psvita',
'klap-～kind-love-and-punish～-psvita',
'klap-～kind-love-and-punish～-fun-party-psvita',
'白と黒のアリス-psvita',
'白と黒のアリス-twilight-line-psvita',
'鏡界の白雪-psvita',
'数乱digit-psvita',
'アイキス2-ps4',
'unbirthday-song～愛を唄う死神～another-record-psvita',
'rebirthday-song～恋を唄う死神～another-record-psvita',
'５人の恋プリンス～ヒミツの契約結婚～-psvita',
'マジきゅんっ！%e3%80%80ルネッサンス-psvita',
'白衣性恋愛症候群-retherapy-psvita',
'白衣性愛情依存症-psvita',
'sweet-pool-psvita',
'らぶおぶ恋愛皇帝-of-love！-psvita',
'punchline-ps4',
'punchline-psvita',
'friend-to-lover-～フレラバ～-psvita',
'鯨神のティアスティラ-psvita',
'air-psvita',
'グリザイアの果実-side-episode-psvita',
'グリザイアの果実-le-fruit-de-la-grisaia-psvita',
'グリザイア-ファントムトリガー-０３＆０４-psvita',
'グリザイア-ファントムトリガー-０１＆０２-psvita',
'となりに彼女のいる幸せ-～two-farce～-ps4-psvita',
'ハロー・レディ！-superior-dynamis-psvita',
'初情スプリンクル-psvita',
'キスベル-psvita',
'カルマルカ＊サークル-psvita',
'月に寄りそう乙女の作法-～ひだまりの日々～-psvita',
'キスアト-psvita',
'はつゆきさくら-psvita',
'脱出ゲーム-aloha-ハワイの海に浮かぶ家-ps4',
'ドリームクラブホストガール%e3%80%80オンステージ-ps4',
'サクラ･サキュバス３-～魔性の支配者～-ps4',
'hentai-vs-evil-ps5-3',
'hentai-vs-evil-ps4-3',
'ジンキ・リザレクション-ps4',
'うみねこのなく頃に咲-～猫箱と夢想の交響曲～-ps4',
'かけぬけ★青春スパーキング！-ps4',
'eスクールライフ-ps4',
'ハミダシクリエイティブ-ps4',
'sugarstyle-ps4',
'大図書館の羊飼い-library-party-ps4',
'love-choice-愛の選択-ps5',
'love-choice-愛の選択-ps4',
'タコリタ・ミーツ・ポテト-ps5',
'タコリタ・ミーツ・ポテト-ps4',
'アイドルカフェを経営しませんか？-ps5',
'サクラ水泳部-～転校生の決意～-ps4',
'サクラ水泳部-～転校生の決意～-ps5',
'アイドルカフェを経営しませんか？-ps4',
'フルキスs-ps4',
'真-流行り神２-ps4',
'追放選挙-psvita',
'robozarro-ps4-3',
'fatestay-night-realta-nua-psvita',
'追放選挙-ps4',
'なないろリンカネーション-psvita',
'祝姫-祀-psvita',
'祝姫-祀-ps4',
'新装版魔法使いとご主人様～wizard-and-the-master～-psvita',
'バースデー・オブ・ミッドナイト-ps4',
'zero-strain-ps4-3',
'√letter-last-answer-psvita',
'null-drifter-ps4-3',
'red-death-ps4-3',
'super-destronaut-dx-intruders-edition-psvita',
'ドリームクラブホストガール%e3%80%80オンステージ-ps4',
'グリザイアの楽園-le-eden-de-la-grisaia-psvita',
'obduction-ps4-3',
'ダイイングリボーン-psvita',
'steinsgate-elite-psvita',
'ダイイングリボーン-ps4',
'iro-hero-ps4-3',
'survive-mr-cube-ps4-2',
'metagal-psvita-3',
'マンガ・カ・ケール-ps4',
'back-in-1995-psvita-2',
'back-in-1995-ps4-3',
'tear-終わりとはじまりの雫-ps4',
'metagal-ps4-3',
'rayman-origins-ps3-2',
'√letter-psvita',
'√letter-ps4',
'steinsgate-0-psvita',
'steinsgate-0-ps3',
'steinsgate-0-ps4-ps3-psvita',
'believer！-psvita',
'grizzland-ps4-3',
'112th-seed-ps4-2',
'bioshock-ps3-1',
'ni-no-kuni-wrath-of-the-white-witch-remastered-ps4-1',
'ni-no-kuni-wrath-of-the-white-witch-ps3',
'sound-shapes-ps4-3',
'task-force-kampas-psvita',
'bioshock-2-remastered-ps4-1',
'fullblast-ps4-3',
'はつゆきさくら-ps4',
'アイカギ-きみと一緒にパック-ps4',
'アメイジング・グレイス-what-color-is-your-attribute-ps4',
'ホチキス-ps4-psvita',
'キスアト-ps4',
'キスベル-ps4-psvita',
'謎解きメール-ps4',
'worldend-ps4',
'albedo-eyes-from-outer-space-ps4-2',
'アオナツライン-ps4-psvita',
'メルキス-ps4-psvita',
'人気声優のつくりかた-ps4-psvita',
'ダイイングリボーンvr-ps4',
'フルキス-ps4-psvita',
'添いカノ-ps4-psvita',
'初情スプリンクル-ps4',
'アエリアル・ライフ-ps4-psvita',
'アイベヤ-ps4',
'アママネ-ps4-psvita',
'カルマルカ＊サークル-ps4',
'見鏡澄香の制服活動-ps4-psvita',
'フローラル・フローラブ-ps4-psvita',
'ボクと彼女の研修日誌-ps4-psvita',
'三色絵恋-tricolour-lovestory-ps4',
'タスクフォース-カンパス-ps4',
'キミの瞳にヒットミー-ps4-psvita',
'あざやかな彩りの中で、君らしく-ps4-psvita',
'makinglovers-ps4-psvita',
'hentai-vs-evil-ps5-3',
'hentai-vs-evil-ps4-3',
'金色ラブリッチェ-ps4-psvita',
'夢現reidol-ps4',
'present-for-you-psvita',
'グリザイアの迷宮-le-labyrinthe-de-la-grisaia-psvita',
'グリザイアの果実スピンアウト！？アイドル魔法-psvita',
'月に寄りそう乙女の作法-～ひだまりの日々～-ps4',
'bioshock-remastered-ps4-1',
'甘えかたは彼女なりに。-ps4-psvita',
'walking-dead-ps3-1',
'block-builder-dx-ps4',
'steinsgate-psvita',
'steinsgate-ps3',
'pity-pit-ps4-3',
'jackquest-ps4-2',
'サクラ･ノヴァ-～騎士学園物語～-ps4',
'サクラ･ノヴァ-～騎士学園物語～-ps5',
'aborigenus-ps4-2',
'starry☆sky～summer-stories～-psvita',
'hero-and-a-garden-ps4-3',
'幻想牢獄のカレイドスコープ-ps4',
'steinsgate-線形拘束のフェノグラム-ps3',
'steinsgate-線形拘束のフェノグラム-psvita',
'steinsgate-比翼恋理のだーりん-ps3',
'steinsgate-比翼恋理のだーりん-psvita',
'レイジングループ-ps4-ps3-psvita',
'reviced-psvita',
'キャプテン・アース-mind-labyrinth-psvita',
'toheart2-dx-plus-ps3',
'occulticnine-psvita',
'occulticnine-ps4',
'となりに彼女のいる幸せ-summer-surprise-ps4',
'アイカギ2-ps4',
'メイドさんのいる暮らし-ps4',
'chaoschild-らぶchu☆chu-ps4',
'chaoschild-らぶchu☆chu-psvita',
'roboticsnotes-ps3',
'roboticsnotes-elite-ps4',
'ラブクリア-ps4-psvita',
'chaoshead-らぶchu☆chu-psvita',
'chaoshead-らぶchu☆chu-ps3',
'chaoshead-noah-ps3',
'chaoshead-noah-psvita',
'd-c-4-～ダ・カーポ4～-ps4',
'ハロー・レディ！-superior-dynamis-ps4',
'最悪なる災厄人間に捧ぐ-ps4',
'roboticsnotes-dash-ps4',
'夜、灯す-ps4',
'chaoschild-ps4',
'chaoschild-ps3',
'chaoschild-psvita',
'takotan-ps4-3',
'デスマッチラブコメ！-ps4',
'steinsgate-elite-ps4',
'まいてつ-pure-station-ps4',
'絆きらめく恋いろは-ps4',
'alias-carnival-サクラメントプラス-ps4',
'スキとスキとでサンカク恋愛-ps4-ps3-psvita',
'd-s-dal-segno-ps4-psvita',
'リプキス-ps4-psvita',
'アイキス-ps4-psvita',
'月姫-a-piece-of-blue-glass-moon-ps4',
'clash-force-ps4-3',
'ゴルフ・ゼロ-ps4',
'pretty-girls-panic-ps4',
'pretty-girls-panic-ps5',
'ドラゴンクエスト無料版-ps4',
'3dドットゲームヒーローズ-ps3',
'50-cent-blood-on-the-sand-ps3',
'akb1149-恋愛総選挙（playstation3版）-ps3',
'akibas-trip-2-トロフィーセット-ps3',
'aquanauts-holiday-%e3%80%80～隠された記録～-ps3',
'armored-core-v-ps3',
'armored-core-verdict-day-ps3-1',
'army-of-two-the-40th-day-jp-ps3',
'アママネ2-ps4',
'トラベリングスターズ-traveling-stars-psvita',
'conan-outcasts-ps4',
'daggerhood-ps4-3',
'サクラ･サキュバス４-～真夏のハーレム休暇～-ps4',
'goes-psvita',
'fatal-twelve-ps4',
'メモリーズオフ-ps4',
'メモリーズオフ2nd-ps4',
'想い出にかわる君～メモリーズオフ～-ps4',
'メモリーズオフ～それから～-ps4',
'メモリーズオフ5-とぎれたフィルム-ps4',
'メモリーズオフ6～t-wave～-ps4',
'メモリーズオフ6-complete-ps3',
'メモリーズオフ6-complete-psvita',
'メモリーズオフ-ゆびきりの記憶-ps3',
'メモリーズオフ-ゆびきりの記憶-ps4',
'メモリーズオフ-innocent-fille-psvita',
'メモリーズオフ-innocent-fille-for-dearest-psvita',
'メモリーズオフ-innocent-fille-for-dearest-ps4',
'ラズベリーキューブ-ps4',
'恋愛、借りちゃいました-ps4',
'金色ラブリッチェ-golden-time-ps4',
'この素晴らしい世界に祝福を-この欲深いゲーム-ps4',
'おにあま-ps4',
'戦国恋姫-ps4',
'サクラ･サキュバス４-～真夏のハーレム休暇～-ps5',
'dating-life-マイリーエミリー-ps4',
'dating-life-マイリーエミリー-ps5',
'ニル・アドミラリの天秤-帝都幻惑綺譚-psvita',
'ニル・アドミラリの天秤-クロユリ炎陽譚-psvita',
'amnesia-world-psvita',
'reゼロから始める異世界生活-death-or-kiss-ps4',
'探偵神宮寺三郎-prism-of-eyes-ps4',
'あやかしごはん～おおもりっ！～-psvita',
'恋する乙女と守護の楯reboot-the-shield-9-ps4',
'レンドフルール-psvita',
'fate-hollow-ataraxia-psvita',
'いろとりどりのセカイ-worlds-end-rebirth-psvita',
'xblaze-lost-memories-psvita',
'marginal4-idol-of-supernova-psvita',
'薄桜鬼-黎明録-思馳せ空-psvita',
'amnesia-laterxcrowd-psvita',
'メモリーズオフ-innocent-fille-ps4',
'メモリーズオフ-ゆびきりの記憶-psvita',
'ペルソナ５-ダンシング・スターナイト-ps4-psvita',
'ペルソナ３-ダンシング・ムーンナイト-ps4-psvita',
'ペルソナ４-ダンシング・オールナイト-ps4',
'薄桜鬼-随想録-面影げ花-psvita',
'dynamic-chord-feat-kyohso-v-edition-psvita',
'アイカノ～雪空のトライアングル～-ps4',
'となりに彼女のいる幸せ-～curious-queen～-ps4',
'dynamic-chord-feat-apple-polisher-v-edition-psvita',
'古書店街の橋姫-々-psvita',
'カエル畑-ｄｅ-つかまえて・夏%e3%80%80千木良参戦！-psvita',
'サクラ･サキュバス３-～魔性の支配者～-ps5',
'爽海バッカニアーズ！-psvita',
'ひまわり-pebble-in-the-sky-psvita',
'late-shift-ps4-1',
'silverchains-ps4-1',
];
const arrayKR = [
'steinsgate-ps3-2',
'신-하야리가미2-psvita',
'추방선거-ps4',
'신-하야리가미2-ps4',
'steinsgate-psvita-1',
'steinsgate-0-psvita-1',
'survive-mr-cube-ps4',
'steinsgate-0-ps4',
'√letter-psvita-1',
'√letter-ps4-1',
'steinsgate-선형구속의-페노그램-ps3',
'steinsgate-선형구속의-페노그램-psvita',
'steinsgate-비익연리의-달링-ps3',
'steinsgate-비익연리의-달링-psvita',
'chaoschild-러브-chu☆chu-ps4',
'roboticsnotes-elite-psvita-2',
'chaoschild-psvita-1',
'chaoschild-ps4-1',
'콥스-파티-blood-drive-ps4-psvita',
];
const arrayCN = [
'raincity-ps4-1',
'临终：重生试炼-ps4',
'rayman-legends-ps4-1',
'koi-ps4-1',
'临终-重生试炼vr-ps4',
];
const arrayGR =[
'wolfenstein-the-new-order-ps4-1',
];
const arrayES =[
'',
];
const arrayRU =[
'rayman-origins-ps3-1',
];


const arrayDELISTED = [
'ドラゴンクエスト無料版-ps4',
'invector-ps4',
'will-a-wonderful-world-ps4-2',
'whiteboyz-wit-attitude-the-pursuit-of-money-ps4',
'whiteboyz-wit-attitude-the-pursuit-of-money-ps4-1',
'adams-venture-chronicles-ps3',
'grand-theft-auto-san-andreas-ps4',
'1000-top-rated-ps4',
'battle-rockets-psvita',
'octonaut-ps4-3',
'octonaut-ps4-1',
'octonaut-ps4',
];
const arrayPHYSICAL = [
'nicole-psvita',
'tales-from-the-borderlands-ps4-ps3',
'steinsgate-ps3-1',
'foxyland-2-psvita-3',
'just-ignore-them-psvita-2',
'task-force-kampas-psvita-4',
'foxyland-psvita-3',
];
const arrayDIGITAL = [
'tales-from-the-borderlands-ps4',
];
const arrayREMOVEVITA = [
'batman-arkham-origins-ps3-psvita',
'north-ps4-psvita-1',
'ホチキス-ps4-psvita',
'キスベル-ps4-psvita',
'save-the-ninja-clan-ps4-psvita-1',
'save-the-ninja-clan-ps4-psvita',
'steinsgate-0-ps4-ps3-psvita',
'planet-rix-13-ps4-psvita-1',
'planet-rix-13-ps4-psvita-2',
'sigi-a-fart-for-melusina-ps4-psvita-1',
'sigi-a-fart-for-melusina-ps4-psvita',
'energy-cycle-edge-ps4-psvita-2',
'energy-cycle-edge-ps4-psvita',
'drowning-ps4-psvita-1',
'drowning-ps4-psvita',
'creepy-road-ps4-psvita',
'creepy-road-ps4-psvita-1',
'deep-ones-ps4-psvita-1',
'deep-ones-ps4-psvita-2',
'energy-invasion-ps4-psvita',
'spiral-splatter-ps4-psvita-3',
'alteric-ps4-psvita',
'twin-robots-ps4-psvita-1',
'twin-robots-ps4-psvita-3',
'energy-cycle-ps4-psvita-2',
'alteric-ps4-psvita-1',
'skytime-ps4-psvita',
'skytime-ps4-psvita-1',
'energy-cycle-ps4-psvita',
'spiral-splatter-ps4-psvita-2',
'energy-invasion-ps4-psvita-1',
'energy-balance-ps4-psvita-2',
'energy-balance-ps4-psvita',
'mooseman-ps4-psvita-1',
'mooseman-ps4-psvita',
'metropolis-lux-obscura-ps4-psvita',
'metropolis-lux-obscura-ps4-psvita-1',
'north-ps4-psvita',
];
const arrayREMOVEPS3 = [
'スキとスキとでサンカク恋愛-ps4-ps3-psvita',
'steinsgate-0-ps4-ps3-psvita-1',
'steinsgate-0-ps4-ps3-psvita',
'レイジングループ-ps4-ps3-psvita',
'かりぐらし恋愛-ps4-ps3-psvita',
'7scarlet-ps3-psvita',
];
const arrayREMOVEPS4 = [
'twin-robots-ps4-psvita',
'deep-ones-ps4-psvita',
'energy-cycle-edge-ps4-psvita-1',
'deep-ones-ps4-psvita-3',
'spiral-splatter-ps4-psvita-1',
'alteric-ps4-psvita-3',
'spiral-splatter-ps4-psvita',
'north-ps4-psvita-3',
'planet-rix-13-ps4-psvita',
'콥스-파티-blood-drive-ps4-psvita',
'metropolis-lux-obscura-ps4-psvita-2',
'metropolis-lux-obscura-ps4-psvita-3',
'steinsgate-0-ps4-ps3-psvita-1',
'planet-rix-13-ps4-psvita-3',
'sigi-a-fart-for-melusina-ps4-psvita-2',
'sigi-a-fart-for-melusina-ps4-psvita-3',
'twin-robots-ps4-psvita-2',
'energy-cycle-ps4-psvita-3',
'energy-cycle-edge-ps4-psvita-3',
'drowning-ps4-psvita-2',
'drowning-ps4-psvita-3',
'alteric-ps4-psvita-2',
'energy-invasion-ps4-psvita-3',
'energy-cycle-ps4-psvita-1',
'energy-balance-ps4-psvita-1',
'its-spring-again-ps4-psvita',
'its-spring-again-ps4-psvita-1',
'energy-invasion-ps4-psvita-2',
'energy-balance-ps4-psvita-3',
'north-ps4-psvita-2',
];


(function() {
    'use strict';

    console.log('number of / splits: ', document.URL.split('/').length)
    if ((document.URL.split('/')[3]) === "games") {
        let rows = document.getElementsByClassName('gameCell');
        for (let i = 0; i < rows.length; ++i) {
            checkRegionGame(rows[i]);
        }
    }
    else if ((document.URL.split('/').length) === 6) {
        if (document.URL.split('/')[3] === 'game') {
			checkRegion(null);
            inlineTitleTags();
			parseGameDetails();
			let table = document.getElementById('game_details_table');
			let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
			for (let i = 0; i < rows.length; ++i) {
				modifyProgressBar(rows[i]);
			}
            return // game + no user
        }
        else {
            let maincontainer = document.getElementById('maincontainer');
            maincontainer.style = 'margin-left: 310px'
            let table = document.getElementById('usergamelist');
            table.style.tableLayout = 'fixed';
            table.style.width = '1020px'
            let rows = document.getElementsByClassName('gamerow');
            for (let i = 0; i < rows.length; ++i) {
                moveRowContent(rows[i]);
                checkRegion(rows[i]);
            }
        }
    }
    else if ((document.URL.split('/').length) === 7) {
        checkRegion(null);
	    inlineTitleTags();
        parseGameDetails();
        let table = document.getElementById('game_details_table');
        let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        for (let i = 0; i < rows.length; ++i) {
            modifyProgressBar(rows[i]);
        }
    //return // game + user
    }
    else if ((document.URL.split('/').length) === 8) {
        return // trophy
    }
    else {
        return
    }

})();

function checkRegionGame(row) {
	let url = decodeURI(row.getElementsByClassName('user-select')[0]);
    let game = url.split('/')[5]
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
    //Label.style = '-webkit-transform: rotate(-180deg)';
	let lastLabel = Label[Label.length-1];
	let newLabel = document.createElement('div');
	//newLabel.style = 'bottom: 37px; height: 14px; line-height: 14px; width: 15px'
    newLabel.style.left = '-3.5px'
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

function checkRegion(row) {
	let url = row ? decodeURI(row.getElementsByClassName('gameImageLink')[0].href): decodeURI(location.href);
	let game = decodeURI(url.split('/')[6]);
    if (!row) {
        row = document
        row.getElementsByClassName('platformlabel')[row.getElementsByClassName('platformlabel').length-1].parentNode.style.padding = '0px'
        if ((document.URL.split('/').length) === 6) {
            game = decodeURI(url.split('/')[5]);
        }
    }
    if (arrayREMOVEVITA.includes(game)) removeTag(row, 'VITA')
    if (arrayREMOVEPS4.includes(game)) removeTag(row, 'PS4')
    if (arrayREMOVEPS3.includes(game)) removeTag(row, 'PS3')
    if (arrayOR.includes(game)) addTag(row, 'OR')
    if (arrayRR.includes(game)) addTag(row, 'RR')
	if (arrayEU.includes(game)) addTag(row, 'EU')
	if (arrayNA.includes(game)) addTag(row, 'NA')
    if (arrayAS.includes(game)) addTag(row, 'AS')
    if (arrayHK.includes(game)) addTag(row, 'HK')
    if (arrayJP.includes(game)) addTag(row, 'JP')
    if (arrayKR.includes(game)) addTag(row, 'KR')
    if (arrayCN.includes(game)) addTag(row, 'CN')
    if (arrayGR.includes(game)) addTag(row, 'GR')
    if (arrayES.includes(game)) addTag(row, 'ES')
    if (arrayRU.includes(game)) addTag(row, 'RU')
    if (arrayDELISTED.includes(game)) addTag(row, 'DELISTED')
    if (arrayPHYSICAL.includes(game)) addTag(row, 'PHYSICAL')
    if (arrayDIGITAL.includes(game)) addTag(row, 'DIGITAL')

    if ((document.URL.split('/').length) === 6) {
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
    }


    if (game === '十三機兵防衛圏-ps4') {
        const newText = '13 Sentinels: Aegis Rim'
		let aaaa = document.createElement('div');
        let nameStyle = row.getElementsByClassName('gametitle')[0]
	    aaaa.innerHTML = `<a href="${url}" class="game-title" title="View trophies for ${newText}">${newText}</a>`;
		aaaa.style.color = nameStyle.color;
		aaaa.style.fontWeight = nameStyle.fontWeight;
		nameStyle.innerText = ''
        nameStyle.append(aaaa)

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



function moveRowContent(original) {
	let offset = original.getElementsByClassName('platformlabel').length - 1;

	const difficulty = original.getElementsByClassName('difficultyText')[0].children[0];
	const completionRateString = original.getElementsByClassName('difficultyText')[0].children[1];
	const dateHTML = original.getElementsByClassName('title-cell')[0].children[5+offset];
	const date = dateHTML.innerText.split('on ')[1] ? dateHTML.innerText.split('on ')[1].substring(0, 12).replace('i', ''): '';
	const timestamp = dateHTML.innerText.split('on ')[1] ? dateHTML.innerText.split(date)[1].substring(0, 12).replace('i', ''): '';
	const timer = dateHTML.innerText.split('in ')[1];
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

	original.getElementsByClassName('title-cell')[0].children[5+offset].innerHTML = dateHTML.innerHTML;
	original.getElementsByClassName('title-cell')[0].children[5+offset].innerText = timestamp;
	original.getElementsByClassName('title-cell')[0].children[5+offset].style.color = dateHTML.style.color;
	original.getElementsByClassName('title-cell')[0].children[5+offset].style.fontWeight = 'bold';
	original.getElementsByClassName('title-cell')[0].style.width = `100%`;
	original.getElementsByClassName('title-cell')[0].colSpan = 'unset';
	original.getElementsByClassName('image-cell')[0].style.width = '105px';

	if (trophyHTML) original.removeChild(trophyHTML)

	let newPlatCell = document.createElement('span');
	newPlatCell.innerHTML = '<img width="15px" height="15px" style="float: left" src="/images/platinum.png">'
	if (trophyHTML) insertBefore(newPlatCell, original.getElementsByClassName('title gold')[0])

	let fraction = '';
	if (trophies.includes('Completed all')) {
		let n = trophies.split('Completed all ')[1].split(' trophies')[0]
		fraction = `${n}/${n}`
  } else {
		fraction = trophies.split(' trophies')[0].split(')')[1].replace(' of ', '/');
		original.getElementsByClassName('title-cell')[0].removeChild(original.getElementsByClassName('title-cell')[0].getElementsByTagName('br')[1].nextSibling)
	}
	let newFraction = document.createElement('span');
	newFraction.innerHTML = fraction;
	newFraction.style = 'float: right; color: #888';
	original.getElementsByClassName('title bronze')[0].append(newFraction);

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

	original.getElementsByClassName('progress-cell')[0].style.width = '150px';

	original.getElementsByClassName('progress-cell')[0].removeChild(original.getElementsByClassName('progperc')[0]);
	if (timer) {
		let newTimer = document.createElement('div');
		newTimer.innerHTML = timer;
		newTimer.style.color = dateHTML.style.color;
		newTimer.style.fontWeight = dateHTML.style.fontWeight;
		original.getElementsByClassName('progress-cell')[0].append(newTimer)
	}

	let newEl = document.createElement('td');
	const num1 = completionRateString.innerText.split('/')[0].split(' ')[1];
	const denom1 = completionRateString.innerText.split('/')[1].split(' ')[1];
	const num = num1.replace(',', '');
	const denom = denom1.replace(',', '');
	const completionpercent = ((parseInt(num) / parseInt(denom)) * 100)

	newEl.innerHTML = `
	<div style="display: flex; justfy center"> <span style="flex: 1; text-align:right; margin-right: 2px">Difficulty </span> - <span style="flex: 1; text-align:left; margin-left: 2px"> ${difficulty.outerHTML}</span></div>
	<div style="display: flex; justfy center"> <span style="flex: 1; text-align:right; margin-right: 2px"">Completion Rate </span> - <span  style="flex: 1; text-align:left; margin-left: 2px""><span style="color: ${difficulty.style.color}"> ${completionpercent.toFixed(1)}%</span> (${num1}/${denom1})</span></div>
	<div style="display: flex; justfy center"> <span style="flex: 1; text-align:right; margin-right: 2px"">Difficulty Points </span> - <span  style="flex: 1; text-align:left; margin-left: 2px""> ${completionRateString.innerText.split('(')[1].split(')')[0].split(' ')[0]}</span></div>
	`;
	newEl.style.width = '75%';
	original.append(newEl);
}

function modifyProgressBar(row) {
	if (!row.classList.contains('dlc_header')) {
        let trophyHTML = row.getElementsByClassName('sonytrophyrare')[0];
        if (trophyHTML) {
            row.removeChild(trophyHTML)
            let newPlatCell = document.createElement('td');
            let text = trophyHTML.innerText.trim()
            if (text == "Common") {
                newPlatCell.innerHTML =`<img width="auto" height="19px" style="padding-bottom: 15px; padding-right: 15px;" src="https://i.imgur.com/0LuKHfY.png">`
            }
            else if (text == "Rare") {
                newPlatCell.innerHTML = `<img width="auto" height="19px" style="padding-bottom: 15px; padding-right: 15px;" src="https://i.imgur.com/ppJobwB.png">`
            }
            else if (text == "Very Rare") {
                newPlatCell.innerHTML = `<img width="auto" height="19px" style="padding-bottom: 15px; padding-right: 15px;" src="https://i.imgur.com/a00IBi5.png">`
            }
            else if (text == "Ultra Rare") {
                newPlatCell.innerHTML = `<img width="auto" height="19px" style="padding-bottom: 15px; padding-right: 15px;" src="https://i.imgur.com/y45e4ng.png">`
            }
            else {
                newPlatCell.innerHTML = `<img width="auto" height="19px" style="padding-bottom: 15px; padding-right: 15px;" src="https://i.imgur.com/y45e4ng.png">`
            }
            newPlatCell.style.paddingTop = "20px"
            insertBefore(newPlatCell, row.getElementsByClassName('trophyrare')[0])
        }

		let num = row.getElementsByClassName('percent_expand')[0].innerText.split(' of ')[0];
		let denum = row.getElementsByClassName('percent_expand')[0].innerText.split(' of ')[1].split('\n')[0];
		let percent = row.getElementsByClassName('percent_earned')[0].innerText.trim().replace('%', '');

		let newProgressBar = document.createElement('div');
		newProgressBar.style = "width: 240px; height: 59px; display: flex; flex-direction: column; justify-content: center; align-items:center";
		newProgressBar.classList.add('progress-cell');
		newProgressBar.innerHTML = `
	<div clas="prog; display:inline-block" style="display: flex; align-items: center; height: 20px; width: 100%">
	<div class="progresscontainer stacked softshadow" style="width: calc(100% - 80px)">
	  <div class="progressbar" style="float: left; width: ${percent}%;"></div>
	</div>
	<div style="margin-left: 10px; width: 10px; font-weight: bold; color: green;"> ${percent}% </div>
	</div>
	<div style="color: black; width: 166px; text-align: right;  font-size: 16px"> <b>${num}</b> /</span>  <span  style="font-size: 10pt">${denum}</span></div>
	`;

		row.getElementsByClassName('percent_expand')[0].style.display = 'none';
		row.getElementsByClassName('percent_earned')[0].style.display = 'none';

		row.appendChild(newProgressBar);

	}
}

function parseGameDetails() {
	//remove(document.querySelector("#gamesHeader > div:nth-child(2) > div > table > tbody > tr > td > div.sub"))
    const difficulty = document.getElementsByClassName('difficultyText')[0].children[0];
	const completionRateString = document.getElementsByClassName('difficultyText')[0].children[1];
    let newEl = document.createElement('div');
    var num1, denom1, difficultyPoints
    if ((document.URL.split('/').length) === 6) {
        num1 = document.getElementsByClassName('center')[0].children[0].innerText;
        denom1 = document.getElementsByClassName('center')[0].children[1].children[0].children[0].innerText;
        difficultyPoints = completionRateString.innerText.split('/')[0].split(' ')[1];
        remove(document.querySelector("#gamesHeader > div.page-right > div > table > tbody > tr > td.gamestats"))
        const trophies = document.getElementsByClassName('trophy_totals')[0]
        trophies.style = `border-top: unset; padding-left: 210px`
    }
    else {
        num1 = completionRateString.innerText.split('/')[0].split(' ')[1];
        denom1 = completionRateString.innerText.split('/')[1].split(' ')[1];
        difficultyPoints = completionRateString.innerText.split('(')[1].split(')')[0].split(' ')[0]
    }
    const num = num1.replace(',', '');
    const denom = denom1.replace(',', '');
    const completionpercent = ((parseInt(num) / parseInt(denom)) * 100)

	newEl.innerHTML = `
	<div style="display: flex; align-items: center; height: 18px"> <span style="flex: 1; text-align:right; margin-right: 2px; font-size: 10pt;">Difficulty </span> - <span style="flex: 1; text-align:left; margin-left: 2px;font-size: 10pt;"> ${difficulty.outerHTML}</span></div>
	<div style="display: flex; align-items: center; height: 18px"> <span style="flex: 1; text-align:right; margin-right: 2px; font-size: 10pt;">Completion Rate </span> - <span  style="flex: 1; text-align:left; margin-left: 2px;font-size: 10pt;"><span style="color: ${difficulty.style.color}"> ${completionpercent.toFixed(1)}%</span> (${num1}/${denom1})</span></div>
	<div style="display: flex; align-items: center; height: 18px"> <span style="flex: 1; text-align:right; margin-right: 2px; font-size: 10pt;">Difficulty Points </span> - <span  style="flex: 1; text-align:left; margin-left: 2px;font-size: 10pt;"> ${difficultyPoints}</span></div>
	`;
	newEl.style.width = '95%';
	newEl.style.paddingTop = '20px';
	document.getElementsByClassName('gameDetailTitle')[0].appendChild(newEl);

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
            document.getElementsByClassName('sub')[1].style.display = 'none';
        }
        document.getElementsByClassName('gamebreadcrumb')[1].style.display = 'none';
        const width = document.getElementsByClassName('page-header')[0].offsetWidth - document.getElementsByClassName('gameImage')[0].offsetWidth - 50;
        document.getElementsByClassName('progress_float')[0].style = `width: ${width}px; margin-left: 0px; margin-top: 35px !important; display: flex; justify-content: flex-end`;
        document.getElementsByClassName('progress_float')[0].children[0].style.display = "none";
        document.getElementsByClassName('progress_float')[0].getElementsByClassName('progresscontainer')[0].style.width = "166px";
        document.getElementsByClassName('progress_float')[0].children[1].style.marginRight = '10px';

        document.getElementsByClassName('trophy_totals')[0].style = `border-top: unset; width: ${width}px; display: flex; justify-content: flex-end; position: absolute; margin-top: 15px;`;
        document.getElementsByClassName('trophy_totals')[0].getElementsByClassName('total')[0].style = 'border-left: unset; color: white !important;';
        remove(document.querySelector("#gamesHeader > div:nth-child(2) > div > table > tbody > tr > td > div.sub"))
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