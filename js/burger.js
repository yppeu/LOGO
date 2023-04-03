$(document).ready(function () {
  const button = () => {
    const burger = document.querySelector(".burger"); // burger class 가져오기
    burger.addEventListener("click", () => {
      // 클릭이벤트
      burger.classList.toggle("toggle"); //toggle class가 있으면 제거, 없으면 추가
    });
  };
  button();
});
