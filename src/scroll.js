class OverlayScroll {
    constructor(containerEl, sectionCount) {
        if (containerEl && sectionCount > 0) {
            this.containerEl = containerEl;
            this.sectionCount = sectionCount;
            this.currentSection = 0;
            this.init();
        }
    }

    init() {
        this.createHtml();
        this.onWindowScroll();
    }

    onWindowScroll() {
        let oldScrollTop = 0;
        window.addEventListener('scroll', (e) => {
            console.log(e)
            let newScrollTop = document.documentElement.scrollTop;
            if(newScrollTop > oldScrollTop) {
                this.onNextSection();
            } else {
                this.onPrevSection();
            }
            oldScrollTop = newScrollTop <= 0 ? 0 : newScrollTop;
        }, false);
    }

    onNextSection() {
        const {currentSection, sectionCount} = this;
        if(currentSection < sectionCount - 1) {
            this.currentSection += 1;
            this.onChangeSection();
        }
    }

    onPrevSection() {
        const {currentSection} = this;
        if(currentSection > 0) {
            this.currentSection -= 1;
            this.onChangeSection();
        }
    }

    onChangeSection() {
        const {track, decimals, units, currentSection} = this;
        track.style.transform = `translateY(${(currentSection) * 100}%)`;
        decimals.style.transform = `translateY(${(Math.floor(currentSection / 10)) * (-100)}%)`;
        units.style.transform = `translateY(${currentSection * (-100)}%)`;
    }

    createHtml() {
        const {containerEl, sectionCount} = this;

        const wrapper = createEl('div', {className: 'wrapper--overlayScroll', style: {height: `${sectionCount * 36}px`}});
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

        this.track = track;
        this.decimals = decimals;
        this.units = units;
    }
}