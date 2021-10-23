let petName = prompt("Name your pet:")
let petEnergy = 0;
let petHappiness = 0;

for (let i = 0; i < 6; i++) {
    let actionTaken = prompt("Feed, pet, or walk?")
    if (actionTaken === "feed") {
        petEnergy += 2;
    } else if (actionTaken === "pet") {
        petHappiness += 1;
    } else if (actionTaken === "walk" && petEnergy > 0) {
        petEnergy -= 1;
        petHappiness += 2;
    } else if (actionTaken === "walk" && petEnergy === 0) {
        alert("Not enough energy to enjoy a walk.")
    }
}

console.log(petName + " has " + petHappiness + " happiness and " + petEnergy + " energy.")