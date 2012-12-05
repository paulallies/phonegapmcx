function list(data){
	var output = '';
	$.each(data, function(key, value){
		output += '<li><a href="#msg">';
		output += '<h2>' + value.headers.from[0] + '</h2>';
		output += '<p>' + value.headers.subject[0] + '</p>';
		output += '<p class="ui-li-aside">' + value.date + '</p>';
		output += '</a></li>';
	});
	$("#emaillist").append(output);
}