
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        let stringifyRegUser= localStorage.getItem("REG_USER");

        let registerUser= JSON.parse(stringifyRegUser);
        document.getElementById('userName').innerHTML="Hello "+registerUser.name
    }
}



const onLogout=()=>{
    localStorage.clear()
    location.href='index.html'
}