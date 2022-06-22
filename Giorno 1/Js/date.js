let dataAttuale = new Date();
document.write(dataAttuale + "<hr>");
document.write('<br>');
document.write('Anno: ')
document.write(dataAttuale.getFullYear());
document.write('<br>');
document.write('Mese: ')
document.write(dataAttuale.getMonth() +1);
document.write('<br>');
document.write('Giorno: ')
document.write(dataAttuale.getDate());
document.write('<br>');
document.write('Ora: ')
document.write(dataAttuale.getHours());
document.write('<br>');
document.write('Minuto: ')
document.write(dataAttuale.getMinutes());
document.write('<br>');
document.write('Secondo: ')
document.write(dataAttuale.getSeconds());
document.write('<br>');
dataSpecifica = new Date("20, June, 2022, 15:10:00");
document.write(dataSpecifica.toUTCString());