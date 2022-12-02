//select the first list item

const li = document.getElementsByTagName('li')[0]
//console.log(li)

//Traversing the DOM

//Accessing the parent node
//parentNode
//parentElement

//console.log(li.parentNode)
//console.log(li.parentElement)

const headerItem = document.getElementsByClassName('card-header')[0]
//console.log(headerItem)
//console.log(headerItem.parentElement)

const ul = document.getElementsByTagName('ul')[0]
//console.log(ul)

//Accessing the children
//console.log(ul.children)

//Accessing sibling elements

const firstLi = document.getElementsByTagName('li')[1]

//previousSibling
//console.log(firstLi.previousSibling)

//nextSibling
//console.log(firstLi.nextSibling)

//previousElementSibling
//console.log(firstLi.previousElementSibling)
//nextElementSibling
//console.log(firstLi.nextElementSibling)

//firstChild
//console.log(ul.firstChild)
//firstElementChild
//console.log(ul.firstElementChild)

//lastElementChild
//console.log(ul.lastElementChild)

//Adding items to the DOM
const newLi = document.createElement('li')
newLi.className = "list-group-item d-flex justify-content-between align-items-center";

//Add textNode
newLi.appendChild(document.createTextNode('Fourth Item'))

//create a button element
const btn = document.createElement('button')
btn.className = "btn btn-danger delete"

//create a text node for the btn
btn.appendChild(document.createTextNode('Remove'))

//append the btn to the newLi
newLi.appendChild(btn)

//append the newLi to the DOM
ul.appendChild(newLi)

// Events

//click, submit, mouse events, keyboard events, input events
//keyboard events
//keyup,keydown,keypress

// const deleteButton = document.getElementsByClassName('delete')[0]
// console.log(deleteButton)
// deleteButton.addEventListener('click',remove)
//
// function remove() {
//     //console.log('Element removed')
//     //alert('Hello friend')
//     //confirm("Are you sure?")
// }





//Working with submit event

// const form = document.getElementById('addForm')
//select the input element
//const userInput = document.getElementById('userInput')
//
// form.addEventListener('submit', submitForm)
//
//
// function submitForm(e){
//     e.preventDefault()
//     //console.log('Form submitted')
//     console.log(userInput.value)
// }


const userInput = document.getElementById('userInput')

userInput.addEventListener('input',submitForm)


function submitForm(e){
    e.preventDefault()
    //console.log('Form submitted')
    console.log(e.target.value)
}


