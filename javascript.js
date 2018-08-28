document.addEventListener('DOMContentLoaded', function() {
	
	/*	--- GLOBAL -------------------------------------------------------	*/
	
	// banco de caracteres
	var alfanum = 'abcdefghijklmnopqrstuvwxyzáàãâéèêíìîóòõôúùûçABCDEFGHIJKLMNOPQRSTUVWXYZÁÀÃÂÉÈÊÍÌÎÓÒÕÔÚÙÛÇ !\"#$%&\'()*+,-./:;<=>?';
	
	// encontrar código - do banco - correspondente a uma letra
	function codigoChar(letra) {
		for (var x = 0; x < alfanum.length; x++) {
			if (letra == alfanum[x]) {
				return x;
			}
		}
	}
	
	// encontrar letra - do banco - correspondente a um código
	function charCodigo(codigo) {
		if (codigo >= alfanum.length) {
			return codigo;
		}
		return alfanum[codigo];
	}
	
	// não permite escrever números
	var inputMsg = document.getElementById('msgEn');
	inputMsg.addEventListener('keypress', function (e) {
		
		if (e.key.charCodeAt(0) > 47 && e.key.charCodeAt(0) < 58) {
			e.preventDefault();
			return false;
		}
	});
	
	/*	--- PROCESSO DE CIFRAGEM ------------------------------------------	*/
	
	// botão
	var encriptao = document.getElementById('encript');
	
	// parágrafo onde será exibida a mensagem cifrada
	var encriptasso = document.getElementById('encripted');
	
	// ao clicar em 'Encript.'
	encriptao.addEventListener('click', function() {
		
		console.log('########################################');
		
		// input da mensagem
		var msg = inputMsg.value;
		console.log('Mensagem: ' + msg);
		
		// mensagem em código
		var msgCod = [];
		for (var x = 0; x < msg.length; x++) {
			msgCod.push(codigoChar(msg[x]));
		}
		console.log('Mensagem codificada: ' + msgCod.join(' '));
		
		// input da chave
		var chave = document.getElementById('keyEn').value;
		console.log('Chave: ' + chave);
		
		// quantas vezes a chave deve ser repetir em função do tamanho da mensagem
		var qtdChaves = parseInt(msg.length / chave.length);
		console.log('Chaves a repetir: ' + qtdChaves);
		
		// quantos caracteres faltam para a chave ficar do mesmo tamanho da mensagem, a pesar da repetição
		var faltaChars = msg.length % chave.length;
		console.log('Caracteres faltando para completar a chave: ' + faltaChars);
		
		// de acordo com as variáveis 'qtdChaves' e 'faltaChars' é criada uma chave definitiva
		var chaveDef = '';
		for (var x = 0; x < qtdChaves; x++) {
			chaveDef += chave;
		}
		for (var x = 0; x < faltaChars; x++) {
			chaveDef += chave[x];
		}
		console.log('Chave definitiva: ' + chaveDef);
		
		// chave definitiva em código
		var chaveCod = [];
		for (var x = 0; x < chaveDef.length; x++) {
			chaveCod.push(codigoChar(chaveDef[x]));
		}
		console.log('Chave codificada: ' + chaveCod.join(' '));
		
		// mensagem cifrada em código
		var msgCodXORed = [];
		for (var x = 0; x < chaveCod.length; x++) {
			msgCodXORed.push((chaveCod[x] ^ msgCod[x]));
		}
		console.log('Mensagem cifrada em codigo: ' + msgCodXORed.join(' '));
		
		// mensagem crifada em texto
		var msgEncripted = '';
		for (var x = 0; x < msgCodXORed.length; x++) {
			msgEncripted += charCodigo(msgCodXORed[x]);
		}
		console.log('Mensagem cifrada: ' + msgEncripted);
		encriptasso.innerHTML = msgEncripted.replace(/</, '&lt;');
		
		console.log('########################################');
	});
	// fim da cifragem
	
	
	/*	--- PROCESSO DE DECIFRAGEM ----------------------------------------	*/
	
	// botão
	var decriptao = document.getElementById('decript');
	
	// parágrafo onde será exibida a mensagem decifrada
	var decriptasso = document.getElementById('decripted');
	
	// ao clicar em 'Decript.'
	decriptao.addEventListener('click', function() {
		
		console.log('########################################');
		
		// input da mensagem cifrada
		var msg = document.getElementById('msgDe').value;
		console.log('Mensagem: ' + msg);
		
		// mensagem cifrada em código
		var msgCod = [];
		for (var x = 0; x < msg.length; x++) {
			if (parseInt(msg[x])) {
				msgCod.push(msg[x] + msg[x + 1] + msg[x + 2]);
				x += 2;
			} else {
				msgCod.push(codigoChar(msg[x]));
			}
		}
		console.log('Mensagem codificada: ' + msgCod.join(' '));
		
		// input da chave
		var chave = document.getElementById('keyDe').value;
		console.log('Chave: ' + chave);
		
		// quantas vezes a chave deve ser repetir em função do tamanho da mensagem
		var qtdChaves = parseInt(msgCod.length / chave.length);
		console.log('Chaves a repetir: ' + qtdChaves);
		
		// quantos caracteres faltam para a chave ficar do mesmo tamanho da mensagem, a pesar da repetição
		var faltaChars = msgCod.length % chave.length;
		console.log('Caracteres faltando para completar a chave: ' + faltaChars);
		
		// de acordo com as variáveis 'qtdChaves' e 'faltaChars' é criada uma chave definitiva
		var chaveDef = '';
		for (var x = 0; x < qtdChaves; x++) {
			chaveDef += chave;
		}
		for (var x = 0; x < faltaChars; x++) {
			chaveDef += chave[x];
		}
		console.log('Chave definitiva: ' + chaveDef);
		
		// chave definitiva em código
		var chaveCod = [];
		for (var x = 0; x < chaveDef.length; x++) {
			chaveCod.push(codigoChar(chaveDef[x]));
		}
		console.log('Chave codificada: ' + chaveCod.join(' '));
		
		// mensagem decifrada em código
		var msgCodXORed = [];
		for (var x = 0; x < chaveCod.length; x++) {
			msgCodXORed.push((chaveCod[x] ^ msgCod[x]));
		}
		console.log('Mensagem cifrada em codigo: ' + msgCodXORed.join(' '));
		
		// mensagem decifrada em texto
		var msgDecripted = '';
		for (var x = 0; x < msgCodXORed.length; x++) {
			msgDecripted += charCodigo(msgCodXORed[x]);
		}
		console.log('Mensagem decifrada: ' + msgDecripted);
		decriptasso.innerHTML = msgDecripted.replace(/</, '&lt;');
		
		console.log('########################################');
	});
	// fim da decifragem
});