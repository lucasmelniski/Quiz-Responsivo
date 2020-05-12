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
  var titulo = "Descubra qual é o cartão de crédito ideal para você";
  var subtitulo = "Responda às perguntas abaixo para que nossa tecnologia possa escolher o melhor cartão de crédito para você.";
  $('#titulo_id').html(titulo);
  $('#subtitulo_id').html(subtitulo);
  $('#total_id').html(total_questoes);

      if(question == 0) {
         
        pergunta = "";
        respostas = `<button class="btn btn-lg btn-block btn-outline-primary" onclick=charge(1,0)> Iniciar Quiz</button>`
        
      
    }else if(question == 1){
    maincontent_id.style.visibility= "hidden";
    barraProgresso.style.visibility= "visible";
    maincontent_id.style.position= "absolute";
    cardMain.style.alignContent= "center";

          if(resp_1.value == ""){
            pergunta = "O que é mais importante para você? ";
            respostas =  '<button class="btn btn-lg btn-block btn-outline-primary" onclick=charge(2,1)> Limite de Crédito Alto</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary" onclick=charge(2,2)> Sem anuidade</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary" onclick=charge(2,3)> Milhas aéreas</button>' +
                         '<div class="row Barras">'+ /* Inicio dos botões de ir e voltar */
                         '<div class="col my-4 d-flex justify-content-end">'+                      
                          `<button class="NB col-3 btn btn-light text-primary disabled"> > </button>` +
                          '</div>' +
                         '</div>';
            
          }else {
            pergunta = "O que é mais importante para você? ";
            respostas =  '<button class="btn btn-lg btn-block btn-outline-primary" onclick=charge(2,1)> Limite de Crédito Alto</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary" onclick=charge(2,2)> Sem anuidade</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary" onclick=charge(2,3)> Milhas aéreas</button>' +
                         '<div class="row Barras">'+
                         '<div class="col my-4 d-flex justify-content-end">'+                      
                          `<button class="NB col-3 btn btn-light text-primary font-weight-bold" onclick=charge(2,${resp_1.value})> > </button>` +
                          '</div>' +
                         '</div>';
          }
     questao_atual = 1;
     

   }else if(question == 2){
     
     $('#resp_1').val(resp);
     questao_atual = 2;
     
     if(resp_2.value == ""){
      pergunta = "Em qual grupo você se encaixa?";
      respostas =  '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,1)>Aposentado / Pensonista / Servidor Público</button>'+
                   '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,2)>Concurseiro / Estudante universitario</button>'+
                   '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,3)>Carteira assinada / Autonomo / Empreendedor</button>'+
                   '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,4)>Estou Desempregado</button>' +
                   '<div class="row Barras">'+
                   '<div class="col my-4 d-flex justify-content-between">'+
                    `<button class="NB col-3 btn btn-light text-primary font-weight-bold" onclick=charge(1,${resp_1.value})> < </button>` +
                    `<button class="NB col-3 btn btn-light text-primary disabled "> >  </button>` +
                    '</div>' +
                   '</div>';
      
    }else {
      pergunta = "Em qual grupo você se encaixa?";
      respostas =  '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,1)>Aposentado / Pensonista / Servidor Público</button>'+
                   '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,2)>Concurseiro / Estudante universitario</button>'+
                   '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,3)>Carteira assinada / Autonomo / Empreendedor</button>'+
                   '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,4)>Estou Desempregado</button>' +
                   '<div class="row Barras">'+
                   '<div class="col my-4 d-flex justify-content-between">'+
                    `<button class="NB col-3 btn btn-light text-primary font-weight-bold" onclick=charge(1,${resp_1.value})> < </button>` +
                    `<button class="NB col-3 btn btn-light text-primary font-weight-bold" onclick=charge(3,${resp_2.value})> >  </button>` +
                    '</div>' +
                   '</div>';
    }

  }else if(question == 3){
 $('#resp_2').val(resp);

           pergunta =  "Você esta negativado? ";
           respostas = '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(4,1)>Sim</button>'+
                       '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(4,2)>Não</button>'+
                       '<div class="row Barras">'+
                       '<div class="col my-4 d-flex justify-content-start">'+
                        `<button class="NB col-3 btn btn-light text-primary font-weight-bold" onclick=charge(2,${resp_2.value})> < </button>` +      
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
         '<p class="lead py-2">Digite seus dados abaixo e receba o cartão perfeito para você.</p>' +
       '</div>' +
       '<div class="row">' +
          '<div class="col" >' +
            '<div class="col-12 d-flex justify-content-between px-0" >' + 
              '<div class="d-flex col-md-3 px-0 justify-content-left img_Falta_Pouco">'+
                '<img src="img/JD-20-512.png" style="width:100px; height:100px;" alt="Homem Querendo Todos os Cartões à sua volta">'+       
              '</div>'+
              '<div class="col-md-8 col-12 px-0">'+
                '<div class="form-group">' +
                '<input type="text" class="form-control"  id="nome_send" aria-describedby="emailHelp" placeholder="Insira seu nome.">' +
                '</div>' +
                '<div class="form-group">' +
                  '<input type="email" class="form-control" id="email_send" aria-describedby="emailHelp" placeholder="Insira seu email.">' +
                '</div>' +
                '<div class="form-check">' +
                  '<input type="checkbox" class="form-check-input" id="Check1_termos" checked style="display:none;">' +
                '</div><br>' +
              '</div>'+
          '</div>'+
          '<button onclick="send_info()" class="btn btn-primary btn-block br">VER MEU CARTÃO DE CRÉDITO</button><br>' +
          '<label  id="label_check" class="form-check-label" for="exampleCheck1"><a href="" target="_blank" >Ao clicar no botão "ver meu cartao" você concorda com os termos de uso e as politicas de privacidade.</a></label>' +
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
