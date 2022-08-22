
/*
  APP・WEBタブの切り替え
*/
  $(function() {
	  //クリックしたらイベント発火
	// $('.tab-switch__item').click(function(){
	// 	// デフォルト.is-activeクラスを削除
	// 	$('.is-active').removeClass('is-active');

	// 	//クリックしたタブにis-activeのクラス付与
	// 	$(this).addClass('is-active');

	// 	// デフォルト.is-show'クラスを削除
	// 	$('.is-show').removeClass('is-show');
		
	// 	//クリックしたタブがタブの中で何番目かを判定し、indexとして定義
	// 	const index = $(this).index();
		
	// 	//.tab-area__contents-mainが付いている要素のindex番目にis-showクラスを付与
	// 	$('.tab-contents__item-area').eq(index).addClass('is-show');
	// });

/*
  バーガーメニューの開閉
*/
	$(function() {
		$('.hamburger').click(function() {
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$('.header-inner__menu').addClass('active');
			} else {
				$('.header-inner__menu').removeClass('active');
			}
		});
	});
});

/* APPタブのカルーセル SPの時だけイベントを発火させる */
function checkBreakPoint() {
	w = $(window).width();
	if (w <= 767) {
		// スマホ向け（767px以下のとき）
		$('.slider-thumbnail').not('.slick-initialized').slick({
			//スライドさせる
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: false,
			autoplaySpeed: 6000,
      infinite: false,
      centerMode: false,
		});
	} else {
		// PC向け
		$('.slider.slick-initialized').slick('unslick');
	}
}
// ウインドウがリサイズする度にチェック
$(window).resize(function(){
	checkBreakPoint();
});
// 初回チェック
checkBreakPoint();



//リサイズした時に実行
// $(window).on('resize orientationchange', function() {
//   $('.slider').slick('resize');
  
//   if ($('.hamburger').css('display') == 'block') {
//     console.log('OK')
//   } else {
//   console.log('NG')
//   }
// });

window.addEventListener("load", function() {
  /* APPタブのカルーセル SPの時だけイベントを発火させる */
  // $('.slider').slick({
  //   infinite: true,
  //   mobileFirst: true,
  //   slidesToShow: 1,
  //   centerMode: false,
  //   slidesToScroll: 1,
  //   initialSlide: 0,

  //   //768px以下の時はslickを実行しない
  //   responsive: [ {
  //     breakpoint: 768,

  //     settings: 'unslick',
  //   } ]
  // });
  
  /* 広告用のカルーセル PC/SP共通のため、↑のカルーセルと処理を分けた */
  $('.slick-add').slick({
    autoplay: false,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows:false,
    swipe: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    initialSlide: 0,
    variableWidth: true, 
    dots: true,
    // centerMode: true,
    infinite: true,
    slidesToShow: 4,
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]    
  });
});




// $('.slick-add').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// })

$('.slick-modal').slick({
  // lazyLoad: ondemand,
    // infinite: true,
    // mobileFirst: true,
    // slidesToShow: 1,
    // centerMode: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // centerPadding: "50px",
    // initialSlide: 0,  
  // dots: false,
  // infinite: true,
  // speed: 300,
  // slidesToShow: 1,
  // adaptiveHeight: true
})

// モーダル
$(function(){
  $('.is-modal-open').on('click',function(){
      $('.modal').fadeIn();
      return false;
  });
  $('.is-modal-close').on('click',function(){
      $('.modal').fadeOut();
      return false;
  });
});

