export default class Result {
  constructor(element) {
    this.counter = element;

    this.root = element.querySelector(`.counter__result`);
    this.caloriesNormOutput = this.root.querySelector(`#calories-norm`);
    this.caloriesMinOutput = this.root.querySelector(`#calories-minimal`);
    this.caloriesMaxOutput = this.root.querySelector(`#calories-maximal`);
  }

  show(calories) {
    this.caloriesNormOutput.textContent = Math.floor(calories.NORM + 0.5);
    this.caloriesMinOutput.textContent = Math.floor(calories.MIN + 0.5);
    this.caloriesMaxOutput.textContent = Math.floor(calories.MAX + 0.5);
    this.root.classList.remove("counter__result--hidden");
  }

  hide() {
    this.caloriesNormOutput.textContent = 0;
    this.caloriesMinOutput.textContent = 0;
    this.caloriesMaxOutput.textContent = 0;
    this.root.classList.add("counter__result--hidden");
  }
}
