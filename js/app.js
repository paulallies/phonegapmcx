function list(data){
	$("#emaillist").empty();
	var output = '<ul data-role="listview">';
	$.each(data.Messages, function(key, value){
		output += '<li><a href="#msg" data-transition="slide">';
		output += '<h2>' + value.From.DisplayName + '</h2>';
		output += '<p>' + value.Subject + '</p>';
		output += '<p class="ui-li-aside">' + value.Date + '</p>';
		output += '</a></li>';
	});
	output += '</ul>';
	$("#emaillist").html(output).trigger('create');
	$.mobile.hidePageLoadingMsg();
}

