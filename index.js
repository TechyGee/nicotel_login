
function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === 'itx' && password === 'itx') {

        alert("Login Successful, Welcome.");

    }else {
        alert("Wrong Password or Username")
    }

}


const text = document.querySelector(".multiText");

const textLoad = () => {
    setTimeout(() => {

        text.textContent = "Nicotel Apartment";
    }, 0);

    setTimeout(() => {

        text.textContent = "Nicotel Luxurious Rooms";
    }, 4000);

    setTimeout(() => {

        text.textContent = "Nicotel Hotspot Page";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);