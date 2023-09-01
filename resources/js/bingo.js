const bingoGame = {
  ballSet: [],
  newCard: [],

  replaceBalls() {
    for (let i = 1; i <= 90; i++) {
      this.ballSet.push([i]);
    }
  },

  displayBalls() {
    let set = bingoGame.ballSet;
    document.querySelector(".fullNumSet").innerHTML = set.join(' ');
  },

  displayBingoCards(playerNum) {
    if (playerNum === "1" || playerNum === "2") {
      //set out card for computer
      //get the template I want to use
      const temp1 = document.querySelector(".templateForOne").content;
      //make a copy of the template that I can change 
      //let copy1 = temp1.content.cloneNode(true);
      const copy1 = document.importNode(temp1, true);
      //same as above
      const temp2 = document.querySelector(".templateForOne").content;
      const copy2 = document.importNode(temp2, true);
      //after this the template could be appended using 
      //document.querySelector(".htmlElement").appendChild(copy1);
      //but this time I want to change the playerLabel to represent computer and player 1
      if (playerNum === "1") {
        const element1 = copy1.querySelector(".playerLabel");
        element1.textContent = "Computer";
        //set out card for player 1
        const element2 = copy2.querySelector(".playerLabel");
        element2.textContent = "Player 1";
      }
      if (playerNum === "2") {
        const element1 = copy1.querySelector(".playerLabel");
        element1.textContent = "Player 1";
        //set out card for player 1
        const element2 = copy2.querySelector(".playerLabel");
        element2.textContent = "Player 2";
      }
      document.querySelector(".divForPlayer1").appendChild(copy1);
      document.querySelector(".divForPlayer2").appendChild(copy2);
      //const width = document.querySelector(".buttonHolders").style.width = "80em";
    }
    if (playerNum === "3") {
      //player 1
      const temp1 = document.querySelector(".templateForOne").content;
      const copy1 = document.importNode(temp1, true);
      const element1 = copy1.querySelector(".playerLabel");
      element1.textContent = "Player 1";
      document.querySelector(".divForPlayer1").appendChild(copy1);
      //player 2
      const temp2 = document.querySelector(".templateForOne").content;
      const copy2 = document.importNode(temp2, true);
      const element2 = copy2.querySelector(".playerLabel");
      element2.textContent = "Player 2";
      document.querySelector(".divForPlayer2").appendChild(copy2);
      //player 3
      const temp3 = document.querySelector(".templateForOne").content;
      const copy3 = document.importNode(temp3, true);
      const element3 = copy3.querySelector(".playerLabel");
      element3.textContent = "Player 3";
      document.querySelector(".divForPlayer3").appendChild(copy3);
    }
    if (playerNum === "4") {
      debugger
      //player 1
      const temp1 = document.querySelector(".templateForOne").content;
      const copy1 = document.importNode(temp1, true);
      const element1 = copy1.querySelector(".playerLabel");
      element1.textContent = "Player 1";
      document.querySelector(".divForPlayer1").appendChild(copy1);
      //player 2
      const temp2 = document.querySelector(".templateForOne").content;
      const copy2 = document.importNode(temp2, true);
      const element2 = copy2.querySelector(".playerLabel");
      element2.textContent = "Player 2";
      document.querySelector(".divForPlayer2").appendChild(copy2);
      //player 3
      const temp3 = document.querySelector(".templateForOne").content;
      const copy3 = document.importNode(temp3, true);
      const element3 = copy3.querySelector(".playerLabel");
      element3.textContent = "Player 3";
      document.querySelector(".divForPlayer3").appendChild(copy3);
      //player 4
      const temp4 = document.querySelector(".templateForOne").content;
      const copy4 = document.importNode(temp4, true);
      const element4 = copy4.querySelector(".playerLabel");
      element4.textContent = "Player 4";
      document.querySelector(".divForPlayer4").appendChild(copy4);

    }
  },

  sortNumbers() {
    this.newCard.sort(function (a, b) { return a - b });
    console.log(this.newCard);
    bingoGame.numberChecker(); 
  },

  numberGenerator(){
    for (let i = 0; i <= 14; i++) {
      let randNum = Math.floor((Math.random() * this.ballSet.length) + 1);
      this.newCard.push(randNum);
      }
      bingoGame.sortNumbers();
  },

  // numberBalanceGenerator(r) {
  //   for (let i = 0; i <= r; i++) {
  //     let randNum = Math.floor((Math.random() * this.ballSet.length) + 1);
  //     this.newCard.push(randNum);
  //     }
  //     console.log(this.newCard);
  //     bingoGame.sortNumbers();
      
  // },

  numberChecker() {
    //check through newCard Array and remove duplicates if array is less than 15 elements in length call numberBalanceGenerator 
    for (let i = 0; i < this.newCard.length; i++) {
      if (this.newCard[i] === this.newCard[i + 1]) {
        this.newCard.splice(i, 1);
      }
    }
    // if (this.newCard.length != 15) {
    //   let balance = 15 - this.newCard.length;
    //   bingoGame.numberBalanceGenerator(balance);
    //   } else {
    //   bingoGame.displayNumbers();
    // }
    bingoGame.displayNumbers();
  },
  
  displayNumbers(){document.querySelector(".numbersCalled").textContent = this.newCard;},
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
  bingoGame.displayBingoCards(playerNum);
  bingoGame.numberGenerator(14);
  //bingoGame.displayNumbers();

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

