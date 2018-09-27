//build.js: Configuration file for optimizing the bTestAllAsync function. 
/*
*/ 
({
    paths: {
	"log": "lib/log.min",
	"jquery": "empty:",
	"underscore": "lib/underscore.min",
	"backbone": "lib/backbone.min",
	"rsvp": "lib/rsvp.min",
	"promise": "lib/promise.min",
	"AsyncIterator": "lib/async_iterator.min",
	"async_every": "lib/async_every.min",
	"validate": "lib/validate.min",
	"AsyncValidate": "lib/async_validate.min"
    },
    exclude: [ 
	"log", 
	"jquery", 
	"underscore", 
	"backbone", 
	"rsvp", 
	"promise", 
	"AsyncIterator", 
	"async_every",
	"validate",
	"AsyncValidate" 
    ],
    name: "bTestAllAsync",
    out: "test_all_async.min.js"
})
