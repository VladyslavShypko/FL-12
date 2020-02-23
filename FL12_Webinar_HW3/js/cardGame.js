class Card {
	constructor(suit, rank, isFaceCard) {
		this.suit = suit;
		this.rank = rank;
		this.isFaceCard = isFaceCard;
	}
	toString() {
		if (this.rank === 1) {
			return `Ace of ` + this.suit;
		} else if (this.rank === 11) {
			return `Jack of ` + this.suit;
		} else if (this.rank === 12) {
			return `Queen of ` + this.suit;
		} else if (this.rank === 13) {
			return `King of ` + this.suit;
		} else {
			return `${this.rank} of ` + this.suit;
		}
	}
	static Compare(cardOne, cardTwo) {
		if ((cardOne.rank - cardTwo.rank) > 0) {
			return 1;
		} else if ((cardOne.rank - cardTwo.rank) < 0) {
			return -1;
		}
	}
}
class Deck {
	cards = (function () {
		let array = [];
		let j = 0;
		let suitArray = ['hearts', 'diamonds', 'clubs', 'spades'];
		while (j < suitArray.length) {
			for (let i = 1; i <= 13; i++) {
				if (i === 1 || i > 10) {
					array.push(new Card(suitArray[j], i, true));
				} else {
					array.push(new Card(suitArray[j], i, false));
				}
			}
			j++;
		}
		return array;
	}());

	count = this.cards.length;

	shuffle() {
		let randomIndex, temp;
		for (let i = this.cards.length - 1; i > 0; i--) {
			randomIndex = Math.floor(Math.random() * (i + 1));
			temp = this.cards[randomIndex];
			this.cards[randomIndex] = this.cards[i];
			this.cards[i] = temp;
		}
		return this.cards;
	}
	draw(n) {
		this.count -= n;
		return this.cards.splice(this.cards.length - n, n);
	}
}

//let deck = new Deck();

class Player {
	constructor(name) {
		this.name = name;
	}
	wins = 0;
	deck = new Deck();

	static Play(playerOne, playerTwo) {
		playerOne.deck = new Deck();
		playerTwo.deck = new Deck();
		playerOne.wins = 0;
		playerTwo.wins = 0;
		while (playerOne.deck.count !== 0 && playerTwo.deck.count !== 0) {
			let cardCount = playerOne.deck.length - 1;
			if (Card.Compare(playerOne.deck.shuffle()[playerOne.deck.count-1], playerTwo.deck.shuffle()[playerTwo.deck.count-1]) === 1) {
//				console.log(playerOne.deck[cardCount], playerTwo.deck[cardCount]);
				playerOne.wins++;
			} else if (Card.Compare(playerOne.deck.shuffle()[playerOne.deck.count-1], playerTwo.deck.shuffle()[playerTwo.deck.count-1]) === -1) {
//				console.log(playerOne.deck[cardCount], playerTwo.deck[cardCount]);
				playerTwo.wins++;
			}
			playerOne.deck.draw(1);
			playerTwo.deck.draw(1);
		}
		if (playerOne.wins > playerTwo.wins) {
			console.log(`${playerOne.name} wins ${playerOne.wins} to ${playerTwo.wins}`);
		} else {
			console.log(`${playerTwo.name} wins ${playerTwo.wins} to ${playerOne.wins}`);
		}
	}
}
let playerOne = new Player('Vlad');
let playerTwo = new Player('Tanya');
Player.Play(playerOne, playerTwo);