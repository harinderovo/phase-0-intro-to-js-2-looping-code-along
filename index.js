// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        //console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    let cards = []
    for (let a = 0; a < names.length; a++) {
        cards.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`)
    }
    console.log(cards);
    return cards;
}

function countDown(num) {
    //let countDown = 0;
    while (num >= 0) {
        console.log(num);
        num--
    } 
}