
let objectAustria: Array<land>;
let objRestaurants: Array<restaurant>;
let objEvents: Array<events>;
objRestaurants = [];
objEvents = [];
objectAustria = [];
// let iArray = [];
// let aArray = [];


let Name: Array<string>= ["ON Restaurant", "Sahara","BEETHOVEN | AN der Wien | DENKEN", "Monet bis Picasso"];
let city: Array<string>= ["wien", "wien", "wien", "wien"];
let bezirk: Array<number>= [5, 1, 6, 1];
let ZIPCode: Array<number>= [1050, 1010, 1060, 1010];
let img: Array<string>= ["img/on.jpg", "img/re3.jpg", "img/event2.jpg", "img/event1.jpg"];
let address: Array<string>= ["Wehrgasse 8", "Babenbergerstraße 5", "Linke Wienzeile 6", "Albertinaplatz 1"];
let telephoneNumber: Array<string>= ["015854900", "0676 3743206"];
let type: Array<string>= ["Chinese", "Indian"];
let webAddress: Array<string>= ["http://www.restaurant-on.at/", "https://www.delinski.at", "https://www.wienersymphoniker.at", "https://events.wien.info/"];
let date: Array<string>=["22. Feb 2020", "23. Feb 2020"];
let time: Array<string>=["10:00 - 18:00", "18:00 bis 20:30 "];
let price: Array<string>= ["55", "Kostenlos"];


class land {
	Name: string;
    city: string;
    bezirk: number;
    ZIPCode: number;
    img: string;
    address : string;
    webAddress: string;
    
    constructor(Name, city, address, ZIPCode,bezirk, img, webAddress) {
        this.city = city;
        this.address = address;
        this.ZIPCode = ZIPCode;
        this.bezirk = bezirk;
        this.img = img;
        this.Name = Name;
        this.webAddress = webAddress;
    }
}

// function creationinfo(){
//     for (let i = 0; i<8; i++){
//         let place = new land( Name[i], city[i], address[i], ZIPCode[i], bezirk[i], img[i])
//         objectAustria.push(place);
//     }
// }



class restaurant extends land{
	telephoneNumber: number;
	type: string;
	// desc: any;

	constructor(city, address, ZIPCode, bezirk, img, Name, telephoneNumber, type) {
       super(city, address, ZIPCode, bezirk, img, Name, webAddress); 
       this.telephoneNumber = telephoneNumber;
       this.type = type;
       
       // this.desc = desc;
	}
}


class events extends land{
	date: string;
	time:string;
	price:string;

	constructor(city, address, ZIPCode, bezirk, img, Name, date, time, price) {
       super(city, address, ZIPCode, bezirk, img, Name, webAddress); 
       this.date = date;
       this.time = time;
       this.price = price;

	}
}


function creationRestaurant(type){
    if (type === 'land') {
        for (let i = 0; i<4; i++){
            let place = new land( Name[i], city[i], address[i], ZIPCode[i], bezirk[i], img[i], webAddress)
            objectAustria.push(place);
        }
    }
    else if (type === 'restaurant') {
        for (let i = 0; i<4; i++){
            let res = new restaurant( Name[i], city[i], address[i], ZIPCode[i], bezirk[i], img[i], telephoneNumber[i], type[i])
            objRestaurants.push(res);
        }
    }
    // else if (type === 'events') {
    //     for (let i = 0; i<2; i++){
    //         let Eve = new events(Name[i], city[i], address[i], ZIPCode[i], bezirk[i], img[i], date[i], time[i], price[i])
    //         objRestaurants.push(Eve);
    //     }
    // }
}



// function showInfo(index) {
// $(document).ready(function() {
//         $(`#button${index}`).parent().find(".hideInfo").toggle();
//     });
// }


function showMore(index) {
    if($(`#res${index}`).css('visibility') == 'hidden') {
        $(`#res${index}`).css('visibility', 'visible')
    }
    else {
        $(`#res${index}`).css('visibility', 'hidden')
    }
showMore(index);
console.log(showMore(index));
}
function createCard(){
    var basePage = "";
    for (let i=0; i < objectAustria.length; i++) {

        basePage += `
    <div id="HPage" class="card mb-3 col-lg-3 col-md-6 col-sm-12">
    	<div class="card-body">
            <h5 class="card-title">${objectAustria[i].Name}</h5>
            <p class="card-text">${objectAustria[i].city}, ${objectAustria[i].bezirk}.Bezirk</p>
        </div>
        <div class="py-5">
		    <div class="row">
      			<div class="pl-2 pr-2 mb-3 mb-lg-0 foto1">
        			<div class=" mb-2 hover hover-2 text-white rounded lala">
        				<img id="foto" src="${objectAustria[i].img}" class="card-img-top img-fluid" alt="">
          				<div class="hover-overlay"></div>
          				<div class="hover-2-content px-5 py-4">
	           				<p class="hover-2-description text-uppercase mb-0">Lorem ipsum dolor sit amet, consectetur <br>adipisicing elit.
	           				</p>
	           			</div>
          			</div>
                    <button onclick="showMore(${i})" type="submit" class="p-3" id="button${i}">more Infoes
                    </button>
      			</div>
 			</div>
		</div>
    </div>
 	`;
};
document.getElementById('cardsDiv').innerHTML = basePage;
};
	function createRestaurant(){
    var CardsRestaurant = "";
    for (let i=0; i < objRestaurants.length; i++) {
            CardsRestaurant += `
             <div id="res${i}" class="hiddenRes m-2 flex-shrink-1  card p-0 col-lg-3 col-md-6 col-sm-12 border">
                <div  class="Card">
                  	<p>Address: ${objectAustria[i].address}</p>
                    <span>ZIP: ${objectAustria[i].ZIPCode}</span>
                    <p>Telephone number ${objRestaurants[i].telephoneNumber}</p>
                    <p>Web Adress: ${objRestaurants[i].webAddress}</p>
                    <p>Typ: ${objRestaurants[i].type}</p>
                </div>
            </div>
          	`;
        };
	document.getElementById('Restaurants').innerHTML = CardsRestaurant;
	
}


// function createEvent(){
//     var CardsEvent = "";
//     for (let i=0; i < objEvents.length; i++) {
//             CardsEvent += `
//              <div id="res${i}" class="hiddenRes m-2 flex-shrink-1  card p-0 col-lg-3 col-md-6 col-sm-12 border">
//                 <div  class="Card">
//                 	<p>Address: ${objectAustria[i].address}</p>
//                  <span>ZIP: ${objectAustria[i].ZIPCode}</span>
//                 	<p>Date: ${objEvents[i].date}</p>
//                 	<p>Time: ${objEvents[i].time}</p>
//                    	<p>Price: ${objEvents[i].price}</p>
//                 </div>
//             </div>
//                 `;
//             };
// 	document.getElementById('Events').innerHTML = CardsEvent;
	
// }



creationRestaurant('land');
creationRestaurant('restaurants');
createCard();
createRestaurant();
// createEvent();




console.log(createRestaurant())
