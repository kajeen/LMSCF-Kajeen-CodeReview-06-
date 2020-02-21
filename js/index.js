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
objectAustria = [];
var iArray = [];
var Name = ["BioFrische", "ON Restaurant", "St. Charles Church", "Schönbrunn Park, Vienna"];
var city = ["wien", "wien", "wien", "wien"];
var bezirk = [15, 5, 1, 13];
var ZIPCode = [1150, 1050, 1010, 1130];
var img = ["../img/bio.jpg", "../img/on.jpg", "../img/ch.jpg", "../img/sch.jpg"];
var address = ["Stutterheimstraße 6", "Wehrgasse 8", "Karlsplatz 1", "Maxingstraße 13b"];
var telephoneNumber = ["019529215", "015854900"];
var type = ["Indian", "Chinese"];
var webAddress = ["biofrische.wien", "http://www.restaurant-on.at/"];
var austria = /** @class */ (function () {
    function austria(Name, city, address, ZIPCode, bezirk, img) {
        this.city = city;
        this.address = address;
        this.ZIPCode = ZIPCode;
        this.bezirk = bezirk;
        this.img = img;
        this.Name = Name;
    }
    return austria;
}());
function creationinfo() {
    for (var i = 0; i < 5; i++) {
        var profil = new austria(Name[i], city[i], address[i], ZIPCode[i], bezirk[i], img[i]);
        objectAustria.push(profil);
    }
}
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(city, address, ZIPCode, bezirk, img, Name, telephoneNumber, type, webAddress) {
        var _this = _super.call(this, city, address, ZIPCode, bezirk, img, Name) || this;
        _this.telephoneNumber = telephoneNumber;
        _this.type = type;
        _this.webAddress = webAddress;
        return _this;
    }
    return restaurant;
}(austria));
function createCard() {
    var a = "";
    for (var i = 0; i < objectAustria.length; i++) {
        iArray.push(i);
        a += "\n    <div id=\"upperCard" + i + "\" class=\"card mb-3\">\n    \t<div class=\"card-body\">\n            <h5 class=\"card-title\">" + objectAustria[i].Name + "</h5>\n            <p class=\"card-text\">( " + objectAustria[i].city + " ), " + objectAustria[i].bezirk + ".Bezirk</p>\n        </div>\n        <div class=\"py-5\">\n\t\t    <div class=\"row\">\n      \t\t\t<div class=\"col-lg-6 mb-3 mb-lg-0\">\n        \t\t\t<div class=\"hover hover-2 text-white rounded\"><img src=\"" + objectAustria[i].img + "\" alt=\"\">\n          \t\t\t\t<div class=\"hover-overlay\"></div>\n          \t\t\t\t<div class=\"hover-2-content px-5 py-4\">\n\t            \t\t\t<h3 class=\"hover-2-title text-uppercase font-weight-bold mb-0\"> <span class=\"font-weight-light\">Image </span>Caption</h3>\n\t           \t\t\t\t<p class=\"hover-2-description text-uppercase mb-0\">Lorem ipsum dolor sit amet, consectetur <br>adipisicing elit.</p>\n          \t\t\t\t</div>\n        \t\t\t</div>\n      \t\t\t</div>\n \t\t\t</div>\n\t\t</div>\n     </div>\n  ";
    }
    ;
    document.getElementById('cardsDiv').innerHTML = a;
}
creationinfo();
createCard();
var place = /** @class */ (function (_super) {
    __extends(place, _super);
    function place(city, address, ZIPCode, bezirk, img, Name) {
        return _super.call(this, city, address, ZIPCode, bezirk, img, Name) || this;
    }
    return place;
}(austria));
