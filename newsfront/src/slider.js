import Vue from "vue"

export default new Vue({
    name: 'image-slider',
    data: {
    images: ['../public/images/slider.jpg', '../public/images/slider1.jpg'],
    currentNumber: 0,
    timer: null
    },

ready: function () {
    this.startRotation();
},

methods: {
    startRotation: function() {
        this.timer = setInterval(this.next, 3000);
    },

    stopRotation: function() {
        clearTimeout(this.timer);
        this.timer = null;
    },

    next: function() {
        this.currentNumber += 1
    }
}

});