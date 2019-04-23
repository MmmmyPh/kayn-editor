import React, { useState } from 'react';
import { Upload, Icon } from 'antd';

const Dragger = Upload.Dragger;

const draggerStyle = {
	width: 300
};

const ImageUpload = () => {
	const [ fileList, setFileList ] = useState( [] );
	// console.log( '==========' );
	// console.log( fileList );
	// console.log( '==========' );
	const handleBeforeUpload = ( file ) => {
		setFileList( fileList => [ ...fileList,file ] );
		return false;
	};

	return (
		<Dragger 
			style = { draggerStyle }
			multiple = { true }
			accept = 'image/*'
			listType = 'picture'
			fileList = { fileList }
			// beforeUpload = { handleBeforeUpload }
			onChange = { ( info ) => {
				console.log( '==========' );
				console.log( info );
				console.log( '==========' );
			} }
		>
			<p className = 'ant-upload-drag-icon'>
				<Icon type = 'inbox' />
			</p>
			<p className = 'ant-upload-text'>点击或拖拽图片到此区域进行上传</p>
			<p className = 'ant-upload-hint'>支持单个或批量上传</p>
		</Dragger>
	);
};

export default ImageUpload;