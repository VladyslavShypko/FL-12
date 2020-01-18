const MAX = 100;
const MIN = 0;

function Fighter(array) {
    let wins = 0;
    let losses = 0;
    let name = array.name;
    let damage = array.damage;
    let agility = array.agility;
    let strength = array.strength;
    let health = array.hp;

    this.getName = () => name;
    this.getDamage = () => damage;
    this.getStrength = () => strength;
    this.getAgility = () => agility;
    this.getHealth = () => health;
    this.attack = (defender) => {
        let random = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
        if (MAX - (defender.getStrength() + defender.getAgility()) >= random) {
            defender.dealDamage(damage);
            console.log(`${name} makes ${damage} damage to ${name}`);
        } else {
            console.log(`${name} attack missed`);
        }
    }
    this.logCombatHistory = () => `Name: ${name}, Wins: ${wins}, Losses: ${losses}`;
    this.heal = (addHp) => {
        health + addHp <= MAX ? health += addHp : health = MAX;
    }
    this.dealDamage = (minHp) => {
        health - minHp >= MIN ? health -= minHp : health = MIN;
    }
    this.addWin = () => {
        wins++;
    }
    this.addLosses = () => {
        losses++;
    }
}

function battle(fighter1, fighter2) {
    if (!fighter1.getHealth()) {
        console.log(`${fighter1.getName()} is dead and can't fight.`);
    }
    if (!fighter2.getHealth()) {
        console.log(`${fighter2.getName()} is dead and can't fight.`);
    }
    while (fighter1.getHealth() && fighter2.getHealth()) {
        fighter1.attack(fighter2);
        if (!fighter2.getHealth()) {
            fighter1.addWin();
            fighter2.addLosses();
            console.log(`${fighter1.getName()} has won!`);
        } else {
            fighter2.attack(fighter1);
        }
        if (!fighter1.getHealth()) {
            fighter2.addWin();
            fighter1.addLosses();
            console.log(`${fighter2.getName()} has won!`);
        }
    }
}
const fighter1 = new Fighter({
    name: 'Maximus',
    damage: 20,
    hp: 100,
    strength: 20,
    agility: 15
});
const fighter2 = new Fighter({
    name: 'Commodus',
    damage: 25,
    hp: 90,
    strength: 25,
    agility: 20
});