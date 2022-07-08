class Game { // Class of Games 
    constructor(game, rating) { // name of game and rating 
        this.game  = game;
        this.rating = rating;
    }
    toString() {
        return `${this.game} Has a rating  ${this.rating}.`;
    }


}



class Publisher { // class puublisher 

    constructor(publisher) {
        this.publisher = publisher;
        this.games = []; 
    }

    addGame(game) {

        if(game instanceof Game){
            this.games.push(game); // creates a Game Oject adds it to games array 
        } else{
            throw new Error (`Not a valid instance of Games. Argument is not a Game: ${game}`);
        }

    }

	describe(){
		return `${this.publisher} has a ${this.games.length} of  Games`;
	}


}




class Menu {
    constructor() {
        this.publishers = [];
        this.selection = null;
    }



    start() {
        let choice = this.menuOptions();

        while (choice != 0 ) {

            switch (choice) {
                case '1':
					this.displayPublishers(); //Method that shows all Publishers 
                    break;
    
                case '2':
					this.createPublishers() // creates publishers
                    break;

    
                case '3':
					this.viewPublishers(); // view publisher 
                    break;

                case '4':
					this.deletePublisher(); // deletes a publisher
                    break;
                
            
                default: 
                choice = 0;
                    
            }
			choice = this.menuOptions();
            
            
        }

		alert("See yaa");



    }


	


	deletePublisher(){
		let index = prompt("Enter the index you want to delete ");
		if (index > -1 && index < this.publishers.length) {
			this.publishers.splice(index,1);
		}
	}



	viewPublishers(){
		let index = prompt ("Enter a index to view a Publisher");
		if(index > -1 && index < this.publishers.length){
			this.selection = this.publishers[index];
			let descrip = "Publisher: "+ this.selection.publisher + ": Games:  " + this.selection.games + '\n';
			

			for (let i = 0; i < this.selection.games.length; i++) {
				descrip += i + ') ' + this.selection.games[i].game + '\n';
				
			}

			let ch = this.gameMenuOptions(descrip);

			switch(ch){
				case '1':
					this.createGame();
					break;
					
				case '2':
					this.deleteGame();

			}

		}

	}

	createPublishers(){
		let addPublisher = prompt("Enter a game Publisher:")
		this.publishers.push(new Publisher (addPublisher));
	}


	displayPublishers(){

		let str = '';
	for (let i = 0; i < this.publishers.length; i++) {
		str += i +'.) ' + this.publishers[i].publisher + '\n';
		
	}
	alert(str);
	}


    menuOptions() {
        return prompt(`
		0.) close Menu Options
		1.) View Publishers
		2.) Create Publishers
		3.) Display Publisher
		4.) Delete Publisher
		
		`);
    }

	gameMenuOptions(gameInfo){
		return prompt (`
		1.) Add a game
		2.) Delete a game
		-------------------------
		${gameInfo}
		`);
	}
	createGame(){
		let game = prompt("enter a game name")
		let rating = prompt("enter a rating between 1-10")

		this.selection.games.push(new Game(game,rating));

	}

	deleteGame(){

		let index = prompt("Enter the index you want to delete ");
		if (index > -1 && index < this.selection.games.length) {
			this.selection.games.splice(index,1);
		}

	}





}






let menu = new Menu();
menu.start();
