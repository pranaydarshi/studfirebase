import { app } from "./firebase.js"
import { getDatabase, set, ref, get, child, update, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const db = getDatabase();
let name,rollno;
function readDetails() {
     name = document.getElementById("name").value;
     rollno = document.getElementById("rollno").value;
}
let add = document.getElementById("add")
add.addEventListener("click", () => {
    readDetails();

    set(ref(db, "students/" + rollno), {
        name, rollno
    })
})
let select = document.getElementById("get")
select.addEventListener("click", () => {
    readDetails();
    get(child(ref(db),"students")).then((result) => {
        console.log(rollno)
        console.log(result.val()[rollno].name)
    })
})
let updt = document.getElementById("update")
updt.addEventListener("click", () => {
    readDetails();
    update(ref(db,"students/"+rollno),{
        name,rollno
    })
})

let del = document.getElementById("delete")
del.addEventListener("click", () =>{
    readDetails();
    remove(ref(db,"students/"+rollno),{
        rollno
    })
})