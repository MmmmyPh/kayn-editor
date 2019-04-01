import React from 'react';
import HistoryButton from 'components/historyButton';

const REDO = 'REDO';

const KaynRedoButton = ( props ) => <HistoryButton type = { REDO } { ...props } />;

export { KaynRedoButton };