let count = 0
 let countEl = document.getElementById("count_el")
 let saveEl = document.getElementById("save_el")

function increment() {
count += 1
countEl.textContent = count
}


function saveit() {
let newCount = count + ' - '
saveEl.textContent += newCount
countEl.textContent = 0
count = 0
}


let firstName = 'ejenibe '
let secondName = 'uche'
const thirdName = firstName + secondName
console.log(thirdName)

let name = 'linda'
let greeting = 'Hi there,'

function greet() {
    let machine = greeting + ' ' + name + '!' 
    console.log(machine)
}
greet()

let myPoints = 3


function add3points() {
    myPoints+=3
  console.log(myPoints)
}
add3points()
add3points()
add3points()

function remove1point() {
    myPoints-=1
    console.log(myPoints)
}
remove1point()
remove1point()

// 22
// 18
// 65
// my points 59
// 4
// 1114
