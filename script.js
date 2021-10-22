function calculate() { 
    price = document.getElementById('product_price').value; 
    count = document.getElementById('product_count').value; 
    document.getElementById('sum').innerHTML=Math.sign(price);
    document.getElementById('sum').innerHTML=Math.sign(count);
    if (price >= 0 && count >= 0) {sum = parseInt(price) * parseInt(count);}
    document.getElementById('sum').innerHTML="Итоговая стоимость: "+ sum + "руб."; 
    return false;
}
