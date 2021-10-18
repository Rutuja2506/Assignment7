//STEP 01
var movies = ["Titanic", "Schindler's List", "Interstellar", "The Social Network", "Anabelle"];
window.console.log(movies[1]);

//STEP 02

var movies = [];
movies[0] = "Titanic";
movies[1] = "Schindler's List";
movies[2] = "Interstellar";
movies[3] = "The Social Network";
movies[4] = "Anabelle";
window.console.log(movies[0]);


//STEP 03

var movies = ["Titanic", "Schindler's List", "Interstellar", "The Social Network", "Anabelle"];
movies[movies.length] = "Jurrasic Park";
window.console.log(movies.length);


//STEP 04

var movies = [];
movies[0] = "Titanic";
movies[1] = "Schindler's List";
movies[2] = "Interstellar";
movies[3] = "The Social Network";
movies[4] = "Anabelle";
delete movies[0];
window.console.log(movies);

//STEP 05
var movies = [];
movies[0] = "Titanic";
movies[1] = "Schindler's List";
movies[2] = "Interstellar";
movies[3] = "The Social Network";
movies[4] = "Anabelle";
movies[5] = "Jurrasic Park";
movies[6] = "The Godfather";

var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

//STEP 06

var movies = [];
movies[0] = "Titanic";
movies[1] = "Schindler's List";
movies[2] = "Interstellar";
movies[3] = "The Social Network";
movies[4] = "Anabelle";
movies[5] = "Jurrasic Park";
movies[6] = "The Godfather";

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}


//STEP 07
var movies = [];
movies[0] = "Titanic";
movies[1] = "Schindler's List";
movies[2] = "Interstellar";
movies[3] = "The Social Network";
movies[4] = "Anabelle";
movies[5] = "Jurrasic Park";
movies[6] = "The Godfather";
movies.sort();

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

//STEP 08
var movies = [];
movies[0] = "Titanic";
movies[1] = "Schindler's List";
movies[2] = "Interstellar";
movies[3] = "The Social Network";
movies[4] = "Anabelle";
movies[5] = "Jurrasic Park";
movies[6] = "The Godfather";

window.console.log("Movies I like:\n\n");
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

var leastFavMovies = [];
leastFavMovies[0] = "Avatar";
leastFavMovies[1] = "Aliens";
leastFavMovies[2] = "The Holiday";

window.console.log("\n\nMovies I regret watching:\n\n");
var element;
for (element in leastFavMovies) {
    if (leastFavMovies.hasOwnProperty(element)) {
        window.console.log(leastFavMovies[element]);
    }
}

//STEP 09

var movies = [];
movies[0] = "Titanic";
movies[1] = "Schindler's List";
movies[2] = "Interstellar";
movies[3] = "The Social Network";
movies[4] = "Anabelle";
movies[5] = "Jurrasic Park";
movies[6] = "The Godfather";

var leastFavMovies = [];
leastFavMovies[0] = "Avatar";
leastFavMovies[1] = "Aliens";
leastFavMovies[2] = "The Holiday";

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}


//STEP 10

var movies = [];
movies[0] = "Titanic";
movies[1] = "Schindler's List";
movies[2] = "Interstellar";
movies[3] = "The Social Network";
movies[4] = "Anabelle";
movies[5] = "Jurrasic Park";
movies[6] = "The Godfather";

var leastFavMovies = [];
leastFavMovies[0] = "Avatar";
leastFavMovies[1] = "Aliens";
leastFavMovies[2] = "The Holiday";

movies = movies.concat(leastFavMovies);
window.console.log(movies.pop());
