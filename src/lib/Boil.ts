export default class Boil {
    private readonly unboiledFood: string;

    constructor(food: string) {
        this.unboiledFood = food;
    }

    getBoiledFood() {
        return this.boilFood();
    }

    boilFood(): string {
        return 'Boiled ' + this.unboiledFood;
    }
}
