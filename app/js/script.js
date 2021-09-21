// const btnHamburger = document.querySelector(`#btnHamburger`);
const header = document.getElementById('header');
const overlay = document.querySelector('.overlay');
const noscroll = document.querySelector('body');
const fadeElements = document.querySelectorAll('.has-fade');


header.addEventListener('click', function () {
    console.log("click header");
    if (header.classList.contains('open')) { //Close Hamburger menu 

        noscroll.classList.remove('noscroll')
        header.classList.remove('open');
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })

    }
    else { //Open Hamburger menu
        noscroll.classList.add('noscroll')
        header.classList.add('open')
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
   

        })
    }
})
