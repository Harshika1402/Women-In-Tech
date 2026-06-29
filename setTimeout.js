let btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    setTimeout(() => {
        console.log("Login");
    }, 1000);

    setTimeout(() => {
        console.log("New emails");
    }, 2000);

    setTimeout(() => {
        console.log("Meeting in 10 mins");
    }, 3000);

    setTimeout(() => {
        console.log("New message");
    }, 4000);

});