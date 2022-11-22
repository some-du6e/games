var map = {
    title: "Road Rage",
    song: "env2",
    maker: "catfishpie",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0.79021, -0.27979, -31.44979], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([0.79028, -0.27972, -35.44972], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.60965, -0.27965, -54.53965], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.60958, -0.27958, -50.52958], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.63049, -0.27951, -64.65951], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.63, -0.28, -68.67], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([0.50007, -0.27993, -91.97993], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([0.50014, -0.27986, -87.96986], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.56979, -0.27979, -87.29979], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.56972, -0.27972, -91.30972], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.63035, -0.27965, -109.71965], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.63042, -0.27958, -105.71958], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([0.99049, -0.27951, -111.95951], [1.9, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-2.8, -0.28, -110.68], [1.9, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.60993, -0.27993, -138.64993], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.60986, -0.27986, -142.65986], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.00021, -0.27979, -167.40979], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.00028, -0.27972, -163.39972], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.65965, -0.27965, -172.40965], [0.83, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.29042, -0.27958, -169.69958], [0.83, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.67049, -0.27951, -176.02951], [1.95, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-2.05, -0.28, -174.56], [1.95, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.32993, -0.27993, -300.18993], [0, 0, 0], [2.8, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.32986, -0.27986, -302.46986], [0, 0, 0], [2.8, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.56979, -0.27979, -212.18979], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.56972, -0.27972, -208.17972], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([0.50035, -0.27965, -208.84965], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([0.50042, -0.27958, -212.85958], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.32951, -0.27951, -589.84951], [0, 0, 0], [2.8, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.33, -0.28, -587.57], [0, 0, 0], [2.8, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.11007, -0.27993, -233.57993], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.11014, -0.27986, -237.58986], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([0.18021, -0.27979, -269.05979], [2.7, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.52972, -0.27972, -265.42972], [2.7, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-0.96965, -0.27965, -471.07965], [3.25, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.40958, -0.27958, -475.05958], [3.25, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.32951, -0.27951, -634.29951], [0, 0, 0], [2.8, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.33, -0.28, -632.02], [0, 0, 0], [2.8, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.67007, -0.27993, -369.54993], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.67014, -0.27986, -373.55986], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.67021, -0.27979, -375.54979], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.36972, -0.27972, -364.34972], [-6.28, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.36965, -0.27965, -362.35965], [-6.28, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.36958, -0.27958, -358.35958], [-6.28, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.30049, -0.27951, -401.40951], [0, 0, 0], [2.8, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.3, -0.28, -399.13], [0, 0, 0], [2.8, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.29007, -0.27993, -381.90993], [0.83, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.65986, -0.27986, -384.61986], [0.83, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.33979, -0.27979, -401.91979], [-6.73, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([0.38028, -0.27972, -405.53972], [-6.73, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.23035, -0.27965, -407.32965], [-6.73, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.26958, -0.27958, -451.31958], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.26951, -0.27951, -449.32951], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.27, -0.28, -445.32], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.23007, -0.27993, -460.99993], [-6.73, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([0.38014, -0.27986, -459.19986], [-6.73, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.33979, -0.27979, -455.58979], [-6.73, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([2.27028, -0.27972, -491.39972], [0.75, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-0.46965, -0.27965, -494.31965], [0.75, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.83958, -0.27958, -495.76958], [0.75, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.36049, -0.27951, -528.03951], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.36, -0.28, -532.04], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([1.36007, -0.27993, -534.02993], [0, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-1.48986, -0.27986, -549.25986], [-6.49, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-0.65979, -0.27979, -553.17979], [-6.49, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([-0.24972, -0.27972, -555.11972], [-6.49, 0, 0], [1.78, 0.84, 0.84], "00000a", 999.0, 0, 0.6, false, false);
        a.p([0.03035, -4.38965, -134.20965], [0, 0, 0], [5.2, 7.58, 364.64], "403f3d", 0, 0, 0.6, false, false);
        a.p([0.03042, -4.38958, -520.34958], [0, 0, 0], [5.2, 7.58, 340.78], "403f3d", 0, 0, 0.6, false, false);
        a.y([-9.53951, 3.49049, -311.25951], [0, -1.57, 0], [5.38, 3.24, 5.38], "47914c", 0, 0, 0.6, false, 1);
        a.y([14.93, 3.49, -100.24], [0, -1.57, 0], [5.38, 3.24, 5.38], "47914c", 0, 0, 0.6, false, 1);
        a.y([21.13007, 3.49007, -426.47993], [0, -1.57, 0], [5.38, 3.24, 5.38], "47914c", 0, 0, 0.6, false, 1);
        a.y([-14.42986, 3.49014, -161.12986], [0, -1.57, 0], [5.38, 3.24, 5.38], "47914c", 0, 0, 0.6, false, 1);
        a.y([9.51021, 3.49021, -203.67979], [0, -1.57, 0], [5.38, 3.24, 5.38], "47914c", 0, 0, 0.6, false, 1);
        a.p([0.00028, 9.79028, -640.58972], [0, 0, 0], [40, 40, 40], "484d63", 999.0, 0, 0.6, false, false);
        a.p([1.26035, 0.88035, -461.05965], [-6.73, 0, 0], [1.9, 1.92, 1.92], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([-1.87958, 1.20042, -495.81958], [0.75, 0, 0], [1.9, 2.4, 1.92], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([1.36049, 1.20049, -534.09951], [0, 0, 0], [1.9, 2.4, 1.92], "5c5c5c", 0, 0, 0.6, false, false);
        a.p([0.03, 38.35, -225.26], [0, 0, 0], [385.2, 10.88, 1317.2], "6eff7f,0.0", 9999.0, 0, 0.6, false, false);
        a.p([0.03007, -4.59993, -225.25993], [0, 0, 0], [385.2, 4.36, 1317.2], "6eff7f", 9999.0, 0, 0.6, false, false);
        a.p([-1.32986, 0.93014, -298.70986], [0, 0.49, 0], [2.36, 0.6, 8], "73737a", 0, 0, 0.6, false, false);
        a.p([-1.32979, 0.93021, -585.78979], [0, 0.49, 0], [2.36, 0.6, 8], "73737a", 0, 0, 0.6, false, false);
        a.p([1.30028, 0.93028, -397.64972], [0, 0.49, 0], [2.36, 0.6, 8], "73737a", 0, 0, 0.6, false, false);
        a.y([-9.53965, -1.03965, -311.25965], [0, 0, 0], [2, 4.6, 2], "7a5d37", 0, 0, 0.6, false, 1);
        a.y([14.93042, -1.03958, -100.23958], [0, 0, 0], [2, 4.6, 2], "7a5d37", 0, 0, 0.6, false, 1);
        a.y([21.13049, -1.03951, -426.47951], [0, 0, 0], [2, 4.6, 2], "7a5d37", 0, 0, 0.6, false, 1);
        a.y([-14.43, -1.04, -161.13], [0, 0, 0], [2, 4.6, 2], "7a5d37", 0, 0, 0.6, false, 1);
        a.y([9.51007, -1.03993, -203.67993], [0, 0, 0], [2, 4.6, 2], "7a5d37", 0, 0, 0.6, false, 1);
        a.p([1.67014, 0.88014, -375.60986], [0, 0, 0], [1.9, 1.92, 1.92], "a30000", 0, 0, 0.6, false, false);
        a.p([1.26021, 0.88021, -407.38979], [-6.73, 0, 0], [1.9, 1.92, 1.92], "a30000", 0, 0, 0.6, false, false);
        a.p([-1.26972, 1.20028, -451.37972], [0, 0, 0], [1.9, 2.4, 1.92], "a30000", 0, 0, 0.6, false, false);
        a.p([-1.36965, 0.88035, -364.40965], [-6.28, 0, 0], [1.9, 1.92, 1.92], "a30000", 0, 0, 0.6, false, false);
        a.p([-1.36958, 1.27042, -360.29958], [-6.28, 0, 0], [1.9, 2.64, 5.78], "ababab", 0, 0, 0.6, false, false);
        a.p([-0.50951, 1.27049, -403.67951], [-6.73, 0, 0], [1.9, 2.64, 5.78], "ababab", 0, 0, 0.6, false, false);
        a.p([-1.27, 0.36, -447.27], [0, 0, 0], [1.9, 0.62, 5.82], "ababab", 0, 0, 0.6, false, false);
        a.p([-0.50993, 1.27007, -457.34993], [-6.73, 0, 0], [1.9, 2.64, 5.78], "ababab", 0, 0, 0.6, false, false);
        a.p([0.94014, 0.36014, -492.81986], [0.75, 0, 0], [1.9, 0.62, 5.82], "ababab", 0, 0, 0.6, false, false);
        a.p([1.36021, 0.36021, -529.97979], [0, 0, 0], [1.9, 0.62, 5.82], "ababab", 0, 0, 0.6, false, false);
        a.p([-1.08972, 1.27028, -551.15972], [-6.49, 0, 0], [1.9, 2.64, 5.78], "ababab", 0, 0, 0.6, false, false);
        a.p([1.67035, 1.27035, -371.49965], [0, 0, 0], [1.9, 2.64, 5.78], "ababab", 0, 0, 0.6, false, false);
        a.p([0.00042, 1.57042, -620.62958], [0, 0, 0], [4.46, 7.26, 3.38], "abddff", 999.0, 0, 0.6, false, false);
        a.p([12.00049, 10.06049, -620.62951], [0, 0, 0], [7, 7, 4], "abddff", 0, 0, 0.6, false, false);
        a.p([-12, 10.06, -620.63], [0, 0, 0], [7, 7, 4], "abddff", 0, 0, 0.6, false, false);
        a.p([12.00007, 22.00007, -620.62993], [0, 0, 0], [7, 7, 4], "abddff", 0, 0, 0.6, false, false);
        a.p([-11.99986, 22.00014, -620.62986], [0, 0, 0], [7, 7, 4], "abddff", 0, 0, 0.6, false, false);
        a.p([0.00021, 22.00021, -620.62979], [0, 0, 0], [7, 7, 4], "abddff", 0, 0, 0.6, false, false);
        a.p([0.00028, 10.06028, -620.62972], [0, 0, 0], [7, 7, 4], "abddff", 0, 0, 0.6, false, false);
        a.p([-1.19965, 0.55035, -473.12965], [3.25, 0, 0], [1.9, 1.06, 5.78], "ff5959", 0, 0, 0.6, false, false);
        a.p([0.79042, 0.55042, -33.39958], [0, 0, 0], [1.9, 1.06, 5.78], "ff5959", 0, 0, 0.6, false, false);
        a.p([0.79049, 1.25049, -33.39951], [0, 0, 0], [1.9, 1.06, 3.46], "ff5959", 0, 0, 0.6, false, false);
        a.p([-0.85, 0.55, -111.34], [1.9, 0, 0], [1.9, 1.06, 5.78], "ff5959", 0, 0, 0.6, false, false);
        a.p([0.50007, 0.55007, -89.91993], [0, 0, 0], [1.9, 1.06, 5.78], "ff5959", 0, 0, 0.6, false, false);
        a.p([0.50014, 1.25014, -89.91986], [0, 0, 0], [1.9, 1.06, 3.46], "ff5959", 0, 0, 0.6, false, false);
        a.p([-0.84979, 1.25021, -111.33979], [1.9, 0, 0], [1.9, 1.06, 3.46], "ff5959", 0, 0, 0.6, false, false);
        a.p([1.00028, 1.25028, -165.34972], [0, 0, 0], [1.9, 1.06, 3.46], "ff5959", 0, 0, 0.6, false, false);
        a.p([1.00035, 0.55035, -165.34965], [0, 0, 0], [1.9, 1.06, 5.78], "ff5959", 0, 0, 0.6, false, false);
        a.p([-1.60958, 1.25042, -52.47958], [0, 0, 0], [1.9, 1.06, 3.46], "59b7ff", 0, 0, 0.6, false, false);
        a.p([1.63049, 0.55049, -66.60951], [0, 0, 0], [1.9, 1.06, 5.78], "e057ff", 0, 0, 0.6, false, false);
        a.p([1.63, 1.25, -66.61], [0, 0, 0], [1.9, 1.06, 3.46], "e057ff", 0, 0, 0.6, false, false);
        a.p([-0.12993, 0.55007, -175.30993], [1.95, 0, 0], [1.9, 1.06, 5.78], "e057ff", 0, 0, 0.6, false, false);
        a.p([-0.12986, 1.25014, -175.30986], [1.95, 0, 0], [1.9, 1.06, 3.46], "e057ff", 0, 0, 0.6, false, false);
        a.p([-0.64979, 0.55021, -267.29979], [2.7, 0, 0], [1.9, 1.06, 5.78], "e057ff", 0, 0, 0.6, false, false);
        a.p([1.63028, 1.25028, -107.65972], [0, 0, 0], [1.9, 1.06, 3.46], "59b7ff", 0, 0, 0.6, false, false);
        a.p([1.63035, 0.55035, -107.65965], [0, 0, 0], [1.9, 1.06, 5.78], "59b7ff", 0, 0, 0.6, false, false);
        a.p([-1.56958, 1.25042, -210.12958], [0, 0, 0], [1.9, 1.06, 3.46], "59b7ff", 0, 0, 0.6, false, false);
        a.p([-1.60951, 0.55049, -52.47951], [0, 0, 0], [1.9, 1.06, 5.78], "59b7ff", 0, 0, 0.6, false, false);
        a.p([-1.2, 1.25, -473.13], [3.25, 0, 0], [1.9, 1.06, 3.46], "ff5959", 0, 0, 0.6, false, false);
        a.p([-0.23993, 0.88007, -555.17993], [-6.49, 0, 0], [1.9, 1.92, 1.92], "a30000", 0, 0, 0.6, false, false);
        a.p([-1.32986, 0.88014, -301.41986], [0, 0, 0], [2.96, 1.64, 3.68], "ff5cd3", 0, 0, 0.6, false, false);
        a.p([-1.32979, 0.88021, -588.49979], [0, 0, 0], [2.96, 1.64, 3.68], "ff5cd3", 0, 0, 0.6, false, false);
        a.p([1.30028, 0.88028, -400.35972], [0, 0, 0], [2.96, 1.64, 3.68], "ff5cd3", 0, 0, 0.6, false, false);
        a.p([-1.56965, 0.55035, -89.24965], [0, 0, 0], [1.9, 1.06, 5.78], "ffca59", 0, 0, 0.6, false, false);
        a.p([-1.56958, 1.25042, -89.24958], [0, 0, 0], [1.9, 1.06, 3.46], "ffca59", 0, 0, 0.6, false, false);
        a.p([-0.13951, 1.25049, -171.01951], [0.83, 0, 0], [1.9, 1.06, 3.46], "ffca59", 0, 0, 0.6, false, false);
        a.p([-0.14, 0.55, -171.02], [0.83, 0, 0], [1.9, 1.06, 5.78], "ffca59", 0, 0, 0.6, false, false);
        a.p([0.50007, 0.55007, -210.79993], [0, 0, 0], [1.9, 1.06, 5.78], "ffca59", 0, 0, 0.6, false, false);
        a.p([-1.60986, 1.25014, -140.59986], [0, 0, 0], [1.9, 1.06, 3.46], "5cff59", 0, 0, 0.6, false, false);
        a.p([-1.60979, 0.55021, -140.59979], [0, 0, 0], [1.9, 1.06, 5.78], "5cff59", 0, 0, 0.6, false, false);
        a.p([1.11028, 0.55028, -235.52972], [0, 0, 0], [1.9, 1.06, 5.78], "5cff59", 0, 0, 0.6, false, false);
        a.p([-1.56965, 0.55035, -210.12965], [0, 0, 0], [1.9, 1.06, 5.78], "59b7ff", 0, 0, 0.6, false, false);
        a.p([0.50042, 1.25042, -210.79958], [0, 0, 0], [1.9, 1.06, 3.46], "ffca59", 0, 0, 0.6, false, false);
        a.p([1.11049, 1.25049, -235.52951], [0, 0, 0], [1.9, 1.06, 3.46], "5cff59", 0, 0, 0.6, false, false);
        a.p([-0.65, 1.25, -267.3], [2.7, 0, 0], [1.9, 1.06, 3.46], "e057ff", 0, 0, 0.6, false, false);
        a.p([-0.13993, 0.55007, -383.22993], [0.83, 0, 0], [1.9, 1.06, 5.78], "ffca59", 0, 0, 0.6, false, false);
        a.p([-0.13986, 1.25014, -383.22986], [0.83, 0, 0], [1.9, 1.06, 3.46], "ffca59", 0, 0, 0.6, false, false);
        a.y([0.94021, 1.55021, -492.90979], [0.75, -1.57, 0], [2.22, 5.92, 2.22], "4e574c", 0, 0, 0.6, false, 1);
        a.y([1.43028, 1.55028, -530.04972], [0, -1.57, 0], [2.22, 5.92, 2.22], "4e574c", 0, 0, 0.6, false, 1);
        a.y([-1.19965, 1.55035, -447.32965], [0, -1.57, 0], [2.22, 5.92, 2.22], "4e574c", 0, 0, 0.6, false, 1);
        a.e([110.00042, 132.21042, -189.99958]);
        a.e([0.00049, 9.52049, -617.07951]);
    },
    post: function() {
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#d1fffc"));
        cc.set_monkey("speed", default_speed * 2.0);
        cc.set_monkey("steer", default_steer * 0.8);
        cc.set_monkey("camera.maxZ", 1000.0);
        cc.set_monkey("gravity", new BABYLON.Vector3(null, -1.8, null));
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -2.489859999999993) {
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -278.54985999999997) {
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.79021, -0.27979, -31.44979], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P1', [0.79028, -0.27972, -35.44972], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P2', [-1.60965, -0.27965, -54.53965], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P3', [-1.60958, -0.27958, -50.52958], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P4', [1.63049, -0.27951, -64.65951], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P5', [1.63, -0.28, -68.67], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P6', [0.50007, -0.27993, -91.97993], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P7', [0.50014, -0.27986, -87.96986], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P8', [-1.56979, -0.27979, -87.29979], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P9', [-1.56972, -0.27972, -91.30972], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P10', [1.63035, -0.27965, -109.71965], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P11', [1.63042, -0.27958, -105.71958], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P12', [0.99049, -0.27951, -111.95951], [1.9, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P13', [-2.8, -0.28, -110.68], [1.9, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P14', [-1.60993, -0.27993, -138.64993], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P15', [-1.60986, -0.27986, -142.65986], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P16', [1.00021, -0.27979, -167.40979], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P17', [1.00028, -0.27972, -163.39972], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P18', [-1.65965, -0.27965, -172.40965], [0.83, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P19', [1.29042, -0.27958, -169.69958], [0.83, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P20', [1.67049, -0.27951, -176.02951], [1.95, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P21', [-2.05, -0.28, -174.56], [1.95, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P22', [-1.32993, -0.27993, -300.18993], [0, 0, 0], [2.8, 0.84, 0.84]);
        a.re('P23', [-1.32986, -0.27986, -302.46986], [0, 0, 0], [2.8, 0.84, 0.84]);
        a.re('P24', [-1.56979, -0.27979, -212.18979], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P25', [-1.56972, -0.27972, -208.17972], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P26', [0.50035, -0.27965, -208.84965], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P27', [0.50042, -0.27958, -212.85958], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P28', [-1.32951, -0.27951, -589.84951], [0, 0, 0], [2.8, 0.84, 0.84]);
        a.re('P29', [-1.33, -0.28, -587.57], [0, 0, 0], [2.8, 0.84, 0.84]);
        a.re('P30', [1.11007, -0.27993, -233.57993], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P31', [1.11014, -0.27986, -237.58986], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P32', [0.18021, -0.27979, -269.05979], [2.7, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P33', [-1.52972, -0.27972, -265.42972], [2.7, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P34', [-0.96965, -0.27965, -471.07965], [3.25, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P35', [-1.40958, -0.27958, -475.05958], [3.25, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P36', [-1.32951, -0.27951, -634.29951], [0, 0, 0], [2.8, 0.84, 0.84]);
        a.re('P37', [-1.33, -0.28, -632.02], [0, 0, 0], [2.8, 0.84, 0.84]);
        a.re('P38', [1.67007, -0.27993, -369.54993], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P39', [1.67014, -0.27986, -373.55986], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P40', [1.67021, -0.27979, -375.54979], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P41', [-1.36972, -0.27972, -364.34972], [-6.28, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P42', [-1.36965, -0.27965, -362.35965], [-6.28, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P43', [-1.36958, -0.27958, -358.35958], [-6.28, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P44', [1.30049, -0.27951, -401.40951], [0, 0, 0], [2.8, 0.84, 0.84]);
        a.re('P45', [1.3, -0.28, -399.13], [0, 0, 0], [2.8, 0.84, 0.84]);
        a.re('P46', [1.29007, -0.27993, -381.90993], [0.83, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P47', [-1.65986, -0.27986, -384.61986], [0.83, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P48', [-1.33979, -0.27979, -401.91979], [-6.73, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P49', [0.38028, -0.27972, -405.53972], [-6.73, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P50', [1.23035, -0.27965, -407.32965], [-6.73, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P51', [-1.26958, -0.27958, -451.31958], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P52', [-1.26951, -0.27951, -449.32951], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P53', [-1.27, -0.28, -445.32], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P54', [1.23007, -0.27993, -460.99993], [-6.73, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P55', [0.38014, -0.27986, -459.19986], [-6.73, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P56', [-1.33979, -0.27979, -455.58979], [-6.73, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P57', [2.27028, -0.27972, -491.39972], [0.75, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P58', [-0.46965, -0.27965, -494.31965], [0.75, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P59', [-1.83958, -0.27958, -495.76958], [0.75, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P60', [1.36049, -0.27951, -528.03951], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P61', [1.36, -0.28, -532.04], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P62', [1.36007, -0.27993, -534.02993], [0, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P63', [-1.48986, -0.27986, -549.25986], [-6.49, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P64', [-0.65979, -0.27979, -553.17979], [-6.49, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P65', [-0.24972, -0.27972, -555.11972], [-6.49, 0, 0], [1.78, 0.84, 0.84]);
        a.re('P66', [0.03035, -4.38965, -134.20965], [0, 0, 0], [5.2, 7.58, 364.64]);
        a.re('P67', [0.03042, -4.38958, -520.34958], [0, 0, 0], [5.2, 7.58, 340.78]);
        a.re('Y0', [-9.53951, 3.49049, -311.25951], [0, -1.57, 0], [5.38, 3.24, 5.38]);
        a.re('Y1', [14.93, 3.49, -100.24], [0, -1.57, 0], [5.38, 3.24, 5.38]);
        a.re('Y2', [21.13007, 3.49007, -426.47993], [0, -1.57, 0], [5.38, 3.24, 5.38]);
        a.re('Y3', [-14.42986, 3.49014, -161.12986], [0, -1.57, 0], [5.38, 3.24, 5.38]);
        a.re('Y4', [9.51021, 3.49021, -203.67979], [0, -1.57, 0], [5.38, 3.24, 5.38]);
        a.re('P68', [0.00028, 9.79028, -640.58972], [0, 0, 0], [40, 40, 40]);
        a.re('P69', [1.26035, 0.88035, -461.05965], [-6.73, 0, 0], [1.9, 1.92, 1.92]);
        a.re('P70', [-1.87958, 1.20042, -495.81958], [0.75, 0, 0], [1.9, 2.4, 1.92]);
        a.re('P71', [1.36049, 1.20049, -534.09951], [0, 0, 0], [1.9, 2.4, 1.92]);
        a.re('P72', [0.03, 38.35, -225.26], [0, 0, 0], [385.2, 10.88, 1317.2]);
        a.re('P73', [0.03007, -4.59993, -225.25993], [0, 0, 0], [385.2, 4.36, 1317.2]);
        a.re('P74', [-1.32986, 0.93014, -298.70986], [0, 0.49, 0], [2.36, 0.6, 8]);
        a.re('P75', [-1.32979, 0.93021, -585.78979], [0, 0.49, 0], [2.36, 0.6, 8]);
        a.re('P76', [1.30028, 0.93028, -397.64972], [0, 0.49, 0], [2.36, 0.6, 8]);
        a.re('Y5', [-9.53965, -1.03965, -311.25965], [0, 0, 0], [2, 4.6, 2]);
        a.re('Y6', [14.93042, -1.03958, -100.23958], [0, 0, 0], [2, 4.6, 2]);
        a.re('Y7', [21.13049, -1.03951, -426.47951], [0, 0, 0], [2, 4.6, 2]);
        a.re('Y8', [-14.43, -1.04, -161.13], [0, 0, 0], [2, 4.6, 2]);
        a.re('Y9', [9.51007, -1.03993, -203.67993], [0, 0, 0], [2, 4.6, 2]);
        a.re('P77', [1.67014, 0.88014, -375.60986], [0, 0, 0], [1.9, 1.92, 1.92]);
        a.re('P78', [1.26021, 0.88021, -407.38979], [-6.73, 0, 0], [1.9, 1.92, 1.92]);
        a.re('P79', [-1.26972, 1.20028, -451.37972], [0, 0, 0], [1.9, 2.4, 1.92]);
        a.re('P80', [-1.36965, 0.88035, -364.40965], [-6.28, 0, 0], [1.9, 1.92, 1.92]);
        a.re('P81', [-1.36958, 1.27042, -360.29958], [-6.28, 0, 0], [1.9, 2.64, 5.78]);
        a.re('P82', [-0.50951, 1.27049, -403.67951], [-6.73, 0, 0], [1.9, 2.64, 5.78]);
        a.re('P83', [-1.27, 0.36, -447.27], [0, 0, 0], [1.9, 0.62, 5.82]);
        a.re('P84', [-0.50993, 1.27007, -457.34993], [-6.73, 0, 0], [1.9, 2.64, 5.78]);
        a.re('P85', [0.94014, 0.36014, -492.81986], [0.75, 0, 0], [1.9, 0.62, 5.82]);
        a.re('P86', [1.36021, 0.36021, -529.97979], [0, 0, 0], [1.9, 0.62, 5.82]);
        a.re('P87', [-1.08972, 1.27028, -551.15972], [-6.49, 0, 0], [1.9, 2.64, 5.78]);
        a.re('P88', [1.67035, 1.27035, -371.49965], [0, 0, 0], [1.9, 2.64, 5.78]);
        a.re('P89', [0.00042, 1.57042, -620.62958], [0, 0, 0], [4.46, 7.26, 3.38]);
        a.re('P90', [12.00049, 10.06049, -620.62951], [0, 0, 0], [7, 7, 4]);
        a.re('P91', [-12, 10.06, -620.63], [0, 0, 0], [7, 7, 4]);
        a.re('P92', [12.00007, 22.00007, -620.62993], [0, 0, 0], [7, 7, 4]);
        a.re('P93', [-11.99986, 22.00014, -620.62986], [0, 0, 0], [7, 7, 4]);
        a.re('P94', [0.00021, 22.00021, -620.62979], [0, 0, 0], [7, 7, 4]);
        a.re('P95', [0.00028, 10.06028, -620.62972], [0, 0, 0], [7, 7, 4]);
        a.re('P96', [-1.19965, 0.55035, -473.12965], [3.25, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P97', [0.79042, 0.55042, -33.39958], [0, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P98', [0.79049, 1.25049, -33.39951], [0, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P99', [-0.85, 0.55, -111.34], [1.9, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P100', [0.50007, 0.55007, -89.91993], [0, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P101', [0.50014, 1.25014, -89.91986], [0, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P102', [-0.84979, 1.25021, -111.33979], [1.9, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P103', [1.00028, 1.25028, -165.34972], [0, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P104', [1.00035, 0.55035, -165.34965], [0, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P105', [-1.60958, 1.25042, -52.47958], [0, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P106', [1.63049, 0.55049, -66.60951], [0, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P107', [1.63, 1.25, -66.61], [0, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P108', [-0.12993, 0.55007, -175.30993], [1.95, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P109', [-0.12986, 1.25014, -175.30986], [1.95, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P110', [-0.64979, 0.55021, -267.29979], [2.7, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P111', [1.63028, 1.25028, -107.65972], [0, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P112', [1.63035, 0.55035, -107.65965], [0, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P113', [-1.56958, 1.25042, -210.12958], [0, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P114', [-1.60951, 0.55049, -52.47951], [0, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P115', [-1.2, 1.25, -473.13], [3.25, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P116', [-0.23993, 0.88007, -555.17993], [-6.49, 0, 0], [1.9, 1.92, 1.92]);
        a.re('P117', [-1.32986, 0.88014, -301.41986], [0, 0, 0], [2.96, 1.64, 3.68]);
        a.re('P118', [-1.32979, 0.88021, -588.49979], [0, 0, 0], [2.96, 1.64, 3.68]);
        a.re('P119', [1.30028, 0.88028, -400.35972], [0, 0, 0], [2.96, 1.64, 3.68]);
        a.re('P120', [-1.56965, 0.55035, -89.24965], [0, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P121', [-1.56958, 1.25042, -89.24958], [0, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P122', [-0.13951, 1.25049, -171.01951], [0.83, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P123', [-0.14, 0.55, -171.02], [0.83, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P124', [0.50007, 0.55007, -210.79993], [0, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P125', [-1.60986, 1.25014, -140.59986], [0, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P126', [-1.60979, 0.55021, -140.59979], [0, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P127', [1.11028, 0.55028, -235.52972], [0, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P128', [-1.56965, 0.55035, -210.12965], [0, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P129', [0.50042, 1.25042, -210.79958], [0, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P130', [1.11049, 1.25049, -235.52951], [0, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P131', [-0.65, 1.25, -267.3], [2.7, 0, 0], [1.9, 1.06, 3.46]);
        a.re('P132', [-0.13993, 0.55007, -383.22993], [0.83, 0, 0], [1.9, 1.06, 5.78]);
        a.re('P133', [-0.13986, 1.25014, -383.22986], [0.83, 0, 0], [1.9, 1.06, 3.46]);
        a.re('Y10', [0.94021, 1.55021, -492.90979], [0.75, -1.57, 0], [2.22, 5.92, 2.22]);
        a.re('Y11', [1.43028, 1.55028, -530.04972], [0, -1.57, 0], [2.22, 5.92, 2.22]);
        a.re('Y12', [-1.19965, 1.55035, -447.32965], [0, -1.57, 0], [2.22, 5.92, 2.22]);
        a.re('E0', [110.00042, 132.21042, -189.99958], [0, 0, 0], [1, 1, 1]);
        a.re('E1', [0.00049, 9.52049, -617.07951], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
