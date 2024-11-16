var quote = document.getElementById("randomQuote");
var author = document.getElementById("quoteAuthor");

var quoteList = [
    "Do not take life too seriously. You will not get out alive.",
    "You miss 100% of the shots you don't take.",
    "It's not what happens to you, but how you react to it that matters.",
    "Resentment is like drinking poison and waiting for your enemies to die.",
    "The only way to do great work is to love what you do.",
    "In the middle of difficulty lies opportunity.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Do what you can, with what you have, where you are.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Believe you can and you're halfway there.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Act as if what you do makes a difference. It does.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "It does not matter how slowly you go as long as you do not stop.",
    "If you can dream it, you can do it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for."
];

var authorList = [
    "--Elbert Hubbard",
    "--Wayne Gretzky",
    "--Epictetus",
    "--Nelson Mandela",
    "--Steve Jobs",
    "--Albert Einstein",
    "--Winston Churchill",
    "--Eleanor Roosevelt",
    "--Theodore Roosevelt",
    "--Brian Tracy",
    "--Dalai Lama",
    "--Steve Jobs",
    "--Theodore Roosevelt",
    "--Thomas Edison",
    "--Ralph Waldo Emerson",
    "--Alan Kay",
    "--Charles R. Swindoll",
    "--William James",
    "--Walt Whitman",
    "--Confucius",
    "--Walt Disney",
    "--Unknown",
    "--Unknown",
    "--Unknown",
    "--Unknown",
    "--Unknown"
];
var number;
function randomQuote() {

    var randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * quoteList.length);
    } while (number === randomNumber)
    number = randomNumber;
    return randomNumber;
}
function getNewQuote() {
    var randomIndex = randomQuote();
    quote.innerHTML = `${quoteList[randomIndex]}`;
    author.innerHTML = `${authorList[randomIndex]}`;

}
