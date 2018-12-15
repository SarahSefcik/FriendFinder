// Create variable to store quiz questions
var personality = [
  { trait: '"how does that work?"', value: "beaver", score: "1" }
  { trait: 'the leader', value: "lion", score: "2" }
  { trait: '"where is the party?"', value: "otter", score: "3" }
  { trait: 'competitive', value: "lion", score: "4" }
  { trait: 'creative', value: "otter", score: "5" }
  { trait: 'keep the peace!', value: "golden", score: "6" }
  { trait: 'hard worker', value: "lion", score: "7" }
  { trait: 'enjoys change', value: "otter", score: "8" }
  { trait: 'relaxed', value: "golden", score: "9" }
  { trait: '"do it the fun way!"', value: "otter", score: "10" }
];

          // '"no worries bro!"', 'keeps at it', 'organized', 'talk talk talk', 'takes charge', '"I will work it out"', 'bright ideas', 'cheerful', 'loyal', 'sensitive', 'enjoys challenges', 'thoughtful', 'puts others first', 'reads all instructions', 'practical', 'fun loving', 'serious', 'flexible', 'I can get it perfect', 'determined', 'makes lists', 'friendly', 'passionate', 'makes things happen', 'my way or the highway', 'kind', 'productive', 'warm', 'stands alone', 'likes facts', 'strong', 'independent', 'confident', 'sensitive feelings', 'careful', 'enjoys routine', 'people like you', 'mixes easily', 'tolerant', 'reliable', 'decision-maker', 'always do the best I can', '"let me think about that"', 'spur-of-the-moment', 'avoids arguments', 'helper', 'starter of things', 'patient', 'neat and tidy', 'bold', 'can sell an idea', '"do it the right way!"', 'controlled', 'peacemaker', 'funny', 'calm', 'goal setter', 'dislike change', 'gets people going', 'brave', 'good listener'];


// Begin Quiz Function
$(document).ready(function () {

  $("#personalityArea").show();
  
  // Iteration through the personality array
  for (var i = 0; i < personality.length; i++) { 
    var html = "";

    html += "<p>" + personality[i].trait;
    html += "<p>" +
      "<label class='btn btn-primary'>" +
      "<input type='checkbox' name='' id='' autocomplete='off'>" +
      "</label>"
    
    $("#traitArea").append(html);
  }
});