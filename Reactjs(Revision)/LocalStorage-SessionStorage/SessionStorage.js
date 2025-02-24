function setdata(){
    sessionStorage.setItem('username' , 'bansi')
  }

  function getdata(){
   data= sessionStorage.getItem("username");
    document.getElementById("output").innerHTML=data;
  }

  function removedata(){
    sessionStorage.removeItem("username");
  }

  function cleardata(){
    sessionStorage.clear("");
  }