import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Route$9, c as formatUsd } from "./router-CPdh4L2m.mjs";
import { t as Button } from "./button-Cg_PeIRX.mjs";
import { n as Input, r as Label, t as FieldSelect } from "./input-opqfG9iy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/finance-Cf6yyo_r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ZIP_TO_STATE_MAP = [
	{
		state: "Alabama",
		stateCode: "AL",
		zipPrefixes: [
			"350",
			"351",
			"352",
			"354",
			"355",
			"356",
			"357",
			"358",
			"359",
			"360",
			"361",
			"362",
			"363",
			"364",
			"365",
			"366",
			"367",
			"368",
			"369"
		]
	},
	{
		state: "Alaska",
		stateCode: "AK",
		zipPrefixes: [
			"995",
			"996",
			"997",
			"998",
			"999"
		]
	},
	{
		state: "Arizona",
		stateCode: "AZ",
		zipPrefixes: [
			"850",
			"851",
			"852",
			"853",
			"855",
			"856",
			"857",
			"859",
			"860",
			"863",
			"864",
			"865"
		]
	},
	{
		state: "Arkansas",
		stateCode: "AR",
		zipPrefixes: [
			"716",
			"717",
			"718",
			"719",
			"720",
			"721",
			"722",
			"723",
			"724",
			"725",
			"726",
			"727",
			"728",
			"729"
		]
	},
	{
		state: "California",
		stateCode: "CA",
		zipPrefixes: [
			"900",
			"901",
			"902",
			"903",
			"904",
			"905",
			"906",
			"907",
			"908",
			"910",
			"911",
			"912",
			"913",
			"914",
			"915",
			"916",
			"917",
			"918",
			"919",
			"920",
			"921",
			"922",
			"923",
			"924",
			"925",
			"926",
			"927",
			"928",
			"930",
			"931",
			"932",
			"933",
			"934",
			"935",
			"936",
			"937",
			"938",
			"939",
			"940",
			"941",
			"942",
			"943",
			"944",
			"945",
			"946",
			"947",
			"948",
			"949",
			"950",
			"951",
			"952",
			"953",
			"954",
			"955",
			"956",
			"957",
			"958",
			"959",
			"960",
			"961"
		]
	},
	{
		state: "Colorado",
		stateCode: "CO",
		zipPrefixes: [
			"800",
			"801",
			"802",
			"803",
			"804",
			"805",
			"806",
			"807",
			"808",
			"809",
			"810",
			"811",
			"812",
			"813",
			"814",
			"815",
			"816"
		]
	},
	{
		state: "Connecticut",
		stateCode: "CT",
		zipPrefixes: [
			"060",
			"061",
			"062",
			"063",
			"064",
			"065",
			"066",
			"067",
			"068",
			"069"
		]
	},
	{
		state: "Delaware",
		stateCode: "DE",
		zipPrefixes: [
			"197",
			"198",
			"199"
		]
	},
	{
		state: "Florida",
		stateCode: "FL",
		zipPrefixes: [
			"320",
			"321",
			"322",
			"323",
			"324",
			"325",
			"326",
			"327",
			"328",
			"329",
			"330",
			"331",
			"332",
			"333",
			"334",
			"335",
			"336",
			"337",
			"338",
			"339",
			"340",
			"341",
			"342",
			"344",
			"346",
			"347",
			"349"
		]
	},
	{
		state: "Georgia",
		stateCode: "GA",
		zipPrefixes: [
			"300",
			"301",
			"302",
			"303",
			"304",
			"305",
			"306",
			"307",
			"308",
			"309",
			"310",
			"311",
			"312",
			"313",
			"314",
			"315",
			"316",
			"317",
			"318",
			"319"
		]
	},
	{
		state: "Hawaii",
		stateCode: "HI",
		zipPrefixes: ["967", "968"]
	},
	{
		state: "Idaho",
		stateCode: "ID",
		zipPrefixes: [
			"832",
			"833",
			"834",
			"835",
			"836",
			"837",
			"838"
		]
	},
	{
		state: "Illinois",
		stateCode: "IL",
		zipPrefixes: [
			"600",
			"601",
			"602",
			"603",
			"604",
			"605",
			"606",
			"607",
			"608",
			"609",
			"610",
			"611",
			"612",
			"613",
			"614",
			"615",
			"616",
			"617",
			"618",
			"619",
			"620",
			"622",
			"623",
			"624",
			"625",
			"626",
			"627",
			"628",
			"629"
		]
	},
	{
		state: "Indiana",
		stateCode: "IN",
		zipPrefixes: [
			"460",
			"461",
			"462",
			"463",
			"464",
			"465",
			"466",
			"467",
			"468",
			"469",
			"470",
			"471",
			"472",
			"473",
			"474",
			"475",
			"476",
			"477",
			"478",
			"479"
		]
	},
	{
		state: "Iowa",
		stateCode: "IA",
		zipPrefixes: [
			"500",
			"501",
			"502",
			"503",
			"504",
			"505",
			"506",
			"507",
			"508",
			"510",
			"511",
			"512",
			"513",
			"514",
			"515",
			"516",
			"520",
			"521",
			"522",
			"523",
			"524",
			"525",
			"526",
			"527",
			"528"
		]
	},
	{
		state: "Kansas",
		stateCode: "KS",
		zipPrefixes: [
			"660",
			"661",
			"662",
			"664",
			"665",
			"666",
			"667",
			"668",
			"669",
			"670",
			"671",
			"672",
			"673",
			"674",
			"675",
			"676",
			"677",
			"678",
			"679"
		]
	},
	{
		state: "Kentucky",
		stateCode: "KY",
		zipPrefixes: [
			"400",
			"401",
			"402",
			"403",
			"404",
			"405",
			"406",
			"407",
			"408",
			"409",
			"410",
			"411",
			"412",
			"413",
			"414",
			"415",
			"416",
			"417",
			"418",
			"420",
			"421",
			"422",
			"423",
			"424",
			"425",
			"426",
			"427"
		]
	},
	{
		state: "Louisiana",
		stateCode: "LA",
		zipPrefixes: [
			"700",
			"701",
			"703",
			"704",
			"705",
			"706",
			"707",
			"708",
			"710",
			"711",
			"712",
			"713",
			"714"
		]
	},
	{
		state: "Maine",
		stateCode: "ME",
		zipPrefixes: [
			"039",
			"040",
			"041",
			"042",
			"043",
			"044",
			"045",
			"046",
			"047",
			"048",
			"049"
		]
	},
	{
		state: "Maryland",
		stateCode: "MD",
		zipPrefixes: [
			"206",
			"207",
			"208",
			"209",
			"210",
			"211",
			"212",
			"214",
			"215",
			"216",
			"217",
			"218",
			"219"
		]
	},
	{
		state: "Massachusetts",
		stateCode: "MA",
		zipPrefixes: [
			"010",
			"011",
			"012",
			"013",
			"014",
			"015",
			"016",
			"017",
			"018",
			"019",
			"020",
			"021",
			"022",
			"023",
			"024",
			"025",
			"026",
			"027"
		]
	},
	{
		state: "Michigan",
		stateCode: "MI",
		zipPrefixes: [
			"480",
			"481",
			"482",
			"483",
			"484",
			"485",
			"486",
			"487",
			"488",
			"489",
			"490",
			"491",
			"492",
			"493",
			"494",
			"495",
			"496",
			"497",
			"498",
			"499"
		]
	},
	{
		state: "Minnesota",
		stateCode: "MN",
		zipPrefixes: [
			"550",
			"551",
			"553",
			"554",
			"555",
			"556",
			"557",
			"558",
			"559",
			"560",
			"561",
			"562",
			"563",
			"564",
			"565",
			"566",
			"567"
		]
	},
	{
		state: "Mississippi",
		stateCode: "MS",
		zipPrefixes: [
			"386",
			"387",
			"388",
			"389",
			"390",
			"391",
			"392",
			"393",
			"394",
			"395",
			"396",
			"397"
		]
	},
	{
		state: "Missouri",
		stateCode: "MO",
		zipPrefixes: [
			"630",
			"631",
			"633",
			"634",
			"635",
			"636",
			"637",
			"638",
			"639",
			"640",
			"641",
			"644",
			"645",
			"646",
			"647",
			"648",
			"649",
			"650",
			"651",
			"652",
			"653",
			"654",
			"655",
			"656",
			"657",
			"658"
		]
	},
	{
		state: "Montana",
		stateCode: "MT",
		zipPrefixes: [
			"590",
			"591",
			"592",
			"593",
			"594",
			"595",
			"596",
			"597",
			"598",
			"599"
		]
	},
	{
		state: "Nebraska",
		stateCode: "NE",
		zipPrefixes: [
			"680",
			"681",
			"683",
			"684",
			"685",
			"686",
			"687",
			"688",
			"689",
			"690",
			"691",
			"692",
			"693"
		]
	},
	{
		state: "Nevada",
		stateCode: "NV",
		zipPrefixes: [
			"889",
			"890",
			"891",
			"893",
			"894",
			"895",
			"897",
			"898"
		]
	},
	{
		state: "New Hampshire",
		stateCode: "NH",
		zipPrefixes: [
			"030",
			"031",
			"032",
			"033",
			"034",
			"035",
			"036",
			"037",
			"038"
		]
	},
	{
		state: "New Jersey",
		stateCode: "NJ",
		zipPrefixes: [
			"070",
			"071",
			"072",
			"073",
			"074",
			"075",
			"076",
			"077",
			"078",
			"079",
			"080",
			"081",
			"082",
			"083",
			"084",
			"085",
			"086",
			"087",
			"088",
			"089"
		]
	},
	{
		state: "New Mexico",
		stateCode: "NM",
		zipPrefixes: [
			"870",
			"871",
			"872",
			"873",
			"874",
			"875",
			"877",
			"878",
			"879",
			"880",
			"881",
			"882",
			"883",
			"884"
		]
	},
	{
		state: "New York",
		stateCode: "NY",
		zipPrefixes: [
			"100",
			"101",
			"102",
			"103",
			"104",
			"105",
			"106",
			"107",
			"108",
			"109",
			"110",
			"111",
			"112",
			"113",
			"114",
			"115",
			"116",
			"117",
			"118",
			"119",
			"120",
			"121",
			"122",
			"123",
			"124",
			"125",
			"126",
			"127",
			"128",
			"129",
			"130",
			"131",
			"132",
			"133",
			"134",
			"135",
			"136",
			"137",
			"138",
			"139",
			"140",
			"141",
			"142",
			"143",
			"144",
			"145",
			"146",
			"147",
			"148",
			"149"
		]
	},
	{
		state: "North Carolina",
		stateCode: "NC",
		zipPrefixes: [
			"270",
			"271",
			"272",
			"273",
			"274",
			"275",
			"276",
			"277",
			"278",
			"279",
			"280",
			"281",
			"282",
			"283",
			"284",
			"285",
			"286",
			"287",
			"288",
			"289"
		]
	},
	{
		state: "North Dakota",
		stateCode: "ND",
		zipPrefixes: [
			"580",
			"581",
			"582",
			"583",
			"584",
			"585",
			"586",
			"587",
			"588"
		]
	},
	{
		state: "Ohio",
		stateCode: "OH",
		zipPrefixes: [
			"430",
			"431",
			"432",
			"433",
			"434",
			"435",
			"436",
			"437",
			"438",
			"439",
			"440",
			"441",
			"442",
			"443",
			"444",
			"445",
			"446",
			"447",
			"448",
			"449",
			"450",
			"451",
			"452",
			"453",
			"454",
			"455",
			"456",
			"457",
			"458"
		]
	},
	{
		state: "Oklahoma",
		stateCode: "OK",
		zipPrefixes: [
			"730",
			"731",
			"734",
			"735",
			"736",
			"737",
			"738",
			"739",
			"740",
			"741",
			"743",
			"744",
			"745",
			"746",
			"747",
			"748",
			"749"
		]
	},
	{
		state: "Oregon",
		stateCode: "OR",
		zipPrefixes: [
			"970",
			"971",
			"972",
			"973",
			"974",
			"975",
			"976",
			"977",
			"978",
			"979"
		]
	},
	{
		state: "Pennsylvania",
		stateCode: "PA",
		zipPrefixes: [
			"150",
			"151",
			"152",
			"153",
			"154",
			"155",
			"156",
			"157",
			"158",
			"159",
			"160",
			"161",
			"162",
			"163",
			"164",
			"165",
			"166",
			"167",
			"168",
			"169",
			"170",
			"171",
			"172",
			"173",
			"174",
			"175",
			"176",
			"177",
			"178",
			"179",
			"180",
			"181",
			"182",
			"183",
			"184",
			"185",
			"186",
			"187",
			"188",
			"189",
			"190",
			"191",
			"192",
			"193",
			"194",
			"195",
			"196"
		]
	},
	{
		state: "Rhode Island",
		stateCode: "RI",
		zipPrefixes: ["028", "029"]
	},
	{
		state: "South Carolina",
		stateCode: "SC",
		zipPrefixes: [
			"290",
			"291",
			"292",
			"293",
			"294",
			"295",
			"296",
			"297",
			"298",
			"299"
		]
	},
	{
		state: "South Dakota",
		stateCode: "SD",
		zipPrefixes: [
			"570",
			"571",
			"572",
			"573",
			"574",
			"575",
			"576",
			"577"
		]
	},
	{
		state: "Tennessee",
		stateCode: "TN",
		zipPrefixes: [
			"370",
			"371",
			"372",
			"373",
			"374",
			"375",
			"376",
			"377",
			"378",
			"379",
			"380",
			"381",
			"382",
			"383",
			"384",
			"385"
		]
	},
	{
		state: "Texas",
		stateCode: "TX",
		zipPrefixes: [
			"750",
			"751",
			"752",
			"753",
			"754",
			"755",
			"756",
			"757",
			"758",
			"759",
			"760",
			"761",
			"762",
			"763",
			"764",
			"765",
			"766",
			"767",
			"768",
			"769",
			"770",
			"772",
			"773",
			"774",
			"775",
			"776",
			"777",
			"778",
			"779",
			"780",
			"781",
			"782",
			"783",
			"784",
			"785",
			"786",
			"787",
			"788",
			"789",
			"790",
			"791",
			"792",
			"793",
			"794",
			"795",
			"796",
			"797",
			"798",
			"799",
			"885"
		]
	},
	{
		state: "Utah",
		stateCode: "UT",
		zipPrefixes: [
			"840",
			"841",
			"842",
			"843",
			"844",
			"845",
			"846",
			"847"
		]
	},
	{
		state: "Vermont",
		stateCode: "VT",
		zipPrefixes: [
			"050",
			"051",
			"052",
			"053",
			"054",
			"056",
			"057",
			"058",
			"059"
		]
	},
	{
		state: "Virginia",
		stateCode: "VA",
		zipPrefixes: [
			"220",
			"221",
			"222",
			"223",
			"224",
			"225",
			"226",
			"227",
			"228",
			"229",
			"230",
			"231",
			"232",
			"233",
			"234",
			"235",
			"236",
			"237",
			"238",
			"239",
			"240",
			"241",
			"242",
			"243",
			"244",
			"245",
			"246"
		]
	},
	{
		state: "Washington",
		stateCode: "WA",
		zipPrefixes: [
			"980",
			"981",
			"982",
			"983",
			"984",
			"985",
			"986",
			"988",
			"989",
			"990",
			"991",
			"992",
			"993",
			"994"
		]
	},
	{
		state: "West Virginia",
		stateCode: "WV",
		zipPrefixes: [
			"247",
			"248",
			"249",
			"250",
			"251",
			"252",
			"253",
			"254",
			"255",
			"256",
			"257",
			"258",
			"259",
			"260",
			"261",
			"262",
			"263",
			"264",
			"265",
			"266",
			"267",
			"268"
		]
	},
	{
		state: "Wisconsin",
		stateCode: "WI",
		zipPrefixes: [
			"530",
			"531",
			"532",
			"534",
			"535",
			"537",
			"538",
			"539",
			"540",
			"541",
			"542",
			"543",
			"544",
			"545",
			"546",
			"547",
			"548",
			"549"
		]
	},
	{
		state: "Wyoming",
		stateCode: "WY",
		zipPrefixes: [
			"820",
			"821",
			"822",
			"823",
			"824",
			"825",
			"826",
			"827",
			"828",
			"829",
			"830",
			"831"
		]
	},
	{
		state: "District of Columbia",
		stateCode: "DC",
		zipPrefixes: [
			"200",
			"201",
			"202",
			"203",
			"204",
			"205"
		]
	}
];
var STATE_TAX_RATES = [
	{
		code: "AL",
		name: "Alabama",
		rate: 7,
		notes: "Varies by county, 2-4% state + 3-4% local",
		taxOnDifference: true
	},
	{
		code: "AK",
		name: "Alaska",
		rate: 0,
		notes: "No state sales tax, some local taxes may apply",
		taxOnDifference: true
	},
	{
		code: "AZ",
		name: "Arizona",
		rate: 8,
		notes: "5.6% state + county/city taxes",
		taxOnDifference: true
	},
	{
		code: "AR",
		name: "Arkansas",
		rate: 8.5,
		notes: "6.5% state + local taxes",
		taxOnDifference: true
	},
	{
		code: "CA",
		name: "California",
		rate: 8.5,
		notes: "6% state + 1.25-3% local, varies by county",
		taxOnDifference: false
	},
	{
		code: "CO",
		name: "Colorado",
		rate: 7.5,
		notes: "2.9% state + local taxes, varies by county",
		taxOnDifference: true
	},
	{
		code: "CT",
		name: "Connecticut",
		rate: 6.35,
		notes: "Flat 6.35%, luxury vehicles >$50k at 7.75%",
		taxOnDifference: true,
		luxuryTax: {
			threshold: 5e4,
			rate: 7.75
		}
	},
	{
		code: "DE",
		name: "Delaware",
		rate: 0,
		notes: "No sales tax",
		taxOnDifference: true
	},
	{
		code: "FL",
		name: "Florida",
		rate: 7,
		notes: "6% state + up to 1% local",
		taxOnDifference: true
	},
	{
		code: "GA",
		name: "Georgia",
		rate: 6.6,
		notes: "TAVT: 6.6% of fair market value (one-time)",
		taxOnDifference: true
	},
	{
		code: "HI",
		name: "Hawaii",
		rate: 4.5,
		notes: "4% state + 0.5% county",
		taxOnDifference: false
	},
	{
		code: "ID",
		name: "Idaho",
		rate: 6,
		notes: "6% state, no local sales tax on vehicles",
		taxOnDifference: true
	},
	{
		code: "IL",
		name: "Illinois",
		rate: 7.5,
		notes: "6.25% state + local taxes",
		taxOnDifference: false
	},
	{
		code: "IN",
		name: "Indiana",
		rate: 7,
		notes: "Flat 7% statewide",
		taxOnDifference: true
	},
	{
		code: "IA",
		name: "Iowa",
		rate: 7,
		notes: "6% state + up to 1% local",
		taxOnDifference: true
	},
	{
		code: "KS",
		name: "Kansas",
		rate: 8.5,
		notes: "6.5% state + county/city taxes",
		taxOnDifference: true
	},
	{
		code: "KY",
		name: "Kentucky",
		rate: 6,
		notes: "Flat 6% statewide",
		taxOnDifference: false
	},
	{
		code: "LA",
		name: "Louisiana",
		rate: 9,
		notes: "4.45% state + parish/city taxes",
		taxOnDifference: true
	},
	{
		code: "ME",
		name: "Maine",
		rate: 5.5,
		notes: "Flat 5.5% statewide",
		taxOnDifference: true
	},
	{
		code: "MD",
		name: "Maryland",
		rate: 6,
		notes: "Flat 6% (electric vehicles exempt)",
		taxOnDifference: true
	},
	{
		code: "MA",
		name: "Massachusetts",
		rate: 6.25,
		notes: "Flat 6.25% statewide",
		taxOnDifference: true
	},
	{
		code: "MI",
		name: "Michigan",
		rate: 6,
		notes: "Flat 6% statewide",
		taxOnDifference: false
	},
	{
		code: "MN",
		name: "Minnesota",
		rate: 7.5,
		notes: "6.875% state + local taxes",
		taxOnDifference: true
	},
	{
		code: "MS",
		name: "Mississippi",
		rate: 7.5,
		notes: "7% state + up to 0.5% local",
		taxOnDifference: true
	},
	{
		code: "MO",
		name: "Missouri",
		rate: 7,
		notes: "4.225% state + local taxes",
		taxOnDifference: true
	},
	{
		code: "MT",
		name: "Montana",
		rate: 0,
		notes: "No sales tax",
		taxOnDifference: true
	},
	{
		code: "NE",
		name: "Nebraska",
		rate: 6.5,
		notes: "5.5% state + up to 1.5% local",
		taxOnDifference: true
	},
	{
		code: "NV",
		name: "Nevada",
		rate: 8.25,
		notes: "Varies by county, combined rate",
		taxOnDifference: true
	},
	{
		code: "NH",
		name: "New Hampshire",
		rate: 0,
		notes: "No sales tax",
		taxOnDifference: true
	},
	{
		code: "NJ",
		name: "New Jersey",
		rate: 6.625,
		notes: "Flat 6.625% statewide",
		taxOnDifference: true
	},
	{
		code: "NM",
		name: "New Mexico",
		rate: 7.5,
		notes: "5.125% state + local taxes",
		taxOnDifference: true
	},
	{
		code: "NY",
		name: "New York",
		rate: 8,
		notes: "4% state + county/city taxes",
		taxOnDifference: true
	},
	{
		code: "NC",
		name: "North Carolina",
		rate: 3,
		notes: "Highway Use Tax: 3%",
		taxOnDifference: false
	},
	{
		code: "ND",
		name: "North Dakota",
		rate: 6.5,
		notes: "5% state + local taxes",
		taxOnDifference: true
	},
	{
		code: "OH",
		name: "Ohio",
		rate: 7,
		notes: "5.75% state + local taxes",
		taxOnDifference: true
	},
	{
		code: "OK",
		name: "Oklahoma",
		rate: 8.5,
		notes: "4.5% state + local taxes",
		taxOnDifference: true
	},
	{
		code: "OR",
		name: "Oregon",
		rate: 0,
		notes: "No sales tax",
		taxOnDifference: true
	},
	{
		code: "PA",
		name: "Pennsylvania",
		rate: 6,
		notes: "Flat 6% statewide",
		taxOnDifference: true
	},
	{
		code: "RI",
		name: "Rhode Island",
		rate: 7,
		notes: "Flat 7% statewide",
		taxOnDifference: true
	},
	{
		code: "SC",
		name: "South Carolina",
		rate: 6,
		notes: "$500 maximum vehicle sales tax cap",
		taxOnDifference: true
	},
	{
		code: "SD",
		name: "South Dakota",
		rate: 5,
		notes: "4.5% state + local taxes",
		taxOnDifference: true
	},
	{
		code: "TN",
		name: "Tennessee",
		rate: 9,
		notes: "7% state + up to 2.75% local",
		taxOnDifference: true
	},
	{
		code: "TX",
		name: "Texas",
		rate: 6.25,
		notes: "6.25% state, motor vehicles capped",
		taxOnDifference: false
	},
	{
		code: "UT",
		name: "Utah",
		rate: 7,
		notes: "4.7% state + local taxes",
		taxOnDifference: true
	},
	{
		code: "VT",
		name: "Vermont",
		rate: 6,
		notes: "Flat 6% (hybrid/EV credit available)",
		taxOnDifference: true
	},
	{
		code: "VA",
		name: "Virginia",
		rate: 5.5,
		notes: "4.3% state + up to 1.7% local",
		taxOnDifference: false
	},
	{
		code: "WA",
		name: "Washington",
		rate: 9,
		notes: "6.5% state + local taxes",
		taxOnDifference: true
	},
	{
		code: "DC",
		name: "Washington DC",
		rate: 6,
		notes: "Flat 6%",
		taxOnDifference: true
	},
	{
		code: "WV",
		name: "West Virginia",
		rate: 6.5,
		notes: "6% state + local taxes",
		taxOnDifference: true
	},
	{
		code: "WI",
		name: "Wisconsin",
		rate: 5.5,
		notes: "5% state + up to 0.6% local",
		taxOnDifference: true
	},
	{
		code: "WY",
		name: "Wyoming",
		rate: 5,
		notes: "4% state + up to 1% local",
		taxOnDifference: true
	}
];
var getStateByCode = (code) => {
	return STATE_TAX_RATES.find((state) => state.code === code);
};
var TRADE_IN_TAX_CREDIT_STATES = /* @__PURE__ */ new Set([
	"AK",
	"DE",
	"MT",
	"NH",
	"OR",
	"AZ",
	"CO",
	"ID",
	"NM",
	"NV",
	"UT",
	"WA",
	"WY",
	"IA",
	"IL",
	"IN",
	"KS",
	"MN",
	"MO",
	"ND",
	"NE",
	"OH",
	"SD",
	"WI",
	"AL",
	"AR",
	"FL",
	"GA",
	"LA",
	"MS",
	"NC",
	"OK",
	"SC",
	"TN",
	"TX",
	"WV",
	"CT",
	"MA",
	"ME",
	"NJ",
	"NY",
	"PA",
	"RI",
	"VT"
]);
var ZIP_RANGE_FALLBACK = [
	{
		min: 1,
		max: 27,
		state: "Massachusetts",
		code: "MA",
		tax: 6.25,
		regBase: 120
	},
	{
		min: 28,
		max: 29,
		state: "Rhode Island",
		code: "RI",
		tax: 7,
		regBase: 120
	},
	{
		min: 30,
		max: 38,
		state: "New Hampshire",
		code: "NH",
		tax: 0,
		regBase: 60
	},
	{
		min: 39,
		max: 49,
		state: "Maine",
		code: "ME",
		tax: 5.5,
		regBase: 80
	},
	{
		min: 50,
		max: 59,
		state: "Vermont",
		code: "VT",
		tax: 6,
		regBase: 85
	},
	{
		min: 60,
		max: 69,
		state: "Connecticut",
		code: "CT",
		tax: 6.35,
		regBase: 140
	},
	{
		min: 70,
		max: 89,
		state: "New Jersey",
		code: "NJ",
		tax: 6.625,
		regBase: 145
	},
	{
		min: 100,
		max: 149,
		state: "New York",
		code: "NY",
		tax: 8,
		regBase: 175
	},
	{
		min: 150,
		max: 196,
		state: "Pennsylvania",
		code: "PA",
		tax: 6,
		regBase: 95
	},
	{
		min: 197,
		max: 199,
		state: "Delaware",
		code: "DE",
		tax: 0,
		regBase: 50
	},
	{
		min: 200,
		max: 205,
		state: "District of Columbia",
		code: "DC",
		tax: 6,
		regBase: 180
	},
	{
		min: 206,
		max: 219,
		state: "Maryland",
		code: "MD",
		tax: 6,
		regBase: 130
	},
	{
		min: 220,
		max: 246,
		state: "Virginia",
		code: "VA",
		tax: 6,
		regBase: 95
	},
	{
		min: 247,
		max: 268,
		state: "West Virginia",
		code: "WV",
		tax: 6,
		regBase: 70
	},
	{
		min: 270,
		max: 289,
		state: "North Carolina",
		code: "NC",
		tax: 3,
		regBase: 35
	},
	{
		min: 290,
		max: 299,
		state: "South Carolina",
		code: "SC",
		tax: 5,
		regBase: 60
	},
	{
		min: 300,
		max: 319,
		state: "Georgia",
		code: "GA",
		tax: 7,
		regBase: 90
	},
	{
		min: 320,
		max: 349,
		state: "Florida",
		code: "FL",
		tax: 6,
		regBase: 250
	},
	{
		min: 350,
		max: 369,
		state: "Alabama",
		code: "AL",
		tax: 4,
		regBase: 60
	},
	{
		min: 370,
		max: 385,
		state: "Tennessee",
		code: "TN",
		tax: 9.75,
		regBase: 80
	},
	{
		min: 386,
		max: 397,
		state: "Mississippi",
		code: "MS",
		tax: 7,
		regBase: 60
	},
	{
		min: 398,
		max: 399,
		state: "Georgia",
		code: "GA",
		tax: 7,
		regBase: 90
	},
	{
		min: 400,
		max: 427,
		state: "Kentucky",
		code: "KY",
		tax: 6,
		regBase: 60
	},
	{
		min: 430,
		max: 458,
		state: "Ohio",
		code: "OH",
		tax: 7.5,
		regBase: 90
	},
	{
		min: 460,
		max: 479,
		state: "Indiana",
		code: "IN",
		tax: 7,
		regBase: 65
	},
	{
		min: 480,
		max: 499,
		state: "Michigan",
		code: "MI",
		tax: 6,
		regBase: 100
	},
	{
		min: 500,
		max: 528,
		state: "Iowa",
		code: "IA",
		tax: 6,
		regBase: 55
	},
	{
		min: 530,
		max: 549,
		state: "Wisconsin",
		code: "WI",
		tax: 5,
		regBase: 110
	},
	{
		min: 550,
		max: 567,
		state: "Minnesota",
		code: "MN",
		tax: 6.875,
		regBase: 85
	},
	{
		min: 570,
		max: 577,
		state: "South Dakota",
		code: "SD",
		tax: 4.5,
		regBase: 45
	},
	{
		min: 580,
		max: 588,
		state: "North Dakota",
		code: "ND",
		tax: 5,
		regBase: 40
	},
	{
		min: 590,
		max: 599,
		state: "Montana",
		code: "MT",
		tax: 0,
		regBase: 35
	},
	{
		min: 600,
		max: 629,
		state: "Illinois",
		code: "IL",
		tax: 6.25,
		regBase: 160
	},
	{
		min: 630,
		max: 658,
		state: "Missouri",
		code: "MO",
		tax: 4.225,
		regBase: 50
	},
	{
		min: 660,
		max: 679,
		state: "Kansas",
		code: "KS",
		tax: 6.5,
		regBase: 50
	},
	{
		min: 680,
		max: 693,
		state: "Nebraska",
		code: "NE",
		tax: 7,
		regBase: 55
	},
	{
		min: 700,
		max: 714,
		state: "Louisiana",
		code: "LA",
		tax: 9.45,
		regBase: 100
	},
	{
		min: 716,
		max: 729,
		state: "Arkansas",
		code: "AR",
		tax: 6.5,
		regBase: 75
	},
	{
		min: 730,
		max: 749,
		state: "Oklahoma",
		code: "OK",
		tax: 4.5,
		regBase: 55
	},
	{
		min: 750,
		max: 799,
		state: "Texas",
		code: "TX",
		tax: 8.25,
		regBase: 150
	},
	{
		min: 800,
		max: 816,
		state: "Colorado",
		code: "CO",
		tax: 2.9,
		regBase: 45
	},
	{
		min: 820,
		max: 831,
		state: "Wyoming",
		code: "WY",
		tax: 4,
		regBase: 50
	},
	{
		min: 832,
		max: 838,
		state: "Idaho",
		code: "ID",
		tax: 6,
		regBase: 45
	},
	{
		min: 840,
		max: 847,
		state: "Utah",
		code: "UT",
		tax: 6.85,
		regBase: 70
	},
	{
		min: 850,
		max: 865,
		state: "Arizona",
		code: "AZ",
		tax: 5.6,
		regBase: 120
	},
	{
		min: 870,
		max: 884,
		state: "New Mexico",
		code: "NM",
		tax: 4.875,
		regBase: 70
	},
	{
		min: 889,
		max: 898,
		state: "Nevada",
		code: "NV",
		tax: 8.375,
		regBase: 180
	},
	{
		min: 900,
		max: 961,
		state: "California",
		code: "CA",
		tax: 7.25,
		regBase: 250
	},
	{
		min: 967,
		max: 968,
		state: "Hawaii",
		code: "HI",
		tax: 4,
		regBase: 45
	},
	{
		min: 970,
		max: 979,
		state: "Oregon",
		code: "OR",
		tax: 0,
		regBase: 75
	},
	{
		min: 980,
		max: 994,
		state: "Washington",
		code: "WA",
		tax: 10.25,
		regBase: 185
	},
	{
		min: 995,
		max: 999,
		state: "Alaska",
		code: "AK",
		tax: 0,
		regBase: 100
	}
];
var LENDERS = [
	{
		name: "LightStream by Truist",
		aprLow: 7.49,
		aprHigh: 10.49,
		minMonths: 24,
		maxMonths: 180,
		minLoan: 5e3,
		perks: [
			"No fees",
			"Rate Beat Program",
			"Same-day funding"
		],
		badge: "Best Match",
		url: "https://www.lightstream.com/rv-loans"
	},
	{
		name: "Southeast Financial",
		aprLow: 7.99,
		aprHigh: 11.99,
		minMonths: 12,
		maxMonths: 180,
		minLoan: 1e4,
		perks: [
			"RV specialist",
			"180-month terms",
			"Fast approval"
		],
		badge: null,
		url: "https://www.southeastfinancial.org/rv-loans"
	},
	{
		name: "Bank of America",
		aprLow: 8.24,
		aprHigh: 12.24,
		minMonths: 12,
		maxMonths: 72,
		minLoan: 1e4,
		perks: [
			"Preferred rewards discount",
			"Direct deposit bonus",
			"No origination fee"
		],
		badge: null,
		url: "https://www.bankofamerica.com/auto-loans/rv-boat-loans/"
	},
	{
		name: "Alliance Credit Union",
		aprLow: 7.74,
		aprHigh: 13.49,
		minMonths: 12,
		maxMonths: 180,
		minLoan: 5e3,
		perks: [
			"RV specialist lender",
			"Member-owned credit union rates",
			"Pre-approval in minutes"
		],
		badge: null,
		url: "https://www.alliancecu.com/loans/recreational-vehicles"
	}
];
var CREDIT_TIERS = [
	{
		id: "580",
		label: "580–619",
		desc: "Fair",
		aprOffset: 3.5
	},
	{
		id: "620",
		label: "620–679",
		desc: "Good",
		aprOffset: 2
	},
	{
		id: "680",
		label: "680–719",
		desc: "Very Good",
		aprOffset: .75
	},
	{
		id: "720",
		label: "720+",
		desc: "Excellent",
		aprOffset: 0
	}
];
function lookupZip(zip) {
	const digits = zip.replace(/\D/g, "");
	if (digits.length < 3) return null;
	const prefix = digits.slice(0, 3).padStart(3, "0");
	const hit = ZIP_TO_STATE_MAP.find((s) => s.zipPrefixes.includes(prefix));
	if (hit) {
		const tax = getStateByCode(hit.stateCode);
		return {
			state: hit.state,
			code: hit.stateCode,
			tax: tax?.rate ?? 0,
			notes: tax?.notes,
			taxOnDifference: tax?.taxOnDifference ?? true,
			luxuryTax: tax?.luxuryTax
		};
	}
	const num = parseInt(prefix, 10);
	if (Number.isNaN(num)) return null;
	for (const r of ZIP_RANGE_FALLBACK) if (num >= r.min && num <= r.max) {
		const tax = getStateByCode(r.code);
		return {
			state: r.state,
			code: r.code,
			tax: tax?.rate ?? r.tax,
			notes: tax?.notes,
			taxOnDifference: tax?.taxOnDifference ?? TRADE_IN_TAX_CREDIT_STATES.has(r.code),
			luxuryTax: tax?.luxuryTax
		};
	}
	return null;
}
function calcMonthlyPayment(principal, annualRate, months) {
	if (principal <= 0 || months <= 0) return 0;
	if (annualRate === 0) return principal / months;
	const r = annualRate / 100 / 12;
	return principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
}
/**
* Calculate RV registration fees by state
* @param stateCode - Two-letter state code
* @param vehicleValue - Purchase price/value of RV
* @param vehicleWeight - Weight in pounds (optional, default 15000)
* @param vehicleAge - Age in years (optional, default 0 = new)
*/
function calculateRVRegistrationFee(stateCode, vehicleValue, vehicleWeight = 15e3, vehicleAge = 0) {
	switch (stateCode.toUpperCase()) {
		case "AL": return calculateAlabamaFees(vehicleWeight);
		case "AK": return {
			registrationFee: 100,
			titleFee: 15,
			plateFee: 5,
			docFee: 0,
			totalFees: 120,
			breakdown: [
				"Registration: $100",
				"Title Fee: $15",
				"Plate Fee: $5"
			]
		};
		case "AZ": return calculateArizonaFees(vehicleValue, vehicleAge);
		case "AR": return calculateArkansasFees(vehicleWeight);
		case "CA": return calculateCaliforniaFees(vehicleValue);
		case "CO": return calculateColoradoFees(vehicleValue, vehicleAge);
		case "CT": return {
			registrationFee: 112.5,
			titleFee: 25,
			plateFee: 5,
			docFee: 40,
			totalFees: 182.5,
			breakdown: [
				"Registration: $112.50",
				"Title: $25",
				"Plate: $5",
				"Environmental Fees: $40"
			]
		};
		case "DE": return calculateDelawareFees(vehicleWeight);
		case "FL": return calculateFloridaFees(vehicleWeight);
		case "GA": return calculateGeorgiaFees(vehicleValue);
		case "ID": return calculateIdahoFees(vehicleValue);
		case "IL": return calculateIllinoisFees(vehicleWeight);
		case "IN": return {
			registrationFee: 29.35,
			titleFee: 15,
			plateFee: 0,
			docFee: 0,
			totalFees: 44.35,
			breakdown: ["Registration: $29.35", "Title: $15"],
			notes: "Plus county excise tax (varies)"
		};
		case "IA": return calculateIowaFees(vehicleValue);
		case "KS": return {
			registrationFee: 35,
			titleFee: 10,
			plateFee: 0,
			docFee: 0,
			totalFees: 45,
			breakdown: ["Registration: $35 (estimate)", "Title: $10"],
			notes: "Actual fee varies by county"
		};
		case "KY": return {
			registrationFee: 21,
			titleFee: 9,
			plateFee: 0,
			docFee: 0,
			totalFees: 30,
			breakdown: ["Registration: $21 (estimate)", "Title: $9"],
			notes: "Actual fee varies by county"
		};
		case "LA": return {
			registrationFee: 50,
			titleFee: 68.5,
			plateFee: 0,
			docFee: 8,
			totalFees: 126.5,
			breakdown: [
				"Registration: $50",
				"Title: $68.50",
				"Handling: $8"
			]
		};
		case "ME": return {
			registrationFee: vehicleWeight <= 2e3 ? 21 : 40,
			titleFee: 33,
			plateFee: 0,
			docFee: 0,
			totalFees: vehicleWeight <= 2e3 ? 54 : 73,
			breakdown: [`Registration: $${vehicleWeight <= 2e3 ? "21" : "40"}`, "Title: $33"]
		};
		case "MD": return calculateMarylandFees(vehicleWeight);
		case "MA": return {
			registrationFee: 50,
			titleFee: 75,
			plateFee: 0,
			docFee: 0,
			totalFees: 125,
			breakdown: ["Registration: $50", "Title: $75"]
		};
		case "MI": return calculateMichiganFees(vehicleValue);
		case "MN": return calculateMinnesotaFees(vehicleValue, vehicleAge);
		case "MS": return {
			registrationFee: 12.75,
			titleFee: 0,
			plateFee: 0,
			docFee: 0,
			totalFees: 12.75,
			breakdown: ["Registration: $12.75"],
			notes: "Plus ad valorem tax (varies by county)"
		};
		case "MO": return {
			registrationFee: 32.25,
			titleFee: 11,
			plateFee: 0,
			docFee: 6,
			totalFees: 49.25,
			breakdown: [
				"Registration: $32.25",
				"Title: $11",
				"Processing: $6/year"
			]
		};
		case "MT": return calculateMontanaFees(vehicleAge);
		case "NE": return {
			registrationFee: 23.8,
			titleFee: 10,
			plateFee: 0,
			docFee: 0,
			totalFees: 33.8,
			breakdown: ["Registration: $23.80", "Title: $10"],
			notes: "Plus motor vehicle tax (varies)"
		};
		case "NV": return {
			registrationFee: 33,
			titleFee: 28.25,
			plateFee: 0,
			docFee: 0,
			totalFees: 61.25,
			breakdown: ["Registration: $33", "Title: $28.25"],
			notes: "Plus governmental services tax"
		};
		case "NH": return {
			registrationFee: 40,
			titleFee: 25,
			plateFee: 0,
			docFee: 0,
			totalFees: 65,
			breakdown: ["Registration: $40 (estimate)", "Title: $25"],
			notes: "Actual fee varies by weight and municipality"
		};
		case "NJ": return calculateNewJerseyFees(vehicleWeight, vehicleAge);
		case "NM": return {
			registrationFee: 62,
			titleFee: 7,
			plateFee: 0,
			docFee: 0,
			totalFees: 69,
			breakdown: ["Registration: $62 (1 year)", "Title: $7"]
		};
		case "NY": return calculateNewYorkFees(vehicleWeight);
		case "NC": return {
			registrationFee: 38.75,
			titleFee: 52,
			plateFee: 0,
			docFee: 0,
			totalFees: 90.75,
			breakdown: ["Registration: $38.75", "Title: $52"],
			notes: "Plus Highway Use Tax (3% of value)"
		};
		case "ND": return calculateNorthDakotaFees(vehicleWeight, vehicleAge);
		case "OH": return {
			registrationFee: 46,
			titleFee: 15,
			plateFee: 0,
			docFee: 0,
			totalFees: 61,
			breakdown: ["Registration: $46", "Title: $15"]
		};
		case "OK": return {
			registrationFee: 96,
			titleFee: 11,
			plateFee: 0,
			docFee: 0,
			totalFees: 107,
			breakdown: ["Registration: $96", "Title: $11"],
			notes: "Plus excise tax if applicable"
		};
		case "OR": return {
			registrationFee: 122,
			titleFee: 98,
			plateFee: 0,
			docFee: 0,
			totalFees: 220,
			breakdown: ["Registration: $122 (estimate)", "Title: $98"],
			notes: "Varies by length and MPG"
		};
		case "PA": return {
			registrationFee: 48,
			titleFee: 51,
			plateFee: 0,
			docFee: 0,
			totalFees: 99,
			breakdown: ["Registration: $48 (estimate)", "Title: $51"],
			notes: "Varies by weight"
		};
		case "RI": return {
			registrationFee: 66,
			titleFee: 50,
			plateFee: 0,
			docFee: 0,
			totalFees: 116,
			breakdown: ["Registration: $66 (estimate)", "Title: $50"]
		};
		case "SC": return {
			registrationFee: 40,
			titleFee: 15,
			plateFee: 0,
			docFee: 0,
			totalFees: 55,
			breakdown: ["Registration: $40", "Title: $15"]
		};
		case "SD": return calculateSouthDakotaFees(vehicleWeight, vehicleAge);
		case "TN": return {
			registrationFee: 26.5,
			titleFee: 14.5,
			plateFee: 0,
			docFee: 0,
			totalFees: 41,
			breakdown: ["Registration: $26.50", "Title: $14.50"],
			notes: "May vary by county"
		};
		case "TX": return {
			registrationFee: 51.75,
			titleFee: 33,
			plateFee: 0,
			docFee: 0,
			totalFees: 84.75,
			breakdown: ["Registration: $51.75", "Title: $33"],
			notes: "Plus county fees (varies)"
		};
		case "UT": return calculateUtahFees(vehicleValue, vehicleAge);
		case "VT": return {
			registrationFee: 80,
			titleFee: 39,
			plateFee: 0,
			docFee: 0,
			totalFees: 119,
			breakdown: ["Registration: $80", "Title: $39"]
		};
		case "VA": return {
			registrationFee: 33.75,
			titleFee: 10,
			plateFee: 0,
			docFee: 0,
			totalFees: 43.75,
			breakdown: ["Registration: $33.75", "Title: $10"]
		};
		case "WA": return {
			registrationFee: 85,
			titleFee: 15,
			plateFee: 0,
			docFee: 0,
			totalFees: 100,
			breakdown: ["Registration: $85 (estimate)", "Title: $15"]
		};
		case "WV": return {
			registrationFee: 76.5,
			titleFee: 15,
			plateFee: 0,
			docFee: 0,
			totalFees: 91.5,
			breakdown: ["Registration: $76.50", "Title: $15"]
		};
		case "WI": return calculateWisconsinFees(vehicleWeight);
		case "WY": return calculateWyomingFees(vehicleValue);
		case "DC": return {
			registrationFee: 72,
			titleFee: 26,
			plateFee: 0,
			docFee: 0,
			totalFees: 98,
			breakdown: ["Registration: $72", "Title: $26"]
		};
		default: return {
			registrationFee: 75,
			titleFee: 25,
			plateFee: 0,
			docFee: 0,
			totalFees: 100,
			breakdown: ["Registration: $75 (estimate)", "Title: $25 (estimate)"],
			notes: "State-specific calculation not available"
		};
	}
}
function calculateAlabamaFees(weight) {
	let regFee = 23;
	if (weight > 8e4) regFee = 890;
	else if (weight > 6e4) regFee = 715;
	else if (weight > 4e4) regFee = 490;
	else if (weight > 26e3) regFee = 315;
	else if (weight > 12e3) regFee = 140;
	else if (weight >= 8e3) regFee = 58;
	return {
		registrationFee: regFee,
		titleFee: 18,
		plateFee: 23,
		docFee: 0,
		totalFees: regFee + 18 + 23,
		breakdown: [
			`Registration: $${regFee}`,
			"Title: $18",
			"Plate: $23"
		]
	};
}
function calculateArizonaFees(value, age) {
	const vlt = value * Math.pow(.8375, age) * .026;
	return {
		registrationFee: 13.5,
		titleFee: 4,
		plateFee: 0,
		docFee: vlt,
		totalFees: 17.5 + vlt,
		breakdown: [
			"Registration: $13.50",
			"Title: $4",
			`Vehicle License Tax (VLT): $${vlt.toFixed(2)}`
		]
	};
}
function calculateArkansasFees(weight) {
	let regFee = 17;
	if (weight > 4500) regFee = 30;
	else if (weight > 3e3) regFee = 25;
	return {
		registrationFee: regFee,
		titleFee: 10,
		plateFee: 0,
		docFee: 0,
		totalFees: regFee + 10,
		breakdown: [`Registration: $${regFee}`, "Title: $10"]
	};
}
function calculateCaliforniaFees(value) {
	const vlf = value * .0065;
	const regFee = 60;
	const chpFee = 29;
	const tifFee = value > 0 && value <= 4999 ? 25 : value >= 5e3 && value <= 24999 ? 50 : value >= 25e3 && value <= 34999 ? 100 : value >= 35e3 && value <= 59999 ? 150 : 175;
	return {
		registrationFee: regFee,
		titleFee: 15,
		plateFee: 0,
		docFee: vlf + chpFee + tifFee,
		totalFees: 75 + vlf + chpFee + tifFee,
		breakdown: [
			`Registration: $${regFee}`,
			"Title: $15",
			`VLF (0.65%): $${vlf.toFixed(2)}`,
			`CHP Fee: $${chpFee}`,
			`TIF: $${tifFee}`
		]
	};
}
function calculateColoradoFees(value, age) {
	const ownershipTax = value * .02;
	return {
		registrationFee: 30,
		titleFee: 7.2,
		plateFee: 0,
		docFee: ownershipTax,
		totalFees: 37.2 + ownershipTax,
		breakdown: [
			"Registration: $30",
			"Title: $7.20",
			`Ownership Tax (estimate): $${ownershipTax.toFixed(2)}`
		]
	};
}
function calculateDelawareFees(weight) {
	let regFee = 40;
	if (weight > 5e3) regFee = 40 + Math.ceil((weight - 5e3) / 1e3) * 6.4;
	return {
		registrationFee: regFee,
		titleFee: 35,
		plateFee: 40,
		docFee: 0,
		totalFees: regFee + 35 + 40,
		breakdown: [
			`Registration: $${regFee.toFixed(2)}`,
			"Title: $35",
			"Plate: $40"
		]
	};
}
function calculateFloridaFees(weight) {
	const initialFee = 225;
	const plateFee = 28;
	let weightFee = 14.5;
	if (weight > 5e3) weightFee = 27.6;
	if (weight > 6e3) weightFee = 42.2;
	return {
		registrationFee: initialFee,
		titleFee: 77.25,
		plateFee,
		docFee: weightFee,
		totalFees: 330.25 + weightFee,
		breakdown: [
			`Registration: $${initialFee}`,
			"Title: $77.25",
			`Plate: $${plateFee}`,
			`Weight Fee: $${weightFee}`
		]
	};
}
function calculateGeorgiaFees(value) {
	const tavt = value * .066;
	return {
		registrationFee: 20,
		titleFee: 18,
		plateFee: 0,
		docFee: tavt,
		totalFees: 38 + tavt,
		breakdown: [
			"Registration: $20",
			"Title: $18",
			`TAVT (6.6%): $${tavt.toFixed(2)}`
		]
	};
}
function calculateIdahoFees(value) {
	const assessedValue = value * .4;
	const fee = 8.5 + Math.floor(assessedValue / 1e3) * 5;
	return {
		registrationFee: fee,
		titleFee: 14,
		plateFee: 0,
		docFee: 0,
		totalFees: fee + 14,
		breakdown: [`Registration: $${fee.toFixed(2)}`, "Title: $14"]
	};
}
function calculateIllinoisFees(weight) {
	const regFee = weight < 8e3 ? 78 : weight < 12e3 ? 90 : 102;
	return {
		registrationFee: regFee,
		titleFee: 150,
		plateFee: 0,
		docFee: 0,
		totalFees: regFee + 150,
		breakdown: [`Registration: $${regFee}`, "Title: $150"]
	};
}
function calculateIowaFees(value) {
	const regFee = Math.min(400, 85 + value * .0015);
	return {
		registrationFee: regFee,
		titleFee: 25,
		plateFee: 0,
		docFee: 0,
		totalFees: regFee + 25,
		breakdown: [`Registration: $${regFee.toFixed(2)}`, "Title: $25"]
	};
}
function calculateMarylandFees(weight) {
	const regFee = weight < 3700 ? 135 : 187;
	return {
		registrationFee: regFee,
		titleFee: 100,
		plateFee: 0,
		docFee: 0,
		totalFees: regFee + 100,
		breakdown: [`Registration: $${regFee}`, "Title: $100"]
	};
}
function calculateMichiganFees(value) {
	const regFee = value * .003;
	return {
		registrationFee: regFee,
		titleFee: 15,
		plateFee: 0,
		docFee: 0,
		totalFees: regFee + 15,
		breakdown: [`Registration: $${regFee.toFixed(2)}`, "Title: $15"]
	};
}
function calculateMinnesotaFees(value, age) {
	const baseFee = 15.5;
	const regTax = value * .0125 * Math.max(.1, 1 - age * .1);
	return {
		registrationFee: baseFee,
		titleFee: 11,
		plateFee: 0,
		docFee: regTax,
		totalFees: 26.5 + regTax,
		breakdown: [
			`Registration: $${baseFee}`,
			"Title: $11",
			`Registration Tax: $${regTax.toFixed(2)}`
		]
	};
}
function calculateMontanaFees(age) {
	let regFee = 282.5;
	if (age >= 11) regFee = 237.5;
	else if (age >= 8) regFee = 97.5;
	else if (age >= 5) regFee = 132.5;
	else if (age >= 2) regFee = 224.25;
	return {
		registrationFee: regFee,
		titleFee: 10.21,
		plateFee: 0,
		docFee: 0,
		totalFees: regFee + 10.21,
		breakdown: [`Registration: $${regFee}`, "Title: $10.21"]
	};
}
function calculateNewJerseyFees(weight, age) {
	let regFee = 35.5;
	if (weight > 1e4 || age < 3) regFee = 84;
	else if (weight > 7e3 || age < 6) regFee = 59.5;
	return {
		registrationFee: regFee,
		titleFee: 60,
		plateFee: 0,
		docFee: 0,
		totalFees: regFee + 60,
		breakdown: [`Registration: $${regFee}`, "Title: $60"]
	};
}
function calculateNewYorkFees(weight) {
	const regFee = weight < 8500 ? 40 : weight < 11e3 ? 60 : 80;
	return {
		registrationFee: regFee,
		titleFee: 50,
		plateFee: 25,
		docFee: 0,
		totalFees: regFee + 50 + 25,
		breakdown: [
			`Registration: $${regFee}`,
			"Title: $50",
			"Plate: $25"
		]
	};
}
function calculateNorthDakotaFees(weight, age) {
	let regFee = 50;
	if (age < 4 && weight > 8e3) regFee = 120;
	else if (age < 8 && weight > 1e4) regFee = 85;
	return {
		registrationFee: regFee,
		titleFee: 5,
		plateFee: 0,
		docFee: 0,
		totalFees: regFee + 5,
		breakdown: [`Registration: $${regFee}`, "Title: $5"]
	};
}
function calculateSouthDakotaFees(weight, age) {
	let regFee = 70;
	if (age < 3) regFee = 120;
	else if (age < 6) regFee = 95;
	if (weight > 12e3) regFee *= 1.2;
	return {
		registrationFee: regFee,
		titleFee: 10,
		plateFee: 0,
		docFee: 0,
		totalFees: regFee + 10,
		breakdown: [`Registration: $${regFee.toFixed(2)}`, "Title: $10"]
	};
}
function calculateUtahFees(value, age) {
	const ageFactors = [
		.7,
		.65,
		.6,
		.55,
		.5,
		.45,
		.4,
		.35,
		.3,
		.25,
		.2,
		.15,
		.1
	];
	const uniformFee = value * (age < ageFactors.length ? ageFactors[age] : .1) * .015;
	return {
		registrationFee: uniformFee,
		titleFee: 18,
		plateFee: 0,
		docFee: 0,
		totalFees: uniformFee + 18,
		breakdown: [`Registration: $${uniformFee.toFixed(2)}`, "Title: $18"]
	};
}
function calculateWisconsinFees(weight) {
	const regFee = weight < 8e3 ? 50 : weight < 1e4 ? 58 : 85;
	return {
		registrationFee: regFee,
		titleFee: 69.5,
		plateFee: 0,
		docFee: 0,
		totalFees: regFee + 69.5,
		breakdown: [`Registration: $${regFee}`, "Title: $69.50"]
	};
}
function calculateWyomingFees(value) {
	const regFee = value * .008;
	return {
		registrationFee: regFee,
		titleFee: 30,
		plateFee: 0,
		docFee: 0,
		totalFees: regFee + 30,
		breakdown: [`Registration: $${regFee.toFixed(2)}`, "Title: $30"]
	};
}
function FinancePage() {
	const seed = Route$9.useSearch();
	const [price, setPrice] = (0, import_react.useState)(seed.price || "125000");
	const [down, setDown] = (0, import_react.useState)("15000");
	const [trade, setTrade] = (0, import_react.useState)("0");
	const [months, setMonths] = (0, import_react.useState)("144");
	const [zip, setZip] = (0, import_react.useState)("85260");
	const [tier, setTier] = (0, import_react.useState)("720");
	const loc = lookupZip(zip);
	const credit = CREDIT_TIERS.find((t) => t.id === tier) ?? CREDIT_TIERS[3];
	const p = Number(price) || 0;
	const d = Number(down) || 0;
	const tr = Number(trade) || 0;
	const n = Number(months) || 120;
	const age = Math.max(0, 2026 - (parseInt(seed.year, 10) || 2024));
	const result = (0, import_react.useMemo)(() => {
		const taxOnDiff = loc?.taxOnDifference ?? true;
		const taxable = Math.max(0, taxOnDiff ? p - tr : p);
		let tax = taxable * ((loc?.tax ?? 0) / 100);
		if (loc?.luxuryTax && p > loc.luxuryTax.threshold) tax = taxable * (loc.luxuryTax.rate / 100);
		const fees = loc ? calculateRVRegistrationFee(loc.code, p, 15e3, age).totalFees : 0;
		const amount = Math.max(0, p - d - tr + tax + fees);
		return {
			tax,
			fees,
			amount,
			loc
		};
	}, [
		p,
		d,
		tr,
		loc,
		age
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
					children: "RvCAL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold",
					children: "Payment & tax estimator"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: seed.make ? `${seed.year} ${seed.make} ${seed.model}` : "Estimate tax, registration, and monthly payment by ZIP."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 rounded-xl border border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Purchase price",
							value: price,
							onChange: setPrice
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Down payment",
							value: down,
							onChange: setDown
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Trade-in",
							value: trade,
							onChange: setTrade
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Term (months)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
							value: months,
							onChange: (e) => setMonths(e.target.value),
							className: "mt-1",
							children: [
								"60",
								"84",
								"120",
								"144",
								"180"
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: m,
								children: [m, " months"]
							}, m))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Credit band" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
							value: tier,
							onChange: (e) => setTier(e.target.value),
							className: "mt-1",
							children: CREDIT_TIERS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: t.id,
								children: [
									t.label,
									" · ",
									t.desc
								]
							}, t.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ZIP code",
							value: zip,
							onChange: setZip
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-navy p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-wide text-muted",
							children: result.loc ? `${result.loc.state} · ${result.loc.tax}% tax` : "Enter a ZIP"
						}),
						result.loc?.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-dim",
							children: result.loc.notes
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Sales tax",
									v: formatUsd(result.tax)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Registration (est.)",
									v: formatUsd(result.fees)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Amount financed",
									v: formatUsd(result.amount)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-dim",
							children: "Estimates only — not an offer of credit. Confirm with your state DMV and lender."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-3 md:grid-cols-2",
				children: LENDERS.map((l) => {
					const apr = l.aprLow + credit.aprOffset;
					const pay = calcMonthlyPayment(result.amount, apr, n);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-semibold",
									children: l.name
								}), l.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary",
									children: l.badge
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-display text-3xl tabular text-primary",
								children: [formatUsd(pay), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base text-muted",
									children: "/mo"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									"From ",
									apr.toFixed(2),
									"% APR · ",
									n,
									" mo"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 space-y-1 text-xs text-muted",
								children: l.perks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: p }, p))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								className: "mt-3 w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: l.url,
									target: "_blank",
									rel: "noreferrer",
									children: "Lender site"
								})
							})
						]
					}, l.name);
				})
			})
		]
	});
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		className: "mt-1",
		inputMode: "decimal",
		value,
		onChange: (e) => onChange(e.target.value)
	})] });
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular",
			children: v
		})]
	});
}
//#endregion
export { FinancePage as component };
