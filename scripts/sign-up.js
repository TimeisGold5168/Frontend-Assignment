const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    let userExist = users.find(user => user.username == username);

    if (userExist){
        alert("This username already exists!")
    } else {
        const newUser = {
            username: username, 
            password: password, 
            email: email,
            wishlist: [],
            cart:[]
        };
        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users));
        window.location.href = "sign-in.html";
    }

});