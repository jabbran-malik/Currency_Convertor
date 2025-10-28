const BASE_URL =
"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('form button');

const fromcurr = document.querySelector('.from select');
const tocurr = document.querySelector('.to select');
const message = document.querySelector('.msg'); // ✅ space hata diya

for (let select of dropdowns) {
    for (let currcode in countryList) {
        let newOption = document.createElement('option');
        newOption.innerText = currcode;
        newOption.value = currcode;
        
        if (select.name === 'from' && currcode === 'USD') newOption.selected = 'selected';
        if (select.name === 'to' && currcode === 'PKR') newOption.selected = 'selected';
        
        select.append(newOption);
    }

    select.addEventListener('change', (event) => {
        updateflag(event.target);
    });
}

const updateflag = (ele) => {
    let currcode = ele.value;
    let countrycode = countryList[currcode];
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = ele.parentElement.querySelector('img');
    img.src = newSrc;
}

btn.addEventListener('click', async (eve) => {
    eve.preventDefault();

    let amount = document.querySelector('.amount input');
    let amountvalue = amount.value;

    if (amountvalue === "" || amountvalue < 1) {
        amountvalue = 1;
        amount.value = "1";
    }

    const url = `${BASE_URL}/${fromcurr.value.toLowerCase()}.json`; // ✅ correct URL

    let response = await fetch(url);
    let data = await response.json();

    let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()]; // ✅ correct extract

    let finalamount = (amountvalue * rate).toFixed(4);

    message.innerText = `${amountvalue} ${fromcurr.value} = ${finalamount} ${tocurr.value}`; // ✅ correct message update
});
