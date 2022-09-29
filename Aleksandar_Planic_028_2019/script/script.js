var broj = 1;

function PromeniIme(ime)
{
    document.getElementById("imeTelefona").innerHTML = ime;
}

function Prozor()
{
    switch(broj)
        {
        case 1:
               window.open("samsung%20galaxy%20s6.html","","width=300,height=300");  
            break;
        case 2:
                window.open("iphone%20x.html","","width=300,height=300");  
            break;
        case 3:  
				window.open("iphone%207+%20red.html","","width=300,height=300");
            break;
        case 4:
                window.open("huawei%20mate%2010%20lite.html","","width=300,height=300");  
            break;
        case 5:
                window.open("galaxy%20tab%20a.html","","width=300,height=300");  
            break;
        }
}


function Levo()
{
    if(broj != 1)
    {
        broj -= 1;
    }
    else if(broj == 1)
    {
        broj = 5;
    }
    
    
    switch(broj) 
    {
        case 1:
            PromeniIme("Samsung Galaxy S6");
            break;
        case 2:
            PromeniIme("iPhone X");
            break;
        case 3:
            PromeniIme("iPhone 7");
            break;
        case 4:
            PromeniIme("Huawei Mate 10");
            break;
        case 5:
            PromeniIme("Galaxy Tab A");
            break;
    }
    
    document.getElementById("slider").src = "images/Pocetna%20Slide/slika" + broj + ".jpg";
}

function Desno()
{
    if(broj != 5)
    {
        broj += 1;
    }
    else if(broj == 5)
    {
        broj = 1;
    }
    
    
    switch(broj) 
    {
        case 1:
            PromeniIme("Samsung Galaxy S6");
            break;
        case 2:
            PromeniIme("iPhone X")
            break;
        case 3:
            PromeniIme("iPhone 7");
            break;
        case 4:
            PromeniIme("Huawei Mate 10");
            break;
        case 5:
            PromeniIme("Galaxy Tab A");
            break;
    }
    
    document.getElementById("slider").src = "images/Pocetna%20Slide/slika" + broj + ".jpg";
}

function Pretraga(slika,tekst)
{
   document.getElementById("rezultat").src = "images/Pocetna%20Slide/" + slika + ".jpg"; 
   document.getElementById("informacije").innerHTML = tekst;
}

function Pronadji()
{
    var trazeno = document.getElementById("unos").value;
    
    if(trazeno.localeCompare("samsung galaxy s6") == 0)
    {
       Pretraga("slika1",`Market
Status : Aktuelan
Model : Galaxy S6 G920 32GB
Mreže : 850Mhz, 900Mhz, 1800Mhz, 1900Mhz, HSDPA, LTE,
Kućište		
Dimenzije : 143.4 x 70.5 x 6.8 mm
Težina : 138 grama
Oblik : touch-screen,
Tastatura : nema,
Procesor		
Procesor : Quad-core Cortex-A53 & Quad-core Cortex-A57
Takt : 1500/2100 MHz
Baterija		
Vrsta : Li-Ion
Kapacitet : 2550 mAh
Ostalo		
Ostalo : vibracija, kompas, akcelerometar, barometar, bežično punjenje baterije, merač pulsa,`);
    }
    if(trazeno.localeCompare("iphone x") == 0)
    {
       Pretraga("slika2",`Market		
Status : Aktuelan
Model : iPhone X 256GB
Mreže : 850Mhz, 900Mhz, 1800Mhz, 1900Mhz, 2100Mhz, HSDPA, LTE,
Kućište		
Dimenzije : 143.6 x 70.9 x 7.7 mm
Težina : 174 grama
Oblik : touch-screen,
Procesor		
Procesor : Hexa-core
Baterija		
Vrsta : Li-Ion
Ostalo		
Ostalo : vibracija, kompas, akcelerometar, barometar,`);
    }
    if(trazeno.localeCompare("iphone 7") == 0)
    {
       Pretraga("slika3",`Market		
Status : Aktuelan
Model : iPhone 7 Plus Red 128GB
Mreže : 850Mhz, 900Mhz, 1800Mhz, 1900Mhz, 2100Mhz, HSDPA, LTE,
Kućište		
Dimenzije : 158.2 x 77.9 x 7.3 mm
Težina : 188 grama
Oblik : touch-screen,
Procesor		
Procesor : Quad-core (2x Hurricane + 2x Zephyr)
Takt : 2340 MHz
Baterija		
Vrsta : Li-Ion
Kapacitet : 2900 mAh
Ostalo		
Ostalo : vibracija, kompas, akcelerometar, barometar,`);
    }
    if(trazeno.localeCompare("huawei mate 10") == 0)
    {
       Pretraga("slika4",`Market		
Status : Aktuelan
Model : Mate 10 Lite
Mreže : 850Mhz, 900Mhz, 1800Mhz, 1900Mhz, 2100Mhz, HSDPA, LTE,
Kućište		
Dimenzije : 156.2 x 75 x 7.5 mm
Težina : 164 grama
Oblik : touch-screen,
Procesor		
Procesor : Octa-core (4x Cortex-A53 & 4x Cortex-A53)
Takt : 2360/1700 MHz
Baterija		
Vrsta : Li-Ion
Kapacitet : 3340 mAh
Ostalo		
Ostalo : dual-SIM, vibracija, kompas, akcelerometar, čitač otiska prsta,`);
    }
    if(trazeno.localeCompare("galaxy tab a") == 0)
    {
       Pretraga("slika5",`Market		
Status : Aktuelan
Model : Galaxy Tab A 7.0 2016 T285
Mreže : 850Mhz, 900Mhz, 1800Mhz, 1900Mhz, 2100Mhz, HSDPA, LTE,
Kućište		
Dimenzije : 186.9 x 108.8 x 8.7 mm
Težina : 283 grama
Oblik : tablet,
Procesor		
Procesor : Quad-core Cortex-A53
Takt : 1300 MHz
Baterija		
Vrsta : Li-Ion
Kapacitet : 4000 mAh
Ostalo		
Ostalo : vibracija, akcelerometar,`);
    }
}