// Wait page load then find element and click
window.onload = () => {
  // Bypass Cloudflare Rocket Loader
  window.__cfRLUnblockHandlers = true
  // Find element
  var list = document.querySelectorAll('[title="กดขอบคุณที่นี่"]')
  // Check element is exists
  if (list !== 'undefined' && list.length > 0) {
      var thankButton = list[0]
      thankButton.click()
  }
}
// Create by max180643 (Chanwit Settavongsin)!