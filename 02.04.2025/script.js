
function myfunction() //myFunction nosaukums
{
let h2_element = document.getElementById("h2_id")
console.assert.log(h2_element);
let name_element = document.getElementById("Name_input")
h2_element.innerText = "Hello, " + name_element.value + " !";


}
function myFunction() {

let h2_element = document.getElementById("h2_id")
console.log(h2_element);
let name_element = document.getElementById("name_input");
let surename_element = document.getElementById("surename_input");
let age_element = document.getElementById("age_input");
let email_element = document.getElementById("email_input");

if(name_element.value =="" ||
    !name_element.value.match(/[A-z]/)||
    name_element.value.match(/[0-9]/))
    {
        console.error("Name contains invalid symbols");
return;
    }

    if(surename_element.value =="" ||  
        !surename_element.value.match(/[A-z]/)  ||
        surename_element.value.match(/[0-9]/))
{
    console.error("Surename contains invalid symbols");
    return;
}
if(surename_element.value =="" ||  
    !age_element_element.value.match(/[A-z]/)  ||
    age_element.value.match(/[0-9]/))
{
    console.error("Age contains invalid symbols");
    return;
}
if(email_element.value =="" ||
    !email_element.value.match(/[@]/))
    {
        console.error("Email does not contain @ symbol");
    return;
    }

h2_element.innerText = "Hello, " +
name_element.value + " " + surename_element.value + " " + age_element.value;
}