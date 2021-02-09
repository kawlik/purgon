class InstantAnim {

    constructor(selector) {

        this.selector = selector;
        this.animation = null;
        this.nodeList = [];
    }


    setUp = animation => {
        this.animation = animation;
        this.nodeList = document.querySelectorAll(this.selector);
        if(this.nodeList.length > 0) {
            
            this.nodeList.forEach(elem => elem.style.animation = this.animation);
        }
    }
}

export default InstantAnim;