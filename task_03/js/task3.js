"use strict"
// Введення даних, позначення величин


// Обчислення результатів
document.write(`<div class="container" style="text-align:center">`)

for (let c1 = 1; c1 <= 9; c1++) {
   for (let c2 = 0; c2 < 9; c2++) {
      for (let c3 = 0; c3 < 9; c3++) {
         const numSum = c2 + c3
         if (c1 >= numSum) {
            document.write(`<p>${c1}${c2}${c3}</p><br>`)
         }
      }
   }
}

document.write(`</div>`)
// Виведення результатів

