/*------------

<html>
<form method="get">
    <label>
        <input type="text" name="name"/>
    </label>
    <input type="submit" value="send">
</form>

----------*/

var myForm = document.querySelector('form');
myForm.addEventListener('submit', function(e){
    e.preventDefault();
    var formData = document.querySelector('input').value;
    console.log('formData:', formData);
});