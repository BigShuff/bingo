Bingo Game System Analysis


Start -> how many players (show label + drop down list 1 - 4) 

When drop down is selected ->
Show players area div with correct amount of cards and a player number label for each card
Show full ball set 1 - 90
Show ball called label and ball called place holder x if start of game
Show player status light above player label
Show start game button
Show player status from wins this session label and number placeholder for each player
Show label assign actual players to player card number

When start game button is pressed
1 -Player status light goes to 'game on'
First ball is called by computer program
The ball is shown in ball called place holder and x is removed
The ball is removed from ball set 1-90
IF ball is on a players card use strike through text to mark card
Check to see if all numbers are striked if so player wins see 'Player Wins' below
Add a realistic delay of about 1.5 seconds or so to simulate people checking their card
Put the called ball in the called balls area
Clear the called ball area
Repeat from 1

Player Wins
Player status light changes from game in progress to 'bingo called'.
Card is checked against called balls array
IF all numbers on card exist in called balls array progress light changes to Player (n) Wins
Player status is marked with a win for winning player
Reset game or option to exit.
