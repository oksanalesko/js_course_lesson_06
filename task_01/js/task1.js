"use strict"
// Крок 0. Введення даних, позначення величин

const triangleHeight = parseFloat(prompt('Введіть висоту трикутника', '10'))
const symbol = "O"

// Крок 1. Обчислення результатів

// крок 2. Виведення результатів

document.write(`<div class="container" style="text-align:center">`)

for (let step = 1; step <= triangleHeight; step++) {
   for (let floor = 0; floor < step; floor++) {
      document.write(`<span>${symbol}</span>`)
   }
   document.write(`<br>`)
}
document.write(`</div>`)