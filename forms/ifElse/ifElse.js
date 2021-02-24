
let firstName = ""
let state = ""
let temp = ""
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

firstName = prompt("Enter your first name")
state = prompt("Which state, NE or FL?")
temp = Number(prompt("Enter the temperature."))

if (temp <= 32 && state == "NE")
    console.log(`${firstName}, ${messages[0]}.`)
else if  (temp > 32 &&  temp <= 50 && state == "NE")
    console.log(`${firstName}, ${messages[1]}.`)
else if  (temp > 32 &&  temp <= 50 && state == "FL")
    console.log(`${firstName}, ${messages[2]}.`)
else (temp > 50 &&  temp <= 70 && state == "FL")
    console.log(`${firstName}, ${messages[3]}.`)
 