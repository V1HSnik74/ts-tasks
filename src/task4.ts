//4.1

class User {
    static userName: string;
    private surname: string;
    protected age: number;

    constructor(userName: string, surname: string, age: number) {
        User.userName = userName;
        this.age = age;
        this.surname = surname;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }
}

const Vasya = new User("Vasya", "Kakoyto", 25)
Vasya.setAge(35)
console.log(Vasya.getAge());
console.log(User.userName);

//4.2

interface IUser {
    id: number,
    userName: string,
    surname?: string,
    coins: number,
    readonly age: number,
    hasCar: boolean,
    addCoin(amount: number): void,
    removeCoin(amount: number): void,
    getCoins(): string
}

interface BetterIUser extends IUser {
    hasBigSalary: boolean
}

const ivan: IUser = {
    id: 1,
    userName: "Ivan",
    surname: "Ivanov",
    coins: 5,
    hasCar: true,
    age: 25,
    addCoin(amount: number) {
        this.coins += amount;
    },
    removeCoin(amount: number) {
        this.coins -= amount;
    },
    getCoins() {
        return `Количество монет ${this.coins}`;
    },
};

class AnyClass implements BetterIUser {
    readonly age: number;
    hasBigSalary: boolean;
    hasCar: boolean;
    id: number;
    surname?: string;
    userName: string;
    coins: number;

    constructor(name: string, surname: string, age: number, id: number, coins: number) {
        this.age = age
        this.hasBigSalary = true
        this.hasCar = true
        this.id = id
        this.surname = surname
        this.userName = name
        this.coins = coins
    }

    addCoin(amount: number): void {
        this.coins += amount;
    }

    getCoins(): string {
        return `Количество монет ${this.coins}`;
    }

    removeCoin(amount: number): void {
        this.coins -= amount;
    }

    showOff(): void {
        console.log("I'm rich and you aren't!")
    }

}

const richUser = new AnyClass("Ben", "Richman", 30, 1, 10000000000)
console.log(richUser.getCoins())
richUser.showOff()