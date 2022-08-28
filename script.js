//Space Battle
// 

class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name,
    this.hull = hull || (Math.floor(Math.random() * 3) + 3,
    this.firepower = firepower || (Math.random() * 2) + 2,
    this.accuracy = accuracy || Math.random() * .2) + .6

    // if (Math.random() < alien[0].accuracy) {
    //   console.log('You have been hit!');
    // }  
  }
}

class heroShip extends Ship {
  constructor(name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy);
    // add additional properties for the "Main Ship"
    this.name = "USS Pandora";
    this.hull = 20,
    this.firepower = 5,
    this.accuracy = .7
  }
}
attackAlien(target){
attackAlien(target){ // attackAlien occurs whenever the player attacks the alien. -- attackMain (on the alien class) occurs whenever the alien attacks the player.
    let randomNum = Math.random()
    if (randomNum <= this.accuracy) {
        console.log("Attack")
    if (randomNum <= this.accuracy) { // checks if the player hits the alien
      target.hull -= this.firepower // subtracts the player's firepower from the enemy's health if it hits
        window.alert(`Attacked ${target.name} for ${this.firepower} damage!`)
    }
    else {
        (console.log('You have missed!'))
        (window.alert('You have missed!')) // if it doesn't hit, do something here
    }
    // after the player attacks, we are going to run the target's (alien's) attackMain method so that it attacks back.
    target.attackHero(this)
}
}

attackHero(target) {
  let randomNum = Math.random()
   if (randomNum < this.accuracy) {
       console.log('You hit the target!');
      target.hull -= this.firepower
      window.alert(`Attacked ${target.name} for ${this.firepower} damage!`); // target is the actual target of the attack. any changes made on target.whatever are going to affect the actual thing given to it.
       // (to reduce alien's health, think about target.hull)
   }
   else { console.log('You have missed!') }
   else { window.alert('You have missed!') }
  }
}

const USSPandora = new HeroShip 
  const alienShip1 = new AlienShip ("Alien Ship 1")
  const alienShip2 = new AlienShip ("Alien Ship 2")
  const alienShip3 = new AlienShip ("Alien Ship 3")
  const alienShip4 = new AlienShip ("Alien Ship 4")
  const alienShip5 = new AlienShip ("Alien Ship 5")
  const alienShip6 = new AlienShip ("Alien Ship 6")


const allAlien = [alienShip1,alienShip2, alienShip3, alienShip4, alienShip5, alienShip6]
console.log(allAlien)

USSPandora.attackAlien(alienShip2);

const attackButton = document.getElementById('attack')
attackButton.addEventListener('click', () => {
  // check if any enemy is left (if statement -- not a loop)
      // if so, attack the first one in the array
      // else, end the game with disabling button and popping up YOU WIN! alert.
      USSPandora.attackAlien(alienShip4)
})

// BEFORE you do the attack button stuff, we need to make it so that when an enemy's hitpoint (hull) is reduced to 0, they die.
    // The way I would do this is inside of the attackAlien method, at the very end, (before the alien attacks though) you need to check target's hull. If it is 0 or lower (becuase you can deal more damage than it has health sometimes) then get rid of it out of the array. (allAlien).
    // you can do this with shift().

    // ----------------------

    USSPandora.attackAlien(alienShip4) 
    // after you get that functioning, you're going to need to work on your attack button.
    // The attack button should get the first item in the allAlien array, and pass that to your USSAssembly.attackAlien() method.
    // right before this though, you need to make sure there are aliens left to attack!
    // if there is no aliens left. You can add a css property to your button with {disabled: true}. this makes it impossible to click the button.
    // you also might want to pop up an alert saying they are all dead.