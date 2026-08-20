import os

base_dirs = ['c:/Users/Thoma/Desktop/Diana Website/src/app', 'c:/Users/Thoma/Desktop/Diana Website/src/components']

for d in base_dirs:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.js') or file.endswith('.jsx'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content.replace('src="assets/', 'src="/assets/')
                new_content = new_content.replace("src='/assets/", "src='/assets/") # Just in case single quotes

                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)

print("Image paths fixed!")
