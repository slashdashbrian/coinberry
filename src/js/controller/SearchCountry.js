import axios from 'axios'


export default class Country {
    constructor() {

    }

    async api(input) {
        try {
            if (input.includes(' ')) {
                input = input.split(' ').join('');
            };
            const result = await axios(`https://restcountries.eu/rest/v2/name/${input}?fullText=true`);


            for (let i = 0; i < result.data.length; i++) {

                this.name = result.data[i].name;
                this.code = result.data[i].currencies[0].code;
                this.currencyName = result.data[i].currencies[0].name;
                this.symbol = result.data[i].currencies[0].symbol;
                this.flag = result.data[i].flag;

            };

        } catch (error) {
            this.name = "error"
        }
    }
}