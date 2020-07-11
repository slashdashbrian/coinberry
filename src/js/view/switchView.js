import {
    exchangeDOM
} from '../controller/base';

export const switchCurrencies = () => {
    const fromCur = exchangeDOM.fromCurrencyName.innerHTML;
    const toCur = exchangeDOM.toCurrencyName.innerHTML;
    const fromSym = exchangeDOM.fromCurrencySymbol.innerHTML;
    const toSym = exchangeDOM.toCurrencySymbol.innerHTML;

    exchangeDOM.fromCurrencyName.innerHTML = toCur;
    exchangeDOM.toCurrencyName.innerHTML = fromCur;
    exchangeDOM.fromCurrencySymbol.innerHTML = toSym;
    exchangeDOM.toCurrencySymbol.innerHTML = fromSym;
};

export const switchFlags = () => {
    const from = exchangeDOM.fromFlag.src;
    const to = exchangeDOM.toFlag.src;

    exchangeDOM.fromFlag.src = to;
    exchangeDOM.toFlag.src = from;

};

export const refreshRes = () => {
    exchangeDOM.fromInput.placeholder = "0"
    exchangeDOM.fromInput.value = ""
    exchangeDOM.toOutput.textContent = 0
 
}