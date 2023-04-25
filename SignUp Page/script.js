let pin = "";
let matched = false;

function generateOTP() {
    let otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString();
}

async function alertPin() {
    pin = generateOTP();
    alert(`OTP is: ${pin}`);
}

let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", verification);

function verification() {
    let inputValue = document.getElementById("pin").value;
    if (pin === inputValue) {
        alert("Matched");
        matched = true;
        window.location.href = "successpage.html";
    } else {
        alert("Wrong OTP");
    }
    if (!matched) {
        alertPin();
    }
    btn.disabled = matched;
}

alertPin();
