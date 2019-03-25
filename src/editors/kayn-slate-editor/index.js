import React from 'react';
import PropTypes from 'prop-types';

const KaynEditor = () => {
	return 'kayn-editor';
};

KaynEditor.propTypes = {
	value: PropTypes.object,
	onChange: PropTypes.func,
};

export default KaynEditor;