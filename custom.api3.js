var G_INCOMPAT = false;
function GScript(src) {
    document.write('<' + 'script src="' + src + '"' +' type="text/javascript"><' + '/script>');
}

// 检测浏览器兼容性
function GBrowserIsCompatible(setBodyClass)
{
    if (G_INCOMPAT)
        return false;
    if (!window.RegExp)
        return false;
    var AGENTS = ["opera","msie","safari","firefox","netscape","mozilla"];
    var agent = navigator.userAgent.toLowerCase();
    for (var i = 0; i < AGENTS.length; i++)
    {
        var agentStr = AGENTS[i];
        if (agent.indexOf(agentStr) != -1)
        {
            if (setBodyClass && document.body)
            {
                document.body.className = agentStr;
            }
            var versionExpr = new RegExp(agentStr + "[ \/]?([0-9]+(\.[0-9]+)?)");
            var version = 0;
            if (versionExpr.exec(agent) != null) 
            {
                version = parseFloat(RegExp.$1);
            }
            if (agentStr == "opera")
                return version >= 7;
            if (agentStr == "safari")
                return version >= 125;
            if (agentStr == "msie")
                return (version >= 5.5 &&agent.indexOf("powerpc") == -1);
            if (agentStr == "netscape")
                return version > 7;
            if (agentStr == "firefox")
                return version >= 0.8;
        }
    }
    
    return !!document.getElementById;
}

function GVerify() {}

function GLoad()
{
    GAddMessages({1415: '.',1416: ',',10037: '出发地址',10038: '到达地址',10093: '使用条款',
                  10095: '要查看屏幕上的所有细节，请使用地图旁边的\"打印\"链接。',10096: '',10049: '地图',10111: '地图',
                  10120: '很抱歉，在这一缩放级别的地图上未找到此区域。\x3cp\x3e请缩小地图，扩大视野范围。\x3c/p\x3e',
                  10050: '卫星',10112: '星期六',
                  10121: '很抱歉，在这一缩放级别的成像上未找到此区域。\x3cp\x3e请缩小成像，扩大视野范围。\x3c/p\x3e',
                  10116: '混合地图',10117: '混合地图',10021: '放大',10022: '缩小',10023: '单击设置缩放水平',
                  10024: '拖动缩放',10507: '向左平移',10508: '向右平移',10509: '向上平移',10510: '向下平移',
                  10029: '返回上一结果',10511: '显示街道地图',10512: '显示卫星图片',10513: '显示标有街道名称的图片',
                  10806: '点击可在 Google 地图上参看该区域',1616: '公里',1547: '英里',10109: '米',10110: '英尺',
                  11259: '全屏显示',10130: '地址',10131: '详细资料',10908: '无标题',10940: '创建地图时出错',
                  10941: '已保存到 %1$s',10942: '保存定位标记时出错',10943: '正在保存...',10945: '添加定位标记',
                  10946: '画线',10947: '画图形',11371: '保存自 \x3ca href\x3d\"%1$s\"\x3e%2$s\x3c/a\x3e',10985: '放大',
                  10986: '缩小',11047: '在此居中放置地图',10983: '清除搜索结果',10935: '保存到“我的地图”',
                  11271: '以此处为出发点的路线',11272: '到达此目的地的路线',0: ''
                  });
    GAddMessages({10807: '交通流量',10808: '显示交通流量',10809: '隐藏交通流量',
                  11089: '\x3ca href\x3d\"javascript:void(0);\"\x3e放大\x3c/a\x3e可查看该地区的交通流量',10293: '添加',
                  10294: '保存',10295: '取消',10296: '删除',10296: '删除',10297: '新地址：',10298: '启用地址自动保存功能',
                  10299: '选择：',10299: '选择：',10300: '全部',10300: '全部',10301: '无',10301: '无',10302: '编辑',
                  10303: '默认',10304: '标签',10304: '标签',10304: '标签',10305: '地址',10305: '地址',10305: '地址',
                  10307: '无已保存地址。',10308: '将该地址作为初始地图视图',10309: '请勿将该地址作为初始地图视图',10018: '正在加载...',
                  160: '\x3cH1\x3e服务器错误\x3c/H1\x3e服务器暂时出现错误，可能无法处理您的申请。\x3cp\x3e请几分钟后重试。\x3c/p\x3e',
                  1935: '查看大图',11250: '\x3ca href\x3d\"%1$s\"\x3e登录\x3c/a\x3e以查看我现有的书签'
                  });
                  
    /*
    // 校验部分， 取消
    if (!GValidateKey(""))
    {
        G_INCOMPAT = true;
        alert("此网站使用的 Google Maps API 密钥已为另一网站注册。您可以在 http://www.google.com/apis/maps/ 上为该网站生成一个新密钥。");
        return;
    }
    */
    GLoadApi(
        [
            // 这里加载谷歌的中文地图API的数据
            "http://mapgoogle.mapabc.com/googlechina/maptile?v=w2.60&"
        ],
        
        [
            "http://kh0.google.com/kh?n=404&v=20&",
            "http://kh1.google.com/kh?n=404&v=20&",
            "http://kh2.google.com/kh?n=404&v=20&",
            "http://kh3.google.com/kh?n=404&v=20&"
        ],
        
        [
            "http://mapgoogle.mapabc.com/googlechina/maptile?v=w2.60&"
        ],
        
        "","","",false,"G");
    if (window.GJsLoaderInit)
    {
        GJsLoaderInit("http://www.google.com/intl/zh-CN_cn/mapfiles/86/maps2" +".api/main.js");
    }
}

// 这就是用于防止内存泄露的GUnload()函数
function GUnload()
{
    if (window.GUnloadApi)
    {
        GUnloadApi();
    }
}

var _mF = [ 400,200,false,false,false,false,100,4096,
            "bounds_030.txt","cities_030.txt","local/add/flagStreetView",
            true,true,2000,false,false,false,false,false,true,false,false 
          ];

var _mHost = "http://ditu.google.cn";
var _mUri = "/maps";
var _mDomain = "google.cn";
var _mStaticPath = "http://www.google.com/intl/zh-CN_cn/mapfiles/";
var _mJavascriptVersion = "";
var _mTermsUrl = "http://www.google.com/intl/zh-CN_cn/help/terms_maps.html";
var _mHL = "zh-CN";
var _mGL = "CN";
var _mTrafficEnableApi = true;
var _mTrafficTileServerUrlBase = "http://www.google.com/mapstt";
var _mWizActions = {hyphenSep: 1,breakSep: 2,dir: 3,searchNear: 6,savePlace: 9};
var _mSatelliteToken = "fzwq1DuMuNm1bqqC_XJbuDFigBt8i9PRHvRGvw";
var _mMapCopy = "地图数据 \x26#169;2007";
var _mSatelliteCopy = "Imagery \x26#169;2007";
var _mGoogleCopy = "\x26#169;2007 Google";
var _mPreferMetric = true;
var _mPanelWidth = 20;
var _mMapPrintUrl = 'http://www.google.com/mapprint';
var _mAutocompleteFrom = '从';
var _mAutocompleteTo = '至';
var _mAutocompleteNearRe = '^(?:(?:.*?)\\s+)(?:(?:in|near|around|close to):?\\s+)(.+)$';
var _mSvgEnabled = true;
var _mSvgForced = false;
var _mLogInfoWinExp = true;
var _mLogPanZoomClks = false;
var _mLogWizard = true;
var _mLogLimitExceeded = true;
var _mLogPrefs = true;
var _mMMLogMyMapViewpoints = true;
var _mDirectionsDragging = false;
var _mDirectionsEnableApi = true;

// 要加AdSense了？！
var _mAdSenseForMapsEnable = "true";
var _mAdSenseForMapsFeedUrl = "http://pagead2.googlesyndication.com/afmaps/ads";

function GLoadMapsScript()
{
    if (GBrowserIsCompatible())
    {
        GScript("http://www.google.com/intl/zh-CN_cn/mapfiles/86/maps2" +".api/main.js");
    }
}

GLoadMapsScript();