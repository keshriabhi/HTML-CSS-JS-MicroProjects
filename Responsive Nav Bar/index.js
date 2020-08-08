console.clear();

const navSlide = () => {
  const Burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-link");
  const navLink = document.querySelectorAll(".nav-link li");

  Burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //Burger animation
    Burger.classList.toggle("toggle");
  });
};

const app = () => {
  navSlide();
};

app();
