document.addEventListener("DOMContentLoaded", function() {
    let mainSections = document.getElementsByClassName('mainSection');
    for (let i = 1; i < mainSections.length; i++) {
        mainSections[i].style.display = 'none';
    }
    document.getElementsByClassName('sectionSwitchs')[0].className += " active";
});

function openSection(evt, sectionName) {
    let i, mainSection, sectionSwitch;

    mainSection = document.getElementsByClassName('mainSection');
    for (i = 0; i < mainSection.length; i++) {
        mainSection[i].style.display = 'none';
    }

    sectionSwitch = document.getElementsByClassName('sectionSwitchs');
    for (i = 0; i < sectionSwitch.length; i++) {
        sectionSwitch[i].className = sectionSwitch[i].className.replace(" active", "");
    }

    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}
