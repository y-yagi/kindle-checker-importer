const url = "https://kindle-edition-checker.herokuapp.com/books/import"

function onClickHandler(info, tab) {
  let body = "url="+info.pageUrl;

  window.fetch(url, {
    method: 'post',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    credentials: "include",
    body: body
  }).then((response) => {
    console.log(response);
  });
}

chrome.contextMenus.onClicked.addListener(onClickHandler);
chrome.contextMenus.create({title: "Save to kindleEditionChecker"});
