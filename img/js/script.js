var swiper = null;

function swiper_m() {
    swiper = null;
    swiper = new Swiper(".mySwiper", {
        loop: true,
        speed: 1500,
    pagination: {
        el: '.swiper-pagination',
        type: "progressbar", 
    },
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false

        delay : 5000,   // 시간 설정
      
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
      
      }

    });
}

function swiper_pc(){
    swiper = null;
    swiper = new Swiper(".mySwiper", {
        loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },

    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false

        delay : 5000,   // 시간 설정
      
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
      
      },

    });

}


var swiper_div_add = function(){
    $('#swiper_div').empty();
    var tmp_str = "<div class='swiper-wrapper'>"+
        "<div class='swiper-slide'>"+
            "<img src='./img/001.jpg'>"+
        "</div>"+
        "<div class='swiper-slide'>"+
            "<img src='./img/002.jpg'>"+
        "</div>"+
        "<div class='swiper-slide'>"+
            "<img src='./img/003.jpg'>"+
        "</div>"+
        "<div class='swiper-slide'>"+
            "<img src='./img/004.jpg'>"+
        "</div>"+
      
        "</div>"+
        "</div>"+
        "<div class='swiper-pagination'></div>";
    $('#swiper_div').append(tmp_str);
}

//swiper_div_add();
    
            if($(window).width() <= 768)
            {
                swiper_div_add();
                swiper_m();
                
            }
            else
            {
                swiper_div_add();
                swiper_pc();
             
            }

            
            
            window.onresize=function(){                
                if($(window).width() <= 768)
                {
                    swiper_div_add();
                    swiper_m();
        
                }
                else
                {
                    swiper_div_add();
                    swiper_pc();
                }

                // 리사이즈시 한번더 적용해보자
                Portfolio_Swiper();
                
            }
            


            //console.log($('swiper_div'));

        // $(function(){
        //     var   $firstMenu = $('.header_wrapper'),
        //             $header = $ ('.header_wrapper')
        //             $ 
        //             $firstMenu.mouseenter(function(){
        //                 $header.animate({height:'500px'}, 300);
        //             })
        //             .mouseleave(function(){
        //                 $header.stop().animate({height:'50px'}, 300);
              
        //             })
      
        //     });
            $(".header_wrapper").hover(function(){
                 $(this).stop().animate({height:"400px"}, 300); }, 
            function(){ 
                $(this).stop().animate({height:"50px"}, 100); });


    //         $(document).ready(function(){
	// 	$(".sub_nav").hide();
	// 	$(".main_nav > ul").click(function(){
	// 		$(".sub_nav",this).slideToggle("fast");
	// 	});
	// });

    

    // 토글메뉴 
    $(function(){
        //토글 메뉴 플러그인 실행
        var toggle=$('.menu-trigger');
        var menu=$('#nav_wrapper');
        // var nav1=$('#nav');

        $(toggle).on('click',function(e){
            //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
            e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
            menu.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용
            // nav1.slideToggle();
            // $('#sub_menu1','#sub_menu2','#sub_menu3','#sub_menu4','#sub_menu5','#sub_menu6','#sub_menu7').css('display','none');
            // $('#sub_menu1,#sub_menu2,#sub_menu3,#sub_menu4,#sub_menu5,#sub_menu6, #sub_menu7').slideUp();
            // if($(window).width() >= 1200)
            // {
            //     menu.css('display','none')
                
            // }
        });

     

        
        //토글 메뉴 플러그인 실행
        var toggle1=$('.sub_li1');
        var toggle2=$('.sub_li2');
        var toggle3=$('.sub_li3');
        var toggle4=$('.sub_li4');
        var toggle5=$('.sub_li5');
        var toggle6=$('.sub_li6');
        var toggle7=$('.sub_li7');

        var menu1=$('#sub_menu1');
        var menu2=$('#sub_menu2');
        var menu3=$('#sub_menu3');
        var menu4=$('#sub_menu4');
        var menu5=$('#sub_menu5');
        var menu6=$('#sub_menu6');
        var menu7=$('#sub_menu7');


        $(function Allmaneup(){
            if(menu1.css('display') == 'block')
            menu1.slideToggle();
            if(menu2.css('display') == 'block')
                    menu2.slideToggle();
                if(menu3.css('display') == 'block')
                    menu3.slideToggle();
                if(menu4.css('display') == 'block')
                    menu4.slideToggle();
                if(menu5.css('display') == 'block')
                    menu5.slideToggle();
                if(menu6.css('display') == 'block')
                    menu6.slideToggle();
                if(menu7.css('display') == 'block')
                    menu7.slideToggle();
        });


        $(toggle1).on('click',function(e){
                //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
               
                $('.sub_li1 a').css('color','white');
                $('.sub_li1 ').css('background-color','#2F4E8B');
                /*
                console.log("~1~"+menu1.css('display'));
                console.log("~2~"+menu2.css('display'));
                console.log("~3~"+menu3.css('display'));
                console.log("~4~"+menu4.css('display'));
                console.log("~5~"+menu5.css('display'));
                console.log("~6~"+menu6.css('display'));
                console.log("~7~"+menu7.css('display'));
                */
                $('.sub_li2 a').css('color','black');
                $('.sub_li2 ').css('background-color','#f1f1f1');
                $('.sub_li3 a').css('color','black');
                $('.sub_li3 ').css('background-color','#f1f1f1');
                $('.sub_li4 a').css('color','black');
                $('.sub_li4 ').css('background-color','#f1f1f1');
                $('.sub_li5 a').css('color','black');
                $('.sub_li5 ').css('background-color','#f1f1f1');
                $('.sub_li6 a').css('color','black');
                $('.sub_li6 ').css('background-color','#f1f1f1');
                $('.sub_li7 a').css('color','black');
                $('.sub_li7 ').css('background-color','#f1f1f1');

      
                
                if(menu2.css('display') == 'block')
                    menu2.slideToggle();
                if(menu3.css('display') == 'block')
                    menu3.slideToggle();
                if(menu4.css('display') == 'block')
                    menu4.slideToggle();
                if(menu5.css('display') == 'block')
                    menu5.slideToggle();
                if(menu6.css('display') == 'block')
                    menu6.slideToggle();
                if(menu7.css('display') == 'block')
                    menu7.slideToggle();
                

                
                e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
                menu1.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용
            });
        $(toggle2).on('click',function(e){
                //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
                e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
                menu2.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용
                $('.sub_li2 a').css('color','white');
                $('.sub_li2 ').css('background-color','#2F4E8B');

                if(menu1.css('display') == 'block')
                menu1.slideToggle();
            if(menu3.css('display') == 'block')
                menu3.slideToggle();
            if(menu4.css('display') == 'block')
                menu4.slideToggle();
            if(menu5.css('display') == 'block')
                menu5.slideToggle();
            if(menu6.css('display') == 'block')
                menu6.slideToggle();
            if(menu7.css('display') == 'block')
                menu7.slideToggle();

                $('.sub_li1 a').css('color','black');
                $('.sub_li1 ').css('background-color','#f1f1f1');
                $('.sub_li3 a').css('color','black');
                $('.sub_li3 ').css('background-color','#f1f1f1');
                $('.sub_li4 a').css('color','black');
                $('.sub_li4 ').css('background-color','#f1f1f1');
                $('.sub_li5 a').css('color','black');
                $('.sub_li5 ').css('background-color','#f1f1f1');
                $('.sub_li6 a').css('color','black');
                $('.sub_li6 ').css('background-color','#f1f1f1');
                $('.sub_li7 a').css('color','black');
                $('.sub_li7 ').css('background-color','#f1f1f1');
                
            });
        $(toggle3).on('click',function(e){
                //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
                e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
                menu3.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용

                if(menu1.css('display') == 'block')
                menu1.slideToggle();
            if(menu2.css('display') == 'block')
                menu2.slideToggle();
            if(menu4.css('display') == 'block')
                menu4.slideToggle();
            if(menu5.css('display') == 'block')
                menu5.slideToggle();
            if(menu6.css('display') == 'block')
                menu6.slideToggle();
            if(menu7.css('display') == 'block')
                menu7.slideToggle();

                $('.sub_li3 a').css('color','white');
                $('.sub_li3 ').css('background-color','#2F4E8B');

                $('.sub_li1 a').css('color','black');
                $('.sub_li1 ').css('background-color','#f1f1f1');
                $('.sub_li2 a').css('color','black');
                $('.sub_li2 ').css('background-color','#f1f1f1');
                $('.sub_li4 a').css('color','black');
                $('.sub_li4 ').css('background-color','#f1f1f1');
                $('.sub_li5 a').css('color','black');
                $('.sub_li5 ').css('background-color','#f1f1f1');
                $('.sub_li6 a').css('color','black');
                $('.sub_li6 ').css('background-color','#f1f1f1');
                $('.sub_li7 a').css('color','black');
                $('.sub_li7 ').css('background-color','#f1f1f1');

            });
        $(toggle4).on('click',function(e){
                //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
                e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
                menu4.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용

                if(menu1.css('display') == 'block')
                menu1.slideToggle();
            if(menu2.css('display') == 'block')
                menu2.slideToggle();
            if(menu3.css('display') == 'block')
                menu3.slideToggle();
            if(menu5.css('display') == 'block')
                menu5.slideToggle();
            if(menu6.css('display') == 'block')
                menu6.slideToggle();
            if(menu7.css('display') == 'block')
            menu7.slideToggle();
            
                        $('.sub_li4 a').css('color','white');
                        $('.sub_li4 ').css('background-color','#2F4E8B');
            
                        $('.sub_li1 a').css('color','black');
                        $('.sub_li1 ').css('background-color','#f1f1f1');
                        $('.sub_li2 a').css('color','black');
                        $('.sub_li2 ').css('background-color','#f1f1f1');
                        $('.sub_li3 a').css('color','black');
                        $('.sub_li3 ').css('background-color','#f1f1f1');
                        $('.sub_li5 a').css('color','black');
                        $('.sub_li5 ').css('background-color','#f1f1f1');
                        $('.sub_li6 a').css('color','black');
                        $('.sub_li6 ').css('background-color','#f1f1f1');
                        $('.sub_li7 a').css('color','black');
                        $('.sub_li7 ').css('background-color','#f1f1f1');

            });                



        $(toggle5).on('click',function(e){
                //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
                e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
                menu5.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용

                if(menu1.css('display') == 'block')
                menu1.slideToggle();
            if(menu2.css('display') == 'block')
                menu2.slideToggle();
            if(menu3.css('display') == 'block')
                menu3.slideToggle();
            if(menu4.css('display') == 'block')
                menu4.slideToggle();
            if(menu6.css('display') == 'block')
                menu6.slideToggle();
            if(menu7.css('display') == 'block')
            menu7.slideToggle();
            
                        $('.sub_li5 a').css('color','white');
                        $('.sub_li5 ').css('background-color','#2F4E8B');
            
                        $('.sub_li1 a').css('color','black');
                        $('.sub_li1 ').css('background-color','#f1f1f1');
                        $('.sub_li2 a').css('color','black');
                        $('.sub_li2 ').css('background-color','#f1f1f1');
                        $('.sub_li3 a').css('color','black');
                        $('.sub_li3 ').css('background-color','#f1f1f1');
                        $('.sub_li4 a').css('color','black');
                        $('.sub_li4 ').css('background-color','#f1f1f1');
                        $('.sub_li6 a').css('color','black');
                        $('.sub_li6 ').css('background-color','#f1f1f1');
                        $('.sub_li7 a').css('color','black');
                        $('.sub_li7 ').css('background-color','#f1f1f1');
            });


        $(toggle6).on('click',function(e){
                //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
                e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
                menu6.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용

                if(menu1.css('display') == 'block')
                menu1.slideToggle();
            if(menu2.css('display') == 'block')
                menu2.slideToggle();
            if(menu3.css('display') == 'block')
                menu3.slideToggle();
            if(menu4.css('display') == 'block')
                menu4.slideToggle();
            if(menu5.css('display') == 'block')
                menu5.slideToggle();
            if(menu7.css('display') == 'block')
                menu7.slideToggle();

                $('.sub_li6 a').css('color','white');
                $('.sub_li6 ').css('background-color','#2F4E8B');
    
                $('.sub_li1 a').css('color','black');
                $('.sub_li1 ').css('background-color','#f1f1f1');
                $('.sub_li2 a').css('color','black');
                $('.sub_li2 ').css('background-color','#f1f1f1');
                $('.sub_li3 a').css('color','black');
                $('.sub_li3 ').css('background-color','#f1f1f1');
                $('.sub_li4 a').css('color','black');
                $('.sub_li4 ').css('background-color','#f1f1f1');
                $('.sub_li5 a').css('color','black');
                $('.sub_li5 ').css('background-color','#f1f1f1');
                $('.sub_li7 a').css('color','black');
                $('.sub_li7 ').css('background-color','#f1f1f1');
            });


        $(toggle7).on('click',function(e){
                //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
                e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
                menu7.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용


                if(menu1.css('display') == 'block')
                menu1.slideToggle();
            if(menu2.css('display') == 'block')
                menu2.slideToggle();
            if(menu3.css('display') == 'block')
                menu3.slideToggle();
            if(menu4.css('display') == 'block')
                menu4.slideToggle();
            if(menu5.css('display') == 'block')
                menu5.slideToggle();
            if(menu6.css('display') == 'block')
                menu6.slideToggle();
                
                
                            $('.sub_li7 a').css('color','white');
                            $('.sub_li7 ').css('background-color','#2F4E8B');
                
                            $('.sub_li1 a').css('color','black');
                            $('.sub_li1 ').css('background-color','#f1f1f1');
                            $('.sub_li2 a').css('color','black');
                            $('.sub_li2 ').css('background-color','#f1f1f1');
                            $('.sub_li3 a').css('color','black');
                            $('.sub_li3 ').css('background-color','#f1f1f1');
                            $('.sub_li4 a').css('color','black');
                            $('.sub_li4 ').css('background-color','#f1f1f1');
                            $('.sub_li5 a').css('color','black');
                            $('.sub_li5 ').css('background-color','#f1f1f1');
                            $('.sub_li6 a').css('color','black');
                            $('.sub_li6 ').css('background-color','#f1f1f1');
            });


            
/*
        //토글 메뉴 플러그인 실행
        var toggle=$('.sub_li2');
        var menu=$('#sub_menu2');
        $(toggle).on('click',function(e){
            //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
            e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
            menu.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용
        });
        //토글 메뉴 플러그인 실행
        var toggle=$('.sub_li3');
        var menu=$('#sub_menu3');
        $(toggle).on('click',function(e){
            //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
            e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
            menu.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용
        });
        //토글 메뉴 플러그인 실행
        var toggle=$('.sub_li4');
        var menu=$('#sub_menu4');
        $(toggle).on('click',function(e){
            //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
            e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
            menu.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용
        });
        //토글 메뉴 플러그인 실행
        var toggle=$('.sub_li5');
        var menu=$('#sub_menu5');
        $(toggle).on('click',function(e){
            //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
            e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
            menu.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용
        });
        //토글 메뉴 플러그인 실행
        var toggle=$('.sub_li6');
        var menu=$('#sub_menu6');
        $(toggle).on('click',function(e){
            //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
            e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
            menu.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용
        });
        //토글 메뉴 플러그인 실행
        var toggle=$('.sub_li7');
        var menu=$('#sub_menu7');
        $(toggle).on('click',function(e){
            //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
            e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
            menu.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용
        });
        */


    });

    $('.js-tp-slider-filter').slick({
        // infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        // variableWidth: true,
        // centerMode:true,
        autoplay:true,
        autoplaySpeed : 4500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              
              infinite: true,
              dots: true
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    
    
      $('.js-tp-voucher-filter').on('change', function(){
        var val = $(this).val();
      
        console.log(val);
        $('.js-tp-slider-filter').slick('slickUnfilter');
        if (val === '__') {
          carousel.slick('slickGoTo', 0, true);
           return;
        } else {
          $('.js-tp-slider-filter').slick('slickFilter',function( index ) {
            var indexval = $(this).data('filter').indexOf(val)
              , filter = (indexval >= 0) ? 1 : 0;
              console.log(index, val, indexval, filter);
            return filter;
          });
        //   $('.js-tp-slider-filter').slick('slickUnfilter');
        }
      });


      ///취업후기 캐러셀//
      var swiper = new Swiper(".asd", {
        slidesPerView: 4,

        // 방향 설정
        direction: "vertical",
        // pagination: {
        // el: ".swiper-pagination",
        // clickable: true
        // },
        
        loop:true,
        loopAdditionalSlides:1, 
        
        // 브라우저 크기에 따른 갯수 조작
        breakpoints: {
    
        768: {
            slidesPerView: 5,
            // spaceBetween: 48, /*피시버전*/ 
            spaceBetween: 10  /*피시버전*/ 
        },
       
        },
        // 오토 플레이
        autoplay: {
        // delay: 2000,
        disableOnInteraction: false,
    },
  
    });



    

/*포트폴리오 캐러셀 */ 

    var swiper = new Swiper(".Portfolio_cs", {
        effect: "coverflow",
        grabCursor: true,
        centewhiteSlides: true,
        loop: true, // 무한루프
        slidesPerView: 1,
        spaceBetween: 10,
        // slidesPerView: "auto",
        coverflowEffect: {
        rotate: 10, // 이전 다음 사진  회전률
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
        speed: 300,
        },
     
        pagination: {
        // el: ".swiper-pagination", // 버튼 on/off
        // clickable: true, // 슬라이드 갯수를 표시하는 곳을 클릭하면 이동
        },
        // autoplay: {
        // delay: 2000,
        // disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            breakpoints: { // 반응형 
          // 640: {
          //   slidesPerView: 2,
          //   spaceBetween: 20,
          // },
        768: {
        slidesPerView: 3,
        spaceBetween: 10,
        },

        }
    });

    // 선택한 slide로 이동
        document
        .querySelector('#tab01')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(3, 0);
        });
        document
        .querySelector('#tab02')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(5, 0);
        });
        document
        .querySelector('#tab03')
        .addEventListener('click', function (e) {
        // e.preventDefault();
        swiper.slideTo(6, 0);
    });
    document
    .querySelector('#tab04')
    .addEventListener('click', function (e) {
    // e.preventDefault();
    swiper.slideTo(10, 0);
    });
    document
    .querySelector('#tab05')
    .addEventListener('click', function (e) {
    // e.preventDefault();
    swiper.slideTo(15, 0);
    });
    document
    .querySelector('#tab06')
    .addEventListener('click', function (e) {
    // e.preventDefault();
    swiper.slideTo(20, 0);
});
    
    // toggle select box 
    // const selectBoxElements = document.querySelectorAll(".select");
    
    // function toggleSelectBox(selectBox) {
    // selectBox.classList.toggle("active");
    // }
    
    // function selectOption(optionElement) {
    // const selectBox = optionElement.closest(".select");
    // const selectedElement = selectBox.querySelector(".selected-value");
    // selectedElement.textContent = optionElement.textContent;
    // }
    
    // selectBoxElements.forEach(selectBoxElement => {
    //     selectBoxElement.addEventListener("click", function (e) {
    //     const targetElement = e.target;
    //     const isOptionElement = targetElement.classList.contains("option");
    
    //     if (isOptionElement) {
    //         selectOption(targetElement);
    //     }
    
    //     toggleSelectBox(selectBoxElement);
    //     });
    // });
    
    // document.addEventListener("click", function (e) {
    //     const targetElement = e.target;
    //     const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");
    
    //     if (isSelect) {
    //     return;
    //     }
    
    //     const allSelectBoxElements = document.querySelectorAll(".select");
    
    //     allSelectBoxElements.forEach(boxElement => {
    //     boxElement.classList.remove("active");
    //     });
    // });

    

 

/*협력업체 캐러셀 */ 
    $(function(){
        $('.bxslider').bxSlider({
            mode: 'horizontal',
           auto:true,
           autoStart:true,
            speed: 25000,
        //    pause: 0,
            autoDelay: 0,
            autoDirection: 'next',
            // autoplaySpeed: 1000,
            responsive: true,
            pager:false,
            loop:true,
            // touchEnabled: true,
          infiniteLoop:true,
          ticker: true,
    // moveSlides: 1,     // 슬라이드 이동시 개수

     slideWidth: 300,   // 슬라이드 너비
          
  minSlides: 2,      // 최소 노출 개수
          
 maxSlides: 13,      // 최대 노출 개수
   
          
          
        });
      });




var Portfolio_Swiper = function(){
    // var swiper = new Swiper(".Portfolio_cs", {
    swiper = new Swiper(".Portfolio_cs", {
            effect: "coverflow",
            // grabCursor: true,
            // centewhiteSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
            rotate: 1, // 이전 다음 사진  회전률
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            
            },
            loop: true, // 무한루프
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
            // el: ".swiper-pagination", // 버튼 on/off
            clickable: true, // 슬라이드 갯수를 표시하는 곳을 클릭하면 이동
            },
            // autoplay: {
            // delay: 2000,
            // disableOnInteraction: false,
            // },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                },
                breakpoints: { // 반응형 
              // 640: {
              //   slidesPerView: 2,
              //   spaceBetween: 20,
              // },
            768: {
            slidesPerView: 3,
            spaceBetween: 10,
            },
              // 1024: {
              //   slidesPerView: 5,
              //   spaceBetween: 50,
              // },
            },
        });

}   