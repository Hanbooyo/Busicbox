$(function() {
//이미지 슬라이드 영역
    var index=1;
    var sw=false;
    var auto;
    var imgW=$('.slider_image').width();

    moveSlider(index);
    autoSlider();

    function moveSlider(index) {
        $('.slider_panel').stop(true, false).animate({
            left:-(index*imgW)
        },800);

    };

    $('.slider_panel').append($('.slider_image').first().clone());  
    $('.slider_panel').prepend($('.slider_image').eq(-2).clone());
    
    $('.left_control').click(function() {
        if(index > 1) {
            index--;
            moveSlider(index);    
        }else {
            $('.slider_panel').css('left',-(4*imgW));
            index=3;
            moveSlider(index);
        }
    });
    $('.right_control').click(function() {
        if(index < 3) {
            index++;
            moveSlider(index);
        }else {
            $('.slider_panel').css('left',0);
            index=1;
            moveSlider(index);
        }
    });

    function autoSlider() {
        auto=setInterval(function() {
            if(index < 4 && sw==false) {
            $('.right_control').trigger('click');
            }else {
                sw=true;
            }
        if(index > 1 && sw==true) {
            $('.left_control').trigger('click');
            }else {
                sw=false;
            }
       },5000); 
    }
//이미지 슬라이드 영역종료

    const orgelNames=['봄날 오르골','태극 오르골','명화 오르골','민화 오르골','백자 오르골',
                    '장미 오르골','연꽃 수묵화 오르골','수란 수묵화 오르골','자기 오르골',
                      '그림 오르골','해바라기 오르골','그림 오르골','담채화 오르골','프린팅 오르골','프린팅 오르골'];
    const imgs=["images/ex1.jpg","images/ex2.jpg","images/ex3.jpg","images/ex4.jpg","images/ex5.jpg",
                "images/ex6.jpg","images/ex7.jpg","images/ex8.jpg","images/ex9.jpg","images/ex10.jpg",
                "images/ex11.jpg","images/ex12.jpg","images/ex17.jpg","images/ex14.jpg","images/ex15.jpg"];                  
    const prices=['45,000','41,000','49,000','42,000','71,000',
                '58,000','57,000','53,000','58,000','58,000',
                '62,000','52,000','58,000','55,000','53,000'];

    for(var i=0; i<orgelNames.length; i++){
        $('.MDImg>img').eq(i).attr("src",imgs[i]);
        $('.MDS>a>strong').eq(i).text(orgelNames[i]);
        $('.MDS span').eq(i).text(prices[i]);
    }
    

});