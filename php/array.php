<?php
$colors = array('red', 'blue', 'green','yellow','pink');

foreach ($colors as &$color) {
    $color = strtoupper($color);
	 echo "Do you like $color ?\n";
}
unset($color);
echo "<br>";
foreach ($colors as $color) {
    echo "Do you like $color ?\n";
}
echo "<br>";

foreach ($colors as $color1=>$value1) {
    echo "Do you like $color1=>$value1 ?\n";
}

echo "<br>";
$string = 'cup';
$name = 'coffee';
$str = 'This is a $string with my $name in it.';
echo $str. "\n";
echo "\$str = \"$str\";";

echo "<br>";
eval("\$str = \"$str\";");
echo $str. "\n";
echo "<br>";

$foo = "4jkjkl" ;
$foo = 2.0+(boolean)$foo;
echo $foo;

echo "<br>";

$double=function($a){
		return $a*2;
		};
$numbers = range(1,5);
print implode(" ",$numbers);
echo "<br>";
$new_number = array_map($double,$numbers);
print implode(" ",$new_number);

/*
$double = function($a) {
    return $a * 2;
};

// This is our range of numbers
$numbers = range(1, 5);

// Use the closure as a callback here to 
// double the size of each element in our 
// range
$new_numbers = array_map($double, $numbers);

print implode(' ', $new_numbers);
*/
?>