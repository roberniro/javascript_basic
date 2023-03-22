// 1. 박스 2개 만들기
// 2. 드랍다운 리스트 만들기
// 3. 환율 정보 들고오기
// 4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
// 5. 금액을 입력하면 환전
// 6. 드랍다운 리스트에서 아이템 선택하면 그 단위 기준으로 환전이 됨

// 7. 숫자를 한글로 읽는법
// 8. 반대로 밑에 박스에서 숫자로 바꿔도 박스에 환율이 적용

let currencyRatio = {
  USD: {
    USD: 1,
    KRW: 1304.2,
    EUR: 0.93,
    unit: "달러"
  },
  KRW: {
    USD: 0.00077,
    KRW: 1,
    EUR: 0.00071,
    unit: "원"
  },
  EUR: {
    USD: 1.08,
    KRW: 1406.07,
    EUR: 1,
    unit: "유로"
  }
};
// 값 읽어오기
// 1. console.log(currencyRatio.EUR.unit);
// 2. console.log(currencyRatio["KRW"]["unit"]);

let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    // 1. 버튼을 가져온다.
    // 2. 버튼에 있는 값을 바꾼다
    document.getElementById("from-button").textContent = this.textContent;
    // 3. 선택된 currency 값을 변수에 저장
    fromCurrency = this.textContent;
    convert();
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    convert;
  })
);

// 1. 키를 입력하는 순간
// 2. 환전이 되서
// 3. 환전된 값이 보인다
convert = () => {
  let amount = document.getElementById("from-input").value;
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
  console.log(convertedAmount);
  document.getElementById("to-input").value = convertedAmount;
};

// 1. 드랍다운 리스트의 값이 바뀔때마다
// 2. 환전을 다시한다.
