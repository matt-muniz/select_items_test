const x = document.querySelectorAll(".select-style");
const y = document.querySelectorAll("select");
class Select {
  // Create a new element item
  constructor(_value, _element, _className) {
    this.a;
    this.b;
    this.c;
    this.i = 0;
    this.value = _value;
    this.element = _element;
    this.className = _className;
  }
  createNewElement(text) {
    this.a = document.createElement(this.element);
    this.a.setAttribute("class", this.className);
    this.a.innerHTML = text;
  }
  addElements(e) {
    for (this.i; this.i < this.value.length; this.i++) {
      this.b = e[this.i].options[0].innerHTML;
      this.createNewElement(this.b);
      this.value[this.i].appendChild(this.a);

      this.a.addEventListener("click", e => {
        e.stopPropagation();
        e.target.nextSibling.classList.toggle("select-hide");
        e.target.classList.toggle("select-arrow-active");
        this.closeAllSelect(e.target);
      });
    }
  }
  addElements2(e) {
    for (this.i; this.i < this.value.length; this.i++) {
      this.c = e[this.i].innerHTML;
      this.createNewElement(this.c);
      this.value[this.i].appendChild(this.a);

      this.a.addEventListener("click", e => {
        const s = e.target.parentNode.parentNode.querySelectorAll("select")[0];
        const h = e.target.parentNode.previousSibling;
        h.innerHTML = e.target.innerHTML;
        const y = e.target.parentNode.querySelectorAll(".same-as-selected");
        y.forEach(i => i.removeAttribute("class"));
        e.target.setAttribute("class", "same-as-selected");
        h.click();
      });
    }
  }
  closeAllSelect(element) {
    var x_,
      y_,
      i,
      arrNo = [];
    x_ = document.querySelectorAll(".select-items");
    y_ = document.querySelectorAll(".select-selected");
    for (i = 0; i < y_.length; i++) {
      if (element == y_[i]) {
        arrNo.push(i);
      } else {
        y_[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x_.length; i++) {
      if (arrNo.indexOf(i)) {
        x_[i].classList.add("select-hide");
      }
    }
  }
}

const a = new Select(x, "div", "select-selected");
a.addElements(y);
const b = new Select(x, "div", "select-items select-hide");
b.addElements2(y);
document.addEventListener("click", a.closeAllSelect);
