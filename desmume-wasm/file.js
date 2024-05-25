BrowserFS.install(window);
  BrowserFS.configure({
    fs: "Emscripten"
  }, function(e) {
    if (e) {
      // An error happened!
      throw e;
    }
    // Otherwise, BrowserFS is ready-to-use!
  });

