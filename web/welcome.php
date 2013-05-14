<!DOCTYPE Html>
<html lang="en">
<head><title>Loging in</title>
<script type="text/javascript">
	localStorage.lname = "<?php echo $_POST["name"]?>";
	function f1()
	{
		if(document.img1.alt == "Sunset")
		{
			document.img1.alt = "Winter";
			document.img1.src = "/res/Winter.jpg";
		}
		else
		{
			document.img1.alt = "Sunset";
			document.img1.src = "/res/Sunset.jpg";
		}
	}
</script></head>
	<body>
		<?php 
			$con = odbc_connect('ashish','ashish','pass');
			$n = $_POST["name"];
			$sql = "Select * from tbl";
			$p = $_POST["pass"];
			$res = odbc_exec($con,$sql);
			$dbpass = "";
			while(odbc_fetch_row($res))
			{
			$dbpass = odbc_result($res,"password");
			}
			odbc_close();
			echo $n . " " . $p . " " . $dbpass. " " . $sql;
			$dt = $_POST["dt"];
			if($p == $dbpass)
			{
				echo "Welcome ".$n;
				
			}
			else
			{
				echo "Wrong username or password";
			}
			echo "<br>".$dt;
		?>
		<form name="frm" action="working.php" method="post">
			<input type="submit" value ="work"/>
		</form>
		<img name = "img1" src="/res/Sunset.jpg" alt = "Sunset"  onmouseover="f1()" height="200" width="200"/>
	</body>
</html>