module.exports = function () {

    return function (fragileArrayReference) {
        var chain = {
            emptyContents: function () {
                emptyContentsOf(chain.reference);
                return chain;
            },
            replaceContentsWith: function (newContents) {
                replaceContentsOf(chain.reference, newContents);
                return chain;
            },
            append: function (moreContents) {
                appendTo(chain.reference, moreContents);
                return chain;
            }
        };
        chain.reference = fragileArrayReference;
        return chain;
    }

    function emptyContentsOf (fragileArrayReference) {
        fragileArrayReference.length = 0;
    }
    function replaceContentsOf (fragileArrayReference, newContents) {
        emptyContentsOf(fragileArrayReference);
        fragileArrayReference.push.apply(fragileArrayReference, newContents);
    }
    function appendTo (fragileArrayReference, moreContents) {
        fragileArrayReference.push.apply(fragileArrayReference, moreContents);
    }
}
