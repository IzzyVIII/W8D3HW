"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
const uuid_1 = require("uuid");
//Do we export?
class Weapon {
    constructor(name, damagePoints, description) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.damagePoints = damagePoints;
        this.description = description;
    }
}
exports.Weapon = Weapon;
class Club {
    attack() {
        console.log("Club");
    }
}
class Sword {
    attack() {
        console.log("Sword");
    }
}
class Bow {
    attack() {
        console.log("Bow & Arrow");
    }
}
class Shield {
    defend() {
        console.log("Shield");
    }
}
class Armor {
    defend() {
        console.log("Armor");
    }
}
class Tunic {
    defend() {
        console.log("Tunic");
    }
}
class Gold {
    gold() {
        console.log("Collected Gold");
    }
}
class Character {
    constructor(character_name$, goldAbility$, attackAbility$, defendAbility$) {
        this.character_name$ = character_name$;
        this.goldAbility$ = goldAbility$;
        this.attackAbility$ = attackAbility$;
        this.defendAbility$ = defendAbility$;
    }
    get krtr() { return this.character_name$; }
    set defendAbility(da) {
        this.defendAbility$ = da;
    }
    set attackAbility(aa) {
        this.attackAbility = aa;
    }
    set goldAbility(ga) {
        this.goldAbility$ = ga;
    }
    attack() {
        this.attackAbility$.attack();
    }
    defend() {
        this.defendAbility$.defend();
    }
    gold() {
        this.goldAbility$.gold();
    }
}
class Orges extends Character {
    constructor(character_name$, goldAbility$, attackAbility$, defendAbility$) {
        super(character_name$, goldAbility$, attackAbility$, defendAbility$);
    }
}
class Peons extends Character {
    constructor(character_name$, goldAbility$, attackAbility$, defendAbility$) {
        super(character_name$, goldAbility$, attackAbility$, defendAbility$);
    }
}
class Knights extends Character {
    constructor(character_name$, goldAbility$, attackAbility$, defendAbility$) {
        super(character_name$, goldAbility$, attackAbility$, defendAbility$);
    }
}
// let Knightsv = new Knights("aa",new Gold(), new Bow(), new Tunic())
class Archers extends Character {
    constructor(character_name$, goldAbility$, attackAbility$, defendAbility$) {
        super(character_name$, goldAbility$, attackAbility$, defendAbility$);
    }
}
// let arch = new Archers()
let allCharacters = [
    new Orges("Orge", new Gold(), new Bow(), new Tunic()),
    new Peons("Peon", new Gold(), new Club(), new Armor()),
    new Knights("Knight", new Gold(), new Sword(), new Shield()),
    new Archers("Archer", new Gold(), new Bow(), new Tunic())
];
for (let character of allCharacters) {
    console.log(character.krtr);
    character.attack();
    character.defend();
    character.gold();
}
