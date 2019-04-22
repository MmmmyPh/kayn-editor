import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { Button } from 'antd';
import KaynEditor, { plainDeserialize, plainSerialize } from '../src/editors/kayn-slate-editor';

const App = () => {
	const [ value, setValue ] = useState();
	const [ readOnly, setReadOnly ] = useState( false );

	const handleOnChange = ( value ) => {
		setValue( value );
	};

	const onSave = () => {
		const plain = plainSerialize( value );
		console.log( '==========' );
		console.log( plain );
		console.log( plainDeserialize( plain ) );
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
			<Button style = { { margin: '0 10px' } } onClick = { onSave }>保存</Button>
			<Button style = { { margin: '0 10px' } } onClick = { onToggleReadOnly }>只读</Button>
		</div>
	</div>;
};

export default hot( module )( App );