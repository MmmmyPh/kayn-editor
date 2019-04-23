import KaynEditor, { plainDeserialize, plainSerialize } from './editors/kayn-slate-editor';
import html from './serializer/html';

const htmlSerialize = html.serialize;
const htmlDeserialize = html.deserialize;

export default KaynEditor;

export {
	htmlDeserialize, htmlSerialize,
	plainDeserialize, plainSerialize,
};