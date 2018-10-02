//bTestAllAsync_NoArguments_ResolvesFalse.js: Testing logic.

define([
	"bTestAllAsync",
	"promise"
], function(
	bTestAllAsync,
	promise
) {
	return {
		"Async": true,
		"Name":"bTestAllAsync_NoArguments_ResolvesFalse",
		"Input": undefined,
		"Function": bTestAllAsync,
		"ExpectedOutput": false
	};
});
