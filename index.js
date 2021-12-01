/* Function to get a random song from array */
function random_song(songs) {
    return songs[Math.floor(Math.random()*songs.length)];
}

/* Array of 6 songs */
let songs = ['Liekeissä',
            'Avaimet mun kiesiin',
            'Timantit on ikuisia',
            'Jippikayjei',
            'Sokka irti',
            'Syypää sun hymyyn']

/* Print random item to terminal */
console.log(random_song(songs));