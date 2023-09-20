

/*
let sayi = prompt("Lütfen1 ile 5 arasında bir Sayi Giriniz");

switch(sayi){
    case "1":
        //kodlar gelir
        console.log("Girilen Sayi 1'dir");
    break;    

    case "2":
        //kodlar gelir
        console.log("Girilen Sayi 2'dir");
    break;    

    case "3":
        //kodlar gelir
        console.log("Girilen Sayi 3'dir");
    break;    

    case "4":
        //kodlar gelir
        console.log("Girilen Sayi 4'dir");
    break;    

    case "5":
        //kodlar gelir
        console.log("Girilen Sayi 5'dir");
    break;    

    default:
        console.log("Girilen Bİr sayi 1 ile 5 arasında olmalıdır!");
    break;

}*/
let YeniSatir = "\r\n";
let metin ="1-Pazartesi"+ YeniSatir
+"2-Salı" + YeniSatir
+"3-Çarşamba"+YeniSatir
+"4-Perşembe" +YeniSatir
+"5-Cuma" + YeniSatir
+"6-Cumartesi"+ YeniSatir
+ "7-Pazar" + YeniSatir
+ "Lütfen Bir Seçim Yapınız";

let deger = prompt(metin);
switch(deger){

    case "1":
        console.log("Pazartesi Günü");
        break;
    case "2":
        console.log("Salu Günü");
       break;
    case "3":
        console.log("Çarşamba Günü");
        break;
    case "4":
        console.log("Perşembe Günü");
        break;
    case "5":
        concole.log("Cuma Günü");
        break;                   
    case "6":
        console.log("Cumartesi Günü");
        break;
    case "7":
        console.log("Pazar Günü");
        break;
    default:
        console.log("Lütfen Geçerli bir örnek Giriniz.");
        break;

}
