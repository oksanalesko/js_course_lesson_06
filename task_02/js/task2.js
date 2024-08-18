"use strict"
// Крок 0. Введення даних, позначення величин

let investment = parseFloat(prompt('Введіть розмір вкладу, тис. грн.', '10'))
const years = 20
const annum = 0.20
const taxRate = 0.05

// Крок 1. Обчислення результатів

// крок 2. Виведення результатів

document.write(`<div class="container" style="text-align:center">`)

for (let year = 0; year < years; year++) {
   let profit = investment * annum
   let tax = profit * taxRate
   investment += profit - tax
}
document.write(`<p>Через ${years} років інвестор отримає ${investment.toFixed(3)} тис. грн.</p>`)
document.write(`</div>`)
