const links = [
    "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10",
    "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
];

let i = 0;
function move(howMuch) {
    i = i + howMuch;
    if (i >= links.length) {
        i = 0;
    } else if (i < 0) {
        i = links.length - 1;
    }
    document.getElementById("slide").src = links[i];
}
function openAP(course) {
    if (course === "principles") {
        window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-principles", "_blank");
    }

    else if (course === "a") {
        window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-a", "_blank");
    }
}