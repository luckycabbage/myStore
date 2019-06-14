$(document).ready(function() {
    // Cache selectors for faster performance.
    var $window = $(window),
        $mainMenuBar = $('#mainMenuBar'),
        $mainMenuBarAnchor = $('#mainMenuBarAnchor');
    //alert($mainMenuBar.height());
    // Run this on scroll events.
    //scroll()
    //当用户滚动指定的元素时，会发生scroll事件。
    //scroll事件适用于所有可滚动的元素和window对象（浏览器窗口）
    //scroll()方法触发scroll事件，或规定当发生scroll事件时运行的函数
    $window.scroll(function() {
        //scrollTop()方法返回或设置匹配元素的滚动条的垂直位置
        var window_top = $window.scrollTop();
        //javascript用offsetTop();jquery用offset().top;
        var div_top = $mainMenuBarAnchor.offset().top;
        if (window_top > div_top) {
            // Make the div sticky.
            $mainMenuBar.addClass('stick');
            $mainMenuBarAnchor.height($mainMenuBar.height());
        } else {
            // Unstick the div.
            $mainMenuBar.removeClass('stick');
            $mainMenuBarAnchor.height(0);
        }
    });
});