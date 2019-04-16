import React from 'react';
import { Select } from 'antd';
import codeTypes from './code-types';

const Option = Select.Option;

const CodeTypeSelect = ( { value, onSelect } ) => {
	return (
		<Select
			value = { value }
			onSelect = { onSelect }
			showSearch
			style = { { width: '100%' } }
			placeholder = '选择代码类型'
			filterOption = { ( input, option ) => option.props.children.props.children.toLowerCase().indexOf( input.toLowerCase() ) >= 0 }
		>
			{
				codeTypes.map( item => <Option key = { item } value = { item }><span title = { item }>{item}</span></Option> )
			}
		</Select>
	);
};

export default CodeTypeSelect;