import React from 'react';
import { hot } from 'react-hot-loader';
import KaynEditor from '../src/editors/kayn-slate-editor';

const App = () => <KaynEditor />;

export default hot( module )( App );