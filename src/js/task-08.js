const formRef = document.querySelector('.login-form')
// console.log("🎅 ~ formRef", formRef)


formRef.addEventListener('submit', onSubmitForm)


function onSubmitForm(event) {

  event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    if (email === '' || password === '') {
        event.currentTarget.reset();
        return alert('Заполни все поля, иначе форма не сработает')
    }
    const FormData = {
        email,
        password,
    };
    console.log("🎅 ~ FormData", FormData)
    event.currentTarget.reset();
 
}




    // const elForm = new FormData(event.currentTarget);
//     elForm.forEach((value, name) => {
//        console.log('value', value)
//        console.log('name', name)
       
//    })