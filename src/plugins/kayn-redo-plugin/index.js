import React from 'react';
import HistoryButton from 'components/historyButton';

const REDOS = 'REDOS';

const KaynRedoButton = ( props ) => <HistoryButton type = { REDOS } { ...props } />;

export { KaynRedoButton };