/*global QUnit*/

sap.ui.define([
	"logaligroup/project1/controller/MainVieww.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MainVieww Controller");

	QUnit.test("I should test the MainVieww controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
