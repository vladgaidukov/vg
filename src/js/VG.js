VG = {}

VG.DEBUG = false;

VG.DETAIL = 1;
VG.ANTIALIAS = false;
VG.CLEAR_COLOR = 'white'

VG.CAMERA_FOV = 45;
VG.CAMERA_NEAR = 0.1;
VG.CAMERA_FAR = 10000;
VG.CAMERA_POSITION = new THREE.Vector3(0, 0, 5);

VG.MOBILE_CLIENT = (function() {
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
        "xiino",
    ];

    var agent = navigator.userAgent.toLowerCase();
    for (var i = 0; i < mobileKeys.length; i++) {
        if (agent.indexOf(mobileKeys[i]) >= 0)
            return true;
    }

    return false;
})()