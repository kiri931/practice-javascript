const txt = document.createElement('strong');
txt.textContent = "追加される文字";
document.querySelector("body").appendChild(txt);

const pTag = document.getElementById("pTag");

for(let i = 0; i<100;i++){
    const num = document.createElement("span");
    num.textContent=i;
    pTag.appendChild(num);
}