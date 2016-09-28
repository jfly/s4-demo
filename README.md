# s4-demo

## Misc

- `youtube-dl -o video https://www.youtube.com/watch?v=wIvHw17vuGU` - Create a video.mp4 file.

## Run

- `ruby -run -ehttpd . -p8000` - Starts up a webserver accessible at http://localhost:8000

## How to compress videos

- Slightly modified two pass technique from <http://www.mpabo.com/2014/12/14/ffmpeg-and-x264-encoding-guide/>: `ffmpeg -y -i video.mp4 -c:v libx264 -preset medium -b:v 555k -pass 1 -an -f mp4 /dev/null && ffmpeg -i video.mp4 -c:v libx264 -preset medium -b:v 555k -pass 2 -c:a aac -b:a 128k output.mp4`
