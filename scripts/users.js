let defaultUsers = [{
    username: "user123", 
    password: "123", 
    email:"123@123.com",
    wishlist: [],
    cart:[] 
    },
    { 
    username: "user456", 
    password: "456",
    email:"456@456.com",
    wishlist:[],
    cart: []
    },
];

//retrieved users from localstorage
let users = JSON.parse(localStorage.getItem("users"));

if(users == null) {
    users = defaultUsers;
}