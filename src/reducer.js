import { setEntries, next, vote, INITIAL_STATE } from './core';

export default function reducer(state = INITIAL_STATE, action) {
	// Figure out which function to call and call it

	switch (action.type) {
		case 'SET_ENTRIES': 
			return setEntries(state, action.entries);
		case 'NEXT': 
			return next(state);
		case 'VOTE': // pick apart state, give only relevant part to vote function // reducer composition pattern
			return state.update('vote', 
								voteState => vote(voteState, action.entry));
	}

	// return currentr state if reducer doesn't recognize action
	return state;
}