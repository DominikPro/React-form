class Form extends React.Component {
  state = {
    city: "Londyn",
    text: "",
    isLoved: true,
    number: "2",
  }
  handleCityChange = e => {
    if (e.target.type === "chceckbox") {
      this.setState({
        [e.target.name]: e.target.value
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }




  render() {
    return (
      <div>
        <lable>
          Podaj miasto
          <input name="city" value={ this.state.city }
            onChange={ this.handleCityChange }
            type="text">

          </input>
        </lable>

        <br />

        <lable>Napisz cos o tym mieście
        <textarea name="text" value={ this.state.text } onChange={ this.handleCityChange }></textarea>
        </lable>

        <br />
        <lable>
          Czy lubisz to miasto?
        <input name="isLoved" type="checkbox" checked={ this.state.isLoved } onChange={ this.handleCityChange }></input>
        </lable>
        <br />
        <lable>
          Ile razy byłeś w tym mieście?
          <select name="number" value={ this.state.number }
            onChange={ this.handleCityChange }>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="more">więcej</option>

          </select>
        </lable>
      </div>



    )
  }
}


ReactDOM.render(<Form />, document.getElementById('root'))
