
/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */


var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1","192.168.1.83"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "fr",
	timeFormat: 24,
	units: "metric",
//	serverOnly:  true,
	serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "clock",
			position: "top_left",
			classes: 'default everyone',
		},
/*
		{
			module: "calendar",
			header: "FR Holidays",
			position: "top_left",
			classes: 'default everyone',
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/45/FRANCE_Holidays.ics"					}
				]
			}
		},
*/
		{
			module: "compliments",
			position: "upper_third",
			classes: 'default everyone',
			config: {
            			compliments: {
               				anytime: [
                  				"Bonjour!"
               				],
               				morning: [
                  				"Bien dormi?",
                  				"Bonne journee!",
                  				"Bonjour!"
               				],
               				evening: [
                  				"Bonne soiree",
                  				"Repose toi bien!",
                  				"Bonne nuit."
               				]
            			}
			}
		},
/*
		{
			module: "currentweather",
			position: "top_right",
			classes: 'default everyone',
			config: {
				location: "Paris, FR",
				locationID: "6455259",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "8b778a263befc8b2a09a98443b442671"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			classes: 'default everyone',
			config: {
				location: "Paris, FR",
				locationID: "6455259",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "8b778a263befc8b2a09a98443b442671"
			}
		},
*/
		{
  			module: "MMM-DarkSkyForecast",
  			header: "Weather",
  			position: "top_right",
  			classes: "default everyone",
  			disabled: false,
  			config: {
    				apikey: "2ebc07b10d0bfd2c1dd0a125a2ff0bad",
    				latitude: "48.856613",
    				longitude: "2.352222",
    				iconset: "4c",
    				concise: true,
    				forecastLayout: "tiled",
				showSummary: false,
				maxDailiesToShow: 0,
  			}
		},
		{
                        module: 'MMM-AirParif',
                        position: 'top_right',
                        header: 'Qualite l\'air',
                        config: {
                                key: "a5005807-f413-2403-eb2c-46b557ff7fbc",
				ville: ["92120,montrouge"],
                                polluants: true,
                                update: 600
                        }
                },
		{
			module: "newsfeed",
			position: "bottom_bar",
			classes: 'default everyone',
			config: {
				feeds: [
					{
						title: "France 24",
						url: "http://www.france24.com/fr/france/rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-network-signal",
    			position: "top_right",
			classes: 'default everyone',
    			config: {
        		// Configuration of the module goes here
				server: "8.8.8.8",
				maxTimeout: "1000",
				updateInterval: "5000",

			}
		},
		{
			module: 'MMM-OnScreenMenu',
            		position: 'bottom_right',
			classes: 'default everyone',
            		config: {
                		touchMode: true,
                		enableKeyboard: true,
                		// ... see more options below
				menuItems: {
    					monitorOff: { title: "Turn Off Monitor", icon: "television", source: "SERVER" },
    					refresh: { title: "Refresh", icon: "recycle", source: "LOCAL" },
    					restart: { title: "Restart MagicMirror", icon: "refresh", source: "ALL" },
    					reboot: { title: "Reboot", icon: "spinner" },
    					shutdown: { title: "Shutdown", icon: "power-off" },
					toggleTouchMode: { title: "Toggle Touch Mode", icon: "eye-slash" },
					notify1: { title: "Switch to Profile", icon: "eye", notification: "CURRENT_PROFILE",payload: "JER_EM" },
				},
            		}
		},
/*		{
			module: 'MMM-ProfileSwitcher',
			header: "Profile",
        		config: {
   	  		// See 'Configuration options' for more informations
				ignoreModules: " alert ",
				enterMessages: {
//					"JER_EM": ["Hello You.", "Hey how is it going?"]
					"JER_EM": "Hello You !",
				},
			}
    		},
*/
 		{
      		module: 'MMM-pages',
        		config: {
                		modules:
                    			[['compliments', 'weatherforecast','MMM-DarkSkyForecast', 'MMM-AirParif', 'newsfeed', 'MMM-Paris-RATP-PG','MMM-NameDay'],
                     			['MMM-Tools', 'MMM-OnScreenMenu', 'MMM-network-signal', 'MMM-portscan','MMM-Logging']],
                			fixed: ["clock", "currentweather", "MMM-page-indicator"],
// 					[['MMM-NameDay']],

	        	}
    		},
		{
        		module: 'MMM-page-indicator',
        		position: 'bottom_bar',
        		config: {
            			pages: 2,
        		}
    		},
/*
		{
			module: 'MMM-Tools',
  			position: 'top_right',
  			config: {
    				device : "RPI", // "RPI" is also available
    				refresh_interval_ms : 10000,
    				warning_interval_ms : 1000 * 60 * 5,
    				enable_warning : true,
    				warning : {
      					CPU_TEMPERATURE : 65,
      					GPU_TEMPERATURE : 65,
      					CPU_USAGE : 75,
      					STORAGE_USED_PERCENT : 80,
      					MEMORY_USED_PERCENT : 80
    				},
    				warning_text: {
      					CPU_TEMPERATURE : "The temperature of CPU is over %VAL%",
      					GPU_TEMPERATURE : "The temperature of GPU is over %VAL%",
      					CPU_USAGE : "The usage of CPU is over %VAL%",
      					STORAGE_USED_PERCENT : "The storage is used over %VAL% percent",
      					MEMORY_USED_PERCENT : "The memory is used over %VAL% percent",
    				}
  			}
        	},
*/
		{
			module: 'MMM-portscan',
    			position: 'top_left',
    			config: {
      				updateInterval: 60,      // in seconds
      				textalign: 'right',      // left, right, center
      				color_open: '#00ff00',   // hex value or empty
      				color_closed: '#ff0000', // hex value or empty

      				hosts: [
        				{
          					hostname: '127.0.0.1',
          					ports: [
            						{port: 80, displayedName: 'HTTP'},
            						{port: 443, displayedName: 'HTTPS'},
							{port: 23, displayedName: 'TELNET'},
			//				{port: 135, displayedName: 'RPC'},
        		//				{port: 20, displayedName: 'FTP'},
			//				{port: 389, displayedName: 'LDAP'},
							{port: 445, displayedName: 'SMB'},
			//				{port: 514, displayedName: 'REMOTE SHELL'},
			//				{port: 115, displayedName: 'SFTP'},
			//				{port: 123, displayedName: 'NTP'},
							{port: 53, displayedName: 'DNS'},
			//				{port: 25, displayedName: 'SMTP'},
                					{port: 22, displayedName: 'SSH'}
          					]
        				}
    				]
    			}
 		},
		{
			module: 'MMM-SmartWebDisplay',
			position: 'middle_center',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				logDebug: false, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
				height:"400px", //hauteur du cadre en pixel ou %
				width:"100%", //largeur
               			updateInterval: 0, //in min. Set it to 0 for no refresh (for videos)
                		NextURLInterval: 0.5, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updated
                		displayLastUpdate: true, //to display the last update of the URL
				displayLastUpdateFormat: 'ddd - HH:mm:ss', //format of the date and time to display
                		url: ["http://magicmirror.builders/"], //source of the URL to be displayed
					scrolling: "yes", // allow scrolling or not. html 4 only
					shutoffDelay: 10000 //delay in miliseconds to video shut-off while using together with MMM-PIR-Sensor
				}
		},
		{
                        module: 'MMM-Paris-RATP-PG',
                        position: 'top_left',
                        header: 'Connections',
                        config: {
                                debug: false,
                                lineDefault: {
                                        hideTraffic: [
                                                "le trafic est interrompu entre Aulnay",
                                                "Trafic normal sur l'ensemble de la lig",
                                                "le trafic est interrompu entre Nanterr",
                                        ],
                                        conversion: { "Trafic normal sur l'ensemble de la ligne" : 'Traffic normal'},
                                        updateInterval: 1 * 2 * 60 * 1000,
                                        },
                                lines: [
					{type: 'buses', line: 126, stations: 'Mairie de Montrouge', destination: 'A', firstCellColor: '#0055c8',showUpdateAge: false},
//	  				{type: 'buses', line: 91, stations: 'observatoire+++port+royal', destination: 'R', firstCellColor: '#dc9600', lineColor: 'Brown'},
//	  				{type: 'rers', line: 'B', stations: 'port+royal', destination: 'A', label: 'B', firstCellColor: '#7BA3DC'},
//	  				{type: 'traffic', line: ['rers', 'B'], firstCellColor: 'Blue', lineColor: 'green'},
	  				{type: 'metros', line: '4', stations: 'Mairie de Montrouge', destination: 'R', firstCellColor: '#be418d',showUpdateAge: false},
	  				{type: 'pluie', place: '751140', updateInterval: 1 * 5 * 60 * 1000, label: 'Paris', iconSize: 0.70,showUpdateAge: false},
	  				{type: 'velib', stationId: 21204, label: 'Henri Ginoux', velibGraph : false, keepVelibHistory: true,showUpdateAge: false},
					{type: 'velib', stationId: 21207, label: 'Verdier - Republique', velibGraph: false, keepVelibHistory: true,showUpdateAge: false},
                                ],
                        },
		},
		{
    			module: "MMM-NameDay",
    			position: "top_right", // You can change this to your desired position.
    			config: {
        		//Here you can insert options listed below.
//				mode: "today",
//				country: "fr",
        		}
		},

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
