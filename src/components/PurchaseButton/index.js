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