let defaultUsers = [{
    username: "user123",
    password: "123",
    email: "123@123.com",
    receivedate: "20/10",
    wishlist: [],
    cart: [],
    membership: "none",
    address: {
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        phoneNumber: "",
    },
},
{
    username: "user456",
    password: "456",
    email: "456@456.com",
    wishlist: [],
    cart: [],
    receivedate: " ",
    membership: "none",
    address: {
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        phoneNumber: "",
    },
},
];

//retrieved users from localstorage
let users = JSON.parse(localStorage.getItem("users"));

if (users == null) {
    users = defaultUsers;
}