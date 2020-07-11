import Search from "./js/controller/Search";
import Country from "./js/controller/SearchCountry";
import * as page from "./js/view/pageactions";
import {
    DOM
} from './js/controller/base';
import * as searchCountryView from "./js/view/SearchCountryView";
import * as searchView from "./js/view/searchView";
import * as switchView from "./js/view/switchView";



// Page actions 
DOM.hamburgerMenu.addEventListener('click', page.open);
DOM.closeIcon.addEventListener('click', page.close);

// Switch currencies 
DOM.el.addEventListener("click", (e) => {

    // 1. Play Animation
    page.icon(e);

    // 2. Switch currencies and flags
    switchView.switchCurrencies();
    switchView.switchFlags();

    // 3. Refresh results 
    switchView.refreshRes();



});

const state = {}

/*****
 ***  SEACRH COUNTRY ***
/*******/

// Show searcbar
DOM.fromFlag.addEventListener('click', function () {
    searchCountryView.addSearch('from');
});
DOM.toFlag.addEventListener('click', function () {
    searchCountryView.addSearch('to');
});


// Search/Close handler and chosen result handler
DOM.list.forEach(el => {
    el.addEventListener("click", async (e) => {


        // Search
        if (e.target.closest(`.search`)) {
            // Getting which is the target block ("from" or "to") 
            const which = `.${e.target.parentElement.parentElement.className.split(" ")[0]}`;

            // Get input
            const query = searchCountryView.getInput(which);

            // Create search object
            state.search = new Country();
            // Get the response
            await state.search.api(query);
            // Prepare UI

            searchCountryView.clearItems(which);

            // Show the response in the UI
            searchCountryView.renderResult(state.search, which);

        };

        // Close
        if (e.target.closest('.cancel')) {
            let which = `.${e.target.parentElement.parentElement.className.split(" ")[0]}`;
            if (which === ".from-block") {
                searchCountryView.closeSearch("from");
            } else {
                searchCountryView.closeSearch("to");
            };

        };

        // Choose result
        if (e.target.closest('.items ul')) {
            let which = `.${e.target.parentElement.parentElement.parentElement.className.split(" ")[0]}`;
            console.log(which)
            searchCountryView.setResult(state.search, which)
        };
    });
});


// EXCHANGE CONTROLLER

const exchange = async () => {
    state.exchange = "";
    // 1. Get Input value
    let input = searchView.getInput();

    // 2. Get Exchange symbols
    const symbols = searchView.getSymbol();

    // 3. Pass value to api and get data
    state.exchange = new Search();
    await state.exchange.api(symbols.from, symbols.to);

    // Pass symbols in object
    await state.exchange.getSymbol(symbols.from, symbols.to);

    // 4. Calculate the exchange
    state.exchange.calcExchange(input);

    // 5. Separate numbers by thousands with commas 
    state.exchange.result = searchView.insertCommas(state.exchange.result);

 
    // 6. Display the result 
    searchView.displayResult(state.exchange.result);

    // 7. Add symbols to the end of the result 
    const result = searchView.addSymbols(state.exchange.fromSymbol, state.exchange.toSymbol);
    console.log(result)


};

DOM.submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Call the exchange function
    exchange();
});

window.addEventListener('keydown', (e) => {

    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        // Call the exchange function
        exchange();
    }
});