<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Congrats!</title>
    <link rel="stylesheet" href="app.css">
</head>
<body>
    <div class="container">
        <div id="end" class="flex-center flex-column"> 
            <h1 id="finalScore">0</h1>
            <form >
                <input type="text"
                 name="username"
                  id="username"
                   placeholder="username">
                <button type="submit"
                 class="btn"  
                  id="saveScoreBtn" 
                    onclick="saveHighScore(event)"
                    disabled>
                save
            </button>
            </form>
            <a href="game.php" target="blanc"  class="btn">Play Again</a>
            <a href="index.php" class="btn">Go Home</a>
            
        </div>
    </div>
    <script src="end.js"></script>
</body>
</html>