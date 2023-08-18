// file


const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#end');
const speakBtn = document.querySelector('#speak');

//speech recogition setup
const SpeechRecognition = 
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();


// sr start
recognition.onstart = function(){
  console.log("vr active");
};

//result
 recognition.onresult = function(event){
  let current = event.resultIndex;
  let transcript = event.results[current][0].transcript;
  console.log(event);
 transcript = transcript.toLowerCase();
 
if(transcript.includes("hello rolex")){
  readOut("hello sir");
}
if (transcript.includes("open youtube")){
  readOut("opening youtube sir!");
  window.open("https://www.youtube.com/")
}
if (transcript.includes("open google")){
  readOut("opening google sir!");
  window.open("https://www.google.com/");
}
  //google search
  if (transcript.includes("search for")){
    readOut("here's the result")
    let input = transcript.split(""); //
    input.splice(0,11) //
    input.pop(); // 
    input = input.join("").split(" ").join("+"); // 
    console.log(input); // it will transfer voice into transcript
    window.open(`https://www.google.com/search?q=${input}`)
  }
  //youtube search
  if (transcript.includes("play")){
    readOut("playing")
    let input = transcript.split("");
    input.splice(0,11)
    input.pop();
    input = input.join("").split(" ").join("+");
    console.log(input);
    window.open(`https://www.youtube.com/results?search_query=${input}`)
  }
};


// end
recognition.onend = function (){
 
  console.log("vr deactive");
};
//sr continuos 
recognition.continuous = true ;
startBtn.addEventListener('click', () => {
  recognition.start();
});

stopBtn.addEventListener('click', () => {
  recognition.stop();
});


function readOut(message){
  const speech = new SpeechSynthesisUtterance();
  // diff voice
  const allVoices = speechSynthesis.getVoices()
  speech.text = message;
  // speech.text = ' helo';
  speech.voice = allVoices[8]
  speech.volume = 6;

  // window.speechSynthesis.speak(speech)

  window.speechSynthesis.speak(speech);
  console.log("speaking out");
}

speakBtn.addEventListener("click",() => {
  readOut("hello, faizan!");
});