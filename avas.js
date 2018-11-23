function setup() {
  
	chatbot.loadFiles(['brai.rive']);
}
window.onload = setup;

function searchresult(args)
{
  var request = new XMLHttpRequest();
  var apiaddress='https://jsonplaceholder.typicode.com/todos/'.concat(args);

request.open('GET', apiaddress, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  var reply=null;
  if (request.status >= 200 && request.status < 400) {
    var reply= args.concat(' is Instock');
    chatbot.postReply(reply, 2000);
  } else {
    var reply= args.concat(' is Out Of Stock');
    chatbot.postReply('Out of Stock', 2000);
    console.log('error');
  }
}

request.send();
}
