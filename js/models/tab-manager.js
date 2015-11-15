/// <reference path="vendor/jquery-1.11.3.min.js" />
/// <reference path="views/base-node.js" />
(function() {

    // TODO implement custom order
    var tabCounter = 1000;
    var TabManager = window.Hackathon.Models.TabManager = Backbone.Model.extend({
        initialize: function() {
            return this;
        },
        getTabId: function() {
            return tabCounter++;
        }
    });
})();