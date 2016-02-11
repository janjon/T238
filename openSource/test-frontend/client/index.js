import './css/style.css';
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from 'react-dom'
import React from 'react'
import {ButtonToolbar, ButtonGroup, Glyphicon, Button} from 'react-bootstrap'

const glyphInstance = (
  <div>
    <ButtonToolbar>
      <ButtonGroup>
        <Button><Glyphicon glyph="align-left" /></Button>
        <Button><Glyphicon glyph="align-center" /></Button>
        <Button><Glyphicon glyph="align-right" /></Button>
        <Button><Glyphicon glyph="align-justify" /></Button>
      </ButtonGroup>
    </ButtonToolbar>
    <ButtonToolbar>
      <ButtonGroup>
        <Button bsSize="large"><Glyphicon glyph="star" /> Star</Button>
        <Button><Glyphicon glyph="star" /> Star</Button>
        <Button bsSize="small"><Glyphicon glyph="star" /> Star</Button>
        <Button bsSize="xsmall"><Glyphicon glyph="star" /> Star</Button>
      </ButtonGroup>
    </ButtonToolbar>
  </div>
);

ReactDOM.render(glyphInstance, document.getElementById('content'));