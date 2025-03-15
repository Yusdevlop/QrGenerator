
let Input = document.querySelector(".Input");
let qrImg = document.getElementById("qrImg");
let Generate =document.querySelector(".Generate");

Generate.addEventListener("click",()=>{
     qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+Input.value;

})
