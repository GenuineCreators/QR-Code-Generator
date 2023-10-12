let qrText = document.getElementById("qrText");
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");

function generateCode(){
    if(qrText.value.length > 0){    
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else{
        alert("Please input a text or a URL");
    }
}
   