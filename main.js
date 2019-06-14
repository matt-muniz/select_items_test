const x = document.querySelectorAll(".select-style");
const y = document.querySelectorAll("select");
class Select {
  // Create a new element item
  constructor(_value) {
    this.a;
    this.value = _value;
  }
  createNewElement(element, className, text) {
    this.a = document.createElement(element);
    this.a.setAttribute("class", className);
    this.a.innerHTML = text;
  }
  doSomething() {
    for (let i = 0; i < this.value.length; i++) {
      this.createNewElement("div", "select-selected", y[i].innerHTML);
      this.value[i].appendChild(this.a);
    }
  }
}

const createDiv = new Select(x);
createDiv.doSomething();
