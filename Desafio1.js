console.log("Olá aventureiro!");

var nome = "Renan";
var xp = 5000;
var nivel;


switch (true){
    case (xp <= 1000 ):
        nivel = "Ferro";
        break;

    case (1001 <= xp && xp <= 2000):
        nivel = "Bronze";
        break;

    case (2001 <= xp && xp <= 5000):
        nivel = "Prata";
        break;
   
    case (5001 <= xp && xp <= 7000):
        nivel = "Ouro";
        break;
  
    case (7001 <= xp && xp <= 8000):
        nivel = "Platina";
        break;
   
    case (8001 <= xp && xp <= 9000):
        nivel = "Ascendente";
        break;
   
    case (9001 <= xp && xp <= 10000):
        nivel = "Imortal";
        break;
  
    case (10001 <= xp):
        nivel = "Radiante";
        break;

    default:
        break;
}
    console.log("O Herói de nome "+ nome+ " está no nível de "+ nivel + " com "+ xp+ " de experiência!");
