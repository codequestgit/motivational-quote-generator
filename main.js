const quotes = [{
    quote: `Mindfulness is a way of befriending ourselves and our experience.`,
    author: `Jon Kabat-Zinn`
}, 

{
    quote: `What would it be like if I could accept life – accept this moment – exactly as it is?`,
    author: `Tara Brach`
}, 

{
    quote: `Live the actual moment. Only this actual moment is life.`,
    author: `Thích Nhất Hạnh`
}, 

{
    quote: `The best way to capture moments is to pay attention. This is how we cultivate mindfulness.`,
    author: `Jon Kabat-Zinn`
}, 

{
    quote: `Mindfulness means being awake. It means knowing what you are doing.`,
    author: `Jon Kabat-Zinn`
}, 

{
    quote: `To think in terms of either pessimism or optimism oversimplifies the truth. The problem is to see reality as it is.`,
    author: `Thích Nhất Hạnh`
}, 

{
    quote: `Many people are alive but don’t touch the miracle of being alive.`,
    author: `Thích Nhất Hạnh`
}, 

{
    quote: `The feeling that any task is a nuisance will soon disappear if it is done in mindfulness.`,
    author: `Thích Nhất Hạnh`
}, 

{
    quote: `When we get too caught up in the busyness of the world, we lose connection with one another – and ourselves.`,
    author: `Jack Kornfield`
}, 

{
    quote: `Everything that has a beginning has an ending. Make your peace with that and all will be well.`,
    author: `Jack Kornfield`
},

{
    quote: `Much of spiritual life is self-acceptance, maybe all of it.`,
    author: `Jack Kornfield`
},

{
    quote: `Nothing ever goes away until it has taught us what we need to know.`,
    author: `Pema Chödrön`
},

{
    quote: `The essence of bravery is being without self-deception.`,
    author: `Pema Chödrön`
},

{
    quote: `Mindfulness isn’t difficult, we just need to remember to do it.`,
    author: `Sharon Salzberg`
},

{
    quote: `That’s life: starting over, one breath at a time.`,
    author: `Sharon Salzberg`
},

{
    quote: `You cannot control the results, only your actions.`,
    author: `Allan Lokos`
},

{
    quote: `Don’t believe everything you think. Thoughts are just that – thoughts.`,
    author: `Allan Lokos`
},

{
    quote: `Your actions are your only true belongings.`,
    author: `Allan Lokos`
},

{
    quote: `You cannot control the results, only your actions.`,
    author: `Allan Lokos`
},

{
    quote: `If you want to conquer the anxiety of life, live in the moment, live in the breath.`,
    author: `Amit Ray`
}]

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})
