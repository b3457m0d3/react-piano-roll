import React from 'react';
import './styles/NotatorSelection.css';

class NotatorSelection extends React.Component {
  render() {
    return <div style={{
      left: this.props.rect.left,
      top: this.props.rect.top,
      width: this.props.rect.right - this.props.rect.left,
      height: this.props.rect.bottom - this.props.rect.top,
      display: this.props.rect.active ? 'block' : 'none'
    }} className="NotatorSelection" ></div>;
  }
}

export default NotatorSelection;
