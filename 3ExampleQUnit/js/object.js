if (typeof myNS == 'undefined') { myNS = {}; }

myNS.myFunction = {
    //empty stuff array, filled during initialization
    stuff: [],

    init: function init() {
        this.stuff.push('Testing');
    },
    reset: function reset() {
        this.stuff = [];
    },
    //will add new functionality here later
	append: function append(string1, string2) {
		return string1 + string2;
	}
};

myNS.myFunction.init();

function simpleMultiplyFunction(a,b)
{
	return a*b;
}

function simpleCallBackFunction(callBack)
{
	if(typeof(callBack) == "function")
	{
		setTimeout(function(){
			callBack("test callback");
		}, 100);
	}
}

function setHtml()
{
	$("<div/>", {
	    "class": "div-style",
	    text:"click me",
		click:function(){
			$(this).text("clicked");
		}}
	 ).appendTo("body");
}

; (function ($, window, document, undefined) {
    var pluginName = "testPlugin",
        defaults = {
			"text":"Default Text",
			"show":false
		};

    function testPlugin(element, options) {
        this.element = element;
        this.$element = $(element);
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    testPlugin.prototype = {

		init: function () {
			this.$element.addClass("popup").html(this.options.text);
			if(this.options.show){
				this.showPopup();
			}
			return this;
		},

		showPopup : function(){
			var base = this;
			if($(".overlay").length==0){
				$("<div/>", {
								"class":"overlay"
				}).appendTo("body")
				.on("click", function(){
					base.closePopup();
				});
			}
			this.$element.addClass("open");
		},

		closePopup: function(){
			this.$element.removeClass("open");
			$(".overlay").remove();
		}
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new testPlugin(this, options));
            }
        });
    };


})(jQuery, window, document);
