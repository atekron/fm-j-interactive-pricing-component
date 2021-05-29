const plans = [
  { pageviews: "10K", perMonth: 8 },
  { pageviews: "50K", perMonth: 12 },
  { pageviews: "100K", perMonth: 16 },
  { pageviews: "500k", perMonth: 24 },
  { pageviews: "1M", perMonth: 36 },
];

const discount = 25;

function handleInput() {
  let rangeValue = document.querySelector(".card__range").value;
  let checkboxValue = document.querySelector("#checkbox").checked;
  let pageViews = document.querySelector(".card__pageviews > span");
  let perMonth = document.querySelector(".card__per-month > span");

  pageViews.innerText = plans[rangeValue - 1].pageviews;

  let price = plans[rangeValue - 1].perMonth;
  if (checkboxValue) {
    price = price * ((100 - discount) / 100);
  }
  perMonth.innerText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  webkitProgressRangeColor();
}

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
