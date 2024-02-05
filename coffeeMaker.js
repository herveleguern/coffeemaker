class CoffeeMaker {
    #coffee = 1000;
    #milk = 500;
    #sugar = 200;

    prepare(coffee) {
        if (this.hasCoffee()) {
            this.#coffee = this.#coffee - coffee.getCoffeeQuantity();

            if (coffee instanceof MilkCoffee) {
                this.pourMilk(coffee);
            }
        }
    }

    pourMilk(coffee) {
        this.#milk = this.#milk - coffee.getMilkQuantity();
    }

    hasCoffee() {
        return this.#coffee > 0;
    }

    getCoffee() {
        return this.#coffee;
    }
    getMilk() {
        return this.#milk;
    }
    getSugar() {
        return this.#sugar;
    }
}

class Coffee {
    #coffee;

    constructor(coffeeQuantity) {
        this.#coffee = coffeeQuantity;
    }

    getCoffeeQuantity() {
        return this.#coffee;
    }
}

class Espresso extends Coffee {
    constructor() {
        super(10);
    }
}

class MilkCoffee extends Coffee {
    #milk = 10;

    constructor() {
        super(20);
    }

    getMilkQuantity() {
        return this.#milk;
    }
}
