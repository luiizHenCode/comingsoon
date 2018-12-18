(function(){
    'use stricts'

    window.addEventListener('load', function(){   
  
    var dataFinal = new Date("Jan 1, 2019 00:00:00");

    var $d = document.getElementById('d');
    var $h = document.getElementById('h');
    var $m = document.getElementById('m');
    var $s = document.getElementById('s');

    var x = setInterval(function(){
       var horaAtual = new Date();

       var des = dataFinal.getTime() - horaAtual.getTime();

       var dias = Math.floor(des / (1000 * 60 * 60 * 24));
       var horas = Math.floor(des % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
       var minutos = Math.floor(des % (1000 * 60 * 60) / (1000 * 60));
       var segundos = Math.floor(des % (1000 * 60 ) / 1000);

       $d.innerHTML = addZero(dias);
       $h.innerHTML = addZero(horas);
       $m.innerHTML = addZero(minutos);
       $s.innerHTML = addZero(segundos);

      
      if(des <= 0){
        clearInterval(x);
      } 
          
    },1000);

    function addZero(x){
           if(x<10) return '0' + x;
           else return x;
       }

    
       var $email = document.getElementById('email');
       var $submit = document.getElementById('submit');
       var $form = document.getElementById('newsletter');

       $submit.addEventListener('click', function(){

            if($email.value == ''){
                $email.focus();
                $email.placeholder = 'OPS! Esqueceu seu E-mail...';
                return false;
            }else{
                $form.submit();
            }           

       });

       
    });

})();       