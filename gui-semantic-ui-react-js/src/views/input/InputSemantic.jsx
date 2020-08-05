
import React, { Fragment } from "react";

// Componente Semantic
import { Dropdown, Input } from 'semantic-ui-react'

const options = [
    { key: '.com', text: '.com', value: '.com' },
    { key: '.net', text: '.net', value: '.net' },
    { key: '.org', text: '.org', value: '.org' },
  ]
  
function InputSemantic () {

    return(
      <Fragment>
          <Input placeholder='Search...' />

          <Input
            label={<Dropdown defaultValue='.com' options={options} />}
            labelPosition='right'
            placeholder='Find domain'
            />
      </Fragment>
    );

}

export default InputSemantic;