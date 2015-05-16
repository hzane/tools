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
			elm.next('ul').toggle();
		},
		file:function(elm){
			var $stage = $('section#main');
			var row = '';
			$stage.append("<h1>bow k</h1>");
			elm.next('div.attributes').find('span').each(function(){
				var name = $(this).attr('data-name');
				var value = $(this).text();
				row += '<div class="row"><span>'+name+':</span><span>'+value+'</span></div>';
			});
				$stage.html(row);

		}
	}
};