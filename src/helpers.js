function createEl(tagName, props = {}) {
    const el = document.createElement(tagName);
    Object.assign(el, props);
    Object.assign(el.style, props.style);
    return el;
}