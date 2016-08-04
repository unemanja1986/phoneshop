(function () {
    "use strict";
    
    /*global angular*/
    var app = angular.module("phoneResourceMock", ["ngMockE2E"]);
    app.run(function ($httpBackend) {
        var phones = [
            {
                phoneId: 1,
                name: "Xiaomi Redmi Note 3",
                company: "Xiaomi",
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
                company: "Samsung",
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
                company: "Motorola",
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
                company: "Samsung",
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
                company: "OnePlus",
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
                company: "Samsung",
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
                company: "Sony",
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
                company: "Samsung",
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
            },
            {
                phoneId: 9,
                name: "Xiaomi Redmi Pro",
                company: "Xiaomi",
                released: "July 2016",
                dimensions: "151.5 x 76.2 x 8.2 mm",
                weight: "174 g",
                display: {
                    type: "OLED capacitive touchscreen, 16M colors",
                    size: "5.5 inches",
                    resolution: "1080 x 1920 pixels"
                },
                operatingSystem: "Android OS, v6.0 (Marshmallow)",
                camera: {
                    primary: "Dual 13 MP + 5MP, f/2.0, phase detection autofocus, dual-LED (dual tone) flash",
                    secondary: "5 MP, f/2.0, 1080p"
                },
                batery: "Non-removable Li-Po 4000 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 256 GB (uses SIM 2 slot)",
                    internal: "128 GB, 4 GB RAM - Exclusive edition, 32/64 GB, 3 GB RAM - other editions"
                },
                price: "$999.99",
                phoneImageUrl: "/img/xiaomi-redmi-pro.jpg"
            },
            {
                phoneId: 10,
                name: "BlackBerry DTEK50",
                company: "BlackBerry",
                released: "August 2016",
                dimensions: "147 x 72.5 x 7.4 mm",
                weight: "135 g",
                display: {
                    type: "IPS LCD capacitive touchscreen, 16M colors",
                    size: "5.2 inches",
                    resolution: "1080 x 1920 pixels"
                },
                operatingSystem: "Android OS, v6.0 (Marshmallow)",
                camera: {
                    primary: "13 MP, f/2.0, phase detection autofocus, dual-LED (dual tone) flash",
                    secondary: "8 MP, f/2.2, 1080p"
                },
                batery: "Non-removable Li-Ion 2610 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 256 GB",
                    internal: "16 GB, 3 GB RAM"
                },
                price: "$999.99",
                phoneImageUrl: "/img/bb-dtek.jpg"
            },
            {
                phoneId: 11,
                name: "Microsoft Lumia 650",
                company: "Microsoft",
                released: "February 2016",
                dimensions: "142 x 70.9 x 6.9 mm",
                weight: "122 g",
                display: {
                    type: "OLED capacitive touchscreen, 16M colors",
                    size: "5.0 inches",
                    resolution: "720 x 1280 pixels"
                },
                operatingSystem: "Microsoft Windows 10",
                camera: {
                    primary: "8 MP, f/2.2, 28mm, autofocus, LED flash",
                    secondary: "5 MP, f/2.2, 720p video"
                },
                batery: "Removable Li-Ion 2000 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 256 GB",
                    internal: "16 GB, 1 GB RAM"
                },
                price: "$200",
                phoneImageUrl: "/img/microsoft-lumia-650-s.jpg"
            },
            {
                phoneId: 12,
                name: "Microsoft Lumia 950 XL Dual SIM",
                company: "Microsoft",
                released: "December 2015",
                dimensions: "151.9 x 78.4 x 8.1 mm",
                weight: "165 g",
                display: {
                    type: "AMOLED capacitive touchscreen, 16M colors",
                    size: "5.7 inches",
                    resolution: "1440 x 2560 pixels"
                },
                operatingSystem: "Microsoft Windows 10",
                camera: {
                    primary: "20 MP, f/1.9, 26mm, Carl Zeiss optics, OIS, autofocus, triple-LED RGB flash",
                    secondary: "5 MP, f/2.4, 1080p"
                },
                batery: "Removable Li-Ion 3340 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 256 GB",
                    internal: "32 GB, 3 GB RAM"
                },
                price: "$470",
                phoneImageUrl: "/img/microsoft-lumia-950-1.jpg"
            },
            {
                phoneId: 13,
                name: "Microsoft Lumia 950 Dual SIM",
                company: "Microsoft",
                released: "December 2015",
                dimensions: "145 x 73.2 x 8.2 mm",
                weight: "150 g",
                display: {
                    type: "AMOLED capacitive touchscreen, 16M colors",
                    size: "5.2 inches",
                    resolution: "1440 x 2560 pixels"
                },
                operatingSystem: "Microsoft Windows 10",
                camera: {
                    primary: "20 MP, f/1.9, 26mm, Carl Zeiss optics, OIS, autofocus, triple-LED RGB flash",
                    secondary: "5 MP, f/2.4, 1080p"
                },
                batery: "Removable Li-Ion 3340 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 256 GB",
                    internal: "32 GB, 3 GB RAM"
                },
                price: "$420",
                phoneImageUrl: "/img/microsoft-lumia-950-1.jpg"
            },
            {
                phoneId: 14,
                name: "Microsoft Lumia 550",
                company: "Microsoft",
                released: "October 2015",
                dimensions: "136.1 x 67.8 x 9.9 mm",
                weight: "141.9 g",
                display: {
                    type: "Capacitive touchscreen, 16M colors",
                    size: "4.7 inches",
                    resolution: "720 x 1280 pixels"
                },
                operatingSystem: "Microsoft Windows 10",
                camera: {
                    primary: "5 MP, f/2.4, autofocus, LED flash",
                    secondary: "2 MP, f/2.8, 480p"
                },
                batery: "Removable Li-Ion 3340 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 256 GB",
                    internal: "8 GB, 1 GB RAM"
                },
                price: "$150",
                phoneImageUrl: "/img/microsoft-lumia-550-.jpg"
            },
            {
                phoneId: 15,
                name: "Microsoft Lumia 430 Dual SIM",
                company: "Microsoft",
                released: "May 2015",
                dimensions: "120.5 x 63.2 x 10.6 mm",
                weight: "127.9 g",
                display: {
                    type: "Capacitive touchscreen, 16M colors",
                    size: "4.0 inches",
                    resolution: "480 x 800 pixels"
                },
                operatingSystem: "Microsoft Windows Phone 8.1, planned upgrade to Windows 10",
                camera: {
                    primary: "2 MP, f/2.2",
                    secondary: "VGA, 480p"
                },
                batery: "Removable Li-Ion 3340 mAh battery",
                memory: {
                    cardSlot: "microSD, up to 256 GB",
                    internal: "8 GB, 1 GB RAM"
                },
                price: "$120",
                phoneImageUrl: "/img/microsoft-lumia-430.jpg"
            },
            {
                phoneId: 16,
                name: "Apple iPhone SE",
                company: "Apple",
                released: "March 2016",
                dimensions: "123.8 x 58.6 x 7.6 mm",
                weight: "113 g",
                display: {
                    type: "LED-backlit IPS LCD, capacitive touchscreen, 16M colors",
                    size: "4.0 inches",
                    resolution: "640 x 1136 pixels"
                },
                operatingSystem: "iOS 9.3.2, upgradable to iOS 9.3.3, planned upgrade to iOS 10",
                camera: {
                    primary: "12 MP, f/2.2, 29mm, phase detection autofocus, dual-LED (dual tone) flash",
                    secondary: "1.2 MP, f/2.4, 31mm, 720p@30fps, face detection, HDR, FaceTime over Wi-Fi or Cellular"
                },
                batery: "Non-removable Li-Po 1624 mAh battery (6.21 Wh)",
                memory: {
                    cardSlot: "No",
                    internal: "16/64 GB, 2 GB RAM"
                },
                price: "$550",
                phoneImageUrl: "/img/apple-iphone-5se-ofic.jpg"
            },
            {
                phoneId: 17,
                name: "Apple iPhone 6s Plus",
                company: "Apple",
                released: "September 2015",
                dimensions: "158.2 x 77.9 x 7.3 mm",
                weight: "192 g",
                display: {
                    type: "LED-backlit IPS LCD, capacitive touchscreen, 16M colors",
                    size: "5.5 inches",
                    resolution: "1080 x 1920 pixels"
                },
                operatingSystem: "iOS 9, upgradable to iOS 9.3.3, planned upgrade to iOS 10",
                camera: {
                    primary: "12 MP, f/2.2, 29mm, phase detection autofocus, dual-LED (dual tone) flash",
                    secondary: "5 MP, f/2.2, 31mm, 1080p@30fps, 720p@240fps, face detection, HDR, panorama"
                },
                batery: "Non-removable Li-Po 2750 mAh battery (10.45 Wh)",
                memory: {
                    cardSlot: "No",
                    internal: "16/64/128 GB, 2 GB RAM"
                },
                price: "$810",
                phoneImageUrl: "/img/apple-iphone-6s-plus.jpg"
            },
            {
                phoneId: 18,
                name: "Apple iPad mini 4",
                company: "Apple",
                released: "September 2015",
                dimensions: "203.2 x 134.8 x 6.1 mm",
                weight: "299 g",
                display: {
                    type: "LED-backlit IPS LCD, capacitive touchscreen, 16M colors",
                    size: "7.9 inches",
                    resolution: "1536 x 2048 pixels"
                },
                operatingSystem: "iOS 9, upgradable to iOS 9.3.3, planned upgrade to iOS 10",
                camera: {
                    primary: "8 MP, f/2.4, 32mm, autofocus",
                    secondary: "1.2 MP, 720p@30fps, face detection, HDR, FaceTime over Wi-Fi or Cellular"
                },
                batery: "Non-removable Li-Ion 5124 mAh battery (19.1 Wh)",
                memory: {
                    cardSlot: "No",
                    internal: "16/64/128 GB, 2 GB RAM"
                },
                price: "$410",
                phoneImageUrl: "/img/ipad-mini-41.jpg"
            },
            {
                phoneId: 19,
                name: "Apple iPhone 6",
                company: "Apple",
                released: "September 2014",
                dimensions: "138.1 x 67 x 6.9 mm",
                weight: "129 g",
                display: {
                    type: "LED-backlit IPS LCD, capacitive touchscreen, 16M colors",
                    size: "4.7 inches",
                    resolution: "750 x 1334 pixels"
                },
                operatingSystem: "iOS 8, upgradable to iOS 9.3.3, planned upgrade to iOS 10",
                camera: {
                    primary: "8 MP, f/2.2, 29mm, phase detection autofocus, dual-LED (dual tone) flash",
                    secondary: "1.2 MP, f/2.2, 31mm, 720p@30fps, face detection, HDR, FaceTime over Wi-Fi or Cellular"
                },
                batery: "Non-removable Li-Po 1810 mAh battery (6.9 Wh)",
                memory: {
                    cardSlot: "No",
                    internal: "16/64/128 GB, 1 GB RAM DDR3"
                },
                price: "$610",
                phoneImageUrl: "/img/ipad-mini-41.jpg"
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