var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition=new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function run (event){
    console.log(event);
     var content = event.results [0] [0].transcript;

     console.log(content);

     document.getElementById("textbox").innerHTML = content;

     if(content == "take my selfie"){
         console.log("take my selfie ");
         speak();
     }
    
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Takinh your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(
        function(){
            take_snapshot();
            Save();

        },5000
    );


    

}
var camera = document.getElementById("camera");
 Webcam.set({
     width : 340,
     height : 240,
     image_format : 'jpeg',
     jpeg_quality:90
     });

     function take_snapshot(){
         Webcam.snap(function (data_uri) {
             document.getElementById("result").innerHTML= "<img id='captured_image' src = "+data_uri+">";
         });
     }

     function Save(){
         link = document.getElementById("link");
         image = document.getElementById("captured_image").src;
         link.href = image;
         link.click();

     }