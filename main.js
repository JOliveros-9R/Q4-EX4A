function displaySection() {
  var sectionCode = document.getElementById('sectionInput').value.toUpperCase();
  var result = document.getElementById('result');

  switch (sectionCode) {
    case "F":
      result.innerHTML = "Your checking the Fiction Section";
      break;
    case "N":
      result.innerHTML = "Your checking the Non-Fiction Section";
      break;
    case "R":
      result.innerHTML = "Your checking the Reference Section";
      break;
    default:
      result.innerHTML = "Invalid Section Entry";
  }
}

function refreshPage() {
  window.location.reload();
}