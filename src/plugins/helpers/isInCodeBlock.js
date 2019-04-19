import { CODE } from 'constant/blocks';

export default ( editor ) => {
	if( editor ) {
		const { value: { document, startText } } = editor;
		const findBlock = document.getClosest(
			startText.key,
			block => block.type === CODE
		);
		return Boolean( findBlock );
	}
	return false;
};
