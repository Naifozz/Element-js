// age(17)
// function age(age) {
//     if (age >= 18) {
//         console.log("Majeur");
        
//     }
//     else {
//         console.log("Mineur");
        
//     }
// }
// for (let i = 1; i <=20; i++) {
//     if (i % 2 == 0){
//         console.log(i);
        
//     }
 
// }

// let nombreRandom = Math.floor(Math.random() * 100)

// console.log(nombreRandom);


// let user = prompt("Choisi un nombre entre 1 et 100") 
// while (true) {
//     if (user == nombreRandom) {
//         alert("Bien joué !"); break;
//         } else if (user<nombreRandom) {
//         user = prompt("C'est plus");
//         } else {
//         user = prompt("C'est moin");
//         }
// }


// function donneMois(mois, annee) {
//     switch (mois) {
//         case 1:
//             return "31"
//         case 2:
//             if (annee % 4 == 0){
//                 return "29"
//             }
//             else {
//                 return "28"
//             }            
//         case 3:
//             return "31"           
//         case 4:
//             return "30"           
//         case 5:
//             return "31"         
//         case 6:
//             return "30"           
//         case 7:
//             return "31"         
//         case 8:
//             return "31"          
//         case 9:
//             return "30"           
//         case 10:
//             return "31"          
//         case 11:
//             return "30"          
//         case 12:
//             return "31"             
//         default:
//             "Ce n'est pas un mois"
//             break;
//     }
// }
// console.log(donneMois(2, 2020));


// const button = document.createElement("button")
// const para = document.createElement("p")
// const body = document.querySelector("body")

// button.textContent = "Bonjour"
// body.appendChild(button)
// body.appendChild(para)

// button.addEventListener("click", () => {
//     para.textContent = "Hello world";
// })



// const button2 = document.createElement("button")
// const para2 = document.createElement("p")

// body.appendChild(button2)
// body.appendChild(para2)

// para2.textContent = "rouge"

// button2.textContent = "Rouge"
// button2.addEventListener("click", () => {
    
//     para2.style.color = "red";
// })



// const button3 = document.createElement("button")
// const ul = document.createElement("ul")

// body.appendChild(button3) 
// button3.textContent = "Add"
// body.appendChild(ul)

// button3.addEventListener("click", () => {
//     const li = document.createElement("li")
//     ul.appendChild(li)
//     li.textContent = "Nouvel élément"
// })


// const button4 = document.createElement("button")
// const li = document.createElement("li")

// body.appendChild(button4)
// button4.textContent = "Remove"
// body.appendChild(ul)

// button4.addEventListener("click", () => {
//     ul.removeChild(ul.firstElementChild)
// })

// function consol(bouton) {
//     console.log(bouton);
// }
// for (i = 1; i <= 3; i++){
//     const button = document.createElement("button")
//     button.textContent = "bouton " + i
//     button.addEventListener("click", () => consol(button))
//     body.appendChild(button) 
// }

// const note = document.querySelectorAll("div.note")

// console.log(note);

// let data = {
//     "id": "0001",
//     "type": "donut",
//     "name": "Cake",
//     "ppu": 0.55,
//     "batters":
//     {
//         "batter":
//             [
//                 { "id": "1001", "type": "Rick" },
//                 { "id": "1002", "type": "Chocolate" },
//                 { "id": "1003", "type": "Blueberry" },
//                 { "id": "1004", "type": "Devil's Food" }
//             ]
//     },
//     "topping":
//         [
//             { "id": "5001", "type": "None" },
//             { "id": "5002", "type": "Glazed" },
//             { "id": "5005", "type": "Morty" },
//             { "id": "5007", "type": "helloWorld" },
//             { "id": "5006", "type": "Chocolate with Sprinkles" },
//             { "id": "5003", "type": "Chocolate" },
//             { "id": "5004", "type": "Maple" }
//         ]
// }

// console.log(data.name);
// console.log(data.ppu);
// console.log(data.topping);
// console.log(data.batters.batter[3].type);
// console.log(data.topping[6].type);
// console.log(data.topping[0].id);

// console.log(data.batters.batter[0].type + " est l'id " + data.batters.batter[0].id);
// console.log(data.name + " a comme topping " + data.topping[6].type);

let dice = document.querySelector('.dice')

let rndInt = Math.floor(Math.random() * 6 ) + 1;
console.log(rndInt);


    switch (rndInt) {
        case 1:
                dice.src = "de1.png"
            break;
        case 2:
                dice.src = "de2.png";           
            break;
        case 3:
                dice.src = "de3.png";
            break;
        case 4:
                dice.src = "de4.png";
            break;
        case 5 :
                dice.src = "de5.png";
            break;
        case 6:
                dice.src = "de6.png";
            break;
        default:
            break;
    }





