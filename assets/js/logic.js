

var projects = [
    project1 = {
        name: "Daily Sweat: Workout",
        deployed: "http://www.kelsihoyle.me/daily-sweat/.",
        githhub: "https://github.com/kelsimhoyle/daily-sweat",
        image: "assets/images/portfolio-images/dailySweat.png",
        description: "Provides workouts based on a few selections. Either videos for a user to experience at home, gyms where the user can join classes, or meetups where the user can participate with a group."
    },
    project2 = {
        name: "Friend Finder",
        deployed: "https://young-falls-67340.herokuapp.com/",
        githhub: "https://github.com/kelsimhoyle/friend-finder",
        image: "assets/images/portfolio-images/friendFinder.png",
        description: "Take a survey and see who you match with! This is a Node app with a SQL Database."
    },
    project3 = {
        name: "'Bamazon App'",
        deployed: "https://github.com/kelsimhoyle/mysqlhw",
        githhub: "https://github.com/kelsimhoyle/mysqlhw",
        image: "assets/images/portfolio-images/bamazon.jpg",
        description: "This Node command line app acts like on online storefront. With the use of MySQL, the user is able to interact with the database that has all of the stock information."
    }
    // , 
    // project4 = {
    //     name: "",
    //     deployed: "",
    //     github: "",
    //     image: "",
    //     description: ""
    // }
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
        var deployed = $("<a>").attr("href", projects[i].deployed).attr("target", "_blank").text("View Project");
        var github = $("<a>").attr("href", projects[i].githhub).attr("target", "_blank").text("View on GitHub");
        var description = $("<p>").text(projects[i].description).addClass("description");
        flexDiv.append(name, description, deployed, github);
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