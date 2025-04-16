let vards = "Janis";  
let vecums = 20;      
let irPilsonis = true; 

console.log("Vārds: " + vards);
console.log("Vecums: " + vecums);
console.log("Pilsonis: " + irPilsonis);

if (vecums >= 18 && irPilsonis) {
  console.log("Drīkst balsot");
} else if (vecums >= 18) {
  console.log("Personai ir 18 gadi, bet viņa nav pilsonis");
} else if (irPilsonis) {
  console.log("Persona nav pilngadīga, bet ir pilsonis");
} else {
  console.log("Persona nav pilngadīga un nav pilsonis");
}

let atzime = parseInt(prompt("Ievadiet atzīmi (0-100):"), 10);

if (atzime >= 90 && atzime <= 100) {
    console.log("Izcili");
} else if (atzime >= 70 && atzime <= 89) {
    console.log("Labi");
} else if (atzime >= 50 && atzime <= 69) {
    console.log("Vidēji");
} else if (atzime >= 0 && atzime <= 49) {
    console.log("Slikti");
} else {
    console.log("Nepareiza atzīme.");
}


let saraksts = ["uba", "buba", "oaa", "dudu", "keke"];



for (let i = 0; i < saraksts.length; i++) {
    console.log(saraksts[i]);
}


