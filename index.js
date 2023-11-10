"use strict";

const translation = prompt("ranglarni ingilizcha kiriting");

switch (translation) {
  case "yellow":
    for (let i = 1; i <= 9; i++) {
      console.log(i);
    }
    alert(`${translation}: sariq`);
    break;
  case "red":
    alert(`${translation}: qizil`);
    break;
  case "white":
    alert(`${translation}: oq`);
    break;
  case "black":
    alert(`${translation}: qora`);
    break;
  case "green":
    alert(`${translation}: yashil`);
    break;
  case "blue":
    alert(`${translation}: ko'k`);
    break;
  case "pink":
    alert(`ll${translation}: pushti`);
    break;
  default:
    alert("Kechirasiz.Bunday rang mavjud emas!");
}
alert(
  "hurmatli hurmatsiz foydalanuvchi iltimos sizdan  to'g'ri raqam kiriting"
);
