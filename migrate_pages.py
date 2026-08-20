import os
import re

def style_to_jsx(match):
    style_str = match.group(1)
    # Split by semicolon
    rules = style_str.split(';')
    jsx_style = {}
    for rule in rules:
        if ':' in rule:
            key, val = rule.split(':', 1)
            key = key.strip()
            val = val.strip()
            # Convert kebab-case to camelCase
            parts = key.split('-')
            camel_key = parts[0] + ''.join(word.capitalize() for word in parts[1:])
            jsx_style[camel_key] = val
    # Format as JSON-like string for JSX
    style_json = "{" + ", ".join([f"'{k}': '{v}'" for k, v in jsx_style.items()]) + "}"
    return f"style={{{style_json}}}"

def html_to_jsx(html_content, is_home=False):
    # Extract main content (everything between header and footer)
    # This regex looks for </header> and <footer>
    start = html_content.find('</header>')
    end = html_content.rfind('<footer')
    if start != -1 and end != -1:
        html_content = html_content[start+9:end].strip()

    # Replace class with className
    html_content = html_content.replace('class="', 'className="')
    # Replace for with htmlFor
    html_content = html_content.replace('for="', 'htmlFor="')
    
    # Close self closing tags
    html_content = re.sub(r'(<img[^>]*?[^/])>', r'\1 />', html_content)
    html_content = re.sub(r'(<input[^>]*?[^/])>', r'\1 />', html_content)
    html_content = html_content.replace('<br>', '<br />')
    html_content = html_content.replace('<hr>', '<hr />')

    # Convert inline styles
    html_content = re.sub(r'style="([^"]*)"', style_to_jsx, html_content)

    # Convert links
    html_content = html_content.replace('href="index.html"', 'href="/"')
    html_content = re.sub(r'href="([^"]+)\.html"', r'href="/\1"', html_content)

    # If it's the homepage, add the useEffect for the carousel
    if is_home:
        return f'''"use client";
import Link from 'next/link';
import {{ useEffect }} from 'react';

export default function Home() {{
    useEffect(() => {{
        const slides = document.querySelectorAll('.promo-slide');
        if (slides.length > 0) {{
            let currentSlide = 0;
            const interval = setInterval(() => {{
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }}, 4000);
            return () => clearInterval(interval);
        }}
    }}, []);

    return (
        <main>
            {html_content}
        </main>
    );
}}
'''
    else:
        return f'''import Link from 'next/link';

export default function Page() {{
    return (
        <main>
            {html_content}
        </main>
    );
}}
'''

base_dir = 'c:/Users/Thoma/Desktop/Diana Website'
legacy_dir = os.path.join(base_dir, 'legacy_backup')
app_dir = os.path.join(base_dir, 'src', 'app')

pages = [
    ('index.html', 'page.js'),
    ('about.html', 'about/page.js'),
    ('rooms.html', 'rooms/page.js'),
    ('facilities.html', 'facilities/page.js'),
    ('destinations.html', 'destinations/page.js'),
    ('gallery.html', 'gallery/page.js'),
    ('contact.html', 'contact/page.js'),
    ('booking.html', 'booking/page.js'),
]

for html_file, js_file in pages:
    with open(os.path.join(legacy_dir, html_file), 'r', encoding='utf-8') as f:
        html = f.read()
    
    is_home = (html_file == 'index.html')
    jsx = html_to_jsx(html, is_home)
    
    out_path = os.path.join(app_dir, js_file)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(jsx)

print("All pages migrated to Next.js JSX successfully!")
