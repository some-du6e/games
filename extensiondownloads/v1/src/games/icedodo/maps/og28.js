function doground() {
	return false;
}

function music() {
	return "music/env-rpm.mp3";
}
var map = {
    title: "kk Unicorn",
    song: "env2",
    maker: "dododo73",
    spawn: [0, 0.5, 0],
    init: function() {

		function pup(a2, b, c, d, e, f, g, h, i, j) {
			a.og(a2,b,c,d,e,f,g,h,i,j);
		}

		a.og('ice', 0,0,0,0,0,0.11,2 ,0.1 ,4 ); //011 ??
		a.og('ice', 0,-0.161,-3.792,0,-3.689,0,2 ,0.1 ,4 );
		a.og('ice', -1.205,-0.371,-7.036,0,-3.689,0,2 ,0.1 ,4 );
		a.og('ice', 0.116,-0.59,-10.438,0,-3.689,0,2 ,0.1 ,4 );
		a.og('ice', 1.388,-0.774,-13.291,32.211,-3.122,-1.965,0.892 ,0.1 ,4 );
		a.og('ice', 2.943,-0.98,-16.492,0,-3.689,0,2 ,0.1 ,4 );
		a.og('ice', 2.943,-1.457,-20.321,0,-9.726,0,2 ,0.1 ,4 );
		a.og('ice', 3.752,-1.934,-23.1,0,-9.726,0,2 ,0.1 ,4 );
		a.og('ice', 2.602,-2.409,-25.875,0,-9.726,0,1.101 ,0.1 ,4 );
		a.og('ice', 4.85,-2.402,-25.83,26.054,-8.754,-4.255,0.758 ,0.1 ,4 );
		a.og('ice', 6.427,-3.595,-28.947,27.416,-25.506,-4.661,0.758 ,0.1 ,4 ); // 0
		a.og('ice', 2.602,-3.542,-29.553,0,-22.494,0,1.101 ,0.1 ,4 );
		a.og('ice', 8.036,-5.196,-32.059,27.047,-21.278,-4.514,0.758 ,0.1 ,4 );
		a.og('ice', 2.602,-4.827,-32.847,0,-17.65,0,1.101 ,0.1 ,4 );
		a.og('ice', 9.698,-6.378,-35.355,26.275,-11.662,-4.295,0.758 ,0.1 ,4 );
		a.og('ice', 2.602,-5.745,-36.216,0,-10.236,0,1.101 ,0.1 ,4 );
		a.og('ice', 11.167,-6.877,-38.364,25.648,-3.298,-4.213,0.758 ,0.1 ,4 );
		a.og('ice', 2.602,-6.283,-39.826,0,-4.358,0,1.101 ,0.1 ,4 );
		a.og('ice', 3.684,-6.543,-43.24,28.787,-3.821,-2.097,2.096 ,0.1 ,5.34 );
		a.og('ice', 12.921,-6.38,-41.1,1.498,-4.357,-0.114,2.096 ,0.1 ,5.34 );
		a.og('ice', 11.137,-6.751,-45.964,1.498,-4.357,-0.114,2.096 ,0.1 ,5.34 ); // 0
		a.og('ice', 5.676,-6.761,-46.106,1.498,-4.357,-0.114,2.096 ,0.1 ,5.34 );
		a.og('ice', 7.167,-7.137,-51.029,1.498,-4.357,-0.114,1.748 ,0.1 ,5.34 );
		a.og('ice', 9.792,-7.131,-50.961,1.498,-4.357,-0.114,1.748 ,0.1 ,5.34 );
		a.og('ice', 8.509,-7.441,-55.029,1.498,-4.357,-0.114,2 ,0.1 ,4 );

		a.og('fire', 9.821,-7.699,-58.009,1.498,-4.357,-12.086,2 ,0.1 ,4 );
		a.og('ice', 11.891,-7.568,-60.219,1.498,-4.357,-6.011,2 ,0.1 ,4 );
		a.og('fire', 10.463,-7.95,-63.185,1.498,-4.357,-6.011,0.639 ,0.1 ,4 );
		a.og('ice', 11.563,-8.031,-65.663,1.498,-4.357,-15.207,1.179 ,0.1 ,0.87 );
		a.og('fire', 12.541,-7.82,-66.306,56.459,10.174,-12.159,1.179 ,0.1 ,1.303 );
		a.og('ice', 13.022,-7.939,-67.694,15.87,-7.327,-15.913,2.235 ,0.1 ,1.641 ); // 0
		a.og('ice', 14.965,-7.749,-69.068,43.313,1.052,-17.449,1.007 ,0.1 ,4 );
		a.og('ice', 17.979,-7.536,-71.614,23.038,-5.24,-16.699,3.222 ,0.1 ,4.409 );
		a.og('ice', 19.506,-7.894,-75.203,23.038,-5.24,-16.699,0.641 ,0.1 ,4.409 );
		a.og('fire', 20.12,-8.094,-78.152,0,0,0,2.524 ,0.1 ,4.409 );
		a.og('fire', 21.673,-8.094,-81.816,0,0,0,2 ,0.1 ,4 );
		a.og('fire', 20.5,-8.094,-84.692,0,0,0,1.492 ,0.1 ,2.369 );
		a.og('fire', 21.266,-8.094,-87.291,0,0,0,1.697 ,0.1 ,3.965 );
		a.og('fire', 21.266,-8.429,-91.112,0,-8.438,0,1.697 ,0.1 ,3.965 ); // move x 8
		a.og('fire', 18.171,-9.187,-96.221,0,-8.438,0,2.24 ,0.1 ,6.625 );
		a.og('fire', 16.301,-9.969,-101.496,0,-8.438,0,2.24 ,0.1 ,6.625 );
		a.og('fire', 16.301,-10.287,-106.15,0,-0.116,0,2.24 ,0.1 ,6.625 );
		a.og('fire', 18.957,-10.296,-110.623,45.341,-0.082,-0.083,0.426 ,0.1 ,6.625 );
		a.og('brown', 21.558,-10.304,-114.123,45.341,-0.082,-0.083,0.426 ,0.1 ,6.625 );
		a.og('brown', 22.422,-10.307,-115.884,45.341,-0.082,-0.083,0.426 ,0.1 ,6.625 );
		a.og('brown', 24.499,-10.313,-118.768,45.341,-0.082,-0.083,0.426 ,0.1 ,6.625 );
		a.og('brown', 25.09,-10.318,-121.153,45.341,-0.082,-0.083,1.76 ,0.1 ,2.546 );
		a.og('brown', 27.461,-10.321,-122.669,45.341,-0.082,-0.083,1.76 ,0.1 ,2.546 );
		a.og('brown', 30.76,-10.323,-123.613,45.341,-0.082,-0.083,2 ,0.1 ,4 );
		a.og('brown', 33.989,-10.326,-125.189,62.946,-0.053,-0.103,0.788 ,0.1 ,4 );
		a.og('brown', 36.605,-10.331,-127.553,35.76,-0.094,-0.068,0.788 ,0.1 ,4 );
		a.og('brown', 38.209,-10.338,-131.005,12.591,-0.113,-0.025,0.788 ,0.1 ,4 );
		a.og('brown', 38.909,-10.078,-134.141,12.591,-0.113,-0.025,0.788 ,0.1 ,4 );
		a.og('green', 38.909,-10.487,-134.14,12.591,-0.113,-0.025,0.788 ,0.1 ,4 );
		a.og('green', 40.091,-10.493,-137.434,26.264,-0.104,-0.051,0.788 ,0.1 ,4 );
		a.og('green', 41.315,-10.424,-139.913,26.262,3.039,-0.051,0.788 ,0.1 ,4 );
		a.og('brown', 42.108,-10.392,-143.339,0,0,0,0.788 ,0.1 ,4 );
		a.og('brown', 41.511,-10.392,-146.881,0,0,0,2 ,0.1 ,4 );
		a.og('brown', 39.913,-10.392,-150.972,0,0,0,2 ,0.1 ,4 );
		a.og('brown', 39.014,-10.392,-155.121,0,0,0,2 ,0.1 ,4 ); // ENDIN!

		a.og_end(-39.014, -10.392, -156, 0);

	},
	post: function() {
		cc.set_monkey("speed", 0.2);
		cc.set_monkey("steer", 0.03);
		cc.refresh();
	},
    section_id: 0,
    section_update: function() {
    },
    reset: function() {
        this.section_id = 0;
		cleanup.run(false);
		this.init();
    },
    physics_update: function() {},
    render_update: function() {
    	iv(player, scene);
    }
}

function iv(box, scene) {
	if (box.position.z < -1) {
		if ((box.position.z < -60) && (box.position.z > -65)) {
			speed = 0.5 * 0.1;
		} else if ((box.position.z < -105) && (box.position.z > -110)) {
			speed = 0.5 * 0.2;
		} else {
			speed = 0.5 * 0.4;
		}
	}
	if (box.position.z < -88) {
		scene.getMeshByName('P38').position.x += 0.5 *  0.1;
	}
}

