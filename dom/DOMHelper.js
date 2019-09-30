function createDomElement(type, node, parentNode) {
    let element = document.createElement(type);
    element.setAttribute('id', node.name);

    let parent = parentNode || node.parent;
    let parentElement;
    if (parent != null) {
        parentElement = parent.getDomElement();
    } else {
        parentElement = cc.game.getDomElement();
    }
    parentElement.appendChild(element);
    return element;
};

function createSvgElement(type, pElement) {
    let element = document.createElementNS('http://www.w3.org/2000/svg', type);
    let parentElement = pElement || cc.game.getDomElement();
    parentElement.appendChild(element);
    return element;
};

module.exports = {
    createDomElement,
    createSvgElement,
};