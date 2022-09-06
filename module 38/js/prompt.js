
const showAlert = () =>{
    alert('ki khobor tumar?')
}

const askSomething = () => {
    const deciton = confirm('are you going to piknik?');

    if (deciton === true){
        alert('500 taka bkash kor')
    }else {
        console.log('dure giye mor')
    }
}

const getInfo = () => {
   const name = prompt('Tell us your naem');
   if(!!name){
        console.log('welcome here', name)
   }

}