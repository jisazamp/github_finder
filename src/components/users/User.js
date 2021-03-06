import React, { Fragment, useEffect, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      {/* Menú superior */}
      <Link to='/' className='btn btn-light'>
        Volver
      </Link>
      Contratable:{' '}
      {hireable ? (
        <i className='fas fa-check text-sucess' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      {/* Inicio carta con información del usuario */}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            style={{ width: '150px' }}
            alt=''
          />
          <h1>{name}</h1>
          <p>Ubicación: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio:</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className='btn btn-dark my-1'
            rel='noreferrer'
            target='_blank'
          >
            <i className='fab fa-github'></i> Ir al perfil de GitHub
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Usuario: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Compañía: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Sitio Web: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      {/* Fin carta del usuario */}
      {/* Carta con información de seguidores y repositorios públicos */}
      <div className='card text-center'>
        <div className='badge badge-primary'>Seguidores: {followers}</div>
        <div className='badge badge-success'>Siguiendo: {following}</div>
        <div className='badge badge-light'>
          Repositorios Públicos: {public_repos}
        </div>
        <div className='badge badge-dark'>Gists Públicos: {public_gists}</div>
      </div>
      {/* Lista de los últimos cinco repositorios */}
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
