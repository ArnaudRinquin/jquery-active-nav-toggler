;(function ( $, window, document, undefined ) {

  var pluginName = "activeNavToggler",
    defaults = {
    action: "enable",
    activeClass: "active",
    childSelector: "li"
  };

  function Plugin ( element, options ) {
    this.element = element;
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function () {
      if (this.options.action === "disable") {
        this.disable(this.element);
      } else {
        this.enable(this.element, this.options);
      }
    },
    enable: function (container, options) {
      var $container = $(container),
          currentlyActiveSelector = options.childSelector + "." + options.activeClass;

      // Delegate click event handler
      $container.on("click.activeTabs", options.childSelector, function () {
        $container.find(currentlyActiveSelector).removeClass(options.activeClass);
        $(this).addClass(options.activeClass);
      });
    },
    disable: function (container) {
      return $(container).off("click.activeTabs");
    }
  };

  $.fn[ pluginName ] = function ( options ) {
    return this.each(function() {
      new Plugin( this, options );
    });
  };

})( jQuery, window, document );
