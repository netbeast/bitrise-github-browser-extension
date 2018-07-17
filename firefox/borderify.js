document.body.style.border = "5px solid red";

console.log('starting ------------------------------------------------');

//var bitRiseDetails= $('.merge-status-list')

//$('.status-actions').parent().append("</br><a class='bitRise' style='padding: 5px;'>Check Log</a></br>");

$('.status-actions').each(function(){
	console.log("finding urls");
	var bitRiseUrl = $(this).attr('href');
	console.log(bitRiseUrl);
	var build = bitRiseUrl.substring(29,bitRiseUrl.length);
	console.log("appending...");
	
	
	$(this).parent().append("</br><a class='bitRise' href='http://localhost:3000/?app=28b67274d3e06c46&build="+build+"' style='padding: 5px;'>Check Log</a></br>");;
	
})
	
	
	
	//$(this).parent().append("</br><a class='bitRise' href='http://localhost:3000/?app=28b67274d3e06c46&build="+build+"&Token=N-ia-Bd_AJF9hbvnleuYAafviM5ejNhoiWWZgwDjYBiwvOALKwOkLwSqdd52sWQtJxalrweoe9o-athajEN_YA' style='padding: 5px;'>Check Log</a></br>");;
	
	//var bitRiseUrl = $(this).closest('.bitRise').attr('href','http://www.google.com/');
	//console.log(bitRiseUrl);
	
	//var build = bitRiseUrl.substring(29,bitRiseUrl.length);
	//console.log(build);
	
	//$(this).attr("href", "http://www.google.com/");
	
	//details.parent().append("</br><a class="bitRise" style='padding: 5px;'>Check Log</a></br>");



//console.log(bitRiseDetails.find('.merge-status-item.d-flex.flex-items-baseline').next().find('a.status-actions').attr('href'));
//console.log(bitRiseDetails.find('.merge-status-item.d-flex.flex-items-baseline').next().next().find('a.status-actions').attr('href'));
/*

var bitRiseUrl = $('a.status-actions').attr('href');
console.log(bitRiseUrl);
console.log(bitRiseUrl.length);

var build = bitRiseUrl.substring(29,bitRiseUrl.length);

console.log(build);



*/