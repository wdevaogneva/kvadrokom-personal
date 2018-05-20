window.addEventListener('load', function() {
	let preload = document.querySelector('#my-preloader');
			opacityValue = 1,
			opacityStep = 0.05,
			i = 1,
			repeat = setInterval(startAnimate, 70);

	function startAnimate () {
		if (i < 20) {
			opacityValue -= opacityStep;
			preload.style.opacity = opacityValue;
			i++;
		} else if (i == 20) {
			preload.style.cssText = "display: none; opacity: 1";
			clearInterval(repeat);
		} else {
			console.log('что-то пошло не так');
		}
	}
});











