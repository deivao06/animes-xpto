$(document).ready(function() {
    let slideIndex = 0;
    let nav_bar = $(".nav-bar");
    let animesHtml = "";

    $.get("https://gogoanime.herokuapp.com/top-airing").done(function(data){
        data.forEach(function(value){
            var tags = ""
            
            value.genres.forEach((genre) => {
                tags += `<div class="tag btn">${genre}</div>`;
            });

            animesHtml += `<div class="anime fade">
                                <div class="image-container">
                                    <img class="anime-image btn" src="${value.animeImg}" alt="">
                                    <span class="last-episode">${value.latestEp}</span>
                                </div>
                                <div class="anime-info">
                                    <span class="anime-title">${value.animeTitle}</span>                
                                    <div class="tags">
                                        ${tags}
                                    </div>
                                </div>
                            </div>`;
        });

        nav_bar.html(animesHtml);
        showSlides();
    });


    function showSlides() {
        let i;
        let slides = $(".anime");
    
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
    
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
    
        slides[slideIndex-1].style.display = "flex";
        let animeImage = $(slides[slideIndex-1]).find(".anime-image")[0].src;
        
        $(".background-image").css("background-image", "url(" + animeImage + ")");
    
        setTimeout(showSlides, 10000); // Change image every 2 seconds
    }
});