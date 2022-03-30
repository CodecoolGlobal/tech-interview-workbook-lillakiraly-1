var preview = Docsify.dom.find('.demo-theme-preview');
var themes = Docsify.dom.findAll('[data-is-theme]');
var defaultThemeTitle = 'vue';
var currentThemeTitle = getCookie('theme') || defaultThemeTitle;
window.setTheme = function (themeTitle) {
  themes.forEach(function (theme) {
    theme.disabled = theme.title !== themeTitle
  });
};
window.setTheme('');
window.setTheme(currentThemeTitle);
preview.onclick = function (e) {
  var title = e.target.getAttribute('data-theme')
  if (title) {
    window.setTheme(title);
    setCookie('theme', title);
  }
};
