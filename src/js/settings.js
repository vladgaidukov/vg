
export var UI = {};
export var Meshes = {};

export var SETTINGS = {
    DEBUG: false,
    DETAIL: 1,
    ANTIALIAS: false,
    CLEAR_COLOR: "gray",
    CAMERA_FOV: 45,
    CAMERA_NEAR: 0.1,
    CAMERA_FAR: 100000,
    CAMERA_POSITION: new THREE.Vector3(0, 0, 5),
    MOBILE_CLIENT: (function() {
        var mobileKeys = [
            "android",
            "bb",
            "meego",
            "mobile",
            "avantgo",
            "bada",
            "blackberry",
            "blazer",
            "compal",
            "elaine",
            "fennec",
            "hiptop",
            "iemobile",
            "iphone",
            "ipod",
            "iris",
            "kindle",
            "lge",
            "maemo",
            "midp",
            "mmp",
            "netfront",
            "opera mob",
            "opera min",
            "palm",
            "phone pixi",
            "phone pre",
            "plucker",
            "pocket",
            "psp",
            "series40",
            "series60",
            "symbian",
            "treo",
            "vodafone",
            "wap",
            "windows ce",
            "windows phone",
            "xda",
            "xiino"
        ];

        var agent = navigator.userAgent.toLowerCase();
        for (var i = 0; i < mobileKeys.length; i++) {
            if (agent.indexOf(mobileKeys[i]) >= 0) return true;
        }

        return false;
    })()
};
