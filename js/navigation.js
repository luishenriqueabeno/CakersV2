$(document).ready(function(){
	var linkId;
	var contentPage = $('#contentPage');

	//Carrega a página Home
	$('#contentPage').load('pages/home.html');

	$('#mainMenu a').on('click', function(){
		linkId = $(this).attr('id');

		switch(linkId){
			case('homeLink'): $(contentPage).load('pages/home.html'); break;
			case('sobreLink'): $(contentPage).load('pages/sobre.html'); break;
			case('deliciasLink'): $(contentPage).load('pages/delicias.html'); break;
			case('fotosLink'): $(contentPage).load('pages/fotos.html'); break;
			case('contatoLink'): $(contentPage).load('pages/contato.html'); break;
			case('presenteLink'): $(contentPage).load('pages/presente.html'); break;
		}
	});

	$('#contatoIcon').on('click', function(){
		$(contentPage).load('pages/contato.html');
	});
});