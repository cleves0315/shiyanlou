$(function() {
  var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(document).scroll(function() {
    var scrTop = $(document).scrollTop();

    // console.log(scrTop)
    if (scrTop > 160) {
      $('.navbar-widescreen').show()
    } else {
      $('.navbar-widescreen').hide()
    }
  })
})