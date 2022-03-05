const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
    it('has an initial hunger of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });
    it('has an initial fitness of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });
});
describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });
    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });
    it('decrements the fitness by 3', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
    it("throws an error if the pet is not alive", () => {
        const pet = new Pet("Fido");
        pet.age = 30;

        expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
    });
});
describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });
    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('Fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
    it("throws an error if the pet is not alive", () => {
        const pet = new Pet("Fido");
        pet.age = 30;

        expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
    });
});
describe('feed', () => {
    it("decreases the pet's hunger by 3", () => {
        const pet = new Pet('Fido');

        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toEqual(2);
    });
    it("pet's hunger never goes below 0", () => {
        const pet = new Pet('Fido');
        
        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });
    it("throws an error if the pet is not alive", () => {
        const pet = new Pet("Fido");
        pet.age = 30;

        expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
    });
  
})
describe('checkup', () => {
    it("returns 'I'm hungry AND I need a walk!' when fitness below 3 and hunger above 5", () => {
        const pet = new Pet('Fido');
        pet.fitness = 2;
        pet.hunger = 6;
        expect(pet.checkup()).toBe("I'm hungry AND I need a walk!")
    });
    it("returns 'I need a walk' if the pet's fitness is 3 or less", () => {
        const pet = new Pet('Fido');
        pet.fitness = 2;
        expect(pet.checkup()).toBe("I need a walk")
    });
    it("returns 'I'm hungry' if the pet's hunger is 5 or more", () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        expect(pet.checkup()).toBe("I'm hungry")
    });
    it("returns 'I feel great!' if the pet's hunger is under 5 and fitness over 3", () => {
        const pet = new Pet('Fido');
        pet.hunger = 4;
        pet.fitness = 4;
        expect(pet.checkup()).toBe("I feel great!")
    });
    it("throws an error if the pet is not alive", () => {
        const pet = new Pet("Fido");
        pet.age = 30;

        expect(() => pet.checkup()).toThrow("Your pet is no longer alive :(");
    });
})
describe('isAlive', () => {
    it("returns False if fitness is 0 or less", () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(pet.isAlive).toBe(false)

    });
    it("returns False if hunger is 10 or more", () => {
        const pet = new Pet('Fido');
        pet.hunger = 10;
        expect(pet.isAlive).toBe(false)
    });
    it("returns False if age is 30 or more", () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(pet.isAlive).toBe(false)

    });
    it("returns True if hunger below 10 and fitness above 0", () => {
        const pet = new Pet('Fido');
        pet.fitness = 1;
        pet.hunger = 9;
        expect(pet.isAlive).toBe(true)

    });
})