//Load nav bar
$(document).ready(function () {
    $("#navbar").load("html/nav_bar.html");
    $("#about-us").on('click', function(){
        $("html, body").animate({
            scrollTop: $("#banner").offset().top
        }, {
            duration: 1000,
            easing: 'swing',
            behavior: 'smooth' 
        });
    });
});

//Load filter
$(document).ready(function () {
    $("#filter").load("html/filter.html");
    $("#filter").on("click", "#close_map", function () {
        // Thực hiện hành động khi phần tử được click
        mapBox.classList.remove('animate__fadeInDown');
        mapBox.classList.add('animate__fadeOutUp');
        setTimeout(function () {
            mapBox.style.display = "none";
            $(".community").addClass("animate__slideInUp animate__faster");
            setTimeout(function () {
                $(".community").removeClass("animate__slideInUp animate__faster");
            }, 1000);
        }, 500);

    });
});
//load footer
$(document).ready(function () {
    $("#footer").load("footer.html"); 
});
// $(document).ready(function () {
//     $("#landing").load("landing.html");
// });

/*scroll to top*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#arrow i").fadeIn();
        }
        else {
            $("#arrow i").fadeOut();
        }

    });
    $("#arrow i").on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // btn login
    let btnLogin = document.querySelector("#btn_login");
    
    btnLogin.addEventListener("click", () => {
        window.location.assign("../login.html");
    });
});

// slider res
