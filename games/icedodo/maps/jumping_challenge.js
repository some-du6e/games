var map = {
    title: "Jumping Challenge",
    song: "env2",
    maker: "Moosh",
    spawn: [0, 0.5, 0],
    init: function() {
        a.s([0.00007, 3.56007, -116.63993], 36.82, "a8d1df", 0, 0, 0.6, true);
        a.s([58.05014, 3.56014, -203.10986], 36.82, "a8d1df", 0, 0, 0.6, true);
        a.s([-72.53979, 3.56021, -234.06979], 36.82, "a8d1df", 0, 0, 0.6, true);
        a.s([224.11028, 3.56028, -168.46972], 36.82, "a8d1df", 0, 0, 0.6, true);
        a.s([263.07035, 3.56035, -250.04965], 36.82, "a8d1df", 0, 0, 0.6, true);
        a.s([-243.45958, 3.56042, -203.22958], 36.82, "a8d1df", 0, 0, 0.6, true);
        a.s([263.07049, 3.56049, -349.13951], 36.82, "a8d1df", 0, 0, 0.6, true);
        a.s([-223.65, 3.56, -349.14], 36.82, "a8d1df", 0, 0, 0.6, true);
        a.s([-141.07993, 3.56007, -410.42993], 36.82, "a8d1df", 0, 0, 0.6, true);
        a.s([104.40014, 3.56014, -389.24986], 36.82, "a8d1df", 0, 0, 0.6, true);
        a.p([0.00035, 17.42035, -102.21965], [0, 0.52, 0], [2, 0.72, 19], "b4ce73", 0, 0, 0.6, false, false);
        a.p([0.00042, 15.92042, -309.28958], [0, 0, 0], [2, 0.72, 9.96], "b4ce73", 0, 0, 0.6, false, false);
        a.p([0.00049, -1.89951, -5.49951], [0, 0, 0], [2, 0.72, 14.28], "b4ce73", 0, 0, 0.6, true, false);
        a.p([0, -1.9, -39.37], [0, 0, 0], [2, 0.72, 8.54], "b4ce73", 0, 0, 0.6, true, false);
        a.p([0.00007, 1.44007, -74.61993], [0, 0.52, 0], [2, 0.72, 19], "b4ce73", 0, 0, 0.6, true, false);
        a.p([0.00014, 22.10014, -119.71986], [0, 0, 0], [2, 0.72, 19], "b4ce73", 0, 0, 0.6, true, false);
        a.p([0.00021, 0.53021, -274.43979], [0, 0, 0], [2, 0.72, 14.84], "b4ce73", 0, 0, 0.6, true, false);
        a.p([0.00028, 0.53028, -180.00972], [0, 0, 0], [2, 0.72, 32.32], "b4ce73", 0, 0, 0.6, true, false);
        a.p([0.00035, -1.16965, -390.60965], [0, 0, 0], [2.18, 42.72, 129.86], "b4ce73,0.0", 0, 0, 0.6, true, true);
        a.p([0.00042, -7.08958, -339.67958], [0, 0, 0], [4, 2, 2], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00049, -0.38951, -350.30951], [0, 0, 0], [4, 3, 3], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0, 10.09, -370.84], [0, 0, 0], [4, 4, 4], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00007, -16.54993, -349.86993], [0, 0, 0], [4, 4, 4], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00014, -4.31986, -367.19986], [0, 0, 0], [4, 2, 2], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00021, 15.92021, -337.78979], [0, 0, 0], [4, 4, 4], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00028, -13.49972, -386.55972], [0, 0, 0], [4, 5, 5], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00035, 0.92035, -385.10965], [0, 0, 0], [4, 4, 4], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00042, 3.98042, -404.90958], [0, 0, 0], [4, 3, 3], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00049, -3.59951, -405.48951], [0, 0, 0], [4, 2, 2], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0, -4.03, -419.91], [0, 0, 0], [4, 3, 3], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00007, -15.67993, -413.06993], [0, 0, 0], [4, 3, 3], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00014, 16.93014, -398.79986], [0, 0, 0], [4, 3, 3], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00021, 11.98021, -429.36979], [0, 0, 0], [4, 5, 5], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00028, 0.77028, -436.93972], [0, 0, 0], [4, 2, 2], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00035, -0.53965, -448.73965], [0, 0, 0], [4, 3, 3], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00042, -9.99958, -440.57958], [0, 0, 0], [4, 4, 4], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00049, 9.07049, -357.00951], [0, 0, 0], [4, 3, 3], "ff0000", 9999.0, 0, 0.6, false, false);
        a.e([0.00042, -3.09958, -453.41958]);
    },
    post: function() {
        cc.set_monkey("speed", default_speed * 1.1);
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#ecb657"));
        cc.set_monkey("steer", default_steer * 0.0);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -48.34979) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -50.34979) {
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -67.83965) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -69.83965) {
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -70.28972) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -72.28972) {
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -72.68986) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -74.68986) {
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -75.22958) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -77.22958) {
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -77.55958) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -79.55958) {
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -79.75951) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 13:
                if (PZ < -81.75951) {
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -82.09) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 15:
                if (PZ < -84.09) {
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -84.28979) {
                    this.section_id += 1
                }
                break;
            case 17:
                if (PZ < -86.28979) {
                    this.section_id += 1
                }
                break;
            case 18:
                if (PZ < -87.90972) {
                    this.section_id += 1
                }
                break;
            case 19:
                if (PZ < -89.90972) {
                    this.section_id += 1
                }
                break;
            case 20:
                if (PZ < -90.40993) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 21:
                if (PZ < -92.40993) {
                    this.section_id += 1
                }
                break;
            case 22:
                if (PZ < -92.63986) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 23:
                if (PZ < -94.63986) {
                    this.section_id += 1
                }
                break;
            case 24:
                if (PZ < -96.46) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 25:
                if (PZ < -98.46) {
                    this.section_id += 1
                }
                break;
            case 26:
                if (PZ < -98.82979) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 27:
                if (PZ < -100.82979) {
                    this.section_id += 1
                }
                break;
            case 28:
                if (PZ < -101.34993) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 29:
                if (PZ < -103.34993) {
                    this.section_id += 1
                }
                break;
            case 30:
                if (PZ < -103.58972) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 31:
                if (PZ < -105.58972) {
                    this.section_id += 1
                }
                break;
            case 32:
                if (PZ < -105.79965) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 33:
                if (PZ < -107.79965) {
                    this.section_id += 1
                }
                break;
            case 34:
                if (PZ < -108.17958) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 35:
                if (PZ < -110.17958) {
                    this.section_id += 1
                }
                break;
            case 36:
                if (PZ < -110.64986) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 37:
                if (PZ < -112.64986) {
                    this.section_id += 1
                }
                break;
            case 38:
                if (PZ < -113.02951) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 39:
                if (PZ < -115.02951) {
                    this.section_id += 1
                }
                break;
            case 40:
                if (PZ < -115.34) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 41:
                if (PZ < -117.34) {
                    this.section_id += 1
                }
                break;
            case 42:
                if (PZ < -117.60993) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 43:
                if (PZ < -119.60993) {
                    this.section_id += 1
                }
                break;
            case 44:
                if (PZ < -120.09951) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 45:
                if (PZ < -122.09951) {
                    this.section_id += 1
                }
                break;
            case 46:
                if (PZ < -132.97965) {
                    this.section_id += 1
                }
                break;
            case 47:
                if (PZ < -134.97965) {
                    this.section_id += 1
                }
                break;
            case 48:
                if (PZ < -143.93972) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 49:
                if (PZ < -145.93972) {
                    this.section_id += 1
                }
                break;
            case 50:
                if (PZ < -156.34965) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 51:
                if (PZ < -158.34965) {
                    this.section_id += 1
                }
                break;
            case 52:
                if (PZ < -159.43986) {
                    rotation = 0.0 * Math.PI / 180;
                    speed = default_speed * 2.0;
                    a.jh(2.0);
                    this.section_id += 1
                }
                break;
            case 53:
                if (PZ < -266.75986) {
                    speed = cc.get("speed", null);
                    a.jh(null);
                    this.section_id += 1
                }
                break;
            case 54:
                if (PZ < -267.50979) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 55:
                if (PZ < -269.50979) {
                    this.section_id += 1
                }
                break;
            case 56:
                if (PZ < -270.08979) {
                    a.jh(1.5);
                    this.section_id += 1
                }
                break;
            case 57:
                if (PZ < -286.30979) {
                    a.jh(null);
                    this.section_id += 1
                }
                break;
            case 58:
                if (PZ < -311.63993) {
                    rotation = 0.0 * Math.PI / 180;
                    this.section_id += 1
                }
                break;
            case 59:
                if (PZ < -313.63993) {
                    this.section_id += 1
                }
                break;
            case 60:
                if (PZ < -314.13972) {
                    a.jh(1.5);
                    a.js(0.1);
                    a.g(null, 0.1, null);
                    this.section_id += 1
                }
                break;
            case 61:
                if (PZ < -463.39972) {
                    a.jh(null);
                    a.js(null);
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('S0', [0.00007, 3.56007, -116.63993], [0, 0, 0], [36.82, 36.82, 36.82]);
        a.re('S1', [58.05014, 3.56014, -203.10986], [0, 0, 0], [36.82, 36.82, 36.82]);
        a.re('S2', [-72.53979, 3.56021, -234.06979], [0, 0, 0], [36.82, 36.82, 36.82]);
        a.re('S3', [224.11028, 3.56028, -168.46972], [0, 0, 0], [36.82, 36.82, 36.82]);
        a.re('S4', [263.07035, 3.56035, -250.04965], [0, 0, 0], [36.82, 36.82, 36.82]);
        a.re('S5', [-243.45958, 3.56042, -203.22958], [0, 0, 0], [36.82, 36.82, 36.82]);
        a.re('S6', [263.07049, 3.56049, -349.13951], [0, 0, 0], [36.82, 36.82, 36.82]);
        a.re('S7', [-223.65, 3.56, -349.14], [0, 0, 0], [36.82, 36.82, 36.82]);
        a.re('S8', [-141.07993, 3.56007, -410.42993], [0, 0, 0], [36.82, 36.82, 36.82]);
        a.re('S9', [104.40014, 3.56014, -389.24986], [0, 0, 0], [36.82, 36.82, 36.82]);
        a.re('P0', [0.00035, 17.42035, -102.21965], [0, 0.52, 0], [2, 0.72, 19]);
        a.re('P1', [0.00042, 15.92042, -309.28958], [0, 0, 0], [2, 0.72, 9.96]);
        a.re('P2', [0.00049, -1.89951, -5.49951], [0, 0, 0], [2, 0.72, 14.28]);
        a.re('P3', [0, -1.9, -39.37], [0, 0, 0], [2, 0.72, 8.54]);
        a.re('P4', [0.00007, 1.44007, -74.61993], [0, 0.52, 0], [2, 0.72, 19]);
        a.re('P5', [0.00014, 22.10014, -119.71986], [0, 0, 0], [2, 0.72, 19]);
        a.re('P6', [0.00021, 0.53021, -274.43979], [0, 0, 0], [2, 0.72, 14.84]);
        a.re('P7', [0.00028, 0.53028, -180.00972], [0, 0, 0], [2, 0.72, 32.32]);
        a.re('P8', [0.00035, -1.16965, -390.60965], [0, 0, 0], [2.18, 42.72, 129.86]);
        a.re('P9', [0.00042, -7.08958, -339.67958], [0, 0, 0], [4, 2, 2]);
        a.re('P10', [0.00049, -0.38951, -350.30951], [0, 0, 0], [4, 3, 3]);
        a.re('P11', [0, 10.09, -370.84], [0, 0, 0], [4, 4, 4]);
        a.re('P12', [0.00007, -16.54993, -349.86993], [0, 0, 0], [4, 4, 4]);
        a.re('P13', [0.00014, -4.31986, -367.19986], [0, 0, 0], [4, 2, 2]);
        a.re('P14', [0.00021, 15.92021, -337.78979], [0, 0, 0], [4, 4, 4]);
        a.re('P15', [0.00028, -13.49972, -386.55972], [0, 0, 0], [4, 5, 5]);
        a.re('P16', [0.00035, 0.92035, -385.10965], [0, 0, 0], [4, 4, 4]);
        a.re('P17', [0.00042, 3.98042, -404.90958], [0, 0, 0], [4, 3, 3]);
        a.re('P18', [0.00049, -3.59951, -405.48951], [0, 0, 0], [4, 2, 2]);
        a.re('P19', [0, -4.03, -419.91], [0, 0, 0], [4, 3, 3]);
        a.re('P20', [0.00007, -15.67993, -413.06993], [0, 0, 0], [4, 3, 3]);
        a.re('P21', [0.00014, 16.93014, -398.79986], [0, 0, 0], [4, 3, 3]);
        a.re('P22', [0.00021, 11.98021, -429.36979], [0, 0, 0], [4, 5, 5]);
        a.re('P23', [0.00028, 0.77028, -436.93972], [0, 0, 0], [4, 2, 2]);
        a.re('P24', [0.00035, -0.53965, -448.73965], [0, 0, 0], [4, 3, 3]);
        a.re('P25', [0.00042, -9.99958, -440.57958], [0, 0, 0], [4, 4, 4]);
        a.re('P26', [0.00049, 9.07049, -357.00951], [0, 0, 0], [4, 3, 3]);
        a.re('E0', [0.00042, -3.09958, -453.41958], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
