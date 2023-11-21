document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var cardNumber = document.getElementById('cardNumber').value;
  var cardHolder = document.getElementById('cardHolder').value;
  var expiryDate = document.getElementById('expiryDate').value;
  var cvv = document.getElementById('cvv').value;
  
  console.log('Номер карты:', cardNumber);
  console.log('Владелец карты:', cardHolder);
  console.log('Срок действия:', expiryDate);
  console.log('CVV:', cvv);
  
});