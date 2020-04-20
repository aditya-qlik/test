var ip2loc = require("ip2location-nodejs");
 
 
testip = ['8.8.8.8', '2404:6800:4001:c01::67', '2001:0200:0102:0000:0000:0000:0000:0000', '2001:0200:0135:0000:0000:0000:0000:0000', '2001:0200:017A:0000:0000:0000:0000:0000'];
for (var x = 0; x < testip.length; x++) {
    if (/^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/g.test(testip)){
        ip2loc.IP2Location_init("./sample.bin.db24.zip/IP2LOCATION-LITE-DB5.BIN");
    } else if (/^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/g.test(testip)){
        ip2loc.IP2Location_init("./sample6.bin.db24/IPV6-COUNTRY-REGION-CITY-LATITUDE-LONGITUDE-ZIPCODE-TIMEZONE-ISP-DOMAIN-NETSPEED-AREACODE-WEATHER-MOBILE-ELEVATION-USAGETYPE.SAMPLE.BIN");
    } else {
        console.log("Invalid IP");
    }
    result = ip2loc.IP2Location_get_all(testip[x]);
    for (var key in result) {
        console.log(key + ": " + result[key]);
    }
}