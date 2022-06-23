# Super Mário - JavaScript Game

Réplica do Jogo Super Mário utilizando HTML, CSS e JavaScript.
<div align="center">
<h2><a href="https://holiv.github.io/super-mario-startse/">Play</a></h2></div>

1. Criação de uma tela inicial onde o usuário pode escolher o momento de iniciar o jogo ao clicar em <i>PLAY</i>.
2. Criação de animações não interativas como:
   1. Grama;
   2. Pássaro;
   3. Balas de canhão;
3. Criação de animações interativas (obstáculos):
   1. Cano baixo;
   2. Cano alto;
   3. Inimigo (Goomba);
4. Criação de algoritmo para Score
   1. O score só é computado quando o Mario de fato passa por um obstaculo, impedindo que seja computado pontos por pulos aleatórios ou acidentais.
   2. Computado valores diferentes para cada obstaculo (5 pontos - cano baixo / 10 pontos - cano alto / 1 ponto - Goomba);
5. Criação de nivel avançado (velocidade acelerada) ao atingir determinada quantidade de pontos no score:
   1. Criação de um contador com precisão de 0.05 para sincronizar animaçoes durante a transição nos níveis.


<i>Projeto criado durante curso de formação FullStack da <a href="https://www.startse.com/">StartSe/Tech Academy</a></i>