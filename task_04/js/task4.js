"use strict"
// Введення даних, позначення величин

const seaWidth = 5
const seaHeight = 5
const shipPositionX = Math.floor(1 + Math.random() * seaWidth)
const shipPositionY = Math.floor(1 + Math.random() * seaHeight)
let shotNum = 20

// Обчислення результатів

document.write(`<div class="container" style="text-align:center">`)
document.write(`<ul class="sea">`)

for (let row = 1; row <= seaHeight; row++) {
	for (let col = 1; col <= seaWidth; col++) {
		document.write(
			`<li class="sea__item" data-x="${col}" data-y="${row}" style="grid-column: ${col}; grid-row: ${row};"></li>`
		)
	}
}

document.write(`</ul>`)
document.write(`</div>`)

let shipPosition = document.querySelector(`.sea__item[data-x="${shipPositionX}"][data-y="${shipPositionY}"]`)
shipPosition.classList.add("ship")

for (let i = 1; i <= shotNum; ) {
	const userPositionX = parseInt(prompt(`Введіть позицію пострілу по осі X (від 1 до ${seaWidth})`, "1"))
	const userPositionY = parseInt(prompt(`Введіть позицію пострілу по осі Y (від 1 до ${seaHeight})`, "1"))

	if (userPositionX < 1 || userPositionX > seaWidth || userPositionY < 1 || userPositionY > seaHeight) {
		alert(`Неправильна позиція! Спробуйте ще раз.`)
		continue
	}

	let shotPosition = document.querySelector(`.sea__item[data-x="${userPositionX}"][data-y="${userPositionY}"]`)
	shotPosition.classList.add("shot")

	if (shipPositionX === userPositionX && shipPositionY === userPositionY) {
		document.write(`<p>Корабель потоплений! Ви виграли!</p>`)
		break
	} else {
		alert(`Ви не попали у корабель, лишилося ${shotNum - i} спроб`)
   }
   i++
}
// Виведення результатів