$(document).ready(function(){
            
    //ananymos function
    $("#search").on("click",function(){
      
      showPictures();
      
    });
    
  function showPictures(){  

    for (var i=1; i<7; i++){
      $("#image"+i).html("");
    }


    $.ajax({

      method: "GET",
      url: "https://api.unsplash.com/search/photos/",
      dataType: "json",
      data: { 
        "client_id" : "YOWNTKAQL60jlnNVZXmhq0rzaT-wW-qqCZxbsHz1tfE",
        "query": $("#find").val(),
        "per_page" : "100"
      },
      success: function(object,status) {

        console.log(object);
        // Images
        for (var i=0; i<9; i++){
          var num = randomNumber(0,object.results.length-1);

          if (object.results[num].likes > 0 && object.results[num].likes <= 100){
            showPic(object, num, "pics/toungue.png", i+1);
          }else if (object.results[num].likes > 100 && object.results[num].likes <= 500){
            showPic(object, num, "pics/wow.png", i+1);

          }
          else if (object.results[num].likes > 500 && object.results[num].likes <= 1000){
            showPic(object, num, "pics/smileyHeart.png", i+1);
          }
          else if (object.results[num].likes > 1000 && object.results[num].likes <= 10000){
            showPic(object, num, "pics/heart.png", i+1);
          }

        }


      }
    });//ajax
  }

  function showPic(object, a, str, i){

    if ($("#position").val() == "horizontal" ){
      $("#image"+i).html(`Likes: ${object.results[a].likes}
                        <br><img id="horizontal" hspace="10" src='${object.results[a].urls.small}'>
                        <br><img class="emoji" src=${str} >`);
    }else{
      $("#image"+i).html(`Likes: ${object.results[a].likes}
                        <br><img id="vertical" hspace="10" src='${object.results[a].urls.small}'>
                        <br><img class="emoji" src=${str} >`);
    }

  }


  // Function to generate random number  
  function randomNumber(min, max) {  
      min = Math.ceil(min); 
      max = Math.floor(max); 
      return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  
});//document ready
