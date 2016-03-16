

function kosbie_face_click_handler() {
    alert("ouch");
}




function on_page_ready() {
    $(".kosbiesface").click(kosbie_face_click_handler)
}


$(document).ready(on_page_ready)