import { Block } from 'slate';

const kaynSchema = {
	document: {
		last: { type: 'paragraph' },
		normalize: ( editor, { code, node, child } ) => {
			switch ( code ) {
				case 'last_child_type_invalid': {
					const paragraph = Block.create( 'paragraph' );
					return editor.insertNodeByKey( node.key, node.nodes.size, paragraph );
				}
			}
		},
	},
	blocks: {
		image: {
			isVoid: true,
		},
	},
};

export default kaynSchema;