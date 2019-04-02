import React, { useRef, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;
const commitStyle = {
	marginTop: 5,
	textAlign: 'right'
};
const buttonStyle = {
	margin: '0 15px'
};

const LinkForm = ( { form: { getFieldDecorator }, needText, onConfirm } ) => {
	const urlRef = useRef();
	useEffect( () => {
		urlRef.current.focus();
	}, [] );
	return (
		<Form layout = 'inline'>
			<FormItem label = 'Url'>
				{getFieldDecorator( 'url', {
					rules: [ 
						{ type: 'url',message: 'The input is not valid url!' },
						{ required: true, message: 'Url is required!' } 
					],
				} )( <Input size = 'small' ref = { urlRef } /> )}
			</FormItem>
			{
				needText && <FormItem label = 'Text'>
					{getFieldDecorator( 'text' )( <Input size = 'small' /> )}
				</FormItem>
			}
			<div style = { commitStyle }>
				<Button size = 'small' style = { buttonStyle } type = 'primary' onClick = { onConfirm }>确定</Button>
			</div>
		</Form>
	);
};

export default Form.create( {
	onFieldsChange( props, changedFields ) {
		props.onChange( changedFields );
	},
	mapPropsToFields( props ) {
		return {
			url: Form.createFormField( {
				...props.url,
				value: props.url.value,
			} ),
			text: Form.createFormField( {
				...props.text,
				value: props.text.value,
			} ),
		};
	},
} )( LinkForm );