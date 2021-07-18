const toggle = element => {
	element.classList.toggle('toggle');
};

let card1 = document.getElementById('plansInfo1'),
	card2 = document.getElementById('plansInfo2')
	openCard1Button = document.getElementById('openCardInfo1'),
	closeCard1Button = document.getElementById('closeCardInfo1'),
	openCard2Button = document.getElementById('openCardInfo2'),
	closeCard2Button = document.getElementById('closeCardInfo2');

openCard1Button.addEventListener('click',() => {
	toggle(card1);
});
closeCard1Button.addEventListener('click',() => {
	toggle(card1);
});
openCard2Button.addEventListener('click',() => {
	toggle(card2);
});
closeCard2Button.addEventListener('click',() => {
	toggle(card2);
});
