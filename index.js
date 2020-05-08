﻿const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
	res.end(`<div>
				 <h1>Glavnoi</h1>
				 <nav>
					<ul>
						<li>
							<a href="/">Glavnoi</a>
						</li>
						
						<li>
							<a href="/str">Stranica</a>
						</li>
					</ul>
				 </nav>
			 </div>`);
});

app.get('/str', (req, res) => {
	res.end(`<div>
				 <h1>Stranica</h1>
				 <nav>
					<ul>
						<li>
							<a href="/">Glavnoi</a>
						</li>
						
						<li>
							<a href="/str">Stranica</a>
						</li>
					</ul>
				 </nav>
			 </div>`);
})

app.listen(PORT, () => {
	console.log('Сервер работает');
})