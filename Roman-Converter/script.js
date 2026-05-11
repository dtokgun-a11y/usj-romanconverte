function toRoman() {
  let num = parseInt(document.getElementById("input").value);
  if (isNaN(num) || num <= 0 || num > 3999) {
    document.getElementById("result").innerText = "Enter a number between 1 and 3999";
    return;
  }

  const map = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let result = "";

  for (let i = 0; i < map.length; i++) {
    while (num >= map[i].value) {
      result += map[i].numeral;
      num -= map[i].value;
    }
  }

  document.getElementById("result").innerText = result;
}

function toInteger() {
  let str = document.getElementById("input").value.toUpperCase();

  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < str.length; i++) {
    let current = map[str[i]];
    let next = map[str[i + 1]];

    if (!current) {
      document.getElementById("result").innerText = "Invalid Roman numeral";
      return;
    }

    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  document.getElementById("result").innerText = total;
}
