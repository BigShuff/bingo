const ballGame = {
    ballSet : [],
    newCard : [],
    


    replaceBalls(){
        for (let i = 1; i <= 90; i++){
            this.ballSet.push([i]);
        }
    },

    getNewCards(){
       

        //generate 15 random numbers for card
        for (let i = 0; i <= 14; i++){
            let randNum = Math.floor((Math.random() * this.ballSet.length) + 1);
            this.newCard.push(randNum)
        }
        //compare each single number in newCard array. 
        for(let i = 0; i <= this.newCard.length -1; i++){
        //     //with the rest of the numbers in the array to find duplicates
            let IndexToBeChecked = this.newCard[i];
            
             for(let j = 0; j <= this.newCard.length -1; j++){
                 if (this.newCard[j] == IndexToBeChecked){
                   //console.log('this will be the same index so the same number');
                    continue;
                 } else if (this.newCard[j] != IndexToBeChecked){
                    if (this.newCard[j] == IndexToBeChecked){
                        console.log('this is a duplicate')
                    }
                 }
                 //console.log('this plus' + numberToBeChecked);
             }
         }
        //insert into an array at a specific place
        //about inserting into an array
        //array: name of array / start: the element you wish to inset at (the changes take place immediately after)
        //deleteCount: the amount of items you wish to delete starting place is start index,
        //item 1 etc: the content of what you wish to put into the array at start index.
        //array.splice(start, deleteCount, item 1, item2);
        //this.ballSet.splice(3, 1, 6); takes out number 4 and puts 6 in it's place.

        
        
        
        },
    
};

ballGame.replaceBalls();
ballGame.getNewCards();
let set = ballGame.ballSet;
let card = ballGame.newCard;
//console.log(set.join(' '));
console.log(card.join(', '))


//document.getElementById("ballSet"). innerHTML = set.join(' ');
//document.getElementById("player"). innerHTML = card.join(' ');
//document.getElementById("cardTwo"). innerHTML = cardTwo.join(' ');
//document.getElementById("cardThree"). innerHTML = cardThree.join(' ');