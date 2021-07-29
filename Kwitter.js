function addUser() {
    username= document.getElementById("Text-box-user").value;

    localStorage.setItem("username", username);

    window.location= "kwitter-room.html";
}