
const loginForm = document.querySelector("form");


const setCookie = (name, value, hours) => {
    const date = new Date();
    date.setTime(date.getTime() + (hours* 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}



loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
   

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        setCookie("currentUser", username, 1); 

        //get the data (cart,wishlist) of the user from local storage if the user has added something
        if(JSON.parse(localStorage.getItem(username))!=null){
            user = JSON.parse(localStorage.getItem(username));
        }
        localStorage.setItem(username, JSON.stringify(user));
        //redirect to somewhere
        window.location.href = "genre.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});