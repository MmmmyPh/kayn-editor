const initialEditorState = {
	document: {
		nodes: [
			{
				object: 'block',
				type: 'paragraph',
				nodes: [
					{
						object: 'text',
						leaves: [ { text: '' } ]
					},
				]
			}
		]
	}
};

export default initialEditorState;