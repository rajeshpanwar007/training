<?php
$file = fopen("test.txt","a+");

//some code to be executed
while(!feof($file))
  {
  echo fgets($file). "<br>";
  }
$colors = array('red', 'blue', 'green','yellow','pink');

foreach ($colors as &$color) {
    $color = strtoupper($color);
}

foreach ($colors as $color=>$value) {
    echo "Do you like $color=>$value ?\n";
}

echo "<br>";
echo <<<EOD
Example of string
spanning multiple lines
using heredoc syntax.
EOD;

/* More complex example, with variables. */
class foo
{
    var $foo;
    var $bar;

    function foo()
    {
        $this->foo = 'Foo';
        $this->bar = array('Bar1', 'Bar2', 'Bar3');
    }
}

$foo = new foo();
$name = 'MyName';

echo <<<EOT
My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should print a capital 'A': \x41
EOT;

echo "<br>";
$great = 'fantastic';
echo "This is {$great}";

echo "<br>";
class foo2 {
    var $bar = 'I am bar.';
}
$foo = new foo2();
$bar = 'bar';
$baz = array('foo', 'bar', 'baz', 'quux');
echo "{$foo->$bar}\n";
echo "{$foo->$baz[1]}\n";
fclose($file);
echo "<br>";
$foo = "10.0 pigs " + 1;  
echo "\$foo==$foo; type is " . gettype ($foo) . "<br />\n";

?>