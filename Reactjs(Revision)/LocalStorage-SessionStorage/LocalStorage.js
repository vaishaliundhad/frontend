function setdata(){

    let admin={
        FirstName:"janu",
        lastName:"Patel",
        Age:21
    }

    let string= JSON.stringify(admin);
    localStorage.setItem("username" , string);
    localStorage.setItem("password" , "0001234");
}

function getdata(){
    let data = localStorage.getItem("username");
    document.getElementById("output").innerHTML = data;
}

function removedata(){
    localStorage.removeItem("username");
}

function clearAll(){
    localStorage.clear("");
}



