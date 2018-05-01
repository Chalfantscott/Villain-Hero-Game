class Person {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapon = null;
    }
    attack(person) {
        if (!person) {
            console.log("you forgot to pass in a person");
            return;
        }
        if (this.weapon == null) {
            console.log("you forgot to equip a weapon");
            return;
        }

        person.health -= this.weapon.damage;
        person.render();

    }
    equipWeapon(weapon) {
        this.weapon = weapon;
    }
    render() {
        $(this.selector).html(`
            <img width="100" src=${this.imageURL}/>
            <span>${this.health}</span>
            `)
    }

}
