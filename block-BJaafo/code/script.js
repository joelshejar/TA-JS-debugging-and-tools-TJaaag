let fullName = (firstName, lastName) => {
    return (`${firstName} ${lastName}`)
}

let result = fullName(Joel, Rajesh)
let expectedResult = "Joel Raj"

if(result!==expectedResult){
    throw new Error(`${result} is not equal to ${expectedResult}`)
}

let expectResult = "Joel Rajesh"
if(result!==expectResult){
    throw new Error(`${result} is not equal to ${expectResult}`)
}

let total = (amount, taxRate) => {
    return (amount + (amount * taxRate))
}
let result1 = total(1, 2)
let result2 = 4

if(result1 !== result2){
    throw new Error(`${result1} is not equal to ${result2}`)
}

let result3 = 3
if(result1 !== result3){
    throw new Error(`${result1} is not equal to ${result3}`)
}










