class Game { // Class of Games 
    constructor(game, rating) { // name of game and rating 
        this.game  = game;
        this.rating = rating;
    }
    toString() {
        return this.game + "  has a rating of " + this.rating + '\n';
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
            throw new Error ("opps");
        }

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
					this.viewPublishers(); 
                    break;

                case '4':
					this.deletePublisher();
                    break;
                
            
                default: 
                choice = 0;
                    
            }
			choice = this.menuOptions();
            
            
        }



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

			for (let i = 0; i < this.selection.games.length; i++) {
			
				
			}

			let ch = this.gameMenuOptions();

			switch(ch){
				case '1':
					this.createGame();
					alert("test 1");
					
				case '2':
					alert("test 2");

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

	gameMenuOptions(gameMenu){
		return prompt (`
		1.) Add a game
		2.) Delete a game
		-------------------------
		
		`);
	}
	createGame(){
		let game = prompt("enter a game name")
		let rating = prompt("enter a rating between 1-10")

		this.selection.games.push(new Game(game,rating));

	}












}






let menu = new Menu();
menu.start();
