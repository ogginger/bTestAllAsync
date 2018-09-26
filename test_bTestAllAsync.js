//test_bTestAllAsync.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "bTestAllAsync",
	"tests/bTestAllAsync_AsyncTestCollectionWithPassingTest_ResolvesTrue",
	"tests/bTestAllAsync_AsyncTestCollectionWithPassingTestAndFailingTest_ResolvesFalse"
], function(
  TestSuite,
  log,
  bTestAllAsync,
	bTestAllAsync_AsyncTestCollectionWithPassingTest_ResolvesTrue,
	bTestAllAsync_AsyncTestCollectionWithPassingTestAndFailingTest_ResolvesFalse
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_bTestAllAsync initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "bTestAllAsync" );
	xTestSuite.add( bTestAllAsync_AsyncTestCollectionWithPassingTest_ResolvesTrue );
	xTestSuite.add( bTestAllAsync_AsyncTestCollectionWithPassingTestAndFailingTest_ResolvesFalse );
      xTestSuite.test();
    }
  });
});
