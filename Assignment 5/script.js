/*
    Assignment 5
    Nguyen Le
*/

$(document).ready(function(){
    // your code here
    class ContentCard {
        //it still worked without the properties 
        // id; 
        // title; 
        // description; 
        // category;

        constructor(id,title,description,category) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.category = category;
        }
        updateContent(title,description,category) {
            if(title,description,category) {
            this.title = title;
            this.description = description;
            this.category = category;
            }
        }
        toString() {
            return `
                    <div id="content-${this.id}">
						<h4>${this.title}</h4>
						<p>${this.description}</p>
						<div>${this.category}</div>
					</div>
                    `;
        }
    }
    console.log(ContentCard);
//------------------------------------------------------------------------------
//  Array of 5 content cards (games i guess)
    let MMOGame = [ new ContentCard (0, "Genshin Impact", "Open World", "MMORPG"),
                    new ContentCard (1, "SoulWorker", "Not Open World", "MMORPG"),
                    new ContentCard (2, "Warframe", "Sci-Fi", "MMOTPS"),
                    new ContentCard (3, "Enlisted", "Historical", "MMOFPS"),
                    new ContentCard (4, "Lineage 2 Essence", "Fantasy", "MMORPG")
                  ];
    console.log(MMOGame);
    //display the array on page
    MMOGame.forEach(function(g, game) {
        $('#content-list').append(MMOGame[game].toString());
    });
});


