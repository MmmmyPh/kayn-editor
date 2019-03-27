import React from 'react';
import Button from 'components/button';
import Icon from 'components/icon';
import TITLE from 'constant/button-title';

const MarkButton = ( { type, ...rest } ) => <Button type = { type.toLowerCase() } data-title = { TITLE[ type ] } { ...rest }><Icon icon = { type } /></Button>;

export default MarkButton;