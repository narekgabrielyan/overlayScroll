<a name="OverlayScroll"></a>

## OverlayScroll
OverlayScroll classIncludes all functionality which is used to create OverlayScroll component

**Kind**: global class  

* [OverlayScroll](#OverlayScroll)
    * [new OverlayScroll(containerEl, sectionCount)](#new_OverlayScroll_new)
    * [.init()](#OverlayScroll+init)
    * [.onNextSection()](#OverlayScroll+onNextSection)
    * [.onPrevSection()](#OverlayScroll+onPrevSection)
    * [.onChangeSection()](#OverlayScroll+onChangeSection)
    * [.createUI()](#OverlayScroll+createUI)
    * [.destroy()](#OverlayScroll+destroy)

<a name="new_OverlayScroll_new"></a>

### new OverlayScroll(containerEl, sectionCount)
Takes a target container scrollable element and a number of sections as arguments


| Param | Default |
| --- | --- |
| containerEl |  | 
| sectionCount | <code>2</code> | 

**Example**  
```js
const exampleContainer = document.getElementById('example_container_element');const overlayScroll = new OverlayScroll(exampleContainer, 10);// creates an overlayScroll component with 10 scrollable sections in the element with an id 'example_container_element'
```
<a name="OverlayScroll+init"></a>

### overlayScroll.init()
Initializes an overlayScroll class and appends the overlayScroll component into given container element

**Kind**: instance method of [<code>OverlayScroll</code>](#OverlayScroll)  
<a name="OverlayScroll+onNextSection"></a>

### overlayScroll.onNextSection()
**Kind**: instance method of [<code>OverlayScroll</code>](#OverlayScroll)  
<a name="OverlayScroll+onPrevSection"></a>

### overlayScroll.onPrevSection()
Methods onNextSection and onPrevSectionAre used to scroll the overlayScroll bar to the next or the previous sections

**Kind**: instance method of [<code>OverlayScroll</code>](#OverlayScroll)  
**Example**  
```js
window.addEventListener('keydown', (e) => {  if(e.keyCode === 39) {    overlayScroll.onNextSection();  } else if(e.keyCode === 37) {    overlayScroll.onPrevSection();  }});// listening for keydown event and changing to the next// or the previous sections when the right// or the left arrows are being pressed accordingly
```
<a name="OverlayScroll+onChangeSection"></a>

### overlayScroll.onChangeSection()
Changes the scrollbar section thus triggering the scroll changing animation

**Kind**: instance method of [<code>OverlayScroll</code>](#OverlayScroll)  
<a name="OverlayScroll+createUI"></a>

### overlayScroll.createUI()
Creates HTML elements and adds necessary CSS

**Kind**: instance method of [<code>OverlayScroll</code>](#OverlayScroll)  
<a name="OverlayScroll+destroy"></a>

### overlayScroll.destroy()
Call this method whenever you want to remove the overlayScroll component

**Kind**: instance method of [<code>OverlayScroll</code>](#OverlayScroll)  
