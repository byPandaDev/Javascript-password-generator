const pw = document.getElementById("pw")
const copy = document.getElementById("copy")
const len = document.getElementById("len")
const upper = document.getElementById("upper")
const lower = document.getElementById("lower")
const number = document.getElementById("number")
const symbol = document.getElementById("symbol")
const generate = document.getElementById("generate")

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "~!@#$%^&*()_+=|"

function getUpercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}
function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}
function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
    if(len.value >= 4 && len.value <= 30) {
        if(upper.checked || lower.checked || number.checked || symbol.checked) {
            const length = len.value
            let password = ""
            for(let i=0; i<length;i++) {
                const x = generateX()
                password += x
            }
            pw.innerText = password   
        } else {
            alert("your have to select at least one")
        }
    } else {
        alert("your password lenght has to be between 4 and 30 characters")
    }
}

function generateX() {
    const xs = []
    if(upper.checked){
        xs.push(getUpercase())
    }
    if(lower.checked){
        xs.push(getLowercase())
    }
    if(number.checked){
        xs.push(getNumber())
    }
    if(symbol.checked){
        xs.push(getSymbols())
    }
    if(xs.length === 0) return ""
    return xs[Math.floor(Math.random() * xs.length)]
}
generate.addEventListener("click", generatePassword)
copy.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const password = pw.innerText
    if(!password) {return}
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("password copied to clipboard")
})

/* 
Made by: PandaDev
Website: https://codewithpanda.com
Please Mention PandaDev if you use this Project
*/
