//Business Logic
function Place(location, landmark, timeOfYear, notes, image) {
  this.placeLocation = location;
  this.placeLandmark = landmark;
  this.placeTime = timeOfYear;
  this.placeNotes = notes;
  this.placeImage = image;
}

Location.prototype.placeName = function() {
  return this.placeLocation;
}

var placeArray = [];
var inputCount = 0;

//User Interface Logic

$(document).ready(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();
    var inputLocation = $("input#new-location").val();
    var inputLandmark = $("input#new-landmark").val();
    var inputTime = $("input#new-time").val();
    var inputNotes = $("input#new-notes").val();
    var inputImage = $("input#new-image").val();

    var newPlace = new Place(inputLocation, inputLandmark, inputTime, inputNotes, inputImage);

    placeArray.push(newPlace);

    console.log(placeArray);

    $("ul#places").append("<li><span class='place'>" + newPlace.placeLocation + "</span></li>");

    $(".place").last().click(function(){
      inputCount = $(".place").index(this);
      console.log(inputCount);
      $("#show-place").hide();
      $("#show-place").fadeIn();
      $("#show-place h3").text(placeArray[inputCount].placeLocation);
      $(".place-landmark").text(placeArray[inputCount].placeLandmark);
      $(".place-time").text(placeArray[inputCount].placeTime);
      $(".place-notes").text(placeArray[inputCount].placeNotes);
      $(".place-image").text("");
      $(".place-image").append('<img src="' + placeArray[inputCount].placeImage + '">');
      $(".place-link").text("");
      $(".place-link").append('<a href=http://www.tripadvisor.com/"' + placeArray[inputCount].placeLocation + '" target="_blank">' + 'Check out this place on TripAdvisor' + '</a>');

    });

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-time").val("");
    $("input#new-notes").val("");
    $("input#new-image").val("");
  });

  $(".landmarkButton").click(function(){
    var newInput = prompt("Enter new information");
    placeArray[inputCount].placeLandmark = newInput;
    console.log(placeArray[inputCount].placeLandmark);
    $(".place-landmark").text(placeArray[inputCount].placeLandmark);
  });

  $(".timeButton").click(function(){
    var newInput = prompt("Enter new information");
    placeArray[inputCount].placeTime = newInput;
    console.log(placeArray[inputCount].placeTime);
    $(".place-time").text(placeArray[inputCount].placeTime);
  });

  $(".noteButton").click(function(){
    var newInput = prompt("Enter new information");
    placeArray[inputCount].placeNotes = newInput;
    console.log(placeArray[inputCount].placeNotes);
    $(".place-notes").text(placeArray[inputCount].placeNotes);
  });

  $(".imageButton").click(function(){
    var newInput = prompt("Enter new information");
    placeArray[inputCount].placeImage = newInput;
    console.log(placeArray[inputCount].placeImage);
    $(".place-image").text(placeArray[inputCount].placeImage);
  });
});
