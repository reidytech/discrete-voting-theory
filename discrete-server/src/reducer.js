import {setEntries, next, vote, INITIAL_STATE} from './core';
/**
 * @function reducer
 * @description Figure out which function to call and call it
 * @description If reducer is called with an undefined state, it would work as if an empty Map had been given
 * @description If the reducer doesn't recognize an action, it fust returns the current state
 * @description Given a collection of past actions, you can just reduce, the collection into the currnt state. A reducer fulfills the contract of a reduce callback function.
 * @param {Map} - state, Initial state of application
 * @param {Object} - action
 */
export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'SET_ENTRIES':
        /**
         * @return Map - returns setEntries call, which returns a map with the list of entries in it
         */
            return setEntries(state, action.entries);
        case 'NEXT':
        /**
         * @return Map - returns next call, which will merge an update into the old state or return a winner, with other entries removed from list
         */
            return next(state);
        case 'VOTE':
        /**
         * @return Map - returns vote call, which will update the vote count (tally) and merge the changes back into the old state
         * The main reducer function only hands parts of the state to the lower-level reducer functions, separating the job of finding the right location in the state tree from applying the update to that location
         */
            return state.update('vote', voteState => vote(voteState, action.entry));
           // return store.update("vote", voteState => vote(voteState, action.entry));
    }
    return state;
}