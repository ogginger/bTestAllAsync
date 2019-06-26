//bTestAllAsync.js: Functional Logic.

define([
	"async_every",
	"promise",
	"log"
], function(
	async_every,
	promise,
	log
) {
  return function( Input ) {
	var xTestSuite = this;
	var sTestName = "";
	return promise(function( resolve ) {
		if ( Input === undefined ) {
			resolve( false );
		} else {
			var bResult = false;
			async_every({
				"Set": Input,
				"Function": function( Input ) {	
					return promise(function( resolve, reject ) {
						sTestName = Input.Name;
						Input.Run().then(function( Result ) {
							resolve( Result );
						}).catch(function( Error ) {
							reject( Error );
						});
					});
				}
			}).then(function( Result ) {
				bResult = Result;
			}).finally(function() {
				if ( bResult === false ) {
					log( sTestName + " - Failed!", xTestSuite.Debug );
				}

				resolve( bResult );
			});	
		}
	});
  };
});
