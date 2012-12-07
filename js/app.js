function list(data){
	$("#emaillist").empty();
	var output = '<ul data-role="listview" data-filter="true">';
	 $.each(data, function(key, value){
	 	output += '<li uid="'+value.uid+'" ><a href="#msg" data-transition="slide" onclick="showEmail('+value.uid+')">';
	 	output += '<h2 class="from">' + value.headers.from[0] + '</h2>';
	 	output += '<p class="subject">' + value.headers.subject[0] + '</p>';
	 	output += '<p class="ui-li-aside date">' + value.date.split(' ')[0] + '</p>';
	 	output += '</a></li>';
	 });
	output += '</ul>';
	$("#emaillist").html(output).trigger('create');
	$.mobile.hidePageLoadingMsg();
}

function showEmail(uid){
	var from  = $("li[uid="+uid+"] h2.from").html();
	var subject  = $("li[uid="+uid+"] p.subject").html();
	var date  = $("li[uid="+uid+"] p.date").html();
	$("#msg .from").html(from);
	$("#msg .subject").html(subject);
	$("#msg .date").html(date);
	$("#body").html("Loading...");
	$.getJSON("http://nodeimap.apphb.com/msg/"+uid, function(data){
		$("#body").html(data.headers.received);
	})
}

