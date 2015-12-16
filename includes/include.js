$(document).ready(function(){
		function modal(url) {
	      $.ajax({
	        url: url,
	        cache: false,
	        dataType: 'html'
	      })
	      .done(function(data) {
	        $('.contentcontain').html(data);
	        $('.legal_popover').show();
	      });
	    }
	    $('a.legal_trigger').click(function() {
	      modal($(this).attr('href'));
	      return false;
	    });

	    $('.close_legal').click(function() {
	      $('.legal_popover').hide();
	    });
	    
	});