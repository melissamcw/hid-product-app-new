$(document).ready(function(){FastClick.attach(document.body),pagename=location.pathname.substring(1),webDomain="http://hidproductsolutionapp.com/index.php",$("#back_btn").click(function(e){parent.history.back(),e.preventDefault()}),$(".reset-icon").click(function(){window.location="vertical_choice.html"}),$("#next_swiper").click(function(){window.mySwiper.swipeNext()}),$("#previous_swiper").click(function(){window.mySwiper.swipePrev()}),$("#pdf_form").submit(function(e){$("#form_submit").attr("disabled",!0),$("#form_submit").val("submitting...");var i="?",a="fname="+$("form input#fname").val(),l="lname="+$("form input#lname").val(),r="company="+$("form input#company").val(),o="email="+$("form input#email").val(),t="phone="+$("form input#phone").val(),s="state="+$("form #states").val(),d="country="+$("form #country").val(),t="pdf="+$("form input#pdf").val();i+=a+"&"+l+"&"+r+"&"+o+"&"+t+"&"+s+"&"+d;var n=$.get(webDomain+i,function(e){1==e?$("#pdf_form, #form_instruction").fadeOut(500,function(){$("#success_message").removeClass("hide").fadeIn(500)}):alert("The server was reached successfully however there was a problem sending your requested file. Please try again.")}).done(function(e){}).fail(function(){alert("Sorry "+$("form input#fname").val()+" there was a problem contacting the server to send your PDF. Please check you have a working data connection and try again.")}).always(function(){$("#form_submit").removeAttr("disabled"),$("#form_submit").val("submit")});e.preventDefault()}),$("#entry_form").submit(function(e){e.preventDefault();var i=$.trim($("form input#password").val());""==i?alert("Please enter a password or request one from HID Global"):"HIDuser916"==i?window.location="vertical_choice.html":(alert("Incorrect password! Please try again or use the link below to request the password from HID Global"),$("form input#password").val()="")}),window.jsonproductsarray=[{vertical:"pacs",name:"ProxPoint Plus Reader",model:"6005",description:"Mini-mullion, 125 kHz HID Prox reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-proxpoint-plus-reader-ds-en.pdf",imagefilename:"proxpointplus_blk_6005_6008.jpg"},{vertical:"pacs",name:"MiniProx Reader",model:"5365",description:"Mullion, 125 kHz HID Prox reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-miniprox-reader-ds-en.pdf",imagefilename:"miniprox_blk.jpg"},{vertical:"pacs",name:"Thinline II Prox Reader",model:"5395",description:"Wall switch, 125 kHz HID Prox reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-thinline-ii-reader-ds-en.pdf",imagefilename:"thinline_blk.jpg"},{vertical:"pacs",name:"ProxPro Reader",model:"5355",description:"Medium Range, 125 kHz HID Prox reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-proxpro-reader-ds-en.pdf",imagefilename:"proxproII_blk_5455_5458.jpg"},{vertical:"pacs",name:"ProxPro II Reader",model:"5455",description:"Medium Range, 125 kHz HID Prox reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-proxpro-ii-reader-ds-en.pdf",imagefilename:"proxproII_blk_5455_5458.jpg"},{vertical:"pacs",name:"ProxPro with Keypad Reader",model:"5355",description:"Medium Range, 125 kHz HID Prox reader with keypad",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-proxpro-reader-ds-en.pdf",imagefilename:"proxpro_keypad_blk_5355_5352_5358.jpg"},{vertical:"pacs",name:"EntryProx Reader",model:"4045",description:"Wall switch, 125 kHz HID Prox reader and controller for single door",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-enrtyprox-revc-reader-ds-en.pdf",imagefilename:"entryprox.jpg"},{vertical:"pacs",name:"MaxiProx Reader",model:"5375",description:"Long Range, 125 kHz HID Prox reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox-maxiprox-reader-ds-en.pdf",imagefilename:"maxiprox_5375.jpg"},{vertical:"pacs",name:"Prox80 Reader",model:"5405",description:"EU Square, 125 kHz HID Prox reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/prox80_ds_en.pdf",imagefilename:"Prox80-5405-reader-black.jpg"},{vertical:"pacs",name:"multiCLASS SE Mini-Mullion Reader",model:"SE RP10",description:"Mullion, 13.56 MHz Multi-Technology iCLASS, iCLASS Seos & 125 kHz HID Prox, AWID, EM4102 or Indala reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",imagefilename:"multiclass-se-RP10_blk.jpg"},{vertical:"pacs",name:"multiCLASS SE Mullion Reader",model:"SE RP15",description:"Mini-Mullion, 13.56 MHz Multi-Technology iCLASS, iCLASS Seos & 125 kHz HID Prox, AWID, EM4102 or Indala reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",imagefilename:"multiclass-se-RP15_blk.jpg"},{vertical:"pacs",name:"multiCLASS SE EU Square Reader",model:"SE RP30",description:"EU Square (60mm), 13.56 MHz Multi-Technology iCLASS, iCLASS Seos & 125 kHz HID Prox, AWID, EM4102 or Indala reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",imagefilename:"multiclass-se-RP30_blk.jpg"},{vertical:"pacs",name:"multiCLASS SE Wall Switch Reader",model:"SE RP40",description:"Wall Switch, 13.56 MHz Multi-Technology iCLASS, iCLASS Seos & 125 kHz HID Prox, AWID, EM4102 or Indala reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",imagefilename:"multiclass-se-RP40_blk.jpg"},{vertical:"pacs",name:"multiCLASS SE Wall Switch Keypad Reader",model:"SE RPK40",description:"Wall Switch, 13.56 MHz Multi-Technology iCLASS, iCLASS Seos & 125 kHz HID Prox, AWID, EM4102 or Indala reader with keypad",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",imagefilename:"multiclass-se-RPK40.jpg"},{vertical:"pacs",name:"multiCLASS Mini-Mullion Reader",model:"RP10",description:"Mullion, 13.56 MHz Multi-Technology iCLASS & 125 kHz HID Prox or Indala reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",imagefilename:"multiclass-se-RP10_blk.jpg"},{vertical:"pacs",name:"multiCLASS Mullion Reader",model:"RP15",description:"Mini-Mullion, 13.56 MHz Multi-Technology iCLASS & 125 kHz HID Prox or Indala reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",imagefilename:"multiclass-se-RP15_blk.jpg"},{vertical:"pacs",name:"multiCLASS EU Square Reader",model:"RP30",description:"EU Square (60mm), 13.56 MHz Multi-Technology iCLASS & 125 kHz HID Prox or Indala reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",imagefilename:"multiclass-se-RP30_blk.jpg"},{vertical:"pacs",name:"multiCLASS Wall Switch Reader",model:"RP40",description:"Wall Switch, 13.56 MHz Multi-Technology iCLASS & 125 kHz HID Prox or Indala reader",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",imagefilename:"multiclass-se-RP40_blk.jpg"},{vertical:"pacs",name:"multiCLASS Wall Switch Keypad Reader",model:"RPK40",description:"Wall Switch, 13.56 MHz Multi-Technology iCLASS & 125 kHz HID Prox or Indala reader with keypad",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-se-readers-ds-en.pdf",imagefilename:"multiclass-se-RPK40.jpg"},{vertical:"pacs",name:"multiCLASS Magstripe Wall Switch Reader",model:"RMP40",description:"Wall Switch, 13.56 MHz Multi-Technology iCLASS reader with magstripe",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/multiclass-magstripe-reader-ds-en.pdf",imagefilename:"multiclass-se-magstripe-RMP40.jpg"},{vertical:"pacs",name:"pivCLASS Mini-Mullion Reader",model:"R10-H",description:"Mini-Mullion PKI-Based FIPS-201 Credential Compatible contact / contactless reader.  Strong authentication when used with pivCLASS PAM.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-fips-controlled-readers-ds-en.pdf",imagefilename:"pivclass-R10-H.jpg"},{vertical:"pacs",name:"pivCLASS Prox Mini-Mullion Reader",model:"RP10-H",description:"Mini-Mullion PKI-Based FIPS-201 Credential Compatible and 125 kHz HID Prox contact / contactless reader.  Strong authentication when used with pivCLASS PAM.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-fips-controlled-readers-ds-en.pdf",imagefilename:"pivclass-R10-H.jpg"},{vertical:"pacs",name:"pivCLASS Mullion Reader",model:"R15-H",description:"Mullion PKI-Based FIPS-201 Credential Compatible contact / contactless reader.  Strong authentication when used with pivCLASS PAM.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-fips-controlled-readers-ds-en.pdf",imagefilename:"pivclass-R15-H.jpg"},{vertical:"pacs",name:"pivCLASS Prox Mullion Reader",model:"RP15-H",description:"Mullion PKI-Based FIPS-201 Credential Compatible and 125 kHz HID Prox contact / contactless reader.  Strong authentication when used with pivCLASS PAM.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-fips-controlled-readers-ds-en.pdf",imagefilename:"pivclass-R15-H.jpg"},{vertical:"pacs",name:"pivCLASS Wall Switch Reader",model:"R40-H",description:"Wall Switch PKI-Based FIPS-201 Credential Compatible contact / contactless reader.  Strong authentication when used with pivCLASS PAM.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-fips-controlled-readers-ds-en.pdf",imagefilename:"pivCLASS-R40-H-Reader-front.jpg"},{vertical:"pacs",name:"pivCLASS Prox Wall Switch Reader",model:"RP40-H",description:"Wall Switch PKI-Based FIPS-201 Credential Compatible and 125 kHz HID Prox contact / contactless reader.  Strong authentication when used with pivCLASS PAM.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-fips-controlled-readers-ds-en.pdf",imagefilename:"pivCLASS-R40-H-Reader-front.jpg"},{vertical:"pacs",name:"pivCLASS Wall Switch Keypad Reader",model:"RK40-H",description:"Wall Switch PKI-Based FIPS-201 Credential Compatible contact / contactless reader with keypad.  Strong authentication when used with pivCLASS PAM.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-rk40-rpk40-fips-201-readers-ds-en.pdf",imagefilename:"pivCLASS-RK40.jpg"},{vertical:"pacs",name:"pivCLASS Prox Wall Switch Keypad Reader",model:"RPK40-H",description:"Wall Switch PKI-Based FIPS-201 Credential Compatible and 125 kHz HID Prox contact / contactless reader with keypad.  Strong authentication when used with pivCLASS PAM.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-rk40-rpk40-fips-201-readers-ds-en.pdf",imagefilename:"pivCLASS-RK40.jpg"},{vertical:"pacs",name:"pivCLASS Contact Wall Switch LCD Keypad Reader",model:"RKCL40-H",description:"Double Wall Switch PKI-Based FIPS-201 Credential Compatible contact / contactless reader with keypad and LCD.  Strong authentication when used with pivCLASS PAM.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-fips-limited-readers-ds-en.pdf",imagefilename:"RKCL40-P-LCD-Keypad-PIV-Reader-front.jpg"},{vertical:"pacs",name:"pivCLASS Prox Contact Wall Switch LCD Keypad Reader",model:"RPKCL40-H",description:"Double Wall Switch PKI-Based FIPS-201 Credential Compatible and 125 kHz HID Prox contact / contactless reader with keypad and LCD.  Strong authentication when used with pivCLASS PAM.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/pivclass-fips-limited-readers-ds-en.pdf",imagefilename:"RKCL40-P-LCD-Keypad-PIV-Reader-front.jpg"},{vertical:"pacs",name:"VertX EVO Controller Reader",model:"EVO V1000",description:"IP Master Access Controller, controlling up to 64 doors, 512 inputs or 384 outputs",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/vertx-evo-v1000-controller-ds-en.pdf",imagefilename:"v1000-evo.jpg"},{vertical:"pacs",name:"VertX EVO Controller / Door Interface Reader",model:"EVO V2000",description:"IP Controller / Door Interface, controlling up to 2 readers and 1 or 2 doors",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/vertx-evo-v2000-controller-ds-en.pdf",imagefilename:"v2000-evo-square.jpg"},{vertical:"logical",name:"OMNIKEY 3021 Smart Card Reader",model:"R3021xxxx",description:"Contact Card Reader in a small form factor for mass deployment. Compatible with CCID native driver and Win/Linux/Mac/Android devices.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-3021-usb-reader-ds-en.pdf",imagefilename:"CardMan3021_silver_OKU.jpg"},{vertical:"logical",name:"OMNIKEY 3121 Smart Card Reader",model:"R3121xxxx",description:"Contact Card Reader for One Hand Desktop Operation. Compatible with CCID native driver and Win/Linux/Mac/Android devices.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/ok-3121-usb-ds-en.pdf",imagefilename:"3111_3121_card_OKU.jpg"},{vertical:"logical",name:"OMNIKEY 5021CL Smart Card Reader",model:"R5021xxxx",description:"High Frequency Smart Card Reader in a stylish housing for all 14443 A/B and 15693 credentials like HID iCLASS and MIFARE DESFire. Compatible with Win/Linux/Mac devices.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-5021-cl-usb-reader-ds-en.pdf",imagefilename:"ok5021-angle.jpg"},{vertical:"logical",name:"OMNIKEY 5025CL Smart Card Reader",model:"R5025xxxx",description:"Low Frequency Smart Card Reader for HID Prox credentials. Compatible with CCID native driver and Win/Linux/Mac devices.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-5025-cl-reader-ds-en.pdf",imagefilename:"ok-5x2x-drk-blue.jpg"},{vertical:"logical",name:"OMNIKEY 5321CR Smart Card Reader",model:"R53210229-1",description:"High Frequency Smart Card Reader in waterproof housing for healthcare or cleanroom applications.  Compatible with all ISO 14443 A/B and 15693 credentials like HID iCLASS and MIFARE DESFire.  Compatible with Win/Linux/Mac devices.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-5321-cr-usb-reader-ds-en.pdf",imagefilename:"OK5321_CR_01_OKU.jpg"},{vertical:"logical",name:"OMNIKEY 5325 Smart Card Reader",model:"R5325xxxx",description:"Dual Interface Low Frequency and Contact Card Reader for card migration scenarios. Compatible with Win/Linux/Mac devices.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-5325-usb-prox-reader-ds-en.pdf",imagefilename:"OK5325_OKU.jpg"},{vertical:"logical",name:"OMNIKEY 5421 Smart Card Reader",model:"R5421xxxx",description:"Dual Interface High Frequency and Contact Card Reader for card migration scenarios. Compatible with Win/Linux/Mac devices.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-5421-reader-ds-en.pdf",imagefilename:"OK5421-front-3qrtr.jpg"},{vertical:"logical",name:"OMNIKEY 5427 Smart Card Reader",model:"R5427xxxx",description:"Dual Frequency Reader with Keyboard Emulation Mode for autonomous handling of cards. Easy system integration without the need for an additional software application. Compatible with HID Seos and Win/Linux/Mac devices.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-5427-ck-reader-ds-en.pdf",imagefilename:"OK5421-front-3qrtr.jpg"},{vertical:"logical",name:"OMNIKEY 6121 Smart Card Reader",model:"R6121xxxx",description:"Contact Card Reader in dongle size housing for SIM size smart cards. Compatible with CCID native driver and Win/Linux/Mac/Android devices.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/omnikey-6121-mobile-usb-reader-ds-en.pdf",imagefilename:"ok6121_l_cap_off_OKU-hi.jpg"},{vertical:"logical",name:"Lumidigm V-Series Fingerprint Sensor",model:"V3xx",description:"The Lumidigm V-Series fingerprint sensors deliver superior biometric authentication and industry-leading liveness detection. In any environment and with any user demographic, improve your application's throughput, accuracy, speed and security with a V-Series fingerprint sensor.",pdf:"http://www.lumidigm.com/media/Lumidigm_V-Series_Sensors_Datasheet_v1.15.pdf",imagefilename:"Lumidigm-V-Series-blue.jpg"},{vertical:"logical",name:"Lumidigm M-Series Fingerprint Sensor",model:"M3xx",description:"Built for business, the Lumidigm M-Series is a fast and reliable fingerprint sensor with a convenient footprint. Securely authenticate a user and enable your identity and access management application with a simple tap of a finger.",pdf:"http://www.lumidigm.com/media/Lumidigm_M-Series_Sensors_Datasheet_v1.15.pdf",imagefilename:"lumidigm-m-series.jpg"},{vertical:"logical",name:"ActivClient",model:"ACCXXXXLxx",description:"Smart card solution for strong authentication to protect workstations, mobile devices and networks.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/activid-activclient-security-software-ds-en.pdf",imagefilename:"activid-activclient-security-software-group.jpg"},{vertical:"logical",name:"ActivID Credential Management System",model:"CMSXXXXLxx",description:"Solution for issuing and managing PIV and PIV-I cards, enterprise access cards and mobile credentials.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/activid-cms-ds-en.pdf",imagefilename:"activid-cms-group.jpg"},{vertical:"logical",name:"ActivID Appliance",model:"A4AXXxxxxx",description:"A versatile, easy to deploy multi-factor authentication appliance ideal for securing employee access to enterprise networks and customer access to online banking.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/identity-assurance-activid-appliance-ds-en.pdf",imagefilename:"4TRESS-blue.jpg"},{vertical:"logical",name:"Crescendo C1100 card",model:"SC0080Jxxxxxxxxx",description:"High security hybrid smart card technology for converged physical and logical access control",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/crescendo-c1100-smart-card-ds-en.pdf",imagefilename:"crescendo-smart-card-c1100.jpg"},{vertical:"logical",name:"ActivID Soft Token",model:"A4Sxxxxx",description:"Proven, easy-to-use strong authentication for remote employees accessing corporate data, and consumers logging on to online services",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/ActivIDe-soft-tokens-authentication-appliance-ds-en.pdf",imagefilename:"ActivIDe-soft-tokens-authentication-appliance-group.jpg"},{vertical:"logical",name:"Display Card",model:"BDCxxxxxxxxx",description:"Convenient, One-Time Password solutions that users can fit in their wallet to protect remote employees accessing corporate data, and consumers logging on to online services",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/activid-authentication-devices-br-en.pdf",imagefilename:"activid-display-card-touch.jpg"},{vertical:"card",name:"C50 ID Card Printer",model:"51975",description:"Simple, reliable, affordable entry level solution.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-c50-priner-ds-en.pdf",imagefilename:"C50-F.jpg"},{vertical:"card",name:"DTC 1000Me Monochrome ID Card Printer / Encoder",model:"53200",description:"Extremely cost-effective, total-cost-of ownership card printing solution.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-dtc1000me-printer-ds-en.pdf",imagefilename:"DTC1000Me-F.jpg"},{vertical:"card",name:"DTC 1250e ID Card Printer / Encoder",model:"51000",description:"Affordability meets speed, feature-rich options and Peace-of-mind. Best in class.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-dtc1250e-printer-ds-en.pdf",imagefilename:"DTC1250e-F.jpg"},{vertical:"card",name:"DTC 4250e ID Card Printer / Encoder",model:"52000",description:"Flexible and future proof printer.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-dtc4250e-printer-ds-en.pdf",imagefilename:"DTC4250e-SNGL-F.jpg"},{vertical:"card",name:"DTC 4500e ID Card Printer / Encoder",model:"55000",description:"Throughput cost-per-card, future proof and security feature packed solution.",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-dtc4500e-printer-ds-en.pdf",imagefilename:"DTC4500e-dual-dual-F.jpg"},{vertical:"card",name:"HDP5000 ID Card Printer / Encoder",model:"89600",description:"Get vibrant, High Definition cards in a reliable and affordable package",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-hdp5000-printer-br-en.pdf",imagefilename:"HDP5000-flip-straight_shadow.jpg"},{vertical:"card",name:"HDPii Plus ID Card Printer / Encoder",model:"89380",description:"Practical and affordable solution for the instant issuance of a wide range of financial cards",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-hdpiiplus-printer-br-en.pdf",imagefilename:"HDP-2-Plus-straight-reflec.jpg"},{vertical:"card",name:"HDP8500 Industrial ID Card Printer / Encoder",model:"88500",description:"Superior industrial ID printer for extended-run, high throughput credential personalization and issuance",pdf:"http://www.hidglobal.com/sites/hidglobal.com/files/resource_files/fargo-hdp8500-printer-br-en.pdf",imagefilename:"HDP8500-PrinterLaminator_Front_ScreenLit.jpg"}]});