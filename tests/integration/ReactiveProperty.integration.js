(function() {
  "use strict";

  describe("ReactiveProperty", function () {

    it("is defined on the global namespace", function () {

      expect(ReactiveProperty).to.be.defined;

    });

    describe("integrates automatically with the Meteor dependency system", function() {

      beforeEach(function() {

        sinon.stub(Deps, 'Dependency');

        this.dependMethodSpy = sinon.spy();
        this.changedMethodSpy = sinon.spy();

        Deps.Dependency.returns({
          depend: this.dependMethodSpy,
          changed: this.changedMethodSpy
        });

      });

      it("creates an instance of Deps.Dependency", function() {

        // EXECUTE
        var reactiveProperty = new ReactiveProperty();

        // VERIFY
        expect(Deps.Dependency).to.have.been.calledWithNew;

      });

      it("marks current computation as dependent when getting the value", function() {

        // SETUP
        var reactiveProperty = new ReactiveProperty();

        // EXECUTE
        reactiveProperty.get();

        // VERIFY
        expect(this.dependMethodSpy).to.have.been.calledOnce;

      });

      it("invalidates the dependency when setting the value", function() {

        // SETUP
        var reactiveProperty = new ReactiveProperty();

        // EXECUTE
        reactiveProperty.set();

        // VERIFY
        expect(this.changedMethodSpy).to.have.been.calledOnce;

      });

      afterEach(function() {

        Deps.Dependency.restore();

      });

    });

  });

}());