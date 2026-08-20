import os
import shutil

base_dir = 'c:/Users/Thoma/Desktop/Diana Website'
next_dir = os.path.join(base_dir, 'next-app')

# 1. Move Next.js files to root
for item in os.listdir(next_dir):
    src = os.path.join(next_dir, item)
    dst = os.path.join(base_dir, item)
    if os.path.exists(dst):
        if os.path.isdir(dst):
            shutil.rmtree(dst)
        else:
            os.remove(dst)
    shutil.move(src, dst)

# 2. Delete empty next-app dir
os.rmdir(next_dir)

# 3. Move assets to public/assets
assets_src = os.path.join(base_dir, 'legacy_backup', 'assets')
public_assets_dst = os.path.join(base_dir, 'public', 'assets')

if not os.path.exists(os.path.join(base_dir, 'public')):
    os.makedirs(os.path.join(base_dir, 'public'))

if os.path.exists(assets_src):
    if os.path.exists(public_assets_dst):
        shutil.rmtree(public_assets_dst)
    shutil.copytree(assets_src, public_assets_dst)

print("Next.js project structured successfully at root!")
