addEventListener("load",function(){
    const s = document.getElementById("kaito-spaca");
    for(let i = 0; i < 5;i++){
        let p = document.createElement("p");
        for(let j = 0;j < i;j++){
            p.textContent += "*";
        }
        s.appendChild(p);
    }
})
