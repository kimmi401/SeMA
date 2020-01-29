
//사이드 네비게이션
$(function(){
  var $mnu = $('.gnb a'); //사이드 네비게이션


   $(window).on('load resize',function(){

    var winH = $(window).height();
    var navH = $('.dot').height();

    $('.dot').css({
      top : (winH - navH) / 2 
    });
  });

  //각 article의 top값
  var arrTopVal = []; 

  $('.cont').each(function(idx){
    arrTopVal[idx] = $(this).offset().top;
  });



  function pageAni(topVal){
    $('html,body').stop().animate({
      scrollTop : topVal
    });
    $mnu.eq(mnuIdx).parent().addClass('on').siblings().removeClass('on')
  }

  //메뉴에 대한 click 이벤트 구문
  $mnu.on('click',function(event){
    event.preventDefault();

    mnuIdx = $mnu.index(this);
    
    pageAni(arrTopVal[mnuIdx]);
  });
    

 $(window).on('scroll', function () {

    var scrollTop = $(window).scrollTop();

    for (var i = 0; i < 6; i++) {
      if (scrollTop >= arrTopVal[i]) {
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
      }
    }

  });
  
});





//메인그림 네비게이션

$(function(){
  var $mnu = $('.gnb a');
  var $mainmnu_1 = $('.ach .ach_1')
  var $mainmnu_2 = $('.ach .ach_2')
  var $mainmnu_3 = $('.ach2 .ach_3')
  var $mainmnu_4 = $('.ach2 .ach_4')
  var mnuIdx = 0; 

  $mainmnu_1.on('click',function(event){
    event.preventDefault();

    $mnu.eq(1).trigger('click');


  });
  
    $mainmnu_2.on('click',function(event){
    event.preventDefault();

    $mnu.eq(3).trigger('click');


  });
    
    $mainmnu_3.on('click',function(event){
    event.preventDefault();

    $mnu.eq(4).trigger('click');


  });
    
    $mainmnu_4.on('click',function(event){
    event.preventDefault();

    $mnu.eq(5).trigger('click');


  });
    
 
});


//슬라이드
$(function(){
  var $indicator = $("#slides>.slides-pagination>li>a");
  var $container = $("#slides>.slides-container");
  var $btnPrev = $("#slides>.slides-prev");//이전버튼
  var $btnNext = $("#slides>.slides-next");//다음버튼

  var nowIdx = 0;
    
  //인디케이터에 대한 클릭이벤트 구문

    
  $indicator.on("click", function(evt){
    evt.preventDefault();

    
    $(this).parent().addClass("on")
           .siblings().removeClass("on");

   
    nowIdx = $indicator.index(this);

    
    $container.stop().animate({
      left : -(100*nowIdx)+"%"
    });

  });



  //이전버튼 클릭이벤트 구문
  $btnPrev.on("click", function(){

    
    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx=2
    }

    
    $indicator.eq(nowIdx).parent().addClass("on")
              .siblings().removeClass("on");


    
    $container.stop().animate({
      left : -(100*nowIdx)+"%"
    });    
  });  
  
  //다음버튼 클릭이벤트 구문
  $btnNext.on("click", function(){

    
    if(nowIdx<2){
      nowIdx++;
    }else{
      nowIdx=0
    }

    
    $indicator.eq(nowIdx).parent().addClass("on")
              .siblings().removeClass("on");


    
    $container.stop().animate({
      left : -(100*nowIdx)+"%"
    });    
  });
     
});


//포토갤러리

$(function(){
  var $exMnu = $('.current_gnb>ul>li>a');
  var $subMnu = $('.current_gnb>.info');
  

  
  $exMnu.on('click',function(evt){
      
    evt.preventDefault();
    $(this).parent().find('.info').parent().siblings().find('.info').hide();
    $(this).parent().find('.info').show();
      
    $(this).addClass('on').parent().siblings().children('a').removeClass('on');
   
  });
    
    
  //썸네일 갤러리 스크린에 쏘기
    
  var $thmbs=$('.thmbs>li>a');
  $thmbs.on('click',function(evt){
  evt.preventDefault();

   $(this).addClass('on').parent().siblings().children('a').removeClass('on');  
    
      
  var src = $(this).attr('href');
  var title = $(this).attr('title');
  var $screen = $(this).parents("figure").prev('.screen');

      
      
$screen.css({
      backgroundImage:'url('+src+')' 
  
  });


  });
});


//소장품 포토갤러리
$(function(){
var $thmbs=$('#collection .thmbs>li>a');
  $thmbs.on('click',function(evt){
  evt.preventDefault();

   $(this).addClass('on').parent().siblings().children('a').removeClass('on');  
    
      
  var src = $(this).attr('href');
  var title = $(this).attr('title');
  var $screen = $(this).parents(".cl").find('.screen');

      
      
$screen.css({
      backgroundImage:'url('+src+')' 
  
  });


  });
});
