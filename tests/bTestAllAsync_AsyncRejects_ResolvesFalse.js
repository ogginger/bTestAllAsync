//bTestAllAsync_AsyncRejects_ResolvesFalse.js: Testing logic.

define([
	"TestSuite",
	"bTestAllAsync",
	"promise"
], function(
	TestSuite,
	bTestAllAsync,
	promise
) {
	return {
		"Async": true,
		"Name":"bTestAllAsync_AsyncRejects_ResolvesFalse",
		"Input": function() {

			var xTestSuite = new TestSuite();
			xTestSuite.add({
				"Async": true,
				"Name": "FailingAsync",
				"Input": undefined,
				"Function": function() {
					return promise(function( resolve, reject ) {

						reject({ "Message": "Error" });
					});
				},
				"ExpectedOutput": true
			});
			return promise(function( resolve ) {
				resolve( xTestSuite.get("AsyncTestCollection") );
			});
		},
		"Function": bTestAllAsync,
		"ExpectedOutput": false
	};
});
