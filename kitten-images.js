
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
       images[i].src = 'https://placekitten.com/g/' + images[i].width + '/' + images[i].height;
    };
