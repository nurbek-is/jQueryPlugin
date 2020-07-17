(function($){

	$.fn.stripe = function(options) {		

		// override defaults with options
		var opts = $.extend({}, $.fn.stripe.defaults, options);

		// start with empty set
		var $tables = $()
			// add any tables that are direct entries in current collection
			.add(this.filter('table').get())
			// add ones that are descendants of entries in current collection
			.add(this.find('table').get());
		// now find any tables that are descendants of the tables we found
		var $omit = $tables.find('table');
		// and omit them from the collection
		$tables = $tables.not($omit);

		var oddColor = opts.oddColor ? opts.oddColor : null;
		var evenColor = opts.evenColor ? opts.evenColor : null;

		$tables.each(function() {
				// this finds only grandchildren (table -> table section -> tr)
				var $sections = $(this).children();
				if (oddColor) $sections.children('tr:odd')
					.css('backgroundColor', oddColor);
				if (evenColor) $sections.children('tr:even')
					.css('backgroundColor', evenColor);
		});
		return this;
	};

	$.fn.stripe.defaults = {
		evenColor: '#ddddff'
	}

}(jQuery));