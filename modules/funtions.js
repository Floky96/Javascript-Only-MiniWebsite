'use strict'

const makeBlank = (el, cl, id) => {
    const foundation = document.getElementById("content");
    let item = document.createElement(el);
    item.classList.add(cl);
    item.setAttribute("id", id);
    foundation.appendChild(item);
}

const makeChild = (pa, el, cl, id) => {
    const foundation = document.getElementById(pa);
    let item = document.createElement(el);
    item.classList.add(cl);
    item.setAttribute("id", id);
    foundation.appendChild(item);
}

const jsIcon = (id, el) => {
    const foundation = document.getElementById(id);
    let item = document.createElement(el);
    item.setAttribute("id", "jsIcon ");
    item.classList.add('jsIcon');
    foundation.appendChild(item);
}

const addText = (id, tex) => {
    const foundation = document.getElementById(id);
    foundation.textContent = tex;
}

const secondClass = (el, cl) => {
    const foundation = document.getElementById(el);
    foundation.classList.add(cl);
}

const addListener = (id) => {
    const foundation = document.getElementById(id);
    foundation.addEventListener("click", redi)
}

const redi = (event) => {
    const navFirst = document.getElementById("containerMain");
    const navSecond = document.getElementById("containerMenu");
    const navThird = document.getElementById("containerMeme");
    const item = event.target;
    if (item.textContent == "ThisNotThat") {
        navFirst.style.display = "flex";
        navSecond.style.display = "none";
        navThird.style.display = "none";
    }
    if (item.textContent == "Dummy") {
        navFirst.style.display = "none";
        navSecond.style.display = "flex";
        navThird.style.display = "none";
    }
    if (item.textContent == "Michael Scarn") {
        navFirst.style.display = "none";
        navSecond.style.display = "none";
        navThird.style.display = "flex";
    }
}

const addImg = (pa, path) => {
    const foundation = document.getElementById(pa);
    const img = document.createElement("img");
    img.src = path;
    foundation.appendChild(img);
}

export { makeBlank, makeChild, addText, secondClass, addListener, redi, jsIcon, addImg }