let form = $('.form-contact');

form.validate({
    errorElement: 'span',
        rules: {
        name: 'required',
        email:{
            required: true,
            email: true
        },
        phone: 'required' ,
        text: 'required' 
    },
    messages: {
        name: 'por favor, digite seu nome',
        email: {
            required: 'por favor digite seu e-mail' ,
            email: 'por favor digite um e-mail válido'
        },
        phone: 'por favor, digite seu numero de telefone' ,
        text: 'por favor, digite uma mensagem'
    }
})