/// <reference path="../vendor/backbone-min.js" />
(function() {
    var TabManager = new window.Hackathon.Models.TabManager;
    var MenuNode = window.Hackathon.Views.MenuNode = window.Hackathon.Views.BaseNode.extend({

        initialize: function(options) {
            window.Hackathon.Views.BaseNode.initialize.apply(this,arguments);
        },

        render: function() {
            window.Hackathon.Views.BaseNode.render.apply(this, arguments);
            this._bindEvents
            this;
        },

        _attachMenuEvents: function() {
            this.$el.on({
                'click': this._onMenuClick.bind(this),
            });
        },

        _onMenuClick: function() {
            //this
        }

    }, {
        HACKNODE_PADDING: 2
    });
})();