// log in sestem
document.getElementById('submitBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(email === "rbepari404@gmail.com" && password === "Bank999@") {
        window.location.href = "bank.html"
    }else {
       alert("invalid user");
    }
})
