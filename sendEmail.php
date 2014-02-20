<?php
	$i = 0;
	
	foreach($_POST as $value){
		$dados[$i] = $value;
		$i++;
	}
		
	$to      = 'contato@cakersfestas.com.br';
	$subject = 'Contato - Site';
	$message = 'Remetente: '.$dados[0].'<br>'. 'Email: '.$dados[1].'<br>'. 'Telefone: '.$dados[2].'<br>'. 'Mensagem: '.$dados[3];
	$headers = 'From:'. $dados[1] . "\r\n" .
		'Reply-To: contato@cakersfestas.com.br' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();

	if(mail($to, $subject, $message, $headers)){
		echo "<h4>Obrigado por ter entrado em contato.</h4>";
	} else {
		echo "Falha no envio.";
	}