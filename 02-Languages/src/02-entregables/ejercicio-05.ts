console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
  coins: number = 0;
  roulette1: boolean;
  roulette2: boolean;
  roulette3: boolean;

  play = () => {
    this.coins += 1;
    this.roulette1 = this.randomBoolean();
    this.roulette2 = this.randomBoolean();
    this.roulette3 = this.randomBoolean();
    if (this.roulette1 && this.roulette2 && this.roulette3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  };

  private randomBoolean = () => Math.random() >= 0.5;
}

const machine1 = new SlotMachine();

machine1.play();
machine1.play();
machine1.play();
machine1.play();