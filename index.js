const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let chara = characters.join("");
//console.log(chara);

let letter = chara.substring(0, 52);
//console.log(letter);

let letterNumber = chara.substring(0, 62);
//console.log(letterNumber);

let symbolOnly = chara.substring(62, 91);
//console.log(symbolOnly);

let letterSymbol = `${letter}${symbolOnly}`;
//console.log(letterSymbol);

const symbolToggle = document.querySelector("#sym");
const numberToggle = document.querySelector("#num");
const password = document.querySelector(".password");
let passwordOne = document.querySelector(".pass-one");
let passwordTwo = document.querySelector(".pass-two");

const button = document.querySelector(".print");
const buttonTwo = document.querySelector(".clear");

let getLength;
let generatePasss = "";
let geb = "";

password.addEventListener("input", (e) => {
  getLength = password.len.value.trim();
});

const generate = (generatePass) => {
  let passwordLength = "";

  if (getLength) {
    passwordLength = getLength - 1;
    if (symbolToggle.checked && numberToggle.checked) {
      for (let i = 0; i <= passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * chara.length);
        generatePass += chara.substring(randomPassword, randomPassword + 1);
      }
      // console.log("g");
      return generatePass;
    } else if (symbolToggle.checked && !numberToggle.checked) {
      passwordLength = getLength - 1;
      for (let i = 0; i <= passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * letterSymbol.length);
        generatePass += letterSymbol.substring(
          randomPassword,
          randomPassword + 1
        );
      }
      // console.log("g");
      return generatePass;
    } else if (numberToggle.checked && !symbolToggle.checked) {
      passwordLength = getLength - 1;
      for (let i = 0; i <= passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * letterNumber.length);
        generatePass += letterNumber.substring(
          randomPassword,
          randomPassword + 1
        );
      }
      // console.log("g");
      return generatePass;
    } else if (!numberToggle.checked && !symbolToggle.checked) {
      passwordLength = getLength - 1;
      for (let i = 0; i <= passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * letter.length);
        generatePass += letter.substring(randomPassword, randomPassword + 1);
      }
      // console.log("g");
      return generatePass;
    }
  } else if (!getLength) {
    passwordLength = 15;
    if (!numberToggle.checked && !symbolToggle.checked) {
      for (let i = 0; i <= passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * letter.length);
        generatePass += letter.substring(randomPassword, randomPassword + 1);
      }
      // console.log("g");
      return generatePass;
    } else if (symbolToggle.checked && !numberToggle.checked) {
      for (let i = 0; i <= passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * letterSymbol.length);
        generatePass += letterSymbol.substring(
          randomPassword,
          randomPassword + 1
        );
      }
      // console.log("g");
      return generatePass;
    } else if (!symbolToggle.checked && numberToggle.checked) {
      for (let i = 0; i <= passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * letterNumber.length);
        generatePass += letterNumber.substring(
          randomPassword,
          randomPassword + 1
        );
      }
      console.log("g");
      return generatePass;
    } else if (symbolToggle.checked && numberToggle.checked) {
      for (let i = 0; i <= passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * chara.length);
        generatePass += chara.substring(randomPassword, randomPassword + 1);
      }
      console.log("g");
      return generatePass;
    }
  }
  //  else if (getLength && symbolToggle.checked && !numberToggle.checked) {
  //   passwordLength = getLength - 1;
  //   for (let i = 0; i <= passwordLength; i++) {
  //     let randomPassword = Math.floor(Math.random() * letterSymbol.length);
  //     generatePass += letterSymbol.substring(randomPassword, randomPassword + 1);
  //   }
  //   console.log("g");
  //   return generatePass;
  // } else if (getLength && numberToggle.checked && !symbolToggle.checked) {
};

function displayPassword() {
  passwordOne.textContent = generate(geb);
  passwordTwo.textContent = generate(generatePasss);
  password.len.value = "";
}

function clearPassword() {
getLength=15
  passwordOne.textContent = "";
  passwordTwo.textContent = "";
  numberToggle.checked = false;
  symbolToggle.checked = false;
  

}
 let msg = document.createElement("p");
 let wrap = document.querySelector(".wrapper");
function copyText(ev) {
  // console.log("hi");
  let text = ev;
  let textArea = document.createElement("textarea");
  textArea.width = "1px";
  textArea.height = "1px";
  textArea.background = "transparents";
  textArea.value = text;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy"); //No i18n
  document.body.removeChild(textArea);
  alert("password copied")
 

  
}


function savePassword() {
  // passwordOne.textContent
  let some = passwordOne.textContent;
  
  copyText(some);
  let me = passwordTwo.textContent;
  copyText(me);
}
  
   
  // setTimeout(wrap.removeChild(msg),3000)
passwordOne.addEventListener("click", savePassword);
passwordTwo.addEventListener("click", savePassword);

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target) {
    displayPassword();
    //console.log("v");
  }
});

//console.log(buttonTwo);
buttonTwo.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target) {
    clearPassword();
    //console.log("v");
  }
});
