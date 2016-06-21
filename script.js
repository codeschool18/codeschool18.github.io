$(document).ready(function(){
	
	$(".submit").click(function(){
		var word = $(".inputToDo").val();
		if(word.length != 0){	
			var id = word.replace(/\s/g, '') + "1";
			var appended = "<p class=\"toDo\" id=\"" + id + "\">" + word + "</p>"; 
			$(".Unfinished").append(appended);
			
			$(".inputToDo").val("");
			
			$("#" + id).click(function(){
				$(".Finished").append(this);
				//$(this).hide();
			});
		}
		else{
			alert("No input");
		}
	});
	$(".tabs p").click(function(){
		if($(this).attr('class') == "All"){
			$(".Unfinished").show();
			$(".Finished").show();
			$(".tabs p").css("color", "black");
			$(".All").css("color", "white");
		}
		else if($(this).attr('class') == "U"){
			$(".Unfinished").hide();
			$(".Finished").show();
			$(".tabs p").css("color", "black");
			$(".U").css("color", "white");
		}
		else{
			$(".Unfinished").show();
			$(".Finished").hide();
			$(".tabs p").css("color", "black");
			$(".F").css("color", "white");
		}
		
	});
});