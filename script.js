var cartas=["https://upload.wikimedia.org/wikipedia/commons/2/2c/Papus_Atout_01-bateleur-magician.png","https://upload.wikimedia.org/wikipedia/commons/d/d4/Papus_Atout_02-papesse-high-priestess.png","https://upload.wikimedia.org/wikipedia/commons/c/c5/Papus_Atout_03-imperatrice-empress.png","https://upload.wikimedia.org/wikipedia/commons/f/f4/Papus_Atout_04-empereur-emperor.png", "https://upload.wikimedia.org/wikipedia/commons/8/85/Papus_Atout_05-pape-pope.png","https://upload.wikimedia.org/wikipedia/commons/7/7b/Papus_Atout_06-amoureux-lover.png","https://upload.wikimedia.org/wikipedia/commons/d/df/Papus_Atout_07-chariot.png","https://upload.wikimedia.org/wikipedia/commons/d/dd/Papus_Atout_08-justice.png","https://upload.wikimedia.org/wikipedia/commons/7/7f/Papus_Atout_09-hermite-hermit.png","https://upload.wikimedia.org/wikipedia/commons/4/45/Papus_Atout_10-roue-de-fortune-wheel-of-fortune.png","https://upload.wikimedia.org/wikipedia/commons/e/ec/Papus_Atout_11-force-strength.png","https://upload.wikimedia.org/wikipedia/commons/b/bc/Papus_Atout_12-pendu-hanged-man.png", "https://upload.wikimedia.org/wikipedia/commons/a/a4/Papus_Atout_13-sans-nom-without-a-name.png","https://upload.wikimedia.org/wikipedia/commons/9/9b/Papus_Atout_14-temperance.png", "https://upload.wikimedia.org/wikipedia/commons/7/73/Papus_Atout_15-diable-devil.png","https://upload.wikimedia.org/wikipedia/commons/e/e4/Papus_Atout_16-maison-dieu-tower.png", "https://upload.wikimedia.org/wikipedia/commons/8/85/Papus_Atout_17-etoile-star.png","https://upload.wikimedia.org/wikipedia/commons/f/f8/Papus_Atout_18-lune-moon.png","https://upload.wikimedia.org/wikipedia/commons/e/ee/Papus_Atout_19-soleil-sun.png","https://upload.wikimedia.org/wikipedia/commons/5/57/Papus_Atout_20-jugement-judgement.png","https://upload.wikimedia.org/wikipedia/commons/a/a4/Papus_Atout_21-monde-world.png","https://upload.wikimedia.org/wikipedia/commons/5/5f/Papus_Atout_22-mat-fool.png"]

var arcanos=["O Mago", "A Sacerdotisa","A Imperatriz","O Imperador","O Papa", "Os Amantes", "O Carro de Guerra","A Justiça", "O Ermitão","A Roda da Fortuna","A Força","O Enforcado", "A Morte", "A Temperança","O Diabo", "A Torre", "A Estrela","A Lua","O Sol","O Julgamento","O Mundo","O Louco"]


alert("Clique par escolher uma carta");
var alea = parseInt(Math.random()*22);
document.write("<img src="+cartas[alea]+">");
document.write("<p>"+ arcanos[alea] +"</p>");