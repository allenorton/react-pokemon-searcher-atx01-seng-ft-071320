import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name: '',
    hp: 0,
    sprites: {
      front: '',
      back: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleImgchange = (event) => {
    this.setState({sprites: {
      front: event.target.value,
      back: event.target.value
    }})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPokemon(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" onChange={this.handleChange} placeholder="Name" name="name" />
            <Form.Input fluid label="hp" onChange={this.handleChange} placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" onChange={this.handleImgChange} placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" onChange={this.handleImgChange} placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
