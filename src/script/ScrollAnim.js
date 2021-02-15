class ScrollAnim {

    constructor(selector) {

        this.selector = selector;
        this.animation = null;
        this.nodeList = [];
    }


    setUp = animation => {
        this.animation = animation;
        this.nodeList = document.querySelectorAll(this.selector);
        if(this.nodeList.length > 0) {
            
            this.nodeList = [...this.nodeList];
            this.nodeList.forEach(elem => elem.style.opacity = '0');

            this.checkWidth();
            this.startListening(this.checkWidth);
        }
    }


    restore = () => {
        this.nodeList = document.querySelectorAll(this.selector);
        if(this.nodeList.length > 0) {
            
            this.nodeList = [...this.nodeList];
            this.nodeList.forEach(elem => {
                elem.style.opacity = '1';
                this.removeAnimation(elem);
                this.nodeList = this.nodeList.filter(e => e !== elem);
            });
        }
    }


    startListening = callback => {
        document.addEventListener('scroll', callback);
    }


    stopListening = callback => {
        document.removeEventListener('scroll', callback);
    }


    checkWidth = () => {
        this.nodeList.forEach(elem => {

            if(elem.offsetTop - window.innerHeight < window.pageYOffset) {
                this.addAnimation(elem);
                this.nodeList = this.nodeList.filter(e => e !== elem);
            }
        });

        if(this.nodeList.length === 0) {
            this.stopListening(this.checkWidth);
        }
    }


    addAnimation = elem => {
        elem.style.animation = this.animation;
    }

    removeAnimation = elem => {
        elem.style.animation = '';
    }
}

export default ScrollAnim;