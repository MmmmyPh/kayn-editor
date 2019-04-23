import Html from 'slate-html-serializer';
import blockRules from './blockRules';
import inlineRules from './inlineRules';
import markRules from './markRules';

const rules = [
	...blockRules,
	...inlineRules,
	...markRules
];

const html = new Html( { rules } );

export default html;