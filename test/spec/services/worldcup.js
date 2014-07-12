'use strict';

describe('Service: Worldcup', function () {

  // load the service's module
  beforeEach(module('leagueApp'));

  // instantiate service
  var Worldcup;
  beforeEach(inject(function (_Worldcup_) {
    Worldcup = _Worldcup_;
  }));

  it('should do something', function () {
    expect(!!Worldcup).toBe(true);
  });

});
