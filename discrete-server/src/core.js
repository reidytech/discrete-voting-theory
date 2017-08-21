import {List, Map} from 'immutable';
export const INITIAL_STATE = Map();
/**
 * @class core
 */

/**
 * @function setEntries 
 * @description Sets an entries key in the state Map. Sets the value as the given list of entries. Allows loading in of entries to be voted on.
 * @param {Map} state prior to entry loading - copied
 * @param {Array | List} entries key in state Map; if Array, will be converted to list with List constructor
 * @return {Map} new version of state with entry List loaded into Map
 */

export function setEntries(state, entries) {
    return state.set('entries', List(entries));
}

export function setConnective(truthCon, connectives){
    return truthCon.set('connective', List(connectives));
}

export function getConnective(truthCon){
    return truthCon.get('and');
}

//export function genProp(proposition, connective){
  //  return (" " + proposition[0] + " " + connective[0] + " " + proposition[1]); 
//}

/**
 * @function vote
 * @description This function reaches into the nested data structure path and applies this function there. The function is Immutables {@link updateIn}  If there are keys missing along the path, it creates new Maps in their place. If the value at the end is missing, it is initialized with a '0'.
 * @param {Map} state - current state
 * @param {Array | List} entry - entry to be added
 * @return {Map} state - updated state, copy of original with entry added in
 */

export function vote(voteState, entry) {
    return voteState.updateIn(
        ['tally', entry], 
        0, 
        tally => tally + 1);
}

/**
 * @function next
 * @description This function will merge an update into the old state, where the first two entries are put in one List, and the rest in the new version of entries. The winners of a vote are concatenated to the entries.
 * @param {Map} state - current state
 * @return {Map|Map<singleton>} State - updated state, copy of original with entry added in OR State - taking old state as starting point, removed vote and entries keys, morphhing old state into new ones
 */

export function next(state){
    const entries = state.get('entries')
                        .concat(getWinners(state.get('vote')));
    if(entries.size === 1){
        return state.remove('vote')
                    .remove('entries')
                    .set('winner', entries.first());
    } else {
        return state.merge({
            vote: Map({pair: entries.take(2)}),
            entries: entries.skip(2)
        });
    }
}

/**
 * @function getWinners
 * @description Keeps the winning entry from the current vote, adds back to the end of the entries, so it can be paired with something else later. Losing entry is thrown away. Tie means both entries are kept.
 * @param {Map} vote - result of vote
 * @return {Array} [a]|[b]|[a,b] - returns [a] if a wins, [b] if b wins, and [a, b] if there is a tie
 */

function getWinners(vote) {
    if (!vote) return [];
    const [a, b] = vote.get('pair');
    const aVotes = vote.getIn(['tally', a], 0);
    const bVotes = vote.getIn(['tally', b], 0);
    if (aVotes > bVotes)  return [a];
    else if (aVotes < bVotes) return [b];
    else return [a, b];
 }