window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function goToSection(newSection, button) {
  // Look for the active section
  var activeSection = document.querySelector(".section.active");
  var activeButton = document.querySelector(".navbar__link.active");
  // Only make a change if newSection is different
  if (activeSection.id !== newSection) {
    activeSection.classList.remove("active");
    activeButton.classList.remove("active");
    document.getElementById(newSection).classList.add("active");
    document.getElementById(button).classList.add("active");
    if (newSection === "section-contacto") {
      refreshWidgets();
    }
  }
}

function openServiceSection(newServiceSection) {
  // Look for the active service section
  var activeServiceSection = document.querySelector(".service-section.active");
  console.info("active service: ", activeServiceSection.classList);
  // Only make a change if newSection is different
  if (!activeServiceSection.classList.contains(newServiceSection)) {
    console.info(
      "!activeServiceSection.classList.contains(",
      newServiceSection,
      ")"
    );
    activeServiceSection.classList.remove("active");
    document.querySelector(newServiceSection).classList.add("active");
  }
  document.querySelector(".service-section.active").scrollIntoView();
}

function refreshWidgets() {
  console.log("refreshing widgets");
  var iframes = document.querySelector("iframe");
  for (let index = 0; index < iframes.length; index++) {
    iframes[index].contentWindow.location.reload();
  }
}
