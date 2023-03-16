import "./style.css";

const myHeaders = new Headers();
myHeaders.append("apikey", `v36SpAH3dnFYGMst8Oj9pBsZ9QX0CYvk`);

const requestOption = {
  method: "GET",
  mode: "cors",
  headers: myHeaders,
};

const droplists = document.querySelectorAll(".droplistOptions");
// console.log(droplists);

async function getCountryList() {
  const res = await fetch(
    `https://api.apilayer.com/exchangerates_data/symbols`,
    requestOption
  );
  const data = await res.json();
  // console.log(data);
  const countries = data.symbols;
  const countryNames = Object.keys(countries);
  // console.log(countryNames);
  countryNames.forEach((country) => {
    droplists.forEach(
      (item) =>
        (item.innerHTML += `<option value="${country}">${country}</option>`)
    );

    // 2nd way of doing
    //--------------------
    // doubt in this way(problem with this is it only create one option tag but i m inserting it at two place)

    // const optionElement = document.createElement("option");
    // optionElement.value = country;
    // optionElement.textContent = country;
    // droplists.forEach((item) => item.append(optionElement));
    // ---------------------------
  });
  // for (let i = 0; i < countryNames.length; i++) {
  //   droplists[0].innerHTML += `<option value="${countryNames[i]}">${countryNames[i]}</option>`;
  //   droplists[1].innerHTML += `<option value="${countryNames[i]}">${countryNames[i]}</option>`;
  // }
  // 1st way of doing
  // droplists[0].innerHTML += `<option value="${country}">${country}</option>`;
  // droplists[1].innerHTML += `<option value="${country}">${country}</option>`;
}
getCountryList();

// access html elment and store in variable

const amt = document.getElementById("enterAmt");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const result = document.querySelector(".exchangeResult");
const getRateBtn = document.querySelector(".getRate");

// Run function on click button
getRateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const amtValue = amt.value;
  const fromCurrencyValue = fromCurrency.value;
  const toCurrencyValue = toCurrency.value;
  result.textContent = "Getting exchange rate...";
  getExchangeRate(fromCurrencyValue);

  async function getExchangeRate(from) {
    const res = await fetch(
      `https://api.apilayer.com/exchangerates_data/latest?symbols&base=${from}`,
      requestOption
    );
    const data = await res.json();
    let conversionRate = data.rates[toCurrencyValue];
    let finalResult = conversionRate * amtValue;
    result.textContent = `${amtValue} ${fromCurrencyValue} = ${finalResult.toFixed(
      2
    )}
     ${toCurrencyValue}`;
  }
});
