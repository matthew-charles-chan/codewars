/* eslint-disable func-style */

const zero = (op) => op ? op(0) : 0
const one = (op) => op ? op(1) : 1
const two = (op) => op ? op(2) : 2
const three = (op) => op ? op(3) : 3
const four = (op) => op ? op(4) : 4
const five = (op) => op ? op(5) : 5
const six = (op) => op ? op(6) : 6
const seven = (op) => op ? op(7) : 7
const eight = (op) => op ? op(8) : 8
const nine = (op) => op ? op(9) : 9

const plus = (numA) => numB => numA + numB
const minus = (numA) => numB => numB - numA
const times = (numA) => numB => numA * numB
const dividedBy = (numA) => numB => numB / numA

console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))
