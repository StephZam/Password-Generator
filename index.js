const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generateEl = document.getElementById("generate-el")
let passEl = document.getElementById("pass-el")
let buttoncount=0
generateEl.addEventListener('click', function() {
    buttoncount++;
    const newButton = document.createElement('button')
    for(let i=0;i<10;i++) {
        let r = Math.floor(Math.random()*characters.length)
        newButton.textContent+=characters[r]
    }
    document.getElementById('buttonCont').appendChild(newButton)
});


