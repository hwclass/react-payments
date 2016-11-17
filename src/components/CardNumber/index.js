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