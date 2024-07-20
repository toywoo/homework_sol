// id로 html element 가져오는 방법 다른 방법도 많음 그러나 반환 값이 id만 하나임
let btn = document.getElementById("btn");

let times = 0;

// 클릭 이벤트가 발생하면 실행할 콜백 함수 지정
btn.addEventListener("click", function () {
    times++;
    console.log(times);
})