var form = document.querySelector('.form')
var btn = form.querySelector('.form-button')
var imya = form.querySelector('.imya')
var password = form.querySelector('.password')
var password_val = form.querySelector('.password-val')
var email = form.querySelector('.email')
var phone = form.querySelector('.phone')

const regExpName = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const regExpPhone = /[0-9+()-]/;



	form.addEventListener('submit', function (event) {
		event.preventDefault()
		
		if (!imya.value || !password.value || !password_val.value || !email.value || !phone.value ) {
	  		alert("Усі поля обов'язкові для заповнення)")
		}

		if (password.value != password_val.value){
			alert("Введені паролі не співпадають")
			}

		if (!regExpName.test(imya.value)){
			alert("Некоректно введене ім'я")
		}

		if (!regExpEmail.test(email.value)){
			alert("Некоректно введено e-mail")
		}

		if (!regExpPhone.test(phone.value)){
			alert("Некоректно введено телефон")
		}
	})
