/**
 *  - - - OverlayScroll class - - -
 * @class
 * Includes all functionality which is used to create OverlayScroll component
 */
class OverlayScroll {
    /**
     * @constructor
     * Takes the target container scrollable element and number of sections as an argument
     * @param containerEl
     * @param sectionCount
     * @example
     * const exampleContainer = document.getElementById('example_container_element');
     * const overlayScroll = new OverlayScroll(exampleContainer, 12);
     * // creates an overlayScroll component in the element with an id 'example_container_element'
     */
    constructor(containerEl, sectionCount = 2) {
        this.containerEl = containerEl;
        this.sectionCount = sectionCount;
        this.currentSection = 0;
        if (containerEl) {
            this.init();
        }
    }
    /**
     * @method onNextSection
     * Initializes an overlayScroll class and appends the overlayScroll component into given container element
     */
    init() {
        this.createUI();
    }
    /**
     * @methods onNextSection and onPrevSection
     * Are used to scroll the overlayScroll bar to the next or the previous sections
     * @example
     * window.addEventListener('keydown', (e) => {
     *   if(e.keyCode === 39) {
     *     overlayScroll.onNextSection();
     *   } else if(e.keyCode === 37) {
     *     overlayScroll.onPrevSection();
     *   }
     * });
     * // listening for keydown event and changing to the next
     * // or the previous sections when the right
     * // or the left arrows are being pressed accordingly
     */
    onNextSection() {
        const {currentSection, sectionCount} = this;
        if (currentSection < sectionCount - 1) {
            this.currentSection += 1;
            this.onChangeSection();
        }
    }
    onPrevSection() {
        const {currentSection} = this;
        if (currentSection > 0) {
            this.currentSection -= 1;
            this.onChangeSection();
        }
    }

    /**
     * @method onChangeSection
     * Changes the scrollbar thus making the scroll changing animation
     */
    onChangeSection() {
        const {track, decimals, units, currentSection} = this;
        track.style.transform = `translateY(${(currentSection) * 100}%)`;
        decimals.style.transform = `translateY(${(Math.floor(currentSection / 10)) * (-100)}%)`;
        units.style.transform = `translateY(${currentSection * (-100)}%)`;
    }

    /**
     * @method createUI
     * Creates html and adds necessary styles
     */
    createUI() {
        const {containerEl, sectionCount} = this;

        const wrapper = createEl('div', {
            className: 'wrapper--overlayScroll',
            style: {height: `${sectionCount * 36}px`}
        });
        const track = createEl('div', {className: 'track--overlayScroll'});
        const decimals = createEl('div', {className: 'decimals--overlayScroll'})
        const units = createEl('div', {className: 'units--overlayScroll'})

        for (let dmCount = 0; dmCount <= Math.floor(sectionCount / 10); dmCount++) {
            const decimal = createEl('span', {innerText: dmCount});
            decimals.append(decimal);
        }

        for (let unitCount = 0; unitCount < sectionCount; unitCount++) {
            const unit = createEl('span', {innerText: unitCount % 10});
            units.append(unit);
        }

        track.append(decimals, units);
        wrapper.append(track);
        containerEl.append(wrapper);

        this.wrapper = wrapper;
        this.track = track;
        this.decimals = decimals;
        this.units = units;
    }
    /**
     * @method destroy
     * Call this method whenever you want to remove the overlayScroll component
     */
    destroy() {
        const {wrapper} = this;
        wrapper.remove();
    }
}
