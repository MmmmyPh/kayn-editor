import { createContext } from 'react';

export const KaynValueContext = createContext( {
	value: null,
	setValue: () => {},
} );