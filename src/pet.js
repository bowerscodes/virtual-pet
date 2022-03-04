// food
const APETITE = 5
const FEED = 3

// exercise
const MAXIMUM_FITNESS = 10;
const AGE_FITNESS = 3
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
    this.fitness -= AGE_FITNESS;
};

Pet.prototype.walk = function() {
    if ((this.fitness + WALK_EXERCISE) <= MAXIMUM_FITNESS) {
        this.fitness += WALK_EXERCISE;     
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
    
}
Pet.prototype.feed = function() {
     if (this.hunger >= FEED) {
         this.hunger -= FEED;
} else {
    this.hunger = 0;
}
};
module.exports = Pet;