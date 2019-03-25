import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import URLs from '../../config';

const baseCurrency = 'USD';

class AmountCurrency extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
          currencies: {},
          currency:'',
          amount: 0
      };
      const handleChange = this.props.onChangeAmount;

      this.debouncedOnChange = debounce(
          function (){
              handleChange(this.state.amount, this.state.currency ? this.state.currency : baseCurrency);
          },
          300
      );
    }



    logChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.debouncedOnChange(e);
    };
    componentDidMount() {
      fetch(`${URLs.rest}/currencies`)
        .then(res => res.json())
        .then(currencies => {
            console.log(currencies);
          return this.setState({ currencies: currencies })});

    }

    renderCurrencyList  () {
        return Object.entries(this.state.currencies).filter(c => c[0] !== baseCurrency).map(cur => {
                return (
                    <option key={`${cur[0]}`} value={`${cur[0]}`}>
                        {cur[1].name} - {cur[1].symbol}
                    </option>
                );
            }
        );
    }

    render() {
      return (
          <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="amount">Amount</label>
              <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50"
                  placeholder="Enter the amount" type="number" name="amount" value={this.state.amount} onChange={this.logChange}
                  id="amount"/>
              <select
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50"
                  name="currency" id="currency" value={this.state.currency}
                  onChange={this.logChange}>
                  {
                      this.renderCurrencyList()
                  }
              </select>
          </div>
      );
    }
  }

  export default AmountCurrency;
