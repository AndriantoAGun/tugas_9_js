function displayProfile() {
  var chara = {
    name : "Friday",
    age : 25,
    height : 158,
    race : "Human",
    gender : "Female",
    likes : ["Fried shrimp", "Fried prawn", "Hardworkers"],
    dislikes : ["Outdated notions", "People who overwork themselves"],
  }

  for (var x in chara){
    console.log(chara[x]);
  }

  for (x of chara.likes){
    console.log(x);
  }

  for (x of chara.dislikes){
    console.log(x);
  }

}

displayProfile();
