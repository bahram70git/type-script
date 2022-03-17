// *** Number, boolean & string ***

function calculator (n1: number, n2: number, plus: boolean, txt: string) {
    if (plus) {
        return txt + '= ' + (n1 + n2)
    } else {
        return txt + '= ' + (n1 - n2)
    }
};

const result = calculator(3, 10, false, "Result is");

console.log(result)



// *** Object, array & tuple ***

const myObject : {
    name: string;
    age: number;
    single: boolean;
    languages: string[];
    codes: [string, number]  // This is "tuple" type.
} = {
    name: "Bahram",
    age: 30,
    single: true,
    languages: ['js', 'react'],
    codes: ['abcd', 5]
};

console.log(myObject)



// *** Enum ***

enum Order {FIRST= 22, SECOND= 13, THIRD};

console.log(Order)



// *** Union Types ***

type CustomType = number | string;

function unionFunction (in1: CustomType, in2: CustomType) {
    if (typeof in1 === 'number' && typeof in2 === 'number') {
        return +in1 + +in2
    } else {
        return in1.toString() + in2.toString()
    }
}

const output1 = unionFunction(5,3);
const output2 = unionFunction('A', 'a');

console.log(output1)
console.log(output2)