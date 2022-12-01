const textarea = document.getElementById("text"),
  words = document.getElementById("words"),
  letters = document.getElementById("letters"),
  sentences = document.getElementById("sentences"),
  changeBtn = document.getElementById("change");

class Counter {
  constructor(textarea) {
    this.count = 0;
    this.textarea = textarea;
  }
  getWordsCount() {
    let arr = this.textarea.value.split(" ");
    let res = arr.filter((elem) => {
      return elem !== "" && elem !== ".";
    });

    this.count = res.length;
    return this.count;
  }
  getLettersCount() {
    let arr = this.textarea.value.split("");

    let res = arr.filter((elem) => {
      return elem !== " " && elem !== ".";
    });
    this.count = res.length;
    return this.count;
  }
  getSentencesCount() {
    let arr = this.textarea.value.split(".");
    let res = arr.filter((elem) => {
      return elem !== "" && elem !== ".";
    });
    this.count = res.length;
    return this.count;
  }
}

textarea.addEventListener("keyup", () => {
  const counter = new Counter(textarea);
  words.innerHTML = counter.getWordsCount();
  letters.innerHTML = counter.getLettersCount();
  sentences.innerHTML = counter.getSentencesCount();
});

changeBtn.addEventListener("click", () => {
  const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  document.body.style.background = randomColor;
});
