"use strict";
// create function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title
        // tracks optional
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions & creating 3 variables with different value
let album1 = make_album("umair", "album title 1");
let album2 = make_album("usman", "album title 2");
let album3 = make_album("babar", "album title 3", 10);
// print values of our object created my funcion
console.log(album1);
console.log(album2);
console.log(album3);
