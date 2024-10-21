// DOM contents
document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.querySelector("button[type='submit']");
  const nameInput = document.querySelector("input[placeholder='Enter your name']");
  const emailInput = document.querySelector("input[placeholder='Enter your email']");
  const contactInput = document.querySelector("input[placeholder='Contact Number']");
  const serviceSelect = document.querySelector("select[name='choose']");
  const packageRadios = document.querySelectorAll("input[name='package']");
  const languageSelect = document.querySelector("select[name='choose']");
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const suggestionsText = document.querySelector("textarea[placeholder='Enter your comment here...']");

  submitButton.addEventListener("click", function(event) {
      event.preventDefault(); 

      // Get selected package value
      let selectedPackage = "";
      packageRadios.forEach(radio => {
          if (radio.checked) {
              selectedPackage = radio.value;
          }
      });

      // Get selected checkboxes values
      let selectedLanguages = [];
      checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
              selectedLanguages.push(checkbox.value);
          }
      });

      // Creates an object to hold the data
      const formData = {
          name: nameInput.value,
          email: emailInput.value,
          contact: contactInput.value || "N/A",
          service: serviceSelect.value,
          package: selectedPackage,
          language: languageSelect.value,
          necessaryLanguages: selectedLanguages,
          suggestions: suggestionsText.value
      };

      // Convert the object to JSON format
      const jsonData = JSON.stringify(formData, null, 2);

      // Log the JSON data to the console
      console.log(jsonData);
      
      alert("Form data saved successfully. Please contact us from social media handles to get more information.");
  });
});
