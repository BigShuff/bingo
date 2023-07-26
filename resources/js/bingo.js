const ballGame = {
    ballSet : [],
    checkDuplicate : [],
    newCard : [],
    


    replaceBalls(){
        for (let i = 1; i <= 90; i++){
            this.ballSet.push([i]);
        }
    },

    getNewCards(){
        this.checkDuplicate.length = 0;
        this.newCard.length = 0;
       
            for (let i = 0; i <= 14; i++){
                let randNum = Math.floor((Math.random() * 90) + 1);
                // I need to check for duplicate numbers
                if (i = 1){
                    this.newCard.push(randNum);
                    } else {
                    this.checkDuplicate.push(randNum);
                    }


                
                /*
                for (let i = 1; i <= this.newCard.length; i++){
                    if (this.newCard[i - 1] === this.checkDuplicate[i - 1]){
                        console.log('Their was a duplicate');
                        this.newCard.splice(i);
                        this.checkDuplicate.splice(i);
                    }
                }*/

            }
            
    },    
           


};

ballGame.replaceBalls();
ballGame.getNewCards();
let set = ballGame.ballSet;
let cardCheck = ballGame.checkDuplicate;
let card = ballGame.newCard;
console.log(set.join(' '));
console.log(cardCheck.join(', '))
console.log(card.join(', '));


//document.getElementById("ballSet"). innerHTML = set.join(' ');
//document.getElementById("cardOne"). innerHTML = cardOne.join(' ');
//document.getElementById("cardTwo"). innerHTML = cardTwo.join(' ');
//document.getElementById("cardThree"). innerHTML = cardThree.join(' ');