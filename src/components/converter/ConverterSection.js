import React, { Component } from 'react';
import AmountCurrency from '../amountCurrency/AmountCurrency';
import URLs from '../../config';
import socketIOClient from 'socket.io-client';

const baseCurrency = 'USD';
let socket;
let isGettingRates = false;

class ConverterSection extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
            amount: 0,
            currencyFrom: '',
            currencyTo: '',
            result: 0,
            rate: 0
        };
        socket = socketIOClient(URLs.socket);
    }

    componentDidMount() {
        socket.on('rate', (data) => {
            this.setState({rate: data.rate});
        });
    }

    componentWillUnmount() {
        socket.off('rate');
    }


    render() {
      return (
          <main className="pa4 black-80">
              <form className="measure center" autoComplete="off">
                  <fieldset id="fx_converter" className="ba b--transparent ph0 mh0">
                      <legend className="f4 fw6 ph0 mh0">Currency Converter</legend>
                      <AmountCurrency onChangeAmount={this.handleAmountChange.bind(this)}></AmountCurrency>
                  </fieldset>
                  <div className="mv3">
                      <label className="db fw6 lh-copy f6">Amount in { baseCurrency }</label>
                      <label className="db fw6 lh-copy f6">{this.state.result}</label>
                  </div>
                  <div className="lh-copy mt3">
                      <span className="f6 link dim black db">Market Rate  { this.state.rate }  / Inverse { 1/this.state.rate  }</span>
                  </div>
              </form>
              <div className="">
                  <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                         type="submit" value="Get rates" onClick={this.handleGetRate.bind(this)}/>
                  <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                         type="submit" value="Stop rates" onClick={this.handleStopRate.bind(this)}/>
              </div>
          </main>
      );
    }

    handleStopRate(){
        socket.emit('stop_rates');
        isGettingRates = false;
    }

    handleGetRate(){
        socket.emit('init_rates');
        isGettingRates = true;
    }

    handleAmountChange(amount, currencyFrom){
        socket.emit('currency', {
            message:currencyFrom,
            handle: amount
        });
        fetch(`${URLs.rest}/currencies/amount/${amount}/from/${currencyFrom}/to/${baseCurrency}`)
          .then(res => res.json())
          .then(result => {
            this.setState({
                ...result
            })});
    }
  }

  export default ConverterSection;
