import React from 'react';
import HistoryButton from 'components/historyButton';

const UNDOS = 'UNDOS';

const KaynUndoButton = ( props ) => <HistoryButton type = { UNDOS } { ...props } />;

export { KaynUndoButton };