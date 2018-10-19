chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "importBook") {
    importBook();
  }
});

function importBook() {
  const url = "https://kindle-edition-checker.herokuapp.com/books/import";

  const element = document.getElementById("detail_bullets_id");
  if (!element) {
    console.log("[INFO] 'detail_bullets_id' not found");
    return;
  }

  const matched = element.innerHTML.match("ISBN-10:</b> ([0-9]{10})");
  if (!matched) {
    console.log("[INFO] 'ISBN-10' not found");
    return;
  }

  const body = `isbn_10=${matched[1]}`;

  window
    .fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      credentials: "include",
      body: body
    })
    .then(response => {
      console.log(response);
    });
}
