$(document).ready(function() {
    var recent_releases;

    $.get("https://gogoanime.herokuapp.com/top-airing", function(data) {
        recent_releases = data;
    }).done(function(){
        recent_releases.forEach((anime) => {
            console.log(anime);
        })
    });

    function makeAnimeCard(anime){
        
    }
});