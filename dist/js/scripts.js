
/*
  APP・WEBタブの切り替え
*/
  $(function() {
	  //クリックしたらイベント発火
	$('.tab-switch__item').click(function(){
		// デフォルト.is-activeクラスを削除
		$('.is-active').removeClass('is-active');

		//クリックしたタブにis-activeのクラス付与
		$(this).addClass('is-active');

		// デフォルト.is-show'クラスを削除
		$('.is-show').removeClass('is-show');
		
		//クリックしたタブがタブの中で何番目かを判定し、indexとして定義
		const index = $(this).index();
		
		//.tab-area__contents-mainが付いている要素のindex番目にis-showクラスを付与
		$('.tab-contents__item-area').eq(index).addClass('is-show');
	});

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

/*
  APPタブのカルーセル
  SPの時だけイベントを発火させる
*/
$(function(){
  $('.slider').slick({
    infinite: true,
    mobileFirst: true,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,

    //768px以下の時はslickを実行しない
    responsive: [ {
      breakpoint: 768,
      settings: 'unslick'
    } ]
});

/* 
  広告用のカルーセル
  PC/SP共通のため、↑のカルーセルと処理を分けた
*/
$('.slick-add').slick({
  autoplay: false,
  dots: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 3,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, //画面幅750px以下でスライド3枚表示
      }
    }
  ]  
})

$('.slick-modal').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
})

//リサイズした時に実行
$(window).on('resize orientationchange', function() {
    $('.slider').slick('resize');
    
    if ($('.hamburger').css('display') == 'block') {
      console.log('OK')
    } else {
    console.log('NG')
    }
  });
});

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