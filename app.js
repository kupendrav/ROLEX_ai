// file


const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#end');
const speakBtn = document.querySelector('#speak');
const time = document.querySelector('#time');
const battery = document.querySelector('#battery')
const internet = document.querySelector('#internet')
const turn_on = document.querySelector('#turn_on')
const msgs = document.querySelector(".messages")



document.querySelector("#start_rolex_btn").addEventListener("click", () =>{
  recognition.start()
})
// rolex's commands
let rolexComs = [];
rolexComs.push("hi rolex");
rolexComs.push("what are your commands");
rolexComs.push("close this - to close opened popups");
rolexComs.push(
  "change my information - information regarding your acoounts and you"
);
// rolexComs.push("whats the weather or temperature");
// rolexComs.push("show the full weather report");
rolexComs.push("are you there - to check rolexs presence");
rolexComs.push("shut down - stop voice recognition");
rolexComs.push("open google");
rolexComs.push('search for "your keywords" - to search on google ');
rolexComs.push("open whatsapp");
rolexComs.push("open youtube");
rolexComs.push('play "your keywords" - to search on youtube ');
rolexComs.push("close this youtube tab - to close opened youtube tab");
rolexComs.push("open firebase");
rolexComs.push("open netlify");
rolexComs.push("open twitter");
rolexComs.push("open my twitter profile");
// rolexComs.push("open instagram");
rolexComs.push("open my linkedin profile");
rolexComs.push("open github");
rolexComs.push("open my coding profile");
rolexComs.push("Find my deivice")
rolexComs.push("loacte")


//speech recogition setup
const SpeechRecognition = 
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();


// sr start
recognition.onstart = function(){
  console.log("vr active");
};

  // create a new chat
  function createMsg(who,msg){
    let newmsg = document.createElement('p')
    newmsg.innerText = msg;
    newmsg.setAttribute('class',who)
    msgs.appendChild(newmsg)
  }

// time setup
let date = new Date()
let hrs = date.getHours()
let mins = date.getMinutes()
let secs = date.getSeconds()
// autojarvis
function autojarvis(){
  setTimeout(()=>{
    recognition.start()
  },1000)
}
// onload window

window.onload = () =>{
  // onstartup
turn_on.play()
turn_on.addEventListener('onend' , ()=>{
  setTimeout(()=> {
    autojarvis()
    readOut('Ready To Go Sir')
    if(localStorage.getItem('rolex_setup')=== null){
      readOut('Please fill out the form')
    }
  },200);
})

// rolex commands adding
rolexComs.forEach((e) =>{
  document.querySelector('.commands').innerHTML += `<p>#${e}</p><br/>`

})


  // time setup
  time.textContent = `${hrs}:${mins}:${secs}`
  time.style.color = 'white'
  setInterval(() => {
    let date = new Date()
let hrs = date.getHours()
let mins = date.getMinutes()
let secs = date.getSeconds()
time.textContent = `${hrs}:${mins}:${secs}`

  },1000);




  // battery setup
  let batteryPromise = navigator.getBattery()
  batteryPromise.then(batteryCallback)

  function batteryCallback(batteryObject){
    printBatteryStatus(batteryObject)
    setInterval(()=>{
      printBatteryStatus(batteryObject)

    },5000);
  }

    battery.style.color = 'white'
  function printBatteryStatus(batteryObject){
    battery.textContent = `${batteryObject.level*100}%`
    if (batteryObject.charging = true){
      document.querySelector('.battery').style.width = '10px'
      battery.textContent = `${batteryObject.level*100}% Charge`
      
    }
    else if (batteryObject.charging = false){battery.textContent = `${batteryObject.level*100}%`}
  }
   // internet connectivity

   if(navigator.onLine){
    document.querySelector("#internet").textContent = "online"
    connectivity = "online"
  } else {
    document.querySelector("#internet").textContent = "offline"
    connectivity = "offline"
  }
  internet.style.color = 'white'
setInterval(() => {
  if(navigator.onLine){
    document.querySelector("#internet").textContent = "online"
    connectivity = "online"
  } else {
    document.querySelector("#internet").textContent = "offline"
    connectivity = "offline"
  }
}, 6000);


  }
// power up rolex
let play = document.getElementById("heart");
function playMusic() {
  let audio = new Audio("assets/audio/Jarvis.mp3");
  audio.play()

}

play.addEventListener("click", playMusic);
//result
 recognition.onresult = function(event){
  let current = event.resultIndex;
  let transcript = event.results[current][0].transcript;
  let userdata = localStorage.getItem('rolex_setup')
  
createMsg("usermsg",transcript)

  console.log(event);
 transcript = transcript.toLowerCase();
 
if(transcript.includes("hello rolex")){
  readOut("hello sir");
}
if(transcript.includes("close this")){
  readOut("closed")
  document.querySelector('.commands').style.display = 'none';
  setup.style.display = 'none'
}
if(transcript.includes("commands")){
  readOut("Sir, I follow the following commands ");
  document.querySelector('.commands').style.display = 'block';
}
if (transcript.includes("open youtube")){
  readOut("opening youtube sir!");
  window.open("https://www.youtube.com/")
}
if (transcript.includes("open google")){
  readOut("opening google sir!");
  window.open("https://www.google.com/");
}

if(transcript.includes('motivational')){
  readOut("you only fail, when you stop trying!")
  return;
  }
  if(transcript.includes('drive')){
    readOut("opening your drive sir!")
  window.open("https://drive.google.com/drive/my-drive");
    return;
    }
    if(transcript.includes('mails')){
      readOut("checking your mails sir!")
    window.open("https://mail.google.com/mail/u/0/#inbox");
      return;
      }
      if(transcript.includes('amazon')){
        readOut("opening amazon shopping sir!")
      window.open("https://www.amazon.in/");
        return;
        }
        if(transcript.includes('find my device') ){
          readOut("locating your device sir!")
        window.open("https://www.google.com/android/find/");
        return;
      
          }
          if(transcript.includes('weather today') || (transcript.includes('todays weather report'))){
            readOut("here is the report")
            window.open("https://www.accuweather.com/en/in/bengaluru/204108/weather-forecast/204108");
            return;
          }
          if(transcript.includes('stocks today') || (transcript.includes('stocks to buy today'))){
            readOut("here are some suggestions!")
            window.open("https://in.investing.com/equities/most-active-stocks");
           return; 
          }
          if (transcript.includes('open whatsapp')) {
            readOut('Opening whats app Sir')
            window.open('https://web.whatsapp.com/')
            return;
          }
  //google search
  if (transcript.includes("search for")) {
    let input = transcript.split("search for").at(-1)
    console.log(input);
    readOut(`searching for ${input}`)
    window.open(`https://www.google.com/search?q=${input}`)
    return;
  }
  if (transcript.includes('play the song')) {
    let input = transcript.split("play the song").at(-1)
    readOut(`playing ${input} from spotify`)
    input = input.replace(' ', '%20')
    console.log(input)
    window.open(`https://open.spotify.com/search/${input}`)
    return;
  }
  // youtube search
  if (transcript.includes("play")) {
    let input = transcript.split("play").at(-1)
    console.log(input);
    readOut(`playing ${input} from youtube! sir..`)
    window.open(`https://www.youtube.com/results?search_query=${input}`);
    return;
  }


  // Maps

  // locate kormangala
  if (transcript.includes('locate')) {
    let input = transcript.split("locate").at(-1)
    readOut(`locating ${input} from google maps`)
    input = input.replace(' ', '+')
    console.log(input)
    window.open(`https://www.google.com/maps/search/${input}/`)
    return;
  }

  if (transcript.includes("open my github profile") || transcript.includes('open my coding profile')) {
    readOut('Opening your github profile sir')
    window.open(`https://github.com/${JSON.parse(userdata).github}`)
    return;
  }
  if (transcript.includes("open my linkedin profile")) {
    readOut('Opening your linkedin profile sir')
    window.open(`https://www.linkedin.com/${JSON.parse(userdata).linkedin}`)
    return;
  }
  if (transcript.includes("owner")){
    readOut(`Currently my owner is ${JSON.parse(userdata).name}`)
    return;
  }
  if (transcript.includes('founder')){
    readOut('I was created by my god kupendra sir')
  }
  if (transcript.includes("open github")) {
    readOut('Opening github sir')
    window.open('https://github.com/')
    return;
  }
  if(transcript.includes('twitter profile') ){
    readOut("opening your twitter profile sir!")
  window.open("https://twitter.com/kupendrav99");
    return;
    }
  if(transcript.includes('linkedin profile') ){
    readOut("opening your linkedin profile sir!")
  window.open("https://www.linkedin.com/in/kupendra-v2903/");
    return;
    }

  // if (transcript) {
  //   readOut("i didn't get your sir")
  // }
};

if (localStorage.getItem("rolex_setup") !== null){
  
}

// rolex setup
const setup = document.querySelector(".rolex_setup")
// setup.style.display = "none"
if(localStorage.getItem('rolex_setup') === null){
  // setup.style.display = 'block'
  setup.querySelector('button').addEventListener('click',userInfo)
}

// userinfo setup
function userInfo(){
  let setupInfo = {
    name: setup.querySelectorAll('input')[0].value,
    bio : setup.querySelectorAll('input')[1].value,
    github : setup.querySelectorAll('input')[2].value,
    twitter : setup.querySelectorAll('input')[3].value,
    linkedIn : setup.querySelectorAll('input')[4].value,
  }
  let testArr = []
  setup.querySelectorAll('input').forEach((e) =>{
    testArr.push(e.value) 
   })
   if(testArr.includes('')){
    readOut('⚠️Please Enter your complete information')
   } else{
    localStorage.clear()
    localStorage.setItem(
      'rolex_setup', JSON.stringify({...setupInfo})
      )
      setup.style.display = "none"
   }
}

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
  createMsg('jmsg',message)
}

speakBtn.addEventListener("click",() => {
  readOut("good afternoon sir!");
});