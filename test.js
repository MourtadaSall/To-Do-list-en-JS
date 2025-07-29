let button = document.getElementById("submit");
let input = document.getElementById("test");
let content = document.querySelector(".Ajouter");

let elementEnCoursDeModification = null;

button.addEventListener("click", function () {
  const valeur = input.value.trim();
  if (valeur === "") {
    alert("Veuillez entrer une tâche avant d’ajouter !");
    return;
  }

  if (elementEnCoursDeModification) {
    elementEnCoursDeModification.paragraph.textContent = valeur;

    let now = new Date();
    elementEnCoursDeModification.dateElement.textContent = "Modifié le : " + now.toLocaleDateString();

    elementEnCoursDeModification = null;
    input.value = "";
    return;
  }

  var addDiv = document.createElement("div");
  var paragraph = document.createElement("p");
  var supprimer = document.createElement("button");
  var modifier = document.createElement("button");
  var dateElement = document.createElement("small");

  let containerTop = document.createElement("div");
  containerTop.style.display = "flex";
  containerTop.style.flexDirection = "column";
  containerTop.style.gap = "10px";

  let btnWrapper = document.createElement("div");
  btnWrapper.style.display = "flex";
  btnWrapper.style.gap = "10px";

  paragraph.innerText = valeur;
  supprimer.innerHTML = "Supprimer";
  modifier.innerHTML = "Modifier";

  let today = new Date();
  let formattedDate = today.toLocaleDateString();
  dateElement.textContent = "Ajouté le : " + formattedDate;
  dateElement.classList.add('date');

  input.value = "";

  btnWrapper.appendChild(modifier);
  btnWrapper.appendChild(supprimer);
  containerTop.appendChild(paragraph);
  containerTop.appendChild(btnWrapper);

  addDiv.appendChild(containerTop);
  addDiv.appendChild(dateElement);

  supprimer.classList.add('bbt1');
  modifier.classList.add('bbt2');
  paragraph.classList.add('google');
  addDiv.classList.add('sall');

  supprimer.addEventListener("click", function () {
    if (confirm('Êtes-vous sûr de la suppression ?')) {
      addDiv.remove();
    }
  });

  modifier.addEventListener("click", function () {
    input.value = paragraph.textContent;
    elementEnCoursDeModification = { paragraph, dateElement };
  });

  content.appendChild(addDiv);
});
