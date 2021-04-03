import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert, closeAlert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle fa-lg'></i> {alert.msg}
        <button
          className='fas fa-times fa-lg'
          style={{
            float: 'right',
            marginTop: '5px',
            marginRight: '4px',
            border: 'none',
          }}
          onClick={closeAlert}
        ></button>
      </div>
    )
  );
};

export default Alert;
