
let objectAustria: Array<austria>;
objectAustria = [];
let iArray = [];


let Name: Array<string>= ["BioFrische","ON Restaurant", "St. Charles Church", "Schönbrunn Park, Vienna"];
let city: Array<string>= ["wien", "wien", "wien", "wien"];
let bezirk: Array<number>= [15, 5, 1, 13];
let ZIPCode: Array<number>= [1150, 1050, 1010, 1130];
let img: Array<string>= ["../img/bio.jpg", "../img/on.jpg", "../img/ch.jpg", "../img/sch.jpg"];
let address: Array<string>= ["Stutterheimstraße 6", "Wehrgasse 8", "Karlsplatz 1", "Maxingstraße 13b"];
let telephoneNumber: Array<string>= ["019529215", "015854900"];
let type: Array<string>= ["Indian", "Chinese"];
let webAddress: Array<string>= ["biofrische.wien", "http://www.restaurant-on.at/"];


class austria {
	Name: string;
    city: string;
    bezirk: number;
    ZIPCode: number;
    img: string;
    address : string;
    
    constructor(Name, city, address, ZIPCode,bezirk, img) {
        this.city = city;
        this.address = address;
        this.ZIPCode = ZIPCode;
        this.bezirk = bezirk;
        this.img = img;
        this.Name = Name;
    }
}

function creationinfo(){
    for (let i = 0; i<5; i++){
        let profil = new austria( Name[i], city[i], address[i], ZIPCode[i], bezirk[i], img[i])
        objectAustria.push(profil);
    }
}



class restaurant extends austria{
	telephoneNumber: number;
	type: string;
	webAddress: string;

	constructor(city, address, ZIPCode, bezirk, img, Name, telephoneNumber, type, webAddress) {
       super(city, address, ZIPCode, bezirk, img, Name); 
       this.telephoneNumber = telephoneNumber;
       this.type = type;
       this.webAddress = webAddress;
	}
}

function createCard(){
    var a = "";
    for (let i=0; i < objectAustria.length; i++) {
        iArray.push(i);
        a += `
    <div id="upperCard${i}" class="card mb-3">
    	<div class="card-body">
            <h5 class="card-title">${objectAustria[i].Name}</h5>
            <p class="card-text">( ${objectAustria[i].city} ), ${objectAustria[i].bezirk}.Bezirk</p>
        </div>
        <div class="py-5">
		    <div class="row">
      			<div class="col-lg-6 mb-3 mb-lg-0">
        			<div class="hover hover-2 text-white rounded"><img src="${objectAustria[i].img}" alt="">
          				<div class="hover-overlay"></div>
          				<div class="hover-2-content px-5 py-4">
	            			<h3 class="hover-2-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Image </span>Caption</h3>
	           				<p class="hover-2-description text-uppercase mb-0">Lorem ipsum dolor sit amet, consectetur <br>adipisicing elit.</p>
          				</div>
        			</div>
      			</div>
 			</div>
		</div>
     </div>
  `	;
	};
	document.getElementById('cardsDiv').innerHTML = a;
}

creationinfo();
createCard();


class place extends austria{

	constructor(city, address, ZIPCode, bezirk, img, Name) {
       super(city, address, ZIPCode, bezirk, img, Name); 
	}
}




