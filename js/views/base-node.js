/// <reference path="../vendor/backbone-min.js" />
(function() {
    var TabManager = new window.Hackathon.Models.TabManager;
    var BaseNode = window.Hackathon.Views.BaseNode = Backbone.View.extend({

        initialize: function(options) {
            this.$hNode = null;
            this.render();
            return this;
        },

        render: function() {
            this._createHackNode();
            this._setUpHackNode();
            this.hideHack();
            return this;
        },

        _createHackNode: function() {
            var hNodeTag = this.$el.prop("tagName");
            var tIndex = this.$el.attr('n-access-order');
            this.$el.attr('tabindex', -1);
            var $hNode = $('<div>', {
                'class': 'n-hack-node',
                'tabindex': this.$el.attr('n-access-order')
            });
            if (this.$el.hasClass('container')) {
                $hNode.addClass('container');
            }
            this.$el.append($hNode);
            this.$hNode = $hNode;
            this.setHackText(BaseNode.A_TEXT[tIndex]);
            return this;
        },

        _setUpHackNode: function() {
            this._recalculateDims();
            this._attacEvents();
            return this;
        },

        _recalculateDims: function() {
            var $el = this.$el,
                pad = BaseNode.HACKNODE_PADDING * 2,
                pad2 = pad * 2;
            this.$hNode.css({
                height: $el.outerHeight() - pad2 + 'px',
                width: $el.outerWidth() - pad2 + 'px',
                top: pad + 'px',
                left: pad + 'px',
            });
        },

        _attacEvents: function() {
            this.$hNode.on({
                'focus': this._focus.bind(this),
                'focusout': this._focusOut.bind(this),
                'keyup': function(evt) {
                    if (evt.keyCode === 32) {
                        $(this).trigger('click');
                    }
                    //if (evt.keyCode === 9) {
                    //    $(this).trigger('focusout');
                    //}
                }
            });
        },

        setHackText: function(text) {
            var $text = this.$hNode.find('span');
            $text = $text.length !== 0 ? $text : $('<span>', {
                class: 'n-hack-text'
            })
            this.$hNode.html(text);
            return this;
        },

        hide: function() {
            this.$el.hide();
            return this;
        },
        show: function() {
            this.$el.show();
            return this;
        },
        hideHack: function() {
            this.$hNode.removeClass('n-show');
            this.$hNode.addClass('n-hide');

            return this;
        },
        showHack: function() {
            this.$hNode.removeClass('n-hide');
            this.$hNode.addClass('n-show');
            return this;
        },

        _focus: function() {
            //console.log('foucessed :: ', this.$hNode, this.$hNode.html());
            //this.$el.addClass('hover');
            this.showHack();
            return this;
        },
        _focusOut: function() {
            //console.log('foucesOut :: ', this.$hNode, this.$hNode.html());
            //this.$el.removeClass('hover');
            this.hideHack();
            return this;
        },




    }, {
        HACKNODE_PADDING: 2,
        A_TEXT: {

        }
    });
})();