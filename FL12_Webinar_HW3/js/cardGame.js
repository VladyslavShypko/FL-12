const createDeck = () => {
	let array = [];
	let suitIndex = 0;
	const suitArray = ['hearts', 'diamonds', 'clubs', 'spades'];
	while (suitIndex < suitArray.length) {
		for (let i = 1; i <= 13; i++) {
			if (i === 1 || i > 10) {
				array.push(new Card(suitArray[suitIndex], i, true));
			} else {
				array.push(new Card(suitArray[suitIndex], i, false));
			}
		}
		suitIndex++;
	}
	return array;
};

class Card {
	constructor(suit, rank, isFaceCard) {
		this.suit = suit;
		this.rank = rank;
		this._isFaceCard = isFaceCard;
	}
	get isFaceCard() {
		return this._isFaceCard;
	}

	toString() {
		if (this.rank === 1) {
			return `Ace of ${this.suit}`;
		} else if (this.rank === 11) {
			return `Jack of ${this.suit}`;
		} else if (this.rank === 12) {
			return `Queen of ${this.suit}`;
		} else if (this.rank === 13) {
			return `King of ${this.suit}`;
		} else {
			return `${this.rank} of ${this.suit}`;
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
	constructor() {
		this.cards = createDeck();
		this._count = this.cards.length;
	}
	get count() {
		return this._count;
	}
	shuffle() {
		let randomIndex, temp;
		for (let i = this.cards.length - 1; i > 0; i--) {
			randomIndex = Math.floor(Math.random() * (i + 1));
			temp = this.cards[randomIndex];
			this.cards[randomIndex] = this.cards[i];
			this.cards[i] = temp;
		}
	}
	draw(n) {
		this._count -= n;
		return this.cards.splice(this.cards.length - n, n);
	}
}

class Player {
	constructor(name) {
		this.name = name;
		this._wins = 0;
	}
	get wins() {
		return this._wins;
	}
	deck = new Deck();

	static Play(playerOne, playerTwo) {
		if (playerOne.deck.count === 0) {
			playerOne.deck = new Deck();
		}
		if (playerTwo.deck.count === 0) {
			playerTwo.deck = new Deck();
		}
		playerOne.deck.shuffle();
		playerTwo.deck.shuffle();
		playerOne._wins = 0;
		playerTwo._wins = 0;
		let playerOneCard, playerTwoCard;
		while (playerOne.deck.count !== 0 && playerTwo.deck.count !== 0) {
			playerOneCard = playerOne.deck.draw(1)[0];
			playerTwoCard = playerTwo.deck.draw(1)[0];
			if (Card.Compare(playerOneCard, playerTwoCard) === 1) {
				playerOne._wins++;
				console.log(`${playerOne.name} put '${playerOneCard.toString()}' and ${playerTwo.name} put '${playerTwoCard.toString()}'`);
			} else if (Card.Compare(playerOneCard, playerTwoCard) === -1) {
				playerTwo._wins++;
				console.log(`${playerOne.name} put '${playerOneCard.toString()}' and ${playerTwo.name} put '${playerTwoCard.toString()}'`);
			} else {
				console.log(`${playerOne.name} put '${playerOneCard.toString()}' and ${playerTwo.name} put '${playerTwoCard.toString()}'`);
			}
		}
		if (playerOne.wins > playerTwo.wins) {
			console.log(`${playerOne.name} wins ${playerOne.wins} to ${playerTwo.wins}`);
		} else if (playerOne.wins < playerTwo.wins) {
			console.log(`${playerTwo.name} wins ${playerTwo.wins} to ${playerOne.wins}`);
		} else {
			console.log('Friendship won!!!!');
		}
	}
}

// run example 

const player1 = new Player('Vlad');
const player2 = new Player('Olya');
 Player.Play(player1, player2);
