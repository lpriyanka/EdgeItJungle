var myImage = document.getElementById("images/deals.jpg");

var imageArray = ["_images/overlook.jpg","_images/slide1.jpg","_images/slide2.jpg",
          "_images/slide3.jpg","_images/clide4.jpg"];
var imageIndex = 0;

function changeImage() {
  myImage.setAttribute("src",imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,5000);

myImage.onclick =  function() {
  clearInterval(intervalHandle);
};
