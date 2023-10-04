const cards = ["Charlie", "Samip", "Ali"];

function writeCards(cards){
    const messages = []
    for(let i =0; i<cards.length; i++){
        console.log(`Thank you, ${cards[i]} for the wonderful birthday gift!`);
        messages.push (`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return messages;
}
writeCards(cards)


function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  