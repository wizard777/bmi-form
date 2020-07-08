(() => {

    const form = document.querySelector('form[name=calculate-bmi]');
   
    const getMessage = unitBmi => {
        let Message;

        if (unitBmi < 18.5) {
            Message = 'Considered underweight';
        } else if (unitBmi >= 25) {
            Message = 'Considered overweight';
        } else {
            Message = 'Normal';
        }
        return Message;
    };

    const getBmi = (weight, height) => {
        let newHeight = parseInt(height, 10);
        let newWeight = parseInt(weight, 10);
       
        return (newWeight / (newHeight / 100 * newHeight / 100)).toFixed(1);
    };

    const onSubmit = event => {

        event.preventDefault();

        const bmiResult = form.querySelector('.result');
        const bmiHealth = form.querySelector('.health');
       
        const weight = form.querySelector('input[name=weight]').value;
        const height = form.querySelector('input[name=height]').value;
       
        const bmi = getBmi(weight, height);

        bmiResult.innerHTML = bmi;
        bmiHealth.innerHTML = getMessage(bmi);
  

        const newResult = form.querySelector('.result').innerHTML;
        console.log(`${newResult}`);
        console.log( parseInt(`${newResult}`) );


        const newClass = form.querySelector('.health');
        console.log(newClass);
           
              if(newResult < 18 || newResult > 25)  {
            newClass.classList.remove('messNormal');
            newClass.classList.add('messUnderOver');
        } else {
            newClass.classList.remove('messUnderOver');
            newClass.classList.add('messNormal');
        }
    };

    form.addEventListener('submit', onSubmit, false);

})();