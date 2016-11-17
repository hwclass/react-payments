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