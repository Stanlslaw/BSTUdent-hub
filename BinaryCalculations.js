but.onclick = function () {
  let val = document.forms[0].choise.value;
  if (val === "in") inbi();
  else if (val === "out") outbi();
  else mathacts();
};
function inbi() {
  let num = +document.forms[0].firsttext.value;
  if (!num) {
    alert("Введите число в десятичной системе");
    return;
  }
  if (document.forms[0].secondtext.value)
    alert(
      "Напечатанное во второй строке не учитывается посколку не требуется условием задачи"
    );
  if (num != Math.round(num)) {
    alert("Извините, но мы не работаем с дробными числами");
    return;
  }
  if (num < 0) {
    num = num * -1;
    num = "1." + (num >>> 0).toString(2);
    alert(num);
  } else {
    num = "0." + (num >>> 0).toString(2);
    alert(num);
  }
}
function outbi() {
  let num = +document.forms[0].firsttext.value;
  if (!num) {
    alert("Введите число в двоичной системе");
    return;
  }
  if (document.forms[0].secondtext.value)
    alert(
      "Напечатанное во второй строке не учитывается посколку не требуется условием задачи"
    );
  for (let i = 0; i < num.toString().length; i++)
    if (
      Math.round(num / Math.pow(10, i)) % 10 != 0 &&
      Math.round(num / Math.pow(10, i)) % 10 != 1
    ) {
      alert("Введите двоичное, а не десятичное число");
      return;
    }
  num = parseInt(num, 2).toString(10);
  alert(num);
}
function mathacts() {
  let num1 = +document.forms[0].firsttext.value;
  let num2 = +document.forms[0].secondtext.value;
  if (!num1) {
    alert("Введите число в двоичной системе в первую строку");
    return;
  }
  if (!num2) {
    alert("Введите число в двоичной системе во вторую строку");
    return;
  }
  let max = 0;
  if (num1.toString().length > num2.toString().length)
    max = num1.toString().length;
  else max = num2.toString().length;
  for (let i = 0; i < max; i++)
    if (
      (Math.round(num1 / Math.pow(10, i)) % 10 != 0 &&
        Math.round(num1 / Math.pow(10, i)) % 10 != 1) ||
      (Math.round(num2 / Math.pow(10, i)) % 10 != 0 &&
        Math.round(num2 / Math.pow(10, i)) % 10 != 1)
    ) {
      alert("Введите двоичные, а не десятичные числа");
      return;
    }
  let val = document.forms[0].choise.value;
  let num = 0;
  switch (val) {
    case "plus":
      num = (
        (+parseInt(num1, 2).toString(10) + +parseInt(num2, 2).toString(10)) >>>
        0
      ).toString(2);
      break;
    case "minus":
      if (
        +parseInt(num1, 2).toString(10) - +parseInt(num2, 2).toString(10) <
        0
      ) {
        num =
          "1." +
          (
            (+parseInt(num2, 2).toString(10) -
              +parseInt(num1, 2).toString(10)) >>>
            0
          ).toString(2);
      } else {
        num =
          "0." +
          (
            (+parseInt(num1, 2).toString(10) -
              +parseInt(num2, 2).toString(10)) >>>
            0
          ).toString(2);
      }
      break;
    case "multiply":
      num = (
        (+parseInt(num1, 2).toString(10) * +parseInt(num2, 2).toString(10)) >>>
        0
      ).toString(2);
      break;
    case "division":
      num =
        "0." +
        (
          (+parseInt(num1, 2).toString(10) /
            +parseInt(num2, 2).toString(10)) >>>
          0
        ).toString(2);
      break;
  }
  alert(num);
}
