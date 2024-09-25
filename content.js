// Example: Change the background color of the body to light yellow on Symplicity pages
document.body.style.backgroundColor = "lightyellow";

// You can also log some information to the console
console.log("Content script is running on Symplicity.");

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Message received in content.js:", request.message);

  const response = {
    jobTitle: getJobTitle().textContent,
    jobEmployer: getJobEmployer().textContent,
    datePosted: getDatePosted().textContent,
    jobLocation: getJobLocation().textContent,
    jobDescription: getJobDescription().textContent,
  };

  console.log(response);

  // Do something with the message and send a response
  sendResponse({ message: response });
});

function getJobTitle() {
  return document.querySelector("a.job-title.ng-star-inserted");
}

function getJobEmployer() {
  return document.querySelector("a.text-base.font-size-base");
}

function getDatePosted() {
  return document.querySelector(
    "span.header-title-label.body-small.secondary-text.display-md-none.display-lg-none.display-desktop-none.ng-star-inserted"
  );
}

function getJobLocation() {
  return document.querySelector(
    'span.body-small[ng-reflect-ng-class="body-small"]'
  );
}

function getJobDescription() {
  return document.querySelector(
    "div.text-overflow.space-top-lg.text-gray.p-group.field-widget-tinymce"
  );
}
