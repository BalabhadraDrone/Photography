let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})

// Break

let slidesOne = document.getElementsByClassName("one-slider__slide");
let navlinksOne = document.getElementsByClassName("one-slider__navlink");
let currentSlideOne = 0;

document.getElementById("one-nav-button--next").addEventListener("click", () => {
    changeSlideOne(currentSlideOne + 1)
});
document.getElementById("one-nav-button--prev").addEventListener("click", () => {
    changeSlideOne(currentSlideOne - 1)
});

function changeSlideOne(moveToOne) {
    if (moveToOne >= slidesOne.length) {moveToOne = 0;}
    if (moveToOne < 0) {moveToOne = slidesOne.length - 1;}
    
    slidesOne[currentSlideOne].classList.toggle("active");
    navlinksOne[currentSlideOne].classList.toggle("active");
    slidesOne[moveToOne].classList.toggle("active");
    navlinksOne[moveToOne].classList.toggle("active");
    
    currentSlideOne = moveToOne;
}

document.querySelectorAll('.one-slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlideOne !== bulletIndex) {
            changeSlideOne(bulletIndex);
        }
    })
})

// Break

let slidesTwo = document.getElementsByClassName("two-slider__slide");
let navlinksTwo = document.getElementsByClassName("two-slider__navlink");
let currentSlideTwo = 0;

document.getElementById("two-nav-button--next").addEventListener("click", () => {
    changeSlideTwo(currentSlideTwo + 1)
});
document.getElementById("two-nav-button--prev").addEventListener("click", () => {
    changeSlideTwo(currentSlideTwo - 1)
});

function changeSlideTwo(moveToTwo) {
    if (moveToTwo >= slidesTwo.length) {moveToTwo = 0;}
    if (moveToTwo < 0) {moveToTwo = slidesTwo.length - 1;}
    
    slidesTwo[currentSlideTwo].classList.toggle("active");
    navlinksTwo[currentSlideTwo].classList.toggle("active");
    slidesTwo[moveToTwo].classList.toggle("active");
    navlinksTwo[moveToTwo].classList.toggle("active");
    
    currentSlideTwo = moveToTwo;
}

document.querySelectorAll('.two-slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlideTwo !== bulletIndex) {
            changeSlideOne(bulletIndex);
        }
    })
})

// Break

let slidesThree = document.getElementsByClassName("three-slider__slide");
let navlinksThree = document.getElementsByClassName("three-slider__navlink");
let currentSlideThree = 0;

document.getElementById("three-nav-button--next").addEventListener("click", () => {
    changeSlideThree(currentSlideThree + 1)
});
document.getElementById("three-nav-button--prev").addEventListener("click", () => {
    changeSlideThree(currentSlideThree - 1)
});

function changeSlideThree(moveToThree) {
    if (moveToThree >= slidesThree.length) {moveToThree = 0;}
    if (moveToThree < 0) {moveToThree = slidesThree.length - 1;}
    
    slidesThree[currentSlideThree].classList.toggle("active");
    navlinksThree[currentSlideThree].classList.toggle("active");
    slidesThree[moveToThree].classList.toggle("active");
    navlinksThree[moveToThree].classList.toggle("active");
    
    currentSlideThree = moveToThree;
}

document.querySelectorAll('.three-slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlideThree !== bulletIndex) {
            changeSlideThree(bulletIndex);
        }
    })
})

// Break

let slidesFour = document.getElementsByClassName("four-slider__slide");
let navlinksFour = document.getElementsByClassName("four-slider__navlink");
let currentSlideFour = 0;

document.getElementById("four-nav-button--next").addEventListener("click", () => {
    changeSlideFour(currentSlideFour + 1)
});
document.getElementById("four-nav-button--prev").addEventListener("click", () => {
    changeSlideFour(currentSlideFour - 1)
});

function changeSlideFour(moveToFour) {
    if (moveToFour >= slidesFour.length) {moveToFour = 0;}
    if (moveToFour < 0) {moveToFour= slidesFour.length - 1;}
    
    slidesFour[currentSlideFour].classList.toggle("active");
    navlinksFour[currentSlideFour].classList.toggle("active");
    slidesFour[moveToFour].classList.toggle("active");
    navlinksFour[moveToFour].classList.toggle("active");
    
    currentSlideFour = moveToFour;
}

document.querySelectorAll('.four-slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlideFour !== bulletIndex) {
            changeSlideThree(bulletIndex);
        }
    })
})

// Break

let slidesFive = document.getElementsByClassName("five-slider__slide");
let navlinksFive = document.getElementsByClassName("five-slider__navlink");
let currentSlideFive = 0;

document.getElementById("five-nav-button--next").addEventListener("click", () => {
    changeSlideFive(currentSlideFive + 1)
});
document.getElementById("five-nav-button--prev").addEventListener("click", () => {
    changeSlideFive(currentSlideFive - 1)
});

function changeSlideFive(moveToFive) {
    if (moveToFive >= slidesFive.length) {moveToFive = 0;}
    if (moveToFive < 0) {moveToFive= slidesFive.length - 1;}
    
    slidesFive[currentSlideFive].classList.toggle("active");
    navlinksFive[currentSlideFive].classList.toggle("active");
    slidesFive[moveToFive].classList.toggle("active");
    navlinksFive[moveToFive].classList.toggle("active");
    
    currentSlideFive = moveToFive;
}

document.querySelectorAll('.five-slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlideFive !== bulletIndex) {
            changeSlideFive(bulletIndex);
        }
    })
})

// Break

let slidesSix = document.getElementsByClassName("six-slider__slide");
let navlinksSix = document.getElementsByClassName("six-slider__navlink");
let currentSlideSix = 0;

document.getElementById("six-nav-button--next").addEventListener("click", () => {
    changeSlideSix(currentSlideSix + 1)
});
document.getElementById("six-nav-button--prev").addEventListener("click", () => {
    changeSlideSix(currentSlideSix - 1)
});

function changeSlideSix(moveToSix) {
    if (moveToSix >= slidesSix.length) {moveToSix = 0;}
    if (moveToSix < 0) {moveToSix= slidesSix.length - 1;}
    
    slidesSix[currentSlideSix].classList.toggle("active");
    navlinksSix[currentSlideSix].classList.toggle("active");
    slidesSix[moveToSix].classList.toggle("active");
    navlinksSix[moveToSix].classList.toggle("active");
    
    currentSlideSix = moveToSix;
}

document.querySelectorAll('.six-slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlideSix !== bulletIndex) {
            changeSlideSix(bulletIndex);
        }
    })
})

