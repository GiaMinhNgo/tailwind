const menu = document.querySelector("#menu")
const menuBtn = document.querySelector("#menu-btn")

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('invisible')
    console.log(menuBtn)
})

const wrapper = document.querySelector('.wrapper')
const wrapperMain = document.querySelector('.wrapper-main')
const quotes = document.querySelectorAll('.quotes')
const leftBtn = document.querySelector('.left-btn')
const rightBtn = document.querySelector('.right-btn')
const scrolls = document.querySelectorAll('.scrolls')
const scroll = document.querySelectorAll('.scroll')
const quotesWidth = quotes[0].offsetWidth
const quotesLength = quotes.length

console.log(quotesLength)
let postionX = 0;
let index = 0;

rightBtn.addEventListener('click', () => {
    handleChangeQuotes(1)
})

leftBtn.addEventListener('click', () => {
    handleChangeQuotes(-1)
})

scroll.forEach((item) => item.addEventListener('click', (e) => {
    scroll.forEach((el) => el.classList.remove('bg-[#655ced]'),
    )
    scroll.forEach((el) => el.classList.add('bg-[#e4e7f0]'),
    )
    e.target.classList.add('bg-[#655ced]')
    e.target.classList.remove('bg-[#e4e7f0]')
    const itemIndex = parseInt(e.target.dataset.index);
    index = itemIndex
    postionX = -1 * index * quotesWidth
    wrapperMain.style = `transform: translateX(${postionX}px)`;
})
)

function handleChangeQuotes(direction) {
    if (direction === 1) {
        if (index >= quotesLength) {
            index = quotesLength;
            return
        }
        postionX = postionX - quotesWidth
        wrapperMain.style = `transform: translateX(${postionX}px)`;
        console.log(postionX)
        index++;
    } else if (direction === -1) {
        if (index <= 0) {
            index = 0;
            return
        }
        postionX = postionX + quotesWidth
        wrapperMain.style = `transform: translateX(${postionX}px)`;
        index--;
    }
    scroll.forEach((el) => el.classList.remove('bg-[#655ced]'),
    )
    scroll.forEach((el) => el.classList.add('bg-[#e4e7f0]'),
    )
    scroll[index].classList.add('bg-[#655ced]')
    scroll[index].classList.remove('bg-[#e4e7f0]')
}

const box = document.querySelectorAll('.box')

for (i = 0; i < box.length; i++) {
    box[i].addEventListener('click', () => {
        this.classList.toggle('block')
        console.log(box)
    })
}

const number = document.querySelector('.number')
const faqs = document.querySelectorAll('.faq')
const faqMain = document.querySelector('.faq-main')
const faqItems = document.querySelectorAll('.faq-item')
const faqBtnPrev = document.querySelector('.faq-prev-btn')
const faqBtnNext = document.querySelector('.faq-next-btn')
const faqWidth = faqItems[0].offsetWidth
const faqLength = faqItems.length

let widthX = 0
let inde = 0
let a = 1

console.log(faqWidth)
console.log(faqLength)

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})

faqBtnNext.addEventListener('click', () => {
    handleChangeFaq(1)
})

faqBtnPrev.addEventListener('click', () => {
    handleChangeFaq(-1)
})

number.innerText = a + "/" + faqLength

function handleChangeFaq(direc) {
    if (direc === 1) {
        if (inde >= faqLength - 1) {
            inde = faqLength - 1;
            return
        }
        widthX = widthX - faqWidth
        faqMain.style = `transform: translateX(${widthX}px)`;
        inde++;
        a = (a < faqLength) ? faqLength : faqLength;
        number.innerText = a + "/" + faqLength;
    } else if (direc === -1) {
        if (inde <= 0) {
            inde = 0;
            return
        }
        widthX = widthX + faqWidth
        faqMain.style = `transform: translateX(${widthX}px)`;
        console.log(widthX)
        inde--;
        a = faqLength - 1
        number.innerText = a + "/" + faqLength
    }
}

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoHeight: false,
    centeredSlides: true,
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
        420: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination"
    },

    // Navigation arrows
    navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn"
    }
});

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