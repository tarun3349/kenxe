// Redirect www to non-www
if (window.location.hostname.startsWith('www.')) {
  window.location.href = 'https://' + window.location.hostname.substring(4) + window.location.pathname + window.location.search + window.location.hash;
}
