const bingoGame = {
  ballSet: [],
  //   newCard: [],

  replaceBalls() {
    for (let i = 1; i <= 90; i++) {
      this.ballSet.push([i]);
    }
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




//insert into an array at a specific place
//about inserting into an array
//array: name of array / start: the element you wish to inset at (the changes take place immediately after)
//deleteCount: the amount of items you wish to delete starting place is start index,
//item 1 etc: the content of what you wish to put into the array at start index.
//array.splice(start, deleteCount, item 1, item2);
//this.ballSet.splice(3, 1, 6); takes out number 4 and puts 6 in it's place.

const modal = document.getElementById("modal");

window.addEventListener("DOMContentLoaded", (event) => {
  modal.showModal();
});

const closeModal = document.querySelector(".numButton");

closeModal.addEventListener("click", () => {
  const playerNum = document.getElementById("numberSelect").value;
  modal.close();
  bingoGame.replaceBalls();
  let set = bingoGame.ballSet;
  document.querySelector(".fullNumSet").innerHTML = set.join(' ');
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



// numButton.addEventListener("click", ()=>{
//   console.log('Hello');

//   });

const button = document.querySelector(".btn");
button.onclick = () => {
  document.getElementById("player").innerHTML = card.join(' ');
}