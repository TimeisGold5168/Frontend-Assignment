const getCookie = (name) =>{
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }
    return null; 
}

const username = getCookie("currentUser");
const currentUser = JSON.parse(localStorage.getItem(username));

if(currentUser==null) {
    alert("please log in to continue");
}