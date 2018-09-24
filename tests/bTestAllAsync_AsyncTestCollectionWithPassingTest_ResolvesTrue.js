//bTestAllAsync_AsyncTestCollectionWithPassingTest_ResolvesTrue.js: Testing logic.

define([
	"bTestAllAsync",
	"xGenerateAsyncTest",
	"promise",
	"log"
], function(
	bTestAllAsync,
	xGenerateAsyncTest,
	promise,
	log
) {
	return {
		"Async": true,
		"Name":"bTestAllAsync_AsyncTestCollectionWithPassingTest_ResolvesTrue",
		"Input": [ xGenerateAsyncTest({
			"Async": true,
			"Name": "PassingAsyncTest",
			"Input": undefined,
			"Function": function() {
				return promise(function( resolve ) {
					resolve( true );
				});
			},
			"ExpectedOutput": true
		})],
		"Function": bTestAllAsync,
		"ExpectedOutput": true
	};
});
