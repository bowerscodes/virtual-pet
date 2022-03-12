// food
const APETITE = 5
const FEED = 3

const NEED_FOOD = 5
const MAX_HUNGER = 10


// exercise
const MAXIMUM_FITNESS = 10;
const AGE_FITNESS = 3
const WALK_EXERCISE = 4

const NEED_WALK = 3
const MINIMUM_FITNESS = 0


const MAX_AGE = 30



function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
}

Pet.prototype = {
    get isAlive() {
        return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > MINIMUM_FITNESS
    }
}

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error("Your pet is no longer alive :(");
    }
    this.age += 1;
    this.hunger += APETITE;
    this.fitness -= AGE_FITNESS;
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error("Your pet is no longer alive :(");
    }
    if ((this.fitness + WALK_EXERCISE) <= MAXIMUM_FITNESS) {
        this.fitness += WALK_EXERCISE;     
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
    
}
Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error("Your pet is no longer alive :(");
    }
     if (this.hunger >= FEED) {
         this.hunger -= FEED;
} else {
    this.hunger = 0;
}
};

Pet.prototype.checkup = function () {
    if (!this.isAlive) {
        throw new Error("Your pet is no longer alive :(");
    }
    if ((this.fitness <= NEED_WALK) && (this.hunger >= NEED_FOOD)) {
        return "I'm hungry AND I need a walk!";
    } else if (this.fitness <= NEED_WALK) {
        return "I need a walk";
    } else if (this.hunger >= NEED_FOOD) {
        return "I'm hungry";
    } else {
        return "I feel great!";
    }
}

Pet.prototype.adoptChild = function (childName) {
    const child = new Pet(childName);
    this.children.push(child);
}


module.exports = Pet;