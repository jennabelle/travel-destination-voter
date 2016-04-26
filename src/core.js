/* app allows 'loading in' a collection of entries that will be voted on */

import { List } from 'immutable';

// take previous state and collection of entries & produces state where entries are included
export function setEntries(state, entries) {
	return state.set('entries', List(entries)); // convert to immutable list
}

// start the voting by calling state that already has entries set
// create a vote Map({ pair: list })
export function next(state) {
	const entries = state.get('entries');
	return state.merge({
		vote: Map({ pair: entries.take(2) }),
		entries: entries.skip(2)
	});
}

// update tally for ea vote
export function vote(state, entry) {
	return state.updateIn(
		[ 'vote', 'tally', entry ], // reach into this nested data structure path
		0,
		tally => tally + 1
	);
}