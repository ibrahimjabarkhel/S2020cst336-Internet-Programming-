
let openLibrary = function(){
  $("#image").empty();
  $("#bookInfo").empty();

  var isbnNumber = $("#ISBN_val").val();


  $.ajax({
    url: "https://openlibrary.org/api/books",
    type: "GET",
    dataType: "json",

    data : {
      "bibkeys" : "ISBN:" + isbnNumber,
      "format" : "json",
      "jscmd" : "data"
    },

    success: function(data){

      var obj = "ISBN:" + isbnNumber;
      console.log(data);



      $("#image").html("<img class=\"cover\" src=\""+data[obj].cover.medium+"\" >");

      $("#bookInfo").append("<br>Title : " + data[obj].title );
      $("#bookInfo").append("<br>Author : " + data[obj].authors[0].name );
      $("#bookInfo").append("<br>Publish :  " + data[obj].publish_date );
      $("#bookInfo").append("<br>publisher : " +data[obj].publishers[0].name );
      $("#bookInfo").append("<br>ISBN : " + data[obj].identifiers.isbn_10 );
      $("#bookInfo").append("<br>Pages :  " + data[obj].number_of_pages);



  
    
    },
    error: function(err){
      console.log(err);
    }
  });
}
