function startClassiFication(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KUv5ocXyd/model.json", modelReady);

}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);

       random_numberR=Math.floor(Math.random()*255) +1;
       random_numberG=Math.floor(Math.random()*255) +1;
       random_numberB=Math.floor(Math.random()*255) +1;

       document.getElementById("result_label").innerHTML= "I can hear- "+results[0].label;
       document.getElementById("result_confidence").innerHTML= "Accuracy- "+ (results[0].confidence * 100).toFixed(2)+"%";

       document.getElementById("result_label").style.color="rgb("+random_numberR+", "+random_numberG+", "+random_numberB+")";
       document.getElementById("result_confidence").style.color="rgb("+random_numberR+", "+random_numberG+", "+random_numberB+")";

       img1=document.getElementById("cat.gif");
       img2=document.getElementById("cow.gif");
       img3=document.getElementById("dog.gif");
       img4=document.getElementById("roar.gif");
       img5=document.getElementById("background.gif");

       if(results[0].label=="Dog barking"){
           document.getElementById("gif_space").innerHTML=img3;
       }
          else if(results[0].label=="Background Noise"){
            document.getElementById("gif_space").innerHTML=img5;
       }

       else if(results[0].label=="Cat meowing"){
        document.getElementById("gif_space").innerHTML=img1;
   } 

   else if(results[0].label=="mooing"){
    document.getElementById("gif_space").innerHTML=img2;
} 
   else{  
    document.getElementById("gif_space").innerHTML=img4;
}
    
}
}