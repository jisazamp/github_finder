import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert, closeAlert }) => {
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

Alert.propTypes = {
  alert: PropTypes.object,
};

export default Alert;
