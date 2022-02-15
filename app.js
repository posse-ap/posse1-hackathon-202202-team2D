/* ============================
まなき
============================ */
/* ============================
ひろき
============================ */

// 進行を可視化
let progress = document.querySelectorAll('.progress_list .progress_item');

// // yes/noおされたら、day(i+)となる
let day = 1;
const questionArea = document.querySelector(".question_title")
let questionContent =[
    "恋人が髪型を変えてきたら似合っていなくても褒める",
    "優しさでは結婚する気になれない",
    "ディズニーに行くとしたらランド派だ",
    "長続きの秘訣はおはようおやすみLINE",
];
const updateDay = function() {
    const changeDay = document.querySelector('.date p');
    changeDay.textContent = `Day${day}`;
    }

let options = document.querySelectorAll('.options input');
options.forEach(option =>{
    option.addEventListener('click', function(){
        console.log(this);
        day++;
        questionArea.textContent= questionContent[day-1]
        progress[day-1].classList.add('complete');
        updateDay();
        
        return;
    })
})
// day4になったら、終了するプログラム・・・効いてない
// if(day===4){
//     options.classList.add('stop_day');
// }


// let back = document.querySelector('.back');
// back.addEventListener('click', function(){
//     console.log(this);
//     day--;
//     questionArea.textContent= questionContent[day-1]
//     progress[day].classList.remove('complete');
//     updateDay();
//     return;
// })

let question1 = document.querySelector(".question1");
let question2 = document.querySelector(".question2");
let question3 = document.querySelector(".question3");
let question4 = document.querySelector(".question4");
let btn1 = document.getElementsByClassName("btn1");
let btn2 = document.getElementsByClassName("btn2");
let btn3 = document.getElementsByClassName("btn3");
let btn4 = document.getElementsByClassName("btn4");
let label1 = document.getElementsByClassName("label1");
let label2 = document.getElementsByClassName("label2");
let label3 = document.getElementsByClassName("label3");
let label4 = document.getElementsByClassName("label4");
// let q1 = document.getElementsByName("q1");
//変数bodyTransformation(0<4<8の9段階）の値に応じて、取り出す画像を変化させる
let eachBodyAndMessage = [
            ["./img/girl0.jpg", "さしすせそ"],
            ["./img/girl1.jpg", "かきくけこ"],
            ["./img/girl2.jpg", "あいうえお"],
            ["./img/girl3.jpg", "サンプル"],
            ["./img/girl4.jpg", "イケメン大好き"],
            ["./img/girl5.jpg", "お金ないとちょっとなあ、、"],
            ["./img/girl6.jpg", "気高く生きるのよ私！"],
            ["./img/girl7.jpg", "あのヒトしか考えられない！"],
            ["./img/girl8.jpg", "ふわああ"]
            ];

let bodyTransformation = 4;
const currentImage = document.querySelector('.question_img img');
// 変数の値は、なんの選択肢を選んだかで変動させる
// 優しい人が好き（y:ばあさん n:若返り)
// デートで、恋人が髪型を変えてきたら褒めるべき？(y:若返り n:ばあさん）
// ディズニーに行くとしたらランド派だ(y:若返り n:ばあさん）
// おはようおやすみLINEを送るか？（y:ばあさん n:若返り)

// 一問目の条件分岐
label1[0].addEventListener('click', function(){
    console.log(this);
    bodyTransformation--;
    currentImage.src = eachBodyAndMessage[bodyTransformation][0];
    // messageArea.textContent = eachBodyAndMessage[bodyTransformation][1];
    question1.style.display = "none";
    question2.style.display = "flex";
    label2[0].style.display = "block";
    label2[1].style.display = "block";
    return;
})
label1[1].addEventListener('click', function(){
    console.log(this);
    bodyTransformation++;
    currentImage.src = eachBodyAndMessage[bodyTransformation][0];
    // messageArea.textContent = eachBodyAndMessage[bodyTransformation][1];
    question1.style.display = "none";
    question2.style.display = "flex";
    label2[0].style.display = "block";
    label2[1].style.display = "block";
    return;
})

// 二問目の条件分岐
label2[0].addEventListener('click', function(){
    console.log(this);
    bodyTransformation--;
    currentImage.src = eachBodyAndMessage[bodyTransformation][0];
    // messageArea.textContent = eachBodyAndMessage[bodyTransformation][1];
    question2.style.display = "none";
    question3.style.display = "flex";
    label3[0].style.display = "block";
    label3[1].style.display = "block";
    return;
})
label2[1].addEventListener('click', function(){
    console.log(this);
    bodyTransformation++;
    currentImage.src = eachBodyAndMessage[bodyTransformation][0];
    // messageArea.textContent = eachBodyAndMessage[bodyTransformation][1];
    question2.style.display = "none";
    question3.style.display = "flex";
    label3[0].style.display = "block";
    label3[1].style.display = "block";
    return;
})
// 三問目の条件分岐
label3[0].addEventListener('click', function(){
    console.log(this);
    bodyTransformation--;
    currentImage.src = eachBodyAndMessage[bodyTransformation][0];
    // messageArea.textContent = eachBodyAndMessage[bodyTransformation][1];
    question3.style.display = "none";
    question4.style.display = "flex";
    label4[0].style.display = "block";
    label4[1].style.display = "block";
    return;
})
label3[1].addEventListener('click', function(){
    console.log(this);
    bodyTransformation++;
    currentImage.src = eachBodyAndMessage[bodyTransformation][0];
    // messageArea.textContent = eachBodyAndMessage[bodyTransformation][1];
    question3.style.display = "none";
    question4.style.display = "flex";
    label4[0].style.display = "block";
    label4[1].style.display = "block";
    return;
})

const resultImage = document.querySelector('.result_img img');
const modal = document.getElementById('modal');
const modalOverLay = document.querySelector('.modal_overlay');
let spinner = document.getElementById('my-spinner');

label4[0].addEventListener('click', function(){
    console.log(this);
    bodyTransformation--;
    // messageArea.textContent = eachBodyAndMessage[bodyTransformation][1];
    question4.style.display = "none";
     // loadingを表示させる
  let circle_border = document.getElementById('circle-border');
  let circle_core = document.getElementById('circle-core');
  spinner.className = 'spinner-box';
  circle_border.className = 'circle-border';
  circle_core.className = 'circle-core';
  setTimeout(disappearSpinner, 1990);
  setTimeout(showFinish, 2000);
   
    resultImage.src = eachBodyAndMessage[bodyTransformation][0];
    resultArea.textContent = resultMessage[bodyTransformation];
    resultMessage
    return;
})

label4[1].addEventListener('click', function(){
    bodyTransformation++;
    question4.style.display = "none";
    // loadingを表示させる
 let circle_border = document.getElementById('circle-border');
 let circle_core = document.getElementById('circle-core');
 spinner.className = 'spinner-box';
 circle_border.className = 'circle-border';
 circle_core.className = 'circle-core';
 setTimeout(disappearSpinner, 1990);
 setTimeout(showFinish, 2000);
  
   resultImage.src = eachBodyAndMessage[bodyTransformation][0];
   resultArea.textContent = resultMessage[bodyTransformation];
   return;
})

// loadingを消す
function disappearSpinner(){
    spinner.style.display = "none";
  }

  function showFinish() {
    modal.classList.remove('fade_out');
    modalOverLay.style.display ="block";
  };


let resultMessage = [
    "あああああ",
    "いいいいい",
    "うううううう",
    "ええええええ",
    "おおおおおお",
    "かかかかかか",
    "きききききき",
    "くくくくくく",
    "けけけけけけ"
];

let resultArea = document.getElementById("result_area");

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
