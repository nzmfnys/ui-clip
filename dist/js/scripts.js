
/*
  APP・WEBタブの切り替え
*/
//   $(function() {
// 	// クリックしたらイベント発火　webタブできた時に使う
// 	$('.tab-switch__item').click(function(){
// 		// デフォルト.is-activeクラスを削除
// 		$('.is-active').removeClass('is-active');

// 		//クリックしたタブにis-activeのクラス付与
// 		$(this).addClass('is-active');

// 		// デフォルト.is-show'クラスを削除
// 		$('.is-show').removeClass('is-show');
		
// 		//クリックしたタブがタブの中で何番目かを判定し、indexとして定義
// 		const index = $(this).index();
		
// 		//.tab-area__contents-mainが付いている要素のindex番目にis-showクラスを付与
// 		$('.tab-contents__item-area').eq(index).addClass('is-show');
// 	});  
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


/* APPタブのカルーセル SPの時だけイベントを発火させる */
$(function(){
  function checkBreakPoint() {
    w = $(window).width();
    if (w <= 767) {
      // スマホ向け（767px以下のとき）
      $('.slider-thumbnail').not('.slick-initialized').slick({
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
      $('.slider-thumbnail.slick-initialized').slick('unslick');
    }
  }
  // ウインドウがリサイズする度にチェックすして発火させる
  $(window).resize(function(){
    checkBreakPoint();
  });
  checkBreakPoint();
})

window.addEventListener("load", function() {
  
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

/*
  モーダル内のslick 
  デフォルトはdisplay: none のため、slickの発火を「is-modal-open」の後にする
  モーダル表示時間に合わせて発火するように小細工
*/ 
$(function(){
  var slider = $('.slick-modal').slick();
  $('.is-modal-open').click(function(){
      slider.css('opacity',0);
      slider.animate({'z-index':1},100,function(){
          slider.slick('setPosition');
          slider.animate({'opacity':1});
      });
  });
});


// モーダルウィンドウの表示、非表示
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

