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

    constructor(publishers) {
        this.publishers = publishers;
        this.games = []; 
    }

    addGame(game) {

        if(game instanceof Game){
            this.games.push(new Game(game)); // creates a Game Oject adds it to Gamee
        } else{
            throw new Error ("opps");
        }

    }


}




class Menu {
    constructor() {
        this.publishers = [];
        this.menuChoice = null;
    }



    start() {
        let choice = '';

        while ( ) {

            switch (choice) {
                case '1':
                    
                    break;
    
                case '2':
                    break;
    
                case '3':
                    
                    break;
                case '4':
                    break;
                
            
                default: 
                choice = 0;
                    break;
            }
            
            
        }



    }


    menuOptions() {
        return prompt();
    }












}






let menu = new Menu();
