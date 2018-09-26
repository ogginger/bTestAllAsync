//function.js: Functional Logic.

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
	return promise(function( resolve ) {
		async_every({
			"Set": Input,
			"Function": function( Input ) {
				return promise(function( resolve ) {
					Input.Run().then(function( Result ) {
						resolve( Result );
					});
				});
			}
		}).then(function( Result ) {
			resolve( true );
		}).catch(function( Error ) {
			resolve(false);	
		});	
	});
  };
});
