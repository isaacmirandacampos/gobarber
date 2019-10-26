# ANOTAÇÕES

Existe um conceito chamado singleton que no Node.js é muito forte e consiste em: Toda vez que um arquivo exporta um objeto, aquele código nunca mais será recarregado, ele reaproveita o código em toda próxima importação e nesses casos usamos o new para retornar uma instância da classe ao invés de a classe em si. No caso dos models, se usarmos o new nós vamos usar apenas um usuário em toda aplicação e não é o que queremos, cada vez que fazemos uma query ou criamos um novo model queremos uma instância nova



# Bibliotecas:


.
.
.
.
.

envio de email => {
  nodemailer = ferramentas({
    mailtrap(ambiente de desenvolvimento),
    serviços de envio de email:
      amazon ses,
      mailgun,
      sparkpost
      }
    ));
  }

personalização de email => {
  express-handlebars(integration with express);
  nodemailer-express-handlebars(integration with nodemailer);
}
  backgroud-jobs => {
    redis - banco de dados não relacional que utiliza chaves > performance

    Bee queue - ferramenta de controle de chaves de auta performance
  }

Sentry.io para monitoração de erro =>
   express-async-errors para o express enxergar o erro do codigo async
    Youch para tratação de erro

Variaveis ambiente => {
  dentro de .env
  para usar yarn add dotenv
}
