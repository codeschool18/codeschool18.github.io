$(document).ready(function(){
	
	$(".submit").click(function(){
		var word = $(".inputToDo").val();
		if(word.length != 0){	
			var id = word.replace(/\s/g, '') + "1";
			var appended = "<div class=\"toDo\" id=\"" 
			+ id + "\"><p class=\"word\">" 
			+ word + "<strong class=\"delete\">  x</strong></p></div>"; 
			$(".Unfinished").append(appended);
			
			$(".inputToDo").val("");
			
			$("#" + id).click(function(){
				$(".Finished").append(this);
				//$(this).hide();
			});
			
			$(".delete").click(function(){
				$("#" + id).remove();
			});
		}
		else{
			$(".noInput").fadeIn(500).delay(500).fadeOut(500);
			//break;
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