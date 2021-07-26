/* Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

Milestone 2
Coloriamo le icone per tipo

Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone

BONUS: Provare ad aggiungere una casella di testo che renda possibile filtrare anche per nome dell'icona

SUPER INCREDIBLE MEGA BONUS: effettuare la ricerca dalla casella di testo in "tempo reale", cioè man mano che l'utente digita. */

//Icons' objects
const icons = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
  },
];

//Initial variables
const display = document.getElementById("display");
const selectField = document.getElementById("select");

for (let i = 0; i < icons.length; i++) {
  icon = icons[i];
}

//Functions
function printElementsTemplate(arr, placeholder) {
  let Template = "";
  arr.forEach((element) => {
    Template += `
        <div class="col-4 col-sm-4 col-md-3 col-lg-2">
            <div class= "card-container">
                <div class= "card p-3 text-center">
                    <i class="${element.family} ${element.prefix}${
      element.name
    } fa-2x ${element.type}"></i>
                    <h6 class="pt-2">${element.name.toUpperCase()}</h6>
                </div>
            </div>
        </div>`;
  });
  placeholder.innerHTML = Template;
}

//Filter all the cards
selectField.addEventListener("change", function () {
  const userSelection = selectField.value;
  if (userSelection === "all") {
    //Print all the cards
    //! error: doesn't print all the cards when selected "all"
    printElementsTemplate(icons, display);
    return;
  }
  //Print the cards by type
  const filteredIcons = icons.filter((icon) => userSelection === icon.type);
  printElementsTemplate(filteredIcons, display);
});
