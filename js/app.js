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

function getEmailHeaders(c){
	c += 1;
	$.mobile.showPageLoadingMsg("a", "Loading...");
	$.ajax({
		error: function(){
			if(c === 3){
				alert("data not available at this time");
				$.mobile.hidePageLoadingMsg();
			}
			else{
				console.log(c);
				getEmailHeaders(c);
			}
		},
	    url: "http://nodeimap.apphb.com/count/10",
	    success: function(data) { 
	    	list(data); 
	    }
	});
}

function showEmail(uid){
	var from  = $("li[uid="+uid+"] h2.from").html();
	var subject  = $("li[uid="+uid+"] p.subject").html();
	var date  = $("li[uid="+uid+"] p.date").html();
	$("#msg .from").html(from);
	$("#msg .subject").html(subject);
	$("#msg .date").html(date);
	 $("#body").html('<iframe src="http://nodeimap.apphb.com/msg/'+uid+'" style="width:100%;height:1000px; border:0"></iframe>​​​​​​​​​​');
	// $.ajax({
	//  	error: function(){alert("some error occured")},
	//      url: "http://nodeimap.apphb.com/msg/"+uid,
	//      success: function(data) { $("#body").html(data); }
	//  });
}

