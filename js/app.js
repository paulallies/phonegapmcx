function list(data){
	$("#emaillist").empty();
	var output = '<ul data-role="listview">';
	 $.each(data, function(key, value){
	 	output += '<li><a href="#msg" data-transition="slide" onclick="showEmail('+value.uid+')">';
	 	output += '<h2>' + value.headers.from[0] + '</h2>';
	 	output += '<p>' + value.headers.subject[0] + '</p>';
	 	output += '<p class="ui-li-aside">' + value.date.split(' ')[0] + '</p>';
	 	output += '</a></li>';
	 });
	output += '</ul>';
	$("#emaillist").html(output).trigger('create');
	$.mobile.hidePageLoadingMsg();
}

function showEmail(id){
	$.getJSON("http://nodeimap.apphb.com/msg/"+id, function(data){
		console.log(data);
	})
}

