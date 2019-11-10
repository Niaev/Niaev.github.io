<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>cry 2.0</title>
		
		<link rel="stylesheet" type="text/css" href="css.css">
	</head>
	<body>

		<div class="nav">
			<h1>cry 2.0</h1>
			<h3>the cipher</h3>
			<a href="https://github.com/Niaev/cry2-web" target="_blank">
				<img src="github-corner.png" alt="Fork me on Github">
			</a>
		</div>

		<div class="container">
			<div class="row">
				<div class="col">
					<textarea id="input" rows="10" placeholder="input message"></textarea><br>
					<input type="password" id="key" placeholder="key"><br>
					<button id="enc">encrypt</button>
					<button id="dec">decrypt</button>
				</div>
				<div class="col">
					<textarea id="output" rows="10" placeholder="output message" readonly></textarea>
					<button id="copy">copy to clipboard</button>
				</div>				
			</div>
		</div>
		
	</body>

	<script src="javascript.js"></script>
</html>
