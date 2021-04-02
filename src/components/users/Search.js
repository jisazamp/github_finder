import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Por favor ingrese algún usuario', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => {
    // esta notación para no tener que hacer un método distinto
    // para cada entrada
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Buscar usuarios...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Buscar'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button onClick={clearUsers} className='btn btn-light btn-block'>
          Borrar
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
