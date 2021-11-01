/*
    Assignment 5
    Nguyen Le
*/

$(document).ready(function(){

    // your code here
    class ContentCard {

        constructor(id,title,description,category) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.category = category;
        }
        
        updateContent(title,description,category) {
            title = this;
            description = this;
            category = this;
        };
        toString() {
            
        }
    }
    console.log(ContentCard);
//------------------------------------------------------------------------------
//  Array of 5 content cards (games i guess)
    let gameArray = new Array ("Fortnite", "Valorant", "League of Legends", "Tomb Raider", "Risk of Rain");
    console.log(gameArray);
    // const card = {
    //     id = $this,
    //     title = $this,
    //     description = $this,
    //     category = $this
    //     };
});


