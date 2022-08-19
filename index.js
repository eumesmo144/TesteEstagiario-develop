
document.querySelector('button')
.addEventListener('click', ()=>{
    var nameUser = document.getElementById("name")
    var mailUser = document.getElementById("mail")
    var foneUser = document.getElementById("fone")

   console.log(nameUser.value);
   console.log(mailUser.value);
   console.log(foneUser.value);
   
});

 function validation(){
    if (document.getElementById("name").value =="") {
        alert("Insira o nome");
    }
    else if (document.getElementById("mail").value =="") {
        alert("Insira o email")
        return false;    
    }
    else if (document.getElementById("fone").value =="") {
        alert("Insira o número")
        return false;
        
    } 
 }
   function Message() {
      var form = document.querySelector("form");
      if (form.style.display === "none") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
        alert('Obrigado por se cadastrar!')

        
      }

   }