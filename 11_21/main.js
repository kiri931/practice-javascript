function errorInput(){
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    if(month < 1 || month > 12){
        alert("月の値が適切ではありません");
        return
    }
    console.log("Month:", month, "Day:", day);
}
