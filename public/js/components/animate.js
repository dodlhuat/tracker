export let animate = {
    /**
     * element
     *
     * animate an element with the given animation
     * parameters:
     *   duration: duration of animation
     *   showOnStart: remove hidden class on start
     *   hideOnFinish: add hidden class when animation finish
     *
     * @param animation
     * @param element
     * @param parameters
     */
    element: (animation, element, parameters = {}) => {
        if (parameters.duration) {
            element.style.setProperty('--animate-duration', parameters.duration);
        }
        if (parameters.showOnStart) {
            element.classList.remove('hidden');
        }
        element.addEventListener('animationend', removeAllClasses, {once: true});
        element.classList.add('animate__animated', 'animate__' + animation);

        function removeAllClasses(event) {
            event.stopPropagation();
            element.classList.remove(`animate__animated`, 'animate__bounceOutLeft');
            if (parameters.hideOnFinish) {
                element.classList.add('hidden');
            }
        }
    }
}
