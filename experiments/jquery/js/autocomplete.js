 $.widget( "custom.catcomplete", $.ui.autocomplete, {
    _renderMenu: function( ul, items ) {
      var that = this,
        currentCategory = "";
      $.each( items, function( index, item ) {
        if ( item.category != currentCategory ) {
          ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
          currentCategory = item.category;
        }
        that._renderItemData( ul, item );
      });
    }
  }); 
  $(function() {
    var data = artistList().concat(songList()); 
    $( "#search" ).catcomplete({
      delay: 0,
      source: data
    });
  });


function artistList() {
  var artistList = ['Lady Gaga', 
  'fun.', 
  'Mumford and Sons', 
  'Journey', 
  'The Beatles', 
  'Michael Jackson', 
  'Rihanna', 
  'Imagine Dragons', 
  'MS MR', 
  'The Killers', 
  'Kanye West',
  'Bastille', 
  'Backstreet Boys'];
  return makeListOfHashes(artistList, "Artists");
}

function songList() {
  var songList = ['I Want It That Way', 
  'ABC', 
  'We Are Young', 
  'Born This Way', 
  'Babel',
  "Don't Stop Believin'",
  'Radioactive', 
  'Umbrella', 
  'Thriller', 
  'Come Together', 
  'Here Comes the Sun', 
  'Power',
  'Over the Rainbow']
  return makeListOfHashes(songList, "Songs");
}

function albumList() {
  var albumList = ['Some Nights', 
  'Yeezus', 
  "Sgt. Pepper's Lonely Hearts Club Band", 
  "Abbey Road", 
  "Wicked: A New Musical [Original Broadway Cast Recording]"]
  return makeListOfHashes(albumList, "Albums");
}

function makeListOfHashes(list, category) {
  var hashList = [];
  for(var i = 0; i < list.length; i++) {
    hashList.push({ label: list[i], category: category });
  }
  return hashList;
}
