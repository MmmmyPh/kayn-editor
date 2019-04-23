import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { Button } from 'antd';
import KaynEditor, { 
	htmlDeserialize, htmlSerialize,
	plainDeserialize, plainSerialize 
} from '../src';

const App = () => {
	const [ value, setValue ] = useState();
	const [ readOnly, setReadOnly ] = useState( false );

	const handleOnChange = ( value ) => {
		setValue( value );
	};

	const onSaveString = () => {
		const plain = plainSerialize( value );
		console.log( '==========' );
		console.log( plain );
		console.log( plainDeserialize( plain ) );
		console.log( '==========' );
	};

	const onSaveHtml = () => {
		const html = htmlSerialize( value );
		console.log( '==========' );
		console.log( html );
		console.log( htmlDeserialize( html ) );
		console.log( '==========' );
	};

	const onToggleReadOnly = () => setReadOnly( r => !r );

	return <div>
		<KaynEditor
			readOnly = { readOnly }
			value = { value }
			onChange = { handleOnChange }
		/>
		<div style = { { margin: '10px 10px' } }>
			<Button style = { { margin: '0 10px' } } onClick = { onSaveString }>保存为字符串</Button>
			<Button style = { { margin: '0 10px' } } onClick = { onSaveHtml }>保存为HTML</Button>
			<Button style = { { margin: '0 10px' } } onClick = { onToggleReadOnly }>只读</Button>
		</div>
	</div>;
};

export default hot( module )( App );