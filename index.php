<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>cry 2.0</title>
		
		<link rel="stylesheet" type="text/css" href="css.css">
	</head>
	<body>
		<h1 style="display: inline">cry 2.0</h1>
		<a href="https://github.com/Niaev/Niaev.github.io" target="_blank">Repo</a>
		
		<br><br>

		<fieldset>
			<legend>Encript</legend>
			<textarea id="msgEn" placeholder="Mensagem"></textarea><br>
			<input id="keyEn" placeholder="Chave"><br>
			<button id="encript">Encript.</button><br>
			
			<hr>
			
			<label for="encripted">Mensagem Cifrada:</label><br><br>
			<strong id="encripted"></strong>
		</fieldset>

		<br>
		
		<fieldset>
			<legend>Decript</legend>
			<textarea id="msgDe" placeholder="Mensagem cifrada"></textarea><br>
			<input id="keyDe" placeholder="Chave"><br>
			<button id="decript">Decript.</button><br>
			
			<hr>
			
			<label for="decripted">Mensagem Decifrada:</label><br><br>
			<strong id="decripted"></strong>
		</fieldset>
	</body>

	<script src="javascript.js"></script>
</html>
