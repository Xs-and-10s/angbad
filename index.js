module.exports = function () {

    return function (referenceToMutableArray) {
        var chain = {
            empty: function () {
                emptyContentsOf(chain.reference);
                return chain;
            },
            swap: function (newContents) {
                replaceContentsOf(chain.reference, newContents);
                return chain;
            },
            append: function (moreContents) {
                appendTo(chain.reference, moreContents);
                return chain;
            }
        };
        chain.reference = referenceToMutableArray;
        return chain;
    }

    function emptyContentsOf (referenceToMutableArray) {
        referenceToMutableArray.length = 0;
    }
    function replaceContentsOf (referenceToMutableArray, newContents) {
        referenceToMutableArray.length = 0;
        referenceToMutableArray.push.apply(referenceToMutableArray, newContents);
    }
    function appendTo (referenceToMutableArray, moreContents) {
        referenceToMutableArray.push.apply(referenceToMutableArray, moreContents);
    }
}
