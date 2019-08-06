

var projects = [
    project1 = {
        name: "Daily Sweat: Workout",
        deployed: "https://wynnc.github.io/hippie_shizzz/",
        githhub: "https://github.com/wynnc/hippie_shizzz",
        image: "assets/images/portfolio-images/dailySweat.png",
        description: "Provides workouts based on a few selections. Either videos for a user to experience at home, gyms where the user can join classes, or meetups where the user can participate with a group."
    },
    project2 = {
        name: "Crystal Collector Game",
        deployed: "https://kelsimhoyle.github.io/unit-4-game/",
        githhub: "https://github.com/kelsimhoyle/unit-4-game",
        image: "assets/images/portfolio-images/crystalCollector.png",
        description: "Game where the user must figure out a crystal's value and add up to the targeted value."
    },
    project3 = {
        name: "Gif Generator",
        deployed: "https://kelsimhoyle.github.io/gif-generator/",
        githhub: "https://github.com/kelsimhoyle/gif-generator",
        image: "assets/images/portfolio-images/gifGenerator.png",
        description: "Giphy API is used in order to display gifs base on memes. The user may use the meme categories already provided on the page, or add their own!"
    }
]

var iAm = ["Kelsi.", "a programmer.", "a creator.", "a learner.", "a dreamer." ];
var currentWord = 0;
var currentLetter = 0;
var word = "";

function returnWord() {
    if (currentWord < iAm.length) {
    word = iAm[currentWord];
    typeIam(word);
    } else {
        currentWord = 0;
        word = iAm[currentWord];
        console.log(word);
        typeIam(word);
    }
}

function typeIam(word) {
    $("#i-am").empty();
    var letters = word.split("");
    var length = letters.length;
    currentLetter = 0;
    
    var typingInterval = setInterval(typing, 300);

    function typing() {
        if (currentLetter === length) {
            clearInterval(typingInterval);
            currentWord++;
            setTimeout(returnWord, 600);
        } else {
        $("#i-am").append(letters[currentLetter]);
        currentLetter++;
        }
    }
}

returnWord();


function generatePortfolio() {
    $("#portfolio-div").empty();
    var portfolioDisplay = $("<div>").addClass("projects-div");
    for (var i = 0; i < projects.length; i++) {
        var projectDiv = $("<div>").addClass("project");
        var name = $("<h4>").text(projects[i].name);
        var image = $("<img>").attr("src", projects[i].image);
        var hiddenDiv = $("<div>").addClass("hidden");
        var flexDiv = $("<div>").addClass("project-info");
        var links = $("<div>").addClass("links")
        var deployed = $("<a>").attr("href", projects[i].deployed).attr("target", "_blank").html(`<img src="assets/images/view.png" alt="View Project">`);
        var github = $("<a>").attr("href", projects[i].githhub).attr("target", "_blank").html(`<img src="assets/images/repo.png" alt="View GitHub Repository">`);
        var description = $("<p>").text(projects[i].description).addClass("description");
        links.append(github, deployed);
        flexDiv.append(name, description, links);
        hiddenDiv.append(flexDiv);
        projectDiv.append(image, hiddenDiv);
        portfolioDisplay.append(projectDiv);
    }
    $("#portfolio-div").append(portfolioDisplay);

    $(".project").hover(function () {
        $(this).children("div").toggleClass("hidden").toggleClass("text");
    })
};

$(window).scroll(function() {
    var top_of_element = $("#nav").offset().top;
    var bottom_of_element = $("#nav").offset().top + $("#nav").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    // if (top_of_screen > bottom_of_element) {
        
    // }

    
    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // the element isn't visible, do something

        $("header").addClass("hidden");
    } else {
        // the element is not visible, do something else

        $("header").removeClass("hidden");
    }
});



generatePortfolio();


$(".nav-link").on("click", function(){
    $("#content-display").empty();
    var infoType = $(this).attr("data-type");
    if (infoType === "portfolio") {
        $('html, body').animate({
            scrollTop: $("#portfolio-display").offset().top - 50
        }, 1000);
    } else if (infoType === "about") {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top - 100
        }, 1000);
    } else if (infoType === "contact") {
        $('html, body').animate({
            scrollTop: $("#contact-display").offset().top - 50
        }, 1000);
    }
});