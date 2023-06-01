//Javascript cho slider-nav
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const texts = document.querySelectorAll(".text");


var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    texts.forEach((text) => {
        text.classList.remove("active");
    });
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    texts[manual].classList.add("active");
}
var hideText = function () {
    texts.forEach((textx, i) => {
        if (textx.classList.contains("animate__fadeOutLeft")) {
            textx.classList.add("hidden");
        }
    });
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        hideText(i);
        sliderNav(i);
    });
});

//Javascript cho login
const wrapper = document.querySelector('.wrapper');
const btnLogin = document.querySelector(".login-btn");

var loginClick = function (manual) {
    texts[manual].classList.remove("animate__fadeInLeft");
    texts[manual].classList.add("animate__animated");
    texts[manual].classList.add("animate__fadeOutLeft");
    wrapper.classList.add('active-popup');
}



btnLogin.addEventListener("click", () => {
    texts.forEach((text, i) => {
        loginClick(i);
    });
});

//Javascript cho form

const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

var closeLogin = function (manual) {
    texts[manual].classList.remove("animate__fadeOutLeft");
    texts[manual].classList.add("animate__fadeInLeft");
    texts[manual].classList.remove("hidden");
}

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    texts.forEach((text, i) => {
        closeLogin(i);
    });
});
    //script bat su kien nut button
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định
    window.location.href = "main.html"; // Chuyển đến đường dẫn của trang HTML mới
});
