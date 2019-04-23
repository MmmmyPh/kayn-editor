import {
	PARAGRAPH,
	BLOCKQUOTE,
	HEADING_1,
	HEADING_2,
	HEADING_3,
	HEADING_4,
	HEADING_5,
	HEADING_6,
	TABLE,
	TABLE_ROW,
	TABLE_CELL,
	OL_LIST,
	UL_LIST,
	LIST_ITEM,
	IMAGE
} from '../../constant/blocks';
// Refactor block tags into a dictionary for cleanliness.
const BLOCK_TAGS = {
	p: PARAGRAPH,
	blockquote: BLOCKQUOTE,
	h1: HEADING_1,
	h2: HEADING_2,
	h3: HEADING_3,
	h4: HEADING_4,
	h5: HEADING_5,
	h6: HEADING_6,
	table: TABLE,
	tr: TABLE_ROW,
	td: TABLE_CELL,
	th: TABLE_CELL,
	ol: OL_LIST,
	ul: UL_LIST,
	li: LIST_ITEM,
	image: IMAGE
	// pre: 'code',
};

export default BLOCK_TAGS;