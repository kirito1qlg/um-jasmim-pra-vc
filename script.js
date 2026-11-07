const app = document.getElementById("app");

let estrelas = "";
let petalas = "";

for (let i = 0; i < 100; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const atraso = Math.random() * 4;

    estrelas += `
        <span class="estrela"
            style="left:${x}%; top:${y}%;
            animation-delay:${atraso}s">
        </span>
    `;
}

for (let i = 0; i < 25; i++) {
    const x = Math.random() * 100;
    const atraso = Math.random() * 10;
    const duracao = 5 + Math.random() * 6;

    petalas += `
        <span class="petala-caindo"
            style="left:${x}%;
            animation-delay:${atraso}s;
            animation-duration:${duracao}s">
        </span>
    `;
}

app.innerHTML = `
    <section class="jardim" id="jardim">

        <div class="ceu">
            <div class="lua"></div>
            <div class="estrelas">${estrelas}</div>
            <div class="chuva-petalas">${petalas}</div>
        </div>

        <div class="flor-container">
            <button class="flor" id="flor"
                aria-label="Abrir surpresa">
                <span class="petala p1"></span>
                <span class="petala p2"></span>
                <span class="petala p3"></span>
                <span class="petala p4"></span>
                <span class="petala p5"></span>
                <span class="miolo"></span>
            </button>

            <div class="caule"></div>
            <div class="folha folha1"></div>
            <div class="folha folha2"></div>
        </div>

        <div class="mensagem-jardim">
            <h1>Para você, meu amor.</h1>
            <p>Mesmo nas noites mais difíceis,</p>
            <p>sempre existe beleza esperando para florescer.</p>
            <span>Com amor. ♡</span>
        </div>

        <p class="convite">Toque no jasmim para descobrir uma surpresa</p>

    </section>
`;

const flor = document.getElementById("flor");

flor.addEventListener("click", () => {
    abrirEnvelope();
});

function abrirEnvelope() {
    const jardim = document.getElementById("jardim");

    jardim.classList.add("desaparecer");

    setTimeout(() => {
        mostrarEnvelope();
    }, 700);
}

function mostrarEnvelope() {
    app.innerHTML = `
        <section class="tela-envelope">
            <h1>Uma carta para você</h1>

            <button class="envelope" id="envelope">
                <span class="selo">♡</span>
            </button>

            <p>Clique no envelope para abrir</p>
        </section>
    `;

    document.getElementById("envelope")
        .addEventListener("click", mostrarCarta);
}

function mostrarCarta() {
    app.innerHTML = `
        <section class="tela-carta">
            <article class="carta">

                <h1>Para você, meu amor...</h1>

                <div class="linha-dourada"></div>

                <p class="poema">
Tu és a calmaria que acalma o meu mar,
E a luz mais bonita que ilumina meu dia.

Amante de tudo o que faz o peito sonhar,
Meu porto seguro, minha doce alegria.
Onde quer que eu vá, meu rumo é o teu olhar.

Meu mundo ganhou cor desde que te encontrei,
Um laço tão forte que o tempo não quebra.
Inspiração pura que eu tanto esperei,
Tudo o que eu quero é cuidar dessa terra,
Onde o nosso amor é o reino que eu amarei.
                </p>

                <div class="linha-dourada"></div>

                <p class="assinatura">Com todo o meu amor. ♡</p>
                <small>Um jasmim para você. ♡</small>

                <button class="botao-final" id="botao-final">
                    Descobrir a última surpresa ♡
                </button>

            </article>
        </section>
    `;

    document.getElementById("botao-final")
        .addEventListener("click", mostrarFinal);
}

function mostrarFinal() {
    app.innerHTML = `
        <section class="tela-final">

            <div class="ceu-final">
                <div class="estrelas">${estrelas}</div>
                <div class="chuva-petalas">${petalas}</div>
                <div class="lua"></div>
            </div>

            <h2>E, antes que a noite termine...</h2>

            <p class="mensagem-final" id="mensagem-final"></p>

            <div class="dedicatoria" id="dedicatoria">
                <div class="linha-dourada"></div>
                <h1>Com amor, para Lívia. ♡</h1>
                <p>Um jasmim para você.</p>
            </div>

        </section>
    `;

    const mensagem =
        "Se eu pudesse escolher novamente, em todas as vidas, em todos os mundos e em todas as histórias, ainda escolheria encontrar você.";

    const elemento = document.getElementById("mensagem-final");
    const dedicatoria = document.getElementById("dedicatoria");

    let indice = 0;

    dedicatoria.style.opacity = "0";

    const intervalo = setInterval(() => {
        elemento.textContent += mensagem[indice];
        indice++;

        if (indice >= mensagem.length) {
            clearInterval(intervalo);

            setTimeout(() => {
                dedicatoria.style.opacity = "1";
            }, 800);
        }
    }, 65);
}
