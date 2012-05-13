// data from www.w3.org/XML/Binary/2005/03/test-data/Over100K/periodic.xml
var elements = [
    {name:"Actinium",atomic_weight:227,atomic_number:89,oxidation_states:"3",boiling_point:3470,symbol:"Ac",density:10.07,electron_configuration:"[Rn] 6d1 7s2",electronegativity:1.1,atomic_radius:1.88,atomic_volume:22.5,specific_heat_capacity:0.12,ionization_potential:5.17,thermal_conductivity:12,period:7,classification:"actinides"},
    {name:"Aluminum",atomic_weight:26.98154,atomic_number:13,oxidation_states:"3",boiling_point:2740,melting_point:933.5,symbol:"Al",density:2.7,electron_configuration:"[Ne] 3s2 p1",covalent_radius:1.18,electronegativity:1.61,atomic_radius:1.43,heat_of_vaporization:290.8,atomic_volume:10,heat_of_fusion:10.7,ionization_potential:5.986,specific_heat_capacity:0.9,thermal_conductivity:237,group:13,period:3,classification:"other_metals"},
    {name:"Americium",atomic_weight:243,atomic_number:95,oxidation_states:"6,5,4,3",boiling_point:2880,melting_point:1449,symbol:"Am",density:13.7,electron_configuration:"[Rn] 5f7 7s2",electronegativity:1.3,atomic_radius:1.84,atomic_volume:20.8,ionization_potential:6,thermal_conductivity:10,period:7,classification:"actinides"},
    {name:"Antimony",atomic_weight:121.757,atomic_number:51,oxidation_states:"+/-3,5",boiling_point:1860,melting_point:903.91,symbol:"Sb",density:6.69,electron_configuration:"[Kr] 4d10 5s2 p3",covalent_radius:1.4,electronegativity:2.05,atomic_radius:1.59,heat_of_vaporization:67.97,atomic_volume:18.4,heat_of_fusion:19.83,ionization_potential:8.641,specific_heat_capacity:0.207,thermal_conductivity:24.3,group:15,period:5,classification:"semi_metals"},
    {name:"Argon",atomic_weight:39.948,atomic_number:18,boiling_point:87.45,melting_point:83.95,symbol:"Ar",density:1.784,electron_configuration:"[Ne] 3s2 p6",covalent_radius:0.98,electronegativity:0,atomic_radius:0.88,heat_of_vaporization:6.506,atomic_volume:24.2,heat_of_fusion:1.188,ionization_potential:15.759,specific_heat_capacity:0.52,thermal_conductivity:0.0177,group:18,period:3,classification:"noble_gases"},
    {name:"Arsenic",atomic_weight:74.9216,atomic_number:33,oxidation_states:"+/-3,5",boiling_point:876,melting_point:1090,symbol:"As",density:5.78,electron_configuration:"[Ar] 3d10 4s2 p3",covalent_radius:1.2,electronegativity:2.18,atomic_radius:1.39,heat_of_vaporization:32.4,atomic_volume:13.1,heat_of_fusion:27.7,ionization_potential:9.81,specific_heat_capacity:0.33,thermal_conductivity:50,group:15,period:4,classification:"semi_metals"},
    {name:"Astatine",atomic_weight:210,atomic_number:85,oxidation_states:"+/-1,3,5,7",boiling_point:610,melting_point:575,symbol:"At",electron_configuration:"[Xe] 4f14 5d10 6s2 p5",covalent_radius:1.47,electronegativity:2.2,atomic_radius:1.45,heat_of_vaporization:30,heat_of_fusion:12,thermal_conductivity:1.7,period:6,group:17,classification:"halogens"},
    {name:"Gold",atomic_weight:196.9665,atomic_number:79,oxidation_states:"3,1",boiling_point:3130,melting_point:1337.58,symbol:"Au",density:19.3,electron_configuration:"[Xe] 4f14 5d10 6s1",covalent_radius:1.34,electronegativity:2.54,atomic_radius:1.46,heat_of_vaporization:324.43,atomic_volume:10.2,heat_of_fusion:12.36,ionization_potential:9.225,specific_heat_capacity:0.128,thermal_conductivity:317,period:6,group:11,classification:"transition_metals"},
    {name:"Boron",atomic_weight:10.811,atomic_number:5,oxidation_states:"3",boiling_point:4275,melting_point:2365,symbol:"B",density:2.34,electron_configuration:"1s2 2s2 p1",covalent_radius:0.82,electronegativity:2.04,atomic_radius:0.98,heat_of_vaporization:507.8,atomic_volume:4.6,heat_of_fusion:22.6,ionization_potential:8.298,specific_heat_capacity:1.026,thermal_conductivity:27,group:13,period:2,classification:"semi_metals"},
    {name:"Barium",atomic_weight:137.33,atomic_number:56,oxidation_states:"2",boiling_point:2078,melting_point:1002,symbol:"Ba",density:3.59,electron_configuration:"[Xe] 6s2",covalent_radius:1.98,electronegativity:0.89,atomic_radius:2.22,heat_of_vaporization:140.2,atomic_volume:39,heat_of_fusion:8.01,ionization_potential:5.212,specific_heat_capacity:0.204,thermal_conductivity:18.4,period:6,group:2,classification:"alkali_earth_metals"},
    {name:"Beryllium",atomic_weight:9.01218,atomic_number:4,oxidation_states:"2",boiling_point:3243,melting_point:1560,symbol:"Be",density:1.85,electron_configuration:"1s2 2s2",covalent_radius:0.9,electronegativity:1.57,atomic_radius:1.12,heat_of_vaporization:297,atomic_volume:5,heat_of_fusion:11.71,ionization_potential:9.322,specific_heat_capacity:1.825,thermal_conductivity:200,group:2,period:2,classification:"alkali_earth_metals"},
    {name:"Bohrium",atomic_weight:262,atomic_number:107,symbol:"Bh",electron_configuration:"[Rn] 5f14 6d5 7s2",period:7,group:7,classification:"transition_metals"},
    {name:"Bismuth",atomic_weight:208.9804,atomic_number:83,oxidation_states:"3,5",boiling_point:1837,melting_point:544.59,symbol:"Bi",density:9.75,electron_configuration:"[Xe] 4f14 5d10 6s2 p3",covalent_radius:1.46,electronegativity:2.02,atomic_radius:1.7,heat_of_vaporization:179,atomic_volume:21.3,heat_of_fusion:11,ionization_potential:7.289,specific_heat_capacity:0.122,thermal_conductivity:7.87,period:6,group:15,classification:"other_metals"},
    {name:"Berkelium",atomic_weight:247,atomic_number:97,oxidation_states:"4,3",symbol:"Bk",electron_configuration:"[Rn] 5f9 7s2",electronegativity:1.3,ionization_potential:6.23,thermal_conductivity:10,period:7,classification:"actinides"},
    {name:"Bromine",atomic_weight:79.904,atomic_number:35,oxidation_states:"+/-1,5",boiling_point:331.85,melting_point:265.95,symbol:"Br",density:3.12,electron_configuration:"[Ar] 3d10 4s2 p5",covalent_radius:1.14,electronegativity:2.96,atomic_radius:1.12,heat_of_vaporization:14.725,atomic_volume:23.5,heat_of_fusion:5.286,ionization_potential:11.814,specific_heat_capacity:0.226,thermal_conductivity:0.122,group:17,period:4,classification:"halogens"},
    {name:"Carbon",atomic_weight:12.011,atomic_number:6,oxidation_states:"+/-4,2",boiling_point:5100,melting_point:3825,symbol:"C",density:2.26,electron_configuration:"1s2 2s2 p2",covalent_radius:0.77,electronegativity:2.55,atomic_radius:0.91,heat_of_vaporization:715,atomic_volume:5.3,ionization_potential:11.26,specific_heat_capacity:0.709,thermal_conductivity:155,group:14,period:2,classification:"non_metals"},
    {name:"Calcium",atomic_weight:40.078,atomic_number:20,oxidation_states:"2",boiling_point:1757,melting_point:1112,symbol:"Ca",density:1.55,electron_configuration:"[Ar] 4s2",covalent_radius:1.74,electronegativity:1,atomic_radius:1.97,heat_of_vaporization:154.67,atomic_volume:29.9,heat_of_fusion:8.53,ionization_potential:6.113,specific_heat_capacity:0.647,thermal_conductivity:200,group:2,period:4,classification:"alkali_earth_metals"},
    {name:"Cadmium",atomic_weight:112.41,atomic_number:48,oxidation_states:"2",boiling_point:1040,melting_point:594.26,symbol:"Cd",density:8.65,electron_configuration:"[Kr] 4d10 5s2",covalent_radius:1.41,electronegativity:1.69,atomic_radius:1.71,heat_of_vaporization:99.87,atomic_volume:13.1,heat_of_fusion:6.07,ionization_potential:8.993,specific_heat_capacity:0.233,thermal_conductivity:96.8,group:12,period:5,classification:"other_metals"},
    {name:"Cerium",atomic_weight:140.12,atomic_number:58,oxidation_states:"3,4",boiling_point:3715,melting_point:1071,symbol:"Ce",density:6.77,electron_configuration:"[Xe] 4f1 5d1 6s2",covalent_radius:1.65,electronegativity:1.12,atomic_radius:1.81,heat_of_vaporization:313.8,atomic_volume:21,heat_of_fusion:9.2,ionization_potential:5.47,specific_heat_capacity:0.19,thermal_conductivity:11.4,period:6,classification:"lanthanides"},
    {name:"Californium",atomic_weight:251,atomic_number:98,oxidation_states:"3",melting_point:1170,symbol:"Cf",electron_configuration:"[Rn] 5f10 7s2",electronegativity:1.3,ionization_potential:6.3,thermal_conductivity:10,period:7,classification:"actinides"},
    {name:"Chlorine",atomic_weight:35.4527,atomic_number:17,oxidation_states:"+/-1,3,5,7",boiling_point:239.18,melting_point:172.17,symbol:"Cl",density:3.214,electron_configuration:"[Ne] 3s2 p5",covalent_radius:0.99,electronegativity:3.16,atomic_radius:0.97,heat_of_vaporization:10.2,atomic_volume:18.7,heat_of_fusion:3.21,ionization_potential:12.967,specific_heat_capacity:0.48,thermal_conductivity:0.0089,group:17,period:3,classification:"halogens"},
    {name:"Curium",atomic_weight:247,atomic_number:96,oxidation_states:"3",melting_point:1620,symbol:"Cm",density:13.5,electron_configuration:"[Rn] 5f7 6d1 7s2",electronegativity:1.3,atomic_volume:18.3,ionization_potential:6.02,thermal_conductivity:10,period:7,classification:"actinides"},
    {name:"Cobalt",atomic_weight:58.9332,atomic_number:27,oxidation_states:"2,3",boiling_point:3143,melting_point:1768,symbol:"Co",density:8.9,electron_configuration:"[Ar] 3d7 4s2",covalent_radius:1.16,electronegativity:1.88,atomic_radius:1.25,heat_of_vaporization:373.3,atomic_volume:6.7,heat_of_fusion:16.19,ionization_potential:7.86,specific_heat_capacity:0.421,thermal_conductivity:100,group:9,period:4,classification:"transition_metals"},
    {name:"Chromium",atomic_weight:51.996,atomic_number:24,oxidation_states:"6,3,2",boiling_point:2945,melting_point:2130,symbol:"Cr",density:7.19,electron_configuration:"[Ar] 3d5 4s1",covalent_radius:1.18,electronegativity:1.66,atomic_radius:1.3,heat_of_vaporization:339.5,atomic_volume:7.23,heat_of_fusion:20,ionization_potential:6.766,specific_heat_capacity:0.449,thermal_conductivity:93.7,group:6,period:4,classification:"transition_metals"},
    {name:"Cesium",atomic_weight:132.9054,atomic_number:55,oxidation_states:"1",boiling_point:944,melting_point:301.54,symbol:"Cs",density:1.87,electron_configuration:"[Xe] 6s1",covalent_radius:2.35,electronegativity:0.79,atomic_radius:2.67,heat_of_vaporization:67.74,atomic_volume:70,heat_of_fusion:2.092,ionization_potential:3.894,specific_heat_capacity:0.24,thermal_conductivity:35.9,period:6,group:1,classification:"alkali_metals"},
    {name:"Copper",atomic_weight:63.546,atomic_number:29,oxidation_states:"2,1",boiling_point:2840,melting_point:1356.6,symbol:"Cu",density:8.96,electron_configuration:"[Ar] 3d10 4s1",covalent_radius:1.17,electronegativity:1.9,atomic_radius:1.28,heat_of_vaporization:300.5,atomic_volume:7.1,heat_of_fusion:13.14,ionization_potential:7.726,specific_heat_capacity:0.385,thermal_conductivity:401,group:11,period:4,classification:"transition_metals"},
    {name:"Dubnium",atomic_weight:262,atomic_number:105,symbol:"Db",electron_configuration:"[Rn] 5f14 6d3 7s2",period:7,group:5,classification:"transition_metals"},
    {name:"Dysprosium",atomic_weight:162.5,atomic_number:66,oxidation_states:"3",boiling_point:2840,melting_point:1685,symbol:"Dy",density:8.55,electron_configuration:"[Xe] 4f10 6s2",covalent_radius:1.59,electronegativity:1.22,atomic_radius:1.8,heat_of_vaporization:230,atomic_volume:19,ionization_potential:5.93,specific_heat_capacity:0.173,thermal_conductivity:10.7,period:6,classification:"lanthanides"},
    {name:"Erbium",atomic_weight:167.26,atomic_number:68,oxidation_states:"3",boiling_point:3140,melting_point:1802,symbol:"Er",density:9.07,electron_configuration:"[Xe] 4f12 6s2",covalent_radius:1.57,electronegativity:1.24,atomic_radius:1.78,heat_of_vaporization:292.88,atomic_volume:18.4,heat_of_fusion:17.15,ionization_potential:6.101,specific_heat_capacity:0.168,thermal_conductivity:14.3,period:6,classification:"lanthanides"},
    {name:"Einsteinium",atomic_weight:252,atomic_number:99,melting_point:1130,symbol:"Es",electron_configuration:"[Rn] 5f11 7s2",electronegativity:1.3,ionization_potential:6.42,thermal_conductivity:10,period:7,classification:"actinides"},
    {name:"Europium",atomic_weight:151.965,atomic_number:63,oxidation_states:"3,2",boiling_point:1800,melting_point:1095,symbol:"Eu",density:5.24,electron_configuration:"[Xe] 4f7 6s2",covalent_radius:1.85,electronegativity:1.2,atomic_radius:1.99,heat_of_vaporization:175.73,atomic_volume:28.9,heat_of_fusion:9.21,ionization_potential:5.67,specific_heat_capacity:0.182,thermal_conductivity:13.9,period:6,classification:"lanthanides"},
    {name:"Fluorine",atomic_weight:18.9984,atomic_number:9,oxidation_states:"-1",boiling_point:85,melting_point:53.55,symbol:"F",density:1.696,electron_configuration:"1s2 2s2 p5",covalent_radius:0.72,electronegativity:3.98,atomic_radius:0.57,heat_of_vaporization:3.2698,atomic_volume:17.1,heat_of_fusion:0.26,ionization_potential:17.422,specific_heat_capacity:0.824,thermal_conductivity:0.0279,group:17,period:2,classification:"halogens"},
    {name:"Iron",atomic_weight:55.847,atomic_number:26,oxidation_states:"2,3",boiling_point:3023,melting_point:1808,symbol:"Fe",density:7.874,electron_configuration:"[Ar] 3d6 4s2",covalent_radius:1.17,electronegativity:1.83,atomic_radius:1.26,heat_of_vaporization:349.5,atomic_volume:7.1,heat_of_fusion:13.8,ionization_potential:7.87,specific_heat_capacity:0.449,thermal_conductivity:80.2,group:8,period:4,classification:"transition_metals"},
    {name:"Fermium",atomic_weight:257,atomic_number:100,melting_point:1800,symbol:"Fm",electron_configuration:"[Rn] 5f12 7s2",electronegativity:1.3,ionization_potential:6.5,thermal_conductivity:10,period:7,classification:"actinides"},
    {name:"Francium",atomic_weight:223,atomic_number:87,oxidation_states:"1",boiling_point:950,melting_point:300,symbol:"Fr",electron_configuration:"[Rn] 7s1",electronegativity:0.7,atomic_radius:2.7,heat_of_vaporization:64,heat_of_fusion:2.1,ionization_potential:0,thermal_conductivity:15,period:7,group:1,classification:"alkali_metals"},
    {name:"Gallium",atomic_weight:69.723,atomic_number:31,oxidation_states:"3",boiling_point:2478,melting_point:302.92,symbol:"Ga",density:5.91,electron_configuration:"[Ar] 3d10 4s2 p1",covalent_radius:1.26,electronegativity:1.81,atomic_radius:1.41,heat_of_vaporization:256.06,atomic_volume:11.8,heat_of_fusion:5.59,ionization_potential:5.999,specific_heat_capacity:0.371,thermal_conductivity:40.6,group:13,period:4,classification:"other_metals"},
    {name:"Gadolinium",atomic_weight:157.25,atomic_number:64,oxidation_states:"3",boiling_point:3545,melting_point:1585,symbol:"Gd",density:7.9,electron_configuration:"[Xe] 4f7 5d1 6s2",covalent_radius:1.61,electronegativity:1.2,atomic_radius:1.8,heat_of_vaporization:311.71,atomic_volume:19.9,heat_of_fusion:10.46,ionization_potential:6.15,specific_heat_capacity:0.236,thermal_conductivity:10.6,period:6,classification:"lanthanides"},
    {name:"Germanium",atomic_weight:72.61,atomic_number:32,oxidation_states:"4",boiling_point:3107,melting_point:1211.5,symbol:"Ge",density:5.32,electron_configuration:"[Ar] 3d10 4s2 p2",covalent_radius:1.22,electronegativity:2.01,atomic_radius:1.37,heat_of_vaporization:334.3,atomic_volume:13.6,heat_of_fusion:31.8,ionization_potential:7.899,specific_heat_capacity:0.32,thermal_conductivity:59.9,group:14,period:4,classification:"semi_metals"},
    {name:"Hydrogen",atomic_weight:1.00794,atomic_number:1,oxidation_states:"1",boiling_point:20.28,melting_point:13.81,symbol:"H",density:0.0899,electron_configuration:"1s1",covalent_radius:0.32,electronegativity:2.1,atomic_radius:2.08,heat_of_vaporization:0.4581,atomic_volume:14.1,heat_of_fusion:0.0585,ionization_potential:13.598,specific_heat_capacity:14.304,thermal_conductivity:0.1815,group:1,period:1,classification:"hydrogen"},
    {name:"Helium",atomic_weight:4.0026,atomic_number:2,boiling_point:4.216,melting_point:0.95,symbol:"He",density:0.1785,electron_configuration:"1s2",covalent_radius:0.93,electronegativity:0,heat_of_vaporization:0.084,atomic_volume:31.8,heat_of_fusion:0.021,ionization_potential:24.587,specific_heat_capacity:5.193,thermal_conductivity:0.152,group:18,period:1,classification:"noble_gases"},
    {name:"Hafnium",atomic_weight:178.49,atomic_number:72,oxidation_states:"4",boiling_point:4875,melting_point:2504,symbol:"Hf",density:13.31,electron_configuration:"[Xe] 4f14 5d2 6s2",covalent_radius:1.44,electronegativity:1.3,atomic_radius:1.67,heat_of_vaporization:661.07,atomic_volume:13.6,heat_of_fusion:21.76,ionization_potential:6.65,specific_heat_capacity:0.14,thermal_conductivity:23,period:6,group:4,classification:"transition_metals"},
    {name:"Mercury",atomic_weight:200.59,atomic_number:80,oxidation_states:"2,1",boiling_point:629.88,melting_point:234.31,symbol:"Hg",density:13.55,electron_configuration:"[Xe] 4f14 5d10 6s2",covalent_radius:1.49,electronegativity:2,atomic_radius:1.6,heat_of_vaporization:59.3,atomic_volume:14.8,heat_of_fusion:2.292,ionization_potential:10.437,specific_heat_capacity:0.14,thermal_conductivity:8.34,period:6,group:12,classification:"other_metals"},
    {name:"Holmium",atomic_weight:164.9303,atomic_number:67,oxidation_states:"3",boiling_point:2968,melting_point:1747,symbol:"Ho",density:8.8,electron_configuration:"[Xe] 4f11 6s2",covalent_radius:1.58,electronegativity:1.23,atomic_radius:1.79,heat_of_vaporization:251.04,atomic_volume:18.7,heat_of_fusion:11.06,ionization_potential:6.02,specific_heat_capacity:0.165,thermal_conductivity:16.2,period:6,classification:"lanthanides"},
    {name:"Hassium",atomic_weight:265,atomic_number:108,symbol:"Hs",electron_configuration:"[Rn] 5f14 6d6 7s2",period:7,group:8,classification:"transition_metals"},
    {name:"Iodine",atomic_weight:126.9045,atomic_number:53,oxidation_states:"+/-1,5,7",boiling_point:457.5,melting_point:386.7,symbol:"I",density:4.93,electron_configuration:"[Kr] 4d10 5s2 p5",covalent_radius:1.33,electronegativity:2.66,atomic_radius:1.32,heat_of_vaporization:20.9,atomic_volume:25.7,heat_of_fusion:7.76,ionization_potential:10.451,specific_heat_capacity:0.145,thermal_conductivity:0.449,group:17,period:5,classification:"halogens"},
    {name:"Indium",atomic_weight:114.82,atomic_number:49,oxidation_states:"3",boiling_point:2350,melting_point:429.78,symbol:"In",density:7.31,electron_configuration:"[Kr] 4d10 5s2 p1",covalent_radius:1.44,electronegativity:1.78,atomic_radius:1.66,heat_of_vaporization:226.35,atomic_volume:15.7,heat_of_fusion:3.26,ionization_potential:5.786,specific_heat_capacity:0.233,thermal_conductivity:81.6,group:13,period:5,classification:"other_metals"},
    {name:"Iridium",atomic_weight:192.22,atomic_number:77,oxidation_states:"2,3,4,6",boiling_point:4700,melting_point:2720,symbol:"Ir",density:22.6,electron_configuration:"[Xe] 4f14 5d7 6s2",covalent_radius:1.27,electronegativity:2.2,atomic_radius:1.36,heat_of_vaporization:563.58,atomic_volume:8.54,heat_of_fusion:26.36,ionization_potential:9.1,specific_heat_capacity:0.13,thermal_conductivity:147,period:6,group:9,classification:"transition_metals"},
    {name:"Potassium",atomic_weight:39.0983,atomic_number:19,oxidation_states:"1",boiling_point:1033,melting_point:336.8,symbol:"K",density:0.86,electron_configuration:"[Ar] 4s1",covalent_radius:2.03,electronegativity:0.82,atomic_radius:2.35,heat_of_vaporization:76.9,atomic_volume:45.3,heat_of_fusion:2.33,ionization_potential:4.341,specific_heat_capacity:0.757,thermal_conductivity:102.5,group:1,period:4,classification:"alkali_metals"},
    {name:"Krypton",atomic_weight:83.8,atomic_number:36,boiling_point:120.85,melting_point:116,symbol:"Kr",density:3.75,electron_configuration:"[Ar] 3d10 4s2 p6",covalent_radius:1.89,electronegativity:0,atomic_radius:1.03,heat_of_vaporization:9.029,atomic_volume:32.2,heat_of_fusion:1.638,ionization_potential:13.999,specific_heat_capacity:0.248,thermal_conductivity:0.00949,group:18,period:4,classification:"noble_gases"},
    {name:"Lanthanum",atomic_weight:138.9055,atomic_number:57,oxidation_states:"3",boiling_point:3737,melting_point:1191,symbol:"La",density:6.15,electron_configuration:"[Xe] 5d1 6s2",covalent_radius:1.25,electronegativity:1.1,atomic_radius:1.38,heat_of_vaporization:399.57,atomic_volume:22.5,heat_of_fusion:11.3,ionization_potential:5.58,specific_heat_capacity:0.19,thermal_conductivity:13.5,period:6,classification:"lanthanides"},
    {name:"Lithium",atomic_weight:6.941,atomic_number:3,oxidation_states:"1",boiling_point:1615,melting_point:453.7,symbol:"Li",density:0.53,electron_configuration:"1s2 2s1",covalent_radius:1.23,electronegativity:0.98,atomic_radius:1.55,heat_of_vaporization:147.1,atomic_volume:13.1,heat_of_fusion:3,ionization_potential:5.392,specific_heat_capacity:3.582,thermal_conductivity:84.7,group:1,period:2,classification:"alkali_metals"},
    {name:"Lawrencium",atomic_weight:262,atomic_number:103,melting_point:1900,symbol:"Lr",electron_configuration:"[Rn] 5f14 6d1 7s2",thermal_conductivity:10,period:7,classification:"actinides"},
    {name:"Lutetium",atomic_weight:174.967,atomic_number:71,oxidation_states:"3",boiling_point:3668,melting_point:1936,symbol:"Lu",density:9.84,electron_configuration:"[Xe] 4f14 5d1 6s2",covalent_radius:1.56,electronegativity:1.27,atomic_radius:1.75,heat_of_vaporization:355,atomic_volume:17.8,heat_of_fusion:18.6,ionization_potential:5.43,specific_heat_capacity:0.15,thermal_conductivity:16.4,period:6,classification:"lanthanides"},
    {name:"Mendelevium",atomic_weight:258,atomic_number:101,melting_point:1100,symbol:"Md",electron_configuration:"[Rn] 5f13 7s2",electronegativity:1.3,ionization_potential:6.58,thermal_conductivity:10,period:7,classification:"actinides"},
    {name:"Magnesium",atomic_weight:24.305,atomic_number:12,oxidation_states:"2",boiling_point:1380,melting_point:922,symbol:"Mg",density:1.74,electron_configuration:"[Ne] 3s2",covalent_radius:1.36,electronegativity:1.31,atomic_radius:1.6,heat_of_vaporization:127.6,atomic_volume:14,heat_of_fusion:8.95,ionization_potential:7.646,specific_heat_capacity:1.02,thermal_conductivity:156,group:2,period:3,classification:"alkali_earth_metals"},
    {name:"Manganese",atomic_weight:54.938,atomic_number:25,oxidation_states:"7,6,4,2,3",boiling_point:2335,melting_point:1518,symbol:"Mn",density:7.44,electron_configuration:"[Ar] 3d5 4s2",covalent_radius:1.17,electronegativity:1.55,atomic_radius:1.35,heat_of_vaporization:219.74,atomic_volume:7.39,heat_of_fusion:14.64,ionization_potential:7.435,specific_heat_capacity:0.48,thermal_conductivity:7.82,group:7,period:4,classification:"transition_metals"},
    {name:"Molybdenum",atomic_weight:95.94,atomic_number:42,oxidation_states:"6,5,4,3,2",boiling_point:4912,melting_point:2896,symbol:"Mo",density:10.22,electron_configuration:"[Kr] 4d5 5s1",covalent_radius:1.3,electronegativity:2.16,atomic_radius:1.39,heat_of_vaporization:590.4,atomic_volume:9.4,heat_of_fusion:36,ionization_potential:7.099,specific_heat_capacity:0.25,thermal_conductivity:138,group:6,period:5,classification:"transition_metals"},
    {name:"Meitnerium",atomic_weight:266,atomic_number:109,symbol:"Mt",electron_configuration:"[Rn] 5f14 6d7 7s2",period:7,group:9,classification:"transition_metals"},
    {name:"Nitrogen",atomic_weight:14.0067,atomic_number:7,oxidation_states:"+/-3,5,4,2",boiling_point:77.344,melting_point:63.15,symbol:"N",density:1.251,electron_configuration:"1s2 2s2 p3",covalent_radius:0.75,electronegativity:3.04,atomic_radius:0.92,heat_of_vaporization:2.7928,atomic_volume:17.3,heat_of_fusion:0.36,ionization_potential:14.534,specific_heat_capacity:1.042,thermal_conductivity:0.02598,group:15,period:2,classification:"non_metals"},
    {name:"Sodium",atomic_weight:22.98977,atomic_number:11,oxidation_states:"1",boiling_point:1156,melting_point:371,symbol:"Na",density:0.97,electron_configuration:"[Ne] 3s1",covalent_radius:1.54,electronegativity:0.93,atomic_radius:1.9,heat_of_vaporization:98.01,atomic_volume:23.7,heat_of_fusion:2.601,ionization_potential:5.139,specific_heat_capacity:1.23,thermal_conductivity:141,group:1,period:3,classification:"alkali_metals"},
    {name:"Niobium",atomic_weight:92.9064,atomic_number:41,oxidation_states:"5,3",boiling_point:5015,melting_point:2742,symbol:"Nb",density:8.57,electron_configuration:"[Kr] 4d4 5s1",covalent_radius:1.34,electronegativity:1.6,atomic_radius:1.46,heat_of_vaporization:690.1,atomic_volume:10.8,heat_of_fusion:26.9,ionization_potential:6.88,specific_heat_capacity:0.265,thermal_conductivity:53.7,group:5,period:5,classification:"transition_metals"},
    {name:"Neodymium",atomic_weight:144.24,atomic_number:60,oxidation_states:"3",boiling_point:3347,melting_point:1294,symbol:"Nd",density:7.01,electron_configuration:"[Xe] 4f4 6s2",covalent_radius:1.64,electronegativity:1.14,atomic_radius:1.82,heat_of_vaporization:283.68,atomic_volume:20.6,heat_of_fusion:10.88,ionization_potential:5.49,specific_heat_capacity:0.19,thermal_conductivity:16.5,period:6,classification:"lanthanides"},
    {name:"Neon",atomic_weight:20.1797,atomic_number:10,boiling_point:27.1,melting_point:24.55,symbol:"Ne",density:0.9,electron_configuration:"1s2 2s2 p6",covalent_radius:0.71,electronegativity:0,atomic_radius:0.51,heat_of_vaporization:1.77,atomic_volume:16.9,heat_of_fusion:0.34,ionization_potential:21.564,specific_heat_capacity:1.03,thermal_conductivity:0.0493,group:18,period:2,classification:"noble_gases"},
    {name:"Nickel",atomic_weight:58.6934,atomic_number:28,oxidation_states:"2,3",boiling_point:3005,melting_point:1726,symbol:"Ni",density:8.9,electron_configuration:"[Ar] 3d8 4s2",covalent_radius:1.15,electronegativity:1.91,atomic_radius:1.24,heat_of_vaporization:377.5,atomic_volume:6.6,heat_of_fusion:17.2,ionization_potential:7.635,specific_heat_capacity:0.444,thermal_conductivity:90.7,group:10,period:4,classification:"transition_metals"},
    {name:"Nobelium",atomic_weight:259,atomic_number:102,melting_point:1100,symbol:"No",electron_configuration:"[Rn] 5f14 7s2",electronegativity:1.3,ionization_potential:6.65,thermal_conductivity:10,period:7,classification:"actinides"},
    {name:"Neptunium",atomic_weight:237.0482,atomic_number:93,oxidation_states:"6,5,4,3",boiling_point:4175,melting_point:912,symbol:"Np",density:20.2,electron_configuration:"[Rn] 5f4 6d1 7s2",electronegativity:1.36,atomic_radius:1.3,atomic_volume:21.1,ionization_potential:6.19,thermal_conductivity:6.3,period:7,classification:"actinides"},
    {name:"Oxygen",atomic_weight:15.9994,atomic_number:8,oxidation_states:"-2",boiling_point:90.188,melting_point:54.8,symbol:"O",density:1.429,electron_configuration:"1s2 2s2 p4",covalent_radius:0.73,electronegativity:3.44,atomic_radius:0.65,heat_of_vaporization:3.4109,atomic_volume:14,heat_of_fusion:0.222,ionization_potential:13.618,specific_heat_capacity:0.92,thermal_conductivity:0.2674,group:16,period:2,classification:"non_metals"},
    {name:"Osmium",atomic_weight:190.2,atomic_number:76,oxidation_states:"2,3,4,6,8",boiling_point:5300,melting_point:3300,symbol:"Os",density:22.6,electron_configuration:"[Xe] 4f14 5d6 6s2",covalent_radius:1.26,electronegativity:2.2,atomic_radius:1.35,heat_of_vaporization:627.6,atomic_volume:8.43,heat_of_fusion:29.29,ionization_potential:8.7,specific_heat_capacity:0.13,thermal_conductivity:87.6,period:6,group:8,classification:"transition_metals"},
    {name:"Phosphorus",atomic_weight:30.97376,atomic_number:15,oxidation_states:"+/-3,5,4",boiling_point:553,melting_point:317.3,symbol:"P",density:1.82,electron_configuration:"[Ne] 3s2 p3",covalent_radius:1.06,electronegativity:2.19,atomic_radius:1.28,heat_of_vaporization:12.4,atomic_volume:17,heat_of_fusion:0.63,ionization_potential:10.486,specific_heat_capacity:0.769,thermal_conductivity:0.235,group:15,period:3,classification:"non_metals"},
    {name:"Protactinium",atomic_weight:231.0359,atomic_number:91,oxidation_states:"5,4",boiling_point:4300,melting_point:1845,symbol:"Pa",density:15.4,electron_configuration:"[Rn] 5f2 6d1 7s2",electronegativity:1.5,atomic_radius:1.61,atomic_volume:15,ionization_potential:5.88,thermal_conductivity:47,period:7,classification:"actinides"},
    {name:"Lead",atomic_weight:207.2,atomic_number:82,oxidation_states:"4,2",boiling_point:2023,melting_point:600.65,symbol:"Pb",density:11.35,electron_configuration:"[Xe] 4f14 5d10 6s2 p2",covalent_radius:1.47,electronegativity:2.33,atomic_radius:1.75,heat_of_vaporization:177.9,atomic_volume:18.3,heat_of_fusion:4.77,ionization_potential:7.416,specific_heat_capacity:0.129,thermal_conductivity:35.3,period:6,group:14,classification:"other_metals"},
    {name:"Palladium",atomic_weight:106.42,atomic_number:46,oxidation_states:"2,4",boiling_point:3240,melting_point:1825,symbol:"Pd",density:12,electron_configuration:"[Kr] 4d10",covalent_radius:1.28,electronegativity:2.2,atomic_radius:1.37,heat_of_vaporization:393.3,atomic_volume:8.9,heat_of_fusion:16.74,ionization_potential:8.34,specific_heat_capacity:0.244,thermal_conductivity:71.8,group:10,period:5,classification:"transition_metals"},
    {name:"Promethium",atomic_weight:145,atomic_number:61,oxidation_states:"3",boiling_point:3273,melting_point:1315,symbol:"Pm",density:7.22,electron_configuration:"[Xe] 4f5 6s2",covalent_radius:1.63,electronegativity:1.13,atomic_volume:22.4,ionization_potential:5.55,thermal_conductivity:17.9,period:6,classification:"lanthanides"},
    {name:"Polonium",atomic_weight:209,atomic_number:84,oxidation_states:"4,2",melting_point:527,symbol:"Po",density:9.3,electron_configuration:"[Xe] 4f14 5d10 6s2 p4",covalent_radius:1.53,electronegativity:2,atomic_radius:1.67,heat_of_vaporization:120,atomic_volume:22.7,heat_of_fusion:13,ionization_potential:8.42,thermal_conductivity:20,period:6,group:16,classification:"semi_metals"},
    {name:"Praseodymium",atomic_weight:140.9077,atomic_number:59,oxidation_states:"3,4",boiling_point:3785,melting_point:1204,symbol:"Pr",density:6.77,electron_configuration:"[Xe] 4f3 6s2",covalent_radius:1.65,electronegativity:1.13,atomic_radius:1.82,heat_of_vaporization:332.63,atomic_volume:20.8,heat_of_fusion:10.04,ionization_potential:5.42,specific_heat_capacity:0.193,thermal_conductivity:12.5,period:6,classification:"lanthanides"},
    {name:"Platinum",atomic_weight:195.08,atomic_number:78,oxidation_states:"2,4",boiling_point:4100,melting_point:2042.1,symbol:"Pt",density:21.45,electron_configuration:"[Xe] 4f14 5d9 6s1",covalent_radius:1.3,electronegativity:2.28,atomic_radius:1.39,heat_of_vaporization:510.45,atomic_volume:9.1,heat_of_fusion:19.66,ionization_potential:9,specific_heat_capacity:0.13,thermal_conductivity:71.6,period:6,group:10,classification:"transition_metals"},
    {name:"Plutonium",atomic_weight:244,atomic_number:94,oxidation_states:"6,5,4,3",boiling_point:3505,melting_point:913,symbol:"Pu",density:19.84,electron_configuration:"[Rn] 5f6 7s2",electronegativity:1.28,atomic_radius:1.51,atomic_volume:12.32,ionization_potential:6.06,specific_heat_capacity:0.13,thermal_conductivity:6.74,period:7,classification:"actinides"},
    {name:"Radium",atomic_weight:226.0254,atomic_number:88,oxidation_states:"2",boiling_point:1413,melting_point:973,symbol:"Ra",density:5,electron_configuration:"[Rn] 7s2",electronegativity:0.89,atomic_radius:2.33,heat_of_vaporization:136.82,atomic_volume:45.2,heat_of_fusion:8.37,ionization_potential:5.279,specific_heat_capacity:0.094,thermal_conductivity:18.6,period:7,group:2,classification:"alkali_earth_metals"},
    {name:"Rubidium",atomic_weight:85.4678,atomic_number:37,oxidation_states:"1",boiling_point:961,melting_point:312.63,symbol:"Rb",density:1.532,electron_configuration:"[Kr] 5s1",covalent_radius:2.16,electronegativity:0.82,atomic_radius:2.48,heat_of_vaporization:69.2,atomic_volume:55.9,heat_of_fusion:2.34,ionization_potential:4.177,specific_heat_capacity:0.363,thermal_conductivity:58.2,group:1,period:5,classification:"alkali_metals"},
    {name:"Rhenium",atomic_weight:186.207,atomic_number:75,oxidation_states:"7,6,4,2,-1",boiling_point:5870,melting_point:3455,symbol:"Re",density:21,electron_configuration:"[Xe] 4f14 5d5 6s2",covalent_radius:1.28,electronegativity:1.9,atomic_radius:1.37,heat_of_vaporization:707.1,atomic_volume:8.85,heat_of_fusion:33.05,ionization_potential:7.88,specific_heat_capacity:0.137,thermal_conductivity:47.9,period:6,group:7,classification:"transition_metals"},
    {name:"Rutherfordium",atomic_weight:261,atomic_number:104,symbol:"Rf",electron_configuration:"[Rn] 5f14 6d2 7s2",period:7,group:4,classification:"transition_metals"},
    {name:"Rhodium",atomic_weight:102.9055,atomic_number:45,oxidation_states:"2,3,4",boiling_point:3970,melting_point:2236,symbol:"Rh",density:12.41,electron_configuration:"[Kr] 4d8 5s1",covalent_radius:1.25,electronegativity:2.28,atomic_radius:1.34,heat_of_vaporization:495.39,atomic_volume:8.3,heat_of_fusion:21.76,ionization_potential:7.46,specific_heat_capacity:0.242,thermal_conductivity:150,group:9,period:5,classification:"transition_metals"},
    {name:"Radon",atomic_weight:222,atomic_number:86,boiling_point:211.4,melting_point:202,symbol:"Rn",density:9.73,electron_configuration:"[Xe] 4f14 5d10 6s2 p6",electronegativity:0,atomic_radius:1.34,heat_of_vaporization:16.4,atomic_volume:50.5,heat_of_fusion:2.9,ionization_potential:10.748,specific_heat_capacity:0.094,thermal_conductivity:0.00364,period:6,group:18,classification:"noble_gases"},
    {name:"Ruthenium",atomic_weight:101.07,atomic_number:44,oxidation_states:"2,3,4,6,8",boiling_point:4425,melting_point:2610,symbol:"Ru",density:12.37,electron_configuration:"[Kr] 4d7 5s1",covalent_radius:1.25,electronegativity:2.2,atomic_radius:1.34,heat_of_vaporization:567.77,atomic_volume:8.3,heat_of_fusion:25.52,ionization_potential:7.37,specific_heat_capacity:0.238,thermal_conductivity:117,group:8,period:5,classification:"transition_metals"},
    {name:"Sulfur",atomic_weight:32.066,atomic_number:16,oxidation_states:"+/-2,4,6",boiling_point:717.82,melting_point:392.2,symbol:"S",density:2.07,electron_configuration:"[Ne] 3s2 p4",covalent_radius:1.02,electronegativity:2.58,atomic_radius:1.27,heat_of_vaporization:10,atomic_volume:15.5,heat_of_fusion:1.73,ionization_potential:10.36,specific_heat_capacity:0.71,thermal_conductivity:0.269,group:16,period:3,classification:"non_metals"},
    {name:"Silver",atomic_weight:107.868,atomic_number:47,oxidation_states:"1",boiling_point:2436,melting_point:1235.08,symbol:"Ag",density:10.5,electron_configuration:"[Kr] 4d10 5s1",covalent_radius:1.34,electronegativity:1.93,atomic_radius:1.44,heat_of_vaporization:250.63,atomic_volume:10.3,heat_of_fusion:11.3,ionization_potential:7.576,specific_heat_capacity:0.232,thermal_conductivity:429,group:11,period:5,classification:"transition_metals"},
    {name:"Scandium",atomic_weight:44.9559,atomic_number:21,oxidation_states:"3",boiling_point:3109,melting_point:1814,symbol:"Sc",density:2.99,electron_configuration:"[Ar] 3d1 4s2",covalent_radius:1.44,electronegativity:1.36,atomic_radius:1.62,heat_of_vaporization:304.8,atomic_volume:15,heat_of_fusion:16.11,ionization_potential:6.54,specific_heat_capacity:0.568,thermal_conductivity:15.8,group:3,period:4,classification:"transition_metals"},
    {name:"Selenium",atomic_weight:78.96,atomic_number:34,oxidation_states:"-2,4,6",boiling_point:958,melting_point:494,symbol:"Se",density:4.79,electron_configuration:"[Ar] 3d10 4s2 p4",covalent_radius:1.16,electronegativity:2.55,atomic_radius:1.4,heat_of_vaporization:26.32,atomic_volume:16.5,heat_of_fusion:5.54,ionization_potential:9.752,specific_heat_capacity:0.32,thermal_conductivity:2.04,group:16,period:4,classification:"non_metals"},
    {name:"Seaborgium",atomic_weight:263,atomic_number:106,symbol:"Sg",electron_configuration:"[Rn] 5f14 6d4 7s2",period:7,group:6,classification:"transition_metals"},
    {name:"Silicon",atomic_weight:28.0855,atomic_number:14,oxidation_states:"4",boiling_point:2630,melting_point:1683,symbol:"Si",density:2.33,electron_configuration:"[Ne] 3s2 p2",covalent_radius:1.11,electronegativity:1.9,atomic_radius:1.32,heat_of_vaporization:359,atomic_volume:12.1,heat_of_fusion:50.2,ionization_potential:8.151,specific_heat_capacity:0.7,thermal_conductivity:148,group:14,period:3,classification:"semi_metals"},
    {name:"Samarium",atomic_weight:150.36,atomic_number:62,oxidation_states:"3,2",boiling_point:2067,melting_point:1347,symbol:"Sm",density:7.52,electron_configuration:"[Xe] 4f6 6s2",covalent_radius:1.62,electronegativity:1.17,atomic_radius:1.81,heat_of_vaporization:191.63,atomic_volume:19.9,heat_of_fusion:11.09,ionization_potential:5.63,specific_heat_capacity:0.197,thermal_conductivity:13.3,period:6,classification:"lanthanides"},
    {name:"Strontium",atomic_weight:87.62,atomic_number:38,oxidation_states:"2",boiling_point:1655,melting_point:1042,symbol:"Sr",density:2.54,electron_configuration:"[Kr] 5s2",covalent_radius:1.91,electronegativity:0.95,atomic_radius:2.15,heat_of_vaporization:136.9,atomic_volume:33.7,heat_of_fusion:8.2,ionization_potential:5.695,specific_heat_capacity:0.3,thermal_conductivity:35.3,group:2,period:5,classification:"alkali_earth_metals"},
    {name:"Tantalum",atomic_weight:180.9479,atomic_number:73,oxidation_states:"5",boiling_point:5730,melting_point:3293,symbol:"Ta",density:16.65,electron_configuration:"[Xe] 4f14 5d3 6s2",covalent_radius:1.34,electronegativity:1.5,atomic_radius:1.49,heat_of_vaporization:737,atomic_volume:10.9,heat_of_fusion:36,ionization_potential:7.89,specific_heat_capacity:0.14,thermal_conductivity:57.5,period:6,group:5,classification:"transition_metals"},
    {name:"Terbium",atomic_weight:158.9253,atomic_number:65,oxidation_states:"3,4",boiling_point:3500,melting_point:1629,symbol:"Tb",density:8.23,electron_configuration:"[Xe] 4f9 6s2",covalent_radius:1.59,electronegativity:1.1,atomic_radius:1.8,atomic_volume:19.2,heat_of_fusion:15.48,ionization_potential:5.86,specific_heat_capacity:0.18,thermal_conductivity:11.1,period:6,classification:"lanthanides"},
    {name:"Technetium",atomic_weight:98,atomic_number:43,oxidation_states:"7",boiling_point:4538,melting_point:2477,symbol:"Tc",density:11.5,electron_configuration:"[Kr] 4d5 5s2",covalent_radius:1.27,electronegativity:1.9,atomic_radius:1.36,heat_of_vaporization:502,atomic_volume:8.5,heat_of_fusion:23,ionization_potential:7.28,specific_heat_capacity:0.24,thermal_conductivity:50.6,group:7,period:5,classification:"transition_metals"},
    {name:"Tellurium",atomic_weight:127.6,atomic_number:52,oxidation_states:"-2,4,6",boiling_point:1261,melting_point:722.72,symbol:"Te",density:6.24,electron_configuration:"[Kr] 4d10 5s2 p4",covalent_radius:1.36,electronegativity:2.1,atomic_radius:1.42,heat_of_vaporization:50.63,atomic_volume:20.5,heat_of_fusion:17.49,ionization_potential:9.009,specific_heat_capacity:0.202,thermal_conductivity:2.35,group:16,period:5,classification:"semi_metals"},
    {name:"Thorium",atomic_weight:232.0381,atomic_number:90,oxidation_states:"4",boiling_point:5060,melting_point:2028,symbol:"Th",density:11.72,electron_configuration:"[Rn] 6d2 7s2",covalent_radius:1.65,electronegativity:1.3,atomic_radius:1.8,heat_of_vaporization:543.92,atomic_volume:19.9,heat_of_fusion:15.65,ionization_potential:6.08,specific_heat_capacity:0.113,thermal_conductivity:54,period:7,classification:"actinides"},
    {name:"Tin",atomic_weight:118.71,atomic_number:50,oxidation_states:"4,2",boiling_point:2876,melting_point:505.12,symbol:"Sn",density:7.31,electron_configuration:"[Kr] 4d10 5s2 p2",covalent_radius:1.41,electronegativity:1.96,atomic_radius:1.62,heat_of_vaporization:290.37,atomic_volume:16.3,heat_of_fusion:7.2,ionization_potential:7.344,specific_heat_capacity:0.228,thermal_conductivity:66.6,group:14,period:5,classification:"other_metals"},
    {name:"Titanium",atomic_weight:47.88,atomic_number:22,oxidation_states:"4,3",boiling_point:3560,melting_point:1945,symbol:"Ti",density:4.54,electron_configuration:"[Ar] 3d2 4s2",covalent_radius:1.32,electronegativity:1.54,atomic_radius:1.45,heat_of_vaporization:425.2,atomic_volume:10.6,heat_of_fusion:18.6,ionization_potential:6.82,specific_heat_capacity:0.523,thermal_conductivity:21.9,group:4,period:4,classification:"transition_metals"},
    {name:"Thallium",atomic_weight:204.383,atomic_number:81,oxidation_states:"3,1",boiling_point:1746,melting_point:577,symbol:"Tl",density:11.85,electron_configuration:"[Xe] 4f14 5d10 6s2 p1",covalent_radius:1.48,electronegativity:2.04,atomic_radius:1.71,heat_of_vaporization:162.09,atomic_volume:17.2,heat_of_fusion:4.27,ionization_potential:6.108,specific_heat_capacity:0.129,thermal_conductivity:46.1,period:6,group:13,classification:"other_metals"},
    {name:"Thulium",atomic_weight:168.9342,atomic_number:69,oxidation_states:"3,2",boiling_point:2223,melting_point:1818,symbol:"Tm",density:9.32,electron_configuration:"[Xe] 4f13 6s2",covalent_radius:1.56,electronegativity:1.25,atomic_radius:1.77,heat_of_vaporization:191,atomic_volume:18.1,heat_of_fusion:16.8,ionization_potential:6.184,specific_heat_capacity:0.16,thermal_conductivity:16.8,period:6,classification:"lanthanides"},
    {name:"Uranium",atomic_weight:238.029,atomic_number:92,oxidation_states:"6,5,4,3",boiling_point:4407,melting_point:1408,symbol:"U",density:18.95,electron_configuration:"[Rn] 5f3 6d1 7s2",covalent_radius:1.42,electronegativity:1.38,atomic_radius:1.38,heat_of_vaporization:422.58,atomic_volume:12.5,heat_of_fusion:15.48,ionization_potential:6.05,specific_heat_capacity:0.12,thermal_conductivity:27.6,period:7,classification:"actinides"},
    {name:"ununbium",atomic_weight:277,atomic_number:112,symbol:"Uub",electron_configuration:"[Rn] 5f14 6d10 7s2",period:7,group:12,classification:"other_metals"},
    {name:"ununnilium",atomic_weight:269,atomic_number:110,symbol:"Uun",electron_configuration:"[Rn] 5f14 6d8 7s2",period:7,group:10,classification:"transition_metals"},
    {name:"unununium",atomic_weight:272,atomic_number:111,symbol:"Uuu",electron_configuration:"[Rn] 5f14 6d9 7s2",period:7,group:11,classification:"transition_metals"},
    {name:"Vanadium",atomic_weight:50.9415,atomic_number:23,oxidation_states:"5,4,3,2",boiling_point:3650,melting_point:2163,symbol:"V",density:6.11,electron_configuration:"[Ar] 3d3 4s2",covalent_radius:1.22,electronegativity:1.63,atomic_radius:1.34,heat_of_vaporization:446.7,atomic_volume:8.35,heat_of_fusion:20.8,ionization_potential:6.74,specific_heat_capacity:0.489,thermal_conductivity:30.7,group:5,period:4,classification:"transition_metals"},
    {name:"Tungsten",atomic_weight:183.85,atomic_number:74,oxidation_states:"6,5,4,3,2",boiling_point:5825,melting_point:3695,symbol:"W",density:19.3,electron_configuration:"[Xe] 4f14 5d4 6s2",covalent_radius:1.3,electronegativity:2.36,atomic_radius:1.41,heat_of_vaporization:422.58,atomic_volume:9.53,heat_of_fusion:35.4,ionization_potential:7.98,specific_heat_capacity:0.13,thermal_conductivity:174,period:6,group:6,classification:"transition_metals"},
    {name:"Xenon",atomic_weight:131.29,atomic_number:54,boiling_point:165.1,melting_point:161.39,symbol:"Xe",density:5.9,electron_configuration:"[Kr] 4d10 5s2 p6",covalent_radius:1.31,electronegativity:2.6,atomic_radius:1.24,heat_of_vaporization:12.64,atomic_volume:42.9,heat_of_fusion:2.3,ionization_potential:12.13,specific_heat_capacity:0.158,thermal_conductivity:0.00569,group:18,period:5,classification:"noble_gases"},
    {name:"Yttrium",atomic_weight:88.9059,atomic_number:39,oxidation_states:"3",boiling_point:3611,melting_point:1795,symbol:"Y",density:4.47,electron_configuration:"[Kr] 4d1 5s2",covalent_radius:1.62,electronegativity:1.22,atomic_radius:1.78,heat_of_vaporization:363.3,atomic_volume:19.8,heat_of_fusion:17.5,ionization_potential:6.38,specific_heat_capacity:0.3,thermal_conductivity:17.2,group:3,period:5,classification:"transition_metals"},
    {name:"Ytterbium",atomic_weight:173.04,atomic_number:70,oxidation_states:"3,2",boiling_point:1469,melting_point:1092,symbol:"Yb",density:6.97,electron_configuration:"[Xe] 4f14 6s2",covalent_radius:1.7,electronegativity:1.1,atomic_radius:1.94,heat_of_vaporization:128,atomic_volume:24.8,heat_of_fusion:7.7,ionization_potential:6.254,specific_heat_capacity:0.155,thermal_conductivity:34.9,period:6,classification:"lanthanides"},
    {name:"Zinc",atomic_weight:65.39,atomic_number:30,oxidation_states:"2",boiling_point:1180,melting_point:692.73,symbol:"Zn",density:7.13,electron_configuration:"[Ar] 3d10 4s2",covalent_radius:1.25,electronegativity:1.65,atomic_radius:1.38,heat_of_vaporization:115.3,atomic_volume:9.2,heat_of_fusion:7.38,ionization_potential:9.394,specific_heat_capacity:0.388,thermal_conductivity:116,group:12,period:4,classification:"other_metals"},
    {name:"Zirconium",atomic_weight:91.224,atomic_number:40,oxidation_states:"4",boiling_point:4682,melting_point:2128,symbol:"Zr",density:6.51,electron_configuration:"[Kr] 4d2 5s2",covalent_radius:1.45,electronegativity:1.33,atomic_radius:1.6,heat_of_vaporization:590.5,atomic_volume:14.1,heat_of_fusion:21,ionization_potential:6.84,specific_heat_capacity:0.278,thermal_conductivity:22.7,group:4,period:5,classification:"transition_metals"}
]; 

function PeriodicTable() { 
    var graph = KhanUtil.currentGraph;

    graph.init({
      range: [[-0.1, 18.1], [-0.1, 10.1]]
    });

    var square = function( blCorner, sideLength, options ) {
      return graph.path( [ 
          [blCorner[0], blCorner[1]], 
          [blCorner[0] + sideLength, blCorner[1]], 
          [blCorner[0] + sideLength, blCorner[1] + sideLength], 
          [blCorner[0], blCorner[1] + sideLength], 
          [blCorner[0], blCorner[1]] 
        ], jQuery.extend({ 
          stroke: "black",
          strokeWidth: 2
        }, options)
      );
    };

    var labelledSquare = function( xCoord, yCoord, number, symbol, options ) {
      jQuery.extend( {
        stroke: "black",
        strokeWidth: 2,
        color: "black",
        background: "white"
      }, options);

      return [
        square([xCoord, yCoord], 1, options).node,
        graph.label([xCoord + 0.5, yCoord + 0.75], number, "center", false),
        graph.label([xCoord + 0.5, yCoord + 0.25], symbol, "center", false)
      ];
    }

    var displayDetailed = function( element ) {
      var data = [
        box = graph.path([[0, 0], [0, 10], [18, 10], [18, 0], [0, 0]], {fill: "#fff"}),
        exit = square([17,9], 1, {fill: "#fff"}),
        x1 = graph.path([[17,9],[18,10]]),
        x2 = graph.path([[17,10],[18,9]]),

        graph.label([7, 9], element.name + " - " + element.symbol, "right"),
        graph.label([1,7], "Atomic Weight: " + element.atomic_weight, "right"),
        graph.label([1,6.5], "Density: " + element.density, "right"),
        graph.label([1,6], "Electron Configuration: " + element.electron_configuration, "right"),
        graph.label([1,5.5], "Boiling Point: " + element.boiling_point + "K", "right"),
        graph.label([1,5], "Melting Point: " + (element.melting_point || "unavailable") + "K", "right"),
        graph.label([1,4.5], "Period: " + element.period, "right"),
        graph.label([1,4], "Group: " + element.group + " - " + element.classification, "right")
      ];

      jQuery( exit.node, x1.node, x2.node ).click( function () {
        for (index in data) {
          data[index].remove();
        }
      } );
    }

    colors = {
      "actinides": "#FF81D2",
      "lanthanides": "#FFABFF",
      "other_metals": "#D4C6D3",
      "semi_metals": "#C2C587",
      "noble_gases": "#B7FFFF",
      "halogens": "#F8FF80",
      "transition_metals": "#FEA3B7",
      "alkali_metals": "#FD2C49",
      "alkali_earth_metals": "#FED79F",
      "non_metals": "#75FF8E",
      "hydrogen": "#75FF8E"
    }

    this.showPeriodicTable = function() {
      graph.style({
        fill: "#000"
      });

      jQuery.each( elements, function( i, element ) {
        var xCoord = element.group - 1,
            yCoord = 10 - element.period,
            background = "#fff";

        if (!xCoord) {
          if (element.classification === "actinides") {
            xCoord = element.atomic_number - 87;
            yCoord -= 3;
          } else if (element.classification === "lanthanides") {
            xCoord = element.atomic_number - 55;
            yCoord -= 3;
          } else {
            xCoord = 0;
          }
        }

        background = colors[element.classification];

        var nodes = labelledSquare( xCoord, yCoord, element.atomic_number, element.symbol, {fill: background} );
        jQuery.each( nodes, function(i, node) {
          jQuery( node ).click( function() {
            displayDetailed( element );
          } );
        } );
      } );

      square([2, 3], 1, {fill: "#ff81d2"});
      square([2, 4], 1, {fill: "#FFABFF"});
    }

    return this;
}

//Various Molecules for students to examine and work on
//Should continue to add common molecules
var getMolecule = function(){
    var allMolecules = [
        ["Na","Cl"],
        ["H","Cl"],
        ["H","F"],
        ["H","I"],
        ["H","H","O"],
        ["H","H","O","O"],
        ["K","I"],
        ["Ca","I","I"],
        ["Mg","F","F"],
        ["C","O","O"],
        ["N","O"],
        ["I","I"],
        ["Cs","I"],
        ["Sr","Br"],
        ["Ag","N","O","O","O"],
        ["H","H"]
        ];
    var pick = randomnumber=Math.floor(Math.random()*allMolecules.length);
    var ans = allMolecules[pick];
    return ans;
}

//Formats the molecule into Latex-recognizable output from getMolecule function.
var combineMolecule = function(molecule){
    var whole = "";
    var n = 1;
    for(i=0;i<molecule.length;i++){
        if(i!=0 && molecule[i] === molecule [i-1]){
            n++;
            if(i === molecule.length - 1){
                whole += "_";
                whole += n.toString();
            }
        }
        else if(n > 1){
            whole += "_";
            whole += n.toString();
            n = 1;
            whole += molecule[i];
        }
        else{
            whole += molecule[i];
        }
    }
    return whole;
}

//Function: getSigFigFromNum( num ), provides the significant digits of a number.
//@num must be a number (base 10) that is a string. example "01"
var getSigFigFromNum = function( num ){
	if( isNaN( +num ) ){
		throw new Error( "getSigFigFromNum(): num (" + num + ") is not a number." );
	}
	// We need to get rid of the leading zeros for the numbers.
	num = num.replace( /^0+/, '');  
	// re is a RegExp to get the numbers from first non-zero to last non-zero
	var re = /[^0](\d*[^0])?/;	
	return ( /\./.test( num ) )? num.length - 1 : (num.match( re ) || [''])[0].length;
};
