
import React, { Fragment } from "react";

// Componente Semantic
import { Button, Icon, Label } from 'semantic-ui-react';


function ButtonsSemantic () {

    return(
      <Fragment>
          <Button>Click Here</Button>
          <Button content='Primary' primary />
          <Button content='Secondary' secondary />

          <Button as='div' labelPosition='right'>
            <Button color='red'>
              <Icon name='heart' />
              Like
            </Button>
            <Label as='a' basic color='red' pointing='left'>
              2,048
            </Label>
          </Button>
      </Fragment>
    );

}

export default ButtonsSemantic;