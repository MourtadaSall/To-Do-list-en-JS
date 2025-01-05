let button = document.getElementById("submit");
let input = document.getElementById("test");
let content = document.querySelector(".Ajouter");



button.addEventListener("click", function (){
  var addDiv = document.createElement("div");
  var paragraph = document.createElement("P");
  var supprimer = document.createElement("button");
  var modifier = document.createElement("button");
  paragraph.innerText = input.value;
  supprimer.innerHTML = "Supprimer";
  modifier.innerHTML = "Modifier";
  input.value = "";
  addDiv.appendChild(paragraph);
  addDiv.appendChild(modifier);
  addDiv.appendChild(supprimer);
  supprimer.classList.add('bbt1');
  modifier.classList.add('bbt2');
  paragraph.classList.add('google');
  addDiv.classList.add('sall');
  supprimer.addEventListener("click", function (){
     if (confirm('Etes vous sur de la suppréssion') === true) {
        paragraph.remove();
        supprimer.remove();
        modifier.remove();
        addDiv.remove();
     }
     else{
        addDiv = textContent ;
     }
   
  });
  modifier.addEventListener("click", function (){
    input.value  =  paragraph.textContent;
    button.addEventListener("click", function (){
      paragraph.textContent = input.value;
      addDiv.remove();

  });
    
  });

  
  content.appendChild(addDiv);
});

