const amount = document.querySelector("#amount");
const FirstOption = document.querySelector("#firstCurrencyOption");
const SecondtOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector(`#result`);

const Currency = {
    USD: 27,
    EUR: 32,
    JPY: 130,
    STR: 35,
    TL: 1,
};

function exchange() {
    if (amount.value < 0) {
        alert("lütfen geçerli bir değer giriniz")
        return;
    }
    console.log(Currency[firstCurrencyOption.value]);
    const result = amount.value * Currency[firstCurrencyOption.value]
    console.log(result);
    resultInput.value = result;
    button.addEventListener("click",exchange)
}
function runEventListeners() {
    button.addEventListener("click",exchange)
    // amount.addEventListener("input", exchange)
    firstCurrencyOption.addEventListener("change", exchange);
    secondCurrencyOption.addEventListener("change", exchange);
}

runEventListeners();















