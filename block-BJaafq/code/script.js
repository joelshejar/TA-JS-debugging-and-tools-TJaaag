let sum = (numA, numB) => {
    return(numA + numB)
}
function expect(actual){
    return{
        toEqual: function(expected){
            if(actual!==expected){
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toBeEqual: function(expected){
            if(typeof actual !== expected){
                throw new Error(`${typeof actual} is not equal to ${expected}`)
            }
        }
    }
}
expect(sum(10, 20).toEqual(20))
expect(sum(10, 20).toEqual(29))
expect(sum(20, 20).toEqual(40))

let multiply = (numA, numB) => {
    return numA * numB
}
expect(multiply(10, 20).toEqual(290))
expect(multiply(10, 20).toEqual(200))
expect(multiply(9, 20).toEqual(180))




