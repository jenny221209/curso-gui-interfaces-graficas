
import React, { Fragment } from "react";

// Label Semantic
import { Label } from 'semantic-ui-react'


function LabelSemantic () {
    return (
        <Fragment>
             <Label as='a' color='blue' image>
            <img src='/images/avatar/small/veronika.jpg' />
            Veronika
            <Label.Detail>Friend</Label.Detail>
            </Label>

            <Label as='a' color='teal' image>
            <img src='/images/avatar/small/jenny.jpg' />
            Jenny
            <Label.Detail>Friend</Label.Detail>
            </Label>
        </Fragment>
    );
}

export default LabelSemantic;

