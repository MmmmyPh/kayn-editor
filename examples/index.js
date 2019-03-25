import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import Editor from './editor';

const $root = document.querySelector( '#root' );

if( process.env.NODE_ENV !== 'production' ) {
	console.log( 'this is dev mode' );
}

ReactDOM.render( <Editor />, $root );
