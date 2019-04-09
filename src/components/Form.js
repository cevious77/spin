import React from "react"

class Form extends React.Component {
  state = {
    email: "",
    firstname: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log("poulet", this)
    alert("A name was submitted: " + this.state.email)
  }
  handleChange = event => {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    console.log(this)
    return (
      <div>
        Form{" "}
        <p>
          info: {this.state.email} name: {this.state.firstname}
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="send" />
        </form>
      </div>
    )
  }
}

export default Form