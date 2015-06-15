/**
 * Created by Gerardo on 6/13/2015.
 */
var Posts = function () {
	this.postContainer = null;
	this.detectPosts = function () {
		this.postContainer = document.getElementsByClassName('Post');
	};

	this.addDetectionTop = function () {
		this.detectPosts();
		var size, element = null;
		var altura = window.screen.height;
		for (var i in this.postContainer) {
			if (typeof(this.postContainer[i]) == 'object') {
				element = this.postContainer[i];
				size = element.getBoundingClientRect();
				if (size.top < altura && size.top > 0 && size.bottom < altura && size.bottom > 0) {
					element.classList.add('Post-animar');
				}else{
					element.classList.remove('Post-animar');
				}
			}
		}
	};
};
