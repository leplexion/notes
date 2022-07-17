/*
    见: https://stackoverflow.com/questions/16056666/expand-select-dropdown
    该函数基于jquery
    在该网站上亲测有效: 
        https://www.bijiaqi.com/
*/

function openDropdown(elementId) {
    function down() {
        var pos = $(this).offset(); // remember position
        var len = $(this).find("option").length;
            if(len > 20) {
                len = 20;
            }
        $(this).css("position", "absolute");
        $(this).css("zIndex", 9999);
        $(this).offset(pos);   // reset position
        $(this).attr("size", len); // open dropdown
        $(this).unbind("focus", down);
        $(this).focus();
    }
    function up() {
        $(this).css("position", "static");
        $(this).attr("size", "1");  // close dropdown
        $(this).unbind("change", up);
        $(this).focus();
    }
    $("#" + elementId).focus(down).blur(up).focus();
}