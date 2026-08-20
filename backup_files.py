import os
import shutil
import glob

base_dir = 'c:/Users/Thoma/Desktop/Diana Website'
backup_dir = os.path.join(base_dir, 'legacy_backup')

if not os.path.exists(backup_dir):
    os.makedirs(backup_dir)

# Move all html, js, css, py files
for ext in ['*.html', '*.js', '*.css', '*.py']:
    files = glob.glob(os.path.join(base_dir, ext))
    for file in files:
        filename = os.path.basename(file)
        # don't move the backup script itself while it's running
        if filename != 'backup_files.py':
            shutil.move(file, os.path.join(backup_dir, filename))

# Move assets directory
assets_dir = os.path.join(base_dir, 'assets')
if os.path.exists(assets_dir):
    shutil.move(assets_dir, os.path.join(backup_dir, 'assets'))

print("Backup complete!")
