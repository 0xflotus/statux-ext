let currentTheme = "";

const themes = {
  special: {
    colors: {
      accentcolor: "red",
      textcolor: "blue"
    }
  }
};

function setTheme(theme) {
  if (currentTheme === theme) {
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

let query = browser.tabs.query({ url: "file:///*statux*" });
query.then(
  tabs => {
    tabs.forEach(element =>
      setTheme(/statux/.test(element.url) ? "special" : "")
    );
  },
  error => console.log(error)
);
