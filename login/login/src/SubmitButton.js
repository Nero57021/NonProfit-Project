import React from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
class SubmitButton extends React.Component {

  render() {
    return (
      <div className="submitButton">

        <Button color="primary">Log In</Button>{' '}
        
        {/* <Button className='btn-dark' diabled={this.props.disabled} onClick={ () => this.props.onClick() }>
            {this.props.text}
        </Button> */}

      </div>
    );
  }
  
}

export default SubmitButton;
