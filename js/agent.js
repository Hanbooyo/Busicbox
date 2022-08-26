let smartPhones=['iphone','ipod','ipad','opera mini','opera mobi','nokia','android','webos','windows ce','blackberry','iemobile','sonyericssion'];
//외 추가기기는 일단 스마트폰으로 해당 페이지를 실행해본다. 그 다음
//alert(navigator.userAgent); 
//이렇게 Agent 이름 확인해서 추가하면됨.

//다음은 스마트폰인지 아닌지 구분해주는 코드
for(let i in smartPhones) { //in은 index값만 넘겨줌
    if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) { //일부 대문자 Android 같은것도 소문자로 변환
        document.location='http://hanbooyo.dothome.co.kr/mindex.html';      //location =  주소
    }
}