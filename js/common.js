window.onload = function () {
    var bannerLeft = 0;
    var first = 1;
    var last;
    var imgCnt = 0;
    var $img1 = $(".bannerWrap1 img");
    var $first;
    var $last;

    $img1.each(function () { // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left", bannerLeft);
        bannerLeft += $(this).width() + 75;
        $(this).attr("id", "banner" + (
            ++imgCnt
        )); // img에 id 속성 추가
    });

    if (imgCnt > 6) { //배너 n개 이상이면 이동시킴
        last = imgCnt;

        setInterval(function () {
            $img1.each(function () {
                $(this).css("left", $(this).position().left - 1); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner" + first);
            $last = $("#banner" + last);
            if ($first.position().left < -300) { // 제일 앞 배너 제일 뒤로 옮김
                $first.css("left", $last.position().left + $last.width() + 75);
                first++;
                last++;
                if (last > imgCnt) {
                    last = 1;
                }
                if (first > imgCnt) {
                    first = 1;
                }
            }
        }, 15); //속도를 조정
    }

};

function fnMove(seq) {
    var offset = $(".sec" + seq).offset();
    $('html, body').animate({
        scrollTop: offset.top
    }, 400);
}
