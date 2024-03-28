// Settings
function ToggleSettings() {
    var SettingsUI = document.querySelector("#settings")
    if (SettingsUI.style.display === "flex") {
        SettingsUI.style.display = "none"
    } else {
        SettingsUI.style.display = "flex"
    }
}

// Detect if there are no tabs
setTimeout(() => {
    document.querySelector("body > sl-include:nth-child(4) > tab-group").shadowRoot.querySelector("div > nav > div.tabs > div > span.tab-close").addEventListener('click', function(){ATWC()})
    document.querySelector("body > sl-include:nth-child(4) > tab-group").shadowRoot.querySelector("div > nav > div.buttons > button").addEventListener('click', function(){ATWC()})
}, 2000)
function ATWC() {
    var element = document.querySelector("body > sl-include:nth-child(4) > tab-group").shadowRoot.querySelector("div > nav > div.tabs > *")
    if (typeof(element) != 'undefined' && element != null)
    {
        document.querySelector('.no-tabs-exist').style.display = 'none'
        document.querySelector("body > sl-include:nth-child(4) > tab-group").shadowRoot.querySelector("div > nav > div.tabs > div > span.tab-close").addEventListener('click', function(){ATWC()})
    }
    else {
        document.querySelector('.no-tabs-exist').style.display = 'inherit'
        document.querySelector("body > sl-include:nth-child(4) > tab-group").shadowRoot.querySelector("div > nav > div.tabs > div > span.tab-close").addEventListener('click', function(){ATWC()})
    }
}


// Alerts
/// Docs: https://shoelace.style/getting-started/usage#methods
/// No Instance
function ShowNoInstance() {document.querySelector('#noinstance').show()}
function HideNoInstance() {document.querySelector('#noinstance').hide()}

setTimeout(() => {
    if (document.querySelector("#InstanceField").value === "") {
        ShowNoInstance()
    }
}, 1000);