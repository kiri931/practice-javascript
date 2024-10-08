const monthSelect = document.getElementById("month");
monthSelectList();
function monthSelectList(){
    for (let i=1;i<=12;i++){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i + "月";
        monthSelect.appendChild(option);
    }
}

const daySelect = document.getElementById("day");
daySelectList();
function daySelectList(){
    for (let i=1;i<=31;i++){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i + "日";
        daySelect.appendChild(option);
    }
}

function textCreate(){
    const txt = document.querySelector("body");
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const birthday = document.createElement("div")
    birthday.textContent = month+"月"+day+"日"
    txt.appendChild(birthday);
}