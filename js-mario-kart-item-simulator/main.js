// Mario Kart Item Simulator
'use strict';

// Global variables
let racerPos;
let numBanana = 0;
let numGreenShell = 0;
let numStar = 0;
let numGoldenMushroom = 0;
let numBulletBill = 0;

// Event Listener
document.getElementById('generate-btn').addEventListener('click', generateItem);

// Event Function
function generateItem() {
  // INPUT - prompt user to input racer position
  racerPos = Number(prompt('Indicate the racer position:'));

  // PROCESS - simulate items based on racer position
  if (racerPos >= 1 && racerPos <= 6) { // Outer chained-if without else statement
    // Generate random number
    let randNum = Math.random(); // Random number between 0-0.99...
    console.log(randNum);

    if (randNum <= 0.45) { // Nested chained-if statement; racer position 1-6; banana
      document.getElementById('item').innerHTML = 'Banana';
      numBanana++;
      document.getElementById('banana').innerHTML = numBanana;
    } else if (randNum <= 0.80) { // Green Shell
      document.getElementById('item').innerHTML = 'Green Shell';
      numGreenShell++;
      document.getElementById('green-shell').innerHTML = numGreenShell;
    } else if (randNum <= 0.95) { // Star
      document.getElementById('item').innerHTML = 'Star';
      numStar++;
      document.getElementById('star').innerHTML = numStar;
    } else if (randNum <= 0.99) { // Golden Mushroom
      document.getElementById('item').innerHTML = 'Golden Mushroom';
      numGoldenMushroom++;
      document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
    } else { // Bullet Bill
      document.getElementById('item').innerHTML = 'Bullet Bill';
      numBulletBill++;
      document.getElementById('bullet-bill').innerHTML = numBulletBill;
    }
  } else if (racerPos >= 7 && racerPos <= 12) { // Outer chained-if without else statement
      // Generate random number 
      let randNum = Math.random(); // Random number between 0-0.99...
      console.log(randNum);

      if (randNum <= 0.05) { // Nested chained-if statement; racer position 7-12; banana
        document.getElementById('item').innerHTML = 'Banana';
        numBanana++;
        document.getElementById('banana').innerHTML = numBanana;
      } else if (randNum <= 0.10) { // Green Shell
        document.getElementById('item').innerHTML = 'Green Shell';
        numGreenShell++;
        document.getElementById('green-shell').innerHTML = numGreenShell;
      } else if (randNum <= 0.35) { // Star
        document.getElementById('item').innerHTML = 'Star';
        numStar++;
        document.getElementById('star').innerHTML = numStar;
      } else if (randNum <= 0.70) { // Golden Mushroom
        document.getElementById('item').innerHTML = 'Golden Mushroom';
        numGoldenMushroom++;
        document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
      } else { // Bullet Bill
        document.getElementById('item').innerHTML = 'Bullet Bill';
        numBulletBill++;
        document.getElementById('bullet-bill').innerHTML = numBulletBill;
      }
  }
}