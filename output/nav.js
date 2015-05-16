$(document).ready(function(){
	var $sidebar = $('#sidebar');

	$sidebar.find('a').click(function(){
		var linkType = $(this).parent('li').attr('class');
		nav.click[linkType]($(this));
	});
});


var nav = {
	click:{
		folder:function(elm){
			console.log("??");
			elm.next('ul').toggle();
		},
		file:function(elm){
			var $stage = $('section#main');
			var li = elm.parent('li');
			var attributes = li.find('ul.attributes').html();
				$stage.html(attributes);
				if(attributes.length){
					elm.next('ul').toggle();

				}

		}
	}
};