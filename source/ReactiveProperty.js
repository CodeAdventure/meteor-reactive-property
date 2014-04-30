(function () {
  "use strict";

  Class('ReactiveProperty', {

    _dependency: null,
    _value: null,

    /**
     *
     * @class ReactiveProperty
     *
     * @classdesc
     * A ReactiveProperty is a simple wrapper around the Meteor dependency system
     * and allows to easily set and get values that trigger reactivity. This can
     * be useful in any situation where you want some state to automagically change
     * when the value of this property changes.
     *
     * @initialize
     * You can call the constructor without any parameters, the default value
     * of the property is null. If you provide a single parameter then this value
     * is taken as default value.
     *
     * @param {*} defaultValue  (optional) default value of the property
     *
     * @example
     * <caption>
     *   <h4>Constructing Reactive Properties</h4>
     *   If you don't specify any default value on creation of the property then
     *   the default value will be set to null. Otherwise you can provide a single
     *   parameter as default value. Setting and getting the property is straight
     *   forward as in any other system.
     * </caption>
     *
     * // no defeault value defined
     * var reactiveProperty = new ReactiveProperty();
     * reactiveProperty.get(); // will return null
     *
     * // with default value
     * var reactiveProperty = new ReactiveProperty("test");
     * reactiveProperty.get(); // will return "test"
     *
     * @memberof! <global>
     */

    Constructor: function(defaultValue) {

      this._value = defaultValue;
      this._dependency = new Deps.Dependency();

    },

    /**
     * Returns the value of the reactive property
     * and makes the current computation depend on this
     * property via the Meteor dependency system.
     *
     * @returns {*}
     * @memberof ReactiveProperty#
     */
    get: function() {
      this._dependency.depend();
      return this._value;
    },

    /**
     * Sets the value of the reactive property and invalidates
     * all Meteor computations that depend on this property.
     *
     * @param {*} value  the new value of the property
     *
     * @returns {undefined}
     * @memberof ReactiveProperty#
     */
    set: function(value) {
      this._value = value;
      this._dependency.changed();
    }

  });

}());