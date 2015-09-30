+++
title = "Video"
weight = -1
categories = [ "video" ]
tags = [ "such move", "very html5", "much animation", "wow" ]
video_mp4 = "/vid/vid_480x320.mp4"
video_webm = "/vid/vid_480x320.webm"
video_ogv = "/vid/vid_480x320.ogv"
video_3gp = "/vid/vid_352x288.3gp"
video_fallback = "/img/car.jpg"
+++

Videos can be provided via:

```
video_mp4 = "/vid/vid_480x320.mp4"
video_webm = "/vid/vid_480x320.webm"
video_ogv = "/vid/vid_480x320.ogv"
video_3gp = "/vid/vid_352x288.3gp"
video_fallback = "/img/car.jpg"
```

Each value is optional. If the fallback image is provided, it will be used
as both the poster of the video and the fallback if the browser does not
support HTML5 video.

You can use the partial for a video via:

```
.Scratch.Set "class" "some extra CSS classes on video tag"
{{ partial "extra/video.html" . }}
```

