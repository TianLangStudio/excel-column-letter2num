'use strict';
var assert = require('assert');
var excelCol2Number = require('./').excelCol2Num;

describe('excelCol2Number', function () {
	it('should convert A, B and C to 1, 2 and 3', function () {
		assert.strictEqual(excelCol2Number('A'), 1);
		assert.strictEqual(excelCol2Number('B'), 2);
		assert.strictEqual(excelCol2Number('C'), 3);
	});

	it('should convert X, Y and Z to 24, 25 and, 26', function () {
		assert.strictEqual(excelCol2Number('X'), 24);
		assert.strictEqual(excelCol2Number('Y'), 25);
		assert.strictEqual(excelCol2Number('Z'), 26);
	});

	it('should convert AA, AB and AC to 27, 28 and, 29', function () {
		assert.strictEqual(excelCol2Number('AA'), 27);
		assert.strictEqual(excelCol2Number('AB'), 28);
		assert.strictEqual(excelCol2Number('AC'), 29);
	});

	it('should convert AZ, BA to 52, 53', function () {
		assert.strictEqual(excelCol2Number('AZ'), 52);
		assert.strictEqual(excelCol2Number('BA'), 53);
	});


	it('should convert AEZ, AFA to 832, 833', function () {
       for(let i=0; i<1000000;i++) {
        assert.strictEqual(excelCol2Number('AEZ'), 832);
		assert.strictEqual(excelCol2Number('AFA'), 833);
       }
	});
});
