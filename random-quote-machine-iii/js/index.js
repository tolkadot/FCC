$(document).ready(function() {
  
  $('#fader').hide().fadeIn(4000);

  var quoter = function() {
    var Q1 = "A quotation is a handy thing to have about, saving one the trouble of thinking for oneself, always a laborious business ― A.A. Milne, If I May";
    var Q2 = "Quotation, n: The act of repeating erroneously the words of another ― Ambrose Bierce, The Unabridged Devil's Dictionary";
    var Q3 = "He wrapped himself in quotations - as a beggar would enfold himself in the purple of Emperors ― Rudyard Kipling, Many Inventions";
    var Q4 = "A facility for quotation covers the absence of original thought - ― Dorothy L. Sayers, Gaudy Night";
    var Q5 = "Life itself is a quotation - Jorge Luis Borges";
    var Q6 = "A fine quotation is a diamond in the hand of a man of wit and a pebble in the hand of a fool - Joseph Roux";

    var arrayOfQuotes = [0, Q1, Q2, Q3, Q4, Q5, Q6];

    var randomNumber = Math.floor((Math.random() * 6) + 1);

    var newQuote = arrayOfQuotes[randomNumber];
    return newQuote;
  }

  $("#genQuote").click(function() {
    $("#theQuote").html(quoter());
    
  });

  $('#tweet').click(function(event) {
    var twitter = "https://twitter.com/intent/tweet?text=" + "%22" + encodeURIComponent($('#theQuote').text())
    $(this).attr("href", twitter);
  });

});