/*global describe, beforeEach, it */
'use strict';
var assert = require('assert')
  , utils = require('../utils');

describe('ng-poly generator', function () {

  describe('lower camel', function () {
    it('should transform name with hyphens', function () {
      assert(utils.lowerCamel('test-name') === 'testName');
    });

    it('should transform upper camel name', function () {
      assert(utils.lowerCamel('TestName') === 'testName');
    });

    it('should transform underscore', function () {
      assert(utils.lowerCamel('test_name') === 'testName');
    });

    it('should transform mixed', function () {
      assert(utils.lowerCamel('Test_name-fancy') === 'testNameFancy');
    });
  });

  describe('upper camel', function () {
    it('should transform name with hyphens', function () {
      assert(utils.upperCamel('test-name') === 'TestName');
    });

    it('should transform upper camel name', function () {
      assert(utils.upperCamel('TestName') === 'TestName');
    });

    it('should transform underscore', function () {
      assert(utils.upperCamel('test_name') === 'TestName');
    });

    it('should transform mixed', function () {
      assert(utils.upperCamel('Test_name-fancy') === 'TestNameFancy');
    });
  });

  describe('ctrl name', function () {
    it('should transform name with hyphens', function () {
      assert(utils.ctrlName('test-name') === 'TestNameCtrl');
    });

    it('should transform upper camel name', function () {
      assert(utils.ctrlName('TestName') === 'TestNameCtrl');
    });

    it('should transform underscore', function () {
      assert(utils.ctrlName('test_name') === 'TestNameCtrl');
    });

    it('should transform mixed', function () {
      assert(utils.ctrlName('Test_name-fancy') === 'TestNameFancyCtrl');
    });
  });

});
