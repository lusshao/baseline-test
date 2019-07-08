'use strict';

function collectSameElements(collectionA, objectB) {
    var result = [];
    var k = 0;


    for(let i=0;i<collectionA.length;i++){
      alert(collectionA.get(i).key);
      if(objectB.value.indexOf(collectionA.get(i).key)!=-1){
        result[k++] = collectionA.get(i).key;
      }
    }
    // alert(result);
    return result;
}
