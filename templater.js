function templater(templateString, dataObj) {
	return templateString.replace(/\$\{(\w+)\}/g, (a, b) => dataObj[b])
}

templater('${who} ${action} ${what}', {
 who: 'mama',
 action: 'mila',
 what: 'ramu'
});
