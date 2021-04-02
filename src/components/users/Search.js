import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ alertSet }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');

  const { users, clearUsers } = githubContext;

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertSet('Por favor ingrese algún usuario', 'light');
    } else {
      githubContext.searchUsers(text);
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
      {users.length > 0 && (
        <button onClick={clearUsers} className='btn btn-light btn-block'>
          Borrar
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  alertSet: PropTypes.func.isRequired,
};

export default Search;
