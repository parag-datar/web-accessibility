/// <reference path="vendor/jquery-1.11.3.min.js" />
/// <reference path="views/base-node.js" />
(function() {
    var accessibleNodes = [];
    var HotKeys = {
        66: 'B',
        98: 'B',
        67: 'C',
        99: 'C',
        73: 'I',
        105: 'I',
        108: 'L',
        76: 'L',

    };
    var onReady = function() {

        //createAccessibleNode($('#n-nav'));
        //createAccessibleNode($('#n-container'));
        //createAccessibleNode($('#item1'));
        //createAccessibleNode($('#item2'));

        $('[n-access-order]').each(createAccessibleNode);
        attachMenuEvents();
        $(window).on('keyup', hotKeyHandler);
    }

    var attachMenuEvents = function() {
        $('#navbar li').on({
            click: function() {
                var $this = $(this);
                var currentNode = $this.find('a').first().data().viewID;
                _.findWhere(accessibleNodes, { cid: currentNode }).$el.blur();

                if (!$this.hasClass('active')) {
                    $this.siblings().removeClass('active');
                    $this.addClass('active');
                    $this.siblings().each(function(i, elem) {
                        $('#' + $(elem).attr('menu')).removeClass('show').addClass('hide');
                    });
                    var $menubody = $('#' + $this.attr('menu'));
                    $menubody.removeClass('hide').addClass('show');
                    var cid = $menubody.data().viewID;
                    var menubodyView = _.findWhere(accessibleNodes, { cid: cid });
                    menubodyView._focus();
                    menubodyView.$el.focus().trigger('focusin').one('focusout', function() {
                        menubodyView._focusOut();
                    });

                }
            }
        });

        $('.menu-item').addClass('hide');
        $('#home').addClass('show');
        var cid = $('#n-container').data().viewID;
        _.findWhere(accessibleNodes, { cid: cid })._recalculateDims();
        $(window).on('resize', function() {
            _.findWhere(accessibleNodes, { cid: cid })._recalculateDims();
        })
    }

    var createAccessibleNode = function(index, elem) {
        var $elem = $(elem),
            item = new window.Hackathon.Views.BaseNode({
                el: $elem
            });
        $elem.data({
            viewID: item.cid
        });
        accessibleNodes.push(item);
    }

    var hotKeyHandler = function(evt) {
        var $menuBody = menubodyView = cid = null;
        switch (HotKeys[evt.keyCode]) {
            case 'B':
                $menuBody = $('[menu=banking]');
                break;
            case 'C':
                $menuBody = $('[menu=credit]');
                break;
            case 'I':
                $menuBody = $('[menu=insurance]');
                break;
            case 'L':
                $menuBody = $('[menu=loans]');
                break;
            default:
                return
        }
        $menuBody.trigger('click');

    }
    $(document).ready(onReady);
})();