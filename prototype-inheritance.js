const sayMixin = {
    say(phrase) {
        console.log(phrase);
    },
};

const sayHiMixin = {
    __proto__: sayMixin,
    sayHi() {
        // super -> prototype of this object
        super.say(`Hello, ${this.name}`); //sayMixin.say()
    },

    sayBye() {
        // super -> prototype of this object
        super.say(`Bye,  ${this.name}`);
    },
};

const anotherObject = {
    work() {
        console.log(`${this.name} is working`);
    },
};

const anotherAnotherObject = {
    sleep() {
        console.log(`${this.name} is sleeping`);
    },
};

class User {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`${this.name} says Welcome!`);
    }
}

const user = new User("Aditya Keri");

Object.assign(User.prototype, sayHiMixin, anotherAnotherObject, anotherObject);

user.sleep();