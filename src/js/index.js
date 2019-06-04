require('../index.html')
require('../app.scss')
require('../app.css')
import Swiper from 'swiper'

window.onload = function () {

    window.addEventListener('resize',resize,false);
    function resize() {
        var width = document.querySelector("#container").clientWidth;
        document.documentElement.style.fontSize = width / 10 + 'px';
    }
    resize();
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
}

