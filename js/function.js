// 기타 이미지 슬라이드
$(function () {
	const $indicator = $('.guitar-slides-pagination a');
	const $container = $('.guitar-slides-container');

	let nowIdx = 0;

	const moveFn = function () {
		console.log(`nowidx= ${nowIdx}`);

		$container.animate({ left: -100 * nowIdx + '%' }, 500);

		$indicator.eq(nowIdx).parent().addClass('on');
		$indicator.eq(nowIdx).parent().siblings().removeClass('on');
	};

	$indicator.on('click', function (evt) {
		evt.preventDefault();

		nowIdx = $indicator.index(this);

		moveFn();
	});

	$('.slides-next').on('click', function (evt) {
		evt.preventDefault();
		setTimeout(
			$('.slides-next').on('click', function (evt) {
				evt.trigger();
			}),
			3000
		);

		/*
        nowIdx 값이 0->1, 1->2, 2->0 설정되어야 한다.
    */
		if (nowIdx < $indicator.length - 1) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		moveFn();
	});

	$('.slides-prev').on('click', function (evt) {
		evt.preventDefault();

		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = $indicator.length - 1;
		}

		moveFn();
	});
});

// 영화 이미지 슬라이드
$(function () {
	const $container = $('.movie');
	const $indicator = $('.movie>div');

	let nowIdx = 0;

	const moveFn = function () {
		$container.animate({ left: -1230 * nowIdx + 'px' }, 500);
	};

	$('.next').on('click', function (evt) {
		evt.preventDefault();

		if (nowIdx < $indicator.length - 1) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		moveFn();
	});

	$('.prev').on('click', function (evt) {
		evt.preventDefault();

		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = $indicator.length - 1;
		}

		moveFn();
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
