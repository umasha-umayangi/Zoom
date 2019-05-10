(function ( $ ) {

	$.fn.textSlider = function ( options ) {

		/* Default settings */
		var settings = $.extend(
			{
				timeout: 2000,
				slideTime: 750
			},
			options 
		);

		var nextItem;

		var currentItem = 0;
		var count = 0;

		this.children('.slider-content').each(
			function () 
			{

				$(this).addClass( 'quote-container' + ( count ) )
					.css(
						{
							//opacity:	   0, 
							paddingTop:	'100px',
							paddingBottom: '0px'
						}
					);

				$(this).hide();

				count++;

			}
		);

		function firstSlide ()
		{

			$('.quote-container' + currentItem ).show().animate({ paddingTop: '50px', paddingBottom: '50px', opacity: 1 }, settings.slideTime);

			setTimeout ( transition, settings.timeout );

		}

		function transition ()
		{

			nextItem = parseInt ( currentItem + 1 );

			if ( nextItem >= count )
				nextItem = 0;

			$('.quote-container' + currentItem ).animate({ paddingTop: '100px', paddingBottom: '0px', opacity: 0 }, settings.slideTime, function () {
				$(this).hide();
				$('.quote-container' + nextItem ).show().animate({ paddingTop: '50px', paddingBottom: '50px', opacity: 1 }, settings.slideTime);
			});

			currentItem = nextItem;

			setTimeout ( transition, settings.timeout );

		}

		return firstSlide ();

	};

}( jQuery ));