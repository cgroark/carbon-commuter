console.log('routing reached')

$(".delete-link").click(function(e){
	e.preventDefault();
	$.ajax({
		url: $(this).attr("href"),
		method: "DELETE"
	}).done(function(data){
		window.location.href = "/trips"
	});
});