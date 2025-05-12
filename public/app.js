fetch('https://api.themoviedb.org/3/movie/popular?api_key=5ee5db70b3f9aa4806ef0a3fed911d83&language=pt-BR')
    .then(res => {
        if (!res.ok) {
            throw new Error('Erro ao buscar dados da API');
        }
        return res.json();
    })
    .then(data => {
        console.log('Imprimindo filmes');
        console.log('Dados completos da API:', data);  // Exibe todos os dados retornados da API
        let str = '';
        for (let i = 0; i < data.results.length; i++) {
            let filme = data.results[i];
            console.log(`Dados do filme: ${filme.title}`);  // Exibe dados do filme atual no console
            console.log(filme);  // Exibe todos os detalhes do filme
            str += `
                <div class="card col-md-4" style="width: 18rem;">
                    <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="${filme.title}">
                    <div class="card-body">
                        <h5 class="card-title">${filme.title}</h5>
                        <p class="card-text">${filme.overview}</p>
                        <a href="detalhe.html?id=${filme.id}" class="btn btn-primary">Mais detalhes</a>
                    </div>
                </div>
            `;
        }

        const tela = document.getElementById('tela');
        if (tela) {
            tela.innerHTML = str;
        } else {
            console.error('Elemento com id "tela" não encontrado.');
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });
