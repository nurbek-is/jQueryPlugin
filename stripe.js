var Globals = {
	evenColor: "#ddddff"
};
(function($){
	Globals.stripe = function(query, evenColor, oddColor) {		
		// start with empty set
		var $tables = $()
			// add any tables that are direct entries in current collection
			.add($(query).filter('table').get())
			// add ones that are descendants of entries in current collection
			.add($(query).find('table').get());
		// now find any tables that are descendants of the tables we found
		var $omit = $tables.find('table');
		// and omit them from the collection
		$tables = $tables.not($omit);
		
		$tables.each(function() {
				// this finds only grandchildren (table -> table section -> tr)
				var $sections = $(this).children();
				var oddClr = oddColor || Globals.oddColor;
				if (oddClr) $sections.children('tr:odd')
					.css('backgroundColor', oddClr);
				var evenClr = evenColor || Globals.evenColor;
				if (evenClr) $sections.children('tr:even')
					.css('backgroundColor', evenClr);
		});		
	};
}(jQuery));