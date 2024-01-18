// Settings
function ToggleSettings() {
    var SettingsUI = document.querySelector("#settings")
    if (SettingsUI.style.display === "flex") {
        SettingsUI.style.display = "none"
    } else {
        SettingsUI.style.display = "flex"
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
}, 0o500);