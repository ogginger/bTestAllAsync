//bTestAllAsync_AsyncRejects_ResolvesFalse.js: Testing logic.

define([
	"log",
	"bTestAllAsync",
	"promise",
	"xGenerateAsyncTest"
], function(
	log,
	bTestAllAsync,
	promise,
	xGenerateAsyncTest
) {
	return {
		"Async": true,
		"Name":"bTestAllAsync_AsyncRejects_ResolvesFalse",
		"Input": [xGenerateAsyncTest({
			"Async": true,
			"Name": "Test_AsyncFunctionRejects",
			"Input": undefined,
			"Function": function() {
				return promise(function( resolve, reject ) {
					reject({ "Message": "Error" });
				});
			},
			"ExpectedOutput": true,
			"ExceptionTest": false,
			"Debug": false
		})],
		"Function": bTestAllAsync,
		"ExpectedOutput": false,
		"Debug": true
	};
});
