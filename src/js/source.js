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
	function inputHasNum(text) {
		for (var i=0;i < text.length; i++) {
			if (!isNaN(parseInt(text[i]))) {
				return true;
			}
		}
		return false;
	}
	
	/*	--- PROCESSO DE CIFRAGEM ------------------------------------------	*/
	
	// botão
	var enc = document.getElementById('enc');
	
	// textarea da mensagem inicial
	var input = document.getElementById('input');
	input.value = '';
	// textarea onde será exibida a mensagem cifrada
	var output = document.getElementById('output');
	output.value = ''
	
	// ao clicar em 'Encript.'
	enc.addEventListener('click', function() {				
		// input da mensagem
		var msg = input.value;

		if (inputHasNum(msg)) {
			alert('the input field can\'t have numbers for encryption');
			return false;
		}
		
		// mensagem em código
		var msgCod = [];
		for (var x = 0; x < msg.length; x++) {
			msgCod.push(codigoChar(msg[x]));
		}
		
		// input da chave
		var chave = document.getElementById('key').value;
		
		// quantas vezes a chave deve ser repetir em função do tamanho da mensagem
		var qtdChaves = parseInt(msg.length / chave.length);
		
		// quantos caracteres faltam para a chave ficar do mesmo tamanho da mensagem, a pesar da repetição
		var faltaChars = msg.length % chave.length;
		
		// de acordo com as variáveis 'qtdChaves' e 'faltaChars' é criada uma chave definitiva
		var chaveDef = '';
		for (var x = 0; x < qtdChaves; x++) {
			chaveDef += chave;
		}
		for (var x = 0; x < faltaChars; x++) {
			chaveDef += chave[x];
		}
		
		// chave definitiva em código
		var chaveCod = [];
		for (var x = 0; x < chaveDef.length; x++) {
			chaveCod.push(codigoChar(chaveDef[x]));
		}
		
		// mensagem cifrada em código
		var msgCodXORed = [];
		for (var x = 0; x < chaveCod.length; x++) {
			msgCodXORed.push((chaveCod[x] ^ msgCod[x]));
		}
		
		// mensagem crifada em texto
		var msgEncripted = '';
		for (var x = 0; x < msgCodXORed.length; x++) {
			msgEncripted += charCodigo(msgCodXORed[x]);
		}
		output.value = msgEncripted.replace(/</g, '&lt;');
	});
	// fim da cifragem
	
	/*	--- PROCESSO DE DECIFRAGEM ----------------------------------------	*/
	
	// botão
	var dec = document.getElementById('dec');
	
	// ao clicar em 'Decript.'
	dec.addEventListener('click', function() {		
		// input da mensagem cifrada
		var msg = input.value;
		
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
		
		// input da chave
		var chave = document.getElementById('key').value;
		
		// quantas vezes a chave deve ser repetir em função do tamanho da mensagem
		var qtdChaves = parseInt(msgCod.length / chave.length);
		
		// quantos caracteres faltam para a chave ficar do mesmo tamanho da mensagem, a pesar da repetição
		var faltaChars = msgCod.length % chave.length;
		
		// de acordo com as variáveis 'qtdChaves' e 'faltaChars' é criada uma chave definitiva
		var chaveDef = '';
		for (var x = 0; x < qtdChaves; x++) {
			chaveDef += chave;
		}
		for (var x = 0; x < faltaChars; x++) {
			chaveDef += chave[x];
		}
		
		// chave definitiva em código
		var chaveCod = [];
		for (var x = 0; x < chaveDef.length; x++) {
			chaveCod.push(codigoChar(chaveDef[x]));
		}
		
		// mensagem decifrada em código
		var msgCodXORed = [];
		for (var x = 0; x < chaveCod.length; x++) {
			msgCodXORed.push((chaveCod[x] ^ msgCod[x]));
		}
		
		// mensagem decifrada em texto
		var msgDecripted = '';
		for (var x = 0; x < msgCodXORed.length; x++) {
			msgDecripted += charCodigo(msgCodXORed[x]);
		}
		output.value = msgDecripted.replace(/</g, '&lt;');
	});
	// fim da decifragem

	/* --- PROCESSO DE CÓPIA DO OUTPUT ----------------------------------------	*/

	// botão
	var copy = document.querySelector('#copy');

	copy.addEventListener('click', function() {
		output.select();
		output.setSelectionRange(0, 99999);
		document.execCommand('copy');
	});
});
