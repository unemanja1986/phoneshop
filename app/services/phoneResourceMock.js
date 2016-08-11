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
        
        var computers = [
            {
                computerId: "1",
                name: "Lenovo Ideacentre 510S Home PC",
                processor: "Intel Celeron G3900 Processor ( 2.80GHz 2133MHz 2MB)",
                operatingSystem: "Windows 10 Pro 64",
                memory: "4.0GB PC4-17000 DDR4 UDIMM 2133MHz",
                hardDrive: "500GB 7200 rpm",
                opticalDrive: "DVD Recordable",
                warranty: "One year Depot or Carry-in",
                description: "Before buying a PC for your home, ask yourself: Is it easy to use for both the young and old alike? Has it the power, memory, and storage capacity to meet all your family's computing needs? Does it have a really low starting price? Then, take a look at the ideal family desktop—the Ideacentre 510S.",
                computerImageUrl: "/img/lenovo-desktop-ideacentre-510s-hero.png",
                price: "$499.00"
            },
            {
                computerId: "2",
                name: "Lenovo ThinkCentre M73 Small Desktop",
                processor: "Intel Core i7-4790 Processor (8MB Cache, up to 4.0GHz)",
                operatingSystem: "Windows 10 Pro 64",
                memory: "16GB PC3-12800 DDR3 1600MHz UDIMM (8GBx2)",
                hardDrive: "1TB 7200 rpm",
                opticalDrive: "DVD Recordable",
                warranty: "One year Depot or Carry-in",
                description: "Make your IT deployment count with a M73 Small Desktop, an affordable but powerful small-form-factor desktop PC without compromising on performance. A great choice for your enterprise.",
                computerImageUrl: "/img/lenovo-desktop-thinkcentre-m73sff-main.png",
                price: "$1216.00"
            },
            {
                computerId: "3",
                name: "Lenovo ThinkCentre M93p SFF Pro",
                processor: "Intel Core i7-4790 Processor (8MB Cache, up to 4.0GHz)",
                operatingSystem: "Windows 10 Pro 64",
                memory: "32GB PC3-12800 DDR3 1600MHz UDIMM (8GBx4)",
                hardDrive: "512GB Solid State Drive, 2.5, SATA, 6Gb/s, Non OPAL",
                opticalDrive: "DVD Burner/CD-RW, SATA",
                warranty: "One year Depot or Carry-in",
                description: "Powered for productivity, the ThinkCentre M93p small form factor pro (SFF Pro) is a great choice for large organisations that need the utmost in reliability, power, and data security, including the Intel® vPro™ technology for ~efficient enterprise-level manageability.",
                computerImageUrl: "/img/lenovo-desktop-thinkcentre-m93m93p-sff-main.png",
                price: "$1584.00"
            },
            {
                computerId: "4",
                name: "HP All-in-One PC (23.8)",
                processor: "Intel Core i3-6100U 2.3GHz SKL",
                operatingSystem: "Windows 10 Pro 64",
                memory: "RAM 8GB (2x4GB) DDR4 2133",
                hardDrive: "1TB 7200 RPM SATA 6G 3.5 Hard Drive",
                opticalDrive: "Ultra Slim-tray SuperMulti DVD burner",
                warranty: "1 year limited hardware warranty",
                description: "Whether your family is looking to surf, stream or tackle that next big assignment, this budget friendly All-in-One has been redesigned to give everyone what they need. A splash of color and reliable, trusted performance make this the perfect living room go-to.",
                computerImageUrl: "/img/c05169439.png",
                price: "$729.00"
            },
            {
                computerId: "5",
                name: "HP ENVY 750 Desktop PC",
                processor: "AMD A8-7600 quad-core processor",
                operatingSystem: "Windows 7 Professional 64",
                memory: "16GB DDR3-1600 DIMM (2x8GB) RAM",
                hardDrive: "2TB 7200rpm SATA-6G RAID 1 Hard Drive",
                opticalDrive: "SuperMulti DVD Burner",
                warranty: "1 year limited hardware warranty",
                description: "Innovative. Powerful. Just like you.",
                computerImageUrl: "/img/ann_envyDesktop_gallery_01.jpg",
                price: "$699.00"
            },
            {
                computerId: "6",
                name: "Apple - 21.5\" iMac",
                processor: "5th Gen Intel® Core™ i5 processor",
                operatingSystem: "OS X El Capitan",
                memory: "8GB system memory for advanced multitasking",
                hardDrive: "1TB hard drive for ample file storage space",
                opticalDrive: null,
                warranty: "1 year limited hardware warranty",
                description: "Apple iMac MK142LL/A All-in-One: iMac features a gorgeous 21.5 widescreen display, powerful Intel processors, superfast graphics, and more. All in a stunningly thin enclosure that's only 5mm at its edge",
                computerImageUrl: "/img/3093014_sd.jpg",
                price: "$1099.99"
            },
            {
                computerId: "7",
                name: "Apple - 27\" iMac",
                processor: "5th Gen Intel® Core™ i5 processor",
                operatingSystem: "OS X El Capitan",
                memory: "8GB system memory for advanced multitasking",
                hardDrive: "1TB hard drive for ample file storage space",
                opticalDrive: null,
                warranty: "3 year limited hardware warranty",
                description: "With 14.7 million pixels, the 27-inch iMac with Retina 5K display is the most powerful iMac ever. It features quad-core Intel® processors, the latest AMD graphics, a 1TB Fusion Drive, and great built-in apps. All in the same ultrathin design that's just 5mm at the edge.",
                computerImageUrl: "/img/4260700_sd.jpg",
                price: "$1999.99"
            },
            {
                computerId: "8",
                name: "Alienware ASM100 Core i5 4590T 8GB 1TB Desktop Tower",
                processor: "Intel Core i5 quad core",
                operatingSystem: null,
                memory: "8GB RAM",
                hardDrive: "1TB 7200 rpm",
                opticalDrive: "DVD Recordable",
                warranty: "One year Depot or Carry-in",
                description: "Combine the freedom of PC gaming with the ease of console on the new Alienware Alpha.",
                computerImageUrl: "/img/5164477_R_Z001A.jpg",
                price: "$1299.00"
            },
            {
                computerId: "9",
                name: "Acer Aspire XC-704 23 Inch 8GB 3TB Desktop Monitor Bundle",
                processor: "Intel Pentium quad core intel pentium j3710",
                operatingSystem: "Microsoft Windows 10",
                memory: "8GB RAM",
                hardDrive: "3TB SATA-III hard drive",
                opticalDrive: "DVD Recordable",
                warranty: "1 year limited hardware warranty",
                description: "Combine the freedom of PC gaming with the ease of console on the new Alienware Alpha.",
                computerImageUrl: "/img/5458781_R_Z001A.jpg",
                price: "$479.00"
            }
        ],
            computersUrl = "/api/computers",
            computersRegex = new RegExp(computersUrl + "/[0-9][0-9]*");

        $httpBackend.whenGET(computersUrl).respond(computers);

        $httpBackend.whenGET(computersRegex).respond(function (method, url, data) {
            var computer = { computerId: 0 },
                parameters = url.split("/"),
                length = parameters.length,
                id = parameters[length - 1];

            if (id > 0) {
                for (var i = computers.length - 1; i >= 0; i--) {
                    if(computers[i].computerId == id) {
                        computer = computers[i];
                        break;
                    }
                }
            }

            return [200, computer, {}];
        });

        var laptops = [
            {
                laptopId: "1",
                name: "Lenovo Z50-75 Signature Edition Laptop",
                display: "15.6-inch HD display",
                processor: "AMD FX-7500 2.10 GHz with Turbo up to 3.30 GHz",
                operatingSystem: "Windows 10 Home, 64-bit",
                memory: "8GB DDR3 1600 MHz",
                hardDrive: "1TB 5400 RPM HDD",
                video: "AMD Radeon R7 with shared graphics memory",
                ports: "1 USB 3.0 • 2 USB 2.0 • HDMI • VGA • Headphone output/Microphone input combo • LAN (10/100/1000)",
                battery: "4-cell (up to 5 hours)",
                camera: "Integrated webcam",
                dimensions: "15.11 x 10.43 x 0.98 in (383.79 x 264.92 x 24.89 mm)",
                description: "Pump up the power for work and play with the mighty Lenovo Z50. It comes with a speedy AMD FX-7500 processor, massive 1TB hard drive, and 8GB of memory, making it a great for multitasking at the office or serving as a multimedia hub at home.",
                price: "$499.00",
                photoImg: "/img/en-INTL-L-Lenovo-Z50-QF9-00446-mnco.jpg"
            },
            {
                laptopId: "2",
                name: "HP Notebook 15-ay091ms Signature Edition Laptop",
                display: "15.6-inch HD display",
                processor: "Intel Core i3-6100U",
                operatingSystem: "Windows 10 Home, 64-bit",
                memory: "8GB DDR4 2133 MHz",
                hardDrive: "1TB 5400 RPM HDD",
                video: "Intel HD Graphics 520 with shared graphics memory",
                ports: "1 USB 3.0 • 2 USB 2.0 • 1 HDMI • Headphone output/Microphone input combo • LAN (10/100)",
                battery: "3-cell lithium-ion, 31WHr (up to 6 hours, 15 minutes)",
                camera: "HP TrueVision HD webcam",
                dimensions: "15.12 x 10.02 x 0.95 in (384.04 x 254.50 x 24.13 mm)",
                description: "From its souped-up performance to its spacious touchscreen, the affordable HP Notebook 15 is set to be your go-to laptop. It combines a 6th Gen Intel Core i3 processor with 8GB of memory and a huge 1TB hard drive for excellent multitasking and multimedia capabilities. The Notebook 15 delivers great portability, too, with over 6 hours of battery life* and a weight that's just 4.6 pounds. All that in a slick-looking, brushed-aluminum frame highlighted with textured grooves.",
                price: "$399.00",
                photoImg: "/img/en-INTL-L-HP-Notebook-15-ay091ms-QF9-00442-mnco.jpg"
            },
            {
                laptopId: "3",
                name: "Dell XPS 15 9550-0000SLV Signature Edition Laptop",
                display: "15.6 in 4K UHD LED InfinityEdge touchscreen (3840 x 2160), 10-finger multi-touch support",
                processor: "Intel Core i5-6300HQ 2.30 GHz with Intel Turbo Boost Technology up to 3.20 GHz",
                operatingSystem: "Windows 10 Home, 64-bit",
                memory: "8GB DDR4 2133 MHz",
                hardDrive: "256GB SSD",
                video: "NVIDIA GeForce GTX 960M with 2GB graphics memory, Intel HD Graphics 530",
                ports: "2 USB 3.0 (powered) • 1 USB 3.1 Type-C with Thunderbolt • HDMI • Headphone output/Microphone input combo",
                battery: "6-cell 84WHr (up to 10 hours)",
                camera: "Integrated webcam",
                dimensions: "14.06 x 9.27 x 0.45-0.66 in (357.00 x 235.00 x 11.00-17.00 mm)",
                description: "The XPS 15 delivers an incredible 8 million pixels on its 4K Ultra HD display—that's 4 million more pixels than Full HD. What you get is a view that's always precise, clear, and eye-poppingly lifelike. Movies jump off the screen. Presentations shine. And photos and videos can be edited with pinpoint precision.",
                price: "$1599.00",
                photoImg: "/img/en-INTL-L-Dell-XPS-15-i5-8gb-256gb-QF9-00100-mnco.jpg"
            },
            {
                laptopId: "4",
                name: "Dell XPS 13 9350-2007SLV Core i5 128GB Signature Edition Laptop",
                display: "13.3 in Full HD LCD InfinityEdge touchscreen (1920 x 1080), 10-finger multi-touch support",
                processor: "Intel Core i5-6200U 2.30 GHz with Intel Turbo Boost Technology up to 2.80 GHz",
                operatingSystem: "Windows 10 Home, 64-bit",
                memory: "8GB LPDDR3 1867 MHz",
                hardDrive: "128GB SSD",
                video: "Intel HD Graphics 520 with shared graphics memory",
                ports: "2 USB 3.0 (1 powered) • 1 USB 3.1 Type-C with Thunderbolt • Headphone output/Microphone input combo",
                battery: "4-cell smart lithium-ion 56WHr (up to 11 hours)",
                camera: "Integrated webcam",
                dimensions: "11.97 x 7.87 x 0.35-0.59 in (304.00 x 200.00 x 9.00-15.00 mm)",
                description: "Premium construction, excellent portability, 6th Gen Intel Core i5 power—the Dell XPS 13 is as powerful and feature-packed as they get. It also features the world's first InfinityEdge display, a virtually borderless 13-inch screen placed into the body of an 11-inch laptop. Compared to the Apple MacBook Air 13, the XPS 13 is 23% smaller with the same size screen.",
                price: "$999.00",
                photoImg: "/img/en-INTL-L-Dell-XPS-13-Tch-i5-8gb-128gb-QF9-00476-mnco.jpg"
            },
            {
                laptopId: "5",
                name: "ASUS ZenBook Pro UX501JW-UH71T Signature Edition Laptop",
                display: "15.6 in 4K Ultra IPS LED touchscreen (3840 x 2160), 10-finger multi-touch support",
                processor: "Intel Core i7-4720HQ 2.60 GHz with Turbo Boost Technology up to 3.60 GHz",
                operatingSystem: "Windows 10 Home, 64-bit",
                memory: "16GB DDR3L 1600MHz",
                hardDrive: "512GB SSD",
                video: "NVIDIA GeForce GTX 960M with 2GB GDDR5 VRAM, Intel HD Graphics 4600",
                ports: "3 USB 3.0 (1 USB Charger+) • HDMI • Mini DisplayPort with Thunderbolt • Headphone output/Microphone input combo • LAN (10/100 via included USB to Ethernet adapter)",
                battery: "6-cell lithium-polymer, 96WHr",
                camera: "HD webcam",
                dimensions: "15.10 x 10.00 x 0.80 in (383.54 x 254.00 x 20.32 mm)",
                description: "Dashing good looks, super-charged performance, and Windows 10 all add up to one premium laptop with the ASUS ZenBook Pro UX501. Its all-aluminum body is a true work of art, while the Intel Core i7 processor and 16GB of memory bring serious power. There are high-fidelity actuators built into the glass display, so you get twice the accuracy of standard touchscreens. And with Windows 10, you get easy ways to snap apps in place, create new desktops, and work and play across all your devices.",
                price: "$1499.00",
                photoImg: "/img/en-INTL-L-ASUS-UX501JW-UH71T-QF9-00058-mnco.jpg"
            },
            {
                laptopId: "6",
                name: "MSI GE72 Apache Pro-029 Signature Edition Gaming Laptop",
                display: "17.3 in Full HD IPS LED (1920 x 1080)",
                processor: "Intel Core i7-6700HQ 2.60 GHz with Turbo Boost Technology up to 3.50 GHz",
                operatingSystem: "Windows 10 Home, 64-bit",
                memory: "16GB DDR4 2133 MHz",
                hardDrive: "128GB SSD + 1TB 7200 RPM HDD",
                video: "NVIDIA GeForce GTX 960M with 2GB graphics memory, Intel HD Graphics 530",
                ports: "2 USB 3.0 (1 powered) • 1 USB 3.1 Type-C • USB 2.0 • HDMI • Mini DisplayPort • Headphone output • Microphone input • LAN (10/100/1000)",
                battery: "6-cell",
                camera: "HD webcam",
                dimensions: "16.53 x 11.33 x 1.17-1.25 in (419.90 x 287.80 x 29.80-32.00 mm)",
                description: "Become all-powerful with the feature-packed MSI GE72 Apache Pro laptop. It delivers desktop performance with a 6th Gen Intel Core i7 processor, NVIDIA GeForce GTX 960M graphics, DVD SuperMulti drive, and HDD and SSD storage. All that in a slim and lightweight 17.3-inch frame that's agile enough for go-anywhere gaming.",
                price: "$1299.99",
                photoImg: "/img/en-INTL-L-MSI-GE72-Apache-Pro-029-QF9-00147-mnco.jpg"
            },
            {
                laptopId: "7",
                name: "Razer Blade Signature Edition Gaming Laptop",
                display: "14 in QHD+ LED-backlit (3200 x 1800), 10-finger multi-touch support",
                processor: "Intel Core i7-4720HQ 2.60 GHz with Turbo Boost Technology up to 3.60 GHz",
                operatingSystem: "Windows 10 Home, 64-bit",
                memory: "16GB DDR3L 1600 MHz",
                hardDrive: "256GB SSD",
                video: "NVIDIA GeForce GTX 970M with 3GB graphics memory, Intel HD Graphics 4600",
                ports: "3 USB 3.0 • HDMI • Headphone output/Microphone input combo",
                battery: "70 WHr lithium-ion",
                camera: "2MP webcam",
                dimensions: "13.60 x 9.30 x 0.70 in (345.44 x 236.22 x 17.78 mm)",
                description: "Already the thinnest and lightest 14-inch gaming laptop, the Razer Blade now comes with twice the memory at 16GB. It's razor-slim at 0.70 inches and super-charged with an Intel Core i7 processor, 256GB SSD, and NVIDIA GeForce GTX 970M graphics. All that and a stunning QHD+ touchscreen for intense visuals. And with Windows 10, you get easy ways to snap apps in place, create new desktops, and work and play across all your devices.",
                price: "$2399.00",
                photoImg: "/img/en-INTL-L-Razer-Blade-14in-QHDplus-256GB-W10-Black-CWF-02207-mnco.jpg"
            },
            {
                laptopId: "8",
                name: "Surface 3 LTE - 64GB",
                display: "10.8” ClearType Full HD Plus Display • Resolution: 1920 x 1280 • Aspect ratio: 3:2 • Touch: 10 point multi-touch • Surface Pen support",
                processor: "Quad-core Intel Atom x7-Z8700 processor (2MB Cache, 1.6GHz with Intel Burst technology up to 2.4GHz). Surface 3 offers more than 80% of the performance of Surface Pro 3 with Intel Core i3 processor (according to PCMark 8 Creative Conventional test).",
                operatingSystem: "Windows 10 • 1-year of Office 365 Personal with OneDrive cloud storage",
                memory: "4GB ",
                hardDrive: "128GB",
                video: "i5: Intel HD graphics (non-GPU)",
                ports: "Full-size USB 3.0 • Mini DisplayPort • microSD card reader • Micro USB charging port • Headset jack • Cover port",
                battery: "",
                camera: "3.5 megapixel front-facing camera • 8.0 megapixel rear-facing camera with autofocus • Microphone • Stereo speakers with Dolby audio",
                dimensions: "10.52 x 7.36 x 0.34 in (267 x 187 x 8.7 mm)",
                description: "With the ability to run desktop software, a full-size USB 3.0 port, and an integrated Kickstand, Surface 3 is the perfect productivity device for school, home, and on the go. Includes Office 365 Personal.",
                price: "$599.00",
                photoImg: "/img/en-INTL-PDP0-Themis-64GB-7G5-00001-P1.jpg"
            },
            {
                laptopId: "9",
                name: "Microsoft Surface Book - 128GB / Intel Core i5",
                display: "Screen: 13.5” PixelSense display • Resolution: 3000 x 2000 (267 PPI) • Aspect ratio: 3:2 • Touch: 10 point multi-touch",
                processor: "6th Gen Intel Core i5 or i7",
                operatingSystem: "Windows 10 Pro • Office 30-day trial",
                memory: "8GB or 16GB RAM",
                hardDrive: "Solid state drive (SSD) options: 128GB, 256GB, 512GB, or 1TB",
                video: "i5: Intel HD graphics (non-GPU) • i5/i7: NVIDIA GeForce graphics (GPU)",
                ports: "Two full-size USB 3.0, Full-size SD card reader, Surface Connect, Headset jack, Mini DisplayPort",
                battery: "Up to 12 hours of video playback",
                camera: "5.0 megapixel front-facing camera, 8.0 megapixel rear-facing camera with autofocus, with 1080p HD video recording",
                dimensions: "9.14 x 12.30 x 0.51- 0.90 in ( 232.1 x 312.3 x 13 -22.8 mm)",
                description: "Surface Book weighs as little as 3.34 pounds and its 13.5-inch PixelSense display has incredible resolution (3000 x 2000). It's calibrated for true-to-life color, with high contrast and low glare. Detach the screen to use like a clipboard, or rotate and reattach the screen to use the Optional NVIDIA GeForce GPU. When you need to connect to other devices and accessories, Surface Book has advanced wireless options and all the ports you need.",
                price: "$1349.00",
                photoImg: "/img/en-INTL-Surface-Book-CR9-00001-SP01.jpg"
            }
        ],
            laptopsUrl = "/api/laptops",
            laptopsRegex = new RegExp(laptopsUrl + "/[0-9][0-9]*");

        $httpBackend.whenGET(laptopsUrl).respond(laptops);

        $httpBackend.whenGET(laptopsRegex).respond(function (method, url, data) {
            var laptop = { laptopId: 0 },
                parameters = url.split("/"),
                length = parameters.length,
                id = parameters[length - 1];

            if (id > 0) {
                for (var i = laptops.length - 1; i >= 0; i--) {
                    if(laptops[i].laptopId == id) {
                        laptop = laptops[i];
                        break;
                    }
                }
            }

            return [200, laptop, {}];
        });         

        $httpBackend.whenGET(/components/).passThrough();
    });
}());