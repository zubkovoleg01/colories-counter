import Result from "./result.js";

const PhysicalActivityRatio = {
  MIN: 1.2,
  LOW: 1.375,
  MEDIUM: 1.55,
  HIGH: 1.725,
  MAX: 1.9,
};

const CaloriesFormulaFactor = {
  AGE: 5,
  WEIGHT: 10,
  HEIGHT: 6.25,
};

const CaloriesFormulaConstant = {
  MALE: -5,
  FEMALE: 161,
};

const CaloriesMinMaxRatio = {
  MIN: 0.85,
  MAX: 1.15,
};

export default class Counter {
  constructor(element) {
    this.element = element;
    this.form = element.querySelector(".form");
    this.age = element.querySelector("#age");
    this.height = element.querySelector("#height");
    this.weight = element.querySelector("#weight");
    this.btnReset = element.querySelector(".form__reset-button");
    this.btnSubmit = element.querySelector(".form__submit-button");
  }

  _onFormInput() {
    this.ageParce = parseInt(this.age.value);
    this.heightParce = parseInt(this.height.value);
    this.weightParce = parseInt(this.weight.value);
    this.btnReset.disabled = !(
      this.ageParce ||
      this.heightParce ||
      this.weightParce
    );
    this.btnSubmit.disabled = !this.form.checkValidity();
  }

  _onFormReset() {
    this.form.reset();
    this.btnSubmit.disabled = this.btnReset.disabled = true;
    if (this.showResult) this.showResult.hide();
  }

  _onFormSubmit(evt) {
    this.genderParametr = evt.get("gender").toUpperCase();
    this.activityParametr = evt.get("activity").toUpperCase();
    this.calories = {
      NORM: this.getCaloriesNorm(),
      MIN: this.getCaloriesMin(),
      MAX: this.getCaloriesMax(),
    };
    this.showResult = new Result(this.element);
    this.showResult.show(this.calories);
  }

  init() {
    this.element.addEventListener("input", (event) => {
      event.preventDefault();
      this._onFormInput();
    });
    this.btnReset.addEventListener("reset", (event) => {
      event.preventDefault();
      this._onFormReset();
    });
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.formData = new FormData(this.form);
      this._onFormSubmit(this.formData);
    });
  }

  deinit() {
    this.element.removeEventListener("input", this._onFormInput, true);
    this.element.removeEventListener("reset", this._onFormReset);
    this.element.removeEventListener("submit", this._onFormSubmit);
  }

  getCaloriesNorm() {
    return (
      (CaloriesFormulaFactor.WEIGHT * this.weightParce +
        CaloriesFormulaFactor.HEIGHT * this.heightParce -
        CaloriesFormulaFactor.AGE * this.ageParce -
        CaloriesFormulaConstant[this.genderParametr]) *
      PhysicalActivityRatio[this.activityParametr]
    );
  }

  getCaloriesMin() {
    return this.getCaloriesNorm() * CaloriesMinMaxRatio.MIN;
  }

  getCaloriesMax() {
    return this.getCaloriesNorm() * CaloriesMinMaxRatio.MAX;
  }
}
