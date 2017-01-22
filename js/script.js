$(function() {
    $.pjax({
        area: '#main'
    });
    //表示アニメーションのクラスを追加
    $(document).bind('pjax:render', function() {
        $('#main').attr({
            'class': 'fadeInUp'
        });
    });
});
