let form = document.getElementById("form")
let username = document.getElementById("username")
let age = document.getElementById("age")
let ans = document.querySelector(".ans")


form.addEventListener("submit", function (event) {
    event.preventDefault()
    if(username.value == null || age.value == null){
        alert("Enter Details")
        
    }
    else{

        let details = {
            username: username.value,
            age: age.value
        };
        localStorage.setItem("details", JSON.stringify(details));
        alert("Your Detials have been Successfully Stored in Local Storage")
        
    }

})



function details(){
    let storedDetails = JSON.parse(localStorage.getItem("details")) || {};
    let storedUsername = storedDetails.username || '';
    let storedage = storedDetails.age || '';
    let username = document.createElement("p");

    username.textContent = `Your Username is : ${storedUsername}`
    username.className = "username"
    let age = document.createElement("p")
    age.textContent = `Your age is : ${storedage}`
    ans.append(username)
    ans.append(age)


}