$(function() {
    $('.sub>ul').hide();    
    $('.sub').hover(function(){
        $(this).find('ul').stop(true, true).slideDown(200);  
        $(this).find('a:first').addClass('on'); 
    },function(){
        $(this).find('ul').slideUp(200);
        $(this).find('a:first').removeClass('on');
    });
    $('.txt-box>a').hover(function(){
        $(this).css({
            backgroundColor : '#FFCD12',
            fontWeight:800,
            transform: 'scale(1.1)',
            transition:'200ms'
        });
        },function(){
            $(this).css({
                backgroundColor : '#fff',
                fontWeight:500,
                transform: 'scale(1)',
                transition:'200ms'
            });
        });

    $('#CSInner .right>div>a').hover(function(){
        $(this).css({
            transform: 'scale(1.1)',
            transition:'200ms'
        });
        },function(){
            $(this).css({
                transform: 'scale(1)',
                transition:'200ms'
            });
        }); 

    $('.MDS').hover(function() {
        $(this).find('img').css({
            transform: 'scale(1.1)',
            transition:'200ms'
        });
        $(this).find('button').css({
            opacity : 0.8,
            transition:'200ms'
        });
        $(this).find('button').css({
            opacity : 0.8,
            transition:'200ms'
        });
    },function(){
        $(this).find('img').css({
            transform: 'scale(1)',
            transition:'200ms'
        });
        $(this).find('button').css({
            opacity : 0,
            transition:'200ms'
        });
    });

});