import json
import re
from pathlib import Path

html_path = Path('/home/ubuntu/browser_html/youtube_com__CartoDataTV_1777916699944.html')
html = html_path.read_text(errors='ignore')

watch_ids = []
for m in re.finditer(r'(?:watch\?v=|\\"videoId\\":\\")([A-Za-z0-9_-]{11})', html):
    vid = m.group(1)
    if vid not in watch_ids:
        watch_ids.append(vid)

# Capture title contexts around video IDs and common YouTube title fields.
items = []
for vid in watch_ids:
    idx = html.find(vid)
    ctx = html[max(0, idx-2500): idx+2500]
    titles = re.findall(r'"title"\s*:\s*\{\s*"runs"\s*:\s*\[\s*\{\s*"text"\s*:\s*"(.*?)"', ctx)
    simple_titles = re.findall(r'"title"\s*:\s*"(.*?)"', ctx)
    title = ''
    for candidate in titles + simple_titles:
        candidate = candidate.encode('utf-8', 'ignore').decode('unicode_escape', 'ignore')
        if candidate and len(candidate) > 8 and candidate not in ('CartoDataTV', 'YouTube'):
            title = candidate
            break
    if 'cartomorfosis' in ctx.lower() or 'cartomorofosis' in ctx.lower() or 'El Salvador Maps' in ctx:
        items.append({
            'video_id': vid,
            'url': f'https://www.youtube.com/watch?v={vid}',
            'thumbnail': f'https://i.ytimg.com/vi/{vid}/hqdefault.jpg',
            'context_title': title,
        })

print(json.dumps(items[:12], ensure_ascii=False, indent=2))
