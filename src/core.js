/* application allows 'loading in' a collection of entries that will be voted on */

import { List } from 'immutable';

// take previous state and collection of entries & produces state where entries are included
export function setEntries(state, entries) {
	return state.set('entries', List(entries)); // convert to immutable list
}

// start the voting by calling state that already has entries set
export function next(state) {
	const entries = state.get('entries');
	return state.merge({
		vote: Map({ pair: entries.take(2) }),
		entries: entries.skip(2)
	});
}