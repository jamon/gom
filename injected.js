(function() {
    const originalFillText = CanvasRenderingContext2D.prototype.fillText;
    CanvasRenderingContext2D.prototype.fillText = function(text, x, y, maxWidth) {
      if (text === "America") {
        text = "Mexico";
      }
      return originalFillText.call(this, text, x, y, maxWidth);
    };
  
    const originalStrokeText = CanvasRenderingContext2D.prototype.strokeText;
    CanvasRenderingContext2D.prototype.strokeText = function(text, x, y, maxWidth) {
      if (text === "America") {
        text = "Mexico";
      }
      return originalStrokeText.call(this, text, x, y, maxWidth);
    };
  })();
  