let Addbtn = document.getElementById("addbtn")
let Taskfield = document.getElementById("taskfield")
let Displaytask = document.getElementById("displaytask")





Addbtn.addEventListener("click",function(){
    if(Taskfield.value==""){
        alert("enter task first")
    }
    else{
        var TaskBox = document.createElement('div')
        Displaytask.appendChild(TaskBox)
        TaskBox.classList.add("taskbox")
        var Task = document.createElement('input')
        Task.classList.add("tasks")
        Task.type="text"
        Task.value=Taskfield.value
        Task.setAttribute("readonly","readonly")
        TaskBox.appendChild(Task)
        var Actionbox = document.createElement("div")
        TaskBox.appendChild(Actionbox)
        Actionbox.classList.add("actionbox")
        var editbtn = document.createElement('button')
        var donebtn = document.createElement('button')
        editbtn.classList.add("edit")
        donebtn.classList.add("done")
        Actionbox.appendChild(editbtn)
        Actionbox.appendChild(donebtn)
        editbtn.innerText="Edit"
        donebtn.innerText="Done"  
        Taskfield.value= ''
    }

    donebtn.addEventListener("click",function(){
        Displaytask.removeChild(TaskBox)
        // Task.style.textDecoration ="line-through"
    })

    editbtn.addEventListener("click",function(){
        if(editbtn.innerText.toLocaleLowerCase() == "edit"){
            editbtn.innerText = "Save"
            Task.removeAttribute("readonly")
            Task.style.color= "tomato"
            Task.focus()

        }
        else{
            editbtn.innerText = "Edit"
            Task.setAttribute("readonly","readonly")
            Task.style.color= "black"
        }
    })
   
})