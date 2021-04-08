const inpFile = document.getElementById('inpFile');
const previewContainer = document.getElementById('imagePreview');
const previewImage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");

function pro1(){
   document.getElementById("inpFile").click();
}

inpFile.addEventListener("change", function(){
  const file = this.files[0];
  // console.log(file);
  if (file) {
    const reader = new FileReader();

    previewDefaultText.style.display="none";
    previewImage.style.display="block";

    reader.addEventListener("load", function(){
      // console.log(this);
      previewImage.setAttribute("src", this.result);
    });

    reader.readAsDataURL(file);

  } else {
    previewDefaultText.style.display=null;
    previewImage.style.display=null;
    previewImage.setAttribute("src","");
  }
});

var image= document.getElementById('imgId');
// console.log(image);
var range1 = document.getElementById("Filter1");
var range2 = document.getElementById("Filter2");
var range3 = document.getElementById("Filter3");
var range4 = document.getElementById("Filter4");
var range5 = document.getElementById("Filter5");
var range6 = document.getElementById("Filter6");
function ChangeFilter1() {

    image.style.filter = "blur("+range1.value + "px)";
    console.log(range1.value);

    };

function ChangeFilter2() {


    image.style.filter = "brightness("+range2.value + "%)";
    console.log(range2.value);


};

function ChangeFilter3() {


    image.style.filter = "sepia("+range3.value + "%)";
    console.log(range3.value);


};

function ChangeFilter4() {


    image.style.filter = "opacity("+range4.value + "%)";
    console.log(range4.value);

};

function ChangeFilter5() {


    image.style.filter = "invert("+range5.value + "%)";
    console.log(range5.value);


};

function ChangeFilter6() {


    image.style.filter = "saturate("+range6.value + "%)";
    console.log(range6.value);


};
