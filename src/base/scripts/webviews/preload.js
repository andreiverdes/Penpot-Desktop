// Set the title of the tab name
/// Instead of the tab name being "PAGE_NAME - Penpot", this script will remove the " - Penpot" portion.
function setTitleDash() {document.title = "Penpot Dashboard"}
function setTitle() {document.title = document.querySelector("#workspace > header > div.left-area > div.menu-section > div.project-tree > span:nth-child(2)").innerText}

function titleModified() {
    if (document.querySelector(".dashboard-layout") !== null) {
        setTitleDash() // Set title to "Penpot Dashboard"
    }
    if (document.querySelector("#workspace") !== null) {
        setTitle() // Set title to only project name
    }
    else {}
}


/// Credit: https://stackoverflow.com/a/2499119/15103862
window.onload = function() {
    var titleEl = document.getElementsByTagName("title")[0]
    var docEl = document.documentElement

    if (docEl && docEl.addEventListener) {
        docEl.addEventListener("DOMSubtreeModified", function(evt) {
            var t = evt.target
            if (t === titleEl || (t.parentNode && t.parentNode === titleEl)) {
                titleModified()
            }
        }, false)
    } else {
        document.onpropertychange = function() {
            if (window.event.propertyName == "title") {
                titleModified()
            }
        }
    }
}