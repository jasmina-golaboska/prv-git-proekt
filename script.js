let ulTag = document.getElementById("lista");

let person = {
    name: "Jasmina",
    lastName: "Golaboska",
    age: 38,
    phones: ["0713726172", "0773827261", "076546227"]
};

for (let i =0; i < person.phones.length; i=i+1) {
let newLi = document.createElement("li");
newLi.innerHTML = person.phones[i];

let nesto 
    ulTag.appendChild (newLi);
};