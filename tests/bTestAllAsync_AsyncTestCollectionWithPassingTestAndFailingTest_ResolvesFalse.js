//bTestAllAsync_TestCollectionWithPassingTestAndFailingTest_ResolvesFalse.js: Testing logic.

define([
	"bTestAllAsync",
	"promise",
	"xGenerateAsyncTest",
	"log"
], function(
	bTestAllAsync,
	promise,
	xGenerateAsyncTest,
	log
) {
	return {
		"Async": true,
		"Name":"bTestAllAsync_TestCollectionWithPassingTestAndFailingTest_ResolvesFalse",
		"Input": [ 
			xGenerateAsyncTest({
				"Async": true,
				"Name": "PassingAsyncTest",
				"Input": undefined,
				"Function": function( Input ) {
					return promise(function( resolve ) {
						resolve( true );
					});
				},
				"ExpectedOutput": true
			}),
			xGenerateAsyncTest({
				"Async": true,
				"Name": "FailingAsyncTest",
				"Input": undefined,
				"Function": function( Input ) {
					return promise(function( resolve ) {
						resolve( false );
					});
				},
				"ExpectedOutput": true
			})
		],
		"Function": bTestAllAsync,
		"ExpectedOutput": false,
		"Comparator": {
			"Debug": false
		}
	};
});
