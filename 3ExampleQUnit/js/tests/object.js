module( "simple multiply Function");

test("simple multiply Function", function() {
	equal( simpleMultiplyFunction(2, 3), 6, "should multiply 2 integer");
});
/******************************************/
module( "simple callback function");

asyncTest("simple callback Function", function() {
	simpleCallBackFunction(function(str){
		ok(true, "function is called back");
		equal( str, "test callback", "result is 'test callback'");
		start();
	})
});
/******************************************/
var myfunc = myNS.myFunction;
module( "myFunction", {

	setup: function() {
		myfunc.reset();
	},
	teardown: function() {
		myfunc.reset();
	}
});

test("should populate stuff during initialization", function() {
	myfunc.init();
	equal( myfunc.stuff.length, 1, "stuff length is 1");
	equal(myfunc.stuff[0], 'Testing');
	equal( myfunc.append('hello ','world'), 'hello world', "should append 2 strings");
});



module( "html test", {

	setup: function() {
		setHtml();
	},
	teardown: function() {
		$(".div-style").remove();
	}
});

test("should generate html with text 'click me'", function() {
	var myDiv = $(".div-style");

	equal(myDiv.text(), 'click me', "text shoult be 'click me'");
	myDiv.trigger("click");
	equal(myDiv.text(), 'clicked', "text shoult be 'clicked'");
});

module( "testPlugin", {

	setup: function() {
		 $("<div/>",{
		  	id:"myPopup"
		  }).appendTo("body");
	},
	teardown: function() {
		$("#myPopup").remove();
		$(".overlay").remove();
	}
});

test("should init", function() {
	var myPopup = $("#myPopup");
	myPopup.testPlugin();

	equal(myPopup.text(), 'Default Text', "text shoult be 'Default Text'");
	ok(myPopup.hasClass("popup"), "Has 'popup' class");
	equal( $(".overlay").length, 0, "overlay is not generated" );
});

test("should init with custom text", function() {
	var myPopup = $("#myPopup");
	myPopup.testPlugin({
		"text" : "Custom Text"
	});

	equal(myPopup.text(), 'Custom Text', "text shoult be 'Custom Text'");
});

test("should create overlay", function() {
	var myPopup = $("#myPopup");
	myPopup.testPlugin({
		"show" : true
	});

	equal($(".overlay").length, 1, "should create overlay");
});

test("should create overlay and remove after click",  function() {
	var myPopup = $("#myPopup");
	myPopup.testPlugin({
		"show" : true
	});
	equal($(".overlay").length, 1, "overlay is created");
	var overlay = $(".overlay");
	overlay.trigger("click");
	equal($(".overlay").length, 0, "is removed overlay");
});
