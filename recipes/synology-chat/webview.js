function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const _path = _interopRequireDefault(require('path'));

module.exports = Ferdium => {
  Ferdium.handleDarkMode(isEnabled => {
    localStorage.setItem('theme', isEnabled ? 'dark' : 'light');
  });

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));

  Ferdium.loop(() => {
    const unreadElements = document.querySelectorAll(
      '.highlight, .highlight-mention',
    );
    let unreadCount = 0;

    if (unreadElements.length > 0) {
      unreadCount = unreadElements.length;
    }

    Ferdium.setBadge(unreadCount);
  });
};
