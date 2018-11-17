//轮播图初始化
var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    
  })        