const defaultOptions = {
  linkClass: '.card'
};

const explosionClassName = 'explosion';

const explosionOpenedClassName = 'explosion_Opened';

const explosionTitleClassName = 'explosionTitle';
const explosionDescriptionClassName = 'explosionDescription';
const explosionCounterClassName = 'explosionCounter';
const explosionControlsClassName = 'explosionControls';

const explosionSummaryClassName = 'explosionSummary';
const explosionSummaryContentClassName = 'explosionSummaryContent';

const explosionNavsClassName = 'explosionNavs';
const explosionNavClassName = 'explosionNav';
const explosionNavPrevClassName = 'explosionNavPrev';
const explosionNavNextClassName = 'explosionNavNext';

const explosionImagesClassName = 'explosionImages';
const explosionImageClassName = 'explosionImage';


export class ExplosionGallery {
  constructor(elementNode, options) {
    this.options = {
      ...defaultOptions,
      ...options
    };

    this.containerNode = elementNode;
    this.linkNodes = elementNode.querySelectorAll(this.options.linkClass);
    this.appendNode = document.querySelector('.portfolio');

    this.minWidth = 360;
    this.minHeight = 600;
    this.padding = 2 * 16;
    this.showingCount = 4;
    this.currentIndex = 5;

    this.size = this.linkNodes.length;

    this.initGallery();
    this.eventsHandlers();
  }

  initGallery() {
    this.modalContainerNode = document.createElement('div');
    this.modalContainerNode.className = explosionClassName;

    this.modalContainerNode.innerHTML = `
    <div class="${explosionSummaryClassName}">
      <div class="${explosionSummaryContentClassName}">
        <h2 class="${explosionTitleClassName}"></h2>
        <p class="${explosionDescriptionClassName}"></p>
      </div>
    </div>
    <div class="${explosionControlsClassName}">
      <div class="${explosionNavsClassName}">
        <button class="${explosionNavClassName} ${explosionNavPrevClassName}">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
        <div class="${explosionCounterClassName}">1/${this.size}</div>
        <button class="${explosionNavClassName} ${explosionNavNextClassName}">
          <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="${explosionImagesClassName}">
      ${Array.from(this.linkNodes)
      .map((linkNode) => `
      <img src="${linkNode.getAttribute('href')}" alt="${linkNode.dataset.title}" class="${explosionImageClassName}" data-title="${linkNode.dataset.title}" 
      data-description="${linkNode.dataset.description}" />`
      ).join('')}</div>`;

    this.explosionImageNodes = this.modalContainerNode.querySelectorAll(`.${explosionImageClassName}`);
    this.explosionSummaryNode = this.modalContainerNode.querySelector(`.${explosionSummaryClassName}`);
    this.explosionNavsNode = this.modalContainerNode.querySelector(`.${explosionNavsClassName}`);
    this.explosionNavPrevNode = this.modalContainerNode.querySelector(`.${explosionNavPrevClassName}`);
    this.explosionNavNextNode = this.modalContainerNode.querySelector(`.${explosionNavNextClassName}`);
    this.explosionCouterNode = this.modalContainerNode.querySelector(`.${explosionCounterClassName}`);
    this.explosionTitleNode = this.modalContainerNode.querySelector(`.${explosionTitleClassName}`);
    this.explosionDescriptionNode = this.modalContainerNode.querySelector(`.${explosionDescriptionClassName}`);
    this.explosionSummaryContentNode = this.modalContainerNode.querySelector(`.${explosionSummaryContentClassName}`);


    this.modalContainerNode.classList.add(explosionOpenedClassName);
    this.appendNode.appendChild(this.modalContainerNode);

    this.setInitSizesToImages();
    this.setInitPositionsToImages();

    this.switchChanges();
  }

  eventsHandlers() {
    this.throttLedResize = throttle(this.resize, 200);
    window.addEventListener('resize', this.throttLedResize);
    this.explosionNavsNode.addEventListener('click', this.switchImage);


  }

  resize = () => {
    if (this.modalContainerNode.classList.contains(explosionOpenedClassName)) {
      this.setInitSizesToImages();
      this.setGalleryStyles();
    }
  };

  setInitSizesToImages() {
    this.linkNodes.forEach((linkNode, index) => {
      const data = linkNode.getBoundingClientRect();
      this.explosionImageNodes[index].style.width = data.width + 'px';
      this.explosionImageNodes[index].style.height = data.height + 'px';
    });
  }

  setInitPositionsToImages() {
    this.linkNodes.forEach((linkNode, index) => {
      const data = linkNode.getBoundingClientRect();
      this.setPositionStyles(
        this.explosionImageNodes[index],
        data.left,
        data.top
      );
    });
  }

  setPositionStyles(element, x, y) {
    element.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  }

  switchChanges(hasSummaryAnimation) {
    this.setCurrentState();
    this.switchDisabledNav();
    this.changeCounter();
    this.changeSummary(hasSummaryAnimation);
  }

  setCurrentState() {
    this.explosionPrevHiddenImageNodes = [];
    this.explosionPrevShowingImageNodes = [];
    this.explosionActiveImageNodes = [];
    this.explosionNextShowingImageNodes = [];
    this.explosionNextHiddenImageNodes = [];

    this.explosionImageNodes.forEach((imageNode, index) => {
      if (index + this.showingCount < this.currentIndex) {
        this.explosionPrevHiddenImageNodes.unshift(imageNode);
      } else if (index < this.currentIndex) {
        this.explosionPrevShowingImageNodes.unshift(imageNode);
      } else if (index === this.currentIndex) {
        this.explosionActiveImageNodes.push(imageNode);
      } else if (index <= this.currentIndex + this.showingCount) {
        this.explosionNextShowingImageNodes.push(imageNode);
      } else {
        this.explosionNextHiddenImageNodes.push(imageNode);
      }
    });

    this.setGalleryStyles();


  }

  setGalleryStyles() {
    const currentWidth = window.innerWidth > 1200 ? window.innerWidth - 300 : window.innerWidth;
    const imageWidth = this.linkNodes[0].offsetWidth;
    const imageHeight = this.linkNodes[0].offsetHeight;
    const modalWidth = Math.max(this.minWidth, currentWidth);
    const modalHeight = Math.max(this.minHeight, window.innerHeight);

    this.explosionPrevHiddenImageNodes.forEach((node) => (
      this.setImageStyles(node, {
        top: -modalHeight,
        left: 0.29 * modalWidth,
        opacity: 0.1,
        zIndex: 1,
        scale: 0.4
      })
    ));

    this.setImageStyles(this.explosionPrevShowingImageNodes[0], {
      top: (modalHeight - imageHeight),
      left: 0.25 * modalWidth,
      opacity: 0.4,
      zIndex: 4,
      scale: 0.75
    });

    this.setImageStyles(this.explosionPrevShowingImageNodes[1], {
      top: 0.35 * modalHeight,
      left: 0.06 * modalWidth,
      opacity: 0.3,
      zIndex: 3,
      scale: 0.6
    });

    this.setImageStyles(this.explosionPrevShowingImageNodes[2], {
      top: 0,
      left: 0.15 * modalWidth,
      opacity: 0.2,
      zIndex: 2,
      scale: 0.5
    });

    this.setImageStyles(this.explosionPrevShowingImageNodes[3], {
      top: -0.3 * modalHeight,
      left: 0.29 * modalWidth,
      opacity: 0,
      zIndex: 1,
      scale: 0.4
    });

    this.explosionActiveImageNodes.forEach((node) => (this.setImageStyles(node, {
      top: (modalHeight - imageHeight) / 2,
      left: (modalWidth - imageWidth) / 2,
      opacity: 1,
      zIndex: 5,
      scale: 1.2
    })));

    this.setImageStyles(this.explosionNextShowingImageNodes[0], {
      top: 0,
      left: 0.52 * modalWidth,
      opacity: 0.4,
      zIndex: 4,
      scale: 0.75
    });

    this.setImageStyles(this.explosionNextShowingImageNodes[1], {
      top: 0.12 * modalHeight,
      left: 0.72 * modalWidth,
      opacity: 0.3,
      zIndex: 3,
      scale: 0.6
    });

    this.setImageStyles(this.explosionNextShowingImageNodes[2], {
      top: 0.47 * modalHeight,
      left: 0.67 * modalWidth,
      opacity: 0.2,
      zIndex: 2,
      scale: 0.5
    });

    this.setImageStyles(this.explosionNextShowingImageNodes[3], {
      top: 0.67 * modalHeight,
      left: 0.53 * modalWidth,
      opacity: 0.1,
      zIndex: 1,
      scale: 0.4
    });

    this.explosionNextHiddenImageNodes.forEach((node) => (
      this.setImageStyles(node, {
        top: modalHeight,
        left: 0.53 * modalWidth,
        opacity: 0.1,
        zIndex: 1,
        scale: 0.4
      })
    ));


    this.explosionSummaryNode.style.width = '50%';

  }

  switchImage = (event) => {
    event.preventDefault();

    const buttonNode = event.target.closest('button');
    if (!buttonNode) {
      return;
    }
    if (buttonNode.classList.contains(explosionNavPrevClassName) && this.currentIndex > 0) {
      this.currentIndex -= 1;
    }

    if (buttonNode.classList.contains(explosionNavNextClassName) && this.currentIndex < this.size - 1) {
      this.currentIndex += 1;
    }

    this.switchChanges(true);
  };

  setImageStyles(element, {
    top,
    left,
    opacity,
    zIndex,
    scale
  }) {
    if (!element) {
      return;
    }

    element.style.opacity = opacity;
    element.style.transform = `translate3d(${left.toFixed(1)}px, ${top.toFixed(1)}px, 0) scale(${scale})`;
    element.style.zIndex = zIndex;
  }

  switchDisabledNav() {
    if (this.currentIndex === 0 && !this.explosionNavPrevNode.disabled) {
      this.explosionNavPrevNode.disabled = true;
    }
    if (this.currentIndex > 0 && this.explosionNavPrevNode.disabled) {
      this.explosionNavPrevNode.disabled = false;
    }
    if (this.currentIndex === this.size - 1 && !this.explosionNavNextNode.disabled) {
      this.explosionNavNextNode.disabled = true;
    }
    if (this.currentIndex < this.size - 1 && this.explosionNavNextNode.disabled) {
      this.explosionNavNextNode.disabled = false;
    }
  }

  changeCounter() {
    this.explosionCouterNode.innerText = `${this.currentIndex + 1}/${this.size}`;
  }

  changeSummary(hasAnimation) {
    const content = this.explosionImageNodes[this.currentIndex].dataset;
    if (hasAnimation) {
      this.explosionSummaryContentNode.style.opacity = 0;
      setTimeout(() => {
        this.explosionTitleNode.innerText = content.title;
        this.explosionDescriptionNode.innerText = content.description;
        this.explosionSummaryContentNode.style.opacity = 1;
      }, 300);
    } else {
      this.explosionTitleNode.innerText = content.title;
      this.explosionDescriptionNode.innerText = content.description;
    }
  }
}

function throttle(callback, delay = 200) {
  let isWaiting = false;
  let savedArgs = null;
  let savedThis = null;
  return function wrapper(...args) {
    if (isWaiting) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    callback.apply(this, args);

    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
      if (savedThis) {
        wrapper.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, delay);
  };
}
