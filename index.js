function getFirstSelector(selector) {
  //accepts a selector and returns the first element that matches
  return document.querySelector(selector)
}

function nestedTarget() {
  //pulls a .target out of #nested
  return document.getElementById("nested").getElementsByClassName("target")[0]
}

function increaseRankBy(n) {
  //increases the ranks in all of the .ranked-lists by n hint: ParseInt
  const lis = document.querySelectorAll(".ranked-list li")
  for (let i = 0; i < lis.length; i ++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  //pulls out the most deeply nested child element from div#grand-node
  return document.getElementById("grand-node").getElementsByTagName("div")[3]
  
}