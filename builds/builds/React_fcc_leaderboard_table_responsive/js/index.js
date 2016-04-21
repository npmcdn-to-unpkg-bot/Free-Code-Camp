"use strict";

var apiroot = "http://fcctop100.herokuapp.com/api/fccusers/top/";

/*
var topusers = 
 [{"username":"Takumar","img":"https://avatars.githubusercontent.com/u/2951935?v=3","alltime":2786,"recent":332,"lastUpdate":"2016-04-18T03:42:48.168Z"},{"username":"SaintPeter","img":"https://avatars.githubusercontent.com/u/553494?v=3","alltime":2483,"recent":134,"lastUpdate":"2016-04-16T22:13:12.281Z"},{"username":"abhisekp","img":"https://avatars.githubusercontent.com/u/1029200?v=3","alltime":2177,"recent":122,"lastUpdate":"2016-04-16T22:13:24.120Z"},{"username":"EllieAdam","img":"https://avatars.githubusercontent.com/u/7389754?v=3","alltime":1684,"recent":15,"lastUpdate":"2016-04-16T22:21:43.002Z"},{"username":"brainyfarm","img":"https://avatars.githubusercontent.com/u/11624587?v=3","alltime":1528,"recent":203,"lastUpdate":"2016-04-16T22:10:02.463Z"},{"username":"jbmartinez","img":"https://avatars.githubusercontent.com/u/4247923?v=3","alltime":1521,"recent":99,"lastUpdate":"2016-04-16T22:14:33.322Z"},{"username":"h4r1m4u","img":"https://avatars.githubusercontent.com/u/4771847?v=3","alltime":1468,"recent":167,"lastUpdate":"2016-04-16T22:10:45.022Z"},{"username":"HermanFassett","img":"https://avatars.githubusercontent.com/u/12920275?v=3","alltime":1294,"recent":8,"lastUpdate":"2016-04-17T08:34:11.849Z"},{"username":"storbeck","img":"https://avatars.githubusercontent.com/u/449874?v=3","alltime":1225,"recent":17,"lastUpdate":"2016-04-16T22:21:46.103Z"},{"username":"anthonygallina1","img":"https://avatars.githubusercontent.com/u/11003055?v=3","alltime":1208,"recent":325,"lastUpdate":"2016-04-18T03:43:34.606Z"},{"username":"duttakapil","img":"https://avatars.githubusercontent.com/u/6577624?v=3","alltime":1135,"recent":13,"lastUpdate":"2016-04-16T22:22:19.482Z"},{"username":"bugron","img":"https://avatars.githubusercontent.com/u/13225220?v=3","alltime":1128,"recent":8,"lastUpdate":"2016-04-16T22:23:04.827Z"},{"username":"ArielLeslie","img":"https://avatars.githubusercontent.com/u/6234475?v=3","alltime":1090,"recent":145,"lastUpdate":"2016-04-16T22:12:57.216Z"},{"username":"Masd925","img":"https://avatars.githubusercontent.com/u/9335367?v=3","alltime":1060,"recent":199,"lastUpdate":"2016-04-16T22:10:13.572Z"},{"username":"QuincyLarson","img":"https://avatars.githubusercontent.com/u/985197?v=3","alltime":1058,"recent":39,"lastUpdate":"2016-03-24T03:51:57.699Z"},{"username":"mutantspore","img":"https://avatars.githubusercontent.com/u/13058496?v=3","alltime":1053,"recent":130,"lastUpdate":"2016-04-18T03:42:48.167Z"},{"username":"BKinahan","img":"https://avatars.githubusercontent.com/u/15965601?v=3","alltime":1006,"recent":221,"lastUpdate":"2016-04-18T03:04:46.341Z"},{"username":"AkiraLaine","img":"https://avatars.githubusercontent.com/u/11958359?v=3","alltime":974,"recent":56,"lastUpdate":"2016-04-18T03:42:32.595Z"},{"username":"SonyaMoisset","img":"https://avatars.githubusercontent.com/u/13507232?v=3","alltime":884,"recent":46,"lastUpdate":"2016-04-18T03:43:04.303Z"},{"username":"qualitymanifest","img":"https://avatars.githubusercontent.com/u/13897419?v=3","alltime":820,"recent":64,"lastUpdate":"2016-04-16T22:16:04.831Z"},{"username":"cannelflow","img":"https://avatars.githubusercontent.com/u/12219251?v=3","alltime":780,"recent":141,"lastUpdate":"2016-04-16T22:10:21.505Z"},{"username":"Rafase282","img":"https://avatars.githubusercontent.com/u/285138?v=3","alltime":778,"recent":78,"lastUpdate":"2016-04-16T22:09:45.066Z"},{"username":"wearenotgroot","img":"https://avatars.githubusercontent.com/u/16578279?v=3","alltime":707,"recent":49,"lastUpdate":"2016-04-17T08:37:36.210Z"},{"username":"bitgrower","img":"https://avatars.githubusercontent.com/u/16696049?v=3","alltime":696,"recent":124,"lastUpdate":"2016-04-16T22:13:15.474Z"},{"username":"danraley","img":"https://avatars.githubusercontent.com/u/10391859?v=3","alltime":655,"recent":0,"lastUpdate":"2016-01-25T19:43:37.474Z"},{"username":"kirah1314","img":"https://avatars.githubusercontent.com/u/13123879?v=3","alltime":652,"recent":11,"lastUpdate":"2016-04-16T22:22:57.963Z"},{"username":"revisualize","img":"https://avatars.githubusercontent.com/u/1588399?v=3","alltime":645,"recent":172,"lastUpdate":"2016-04-16T22:12:04.535Z"},{"username":"Manish-Giri","img":"https://avatars.githubusercontent.com/u/11348778?v=3","alltime":604,"recent":149,"lastUpdate":"2016-04-16T22:12:56.440Z"},{"username":"jedpimentel","img":"https://avatars.githubusercontent.com/u/6427690?v=3","alltime":603,"recent":87,"lastUpdate":"2016-04-16T22:13:11.587Z"},{"username":"MattYamamoto","img":"https://avatars.githubusercontent.com/u/12126908?v=3","alltime":603,"recent":26,"lastUpdate":"2016-03-05T18:51:51.707Z"},{"username":"moigithub","img":"https://avatars.githubusercontent.com/u/7305974?v=3","alltime":602,"recent":193,"lastUpdate":"2016-04-18T22:35:23.811Z"},{"username":"marzelin","img":"https://avatars.githubusercontent.com/u/13483453?v=3","alltime":594,"recent":8,"lastUpdate":"2016-04-16T22:22:39.349Z"},{"username":"hansinla","img":"https://avatars.githubusercontent.com/u/373708?v=3","alltime":556,"recent":8,"lastUpdate":"2016-04-17T08:37:42.050Z"},{"username":"CEREBR4L","img":"https://avatars.githubusercontent.com/u/7153918?v=3","alltime":543,"recent":158,"lastUpdate":"2016-04-16T22:12:12.236Z"},{"username":"jondcoleman","img":"https://avatars.githubusercontent.com/u/11843663?v=3","alltime":538,"recent":56,"lastUpdate":"2016-04-17T08:34:43.099Z"},{"username":"himanshuchauhan","img":"https://avatars.githubusercontent.com/u/14178370?v=3","alltime":524,"recent":0,"lastUpdate":"2016-04-02T18:55:19.372Z"},{"username":"garrettjeffrey","img":"https://avatars.githubusercontent.com/u/9309089?v=3","alltime":499,"recent":47,"lastUpdate":"2016-03-05T20:19:04.096Z"},{"username":"codemzy","img":"https://avatars.githubusercontent.com/u/13764272?v=3","alltime":493,"recent":95,"lastUpdate":"2016-04-16T22:09:45.058Z"},{"username":"darrylpargeter","img":"https://avatars.githubusercontent.com/u/10661000?v=3","alltime":485,"recent":73,"lastUpdate":"2016-04-16T22:15:32.748Z"},{"username":"URobert","img":"https://avatars.githubusercontent.com/u/15540231?v=3","alltime":474,"recent":96,"lastUpdate":"2016-04-16T22:14:20.366Z"},{"username":"dcnr","img":"https://avatars.githubusercontent.com/u/16109443?v=3","alltime":458,"recent":8,"lastUpdate":"2016-04-14T18:48:49.960Z"},{"username":"alayek","img":"https://avatars.githubusercontent.com/u/5607371?v=3","alltime":445,"recent":106,"lastUpdate":"2016-04-16T22:15:19.363Z"},{"username":"CaroleAnneHannon","img":"https://avatars.githubusercontent.com/u/16139985?v=3","alltime":440,"recent":4,"lastUpdate":"2016-03-05T21:19:51.603Z"},{"username":"luishendrix92","img":"https://avatars.githubusercontent.com/u/6039444?v=3","alltime":427,"recent":7,"lastUpdate":"2016-03-05T20:26:08.087Z"},{"username":"mamun2015","img":"https://avatars.githubusercontent.com/u/11602663?v=3","alltime":418,"recent":0,"lastUpdate":"2016-03-05T21:46:27.018Z"},{"username":"tommygebru","img":"https://avatars.githubusercontent.com/u/7606025?v=3","alltime":392,"recent":71,"lastUpdate":"2016-03-05T20:47:41.731Z"},{"username":"KingxBanana","img":"https://avatars.githubusercontent.com/u/15861879?v=3","alltime":386,"recent":2,"lastUpdate":"2016-03-13T15:27:45.080Z"},{"username":"michellejanosi","img":"https://avatars.githubusercontent.com/u/15160311?v=3","alltime":375,"recent":19,"lastUpdate":"2016-03-05T20:42:40.901Z"},{"username":"Coira","img":"https://avatars.githubusercontent.com/u/13316269?v=3","alltime":373,"recent":48,"lastUpdate":"2016-04-16T22:10:04.520Z"},{"username":"benmcmahon100","img":"https://avatars.githubusercontent.com/u/10749142?v=3","alltime":370,"recent":3,"lastUpdate":"2016-03-05T21:45:56.878Z"},{"username":"khaduch","img":"https://avatars.githubusercontent.com/u/1930584?v=3","alltime":353,"recent":167,"lastUpdate":"2016-03-05T20:53:13.637Z"},{"username":"wildlifehexagon","img":"https://avatars.githubusercontent.com/u/13489381?v=3","alltime":339,"recent":48,"lastUpdate":"2016-03-05T20:31:09.074Z"},{"username":"dhcodes","img":"https://avatars.githubusercontent.com/u/7917512?v=3","alltime":337,"recent":217,"lastUpdate":"2016-04-18T03:50:58.097Z"},{"username":"gwenf","img":"https://avatars.githubusercontent.com/u/10039233?v=3","alltime":336,"recent":9,"lastUpdate":"2016-04-16T22:15:20.454Z"},{"username":"daemedeor","img":"https://avatars.githubusercontent.com/u/6037411?v=3","alltime":324,"recent":324,"lastUpdate":"2016-04-18T03:54:34.391Z"},{"username":"eeflores","img":"https://avatars.githubusercontent.com/u/4065110?v=3","alltime":323,"recent":86,"lastUpdate":"2016-03-05T21:01:47.649Z"},{"username":"OriBon","img":"https://avatars.githubusercontent.com/u/10662057?v=3","alltime":322,"recent":3,"lastUpdate":"2016-03-05T20:41:40.764Z"},{"username":"catapixel","img":"https://avatars.githubusercontent.com/u/1958489?v=3","alltime":306,"recent":0,"lastUpdate":"2016-03-05T20:25:07.935Z"},{"username":"rameshsyn","img":"https://avatars.githubusercontent.com/u/10565954?v=3","alltime":305,"recent":29,"lastUpdate":"2016-03-05T21:04:48.104Z"},{"username":"serhiicss","img":"https://avatars.githubusercontent.com/u/3081897?v=3","alltime":303,"recent":3,"lastUpdate":"2016-03-05T21:41:55.987Z"},{"username":"samosale","img":"https://avatars.githubusercontent.com/u/13149550?v=3","alltime":293,"recent":29,"lastUpdate":"2016-03-05T20:27:38.318Z"},{"username":"maulikdarji","img":"https://avatars.githubusercontent.com/u/12884486?v=3","alltime":287,"recent":34,"lastUpdate":"2016-04-16T22:13:14.231Z"},{"username":"koop22","img":"https://avatars.githubusercontent.com/u/13839080?v=3","alltime":274,"recent":60,"lastUpdate":"2016-03-05T20:37:10.217Z"},{"username":"marhyorh","img":"https://avatars.githubusercontent.com/u/11811904?v=3","alltime":273,"recent":14,"lastUpdate":"2016-04-16T22:12:50.439Z"},{"username":"noinkling","img":"https://avatars.githubusercontent.com/u/4338251?v=3","alltime":273,"recent":20,"lastUpdate":"2016-04-16T22:22:40.058Z"},{"username":"michael-krebs","img":"https://avatars.githubusercontent.com/u/6935181?v=3","alltime":272,"recent":20,"lastUpdate":"2016-03-05T20:18:34.038Z"},{"username":"coymeetsworld","img":"https://avatars.githubusercontent.com/u/7891989?v=3","alltime":270,"recent":196,"lastUpdate":"2016-04-17T09:04:55.707Z"},{"username":"TimRizzo","img":"https://avatars.githubusercontent.com/u/11548488?v=3","alltime":259,"recent":0,"lastUpdate":"2016-03-27T23:01:25.896Z"},{"username":"Francozt01","img":"https://avatars.githubusercontent.com/u/11658666?v=3","alltime":255,"recent":44,"lastUpdate":"2016-03-05T20:29:08.682Z"},{"username":"Matko95","img":"https://avatars.githubusercontent.com/u/12697536?v=3","alltime":246,"recent":8,"lastUpdate":"2016-04-16T22:17:05.087Z"},{"username":"Gts0uk","img":"https://avatars.githubusercontent.com/u/12423027?v=3","alltime":241,"recent":17,"lastUpdate":"2016-03-05T20:29:38.783Z"},{"username":"josevill","img":"https://avatars.githubusercontent.com/u/1178493?v=3","alltime":238,"recent":0,"lastUpdate":"2016-02-20T01:24:52.364Z"},{"username":"awalthefirst","img":"https://avatars.githubusercontent.com/u/11713455?v=3","alltime":238,"recent":14,"lastUpdate":"2016-04-16T22:21:51.228Z"},{"username":"sok213","img":"https://avatars.githubusercontent.com/u/8195814?v=3","alltime":236,"recent":0,"lastUpdate":"2016-04-02T18:52:44.658Z"},{"username":"chrisdziewa","img":"https://avatars.githubusercontent.com/u/6117240?v=3","alltime":232,"recent":12,"lastUpdate":"2016-04-16T22:17:15.045Z"},{"username":"Kallaway","img":"https://avatars.githubusercontent.com/u/8016212?v=3","alltime":229,"recent":0,"lastUpdate":"2016-03-05T20:20:04.229Z"},{"username":"Spatzerny","img":"https://avatars.githubusercontent.com/u/861575?v=3","alltime":225,"recent":84,"lastUpdate":"2016-03-05T20:21:34.458Z"},{"username":"brianamarie","img":"https://avatars.githubusercontent.com/u/9906718?v=3","alltime":225,"recent":9,"lastUpdate":"2016-03-24T03:55:20.602Z"},{"username":"jonslucas","img":"https://avatars.githubusercontent.com/u/9203837?v=3","alltime":224,"recent":8,"lastUpdate":"2016-04-16T22:21:05.200Z"},{"username":"Devdevelop","img":"https://avatars.githubusercontent.com/u/14343246?v=3","alltime":216,"recent":0,"lastUpdate":"2016-01-30T13:38:20.536Z"},{"username":"denmch","img":"https://avatars.githubusercontent.com/u/2019665?v=3","alltime":216,"recent":2,"lastUpdate":"2016-03-05T21:44:26.550Z"},{"username":"nugoose","img":"https://avatars.githubusercontent.com/u/14965989?v=3","alltime":213,"recent":95,"lastUpdate":"2016-04-16T18:30:22.275Z"},{"username":"Cyclokitty","img":"https://avatars.githubusercontent.com/u/14623520?v=3","alltime":207,"recent":26,"lastUpdate":"2016-04-14T23:04:30.886Z"},{"username":"a49678321","img":"https://avatars.githubusercontent.com/u/13468662?v=3","alltime":207,"recent":8,"lastUpdate":"2016-04-18T15:04:20.665Z"},{"username":"StasiekK","img":"https://avatars.githubusercontent.com/u/6324906?v=3","alltime":207,"recent":206,"lastUpdate":"2016-04-18T03:47:24.216Z"},{"username":"BerkeleyTrue","img":"https://avatars.githubusercontent.com/u/6775919?v=3","alltime":205,"recent":19,"lastUpdate":"2016-03-05T21:40:25.686Z"},{"username":"jnmorse","img":"https://avatars.githubusercontent.com/u/1467889?v=3","alltime":201,"recent":54,"lastUpdate":"2016-04-16T22:10:03.444Z"},{"username":"raw1211","img":"https://avatars.githubusercontent.com/u/13079694?v=3","alltime":199,"recent":0,"lastUpdate":"2016-01-30T13:59:30.091Z"},{"username":"sudip007","img":"https://avatars.githubusercontent.com/u/15031730?v=3","alltime":197,"recent":0,"lastUpdate":"2016-03-05T20:46:11.406Z"},{"username":"oliver19","img":"https://avatars.githubusercontent.com/u/13495881?v=3","alltime":194,"recent":0,"lastUpdate":"2016-01-25T20:23:09.120Z"},{"username":"AmmarAliShah","img":"https://avatars.githubusercontent.com/u/8463720?v=3","alltime":191,"recent":6,"lastUpdate":"2016-03-05T21:40:55.801Z"},{"username":"diptajbasu","img":"https://avatars.githubusercontent.com/u/7990216?v=3","alltime":189,"recent":101,"lastUpdate":"2016-03-05T20:29:38.784Z"},{"username":"iAmNawa","img":"https://avatars.githubusercontent.com/u/13635940?v=3","alltime":189,"recent":189,"lastUpdate":"2016-04-18T03:51:59.125Z"},{"username":"ribeirojpn","img":"https://avatars.githubusercontent.com/u/3904173?v=3","alltime":188,"recent":8,"lastUpdate":"2016-04-16T22:23:32.467Z"},{"username":"alexanderkopke","img":"https://avatars.githubusercontent.com/u/13712290?v=3","alltime":187,"recent":31,"lastUpdate":"2016-03-05T20:59:47.301Z"},{"username":"arunkumrv","img":"https://avatars.githubusercontent.com/u/11643372?v=3","alltime":180,"recent":94,"lastUpdate":"2016-04-14T18:49:22.014Z"},{"username":"finklez","img":"https://avatars.githubusercontent.com/u/5415386?v=3","alltime":179,"recent":37,"lastUpdate":"2016-03-05T20:09:32.248Z"},{"username":"zcrnivec","img":"https://avatars.githubusercontent.com/u/13747126?v=3","alltime":179,"recent":0,"lastUpdate":"2016-01-25T20:33:20.453Z"},{"username":"otmeek","img":"https://avatars.githubusercontent.com/u/13089701?v=3","alltime":174,"recent":77,"lastUpdate":"2016-04-16T22:10:24.343Z"},{"username":"paycoguy","img":"https://avatars.githubusercontent.com/u/15024773?v=3","alltime":174,"recent":14,"lastUpdate":"2016-04-16T22:22:01.194Z"}];

*/

var User = React.createClass({
	displayName: "User",

	render: function render() {
		return React.createElement(
			"tr",
			{ className: "row" },
			React.createElement(
				"td",
				null,
				this.props.index
			),
			React.createElement(
				"td",
				null,
				React.createElement(
					"a",
					{ href: "http://www.freecodecamp.com/" + this.props.user.username },
					React.createElement("img", { style: { height: '50px' }, target: "_blank", src: this.props.user.img }),
					" ",
					this.props.user.username
				)
			),
			React.createElement(
				"td",
				null,
				this.props.user.alltime
			),
			React.createElement(
				"td",
				null,
				this.props.user.recent
			)
		);
	}
});

var UserTable = React.createClass({
	displayName: "UserTable",

	render: function render() {
		var rows = [];
		this.props.users.map(function (user, index) {
			rows.push(React.createElement(User, { user: user, index: index + 1 }));
		}.bind(this));
		return React.createElement(
			"tbody",
			null,
			rows
		);
	}
});

var Heading = React.createClass({
	displayName: "Heading",

	handleClick: function handleClick(api) {
		this.props.onUserClick(api); ///
	},
	render: function render() {
		return React.createElement(
			"tr",
			{ className: "row" },
			React.createElement(
				"th",
				null,
				"#"
			),
			React.createElement(
				"th",
				null,
				"User"
			),
			React.createElement(
				"th",
				{ id: "alltime", className: "sort alltime ", onClick: this.handleClick.bind(this, "alltime") },
				"Alltime",
				React.createElement("span", { id: "glyphiconalltime", className: "glyphicon glyphicon-triangle-bottom" }),
				" "
			),
			React.createElement(
				"th",
				{ id: "recent", className: "sort recent", onClick: this.handleClick.bind(this, "recent") },
				"Recent",
				React.createElement("span", { id: "glyphiconrecent", className: "glyphicon glyphicon-triangle-bottom" })
			)
		);
	}
});

function showGlyphicon(column) {
	$(".glyphicon").hide();
	if ($("." + column).hasClass("active")) {

		$("#glyphicon" + column).show();
	}
}

var TopTable = React.createClass({
	displayName: "TopTable",

	getInitialState: function getInitialState() {
		return { users: [] };
	},
	componentDidMount: function componentDidMount() {

		$.get(apiroot + "alltime", function (data) {

			$(".alltime").addClass("active");

			showGlyphicon("alltime");
			this.setState({ users: data });
		}.bind(this));
	},
	onUserClick: function onUserClick(api) {

		$.get(apiroot + api, function (data) {
			this.setState({ users: data });
			$(".sort").removeClass("active");

			$("." + api).addClass("active");
			showGlyphicon(api);
		}.bind(this));
	},
	render: function render() {
		return React.createElement(
			"table",
			{ className: "table table-striped table-hover" },
			React.createElement(
				"thead",
				null,
				React.createElement(Heading, { onUserClick: this.onUserClick })
			),
			React.createElement(UserTable, { users: this.state.users })
		);
	}
});

React.render(React.createElement(TopTable, null), document.getElementById("displayMe"));