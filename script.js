let addItemInput = document.querySelector("#text-input");
let addUl = document.querySelector("#list");
document.querySelector("#add-button").addEventListener("click", function() {
  if(addItemInput.value.trim() === "") {
    return
  }
  let li = document.createElement("li");
  addUl.append(li);
  li.textContent = addItemInput.value;
  addItemInput.value  = "";
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "DELETE";
  li.append(deleteButton);
  deleteButton.addEventListener("click", function() {
    li.remove();
  });
});
addItemInput.addEventListener("keyup", function() {
  if (event.code === "Enter") {
    document.querySelector("#add-button").dispatchEvent(new Event("click"));
  };
});


const shoppingList = ["Bread", "Milk", "Newspaper"];
const body = document.querySelector("body");
for (let i = 0; i < shoppingList.length;i++) {
  let example = shoppingList[i];
  let ul = document.createElement("ul");
  body.append(ul);
  let li = document.createElement("li");
  li.textContent = example;
  example.value = "";
  ul.append(li);
};


//Task - 2

const cities = [];
const citiesList = document.querySelectorAll("#cities li");
for (let i = 0; i < citiesList.length; i++) {
  cities.push(citiesList[i].textContent)
};

const players = [
  {name: "Aijan", score: 70},
  {name: "Ilgiz", score: 65},
  {name: "Dastan", score: 100}
];

// for (let i = 0; i < players.length; i++) {
//   const ul = document.createElement("ul");
//   body.append(ul);
//   const li = document.createElement("li");
//   li.textContent = name;
//   name.value = "";
//   ul.append(li)
// };

const playersList = document.createElement("ul");
document.body.append(playersList);
for (let i = 0; i < players.length; i++) {
  const playersLi = document.createElement("li");
  playersList.append(playersLi);
  
  playersLi.textContent = players[i].name + " - ";

  const score = document.createElement("strong");
  score.textContent = players[i].score;
  playersLi.append(score);
};


//4

const pCities = [];
const pCitiesList = document.querySelectorAll("ol li");

for (let i = 0; i < pCitiesList.length; i++) {
  pCities.push({
    name: "?",
    population: "?"
  });
}
console.log(pCities);

//5

const tableData = [
  { name: "Bishkek", population: "1m" },
  { name: "Karakol", population: "80k" },
  { name: "Cholpon-Ata", population: "40k" },
];

// const tablesdata = document.createElement("table");
// document.body.append(tablesdata);
// for (let i = 0; i < tableData.length; i++) {

//   const taable = document.createElement("tr");
//   tablesdata.append(taable);
  
//   const score = document.createElement("td");
//   score.textContent = tableData[i].name;
//   taable.append(name);

//   const taas = document.createElement("td");
//   score.textContent = tableData[i].population;
//   taable.append(population);
// };


const citydataTable = document.createElement('table');
body.append(citydataTable);

for (let i = 0; i < tableData.length; i++) {
  const tr = document.createElement('tr');
  citydataTable.append(tr);

  const td = document.createElement('td');
  tr.append(td);
  td.textContent = tableData[i].name;

  const tdd = document.createElement('td');
  tr.append(tdd);
  tdd.textContent = tableData[i].population;
}