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