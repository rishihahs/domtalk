module.exports = {

    /** Get a CSS Selector from a DOM element by using a chain of nth-childs **/
    getSelectorFromElement: function(element) {
        // Top level elements are body and ones with an id
        if (element.tagName.toUpperCase() === 'BODY') {
            return 'body';
        } else if (element.id) {
            return '#' + element.id;
        }

        var parent = element.parentNode;
        var parentLoc = this.getSelectorFromElement(parent);

        // See which index we are in parent. Array#indexOf could also be used here
        var children = parent.childNodes;
        var index = -1;
        for (var i = 0; i < children.length; i++) {
            if (children[i].nodeType === document.ELEMENT_NODE) {
                if (children[i] === element) {
                    index = i;
                }
            }
        }

        return parentLoc + ' *:nth-child(' + (index + 1) + ')';
    }

}