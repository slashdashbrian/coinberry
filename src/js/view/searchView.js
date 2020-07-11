import {
    DOM
} from "../controller/base"
import {
    parse
} from "path"

export const getInput = () => document.querySelector('.from-block .input-value').value

export const getSymbol = () => {
    return {
        from: DOM.fromCurrency.textContent,
        to: DOM.toCurrency.textContent
    }
}

export const displayResult = (result) => {
    DOM.result.textContent = result
}

export const addSymbols = (fromSymbol, toSymbol) => {

    DOM.result.textContent += ' ' + toSymbol;
    DOM.fromInput.textContent += '' + fromSymbol;

};

export const insertCommas = (item) => {
    return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}