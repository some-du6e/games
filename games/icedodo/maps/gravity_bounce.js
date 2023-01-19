var map = {
    title: "Gravity Bounce",
    song: "env2",
    maker: "uPilot",
    spawn: [0, 0.5, 0],
    init: function() {
        a.c([-1.53, 2.27, -96.86], 0.0);
        a.c([8.71007, 2.27007, -78.13993], 0.0);
        a.c([6.47014, 2.27014, -87.02986000000001], 0.0);
        a.c([-3.6397899999999996, 0.49021, -152.49979], 0.0);
        a.c([-2.72972, 2.27028, -102.23971999999999], 0.0);
        a.c([-3.6396499999999996, 0.49034999999999995, -174.38965], 0.0);
        a.c([-3.0595800000000004, 0.49041999999999997, -163.22958], 0.0);
        a.p([-21.64951, -6.6395100000000005, -5.90951], [0, 0, 0], [2, 33.4, 14.52], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([17.61, -6.64, -11.18], [0, 0, 0], [2, 33.4, 14.52], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([17.61007, -6.6399300000000006, -26.99993], [0, 0, 0], [2, 33.4, 14.52], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([7.45014, -1.00986, -215.99986], [-0.22, 0, 0], [15.22, 2, 9.48], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([-21.64979, -6.6397900000000005, -21.709789999999998], [0, 0, 0], [2, 33.4, 14.52], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([9.74028, -1.00972, -225.13972], [-0.22, 0, 0], [7.22, 2, 9.3], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([11.910350000000001, -1.00965, -234.19965], [-0.22, 0, 0], [5.8, 2, 9.2], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([13.320419999999999, -1.00958, -243.00958], [-0.11, 0, 0], [5.8, 2, 9.2], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([13.69049, -1.00951, -251.80951000000002], [0.03, 0, 0], [5.8, 2, 9.2], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([12.75, -1.01, -260.52], [0.18, 0, 0], [5.8, 2, 9.2], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([10.740070000000001, -1.00993, -269.10992999999996], [0.29, 0, 0], [5.8, 2, 9.2], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([7.8101400000000005, -1.00986, -277.62986], [0.35, 0, 0], [5.8, 2, 9.2], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([5.01021, -1.00979, -286.20979], [0.28, 0, 0], [5.8, 2, 9.2], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([3.3202800000000003, -1.00972, -294.60972000000004], [0.11, 0, 0], [5.8, 2, 9.2], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([15.60035, -0.05965, -42.58965], [0, 0.22, 0], [2, 2, 9.48], "2.0", 0, 0, 0.6, false, false);
        a.p([15.60042, 0.89042, -51.679579999999994], [0, 0, 0], [2, 2, 9.48], "2.0", 0, 0, 0.6, false, false);
        a.p([14.55049, 0.8904900000000001, -60.73951], [0.23, 0, 0], [2, 2, 9.48], "2.0", 0, 0, 0.6, false, false);
        a.p([12.42, 0.89, -69.96], [0.25, 0, 0], [3.3, 2, 9.92], "2.0", 0, 0, 0.6, false, false);
        a.p([9.56007, 0.89007, -79.06993], [0.36, 0, 0], [3.3, 2, 9.92], "2.0", 0, 0, 0.6, false, false);
        a.p([5.46014, 0.8901399999999999, -87.82986000000001], [0.5, 0, 0], [3.3, 2, 9.92], "2.0", 0, 0, 0.6, false, false);
        a.p([0.25021, 0.8902100000000001, -95.93978999999999], [0.63, 0, 0], [3.3, 2, 9.92], "2.0", 0, 0, 0.6, false, false);
        a.p([-3.76972, 0.9102800000000001, -104.02972], [0.29, 0, 0], [3.3, 2, 9.92], "2.0", 0, 0, 0.6, false, false);
        a.p([-5.69965, 0.9603499999999999, -113.43965], [0.12, 0, 0], [3.3, 2, 9.92], "2.0", 0, 0, 0.6, false, false);
        a.p([15.60042, -1.00958, -33.43958], [0, 0, 0], [2, 2, 9.48], "2.0", 0, 0, 0.6, false, false);
        a.p([-5.759510000000001, 10.12049, -122.26951], [0, 0, -1.58], [2, 32.1, 14.68], "2.0", 0, 0, 0.6, false, false);
        a.p([-4.8, -1.01, -153.22], [0, 0, 0], [4.62, 2, 9.48], "2.0", 0, 0, 0.6, false, false);
        a.p([-4.46993, -1.00993, -162.48993000000002], [-0.08, 0, 0], [4.62, 2, 9.48], "2.0", 0, 0, 0.6, false, false);
        a.p([-3.04986, -1.00986, -171.50986], [-0.22, 0, 0], [4.62, 2, 9.48], "2.0", 0, 0, 0.6, false, false);
        a.p([-0.99979, 0.24021, -180.68979], [-0.21, 0.27, 0.02], [4.62, 2, 9.48], "2.0", 0, 0, 0.6, false, false);
        a.p([0.94028, 2.7002800000000002, -189.56972000000002], [-0.21, 0.27, 0.02], [4.62, 2, 9.48], "2.0", 0, 0, 0.6, false, false);
        a.p([-4.79965, -1.00965, -143.71965], [0, 0, 0], [15.22, 2, 9.48], "2.0", 0, 0, 0.6, false, false);
        a.p([2.4104200000000002, -1.00958, -303.64958], [0.08, 0, 0], [5.8, 2, 9.2], "5ad69e,0.7", 0, 0, 0.6, false, false);
        a.p([3.47049, -5.76951, -199.37951], [-0.2, 0, 0], [15.22, 2, 9.48], "2.0", 1.0, 0, 0.6, false, false);
        a.c([12.230070000000001, 2.27007, -68.25993], 0.0);
        a.e([2.29021, 0.74021, -303.83979]);
    },
    post: function() {
        cc.set_monkey("radius", 3.0);
        cc.set_monkey("speed", default_speed * 1.001);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -0.1897199999999999) {
                    a.g(5.0, -0.1, null);
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -6.80972) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -6.889859999999999) {
                    a.g(-5.0, -0.1, null);
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -13.50986) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -13.55965) {
                    a.g(5.0, -0.1, null);
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -20.17965) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -20.41979) {
                    a.g(-5.0, -0.1, null);
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -31.59979) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -34.19) {
                    speed = default_speed * 1.001;
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -45.370000000000005) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -114.92958) {
                    a.g(null, -1.0, null);
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -132.32958) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -193.02986) {
                    speed = default_speed * 1.001;
                    this.section_id += 1
                }
                break;
            case 13:
                if (PZ < -220.10986) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -227.56) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 15:
                if (PZ < -229.10000000000002) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -229.16993) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 17:
                if (PZ < -231.62992999999997) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 18:
                if (PZ < -231.90992999999997) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 19:
                if (PZ < -233.44993) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 20:
                if (PZ < -233.51951000000003) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 21:
                if (PZ < -235.97951) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 22:
                if (PZ < -236.26951) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 23:
                if (PZ < -237.80951000000002) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 24:
                if (PZ < -237.86986000000002) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 25:
                if (PZ < -240.32986) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 26:
                if (PZ < -240.61986) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 27:
                if (PZ < -242.15986) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 28:
                if (PZ < -242.22) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 29:
                if (PZ < -244.67999999999998) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 30:
                if (PZ < -244.84965) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 31:
                if (PZ < -246.38965000000002) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 32:
                if (PZ < -246.45972000000003) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 33:
                if (PZ < -248.91972) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 34:
                if (PZ < -249.19972) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 35:
                if (PZ < -250.73972000000003) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 36:
                if (PZ < -250.80958) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 37:
                if (PZ < -253.26958) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 38:
                if (PZ < -253.54957999999996) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 39:
                if (PZ < -255.08957999999998) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 40:
                if (PZ < -255.15979000000002) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 41:
                if (PZ < -257.61979) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 42:
                if (PZ < -257.89979) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 43:
                if (PZ < -259.43978999999996) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 44:
                if (PZ < -259.50964999999997) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 45:
                if (PZ < -261.96965) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 46:
                if (PZ < -262.25993) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 47:
                if (PZ < -263.79992999999996) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 48:
                if (PZ < -263.85999999999996) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 49:
                if (PZ < -266.32) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 50:
                if (PZ < -266.61) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 51:
                if (PZ < -268.15) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 52:
                if (PZ < -268.20986) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 53:
                if (PZ < -270.66986) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 54:
                if (PZ < -270.95986000000005) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 55:
                if (PZ < -272.49986) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 56:
                if (PZ < -272.56951) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 57:
                if (PZ < -275.02951) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 58:
                if (PZ < -275.30951000000005) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 59:
                if (PZ < -276.84951) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 60:
                if (PZ < -276.91992999999997) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 61:
                if (PZ < -279.37993) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 62:
                if (PZ < -279.79972000000004) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 63:
                if (PZ < -281.33972) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 64:
                if (PZ < -281.40965) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 65:
                if (PZ < -283.86965000000004) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 66:
                if (PZ < -284.14965) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 67:
                if (PZ < -285.68965) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 68:
                if (PZ < -285.75978999999995) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 69:
                if (PZ < -288.21979) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 70:
                if (PZ < -288.49979) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 71:
                if (PZ < -290.03979) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 72:
                if (PZ < -290.10958) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 73:
                if (PZ < -292.56958000000003) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 74:
                if (PZ < -292.84958) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 75:
                if (PZ < -294.38957999999997) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 76:
                if (PZ < -294.45972) {
                    a.g(null, -2.0, null);
                    this.section_id += 1
                }
                break;
            case 77:
                if (PZ < -296.91972000000004) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 78:
                if (PZ < -297.06951000000004) {
                    a.g(null, 7.0, null);
                    this.section_id += 1
                }
                break;
            case 79:
                if (PZ < -299.62951) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('C0', [-1.53, 2.27, -96.86], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [8.71007, 2.27007, -78.13993], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [6.47014, 2.27014, -87.02986000000001], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [-3.6397899999999996, 0.49021, -152.49979], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [-2.72972, 2.27028, -102.23971999999999], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [-3.6396499999999996, 0.49034999999999995, -174.38965], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [-3.0595800000000004, 0.49041999999999997, -163.22958], [0, 0, 0], [2, 2, 2]);
        a.re('P0', [-21.64951, -6.6395100000000005, -5.90951], [0, 0, 0], [2, 33.4, 14.52]);
        a.re('P1', [17.61, -6.64, -11.18], [0, 0, 0], [2, 33.4, 14.52]);
        a.re('P2', [17.61007, -6.6399300000000006, -26.99993], [0, 0, 0], [2, 33.4, 14.52]);
        a.re('P3', [7.45014, -1.00986, -215.99986], [-0.22, 0, 0], [15.22, 2, 9.48]);
        a.re('P4', [-21.64979, -6.6397900000000005, -21.709789999999998], [0, 0, 0], [2, 33.4, 14.52]);
        a.re('P5', [9.74028, -1.00972, -225.13972], [-0.22, 0, 0], [7.22, 2, 9.3]);
        a.re('P6', [11.910350000000001, -1.00965, -234.19965], [-0.22, 0, 0], [5.8, 2, 9.2]);
        a.re('P7', [13.320419999999999, -1.00958, -243.00958], [-0.11, 0, 0], [5.8, 2, 9.2]);
        a.re('P8', [13.69049, -1.00951, -251.80951000000002], [0.03, 0, 0], [5.8, 2, 9.2]);
        a.re('P9', [12.75, -1.01, -260.52], [0.18, 0, 0], [5.8, 2, 9.2]);
        a.re('P10', [10.740070000000001, -1.00993, -269.10992999999996], [0.29, 0, 0], [5.8, 2, 9.2]);
        a.re('P11', [7.8101400000000005, -1.00986, -277.62986], [0.35, 0, 0], [5.8, 2, 9.2]);
        a.re('P12', [5.01021, -1.00979, -286.20979], [0.28, 0, 0], [5.8, 2, 9.2]);
        a.re('P13', [3.3202800000000003, -1.00972, -294.60972000000004], [0.11, 0, 0], [5.8, 2, 9.2]);
        a.re('P14', [15.60035, -0.05965, -42.58965], [0, 0.22, 0], [2, 2, 9.48]);
        a.re('P15', [15.60042, 0.89042, -51.679579999999994], [0, 0, 0], [2, 2, 9.48]);
        a.re('P16', [14.55049, 0.8904900000000001, -60.73951], [0.23, 0, 0], [2, 2, 9.48]);
        a.re('P17', [12.42, 0.89, -69.96], [0.25, 0, 0], [3.3, 2, 9.92]);
        a.re('P18', [9.56007, 0.89007, -79.06993], [0.36, 0, 0], [3.3, 2, 9.92]);
        a.re('P19', [5.46014, 0.8901399999999999, -87.82986000000001], [0.5, 0, 0], [3.3, 2, 9.92]);
        a.re('P20', [0.25021, 0.8902100000000001, -95.93978999999999], [0.63, 0, 0], [3.3, 2, 9.92]);
        a.re('P21', [-3.76972, 0.9102800000000001, -104.02972], [0.29, 0, 0], [3.3, 2, 9.92]);
        a.re('P22', [-5.69965, 0.9603499999999999, -113.43965], [0.12, 0, 0], [3.3, 2, 9.92]);
        a.re('P23', [15.60042, -1.00958, -33.43958], [0, 0, 0], [2, 2, 9.48]);
        a.re('P24', [-5.759510000000001, 10.12049, -122.26951], [0, 0, -1.58], [2, 32.1, 14.68]);
        a.re('P25', [-4.8, -1.01, -153.22], [0, 0, 0], [4.62, 2, 9.48]);
        a.re('P26', [-4.46993, -1.00993, -162.48993000000002], [-0.08, 0, 0], [4.62, 2, 9.48]);
        a.re('P27', [-3.04986, -1.00986, -171.50986], [-0.22, 0, 0], [4.62, 2, 9.48]);
        a.re('P28', [-0.99979, 0.24021, -180.68979], [-0.21, 0.27, 0.02], [4.62, 2, 9.48]);
        a.re('P29', [0.94028, 2.7002800000000002, -189.56972000000002], [-0.21, 0.27, 0.02], [4.62, 2, 9.48]);
        a.re('P30', [-4.79965, -1.00965, -143.71965], [0, 0, 0], [15.22, 2, 9.48]);
        a.re('P31', [2.4104200000000002, -1.00958, -303.64958], [0.08, 0, 0], [5.8, 2, 9.2]);
        a.re('P32', [3.47049, -5.76951, -199.37951], [-0.2, 0, 0], [15.22, 2, 9.48]);
        a.re('C7', [12.230070000000001, 2.27007, -68.25993], [0, 0, 0], [2, 2, 2]);
        a.re('E0', [2.29021, 0.74021, -303.83979], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
