const projects = [
    {
        city: "Rostov-on-Don LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "Upon request",
        src: "assets/image 1.png"
    },
    {
        city: "Sochi Thieves", 
        area: "105 m2",
        time: "4 months",
        cost: "Upon request",
        src: "assets/image 2.png"
    },
    {
        city: "Rostov-on-Don Patriotic",
        area: "93 m2",
        time: "3 months",
        cost: "Upon request",
        src: "assets/image 3.png"
    }
]; 
let cityNode = document.querySelector(`.city`);
let apartmentNode = document.querySelector(`.apartment`);
let timeNode = document.querySelector(`.time`);
let costNode = document.querySelector(`.cost`);
let objects = document.querySelectorAll(`.object`);
let circles = document.querySelectorAll(`.circle`);
let prevBtn = document.querySelector(`.prev`);
let nextBtn = document.querySelector(`.next`);
let imageContainer = document.querySelector(`.image-container`);
let index = 0; 
let data = projects.length - 1;

function fillItem(value,expression ) {
    cityNode.innerHTML = projects[value].city;
    apartmentNode.innerHTML = projects[value].area;
    timeNode.innerHTML = projects[value].time;
    costNode.innerHTML = projects[value].cost;
    imageContainer.innerHTML = `<img src="${projects[value].src}">`;
    circles[value].classList.add(`active`);
    objects[value].classList.add(`page`); 

    if(circles[data].classList.contains(`active`) && circles[0].classList.contains(`active`)) {
        if(objects[data].classList.contains(`page`) && objects[0].classList.contains(`page`)) {
            circles[data].classList.remove(`active`);
            objects[data].classList.remove(`page`);
            return
        }
    }
    circles[expression].classList.remove(`active`);
    objects[expression].classList.remove(`page`);
};

document.addEventListener(`DOMContentLoaded`, () => {
    fillItem(0);
});

nextBtn.addEventListener(`click`, () => {
    index = (index + 1) % projects.length; 
    fillItem(index, (index - 1) );
});

prevBtn.addEventListener(`click`, () => {
    circles[index].classList.remove(`active`); 
    objects[index].classList.remove(`page`); 
    index = (index - 1 + projects.length) % projects.length; 
    fillItem(index, (index + 1));
}); 

function clickOnElement (value) {
    cityNode.innerHTML = projects[value].city;
    apartmentNode.innerHTML = projects[value].area;
    timeNode.innerHTML = projects[value].time;
    costNode.innerHTML = projects[value].cost;
    imageContainer.innerHTML = `<img src="${projects[value].src}">`;
    circles[value].classList.add(`active`);
    objects[value].classList.add(`page`);  
}

circles.forEach((element, currentIndex) => {
    element.addEventListener(`click`, () => {
        clickOnElement(currentIndex);
        index = currentIndex
        circles.forEach((circle, num) => {
            circle.classList.toggle(`active`, num === currentIndex);         
        });
        objects.forEach((object, num) => {
            object.classList.toggle(`page`, num === currentIndex);
        });
    });
});

objects.forEach((element, currentIndex) => {
    element.addEventListener(`click`, () => {
        clickOnElement(currentIndex);
        index = currentIndex;
        circles.forEach((circle, num) => {
            circle.classList.toggle(`active`, num === currentIndex);         
        });
        objects.forEach((object, num) => {
            object.classList.toggle(`page`, num === currentIndex);
        });
    });
});

