const bingoGame = {
  ballSet: [],
 
  replaceBalls() {
    for (let i = 1; i <= 90; i++) {
      this.ballSet.push([i]);
    }
  },

  displayBalls(){
    let set = bingoGame.ballSet;
    document.querySelector(".fullNumSet").innerHTML = set.join(' ');
  },

  //   getNewCards() {
  //     let duplicates = [];
  //     //generate 15 random numbers for card and puts them in an array newCard
  //     for (let i = 0; i <= 14; i++) {
  //       let randNum = Math.floor((Math.random() * this.ballSet.length) + 1);
  //       this.newCard.push(randNum);
  //     }
  //     const tempArray = this.newCard.sort();

  //     for (let i = 0; i < tempArray.length; i++) {
  //       if (tempArray[i + 1] === tempArray[i]) {
  //         duplicates.push(tempArray[i])
  //       }
  //     }

  //     console.log(duplicates)
  //   },
};







//show modal when rest of content has loaded
window.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.getElementById("modal");
  modal.showModal();
});

const closeModal = document.querySelector(".numButton");
//when modal closes get number of players and display full set of bingo numbers
closeModal.addEventListener("click", () => {
  const playerNum = document.getElementById("numberSelect").value;
  modal.close();
  bingoGame.replaceBalls();
  bingoGame.displayBalls();
  
});





//call the method that fills the array

//bingoGame.getNewCards();
//call the newly filled array

//let card = bingoGame.newCard;
//console.log(set.join(' '));
//console.log(card.join(', '))

// code for dialog box


//The html elements id is called and populated with the contents of the variable from the newly filled array.
//
//document.getElementById("player"). innerHTML = card.join(' ');
//document.getElementById("cardTwo"). innerHTML = cardTwo.join(' ');
//document.getElementById("cardThree"). innerHTML = cardThree.join(' ');
//document.getElementById("player").innerHTML = card.join(' ');


// numButton.addEventListener("click", ()=>{
//   console.log('Hello');

//   });

