const ballGame = {
    ballSet : [],
    newCard : [],
    


    replaceBalls(){
        for (let i = 1; i <= 90; i++){
            this.ballSet.push([i]);
        }
    },

    getNewCards(){
        for (i = 1; i <= 15; i++){
        let randNum = Math.floor((Math.random() * this.ballSet.length) + 1);
        this.newCard.push(randNum);
        delete this.ballSet[randNum -1];
        }
    },
};

ballGame.replaceBalls();
ballGame.getNewCards();
let set = ballGame.ballSet;
let card = ballGame.newCard;
// console.log(set.join(' '));
// console.log(cardCheck.join(', '))
// console.log(card.join(', '));


document.getElementById("ballSet"). innerHTML = set.join(' ');
document.getElementById("player"). innerHTML = card.join(' ');
//document.getElementById("cardTwo"). innerHTML = cardTwo.join(' ');
//document.getElementById("cardThree"). innerHTML = cardThree.join(' ');