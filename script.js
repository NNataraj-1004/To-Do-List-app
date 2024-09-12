const inputBox=document.getElementById("input-box");
const listCpontainer=document.getElementById("list-Container");
function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listCpontainer.appendChild(li);
    }

}