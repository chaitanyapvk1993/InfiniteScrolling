var listElm = document.querySelector('#infinite-list');


var nextItem = 1;
var item = document.createElement('ul');
    //var item1 = document.createElement('li');
     listElm.appendChild(item);
     
     //item.id="current";
    // item.setAttribute('id','current');
     document.getElementsByTagName("ul")[0].setAttribute("id", "current");


     var listElm1 = document.querySelector('#current');
     //document.write(listElm1.id);



var loadMore = function() {
  for (var i = 0; i < 20; i++) {
   // var item = document.createElement('ul');
    var item1 = document.createElement('li');
    // listElm.appendChild(item);

    item1.innerText = 'Item ' + nextItem++;
    item.appendChild(item1);
  }
}


listElm.addEventListener('scroll', function() {
  if (listElm1.scrollTop + listElm1.clientHeight >= listElm1.scrollHeight) {
    loadMore();
  }
});

loadMore();