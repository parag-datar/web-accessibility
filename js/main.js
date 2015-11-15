/// <reference path="vendor/jquery-1.11.3.min.js" />
/// <reference path="views/base-node.js" />
(function() {
    var accessibleNodes = [];
    var onReady = function() {

        //createAccessibleNode($('#n-nav'));
        //createAccessibleNode($('#n-container'));
        //createAccessibleNode($('#item1'));
        //createAccessibleNode($('#item2'));

        $('[n-access-order]').each(createAccessibleNode);

    }
    var createAccessibleNode = function(index,elem) {
        var item = new window.Hackathon.Views.BaseNode({
            el: $(elem)
        });
        accessibleNodes.push(item);
    }

    var ACCESSIBILITY_TEXT = {
        "10":''
    }
    $(document).ready(onReady);
})();