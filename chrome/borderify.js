console.log('starting ------------------------------------------------');

$('.status-actions').each(function(){
	console.log("finding urls");
	var bitRiseUrl = $(this).attr('href');
	console.log(bitRiseUrl);
	var build = bitRiseUrl.substring(29,bitRiseUrl.length);
	console.log("appending...");
	
	
	$(this).parent().append("</br><a class='bitRise' href='http://localhost:3000/?app=28b67274d3e06c46&build="+build+"' style='padding: 5px;'>Check Log</a></br>");;
	
})
