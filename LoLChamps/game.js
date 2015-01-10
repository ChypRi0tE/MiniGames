var items =  [];
var found = 0;
var seconds = 0;
var allowInput = 0;
var foundItems = [];
var banana = 0;
var rowcount = 0;
var time = 0;

var current_game = "";

var games = new Object();

games["champions"] = [
"Name all 121 League of Legends champions in 10 minutes",
600,
[
	["Aatrox", 0],
	["Ahri", 0],
	["Akali", 0],
	["Alistar", 0],
	["Amumu", 0],
	["Anivia", 0],
	["Annie", 0],
	["Ashe", 0],
	["Azir", 0],
	["Blitzcrank", 0],
	["Brand", 0],
	["Braum", 0],
	["Caitlyn", 0],
	["Cassiopeia", 0],
	["Cho'gath", 0],
	["Corki", 0],
	["Darius", 0],
	["Diana", 0],
	["Dr. Mundo", 0],
	["Draven", 0],
	["Elise", 0],
	["Evelynn", 0],
	["Ezreal", 0],
	["Fiddlesticks", 0],
	["Fiora", 0],
	["Fizz", 0],
	["Galio", 0],
	["Gangplank", 0],
	["Garen", 0],
	["Gnar", 0],
	["Gragas", 0],
	["Graves", 0],
	["Hecarim", 0],
	["Heimerdinger", 0],
	["Irelia", 0],
	["Janna", 0],
	["Jarvan IV", 0],
	["Jax", 0],
	["Jayce", 0],
	["Jinx", 0],
	["Karma", 0],
	["Karthus", 0],
	["Kassadin", 0],
	["Katarina", 0],
	["Kayle", 0],
	["Kennen", 0],
	["Kha'Zix", 0],
	["Kog'Maw", 0],
	["LeBlanc", 0],
	["Lee Sin", 0],
	["Leona", 0],
	["Lissandra", 0],
	["Lucian", 0],
	["Lulu", 0],
	["Lux", 0],
	["Malphite", 0],
	["Malzahar", 0],
	["Maokai", 0],
	["Maitre Yi", 0],
	["Miss Fortune", 0],
	["Mordekaiser", 0],
	["Morgana", 0],
	["Nami", 0],
	["Nasus", 0],
	["Nautilus", 0],
	["Nidalee", 0],
	["Nocturne", 0],
	["Nunu", 0],
	["Olaf", 0],
	["Orianna", 0],
	["Pantheon", 0],
	["Poppy", 0],
	["Quinn", 0],
	["Rammus", 0],
	["Renekton", 0],
	["Rengar", 0],
	["Riven", 0],
	["Rumble", 0],
	["Ryze", 0],
	["Sejuani", 0],
	["Shaco", 0],
	["Shen", 0],
	["Shyvana", 0],
	["Singed", 0],
	["Sion", 0],
	["Sivir", 0],
	["Skarner", 0],
	["Sona", 0],
	["Soraka", 0],
	["Swain", 0],
	["Syndra", 0],
	["Talon", 0],
	["Taric", 0],
	["Teemo", 0],
	["Thresh", 0],
	["Tristana", 0],
	["Trundle", 0],
	["Tryndamere", 0],
	["Twisted Fate", 0],
	["Twitch", 0],
	["Udyr", 0],
	["Urgot", 0],
	["Varus", 0],
	["Vayne", 0],
	["Veigar", 0],
	["Vel'Koz", 0],
	["Vi", 0],
	["Viktor", 0],
	["Vladimir", 0],
	["Volibear", 0],
	["Warwick", 0],
	["Wukong", 0],
	["Xerath", 0],
	["Xin Zhao", 0],
	["Yasuo", 0],
	["Yorick", 0],
	["Zac", 0],
	["Zed", 0],
	["Ziggs", 0],
	["Zilean", 0],
	["Zyra", 0]
]];

games["countries"] = [
"Name all 194 UN-recognized countries in 10 minutes",
600,
[
    ["Afghanistan", 0],
    ["Albania", 0],
    ["Algeria", 0],
    ["Andorra", 0],
    ["Angola", 0],
    ["Antigua and Barbuda", 0],
    ["Argentina", 0],
    ["Armenia", 0],
    ["Australia", 0],
    ["Austria", 0],
    ["Azerbaijan", 0],
    ["Bahamas", 0],
    ["Bahrain", 0],
    ["Bangladesh", 0],
    ["Barbados", 0],
    ["Belarus", 0],
    ["Belgium", 0],
    ["Belize", 0],
    ["Benin", 0],
    ["Bhutan", 0],
    ["Bolivia", 0],
    ["Bosnia and Herzegovina", 0],
    ["Botswana", 0],
    ["Brunei", 0],
    ["Bulgaria", 0],
    ["Burkina Faso", 0],
    ["Burundi", 0],
    ["Brazil", 0],
    ["Cambodia", 0],
    ["Cameroon", 0],
    ["Canada", 0],
    ["Cape Verde", 0],
    ["Central African Republic", 0],
    ["Chad", 0],
    ["Chile", 0],
    ["China", 0], 
    ["Colombia", 0],
    ["Comoros", 0],
    ["Costa Rica", 0],
    ["Croatia", 0],
    ["Cuba", 0],
    ["Cyprus", 0],
    ["Czech Republic", 0],
    ["Democratic Republic of the Congo", 0],
    ["Denmark", 0],
    ["Djibouti", 0],
    ["Dominica", 0],
    ["Dominican Republic", 0],
    ["East Timor", 0],
    ["Ecuador", 0],
    ["Egypt", 0],
    ["El Salvador", 0],
    ["Equatorial Guinea", 0],
    ["Eritrea", 0],
    ["Estonia", 0],
    ["Ethiopia", 0],
    ["Fiji", 0],
    ["Finland", 0],
    ["France", 0],
    ["Gabon", 0],
    ["Gambia", 0],    
    ["Georgia", 0],
    ["Germany", 0],
    ["Ghana", 0],
    ["Greece", 0],
    ["Grenada", 0],
    ["Guatemala", 0],
    ["Guinea", 0],
    ["Guinea-Bissau", 0],
    ["Guyana", 0],
    ["Haiti", 0],
    ["Honduras", 0],
    ["Hungary", 0],
    ["Iceland", 0],
    ["India", 0],
    ["Indonesia", 0],
    ["Iran", 0],
    ["Iraq", 0],
    ["Ireland", 0],
    ["Israel", 0],
    ["Italy", 0],
    ["Ivory Coast", 0],
    ["Jamaica", 0],
    ["Japan", 0],
    ["Jordan", 0],
    ["Kazakhstan", 0],
    ["Kenya", 0],
    ["Kiribati", 0],
    ["Kosovo", 0],
    ["Kuwait", 0],
    ["Kyrgyzstan", 0],
    ["Laos", 0],
    ["Latvia", 0],
    ["Lebanon", 0],
    ["Lesotho", 0],
    ["Liberia", 0],
    ["Libya", 0],
    ["Liechtenstein", 0],
    ["Lithuania", 0],
    ["Luxembourg", 0],
    ["Macedonia", 0],
    ["Madagascar", 0],
    ["Malawi", 0],
    ["Malaysia", 0],
    ["Maldives", 0],
    ["Mali", 0],
    ["Malta", 0],
    ["Marshall Islands", 0],
    ["Mauritania", 0],
    ["Mauritius", 0],
    ["Mexico", 0],
    ["Micronesia", 0],
    ["Moldova", 0],
    ["Monaco", 0],
    ["Mongolia", 0],
    ["Montenegro", 0],
    ["Morocco", 0],
    ["Mozambique", 0],
    ["Myanmar", 0],
    ["Namibia", 0],
    ["Nauru", 0],
    ["Nepal", 0],
    ["Netherlands", 0],
    ["New Zealand", 0],
    ["Nicaragua", 0],
    ["Niger", 0],
    ["Nigeria", 0],
    ["North Korea", 0],
    ["Norway", 0],
    ["Oman", 0],
    ["Pakistan", 0],
    ["Palau", 0],
    ["Papua New Guinea", 0],
    ["Paraguay", 0],
    ["Panama", 0],
    ["Peru", 0],
    ["Philippines", 0],
    ["Poland", 0],
    ["Portugal", 0],
    ["Qatar", 0],
    ["Republic of the Congo", 0],
    ["Romania", 0],
    ["Russia", 0],
    ["Rwanda", 0],
    ["Saint Lucia", 0],
    ["Saint Kitts and Nevis", 0],
    ["Saint Vincent and the Grenadines", 0],
    ["Samoa", 0],
    ["San Marino", 0],
    ["Sao Tome and Principe", 0],
    ["Saudi Arabia", 0],
    ["Senegal", 0],
    ["Serbia", 0],
    ["Seychelles", 0],
    ["Sierra Leone", 0],
    ["Singapore", 0],
    ["Slovakia", 0],
    ["Slovenia", 0],
    ["Solomon Islands", 0],
    ["Somalia", 0],
    ["South Africa", 0],
    ["South Korea", 0],
    ["Southern Sudan", 0],
    ["Spain", 0],
    ["Sri Lanka", 0],
    ["Sudan", 0],
    ["Suriname", 0],
    ["Swaziland", 0],
    ["Sweden", 0],
    ["Switzerland", 0],
    ["Syria", 0],
    ["Tajikistan", 0],
    ["Tanzania", 0],
    ["Thailand", 0],
    ["Togo", 0],
    ["Tonga", 0],
    ["Trinidad and Tobago", 0],
    ["Tunisia", 0],
    ["Turkey", 0],
    ["Turkmenistan", 0],
    ["Tuvalu", 0],
    ["Uganda", 0],
    ["Ukraine", 0],
    ["United Arab Emirates", 0],
    ["United Kingdom", 0],
    ["United States", 0],
    ["Uruguay", 0],
    ["Uzbekistan", 0],
    ["Vanuatu", 0],
    ["Venezuela", 0],
    ["Vietnam", 0],
    ["Yemen", 0],
    ["Zambia", 0],
    ["Zimbabwe", 0]
]];


String.prototype.trim = function ()
{
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
}

function setGame(gameID)
{
    banana++;
    current_game = gameID + banana;
    var game = games[gameID];
    foundItems = [];
    items = game[2];
    found = 0;
    seconds = game[1];
    allowInput = 1;
    
    for (var i = 0; i < items.length; ++i)
    {
        items[i][1] = 0;
    }
    document.getElementById("text_input").value = "";
    document.getElementById("so_far").innerHTML = "";
 //   document.getElementById("description").innerHTML = game[0];
    document.getElementById("remaining").innerHTML = "";
    window.setTimeout("play('" + gameID + banana + "')", 0);
    document.getElementById("text_input").focus();
}

function play(this_game)
{
    if (current_game != this_game) {
    //window.alert("works!");
    return;
    }
    
    if (allowInput == 0) return;
    
    var disp_minutes = Math.floor(seconds / 60);
    var disp_seconds = seconds % 60;
    if (seconds % 60 < 10) disp_seconds = "0" + disp_seconds;
    document.getElementById("timer").innerHTML = disp_minutes + ":" + disp_seconds;
    document.getElementById("num_left").innerHTML = (items.length - found) + " left";
	document.getElementById("starter").innerHTML = "Click to restart";
	document.getElementById("score").style.display = 'inline';

    if (seconds == 0)
    {
        window.alert("Time's up! Let's see what you missed...");
		document.getElementById("starter").style.color = 'red';
        allowInput = 0;
		addScoreFail()
		
        var left = "";
        var keke = 0;
        for (var i = 0; i < items.length; ++i)
        {
	    if (items[i][1] == 0)
	    {
		if (keke > 0) left += ", ";
		left += items[i][0];
		keke = 1;
	    }
        }
        document.getElementById("remaining").innerHTML = left;
        
    }
    else
    {
        --seconds;
        window.setTimeout("play('" + this_game + "')", 1000);
    }
}

function check_input()
{
    var check_this = document.getElementById("text_input").value.toLowerCase().trim();
    
    if (allowInput == 0)
    {
        return;
    }
    
    for (var i = 0; i < items.length; ++i)
    {
        if (items[i][1] == 0)
        {
            if (items[i][0].toLowerCase() == check_this)
            {
                items[i][1] = 1;
                ++found;
				document.getElementById("score").innerHTML = '	Score : ' + found + ' - ';
                foundItems[foundItems.length] = items[i][0];
                foundItems.sort();
                document.getElementById("so_far").innerHTML = foundItems.join(", ");
                document.getElementById("text_input").value = "";
                document.getElementById("num_left").innerHTML = (items.length - found) + " left";
                break;
            }
        }
    }
    
    if (found == items.length)
    {
		time = seconds;
        allowInput = 0;
        window.alert("You did it!");
		document.getElementById("starter").style.color = 'red';
		addScoreSuccess();
    }
}

function addScoreFail()
{
	var highscore = document.getElementById("highscores")
	var i = 1;
	var nextrow = 0;
	while (i != highscore.rows.length) {
		if (found > highscore.rows[i].cells[0].innerHTML) {break;}
		i++;
	}
	var row = highscore.insertRow(i);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
		cell1.innerHTML = found;
		cell2.innerHTML = "0:00";
	rowcount++;
	if (rowcount <= 3) {highscore.deleteRow(4);}
}

function addScoreSuccess()
{
	var highscore = document.getElementById("highscores")
	var i = 1;
	var nextrow = 0;
	while (i != highscore.rows.length) {
		if (document.getElementById("timer").innerHTML > highscore.rows[i].cells[1].innerHTML) {break;}
		i++;
	}
	var row = highscore.insertRow(i);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
		cell1.innerHTML = found;
		cell2.innerHTML = document.getElementById("timer").innerHTML;
	rowcount++;
	if (rowcount <= 3) {highscore.deleteRow(4);}
}