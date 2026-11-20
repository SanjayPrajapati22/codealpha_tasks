
let images = document.querySelectorAll(".gallery-item img");
let items = document.querySelectorAll(".gallery-item");
let buttons = document.querySelectorAll(".filters button");

let lightbox = document.getElementById("lightbox");
let bigImage = document.getElementById("lightbox-img");

let close = document.getElementById("close");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let index = 0;

// Open image
images.forEach(function(img, i) {
    img.onclick = function() {
        index = i;
        bigImage.src = images[index].src;
        lightbox.style.display = "flex";
    };
});

// Next button
next.onclick = function() {
    index++;

    if(index >= images.length) {
        index = 0;
    }

    bigImage.src = images[index].src;
};

// Previous button
prev.onclick = function() {
    index--;

    if(index < 0) {
        index = images.length - 1;
    }

    bigImage.src = images[index].src;
};

// Close button
close.onclick = function() {
    lightbox.style.display = "none";
};

// Close by clicking outside image
lightbox.onclick = function(e) {
    if(e.target == lightbox) {
        lightbox.style.display = "none";
    }
};

// Filter images
buttons.forEach(function(btn) {
    btn.onclick = function() {

        buttons.forEach(function(b) {
            b.classList.remove("active");
        });

        btn.classList.add("active");

        let category = btn.getAttribute("data-filter");

        items.forEach(function(item) {

            if(category == "all") {
                item.style.display = "block";
            }
            else if(item.getAttribute("data-category") == category) {
                item.style.display = "block";
            }
            else {
                item.style.display = "none";
            }

        });
    };
});
