// changing color of range input progres bar on webkit browsers
function webkitProgressRangeColor() {
  let rangeValue = document.querySelector(".card__range").value;
  let minValue = document.querySelector(".card__range").min;
  let maxValue = document.querySelector(".card__range").max;

  rangeValue = ((rangeValue - minValue) / (maxValue - minValue)) * 100;

  document.querySelector(".card__range").style.background =
    "linear-gradient( to right, hsl(174, 86%, 45%) 0%, hsl(174, 86%, 45%) " +
    rangeValue +
    "%, hsl(174, 77%, 80%) " +
    rangeValue +
    "%, hsl(174, 77%, 80%) 100% )";
}
