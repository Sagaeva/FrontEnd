//Datum

let datum = document.getElementById("datum");
let dag = new Date().getMonth();
let options = {weekday: 'short',  year: 'numeric', month: 'long', day: 'numeric'}
let volDat = dag.toLocaleString('nl-BE', options)

datum.innerHTML = volDat;
let weekdag = ["zondag", "maandaag", "dinsdag", "woensdqg", "donderdag", "vrijdag"]

weekdag = weekdag[new Date().getDay()];
console.log(weekdag)
//getDay, get Date, getMonth, getFullYear

let datum1 = document.getElementById("datum1");
let dag1 = new Date().getDay();
let date = new Date().getDate();
console.log(date);
let month = ["jan", "feb", "maa", "apr", "mei" , "jun", "jul"]
month = new Date().getMonth().toLocaleString('nl-BE', 'long');
console.log(month)
let year = new Date().getFullYear();
console.log(year);

datum1.innerHTML = weekdag + " " + date + " "  +  month + " " + year;

console.log(new Date().getMinutes())

if((new Date().getMinutes()) >= 38) {
    console.log((new Date().getMinutes()) + " " + "hallo")
        
} else {
    console.log((new Date().getMinutes()) + " " + "goodbuye")
}
  

//Math objects

let result = Math.random();
result =result*10
result = Math.round(Math.random()*55)+1
console.log(result)

let speelgoed = ["bal", "pop", "lego", "beer", "auto", "puzzle", "playstation", "monopolie", "kleuren", "kaarten", "buiten" ]
let kind = speelgoed[Math.round(Math.random()*10)];
console.log(kind);

//functies

 function  test1 (param1, param2, param3) {
  return console.log(param1, param2, param3)
}
test1("hello", 5, "logo")
test1("hallo", "Freddy", 10)


const test2 = (param4, param5) => {
    console.log(param4, param5)
}
test2("hallo", "hello")

let vrienden = ["Els", "Marie", "Linda", "Karen"]
console.log(vrienden)
function friends(vriend){
    vrienden.push(vriend)
}
friends("an");
friends("Sophie")
friends("Lola")
console.log(vrienden)

let z;
let a = 5;
let b = 7;
function gemiddelde(a,b) {
    return z=(a+b)/2
}
gemiddelde(a,b)
console.log(z)
