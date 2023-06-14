document.addEventListener("DOMContentLoaded", () => {
    $(document).ready(() => {
        $("#header").load("../html/header.html");
        $("#side_bar-left").load("../html/sidebar_left.html");
        $("#post").load("../html/posts.html");
        $("#side_bar-right").load("../html/sidebar_right.html");
    });
    
}, false);