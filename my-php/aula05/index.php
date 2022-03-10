<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>testes fodas</title>
    <style>
        #container > div > h1{
            margin-bottom: 20px;
        }
    </style>
</head>
<body>    
<div id="container">
    <h1 id="hotTitle">Operadores aritimeticos com php &#x1F418;</h1>
    <div>
        <?php
            
            $n1 = $_GET["a"];
            $n2 = $_GET["b"];
            echo "<h1>Valores recebidos: $n1 e $n2</h1>";
            echo "$n1 + $n2 = ".($n1 + $n2);
            echo "<br/>$n1 - $n2 = ".($n1 - $n2);
            echo "<br/>$n1 * $n2 = ".($n1 * $n2);
            echo "<br/>$n1 / $n2 = ".($n1 / $n2);
            echo "<br/>$n1 % $n2 = ".($n1 % $n2);
            echo "<br/>A media de $n1 e $n2 é = ".(($n1 + $n2) / 2);

            echo "o valor absoluto de $n1 é ".abs($n1);
        ?>
    </div>
</div>
</body>
</html>