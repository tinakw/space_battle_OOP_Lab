//Space Battle: Java Space Games
// 
class alienShip {
  constructor(name) {
    this.name = name,
    this.hull = Math.floor(Math.random() * (7 - 3) + 3),
    this.firepower = Math.floor(Math.random() * (5 - 2) + 2),
    this.accuracy = Math.floor(Math.random() * (.8 - .6) + .6)
  }

  attackHero(){
    let randomNum = Math.floor(Math.random())
     if (randomNum < this.accuracy) {
          hero.hull -= this.firepower
          window.alert(`You were hit for ${this.firepower} damage!`); 
        } else { 
          window.alert('Alien missed!') 
        }
      }
};

class heroShip {
  constructor() {
    this.name = "USS Pandora";
    this.hull = 20,
    this.firepower = 5,
    this.accuracy = .7
  }

  attackAlien(){ // attackAlien occurs whenever the player attacks the alien. -- attackHero (on the alien class) occurs whenever the alien attacks the player.
    let randomNum = Math.floor(Math.random())
    if (randomNum <= this.accuracy) { // checks if the player hits the alien
      alien.hull -= this.firepower // subtracts the player's firepower from the enemy's health if it hits
      window.alert(`You successfully attacked ${alien.name} for ${this.firepower} damage!`)
    } else {
      window.alert('You have missed!') // if it doesn't hit, do something here
    }
    // after the player attacks, we are going to run the target's (alien's) attackHero method so that it attacks back.
    }
};

const hero = new heroShip();

const gameBegin = () => {
  window.alert('Welcome to Java Space Games, Captain!');
  window.alert('Earth has been attacked by a horde of aliens! Your mission is to destroy every last alien ship.');
  window.alert('The USS Pandora has the advantage of power and strikes first.');
  window.alert('Good Luck!');
};

const stat = () => {
  window.alert(`Your Hull is ${hero.hull} and the Alien hull is  ${alien.hull}`);
};
let alienCount = 6;
let alienList = [];
for (let i = alienCount; i > 0; i --){
  alienList.push("alienShip"+i);
};

let alienName = ('Alien '+ alienList.length)
let alien = alienList.pop() 
alien = new alienShip(alienName)

const prepare = () => {
  if (alienList.length > 0){
    if (alien.hull > 0 && hero.hull > 0){
      window.alert('Ready for Battle!')
      hero.attackAlien();
      if (alien.hull > 0){
        alien.attackHero();
      }
      battle();
    } else if (alien.hull <= 0 && alienList.length > 0){
      window.alert(`${alien.name} destroyed! Next one is coming!`)
      alienName = ('Alien '+ alienList.length)
      alien = alienList.pop()
      alien = new alienShip(alienName)
      window.alert(`${alien.name} has advanced and is locked in.`)
    } else if (alienList.length >= 1 && hero.hull <= 0){
      window.alert('You have been destroyed!')
    }
  } else {
    window.alert('All aliens eliminated! YOU WIN!')
  }
};

const battle = () => {
  stat();
  prepare();
};


const attackButton = document.getElementById('attack')
attackButton.addEventListener('click', () => {battle()})

const retreatButton = document.getElementById('retreat')
retreatButton.addEventListener('click', () => {
      window.alert('You have doomed humanity by your cowardice!!');
      hero.hull=0;
      hero.firepower=0;
      hero.accuracy=0;
      stat();
})

const startButton = document.getElementById('start')
startButton.addEventListener('click', () => {gameBegin()})