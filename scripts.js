// pokemon data
let pokemons = [
  { number: 1, name: "Bulbasaur", type: "Grass" },
  { number: 2, name: "Ivysaur", type: "Grass" },
  { number: 3, name: "Venusaur", type: "Grass" },
  { number: 4, name: "Charmander", type: "Fire" },
  { number: 5, name: "Charmeleon", type: "Fire" },
  { number: 6, name: "Charizard", type: "Fire" },
  { number: 7, name: "Squirtle", type: "Water" },
  { number: 8, name: "Wartortle", type: "Water" },
  { number: 9, name: "Blastoise", type: "Water" },
  { number: 10, name: "Caterpie", type: "Bug" },
  { number: 11, name: "Metapod", type: "Bug" },
  { number: 12, name: "Butterfree", type: "Bug" },
  { number: 13, name: "Weedle", type: "Bug" },
  { number: 14, name: "Kakuna", type: "Bug" },
  { number: 15, name: "Beedrill", type: "Bug" },
  { number: 16, name: "Pidgey", type: "Normal" },
  { number: 17, name: "Pidgeotto", type: "Normal" },
  { number: 18, name: "Pidgeot", type: "Normal" },
  { number: 19, name: "Rattata", type: "Normal" },
  { number: 20, name: "Raticate", type: "Normal" }
];

function makeList(critera) {
  

  listContainer = document.createElement("div");

  listElement = document.createElement("ul");

  if (critera) {
    listContainer.id = "results";
    document.getElementById("popup").appendChild(listContainer);
  } else {
    document.getElementById("pokemon").appendChild(listContainer);
  }

  listContainer.appendChild(listElement);

  results = 0;

  for (pokemon of pokemons) {
    let name = `${pokemon["name"]}`;
    let number = `#${pokemon["number"]}`;
    let type = `${pokemon["type"]} Type`;
    let imgPath = `../pokemon/${pokemon["number"]}.png`;

    listItem = document.createElement("li");

    PokeName = document.createElement("h4");
    PokeType = document.createElement("p");
    PokeImg = document.createElement("img");

    PokeName.innerHTML = number + " " + name;
    PokeType.innerHTML = type;
    PokeImg.src = imgPath;

    listItem.appendChild(PokeName);
    listItem.appendChild(PokeType);
    listItem.appendChild(PokeImg);

    if (critera) {
      if (
        name.toLowerCase().includes(critera) ||
        (String(number).includes(String(critera)) && results < 5)
      ) {
        listElement.appendChild(listItem);

        results = results + 1;
      }
    } else {
      listElement.appendChild(listItem);
    }
  }
}

// Search Functions
function numSearch() {
  let num = document.getElementById("numVal").value;

  //clean up previous results
  try {
    document.getElementById("popup").innerHTML = "";
    document.getElementById("results").remove();
  } catch (err) {
    console.log(err);
  }

  //input validation
  if (num > 20 || num < 1) {
    document.getElementById("popup").innerHTML = "Please Select Pokemon 1 - 20";
  } else {
    makeList(num);
  }
}

function nameSearch() {
  let name = document.getElementById("nameVal").value.toLowerCase();

  let letters = /^[a-zA-Z]*$/;

  //clean up previous results
  try {
    document.getElementById("popup").innerHTML = "";
    document.getElementById("results").remove();
  } catch (err) {
    console.log(err);
  }

  if (!name.match(letters) || name.length > 20 || name == "") {
    document.getElementById("popup").innerHTML = "Only Letters and Max Name Character Length is 20";
  } 
  else {
    makeList(name);
  }
}


// First Render
makeList("");



