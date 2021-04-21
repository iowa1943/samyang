$(document).ready(function(){


  $('.popup').show()

  if(GetCookie('sam')=='close'){
    $('.popup').hide();

}else{
    $('.popup').show();

}


  $('.pop_close').click(function(){
    if($('input[name=day_box]').is(':checked')){

    setCookie('sam','close',1) 
    $('.popup').hide()

  }else{
    $('.popup').hide();
}

  });
  
  $('.check_pop').click(function(){

    if($('input[name=day_box]').is(':checked')){

      setCookie('sam','close',1) 
    $('.popup').hide()
  }else{
    $('.popup').hide();
}
  })



    $(document).ready(function(){
        $('.slide').slick({
          autoplay: true,
          dots:true,
          fade:true,
          delay:1000,
          speed:2000
        });
      });

      $('.new_product_inner').slick({
        autoplay:true,
        dots:true,
        arrows:false
      });


    $('.gnb').mouseenter(function(){
        $('.header_wrap').animate({'height':310},0);
        $('.depth2').show(0);
        
    
});
    $('.mheader_inner').mouseleave(function(){
        $('.header_wrap').animate({'height':92},0);
        $('.depth2').hide(0);
    });

    
   
   
// 제품슬라이더
    $('.product_slider').slick({
      autoplay:false,
      slidesToShow:7,
      slidesToScroll:1,
      infinite:false,
      dots:true,
      arrows:false,
      variableWidth : true,
    })

    
    $('.list li').click(function(e){
      e.preventDefault()
      var num = $(this).index();
    console.log(num)
      $(this).addClass('on').siblings().removeClass('on');
      $('.product_slider').removeClass('on');
      $('.product_slider').eq(num).addClass('on')
      
    });
    


    $('.left2').slick({
      autoplay:true,
      arrows:false,
      infinite:true,
      dots:true
    })
    
    $('.video').click(function(){
      
      $('.cover2').fadeIn(500)
      $('.modal').fadeIn(500)
    });

    $('.btn_close').click(function(){
      $('.cover2').fadeOut(500)
      $('.modal').fadeOut(500)
    })

    // GetCookie(쿠키 변수의 값을 읽어올 때 사용)
function GetCookie(name){
  var value=null, search=name+"=";
  if(document.cookie.length > 0){
      var offset=document.cookie.indexOf(search);
      if(offset != -1){
          offset+=search.length;
          var end=document.cookie.indexOf(";", offset);
          if(end == -1) end=document.cookie.length;
          value=unescape(document.cookie.substring(offset, end));
      }
  } return value;
}
// SetCookie(쿠키 변수와 쿠키값을 저장할 때)
function setCookie(name, value, expiredays){
  var days=10;
  if(days){
      var date=new Date(); 
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires="; expires="+date.toGMTString();
  }else{
      var expires=""; 
  }
  document.cookie=name+"="+value+expires+"; path=/";
}

});