import React from 'react';
import HistoryButton from 'components/historyButton';

const UNDO = 'UNDO';

const KaynUndoButton = ( props ) => <HistoryButton type = { UNDO } { ...props } />;

export { KaynUndoButton };