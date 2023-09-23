document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const name = document.getElementById("name");
    const paragraph = document.getElementById("paragraph");
    const practice = document.getElementById("practice");

    setTimeout(function () {
        header.style.opacity = "1";
    }, 1000);

    setTimeout(function () {
        name.style.opacity = "1";
    }, 5000);

    setTimeout(function () {
        paragraph.style.opacity = "1";
    }, 10000);

    setTimeout(function () {
        practice.style.opacity = "1";
    }, 15000);
});
