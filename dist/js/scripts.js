
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
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    //768px以下の時はslickを実行しない
    responsive: [ {
      breakpoint: 768,
      settings: 'unslick'
    } ]
});

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

