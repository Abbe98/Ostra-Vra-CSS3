function itemsdata(data) {
  // number of objects
  var numitems = data.items.length;

  // loop through all the objects
  for (var i = 0; i < numitems; i++) {
    var title = data.items[i].title;
    var img = data.items[i].img;
    var kringla = data.items[i].kringla;

    document.open();
    // output thumnails
    document.write('<a class="box" href="#' + i + '"><img src="' + img + '"/></a>');
    // output box placeholder
    document.write('<div class="box-target" id="' + i + '"><img src="' + img + '"/><a target="_blank" class="box-title" href="' + kringla + '">' + title + '</a><a class="box-close" href="#"></a></div>');
    document.close();
    }
}