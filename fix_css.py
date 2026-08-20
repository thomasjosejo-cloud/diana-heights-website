filepath = 'c:/Users/Thoma/Desktop/Diana Website/src/app/globals.css'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("url('assets/", "url('/assets/")
content = content.replace('url("assets/', 'url("/assets/')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("CSS paths fixed!")
