
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
	//
	// $('.test1').pagination({
	// 	itemElement : '> .tab-contents__item-inner', // アイテムの要素
	// 	displayItemCount: '5' //表示する数
	// });
});
