import React, {Component} from 'react';

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

export class Name extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <label style={this.props.style.label}>
        Name:
        <input type="text" id="name" value={(this.props.value!==''?this.props.value:this.props.default)} style={this.props.style.input}></input>
      </label>
    )
  }
};

export class Surname extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <label style={this.props.style.label}>
        Surname:
        <input type="text" id="surname" value={(this.props.value!==''?this.props.value:this.props.default)} style={this.props.style.input}></input>
      </label>
    )
  }
}

export class CardNumber extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <label style={this.props.style.label}>
        Card Number:
        <input type="text" id="card-number" value={(this.props.value!==''?this.props.value:this.props.default)} style={this.props.style.input}></input>
      </label>
    )
  }
}

export class Expiration extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <label style={this.props.style.label}>
        Expiration:
        <input type="text" id="expiration" value={(this.props.value!==''?this.props.value:this.props.default)} style={this.props.style.input}></input>
      </label>
    )
  }
}

export class CVC extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <label style={this.props.style.label}>
        CVC:
        <input type="text" id="cvc" value={(this.props.value!==''?this.props.value:this.props.default)} style={this.props.style.input}></input>
      </label>
    )
  }
}

export class PurchaseButton extends Component {
  constructor(props) {
    super(props);
  }
  onClick() {
    console.log('clicked the purchase button...');
  }
  render() {
    return(<button style={this.props.style} onClick={this.props.onClick}>Purchase</button>)
  }
}

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
