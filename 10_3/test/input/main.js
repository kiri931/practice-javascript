function errorInput(){
    const month = document.getElementById("month").value.trim();
    const day = document.getElementById("day").value.trim();
    if(month<0 || month>12){
        alert("適切な値ではありません");
        return
    }
    console.log("Month:", typeof(month), "Day:", day);
}
