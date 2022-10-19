



const IS_ICEPARTY = false;

var a = {
    p: function(q,r,s, imat, bounce, mass, friction, jump, air) {
        if (!imat) imat = (IS_ICEPARTY) ? 1 : 0;
        if (!bounce) bounce = 0;
    	maker.make_platform(q,r,s, imat, bounce, mass, friction, jump, air);
    },
    y: function(q,r,s, imat, bounce, mass, friction, air, topr) {
        if (!imat) imat = (IS_ICEPARTY) ? 1 : 0;
        if (!bounce) bounce = 0;
        maker.make_cylinder(q,r,s, imat, bounce, mass, friction, air, topr);
    },
    s: function(q,radius, imat, bounce, mass, friction, air) {
        maker.make_sphere(q, radius, imat, bounce, mass, friction, air);
    },
    c: function(q, iceparty) {
        if (iceparty == null) iceparty = (IS_ICEPARTY) ? true : false;
    	maker.make_cone(q, iceparty);
    },
    e: function(q) {
    	maker.make_ending(q);
    },
    m: function(id) {
    	return scene.getMeshByName(id);
    },
    re: function(id, q, r, s) { // reset
        let mesh = scene.getMeshByName(id);
        mesh.rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        mesh.rotation.x = r[1];
        mesh.rotation.y = r[0];
        mesh.rotation.z = r[2];
        mesh.position.x = q[0];
        mesh.position.y = q[1];
        mesh.position.z = q[2];
        mesh.scaling.x = s[0];
        mesh.scaling.y = s[1];
        mesh.scaling.z = s[2];
        if (mesh.physicsImpostor) {
            mesh.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));
            mesh.physicsImpostor.setAngularVelocity(new BABYLON.Quaternion(0,0,0,0));
        }
    },
    g: function(x,y,z) {
        let vec = cc.get("gravity", {
            x: (x != null) ? x*default_gravity : null,
            y: (y != null) ? y*default_gravity : null,
            z: (z != null) ? z*default_gravity : null
        });
        gravity = vec;
        console.log("%c GrAV", "color: blue", vec);
        scene.getPhysicsEngine().setGravity(vec);
    },
    d: function(x,y,z) {
        player.scaling = cc.get("player.scaling", {x,y,z});
    },
    cam_d: function(_radius) {
        let cam_d = cc.get("radius", _radius)
        let cam_cd = cc.get("cameraDownAngle", null);

        cam_horizontal = cam_d * cam_d;
        cam_vertical = cam_horizontal * Math.tan(cam_cd * 1.3);
        cam_depression = cam_cd;
    },
    cam_cd: function(_cameraDownAngle) {
        let cam_d = cc.get("radius", null);
        let cam_cd = cc.get("cameraDownAngle", (_cameraDownAngle != null) ? _cameraDownAngle * Math.PI / 180 : null);

        cam_horizontal = cam_d * cam_d;
        cam_vertical = cam_horizontal * Math.tan(cam_cd * 1.3);
        cam_depression = cam_cd;
    },
    cam_cr: function(_cameraRightAngle) {
        cameraRightAngle = cc.get("cameraRightAngle", (_cameraRightAngle != null) ? _cameraRightAngle * Math.PI / 180 : null);
    },
    t: function(x,y,z) {
        camera.upVector = cc.get("camera.upVector", {x,y,z});
    },
    mov: function(id, axis, value) {
        scene.getMeshByName(id).position[axis] += value * default_speed;
    },
    rot: function(id, axis, value) {
        scene.getMeshByName(id).rotation[axis] += value * default_steer;
    },
    siz: function(id, axis, value) {
        scene.getMeshByName(id).scaling[axis] += value / 100;
    },
    fov_mul2: function(_mul2) {
        let mul2 = cc.get("camera.fov mul2", _mul2);
        fov.set_mul2(mul2);
        fov.apply();
    },
    u: function(id) {
        scene.getMeshByName(id).unfreezeWorldMatrix();
    },
    msg_set: function(text) {
        $("#map_text").css("visibility", "visible");
        setTimeout(function() {
            $("#map_text").text(text);  
            $("#map_text").fadeIn("fast");
        }, 250)
        
    },
    msg_del: function() {
        $("#map_text").fadeOut("fast");
    },
    js: function(v) {
        jumpSpeed = cc.get("jumpSpeed", v);
    },
    jh: function(v) {
        jumpHeight = cc.get("jumpHeight", v);
    },
    og: function(mat, p1,p2,p3, r1,r2,r3, s1,s2,s3) {
        var mat_map = {
            ice: 0,
            fire: 5,
            green: 6,
            brown: 7,
            water: 8,
            invisible: -1,
            fall: 0
        }
        if (mat != "fall") {
            this.p([p1 * (-1),p2,p3], [r1*(Math.PI / 180),r2*(Math.PI / 180),r3*(Math.PI / 180)], [s1,s2,s3], mat_map[mat] || 0);
        } else {
            this.p([p1 * (-1),p2,p3], [r1*(Math.PI / 180),r2*(Math.PI / 180),r3*(Math.PI / 180)], [s1,s2,s3], mat_map[mat] || 0, 1, 0.2, 0);
        }
        
    },
    og_end: function(p1, p2, p3, yr) {
        this.e([p1,p2,p3]);
    },
    og_c: function(p1,p2,p3) {
        maker.og_cone(p1,p2,p3);
    },
    og_y: function(positionX, positionY, positionZ, rotationY, rotationX, rotationZ, rad, hei) {
        maker.og_cylinder(positionX, positionY, positionZ, rotationY, rotationX, rotationZ, rad, hei);
    },
    og_tree: function(p1,p2,p3) {
        maker.og_tree(p1,p2,p3);
    }
}




var audio = {
	init: function() {
		if (testing_mode.active == false) {
			const song_src = "assets/music/" + cup_info[settings.cup_id].song;
			this.load(song_src);
		}
	},
	load: function(song) {
		var audio = $("#audio")[0];
	    $("#audiosource").attr("src", song);
	    audio.load();
	},
	play: function() {
		if (settings.musicEnabled === "on") {
		    var audio = $("#audio")[0];
	    	audio.oncanplaythrough = audio.play();
	    	audio.currentTime = 0;
	    }
	},
	stop: function() {
		if (settings.musicEnabled === "on") {
			document.getElementById('audio').pause();
		}
	},
	level_complete: function() {
		if (settings.musicEnabled === "on") {
			var audio_player = $("#sound_level_complete")[0];
			audio_player.oncanplaythrough = audio_player.play();
			audio_player.currentTime = 0;
		}
	},
	die: function() {
		if (settings.musicEnabled === "on") {
			var audio_player = $("#sound_die")[0];
			audio_player.oncanplaythrough = audio_player.play();
			audio_player.currentTime = 0;
		}
	}
}




var boot = {
    finished: false,
    preload: async function() {
        // persistent
        await deployment.init();
        await sync.init();
        await guardian.init();
        await tabs.init();
        await sleep(120);
        await start.init();
        await decorations.init();
        await maker.init();
        await leaderboard.init();
        await scorekeeper.recompute();
        await news.init();
        await popup.init();
        await popup.show();
        await start.create_scene();
        await cc.set_default();
        await fov.init();
        await update.init();
        await decorations.add_particle_system();
        await controls.init();
        
        this.finished = true;
    },
    init: async function() {
        console.log("INITED");
        await flyjump.init();
        await cc.hard_reset();
        await loader.init();
        await map.init();
        await audio.init();
        await cc.refresh()
        await change_state.spawn();
        await screen.init();
        await size.ingame();
        await leaderboard.speedrun_on_open_map();
        await map.post();
        transitioning = false;

        
    }
}

$('document').ready(function(){
    boot.preload();
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




var change_state = {
	die: function() {
		if (alive) {
			alive = false;
			$("#screen").css("visibility", "visible");
			$(".mobile_btn").fadeOut();
			$("#restart_icon").show();
			$("#next_lvl_icon").hide();
			$("#play_again").hide();
			a.msg_del();
			
			audio.stop();
			audio.die();
			
			if (settings.autoRestart === "on") {
				transitioning = true;
				setTimeout(function() {
					transitioning = false;
					$("#restart").click();
				}, 200);
			}
			// Leaderboard
			leaderboard.set_fps();
		}
	},
	spawn: function() {
		if (!alive) {
			stats.score = 0;
			flyjump.last_frame = 0;
			$("#screen").css("visibility", "hidden");
			$(".mobile_btn").fadeIn();
			$("#map_text").hide();

			// world
			player.rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0,0,0),0);
			player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));
			player.physicsImpostor.setAngularVelocity(new BABYLON.Quaternion(0,1,0,0));
			player.position = new BABYLON.Vector3(map.spawn[0],map.spawn[1],map.spawn[2]);
			player.rotation = new BABYLON.Vector3(0,0,0);
			
			// play settings
			// radius = default_radius;
			// speed = default_speed;
			// steer = default_steer;
			// update.set_gravity(default_gravity);
			// a.t(0,1,0);
			// fov.set_mul2(1);
			cc.refresh();

			// current info
			rotation = 0;
			alive = true;

			// reset keys
			controls.left = false;
			controls.right = false;
			controls.space = false;
			
			// map-specific reset
			map.reset();
			audio.play();
		}
	}, 
	win: function() {
		if ((alive) && (!transitioning)) {
			transitioning = true;
			alive = false;

			audio.stop();
			audio.level_complete();
			// clear this map
			cleanup.run();
			let this_map_id = settings.map_id;
			// set speed record
			leaderboard.set_record();

			
			function show_end_screen() {
				screen.set_dialog("Map Complete", "#56e04c");
				$("#restart_text").html("NEXT LEVEL");
				$("#restart_icon").hide();
				$("#next_lvl_icon").show();
				$("#play_again").show();
				
				$("#screen").css("visibility", "visible");
				$(".mobile_btn").fadeOut();
				transitioning = false;
			}

			if (testing_mode.active == true) {
				show_end_screen();
				return;
			}

			sync.get(this_map_id, function(data) {
				var map_exp = 0;
				if ((data !== undefined) && (data !== null)) {
					map_exp = Number(data);
				}
				// add one exp.
				sync.set(this_map_id, Number(map_exp) + 1, function() {
					scorekeeper.recompute();
					// display UI
					show_end_screen();
				});
			});
		}
		
	}
}



var cleanup = {
	run: function(full_reset=true) {
		if (full_reset == true) {
			map = {
				render_update: function() {},
				physics_update: function() {},
				section_update: function() {}
			}
		}
		
		for (var i=0;i<maker.ending_count;i++) {
			let mesh_name = "E" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (var i=0;i<maker.platform_count;i++) {
			let mesh_name = "P" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (var i=0;i<maker.cone_count;i++) {
			let mesh_name = "C" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (var i=0;i<maker.cylinder_count;i++) {
			let mesh_name = "Y" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (var i=0;i<maker.sphere_count;i++) {
			let mesh_name = "S" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		cones = [];
		endings = [];
		jumppads = [];
		maker.platform_count = 0;
		maker.cone_count = 0;
		maker.cylinder_count = 0;
		maker.sphere_count = 0;
		maker.ending_count = 0;
	}
}



const config = {
	chrx_id: "jhidcpailhmpjpbdbhceiaeeggkalgmd",
	dev_chrx_id: "hncbfhmjblcbjdbmddgdblbepeafmcji",
	sync_id: "@_",
}



const INF = 90000000000000;

// defaults
const default_radius = 2.5;
const default_speed = 0.28;
const default_steer = 0.022;
const default_gravity = -9;
const physics_call_rate = 2; // higher = better performance. lower = better accuracy.
const default_cameraDownAngle = 0.3;
const default_cameraRightAngle = 0;
const default_jumpSpeed = 1;
const default_jumpHeight = 1;


// current
var speed;// = default_speed;
var steer;// = default_steer;
var gravity;

var jumpSpeed;
var jumpHeight;

var radius;// = default_radius;
var cameraDownAngle;// = default_cameraDownAngle;
var cameraRightAngle;// = default_cameraRightAngle;

// solved
var cam_horizontal = 0;
var cam_vertical = 0;
var cam_depression = 0;


var cc = {
	default: {},
	monkey: {},
	set_default: function() {
		this.default["camera.maxZ"] = () => {
			return 300
		};
		this.default["camera.fov mul2"] = () => {
			return 1
		};
		this.default["light.intensity"] = () => {
			return 1.0
		};

		this.default["radius"] = () => {
			return default_radius;
		};

		this.default["cameraDownAngle"] = () => {
			return default_cameraDownAngle;
		};
		this.default["cameraRightAngle"] = () => {
			return default_cameraRightAngle;
		};

		this.default["jumpSpeed"] = () => {
			return default_jumpSpeed;
		};
		this.default["jumpHeight"] = () => {
			return default_jumpHeight;
		};


		this.default["speed"] = () => {
			return default_speed
		};
		this.default["steer"] = () => {
			return default_steer
		};




		this.default["player.scaling"] = () => {
			return new BABYLON.Vector3(1, 0.16, 1)
		};
		this.default["scene.clearColor"] = () => {
			return new BABYLON.Color4(0,0,0,1)
		};
		this.default["scene.ambientColor"] = () => {
			return new BABYLON.Color4(1,1,1,1)
		};
		this.default["light.diffuse"] = () => {
			return new BABYLON.Color4(1, 1, 1, 1)
		};
		this.default["light.specular"] = () => {
			return new BABYLON.Color3(1, 1, 1)
		};
		this.default["light.groundColor"] = () => {
			return new BABYLON.Color3(0, 0, 0)
		};
		this.default["gravity"] = () => {
			return new BABYLON.Vector3(0,-9,0)
		};
		this.default["camera.upVector"] = () => {
			return new BABYLON.Vector3(0,1,0)
		};


	},
	set_monkey: function(key, val) {
		this.monkey[key] = val;
	},
	get: function(const_key, top_vec=null) {
		var vec = this.default[const_key]();
		if (Object.keys(vec).length == 0) {
			// scalar
			var arr = [vec, this.monkey[const_key], top_vec].filter(v => v != null);
			return arr[arr.length - 1];
		} else {
	        // vector
	        let is_color = ((vec.r) && (vec.g) && (vec.b));
	        let arr = [this.monkey[const_key], top_vec];
	        if (is_color) {
	        	for (var i=0;i<2;i++) {
	        		let ar = arr[i];
	        		if (ar) {
	        			vec = ar;
	        		}
	        	}
	        } else {
		        for (let key in vec) {
		        	for (var i=0;i<2;i++) {
		        		let ar = arr[i];
		        		if ((ar != null) && (ar[key] != null)) {
		        			vec[key] = ar[key];
		        		}
		        	}
		        }
		    }
	        return vec;
	    }
	},
	refresh: function() {
		// TODO: This is not done! Something's wrong i can feel it.
		camera.maxZ = this.get("camera.maxZ");
		light.intensity = this.get("light.intensity");
		radius = this.get("radius");
		cameraDownAngle = this.get("cameraDownAngle");
		cameraRightAngle = this.get("cameraRightAngle");
		speed = this.get("speed");
		steer = this.get("steer");
		player.scaling = this.get("player.scaling");
		scene.clearColor = this.get("scene.clearColor");
		scene.ambientColor = this.get("scene.ambientColor");
		light.diffuse = this.get("light.diffuse");
		light.specular = this.get("light.specular");
		light.groundColor = this.get("light.groundColor");

		jumpSpeed = this.get("jumpSpeed");
		jumpHeight = this.get("jumpHeight");


		a.fov_mul2(null);
		a.g(null, null, null);
		a.d(null, null, null);
		a.t(null, null, null);
		a.cam_d(null);
	},
	hard_reset: function() {
		this.monkey = {};
	}
}





var controls = {
  left: false,
  right: false,
  space: false,
  mobile_enabled: ('ontouchstart' in document.documentElement),
  mobile_allowed: true,
  init: function() {
    function use_mobile_buttons() {
      // onionfist.com/ice_mobile_notice
      if (deployment.is_chrome_ext == true) {
        return false;
      }
      if (controls.mobile_allowed == false) {
        return false;
      }
      if (controls.mobile_enabled == false) {
        return false;
      }
      return true;
    }

    this.bind_keys();
    if (use_mobile_buttons()) {
      this.bind_buttons();
      $(".mobile_btn").hide();
    } else {
      $(".mobile_btn").remove();
    }
  },
  count_key_presses: function() {
    if (alive) {
      stats.key_time += 1;
      if (stats.key_time > 16) {
        $(".mobile_btn").remove();
      }
    }
  },
  bind_buttons: function() {
    $("#left_mobile_btn").touchstart(function() {
      controls.left = true; controls.right = false;
    });
    $("#right_mobile_btn").touchstart(function() {
      controls.right = true; controls.left = false;
    });
    $("#space_mobile_btn").touchstart(function() {
      controls.space = true;
    });
    $("#left_mobile_btn").touchend(function() {
      controls.left = false;
    });
    $("#right_mobile_btn").touchend(function() {
      controls.right = false;
    });
    $("#space_mobile_btn").touchend(function() {
      controls.space = false;
    });
  },
  bind_keys: function() {
    document.onkeydown = function(e) {
      if ((e.keyCode == 37) || (e.keyCode == 65)) {
        if (popup.in_game) {
          controls.left = true; controls.right = false;
          controls.count_key_presses();
        } else if ((transitioning == false) && (e.keyCode == 37)) {
          popup.cup_num -= 1;
          popup.display_cup();
        }
      }
      if ((e.keyCode == 39) || (e.keyCode == 68)) {
        if (popup.in_game) {
          controls.right = true; controls.left = false;
          controls.count_key_presses();
        } else if ((transitioning == false) && (e.keyCode == 39)) {
          popup.cup_num += 1;
          popup.display_cup();
        }
      }
      
      if ((e.keyCode == 32) || (e.keyCode == 38) || (e.keyCode == 87)) {
        controls.space = true;
        if ((!alive) && (!transitioning) && (popup.in_game)) {
          $("#restart").click();
        }
      }

      if (e.keyCode == 82) {
        if ((alive) && (!transitioning) && (popup.in_game)) {
          change_state.die();
          screen.set_dialog("Self Destructed", "#e04c4f");
        }
      }
    }
    document.onkeyup = function(e) {
      if ((e.keyCode == 37) || (e.keyCode == 65)) {
        controls.left = false;
      }
      if ((e.keyCode == 39) || (e.keyCode == 68)) {
        controls.right = false;
      }
      if ((e.keyCode == 32) || (e.keyCode == 38) || (e.keyCode == 87)) {
        controls.space = false;
      }
    }
  }
}




var cup_info = {
    beginner: {
        name: "Ice Dodo",
        song: "env2.mp3"
    },
    carrot: {
        name: "Carrot cup",
        song: "tokyo.mp3"
    },
    rocky: {
        name: "Rocky cup",
        song: "stairways.mp3"
    },
    dodo: {
        name: "Dodo cup",
        song: "env2.mp3"
    },
    skilled: {
        name: "Skilled cup",
        song: "tokyo.mp3"
    },
    furby: {
        name: "Furby cup",
        song: "stairways.mp3"
    },
    doom: {
        name: "Doom cup",
        song: "env2.mp3"
    },
    kazil: {
        name: "Kazil cup",
        song: "tokyo.mp3"
    },
    pilot: {
        name: "Pilot cup",
        song: "stairways.mp3"
    },
    ye: {
        name: "Ye cup",
        song: "env2.mp3"
    },
    tim: {
        name: "Tim cup",
        song: "tokyo.mp3"
    },
    ghoul: {
        name: "Ghoul cup",
        song: "stairways.mp3"
    },
    rytai: {
        name: "Rytai cup",
        song: "env2.mp3"
    },
    jay: {
        name: "Jay cup",
        song: "tokyo.mp3"
    },
    golden: {
        name: "Golden cup",
        song: "stairways.mp3"
    },
    bean: {
        name: "Bean cup",
        song: "env2.mp3"
    },
    fish: {
        name: "Fish cup",
        song: "tokyo.mp3"
    },
    thero: {
        name: "Thero cup",
        song: "stairways.mp3"
    },
    crazy: {
        name: "Crazy cup",
        song: "stairways.mp3"
    },
    june: {
        name: "June cup",
        song: "env2.mp3"
    },
    sleepy: {
        name: "Sleepy cup",
        song: "tokyo.mp3"
    },
    mango: {
        name: "Mango cup",
        song: "stairways.mp3"
    },
    squirrel: {
        name: "Squirrel cup",
        song: "env2.mp3"
    },
    golden: {
        name: "Golden cup",
        song: "tokyo.mp3"
    },
    thero: {
        name: "Thero cup",
        song: "stairways.mp3"
    },
    fish: {
        name: "Fish cup",
        song: "env2.mp3"
    },
    bean: {
        name: "Bean cup",
        song: "tokyo.mp3"
    },
    collab: {
        name: "Collab cup",
        song: "stairways.mp3"
    },
    og: {
        name: "O.G. cup",
        song: "env2.mp3"
    },
    vault: {
        name: "Vault cup",
        song: "tokyo.mp3"
    },
    finder: {
        name: "Finder",
        song: "stairways.mp3"
    }
}



var decorations = {
    materials: {},
    idno: 0,
    init: function() {
        // GENERAL
        this.materials.invis = this.rgba_mat(0,0,0,0);
        this.materials.ending = this.rgba_mat(36, 252, 3, 0.5);
        this.materials.player = this.rgba_mat(255, 255, 255,1.0);;

        // PLATFORM
        this.bright = new BABYLON.StandardMaterial("brightmat", scene);
        this.bright.diffuseTexture = new BABYLON.Texture("assets/textures/bright.png", scene);
        this.bright.diffuseTexture.uScale = this.bright.diffuseTexture.vScale = 1.0;
        this.bright.backFaceCulling = true; // false;
        this.bright.freeze();

        this.dark = new BABYLON.StandardMaterial("darkmat", scene);
        this.dark.diffuseTexture = new BABYLON.Texture("assets/textures/dark.png", scene);
        this.dark.diffuseTexture.uScale = this.dark.diffuseTexture.vScale = 1.0;
        this.dark.backFaceCulling = true; // false;
        this.dark.freeze();

        if (settings.platformTexture === "dark") {
            this.materials.plat0 = this.dark;
        } else {
            this.materials.plat0 = this.bright;
        }

        this.materials.plat1 = new BABYLON.StandardMaterial("plat1", scene);
        this.materials.plat1.diffuseTexture = new BABYLON.Texture("assets/textures/pm1.png", scene);
        this.materials.plat1.diffuseTexture.uScale = this.bright.diffuseTexture.vScale = 1.0;
        this.materials.plat1.backFaceCulling = false;
        this.materials.plat1.freeze();

        this.materials.plat2 = new BABYLON.StandardMaterial("plat2", scene);
        this.materials.plat2.diffuseTexture = new BABYLON.Texture("assets/textures/pm2.png", scene);
        this.materials.plat2.diffuseTexture.uScale = this.bright.diffuseTexture.vScale = 1.0;
        this.materials.plat2.backFaceCulling = false;
        this.materials.plat2.freeze();

        this.materials.plat3 = this.rgba_mat(0, 0, 255, 1.0);
        this.materials.plat3.alpha = 0.55;
        this.materials.plat3.backFaceCulling = true;
        this.materials.plat3.freeze();
        

        this.materials.plat5 = this.rgba_mat(255,0,0,1, true); // fire

        this.materials.plat6 = this.rgba_mat(34,139,34,0.4, true); // green
        
        this.materials.plat7 = this.rgba_mat(165,42,42,0.8, true); // brown

        this.materials.plat8 = this.rgba_mat(64,164,223,0.2, true); // water

        // this.materials.plat4 = new BABYLON.StandardMaterial("fire", scene);
        // this.materials.plat4.diffuseColor = new BABYLON.Color3(1,0,0);

        // this.materials.plat5 = new BABYLON.StandardMaterial("green", scene);
        // this.materials.plat5.diffuseColor = new BABYLON.Color3(34 /255,139 /255,34 /255);
        // this.materials.plat5.alpha = 0.4;

        // this.materials.plat6 = new BABYLON.StandardMaterial("brown", scene);
        // this.materials.plat6.diffuseColor = new BABYLON.Color3(165 /255,42 /255,42 /255);
        // this.materials.plat6.alpha = 0.8;

        // this.materials.plat7 = new BABYLON.StandardMaterial("water", scene);
        // this.materials.plat7.diffuseColor = new BABYLON.Color3(64 /255, 164 /255, 223 /255);
        // this.materials.plat7.alpha = 0.2;


        // CONE
        this.materials.cone0 = this.rgba_mat(235,50,50,1.0);

        this.materials.cone1 = this.rgba_mat(65, 174, 217,1.0);

        // CYLINDER
        this.materials.cylinder0 = this.rgba_mat(40, 60, 235, 0.8);
        this.materials.cylinder0.freeze();

        this.materials.cylinder1 = this.rgba_mat(242, 22, 103, 1.0);
        this.materials.cylinder1.freeze();

        this.materials.cylinder2 = this.rgba_mat(146, 95, 217, 1.0);
        this.materials.cylinder2.freeze();

        this.materials.cylinder3 = this.rgba_mat(0, 0, 255, 1.0);
        this.materials.cylinder3.alpha = 0.4;
        this.materials.cylinder3.backFaceCulling = true;
        this.materials.cylinder3.freeze();

        this.materials.cylinder4 = this.rgba_mat(255,0,0,1, true); // fire

        this.materials.cylinder5 = this.rgba_mat(34,139,34,0.4, true); // green
        
        this.materials.cylinder6 = this.rgba_mat(165,42,42,0.8, true); // brown

        this.materials.cylinder7 = this.rgba_mat(64,164,223,0.2, true); // water

        // SPHERE
        this.materials.sphere0 = this.rgba_mat(40, 60, 235, 0.8);
        this.materials.sphere0.freeze();

        this.materials.sphere1 = this.rgba_mat(242, 22, 103, 1.0);
        this.materials.sphere1.freeze();

        this.materials.sphere2 = this.rgba_mat(146, 95, 217, 1.0);
        this.materials.sphere2.freeze();

        this.materials.sphere3 = this.rgba_mat(0, 0, 255, 1.0);
        this.materials.sphere3.alpha = 0.4;
        this.materials.sphere3.backFaceCulling = true;
        this.materials.sphere3.freeze();

        this.materials.sphere4 = this.rgba_mat(255, 255, 255, 1.0);
        this.materials.sphere4.freeze();


    },
    decorate: function(obj, mat_id) {
        if (this.materials[mat_id]) {
            obj.material = this.materials[mat_id];
        }
    },
    decorate_player: function(player, skinName) {
        let pmat = new BABYLON.StandardMaterial("pmat", scene);
        const URL = (skinName) ? "assets/skins/"+skinName+".png" : "assets/icons/icon128.png";
        pmat.diffuseTexture = new BABYLON.Texture(URL, scene);
        pmat.diffuseTexture.uScale = pmat.diffuseTexture.vScale = 1.0;
        pmat.backFaceCulling = false;
        pmat.freeze();
        player.material = pmat;
    },
    rgba_mat: function(r,g,b,a, backFaceCulling=false) {
        this.idno += 1;
        var customMat = new BABYLON.StandardMaterial("mat" + this.idno, scene);
        customMat.diffuseColor = new BABYLON.Color3(r/255, g/255, b/255);
        customMat.alpha = a;
        customMat.backFaceCulling = backFaceCulling;
        customMat.freeze();
        return customMat;
    },
    add_particle_system: function () {
        var ps = new BABYLON.ParticleSystem("particles", 2000, scene);
        //Texture of each particle//textures/flare
        ps.particleTexture = new BABYLON.Texture("assets/textures/flare.png", scene);
        // Where the particles come from
        ps.emitter = player; // the starting object, the emitter
        ps.minEmitBox = new BABYLON.Vector3(-0.2, 0, 0); // Starting all from
        ps.maxEmitBox = new BABYLON.Vector3(0.2, 0, 0); // To...
        // Colors of all particles
        ps.color1 = new BABYLON.Color4(0.4, 0.4, 1.0, 1.0);
        ps.color2 = new BABYLON.Color4(0.9, 0.5, 0.4, 1.0);
        ps.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.8);
        // Size of each particle (random between...
        ps.minSize = (IS_ICEPARTY) ? 0.3 : 0.15;
        ps.maxSize = (IS_ICEPARTY) ? 0.7 : 0.4;
        // Life time of each particle (random between...
        ps.minLifeTime = 0.3;
        ps.maxLifeTime = 0.4;
        // Emission rate
        ps.emitRate = (IS_ICEPARTY) ? 10 : 100;
        // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
        ps.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        // Direction of each particle after it has been emitted
        ps.direction1 = new BABYLON.Vector3(-1, 1, 1);
        ps.direction2 = new BABYLON.Vector3(1, 1, -1);
        // Speed
        ps.minEmitPower = 1;
        ps.maxEmitPower = 3;
        ps.updateSpeed = 0.02; // 0.005
        ps.start();
    },
    add_skybox: function() {
        var skybox = BABYLON.Mesh.CreateBox("skyBox", 110.0, scene);
        var skymat = new BABYLON.StandardMaterial("skyBox", scene);
        skymat.backFaceCulling = false;
        skymat.reflectionTexture = new BABYLON.Texture("../../assets/skybox.jpg", scene);
        skymat.reflectionTexture.coordinatesMode = BABYLON.Texture.FIXED_EQUIRECTANGULAR_MODE;
        skymat.disableLighting = true;
        skybox.infiniteDistance = true;
        skybox.material = skymat;
    },
    hexToRgb: function(hex) {
        console.log("hex", hex);
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.split(",")[0]);
        var info = result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {
            r: 0,
            g: 0,
            b: 0
        };
        info.a = 1;
        if (hex.split(",").length == 2) {
            if (hex.split(",")[1].length > 0) {
                info.a = Number(hex.split(",")[1]);
            }
        }
        return info;
    }
}




var deployment = {
    is_chrome_ext: null,
    is_oworld: null,
    is_localhost: null,
    is_dev: null,
    init: function() {
        this.is_chrome_ext = this.check_is_chrome_ext();
        this.is_oworld = this.check_is_oworld();
        this.is_localhost = window.location.hostname == "localhost";
        this.is_dev = this.check_is_dev();
    },
    check_is_chrome_ext: function() {
        // firefox / I.E. / etc...
        if (window.chrome == null) {
            return false;
        }
        if (window.chrome.extension == null) {
            return false;
        }
        return true;
    },
    check_is_oworld: function() {
        if (window.is_oworld == true) {
            return true;
        }
        return false;
    },
    check_is_dev: function() {
        if (this.is_chrome_ext == false) {
            return false;
        }
        if (chrome.runtime.id == config.chrx_id) {
            return false;
        }
        return true;
    }
}



var flyjump = {
	can_jump: false,
	jump_sess: 0,
	last_frame: 0,
	impulse_sess: 0,
	impulse_vec: null,
	init: function() {
		this.can_jump = false;
		this.last_frame = 0;
		this.jump_sess = 0;
		this.impulse_sess = 0;
		this.impulse_vec = null;
	},
	compute_loop: function() {
		if (stats.score - this.last_frame > 35) {
			var can_jump = false;
			var grav = gravity;
			function limit(x) {
				if (x < -1) x = -1;
				if (x > 1) x = 1;
				return x * 0.5;
			}
			var pointToIntersect = new BABYLON.Vector3(player.position.x + limit(grav.x), player.position.y + limit(grav.y), player.position.z + limit(grav.z));
			var pointToIntersect2 = new BABYLON.Vector3(player.position.x + 2*limit(grav.x), player.position.y + 2*limit(grav.y), player.position.z + 2*limit(grav.z));

			for (let platform of jumppads) {
				if (platform.intersectsPoint(pointToIntersect)) {
					can_jump = true;
					break;
				}
				if (platform.intersectsPoint(pointToIntersect2)) {
					can_jump = true;
					break;
				}
			}
			
			if (can_jump) {
				this.can_jump = can_jump;
				// amount of frames u can jump for, after exiting contact with platform.
				// this is due to human reaction time.
				this.jump_sess = 13;
			}
		}
	},
	render_loop: function() {
		if (this.jump_sess > 0) {
			this.jump_sess -= 1;
		} else {
			this.can_jump = false;
		}

		if (this.impulse_sess > 0) {
			player.physicsImpostor.setLinearVelocity(this.impulse_vec);
			this.impulse_sess -= 1;
		}
	},
	jump: function() {
		const maps_with_legacy_jump = ["jump_pads", "dodo_kong", "colosseum", "do_not_jump", "deadly_precision", "asteroid_belt", "technocracy"];
		if (maps_with_legacy_jump.indexOf(settings.map_id) >= 0) {
			this.legacy_jump();
			return;
		}

		if (this.can_jump) {
			this.last_frame = stats.score;
			this.can_jump = false;

			var ImpulseVector = gravity;
			ImpulseMagnitude = -1.4 * jumpHeight * 0.9;
			ImpulseVector = ImpulseVector.scale(ImpulseMagnitude);
			ImpulseVector.x += 9 * jumpSpeed * Math.sin(rotation - 3.14) * 0.24;
			ImpulseVector.z += 9 * jumpSpeed * Math.cos(rotation - 3.14) * 0.24;

			player.physicsImpostor.setLinearVelocity(ImpulseVector);
			this.impulse_sess = 5;
			this.impulse_vec = ImpulseVector;

		}
	},
	legacy_jump: function() {
		if (this.can_jump) {
			this.last_frame = stats.score;
			this.can_jump = false;

			player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));

			var ImpulseVector = gravity;
			ImpulseMagnitude = -1.4 * jumpHeight;
			ImpulseVector = ImpulseVector.scale(ImpulseMagnitude);
			ImpulseVector.x += 9 * jumpSpeed * Math.sin(rotation - 3.14);
			ImpulseVector.z += 9 * jumpSpeed * Math.cos(rotation - 3.14);
			player.physicsImpostor.applyImpulse(ImpulseVector, player.getAbsolutePosition());

			this.impulse_sess = 0;
			this.impulse_vec = ImpulseVector;

		}
	}
}




var fov = {
	radius: 1,
	y_offset: 2,
	mul1: 1,
	mul2: 1,
	init: function() {
		console.log("settings.fovLevel", settings.fovLevel)
		this.set_mul1(settings.fovLevel);
		this.apply();
	},
	set_mul1: function(option) {
		if (option == "x1") {
			this.mul1 = 0.8;
			this.radius = 1;
		} else if (option == "x2") {
			this.mul1 = 1.0;
			this.radius = 0.75;
		} else if (option == "x3") {
			this.mul1 = 1.4;
			this.radius = 0.5;
		}
		this.apply();
		
		// fov		0.8		1.4
		// y		2		1.2
		// r 		1		0.4
	},
	set_mul2: function(value) {
		this.mul2 = value;
		this.apply();
	},
	apply: function() {
		var intensity = this.mul1 * this.mul2;
		camera.fov = Math.min(intensity, 2.8);
		console.log("intensity", intensity);
		console.log("radius", this.radius);
		console.log("y_offset", this.y_offset);
	}
}





var guardian = {
	init: function() {
		if (deployment.is_chrome_ext == true) {
			chrome.runtime.setUninstallURL("https://forms.gle/jUFzghwpdr3NJWmN7"); // Maximum 255 characters.
		}
		if (deployment.is_dev == false) {
			document.addEventListener('contextmenu', event => event.preventDefault());
		}
	}
}










var leaderboard = {
	unique: "",
	init: function() {
		this.get_unique(function() {});

		$("#name_error").hide();

		sync.get("NAME", function(myname) {
			console.log("Got name", myname);
			$("#mem_name").val(myname);
		});

		$("#mem_name").on('change keyup paste', function() {
			let new_name = $("#mem_name").val().trim();
			console.log("new_name", new_name);
			if (leaderboard.check_valid_name(new_name)) {
				sync.set("NAME", new_name, function() {
					console.log("saved new_name", new_name);
					leaderboard.recompute();
				});
			}
		});
	},
	recompute: function() {

		var dodo_score = 0;
		var total_wins = 0;
		var maps_beaten = 0;
		var url_seq = "";

		var last_save = {};
		
		for (let cup_id in cup_info) {
			if (cup_id == "finder") {
				continue;
			}
			if (cup_id == "beginner") {
				continue;
			}
			
			let num_maps_in_cup = map_info[cup_id].length;
			for (let i=0;i<num_maps_in_cup;i++) {
				if (scorekeeper.cups[cup_id] == null) continue;
				var map = {
					...map_info[cup_id][i],
					...scorekeeper.cups[cup_id][i]
				}
				// reduce
				map.xp -= (scorekeeper.delta[map.id] || {xp:0})['xp'];
				if (map.xp == 0) continue;

				// update
				dodo_score += map.xp * map.diff;
				total_wins += map.xp;
				maps_beaten += 1;
				url_seq += `${map.id}=${map.xp}&${map.diff}&${map.time},`;

				// last save
				last_save[map.id] = map.xp;
			}
		};
		url_seq = url_seq.substring(0, url_seq.length - 1);

		url_seq += "@dds="+dodo_score;
		url_seq += ",beat="+maps_beaten;
		url_seq += ",nam=" + $("#mem_name").val().trim();
		url_seq += ",uni="+this.unique;
		
		if (deployment.is_chrome_ext) {
			url_seq += ",ver=" + chrome.runtime.getManifest().version;
		} else {
			url_seq += ",ver=" + "web";
		}

		var hash = btoa(url_seq);

		//
		var checksum = 0;
		for (var i=0;i<hash.length;i++) {
		    checksum += hash.charCodeAt(i) * i * String(i).charCodeAt(0);
		}
		function pad(num) {
		    return ("00"+num).substr(("00"+num).length - 2);
		}
		hash = String(pad(String(checksum).length)) + String(checksum) + hash;

		link = "https://onionfist.com/icesave#v3" + hash;
		// link = "http://localhost:5000/icesave#v3" + hash;
		$("#leaderboard_button").attr("href", link);

		
		function on_click_start() {
			sync.set("last_save", JSON.stringify(last_save), () => {});
		}

		$("#leaderboard_button").on("mousedown", on_click_start);
		$("#leaderboard_button").on("touchstart", on_click_start);
	},
	get_unique: function(callback) {
		sync.get("UNIQUE3", function(data) {
			// Get storage data
			if ((data !== undefined) && (data !== null)) {
				leaderboard.unique = data;
				callback();
			} else {
				leaderboard.unique = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()) * 99);
				sync.set("UNIQUE3", leaderboard.unique, callback);
			}
		});
	},
	set_record() {
		const map_id = settings.map_id;
		const new_score = stats.score;
		// map_score is the frame count upon completion.
		const save_as = map_id + "-tim";
		sync.get(save_as, function(curr_score) {
			if (curr_score) {} else {curr_score = INF};
			
			curr_score = Math.min(curr_score, (scorekeeper.delta[map_id] || {time: INF})['time'])

			if (Number(new_score) < Number(curr_score)) {
				sync.set(save_as, new_score, function() {
					if (curr_score < INF) {
						$("#speedrun_best").text("Your Previous Best Speedrun time: "+curr_score);
					}
					$("#speedrun_now").text("Your New Best Speedrun time: "+new_score );
				});
			} else {
				$("#speedrun_best").text("Your Best Speedrun time: "+curr_score);
				$("#speedrun_now").text("Your Recent Speedrun time: "+new_score );
			}
		});
		// TODO: scorekeeper recompute.
	},
	set_fps() {
		const map_id = settings.map_id;
		const new_fps = stats.fps;
		// map_score is the frame count upon completion.
		const save_as = map_id + "-fps";
		sync.set(save_as, new_fps, function() {
			console.log("Fps", map_id, new_fps);
		});
	},
	check_valid_name(name) {
		function char_check(data, accept) {
			const allowed_chars = accept.split("");
			const data_chars = data.split("");
			for (var i=0;i<data_chars.length;i++) {
				let data_char = data_chars[i];
				if ((allowed_chars.indexOf(data_char) >= 0) == false) {
					return false;
				}
			}
			return true;
		}
		function is_okay_name(data) {
			return char_check(data, "._ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
		}
		if (!is_okay_name(name)) {
			$("#name_error").show();
			$("#leaderboard_button").hide();
		} else {
			$("#name_error").hide();
			$("#leaderboard_button").show();
		}
		return is_okay_name(name);
	},
	speedrun_on_open_map() {
		$("#curr_time").html("");
		$("#best_time").html("");
		$("#speedrun_now").text("");
		$("#speedrun_best").text("");

		if (settings.map_id) {
			const key = settings.map_id + "-tim";
			sync.get(key, function(curr_highscore) {

				var highscore = INF;
				if (curr_highscore != null) highscore = curr_highscore;
				highscore = Math.min(highscore, (scorekeeper.delta[settings.map_id] || {time: INF})['time']);
				
				if (highscore < INF) {
					console.log("TRIGGERED");
					$("#best_time").html("BEST: " + highscore);
					$("#speedrun_best").text("Your Best Speedrun time: "+highscore);
				}
			});
		}
	}
}





var loader = {
	init: function () {
		return new Promise(resolve => {
            if (testing_mode.active == false) {
    			const map_id = settings.map_id;
                const map_src = "maps/" + map_id + ".js";
    			this.load_map(map_src, response => resolve(response));
            } else {
                const map_src = testing_mode.link;
                this.load_map(map_src, response => resolve(response));
            }
		});
	},
    load_map: function(map_js, callback) {
        this.loadScript(map_js, function() {
            setTimeout(function() {
                callback("done");
            }, 200);
        });
    },
    loadScript: function(url, callback) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onreadystatechange = callback;
        script.onload = callback;
        head.appendChild(script);
    }
}



var maker = {
    platform_count: 0,
    cone_count: 0,
    cylinder_count: 0,
    sphere_count: 0,
    ending_count: 0,
    plat1: null,
    plat2: null,
    plat3: null,
    init: function() {
        this.add_root_meshes("cone", 2, (i) => {
            return BABYLON.Mesh.CreateCylinder("cone"+i, 1.0, 0.0, 1.0, 5, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        });
        this.add_root_meshes("plat", 8, (i) => {
            return BABYLON.Mesh.CreateBox("plat"+i,1, scene);
        });
        this.add_root_meshes("sphere", 5, (i) => {
            return BABYLON.Mesh.CreateSphere("sphere"+i, 10, 1, scene);
        });
    },
    add_root_meshes: function(name, count, fn) {
        for (var i=0;i<count;i++) {
            this[name+i] = fn(i);
            decorations.decorate(this[name+i], name+i);
            this[name+i].isVisible = false;
            this[name+i].cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
        }  
    },
    make_platform: function(posList, rotList, sizList, imat=0, bounce=0, mass=0, friction=0.6, jump=false, air=false) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        let rX = rotList[1]; let rY = rotList[0]; let rZ = rotList[2];
        let sX = sizList[0]; let sY = sizList[1]; let sZ = sizList[2];
        pY += Math.random() * 0.0007;
        // Mesh
        let mesh_name = "P" + this.platform_count;
        var platform;

        function isNum(x) {
            return (isNaN(Math.round(x)) == false);
        }
        if (isNum(imat)) {
            imat = Math.round(imat);
            platform = (this["plat"+imat] || this["plat"+0]).createInstance(mesh_name);
            if (imat == -1) platform.isVisible = false;
        } else {
            platform = BABYLON.Mesh.CreateBox(mesh_name,1, scene);
            platform.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
            let color_obj = decorations.hexToRgb("#"+imat);
            console.log("color_obj", color_obj);
            platform.material = decorations.rgba_mat(color_obj.r, color_obj.g, color_obj.b, color_obj.a);
        }
        
        // Set
        platform.scaling = new BABYLON.Vector3(sX,sY,sZ);
        platform.position = new BABYLON.Vector3(pX,pY,pZ);
        platform.rotation = new BABYLON.Vector3(rX,rY,rZ);
        // platform.freezeWorldMatrix(); // Don't use:  ???
        // Physics
        if (air == false) {
            platform.physicsImpostor = new BABYLON.PhysicsImpostor(platform, BABYLON.PhysicsImpostor.BoxImpostor, { mass: mass, restitution: bounce, friction: friction}, scene);
        }
        // Tracker
        this.platform_count += 1;
        if (jump == true) {
            jumppads.push(platform);
        }
    },
    make_cone: function(posList, imat) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        // Mesh
        let mesh_name = "C" + this.cone_count;
        
        if ((imat == true) || (imat == false)) {
            imat = (imat == true) ? 1 : 0;
        }

        var cone;
        if (isNaN(Math.round(imat)) == false) {
            imat = Math.round(imat);
            cone = (this["cone"+imat] || this["cone"+0]).createInstance(mesh_name);
            if (imat == -1) cone.isVisible = false;
        } else {
            cone = BABYLON.Mesh.CreateCylinder(mesh_name, 1.0, 0.0, 1.0, 5, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
            cone.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
            let color_obj = decorations.hexToRgb("#"+imat);
            cone.material = decorations.rgba_mat(color_obj.r, color_obj.g, color_obj.b, color_obj.a);
        }
        
        // Set
        cone.position = new BABYLON.Vector3(pX,pY,pZ);
        cone.scaling.y = 1.2;
        cone.freezeWorldMatrix();
        // Tracker
        cones.push(cone);
        this.cone_count += 1;
    },
    make_sphere: function(posList, r, imat=0, bounce=0, mass=0, friction=0.6, air=false) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        // Mesh
        let mesh_name = "S" + this.sphere_count;
        var sphere;

        if (isNaN(Math.round(imat)) == false) {
            imat = Math.round(imat);
            sphere = (this["sphere"+imat] || this["sphere"+0]).createInstance(mesh_name);
            if (imat == -1) sphere.isVisible = false;
        } else {
            sphere = BABYLON.Mesh.CreateSphere(mesh_name, 10, 1, scene);
            sphere.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
            let color_obj = decorations.hexToRgb("#"+imat);
            sphere.material = decorations.rgba_mat(color_obj.r, color_obj.g, color_obj.b, color_obj.a);
        }
        // Set
        sphere.position = new BABYLON.Vector3(pX,pY,pZ);
        sphere.scaling = new BABYLON.Vector3(r,r,r);
        sphere.freezeWorldMatrix(); // // Don't use: ???
        // Physics
        if (air == false) {
            sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: mass, restitution: bounce, friction: friction }, scene);
        }
        // Tracker
        this.sphere_count += 1;
    },
    make_ending: function(posList) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        // Mesh
        let mesh_name = "E" + this.ending_count;
        var ending = BABYLON.Mesh.CreateCylinder(mesh_name, 2.0, 2.0, 2.0, 8, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        ending.position = new BABYLON.Vector3(pX, pY, pZ);
        // Visuals
        ending.material = decorations.materials.ending;
        ending.freezeWorldMatrix();
        // Physics
        endings.push(ending);
        this.ending_count += 1;
    },
    make_cylinder: function(posList, rotList, sizList, imat=0, bounce=0, mass=0, friction=0.6, air=false, topR=1) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        let rX = rotList[1]; let rY = rotList[0]; let rZ = rotList[2];
        let sX = sizList[0]; let sY = sizList[1]; let sZ = sizList[2];
        
        const height = 1;//sY;
        const radius = 1;//sZ;

        var mesh = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, height, radius * topR, radius, 12, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        mesh.scaling = new BABYLON.Vector3(sX,sY,sZ);
        mesh.position = new BABYLON.Vector3(pX,pY,pZ);
        mesh.rotation = new BABYLON.Vector3(rX,rY,rZ);
        
        if (air == false) {
            mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: mass, restitution: bounce, friction: friction }, scene);
        }
        
        
        if (isNaN(Math.round(imat)) == false) {
            imat = Math.round(imat);
            decorations.decorate(mesh, "cylinder"+imat);
        } else {
            let color_obj = decorations.hexToRgb("#"+imat);
            mesh.material = decorations.rgba_mat(color_obj.r, color_obj.g, color_obj.b, color_obj.a);
        }
        if (imat == -1) mesh.isVisible = false;
        this.cylinder_count += 1;
    },
    make_start: function(posList) {
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        this.make_platform([pX,pY,pZ+9], [0,0,0], [3,0.5, 14]);
    },
    og_tree: function(positionX, positionY, positionZ) {
        var greenTexture = decorations.materials.cylinder5;
        var brownTexture = decorations.materials.cylinder6;


        var cylinderXD = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, 0.65, 0.0, 3.3, 10, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        cylinderXD.position.z = (positionZ);
        cylinderXD.position.x = (positionX * -1);
        cylinderXD.position.y = (positionY + 1);
        cylinderXD.physicsImpostor = new BABYLON.PhysicsImpostor(cylinderXD, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, scene);
        cylinderXD.material = greenTexture;
        this.cylinder_count += 1;

        var cylinderXD2 = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, 1.65, 0.3, 0.3, 10, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        cylinderXD2.position.z = (positionZ);
        cylinderXD2.position.x = (positionX * -1);
        cylinderXD2.position.y = (positionY);
        cylinderXD2.physicsImpostor = new BABYLON.PhysicsImpostor(cylinderXD2, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, scene);
        cylinderXD2.material = brownTexture;

        this.cylinder_count += 1;
    },
    og_cone: function(positionY, positionZ, positionX) {
        var fireTexture = decorations.materials.cylinder4;
        var cylinder = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, 0.45, 0.0, 0.45, 10, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        cylinder.position.z = (positionZ);
        cylinder.position.x = (positionX);
        cylinder.position.y = (positionY);
        cylinder.physicsImpostor = new BABYLON.PhysicsImpostor(cylinder, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, scene);
        cylinder.material = fireTexture;

        this.cylinder_count += 1;
    },
    og_cylinder(positionX, positionY, positionZ, rotationY, rotationX, rotationZ, rad, hei) {
        var cylinderXD = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, hei, rad, rad, 12, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        cylinderXD.position.z = (positionZ);
        cylinderXD.position.x = (positionX * -1);
        cylinderXD.position.y = (positionY);
        cylinderXD.physicsImpostor = new BABYLON.PhysicsImpostor(cylinderXD, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, scene);
        cylinderXD.material = decorations.materials.cylinder1;
        cylinderXD.rotation.x = (rotationX * (Math.PI / 180)); // complete
        cylinderXD.rotation.y = (rotationY * (Math.PI / 180)); // complete
        cylinderXD.rotation.z = (rotationZ * (Math.PI / 180)); // complete
        
        this.cylinder_count += 1;
    }

}





var map_info = {
    beginner: [{
        name: "Welcome Map",
        id: "tut1",
        diff: 1
    }, {
        name: "Lucid Dreams",
        id: "lucid_dreams",
        diff: 1
    }, {
        name: "Slow Walk",
        id: "slow_walk",
        diff: 1
    }, {
        name: "Ice Cold",
        id: "ice_cold",
        diff: 2
    }, {
        name: "Heights",
        id: "heights",
        diff: 2
    }, {
        name: "Snowboarder",
        id: "ice2",
        diff: 2
    }, {
        'name': 'Tilted Tracks',
        'id': 'tilted_tracks',
        'diff': '2'
    }, {
        'name': 'Spook',
        'id': 'spook',
        'diff': '3'
    }, {
        name: "Megafauna",
        id: "megafauna",
        diff: 3
    }, {
        name: "Easy Drifting",
        id: "easydrifting",
        diff: 3
    }, {
        name: "Dodo Type Beat",
        id: "dodo_type_beat",
        diff: 3
    }, {
        name: "Atmosphere",
        id: "atmosphere",
        diff: 3
    }, {
        name: "Scorpion",
        id: "scorpion",
        diff: 3
    }, {
        'name': 'Think Fast',
        'id': 'think_fast',
        'diff': '3'
    }, {
        name: "Blizzard",
        id: "blizzard",
        diff: 3
    }, {
        name: "Topsy Turvy",
        id: "topsy_turvy",
        diff: 3
    }, {
        'name': 'Fade',
        'id': 'fade',
        'diff': '4'
    }, {
        name: "Blink Street",
        id: "blink_street",
        diff: 4
    }, {
        name: "Aurora",
        id: "aurora",
        diff: 4
    }, {
        name: "Motor",
        id: "motor",
        diff: 4
    }, {
        name: "Conveyor",
        id: "conveyor",
        diff: 4
    }, {
        name: "Frost Factory",
        id: "frost_factory",
        diff: 4
    }, {
        name: "Glass Staircase",
        id: "glass_staircase",
        diff: 4
    }, {
        name: "River",
        id: "river",
        diff: 5
    }, {
        'name': 'Hyperdrive',
        'id': 'hyperdrive',
        'diff': '5'
    }, {
        name: "Coney Cliffs",
        id: "coneycliffs",
        diff: 5
    }, {
        name: "Tenet",
        id: "tenet",
        diff: 5
    }, {
        name: "4D Demon Cinema",
        id: "cone1",
        diff: 6
    }, {
        'name': 'Sector 8',
        'id': 'sector_8',
        'diff': '6'
    }, {
        name: "Snowmen Land",
        id: "snowmen_land",
        diff: 6
    }, {
        'name': 'Spin Dodge',
        'id': 'spin_dodge',
        'diff': '6'
    }, {
        name: "Cloud",
        id: "og7",
        diff: 6 //3
    }, {
        'name': 'Colour Land',
        'id': 'colour_land',
        'diff': '6'
    }, {
        name: "Transcendence",
        id: "transcendence",
        diff: 6
    }, {
        name: "Spitting Spikes",
        id: "spitting_spikes",
        diff: 7
    }, {
        name: "Tremor",
        id: "tremor",
        diff: 7
    }, {
        'name': 'Dodo Kong',
        'id': 'dodo_kong',
        'diff': '7'
    }, {
        name: "Space Canyon",
        id: "spacecanyon",
        diff: 8
    }],
    kazil: [{
        name: "Trek",
        id: "trek",
        diff: 1
    }, {
        name: "Scorpion",
        id: "scorpion",
        diff: 3
    }, {
        name: "Trailblazer",
        id: "trailblazer",
        diff: 3
    }, {
        name: "Easy Drifting",
        id: "easydrifting",
        diff: 3
    }, {
        name: "Secret Tunnel",
        id: "secrettunnel",
        diff: 3
    }, {
        name: "Snake Climb",
        id: "snake_climb",
        diff: 4
    }, {
        name: "Moving Road",
        id: "moving_road",
        diff: 5
    }, {
        name: "Sky Run",
        id: "sky_run",
        diff: 5
    }, {
        name: "Race",
        id: "race",
        diff: 5
    }, {
        name: "Observatory",
        id: "observatory",
        diff: 6
    }, {
        name: "Cross Path",
        id: "crosspath",
        diff: 6
    }, {
        name: "Apartment",
        id: "apartment",
        diff: 6
    }, {
        name: ".0001",
        id: "0001",
        diff: 10
    }],
    carrot: [{
        name: "Lanterns",
        id: "lanterns",
        diff: 1
    }, {
        name: "Megafauna",
        id: "megafauna",
        diff: 3
    }, {
        name: "Dodo Type Beat",
        id: "dodo_type_beat",
        diff: 3
    }, {
        name: "Mirror",
        id: "mirror",
        diff: 3
    }, {
        name: "remote control",
        id: "remote_control",
        diff: 3
    }, {
        name: "Blink Street",
        id: "blink_street",
        diff: 4
    }, {
        'name': 'Asteroid Belt',
        'id': 'asteroid_belt',
        'diff': '4'
    }, {
        name: "Red Lights Green Lights",
        id: "redlights",
        diff: 5
    }, {
        name: "Conefield",
        id: "conefield",
        diff: 5
    }, {
        'name': 'Necropolis',
        'id': 'necropolis',
        'diff': '5'
    }, {
        name: "Solar System",
        id: "solar_system",
        diff: 5
    }, {
        name: "Trial by Magic",
        id: "trial_by_magic",
        diff: 5
    }, {
        name: "Celestial Magnetism",
        id: "celestial_magnetism",
        diff: 5
    }, {
        name: "Snowmen Land",
        id: "snowmen_land",
        diff: 6
    }, {
        name: "Snowmenace",
        id: "snowmenace",
        diff: 6
    }, {
        name: "Project Stardust",
        id: "stardust",
        diff: 6
    }, {
        name: "Climbing Dodo Fortress",
        id: "climbing_dodo_fortress",
        diff: 6
    }, {
        name: "Prison is 2D",
        id: "prison_is_2d",
        diff: 7
    }, {
        name: "Revolving Cube Floats",
        id: "revolving_cube_floats",
        diff: 8
    }, {
        'name': 'Utopia is Up There',
        'id': 'utopia_is_up_there',
        'diff': '8'
    }, {
        name: "Space Canyon",
        id: "spacecanyon",
        diff: 8
    }],
    dodo: [{
        name: "Welcome Map",
        id: "tut1",
        diff: 1
    }, {
        name: "Castle",
        id: "castle",
        diff: 2
    }, {
        name: "Icy Path",
        id: "ice1",
        diff: 2
    }, {
        name: "Snowboarder",
        id: "ice2",
        diff: 2
    }, {
        name: "Ravine",
        id: "ravine",
        diff: 2
    }, {
        name: "Motor",
        id: "motor",
        diff: 4
    }, {
        name: "Floating Fortress",
        id: "floating_fortress",
        diff: 4
    }, {
        name: "The Red Hats",
        id: "cone2",
        diff: 5
    }, {
        name: "Dangerous Zone",
        id: "cone3",
        diff: 5
    }, {
        name: "Tenet",
        id: "tenet",
        diff: 5
    }, {
        name: "4D Demon Cinema",
        id: "cone1",
        diff: 6
    }, {
        name: "Inverted Playground",
        id: "inverted_playground",
        diff: 8
    }],
    doom: [{
        name: "Slow Walk",
        id: "slow_walk",
        diff: 1
    }, {
        name: "EZ Map",
        id: "ez_map",
        diff: 2
    }, {
        name: "Gradual Climb",
        id: "gradual_climb",
        diff: 2
    }, {
        name: "Speed Jump",
        id: "speed_jump",
        diff: 3
    }, {
        name: "Wall of Force",
        id: "wall_of_force",
        diff: 3
    }, {
        name: "Dragon Domain",
        id: "dragon_domain",
        diff: 4
    }, {
        name: "Invisible Road",
        id: "invisible_road",
        diff: 4
    }, {
        name: "Volcano",
        id: "volcano",
        diff: 5
    }, {
        name: "Bad Advice",
        id: "bad_advice",
        diff: 5
    }, {
        name: "Cone-Elevator",
        id: "cone_elevator",
        diff: 5
    }, {
        name: "1c3d0d0",
        id: "1c3d0d0",
        diff: 6
    }, {
        name: "U Turn",
        id: "u_turn2",
        diff: 6
    }, {
        name: "Sea of Fire",
        id: "sea_of_fire",
        diff: 7
    }, {
        name: "Into the Sky",
        id: "into_the_sky",
        diff: 7
    }, {
        name: "Tube elevator",
        id: "tube_elevator",
        diff: 7
    }, {
        name: "Troll Track",
        id: "troll_track",
        diff: 8
    }, {
        name: "Skilledorkilled",
        id: "skilledorkilled",
        diff: 8
    }, {
        name: "Absolute Zero",
        id: "absolute_zero",
        diff: 10
    }],
    pilot: [        {
        'name': 'Bounce',
        'id': 'bounce',
        'diff': '1'
    }, {
        'name': 'Coaster',
        'id': 'coaster',
        'diff': '1'
    }, {
        'name': 'Trust',
        'id': 'trust',
        'diff': '2'
    }, {
        'name': 'Going Through',
        'id': 'going_through',
        'diff': '2'
    }, {
        'name': 'Bottom To Top',
        'id': 'bottom_to_top',
        'diff': '2'
    }, {
        'name': 'Bumper',
        'id': 'bumper',
        'diff': '2'
    }, {
        'name': 'Crazy Cones',
        'id': 'crazy_cones',
        'diff': '2'
    }, {
        'name': 'Gravity Bounce',
        'id': 'gravity_bounce',
        'diff': '3'
    }, {
        'name': 'Launch',
        'id': 'launch',
        'diff': '3'
    }, {
        'name': 'Soaring',
        'id': 'soaring',
        'diff': '3'
    }, {
        'name': 'First Person',
        'id': 'first_person',
        'diff': '3'
    }, {
        'name': 'Holographic',
        'id': 'holographic',
        'diff': '3'
    }, {
        'name': 'Think Fast',
        'id': 'think_fast',
        'diff': '3'
    }, {
        'name': 'Jump Path',
        'id': 'jump_path',
        'diff': '3'
    }, {
        'name': 'Bridge Of Speed',
        'id': 'bridge_of_speed',
        'diff': '3'
    }, {
        'name': 'Mixed Leaps',
        'id': 'mixed_leaps',
        'diff': '3'
    }, {
        'name': 'Moving Bridge',
        'id': 'moving_bridge',
        'diff': '3'
    }, {
        'name': 'Reversed Jumping',
        'id': 'reversed_jumping',
        'diff': '4'
    }, {
        'name': 'Green Gravity',
        'id': 'green_gravity',
        'diff': '4'
    }, {
        'name': 'Nothing is Easy',
        'id': 'nothing_is_easy',
        'diff': '4'
    }],
    rocky: [{
        name: "Ice Bot",
        id: "ice_bot",
        diff: 0
    }, {
        name: "Hello World",
        id: "hello_world",
        diff: 1
    }, {
        name: "Glass Walkway",
        id: "glass_walkway",
        diff: 1
    }, {
        name: "Temple",
        id: "temple",
        diff: 1
    }, {
        'name': 'Jump Pads',
        'id': 'jump_pads',
        'diff': '1'
    }, {
        'name': 'Triskaidekaphobia',
        'id': 'triskaidekaphobia',
        'diff': '2'
    }, {
        name: "Gearbox",
        id: "gearbox",
        diff: 2
    }, {
        'name': 'Rooftops',
        'id': 'rooftops',
        'diff': '2'
    }, {
        name: "Neo",
        id: "neo",
        diff: 2
    }, {
        name: "Pool",
        id: "pool",
        diff: 2
    }, {
        'name': 'Parke',
        'id': 'parke',
        'diff': '2'
    }, {
        'name': 'Hide and Seek',
        'id': 'hide_and_seek',
        'diff': '2'
    }, {
        name: "Basic Training",
        id: "basic_training",
        diff: 2
    }, {
        'name': 'Tilted Tracks',
        'id': 'tilted_tracks',
        'diff': '2'
    }, {
        name: "Advanced Training",
        id: "advanced_training",
        diff: 3
    }, {
        'name': 'Pyrovision',
        'id': 'pyrovision',
        'diff': '3'
    }, {
        'name': 'Asteroids',
        'id': 'asteroids',
        'diff': '3'
    }, {
        name: "Automatic and Manual",
        id: "automatic_and_manual",
        diff: 3
    }, {
        'name': 'Barn',
        'id': 'barn',
        'diff': 3
    }, {
        name: "Pathway",
        id: "pathway",
        diff: 3
    }, {
        'name': 'Blindness',
        'id': 'blindness',
        'diff': '3'
    }, {
        'name': 'Desserts',
        'id': 'desserts',
        'diff': '3'
    }, {
        'name': 'Spook',
        'id': 'spook',
        'diff': '3'
    }, {
        name: "Cone Haven",
        id: "cone_haven",
        diff: 4
    }, {
        'name': 'Shrink Ray',
        'id': 'shrink_ray',
        'diff': '4'
    }, {
        'name': 'Pac Dodo',
        'id': 'pac_dodo',
        'diff': '4'
    }, {
        name: "Rotating Spirals",
        id: "rotating_spirals",
        diff: 4
    }, {
        'name': 'Memory Game',
        'id': 'memory_game',
        'diff': '4'
    }, {
        'name': 'Colosseum',
        'id': 'colosseum',
        'diff': '4'
    }, {
        name: "Wipeout",
        id: "wipeout",
        diff: 4
    }, {
        'name': 'Icerace',
        'id': 'icerace',
        'diff': '4'
    }, {
        name: "Minecarts",
        id: "minecarts",
        diff: 5
    }, {
        'name': 'Thero',
        'id': 'thero',
        'diff': '5'
    }, {
        'name': 'Troll Map',
        'id': 'troll_map',
        'diff': '5'
    }, {
        'name': 'Point Of No Return',
        'id': 'point_of_no_return',
        'diff': '5'
    }, {
        name: "Skating",
        id: "skating",
        diff: 5
    }, {
        name: "Papercut",
        id: "papercut",
        diff: 5
    }, {
        name: "Tight Path",
        id: "tight_path",
        diff: 6
    }, {
        name: "Chase",
        id: "chase",
        diff: 6
    }, {
        name: "Gravity Chamber",
        id: "gravity_chamber",
        diff: 6
    }, {
        name: "Sinking Ship",
        id: "sinking_ship",
        diff: 7
    }, {
        name: "Intense Training",
        id: "intense_training",
        diff: 7
    }, {
        'name': 'Weaving',
        'id': 'weaving',
        'diff': '8'
    }, {
        name: "Rhythm",
        id: "rhythm",
        diff: 8
    }, {
        'name': 'Dragon Dance',
        'id': 'dragon_dance',
        'diff': '9'
    }, {
        'name': 'Wall Riders',
        'id': 'wall_riders',
        'diff': '10'
    }, {
        name: "Mayhem",
        id: "mayhem",
        diff: 11
    }],
    furby: [{
        name: "The Sloth",
        id: "the_sloth",
        diff: 2
    }, {
        name: "Ice Cold",
        id: "ice_cold",
        diff: 2
    }, {
        'name': 'King of the Clouds',
        'id': 'king_of_the_clouds',
        'diff': '2'
    }, {
        name: "Geometrical",
        id: "geometrical",
        diff: 2
    }, {
        name: "Invisible Maze",
        id: "invisible_maze",
        diff: 3
    }, {
        name: "Trapped Temple",
        id: "trapped_temple",
        diff: 4
    }, {
        name: "Glass Staircase",
        id: "glass_staircase",
        diff: 4
    }, {
        name: "Micrododo",
        id: "micrododo",
        diff: 4
    }, {
        name: "Super Dodo Bros",
        id: "super_dodo_bros",
        diff: 4
    }, {
        name: "The Cheetah",
        id: "the_cheetah",
        diff: 5
    }, {
        name: "Haunted Ruins",
        id: "haunted_ruins",
        diff: 5
    }, {
        name: "Cutting Corners",
        id: "cutting_corners",
        diff: 6
    }, {
        name: "NASCAR",
        id: "nascar",
        diff: 6
    }, {
        name: "Ninja Warrior",
        id: "ninja_warrior",
        diff: 6
    }, {
        name: "Spitting Spikes",
        id: "spitting_spikes",
        diff: 7
    }, {
        name: "Chichen Itza",
        id: "chichen_itza",
        diff: 7
    },  {        
        name: "Balance Beam",
        id: "balance_beam",
        diff: 8
    }],
    skilled: [{
        name: "Alley",
        id: "alley",
        diff: 1
    }, {
        name: "Train",
        id: "train",
        diff: 4
    }, {
        name: "Rotating Blades",
        id: "rotating_blades",
        diff: 4
    }, {
        name: "Acceleration and Brakes",
        id: "acceleration_and_brakes",
        diff: 5
    }, {
        name: "Broken Bridge",
        id: "broken_bridge",
        diff: 5
    }, {
        name: "Sharp turning",
        id: "sharp_turning",
        diff: 5
    }, {
        name: "Flipside",
        id: "flipside",
        diff: 5
    }, {
        'name': 'Flame',
        'id': 'flame',
        'diff': '5'
    }, {
        'name': 'Lightning',
        'id': 'lightning',
        'diff': '6'
    }, {
        name: "Moving Blocks",
        id: "moving_blocks",
        diff: 6
    }, {
        name: "Blind Spot",
        id: "blind_spot",
        diff: 6
    }, {
        name: "Teleport",
        id: "teleport",
        diff: 6
    }, {
        name: "Parkour",
        id: "parkour",
        diff: 6
    }, {
        name: "Transcendence",
        id: "transcendence",
        diff: 6
    }, {
        name: "Skiing",
        id: "skiing",
        diff: 6
    }, {
        name: "Bridge of Peril",
        id: "bridge_of_peril",
        diff: 7
    }, {
        name: "Maze",
        id: "maze",
        diff: 7
    }, {
        'name': 'Racetrack',
        'id': 'racetrack',
        'diff': 7
    }, {
        name: "Encirclement",
        id: "encirclement",
        diff: 8
    }, {
        name: "Phase shift",
        id: "phase_shift",
        diff: 9
    }],
    tim: [{
        name: "ffffff",
        id: "ffffff",
        diff: 2
    }, {
        name: "Pantheon",
        id: "pantheon",
        diff: 2
    }, {
        'name': 'Dreamscapes',
        'id': 'dreamscapes',
        'diff': '3'
    }, {
        name: "Badlands",
        id: "badlands",
        diff: 3
    }, {
        name: "Reaction",
        id: "reaction",
        diff: 4
    }, {
        name: "Block Flight",
        id: "block_flight",
        diff: 4
    }, {
        'name': 'Industrial',
        'id': 'industrial',
        'diff': '4'
    }, {
        name: "Firefrost",
        id: "firefrost",
        diff: 4
    }, {
        'name': 'Falling Game',
        'id': 'falling_game',
        'diff': '5'
    }, {
        name: "Reversed Road",
        id: "reversed_road",
        diff: 6
    }, {
        name: "Moonrunner",
        id: "moonrunner",
        diff: 6
    }, {
        name: "Power Rooms",
        id: "power_rooms",
        diff: 7
    }, {
        name: "Finger breaker",
        id: "finger_breaker",
        diff: 9
    }],
    mango: [{
        name: "Heights",
        id: "heights",
        diff: 2
    }, {
        name: "Ring of Fire",
        id: "ring_of_fire",
        diff: 2
    },  {
        'name': 'Chemistry',
        'id': 'chemistry',
        'diff': '2'
    }, {
        name: "Up And Down",
        id: "up_and_down",
        diff: 3
    }, {
        'name': 'Doors of Doom',
        'id': 'doors_of_doom',
        'diff': '3'
    }, {
        name: "Winding Path",
        id: "windingpath",
        diff: 4
    }, {
        'name': 'Tumbles and Turns',
        'id': 'tumbles_and_turns',
        'diff': '4'
    }, {
        'name': 'Archipelago',
        'id': 'archipelago',
        'diff': '5'
    }, {
        'name': 'Dodo on ice',
        'id': 'dodo_on_ice',
        'diff': '5'
    }, {
        'name': 'Leaps in the Limelight',
        'id': 'leaps_in_the_limelight',
        'diff': '5'
    }, {
        'name': 'Tile Jump',
        'id': 'tile_jump',
        'diff': '5'
    }, {
        'name': 'Patterns',
        'id': 'patterns',
        'diff': '5'
    }, {
        name: "Skinny Road",
        id: "skinny_road",
        diff: 5
    }, {
        'name': 'Spiral',
        'id': 'spiral',
        'diff': '6'
    }, {
        name: "Cones and Chaos",
        id: "cones_and_chaos",
        diff: 6
    }, {
        'name': 'Obstacle Lane',
        'id': 'obstacle_lane',
        'diff': '6'
    }, {
        'name': 'Dodo tiles',
        'id': 'dodo_tiles',
        'diff': '6'
    }, {
        'name': 'Coral Reef',
        'id': 'coral_reef',
        'diff': '7'
    }, {
        'name': 'Anguished',
        'id': 'anguished',
        'diff': '7'
    }, {
        'name': 'Spacewalk',
        'id': 'spacewalk',
        'diff': '7'
    }, {
        'name': 'Ascend',
        'id': 'ascend',
        'diff': '8'
    }],
    sleepy: [{
        'name': 'Centipede',
        'id': 'centipede',
        'diff': 2
    }, {
        name: "Atmosphere",
        id: "atmosphere",
        diff: 3
    }, {
        'name': 'Agency',
        'id': 'agency',
        'diff': '3'
    }, {
        name: "Outside the Box",
        id: "outside_the_box",
        diff: 3
    }, {
        'name': 'Across Lava',
        'id': 'across_lava',
        'diff': '4'
    }, {
        name: "Transported",
        id: "transported",
        diff: 4
    }, {
        'name': 'Dodo Eat Ice',
        'id': 'dodo_eat_ice',
        'diff': '4'
    }, {
        'name': 'Climbing Training',
        'id': 'climbing_training',
        'diff': '4'
    }, {
        'name': 'SpaceTrail',
        'id': 'spacetrail',
        'diff': '4'
    }, {
        name: "Roundabout",
        id: "roundabout",
        diff: 5
    }, {
        'name': 'Fire and Water',
        'id': 'fire_and_water',
        'diff': '5'
    }, {
        'name': 'Heist',
        'id': 'heist',
        'diff': '6'
    }, {
        'name': 'Spin Dodge',
        'id': 'spin_dodge',
        'diff': '6'
    }, {
        'name': 'Cone Maze',
        'id': 'cone_maze',
        'diff': '6'
    }, {
        name: "Forest",
        id: "forest",
        diff: 7
    }, {
        'name': 'Heaven and Hell',
        'id': 'heaven_and_hell',
        'diff': '7'
    }, {
        name: "China Grove",
        id: "china_grove",
        diff: 8
    }],
    crazy: [{
        'name': 'Shortcuts',
        'id': 'shortcuts',
        'diff': '2'
    }, {
        'name': 'Odd One Out',
        'id': 'odd_one_out',
        'diff': '2'
    }, {
        'name': 'Glitchy Dodo',
        'id': 'glitchy_dodo',
        'diff': '3'
    }, {
        name: "Cone Cylinder",
        id: "cone_cylinder",
        diff: 3
    }, {
        'name': 'Spaceshot',
        'id': 'spaceshot',
        'diff': '3'
    }, {
        'name': 'Playground',
        'id': 'playground',
        'diff': '3'
    }, {
        'name': 'Through the Hole',
        'id': 'through_the_hole',
        'diff': '3'
    }, {
        'name': 'Rainbow',
        'id': 'rainbow',
        'diff': '4'
    }, {
        name: "In a Machine",
        id: "in_a_machine",
        diff: 4
    }, {
        name: "A Dangerous Climb",
        id: "a_dangerous_climb",
        diff: 4
    }, {
        name: "Follow the Path",
        id: "follow_the_path",
        diff: 4
    }, {
        'name': 'Restart',
        'id': 'restart',
        'diff': '4'
    }, {
        'name': 'Hyperdrive',
        'id': 'hyperdrive',
        'diff': '5'
    }, {
        'name': 'There Is No Map',
        'id': 'there_is_no_map',
        'diff': '5'
    }, {
        'name': 'Rainbow Cliffs',
        'id': 'rainbow_cliffs',
        'diff': '5'
    }, {
        'name': 'Colour Land',
        'id': 'colour_land',
        'diff': '6'
    }, {
        'name': 'There Is a Map',
        'id': 'there_is_a_map',
        'diff': '6'
    }, {
        'name': 'Burning Bridge',
        'id': 'burning_bridge',
        'diff': '6'
    }, {
        'name': 'Dodo Nullius',
        'id': 'dodo_nullius',
        'diff': '7'
    }, {
        'name': 'Waterpark',
        'id': 'waterpark',
        'diff': '7'
    }, {
        'name': 'Skill Trail',
        'id': 'skill_trail',
        'diff': '9'
    }],
    squirrel: [{
        'name': 'Bored',
        'id': 'bored',
        'diff': 2
    }, {
        'name': 'TrainTrouble',
        'id': 'traintrouble',
        'diff': '2'
    }, {
        'name': 'Do Not Jump',
        'id': 'do_not_jump',
        'diff': '3'
    }, {
        name: "Prototype",
        id: "prototype",
        diff: 4
    }, {
        'name': 'The Dodo Escape',
        'id': 'the_dodo_escape',
        'diff': '4'
    }, {
        'name': 'Dodo Rex',
        'id': 'dodo_rex',
        'diff': '4'
    }, {
        'name': 'The Log',
        'id': 'the_log',
        'diff': '4'
    }, {
        'name': 'Relics',
        'id': 'relics',
        'diff': '4'
    }, {
        name: "Ice Cocos",
        id: "ice_cocos",
        diff: 5
    }, {
        'name': 'Cylinder Insanity',
        'id': 'cylinder_insanity',
        'diff': '5'
    }, {
        'name': 'Overflow',
        'id': 'overflow',
        'diff': '5'
    }, {
        name: "Coney Cliffs",
        id: "coneycliffs",
        diff: 5
    }, {
        name: "Space Test",
        id: "spacetest",
        diff: 5
    }, {
        name: "Cross Gravity",
        id: "crossgravity",
        diff: 5
    }, {
        'name': "Dodo's Adventure",
        'id': 'dodo_a',
        'diff': '6'
    }, {
        name: "Avalanche",
        id: "avalanche",
        diff: 6
    }, {
        'name': 'Anarchy',
        'id': 'anarchy',
        'diff': '6'
    }, {
        'name': 'Space Track',
        'id': 'space_track',
        'diff': '7'
    }, {
        'name': 'Dodo Tower',
        'id': 'dodo_tower',
        'diff': '7'
    }, {
        'name': 'Dodo Dash',
        'id': 'dodo_dash',
        'diff': '7'
    }],
    june: [{
        name: "Tracks",
        id: "tracks",
        diff: 2
    }, {
        'name': 'Colourful Doors',
        'id': 'colourful_doors',
        'diff': '2'
    }, {
        'name': 'Pride',
        'id': 'pride',
        'diff': '2'
    }, {
        name: "Hills",
        id: "hills",
        diff: 3
    }, {
        'name': 'Jumping Challenge',
        'id': 'jumping_challenge',
        'diff': '3'
    }, {
        name: "Ready Player 1",
        id: "ready_player_1",
        diff: 4
    }, {
        'name': 'Spiky Peaks',
        'id': 'spiky_peaks',
        'diff': '4'
    }, {
        'name': 'Hop Hop',
        'id': 'hop_hop',
        'diff': '4'
    }, {
        'name': 'Tilty Blocks',
        'id': 'tilty_blocks',
        'diff': '4'
    }, {
        name: "Dodge",
        id: "dodge",
        diff: 4
    }, {
        name: "Twisted Road",
        id: "twistedroad",
        diff: 5
    }, {
        'name': 'Speed Round',
        'id': 'speed_round',
        'diff': '5'
    }, {
        name: "Speedway",
        id: "speedway",
        diff: 6
    }, {
        'name': 'The Cone Road',
        'id': 'the_cone_road',
        'diff': '6'
    }, {
        name: "Dual Path",
        id: "dual_path",
        diff: 6
    }, {
        'name': 'Summit',
        'id': 'summit',
        'diff': '6'
    }],
    collab: [{
        'name': 'Easter',
        'id': 'easter',
        'diff': '1'
    }, {
        'name': 'Steep Walls',
        'id': 'steep_walls',
        'diff': '2'
    }, {
        name: "Tightrope",
        id: "tightrope",
        diff: 3
    }, {
        name: "Slides",
        id: "slides",
        diff: 3
    }, {
        'name': 'Darkest Depths',
        'id': 'darkest_depths',
        'diff': '3'
    }, {
        name: "Conveyor",
        id: "conveyor",
        diff: 4
    }, {
        'name': 'Bullseye',
        'id': 'bullseye',
        'diff': '4'
    }, {
        name: "Cosmos Cruise",
        id: "cosmos_cruise",
        diff: 4
    }, {
        'name': 'Lily Lotus Lake',
        'id': 'lily_lotus_lake',
        'diff': '4'
    }, {
        name: "Snake",
        id: "snake",
        diff: 4
    }, {
        'name': 'Track together',
        'id': 'track_together',
        'diff': '4'
    }, {
        name: "Cliffhanger",
        id: "cliffhanger",
        diff: 5
    }, {
        'name': 'Romantic Turnaround',
        'id': 'romantic_turnaround',
        'diff': '5'
    }, {
        'name': 'Dual Colors',
        'id': 'dual_colors',
        'diff': '5'
    }, {
        'name': 'Booby Traps',
        'id': 'booby_traps',
        'diff': '5'
    }, {
        'name': 'Plane Crash',
        'id': 'plane_crash',
        'diff': '5'
    }, {
        'name': 'Burst',
        'id': 'burst',
        'diff': '5'
    }, {
        name: "Rocky Road",
        id: "rocky_road",
        diff: 6
    }, {
        'name': '50 Jumps',
        'id': '50_jumps',
        'diff': '6'
    }, {
        'name': 'Milk Flood',
        'id': 'milk_flood',
        'diff': '6'
    }, {
        name: "Ambush",
        id: "ambush",
        diff: 7
    }, {
        'name': 'Danger Dragon',
        'id': 'danger_dragon',
        'diff': '7'
    }, {
        name: "Circuit",
        id: "circuit",
        diff: 8
    }, {
        name: "Rage Fuel",
        id: "rage_fuel",
        diff: 9
    }, {
        name: "shuriken",
        id: "shuriken",
        diff: 9
    }, {
        'name': 'Megacollab',
        'id': 'megacollab',
        'diff': '9'
    }],
    ye: [{
        name: "Flip Turn",
        id: "flip_turn",
        diff: 1
    }, {
        'name': 'Arithmetic',
        'id': 'arithmetic',
        'diff': '2'
    }, {
        'name': 'Through the Block',
        'id': 'through_the_block',
        'diff': '2'
    }, {
        name: "Holes and Cracks",
        id: "holes_and_cracks",
        diff: 2
    }, {
        'name': 'Jetty',
        'id': 'jetty',
        'diff': '2'
    }, {
        'name': 'The Golden Brick',
        'id': 'the_golden_brick',
        'diff': '2'
    }, {
        'name': 'Earthquake',
        'id': 'earthquake',
        'diff': '3'
    }, {
        'name': 'Shapes',
        'id': 'shapes',
        'diff': '3'
    }, {
        name: "Super Dodo Lane",
        id: "super_dodo_lane",
        diff: 3
    }, {
        name: "Topsy Turvy",
        id: "topsy_turvy",
        diff: 3
    }, {
        'name': 'Messiness',
        'id': 'messiness',
        'diff': '4'
    }, {
        'name': 'Fade',
        'id': 'fade',
        'diff': '4'
    }, {
        'name': 'Plot Twist',
        'id': 'plot_twist',
        'diff': '4'
    }, {
        'name': 'Ambiguity',
        'id': 'ambiguity',
        'diff': '5'
    }, {
        name: "Left and Right",
        id: "left_and_right",
        diff: 5
    }, {
        'name': 'Deadly Precision',
        'id': 'deadly_precision',
        'diff': '6'
    }, {
        'name': 'Triple Troll',
        'id': 'triple_troll',
        'diff': 6,
    }],
    og: [{
        name: "Beginners Map",
        id: "og1",
        diff: 1 //1
    }, {
        name: "Challenge",
        id: "og2",
        diff: 3 //2
    }, {
        name: "Cones",
        id: "og3",
        diff: 4 //3
    }, {
        name: "Special Map",
        id: "og4",
        diff: 3 //2
    }, {
        name: "Cake",
        id: "og5",
        diff: 5 //2
    }, {
        name: "Impossible Christmas Map",
        id: "og6",
        diff: 8 //4
    }, {
        name: "Cloud",
        id: "og7",
        diff: 6 //3
    }, {
        name: "999999",
        id: "og8",
        diff: 7 //4
    }, {
        name: "Hacks",
        id: "og9",
        diff: 5 //3
    }, {
        name: "Liam",
        id: "og10",
        diff: 7 //5
    }, {
        name: "Volcano",
        id: "og11",
        diff: 6 //2
    }, {
        name: "Cats can fly",
        id: "og12",
        diff: 7 //4
    }, {
        name: ":D",
        id: "og13",
        diff: 8 //4
    }, {
        name: "Bonus Level",
        id: "og14",
        diff: 7 //4
    }, {
        name: "Doge",
        id: "og15",
        diff: 5 //3
    }, {
        name: "EZ Map",
        id: "og16",
        diff: 2 //1
    }, {
        name: "Boost",
        id: "og17",
        diff: 5 //3
    }, {
        name: "Slowness",
        id: "og18",
        diff: 6 //4
    }, {
        name: "Grandpa Hobo",
        id: "og19",
        diff: 4 //2
    }, {
        name: "Up Up and Away",
        id: "og20",
        diff: 7 //4
    }, {
        name: "Zigzag",
        id: "og21",
        diff: 8 //5
    }, {
        name: "No Name",
        id: "og22",
        diff: 6 //3
    }, {
        name: "Hop 2 3 4",
        id: "og23",
        diff: 4 //3
    }, {
        name: "hi",
        id: "og24",
        diff: 5 //1
    }, {
        name: "123456789",
        id: "og25",
        diff: 6 //2
    }, {
        name: "Rip",
        id: "og26",
        diff: 4 //2
    }, {
        name: "OK",
        id: "og27",
        diff: 5 //3
    }, {
        name: "kk Unicorn",
        id: "og28",
        diff: 7 //5
    }, {
        name: "Derp",
        id: "og29",
        diff: 7 //2
    }, {
        name: "-___-",
        id: "og30",
        diff: 8 //6
    }, {
        name: "2018 New Concept",
        id: "og31",
        diff: 4 //2
    }, {
        name: "Too Many Cones",
        id: "og32",
        diff: 7 //5
    }, {
        name: "Bounce & Jumps",
        id: "og33",
        diff: 7 //4
    }, {
        name: "Some Maze",
        id: "og34",
        diff: 7 //5
    }, {
        name: "Graphics Test",
        id: "og35",
        diff: 3 //4
    }, {
        name: "ISKL",
        id: "og36",
        diff: 4 //3
    }, {
        name: "CLIMB",
        id: "og37",
        diff: 5 //5
    }, {
        name: "Horrible Map",
        id: "og38",
        diff: 4 //3
    }, {
        name: "Gravity",
        id: "og39",
        diff: 5 //3
    }, {
        name: "Snake",
        id: "og40",
        diff: 4 //4
    }],
    ghoul: [{
        name: "High and Low",
        id: "high_and_low",
        diff: 2
    }, {
        name: "Land to sky",
        id: "land_to_sky",
        diff: 4
    }, {
        name: "Cave",
        id: "cave",
        diff: 4
    }, {
        'name': 'Desert',
        'id': 'desert',
        'diff': '4'
    }, {
        name: "River",
        id: "river",
        diff: 5
    }, {
        name: "Space Junk",
        id: "space_junk",
        diff: 5
    }, {
        name: "Waterfall",
        id: "waterfall",
        diff: 6
    }, {
        'name': 'Polymorph',
        'id': 'polymorph',
        'diff': '6'
    }, {
        'name': 'Technocracy',
        'id': 'technocracy',
        'diff': '6'
    }, {
        name: "Serpents Tail",
        id: "serpents_tail",
        diff: 7
    }, {
        name: "City",
        id: "city",
        diff: 7
    }, {
        'name': 'Darkness',
        'id': 'darkness',
        'diff': '7'
    }],
    rytai: [{
        name: "Lucid Dreams",
        id: "lucid_dreams",
        diff: 1
    }, {
        name: "Tubes",
        id: "tubes",
        diff: 3
    }, {
        name: "Speed Tunnel",
        id: "speed_tunnel",
        diff: 3
    }, {
        name: "Rebound",
        id: "rebound",
        diff: 4
    }, {
        name: "Chemical breakout",
        id: "chemical_breakout",
        diff: 4
    }, {
        name: "Eternal Atake",
        id: "eternal_atake",
        diff: 4
    }, {
        name: "Entity",
        id: "entity",
        diff: 5
    }, {
        name: "Blue Bird",
        id: "blue_bird",
        diff: 5
    }, {
        name: "Rocky Climb",
        id: "rocky_climb",
        diff: 5
    }, {
        name: "Dark Realm",
        id: "dark_realm",
        diff: 5
    }, {
        name: "Heart Attack",
        id: "heartattack",
        diff: 6
    }, {
        name: "Tremor",
        id: "tremor",
        diff: 7
    }, {
        name: "PinPoint",
        id: "pinpoint",
        diff: 7
    }],
    jay: [{
        name: "Equilibrium",
        id: "equilibrium",
        diff: 3
    }, {
        name: "Speedrunner",
        id: "speedrunner",
        diff: 3
    }, {
        'name': 'Geyser',
        'id': 'geyser',
        'diff': '3'
    }, {
        name: "Odyssey",
        id: "odyssey",
        diff: 4
    }, {
        name: "Illusions",
        id: "illusions",
        diff: 4
    }, {
        name: "Aurora",
        id: "aurora",
        diff: 4
    }, {
        name: "Sunset",
        id: "sunset",
        diff: 4
    }, {
        name: "Frost Factory",
        id: "frost_factory",
        diff: 4
    }, {
        'name': 'Caik',
        'id': 'caik',
        'diff': '5'
    }, {
        name: "Rust",
        id: "rust",
        diff: 6
    }, {
        name: "Stratosphere",
        id: "stratosphere",
        diff: 6
    }, {
        name: "Vindicated",
        id: "vindicated",
        diff: 6
    }, {
        name: "Spider",
        id: "spider",
        diff: 8
    } ],
    vault: [{
        name: "Palindrome",
        id: "palindrome",
        diff: 3
    }, {
        name: "Choice",
        id: "choice",
        diff: 3
    }, {
        name: "Split Paths",
        id: "split_paths",
        diff: 3
    }, {
        name: "Route",
        id: "route",
        diff: 5
    }, {
        name: "Gravity Chaos",
        id: "gravity_chaos",
        diff: 6
    }, {
        name: "Thinning",
        id: "thinning",
        diff: 7
    }, {
        name: "Spiral Staircase",
        id: "spiral_staircase",
        diff: 7
    },  {
        name: "Gravitational Pull",
        id: "gravitational_pull",
        diff: 8
    },  {
        name: "A Last Journey",
        id: "a_last_journey",
        diff: 10
    }],
    vault: [{
        name: "Palindrome",
        id: "palindrome",
        diff: 3
    }, {
        name: "Choice",
        id: "choice",
        diff: 3
    }, {
        name: "Split Paths",
        id: "split_paths",
        diff: 3
    }, {
        name: "Route",
        id: "route",
        diff: 5
    }, {
        name: "Gravity Chaos",
        id: "gravity_chaos",
        diff: 6
    }, {
        name: "Thinning",
        id: "thinning",
        diff: 7
    }, {
        name: "Spiral Staircase",
        id: "spiral_staircase",
        diff: 7
    },  {
        name: "Gravitational Pull",
        id: "gravitational_pull",
        diff: 8
    },  {
        name: "A Last Journey",
        id: "a_last_journey",
        diff: 10
    }],
//new cups start here
//idk if they need to be aligned with the cup order
    golden:[{
        'name': 'Infiltration',
        'id': 'infiltration',
        'diff': '1'
    }, {
        'name': 'Dodo Cube',
        'id': 'dodo_cube',
        'diff': '1'
    }, {
        'name': 'Neighbourhood',
        'id': 'neighbourhood',
        'diff': '2'
    }, {
        'name': 'Beach',
        'id': 'beach',
        'diff': '2'
    }, {
        'name': 'Portal Illusion',
        'id': 'portal_illusion',
        'diff': '3'
    }, {
        'name': 'Ruins',
        'id': 'ruins',
        'diff': '3'
    }, {
        name: "Wrenched Water Pipes",
        id: "wrenched_water_pipes",
        diff: 4
    }, {
        'name': 'Opposite Day',
        'id': 'opposite_day',
        'diff': '4'
    }, {
        'name': 'Keyboard',
        'id': 'keyboard',
        'diff': '4'
    }, {
        'name': 'Clocks',
        'id': 'clocks',
        'diff': '4'
    }, {
        'name': 'Road Race',
        'id': 'road_race',
        'diff': '4'
    }, {
        'name': 'Colour Wheel',
        'id': 'colour_wheel',
        'diff': '4'
    }, {
        'name': 'Blind Maze',
        'id': 'blind_maze',
        'diff': '5'
    }, {
        'name': 'Slippery Path',
        'id': 'slippery_path',
        'diff': '6'
    }, {
        'name': 'Piano',
        'id': 'piano',
        'diff': '6'
    }, {
        'name': 'Cosmic Dogfight',
        'id': 'cosmic_dogfight',
        'diff': '6'
    }, {
        'name': 'Sector 8',
        'id': 'sector_8',
        'diff': '6'
    }, {
        'name': 'Wall To Wall',
        'id': 'wall_to_wall',
        'diff': '6'
    }, {
        name: "Anomaly",
        id: "anomaly",
        diff: 7
    }],
    bean:[{
        'name': 'Contrast',
        'id': 'contrast',
        'diff': '1'
    }, {
        'name': 'Dash Of The Canyon',
        'id': 'dash_of_the_canyon',
        'diff': '1'
    }, {
        name: "Mountain",
        id: "beardedbaby",
        diff: 2
    }, {
        'name': 'Touchdown',
        'id': 'touchdown',
        'diff': '3'
    }, {
        name: "Turning Challenge",
        id: "sungjoon",
        diff: 4
    }, {
        'name': 'Treetops',
        'id': 'treetops',
        'diff': '4'
    }, {
        'name': 'Dull to Rainbow',
        'id': 'dull_to_rainbow',
        'diff': '5'
    }, {
        'name': 'Flight',
        'id': 'flight',
        'diff': '6'
    }, {
        'name': 'Leaps of Faith',
        'id': 'leaps_of_faith',
        'diff': '7'
    }, {
        name: "Everest",
        id: "everest",
        diff: 7
    }, {
        'name': 'Cone Dodging',
        'id': 'cone_dodging',
        'diff': '7'
    }, {
        'name': 'Dodo Kong',
        'id': 'dodo_kong',
        'diff': '7'
    }],
    thero:[{
        'name': 'Colour panel',
        'id': 'colour_panel',
        'diff': '1'
    }, {
        'name': 'Trickster',
        'id': 'trickster',
        'diff': '2'
    }, {
        name: "Blizzard",
        id: "blizzard",
        diff: 3
    }, {
        'name': 'Cone City',
        'id': 'cone_city',
        'diff': '3'
    }, {
        'name': 'Treacherous Overpass',
        'id': 'treacherous_overpass',
        'diff': '4'
    }, {
        name: "Behind the Wall",
        id: "behind_the_wall",
        diff: 4
    }, {
        name: "Verglas",
        id: "verglas",
        diff: 5
    }, {
        'name': 'Sunset Jump',
        'id': 'sunset_jump',
        'diff': '5'
    }, {
        name: "Magma Outbreak",
        id: "magma_outbreak",
        diff: 6
    }, {
        'name': 'The Throwback',
        'id': 'the_throwback',
        'diff': '6'
    }, {
        'name': 'Ice Age',
        'id': 'ice_age',
        'diff': '6'
    }, {
        name: "Ice Track",
        id: "ice_track",
        diff: 6
    }, {
        'name': 'Around Saturn',
        'id': 'around_saturn',
        'diff': '6'
    }, {
        name: "Find a Way",
        id: "find_a_way",
        diff: 7
    }, {
        'name': 'Pirate Lord',
        'id': 'pirate_lord',
        'diff': '8'
    }],
    fish:[{
        'name': 'Boat Bounce',
        'id': 'boat_bounce',
        'diff': '2'
    }, {
        'name': 'Radioactive',
        'id': 'radioactive',
        'diff': '3'
    }, {
        'name': 'Dark Alley',
        'id': 'dark_alley',
        'diff': '3'
    }, {
        'name': 'Uphill Battle',
        'id': 'uphill_battle',
        'diff': '3'
    }, {
        'name': 'Into the Night',
        'id': 'into_the_night',
        'diff': '3'
    }, {
        'name': 'Space Invasion',
        'id': 'space_invasion',
        'diff': '4'
    }, {
        'name': 'City Parkour',
        'id': 'city_parkour',
        'diff': '4'
    }, {
        'name': 'Scale',
        'id': 'scale',
        'diff': '4'
    }, {
        'name': 'Factory Escape',
        'id': 'factory_escape',
        'diff': '4'
    }, {
        'name': 'Totally Not GD',
        'id': 'totally_not_gd',
        'diff': '4'
    }, {
        'name': 'Fish Parkour',
        'id': 'fish_parkour',
        'diff': '4'
    }, {
        'name': 'Underwater',
        'id': 'underwater',
        'diff': '5'
    }, {
        'name': 'Gravity Jump',
        'id': 'gravity_jump',
        'diff': '5'
    }, {
        'name': 'Ramp Rush',
        'id': 'ramp_rush',
        'diff': '6'
    }, {
        'name': 'Road Rage',
        'id': 'road_rage',
        'diff': '5'
    }, {
        'name': 'Spike Dash',
        'id': 'spike_dash',
        'diff': '5'
    }, {
        'name': 'Dodo Launch',
        'id': 'dodo_launch',
        'diff': '6'
    }, {
        'name': 'Permafrost',
        'id': 'permafrost',
        'diff': '7'
    }],
    finder: []
}



var news = {
    init: function() {

		this.get_news(function(data) {
			console.log(data);
			if (data != null) {
				if (data.html != null) {
					$("#news").html(data.html);
				}
				
			}
			
		});
	},
	get_news: function(callback) {
        try {
            // https://developer.chrome.com/docs/extensions/mv3/xhr/	
            var littletrolling = {"html":"<p><span>chrome extension made by user name#8111</span> <a href=\"https://discord.gg/uYcsuEkbw8/\" target=\"_blank\">discord server</a></p>"}
            // <p><span>chrome extension made by</span> <a href=\"https://www.discoid.cc/1012900967882166342/\" target=\"_blank\">user name#8111</a></p>}
              callback(littletrolling)
  
          }
          catch(e) {
            console.error("yo something broke lol")
            console.log(e)
          }
    }
}


        
    






//   "host_permissions": [
//     "https://www.google.com/"
//   ],


// chrome.runtime.sendMessage(
//     {contentScriptQuery: 'fetchUrl',
//      url: 'https://another-site.com/price-query?itemId=' +
//               encodeURIComponent(request.itemId)},
//     response => parsePrice(response.text()));




var popup = {
	already_clicked: false,
	in_game: false,
	cup_num: 3,
	init: function() {
		function skip_vault_and_search() {
			const num_cups = Object.keys(cup_info).length;
			const right_cutoff = 2;
			popup.cup_num = popup.mod(popup.cup_num, num_cups - right_cutoff);
			
		}
		$("#change_cup_left").click(function() {
			popup.cup_num -= 1;
			skip_vault_and_search();
			popup.display_cup();
		});
		$("#change_cup_right").click(function() {
			popup.cup_num += 1;
			skip_vault_and_search();
			popup.display_cup();
		});
		$("#play_cup").click(function() {
			if (testing_mode.active == true) {
				return;
			}
			const num_cups = Object.keys(cup_info).length;
			let cup_ind = popup.mod(popup.cup_num, num_cups);
			let cup_id = Object.keys(cup_info)[cup_ind];
			popup.click_cup(cup_id);
		});
		this.list_cups();
		$("#more_levels").click(function() {
			$("#cups_btn").click();
		});
		
		async function submit(e) {
			if (e.keyCode != 13) {
				return;
			}

			let search_query = $("#search_input").val().trim().toLowerCase();

			var matches = [];
			map_info.finder = [];
			$("#search_exception").html("...");

			for (let cup_id in map_info) {
				if ((cup_id == "finder") || (cup_id == "beginner")) {
					continue;
				}
				for (let map of map_info[cup_id]) {
					const name_match = (map.name.toLowerCase().includes(search_query));
					const id_match = map.id.toLowerCase().includes(search_query);

					if ((name_match)) { // || (id_match)
						matches.push(map);
					}
				}
			}

			if (matches.length == 0) {
				$("#search_exception").html("Not found!");
			} else if (matches.length > 20) {
				$("#search_exception").html("Too many matches!");
			} else {
				$("#search_exception").html("");
				map_info.finder = matches;
			}
			
			await scorekeeper.recompute();
			await popup.show();


		}

		$("#search_input").keyup(function(e) {
			submit(e);
		});
		$("#search_input").change(function() {
			submit({keyCode: 13});
		});



		// immediately open a specific map
		// on game load
		this.open_hash_map();
		this.open_test_map();
	},
	show: function() {
		this.hide();
		this.in_game = false;
		sync.get("cup_num", function(v) {
			if ((v != null) && (v >= 0) && (v < INF)) {
				popup.cup_num = v;
			} else {
				popup.cup_num = 0;
				// random cup
				// const num_cups = Object.keys(cup_info).length;
				// popup.cup_num = Math.floor(Math.random() * (num_cups - 3));
			}
			popup.display_cup();
		});
		
        

		setTimeout(function() {
			$("#popup").css("visibility", "visible");
			$("#menu").css("visibility", "visible");
			$("#backtomenu2").hide();
			$("#fullscreen_btn").hide();
			$("#menu").show();
			$("#jump_enabled").hide();
			$("#controls_reversed").hide();

			transitioning = false;
	        parent.postMessage("hide","*");
	        size.popup();
	        $("#inner_loading").remove();
		}, 500);
	},
	hide: function() {
		$("#cups").html('');
		$("#jump_cont").html('');
		$("#popup").css("visibility", "hidden");
		this.already_clicked = false;
	},
	display_cup: function() {
		const num_cups = Object.keys(cup_info).length;
		let cup_ind = this.mod(this.cup_num, num_cups);
		let cup_id = Object.keys(cup_info)[cup_ind];
		if ((this.cup_num >= 0) && (this.cup_num < INF)) {
			sync.set("cup_num", this.cup_num);
		} else if (cup_info[cup_id] == null) {
			this.cup_num = 0;
			cup_ind = 0;
			cup_id = Object.keys(cup_info)[cup_ind];
		}

		$('#popup').scrollTop(0);
		$("#cup_name").html(cup_info[cup_id].name);
		$("#cup_img").attr("src", `assets/skins/${cup_id}_cup.png`);
		$("#maps").html("");

		console.log("Showing cup_id", cup_id);
		if (cup_id != "finder") {
			$(".search_on").hide();
			$(".search_off").show();
			$("#search_exception").hide();
		} else {
			$(".search_on").show();
			$(".search_off").hide();
			$("#search_exception").show();
		}
		
		// maps
		let maps = map_info[cup_id];
		for (var m=0;m<maps.length;m++) {
			let map = maps[m];
			var map_HTML = "<div class='map' id='"+cup_id+"_map_"+map.id+"'><h2 class='map_name'>"+map.name+"</h2></div>";
			
			if (testing_mode.active == false) {
				$("#maps").append(map_HTML);
			}
			popup.display_map(cup_id, map);
		}

		// stats
		if (cup_id != "finder") {
			$("#cup_percent").html(scorekeeper.per_cup[cup_id].percent+" %");
			$("#cup_weighted").html(scorekeeper.per_cup[cup_id].weighted+" pt");
		}
	},
	display_map: function(cup_id, map) {
		let map_exp = null;
		for (let row of scorekeeper.cups[cup_id]) {
			if (row.id == map.id) {
				map_exp = row.xp;
				break;
			}
		}
		popup.post_map(cup_id, map, map_exp);
	},
	post_map: function(cup_id, map, map_exp) {
		var add_class = "done_z";
		var desc_text = "Click to Play";
		if (map_exp == 1) {
			add_class = "done_a";
			desc_text = "COMPLETED";
		} else if (map_exp == 2) {
			add_class = "done_b";
			desc_text = "COMPLETED TWICE";
		} else if (map_exp > 2) {
			add_class = "done_c";
			desc_text = "COMPLETED "+ map_exp +" TIMES";
		}
		if (map_exp >= 1000) {
			add_class = "done_f";
		} else if (map_exp >= 100) {
			add_class = "done_e";
		} else if (map_exp >= 10) {
			add_class = "done_d";
		}
		var diff_text = "DIFFICULTY: " + map.diff;
		var map_contents_HTML = "<div class='map_desc'>"+diff_text+" - "+desc_text+"</div>";
		var elem = $("#"+cup_id+"_map_"+map.id);
		elem.append(map_contents_HTML);
		elem.addClass(add_class);
		map.exp = map_exp;
		elem.click(function() {
			popup.click_map(cup_id, map.id);
		});
	},
	click_cup: function(cup_id) {
		if (!transitioning) {
			let maps = map_info[cup_id];
			var min_ind = -1;
			var min_val = 1000000;
			for (var m=0;m<maps.length;m++) {
				let map = maps[m];
				let exp = map.exp;
				if (exp < min_val) {
					min_val = exp;
					min_ind = m;
				}
			}
			let map_id = maps[min_ind].id;
			this.click_map(cup_id, map_id);
		}
	},
	click_map: function(cup_id, map_id) {
		if (!transitioning) {
			cup_info[cup_id].map_seq = [];
			for (let map of map_info[cup_id]) {
				cup_info[cup_id].map_seq.push(map.id);
			}
			if (cup_id == null) {
				return;
			}
			if (map_id == null) {
				return;
			}
			let map_seq = cup_info[cup_id].map_seq;
			var map_ind = map_seq.indexOf(map_id);
			if (map_ind < 0) {
				return;
			}
			// set info
			settings.map_id = map_id;
			settings.map_seq = map_seq;
			settings.map_ind = map_ind;
			settings.cup_id = cup_id;
			this.in_game = true;
			// redirect
			if (!this.already_clicked) {
				this.already_clicked = true;
				this.hide();
				$("#menu").hide();
				$("#backtomenu2").show();
				$("#fullscreen_btn").show();
				transitioning = true;
				boot.init();
			}
		}
	},
	list_cups: function() {
		for (const cup_id in cup_info) {
			this.list_cup(cup_id);
		}
	},
	list_cup: function(cup_id) {
		$("#list_cups_title").text("Choose a Cup");
		var html = `<img class="cup_list_img" src="assets/skins/${cup_id}_cup.png" id="show_up_${cup_id}" cup_name="${cup_info[cup_id].name}">`;
		$("#list_cups").append(html);
		$(`#show_up_${cup_id}`).click(function() {
			var v = Object.keys(cup_info).indexOf(cup_id);
			if ((v >= 0) && (v < INF)) {
				popup.cup_num = v;
			}
			popup.display_cup();
			$("#play_tab_btn").click();
		});
		$(`#show_up_${cup_id}`).hover(function() {
			$("#list_cups_title").text($(this).attr("cup_name"));
		});
	},
	open_hash_map: function() {
		// when player clicks full screen button
		// in the extension.
		if (window.location.hash.length > 2) {
			function search(map_id) {
				var cup_ind = -1;
				for (let cup_id in cup_info) {
					cup_ind += 1;
					var maps = map_info[cup_id];
					var map_ind = -1;
					for (let map of maps) {
						map_ind += 1;
						if (map.id == map_id) {
							return {
								map_id: map.id,
								map_ind: map_ind,
								cup_id: cup_id,
								cup_ind: cup_ind
							}
						}
					}
				}
				return null;
			}
			
			const data = search(window.location.hash.substring(1));
			
			window.location.hash = "";

			if (data == null) return;

			const { map_id, map_ind, cup_id, cup_ind } = data;

			if (map_id == null) return;
			if (map_ind == null) return;
			if (cup_id == null) return;
			if (cup_ind == null) return;

			var interval = setInterval(function() {
				if (transitioning == false) {
					popup.click_map(cup_id, map_id);
					clearInterval(interval);
				}
			}, 250);
		}
	},
	open_test_map: function() {
		console.log("%c antetrig", "font-size: 30px");
		if (testing_mode.active == true) {
			console.log("%c trig", "font-size: 30px");
			testing_mode.init();
		}
	},
	mod: function(n, m) {
		return ((n % m) + m) % m;
	}
}






var screen = {
	init: function() {
		this.info_start();
		this.bind_buttons();
	},
	info_start: function() {
		$("#screen_map_name").text(map.title);
		var map_about = "Made by: " + map.maker;
		$("#screen_map_about").text(map_about);
		$("#restart_text").html("RESTART");
		const map_lb_link = `https://onionfist.com/icelb?map_id=${settings.map_id}&sort_by=exp`
		$("#map_leaderboard").attr("href", map_lb_link);
		if (deployment.is_chrome_ext) {
			const map_fs_link = `https://onionfist.com/icedodo/#${settings.map_id}`;
			$("#fullscreen_btn").attr("href", map_fs_link);
		} else {
			$("#fullscreen_btn").remove();
		}
	},
	set_dialog: function(set_text, set_color) {
		$("#screen_dialog").text(set_text);
		$("#screen_dialog").css({color: set_color});
	},
	bind_buttons: function() {
		$("#restart").click(function() {
			if ((!alive) && (!transitioning)) {
				const text = $("#restart_text").html();
				if (text === "RESTART") {
					change_state.spawn();
				} else if (text === "NEXT LEVEL") {
					let maps = map_info[settings.cup_id];
					for (var m=0;m<maps.length;m++) {
						let map = maps[m];
						if (map.id == settings.map_id) {
							if (m+1 < maps.length) {
								popup.click_map(settings.cup_id, maps[m+1].id);
							} else {
								popup.click_map(settings.cup_id, maps[0].id);
							}
						}
					}
				}
			}
		});

		$("#play_again").click(function() {
			if (!transitioning) {
				transitioning = true;
				cleanup.run();
				setTimeout(function() {
					transitioning = false;
					boot.init();
				}, 150);
			}
		});
		$("#backtomenu").click(function() {
			if ((!alive) && (!transitioning) && (popup.in_game)) {
				transitioning = true;
				cleanup.run();
				$("#screen").css("visibility", "hidden");
				popup.show();
			}
		});
		$("#backtomenu2").click(function() {
			if ((!transitioning) && (popup.in_game)) {
				alive = false;
				transitioning = true;
				cleanup.run();
				audio.stop();
				$("#screen").css("visibility", "hidden");
				popup.show();
			}
		})
	}
}






var settings = {
    map_id: null,
    map_seq: null,
    map_ind: null,
    cup_id: null,
    musicEnabled: null,
    autoRestart: null,
    frameRate: null,
    platformTexture: null,
    fovLevel: null,
    screenRes: null
};



var size = {
	w: 800,
	h: 600,
	popup: function() {
		if (deployment.is_chrome_ext) {
			$("body").css("width", "340px");
			$("body").css("height", "600px");
		} else {
			// $("#cup").css("width", "340px");
			// $(".map").css("width", "340px");
			// $(".tab").css("padding-left", "calc(50% - 230px)");
			// $(".tab").css("padding-right", "calc(50% - 230px)");
			$("body").css("width", "100%");
			$("body").css("height", "100%");
		}
	},
	ingame: function() {
		if (deployment.is_chrome_ext) {
			if (popup.in_game) {
				$("body").css("width", "800px");
				$("body").css("height", "600px");	
			}
			engine.resize();
		} else {
			// scale down for performance
			const doc_h = window.innerHeight;
			const doc_w = window.innerWidth;
	   		var scale_factor = 1;
	   		if (doc_h / doc_w > this.h / this.w) { // compare slope
	   			scale_factor = Math.min(doc_h, this.h) / doc_h;
	   		} else {
	   			scale_factor = Math.min(doc_w, this.w) / doc_w;
	   		}
	   		const tar_h = doc_h * scale_factor;
	   		const tar_w = doc_w * scale_factor;

	   		// apply
	   		$("body").css("width", "100%");
			$("body").css("height", "100%");
	   		engine.setSize(tar_w, tar_h);
		}
	},
	set: function(option) {
		this.h = Number(option.slice(0, -1));
		const ratio = 4 / 3;
		this.w = Math.round(this.h * ratio)
	}
}



var skin_info = {
    dodo: {
        txt: "Default dodo",
        keys: ["overall", "weighted"],
        val: 0
    },
    moon: {
        txt: "First win",
        keys: ["overall", "weighted"],
        val: 1
    },
    melon: {
        txt: "Overall 50 pt",
        keys: ["overall", "weighted"],
        val: 50
    },
    whirlpool: {
        txt: "Overall 100 pt",
        keys: ["overall", "weighted"],
        val: 100
    },
    tweet: {
        txt: "Overall 500 pt",
        keys: ["overall", "weighted"],
        val: 500
    },
    hyperfrost: {
        txt: "Overall 1000 pt",
        keys: ["overall", "weighted"],
        val: 1000
    },
    rainbow: {
        txt: "Overall 2000 pt",
        keys: ["overall", "weighted"],
        val: 2000
    },
    beginner_cup: {
        txt: "100% Ice Dodo",
        keys: ["per_cup", "beginner", "percent"],
        val: 100
    },
    carrot_cup: {
        keys: ["per_cup", "carrot", "percent"],
        val: 100
    },
    collab_cup: {
        keys: ["per_cup", "collab", "percent"],
        val: 100
    },
    crazy_cup: {
        keys: ["per_cup", "crazy", "percent"],
        val: 100
    },
    thero_cup: {
        keys: ["per_cup", "thero", "percent"],
        val: 100
    },
    fish_cup: {
        keys: ["per_cup", "fish", "percent"],
        val: 100
    },
    golden_cup: {
        keys: ["per_cup", "golden", "percent"],
        val: 100
    },
    bean_cup: {
        keys: ["per_cup", "bean", "percent"],
        val: 100
    },
    dodo_cup: {
        keys: ["per_cup", "dodo", "percent"],
        val: 100
    },
    doom_cup: {
        keys: ["per_cup", "doom", "percent"],
        val: 100
    },
    june_cup: {
        keys: ["per_cup", "june", "percent"],
        val: 100
    },
    kazil_cup: {
        keys: ["per_cup", "kazil", "percent"],
        val: 100
    },
    pilot_cup: {
        keys: ["per_cup", "pilot", "percent"],
        val: 100
    },
    mango_cup: {
        keys: ["per_cup", "mango", "percent"],
        val: 100
    },
    furby_cup: {
        keys: ["per_cup", "furby", "percent"],
        val: 100
    },
    rocky_cup: {
        keys: ["per_cup", "rocky", "percent"],
        val: 100
    },
    skilled_cup: {
        keys: ["per_cup", "skilled", "percent"],
        val: 100
    },
    sleepy_cup: {
        keys: ["per_cup", "sleepy", "percent"],
        val: 100
    },
    squirrel_cup: {
        keys: ["per_cup", "squirrel", "percent"],
        val: 100
    },
    tim_cup: {
        keys: ["per_cup", "tim", "percent"],
        val: 100
    },
    ye_cup: {
        keys: ["per_cup", "ye", "percent"],
        val: 100
    },
    ghoul_cup: {
        keys: ["per_cup", "ghoul", "percent"],
        val: 100
    },
    rytai_cup: {
        keys: ["per_cup", "rytai", "percent"],
        val: 100
    },
    jay_cup: {
        keys: ["per_cup", "jay", "percent"],
        val: 100
    },
    og_cup: {
        txt: "100% O.G.",
        keys: ["per_cup", "og", "percent"],
        val: 100
    },
    flame: {
        txt: "Overall 50 %",
        keys: ["overall", "percent"],
        val: 50
    },
    galaxy: {
        txt: "Overall 80 %",
        keys: ["overall", "percent"],
        val: 80
    },
    swag1: {
        txt: "Overall 100 %",
        keys: ["overall", "percent"],
        val: 100
    },
    // r1: {
    //     txt: "Blah",
    //     rand: true,
    // },
    // r2: {
    //     txt: "Blah",
    //     rand: true,
    // }
}

for (let nn=1;nn<35;nn++) {
    skin_info["r"+nn] = {
        txt: `Free ${nn}`,
        rand: true,
    }
}



// game objects
var camera = null;
var light = null;
var player = null;
var cape_wings = null;
var cape_tail = null;

var endings = [];
var cones = [];
var jumppads = [];

// game essentials
var canvas = null;
var engine = null;
var scene = null;

// game variables
var rotation = 0;
var alive = false;
var transitioning = true;

var start = {
	init: async function() {
		canvas = await document.getElementById("renderCanvas");
		engine = await new BABYLON.Engine(canvas, true, {
		  deterministicLockstep: false,
		  lockstepMaxSteps: 4
		});
		scene = await new BABYLON.Scene(engine, {antialiasing: false});
		// scene
		var gravityVector = new BABYLON.Vector3(0,-9, 0);
		scene.enablePhysics(gravityVector);
	},
	create_scene: function() {
		scene.clearColor = new BABYLON.Color4(0,0,0,1);
		scene.ambientColor = new BABYLON.Color4(0,0,0,0);

		// camera
		camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 2, 10), scene);
		camera.setTarget(BABYLON.Vector3.Zero());
		camera.rotation.y = -3.14;
		camera.rotation.x = 0.3;
		camera.rotation.z = 0;
		camera.speed = 0;
		camera.maxZ = 300; //200; //120;
		camera.noRotationConstraint = true;

		// player
		player = BABYLON.Mesh.CreateBox("player",0.5,scene);
		player.scaling = new BABYLON.Vector3(1, 0.16, 1);
		player.physicsImpostor = new BABYLON.PhysicsImpostor(player, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1.0, restitution: 1.0, friction: 0.5}, scene);

		player.position = new BABYLON.Vector3(0,0,0);
		player.applyGravity = true;
		sync.get("skinName", function(curr_val) {
			if (curr_val) {
				decorations.decorate_player(player, curr_val);
			}
		});
		
		// light
	    light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
	    light.intensity = 1.0;
	    light.parent = camera;

	    // cape_wings
		cape_wings = new BABYLON.Mesh("custom", scene);
		
		var wings_vertexData = new BABYLON.VertexData();
		wings_vertexData.positions = [
			1,0,-1,
			3,0,0,
			1,0,1,
			-1,0,-1,
			-3,0,0,
			-1,0,1
		];
		wings_vertexData.indices = [0, 1, 2, 3, 4, 5];
		wings_vertexData.applyToMesh(cape_wings);

		cape_wings.material = decorations.rgba_mat(255,255,255,1);

		cape_wings.scaling.x = 0.3;
		cape_wings.scaling.y = 0.3;
		cape_wings.scaling.z = 0.3;
		cape_wings.isVisible = false;
		cape_wings.parent = player;

		// cape_tail
		cape_tail = new BABYLON.Mesh("custom", scene);
		
		var tail_vertexData = new BABYLON.VertexData();
		tail_vertexData.positions = [
			-1,0,1,
			0,0,3,
			1,0,1,
		];
		tail_vertexData.indices = [0, 1, 2];
		tail_vertexData.applyToMesh(cape_tail);

		cape_tail.material = decorations.rgba_mat(255,255,255,1);

		cape_tail.scaling.x = 0.3;
		cape_tail.scaling.y = 0.3;
		cape_tail.scaling.z = 0.3;
		cape_tail.isVisible = false;
		cape_tail.parent = player;

	}
}




var stats = {
	score: 0,
	fps: 50,
	key_time: 0,
	changed_to_fixed: false,
	update_fps: function() {
		// Calculate FPS
		let fps_now = Number(engine.getFps());
		this.fps += 0.1;
		if (this.fps > fps_now) this.fps = fps_now;

		// For 144 fps monitors
		if (!this.changed_to_fixed) {
			if (this.fps > 70) {
				console.log("AUTO FIX");
				this.changed_to_fixed = true;
				update.set_fixed();
				sync.set("frameRate", "fixed");
			}
		}
	}
}



var tabs = {
	items: ["about", "settings", "skins", "ranks", "cups"],
	unlocked_skins: [],
	init: function() {
		for (var i=0;i<this.items.length;i++) {
			let item = this.items[i];
			this.handle_click(item);
		}

		$("#play_tab_btn").css("color", "#ffffff");
		$("#play_tab_btn").click(function() {
			$("#play_tab_btn").css("color", "#ffffff");
			for (var i=0;i<tabs.items.length;i++) {
				let item = tabs.items[i];
				$(`#${item}_tab`).hide();
				$(`#${item}_btn`).css("color", "#999999");
			}
			$("#cups_btn").css("color", "#ffffff");
		});
		this.settings_init();
	},
	handle_click: function(item) {
		$("#"+item+"_btn").click(function() {
			tabs.show_item(item);
			if (item == "notifs") {
				notifs.focus();
			}
		});
	},
	show_item: function(item) {
		// all others
		$(".tab").hide();
		$(".btn").css("color", "#999999");
		$("#cups_btn").css("color", "#ffffff");
		
		// selected
		$("#"+item+"_tab").css("visibility", "visible");
		$("#"+item+"_tab").css("z-index", "35");
		$("#"+item+"_btn").css("color", "#ffffff");
		$("#"+item+"_tab").show();
	},
	item_init: function(item) {
		let save_id = item.save_id;
		let options = item.options;
		let standard = item.standard;
		let onclick = item.onclick;
		const reset_styling = function(curr_val) {
			for (var z=0;z<options.length;z++) {
				let option = options[z];
				let elem_id = "#" + save_id + "_" + option;
				if (curr_val === option) {
					$(elem_id).css("background", "var(--red_dark)");
				} else {
					$(elem_id).css("background", "black");
				}
			}
		}
		sync.get(save_id, function(curr_val) {
			if ((curr_val === null) || (curr_val === undefined)) {
				sync.set(save_id, standard, function() {});
				curr_val = standard;
			}
			settings[save_id] = curr_val;
			reset_styling(curr_val);
		});
		for (var z=0;z<options.length;z++) {
			let option = options[z];
			let elem_id = "#" + save_id + "_" + option;
			$(elem_id).click(function() {
				settings[save_id] = option;
				sync.set(save_id, option, function() {
					reset_styling(option);
					if (onclick !== null) onclick(option);
				});
			});
		}

	},
	settings_init: function() {
		var items = [
			{
				save_id: "musicEnabled",
				options: ["on", "off"],
				standard: "on",
				onclick: null
			},
			{
				save_id: "autoRestart",
				options: ["on", "off"],
				standard: "off",
				onclick: null
			},
			{
				save_id: "fovLevel",
				options: ["x1", "x2", "x3"],
				standard: "x1",
				onclick: function(option) {
					fov.set_mul1(option);
				}
			},
			{
				save_id: "frameRate",
				options: ["fixed", "vsync"],
				standard: "vsync",
				onclick: function(option) {
					if (option === "fixed") {
						update.set_fixed();
					} else if (option === "vsync") {
						update.set_vsync();
					}
				}
			},
			{
				save_id: "platformTexture",
				options: ["bright", "dark"],
				standard: "bright",
				onclick: function(option) {
					if (option === "bright") {
			            decorations.materials.platform = decorations.bright;
			            maker.init();
			        } else if (option === "dark") {
			            decorations.materials.platform = decorations.dark;
			            maker.init();
			        }
				}
			}
		];

		for (var i=0;i<items.length;i++) {
			let item = items[i];
			this.item_init(item);
		}
		
		if (deployment.is_chrome_ext) {
			$("#res_row").remove();
		} else {
			var standard = "600p";
			if (controls.mobile_enabled == true) {
				standard = "400p";
			}
			//  else if (deployment.is_chrome_ext == false) {
			// 	standard = "900p";
			// }
			this.item_init({
				save_id: "screenRes",
				options: ["400p", "600p", "900p"],
				standard: standard,
				onclick: function(option) {
					size.set(option);
				}
			})
		}
			
	},
	skin_init: async function() {
		this.unlocked_skins = [];
		$("#unlocked_skins").html("");
		$("#locked_skins").html("");

		for (let skin_id in skin_info) {
			let keys = skin_info[skin_id].keys;
			if (skin_info[skin_id].rand === true) {
				console.log("s_"+skin_id, await sync.async_get("s_"+skin_id));
				if (await sync.async_get("s_"+skin_id) == "yes") {
					this.unlocked_skins.push(skin_id);
					skin_info[skin_id].unlocked = true;
				}
				continue;
			}
			var obj = scorekeeper[keys[0]];
			if (keys.length > 1) obj = obj[keys[1]];
			if (obj == null) continue;
			if (keys.length > 2) obj = obj[keys[2]];
			if (obj == null) continue;
			if (Number(obj) >= Number(skin_info[skin_id].val)) {
				this.unlocked_skins.push(skin_id);
				skin_info[skin_id].unlocked = true;
			}
		}
		
		for (const skin_id in skin_info) {
			let skin_txt = skin_info[skin_id].txt;
			if ((skin_txt == null) && (skin_info[skin_id].keys[0] == "per_cup")) {
				var unit = (skin_info[skin_id].keys[2] == "percent") ? "%" : "pt"
				skin_txt = skin_info[skin_id].val + " " + unit + " " + skin_info[skin_id].keys[1];
			}
			var HTML = `<div class="skinItem" id="skinName_${skin_id}"><img class="skin_img" src="assets/skins/${skin_id}.png"><div class="skin_txt">${skin_txt}</div></div>`;
			if (skin_info[skin_id].unlocked) {
				$("#unlocked_skins").append(HTML);
			} else if (skin_info[skin_id].rand !== true) {
				$("#locked_skins").append(HTML);
			}
		}

		this.item_init({
			save_id: "skinName",
			options: tabs.unlocked_skins,
			standard: "dodo",
			onclick: function(option) {
				decorations.decorate_player(player, option);
			}
		});
	}
}





var testing_mode = {
    active: (["localhost", "fn.onionfist.com"].indexOf(window.location.hostname) >= 0),
    link: null,
    init: function() {
        let URL = window.location.href;

        function extract_vstr() {
            for (var v=1;v<20;v++) {
                if (URL.includes(`?v${v}=`)) {
                    var vstr = `?v${v}=`;
                    return vstr;
                }
            }
            return null;
        }

        function extract_map_link(vstr) {
            let q_string = URL.split(vstr)[1];
            let parent_domain = window.location.protocol + "//" + window.location.hostname;
            if (window.location.port !== "") parent_domain += ":"+window.location.port;
            let map_js_link = `${parent_domain}/icemaprun.js${vstr}${q_string}`;
            return map_js_link;
        }

        let vstr = extract_vstr();
        if (vstr == null) {
            this.active = false;
            return;
        }

        let link = extract_map_link(vstr);
        if (link == null) {
            this.active = false;
            return;
        }
        this.link = link;
        console.log("%c LINK", "color: red", link);

        var interval = setInterval(function() {
            if (transitioning == false) {
                testing_mode.begin();
                clearInterval(interval);
            }
        }, 250);
    },
    begin: function() {
        // set info
        settings.map_id = "test_map";
        settings.map_seq = ["test_map"];
        settings.map_ind = 0;
        settings.cup_id = "test_cup";
        popup.in_game = true;
        // redirect
        popup.hide();
        $("#menu").hide();
        $("#backtomenu2").show();
        $("#fullscreen_btn").show();
        transitioning = true;
        boot.init();
    }

}



var update = {
	interval: null,
	init: function() {
		if (settings.frameRate === "fixed") {
			this.interval = setInterval(this.loop, 1000/60);
		} else if (settings.frameRate === "vsync") {
			engine.runRenderLoop(this.loop);
		}
		window.addEventListener("resize", function () {
			if (settings.map_id) {
				size.ingame();
			}
		});
	},
	set_fixed: function() {
		engine.stopRenderLoop(this.loop);
		this.interval = setInterval(this.loop, 1000/60);
	},
	set_vsync: function() {
		clearInterval(this.interval);
		engine.runRenderLoop(this.loop);
	},
	loop: function() {
		scene.render();
		update.new_frame();
		stats.update_fps();
	},
	new_frame: function() {
		if ((alive) && (!transitioning)) {
			try {
				stats.score += 1;
				$("#curr_time").html("TIME: " + stats.score);
				// render call
				this.player_move();
				map.render_update();
				map.section_update();
				flyjump.render_loop();
				// physics call
				if (stats.score % physics_call_rate == 0) {
					this.collision_check();
					map.physics_update();
					flyjump.compute_loop();
					this.update_overlay();
				}
			} catch(err) {
				
			}
		}
	},
	collision_check: function() {
		// if death
		if (player.position.y < -20) {
			change_state.die();
			screen.set_dialog("Fell To Death", "#e04c4f");
		}

		if (player.position.y > 80) {
			change_state.die();
			screen.set_dialog("Left the Orbit", "#e04c4f");
		}

		// if hit cone
		for (var i=0;i<maker.cone_count;i++) {
			let cone = cones[i];
			if (this.are_touching(player, cone, 0.5)) {
				change_state.die();
				screen.set_dialog("Died From Cone", "#e04c4f");
				break;
			}
		}

		// if hit ending
		for (var i=0;i<maker.ending_count;i++) {
			let ending = endings[i];
			if (this.are_touching(player, ending, 1.2)) { // previously 1.0
				change_state.win();
				break;
			}
		}
	},
	player_move: function() {
		// steer
		var action = 0;
		if (controls.right) {action += 1};
		if (controls.left) {action -= 1};
		if (controls.space) {flyjump.jump()};
		if ((speed !== default_speed) && (speed !== 0.2)) {
			player.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(0,0,0));
			player.rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0,0,0),0);
		}
		rotation += action * steer;
		player.rotation.y = rotation;

		// move
		let vx = speed * Math.sin(rotation - 3.14);
		let vz = speed * Math.cos(rotation - 3.14);
		player.position.x += vx;
		player.position.z += vz;

		// light & camera
		let rotation_offsetted = rotation + cameraRightAngle;
		camera.position.x = player.position.x + Math.sin(rotation_offsetted) * cam_horizontal;
		camera.position.z = player.position.z + Math.cos(rotation_offsetted) * cam_horizontal;
		camera.position.y = player.position.y + cam_vertical;
		camera.rotation.y = 3.14 + rotation_offsetted;
		camera.rotation.x = cam_depression;
		light.position = camera.position;
	},
	are_touching: function(a, b, r) {
		let dz = a.position.z - b.position.z;
		if (Math.abs(dz) < r) {
			let dx = a.position.x - b.position.x;
			if (Math.abs(dx) < r) {
				let dy = a.position.y - b.position.y;
				if (Math.abs(dy) < r * 1.5) {
					return true;
				}
			}
		}
		return false;
	},
	set_gravity: function(val) {
		scene.gravity = new BABYLON.Vector3(0, val, 0);
		gravity = scene.gravity;
		scene.getPhysicsEngine().setGravity(scene.gravity);
		player.applyGravity = true;
	},
	update_overlay: function() {
		if (flyjump.can_jump == true) {
			$("#jump_enabled").show();
			$("#space_mobile_btn").css("opacity", 1.0);
			cape_wings.isVisible = true;
		} else {
			$("#jump_enabled").hide();
			$("#space_mobile_btn").css("opacity", 0.3);
			cape_wings.isVisible = false;
		}
		if (steer < 0) {
			$("#controls_reversed").show();
			cape_tail.isVisible = true;
		} else {
			$("#controls_reversed").hide();
			cape_tail.isVisible = false;
		}
	}
}



var webext = {
    worker_req: function(data) {
        return new Promise(async (resolve, reject) => {
            if (chrome.runtime == null) {
                console.log("no runtime, maybe due to localhost.");
                resolve(null);
                return;
            }
            
            const chrx_ids = [config.chrx_id, config.dev_chrx_id];
            console.log("chrx_ids", chrx_ids);

            for (const chrx_id of chrx_ids) {
                let resp = await webext.worker_one(chrx_id, data);
                if (resp != null) {
                    console.log("resp", resp);
                    resolve(resp);
                    return;
                }
            }
            resolve(null);
        });
    },
    worker_one: function(chrx_id, data) {
        return new Promise((resolve, reject) => {
            try {
                chrome.runtime.sendMessage(chrx_id, data, function(response) {
                    resolve(response);
                    return;
                });
            } catch (error) {
                console.log("Err", error);
                resolve(null);
            }
        });
    },
    ping_from_web: function() {
        if (deployment.is_oworld) {
            return;
        }

        return this.worker_req({code: "ping_from_web"});
    }
}

console.log("hello chat")