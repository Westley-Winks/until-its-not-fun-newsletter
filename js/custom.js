// Insert custom javascript here.
function show() {

    /* Access image by id and change
    the display property to block*/
    var contentId = document.getElementById("hidden-image");

    if (contentId.style.display === "none") {
        contentId.style.display = "block";
      } else {
        contentId.style.display = "none";
      }
}