window.addEventListener("resize", function() {
  if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
      console.log("shalalalala");
     window.setTimeout(function() {
      console.log("shalalalala");
        document.activeElement.scrollIntoViewIfNeeded();
     },0);
  }
});
