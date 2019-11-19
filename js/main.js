
var dateNow = new Date($.now());
var formattedDate = dateNow.getHours() + ":" + dateNow.getMinutes();

    /*function deletee(id){
      $.ajax({           
        type: "DELETE",
        url: "/user/" + id,
      }).done(function( clearRecord ) {
        $('#' + id).remove();
        alert('This user is deleted ' + id)
      });
    }*/

$(document).ready(function() {
	
			//Function to delete the particular record
			deletee = function(id){
				var newData = $.post( "/user/" + id, function(response) {
				console.log( "succesfully deleted the record" );
				})
				.done(function() {
				console.log( "succesfully deleted the record" );
				})
				.fail(function(error) {
				console.log( "error during deletion" );
				})
				.always(function() {
				console.log( "Finished deleting record" );
				loadData();
				
			});}
			
			//Function to Load the data to display
			loadData = function(event){
				console.log("worked");
               $.getJSON('/users', function(data) {
				   $('#enteredRecords').empty();
				   $.each(data.records, function(index, value) {
					   var deleteBtn = '<input style="display: inline" onclick="deletee(\''+ value.id +'\')" type="button" id="cancelRoomBtn" class="btn btn-danger" value="Cancel" />'
					   
						$('#enteredRecords').append('<span>'+formattedDate + '-' + value.fullName + ',' + value.major + ','+ value.startYear + deleteBtn+'</span><br />'); 
						
					});
                  
               });
            };
				
			//Click of Load data this method is called 
            $("#loadRec").click(loadData);
			
			//On click of add button new record is added based on some conditions like year checking
			$("#addRec").click(function(event){
				const fullName = document.getElementById('fullName').value
				var major = document.getElementById('major').value
				var startYear = document.getElementById('startYear').value
				// year check
				if (startYear < 2000) {
					window.alert('Incorrect year: ' + startYear)
					return
				}
				var newEntry = {
					fullName: fullName,
					major: major,
					startYear: startYear
				}
		
				var newData = $.post( "/user/", newEntry, function() {
				console.log( "Added the record" );
				})
				.done(function() {
				console.log( "successfully added the record" );
				})
				.fail(function(error) {
				console.log( "Error during addding record" );
				})
				.always(function() {
				console.log( "Finished adding new record" );
				});
		
		/*$.ajax({           
        type: "POST",
        url: "/user/",
		data: newEntry,
		success: duccess
      }).done(function( msg ) {
        alert('deleted user ')
      });*/
		
		/* $.post("/user", newEntry, function(newEntry)
		 {
			 console.log(newEntry);
		 }, function(failed){
			 console.log(failed)
		 });*/
		/*
		
               $.getJSON('/users', function(data) {
				   
				   data.records.push(newEntry);
				   $.ajax({
                url: '/users.json',
                type: 'POST',
                dataType: 'json',
                data: JSON.stringify(data),
            }).done(function(result) {

                if(result == 'Success'){

                   alert('Item succesfully added')

                }else{
                    alert('Could not add the item')
                }

            })
				   
                  
               });*/
			   
			   
			   
            });
               
         }); 