
fortunes = [
	'Ты лох',
	'Поздравляю, вы не лох',
	'Мне вас жаль. Вы, неудачник!'
]

exports.IndFort = () => {
	var fort = Math.floor(Math.random() * fortunes.length);
	return fortunes[fort];
}