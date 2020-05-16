$(document).ready(function () {
  var traking = window.location.href;
  var pos = traking.indexOf('?');
  if(pos == -1){
             $('#traking_id').val('');
  }else{
          traking = traking.substring(pos, traking.length);
           $('#traking_id').val(traking);
  }

 
  charge(0);
});
function RunAnimation(x,y){
  var CardTotal = document.querySelector(".cardTotal")
    CardTotal.classList.remove("Fade")
    CardTotal.classList.remove("Run-Animation")
    CardTotal.classList.remove("Reverse-Fade")
    CardTotal.classList.remove("Reverse-Run-Animation")
    void CardTotal.offsetWidth
    CardTotal.classList.add("Run-Animation")
    setTimeout(()=>{
      CardTotal.classList.add("Fade")
      charge(x,y)
    },500)
}
function ReverseRunAnimation(x,y){
  var CardTotal = document.querySelector(".cardTotal")
    CardTotal.classList.remove("Fade")
    CardTotal.classList.remove("Run-Animation")
    CardTotal.classList.remove("Reverse-Fade")
    CardTotal.classList.remove("Reverse-Run-Animation")
    void CardTotal.offsetWidth
    CardTotal.classList.add("Reverse-Fade")
    setTimeout(()=>{
      CardTotal.classList.add("Reverse-Run-Animation")
      charge(x,y)
    },500)
}


function charge(question,resp){

  var barraProgresso = document.getElementById("barraProgresso");
  var maincontent_id = document.getElementById("maincontent_id");
  var go_id = document.getElementById("go_id");
  var cardMain = document.getElementById("Card-Main");
  
  var total_questoes = "3";
  var questao_atual = "";
  var pergunta = "";
  var respostas = "";
  var percentual = "";
  $('#total_id').html(total_questoes);

      if(question == 0) {
         
        pergunta = "";
        respostas = `<button class="btn btn-lg btn-block btn-outline-primary" onclick=RunAnimation(1,0)> Iniciar Quiz</button>`
        
      
    }else if(question == 1){
    maincontent_id.style.visibility= "hidden";
    barraProgresso.style.visibility= "visible";
    maincontent_id.style.position= "absolute";
    cardMain.style.alignContent= "center";

          if(resp_1.value == ""){
            pergunta = "O que é mais importante para você? ";
            respostas =  '<button class="btn btn-lg btn-block btn-outline-primary" onclick=RunAnimation(2,1)> Ir o mais rápido possível</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary" onclick=RunAnimation(2,2)> Tomar a rota mais segura</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary" onclick=RunAnimation(2,3)> Passar ao lado dos planetas mais bonitos</button>' +
                         '<div class="row Barras">'+
                         '<div class="col my-4 d-flex justify-content-end">'+                      
                          `<button class="NB col-3 btn btn-light text-primary disabled"> > </button>` +
                          '</div>' +
                         '</div>';
            
          }else {
            pergunta = "O que é mais importante para você? ";
            respostas =  '<button class="btn btn-lg btn-block btn-outline-primary" onclick=RunAnimation(2,1)> Ir o mais rápido possível</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary" onclick=RunAnimation(2,2)> Tomar a rota mais segura</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary" onclick=RunAnimation(2,3)> Passar ao lado dos planetas mais bonitos</button>' +
                         '<div class="row Barras">'+
                         '<div class="col my-4 d-flex justify-content-end">'+                      
                          `<button class="NB col-3 btn btn-light text-primary font-weight-bold" onclick=RunAnimation(2,${resp_1.value})> > </button>` +
                          '</div>' +
                         '</div>';
          }
     questao_atual = 1;
     

   }else if(question == 2){
     
     $('#resp_1').val(resp);
     questao_atual = 2;
     
     if(resp_2.value == ""){
      pergunta = "Em qual grupo você se encaixa?";
      respostas =  '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=RunAnimation(3,1)>  Explorador / Aventureiro / Desbravador </button>'+
                   '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=RunAnimation(3,2)> Previnido / Cauteloso </button>'+
                   '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=RunAnimation(3,3)> Organizado / Sistemático / Metódico </button>'+
                   '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=RunAnimation(3,4)> Uma mistura de todos </button>' +
                   '<div class="row Barras">'+
                   '<div class="col my-4 d-flex justify-content-between">'+
                    `<button class="NB col-3 btn btn-light text-primary font-weight-bold" onclick=ReverseRunAnimation(1,${resp_1.value})> < </button>` +
                    `<button class="NB col-3 btn btn-light text-primary disabled "> >  </button>` +
                    '</div>' +
                   '</div>';
      
    }else {
      pergunta = "Em qual grupo você se encaixa?";
      respostas =  '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=RunAnimation(3,1)> Explorador / Aventureiro / Desbravador </button>'+
                   '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=RunAnimation(3,2) Previnidoo / Cauteloso</button>'+
                   '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=RunAnimation(3,3)> Organizado / Sistemático / Metódico </button>'+
                   '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=RunAnimation(3,4)> Uma mistura de todos</button>' +
                   '<div class="row Barras">'+
                   '<div class="col my-4 d-flex justify-content-between">'+
                    `<button class="NB col-3 btn btn-light text-primary font-weight-bold" onclick=ReverseRunAnimation(1,${resp_1.value})> < </button>` +
                    `<button class="NB col-3 btn btn-light text-primary font-weight-bold" onclick=RunAnimation(3,${resp_2.value})> >  </button>` +
                    '</div>' +
                   '</div>';
    }
                         

            

  

  

  

  

  

  

  

  
  }else if(question == 3){
 $('#resp_2').val(resp);

           pergunta =  "Você quer viajar: ";
           respostas = '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=RunAnimation(4,1)> Agora </button>'+
                       '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=RunAnimation(4,2)> Ano que vem </button>'+
                       '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=RunAnimation(4,3)> Estou pesquisando </button>'+
                       '<div class="row Barras">'+
                       '<div class="col my-4 d-flex justify-content-start">'+
                        `<button class="NB col-3 btn btn-light text-primary font-weight-bold" onclick=ReverseRunAnimation(2,${resp_2.value})> < </button>` +      
                        '</div>' +
                       '</div>';
           questao_atual = 3;
           


  }else if(question == 4){
    
    maincontent_id.style.visibility= "visible";
    maincontent_id.style.position= "relative";
    go_id.style.position= "absolute";
    go_id.style.top="0"
    
 $('#resp_3').val(resp);
     html=
       '<h1 class="MyFont py-3">Falta pouco!</h1>' +
       '<p class="lead py-2">Digite seus dados abaixo e receba o plano perfeito para você.</p>' +
    '<div class="row">' +
        '<div class="col" >' +
            '<div class="col-12 d-flex justify-content-between px-0" >' +
                '<div class="d-flex col-md-3 px-0 justify-content-left img_Falta_Pouco">' +
                  '<img src="img/icone.jpg" style="width:100px; height:100px;" alt="Homem Querendo Todos os Cartões à sua volta">' +
                '</div>' +
                '<div class="col-md-8 col-12 px-0">' +
                  '<div class="form-group">' +
                  '<input type="text" class="form-control"  id="nome_send" aria-describedby="emailHelp" placeholder="Insira seu nome.">' +
                '</div>' +
                '<div class="form-group">' +
                  '<input type="email" class="form-control" id="email_send" aria-describedby="emailHelp" placeholder="Insira seu email.">' +
                '</div>' +
                '<div class="form-check">' +
                  '<input type="checkbox" class="form-check-input" id="Check1_termos" checked style="display:none;">' +
                '</div><br>' +
            '</div>' +
          '</div>' +
            '<button onclick="send_info()" class="btn btn-primary btn-block br">VER MINHA VIAGEM DE OUTRO PLANETA</button><br>' +
            '<label  id="label_check" class="form-check-label" for="exampleCheck1"><a href="" target="_blank" >Ao clicar no botão "ver minha viagem" você concorda com os termos de uso e as políticas de privacidade.</a></label>' +
        '</div>' +
    '</div>';


    $('#maincontent_id').html(html);
    $('#go_id').hide('slow');
     
  }
    
    if(question != 4){
     percentual = (questao_atual /(total_questoes))*100;  
     
     $('#progressbar_id').html('<div class="progress-bar" role="progressbar" style="width: '+percentual+'%" aria-valuenow="'+percentual+'" aria-valuemin="0" aria-valuemax="100" ></div>');

     $('#questaoatual_id').html(questao_atual);
     $('#percentual_id').html(percentual);
     $('#pergunta_id').html(pergunta);
     $('#respostas_id').html(respostas);
    }
}



function send_info(){
  
var resp1 = $('#resp_1').val();
var resp2 = $('#resp_2').val();
var resp3 = $('#resp_3').val();





var q1 = ['Limite de Crédito Alto','Sem anuidade','Milhas aéreas'];
var q2 = ['Aposentado / Pensonista / Servidor Público','Concurseiro / Estudante universitario','Carteira assinada / Autonomo / Empreendedor','Estou Desempregado</button>'];
var q3 = ['Sim','Não'];

q1 = q1[(resp1-1)];
q2 = q2[(resp2-1)];
q3 = q3[(resp3-1)];


var traking = $('#traking_id').val();
var link =  ''+traking;

if(resp1 == 1) { link=''+traking;} 




 


  var nome =  $('#nome_send').val();
  var email = $('#email_send').val();
  var    r =  $('#listaactive_id').val();
  var lista = 10;
  if(r =='s'){ lista = 3;  }

   if(!$('#Check1_termos').is(":checked")){
      $("#Check1_termos").addClass( "is-invalid" );
      $('#label_check').html('Concorde com os termos e condições')
   }else if(email == ''){
    $("#email_send").addClass( "is-invalid" );
   }else if(nome ==''){
    $("#nome_send").addClass( "is-invalid" );
   }
  else{
     
    $.ajax({
        url: "active/examples.php",
        type: 'POST',
        data: {
            'param1': nome,
            'param2': email,
            'param3': lista,
            'param4': q1,
            'param5': q2,
            'param6': q3
        },
        dataType: 'html',
        beforeSend: function () {
          
        },
        success: function (retorno) {
            
            
          
            
          },
        error: function (erro, er) {
            
            
          

        }
    });
  }
}

