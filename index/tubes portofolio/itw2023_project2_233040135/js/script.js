// alerts //
var myAlert = document.getElementById('myAlert');

myAlert.style.display = 'none'

function myFunction() {
  myAlert.style.display = 'block'
}

// Clear the text before upload //
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};