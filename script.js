$(function(){

    let hero = new Hero("adam");
    let villain = new Villain("joker");
    
    villain.render();
    hero.render();
    

    let herosWeapon = new Weapon("sythe");
    let villainsWeapon = new Weapon("gun");

    hero.equipWeapon(herosWeapon);
    villain.equipWeapon(villainsWeapon);

    function checkForGameOver() {
        if (villain.health < 1) {
            alert('victory');
        } else if (hero.health < 1) {
            alert('Game Over');
        }
    }

    
    $('#villainAttack').click(()=>{
        villain.attack(hero);
        checkForGameOver();
    });
    $('#heroAttack').click(()=>{
        hero.attack(villain);
        checkForGameOver();
    });
});