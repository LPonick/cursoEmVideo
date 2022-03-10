<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>testes fodas</title>
</head>
<body>    
<div id="container">
    <h1 id="hotTitle">Aprendendo variaveis com php &#x1F418;</h1>
    <div>
        <?php
        $casado = false;
        $nome = "jonas";
        $idade = 23;
        echo"Olá senhor(a) ". $nome ." o seu login foi feito com sucesso.So favor ver se seus dados estao corretos.A sua idade é de $idade o senhor";
        if($casado == true)
        {
            echo"<p>o seunhor(a) esta casado(a)</p>";
        }
        else
        {
            echo"<p>o senhor(a) não esta casado(a)</p>";
        }
        ?>
    </div>
</div>
</body>
</html>