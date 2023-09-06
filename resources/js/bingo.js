//BINGO GAME OBJECT LITERAL DECLARED
bingoGame = {
  //THE allNumbers ARRAY HOLDS THE FULL RANGE OF BINGO NUMBERS FROM 1 TO 90
  allNumbers: [],

  //THE cardNumbers ARRAY HOLDS 15 UNIQUE AND RANDOM NUMBERS THAT WILL LATER BE USED TO POPULATE EACH BINGO CARD
  cardNumbers: [],

  //THE numbersForLineOne ARRAY HOLDS THE LOWEST FIVE NUMBERS FOR LINE ONE
  numbersForLine1: [],

  //THE numbersForLineTwo ARRAY HOLDS THE MIDDLE FIVE NUMBERS FOR LINE TWO
  numbersForLine2: [],

  //THE numbersForLineThree ARRAY HOLDS THE HIGHEST FIVE NUMBERS FOR LINE THREE
  numbersForLine3: [],

  //THE formattedNumberLineOne HOLDS THE NUMBERS AND SPACES IN A RANDOMISED PATTERN READY TO BE INSERTED IN THE HTML ELEMENTS THAT CREATE THE BINGO CARD LINE ONE  
  formattedNumberLine1: [],

  //THE formattedNumberLineTwo HOLDS THE NUMBERS AND SPACES IN A RANDOMISED PATTERN READY TO BE INSERTED IN THE HTML ELEMENTS THAT CREATE THE BINGO CARD LINE TWO
  formattedNumberLine2: [],

  //THE formattedNumberLineThree HOLDS THE NUMBERS AND SPACES IN A RANDOMISED PATTERN READY TO BE INSERTED IN THE HTML ELEMENTS THAT CREATE THE BINGO CARD LINE THREE  
  formattedNumberLine3: [],

  //THE patternMaker ARRAY IS SHUFFLED TO CREATE A RANDOM PATTERN OF NUMBERS AND SPACES
  patternMaker: ['s', 's', 's', 's', 'n', 'n', 'n', 'n', 'n'],

  //THE pattern ARRAY HOLDS THE UNIQUELY SHUFFLED ARRAY OF patternMaker
  pattern1: [],

  //THE pattern ARRAY HOLDS THE UNIQUELY SHUFFLED ARRAY OF patternMaker
  pattern2: [],

  //THE pattern ARRAY HOLDS THE UNIQUELY SHUFFLED ARRAY OF patternMaker
  pattern3: [],

  setNumbers() {
    //replace the numbers 1-90 at the start of each game put them in the allNumbers array
    for (let i = 1; i <= 90; i++) {
      this.allNumbers.push(i);
    }
  },
  //display the new set of numbers that has been put in the allNumbers array.
  displayNumbers() {
    let set = bingoGame.allNumbers;
    document.querySelector(".fullNumSet").textContent = set.join(' ');
  },

  //display a new bingo card at the start of each game NOTE these cards have no numbers yet
  //Note there are four copies as each player label needs to represent a different player
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

  //*****THE NEXT SECTION SORTS OUT RANDOM NUMBERS AND SPACES FOR THE BINGO CARD UPTO lineFormatter3*****
  getFifteenRandomNumbers() {
    //GENERATE FIFTEEN UNIQUE RANDOM NUMBERS PUT THEM IN AN ARRAY CALLED cardNumbers
    while (this.cardNumbers.length < 15) {
      randNum = Math.floor(Math.random() * (90 - 1) + 1);
      this.allNumbers.splice(randNum - 1, 1);
      this.cardNumbers.push(randNum);
      this.cardNumbers.sort(function (a, b) { return a - b });
      for (let i = 0; i < 15; i++) {
        if (this.cardNumbers[i + 1] === this.cardNumbers[i]) {
          this.cardNumbers.splice(i, 1);
        }
      }
    }
  },

  splitCardNumbersForEachLine() {
    /* SPLIT THE FIFTEEEN RANDOM NUMBERS INTO THREE GROUPS (ARRAYS) LOWEST FIVE NUMBERS FOR
    FIRST LINE MIDDLE FIVE NUMBERS FOR MIDDLE AND HIGHEST FIVE NUMBERS FOR BOTTOM LINE */
    for (let i = 0; i < 15; i++) {
      if (i < 5) {
        this.numbersForLine1.push(this.cardNumbers[i]);
      } else if (i < 10) {
        this.numbersForLine2.push(this.cardNumbers[i]);
      } else {
        this.numbersForLine3.push(this.cardNumbers[i]);
      }
    }

  },

  patternMakerShuffler() {
    //CALLED BY lineFormatter 
    //BY SHUFFLING THE 'patternMaker' ARRAY WE CREATE A RANDOM PATTERN OF NUMBERS AND SPACES FOR EACH LINE OF THE BINGO CARD 
    this.pattern1 = this.patternMaker.sort((a, b) => 0.5 - Math.random());
    this.pattern2 = this.patternMaker.sort((a, b) => 0.5 - Math.random());
    this.pattern3 = this.patternMaker.sort((a, b) => 0.5 - Math.random());
    //LEFT IN FOR TESTING
    //console.log(this.pattern2);
  },

  lineFormatter1() {
    //CYCLE THROUGH THE 'pattern' ARRAY TO SEE WHAT IS GOING TO BE A SPACE AND WHAT IS GOING TO BE A NUMBER. 'n' WILL BE A NUMBER 's' WILL BE A SPACE
    //FOR LINE 1
    this.patternMakerShuffler();
    for (let i = 0; i < this.pattern1.length; i++) {
      if (this.pattern1[i] === 'n') {
        let shiftedNumber = this.numbersForLine1.shift();
        this.formattedNumberLine1[i] = shiftedNumber;
      } else if (this.pattern1[i] === 's') {
        let space = 0;
        this.formattedNumberLine1[i] = space;

      }
    }
  },

  lineFormatter2() {
    //CYCLE THROUGH THE 'pattern' ARRAY TO SEE WHAT IS GOING TO BE A SPACE AND WHAT IS GOING TO BE A NUMBER. 'n' WILL BE A NUMBER 's' WILL BE A SPACE   
    //FOR LINE 2
    this.patternMakerShuffler();
    for (let i = 0; i < this.pattern2.length; i++) {
      if (this.pattern2[i] === 'n') {
        let shiftedNumber = this.numbersForLine2.shift();
        this.formattedNumberLine2[i] = shiftedNumber;
      } else if (this.pattern2[i] === 's') {
        let space = 0;
        this.formattedNumberLine2[i] = space;

      }

    }
  },

  lineFormatter3() {
    //FOR LINE 2
    //CYCLE THROUGH THE 'pattern' ARRAY TO SEE WHAT IS GOING TO BE A SPACE AND WHAT IS GOING TO BE A NUMBER. 'n' WILL BE A NUMBER 's' WILL BE A SPACE
    this.patternMakerShuffler();
    for (let i = 0; i < this.pattern3.length; i++) {
      if (this.pattern3[i] === 'n') {
        let shiftedNumber = this.numbersForLine3.shift();
        this.formattedNumberLine3[i] = shiftedNumber;
      } else if (this.pattern3[i] === 's') {
        let space = 0;
        this.formattedNumberLine3[i] = space;

      }
    }
  },
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
  bingoGame.setNumbers();
  bingoGame.displayNumbers();
  bingoGame.displayBingoCards(playerNum);
  bingoGame.getFifteenRandomNumbers();
  bingoGame.splitCardNumbersForEachLine();

  bingoGame.lineFormatter1();
  bingoGame.lineFormatter2();
  bingoGame.lineFormatter3();

  //NEXT PUT THESE ARRAY CONTENTS INTO HTML ELEMENTS
  console.log(bingoGame.formattedNumberLine1);
  console.log(bingoGame.formattedNumberLine2);
  console.log(bingoGame.formattedNumberLine3);
});




