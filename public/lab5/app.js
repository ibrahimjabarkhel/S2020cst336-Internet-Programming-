$(document).ready(function(){
    
    showPictures();
        
    //ananymos function
    $("#search").on("click",function(){
      
      showPictures();
      
    });
    
    //or:
    // $("#searchBut").on("click", search);
    
  function showPictures(){  
    $.ajax({

      method: "GET",
      url: "https://pixabay.com/api/",
      dataType: "json",
      data: { 
        "key": "15430243-b1ba391e04c4983614222b24e",
        "orientation": $("#position").val(),
        "q": $("#find").val()
      },
      success: function(result,status) {

        result.hits = _.shuffle(result.hits);
        if ($("#position").val() == 'horizontal'){
          $("#image").html(`Likes: ${result.hits[0].likes}
                                  <br><img id="horizontal" hspace="2" src='${result.hits[0].webformatURL}'>`);
          $("#image2").html(`Likes: ${result.hits[1].likes}
                                  <br><img id="horizontal" hspace="2" src='${result.hits[1].webformatURL}'>`);
          $("#image3").html(`Likes: ${result.hits[2].likes}
                                  <br><img id="horizontal" hspace="2" src='${result.hits[2].webformatURL}'>`);
          $("#image4").html(`Likes: ${result.hits[3].likes}
                                  <br><img id="horizontal" hspace="2" src='${result.hits[3].webformatURL}'>`);
        }
        else{
            //alert(result);
          $("#image").html(`Likes: ${result.hits[0].likes}
                                  <br><img id="vertical" hspace="2" src='${result.hits[0].webformatURL}'>`);
          $("#image2").html(`Likes: ${result.hits[1].likes}
                                  <br><img id="vertical" hspace="2" src='${result.hits[1].webformatURL}'>`);
          $("#image3").html(`Likes: ${result.hits[2].likes}
                                  <br><img id="vertical" hspace="2" src='${result.hits[2].webformatURL}'>`);
          $("#image4").html(`Likes: ${result.hits[3].likes}
                                  <br><img id="vertical" hspace="2" src='${result.hits[3].webformatURL}'>`);
        
        }
      }
    });//ajax
  }
  
});//document ready
