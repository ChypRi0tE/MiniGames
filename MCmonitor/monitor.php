<?php
//ini_set("display_errors", 1);
//ini_set("track_errors", 1);
//ini_set("html_errors", 1);
//error_reporting(E_ALL);

//The following script is tested only with servers running on Minecraft 1.7.

$SERVER_IP = "5.196.240.156"; //Insert the IP of the server you want to query. Query must be enabled in your server.properties file!
$SERVER_PORT = "25565"; //Insert the PORT of the server you want to ping. Needed to get the favicon, motd, players online and players max. etc
$QUERY_PORT = "25565"; //Port of query.port="" in your server.properties. Needed for the playerlist! Can be the same like the port or different

$HEADS = "3D"; //"normal" / "3D"
$SHOW_FAVICON = "on"; //"off" / "on"

$TITLE = "EpiTales Monitor";
$TITLE_BLOCK_ONE = "Informations";
$TITLE_BLOCK_TWO = "Players";

//You can either insert the DNS (eg. play.hivemc.com) OR the IP itself (eg. 187.23.123.21). 
//Note: port is not neccesary when running the server on default port, otherwise use it!

//End config

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$ping = json_decode(file_get_contents('http://api.minetools.eu/ping/' . $SERVER_IP . '/' . $SERVER_PORT . ''), true);
$query = json_decode(file_get_contents('http://api.minetools.eu/query/' . $SERVER_IP . '/' . $QUERY_PORT . ''), true);

//* DEBUG AREA
//var_dump($serverdata);
//echo "<br>";echo "<br>";
//var_dump($userlistserver);
//echo "<br>";echo "<br>";
//* DEBUG AREA

//Put the collected player information into an array for later use.
if(empty($ping['error'])) { 
	$version = $ping['version']['name'];
	$online = $ping['players']['online'];
	$max = $ping['players']['max'];
	$motd = $ping['description'];
	$favicon = $ping['favicon'];
}

if(empty($query['error'])) {
	$playerlist = $query['Playerlist'];
}
$array_list = $data_list[$SERVER_IP]['player']['list'];

$queryerror = "false";
if(isset($data_list['error']) || !empty($data_list['error']) ) {
	$queryerror = "true";
}

$haserror = "false";
if($data_general['status'] != "true") {
	$haserror = "true";
}

?>
<?php include('rcon.php'); ?>
<!DOCTYPE html>
<html>
	<head>
        <meta charset="utf-8">
        <title><?php echo htmlspecialchars($TITLE); ?></title>
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css">
    	<link href='http://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>
    	<link href="https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
    	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    	<script type="text/javascript" src="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
    	<script language="javascript">
   		jQuery(document).ready(function(){
 			$("[rel='tooltip']").tooltip();
     	});
		</script>
    	<style>
    	/*Custom CSS Overrides*/
    	body {
      		font-family: 'Lato', sans-serif !important;
    	}
    	</style>
    </head>
    <body>
	<div class="container">
        <h1><?php echo htmlspecialchars($TITLE); ?></h1><hr>       
		<div class="row">
			<div class="span4">
				<h3><?php echo htmlspecialchars($TITLE_BLOCK_ONE); ?></h3>
				<table class="table table-striped">
					<tbody>
						<tr>
							<td><b>IP</b></td>
							<td><?php echo $SERVER_IP; ?></td>
						</tr>
					<?php if(empty($ping['error'])) { ?>
						<tr>
							<td><b>Version</b></td>
							<td><?php echo $version; ?></td>
						</tr>
					<?php } ?>
					<?php if(empty($ping['error'])) { ?>
						<tr>
							<td><b>Players</b></td>
							<td><?php echo "".$online." / ".$max."";?></td>
						</tr>
					<?php } ?>
						<tr>
							<td><b>Status</b></td>
							<td><?php if(empty($ping['error'])) { echo "<i class=\"icon-ok-sign\"></i> Server is online"; } else { echo "<i class=\"icon-remove-sign\"></i> Server is offline";}?></td>
						</tr>
					<?php if(empty($ping['error'])) { ?>
					<?php if(!empty($favicon)) { ?>
					<?php if ($SHOW_FAVICON == "on") { ?>
						<tr>
							<td><b>Favicon</b></td>
							<td><img src='<?php echo $favicon; ?>' width="64px" height="64px" style="float:left;"/></td>
						</tr>
					<?php } ?>
					<?php } ?>
					<?php } ?>
						<tr>
							<td><b><?php echo htmlspecialchars($TITLE_BLOCK_TWO); ?></b></td>
							<td>
				<?php
				if($HEADS == "3D") {
					$url = "https://cravatar.eu/helmhead/";
				} else {
					$url = "https://cravatar.eu/helmavatar/";
				}

				if(empty($query['error'])) {
					if($playerlist != "null") { //is at least one player online? Then display it!
						foreach ($playerlist as $player) { ?>
							<a data-placement="top" rel="tooltip" style="display: inline-block;" title="<?php echo $player;?>">
							<img src="<?php echo $url.$player;?>/50" size="40" width="40" height="40" style="width: 40px; height: 40px; margin-bottom: 5px; margin-right: 5px; border-radius: 3px; "/></a>
				<?php	}
					} else {
						echo "<div class=\"alert\"> There are no players online at the moment!</div>";
					}
				} else {
					echo "<div class=\"alert\"> Query must be enabled in your server.properties file!</div>";
				} ?>							
							</td>
						</tr>
	<?php 
	$r = new rcon("5.196.240.156",25575,"ettasoeur42");
		//if (true) { 
		if ($r->Auth()) {
			$top = $r->rconCommand("balancetop");
			// $top = "§6Top balances (7/27/14 10:23 PM) §e ---- §6Balancetop §e--§6 Page §c1§6/§c2 §e---- §r§6Server Total:§c 7630§b epi§r §r1. hAYAAA§r, 2667§b epi§r §r2. ChypRiotE§r, 1657§b epi§r §r3. Lejendarm§r, 1147§b epi§r §r4. Heartgg, 579§b epi§r §r5. PyrithS, 501§b epi§r §r6. Zaotor§r, 125§b epi§r §r7. charlymcfly, 125§b epi§r §r8. Eydak, 100§b epi§r §6Type§c /balancetop 2 §6to read the next page. ";
			// $bottom = "§6Top balances (7/27/14 10:23 PM) §e ---- §6Balancetop §e--§6 Page §c2§6/§c2 §e---- §r9. moi, 100§b epi§r §r10. Globux, 100§b epi§r §r11. Epi_Chazz, 100§b epi§r §r12. blabla, 100§b epi§r §r13. _tak_, 100§b epi§r §r14. sweg, 100§b epi§r §r15. RedY2Craft, 100§b epi§r §r16. Kaikki_§r, 29§b epi§r §r17. Parmenion_CRAFT, 0§b epi§r";
			echo "<tr><td colspan=\"2\"><strong>Economie</strong> </td><td></tr>";
			get_rankings($top);
			
	}
	if ($r->Auth()) {
		$bottom = $r->rconCommand("balancetop 2");
		get_rankings($bottom);
		echo "<tr><td><strong>Total</strong></td><td>" . get_top($top) . " epi</td></tr>";
	}
?>
					</tbody>
				</table>
			</div>
			<div class="span8">
		<iframe src="http://5.196.240.156:8123/" width="100%" height="600">
			<p>Your browser does not support iframes.</p>
		</iframe>
			</div>
		</div>
		<div class="row">
			<iframe class="imgur-album" width="100%" height="550" frameborder="0" src="http://imgur.com/a/dChly/embed?background=f2f2f2&text=1a1a1a&link=4e76c9"></iframe>
		</div>
<div><iframe src="http://www.mtxserv.fr/viewer/teamspeak/43234" frameborder="0"  width="370" height="500" style="overflow-y: scroll;"></iframe></div>
	</div>
	<div>
	</div>
    <div>

	</div>
	</body>
</html>			