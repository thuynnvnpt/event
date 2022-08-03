function getTarget(e){
    if (!e){
        e = window.event;
    }
    return e.target|| e.srcElement;
}
function itemDone(e){
    var target, elParent,elGrandparent;
    target = getTarget(e);

    if (target.nodeName.toLowerCase () == "a"){
        elListItem = target.parentNode;
        elist = elListItem.parentNode;
        elist.removeChild(elListItem);
    }
if (target.nodeName.toLowerCase() == "em"){
    elListItem = target.parentNode.parentNode;
    elist = elListItem.parentNode;
    elist.removeChild(elListItem);
}
if (e.preventDefault) {
    e.preventDefault();
}else {
    e.returnValue = false;
}
}
var el = document.getElementById('shoppingList');
if (el.addEventListener){
    el.addEventListener('click',function (e){
        itemDone(e)
    }, false);
} else {
    el.attachEvent('onclick',function (e) {
        itemDone(e);
    });
}
