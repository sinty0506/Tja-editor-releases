// Apply the fixed desktop appearance before styles, ignoring old light settings.
if (!navigator.userAgent.includes('Android')) {
  document.documentElement.dataset.desktopTheme = 'dark';
}
