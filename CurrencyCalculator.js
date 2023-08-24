const amountInput = document.querySelector("#amount");
const FirstOption = document.querySelector("#firstCurrencyOption");
const SecondtOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector(`#result`);

const Currency = {
    USD: 27,
    EUR: 32,
    JPY: 130,
    STR: 35,
    TL: 1,
}

function exchange() {
    if (amountInput.value < 0) {
        amountInput.value = "";
        alert("lütfen geçerli bir değer giriniz")
        return;
    }
    console.log(Currency[firstCurrencyOption.value]);
    const result = amountInput.value * Currency[firstCurrencyOption.value]
    console.log(result);
    resultInput.value = result;
    button.addEventListener("click", exchange)
    amountInput.addEventListener('input', function () {
        amountInput.value = amountInput.value.replace(/-/g, ''); 
    });

}
function runEventListeners() {
    button.addEventListener("click", exchange)
    // amount.addEventListener("input", exchange)
    firstCurrencyOption.addEventListener("change", exchange);
    secondCurrencyOption.addEventListener("change", exchange);
}

runEventListeners();
