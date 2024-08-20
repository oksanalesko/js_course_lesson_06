"use strict"
// Введення даних, позначення величин

const icePrice = 27
let mykolaMoney = parseInt(prompt('Миколо, скільки в тебе є грошей у гривнях?', '100'))
let iceCount = 0

// Обчислення результатів

while (mykolaMoney >= icePrice) {
   let iceBuy = confirm('Миколо, купуєш ще морозива?')
   if (iceBuy) {
      iceCount++
      mykolaMoney -= icePrice
      alert(`В тебе лишилося ${mykolaMoney} грн.`)
   } else break
}
// Виведення результатів

document.write(`<p>Ти купив ${iceCount} шт. морозива. В тебе лишилося ${mykolaMoney} грн.</p>`)
