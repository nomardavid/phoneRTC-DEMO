cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.dooble.phonertc.PhoneRTC",
        "file": "plugins/com.dooble.phonertc/www/phonertc.js",
        "pluginId": "com.dooble.phonertc",
        "clobbers": [
            "cordova.plugins.phonertc"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-compat": "1.0.0",
    "com.dooble.phonertc": "2.1.0",
    "cordova-plugin-console": "1.0.4",
    "cordova-plugin-device": "1.1.3"
};
// BOTTOM OF METADATA
});