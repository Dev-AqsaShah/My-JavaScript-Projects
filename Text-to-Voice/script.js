let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[parseInt(voiceSelect.value, 10)];
});

document.querySelector("button").addEventListener("click", () => {
    let text = document.querySelector("textarea").value;
    speech.text = text;
    window.speechSynthesis.speak(speech);
});
