import { expect } from 'chai';

describe('immutability', () => {

	describe('a number', () => {

		function increment(currentState) {
			return currentState++;
		}

		// state doesn't change when increment is called
		it ('is immutable', () => {
			let state = 42;
			let nextState = increment(state);

			expect(nextState).to.equal(43);
			expect(state).to.equal(42);
		});

	});

});