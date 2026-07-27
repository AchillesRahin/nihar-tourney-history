(function () {
  var input = document.getElementById("playerSearch");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".event-card"));
  var resultCount = document.getElementById("resultCount");
  var noResults = document.getElementById("noResults");

  function applyFilter() {
    var query = input.value.trim().toLowerCase();
    var visible = 0;

    cards.forEach(function (card) {
      var match = !query || card.dataset.players.indexOf(query) !== -1;
      card.hidden = !match;
      if (match) visible += 1;
    });

    noResults.hidden = visible !== 0;
    resultCount.textContent = query
      ? visible + " of " + cards.length + " events"
      : "";
  }

  input.addEventListener("input", applyFilter);
})();
