//Week 6 Library Sketch - display rhyming words using RiTa library
//https://rednoise.org/rita/
//Anjali Shiyamsaran

let rhymes;
let word;

//create canvas and call rhymingWords() function
function setup() {
  createCanvas(500, 500);
  fill(255);
  textFont("Helvetica");

  rhymingWords();
}

//set up text sizes and styles
//call random word and list of rhyming words
function draw() {
  background(0);

  textSize(36);
  textStyle(BOLD);
  textAlign(CENTER);
  text(word, 250, 80);

  textSize(18);
  textStyle(NORMAL);
  textAlign(CENTER);
  textLeading(20);
  text(rhymes, 250, 130);
}

//call rhymes function in RiTa to find words that rhyme with random word
function rhymingWords() {
  let wordList;
  do {
    word = RiTa.randomWord(); //find random word
    wordList = RiTa.rhymes(
      word, { 
      limit: 15 //list at most 15 words that rhyme with random word
      }
    );
  }
  while (wordList.length < 3)

  rhymes = wordList.join("\n");
  setTimeout(rhymingWords, 2000); //automatically move to next word after 2 seconds
}