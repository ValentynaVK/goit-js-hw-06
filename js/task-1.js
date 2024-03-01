//Написати скрипт: при натисканні на кнопку додавати в div з ідентифікатором «container»
//фрагмент розмітки:
{
  //   <div class="item">
  // <h3>Заголовок</h3>
  // <p>текст текст текст</p>
  // </div>
}

/* <button class="add-btn">add</button>
  <div class="container"></div> */
//
// const btnEl = document.querySelector(".add-btn");

// const containerEl = document.querySelector(".container");

// btnEl.addEventListener("click", () => {
//   const divEl = document.createElement("div");
//   divEl.classList.add("item");
//   const textEl = document.createElement("p");
//   textEl.textContent = "lorem ipsum";
//   const titleEl = document.createElement("h3");
//   titleEl.textContent = "This is header";
//   divEl.append(titleEl, textEl);
//   containerEl.append(divEl);
// });

// btnEl.addEventListener("click", () => {
//   const markup = ` <div class="item">
//   <h3>Заголовок</h3>
//   <p>текст текст текст</p>
//   </div>`;
//   containerEl.innerHTML = markup;
// });
/*
Натискання на кнопку "SHOW ME" має виводити значення з поля введення в alert

   <div>
        <button id="alertButton">SHOW ME</button>
        <input id="alertInput" type="text" value="Hello world!" />
   </div>
// */
// const btnEl = document.querySelector("#alertButton");

// const inputEl = document.querySelector("#alertInput");

// btnEl.addEventListener("click", () => {
//   const text = inputEl.value.trim();
//   alert(text);
// });
/*
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

   <div>
        <button id="swapButton">SWAP ME</button>
        <input id="leftSwapInput" type="text" value="???" />
        <input id="rightSwapInput" type="text" value="!!!" />
   </div>
// */
// const btnEl = document.querySelector("#swapButton");

// const inputEl = document.querySelector("#leftSwapInput");

// const inputElem = document.querySelector("#rightSwapInput");

// btnEl.addEventListener("click", () => {
//   const text1 = inputEl.value.trim();
//   console.log(text1, text2);
//   inputEl.value = inputElem.value;
//   inputElem.value = text1;
// });
/*

Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

  <div>
        <input id="passwordInput" value="pass123456"  type="password">
        <button id="passwordButton">Розкрити</button>
    </div>

*/
const btnEl = document.querySelector("#passwordButton");

const inputEl = document.querySelector("#passwordInput");

// btnEl.addEventListener("click", () => {
//   if (inputEl.type === "password") {
//     inputEl.type = "text";
//     btnEl.textContent = "Приховати";
//   } else {
//     inputEl.type = "password";
//     btnEl.textContent = "Розкрити";
//   }
// });
// btnEl.addEventListener("click", () => {
//   const toggle = inputEl.type === "password";
//   inputEl.type = toggle ? "text" : "password";
//   btnEl.textContent = toggle ? "Приховати" : "Розкрити";
// });
/*
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів.

<style>
#box {
    width: 30px;
    height: 30px;
    background: red;
}
</style>

    <div>
        <div id="box"></div>
        <button id="decrease">Зменшити</button>
        <button id="increase">Збільшити</button>
    </div>
*/
const btnInc = document.querySelector("#increase");

const btnDec = document.querySelector("#decrease");

const boxEl = document.querySelector("#box");
console.dir(boxEl);

let size = boxEl.clientWidth;

btnInc.addEventListener("click", () => {
  size += 10;
  updateSize();
});

btnDec.addEventListener("click", () => {
  size -= 10;
  updateSize();
});

function updateSize() {
  boxEl.style.width = size + "px";
  boxEl.style.height = size + "px";
}
