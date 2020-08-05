import React, { Fragment } from "react";

// Img semantic
import { Image } from 'semantic-ui-react'

function ImagenSemantic () {
    return (
        <Fragment>
            <Image src='/images/wireframe/image.png' size='small' />
            
            <Image
                src='/images/wireframe/image-text.png'
                as='a'
                size='medium'
                href='http://google.com'
                target='_blank'
            />
        </Fragment>
    );
}

export default ImagenSemantic;