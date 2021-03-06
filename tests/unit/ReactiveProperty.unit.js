(function() {
  "use strict";

  describe("ReactiveProperty", function () {

    beforeEach(function() {

      this.reactiveProperty = new ReactiveProperty();

    });

    it("allows for setting and getting the property value", function () {

      // SETUP
      var testValue = {};
      this.reactiveProperty.set(testValue);

      // EXECUTE
      var result = this.reactiveProperty.get();

      // VERIFY
      expect(result).to.equal(testValue);

    });

    describe("#Constructor", function() {

      it("takes the default value as single argument", function() {

        // SETUP
        var defaultValue = {};

        // EXECUTE
        var reactiveProperty = new ReactiveProperty(defaultValue);

        // VERIFY
        expect(reactiveProperty.get()).to.equal(defaultValue);

      });

    });

    describe("#destroy", function() {

      it("Throws an error if trying to access a destroyed property", function() {

        // SETUP
        var testValue = {};
        this.reactiveProperty.set(testValue);

        // EXECUTE
        this.reactiveProperty.destroy();

        var This = this;

        function tryToGetvalueOfDestroyedProperty() {
          This.reactiveProperty.get();
        }

        // VERIFY
        expect(tryToGetvalueOfDestroyedProperty).to.throw();

      });

    });

  });

}());