
(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim"
  ];
  for (i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter == "j") {
      helloSpeaker.speak(names[i]);
      // console.log(names[i]);
    } else {
      byeSpeaker.speak(names[i]);
    }
  }
})();
