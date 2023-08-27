let hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    elSec = document.querySelector('.seconds'),
    elMin = document.querySelector('.minutes'),
    elHour = document.querySelector('.hours');

// m1cro_man

function clock() {
    let time = new Date();
    let seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;
    // seconds++;

    sec.style = `transform:rotate(${seconds}deg); transition: 1s linear; `
    min.style = `transform:rotate(${minutes}deg); transition: 1s linear;`
    hour.style = `transform:rotate(${hours}deg); transition: 1s linear; `

    sec.animate([{
            transform: `rotate(${seconds}deg)`
        },
        {
            transform: `rotate(${seconds + 6}deg)`
        }
    ], {
        fill: 'forwards',
        duration: 1000,
    })

    elSec.innerHTML = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
    elMin.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    elHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()



    setTimeout(() => {
        clock()
    }, 1000);

}

clock()




let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');



for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('click', function () {
        for (let x = 0; x < tabs.length; x++) {
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
        }
        this.classList.add('active')
        tabs[i].classList.add('active')
    })
}

let click = document.querySelector('.stopwatch__btn');
let second = document.querySelector('.stopwatch__seconds');
let minute = document.querySelector('.stopwatch__minutes');
let hours = document.querySelector('.stopwatch__hours');

let i = 00;
let m = 00;
let h = 00;

click.addEventListener('click', function () {
    if (click.innerHTML == 'start') {
        click.innerHTML = 'stop'
        setTimeout(() => {
            seconds(this, i)
        }, 1000);
    } else if (click.innerHTML == 'stop') {
        click.innerHTML = 'clear'
    } else {
        click.innerHTML = 'start'
        second.innerHTML = '00';
        minute.innerHTML = '00';
        hours.innerHTML = '00';
    }
})



function seconds(btn, i) {

    if (btn.innerHTML == 'stop') {
        if (i >= 59) {
            m++
            minute.innerHTML = m
            i = 00
            second.innerHTML = i
        } else {
            i++
            second.innerHTML = i
        }
        setTimeout(() => {

            seconds(btn, i)
        }, 1000);

        if (m >= 59) {
            m = 00
            h++
            hours.innerHTML = h
        }
        
        hours.innerHTML = h < 10 ? '0' + h : h;
        minute.innerHTML = m < 10 ? '0' + m : m;
        second.innerHTML = i < 10 ? '0' + i : i;
    } else if (btn.innerHTML == 'stop') {

    }



}