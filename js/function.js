// 기타 이미지 슬라이드
$(function () {
	const $indicator = $('.guitar-slides-pagination>li>a');
	const $container = $('.guitar-slides-container');

	let aniChk = false;
	let nowIdx = 0;

	const moveFn = function () {
		$container.animate({ left: -100 * nowIdx + '%' }, 500);

		$indicator.eq(nowIdx).parent().addClass('on');
		$indicator.eq(nowIdx).parent().siblings().removeClass('on');
	};

	$indicator.on('click', function (evt) {
		evt.preventDefault();

		nowIdx = $indicator.index(this);

		moveFn();
	});

	$indicator.on('click', function (evt) {
		evt.preventDefault();

		nowIdx = $indicator.index(this);
		$container.stop().animate({
			left: -100 * nowIdx + '%',
		});

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
	});

	$('.slides-next').on('click', function (evt) {
		evt.preventDefault();

		if (!aniChk) {
			aniChk = !aniChk;

			if (nowIdx < $indicator.length - 1) {
				nowIdx++;
			} else {
				nowIdx = 0;
			}

			$container.stop().animate({ left: '-100%' }, 400, function () {
				const $slides = $('.guitar-slides-container>li');
				$slides.first().appendTo($container);
				$container.css({ left: 0 });
				aniChk = !aniChk;
			});

			$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		}
	});

	$('.slides-prev').on('click', function (evt) {
		evt.preventDefault();

		if (!aniChk) {
			aniChk = !aniChk;

			if (nowIdx > 0) {
				nowIdx--;
			} else {
				nowIdx = 5;
			}

			const $slides = $('.guitar-slides-container>li');
			$slides.last().prependTo($container);
			$container.css({ left: '-100%' });

			$container.stop().animate({ left: 0 }, 400, function () {
				aniChk = !aniChk;
			});

			$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		}
	});

	setInterval(function () {
		$('.slides-next').trigger('click', function (evt) {
			evt.preventDefault();

			if (nowIdx < $indicator.length - 1) {
				nowIdx++;
			} else {
				nowIdx = 0;
			}

			moveFn();
		});
	}, 4000);
});

// 영화 이미지 슬라이드
$(function () {
	const $container = $('.movieandpeople-slides>.slides-container');
	const $indicator = $('.movieandpeople-slides>.slides-pagination>li>a');
	let nowIdx = 0;

	let aniChk2 = false;

	const $btnPrev = $('.movieandpeople-slides>.prev');
	const $btnNext = $('.movieandpeople-slides>.next');

	$indicator.on('click', function (evt) {
		evt.preventDefault();

		nowIdx = $indicator.index(this);
		$container.stop().animate({
			left: -100 * nowIdx + '%',
		});

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
	});

	$btnNext.on('click', function (evt) {
		evt.preventDefault();

		if (!aniChk2) {
			aniChk2 = !aniChk2;

			if (nowIdx < $indicator.length - 1) {
				nowIdx++;
			} else {
				nowIdx = 0;
			}

			$container.stop().animate({ left: '-98%' }, 400, function () {
				const $slides = $('.movieandpeople-slides>.slides-container>li');
				$slides.first().appendTo($container);
				$container.css({ left: 0 });
				aniChk2 = !aniChk2;
			});

			$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		}
	});

	$btnPrev.on('click', function (evt) {
		evt.preventDefault();

		if (!aniChk2) {
			aniChk2 = !aniChk2;

			if (nowIdx > 0) {
				nowIdx--;
			} else {
				nowIdx = 3;
			}

			const $slides = $('.movieandpeople-slides>.slides-container>li');
			$slides.last().prependTo($container);
			$container.css({ left: '-90%' });

			$container.stop().animate({ left: '0%' }, 400, function () {
				aniChk2 = !aniChk2;
			});

			$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		}
	});
});

//top버튼
$(function () {
	const $topBtn = $('.top');
	const $topLogo = $('main-logo>a');

	$topBtn.on('click', function () {
		$('html, body').stop().animate({ scrollTop: 0 });
	});

	$topLogo.on('click', function (evt) {
		evt.preventDefault();

		$('html, body').stop().animate({ scrollTop: 0 });
	});
});
