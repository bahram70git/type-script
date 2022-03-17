"use strict";
// *** Number, boolean & string ***
function calculator(n1, n2, plus, txt) {
    if (plus) {
        return txt + '= ' + (n1 + n2);
    }
    else {
        return txt + '= ' + (n1 - n2);
    }
}
;
const result = calculator(3, 10, false, "Result is");
console.log(result);
// *** Object, array & tuple ***
const myObject = {
    name: "Bahram",
    age: 30,
    single: true,
    languages: ['js', 'react'],
    codes: ['abcd', 5]
};
console.log(myObject);
// *** Enum ***
var Order;
(function (Order) {
    Order[Order["FIRST"] = 22] = "FIRST";
    Order[Order["SECOND"] = 13] = "SECOND";
    Order[Order["THIRD"] = 14] = "THIRD";
})(Order || (Order = {}));
;
console.log(Order);
function unionFunction(in1, in2) {
    if (typeof in1 === 'number' && typeof in2 === 'number') {
        return +in1 + +in2;
    }
    else {
        return in1.toString() + in2.toString();
    }
}
const output1 = unionFunction(5, 3);
const output2 = unionFunction('A', 'a');
console.log(output1);
console.log(output2);
