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

const Icon = ( { icon } ) => <FontAwesomeIcon icon = { faIcons[ ICONS[ icon ] ] } />;

export default Icon;

export {
	HeaderOne,
	HeaderTwo,
	HeaderThree,
	HeaderFour,
	HeaderFive,
	HeaderSix,
};