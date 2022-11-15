var map = {
    title: "Shapes",
    song: "env2",
    maker: "David Ye",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([9.00007, 0.00007000000000000001, -128.99993], [1.05, 0, 0], [14, 2, 2], "0000ff", 0, 0, 0.6, false, false);
        a.p([8.85014, 0.00014000000000000001, -139.69986], [-1.05, 0, 0], [14, 2, 2], "0000ff", 0, 0, 0.6, false, false);
        a.p([-8.99979, 0.00021, -138.99979], [1.05, 0, 0], [14, 2, 2], "0000ff", 0, 0, 0.6, false, false);
        a.p([-8.99972, 0.00028000000000000003, -128.99972], [-1.05, 0, 0], [14, 2, 2], "0000ff", 0, 0, 0.6, false, false);
        a.p([20.00035, 0.00035000000000000005, -119.99965], [0, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([20.00042, -5.49958, -19.99958], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([20.00049, 5.50049, -39.99951], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([20, -5.5, -40], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.p([-19.99993, 0.00007000000000000001, -59.999930000000006], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([20.00014, 5.50014, -59.99986], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([20.00021, -5.499790000000001, -59.999790000000004], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([20.00028, 5.50028, -79.99972], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.p([20.00035, 0.00035000000000000005, -39.99965], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([20.00042, -5.49958, -79.99958], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([20.00049, 5.50049, -99.99950999999999], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([20, -5.5, -100], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([20.00007, 5.500069999999999, -119.99993], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([20.00014, -5.49986, -119.99986000000001], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([20.00021, 5.500209999999999, -139.99979], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([20.00028, -5.49972, -139.99972], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.p([20.00035, 0.00035000000000000005, -79.99965], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.p([-19.99958, 0.00042, -39.99958], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([20.00049, 5.50049, -159.99951], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([20, -5.5, -160], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.p([20.00007, 0.00007000000000000001, -99.99993], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([-19.99986, 5.50014, -19.99986], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([20.00021, 5.500209999999999, -19.99979], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([-19.99972, -5.49972, -19.99972], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.p([20.00035, 0.00035000000000000005, -139.99965], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.p([20.00042, 0.00042, -159.99958], [0, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([-19.99951, 5.50049, -39.99951], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([-20, -5.5, -40], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([-19.99993, -5.499930000000001, -59.999930000000006], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.p([20.00014, 0.00014000000000000001, -19.99986], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([-19.99979, 5.500209999999999, -59.999790000000004], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.p([-19.99972, 0.00028000000000000003, -119.99972], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([-19.99965, 5.50035, -79.99965], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([-19.99958, 5.50042, -99.99958000000001], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.p([-19.99951, 0.00049, -79.99951], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([-20, -5.5, -80], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([-19.99993, 5.500069999999999, -119.99993], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.p([-19.99986, 0.00014000000000000001, -99.99986000000001], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([-19.99979, -5.499790000000001, -119.99978999999999], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([-19.99972, 5.50028, -139.99972], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.p([-19.99965, 0.00035000000000000005, -159.99965], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([-19.99958, -5.49958, -139.99958], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.y([-19.99951, 5.50049, -159.99951], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.p([-20, 0, -140], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([-19.99993, -5.499930000000001, -159.99993], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.p([-19.99986, 0.00014000000000000001, -19.99986], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.p([3.52021, 0.00021, -62.78979], [-1.05, 0, 0], [14, 2, 3], "ffff00", 0, 0, 0.6, false, false);
        a.p([-19.99972, 0.00028000000000000003, -39.99972], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([20.00035, 0.00035000000000000005, -19.99965], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([20.00042, 0.00042, -19.99958], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([20.00049, 0.00049, -19.99951], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([20, 0, -80], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([20.00007, 0.00007000000000000001, -99.99993], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([-19.99986, 0.00014000000000000001, -59.99986], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([-19.99979, 0.00021, -79.99979], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([20.00028, 0.00028000000000000003, -39.99972], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([-19.99965, 0.00035000000000000005, -99.99965], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([-19.99958, 0.00042, -119.99958000000001], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([-19.99951, 0.00049, -139.99951], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([20, 0, -120], [-0.79, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([-19.99993, 0.00007000000000000001, -159.99993], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([-19.99986, 0.00014000000000000001, -19.99986], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([20.00021, 0.00021, -59.999790000000004], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([20.00028, 0.00028000000000000003, -139.99972], [0, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([20.00035, 0.00035000000000000005, -159.99965], [-0.79, 0, 0], [2, 10, 2], "ffffff", 0, 0, 0.6, false, false);
        a.p([-5.13958, 0.020419999999999997, -21.319580000000002], [-0.87, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([-2.34951, 0.00049, -19.51951], [-0.35, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([0.00007000000000000001, 0.00007000000000000001, -7.999930000000001], [0, 0, 0], [2, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([0.00014000000000000001, 0.00014000000000000001, -112.77986000000001], [0, 0, 0], [2, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([0.00021, 0.02021, -18.99979], [0, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([2.89028, 0.00028000000000000003, -19.49972], [0.35, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([6.72035, 0.00035000000000000005, -23.59965], [1.22, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([5.41042, 0.020419999999999997, -21.319580000000002], [0.87, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([6.85049, 0.00049, -29.57951], [1.92, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([7.23, 0.02, -26.89], [-1.57, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([3.2600700000000002, 0.00007000000000000001, -34.07993], [2.79, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([0.00014000000000000001, 0.020139999999999998, -34.799859999999995], [0, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([-3.1997899999999997, 0.00021, -34.079789999999996], [-2.79, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([-5.15972, 0.02028, -32.639720000000004], [-2.27, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([-6.9296500000000005, 0.00035000000000000005, -29.57965], [-1.92, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([-7.189579999999999, 0.020419999999999997, -26.889580000000002], [-1.57, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([-6.549510000000001, 0.00049, -23.59951], [-1.22, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([0, 0, -46.2], [0, 0, 0], [2, 2, 22], "1", 0, 0, 0.6, false, false);
        a.p([5.06007, 0.02007, -32.63993], [2.27, 0, 0], [4, 2, 2], "2.0", 0, 0, 0.6, false, false);
        a.p([0.00014000000000000001, 0.00014000000000000001, -57.53986], [0, 0, 0], [14, 2, 3], "ffff00", 0, 0, 0.6, false, false);
        a.p([-3.49979, 0.00021, -62.78979], [1.05, 0, 0], [14, 2, 3], "ffff00", 0, 0, 0.6, false, false);
        a.p([0.00028000000000000003, 0.00028000000000000003, -89.99972], [0, 0, 0], [14, 2, 2], "00ff00", 0, 0, 0.6, false, false);
        a.p([6.00035, 0.00035000000000000005, -95.99965], [-1.57, 0, 0], [14, 2, 2], "00ff00", 0, 0, 0.6, false, false);
        a.p([-5.99958, 0.00042, -95.99958000000001], [-1.57, 0, 0], [14, 2, 2], "00ff00", 0, 0, 0.6, false, false);
        a.p([0.00049, 0.00049, -78.68951], [0, 0, 0], [2, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([0, 0, -102], [0, 0, 0], [14, 2, 2], "00ff00", 0, 0, 0.6, false, false);
        a.p([0.00007000000000000001, 0.00007000000000000001, -123.99993], [0, 0, 0], [14, 2, 2], "0000ff", 0, 0, 0.6, false, false);
        a.p([0.00014000000000000001, 0.00014000000000000001, -143.99986], [0, 0, 0], [14, 2, 2], "0000ff", 0, 0, 0.6, false, false);
        a.p([0.00021, 0.00021, -154.24979], [0, 0, 0], [2, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([20.00028, 0.00028000000000000003, -59.999719999999996], [-0.79, 0, 0], [2, 10, 2], "cabda0", 0, 0, 0.6, false, false);
        a.y([-19.99965, -5.49965, -99.99965], [0, 0, 0], [4, 1, 4], "cabda0", 0, 0, 0.6, false, 1);
        a.e([0.00042, 2.00042, -161.46958]);
    },
    post: function() {
        cc.set_monkey("speed", default_speed * 0.5);
        cc.set_monkey("steer", default_steer * 2.0);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('P0', [9.00007, 0.00007000000000000001, -128.99993], [1.05, 0, 0], [14, 2, 2]);
        a.re('P1', [8.85014, 0.00014000000000000001, -139.69986], [-1.05, 0, 0], [14, 2, 2]);
        a.re('P2', [-8.99979, 0.00021, -138.99979], [1.05, 0, 0], [14, 2, 2]);
        a.re('P3', [-8.99972, 0.00028000000000000003, -128.99972], [-1.05, 0, 0], [14, 2, 2]);
        a.re('P4', [20.00035, 0.00035000000000000005, -119.99965], [0, 0, 0], [2, 10, 2]);
        a.re('Y0', [20.00042, -5.49958, -19.99958], [0, 0, 0], [4, 1, 4]);
        a.re('Y1', [20.00049, 5.50049, -39.99951], [0, 0, 0], [4, 1, 4]);
        a.re('Y2', [20, -5.5, -40], [0, 0, 0], [4, 1, 4]);
        a.re('P5', [-19.99993, 0.00007000000000000001, -59.999930000000006], [-0.79, 0, 0], [2, 10, 2]);
        a.re('Y3', [20.00014, 5.50014, -59.99986], [0, 0, 0], [4, 1, 4]);
        a.re('Y4', [20.00021, -5.499790000000001, -59.999790000000004], [0, 0, 0], [4, 1, 4]);
        a.re('Y5', [20.00028, 5.50028, -79.99972], [0, 0, 0], [4, 1, 4]);
        a.re('P6', [20.00035, 0.00035000000000000005, -39.99965], [-0.79, 0, 0], [2, 10, 2]);
        a.re('Y6', [20.00042, -5.49958, -79.99958], [0, 0, 0], [4, 1, 4]);
        a.re('Y7', [20.00049, 5.50049, -99.99950999999999], [0, 0, 0], [4, 1, 4]);
        a.re('Y8', [20, -5.5, -100], [0, 0, 0], [4, 1, 4]);
        a.re('Y9', [20.00007, 5.500069999999999, -119.99993], [0, 0, 0], [4, 1, 4]);
        a.re('Y10', [20.00014, -5.49986, -119.99986000000001], [0, 0, 0], [4, 1, 4]);
        a.re('Y11', [20.00021, 5.500209999999999, -139.99979], [0, 0, 0], [4, 1, 4]);
        a.re('Y12', [20.00028, -5.49972, -139.99972], [0, 0, 0], [4, 1, 4]);
        a.re('P7', [20.00035, 0.00035000000000000005, -79.99965], [-0.79, 0, 0], [2, 10, 2]);
        a.re('P8', [-19.99958, 0.00042, -39.99958], [-0.79, 0, 0], [2, 10, 2]);
        a.re('Y13', [20.00049, 5.50049, -159.99951], [0, 0, 0], [4, 1, 4]);
        a.re('Y14', [20, -5.5, -160], [0, 0, 0], [4, 1, 4]);
        a.re('P9', [20.00007, 0.00007000000000000001, -99.99993], [-0.79, 0, 0], [2, 10, 2]);
        a.re('Y15', [-19.99986, 5.50014, -19.99986], [0, 0, 0], [4, 1, 4]);
        a.re('Y16', [20.00021, 5.500209999999999, -19.99979], [0, 0, 0], [4, 1, 4]);
        a.re('Y17', [-19.99972, -5.49972, -19.99972], [0, 0, 0], [4, 1, 4]);
        a.re('P10', [20.00035, 0.00035000000000000005, -139.99965], [-0.79, 0, 0], [2, 10, 2]);
        a.re('P11', [20.00042, 0.00042, -159.99958], [0, 0, 0], [2, 10, 2]);
        a.re('Y18', [-19.99951, 5.50049, -39.99951], [0, 0, 0], [4, 1, 4]);
        a.re('Y19', [-20, -5.5, -40], [0, 0, 0], [4, 1, 4]);
        a.re('Y20', [-19.99993, -5.499930000000001, -59.999930000000006], [0, 0, 0], [4, 1, 4]);
        a.re('P12', [20.00014, 0.00014000000000000001, -19.99986], [-0.79, 0, 0], [2, 10, 2]);
        a.re('Y21', [-19.99979, 5.500209999999999, -59.999790000000004], [0, 0, 0], [4, 1, 4]);
        a.re('P13', [-19.99972, 0.00028000000000000003, -119.99972], [-0.79, 0, 0], [2, 10, 2]);
        a.re('Y22', [-19.99965, 5.50035, -79.99965], [0, 0, 0], [4, 1, 4]);
        a.re('Y23', [-19.99958, 5.50042, -99.99958000000001], [0, 0, 0], [4, 1, 4]);
        a.re('P14', [-19.99951, 0.00049, -79.99951], [-0.79, 0, 0], [2, 10, 2]);
        a.re('Y24', [-20, -5.5, -80], [0, 0, 0], [4, 1, 4]);
        a.re('Y25', [-19.99993, 5.500069999999999, -119.99993], [0, 0, 0], [4, 1, 4]);
        a.re('P15', [-19.99986, 0.00014000000000000001, -99.99986000000001], [-0.79, 0, 0], [2, 10, 2]);
        a.re('Y26', [-19.99979, -5.499790000000001, -119.99978999999999], [0, 0, 0], [4, 1, 4]);
        a.re('Y27', [-19.99972, 5.50028, -139.99972], [0, 0, 0], [4, 1, 4]);
        a.re('P16', [-19.99965, 0.00035000000000000005, -159.99965], [-0.79, 0, 0], [2, 10, 2]);
        a.re('Y28', [-19.99958, -5.49958, -139.99958], [0, 0, 0], [4, 1, 4]);
        a.re('Y29', [-19.99951, 5.50049, -159.99951], [0, 0, 0], [4, 1, 4]);
        a.re('P17', [-20, 0, -140], [-0.79, 0, 0], [2, 10, 2]);
        a.re('Y30', [-19.99993, -5.499930000000001, -159.99993], [0, 0, 0], [4, 1, 4]);
        a.re('P18', [-19.99986, 0.00014000000000000001, -19.99986], [-0.79, 0, 0], [2, 10, 2]);
        a.re('P19', [3.52021, 0.00021, -62.78979], [-1.05, 0, 0], [14, 2, 3]);
        a.re('P20', [-19.99972, 0.00028000000000000003, -39.99972], [0, 0, 0], [2, 10, 2]);
        a.re('P21', [20.00035, 0.00035000000000000005, -19.99965], [0, 0, 0], [2, 10, 2]);
        a.re('P22', [20.00042, 0.00042, -19.99958], [0, 0, 0], [2, 10, 2]);
        a.re('P23', [20.00049, 0.00049, -19.99951], [0, 0, 0], [2, 10, 2]);
        a.re('P24', [20, 0, -80], [0, 0, 0], [2, 10, 2]);
        a.re('P25', [20.00007, 0.00007000000000000001, -99.99993], [0, 0, 0], [2, 10, 2]);
        a.re('P26', [-19.99986, 0.00014000000000000001, -59.99986], [0, 0, 0], [2, 10, 2]);
        a.re('P27', [-19.99979, 0.00021, -79.99979], [0, 0, 0], [2, 10, 2]);
        a.re('P28', [20.00028, 0.00028000000000000003, -39.99972], [0, 0, 0], [2, 10, 2]);
        a.re('P29', [-19.99965, 0.00035000000000000005, -99.99965], [0, 0, 0], [2, 10, 2]);
        a.re('P30', [-19.99958, 0.00042, -119.99958000000001], [0, 0, 0], [2, 10, 2]);
        a.re('P31', [-19.99951, 0.00049, -139.99951], [0, 0, 0], [2, 10, 2]);
        a.re('P32', [20, 0, -120], [-0.79, 0, 0], [2, 10, 2]);
        a.re('P33', [-19.99993, 0.00007000000000000001, -159.99993], [0, 0, 0], [2, 10, 2]);
        a.re('P34', [-19.99986, 0.00014000000000000001, -19.99986], [0, 0, 0], [2, 10, 2]);
        a.re('P35', [20.00021, 0.00021, -59.999790000000004], [0, 0, 0], [2, 10, 2]);
        a.re('P36', [20.00028, 0.00028000000000000003, -139.99972], [0, 0, 0], [2, 10, 2]);
        a.re('P37', [20.00035, 0.00035000000000000005, -159.99965], [-0.79, 0, 0], [2, 10, 2]);
        a.re('P38', [-5.13958, 0.020419999999999997, -21.319580000000002], [-0.87, 0, 0], [4, 2, 2]);
        a.re('P39', [-2.34951, 0.00049, -19.51951], [-0.35, 0, 0], [4, 2, 2]);
        a.re('P40', [0.00007000000000000001, 0.00007000000000000001, -7.999930000000001], [0, 0, 0], [2, 2, 20]);
        a.re('P41', [0.00014000000000000001, 0.00014000000000000001, -112.77986000000001], [0, 0, 0], [2, 2, 20]);
        a.re('P42', [0.00021, 0.02021, -18.99979], [0, 0, 0], [4, 2, 2]);
        a.re('P43', [2.89028, 0.00028000000000000003, -19.49972], [0.35, 0, 0], [4, 2, 2]);
        a.re('P44', [6.72035, 0.00035000000000000005, -23.59965], [1.22, 0, 0], [4, 2, 2]);
        a.re('P45', [5.41042, 0.020419999999999997, -21.319580000000002], [0.87, 0, 0], [4, 2, 2]);
        a.re('P46', [6.85049, 0.00049, -29.57951], [1.92, 0, 0], [4, 2, 2]);
        a.re('P47', [7.23, 0.02, -26.89], [-1.57, 0, 0], [4, 2, 2]);
        a.re('P48', [3.2600700000000002, 0.00007000000000000001, -34.07993], [2.79, 0, 0], [4, 2, 2]);
        a.re('P49', [0.00014000000000000001, 0.020139999999999998, -34.799859999999995], [0, 0, 0], [4, 2, 2]);
        a.re('P50', [-3.1997899999999997, 0.00021, -34.079789999999996], [-2.79, 0, 0], [4, 2, 2]);
        a.re('P51', [-5.15972, 0.02028, -32.639720000000004], [-2.27, 0, 0], [4, 2, 2]);
        a.re('P52', [-6.9296500000000005, 0.00035000000000000005, -29.57965], [-1.92, 0, 0], [4, 2, 2]);
        a.re('P53', [-7.189579999999999, 0.020419999999999997, -26.889580000000002], [-1.57, 0, 0], [4, 2, 2]);
        a.re('P54', [-6.549510000000001, 0.00049, -23.59951], [-1.22, 0, 0], [4, 2, 2]);
        a.re('P55', [0, 0, -46.2], [0, 0, 0], [2, 2, 22]);
        a.re('P56', [5.06007, 0.02007, -32.63993], [2.27, 0, 0], [4, 2, 2]);
        a.re('P57', [0.00014000000000000001, 0.00014000000000000001, -57.53986], [0, 0, 0], [14, 2, 3]);
        a.re('P58', [-3.49979, 0.00021, -62.78979], [1.05, 0, 0], [14, 2, 3]);
        a.re('P59', [0.00028000000000000003, 0.00028000000000000003, -89.99972], [0, 0, 0], [14, 2, 2]);
        a.re('P60', [6.00035, 0.00035000000000000005, -95.99965], [-1.57, 0, 0], [14, 2, 2]);
        a.re('P61', [-5.99958, 0.00042, -95.99958000000001], [-1.57, 0, 0], [14, 2, 2]);
        a.re('P62', [0.00049, 0.00049, -78.68951], [0, 0, 0], [2, 2, 20]);
        a.re('P63', [0, 0, -102], [0, 0, 0], [14, 2, 2]);
        a.re('P64', [0.00007000000000000001, 0.00007000000000000001, -123.99993], [0, 0, 0], [14, 2, 2]);
        a.re('P65', [0.00014000000000000001, 0.00014000000000000001, -143.99986], [0, 0, 0], [14, 2, 2]);
        a.re('P66', [0.00021, 0.00021, -154.24979], [0, 0, 0], [2, 2, 20]);
        a.re('P67', [20.00028, 0.00028000000000000003, -59.999719999999996], [-0.79, 0, 0], [2, 10, 2]);
        a.re('Y31', [-19.99965, -5.49965, -99.99965], [0, 0, 0], [4, 1, 4]);
        a.re('E0', [0.00042, 2.00042, -161.46958], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}