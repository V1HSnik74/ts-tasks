//6.6
interface Car {
    model: string;
    price: number;
    dynamic_1: Record<string, string>;
    dynamic_2: { [key: string] : number };
    tuple: [string, number, string];
}

type keys = keyof Car;

const bmw: Car = {
    dynamic_1: {
        color: "black",
        key2: "something"
    },
    dynamic_2: {
        maxSpeed: 200,
        wheels: 4
    },
    model: "X5",
    price: 5000000,
    tuple: ["Germany", 2026, "New"]

}

const keysArr: keys[] = ["dynamic_1", "dynamic_2", "tuple"];

console.log(bmw.dynamic_1.color);
console.log(bmw.dynamic_2["wheels"]);
console.log("");

//6.7

function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a:any, b: any) {
    return a + b;
}

console.log(add(2, 2));
console.log(add("4", "4"));
