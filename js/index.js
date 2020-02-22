var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objectAustria;
var objRestaurants;
var objEvents;
objRestaurants = [];
objEvents = [];
objectAustria = [];
// let iArray = [];
// let aArray = [];
var Name = ["ON Restaurant", "Sahara", "BEETHOVEN | AN der Wien | DENKEN", "Monet bis Picasso"];
var city = ["wien", "wien", "wien", "wien"];
var bezirk = [5, 1, 6, 1];
var ZIPCode = [1050, 1010, 1060, 1010];
var img = ["img/on.jpg", "img/re3.jpg", "img/event2.jpg", "img/event1.jpg"];
var address = ["Wehrgasse 8", "Babenbergerstraße 5", "Linke Wienzeile 6", "Albertinaplatz 1"];
var telephoneNumber = ["015854900", "0676 3743206"];
var type = ["Chinese", "Indian"];
var webAddress = ["http://www.restaurant-on.at/", "https://www.delinski.at", "https://www.wienersymphoniker.at", "https://events.wien.info/"];
var date = ["22. Feb 2020", "23. Feb 2020"];
var time = ["10:00 - 18:00", "18:00 bis 20:30 "];
var price = ["55", "Kostenlos"];
var land = /** @class */ (function () {
    function land(Name, city, address, ZIPCode, bezirk, img, webAddress) {
        this.city = city;
        this.address = address;
        this.ZIPCode = ZIPCode;
        this.bezirk = bezirk;
        this.img = img;
        this.Name = Name;
        this.webAddress = webAddress;
    }
    return land;
}());
// function creationinfo(){
//     for (let i = 0; i<8; i++){
//         let place = new land( Name[i], city[i], address[i], ZIPCode[i], bezirk[i], img[i])
//         objectAustria.push(place);
//     }
// }
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    // desc: any;
    function restaurant(city, address, ZIPCode, bezirk, img, Name, telephoneNumber, type) {
        var _this = _super.call(this, city, address, ZIPCode, bezirk, img, Name, webAddress) || this;
        _this.telephoneNumber = telephoneNumber;
        _this.type = type;
        return _this;
        // this.desc = desc;
    }
    return restaurant;
}(land));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(city, address, ZIPCode, bezirk, img, Name, date, time, price) {
        var _this = _super.call(this, city, address, ZIPCode, bezirk, img, Name, webAddress) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    return events;
}(land));
function creationRestaurant(type) {
    if (type === 'land') {
        for (var i = 0; i < 4; i++) {
            var place = new land(Name[i], city[i], address[i], ZIPCode[i], bezirk[i], img[i], webAddress);
            objectAustria.push(place);
        }
    }
    else if (type === 'restaurant') {
        for (var i = 0; i < 4; i++) {
            var res = new restaurant(Name[i], city[i], address[i], ZIPCode[i], bezirk[i], img[i], telephoneNumber[i], type[i]);
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
    if ($("#res" + index).css('visibility') == 'hidden') {
        $("#res" + index).css('visibility', 'visible');
    }
    else {
        $("#res" + index).css('visibility', 'hidden');
    }
    showMore(index);
    console.log(showMore(index));
}
function createCard() {
    var basePage = "";
    for (var i = 0; i < objectAustria.length; i++) {
        basePage += "\n    <div id=\"HPage\" class=\"card mb-3 col-lg-3 col-md-6 col-sm-12\">\n    \t<div class=\"card-body\">\n            <h5 class=\"card-title\">" + objectAustria[i].Name + "</h5>\n            <p class=\"card-text\">" + objectAustria[i].city + ", " + objectAustria[i].bezirk + ".Bezirk</p>\n        </div>\n        <div class=\"py-5\">\n\t\t    <div class=\"row\">\n      \t\t\t<div class=\"pl-2 pr-2 mb-3 mb-lg-0 foto1\">\n        \t\t\t<div class=\" mb-2 hover hover-2 text-white rounded lala\">\n        \t\t\t\t<img id=\"foto\" src=\"" + objectAustria[i].img + "\" class=\"card-img-top img-fluid\" alt=\"\">\n          \t\t\t\t<div class=\"hover-overlay\"></div>\n          \t\t\t\t<div class=\"hover-2-content px-5 py-4\">\n\t           \t\t\t\t<p class=\"hover-2-description text-uppercase mb-0\">Lorem ipsum dolor sit amet, consectetur <br>adipisicing elit.\n\t           \t\t\t\t</p>\n\t           \t\t\t</div>\n          \t\t\t</div>\n                    <button onclick=\"showMore(" + i + ")\" type=\"submit\" class=\"p-3\" id=\"button" + i + "\">more Infoes\n                    </button>\n      \t\t\t</div>\n \t\t\t</div>\n\t\t</div>\n    </div>\n \t";
    }
    ;
    document.getElementById('cardsDiv').innerHTML = basePage;
}
;
function createRestaurant() {
    var CardsRestaurant = "";
    for (var i = 0; i < objRestaurants.length; i++) {
        CardsRestaurant += "\n             <div id=\"res" + i + "\" class=\"hiddenRes m-2 flex-shrink-1  card p-0 col-lg-3 col-md-6 col-sm-12 border\">\n                <div  class=\"Card\">\n                  \t<p>Address: " + objectAustria[i].address + "</p>\n                    <span>ZIP: " + objectAustria[i].ZIPCode + "</span>\n                    <p>Telephone number " + objRestaurants[i].telephoneNumber + "</p>\n                    <p>Web Adress: " + objRestaurants[i].webAddress + "</p>\n                    <p>Typ: " + objRestaurants[i].type + "</p>\n                </div>\n            </div>\n          \t";
    }
    ;
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
console.log(createRestaurant());
