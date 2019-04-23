import {
	BOLD,
	ITALIC,
	CODE_IN_LINE,
	STRIKETHROUGH,
	UNDERLINE,
	SUP,
	SUB,
} from '../../constant/marks';

// Add a dictionary of mark tags.
const MARK_TAGS = {
	strong: BOLD,
	em: ITALIC,
	i: ITALIC,
	u: UNDERLINE,
	code: CODE_IN_LINE,
	s: STRIKETHROUGH,
	sub: SUB,
	sup: SUP
};

export default MARK_TAGS;