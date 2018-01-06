#!/bin/bash

# Build JS
java -jar tools/closure-compiler-v20171203.jar --compilation_level ADVANCED_OPTIMIZATIONS --js src/game.js --js src/audio.js > game.min.js

# Build CSS
java -jar tools/closure-stylesheets.jar --allow-unrecognized-properties src/game.css > game.min.css

# Build index.html
# 1) Start HTML header
cat > index.html << EOL
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=1365, height=768, initial-scale=0.5, minimum-scale=0.1, maximum-scale=10.0"/>
<title>Taktyka</title>
<style>
EOL

# 2) Append minified CSS
cat game.min.css >> index.html

# 3) Append more HTML
cat >> index.html << EOL
</style>
</head>
<body bgcolor="#000">
<div id="w">
<div id="ti">
<h1><span class="tb">T</span>aktyka</h1>
<h3><a href="javascript:hideTitle()">New Game</a></h3>
<h3><a href="help.html" target="_blank">Help</a></h3>
</div>
<div class="cp"></div>
<table id="t"></table>
<div id="ai">Waiting for enemy...</div>
<div id="go"></div>
</div>
<div id="tt"></div>
</body>
<script>
EOL

# 4) Append minified JS
cat game.min.js >> index.html

# 5) Append HTML footer
cat >> index.html << EOL
</script>
EOL

# Delete temp files
rm game.min.js
rm game.min.css
