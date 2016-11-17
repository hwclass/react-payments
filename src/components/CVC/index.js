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