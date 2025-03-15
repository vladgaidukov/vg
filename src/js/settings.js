export var UI = {};
export var Meshes = {};

export var DEBUG = false;

export var DETAIL = 1;
export var ANTIALIAS = false;
export var CLEAR_COLOR = "gray";

export var CAMERA_FOV = 45;
export var CAMERA_NEAR = 0.1;
export var CAMERA_FAR = 100000;
export var CAMERA_POSITION = new THREE.Vector3(0, 0, 5);

export var MOBILE_CLIENT = (function() {
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
})();

export var SETTINGS = {
    UI: UI,
    Meshes: Meshes,
    DEBUG: DEBUG,
    DETAIL: DETAIL,
    ANTIALIAS: ANTIALIAS,
    CLEAR_COLOR: CLEAR_COLOR,

    CAMERA_FOV: CAMERA_FOV,
    CAMERA_NEA: CAMERA_NEAR,
    CAMERA_FAR: CAMERA_FAR,
    CAMERA_POSITION: CAMERA_POSITION,
    MOBILE_CLIENT: MOBILE_CLIENT
};
