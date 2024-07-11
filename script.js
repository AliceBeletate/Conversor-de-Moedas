const convertButton = document.querySelector("#button1");

const currencySelect = document.querySelector(".currency-select")

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;

    const currencyToConvert = document.querySelector(".currency-value-to-convert"); // valor em real

    const currencyConverted = document.querySelector(".currency-value"); // valor convertido em outras moedasZ

    console.log(currencySelect.value)
    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 6.93;
    const bitcoinToday = 313682.04;

    if (currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencySelect.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }

    if (currencySelect.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue / bitcoinToday);
    }

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
};

function changeCurrency () {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.getElementById("currency-image");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar"
    currencyImage.src = "./assets/dolar.png"

  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
  }

  convertCurrency();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertCurrency);