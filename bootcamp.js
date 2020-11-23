// you cannot have more than one LET so you only add a value to your variale like this
// let petName = luna
// petName = Angus; there you have actually 2 names to your variables.


// temp converter

let fahrenheit = 50;
let celsius = (fahrenheit - 32) * 5/9;
let kelvin = ( fahrenheit + 459.67) * 5/9;

console.log(celsius);
console.log(kelvin);

//functions

let temperature = function (fahrenheit)
{
    let temp = (fahrenheit - 32) * 5/9;
    return temp
}

let tempOne = temperature(32);
let tempTwo = temperature(68);
console.log(tempOne);
console.log(tempTwo);

// when you "return" you expect to have te resulting value so you can start using it right away in your functions

// Multiple arguments

let bill = function (total, tipPercent = .2){
   // return total * tipPercent
   return `Your tip it's ${tipPercent * 100}% of $${total} wich would end up being $${total * tipPercent}`
}

let totalBill = bill(60, .25);
console.log(totalBill);


let getScoreText = function (name = 'Anonymous', score= 0)
{
   // return 'Name: ' + name + ' - Score: ' + score <-- this is harder to read inb4 difficult to work with
   // it's easier if I make a template string like this
   return `Name: ${name} - Score: ${score}`
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// for clarity sake the template string is way easier to read and to work with.
// template string (``) those are used for the purpouse, and ${} injects the value you have assignned previously

let name = 'JP'
let age = 24
console.log (`Hey my name is ${name}! and I am ${age} years old, pleased to meet you.`)

//challenge area 

let billTotal = 40
let tip = .25
let total = billTotal * tip
console.log (`The ${tip} of ${billTotal} is equal to ${total} wich is your part of the earnings`)

// grad calculator


// redo

let grade = function (studentsSCore, totalPossibleScore)
{
    let percent = ( studentsSCore / totalPossibleScore ) * 100
    let letterGrade = ''
    
    if ( percent => 90)
    {
        letterGrade = 'A'
    }
    else if (percent => 80)
    {
        letterGrade = 'B'
    }
    else if (percent => 70)
    {
        letterGrade = 'C'
    }
    else if (percent => 60)
    {
        letterGrade = 'D'
    }
    else  
    {
        letterGrade = "F"
    }
    
    return `Your got a ${letterGrade} ${percent}%!`
}
 let result = grade(19,20)
 grade(15, 20);
 grade(10, 20);
 grade(7, 20);
 console.log(result)

 //Objects 101
// dot notation allows me to pull out individual pieces of information from my object

 let myBook1 = {
     title : '1984',
     author : 'George Orwell',
     pageCount: 324
 }
 console.log(`${myBook1.title} by ${myBook1.author}`)

 
 myBook1.title = 'Animal Farm'

 console.log(`${myBook1.title} by ${myBook1.author}`)

 let me = {
     age : 24 ,
     name : 'Juan Pablo',
     city : 'Quito'
 }

 console.log(`Hello my name is ${me.name} I'm ${me.age} years old living in ${me.city} - Ecuador`)

 me.age = me.age + 1
 
 console.log(`Hello my name is ${me.name} I'm ${me.age} years old living in ${me.city} - Ecuador`)

 //objects with fuctions JS.

 let myBook = {
    title : '1984',
    author : 'George Orwell',
    pageCount: 324
}

let otherBook = {
    title : 'A peoples History',
    author : 'Howard Zinn',
    pageCount: 723
}

// basically here I have 2 objetcs hence I want to print both without copying the same string over
 
let getSummary = function (book){
    return{
    summary: `${book.title} by ${book.author}` ,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
        }  
}
let bookSummary = getSummary (myBook);
let otherBookSummary = getSummary (otherBook);

console.log(bookSummary.pageCountSummary)

//challenge 

let fahrenheitTemp = function (fahrenheit)
{
    return{
        fahrenheit : fahrenheit,
        celsiusTemp : (fahrenheit - 32) * (5/9),
        kelvinTemp : ( fahrenheit + 459.67) * (5/9),
    }
}

let temps = fahrenheitTemp(60)
console.log(temps)

//Objetcs-references

let myAccount = {
    name: 'Juan Pablo',
    expenses: 0,
    income:0
}

let addExpense = function (account, amount){
    account.expenses = account.expenses + amount
}


let addIncome = function (account, income){
    account.income = account.income + income
}


let resetAccount = function (account){
    account.expenses = 0
    account.income = 0
}


let getAccountSummary = function (account) {
    let balance = account.icome - account.expenses
    return ` Account for ${account.name} . has a ${balance} of $${account.income} in income monthly and $${account.expenses} in total expenses.`
}

addIncome (myAccount, 2000)
addExpense (myAccount, 2,50)
addExpense (myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

// Objects with funcionts 

let restaurant = {
    name : 'ASB',
    guestCapacity:  75,
    guestCount : 0,
    checkAvaliability : function (partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }, 
    seatParty : function (partySize){
        this.guestCount = this.guestCount + partySize
    },
   removeParty: function (partySize){
       this.guestCount = this.guestCount - partySize
   }
}
 restaurant.seatParty(72)
 console.log(restaurant.checkAvaliability(4))
 restaurant.removeParty(5)
 console.log(restaurant.checkAvaliability(4))

// string methods

let userNameForPassword = ' Juan Pablo '
 
// Length property
console.log(name.lenght)

//convert to upper case
console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

//Includes method
let password = 'abc123asda0dad-13'
console.log(password.includes('password'))

//Trim 
console.log(name.trim())

//MDN for strings and everything else actually 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/prototype 

//challenge 

let isValidPassword = function (password){
    if (password.lenght > 8 && !password.includes('password')){
        return true
    }else {
        return false
    }
} 
// since I know that my 'if' statement is valid I can just return the value and have something like this
//  return password.lenght > 8 && !password.includes('password')

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('123abcadadaqheajrere'))