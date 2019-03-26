import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faIcons from '@fortawesome/free-solid-svg-icons';
import { ICONS } from 'constant';

const Icon = ( { icon } ) => <FontAwesomeIcon icon = { faIcons[ ICONS[ icon ] ] } />;

export default Icon;