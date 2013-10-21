//单例模式，只创建一个mask遮罩层
var mask;
var createMask = function() {
  if (mask) {
    return mask;
  } else {
    mask = document.body.appendChild(document.createElement('div'));
    return mask;
  };
}
//上面的必须创建一个mask是全局变量，不好,改进
var createMask2 = function() {
  var mask;
  if (mask) {
    return mask;
  } else {
    mask = document.body.appendChild(document.createElement('div'));
    return mask;
  };
};

//使用单例模式
var createMask3 = function() {
  var mask;
  return function() {
    return mask || (mask = document.appendChild(document.createElement('div')));
  }
}();

var createElement4=function () {
	var mask;
	return mask||(mask=document.appendChild(document.createElement('div')))
}






