class DomDetails {

    constructor(selector) {

        this.selector = selector;
        this.elem = null;
    }


    setUp = () => {

        this.elem = document.querySelector(this.selector);
        if(this.elem) {

            document.addEventListener('click', e => {

                e.target.closest(this.selector) !== this.elem && this.elem.removeAttribute('open');
            });
        }
    }
}

export default DomDetails;