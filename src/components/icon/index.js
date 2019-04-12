import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faIcons from '@fortawesome/free-solid-svg-icons';
import { ICONS } from 'constant';
// icons
import HeaderOne from './svgs/header-one';
import HeaderTwo from './svgs/header-two';
import HeaderThree from './svgs/header-three';
import HeaderFour from './svgs/header-four';
import HeaderFive from './svgs/header-five';
import HeaderSix from './svgs/header-six';
import Color from './svgs/color';
import Background from './svgs/background';
import TableInsertRow from './svgs/table-insert-row';
import TableInsertColumn from './svgs/table-insert-column';
import TableDeleteRow from './svgs/table-delete-row';
import TableDeleteColumn from './svgs/table-delete-column';

const Icon = ( { icon, ...rest } ) => <FontAwesomeIcon icon = { faIcons[ ICONS[ icon ] ] } { ...rest } />;

export default Icon;

export {
	HeaderOne,
	HeaderTwo,
	HeaderThree,
	HeaderFour,
	HeaderFive,
	HeaderSix,
	Color,
	Background,
	TableInsertRow,
	TableInsertColumn,
	TableDeleteRow, 
	TableDeleteColumn,
};