$(document).ready(function() {

	var loveMessage = $(".loveMessage");

	// Lovers
	var loverImages = [
		"img/lovers/img_lovers-01.png",
		"img/lovers/img_lovers-02.png",
		"img/lovers/img_lovers-03.png",
		"img/lovers/img_lovers-04.png",
		"img/lovers/img_lovers-05.png",
		"img/lovers/img_lovers-06.png"
	];
	// TweenMax can tween any property of any object. We use this object to cycle through the array of lover images
	var loverObj = {curLoverImg: 0};

	// Setar Player
	var setarImages = [
		"img/musicians/img_setarPlayer-01.png",
		"img/musicians/img_setarPlayer-02.png",
		"img/musicians/img_setarPlayer-03.png",
		"img/musicians/img_setarPlayer-02.png"
	];
	var setarObj = {curSetarImg: 0};

	// Daf Player
	var dafImages = [
		"img/musicians/img_dafPlayer-01.png",
		"img/musicians/img_dafPlayer-02.png",
		"img/musicians/img_dafPlayer-03.png",
		"img/musicians/img_dafPlayer-02.png"
	];
	var dafObj = {curDafImg: 0};

	// Dancer
	var dancerImages = [
		"img/musicians/img_dancer-01.png",
		"img/musicians/img_dancer-02.png",
		"img/musicians/img_dancer-03.png",
		"img/musicians/img_dancer-02.png",
		"img/musicians/img_dancer-01.png",
		"img/musicians/img_dancer-04.png",
		"img/musicians/img_dancer-05.png",
		"img/musicians/img_dancer-04.png"
	];
	var dancerObj = {curDancerImg: 0};

	// Kamancheh Player
	var kamanchehImages = [
		"img/musicians/img_kamanchehPlayer-01.png",
		"img/musicians/img_kamanchehPlayer-02.png",
		"img/musicians/img_kamanchehPlayer-03.png",
		"img/musicians/img_kamanchehPlayer-02.png"
	];
	var kamanchehObj = {curKamanchehImg: 0};

	// Yellow Bird
	var bird01Images = [
		"img/birds/img_bird01-02.png",
		"img/birds/img_bird01-03.png"
	];
	var bird01Obj = {curBird01Img: 0};

	// Green Bird
	var bird02Images = [
		"img/birds/img_bird02-02.png",
		"img/birds/img_bird02-03.png"
	];
	var bird02Obj = {curBird02Img: 0};

	var bird02bImages = [
		"img/birds/img_bird02-04.png",
		"img/birds/img_bird02-05.png"
	];
	var bird02bObj = {curBird02bImg: 0};

	var bird02cImages = [
		"img/birds/img_bird02-06.png",
		"img/birds/img_bird02-07.png"
	];
	var bird02cObj = {curBird02cImg: 0};

	// Blue Bird
	var bird03Images = [
		"img/birds/img_bird03-02.png",
		"img/birds/img_bird03-03.png"
	];
	var bird03Obj = {curBird03Img: 0};

	// Jumping Player
	var jumpingImages = [
		"img/players/img_jumpingPlayer-01.png",
		"img/players/img_jumpingPlayer-02.png",
		"img/players/img_jumpingPlayer-03.png",
		"img/players/img_jumpingPlayer-04.png",
		"img/players/img_jumpingPlayer-05.png",
		"img/players/img_jumpingPlayer-06.png"
	];
	var jumpingObj = {curJumpingImg: 0};

	// Standing Player
	var standingImages = [
		"img/players/img_standingPlayer-01.png",
		"img/players/img_standingPlayer-02.png",
		"img/players/img_standingPlayer-03.png",
		"img/players/img_standingPlayer-04.png",
		"img/players/img_standingPlayer-05.png",
		"img/players/img_standingPlayer-06.png"
	];
	var standingObj = {curStandingImg: 0};

	// Kneeled Player
	var kneeledImages = [
		"img/players/img_kneeledPlayer-01.png",
		"img/players/img_kneeledPlayer-02.png",
		"img/players/img_kneeledPlayer-03.png",
		"img/players/img_kneeledPlayer-04.png",
		"img/players/img_kneeledPlayer-05.png",
		"img/players/img_kneeledPlayer-06.png"
	];
	var kneeledObj = {curKneeledImg: 0};

	var path = {
		greenbird : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: 50, 	y: -10},
					{x: 515,	y: -240},
					{x: 870,	y: 250},
					{x: 430,	y: 470},
					{x: 170,	y: 120},
					{x: 510,	y: -110},
					{x: 773,	y: 27}
				]
		},
		greenbird2 : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: -455, 	y: -5},
					{x: -930,	y: -350},
					{x: -1730,	y: -200},
					{x: -2500,	y: -850}
				]
		},
		yellowbird : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: -180,	y: -10},
					{x: -480,	y: -240}
				]
		},
		bluebird : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: 190,	y: 0},
					{x: 955,	y: -275},
					{x: 1365,	y: -150},
					{x: 2925,	y: -800}
				]
		},
		flower01 : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: -10,	y: 110},
					{x: 15,		y: 225},
					{x: -10,	y: 305},
					{x: 5,		y: 420}
				]
		},
		flower01b : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: 10,	y: 110},
					{x: 50,		y: 225},
					{x: 30,	y: 305},
					{x: 70,		y: 420}
				]
		},
		flower02 : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: -10,	y: 115},
					{x: 20,		y: 235},
					{x: -10,	y: 315},
					{x: 10,		y: 460}
				]
		},
		flower02b : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: 0,		y: 100},
					{x: -10, 	y: 215},
					{x: 10,		y: 325},
					{x: -35, 	y: 415}
				]
		},
		flower03 : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: 5,		y: 100},
					{x: -40, 	y: 215},
					{x: -20,	y: 325},
					{x: -85, 	y: 415}
				]
		},
		flower04 : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: -20,	y: 90},
					{x: 5,		y: 205},
					{x: -25,	y: 315},
					{x: 25,		y: 430}
				]
		},
		cocoon01 : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: 10,		y: 105},
					{x: -5,		y: 200},
					{x: 30,		y: 310},
					{x: 15,		y: 420},
					{x: 40,		y: 510}
				]
		},
		cocoon01b : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: 15,		y: 105},
					{x: -5,		y: 200},
					{x: 45,		y: 310},
					{x: 15,		y: 420},
					{x: 80,		y: 510}
				]
		},
		leaf01 : {
			curviness: 1.25,
			autoRotate: true,
			values: [
					{x: 90,		y: 50},
					{x: 5,		y: 100},
					{x: -100,	y: 60},
					{x: 0,		y: 200},
					{x: 105,	y: 170},
					{x: 5,		y: 300},
					{x: -115,	y: 250},
					{x: 0,		y: 350},
					{x: 130, 	y: 440}
				]
		},
		notes01 : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: 10,		y: -45},
					{x: -5,		y: -90},
					{x: 5,		y: -135},
					{x: -10,	y: -180},
					{x: 5,		y: -225},
					{x: 0,		y: -270}
				]
		},
		notes02 : {
			curviness: 1.25,
			autoRotate: false,
			values: [
					{x: 10,		y: -50},
					{x: -5,		y: -100},
					{x: 5,		y: -150},
					{x: -10,	y: -200},
					{x: 5,		y: -250},
					{x: 0,		y: -300},
					{x: 10,		y: -350},
					{x: -5,		y: -400},
					{x: 5,		y: -450},
					{x: 0,		y: -500}
				]
		},
		ball : {
			curviness: 1.25,
			autoRotate: true,
			values: [
					{x: 410,	y: -30},
					{x: 780,	y: 15},
					{x: 1150,	y: 120},
					{x: 1520,	y: 230}
				]
		},
		ball02 : {
			curviness: 1.25,
			autoRotate: true,
			values: [
					{x: 1640,	y: -90},
					{x: 1790,	y: -620}
				]
		}
	};

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// BoardingPasses animation
	var boardingPassesTl = new TimelineMax()
		.add('intro')
		.to('.section-back', 1, {y: '5%', opacity: 0, ease:Linear.easeNone}, 'intro')
		.to('.section-front', 1, {y: '25%', ease:Linear.easeNone}, 'intro')
		.add('flight01')
		.to('.section-front', 1, {y: '50%', ease:Linear.easeNone}, 'flight01')
		.to('.boardingPasses.front', 1, {opacity: 0, ease:Linear.easeNone}, 'flight01')
		.to('.boardingPasses.airplane', 1, {x: '160%', ease:Linear.easeNone}, 'flight01')
		.add('flight02')
		.to('.section-front', 1, {y: '75%', ease:Linear.easeNone}, 'flight02')
		.to('.boardingPasses.airplane', 1, {x: '320%', ease:Linear.easeNone}, 'flight02')
		.to('.boardingPasses.welcome', 1, {opacity: 0, ease:Linear.easeNone}, 'flight02')
		.add('flight03')
		.to('.section-front', 1, {y: '100%', ease:Linear.easeNone}, 'flight03')
		.to('.boardingPasses.airplane', 1, {x: '480%', ease:Linear.easeNone}, 'flight03')
		.to('.boardingPasses.message', 1, {opacity: 0, ease:Linear.easeNone}, 'flight03')
		;
		/*.to('.boardingPasses.back', 1, {y: '80%', opacity: 0, ease:Linear.easeNone}, 'intro')
		.to('.boardingPasses.front', 1, {y: '100%', opacity: 0, ease:Linear.easeNone}, 'intro')
		.to('.boardingPasses.airplane', 1, {y: '60%', opacity: 0, ease:Linear.easeNone}, 'intro')
		.to('.boardingPasses.welcome', 1, {y: '180%', opacity: 0, ease:Linear.easeNone}, 'intro')
		.to('.boardingPasses.message', 1, {y: '250%', opacity: 0, ease:Linear.easeNone}, 'intro')*/

	var boardingPassesScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '50%'
	})
	.setTween(boardingPassesTl)
	.addTo(controller)
	;

	// Stars animation
	var starsTl = new TimelineMax()
		.to('.section-stars', 1, {x: '5%', y: '-5%', opacity: 0, ease:Linear.easeNone});

	var starsScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '200%'
	})
	.setTween(starsTl)
	.addTo(controller)
	;

	// Clouds animation
	var cloudsTl = new TimelineMax()
		.to('.section-clouds', 1, {x: '-1%', ease:Linear.easeNone});

	var cloudsScene = new ScrollMagic.Scene({
		triggerElement: '#main',
		triggerHook: 0,
		duration: '500%'
	})
	.setTween(cloudsTl)
	.addTo(controller)
	;

	// Tween that positions Bird01 outside the screen on the right hand
	TweenMax.set('.bird01', {x: 1065});
	// Tween that positions Bird03 behind the throne on the left hand
	TweenMax.set('.bird03', {x: -1160});

	TweenMax.set('.message01', {width: 0});
	TweenMax.set('.message01b', {width: 0, x: 900});
	TweenMax.set('.message02', {height: 0, y: 500, opacity: 0});

	// Create Civilizations TimeLine
	var civilizationsTl = new TimelineMax()
		/*
			Lovers
		*/
		.to(loverObj, 24, {
			curLoverImg: loverImages.length - 1,	// animate propery curLoverImg to number of images
			roundProps: "curLoverImg",				// only integers so it can be used as an array index
			repeat: 0,								// No repeat
			immediateRender: true,					// load first image automatically
			ease: Linear.easeNone,					// show every image the same ammount of time
			onUpdate: function () {
			  	$("#lovers").attr("src", loverImages[loverObj.curLoverImg]);
			},
			delay: 20
		})
		.add('birds')
		/* 
			Yellow Bird
		*/
		.to(bird01Obj, 3, {
			curBird01Img: bird01Images.length - 1,
			roundProps: "curBird01Img",
			repeat: 6,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#yellowbird").attr("src", bird01Images[bird01Obj.curBird01Img]);
			},
			onComplete: function () {
			  	$("#yellowbird").attr("src", "img/birds/img_bird01-01.png");
			}
		}, 'birds')
		.to('.bird01', 21, {x: 0, ease: Linear.easeNone}, 'birds')
		.to($("#yellowbird"), 6, {css:{bezier:path.yellowbird}, ease:Power1.easeInOut, delay: 21}, 'birds')
		/* 
			Green Bird
		*/
		.to(bird02Obj, 3, {
			curBird02Img: bird02Images.length - 1,
			roundProps: "curBird02Img",
			repeat: 6,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#greenbird").attr("src", bird02Images[bird02Obj.curBird02Img]);
			}
		}, 'birds')
		.to(bird02bObj, 3, {
			curBird02bImg: bird02bImages.length - 1,
			roundProps: "curBird02bImg",
			repeat: 4,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#greenbird").attr("src", bird02bImages[bird02bObj.curBird02bImg]);
			},
			delay: 18
		}, 'birds')
		.to(bird02Obj, 3, {
			curBird02Img: bird02Images.length - 1,
			roundProps: "curBird02Img",
			repeat: 4,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#greenbird").attr("src", bird02Images[bird02Obj.curBird02Img]);
			},
			onComplete: function () {
			  	$("#greenbird").attr("src", "img/birds/img_bird02-01.png");
			},
			delay: 25
		}, 'birds')
		.to($("#greenbird"), 42, {css:{bezier:path.greenbird}, ease:Power1.easeInOut}, 'birds')
		/* 
			Blue Bird
		*/
		.to(bird03Obj, 3.5, {
			curBird03Img: bird03Images.length - 1,
			roundProps: "curBird03Img",
			repeat: 6,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#bluebird").attr("src", bird03Images[bird03Obj.curBird03Img]);
			}
		}, 'birds')
		.to('.bird03', 21, {x: 0, ease: Linear.easeNone}, 'birds')
		/*
			Flowers
		*/
		.to($("#flower01"), 16, {css:{bezier:path.flower01}, ease:Power1.easeInOut, delay: 23}, 'birds')
		.to($("#flower03"), 15, {css:{bezier:path.flower03}, ease:Power1.easeInOut, delay: 22.75}, 'birds')
		.to($("#flower04"), 18, {css:{bezier:path.flower04}, ease:Power1.easeInOut, delay: 22.5}, 'birds')
		.to($("#flower02"), 17, {css:{bezier:path.flower02}, ease:Power1.easeInOut, delay: 14}, 'birds')
		.to($("#cocoon01"), 18, {css:{bezier:path.cocoon01}, ease:Power1.easeInOut, delay: 14}, 'birds')
		.to($("#leaf01"), 28, {css:{bezier:path.leaf01}, ease:Power1.easeInOut, delay: 14}, 'birds')
		/*
			First Message
		*/
		.to('.message01', 17, {width: 900, ease: Linear.easeNone, delay: 1}, 'birds')
		.to('.message01b', 18, {width: 900, x: 0, ease: Linear.easeNone, delay: 3}, 'birds')
		.fromTo(['.message01 h2', '.message01 p'], 5, {autoAlpha: 0, y: '-=15'}, {autoAlpha: 1, y: 0, ease:Power1.easeOut, delay: 12}, 'birds')
		.to('.horizontal-container', 50, {x: '-20%', ease:Linear.easeNone, delay: 20})
		.to(['.message01', '.message01b'], 20, {autoAlpha: 0, y: '-=15', ease:Power1.easeOut, delay: 70}, 'birds')
		.add('musicians')
		/*
			Setar Player
		*/
		.to(setarObj, 48, {
			curSetarImg: setarImages.length - 1,
			roundProps: "curSetarImg",
			repeat: 4,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#setarPlayer").attr("src", setarImages[setarObj.curSetarImg]);
			},
			onComplete: function () {
			  	$("#setarPlayer").attr("src", "img/musicians/img_setarPlayer-01.png");
			},
			delay: 20
		}, 'musicians')
		/*
			Daf Player
		*/
		.to(dafObj, 48, {
			curDafImg: dafImages.length - 1,
			roundProps: "curDafImg",
			repeat: 4,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#dafPlayer").attr("src", dafImages[dafObj.curDafImg]);
			},
			onComplete: function () {
			  	$("#dafPlayer").attr("src", "img/musicians/img_dafPlayer-01.png");
			},
			delay: 20
		}, 'musicians')
		/*
			Dancer
		*/
		.to(dancerObj, 80, {
			curDancerImg: dancerImages.length - 1,
			roundProps: "curDancerImg",
			repeat: 2,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#dancer").attr("src", dancerImages[dancerObj.curDancerImg]);
			},
			onComplete: function () {
			  	$("#dancer").attr("src", "img/musicians/img_dancer-01.png");
			},
			delay: 20
		}, 'musicians')
		/*
			Kamancheh Player
		*/
		.to(kamanchehObj, 48, {
			curKamanchehImg: kamanchehImages.length - 1,
			roundProps: "curKamanchehImg",
			repeat: 4,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#kamanchehPlayer").attr("src", kamanchehImages[kamanchehObj.curKamanchehImg]);
			},
			onComplete: function () {
			  	$("#kamanchehPlayer").attr("src", "img/musicians/img_kamanchehPlayer-01.png");
			},
			delay: 20
		}, 'musicians')
		/*
			Setar Notes
		*/
		.set(".note01", {opacity: 0.8, delay: 30}, 'musicians')
		.set(".note02", {opacity: 0.8, delay: 45}, 'musicians')
		.set(".note03", {opacity: 0.8, delay: 60}, 'musicians')
		.set(".note04", {opacity: 0.8, delay: 75}, 'musicians')
		.to($("#note01"), 60, {css:{bezier:path.notes01}, ease:Power1.easeInOut, repeat: 3, delay: 30}, 'musicians')
		.to($("#note02"), 60, {css:{bezier:path.notes01}, ease:Power1.easeInOut, repeat: 3, delay: 45}, 'musicians')
		.to($("#note03"), 60, {css:{bezier:path.notes01}, ease:Power1.easeInOut, repeat: 3, delay: 60}, 'musicians')
		.to($("#note04"), 60, {css:{bezier:path.notes01}, ease:Power1.easeInOut, repeat: 3, delay: 75}, 'musicians')
		.set(".note01", {opacity: 0, delay: 270}, 'musicians')
		.set(".note02", {opacity: 0, delay: 285}, 'musicians')
		.set(".note03", {opacity: 0, delay: 300}, 'musicians')
		.set(".note04", {opacity: 0, delay: 315}, 'musicians')
		/*
			Daf Notes
		*/
		.set(".note11", {opacity: 0.8, delay: 30}, 'musicians')
		.set(".note12", {opacity: 0.8, delay: 45}, 'musicians')
		.set(".note13", {opacity: 0.8, delay: 60}, 'musicians')
		.set(".note14", {opacity: 0.8, delay: 75}, 'musicians')
		.set(".note15", {opacity: 0.8, delay: 90}, 'musicians')
		.set(".note16", {opacity: 0.8, delay: 105}, 'musicians')
		.set(".note17", {opacity: 0.8, delay: 120}, 'musicians')
		.to($("#note11"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 30}, 'musicians')
		.to($("#note12"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 45}, 'musicians')
		.to($("#note13"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 60}, 'musicians')
		.to($("#note14"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 75}, 'musicians')
		.to($("#note15"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 90}, 'musicians')
		.to($("#note16"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 105}, 'musicians')
		.to($("#note17"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 120}, 'musicians')
		.set(".note11", {opacity: 0, delay: 240}, 'musicians')
		.set(".note12", {opacity: 0, delay: 255}, 'musicians')
		.set(".note13", {opacity: 0, delay: 270}, 'musicians')
		.set(".note14", {opacity: 0, delay: 285}, 'musicians')
		.set(".note15", {opacity: 0, delay: 300}, 'musicians')
		.set(".note16", {opacity: 0, delay: 315}, 'musicians')
		.set(".note17", {opacity: 0, delay: 330}, 'musicians')
		/*
			Kamancheh Notes
		*/
		.set(".note21", {opacity: 0.8, delay: 30}, 'musicians')
		.set(".note22", {opacity: 0.8, delay: 45}, 'musicians')
		.set(".note23", {opacity: 0.8, delay: 60}, 'musicians')
		.set(".note24", {opacity: 0.8, delay: 75}, 'musicians')
		.set(".note25", {opacity: 0.8, delay: 90}, 'musicians')
		.set(".note26", {opacity: 0.8, delay: 105}, 'musicians')
		.set(".note27", {opacity: 0.8, delay: 120}, 'musicians')
		.to($("#note21"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 30}, 'musicians')
		.to($("#note22"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 45}, 'musicians')
		.to($("#note23"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 60}, 'musicians')
		.to($("#note24"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 75}, 'musicians')
		.to($("#note25"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 90}, 'musicians')
		.to($("#note26"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 105}, 'musicians')
		.to($("#note27"), 105, {css:{bezier:path.notes02}, ease:Power1.easeInOut, repeat: 1, delay: 120}, 'musicians')
		.set(".note21", {opacity: 0, delay: 240}, 'musicians')
		.set(".note22", {opacity: 0, delay: 255}, 'musicians')
		.set(".note23", {opacity: 0, delay: 270}, 'musicians')
		.set(".note24", {opacity: 0, delay: 285}, 'musicians')
		.set(".note25", {opacity: 0, delay: 300}, 'musicians')
		.set(".note26", {opacity: 0, delay: 315}, 'musicians')
		.set(".note27", {opacity: 0, delay: 330}, 'musicians')
		/*
			Blue bird
		*/
		.to(bird03Obj, 12, {
			curBird03Img: bird03Images.length - 1,
			roundProps: "curBird03Img",
			repeat: 10,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#bluebird").attr("src", bird03Images[bird03Obj.curBird03Img]);
			},
			onComplete: function () {
			  	$("#bluebird").attr("src", "img/birds/img_bird03-01.png");
			},
			delay: 20
		}, 'musicians')
		.to($("#bluebird"), 120, {css:{bezier:path.bluebird}, ease:Power1.easeInOut, delay: 20}, 'musicians')
		/*
			Green bird
		*/
		.to(bird02cObj, 12, {
			curBird02cImg: bird02cImages.length - 1,
			roundProps: "curBird02cImg",
			repeat: 10,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#greenbird2").attr("src", bird02cImages[bird02cObj.curBird02cImg]);
			},
			delay: 60
		}, 'musicians')
		.to($("#greenbird2"), 120, {css:{bezier:path.greenbird2}, ease:Power1.easeInOut, delay: 60}, 'musicians')
		/*
			Flowers
		*/
		.to($("#flower01b"), 60, {css:{bezier:path.flower01b}, ease:Power1.easeInOut, delay: 97}, 'musicians')
		.to($("#flower02b"), 57, {css:{bezier:path.flower02b}, ease:Power1.easeInOut, delay: 96}, 'musicians')
		.to($("#flower04b"), 65, {css:{bezier:path.flower04}, ease:Power1.easeInOut, delay: 95}, 'musicians')
		.to($("#flower03b"), 55, {css:{bezier:path.flower02}, ease:Power1.easeInOut, delay: 45}, 'musicians')
		.to($("#cocoon01b"), 65, {css:{bezier:path.cocoon01b}, ease:Power1.easeInOut, delay: 45}, 'musicians')
		.to($("#leaf01b"), 110, {css:{bezier:path.leaf01}, ease:Power1.easeInOut, delay: 45}, 'musicians')
		/*
			Second Message
		*/
		.set('.message02', {opacity: 1, delay: 30}, 'musicians')
		.to('.message02', 105, {height: 500, y: 0, ease:Power1.easeInOut, delay: 30}, 'musicians')
		.fromTo(['.message02 h2', '.message02 p'], 5, {autoAlpha: 0, x: '-=15'}, {autoAlpha: 1, x: 0, ease:Power1.easeOut, delay: 140}, 'musicians')
		.to('.horizontal-container', 50, {x: '-40%', ease:Linear.easeNone, delay: 20})
		.to('.message02', 20, {autoAlpha: 0, y: '-=15', ease:Power1.easeOut, delay: 350}, 'musicians')
		.add('players')
		/*
			PitzBall
		*/
		.to($("#pitzBall"), 60, {css:{bezier:path.ball}, ease:Power0.easeOut, delay: 20}, 'players')
		.to($("#pitzBall"), 60, {css:{bezier:path.ball02}, ease:Power1.easeOut, delay: 80}, 'players')
		/*
			Jumping Player
		*/
		.to(jumpingObj, 48, {
			curJumpingImg: jumpingImages.length - 1,
			roundProps: "curJumpingImg",
			repeat: 0,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#jumpingPlayer").attr("src", jumpingImages[jumpingObj.curJumpingImg]);
			},
			delay: 20
		}, 'players')
		.to($("#jumpingPlayer"), 48, {y: 200, ease: Power1.easeIn, delay: 20}, 'players')
		/*
			Standing Player
		*/
		.to(standingObj, 30, {
			curStandingImg: standingImages.length - 1,
			roundProps: "curStandingImg",
			repeat: 0,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#standingPlayer").attr("src", standingImages[standingObj.curStandingImg]);
			},
			delay: 50
		}, 'players')
		/*
			Back Player
		*/
		.to($("#backPlayer"), 40, {rotation: 10, transformOrigin: '100% 100%', ease:Linear.easeNone, delay: 20}, 'players')
		/*
			Kneeled Player
		*/
		.to(kneeledObj, 48, {
			curKneeledImg: kneeledImages.length - 1,
			roundProps: "curKneeledImg",
			repeat: 0,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
			  	$("#kneeledPlayer").attr("src", kneeledImages[kneeledObj.curKneeledImg]);
			},
			delay: 20
		}, 'players')
		.to($("#kneeledPlayer"), 48, {x: -270, ease: Power1.easeIn, delay: 20}, 'players')
		.to('.horizontal-container', 50, {x: '-60%', ease:Linear.easeNone})
		.to('.horizontal-container', 50, {x: '-80%', ease:Linear.easeNone})
	;
	
	// Create Civilizations Scene
	var civilizationsScene = new ScrollMagic.Scene({
		triggerElement: "#main",
		triggerHook: 0,
		duration: '500%'
	})
	.setTween(civilizationsTl)
	.setPin('#main')
	.addIndicators()
	.addTo(controller);
});