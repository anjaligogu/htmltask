function myFunc() {
  let name = document.getElementById('name').value ;
 
  let email = document.getElementById('email').value;
  let age = document.getElementById('age').value;
  let phno = document.getElementById('phno').value;
  document.getElementById('info').innerHTML = '<pre>' + 'name:' + name +"\n"+ 'mail:'+ email +"\n"+ 'age:'+ age +"\n"+ 'no:'+ phno + '</pre>';
}
