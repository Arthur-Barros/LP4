<template>
  <div class="container">
    <div class="bloco">
      <div id="desc">
        <img src="/images/arthur.jpeg" alt="Foto Arthur" />
        <h1>{{ name }}</h1>
      </div>

      <div class="info">
        <h2>Informações</h2>
        <p>Idade: {{ idade }} anos</p>
        <p>Estado civil: {{ civil }}</p>
        <p>Naturalidade: {{ naturalidade }}</p>
        <p>Nacionalidade: {{ nacionalidade }}</p>
      </div>

      <div class="contatos">
        <div class="contato">
          <h3>Telefone: <a href="tel:+5567999999">67 99999-9999</a> </h3>
        </div>

        <div class="contato">
          <h3>
            Linkedin:
            <a href="https://www.linkedin.com/in/arthur-barros-/" target="_blank">{{name}}</a>
          </h3>
        </div>

        <div class="contato">
          <h3>Email: <a href="mailto:barrosarthur773@gmail.com">arthur@email.com</a></h3>
        </div>

         <div class="contato">
          <h3>Github: <a href="https://github.com/Arthur-Barros" target="_blank">{{name}}</a></h3>
        </div>
      </div>
    </div>

    <div class="segundo_bloco">
      <div class="text">
        <h1>{{ name }}</h1>
        <p>
          Estudante de Tecnologia em Sistemas para Internet no Instituto Federal
          do Mato Grosso do Sul e do bootcamp LaunchBase da Rocketseat,
          atualmente conhecendo e usando teorias e boas práticas do mundo do
          desenvolvimento, buscando sempre aprender com os desafios propostos,
          para colocar em prática.
        </p>
      </div>

      <div class="text">
        <h1>Formação</h1>
        <h3>
          Tecnologia em Sistemas para Internet - Mato Grosso do Sul (IFMS)
        </h3>
        <p>Situação: Cursando</p>
      </div>

      <div class="text">
        <h1>Cursos - Complementares</h1>
        <p>Bootcamp - LaunchBase Rocketseat</p>
        <p>Python - Udemy</p>
        <p>JavaScript - Udemy</p>
        <p>Html e Css - Udemy</p>
      </div>

      <div class="text">
        <h1>Tecnologias mais utilizadas</h1>
        <p>React Js || Html 5 || Css3 || Vue Js || React Js || JavaScript</p>
      </div>

      <div class="text">
        <h1>Experiência</h1>
        <h3>Estágiario de Desenvolvimento | Binamik 2021</h3>
        <p>Tester e implementação</p>
        <h3>Agente de Viagens | 2020</h3>
        <p>Realizar pacotes e atender clientes para passeios em Bonito</p>
        <h3>Recepcionista | 2019 | 2020</h3>
        <p>Atendimento balcão</p>
      </div>

      <div class="text">
        <h1>Idiomas</h1>
        <h3>Inglês: Compreende</h3>
        <p>Razoavelmente, Fala Pouco, Lê</p>
        <p>Razoavelmente, Escreve Pouco.</p>
        <h3>Português: Compreende Bem</h3>
        <p>Fala Bem, Lê Bem, Escreve Bem</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home_Curriculo",
  props: {
    name: String,
    idade: Number,
    civil: String,
    naturalidade: String,
    nacionalidade: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  color: white;
  padding: 2rem;
  display: flex;
}

.menu {
  border-bottom: 1px solid #ccc;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120%;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}

.menu a:first-child {
  margin-right: 2rem;
}

.menu li {
  padding-bottom: 5px;
}

.menu li a:hover {
  padding-bottom: 5px;
  border-bottom: white 4px solid;
  transition: color 300ms;
}

.bloco {
  margin: 2rem;
  font-size: 120%;
}

.bloco #desc img {
  width: 22rem;
  border-radius: 1rem;
}

.bloco #desc h1 {
  padding: 1rem;
  color: rgb(113, 113, 255);
  text-align: center;
}

.bloco .info {
  margin: 2rem 1rem;
  font-size: 100%;
  text-align: left;
}

.bloco .info h2 {
  margin: 2rem 0.5rem;
  font-family: sans-serif;
  color: #ccc;
  font-weight: bold;
}

.bloco .info p {
  margin: 0.5rem;
  color: #ccc;
}

.bloco .contatos {
  margin: 4rem 0.5rem;
  font-size: 80%;
  text-align: left;
}
.bloco .contatos .contato {
  margin: 1rem;
  color: rgb(113, 113, 255);
}

.bloco .contatos .contato strong,
a {
  color: #ccc;
}

.segundo_bloco {
  margin: 2rem;
  font-size: 120%;
  text-align: center;
}

.segundo_bloco .text {
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #ccc;
}

.segundo_bloco .text h1 {
  color: rgb(113, 113, 255);
  padding: 1rem;
  font-weight: bold;
  text-align: left;
}

.segundo_bloco .text p {
  text-align: justify;
  padding: 1rem;
  color: #ccc;
}

.segundo_bloco .text h3{
  padding: 1rem;
  font-weight: bold;
  text-align: left;
} 

</style>
