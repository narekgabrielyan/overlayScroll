/**
 * OverlayScroll class
 * Includes all functionality which is used to create OverlayScroll component
 * @class
 */
class OverlayScroll {
    /**
     * Takes a target container scrollable element and a number of sections as arguments
     * @param containerEl
     * @param sectionCount
     * @example
     * const exampleContainer = document.getElementById('example_container_element');
     * const overlayScroll = new OverlayScroll(exampleContainer, 10);
     * // creates an overlayScroll component with 10 scrollable sections in the element with an id 'example_container_element'
     * @constructor
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
     * Initializes an overlayScroll class and appends the overlayScroll component into given container element
     * @method
     */
    init() {
        this.createUI();
    }
    /**
     * @method
     */
    onNextSection() {
        const {currentSection, sectionCount} = this;
        if (currentSection < sectionCount - 1) {
            this.currentSection += 1;
            this.onChangeSection();
        }
    }

    /**
     * Methods onNextSection and onPrevSection
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
     * @method
     */
    onPrevSection() {
        const {currentSection} = this;
        if (currentSection > 0) {
            this.currentSection -= 1;
            this.onChangeSection();
        }
    }

    /**
     * Changes the scrollbar section thus triggering the scroll changing animation
     * @method
     */
    onChangeSection() {
        const {track, decimals, units, currentSection} = this;
        track.style.transform = `translateY(${(currentSection) * 100}%)`;
        decimals.style.transform = `translateY(${(Math.floor(currentSection / 10)) * (-100)}%)`;
        units.style.transform = `translateY(${currentSection * (-100)}%)`;
    }

    /**
     * Creates HTML elements and adds necessary CSS
     * @method
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
     * Call this method whenever you want to remove the overlayScroll component
     * @method
     */
    destroy() {
        const {wrapper} = this;
        wrapper.remove();
    }
}
