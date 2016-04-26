import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

	// important requirement of reducers is they are called w undefined state, they know how to initalize it to meaningful value
	// in our case, giving an undefined state should work as if empty Map had been given
	it('has an initial state', () => {
		const action = { type: 'SET_ENTRIES', entries: [ 'Trainspotting' ]};
		const nextState = reducer(undefined, action);
		expect(nextState).to.equal(fromJS({
			entries: [ 'Trainspotting' ]
		}));
	});

	it('handles SET_ENTRIES', () => {
		const initialState = Map();
		const action = { type: 'SET_ENTRIES', entries: [ 'Trainspotting' ]};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			entries: [ 'Trainspotting' ]
		}));
	});

	it('handles NEXT', () => {
		const initialState = fromJS({
			entries: [ 'Trainspotting', '28 Days Later' ]
		});
		const action = { type: 'NEXT' };
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			vote: {
				pair: [ 'Trainspotting', '28 Days Later' ]
			},
			entries: []
		}));
	});

	it('handles VOTE', () => {
		const initialState = fromJS({
			vote: {
				pair: [ 'Trainspotting', '28 Days Later' ]
			},
			entries: []
		});
		const action = { type: 'VOTE', entry: 'Trainspotting' };
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			vote: {
				pair: [ 'Trainspotting', '28 Days Later' ],
				tally: { Trainspotting: 1 }
			},
			entries: []
		}));
	});

});