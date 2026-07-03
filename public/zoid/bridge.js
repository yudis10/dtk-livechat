window.LivechatZoidComponent = zoid.create({
  dimensions: {
    width: "100%",
    height: "100%",
  },
  tag: "livechat-component",
  url: new URL("https://design.detik.com/livechat/", window.location.href).href,
})
window.LivechatLogoutZoidComponent = zoid.create({
  dimensions: {
    width: "100%",
    height: "100%",
  },
  tag: "livechat-logout-component",
  url: new URL("https://design.detik.com/livechat/logout", window.location.href)
    .href,
})
window.LivechatClosedZoidComponent = zoid.create({
  dimensions: {
    width: "100%",
    height: "100%",
  },
  tag: "livechat-closed-component",
  url: new URL("https://design.detik.com/livechat/closed", window.location.href)
    .href,
})

window.LivechatDarkZoidComponent = zoid.create({
  dimensions: {
    width: "100%",
    height: "100%",
  },
  tag: "livechat-dark-component",
  url: new URL(
    "https://design.detik.com/livechat/?theme=dark",
    window.location.href
  ).href,
})
window.LivechatLogoutDarkZoidComponent = zoid.create({
  dimensions: {
    width: "100%",
    height: "100%",
  },
  tag: "livechat-logout-dark-component",
  url: new URL(
    "https://design.detik.com/livechat/logout?theme=dark",
    window.location.href
  ).href,
})
window.LivechatClosedDarkZoidComponent = zoid.create({
  dimensions: {
    width: "100%",
    height: "100%",
  },
  tag: "livechat-closed-dark-component",
  url: new URL(
    "https://design.detik.com/livechat/closed?theme=dark",
    window.location.href
  ).href,
})
