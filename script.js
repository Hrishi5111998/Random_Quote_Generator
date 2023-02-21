let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
 let person = document.querySelector('.person')

 const quotes = [{
    quote: "The way to get started is to quit talking and begin doing.",
    person: "Walt Disney" 
 },
{
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    person: "Eleanor Roosevelt"
},
{
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    person: "Oprah Winfrey"
},
{
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    person: "James Cameron"
},
{
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon"
},
{
quote: "You will face many defeats in life, but never let yourself be defeated.",
person:"-Maya Angelou"
},
{
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person:"-Nelson Mandela"
},
{
    quote:"In the end, it's not the years in your life that count. It's the life in your years.",
    person:"-Abraham Lincoln"
},
{
    quote:"Never let the fear of striking out keep you from playing the game.",
    person: "-Babe Ruth"
},
{
    quote: "Life is either a daring adventure or nothing at all.",
    person:" -Helen Keller"
},
{
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    person:"-Dr. Seuss"
}]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerHTML = quotes[random].quote
    person.innerHTML = quotes[random].person
})
