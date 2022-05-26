$(function () {
   //a 태그의 디폴트 이벤트 제거
   $('a[href="#"]').on('click',function(e){
     e.preventDefault();
   });

   // 각 각의 박스 안에 움직이는 이미지
   $('.container .bg').on('mousemove', function (e) {
      let x = e.pageX; //마우스 커서의 x축
      let y = e.pageY; //마우스 커서의 y축
      console.log(x / 60);

      $('.container .bg .blueberry').css({
        left: 10 - x / 60,
        top: -20 + y / 50
      });
      
      $('.container .bg .organic').css({
        right: 80 - x / 40,
        top: 120 + y / 50
      });
   });

   //현재 시간
   setInterval(function(){
     $('.time span').eq(0).text(new Date().getHours());//시
     const now = new Date();
     const min = now.getMinutes();//분
     const sec = now.getSeconds();//초
     $('.time span').eq(1).text(min);
     $('.time span').eq(2).text(sec);
     $('body').toggleClass('bg');
  }, 1000);//1초마다 반복

  //부드러운 스크롤탑
  $('.scrollTop').on('click',function(){
    $('html, body').animate({ scrollTop:0 }, 600);
  });

    //  스타일가이드 컬러변경
  $('.sg_box').css('display', 'none');
  $('.sg_box').each(function (i) {
    const color = $(this).text();
    $(this).css({
    backgroundColor: color
    }).delay(i * 1000).fadeIn(2000);
  });

  //첫 페이지 텍스트 효과
  let n = 0;
      $('.txt').eq(n).addClass('active');

      setInterval(function () {
        $('.txt').removeClass('active');

        setTimeout(function () {
          if (n < 2) {
            n = n + 1;
          } else {
            n = 0;
          }
          $('.txt').eq(n).addClass('active');
        }, 1000);

      }, 4000);
      
});