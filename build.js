//build.js: Configuration file for optimizing the bTestAllAsync function. 
/*
*/ 
({
    paths: {
	"log": "lib/log.min"
    },
    exclude: [ "log" ],
    name: "bTestAllAsync",
    out: "test_all_async.min.js"
})
