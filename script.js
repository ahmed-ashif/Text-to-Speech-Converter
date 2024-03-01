let speech = new SpeechSynthesisUtterance();
let button = document.querySelector("button");
let inputText = document.querySelector("textarea");

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[10];

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () =>{
  speech.voice = voices[voiceSelect.value];
});

button.addEventListener("click", () => {
  speech.text = inputText.value;
  window.speechSynthesis.speak(speech);
});
 