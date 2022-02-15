/* ============================
まなき
============================ */
/* ============================
ひろき
============================ */

// // yes/noおされたら、day(i+)となる
let day = 1;
const updateDay = function() {
    const changeDay = document.querySelector('.date p');
    changeDay.textContent = `Day${day}`;
    }

let options = document.querySelectorAll('.options input');
options.forEach(option =>{
    option.addEventListener('click', function(){
        console.log(this);
        day++;
        updateDay();
        return;
    })
})
let back = document.querySelector('.back');
back.addEventListener('click', function(){
    console.log(this);
    day--;
    updateDay();
    return;
})

let bodyTransformation 

/* ============================
かもりゅう
============================ */
let btn_start = document.getElementById('btn_start');
btn_start.addEventListener('click',function(){
    let main_center = document.getElementById('main_center');
    let main_center_day1 = document.getElementById('main_center_day1');
    main_center.classList.add('fade_out');
    main_center_day1.classList.remove('fade_out');
    main_center_day1.classList.add('fade_in');


})


/* ============================
よしたか
============================ */