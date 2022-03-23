
const menu = document.querySelector("#menu")
const menuBtn = document.querySelector("#menu-btn")

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('invisible')
    console.log(menuBtn)
})

const scrollElementsRight = document.querySelectorAll(".js-scroll-right");
const scrollElementsLeft = document.querySelectorAll(".js-scroll-left");
const scrollElementsCount = document.querySelectorAll(".scroll-count");
const scrollElementsDown = document.querySelectorAll(".js-scroll-down");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElementRight = (element) => {
    element.classList.add("animation-right");
};

const hideScrollElementRight = (element) => {
    element.classList.remove("animation-right");
};

const displayScrollElementLeft = (element) => {
    element.classList.add("animation-left");
};

const hideScrollElementLeft = (element) => {
    element.classList.remove("animation-left");
};

const displayScrollElementCount = (element) => {
    element.classList.add("count");
};

const hideScrollElementCount = (element) => {
    element.classList.remove("count");
};

const displayScrollElementDown = (element) => {
    element.classList.add("animation-down");
};

const hideScrollElementDown = (element) => {
    element.classList.remove("animation-down");
};

const handleScrollAnimation = () => {
    scrollElementsRight.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElementRight(el);
        } else if (elementOutofView(el)) {
            hideScrollElementRight(el)
        }
    })
    scrollElementsLeft.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElementLeft(el);
        } else if (elementOutofView(el)) {
            hideScrollElementLeft(el)
        }
    })
    scrollElementsCount.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElementCount(el);
        } else if (elementOutofView(el)) {
            hideScrollElementCount(el)
        }
    })
    scrollElementsDown.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElementDown(el);
        } else if (elementOutofView(el)) {
            hideScrollElementDown(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

$(document).ready(function () {
    $(".count").counterUp({
        delay: 10,
        time: 1200
    })
})

