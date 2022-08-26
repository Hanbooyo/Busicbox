$(function () {
    //외형 제작 영역 시작
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.previewImg').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(":input[name='u_file']").change(function () {
        if ($(":input[name='u_file']").val() == '') {
            $('.previewImg').attr('src', '');
        }
        $('.previewImg').css({ 'display': '' });
        readURL(this);
    });

    // 이미지 에러 시 미리보기영역 미노출
    function imgAreaError() {
        $('.custom_area>div').css({ 'display': 'none' });
    }


    $('.previewImg').hide();
    $('#handle').hide();


    var handles = ["images/handle (1).png", "images/handle (2).png", "images/handle (3).png", "images/handle (4).png",
        "images/handle (5).png", "images/handle (6).png", "images/handle (7).png"]


    $('#handle_selector').on('change', function () {
        var selectV = $('#handle_selector').val();
        switch (selectV) {
            case "1":
                $('#handle').show();
                $('#handle').attr("src", handles[0]);
                break;
            case "2":
                $('#handle').show();
                $('#handle').attr("src", handles[1]);
                break;
            case "3":
                $('#handle').show();
                $('#handle').attr("src", handles[2]);
                break;
            case "4":
                $('#handle').show();
                $('#handle').attr("src", handles[3]);
                break;
            case "5":
                $('#handle').show();
                $('#handle').attr("src", handles[4]);
                break;
            case "6":
                $('#handle').show();
                $('#handle').attr("src", handles[5]);
                break;
            case "7":
                $('#handle').show();
                $('#handle').attr("src", handles[6]);
                break;
        }
    });


    //멜로디 제작 영역 시작 

    $('#playBar').hide();

    var musicnote = 71;
    var note = 20;
    var bars = $('.bar');
    const waveFiles = [" ", "sound/A6.wav", "sound/G6.wav",
        "sound/F6.wav", "sound/E6.wav",
        "sound/D6.wav", "sound/C6.wav", "sound/B5.wav",
        "sound/A5.wav", "sound/G5.wav", "sound/F5.wav",
        "sound/E5.wav", "sound/D5.wav", "sound/C5.wav", "sound/B4.wav",
        "sound/A4.wav", "sound/G4.wav", "sound/F4.wav", "sound/E4.wav",
        "sound/D4.wav", "sound/C4.wav"];

    var sound = [" ", new Audio("sound/A6.wav"), new Audio("sound/G6.wav"),
        new Audio("sound/F6.wav"), new Audio("sound/E6.wav"),
        new Audio("sound/D6.wav"), new Audio("sound/C6.wav"), new Audio("sound/B5.wav"),
        new Audio("sound/A5.wav"), new Audio("sound/G5.wav"), new Audio("sound/F5.wav"),
        new Audio("sound/E5.wav"), new Audio("sound/D5.wav"), new Audio("sound/C5.wav"), new Audio("sound/B4.wav"),
        new Audio("sound/A4.wav"), new Audio("sound/G4.wav"), new Audio("sound/F4.wav"), new Audio("sound/E4.wav"),
        new Audio("sound/D4.wav"), new Audio("sound/C4.wav")];

    makeNote();

    function makeNote() {
        for (var j = 0; j < note; j++) {
            for (var i = 0; i < musicnote; i++) {
                $('<div class="box"></div>').css({
                    width: 20,
                    height: 20,
                    top: 0,
                    left: 0 + (20 * i),
                    border: "0.1px solid #9E9E9E",
                    boxSizing: "border-box",
                }).appendTo(bars[j]);
            }
        }
    };




    for (var i = 0; i < note; i++) {
        if (i % 5 == 0) {
            $(bars[i]).css({
                position: 'absolute',
                width: 1420,
                height: 20,
                top: 0 + (20 * i),
                left: 20,
                backgroundColor: "#EAEAEA"
            });
        } else {
            $(bars[i]).css({
                position: 'absolute',
                width: 1420,
                height: 20,
                top: 0 + (20 * i),
                left: 20,
                backgroundColor: "#fff"
            });
        }
    }

    var boxs = $('.box');

    /* 첫줄에만 적용되서 일단 주석처리
    for(var i=0; i<musicnote; i++) {
        if(i%16<8) {
            $(boxs[i]).css({    
                width: 20,
                height: 20,
                top:0,
                left:0+(20*i),
                backgroundColor: "#EAEAEA"
            });
        }else {
            $(boxs[i]).css({
                width: 20,
                height: 20,
                top:0,
                left:0+(20*i),
                backgroundColor: "#BDBDBD"
            });
        }
    } */

    boxs.hover(function () {
        $(this).css({
            boxShadow: "4px 4px 2px rgba(110, 110, 110, 0.5) inset"
        });
    }, function () {
        $(this).css({
            boxShadow: "0px 0px 0px rgba(110, 110, 110, 0) inset"
        });
    });

    let music = [];

    for (var col = 0; col < note; col++) {
        music.push(new Array(72).fill(false));
    }

    boxs.click(function () {
        var sw = true;
        $(this).toggleClass('onM');
        var rowIndex = $(this).index();
        var colIndex = $(this).parent().index() - 1; //왜 안맞지
        // alert(colIndex);alert(rowIndex); console.log(music);
        if (music[colIndex][rowIndex] == true) {
            music[colIndex][rowIndex] = false;
        } else {
            music[colIndex][rowIndex] = true;
        }
    });

    bars.click(function () {
        var barIndex = $(this).index();
        new Audio(waveFiles[barIndex]).play();
    });


    var on = true;
    var rowi;
    $('#play').click(function () {

        function playOne(rowi) {

            music.forEach(function (col, coli) {
                if (col[rowi]) { //비어있지않으면
                    new Audio(waveFiles[coli + 1]).play();
                }
            });
            if (rowi >= 71) {
                on = !on;
                $('#play').css({
                    backgroundImage: 'url(images/play.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center, center',
                });
               /* $('#playBar').css({
                    left: 20
                }); */
                $('#playBar').fadeOut(1, function(){ // 속도, 콜백함수 
                    $(this).css('left',20);
                    return
                });
              /*   return return 을 시간이 다 되기전에 만나기때문에 이후에 만나게하려면 새로 함수를 */
            }else {
                stop1 = setTimeout(function () {
                    playOne(rowi + 1);
                    $('#playBar').css({
                        left: 20 + (20 * (rowi + 1))
                    });
                }, 200);
            }
        };

        if (on) {
            playOne(0);
            on = !on;
            $('#playBar').show();
            $('#play').css({
                backgroundImage: 'url(images/stop.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center, center'
            });
        } else {
            on = !on;
            $('#playBar').hide();
            $('#playBar').css({
                left: 20
            });
            $('#play').css({
                backgroundImage: 'url(images/play.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center, center'
            });
            clearInterval(stop1);
        }
    });


    function save() {
        const myJSON = JSON.stringify(music);
        localStorage.setItem("testJSON", myJSON); //하나만저장됨.
        console.log(myJSON);
    };
    function sload() {
        let text = localStorage.getItem("testJSON");
        music = JSON.parse(text);  //→ 받아온 string을  parse(안에 넣기); 
        music.forEach((element, colIndex) => {
            element.forEach((element, rowIndex) => {
                if (music[colIndex][rowIndex]) {
                    const loadNote = $('.bar').eq(colIndex).children().eq(rowIndex);
                    loadNote.addClass('onM');
                    //console.log(loadNote);
                }
            });
        });
    };
    function reset() {
        boxs.removeClass('onM');
        for(let i=0;i<note;i++) {
            for(let j=0; j<musicnote; j++) {
                music[i][j]='';
            }
        }
    }

    // 버튼 영역
    $('#play').css({
        backgroundImage: 'url(images/play.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center, center'
    });
    $('#save').css({
        backgroundImage: 'url(images/save.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center, center'
    });
    $('#save').click(function () {
        save();
        console.log(music);
    });


    $('#load').css({
        backgroundImage: 'url(images/load.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center, center'
    });
    $('#load').click(function () {
        sload();
    });
    $('#reset').click(function () {
        reset();
    });

    $('.tools>button').hover(function () {
        $(this).css({
            backgroundColor: "#ccc",
            border: "1px solid #ccc"
        });
    }, function () {
        $(this).css({
            backgroundColor: "#fff",
            border: "1px solid #ccc"
        });
    });

    //멜로디 제작 영역 종료

});