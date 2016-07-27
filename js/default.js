function workflowContentEffect() {
    var workflowContentElement = document.getElementsByClassName('workflow'),
        workflowContentElementHeight;

    if (!workflowContentElement.length) {
        return false;
    }

    workflowContentElementHeight = workflowContentElement[0].offsetHeight;
    document.getElementsByClassName('further-introduction')[0].style.marginBottom = workflowContentElementHeight + 'px';
}

document.addEventListener("DOMContentLoaded", function () {
    workflowContentEffect();
});

window.onresize = function() {
    workflowContentEffect();
};