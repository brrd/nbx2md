function nbx2md (data) {
	const separator = "\n\n";
	const title = `# ${data.title}`;
	const lists = data.lists || [];

	const contents = lists.reduce((previousValue, list) => {
		previousValue.push(`## ${list.title}`);
		const contents = list.notes.map(({text, raw}) => (raw ? "### " : "") + text);
		return previousValue.concat(contents);
	}, [ title ]);

	const md = contents.join(separator);
	return md;
}

module.exports = nbx2md;