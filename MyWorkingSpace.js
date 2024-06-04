// NAME: ChoiYoungHan 201910146
// DATE: 12-09 end
// Assignment Title: Picking up coins while running away


//Arrangement of maps
let Board2 = [
	["purple","purple","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","purple","purple"],
	["purple","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","purple"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","yellow","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","green","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["red","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","red"],
	["purple","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","purple"],
	["purple","purple","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","purple","purple"]
];

//Initial position coordinates of users and enemies
let User = [9,10];
let Enemy1 = [1,1];
let Enemy2 = [1,1];
let Enemy3 = [17,2];
let Enemy4 = [17,17];
let Enemy5 = [2,17];
let Enemy6 = [2,2];

//An enemy's life variable.
let Enemy1Life = true;
let Enemy2Life = true;
let Enemy3Life = true;
let Enemy4Life = true;
let Enemy5Life = true;
let Enemy6Life = true;

//An enemy's create variable.
let CreateEnemy2 = false;
let CreateEnemy3 = false;
let CreateEnemy4 = false;
let CreateEnemy5 = false;
let CreateEnemy6 = false;


let Direction = "right";
let runGame = false;

//A variable to control the movement of the enemy.
let count = 0;
let count2 = 0;
let count3 = 0;

//Disable the rest of the buttons so that you can only press the Game Rule button at the start of the game.
document.getElementById("startButton").disabled = true;
document.getElementById("gamePause").disabled = true;
document.getElementById("reStart").disabled = true;

let level = 0;
let score = 0;

//game score board and level system
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');
const levelElement = document.querySelector('.level');

//Getting high score form the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

//Play sound file functions
function playCoinSound(){
    let coinSound = document.getElementById("coinSound");
    coinSound.play();
}
function playDeadSound(){
    let deadSound = document.getElementById("deadSound");
    deadSound.play();
}
function playLevelSound(){
    let levelSound = document.getElementById("levelSound");
    levelSound.play();
}
function playStartSound(){
    let startSound = document.getElementById("startSound");
    startSound.play();
}

//Accept key inputs from the user.
function KeyPressed(event){
	console.log(event.code);
	if (event.code === "ArrowUp" && Direction !== "Arrowdown") Direction = "up";
	if (event.code === "ArrowDown" && Direction !== "Arrowup") Direction = "down";
	if (event.code === "ArrowLeft" && Direction !== "Arrowright") Direction = "left";
	if (event.code === "ArrowRight" && Direction !== "Arrowleft") Direction = "right";
}

function UpdateDirection(direction){
	//Set direction
	Direction = direction;
	MoveUser();
}

//Check the progress of the game to adjust the activation and deactivation of the button.
function CheckVariableValues(){
	if (runGame){
		document.getElementById("gamePause").disabled = true;
		document.getElementById("startButton").disabled = false;
	} else if (runGame==false){
		document.getElementById("gamePause").disabled = false;
		document.getElementById("startButton").disabled = true;
	}
	

}

//Press the Restart button to refresh the page.
function ReStart(){
	location.reload();
}


function MoveUser(){

	Board2[User[0]][User[1]] = "white";

	//Get x and y positions of User head
	let xPosOfUserHead = User[0];
	let yPosOfUserHead = User[1];

	//Check for deadly collisions
	//Current position of head
	let xPosUserNext = User[0];
	let yPosUserNext = User[1];


	//Update to next position
	if (Direction == "right") yPosUserNext++;
	if (Direction == "left") yPosUserNext--;
	if (Direction == "up") xPosUserNext--;
	if (Direction == "down") xPosUserNext++;

	if (Direction == "right"){
		User[0] = xPosUserNext;
		User[1] = yPosUserNext;
	}
	if (Direction == "left"){
		User[0] = xPosUserNext;
		User[1] = yPosUserNext;
	}
	if (Direction == "up"){
		User[0] = xPosUserNext;
		User[1] = yPosUserNext;
	}
	if (Direction == "down"){
		User[0] = xPosUserNext;
		User[1] = yPosUserNext;
	}

	//This is the condition that the user will be game over.
	if (Board2[User[0]][User[1]] === "red"){
		playDeadSound();
        alert("*=*=*=*=*=* Game Over! *=*=*=*=*=*\n\n     You hit the wall!\n\n*=*=*=*=*=* Try again! *=*=*=*=*=*=*");
		stopMain();
		document.getElementById("startButton").disabled = true;
		document.getElementById("gamePause").disabled = true;
		document.getElementById("reStart").disabled = false;
    }
	if (Board2[User[0]][User[1]] === "purple"){
		playDeadSound();
        alert("*=*=*=*=*=* Game Over! *=*=*=*=*=*\n\n     You hit the wall!\n\n*=*=*=*=*=* Try again! *=*=*=*=*=*=*");
		stopMain();
        document.getElementById("startButton").disabled = true;
		document.getElementById("gamePause").disabled = true;
		document.getElementById("reStart").disabled = false;
    }
	if (Board2[User[0]][User[1]] === "gray"){
		playDeadSound();
        alert("*=*=*=*=*=* Game Over! *=*=*=*=*=*\n\n     You hit the wall!\n\n*=*=*=*=*=* Try again! *=*=*=*=*=*=*");
		stopMain();
        document.getElementById("startButton").disabled = true;
		document.getElementById("gamePause").disabled = true;
		document.getElementById("reStart").disabled = false;
    }

	Board2[User[0]][User[1]] = "green";
}

//Create yellow(coin) blocks at random locations on the board.
function CreateYellowBlock(){
	if (!Board2.flat().includes("yellow")){
		//Creating a random x and y positions
		let xRandomPos = Math.floor(Math.random() * 20);
		let yRandomPos = Math.floor(Math.random() * 20);

		//If that position falls on a non-blank space,
		//then make new random positions
		while (Board2[xRandomPos][yRandomPos] !== "white"){
			xRandomPos = Math.floor(Math.random() * 20);
			yRandomPos = Math.floor(Math.random() * 20);
		}

		if (Board2[xRandomPos][yRandomPos] === "white") {
			Board2[xRandomPos][yRandomPos] = "yellow";
		}
	}
}

//print gamerule
function gameRule(){
	alert(
		"*=*=*=*=*=*=*=*=*=* Game Rule! *=*=*=*=*=*=*=*=*=*" +
		"\nThis is an Arrays and blocks game!" +
		"\nThe way to play it is very simple." +
		"\n\nYou are a green block and can move through the \ndirection key (←↕→)." +
		"\n\nThe blue blocks continue to chase you as your enemies." +
		"\n\nThe purple block is where the enemy appears." +
		"\n\nIt's better to stay away." +
		"\n\nYou can run away through the direction key and pick up coins" +
		"\nthat have fallen to the ground with a mouse click." +
		"\n\nIf you get caught by an enemy or run into a red block, \nit's game over." +
		"\n\nHow many points can you get? \nPress the Game Start button to play!" +
		"\n*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*"
	);

	playStartSound();
	document.getElementById("startButton").disabled = false;
	document.getElementById("gameRule").disabled = true;
}

//Call this function to draw the blockArray
function drawBlockArray() {
	ClearGrid()
	drawArray(Board2);
}

//If the block you clicked is a coin block, get score points
function blockClickedEvent(x,y){
	console.log(x,y);

	if (Board2[x][y] === "yellow") {
        // Change the yellow block to white
        Board2[x][y] = "white";

		playCoinSound();

		// Add points or perform other actions for scoring
        score = score + 10;
		drawBlockArray();
		
		//Change the highscore count
		highScore = score >= highScore ? score : highScore;
		localStorage.setItem("high-score", highScore);
		//Change the score count
		scoreElement.innerText = `Score: ${score}`;
    }

	//Check the score to level up and create enemies to increase the difficulty of the game.
	if (score == 100){ //Level.1  //100 200 350 500 650 850
		if (CreateEnemy2 == false){
			playLevelSound();
			CreateEnemy2 = true;
			level++
			levelElement.innerText = `Level: ${level}`;
		}
	}

	if (score == 200){ //Level.2
		if (CreateEnemy3 == false){
			playLevelSound();
			CreateEnemy3 = true;
			level++
			levelElement.innerText = `Level: ${level}`;
		}
	}

	if (score == 350){ //Level.3
		if (CreateEnemy4 == false){
			playLevelSound();
			CreateEnemy4 = true;
			level++
			levelElement.innerText = `Level: ${level}`;
		}
	}

	if (score == 500){ //Level.4
		if (CreateEnemy5 == false){
			playLevelSound();
			CreateEnemy5 = true;
			level++
			levelElement.innerText = `Level: ${level}`;
		}
	}

	if (score == 650){ //Level.5
		if (CreateEnemy5 == false){
			playLevelSound();
			CreateEnemy5 = true;
			level++
			levelElement.innerText = `Level: ${level}`;
		}
	}

	if (score == 800){ //Level. Max
		if (CreateEnemy6 == false){
			playLevelSound();
			CreateEnemy6 = true;
			level = "Max"
			levelElement.innerText = `Level:    ${level}`;
		}
	}
}

//It is a function of creating an enemy and the movement of the enemy, the death conditions of the enemy.
function calculateEnemyChasePosition(){
	//This is an EXAMPLE of the logic for making an enemy chase the player
	if (Enemy1Life){
		Board2[Enemy1[0]][Enemy1[1]] = "white";
	
		//Update enemy position based on userPosition
		//Update x coordinate
		if (count2 == 0){
			if (User[0] < Enemy1[0]) {
				Enemy1[0] = Enemy1[0] - 1;
			} else if (User[0] > Enemy1[0]) {
				Enemy1[0] = Enemy1[0] + 1;
			}
		}
		//Update y coordinate
		if (count2 == 1){
			if (User[1] < Enemy1[1]) {
				Enemy1[1] = Enemy1[1] - 1;
			} else if (User[1] > Enemy1[1]) {
				Enemy1[1] = Enemy1[1] + 1;
			}
		}

		//If the enemy is in a place that matches the player, you get a game over.
		if (Enemy1[0] === User[0] && Enemy1[1] === User[1]){
			stopMain();
			alert("*=*=*=*=*=* Game Over! *=*=*=*=*=*\n\n     Attacked by enemy!\n\n*=*=*=*=*=* Try again! *=*=*=*=*=*=*");
			playDeadSound();
			document.getElementById("startButton").disabled = true;
			document.getElementById("gamePause").disabled = true;
			document.getElementById("reStart").disabled = false;
		}

		//Deactivate enemy's life if they run into that block.
		if (Board2[Enemy1[0]][Enemy1[1]] === "red"){
			Enemy1Life = false;
		}
		if (Board2[Enemy1[0]][Enemy1[1]] === "purple"){
			Enemy1Life = false;
		}
		if (Board2[Enemy1[0]][Enemy1[1]] === "gray"){
			Enemy1Life = false;
		}
	
		Board2[Enemy1[0]][Enemy1[1]] = "blue";

		if (Enemy1Life === false) Board2[Enemy1[0]][Enemy1[1]] = "gray";

		//Make sure to move only one space per turn to prevent the enemy from moving too fast.
		if (count2 == 0) count2 = 1;
		else if (count2 == 1) count2 = 0;
	}

	if (CreateEnemy2){
		if (Enemy2Life){

			Board2[Enemy2[0]][Enemy2[1]] = "white";
	
			if (count == 0){
				if (User[0] < Enemy2[0]) {
					Enemy2[0] = Enemy2[0] - 1;
				} else if (User[0] > Enemy2[0]) {
					Enemy2[0] = Enemy2[0] + 1;
				}
			}
			
			if (count == 1){
				if (User[1] < Enemy2[1]) {
					Enemy2[1] = Enemy2[1] - 1;
				} else if (User[1] > Enemy2[1]) {
					Enemy2[1] = Enemy2[1] + 1;
				}
			}

			if (Enemy2[0] === User[0] && Enemy2[1] === User[1]){
				stopMain();
				alert("*=*=*=*=*=* Game Over! *=*=*=*=*=*\n\n     Attacked by enemy!\n\n*=*=*=*=*=* Try again! *=*=*=*=*=*=*");
				playDeadSound();
				document.getElementById("startButton").disabled = true;
				document.getElementById("gamePause").disabled = true;
				document.getElementById("reStart").disabled = false;
			}

			if (Board2[Enemy2[0]][Enemy2[1]] === "red"){
				Enemy2Life = false;
			}
			if (Board2[Enemy2[0]][Enemy2[1]] === "purple"){
				Enemy2Life = false;
			}
			if (Board2[Enemy2[0]][Enemy2[1]] === "gray"){
				Enemy2Life = false;
			}
			
			Board2[Enemy2[0]][Enemy2[1]] = "blue";

			if (Enemy2Life === false) Board2[Enemy2[0]][Enemy2[1]] = "gray";

			//If you move at the same speed as the first enemy you created, 
			//they overlap each other, so you add variables to move anomalously, which makes the movement duller.
			if (count == 0) count = 1;
			else if (count == 1) count = 2;
			else if (count == 2) count = 0;
		}
	}

	if (CreateEnemy3){
		if (Enemy3Life){
			Board2[Enemy3[0]][Enemy3[1]] = "white";
		
			//From now on, the enemies that are generated will have random movements, so it can make the player more dangerous.
			let randomMove = getRandom(4);

			if (randomMove===1) {
				Enemy3[0] = Enemy3[0] - 1;
			}else if (randomMove===2) {
				Enemy3[0] = Enemy3[0] + 1;
			}else if (randomMove===3) {
				Enemy3[1] = Enemy3[1] - 1;
			}else if (randomMove===4) {
				Enemy3[1] = Enemy3[1] + 1;
			}
			

			if (Enemy3[0] === User[0] && Enemy3[1] === User[1]){
				stopMain();
				alert("*=*=*=*=*=* Game Over! *=*=*=*=*=*\n\n     Attacked by enemy!\n\n*=*=*=*=*=* Try again! *=*=*=*=*=*=*");
				playDeadSound();
				document.getElementById("startButton").disabled = true;
				document.getElementById("gamePause").disabled = true;
				document.getElementById("reStart").disabled = false;
			}

			if (Board2[Enemy3[0]][Enemy3[1]] === "red"){
				Enemy3Life = false;
			}
			if (Board2[Enemy3[0]][Enemy3[1]] === "purple"){
				Enemy3Life = false;
			}
			if (Board2[Enemy3[0]][Enemy3[1]] === "gray"){
				Enemy3Life = false;
			}
			
			Board2[Enemy3[0]][Enemy3[1]] = "blue";

			//Randomly moving enemies can hit the wall, 
			//so if they hit the wall, they change their location to gray and respawn to the first spawning location.
			if (Enemy3Life === false){
				Board2[Enemy3[0]][Enemy3[1]] = "gray";
				Enemy3 = [17,2];

				//Reactivate the enemylife variable that you deactivated above to create a new enemy and to move again.
				Enemy3Life = true;
			}
		}
	}

	if (CreateEnemy4){
		if (Enemy4Life){
			Board2[Enemy4[0]][Enemy4[1]] = "white";
		
	
			let randomMove = getRandom(4);

			if (randomMove===1) {
				Enemy4[0] = Enemy4[0] - 1;
			}else if (randomMove===2) {
				Enemy4[0] = Enemy4[0] + 1;
			}else if (randomMove===3) {
				Enemy4[1] = Enemy4[1] - 1;
			}else if (randomMove===4) {
				Enemy4[1] = Enemy4[1] + 1;
			}
			

			if (Enemy4[0] === User[0] && Enemy4[1] === User[1]){
				stopMain();
				alert("*=*=*=*=*=* Game Over! *=*=*=*=*=*\n\n     Attacked by enemy!\n\n*=*=*=*=*=* Try again! *=*=*=*=*=*=*");
				playDeadSound();
				document.getElementById("startButton").disabled = true;
				document.getElementById("gamePause").disabled = true;
				document.getElementById("reStart").disabled = false;
			}

			if (Board2[Enemy4[0]][Enemy4[1]] === "red"){
				Enemy4Life = false;
			}
			if (Board2[Enemy4[0]][Enemy4[1]] === "purple"){
				Enemy4Life = false;
			}
			if (Board2[Enemy4[0]][Enemy4[1]] === "gray"){
				Enemy4Life = false;
			}
	
			Board2[Enemy4[0]][Enemy4[1]] = "blue";

			if (Enemy4Life === false){
				Board2[Enemy4[0]][Enemy4[1]] = "gray";
				Enemy4 = [17,17];
				Enemy4Life = true;
			}
		}
	}

	if (CreateEnemy5){
		if (Enemy5Life){
			Board2[Enemy5[0]][Enemy5[1]] = "white";
		
	
			let randomMove = getRandom(4);

			if (randomMove===1) {
				Enemy5[0] = Enemy5[0] - 1;
			}else if (randomMove===2) {
				Enemy5[0] = Enemy5[0] + 1;
			}else if (randomMove===3) {
				Enemy5[1] = Enemy5[1] - 1;
			}else if (randomMove===4) {
				Enemy5[1] = Enemy5[1] + 1;
			}
			

			if (Enemy5[0] === User[0] && Enemy5[1] === User[1]){
				stopMain();
				alert("*=*=*=*=*=* Game Over! *=*=*=*=*=*\n\n     Attacked by enemy!\n\n*=*=*=*=*=* Try again! *=*=*=*=*=*=*");
				playDeadSound();
				document.getElementById("startButton").disabled = true;
				document.getElementById("gamePause").disabled = true;
				document.getElementById("reStart").disabled = false;
			}

			if (Board2[Enemy5[0]][Enemy5[1]] === "red"){
				Enemy5Life = false;
			}
			if (Board2[Enemy5[0]][Enemy5[1]] === "purple"){
				Enemy5Life = false;
			}
			if (Board2[Enemy5[0]][Enemy5[1]] === "gray"){
				Enemy5Life = false;
			}
			
			Board2[Enemy5[0]][Enemy5[1]] = "blue";

			if (Enemy5Life === false){
				Board2[Enemy5[0]][Enemy5[1]] = "gray";
				Enemy5 = [2,17];
				Enemy5Life = true;
			}
		}
	}

	if (CreateEnemy6){
		if (Enemy6Life){
			Board2[Enemy6[0]][Enemy6[1]] = "white";
		

			let randomMove = getRandom(4);

			if (randomMove===1) {
				Enemy6[0] = Enemy6[0] - 1;
			}else if (randomMove===2) {
				Enemy6[0] = Enemy6[0] + 1;
			}else if (randomMove===3) {
				Enemy6[1] = Enemy6[1] - 1;
			}else if (randomMove===4) {
				Enemy6[1] = Enemy6[1] + 1;
			}
			

			if (Enemy6[0] === User[0] && Enemy6[1] === User[1]){
				stopMain();
				alert("*=*=*=*=*=* Game Over! *=*=*=*=*=*\n\n     Attacked by enemy!\n\n*=*=*=*=*=* Try again! *=*=*=*=*=*=*");
				playDeadSound();
				document.getElementById("startButton").disabled = true;
				document.getElementById("gamePause").disabled = true;
				document.getElementById("reStart").disabled = false;
			}

			if (Board2[Enemy6[0]][Enemy6[1]] === "red"){
				Enemy6Life = false;
			}
			if (Board2[Enemy6[0]][Enemy6[1]] === "purple"){
				Enemy6Life = false;
			}
			if (Board2[Enemy6[0]][Enemy6[1]] === "gray"){
				Enemy6Life = false;
			}
			
			Board2[Enemy6[0]][Enemy6[1]] = "blue";

			if (Enemy6Life === false){
				Board2[Enemy6[0]][Enemy6[1]] = "gray";
				Enemy6 = [2,2];
				Enemy6Life = true;
			}
		}
	}
}

function MainLoop()
{

	CheckVariableValues();

	drawBlockArray();

	CreateYellowBlock();
	
	document.addEventListener("keydown", KeyPressed);

	console.log('Main loop running');

	calculateEnemyChasePosition();

	MoveUser();

    drawBlockArray();

}


