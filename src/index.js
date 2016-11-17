import React, {Component} from 'react';

import Name from './components/Name';
import Surname from './components/Surname';
import CardNumber from './components/CardNumber';
import Expiration from './components/Expiration';
import CVC from './components/CVC';
import PurchaseButton from './components/PurchaseButton';

const css = {
  label: {
    fontSize: 15,
    fontFamily: 'Helvetica'
  },
  input: {
    fontSize: 15,
    fontFamily: 'Helvetica'
  },
  purchaseButton: {
    border: '1px solid #eee',
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    fontSize: 15,
    padding: '3px 10px',
  }
};

export default class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaults: {
        name: {
          value: 'John'
        },
        surname: {
          value: 'Doe'
        },
        cardNumber: {
          value: '1234543234566554'
        },
        expiration: {
          value: '8/16'
        },
        cvc: {
          value: '456'
        }
      }
    }
  }
  render() {
    return (
      <section id="payments">
        <h3>Payments</h3>
        <div class="block">
          <Name value={this.props.name} default={this.state.defaults.name.value} style={{label: css.label, input: css.input}}/>
        </div>
        <div class="block">
          <Surname value={this.props.surname} default={this.state.defaults.surname.value} style={{label: css.label, input: css.input}}/>
        </div>
        <div class="block">
          <CardNumber value={this.props.cardNumber} default={this.state.defaults.surname.value} style={{label: css.label, input: css.input}}/>
        </div>
        <div class="block">
          <Expiration value={this.props.expiration} default={this.state.defaults.expiration.value} style={{label: css.label, input: css.input}}/>
        </div>
        <div class="block">
          <CVC value={this.props.cvc} default={this.state.defaults.cvc.value} style={{label: css.label, input: css.input}}/>
        </div>
        <div class="block">
          <PurchaseButton/>
        </div>
      </section>
    )
  }
};

Payments.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  name: React.PropTypes.string,
  surname: React.PropTypes.string,
  cardNumber: React.PropTypes.string,
  expiration: React.PropTypes.string,
  cvc: React.PropTypes.string,
  style: React.PropTypes.object,
};
