import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  onChange = (e) => {
    // esta notación para no tener que hacer un método distinto
    // para cada entrada
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Buscar usuarios...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Buscar'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
