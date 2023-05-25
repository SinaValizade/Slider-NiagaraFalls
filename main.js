// $in@
let i= 0;
const rightBtn = document.querySelector('div.arrow-right i');
const leftBtn = document.querySelector('div.arrow-left i');
const btns = document.querySelectorAll('div.btn');
const slide= document.querySelector('div.item img');
const img = ['./files/falls1.jpg','./files/falls2.jpg','./files/falls3.jpg','./files/falls4.jpg','./files/falls5.jpg' ];

btns[0].addEventListener('click', btn0);
btns[1].addEventListener('click', btn1);
btns[2].addEventListener('click', btn2);
btns[3].addEventListener('click', btn3);
btns[4].addEventListener('click', btn4);
rightBtn.addEventListener('click', rightButton);
leftBtn.addEventListener('click', leftButton);

setInterval(()=>{
    i++;
    if (i === 5){i = 0}
    slide.src = `${img[i]}`;
    for (const btn of btns) {
        btn.classList.remove('active-btn');
    }
    btns[i].classList.add('active-btn');

},5000);
function btn0() {
    slide.src = `${img[0]}`;
    for (const btn of btns) {
        btn.classList.remove('active-btn');
    }
    btns[0].classList.add('active-btn');
}
function btn1() {
    slide.src = `${img[1]}`;
    for (const btn of btns) {
        btn.classList.remove('active-btn');
    }
    btns[1].classList.add('active-btn');
}
function btn2() {
    slide.src = `${img[2]}`;
    for (const btn of btns) {
        btn.classList.remove('active-btn');
    }
    btns[2].classList.add('active-btn');
}
function btn3() {
    slide.src = `${img[3]}`;
    for (const btn of btns) {
        btn.classList.remove('active-btn');
    }
    btns[3].classList.add('active-btn');
}
function btn4() {
    slide.src = `${img[4]}`;
    for (const btn of btns) {
        btn.classList.remove('active-btn');
    }
    btns[4].classList.add('active-btn');
}
function rightButton() {
    i++;
    if (i === 5){i = 0}
    slide.src = `${img[i]}`;
    for (const btn of btns) {
        btn.classList.remove('active-btn');
    }
    btns[i].classList.add('active-btn');
}
function leftButton() {
    i--;
    if (i === -1){i = 4}
    slide.src = `${img[i]}`;
    for (const btn of btns) {
        btn.classList.remove('active-btn');
    }
    btns[i].classList.add('active-btn');
}