
document.addEventListener("DOMContentLoaded", () => {
    $("#header").load("../html/header.html");
    $("#side_bar-left").load("../html/sidebar_left.html");
    $("#post").load("../html/posts.html");
    $("#side_bar-right").load("../html/sidebar_right.html");

    window.addEventListener("load", () => {
        // NavBar handler
        let navBtns = document.querySelectorAll(".header_nav > li");

        navBtns.forEach((item, index) => {
            item.addEventListener("click", () => {
              if (!item.classList.contains("nav_active")) {
                navBtns.forEach(item => {
                  item.classList.remove("nav_active");
                });
                item.classList.add("nav_active");
                switch (index) {
                  case 0:
                    $("#post").load("../html/posts.html");
                    document.title = "Home | TechTrek";
                    break;
                  case 1: 
                    $("#post").load("../html/profile.html", () => {
                      // render picture
                      $("#profile_content_dynamic").load("../html/pictureOfProfile.html", () => {
                        setHeightPicture(".list_images > li");
                      });
                      let subNavs = document.querySelectorAll(".profile_content_head_nav > li")

                      subNavs.forEach((item, index) => {
                        item.addEventListener("click", () => {
                          if (!item.classList.contains("nav_active")) {
                            subNavs.forEach(item => {
                              item.classList.remove("nav_active");
                            });
                            item.classList.add("nav_active");
                            switch(index) {
                              case 0:
                                $("#profile_content_dynamic").load("../html/pictureOfProfile.html", () => {
                                  setHeightPicture(".list_images > li");
                                });
                                break;
                              case 1:
                                $("#profile_content_dynamic").load("../html/homeOfProfile.html");
                                break;
                              case 2:
                                $("#profile_content_dynamic").load("../html/rating.html");
                            }
                          }
                        });
                      });
                    });
                    document.title = "Profile | TeckTrek";
                    break;
                    case 2:
                      $("#post").load("../html/chat.html", () => {
                        chat();
                      });
                      document.title = "Chat | TechTrek";
                      break;
                }
              }
            });
          });
    })
}, false);

function setHeightPicture (listElementQuery) {
  let listImages = document.querySelectorAll(listElementQuery);
  let width = listImages[0].offsetWidth;
  listImages.forEach(item => {
    item.style.height = width + 'px';
  })
}