import axios from 'axios'

export default class Search {

  constructor() {

  }
  async api(from, to) {
    try {
      const response = await axios("http://data.fixer.io/api/latest?access_key=bc4764d0dd10388f96f699e48b76b18a")


      this.from = response.data.rates[from];
      this.to = response.data.rates[to];

    } catch (e) {
      console.log(e)
    }

  }

async getSymbol(from, to){
  const fromSymbol = await axios(`https://restcountries.eu/rest/v2/currency/${from}`);
  const toSymbol = await axios(`https://restcountries.eu/rest/v2/currency/${to}`);

this.fromSymbol = fromSymbol.data[0].currencies[0].symbol;
this.toSymbol = toSymbol.data[0].currencies[0].symbol;

}

  // (From / To) * input value
  calcExchange(input) {
    this.result = parseInt(Math.round(((this.to / this.from) * input)), 10) 
  }
}