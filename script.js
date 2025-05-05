const urlInput = document.getElementById('url');
const goBtn = document.getElementById('go');
const iframe = document.getElementById('frame');
const alfabetoDiv = document.getElementById('alfabeto');

function mostrarImagem() {
  alfabetoDiv.innerHTML = ''; // Limpa o conteúdo atual
  const img = document.createElement('img');
  img.src = 'Manoel.png'; // Coloque o link da sua imagem
  img.alt = 'Imagem Exemplo'; // Descrição da imagem
  img.style.maxWidth = '100%'; // Ajusta a largura da imagem
  img.style.height = 'auto'; // Mantém a proporção
  img.style.borderRadius = '8px'; // Opcional: borda arredondada
  alfabetoDiv.appendChild(img);
  alfabetoDiv.style.display = 'flex';
  iframe.style.display = 'none';
}

function esconderAlfabeto() {
  alfabetoDiv.style.display = 'none';
  iframe.style.display = 'block';
}

function carregar(url) {
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  iframe.src = url;
  esconderAlfabeto();
}

goBtn.onclick = () => {
  const val = urlInput.value.trim().toLowerCase();
  if (val === 'o rei da vela') {
    mostrarImagem(); // Exibe a imagem em vez do alfabeto
  } else if (val) {
    carregar(val);
  }
};

urlInput.onkeydown = e => {
  if (e.key === 'Enter') goBtn.click();
};

// Página inicial
carregar('https://www.google.com');