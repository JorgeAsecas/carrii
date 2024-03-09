import React from 'react';

class BotonDonacion extends React.Component {
  handleClick = () => {
    window.open('/donaciones', '_blank');
  };

  render() {
    return (
      <button className='donacion' onClick={this.handleClick}>
        Hacer Donación
      </button>
    );
  }
}

export default BotonDonacion;
