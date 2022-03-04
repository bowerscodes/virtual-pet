
const APETITE = 5

const MAXIMUM_FITNESS = 10;
const WALK_EXERCISE = 4

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += APETITE;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if ((this.fitness + WALK_EXERCISE) <= MAXIMUM_FITNESS) {
        this.fitness += WALK_EXERCISE;     
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
    
}

module.exports = Pet;