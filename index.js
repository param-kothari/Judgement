var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

function makeDeck () {
    var deck = [];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 13; j++) {
            var card = {
                Suit : suits[i],
                Value : values[j]       
            };
            deck.push(card);
        }
    }
    return deck;
}

function shuffleDeck (deck) {
    var size = 52, i = 0, temp;
    while (size != 0) {
        i = Math.floor (Math.random() * size--);
        temp = deck[size];
        deck[size] = deck[i];
        deck[i] = temp;
    }
}

function renderDeck(deck)
{
	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);
        document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + i;
		document.getElementById("container").appendChild(card);
	}
}



var deck = makeDeck();
var $container = document.createElement('DIV');
$container.id = 'container';
shuffleDeck(deck);
renderDeck(deck);



