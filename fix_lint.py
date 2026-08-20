import os
import re

app_dir = 'c:/Users/Thoma/Desktop/Diana Website/src/app'

# These are the files with unescaped entities according to the lint log
# We will just do a global replace for common unescaped entities outside of tags
def escape_entities(match):
    text = match.group(0)
    # Don't replace inside tags
    if text.startswith('<') and text.endswith('>'):
        return text
    
    # Replace ' with &apos;
    text = text.replace("'", "&apos;")
    # Replace " with &quot; (only if it's not part of an attribute, which is hard to distinguish without a real parser,
    # but we can assume text outside of < > is safe.
    # Actually, a simpler way is to just find specific files and lines, but regex works if we only replace text outside < >
    return text

# A simple regex to find text outside of HTML tags: >([^<]+)<
def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find > text < and replace ' with &apos;
    # We must be careful not to break JSX expressions { ... }
    
    # Let's just use Next.js's built-in lint fix!
    pass

# We can just run npx eslint --fix src/app/**/*.js
