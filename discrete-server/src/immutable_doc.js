
/**
 * @class Immutablejs
 * @implements Collection<Key,Value> @extends ValueObject
 */

/**
 * @method equals()
 * @memberof ValueObject
 * @param any
 * @return boolean
 * @description True if this and the other Collection have value equality as defined by Immutable.is()
 */

/**
 * @method merge
 * @memberof Collections
 * @description The Immutable.js merge method used by this module
 * @description Returns a new Map resulting from merging the provided Collections (or Js objects) into this Map. In other words, this takes each entry of each collection and sets it on this Map.
 * @param {Map} state to be merged 
 * @return {Map} returns a new Map having applied state to be merged into the state which called merge
 * @example
 * const {Map} = require('immutable')
 * const one = Map({a: 10, b: 20, c: 30})
 * const two = Map({b: 40, a: 50, d: 60})
 * one.merge(two) //Map {"a": 50, "b": 40, "c": 30, "d": 60}
 * two.merge(one) //Map {"b": 20, "a": 10, "d": 60, "c": 30}
 */

/**
 * @method take
 * @memberof Collections
 * @description The Immutable.js take method used by this module, from Collections
 * @description Returns a new Collection of the same type which includes the first amount entries from this Collection.
 * @param {number} specifies first entries to take
 * @return {Collection} a new collection of the same type with the first amount entries
 * @example
 * take(amount: number): this
 */

/**
 * @method skip
 * @memberof Collections
 * @description The Immutable.js skip method used by this module, from Collections
 * @description Returns a new Collection of the same type which excludes the first amount entries from this Collection.
 * @param {number} specifies the first entries to exclude in the returned Collection
 * @return {Collection} a new collection of the same type excluding the entries indicated by parameter.
 * @example
 * skip(amount: number): this
 */

/**
 * @method updateIn
 * @memberof Collections
 * @description The Immutable.js updateIn method used by this module
 * @description updateIn is most commonly used to call methods on collections nested within a structure of data. In order to .push() onto a nested list, updateIn and push can be used together.
 * @param {Iterable<any>} keypath - Map with a nested list, which would look like ['Map', 'List']. Map would contain the List, or List would be the nested data structure
 * @param {function} updater
 * @return {Map} returns a new Map having applied the updater to the entry found at the keypath. 
 * @example
 * updateIn(
 * keyPath: Iterable<any>,
 * notSetValue: any,
 * updater: (value: any) => any
 * ): this
 * updateIn(keyPath: Iterable<any>, updater: (value: any) => any): this 
 */