let tarotDeck = {
    dealt: [],
    layout: [],
    cards: [
        {
            name: "Ace of Swords",
            link: "https://en.wikipedia.org/wiki/Ace_of_Swords",
            src: ["img/tarot/ace_of_swords.png", "img/tarot/ace_of_swords_r.png", "img/tarot/ace_of_swords_i.png", "img/tarot/ace_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Swords01.jpg/68px-Swords01.jpg"
        },
        {
            name: "Two of Swords",
            link: "https://en.wikipedia.org/wiki/Two_of_Swords",
            src: ["img/tarot/two_of_swords.png", "img/tarot/two_of_swords_r.png", "img/tarot/two_of_swords_i.png", "img/tarot/two_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Swords02.jpg/69px-Swords02.jpg"
        },
        {
            name: "Three of Swords",
            link: "https://en.wikipedia.org/wiki/Three_of_Swords",
            src: ["img/tarot/three_of_swords.png", "img/tarot/three_of_swords_r.png", "img/tarot/three_of_swords_i.png", "img/tarot/three_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Swords03.jpg/67px-Swords03.jpg"
        },
        {
            name: "Four of Swords",
            link: "https://en.wikipedia.org/wiki/Four_of_Swords",
            src: ["img/tarot/four_of_swords.png", "img/tarot/four_of_swords_r.png", "img/tarot/four_of_swords_i.png", "img/tarot/four_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Swords04.jpg/67px-Swords04.jpg"
        },
        {
            name: "Five of Swords",
            link: "https://en.wikipedia.org/wiki/Five_of_Swords",
            src: ["img/tarot/five_of_swords.png", "img/tarot/five_of_swords_r.png", "img/tarot/five_of_swords_i.png", "img/tarot/five_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Swords05.jpg/68px-Swords05.jpg"
        },
        {
            name: "Six of Swords",
            link: "https://en.wikipedia.org/wiki/Six_of_Swords",
            src: ["img/tarot/six_of_swords.png", "img/tarot/six_of_swords_r.png", "img/tarot/six_of_swords_i.png", "img/tarot/six_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Swords06.jpg/69px-Swords06.jpg"
        },
        {
            name: "Seven of Swords",
            link: "https://en.wikipedia.org/wiki/Seven_of_Swords",
            src: ["img/tarot/seven_of_swords.png", "img/tarot/seven_of_swords_r.png", "img/tarot/seven_of_swords_i.png", "img/tarot/seven_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Swords07.jpg/69px-Swords07.jpg"
        },
        {
            name: "Eight of Swords",
            link: "https://en.wikipedia.org/wiki/Eight_of_Swords",
            src: ["img/tarot/eight_of_swords.png", "img/tarot/eight_of_swords_r.png", "img/tarot/eight_of_swords_i.png", "img/tarot/eight_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Swords08.jpg/69px-Swords08.jpg"
        },
        {
            name: "Nine of Swords",
            link: "https://en.wikipedia.org/wiki/Nine_of_Swords",
            src: ["img/tarot/nine_of_swords.png", "img/tarot/nine_of_swords_r.png", "img/tarot/nine_of_swords_i.png", "img/tarot/nine_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Swords09.jpg/69px-Swords09.jpg"
        },
        {
            name: "Ten of Swords",
            link: "https://en.wikipedia.org/wiki/Ten_of_Swords",
            src: ["img/tarot/ten_of_swords.png", "img/tarot/ten_of_swords_r.png", "img/tarot/ten_of_swords_i.png", "img/tarot/ten_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Swords10.jpg/69px-Swords10.jpg"
        },
        {
            name: "Page of Swords",
            link: "https://en.wikipedia.org/wiki/Page_of_Swords",
            src: ["img/tarot/page_of_swords.png", "img/tarot/page_of_swords_r.png", "img/tarot/page_of_swords_i.png", "img/tarot/page_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Swords11.jpg/68px-Swords11.jpg"
        },
        {
            name: "Knight of Swords",
            link: "https://en.wikipedia.org/wiki/Knight_of_Swords",
            src: ["img/tarot/knight_of_swords.png", "img/tarot/knight_of_swords_r.png", "img/tarot/knight_of_swords_i.png", "img/tarot/knight_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Swords12.jpg/68px-Swords12.jpg"
        },
        {
            name: "Queen of Swords",
            link: "https://en.wikipedia.org/wiki/Queen_of_Swords",
            src: ["img/tarot/queen_of_swords.png", "img/tarot/queen_of_swords_r.png", "img/tarot/queen_of_swords_i.png", "img/tarot/queen_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Swords13.jpg/67px-Swords13.jpg"
        },
        {
            name: "King of Swords",
            link: "https://en.wikipedia.org/wiki/King_of_Swords",
            src: ["img/tarot/king_of_swords.png", "img/tarot/king_of_swords_r.png", "img/tarot/king_of_swords_i.png", "img/tarot/king_of_swords_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Swords14.jpg/68px-Swords14.jpg"
        },
        {
            name: "Ace of Cups",
            link: "https://en.wikipedia.org/wiki/Ace_of_Cups",
            src: ["img/tarot/ace_of_cups.png", "img/tarot/ace_of_cups_r.png", "img/tarot/ace_of_cups_i.png", "img/tarot/ace_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Cups01.jpg/67px-Cups01.jpg"
        },
        {
            name: "Two of Cups",
            link: "https://en.wikipedia.org/wiki/Two_of_Cups",
            src: ["img/tarot/two_of_cups.png", "img/tarot/two_of_cups_r.png", "img/tarot/two_of_cups_i.png", "img/tarot/two_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Cups02.jpg/68px-Cups02.jpg"
        },
        {
            name: "Three of Cups",
            link: "https://en.wikipedia.org/wiki/Three_of_Cups",
            src: ["img/tarot/three_of_cups.png", "img/tarot/three_of_cups_r.png", "img/tarot/three_of_cups_i.png", "img/tarot/three_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Cups03.jpg/68px-Cups03.jpg"
        },
        {
            name: "Four of Cups",
            link: "https://en.wikipedia.org/wiki/Four_of_Cups",
            src: ["img/tarot/four_of_cups.png", "img/tarot/four_of_cups_r.png", "img/tarot/four_of_cups_i.png", "img/tarot/four_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Cups04.jpg/68px-Cups04.jpg"
        },
        {
            name: "Five of Cups",
            link: "https://en.wikipedia.org/wiki/Five_of_Cups",
            src: ["img/tarot/five_of_cups.png", "img/tarot/five_of_cups_r.png", "img/tarot/five_of_cups_i.png", "img/tarot/five_of_cups_i_r.png"] 
            //"https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Cups05.jpg/67px-Cups05.jpg"
        },
        {
            name: "Six of Cups",
            link: "https://en.wikipedia.org/wiki/Six_of_Cups",
            src: ["img/tarot/six_of_cups.png", "img/tarot/six_of_cups_r.png", "img/tarot/six_of_cups_i.png", "img/tarot/six_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Cups06.jpg/67px-Cups06.jpg"
        },
        {
            name: "Seven of Cups",
            link: "https://en.wikipedia.org/wiki/Seven_of_Cups",
            src: ["img/tarot/seven_of_cups.png", "img/tarot/seven_of_cups_r.png", "img/tarot/seven_of_cups_i.png", "img/tarot/seven_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Cups07.jpg/68px-Cups07.jpg"
        },
        {
            name: "Eight of Cups",
            link: "https://en.wikipedia.org/wiki/Eight_of_Cups",
            src: ["img/tarot/eight_of_cups.png", "img/tarot/eight_of_cups_r.png", "img/tarot/eight_of_cups_i.png", "img/tarot/eight_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Cups08.jpg/68px-Cups08.jpg"
        },
        {
            name: "Nine of Cups",
            link: "https://en.wikipedia.org/wiki/Nine_of_Cups",
            src: ["img/tarot/nine_of_cups.png", "img/tarot/nine_of_cups_r.png", "img/tarot/nine_of_cups_i.png", "img/tarot/nine_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Cups09.jpg/68px-Cups09.jpg"
        },
        {
            name: "Ten of Cups",
            link: "https://en.wikipedia.org/wiki/Ten_of_Cups",
            src: ["img/tarot/ten_of_cups.png", "img/tarot/ten_of_cups_r.png", "img/tarot/ten_of_cups_i.png", "img/tarot/ten_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Cups10.jpg/68px-Cups10.jpg"
        },
        {
            name: "Page of Cups",
            link: "https://en.wikipedia.org/wiki/Page_of_Cups",
            src: ["img/tarot/page_of_cups.png", "img/tarot/page_of_cups_r.png", "img/tarot/page_of_cups_i.png", "img/tarot/page_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Cups11.jpg/67px-Cups11.jpg"
        },
        {
            name: "Knight of Cups",
            link: "https://en.wikipedia.org/wiki/Knight_of_Cups",
            src: ["img/tarot/knight_of_cups.png", "img/tarot/knight_of_cups_r.png", "img/tarot/knight_of_cups_i.png", "img/tarot/knight_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Cups12.jpg/69px-Cups12.jpg"
        },
        {
            name: "Queen of Cups",
            link: "https://en.wikipedia.org/wiki/Queen_of_Cups",
            src: ["img/tarot/queen_of_cups.png", "img/tarot/queen_of_cups_r.png", "img/tarot/queen_of_cups_i.png", "img/tarot/queen_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Cups13.jpg/69px-Cups13.jpg"
        },
        {
            name: "King of Cups",
            link: "https://en.wikipedia.org/wiki/King_of_Cups",
            src: ["img/tarot/king_of_cups.png", "img/tarot/king_of_cups_r.png", "img/tarot/king_of_cups_i.png", "img/tarot/king_of_cups_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Cups14.jpg/68px-Cups14.jpg"
        },
        {
            name: "Ace of Pentacles",
            link: "https://en.wikipedia.org/wiki/Ace_of_Coins",
            src: ["img/tarot/ace_of_pentacles.png", "img/tarot/ace_of_pentacles_r.png", "img/tarot/ace_of_pentacles_i.png", "img/tarot/ace_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Pents01.jpg/68px-Pents01.jpg"
        },
        {
            name: "Two of Pentacles",
            link: "https://en.wikipedia.org/wiki/Two_of_Coins",
            src: ["img/tarot/two_of_pentacles.png", "img/tarot/two_of_pentacles_r.png", "img/tarot/two_of_pentacles_i.png", "img/tarot/two_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Pents02.jpg/69px-Pents02.jpg"
        },
        {
            name: "Three of Pentacles",
            link: "https://en.wikipedia.org/wiki/Three_of_Coins",
            src: ["img/tarot/three_of_pentacles.png", "img/tarot/three_of_pentacles_r.png", "img/tarot/three_of_pentacles_i.png", "img/tarot/three_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Pents03.jpg/69px-Pents03.jpg"
        },
        {
            name: "Four of Pentacles",
            link: "https://en.wikipedia.org/wiki/Four_of_Coins",
            src: ["img/tarot/four_of_pentacles.png", "img/tarot/four_of_pentacles_r.png", "img/tarot/four_of_pentacles_i.png", "img/tarot/four_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Pents04.jpg/68px-Pents04.jpg"
        },
        {
            name: "Five of Pentacles",
            link: "https://en.wikipedia.org/wiki/Five_of_Coins",
            src: ["img/tarot/five_of_pentacles.png", "img/tarot/five_of_pentacles_r.png", "img/tarot/five_of_pentacles_i.png", "img/tarot/five_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Pents05.jpg/68px-Pents05.jpg"
        },
        {
            name: "Six of Pentacles",
            link: "https://en.wikipedia.org/wiki/Six_of_Coins",
            src: ["img/tarot/six_of_pentacles.png", "img/tarot/six_of_pentacles_r.png", "img/tarot/six_of_pentacles_i.png", "img/tarot/six_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pents06.jpg/69px-Pents06.jpg"
        },
        {
            name: "Seven of Pentacles",
            link: "https://en.wikipedia.org/wiki/Seven_of_Coins",
            src: ["img/tarot/seven_of_pentacles.png", "img/tarot/seven_of_pentacles_r.png", "img/tarot/seven_of_pentacles_i.png", "img/tarot/seven_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Pents07.jpg/68px-Pents07.jpg"
        },
        {
            name: "Eight of Pentacles",
            link: "https://en.wikipedia.org/wiki/Eight_of_Coins",
            src: ["img/tarot/eight_of_pentacles.png", "img/tarot/eight_of_pentacles_r.png", "img/tarot/eight_of_pentacles_i.png", "img/tarot/eight_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Pents08.jpg/68px-Pents08.jpg"
        },
        {
            name: "Nine of Pentacles",
            link: "https://en.wikipedia.org/wiki/Nine_of_Coins",
            src: ["img/tarot/nine_of_pentacles.png", "img/tarot/nine_of_pentacles_r.png", "img/tarot/nine_of_pentacles_i.png", "img/tarot/nine_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Pents09.jpg/69px-Pents09.jpg"
        },
        {
            name: "Ten of Pentacles",
            link: "https://en.wikipedia.org/wiki/Ten_of_Coins",
            src: ["img/tarot/ten_of_pentacles.png", "img/tarot/ten_of_pentacles_r.png", "img/tarot/ten_of_pentacles_i.png", "img/tarot/ten_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Pents10.jpg/70px-Pents10.jpg"
        },
        {
            name: "Page of Pentacles",
            link: "https://en.wikipedia.org/wiki/Page_of_Coins",
            src: ["img/tarot/page_of_pentacles.png", "img/tarot/page_of_pentacles_r.png", "img/tarot/page_of_pentacles_i.png", "img/tarot/page_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Pents11.jpg/68px-Pents11.jpg"
        },
        {
            name: "Knight of Pentacles",
            link: "https://en.wikipedia.org/wiki/Knight_of_Coins",
            src: ["img/tarot/knight_of_pentacles.png", "img/tarot/knight_of_pentacles_r.png", "img/tarot/knight_of_pentacles_i.png", "img/tarot/knight_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Pents12.jpg/68px-Pents12.jpg"
        },
        {
            name: "Queen of Pentacles",
            link: "https://en.wikipedia.org/wiki/Queen_of_Coins",
            src: ["img/tarot/queen_of_pentacles.png", "img/tarot/queen_of_pentacles_r.png", "img/tarot/queen_of_pentacles_i.png", "img/tarot/queen_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Pents13.jpg/68px-Pents13.jpg"
        },
        {
            name: "King of Pentacles",
            link: "https://en.wikipedia.org/wiki/King_of_Coins",
            src: ["img/tarot/king_of_pentacles.png", "img/tarot/king_of_pentacles_r.png", "img/tarot/king_of_pentacles_i.png", "img/tarot/king_of_pentacles_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Pents14.jpg/69px-Pents14.jpg"
        },
        {
            name: "Ace of Wands",
            link: "https://en.wikipedia.org/wiki/Ace_of_Wands_(Tarot_card)",
            src: ["img/tarot/ace_of_wands.png", "img/tarot/ace_of_wands_r.png", "img/tarot/ace_of_wands_i.png", "img/tarot/ace_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Wands01.jpg/69px-Wands01.jpg"
        },
        {
            name: "Two of Wands",
            link: "https://en.wikipedia.org/wiki/Two_of_Wands_(Tarot_card)",
            src: ["img/tarot/two_of_wands.png", "img/tarot/two_of_wands_r.png", "img/tarot/two_of_wands_i.png", "img/tarot/two_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Wands02.jpg/69px-Wands02.jpg"
        },
        {
            name: "Three of Wands",
            link: "https://en.wikipedia.org/wiki/Three_of_Wands_(Tarot_card)",
            src: ["img/tarot/three_of_wands.png", "img/tarot/three_of_wands_r.png", "img/tarot/three_of_wands_i.png", "img/tarot/three_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Wands03.jpg/68px-Wands03.jpg"
        },
        {
            name: "Four of Wands",
            link: "https://en.wikipedia.org/wiki/Four_of_Wands_(Tarot_card)",
            src: ["img/tarot/four_of_wands.png", "img/tarot/four_of_wands_r.png", "img/tarot/four_of_wands_i.png", "img/tarot/four_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Wands04.jpg/68px-Wands04.jpg"
        },
        {
            name: "Five of Wands",
            link: "https://en.wikipedia.org/wiki/Five_of_Wands_(Tarot_card)",
            src: ["img/tarot/five_of_wands.png", "img/tarot/five_of_wands_r.png", "img/tarot/five_of_wands_i.png", "img/tarot/five_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Wands05.jpg/68px-Wands05.jpg"
        },
        {
            name: "Six of Wands",
            link: "https://en.wikipedia.org/wiki/Six_of_Wands",
            src: ["img/tarot/six_of_wands.png", "img/tarot/six_of_wands_r.png", "img/tarot/six_of_wands_i.png", "img/tarot/six_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Wands06.jpg/69px-Wands06.jpg"
        },
        {
            name: "Seven of Wands",
            link: "https://en.wikipedia.org/wiki/Seven_of_Wands",
            src: ["img/tarot/seven_of_wands.png", "img/tarot/seven_of_wands_r.png", "img/tarot/seven_of_wands_i.png", "img/tarot/seven_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Wands07.jpg/68px-Wands07.jpg"
        },
        {
            name: "Eight of Wands",
            link: "https://en.wikipedia.org/wiki/Eight_of_Wands",
            src: ["img/tarot/eight_of_wands.png", "img/tarot/seven_of_wands_r.png", "img/tarot/seven_of_wands_i.png", "img/tarot/seven_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Wands08.jpg/68px-Wands08.jpg"
        },
        {
            name: "Nine of Wands",
            link: "https://en.wikipedia.org/wiki/Nine_of_Wands",
            src: ["img/tarot/nine_of_wands.png", "img/tarot/nine_of_wands_r.png", "img/tarot/nine_of_wands_i.png", "img/tarot/nine_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Wands09.jpg/69px-Wands09.jpg"
        },
        {
            name: "Ten of Wands",
            link: "https://en.wikipedia.org/wiki/Ten_of_Wands",
            src: ["img/tarot/ten_of_wands.png", "img/tarot/ten_of_wands_r.png", "img/tarot/ten_of_wands_i.png", "img/tarot/ten_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Wands10.jpg/69px-Wands10.jpg"
        },
        {
            name: "Page of Wands",
            link: "https://en.wikipedia.org/wiki/Page_of_Wands",
            src: ["img/tarot/page_of_wands.png", "img/tarot/page_of_wands_r.png", "img/tarot/page_of_wands_i.png", "img/tarot/page_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Wands11.jpg/68px-Wands11.jpg"
        },
        {
            name: "Knight of Wands",
            link: "https://en.wikipedia.org/wiki/Knight_of_Wands",
            src: ["img/tarot/knight_of_wands.png", "img/tarot/knight_of_wands_r.png", "img/tarot/knight_of_wands_i.png", "img/tarot/knight_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Wands12.jpg/68px-Wands12.jpg"
        },
        {
            name: "Queen of Wands",
            link: "https://en.wikipedia.org/wiki/Queen_of_Wands_(Tarot_card)",
            src: ["img/tarot/queen_of_wands.png", "img/tarot/queen_of_wands_r.png", "img/tarot/queen_of_wands_i.png", "img/tarot/queen_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Wands13.jpg/69px-Wands13.jpg"
        },
        {
            name: "King of Wands",
            link: "https://en.wikipedia.org/wiki/King_of_Wands",
            src: ["img/tarot/king_of_wands.png", "img/tarot/king_of_wands_r.png", "img/tarot/king_of_wands_i.png", "img/tarot/king_of_wands_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Wands14.jpg/67px-Wands14.jpg"
        },
        {
            name: "0 – The Fool",
            link: "https://en.wikipedia.org/wiki/The_Fool_(Tarot_card)",
            src: ["img/tarot/0_the_fool.png", "img/tarot/0_the_fool_r.png", "img/tarot/0_the_fool_i.png", "img/tarot/0_the_fool_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/9/90/RWS_Tarot_00_Fool.jpg/69px-RWS_Tarot_00_Fool.jpg"
        },
        {
            name: "I – The Magician",
            link: "https://en.wikipedia.org/wiki/The_Magician_(Tarot_card)",
            src: ["img/tarot/I_the_magician.png", "img/tarot/I_the_magician_r.png", "img/tarot/I_the_magician_i.png", "img/tarot/I_the_magician_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/d/de/RWS_Tarot_01_Magician.jpg/68px-RWS_Tarot_01_Magician.jpg"
        },
        {
            name: "II – The High Priestess",
            link: "https://en.wikipedia.org/wiki/The_High_Priestess_(Tarot_card)",
            src: ["img/tarot/II_the_high_priestess.png", "img/tarot/II_the_high_priestess_r.png", "img/tarot/II_the_high_priestess_i.png", "img/tarot/II_the_high_priestess_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/69px-RWS_Tarot_02_High_Priestess.jpg"
        },
        {
            name: "III – The Empress",
            link: "https://en.wikipedia.org/wiki/The_Empress_(Tarot_card)",
            src: ["img/tarot/III_the_empress.png", "img/tarot/III_the_empress_r.png", "img/tarot/III_the_empress_i.png", "img/tarot/III_the_empress_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/RWS_Tarot_03_Empress.jpg/69px-RWS_Tarot_03_Empress.jpg"
        },
        {
            name: "IV – The Emperor",
            link: "https://en.wikipedia.org/wiki/The_Emperor_(Tarot_card)",
            src: ["img/tarot/IV_the_emperor.png", "img/tarot/IV_the_emperor_r.png", "img/tarot/IV_the_emperor_i.png", "img/tarot/IV_the_emperor_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/70px-RWS_Tarot_04_Emperor.jpg"
        },
        {
            name: "V – The Hierophant",
            link: "https://en.wikipedia.org/wiki/The_Hierophant_(Tarot_card)",
            src: ["img/tarot/V_the_hierophant.png", "img/tarot/V_the_hierophant_r.png", "img/tarot/V_the_hierophant_i.png", "img/tarot/V_the_hierophant_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/RWS_Tarot_05_Hierophant.jpg/68px-RWS_Tarot_05_Hierophant.jpg"
        },
        {
            name: "VI – The Lovers",
            link: "https://en.wikipedia.org/wiki/The_Lovers_(Tarot_card)",
            src: ["img/tarot/VI_the_lovers.png", "img/tarot/VI_the_lovers_r.png", "img/tarot/VI_the_lovers_i.png", "img/tarot/VI_the_lovers_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/d/db/RWS_Tarot_06_Lovers.jpg/69px-RWS_Tarot_06_Lovers.jpg"
        },
        {
            name: "VII – The Chariot",
            link: "https://en.wikipedia.org/wiki/The_Chariot_(Tarot_card)",
            src: ["img/tarot/VII_the_chariot.png", "img/tarot/VII_the_chariot_r.png", "img/tarot/VII_the_chariot_i.png", "img/tarot/VII_the_chariot_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/68px-RWS_Tarot_07_Chariot.jpg"
        },
        {
            name: "VIII – Strength",
            link: "https://en.wikipedia.org/wiki/Strength_(Tarot_card)",
            src: ["img/tarot/VIII_strength.png", "img/tarot/VIII_strength_r.png", "img/tarot/VIII_strength_i.png", "img/tarot/VIII_strength_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/RWS_Tarot_08_Strength.jpg/66px-RWS_Tarot_08_Strength.jpg"
        },
        {
            name: "IX – The Hermit",
            link: "https://en.wikipedia.org/wiki/The_Hermit_(Tarot_card)",
            src: ["img/tarot/IX_the_hermit.png", "img/tarot/IX_the_hermit_r.png", "img/tarot/IX_the_hermit_i.png", "img/tarot/IX_the_hermit_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/69px-RWS_Tarot_09_Hermit.jpg"
        },
        {
            name: "X – Wheel of Fortune",
            link: "https://en.wikipedia.org/wiki/Wheel_of_Fortune_(Tarot_card)",
            src: ["img/tarot/X_wheel_of_fortune.png", "img/tarot/X_wheel_of_fortune_r.png", "img/tarot/X_wheel_of_fortune_i.png", "img/tarot/X_wheel_of_fortune_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/69px-RWS_Tarot_10_Wheel_of_Fortune.jpg"
        },
        {
            name: "XI – Justice",
            link: "https://en.wikipedia.org/wiki/Justice_(Tarot_card)",
            src: ["img/tarot/XI_justice.png", "img/tarot/XI_justice_r.png", "img/tarot/XI_justice_i.png", "img/tarot/XI_justice_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/RWS_Tarot_11_Justice.jpg/69px-RWS_Tarot_11_Justice.jpg"
        },
        {
            name: "XII – The Hanged Man",
            link: "https://en.wikipedia.org/wiki/The_Hanged_Man_(tarot_card)",
            src: ["img/tarot/XII_the_hanged_man.png", "img/tarot/XII_the_hanged_man_r.png", "img/tarot/XII_the_hanged_man_i.png", "img/tarot/XII_the_hanged_man_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/RWS_Tarot_12_Hanged_Man.jpg/68px-RWS_Tarot_12_Hanged_Man.jpg"
        },
        {
            name: "XIII – Death",
            link: "https://en.wikipedia.org/wiki/Death_(Tarot_card)",
            src: ["img/tarot/XIII_death.png", "img/tarot/XIII_death_r.png", "img/tarot/XIII_death_i.png", "img/tarot/XIII_death_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RWS_Tarot_13_Death.jpg/68px-RWS_Tarot_13_Death.jpg"
        },
        {
            name: "XIV – Temperance",
            link: "https://en.wikipedia.org/wiki/Temperance_(Tarot_card)",
            src: ["img/tarot/XIV_temperance.png", "img/tarot/XIV_temperance_r.png", "img/tarot/XIV_temperance_i.png", "img/tarot/XIV_temperance_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/RWS_Tarot_14_Temperance.jpg/69px-RWS_Tarot_14_Temperance.jpg"
        },
        {
            name: "XV – The Devil",
            link: "https://en.wikipedia.org/wiki/The_Devil_(Tarot_card)",
            src: ["img/tarot/XV_the_devil.png", "img/tarot/XV_the_devil_r.png", "img/tarot/XV_the_devil_i.png", "img/tarot/XV_the_devil_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/5/55/RWS_Tarot_15_Devil.jpg/69px-RWS_Tarot_15_Devil.jpg"
        },
        {
            name: "XVI – The Tower",
            link: "https://en.wikipedia.org/wiki/The_Tower_(Tarot_card)",
            src: ["img/tarot/XVI_the_tower.png", "img/tarot/XVI_the_tower_r.png", "img/tarot/XVI_the_tower_i.png", "img/tarot/XVI_the_tower_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/RWS_Tarot_16_Tower.jpg/70px-RWS_Tarot_16_Tower.jpg"
        },
        {
            name: "XVII – The Star",
            link: "https://en.wikipedia.org/wiki/The_Star_(Tarot_card)",
            src: ["img/tarot/XVII_the_star.png", "img/tarot/XVII_the_star_r.png", "img/tarot/XVII_the_star_i.png", "img/tarot/XVII_the_star_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/d/db/RWS_Tarot_17_Star.jpg/69px-RWS_Tarot_17_Star.jpg"
        },
        {
            name: "XVIII – The Moon",
            link: "https://en.wikipedia.org/wiki/The_Moon_(Tarot_card)",
            src: ["img/tarot/XVIII_the_moon.png", "img/tarot/XVIII_the_moon_r.png", "img/tarot/XVIII_the_moon_i.png", "img/tarot/XVIII_the_moon_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/RWS_Tarot_18_Moon.jpg/68px-RWS_Tarot_18_Moon.jpg"
        },
        {
            name: "XIX – The Sun",
            link: "https://en.wikipedia.org/wiki/The_Sun_(Tarot_card)",
            src: ["img/tarot/XIX_the_sun.png", "img/tarot/XIX_the_sun_r.png", "img/tarot/XIX_the_sun_i.png", "img/tarot/XIX_the_sun_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/1/17/RWS_Tarot_19_Sun.jpg/69px-RWS_Tarot_19_Sun.jpg"
        },
        {
            name: "XX – Judgement",
            link: "https://en.wikipedia.org/wiki/Judgement_(Tarot_card)",
            src: ["img/tarot/XX_judgement.png", "img/tarot/XX_judgement_r.png", "img/tarot/XX_judgement_i.png", "img/tarot/XX_judgement_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/RWS_Tarot_20_Judgement.jpg/69px-RWS_Tarot_20_Judgement.jpg"
        },
        {
            name: "XXI – The World",
            link: "https://en.wikipedia.org/wiki/The_World_(Tarot_card)",
            src: ["img/tarot/XXI_the_world.png", "img/tarot/XXI_the_world_r.png", "img/tarot/XXI_the_world_i.png", "img/tarot/XXI_the_world_i_r.png"]
            //"https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/RWS_Tarot_21_World.jpg/68px-RWS_Tarot_21_World.jpg"
        }
    ],

    shuffle: function() {
        this.dealt = [];
        for (i = 0; i < 78; i++) {
            this.dealt.push(false);
        };
    },

    deal: function() {
        num = Math.floor(Math.random() * 78);
        while (this.dealt[num]) {
            num = Math.floor(Math.random() * 78);
        };
        this.dealt[num] = true;
        let card = this.cards[num];
        card.inverted = (Math.random()>0.5?true:false);
        card.rotated = false;
        card.x = 0;
        card.y = 0;
        return card;
    },

    init: function() {
        for (x = 0; x < this.cards.length; x++) {
            this.cards[x].image = [];
            for (s = 0;s < this.cards[x].src.length; s++) {
                this.cards[x].image[s] = new Image();
                this.cards[x].image[s].src = this.cards[x].src[s];
            };
        };
        this.shuffle();
        /**for (k = 0; k <3; k++) { // temporary layout generator - we'll fix it in post!
            this.layout.push(this.deal());
            this.layout[k].x = ((k+1) * 120);
        }**/
    },

    place: function(e) {
        let msEvt = e;
        
        if (this.layout.length < this.dealt.length) {
            this.layout.push(this.deal());
        }
        
        if (msEvt.shiftKey) {
            this.layout[this.layout.length - 1].rotated = true;
            this.layout[this.layout.length - 1].x = msEvt.offsetX - 60;
            this.layout[this.layout.length - 1].y = msEvt.offsetY - 35;
        }
        else {
            this.layout[this.layout.length - 1].rotated = false;
            this.layout[this.layout.length - 1].x = msEvt.offsetX - 35;
            this.layout[this.layout.length - 1].y = msEvt.offsetY - 60;
        }
        
    },

    placeTap: function(e) {
        let tcEvt = e;
        
        if (this.layout.length < this.dealt.length) {
            this.layout.push(this.deal());
        }
        
        if (tcEvt.touches.length > 1) {
            this.layout[this.layout.length - 1].rotated = true;
            this.layout[this.layout.length - 1].x = tcEvt.offsetX - 60;
            this.layout[this.layout.length - 1].y = tcEvt.offsetY - 35;
        }
        else {
            this.layout[this.layout.length - 1].rotated = false;
            this.layout[this.layout.length - 1].x = tcEvt.offsetX - 35;
            this.layout[this.layout.length - 1].y = tcEvt.offsetY - 60;
        }
        
    },

    drawLayout: function(ctx) {
        for (l=0; l < this.layout.length; l++) {
            this.drawCard(ctx, this.layout[l]);
        }
    },

    drawCard: function(ctx, card) {
        if (card.inverted) {
            if (card.rotated) {
                ctx.drawImage(card.image[3], card.x, card.y);
            }
            else {
                ctx.drawImage(card.image[2], card.x, card.y);
            }
        }
        else if (card.rotated) {
            ctx.drawImage(card.image[1], card.x, card.y);
        }
        else {
            ctx.drawImage(card.image[0], card.x, card.y);
        }
    }
};
