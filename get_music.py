import os
import re
songs = os.listdir("./static/music_data/songs")
print(songs)
with open("./static/js/player.js", "r", encoding="utf-8") as f:
    content = f.read()
with open("./static/js/player.js", "w", encoding="utf-8") as f:
    f.write(re.sub("music_data=(\[[\s\S]+?\])", f"music_data={str(songs)}", content))
