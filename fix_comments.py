import os
import re

app_dir = 'c:/Users/Thoma/Desktop/Diana Website/src/app'

# Find all .js files in src/app recursively
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.js'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # Replace HTML comments <!-- ... --> with JSX comments {/* ... */}
            content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content, flags=re.DOTALL)

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)

print("Fixed JSX comments!")
