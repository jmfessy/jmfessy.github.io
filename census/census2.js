// -----------------------------GLOBAL VARIABLES FOR SETUP & DATA--------------------------------

var user_key = 'ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';
var url = 'https://api.census.gov/data/2010/sf1?key=ac34b99eefc48a3f26f41ba60f1f119f76f7fe73&for=county%3A%2A&get=P0030003%2CP0030002%2CP0030004%2CP0030005%2CP0030006%2CP0030007%2CP0030001%2CP0080011%2CP0080012%2CP0080013%2CP0080014%2CP0080016%2CP0080017%2CP0080018%2CP0080020%2CP0080021%2CP0080023%2CP0080015%2CP0080019%2CP0080024%2CP0080026%2CP0080022';
//var url1= 'https://api.census.gov/data/2010/sf1?get='+whiteblack+'&for=county:'+county+'&in=state:'+state+'&key=ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';
var queryResult;

var xcanvas = 11*120; var ycanvas = 11.4*120; var centerx = xcanvas/2; var centery = ycanvas/2; var h = (Math.sqrt(3))/2;var value = 0;

//status! indexes
  var mr = 0;
  var cs = 0;
  var mr_most_per = 0; var mr_med_per = 0, mr_least_per = 0;

// ------------------------------SETUP---------------------------------
 

function setup() {
  createCanvas(xcanvas, ycanvas);
  background(color('#152F48'));
  //noLoop();
}

// ------------------------------GLOBAL VARIABLES FOR LOOKS---------------------------------
  
var alone_race = ["Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White",]; //var alone_race_per = [race_raw_per[0].toString()+"%",race_raw_per[1].toString()+"%",race_raw_per[2].toString()+"%",race_raw_per[3].toString()+"%",race_raw_per[4].toString()+"%",race_raw_per[5].toString()+"%"]

var aswh = "Asian Whites "; var asbl = "Black Asians "; var ashs = "Asian Hispanics "; var asind = "Indian Asians "; var aspi = "Asian Pacific Islander ";
var multiracialMatrix = [aswh, asbl, ashs, asind, aspi, "White Blacks ", "White Hispanics ", "White Indians ", "White Pacific Islanders ", "Black Hispanics ", "Black Indians ", "Black Pacific Islanders ", "Hispanic Indians ", "Hispanic Pacific Islanders ","Indian Pacific Islanders "]
var mostL = " most likely"; var leastL = " least likely"; var medL = " on average likely"; var are = "are";
var chooseSeverity = [mostL, medL, leastL]

// colors
var asiancolor = "#E0231E", hispaniccolor = "#E07A22", blackcolor ="#E0A12E", pacificcolor = "#E0C634", indiancolor = "#2D62BA", whitecolor = "#387BBF";
var gray = [asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor, asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor, asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor, asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor];

//for ellipses
var esize = 20, shifted = esize*1.55; var eycanvas = 0.982;
var smallcircle = 300; var diameter = 400; var d = 0;

initialPage = 0;


//-------------------------------FUNCTION---------------------------------------------------------------------------------------

function draw(){

//------------MR racial identity!! -----------------------------------------------------------

if (mr ==0) {
  //var asianper = .2; hispanicper = .3; blackper = .1, indianper = .02, pacificper = .08, whiteper = .3
  //                    Kauai        `            honoloulu                       hawaaii                        kalawo                          lycoming                         sanilac                           deer lodge                    indiana                            cheyenne                          baker                      clinch                                          quitman                    
  raw_races = [.31,.11,.006,.005,.091,.33,  .429,.097,.028,.003,.095,.22,   .216,.126,.008,.006,.13,.34,   .08,.011,.001,.001,.50,.261,    .007,.019,.047,.002,.001,.923,  .01,.037,.01,.01,.01,.90,   .01,0.03,.001,.014,.01,.92,    .012,.013,.026,.001,.002,.95,   .005,.12,.008,.014,.001,.84,    .001,.056,.45,.004,.001,.48,    0.003, 0.053, 0.274, 0.01, 0.001, 0.652,  0.003, 0.018, 0.477, 0.007, 0, .49]
  populations = [3640, 47609, 8918, 4, 175, 65, 14, 134, 0, 0, 0, 0]  
  percentages = [25, 18, 30, 15, 1, 1, 1, 1, 0.0, 0.0, 0.0, 0.0]
  totalcitynumbers = [ 72029,992605,198449,88,115248,41409,9085,86364,1848,3150,6829,2335]

// names for the things
var state = ["HI", "HI", "HI", "HI", "PA", "MI", "MT", "PA", "CO", "GA", "GA", "GA"];
var county = ["Kauai County", "Honolulu County", "Hawaii County", "Kalawao County", "Lycoming County", "Sanilac County", "Deer Lodge County", "Indiana County", "Cheyenne County", "Baker County","Clinch County", "Quitman County"];
}

//black asians
if(mr==1){
    //                    Kauai        `            Queens                       Geary County                        kalawo                          lycoming                         sanilac                           deer lodge                    indiana                            cheyenne                          baker                      clinch                                          quitman                    
  raw_races = [.157,.262,.148,.012,.01,.38,  0.035,0.23,0.15,0.3,0.21,0.05,  .035,.163,.189,.013,.008,.56,   .08,.011,.001,.001,.50,.261,    .007,.019,.047,.002,.001,.923,  .01,.037,.01,.01,.01,.90,   .01,0.03,.001,.014,.01,.92,    .012,.013,.026,.001,.002,.95,   .005,.12,.008,.014,.001,.84,    .001,.056,.45,.004,.001,.48,    0.003, 0.053, 0.274, 0.01, 0.001, 0.652,  0.003, 0.018, 0.477, 0.007, 0, .49]
  var state = ["CA", "NY", "KS", "VA", "MT", "NM", "WV", "TX", "CO", "GA", "GA", "GA"];
  populations = [9485, 8224, 4970, 3770, 2282, 2205, 2200, 425, 0, 0, 0, 0]  
  percentages = [0.00394345,  0.0036867 ,  0.00293929,  0.00252879,0,0,0,0,0,0,0,0]
  totalcitynumbers = [440207, 233354, 35586, 86403, 82288, 87672, 29404, 44566, 52097, 33812, 44837, 39215]
  var county = ["Solano County", "Queens County", "Geary County", "Newport County", "Lycoming County", "Sanilac County", "Deer Lodge County", "Indiana County", "Cheyenne County", "Baker County","Clinch County", "Quitman County"];
}

//asian hispanics
if(mr==2){
  raw_races = [ 0.035,0.23,0.15,0.3,0.21,0.05,  0.20943948,  0.19859053,  0.37387079,  0.30440958,0.27378106,  0.35055176,  0.10719943,  0.02041734,  0.50140864,0.16499386,  0.10995107,  0.43095112,  0.1718522 ,  0.42316009,0.262903  ,  0.28697304,  0.19709905,  0.23105558,  .007,.019,.047,.002,.001,.923,  .01,.037,.01,.01,.01,.90, .01,0.03,.001,.014,.01,.92,  .012,.013,.026,.001,.002,.95,  0.49584795,0.05409451,  0.29650616,  0.21341229,  0.144372  ,  0.39959181,0.19006667,  0.15843132,  0.23985192,  0.05756249,  0.33766868,0.16012528,  0.17025447,  0.36239124,  0.20478271,  0.35886362,0.27136284,  0.0894513 ,  0.4865896 ,  0.22004867,  0.43378742,0.20415543,  0.28580874]
  var state = ["NY", "CA", "CA", "CA", "LA", "LA", "AL", "AR", "IA", "IA", "IA", "IA"];
  populations = [18688, 12802,  5945,  5529, 50, 220, 419, 273, 0, 0, 0, 0]  
  //done
  percentages = [0.00573895,  0.00503507,  0.00442277,  0.00422585,0,0,0,0,0,0,0,0]
  totalcitynumbers = [39830, 23476, 11683, 56325, 61585, 80008, 88266, 43238, 30443, 94893, 85520, 26347]
  var county = ["Queens County", "San Beninto", "Sutter County", "San Joaquin County", "Lycoming County", "Sanilac County", "Deer Lodge County", "Indiana County","Harrison County", "Hamilton County","Guthrie County", "Crawford County"];
}

// Asian Indians
if(mr==3){
  raw_races = [ 0.18687862,  0.40157467,  0.27357338,  0.09901012,  0.41144633,0.31721677,  0.48381418,  0.11931579,  0.43342723,  0.26891108,0.15804168,  0.01387534,  0.08157057,  0.26743517,  0.44975567,0.48432119,  0.45591004,  0.24588085,  0.42076753,  0.23933436,0.50235316,  0.42475966,  0.0432396 ,  0.40566978,  0.39742224,0.07798009,  0.44191271,  0.04939546,  0.28869036,  0.16900813,0.16417047,  0.4819087 ,  0.13997199,  0.32571656,  0.3434833 ,0.13891733,  0.2117685 ,  0.01886245,  0.25922987,  0.29505399,0.46616547,  0.23378621,  0.23853732,  0.45595293,  0.17435285,0.29469756,  0.25635398,  0.2387499 ,  0.31942869,  0.38687599,0.02088749,  0.22933588,  0.28853126,  0.39779812,  0.30985638,0.16197323,  0.1309567 ,  0.18142818,  0.2412828 ,  0.48031038,0.45994472,  0.02231266,  0.02104292,  0.19819133,  0.02482181,0.16165204,  0.06163533,  0.4922895 ,  0.04028975,  0.17608286,0.30305401,  0.12399538]
  var state = ["AK", "AK", "AZ", "CA", "GA", "IL", "MN", "FL", "CO", "CO", "ID", "IA"];
  populations = [3633, 3265, 1124, 1115, 101, 297, 427, 349, 0, 0, 0, 0]  
  //done
  percentages = [0.01359517,  0.00812582,  0.00790698,  0.00738609,0,0,0,0,0,0,0,0]
  totalcitynumbers = [63976, 18579, 21891, 47884, 65578, 86976, 64635, 46533, 77053, 4226, 6503, 78829]
  var county = ["Yakutat City and Borough", "Petersburg", "Greenlee County", "Trinity County", "Camden County","Tazewell County", "Mahnomen County", "Madison County", "Moffat County", "Conejos County", "Jefferson County", "Louisa County"];
}
// Asian Pacific Islander
if(mr==4){
  raw_races = [ 0.37370671,  0.34922446,  0.31097207,  0.4780311 ,  0.4501137 ,0.22066465,  0.19758224,  0.12598071,  0.24322859,  0.39985529,0.18852809,  0.44330281,  0.18171761,  0.1586672 ,  0.25791822,0.12835744,  0.33806774,  0.40072454,  0.4539503 ,  0.01896001,0.42235774,  0.05234223,  0.30807186,  0.14084119,  0.2544572 ,0.02881193,  0.13345937,  0.11204781,  0.4420091 ,  0.48714748,0.03152602,  0.41086433,  0.19817388,  0.08169716,  0.22539341,0.37597801,  0.41861007,  0.34281606,  0.16798166,  0.18580628,0.22052651,  0.40397409,  0.25260073,  0.09552525,  0.01394276,0.02049227,  0.08040438,  0.38639491,  0.26414538,  0.41341114,0.43650854,  0.15165135,  0.47993237,  0.01405123,  0.07608193,0.04103981,  0.19578729,  0.33181082,  0.40941612,  0.46988836,0.46216927,  0.22711118,  0.45335533,  0.30367073,  0.38631025,0.16785284,  0.18214137,  0.38047697,  0.16976341,  0.4089847 ,0.08235309,  0.06404196]
  var state = ["HI", "HI", "HI", "HI", "HI", "CA", "CA", "CA", "IN", "IN", "IN", "IN"];
  populations = [46461, 12860,  9512,  7827, 332, 505, 30, 147, 0, 0, 0, 0]  
  //done
  percentages = [0.06948384,  0.06143354,  0.05617743,  0.05555556,0,0,0,0,0,0,0,0]
  totalcitynumbers = [44702, 14309, 66959, 12384, 1385, 57956, 48474, 55752, 59157, 40290, 83592, 46255]
  var county = ["Kauai County", "Honolulu County", "Hawaii County", "Kalawao County", "Maui County", 
  "Fresno County", "Alameda County", "Inyo County", "Ripley County", "Porter County","Parke County", "Owen County"];
}

// White Blacks
if(mr==5){
  raw_races = [ 0.0551158 ,  0.26564508,  0.15767439,  0.43939104,  0.17057322,0.30897039,  0.33126322,  0.25599859,  0.1620818 ,  0.36715266,0.34489499,  0.07732546,  0.05919482,  0.4280224 ,  0.26456345,0.19814318,  0.47997651,  0.29628382,  0.30889778,  0.37717314,0.46482823,  0.20219739,  0.21547866,  0.39687233,  0.30261339,0.19341753,  0.4873377 ,  0.48639023,  0.04708429,  0.25684573,0.4517205 ,  0.07965709,  0.45932396,  0.35347849,  0.33883543,0.24103526,  0.36168886,  0.08474917,  0.1640507 ,  0.25405258,0.18109095,  0.25137214,  0.35295673,  0.11081934,  0.41790016,0.32351135,  0.3785561 ,  0.18448731,  0.12198308,  0.01910568,0.10043276,  0.27122825,  0.24303995,  0.34131863,  0.2288431 ,0.3039386 ,  0.34555351,  0.16463738,  0.09270414,  0.1811214 ,0.25825067,  0.49678278,  0.24623478,  0.19823304,  0.34789589,0.40606419,  0.12641804,  0.246827  ,  0.4241174 ,  0.0130764 ,0.42330895,  0.30241191]
  var state = ["PR", "PR", "PR", "PR", "WI", "MI", "VA", "TX", "CO", "NM", "NJ", "NJ"];
  populations = [38459, 24050, 21706, 17448, 196, 516, 146, 323, 0, 0, 0, 0]  
  //done
  percentages = [0.0880088 ,  0.05748399,  0.05122172,  0.04234301,0.00356991749524011, 0.0035706634292651577, 0.0035659805455950234, 0.0035735337459475392,0,0,0,0]
  totalcitynumbers = [12800, 82161, 11595, 80050, 14590, 53678, 76188, 33239, 73898, 71304, 37702, 43414]
  var county = ["Culebra County", "Yabucoa County", "Las Piedras County", "Juncos County", "Sauk County", "Gladwin County", "Fairfax County", "Tarrant County", "San Juan County", "Guadalupe County","Salem County", "Essex County"];
}

// White hispanics
if(mr==6){
  raw_races = [ 0.36370988,  0.17650556,  0.14181469,  0.06732663,  0.4053959 , 0.09047039,  0.47824365,  0.11925142,  0.08858126,  0.0240874 , 0.10072816,  0.21115579,  0.20482803,  0.17309274,  0.34702945, 0.26821242,  0.22365996,  0.36953343,  0.33653936,  0.28717474, 0.35798271,  0.15695005,  0.45785653,  0.1965301 ,  .007,.019,.047,.002,.001,.923,  .01,.037,.01,.01,.01,.90,   .01,0.03,.001,.014,.01,.92,    .012,.013,.026,.001,.002,.95,   .005,.12,.008,.014,.001,.84,    .001,.056,.45,.004,.001,.48,    0.003, 0.053, 0.274, 0.01, 0.001, 0.652,  0.003, 0.018, 0.477, 0.007, 0, .49]
  var state = ["TX", "CA", "NM", "TX", "PA", "MI", "MT", "PA", "CO", "GA", "GA", "GA"];
  populations = [3640, 47609, 8918, 4552, 305, 249, 418, 261, 0, 0, 0, 0]  
  //done
  percentages = [0.07317073,  0.0268381 ,  0.0221028 ,  0.02188979,0.0017592359889419453, 0.0017596782302664656, 0.0017586893136483546, 0.001762258597823519,0,0,0,0]
  totalcitynumbers = [26871, 85410, 82769, 20336, 91247, 9482, 48908, 29000, 30277, 38835, 87373, 23719]
  var county = ["Loving County", "Imperial County", "Taos County", "Uvalde County", "Lycoming County", "Sanilac County", "Deer Lodge County", "Indiana County", "Cheyenne County", "Baker County","Clinch County", "Quitman County"];
}

// White Indians
if(mr==7){
  raw_races = [ 0.31180106,  0.41143682,  0.20863328,  0.01127616,  0.05104018, 0.41969956,  0.12016046,  0.23795518,  0.12131933,  0.21519282, 0.36007592,  0.15426102,  0.26627716,  0.44478945,  0.24113639,  0.04321444,  0.43693835,  0.24318475,  0.3238853 ,  0.12682229, 0.15490244,  0.29734836,  0.17859659,  0.09632273,  .007,.019,.047,.002,.001,.923,  .01,.037,.01,.01,.01,.90,   .01,0.03,.001,.014,.01,.92,    .012,.013,.026,.001,.002,.95,   .005,.12,.008,.014,.001,.84,    .001,.056,.45,.004,.001,.48,    0.003, 0.053, 0.274, 0.01, 0.001, 0.652,  0.003, 0.018, 0.477, 0.007, 0, .49]
  var state = ["AK", "AK", "OK", "OK", "PA", "MI", "MT", "PA", "CO", "GA", "GA", "GA"];
  populations = [30425, 19177, 16363, 15161, 515, 108, 152, 96, 0, 0, 0, 0]  
  //done
  percentages = [0.12637914,  0.11178248,  0.0949169 ,  0.08247897,0.004178272980501393, 0.0041897457747479055, 0.004177751083637407, 0.004190899760520014,0,0,0,0]
  totalcitynumbers = [11463, 31138, 90385, 11762, 66549, 86794, 20578, 50469, 82915, 91789, 19139, 34191]
  var county = ["Bristol Bay Borough County", "Yakutat City and Borough County", "Adair County County", "Mayes County County", "Lycoming County", "Sanilac County", "Deer Lodge County", "Indiana County", "Cheyenne County", "Baker County","Clinch County", "Quitman County"];
}

// White Pacific
if(mr==8){
  raw_races = [ 0.36728374,  0.2637729 ,  0.31660085,  0.39165977,  0.23554542, 0.49816889,  0.43461949,  0.46046448,  0.06546003,  0.07811967, 0.46639543,  0.20307633,  0.2532846 ,  0.21532026,  0.2089667 , 0.49015496,  0.15406025,  0.42970729,  0.42400879,  0.2290435 , 0.17933108,  0.13115914,  0.4831252 ,  0.19285576,  0.50339497, 0.31873504,  0.06213145,  0.43273653,  0.4410229 ,  0.28550173, 0.44017659,  0.14315983,  0.43148107,  0.33112677,  0.35952864, 0.39287088,  0.1027926 ,  0.17665652,  0.01485038,  0.18529857, 0.03994913,  0.48321489,  0.02667062,  0.22590979,  0.43715833, 0.27100224,  0.01475838,  0.40658417,  0.34198416,  0.4559474 , 0.04876621,  0.16054863,  0.36330281,  0.15379436,  0.3164438 , 0.45758438,  0.10703858,  0.17979113,  0.23353292,  0.09873638, 0.29635808,  0.09044038,  0.37728189,  0.49668895,  0.4564556 , 0.12299066,  0.23187635,  0.29963887,  0.3258513 ,  0.22742655, 0.40879977,  0.07447755]
  var state = ["HI", "HI", "HI", "HI", "CA", "CA", "CA", "CA", "CO", "GA", "GA", "GA"];
  populations = [46461, 12860,  9512,  7827, 266, 376, 170, 409, 0, 0, 0, 0]  
  percentages = [0.04070694,  0.03333333,  0.03115595,  0.03073438,0.0001897966354699134, 0.00019009435592575951, 0.0001896871178736074, 0.00019027685282085435,0,0,0,0]
  totalcitynumbers = [13618, 35692, 41064, 71887, 68698, 88178, 70743, 87180, 8511, 90264, 27035, 44151]
  var county = ["Kauai County", "Honolulu County", "Hawaii County", "Kalawao County", "Santa Clara County", "Santa Cruz County", "Los Angeles County", "Santa Barbara County", "Cheyenne County", "Baker County","Clinch County", "Quitman County"];
}

// Black Hispanics
if(mr==9){
  raw_races = [ 0.38976221,  0.28133617,  0.36672173,  0.33372297,  0.05298482, 0.32596918,  0.46699948,  0.2410195 ,  0.12291374,  0.16295258, 0.43252379,  0.04242872,  0.09184378,  0.07283689,  0.05553437, 0.34907434,  0.48193512,  0.40492551,  0.34836606,  0.27760243, 0.39593793,  0.14716723,  0.40222271,  0.05201201,  .007,.019,.047,.002,.001,.923,  .01,.037,.01,.01,.01,.90,   .01,0.03,.001,.014,.01,.92,    .012,.013,.026,.001,.002,.95,   .005,.12,.008,.014,.001,.84,    .001,.056,.45,.004,.001,.48,    0.003, 0.053, 0.274, 0.01, 0.001, 0.652,  0.003, 0.018, 0.477, 0.007, 0, .49]
  var state = ["NY", "PR", "MA", "MA", "PA", "MI", "MT", "PA", "CO", "GA", "GA", "GA"];
  populations = [16435, 13357,  9988,  8813, 346, 273, 230, 105, 0, 0, 0, 0]  
  //done
  percentages = [0.00964329,  0.00687117,  0.00677264,  0.00662331,0.000171170999828829, 0.00017117425539198904, 0.0001710961560396943, 0.00017149449658570047,0,0,0,0]
  totalcitynumbers = [55074, 90391, 8758, 91673, 90402, 91510, 24089, 65947, 38446, 15937, 22989, 28224]
  var county = ["Bronx County", "Maunabo Municipio", "Suffolk County", "Plymouth County", "Lycoming County", "Sanilac County", "Deer Lodge County", "Indiana County", "Cheyenne County", "Baker County","Clinch County", "Quitman County"];
}

// Black Indian
if(mr==10){
  raw_races = [ 0.39768233,  0.38806153,  0.36501325,  0.2761464 ,  0.01379578, 0.0566695 ,  0.1877786 ,  0.3026186 ,  0.03902706,  0.13512145, 0.13266544,  0.47833898,  0.18578401,  0.31110223,  0.48604876, 0.10626467,  0.49785211,  0.01267302,  0.07991993,  0.0167016 , 0.01329614,  0.38692449,  0.33501513,  0.01899262,  0.2468192 , 0.10203686,  0.38068958,  0.23374178,  0.26950414,  0.41899565, 0.01562699,  0.02689617,  0.13939864,  0.21229112,  0.08459138, 0.15948711,  0.30200947,  0.34005291,  0.49134021,  0.3465338 , 0.0955041 ,  0.29693355,  0.34298273,  0.05579065,  0.27106282, 0.15462906,  0.45838099,  0.41872489,  0.34758283,  0.32086705, 0.47078063,  0.23022672,  0.49617733,  0.43471052,  0.13460614, 0.3112009 ,  0.05221722,  0.078937  ,  0.18813826,  0.05597545, 0.30273881,  0.23917952,  0.02569383,  0.45100795,  0.2629493 , 0.18891409,  0.17685357,  0.20638959,  0.14902786,  0.26760709, 0.46101536,  0.01207541]
  var state = ["OK", "AK", "OK", "OK", "GA", "KY", "GA", "FL", "MT", "NE", "NE", "NE"];
  populations = [8434, 5137, 4384, 4263, 143, 32, 263, 242, 0, 0, 0, 0]  
  //done
  percentages = [0.01003269,  0.00858369,  0.00840964,  0.0081376,0.00027428571428571427, 0.00027481755168096736, 0.000274079874706343, 0.0002756656176058441,0,0,0,0]
  totalcitynumbers = [69895, 13535, 9784, 8224, 57407, 79190, 12351, 78466, 40002, 12659, 69899, 86244]
  var county = ["Okmulgee County", "Lake and Peninsula Borough County", "Delaware County", "Woodward County County", "McDuffie County", "Robertson County", "Chattooga County County", "Nassau County", "Roosevelt County", "Sioux County","Stanton County", "Thayer County"];
}

// Black Pacific
if(mr==11){
  raw_races = [ 0.34969301,  0.19649395,  0.12963234,  0.03085897,  0.06374575, 0.37557419,  0.47070393,  0.4826018 ,  0.25839363,  0.09299963, 0.42023675,  0.28678758,  0.38780035,  0.01555271,  0.29175038, 0.42472706,  0.18036099,  0.08392407,  0.01989049,  0.07979336, 0.49325432,  0.14072813,  0.25923067,  0.12631542,  .007,.019,.047,.002,.001,.923,  .01,.037,.01,.01,.01,.90,   .01,0.03,.001,.014,.01,.92,    .012,.013,.026,.001,.002,.95,   .005,.12,.008,.014,.001,.84,    .001,.056,.45,.004,.001,.48,    0.003, 0.053, 0.274, 0.01, 0.001, 0.652,  0.003, 0.018, 0.477, 0.007, 0, .49]
  var state = ["HI", "FL", "GA", "GA", "PA", "MI", "MT", "PA", "CO", "GA", "GA", "GA"];
  populations = [12860, 2184, 1799, 1489, 518, 267, 378, 450, 0, 0, 0, 0]  
  //done
  percentages = [0.0015621 ,  0.00124938,  0.00116482,  0.0011347,0,0,0,0,0,0,0,0]
  totalcitynumbers = [30124, 28841, 85797, 89869, 58199, 85703, 48709, 38126, 55821, 32794, 43214, 53519]
  var county = ["Honolulu County", "Broward County", "Taliaferro County", "Liberty County", "Lycoming County", "Sanilac County", "Deer Lodge County", "Indiana County", "Cheyenne County", "Baker County","Clinch County", "Quitman County"];
}

// Hispanic Indians
if(mr==12){
  raw_races = [ 0.45313712,  0.4315257 ,  0.12236111,  0.22311979,  0.30223311, 0.38216123,  0.13578175,  0.15083051,  0.33803501,  0.46054899, 0.4444099 ,  0.04924871,  0.17539933,  0.03372337,  0.14880629, 0.03138744,  0.37125476,  0.15545848,  0.14971406,  0.01809177, 0.34940779,  0.41587486,  0.19133653,  0.02792361,  .007,.019,.047,.002,.001,.923,  .01,.037,.01,.01,.01,.90,   .01,0.03,.001,.014,.01,.92,    .012,.013,.026,.001,.002,.95,   .005,.12,.008,.014,.001,.84,    .001,.056,.45,.004,.001,.48,    0.003, 0.053, 0.274, 0.01, 0.001, 0.652,  0.003, 0.018, 0.477, 0.007, 0, .49]
  var state = ["CO", "CO", "AZ", "CO", "PA", "MI", "MT", "PA", "CO", "GA", "GA", "GA"];
  populations = [9213, 3636, 3629, 3050, 137, 444, 205, 346, 0, 0, 0, 0]  
  //done
  percentages = [0.00624291,  0.00521532,  0.00517351,  0.00472645,0,0,0,0,0,0,0,0]
  totalcitynumbers = [14486, 2614, 28848, 74389, 57841, 77722, 81263, 10792, 83031, 14956, 81094, 76155]
  var county = ["Costilla County", "Huerfano County", "La Paz County", "Alamosa County", "Lycoming County", "Sanilac County", "Deer Lodge County", "Indiana County", "Cheyenne County", "Baker County","Clinch County", "Quitman County"];
}

// Hispanic pacific
if(mr==13){
  raw_races = [ 0.07026547,  0.03573474,  0.42281436,  0.06311319,  0.13882446, 0.42590046,  0.02283797,  0.42435035,  0.08966776,  0.10402426, 0.08474316,  0.49447546,  0.36378651,  0.15480696,  0.5043291 , 0.14111717,  0.50240727,  0.10683635,  0.31915424,  0.41535818, 0.10670739,  0.24238007,  0.50757528,  0.36133837, .007,.019,.047,.002,.001,.923,  .01,.037,.01,.01,.01,.90,   .01,0.03,.001,.014,.01,.92,    .012,.013,.026,.001,.002,.95,   .005,.12,.008,.014,.001,.84,    .001,.056,.45,.004,.001,.48,    0.003, 0.053, 0.274, 0.01, 0.001, 0.652,  0.003, 0.018, 0.477, 0.007, 0, .49]
  var state = ["HI", "HI", "HI", "HI", "PA", "MI", "MT", "PA", "CO", "GA", "GA", "GA"];
  populations = [46461, 12860,  9512,  7827, 315, 386, 287, 150, 0, 0, 0, 0]  
  percentages = [0.09723956,  0.07685084,  0.07171551,  0.07060376,0.0007746478873239436, 0.0007748703582285271, 0.0007743255762503283, 0.0007765482430596001,0,0,0,0]
  totalcitynumbers = [31385, 46946, 77193, 18966, 52474, 74278, 76761, 40262, 88628, 42324, 959, 89666]
  var county = ["Kauai County", "Honolulu County", "Hawaii County", "Kalawao County", "Lycoming County", "Sanilac County", "Deer Lodge County", "Indiana County", "Cheyenne County", "Baker County","Clinch County", "Quitman County"];
}

// Indian Pacific
if(mr==14){
  raw_races = [ 0.23435677,  0.22513908,  0.45392184,  0.33784266,  0.20260105, 0.43061938,  0.0131495 ,  0.38366133,  0.4187913 ,  0.20382753,0.26212431,  0.37827366,  0.48510911,  0.21099076,  0.21282227,0.1275659 ,  0.11453704,  0.08242985,  0.36825082,  0.04596157,0.07555636,  0.45303601,  0.44859681,  0.45335926, .007,.019,.047,.002,.001,.923,  .01,.037,.01,.01,.01,.90,   .01,0.03,.001,.014,.01,.92,    .012,.013,.026,.001,.002,.95,   .005,.12,.008,.014,.001,.84,    .001,.056,.45,.004,.001,.48,    0.003, 0.053, 0.274, 0.01, 0.001, 0.652,  0.003, 0.018, 0.477, 0.007, 0, .49]
  var state = ["AK", "AK", "AK", "AK", "PA", "MI", "MT", "PA", "CO", "GA", "GA", "GA"];
  populations = [725, 368, 281, 280, 515, 249, 418, 268, 0, 0, 0, 0]  
  percentages = [0.00453172,  0.00254507,  0.00233771,  0.00206313,0,0,0,0,0,0,0,0]
  totalcitynumbers = [30829, 10783, 24349, 18161, 15411, 8507, 33911, 15139, 6890, 366, 21006, 21498]
  var county = ["Yakutat City and Borough", "North Slope Borough", "Aleutians West Census Area", "Dillingham Census Area", "Lycoming County", "Sanilac County", "Deer Lodge County", "Indiana County", "Cheyenne County", "Baker County","Clinch County", "Quitman County"];
}

//------------var for all -----------------------------------------------------------

var race_raw_per = []
  var angles = []
  var alone_race_per = [];
  for (var i = 0; i <=raw_races.length-1; i++) {
    angles.push(raw_races[i]*360)
    race_raw_per.push(raw_races[i]*100)
  }
  for (var i = 0; i <=race_raw_per.length-1; i++) {
    alone_race_per.push(Math.ceil(Math.round(race_raw_per[i])).toString()+"%")
  }

var eachrace_per = [];
var totracialNumber = []
for (var i = 0; i <totalcitynumbers.length; i++) {
    //totracialNumber.push((totalcitynumbers[i]).toString())
    matrixi = raw_races[(6*i)]*totalcitynumbers[i]; matrix2 = raw_races[(6*i)+1]*totalcitynumbers[i]; matrix3 = raw_races[(6*i)+2]*totalcitynumbers[i]; matrix4 = raw_races[(6*i)+3]*totalcitynumbers[i]; matrix5 = raw_races[(6*i)+4]*totalcitynumbers[i]; matrix6 = raw_races[((6*i)+5)]*totalcitynumbers[i];
    eachrace_per.push(matrixi); eachrace_per.push(matrix2);eachrace_per.push(matrix3);eachrace_per.push(matrix4);eachrace_per.push(matrix5);eachrace_per.push(matrix6);
  }


var multiper = [];
for (var i = 0; i <percentages.length; i++) {
    multiper.push(Math.ceil(percentages[i]).toString()+"%")
  }

var multiracialNumber = [];
  for (var i = 0; i <populations.length; i++) {
    multiracialNumber.push((populations[i]).toString())
  }  

// ------------------------------SETUP FOR LOOKS---------------------------------

  background(color('#152F48'));

  push();
  noFill(); strokeWeight(3.25); stroke(color("#387BBF")); 
  var boxheight = 45, boxwidth = 142, xover = .785, yover = .93;
  rect(xcanvas*xover, ycanvas*yover, boxwidth, boxheight, 11);
  rect(xcanvas*xover-boxwidth-20, ycanvas*yover, boxwidth, boxheight, 11);
  rect(xcanvas*xover-(boxwidth*2)-40, ycanvas*yover, boxwidth, boxheight, 11);
  
  fill(color("#387BBF")); noStroke(); textSize(22); textStyle(BOLD); textAlign(CENTER,[CENTER]);
  text("Most",xcanvas*xover-(boxwidth*2)-40+(boxwidth/2), ycanvas*yover+(boxheight/2)+(3.25));
  text("Median",xcanvas*xover-boxwidth-20+(boxwidth/2), ycanvas*yover+(boxheight/2)+(3.25));
  text("Least",xcanvas*xover+(boxwidth/2), ycanvas*yover+(boxheight/2)+(3.25));

  
  // ellipses - change the multiracial pairings
  noFill(); strokeWeight(3.25); stroke(color("#387BBF"));
  for (var i = 0; i < 15; i++) {
    ellipse((xcanvas*xover+boxwidth+3.5-esize)-(shifted*i),ycanvas*eycanvas,esize,esize);
  }
  fill(color("#387BBF")); strokeWeight(3.25); stroke(color("#387BBF"));
  ellipse((xcanvas*xover+boxwidth+3.5-esize)-(shifted*mr),ycanvas*eycanvas,esize,esize);
  pop();

  // State Variables
  var chosenMR = multiracialMatrix[mr];

  // Top Title Page
  textAlign(LEFT);
  var explaintxt = 37;
  var topicLiney = 97;
  var topicLinex = xcanvas/9;

  push();
  textSize(explaintxt);
  var linespace = 19;

  textStyle(BOLD); fill(255); //strokeWeight(2); stroke(255);textStyle(ITALIC)
  text(chosenMR, topicLinex, topicLiney);
  text(chooseSeverity[cs], topicLinex+((chosenMR.length)+(are.length))*linespace, topicLiney);

  textStyle(BOLD); noStroke();
  text("are ", topicLinex+((chosenMR.length)*linespace), topicLiney);
  text("to live in these", topicLinex+((chosenMR.length)+(are.length)+(chooseSeverity[cs].length)-1)*linespace, topicLiney);
  text("counties", topicLinex, topicLiney+explaintxt);

  stroke(255);strokeWeight(3);
  var lengthMost = [100, 206,94]; topicLiney = topicLiney+5;
  line(topicLinex+((chosenMR.length)+(are.length))*linespace+10, topicLiney, topicLinex+((chosenMR.length)+(are.length))*linespace+lengthMost[cs], topicLiney);
  var lengthRace =[ 230, 230, 285, 240, 380, 230, 285, 240, 400, 280, 237, 400, 293, 455, 410];
  line(topicLinex, topicLiney, topicLinex+lengthRace[mr], topicLiney);

  pop();

  // charts

  noStroke();
  var lastAngle = 0;
  var leftx = xcanvas/2; rightx = leftx*3;
  var topy = ycanvas/1.5; bottomy = topy*2.2;
  for (var i = 0; i <= 5; i++) {
    fill(color(gray[i]));
    arc(leftx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    lastAngle += radians(angles[i+(24*cs)]);
    fill(color('#152F48')); ellipse(leftx/2, topy/2, smallcircle, smallcircle);
  }
  lastAngle=0;
    for (var i = 6; i <= 11; i++) {
    fill(color(gray[i]));
    arc(rightx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    lastAngle += radians(angles[i+(24*cs)]);
    fill(color('#152F48')); ellipse(rightx/2, topy/2, smallcircle, smallcircle);
  }
  lastAngle=0;
  for (var i = 12; i <=17; i++) {
    fill(color(gray[i]));
    arc(rightx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    lastAngle += radians(angles[i+(24*cs)]);
    fill(color('#152F48')); ellipse(rightx/2, bottomy/2, smallcircle, smallcircle);
  }
  lastAngle=0;
  for (var i = 18; i <= 23; i++) {
    fill(color(gray[i]));
    arc(leftx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    lastAngle += radians(angles[i+(24*cs)]);
    fill(color('#152F48')); ellipse(leftx/2, bottomy/2, smallcircle, smallcircle);
  }

// internal to charts data
  push();
  var leftx = xcanvas/4; rightx = leftx*3;
  var topy = ycanvas/3; bottomy = topy*2.2;
  textStyle(BOLD); fill(255);
  textAlign(CENTER);
  var txtsize = 80; var smlltxtsz = 22;
  var yoffset = 15; var racoffset = 30; var boffset = racoffset+smlltxtsz+10; 

  // top left
  textSize(txtsize); text(multiper[0+(4*cs)], leftx,topy-yoffset);
  textSize(smlltxtsz); text("are "+chosenMR, leftx,topy+racoffset); text(multiracialNumber[0+(4*cs)]+" people",leftx,topy+boffset); 
  // top right
  textSize(txtsize); text(multiper[1+(4*cs)], rightx,topy-yoffset);
  textSize(smlltxtsz); text("are "+chosenMR, rightx,topy+racoffset); text(multiracialNumber[1+(4*cs)]+" people",rightx,topy+boffset); 
  // bottom right
  textSize(txtsize); text(multiper[2+(4*cs)], rightx,bottomy-yoffset);
  textSize(smlltxtsz); text("are "+chosenMR, rightx,bottomy+racoffset); text(multiracialNumber[2+(4*cs)]+" people",rightx,bottomy+boffset); 
  // bottom left
  textSize(txtsize); text(multiper[3+(4*cs)], leftx,bottomy-yoffset);
  textSize(smlltxtsz); text("are "+chosenMR, leftx,bottomy+racoffset); text(multiracialNumber[3+(4*cs)]+" people",leftx,bottomy+boffset); 

  //upper left, asian
  var leftx = xcanvas/4; rightx = leftx*3; var topy = ycanvas/3; bottomy = topy*2.2; var beg = 0, stop = 0; var start = []; var end = [];
  var v = [mouseX-leftx, mouseY-topy], rmag = Math.sqrt((v[0]*v[0])+(v[1]*v[1])), theta = abs(180*(Math.atan2(v[0],v[1]))/PI-180);
  for (var i = 0+(24*cs); i <=5+(24*cs); i++) {
    stop = beg + (angles[i]);
    start.push(beg);
    end.push(stop); 
    beg = stop;
  }
  for (var j = 0+(24*cs); j <=5+(24*cs); j++) {
    if (rmag > smallcircle/2 && rmag < diameter/2 && theta < end[j-(24*cs)]+90 && theta > start[j-(24*cs)]+90){
    console.log(alone_race[j]); fill(color('#152F48')); ellipse(leftx, topy, smallcircle, smallcircle);
    textSize(txtsize);   textStyle(BOLD); fill(255); text(alone_race_per[j], leftx,topy-yoffset);
    textSize(smlltxtsz); text("are "+alone_race[j]+" alone", leftx,topy+racoffset); text(Math.ceil(eachrace_per[j])+" people",leftx,topy+boffset);
    } }

  //upper right
  var leftx = xcanvas/4; rightx = leftx*3; var topy = ycanvas/3; bottomy = topy*2.2; var beg = 0, stop = 0; var start = []; var end = []; var xpos = rightx; var ypos = topy;
  var v = [mouseX-rightx, mouseY-topy], rmag = Math.sqrt((v[0]*v[0])+(v[1]*v[1])), theta = abs(180*(Math.atan2(v[0],v[1]))/PI-180);
  for (var i = 6+(24*cs); i <=11+(24*cs); i++) {
    stop = beg + (angles[i]);
    start.push(beg);
    end.push(stop); 
    beg = stop;
  }
  for (var j = 0+(24*cs); j <=5+(24*cs); j++) {
    if (rmag > smallcircle/2 && rmag < diameter/2 && theta < end[j-(24*cs)]+90 && theta > start[j-(24*cs)]+90){
    console.log(alone_race[j]); fill(color('#152F48')); ellipse(xpos, ypos, smallcircle, smallcircle);
    textSize(txtsize);   textStyle(BOLD); fill(255); text(alone_race_per[j+6], xpos,ypos-yoffset);
    textSize(smlltxtsz); text("are "+alone_race[j]+" alone", xpos,ypos+racoffset); text(Math.ceil(eachrace_per[j+6])+" people",xpos,ypos+boffset);
    } }

   //bottom right
  var leftx = xcanvas/4; rightx = leftx*3; var topy = ycanvas/3; bottomy = topy*2.2; var beg = 0, stop = 0; var start = []; var end = []; var xpos = rightx; var ypos = bottomy;
  var v = [mouseX-xpos, mouseY-ypos], rmag = Math.sqrt((v[0]*v[0])+(v[1]*v[1])), theta = abs(180*(Math.atan2(v[0],v[1]))/PI-180);
  for (var i = 12+(24*cs); i <=17+(24*cs); i++) {
    stop = beg + (angles[i]);
    start.push(beg);
    end.push(stop); 
    beg = stop;
  }
  for (var j = 0+(24*cs); j <=5+(24*cs); j++) {
    if (rmag > smallcircle/2 && rmag < diameter/2 && theta < end[j-(24*cs)]+90 && theta > start[j-(24*cs)]+90){
    console.log(alone_race[j]); fill(color('#152F48')); ellipse(xpos, ypos, smallcircle, smallcircle);
    textSize(txtsize);   textStyle(BOLD); fill(255); text(alone_race_per[j+12], xpos,ypos-yoffset);
    textSize(smlltxtsz); text("are "+alone_race[j]+" alone", xpos,ypos+racoffset); text(Math.ceil(eachrace_per[j+12])+" people",xpos,ypos+boffset);
    } }

  //bottom left
  var leftx = xcanvas/4; rightx = leftx*3; var topy = ycanvas/3; bottomy = topy*2.2; var beg = 0, stop = 0; var start = []; var end = []; var xpos = leftx; var ypos = bottomy;
  var v = [mouseX-xpos, mouseY-ypos], rmag = Math.sqrt((v[0]*v[0])+(v[1]*v[1])), theta = abs(180*(Math.atan2(v[0],v[1]))/PI-180);
  for (var i = 18+(24*cs); i <=23+(24*cs); i++) {
    stop = beg + (angles[i]);
    start.push(beg);
    end.push(stop); 
    beg = stop;
  }
  for (var j = 0+(24*cs); j <=5+(24*cs); j++) {
    if (rmag > smallcircle/2 && rmag < diameter/2 && theta < end[j-(24*cs)]+90 && theta > start[j-(24*cs)]+90){
    console.log(alone_race[j]); fill(color('#152F48')); ellipse(xpos, ypos, smallcircle, smallcircle);
    textSize(txtsize);   textStyle(BOLD); fill(255); text(alone_race_per[j+18], xpos,ypos-yoffset);
    textSize(smlltxtsz); text("are "+alone_race[j]+" alone", xpos,ypos+racoffset); text(Math.ceil(eachrace_per[j+18])+" people",xpos,ypos+boffset);
    }  
  }
  
  pop();

  push();
  var leftx = xcanvas/4; rightx = leftx*3;
  var topy = ycanvas/3; bottomy = topy*2.2; var yoffset = 25;
  textSize(30), textAlign(CENTER); textStyle(BOLD); fill(255);
  diameter = 400;
  text(county[0+(4*cs)]+", " +state[0+(4*cs)], leftx, topy-(diameter/2)-yoffset);
  text(county[3+(4*cs)]+", " +state[1+(4*cs)], leftx, bottomy-(diameter/2)-yoffset);
  text(county[1+(4*cs)]+", " +state[2+(4*cs)], rightx, topy-(diameter/2)-yoffset);
  text(county[2+(4*cs)]+", " +state[3+(4*cs)], rightx, bottomy-(diameter/2)-yoffset);
  pop();

// if within range
// for circle = diamter_big, diamter_big = <500, diatmer_big ++

    if (initialPage == 0) {
    fill(21,47,72,175)
    rect(0,0,xcanvas,ycanvas)
    push()
    fill(255); noStroke()
    ellipse(xcanvas/2,ycanvas/2, 960,960);
    fill(color('#152F48')); textAlign(CENTER); textStyle(BOLD); textSize(40);
    text("Multiracial Analysis of Counties",(xcanvas/2),(ycanvas/2)-250); text("Across the United States",(xcanvas/2),(ycanvas/2)-235+40)
     textSize(30); textAlign(LEFT);
    text("What community fosters multiracial people? Interact with the data to see the communities with the highest, median, and lowest percentage of multiracial individuals*.",xcanvas/4,ycanvas/3+80,700,800)
    textSize(30);
    text("*Multiracial individuals are considered to be those who identify as 50% one race and 50% another. For example, a white asian is someone who is 50% asian and 50% white.",xcanvas/4,ycanvas/3+275,700,800)
    textAlign(CENTER);
    text("click to explore",xcanvas/2,ycanvas/2+350)
    pop()
  }

}

// 500 should be the larger outer circle when you hover over!!!


// ------------------------------FUNCTIONS for INTERACTION---------------------------------


function mousePressed() {

  initialPage = 1;

  var boxheight = 45, boxwidth = 142, xover = .785, yover = .93;
  if (mouseX > xcanvas*xover && mouseX < xcanvas*xover+boxwidth && mouseY > ycanvas*yover && mouseY < (ycanvas*yover)+boxheight) {
    console.log("State is 2, least likely!")
    cs =2; 
  } 

  if (mouseX > xcanvas*xover-boxwidth-20 && mouseX < xcanvas*xover-boxwidth-20+boxwidth && mouseY > ycanvas*yover && mouseY < (ycanvas*yover)+boxheight){
    console.log("State is 1, median!")
    cs = 1;
  }
  else if(mouseX > xcanvas*xover-(boxwidth*2)-40 && mouseX < xcanvas*xover-(boxwidth*2)-40+boxwidth && mouseY > ycanvas*yover && mouseY < (ycanvas*yover)+boxheight){
    console.log("State is 0, most")
    cs = 0;
  }

  //change the MultiRacial Paring 
  var ebeg = xcanvas*xover+boxwidth+3.5-esize; 
  for (var i = 0; i <15; i++) {
    if( mouseY > ycanvas*eycanvas && mouseY < ycanvas*eycanvas+esize && mouseX > (xcanvas*xover+boxwidth+3.5-esize)-(shifted*i)-esize/2 && mouseX < (xcanvas*xover+boxwidth+3.5-esize)-(shifted*i)+esize/2){
    mr = i;
    console.log(mr)
  }
  }
}




/*
function pieChart(diameter, data) {
  noStroke();
  var lastAngle = 0;
  var leftx = xcanvas/2; rightx = leftx*3;
  var topy = ycanvas/1.5; bottomy = topy*2.2;
  var smallcircle = 300;
  for (var i = 0; i < data.length; i++) {
    fill(color(gray[i]));
    arc(leftx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(leftx/2, topy/2, smallcircle, smallcircle);
  }
  for (var i = 0; i < data.length; i++) {
    fill(color(gray[i]));
    arc(leftx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(leftx/2, bottomy/2, smallcircle, smallcircle);
  }
  for (var i = 0; i < data.length; i++) {
    fill(color(gray[i]));
    arc(rightx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(rightx/2, topy/2, smallcircle, smallcircle);
  }
  for (var i = 0; i < data.length; i++) {
    fill(color(gray[i]));
    arc(rightx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(rightx/2, bottomy/2, smallcircle, smallcircle);
  }


  push();
  var leftx = xcanvas/4; rightx = leftx*3;
  var topy = ycanvas/3; bottomy = topy*2.2;
  textStyle(BOLD); fill(255);
  textAlign(CENTER);
  var txtsize = 80; var smlltxtsz = 22;
  var yoffset = 15; var racoffset = 30; var boffset = racoffset+smlltxtsz+10; 
  // top left
  textSize(txtsize); text("2%", leftx,topy-yoffset);
  textSize(smlltxtsz); text(multiracialMatrix[0], leftx,topy+racoffset); text(multiracialNumber[0],leftx,topy+boffset); 
  // top right
  textSize(txtsize); text("2%", rightx,topy-yoffset);
  textSize(smlltxtsz); text(multiracialMatrix[0], rightx,topy+racoffset); text(multiracialNumber[0],rightx,topy+boffset); 
  // bottom right
  textSize(txtsize); text("2%", rightx,bottomy-yoffset);
  textSize(smlltxtsz); text(multiracialMatrix[0], rightx,bottomy+racoffset); text(multiracialNumber[0],rightx,bottomy+boffset); 
  // bottom left
  textSize(txtsize); text("2%", leftx,bottomy-yoffset);
  textSize(smlltxtsz); text(multiracialMatrix[0], leftx,bottomy+racoffset); text(multiracialNumber[0],leftx,bottomy+boffset); 
  pop();

  push();
  var leftx = xcanvas/4; rightx = leftx*3;
  var topy = ycanvas/3; bottomy = topy*2.2; var yoffset = 25;
  textSize(30), textAlign(CENTER); textStyle(BOLD); fill(color("#387BBF"));
  text("County 1"+" State", leftx, topy-(diameter/2)-yoffset);
  text("County 2"+" State", leftx, bottomy-(diameter/2)-yoffset);
  text("County 3"+" State", rightx, topy-(diameter/2)-yoffset);
  text("County 4"+" State", rightx, bottomy-(diameter/2)-yoffset);
  pop();
}
*/




