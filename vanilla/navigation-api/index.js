navigation.addEventListener("navigate", (navigateEvent) => {
  if (shouldNotIntercept(navigateEvent)) return;
  const url = new URL(navigateEvent.destination.url);
  if ("navigation" in window && "intercept" in Navigation.prototype) {
    console.log("Navigation API поддерживается!");
  } else {
    console.log("Navigation API НЕ поддерживается в этом браузере.");
  }
  if (url.pathname.startsWith("/navigation-api/about")) {
    navigateEvent.intercept({
      async handler() {
        let temp = document.getElementsByTagName("template")[0];
        const Clones = temp.content.cloneNode(true);
        document.body.appendChild(Clones);
      },
    });
  }
});
