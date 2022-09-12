// importando a dependência express
import express from "express";

// para criar nossa aplicação vamos colocar a funcao express em um constante
const app = express();

// primeira rota que nosso usuário pode usar na nossa aplicação
/*  a função get exige dois parametros, sendo o primeiro informar qual o endereço: 
se temos o endereço: www.minhaaplicação.com/
quando o usuário digitar www.minhaplicação.com/ads ele terá acesso a outra página.
No segundo parametro é necessário colocar uma função, essa função será executada quando nosso usuário acessar a rota indicada.
*/
app.get('/ads');