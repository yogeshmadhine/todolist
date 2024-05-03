const inp=document.getElementById("input");
const bx=document.getElementById("listcontainer");


function addtask(){
    if(inp.value=='')
    {
        alert("enter text");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inp.value;
        bx.appendChild(li);


        let pan=document.createElement("span");
         pan.innerHTML="\u00d7";

         li.appendChild(pan);
    }
    //saveData()
    inp.value="";
    saveData()
}


bx.addEventListener("click",function(e)
{
    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);



function saveData(){
    localStorage.setItem("data",bx.innerHTML);
}

function  shwtask(){
    bx.innerHTML=localStorage.getItem("data");
}

shwtask()