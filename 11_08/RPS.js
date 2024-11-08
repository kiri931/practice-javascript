function RPS(){
    const choices = ["gu","choki","pa"];
    // この書き方は、配列です。C言語参照

    // let select = document.createElement("select");
    // let option1 = document.createElement("option");
    // let option2 = document.createElement("option");
    // let option3 = document.createElement("option");
    // const gu = "gu";
    // option1.value = gu;
    // option1.textContent = gu;
    // select.appendChild(option1);
    // option2.value = "choki";
    // option2.textContent = "choki";
    // select.appendChild(option2);
    // option3.value = "pa";
    // option3.textContent = "pa";
    // select.appendChild(option3);
    // gameContainer.appendChild(select);

    let select = document.createElement("select");
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);


    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.width = "600px";
    image.style.height = "400px";
    image.src = "https://www.free-materials.com/adm/wp-content/uploads/2022/10/0adpTSC_0120-.jpg";

    gameContainer.appendChild(image);

    //forEach　配列など複数のデータがあるもの使える。全部やる関数。
    //配列.forEach(配列の中身 => {命令})
}