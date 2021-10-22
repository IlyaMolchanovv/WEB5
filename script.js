function calculate() { 
    price = document.getElementById('product_price').value; 
    count = document.getElementById('product_count').value; 
    sum = parseInt(price) * parseInt(count);
    document.getElementById('sum').innerHTML="Итоговая стоимость: "+ sum + "руб."; 
    return false;
}

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
btn.onclick = function()
 { 
  const register = /-+?|\b0[0-9]+/;
  const register1 = /\D+/;
  const register2 = /^$/;
  var pro = parseInt(price.value) *parseInt(count.value);
    if((register.test(price.value) ||register.test(count.value))===true ) {
      alert("Ошибка: Число отрицательное или ноль")
}
 else if((register1.test(price.value) ||register1.test(count.value))===true ) {
  alert(" Ошибка: Вы ввели букву")
 }
else if((register2.test(price.value) ||register2.test(count.value))===true ) {
  alert(" Ошибка: Введите цифру")
}
    else {out.innerHTML = pro;}
        
}
