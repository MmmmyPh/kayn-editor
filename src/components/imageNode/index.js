import React, { useState } from 'react';
import classNames from 'classnames';
import { Modal, Popover, Checkbox, InputNumber, Button } from 'antd';
import ToolButton from 'components/toolButton';
import ImagePopover from './ImagePopover';

const prefixCls = 'kayn';

const ImageNode = ( { options, attributes, children, node, isSelected, editor, ...rest } ) => {
	const [ visible, setVisible ] = useState( false );
	const { getSrc, getWidth, getHeight, getTrueWidth, getTrueHeight } = options;

	const handleRemoveImage = () => editor.removeNodeByKey( node.key );

	const handleViewOriginImage = () => setVisible( true );

	return (
		<div 
			className = { classNames( `${ prefixCls }__img-wrapper`, { [ `${ prefixCls }__img-wrapper--selected` ]: isSelected } ) }
			style = { { width: getWidth( node ), height: getHeight( node ) } }
		>
			<img 
				className = { `${ prefixCls }__img` } 
				src = { getSrc( node ) } 
				style = { { width: getWidth( node ), height: getHeight( node ) } } 
				{ ...attributes }
			/>
			{
				isSelected && <span className = { `${ prefixCls }__img-toolbar` } >
					<Popover 
						placement = 'rightTop' 
						title = '编辑图片'
						trigger = 'click'
						content = { <ImagePopover editor = { editor } node = { node } options = { options } /> }
						overlayStyle = { { zIndex: 10002 } }
					>
						<ToolButton toolTipProps = { { placement: 'right' } } title = '编辑' icon = 'EDIT' />
					</Popover>
					<ToolButton toolTipProps = { { placement: 'right' } } title = '查看原图' icon = 'EYE' onClick = { handleViewOriginImage } />
					<ToolButton toolTipProps = { { placement: 'right' } } title = '删除图片' icon = 'DELETE' onClick = { handleRemoveImage } />
				</span>
			}
			<Modal
				wrapClassName = 'kayn__img-origin-modal'
				zIndex = { 10002 }
				width = { getTrueWidth( node ) >= document.body.clientWidth * 0.9 ? '80%' : getTrueWidth( node ) + 10 }
				visible = { visible }
				closable = { false }
				footer = { null }
				onCancel = { () => setVisible( false ) }
			>
				<div 
					className = 'kayn__img-origin-content'
					style = { { maxHeight: document.body.clientHeight * 0.8 } }
				>
					<img
						src = { getSrc( node ) }
						style = { { display: 'block', margin: '0 auto', width: getTrueWidth( node ), height: getTrueHeight( node ) } }
					/>
				</div>
			</Modal>
		</div>
	);
};

export default ImageNode;