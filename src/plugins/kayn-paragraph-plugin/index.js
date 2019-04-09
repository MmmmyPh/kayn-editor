import basicNode from 'components/basicNode';
import { PARAGRAPH } from 'constant/blocks';

const KaynParagraphPlugin = ( opt ) => {
	const options = {
		type: PARAGRAPH,
		tagName: 'p',
		className: 'kayn__paragraph',
		...opt
	};
	return {
		renderNode: ( props, editor, next ) => {
			if ( props.node.type === options.type ) {
				return basicNode( options.tagName, { className: options.className } )( props );
			} else {
				return next();
			}
		},
	};
};

export default KaynParagraphPlugin;