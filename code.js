const friendList = ["Joshé","Cassidy","Jared","Daniel","Ricardo", "Amanda"]

const newHeading = document.createElement("h1")
const newUl = document.createElement("ul");

function smartPeople(){

    let currentHeading = document.body.appendChild(newHeading);

    document.body.style = "font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
    currentHeading.innerText = "Dynamic List"

    let currentUL = document.body.appendChild(newUl);

    friendList.forEach(item => {
        currentUL.innerHTML += `<li style="margin:10px 10px 0 0"> ${item} </li>`
    });
}

smartPeople();