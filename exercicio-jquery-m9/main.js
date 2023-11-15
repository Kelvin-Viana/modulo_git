$(document).ready(function(){
    console.log($('header button'));
    $('header button').click(function(){
        $('form').slideDown();
    })
})

$('#botao-cancelar').click(function(){
    $('form').slideUp();
})

$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $("#nova-tarefa").val();
    const novoItem = $(`<li class="item" style="display:none" > ${novaTarefa} </li>`);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(700);
    $('#nova-tarefa').val(' ');
    })


    $('ul').on('click', 'li', function(){
        $(this).addClass("finalizado");
    });
