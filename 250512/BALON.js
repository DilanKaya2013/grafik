(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"BALON_atlas_1", frames: [[0,280,688,133],[0,0,1610,278],[690,280,324,155]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["BALON_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["BALON_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.images = function() {
	this.initialize(ss["BALON_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zeplin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(69.45,26.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zeplin, new cjs.Rectangle(0,0,805,139), null);


// stage content:
(lib.BALON = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// zeplin
	this.instance = new lib.zeplin();
	this.instance.setTransform(-540.8,182.9,1,1,0,0,0,402.5,69.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:69.5,x:-540.65,y:182.8},0).wait(1).to({x:-540.3},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,x:-539.75,y:182.9},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,x:-538.95,y:182.95},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:-537.9,y:183.05},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,x:-536.65,y:183.15},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,x:-535.15,y:183.3},0).wait(1).to({scaleX:0.9992,scaleY:0.9992,x:-533.4,y:183.45},0).wait(1).to({scaleX:0.999,scaleY:0.999,x:-531.45,y:183.65},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,x:-529.3,y:183.8},0).wait(1).to({scaleX:0.9985,scaleY:0.9985,x:-526.9,y:184.05},0).wait(1).to({scaleX:0.9983,scaleY:0.9983,x:-524.2,y:184.3},0).wait(1).to({scaleX:0.998,scaleY:0.998,x:-521.3,y:184.55},0).wait(1).to({scaleX:0.9976,scaleY:0.9976,x:-518.25,y:184.85},0).wait(1).to({scaleX:0.9973,scaleY:0.9973,x:-514.9,y:185.1},0).wait(1).to({scaleX:0.9969,scaleY:0.9969,x:-511.35,y:185.5},0).wait(1).to({scaleX:0.9965,scaleY:0.9965,x:-507.55,y:185.8},0).wait(1).to({scaleX:0.9961,scaleY:0.9961,x:-503.55,y:186.2},0).wait(1).to({scaleX:0.9956,scaleY:0.9956,x:-499.25,y:186.55},0).wait(1).to({scaleX:0.9952,scaleY:0.9952,x:-494.8,y:186.95},0).wait(1).to({scaleX:0.9947,scaleY:0.9947,x:-490.05,y:187.4},0).wait(1).to({scaleX:0.9941,scaleY:0.9941,x:-485.1,y:187.85},0).wait(1).to({scaleX:0.9936,scaleY:0.9936,x:-479.95,y:188.3},0).wait(1).to({scaleX:0.993,scaleY:0.993,x:-474.55,y:188.8},0).wait(1).to({scaleX:0.9924,scaleY:0.9924,x:-468.9,y:189.3},0).wait(1).to({scaleX:0.9918,scaleY:0.9918,x:-463.05,y:189.9},0).wait(1).to({scaleX:0.9912,scaleY:0.9912,x:-456.9,y:190.45},0).wait(1).to({scaleX:0.9905,scaleY:0.9905,x:-450.55,y:191},0).wait(1).to({scaleX:0.9898,scaleY:0.9898,x:-444.05,y:191.6},0).wait(1).to({scaleX:0.9891,scaleY:0.9891,x:-437.3,y:192.2},0).wait(1).to({scaleX:0.9884,scaleY:0.9884,x:-430.25,y:192.85},0).wait(1).to({scaleX:0.9876,scaleY:0.9876,x:-423,y:193.55},0).wait(1).to({scaleX:0.9868,scaleY:0.9868,x:-415.5,y:194.2},0).wait(1).to({scaleX:0.986,scaleY:0.986,x:-407.8,y:194.95},0).wait(1).to({scaleX:0.9852,scaleY:0.9852,x:-399.85,y:195.6},0).wait(1).to({scaleX:0.9843,scaleY:0.9843,x:-391.7,y:196.35},0).wait(1).to({scaleX:0.9834,scaleY:0.9834,x:-383.3,y:197.15},0).wait(1).to({scaleX:0.9825,scaleY:0.9825,x:-374.7,y:197.95},0).wait(1).to({scaleX:0.9816,scaleY:0.9816,x:-365.8,y:198.7},0).wait(1).to({scaleX:0.9806,scaleY:0.9806,x:-356.75,y:199.55},0).wait(1).to({scaleX:0.9797,scaleY:0.9797,x:-347.45,y:200.4},0).wait(1).to({scaleX:0.9787,scaleY:0.9787,x:-337.9,y:201.25},0).wait(1).to({scaleX:0.9776,scaleY:0.9776,x:-328.1,y:202.2},0).wait(1).to({scaleX:0.9766,scaleY:0.9766,x:-318.1,y:203.05},0).wait(1).to({scaleX:0.9755,scaleY:0.9755,x:-307.8,y:204},0).wait(1).to({scaleX:0.9744,scaleY:0.9744,x:-297.35,y:204.95},0).wait(1).to({scaleX:0.9733,scaleY:0.9733,x:-286.65,y:205.95},0).wait(1).to({scaleX:0.9721,scaleY:0.9721,x:-275.75,y:206.95},0).wait(1).to({scaleX:0.9709,scaleY:0.9709,x:-264.6,y:208},0).wait(1).to({scaleX:0.9697,scaleY:0.9697,x:-253.25,y:209},0).wait(1).to({scaleX:0.9685,scaleY:0.9685,x:-241.6,y:210.05},0).wait(1).to({scaleX:0.9673,scaleY:0.9673,x:-229.7,y:211.15},0).wait(1).to({scaleX:0.966,scaleY:0.966,x:-217.65,y:212.25},0).wait(1).to({scaleX:0.9647,scaleY:0.9647,x:-205.35,y:213.35},0).wait(1).to({scaleX:0.9634,scaleY:0.9634,x:-192.85,y:214.5},0).wait(1).to({scaleX:0.9621,scaleY:0.9621,x:-180.05,y:215.65},0).wait(1).to({scaleX:0.9607,scaleY:0.9607,x:-167.1,y:216.85},0).wait(1).to({scaleX:0.9593,scaleY:0.9593,x:-153.8,y:218.05},0).wait(1).to({scaleX:0.9579,scaleY:0.9579,x:-140.35,y:219.25},0).wait(1).to({scaleX:0.9564,scaleY:0.9564,x:-126.7,y:220.5},0).wait(1).to({scaleX:0.955,scaleY:0.955,x:-112.75,y:221.8},0).wait(1).to({scaleX:0.9535,scaleY:0.9535,x:-98.65,y:223.1},0).wait(1).to({scaleX:0.952,scaleY:0.952,x:-84.25,y:224.4},0).wait(1).to({scaleX:0.9504,scaleY:0.9504,x:-69.6,y:225.75},0).wait(1).to({scaleX:0.9489,scaleY:0.9489,x:-54.8,y:227.1},0).wait(1).to({scaleX:0.9473,scaleY:0.9473,x:-39.7,y:228.5},0).wait(1).to({scaleX:0.9457,scaleY:0.9457,x:-24.4,y:229.85},0).wait(1).to({scaleX:0.944,scaleY:0.944,x:-8.9,y:231.3},0).wait(1).to({scaleX:0.9424,scaleY:0.9424,x:6.85,y:232.75},0).wait(1).to({scaleX:0.9407,scaleY:0.9407,x:22.9,y:234.2},0).wait(1).to({scaleX:0.939,scaleY:0.939,x:39.1,y:235.65},0).wait(1).to({scaleX:0.9373,scaleY:0.9373,x:55.55,y:237.15},0).wait(1).to({scaleX:0.9355,scaleY:0.9355,x:72.2,y:238.65},0).wait(1).to({scaleX:0.9337,scaleY:0.9337,x:89.15,y:240.25},0).wait(1).to({scaleX:0.9319,scaleY:0.9319,x:106.25,y:241.75},0).wait(1).to({scaleX:0.9301,scaleY:0.9301,x:123.6,y:243.4},0).wait(1).to({scaleX:0.9283,scaleY:0.9283,x:141.2,y:244.95},0).wait(1).to({scaleX:0.9264,scaleY:0.9264,x:159.05,y:246.6},0).wait(1).to({scaleX:0.9245,scaleY:0.9245,x:177.1,y:248.25},0).wait(1).to({scaleX:0.9226,scaleY:0.9226,x:195.4,y:249.9},0).wait(1).to({scaleX:0.9206,scaleY:0.9206,x:213.95,y:251.65},0).wait(1).to({scaleX:0.9186,scaleY:0.9186,x:232.7,y:253.3},0).wait(1).to({scaleX:0.9166,scaleY:0.9166,x:251.65,y:255.05},0).wait(1).to({scaleX:0.9146,scaleY:0.9146,x:270.9,y:256.8},0).wait(1).to({scaleX:0.9126,scaleY:0.9126,x:290.3,y:258.55},0).wait(1).to({scaleX:0.9105,scaleY:0.9105,x:309.95,y:260.4},0).wait(1).to({scaleX:0.9084,scaleY:0.9084,x:329.9,y:262.2},0).wait(1).to({scaleX:0.9063,scaleY:0.9063,x:349.85,y:263.45},0).wait(1).to({scaleX:0.9041,scaleY:0.9041,x:369.8,y:264.4},0).wait(1).to({scaleX:0.902,scaleY:0.902,x:390.1,y:265.35},0).wait(1).to({scaleX:0.8998,scaleY:0.8998,x:410.6,y:266.35},0).wait(1).to({scaleX:0.8976,scaleY:0.8976,x:431.35,y:267.35},0).wait(1).to({scaleX:0.8953,scaleY:0.8953,x:452.3,y:268.35},0).wait(1).to({scaleX:0.8931,scaleY:0.8931,x:473.5,y:269.3},0).wait(1).to({scaleX:0.8908,scaleY:0.8908,x:494.95,y:270.35},0).wait(1).to({scaleX:0.8885,scaleY:0.8885,x:516.55,y:271.4},0).wait(1).to({scaleX:0.8861,scaleY:0.8861,x:538.45,y:272.45},0).wait(1).to({scaleX:0.8838,scaleY:0.8838,x:560.5,y:273.5},0).wait(1).to({scaleX:0.8814,scaleY:0.8814,x:582.85,y:274.55},0).wait(1).to({scaleX:0.879,scaleY:0.879,x:605.4,y:275.65},0).wait(1).to({scaleX:0.8766,scaleY:0.8766,x:628.2,y:276.7},0).wait(1).to({scaleX:0.8741,scaleY:0.8741,x:651.15,y:277.85},0).wait(1).to({scaleX:0.8716,scaleY:0.8716,x:674.4,y:278.95},0).wait(1).to({scaleX:0.8691,scaleY:0.8691,x:697.85,y:280.05},0).wait(1).to({scaleX:0.8666,scaleY:0.8666,x:721.55,y:281.25},0).wait(1).to({scaleX:0.864,scaleY:0.864,x:745.45,y:282.35},0).wait(1).to({scaleX:0.8615,scaleY:0.8615,x:769.6,y:283.5},0).wait(1).to({scaleX:0.8589,scaleY:0.8589,x:794,y:284.7},0).wait(1).to({scaleX:0.8562,scaleY:0.8562,x:818.6,y:285.85},0).wait(1).to({scaleX:0.8536,scaleY:0.8536,x:843.35,y:287},0).wait(1).to({scaleX:0.8509,scaleY:0.8509,x:868.45,y:288.25},0).wait(1).to({scaleX:0.8482,scaleY:0.8482,x:893.7,y:289.45},0).wait(1).to({scaleX:0.8455,scaleY:0.8455,x:919.2,y:290.65},0).wait(1).to({scaleX:0.8427,scaleY:0.8427,x:944.9,y:291.85},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:970.9,y:293.15},0).wait(1).to({scaleX:0.8372,scaleY:0.8372,x:997.05,y:294.4},0).wait(1).to({scaleX:0.8343,scaleY:0.8343,x:1023.4,y:295.65},0).wait(1).to({scaleX:0.8315,scaleY:0.8315,x:1050.1,y:296.95},0).wait(1).to({scaleX:0.8286,scaleY:0.8286,x:1074.8,y:297.95},0).wait(1).to({scaleX:0.8257,scaleY:0.8257,x:1081.75,y:296.55},0).wait(1).to({scaleX:0.8228,scaleY:0.8228,x:1088.75,y:295.2},0).wait(1).to({scaleX:0.8199,scaleY:0.8199,x:1095.75,y:293.8},0).wait(1).to({scaleX:0.8169,scaleY:0.8169,x:1102.85,y:292.4},0).wait(1).to({scaleX:0.8139,scaleY:0.8139,x:1110,y:290.95},0).wait(1).to({scaleX:0.8109,scaleY:0.8109,x:1117.25,y:289.5},0).wait(1).to({scaleX:0.8079,scaleY:0.8079,x:1124.45,y:288.1},0).wait(1).to({scaleX:0.8048,scaleY:0.8048,x:1131.85,y:286.65},0).wait(1).to({scaleX:0.8017,scaleY:0.8017,x:1139.2,y:285.15},0).wait(1).to({scaleX:0.7986,scaleY:0.7986,x:1146.65,y:283.7},0).wait(1).to({scaleX:0.7955,scaleY:0.7955,x:1154.15,y:282.2},0).wait(1).to({scaleX:0.7923,scaleY:0.7923,x:1161.7,y:280.7},0).wait(1).to({scaleX:0.7891,scaleY:0.7891,x:1169.35,y:279.2},0).wait(1).to({scaleX:0.7859,scaleY:0.7859,x:1177,y:277.65},0).wait(1).to({scaleX:0.7827,scaleY:0.7827,x:1184.75,y:276.15},0).wait(1).to({scaleX:0.7795,scaleY:0.7795,x:1192.55,y:274.6},0).wait(1).to({scaleX:0.7762,scaleY:0.7762,x:1200.35,y:273.05},0).wait(1).to({scaleX:0.7729,scaleY:0.7729,x:1208.3,y:271.45},0).wait(1).to({scaleX:0.7695,scaleY:0.7695,x:1216.25,y:269.95},0).wait(1).to({scaleX:0.7662,scaleY:0.7662,x:1224.3,y:268.3},0).wait(1).to({scaleX:0.7628,scaleY:0.7628,x:1232.4,y:266.7},0).wait(1).to({scaleX:0.7594,scaleY:0.7594,x:1240.5,y:265.15},0).wait(1).to({scaleX:0.756,scaleY:0.756,x:1248.7,y:263.5},0).wait(1).to({scaleX:0.7525,scaleY:0.7525,x:1256.95,y:261.85},0).wait(1).to({scaleX:0.7491,scaleY:0.7491,x:1265.25,y:260.2},0).wait(1).to({scaleX:0.7456,scaleY:0.7456,x:1273.65,y:258.55},0).wait(1).to({scaleX:0.742,scaleY:0.742,x:1282.05,y:256.85},0).wait(1).to({scaleX:0.7385,scaleY:0.7385,x:1290.55,y:255.2},0).wait(1).to({scaleX:0.7349,scaleY:0.7349,x:1299.1,y:253.5},0).wait(1).to({scaleX:0.7313,scaleY:0.7313,x:1307.7,y:251.8},0).wait(1).to({scaleX:0.7277,scaleY:0.7277,x:1316.35,y:250.1},0).wait(1).to({scaleX:0.7241,scaleY:0.7241,x:1325.1,y:248.35},0).wait(1).to({scaleX:0.7204,scaleY:0.7204,x:1333.85,y:246.6},0).wait(1).to({scaleX:0.7167,scaleY:0.7167,x:1342.7,y:244.85},0).wait(1).to({scaleX:0.713,scaleY:0.713,x:1351.6,y:243.1},0).wait(1).to({scaleX:0.7093,scaleY:0.7093,x:1360.55,y:241.35},0).wait(1).to({scaleX:0.7055,scaleY:0.7055,x:1369.5,y:239.55},0).wait(1).to({scaleX:0.7017,scaleY:0.7017,x:1378.6,y:237.75},0).wait(1).to({scaleX:0.6979,scaleY:0.6979,x:1387.7,y:235.95},0).wait(1).to({scaleX:0.6941,scaleY:0.6941,x:1396.9,y:234.15},0).wait(1).to({scaleX:0.6902,scaleY:0.6902,x:1406.15,y:232.3},0).wait(1).to({scaleX:0.6863,scaleY:0.6863,x:1415.45,y:230.45},0).wait(1).to({scaleX:0.6824,scaleY:0.6824,x:1424.75,y:228.6},0).wait(1).to({scaleX:0.6785,scaleY:0.6785,x:1434.2,y:226.75},0).wait(1).to({scaleX:0.6745,scaleY:0.6745,x:1443.7,y:224.9},0).wait(1).to({scaleX:0.6705,scaleY:0.6705,x:1453.2,y:222.95},0).wait(1).to({scaleX:0.6665,scaleY:0.6665,x:1462.8,y:221.05},0).wait(1).to({scaleX:0.6625,scaleY:0.6625,x:1472.45,y:219.15},0).wait(1).to({scaleX:0.6585,scaleY:0.6585,x:1482.15,y:217.25},0).wait(1).to({scaleX:0.6544,scaleY:0.6544,x:1491.9,y:215.35},0).wait(1).to({scaleX:0.6503,scaleY:0.6503,x:1501.75,y:213.35},0).wait(1).to({scaleX:0.6461,scaleY:0.6461,x:1511.55,y:211.4},0).wait(1).to({scaleX:0.642,scaleY:0.642,x:1521.55,y:209.4},0).wait(1).to({scaleX:0.6378,scaleY:0.6378,x:1531.5,y:207.5},0).wait(1).to({scaleX:0.6336,scaleY:0.6336,x:1541.6,y:205.5},0).wait(1).to({scaleX:0.6294,scaleY:0.6294,x:1551.7,y:203.45},0).wait(1).to({scaleX:0.6252,scaleY:0.6252,x:1561.8,y:201.45},0).wait(1).to({scaleX:0.6209,scaleY:0.6209,x:1572.05,y:199.45},0).wait(1).to({scaleX:0.6166,scaleY:0.6166,x:1582.35,y:197.4},0).wait(1).to({scaleX:0.6123,scaleY:0.6123,x:1592.7,y:195.35},0).wait(1).to({scaleX:0.6079,scaleY:0.6079,x:1603.1,y:193.3},0).wait(1).to({scaleX:0.6036,scaleY:0.6036,x:1613.55,y:191.2},0).wait(1).to({scaleX:0.5992,scaleY:0.5992,x:1624.05,y:189.15},0).wait(1).to({scaleX:0.5947,scaleY:0.5947,x:1634.65,y:187.05},0).wait(1).to({scaleX:0.5903,scaleY:0.5903,x:1645.25,y:184.9},0).wait(1).to({scaleX:0.5858,scaleY:0.5858,x:1655.9,y:182.8},0).wait(2));

	// resim
	this.instance_1 = new lib.images();
	this.instance_1.setTransform(-113,0,4.6503,4.6503);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(187));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-303.3,360,2195,360.79999999999995);
// library properties:
lib.properties = {
	id: 'E8119289AC44BA43B5A8FDCC50AB001D',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BALON_atlas_1.png?1747050814585", id:"BALON_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E8119289AC44BA43B5A8FDCC50AB001D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;