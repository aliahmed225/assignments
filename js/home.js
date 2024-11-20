var quotelist = [
  {
    quote:
      "Be who you are and say what you feel and those who matter don't mind.",
    author: "--Waleed Abdallah ",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "--Waleed Ebn Elhag Abdallah  ",
  },
  {
    quote:
      "Waleed Abdallah ladykm la 3alykm ",
    author: "--Elbashmohnds Waleed Abdallah YBNEE",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "--LA DE ANA ELI OLTHA",
  },
];
var randomIndex;
var lastindex;
function quote() {
  do {
    randomIndex = Math.floor(Math.random() * quotelist.length);
  } while (randomIndex == lastindex);
  data = quotelist[randomIndex].quote;
  data1 = quotelist[randomIndex].author;
  document.getElementById("demo").innerHTML = data;
  document.getElementById("demo1").innerHTML = data1;
  lastindex = randomIndex;
}
