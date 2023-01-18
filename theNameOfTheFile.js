// Hello You!
function hello(name) {
    if (name == null) {
        console.log('Hello World!')
    } else {
        console.log(`Hello, ${name}.`)
    }
}
hello('Will');


//madlib function
const madlib = (name, subject) => {
    return console.log(`${name}'s favorite subject in school is ${subject}.`)
}

madlib('Will', 'Math');



// tip calculator
function tipAmount(bill,los) {
    if (los == "good") {
        finalAmount = bill*.2
    } else if (los == "fair") {
        finalAmount = bill*.15
    } else if (los == "poor") {
        finalAmount = bill*0
    }

    console.log(finalAmount)

}
console.log(tipAmount(100, 'good'))


// tip calculator #2
function tipAmount(bill,los) {
    if (los == "good") {
        finalAmount = bill*1.2
    } else if (los == "fair") {
        finalAmount = bill*1.15
    } else if (los == "poor") {
        finalAmount = bill*0
    }
    
    console.log(finalAmount)
    
}

console.log(tipAmount(100, 'good'))

// tip calculator # 3
function splitAmount(bill,los,ppl) {
    if (los == "good") {
        finalAmount = bill*1.2
    } else if (los == "fair") {
        finalAmount = bill*1.15
    } else if (los == "poor") {
        finalAmount = bill
    }

    let splitAmount = finalAmount/ppl

    console.log(splitAmount)

}
splitAmount(122,"poor",2)


