function changeColor(){
    document.getElementById("text").style.color = "red";
}



//document.getElementById("text").style.color = "red";
/*  これは、ドキュメントの中の「text」というIDを持っている
    タグのスタイルの色を赤にしてください。*/

//document.querySelector("h2").style.color ="red";
let count = 0;

function increaseCount(){
    count++;
    document.getElementById("counter").innerText = count;
}

function herasuCount(){
    count--;
    document.getElementById("counter").innerText = count;
}