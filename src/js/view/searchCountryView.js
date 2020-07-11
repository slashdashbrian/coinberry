import {
    DOM
} from '../controller/base'

// Add searchbar to UI

export const addSearch = (which) => {
    const from = document.querySelector(`.from-block.list`);
    const to = document.querySelector(`.to-block.list`);
    //   Active country
    if (from.classList.contains('visibility') && to.classList.contains('visibility')) {
        // Open search
        document.querySelector(`.${which}-block.list`).classList.remove('visibility');
        document.querySelector(`.${which}-block.container`).classList.add('visibility');
    };


}

// Close searchbar
export const closeSearch = (which) => {
    document.querySelector(`.${which}-block.list`).classList.add('visibility');
    document.querySelector(`.${which}-block.container`).classList.remove('visibility');
}

// Getting Input 
export const getInput = which => document.querySelector(`${which} .country-input`).value;

// Clearing all list items 
export const clearItems = (which) => {
    document.querySelector(`${which} .items`).innerHTML = "";
};

// Rendering the result to the UI 
export const renderResult = (result, which) => {
    if (result) {
        let countryName = result.name;
        let symbol = result.code;
        let flag = result.flag;
        if (countryName.length > 10) {
            countryName = countryName.slice(0, 30);
            countryName += "...";
        };


        let error = `
        <ul class="error">
        <li class="no-results">Sorry, there is no result for this term...</li>
    </ul>
    `;
        let html = `
        <ul class="${countryName} countryFull">
                        <li class="country">${countryName}</li>
                        <li class="search-currency">${symbol}</li>
                        <img class="search-flag" src=${flag} alt="${countryName}" srcset="">
                    </ul>
    `;

        if (which === ".from-block") {
            if (countryName !== "error") {
                document.querySelector('.from-block .items').insertAdjacentHTML("beforeend", html);
            } else {
                const items = document.querySelector(`.from-block .items`);
                items.insertAdjacentHTML("beforeend", error);
            };
        } else if (which === ".to-block") {
            if (countryName !== "error") {
                const items = document.querySelector('.to-block .items');
                items.insertAdjacentHTML("beforeend", html);
            } else {
                const items = document.querySelector(`.from-block .items`);
                items.insertAdjacentHTML("beforeend", error);
            };

        };
    };
};

export const setResult = (result, which) => {


    document.querySelector(`${which}.list`).classList.add('visibility');
    document.querySelector(`${which}.container`).classList.remove('visibility');

    const newWhich = which.replace('-block', '')
 
    const name = document.querySelector(`${newWhich}-currency-name`);
    const symbol = document.querySelector(`${newWhich}-currency-symbol`);
    const flag = document.querySelector(`${newWhich}-flag`);

    name.innerHTML = result.currencyName;
    symbol.innerHTML = result.code;
    flag.src = result.flag
}