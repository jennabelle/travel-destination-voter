/* application allows 'loading in' a collection of entries that will be voted on */

import { List } from 'immutable';

// take previous state and collection of entries & produces state where entries are included
export function setEntries(state, entries) {
	return state.set('entries', List(entries)); // convert to immutable list
}