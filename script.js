function calculate() { 
    price = document.getElementById('product_price').value; 
    count = document.getElementById('product_count').value; 
    sum = parseInt(price) * parseInt(count); 
    document.getElementById('sum').innerHTML="Итоговая стоимость: "+ sum + "руб."; 
    return false;
}
