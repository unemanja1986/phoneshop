(function () {
    "use strict";
    
    /*global angular*/
    var app = angular.module("phoneResourceMock", ["ngMockE2E"]);
    app.run(function ($httpBackend) {
        var phones = [
            {
                phoneId: 1,
                name: "Xiaomi Redmi Note 3",
                released: "February 2016",
                dimensions: "150 x 76 x 8.7 mm",
                weight: "164 g",
                display: {
                    type: "IPS LCD capacitive touchscreen",
                    size: "5.5 inches",
                    resolution: "1080 x 1920 pixels"
                },
                operatingSystem: "Android OS, v5.1.1 (Lollipop)",
                camera: {
                    primary: "6 MP, f/2.0, phase detection autofocus, dual-LED (dual tone) flash",
                    secondary: "5 MP, f/2.0, 1080p"
                },
                batery: "Non-removable Li-Po 4000 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 256 GB (uses SIM 2 slot)",
                    internal: "16 GB, 2 GB RAM"
                },
                price: "$899.99",
                phoneImageUrl: "/img/xiaomi-redmi-note-3.jpg"
            },
            {
                phoneId: 2,
                name: "Samsung Galaxy J7",
                released: "April 2016",
                dimensions: "151.7 x 76 x 7.8 mm",
                weight: "170 g",
                display: {
                    type: "Super AMOLED capacitive touchscreen, 16M colors",
                    size: "5.5 inches",
                    resolution: "720 x 1280 pixels"
                },
                operatingSystem: "Android OS, v6.0.1 (Marshmallow)",
                camera: {
                    primary: "13 MP, f/1.9, 28mm, autofocus, LED flash",
                    secondary: "5 MP, f/1.9, 1080p"
                },
                batery: "Removable Li-Ion 3300 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 256 GB (dedicated slot)",
                    internal: "16 GB, 2 GB RAM"
                },
                price: "$799.99",
                phoneImageUrl: "/img/samsung-galaxy-j7-2016.jpg"
            },
            {
                phoneId: 3,
                name: "Motorola Moto G4 Plus",
                released: "May 2016",
                dimensions: "153 x 76.6 x 9.8 mm (6.02 x 3.02 x 0.39 in)",
                weight: "155 g",
                display: {
                    type: "IPS LCD capacitive touchscreen, 16M colors",
                    size: "5.5 inches",
                    resolution: "1080 x 1920 pixels"
                },
                operatingSystem: "Android OS, v6.0.1 (Marshmallow)",
                camera: {
                    primary: "16 MP, f/2.0, phase detection & laser autofocus, dual-LED (dual tone) flash",
                    secondary: "5 MP, f/2.2, auto-HDR"
                },
                batery: "Non-removable Li-Ion 3000 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 256 GB (dedicated slot)",
                    internal: "16 GB, 2 GB RAM or 32 GB, 3 GB RAM or 64 GB, 4 GB RAM"
                },
                price: "$929.99",
                phoneImageUrl: "/img/motorola-moto-g4-plus-WHITE.jpg"
            },
            {
                phoneId: 4,
                name: "Samsung Galaxy J2",
                released: "July 2016",
                dimensions: "142.4 x 71.1 x 8 mm (5.61 x 2.80 x 0.31 in)",
                weight: "-",
                display: {
                    type: "Super AMOLED capacitive touchscreen, 16M colors",
                    size: "5.0 inches",
                    resolution: "720 x 1280 pixels"
                },
                operatingSystem: "Android OS, v6.0.1 (Marshmallow)",
                camera: {
                    primary: "8 MP, f/2.2, autofocus, LED flash",
                    secondary: "5 MP, f/2.2"
                },
                batery: "Removable Li-Ion 2600 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 128 GB (dedicated slot)",
                    internal: "8 GB, 1.5 GB RAM"
                },
                price: "$799.99",
                phoneImageUrl: "/img/samsung-galaxy-j2-2016.jpg"
            },
            {
                phoneId: 5,
                name: "OnePlus 3",
                released: "June 2016",
                dimensions: "152.7 x 74.7 x 7.4 mm (6.01 x 2.94 x 0.29 in)",
                weight: "158 g",
                display: {
                    type: "Optic AMOLED capacitive touchscreen, 16M colors",
                    size: "5.5 inches",
                    resolution: "1080 x 1920 pixels"
                },
                operatingSystem: "Android OS, v6.0.1 (Marshmallow)",
                camera: {
                    primary: "16 MP, f/2.0, phase detection autofocus, OIS, LED flash",
                    secondary: "8 MP, f/2.0, 1/3.2 sensor size, 1.4 µm pixel size, 1080p"
                },
                batery: "Non-removable Li-Ion 3000 mAh battery",
                memory: {
                    cardSlot: "No",
                    internal: "64 GB, 6 GB RAM"
                },
                price: "$439.99",
                phoneImageUrl: "/img/oneplus-3-.jpg"
            },
            {
                phoneId: 6,
                name: "Samsung Galaxy S6 edge",
                released: "April 2015",
                dimensions: "142.1 x 70.1 x 7 mm (5.59 x 2.76 x 0.28 in)",
                weight: "132 g",
                display: {
                    type: "Super AMOLED capacitive touchscreen, 16M colors",
                    size: "5.1 inches (~71.7% screen-to-body ratio)",
                    resolution: "1440 x 2560 pixels"
                },
                operatingSystem: "Android OS, v5.0.2 (Lollipop), upgradable to v6.0.1 (Marshmallow)",
                camera: {
                    primary: "16 MP, f/1.9, 28mm, OIS, autofocus, LED flash",
                    secondary: "5 MP, f/1.9, 22mm, 1440p@30fps, dual video call, Auto HDR"
                },
                batery: "Non-removable Li-Ion 2600 mAh battery",
                memory: {
                    cardSlot: "No",
                    internal: "32/64/128 GB, 3 GB RAM"
                },
                price: "$559.99",
                phoneImageUrl: "/img/samsung-galaxy-s6-edge.jpg"
            },
            {
                phoneId: 7,
                name: "Sony Xperia Z5 Premium",
                released: "November 2015",
                dimensions: "154.4 x 75.8 x 7.8 mm (6.08 x 2.98 x 0.31 in)",
                weight: "180g",
                display: {
                    type: "IPS LCD capacitive touchscreen, 16M colors",
                    size: "5.5 inches",
                    resolution: "2160 x 3840 pixels"
                },
                operatingSystem: "Android OS, v5.1.1 (Lollipop), upgradable to v6.0 (Marshmallow)",
                camera: {
                    primary: "23 MP, f/2.0, 24mm, phase detection autofocus, LED flash",
                    secondary: "5.1 MP, f/2.4, 1080p, HDR"
                },
                batery: "Non-removable Li-Ion 3430 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 256 GB (dedicated slot)",
                    internal: "32 GB, 3 GB RAM"
                },
                price: "$799.99",
                phoneImageUrl: "/img/sony-z5-premium-.jpg"
            },
            {
                phoneId: 8,
                name: "Samsung Galaxy S7 edge",
                released: "March 2016",
                dimensions: "150.9 x 72.6 x 7.7 mm (5.94 x 2.86 x 0.30 in)",
                weight: "157g",
                display: {
                    type: "Super AMOLED capacitive touchscreen, 16M colors",
                    size: "5.5 inches",
                    resolution: "1440 x 2560 pixels"
                },
                operatingSystem: "Android OS, v6.0.1 (Marshmallow)",
                camera: {
                    primary: "12 MP, f/1.7, 26mm, phase detection autofocus, OIS, LED flash",
                    secondary: "5 MP, f/1.7, 22mm, dual video call, Auto HDR"
                },
                batery: "Removable Li-Ion 2600 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 256 GB (dedicated slot)",
                    internal: "32/64 GB, 4 GB RAM"
                },
                price: "$899.99",
                phoneImageUrl: "/img/samsung-galaxy-s7-edge-.jpg"
            }
        ],
            phonesUrl = "/api/phones",
            phoneRegex = new RegExp(phonesUrl + "/[0-9][0-9]*");
        
        $httpBackend.whenGET(phonesUrl).respond(phones);

        $httpBackend.whenGET(phoneRegex).respond(function (method, url, data) {
            var phone = {phoneId: 0},
                parameters = url.split("/"),
                length = parameters.length,
                id = parameters[length - 1];
            
            if (id > 0) {
                for (var i = 0; i < phones.length; i++) {
                    if (phones[i].phoneId == id) {
                        phone = phones[i];
                        break;
                    }
                }
            }
            
            return [200, phone, {}];
        });
        
        $httpBackend.whenGET(/components/).passThrough();
    });
}());