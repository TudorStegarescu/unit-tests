require("../object.js");

// describe("simple multiply Function", function() {
// 		it("multiplication", function() {
// 			expect(simpleMultiplyFunction(2, 3)).toEqual(6);
// 		});
// 	});

/***********************************************/
describe("simple callback function", function() {

		it("should not callback if time out is not expired", function() {
			var callback = jasmine.createSpy();
			jasmine.Clock.useMock();
			simpleCallBackFunction(callback);

			jasmine.Clock.tick(50);

			expect(callback).not.toHaveBeenCalled();
		});

		it("should callback when time out expires", function() {
			var callback = jasmine.createSpy();
			jasmine.Clock.useMock();
			simpleCallBackFunction(callback);

			jasmine.Clock.tick(99);

			expect(callback).toHaveBeenCalled();
		});

		it("should callback with parameter", function() {
			var callback = jasmine.createSpy();
			jasmine.Clock.useMock();
			simpleCallBackFunction(callback);

			jasmine.Clock.tick(101);

			expect(callback).toHaveBeenCalledWith("test callback");
		});
});

/***********************************************/

describe("myFunction", function() {
    var myfunc = myNS.myFunction;

    beforeEach(function(){
        spyOn(myfunc, 'init').andCallThrough();
    });

    afterEach(function() {
        myfunc.reset();
    });

    it("should be defined", function() {
        expect(myfunc.init).toBeDefined();
    });


    it("should populate stuff during initialization", function(){
        var stuffLength = 1;
        myfunc.init();
        expect(myfunc.stuff.length).toEqual(stuffLength);
    });

    it("should populate stuff during initialization with test value", function(){
        myfunc.init();
        expect(myfunc.stuff[0]).toEqual('Testing');
    });

	describe("appending strings", function() {
		beforeEach(function(){
			spyOn(myfunc, 'append').andCallThrough();
			myfunc.append('hello ','world');
		});

		it("should be able to append 2 strings", function() {
			expect(myfunc.append).toBeDefined();
		});

		it("tracks that the spy was called", function() {
			expect(myfunc.append).toHaveBeenCalled();
		});

        it("tracks that the spy was called with parameters", function() {
			expect(myfunc.append).toHaveBeenCalledWith('hello ','world');
		});

		it("should append 2 strings", function() {
			expect(myfunc.append('hello ','world')).toEqual('hello world');
		});
	});
});

/***********************************************/

describe("html test", function() {
		beforeEach(function(){
			setHtml();
		});

    afterEach(function() {
			$(".div-style").remove();
		});

		it("should generate html with text 'click me'", function() {

			var myDiv = $(".div-style");
			expect(myDiv.text()).toEqual('click me');
		});

		it("should change text on click event", function() {

			var myDiv = $(".div-style");
			myDiv.trigger("click");

			expect(myDiv.text()).toEqual('clicked');
		});
	});

/***********************************************/
describe("testPlugin", function() {
	beforeEach(function(){
        $("<div/>",{
		  	id:"myPopup"
		  }).appendTo("body");
    });

    afterEach(function() {
        $("#myPopup,.overlay").remove();
    });

	it("should initialise with default text", function() {
		var myPopup = $("#myPopup");
		myPopup.testPlugin();

		expect(myPopup.text()).toEqual('Default Text');
	});


	it("should initialise with custom text", function() {
		var myPopup = $("#myPopup");

		myPopup.testPlugin({
			"text" : "Custom Text"
		});

		expect(myPopup.text()).toEqual('Custom Text');

	});

	it("should initialise with fixed CSS classes", function() {
		var myPopup = $("#myPopup");
		myPopup.testPlugin();

		expect(myPopup.hasClass("popup")).toBeTruthy();
	});

	it("should initialise without overlay panel", function() {
		var myPopup = $("#myPopup");
		myPopup.testPlugin();

		expect($(".overlay").length).toEqual(0);
	});

	it("should create overlay panel when popup is displayed", function() {
		var numberOfOverlayPanels = 1;
		var myPopup = $("#myPopup");

		myPopup.testPlugin({
			"show" : true
		});

		var overlay = $(".overlay");
		expect(overlay.length).toEqual(numberOfOverlayPanels);
	});

	it("should remove after overlay click", function() {
		var numberOfOverlayPanels = 0;
		var myPopup = $("#myPopup");

		myPopup.testPlugin({
			"show" : true
		});

		var overlay = $(".overlay");
		overlay.trigger("click");

		expect($(".overlay").length).toEqual(numberOfOverlayPanels);
	});

});
