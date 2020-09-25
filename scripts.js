function makeList(critera) {
  let pokemons = [
    { number: 1, name: "Bulbasaur", image: "", type: "Grass" },
    { number: 2, name: "Ivysaur", image: "", type: "Grass" },
    { number: 3, name: "Venusaur", image: "", type: "Grass" },
    { number: 4, name: "Charmander", image: "", type: "Fire" },
    { number: 5, name: "Charmeleon", image: "", type: "Fire" },
    { number: 6, name: "Charizard", image: "", type: "Fire" },
    { number: 7, name: "Squirtle", image: "", type: "Water" },
    { number: 8, name: "Wartortle", image: "", type: "Water" },
    { number: 9, name: "Blastoise", image: "", type: "Water" },
    { number: 10, name: "Caterpie", image: "", type: "Bug" },
    { number: 12, name: "Metapod", image: "", type: "Bug" },
    { number: 13, name: "Butterfree", image: "", type: "Bug" },
    { number: 14, name: "Weedle", image: "", type: "Bug" },
    { number: 15, name: "Kakuna", image: "", type: "Bug" },
    { number: 16, name: "Beedrill", image: "", type: "Bug" },
    { number: 17, name: "Pidgey", image: "", type: "Normal" },
    { number: 18, name: "Pidgeotto", image: "", type: "Normal" },
    { number: 19, name: "Pidgeot", image: "", type: "Normal" },
    { number: 20, name: "Rattata", image: "", type: "Normal" },
  ];

  listContainer = document.createElement("div");
  listContainer.id = "results";
  listElement = document.createElement("ul");

  document.getElementById("pokemon").appendChild(listContainer);

  listContainer.appendChild(listElement);

  results = 0;

  for (pokemon of pokemons) {
    let name = `${pokemon["name"]}`;
    let number = `#${pokemon["number"]}`;
    let type = `${pokemon["type"]} Type`;
    let imgPath = `../pokemon/${pokemon["number"]}.png`;

    console.log(name, number, type);

    listItem = document.createElement("li");

    PokeName = document.createElement("h5");
    PokeType = document.createElement("p");
    PokeImg = document.createElement("img");

    PokeName.innerHTML = number + ' ' + name;
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

    // alert(popup)
  }
}

// First Render
makeList("");

// Search Calls

function numSearch() {
  let num = document.getElementById("numVal").value;

  if (num > 20 || num < 1) {
    alert("Please Select Pokemon 1 - 20");
  } else {
    console.log(num);
    document.getElementById("results").remove();
    makeList(num);
  }
}

function nameSearch() {
  let name = document.getElementById("nameVal").value.toLowerCase();

  let letters = /^[a-zA-Z]*$/;

  if (!name.match(letters) || name.length > 20 || name == "") {
    alert("Only Letters and Max Name Character Length is 20 ");
  } else {
    console.log(name);
    document.getElementById("results").remove();
    makeList(name);
  }
}
