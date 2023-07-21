const submit = document.querySelector(".create-button");
const confirmBox = document.querySelector(".confirm");
const passwordBox = document.querySelector(".password")
const confirmDiv = document.querySelector(".confirm-div");
const spanReminder = document.querySelector(".spanReminder");
const allInputs = document.querySelectorAll("input");
const button = document.querySelector("button");

submit.addEventListener("click", () => {
    const password = document.querySelector(".password").value;
    const confirm = document.querySelector(".confirm").value;

    if (password !== confirm) {
        document.querySelector(".password").value = "";
        document.querySelector(".confirm").value = "";

    }

    
})

passwordBox.addEventListener("focusout", () => {
    const password = document.querySelector(".password").value;
    const confirm = document.querySelector(".confirm").value;

    if (confirm !== "") {
        if (password === confirm) {
            spanReminder.textContent = "";
            spanReminder.style.backgroundColor = "white";
            spanReminder.style.border = "none";

    
        }
    }
})



confirmBox.addEventListener("focusout", () => {
    const password = document.querySelector(".password").value;
    const confirm = document.querySelector(".confirm").value;
    console.log(password);
    console.log(confirm);
    if (password !== confirm) {
        spanReminder.textContent = "Password does not match";
        spanReminder.style.backgroundColor = "#811331";
        spanReminder.style.color = "white";
        spanReminder.style.border = "1px black solid";
        spanReminder.style.fontSize = "0.7rem";
        spanReminder.style.margin = "1px;"
    }
    else {
        spanReminder.textContent = "";
        spanReminder.style.backgroundColor = "white";
        spanReminder.style.style.border = "none";


    }
})

button.addEventListener("click", () => {
    allInputs.forEach( element => element.value = "");
})

