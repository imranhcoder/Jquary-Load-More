/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/   

$(function () {
    $(".box").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".box:hidden").slice(0, 2).slideDown();
		
        if ($(".box:hidden").length == 0) {
            $("#loadMore").fadeOut('10000');
            alert('anything load');
        }
		
		
        //if ($(".box").length>=9){
			//$("#loadMore").hide();
		//}
    });
			
});