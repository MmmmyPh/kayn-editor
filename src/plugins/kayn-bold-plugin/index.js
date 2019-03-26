import basicMarkPlugin from 'plugins/kayn-basic-plugin/basicMarkPlugin';
import { BOLD } from 'constant/marks';

const KaynBoldPlugin = ( options ) => basicMarkPlugin( 'mod+b', { type: BOLD, tagName: 'strong', className: 'kayn__bold', ...options } );

export default KaynBoldPlugin;