from PIL import Image

def flood_fill_transparent(input_path, output_path, tolerance=30):
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size

    # Start BFS from edges
    queue = []
    visited = set()

    def is_bg(r, g, b, a):
        if a == 0: return True
        # Background is close to white (handles JPEG compression artifacts)
        return r > 255 - tolerance and g > 255 - tolerance and b > 255 - tolerance

    # Add all edge pixels that look like background
    for x in range(width):
        if is_bg(*pixels[x, 0]):
            queue.append((x, 0))
            visited.add((x, 0))
        if is_bg(*pixels[x, height-1]):
            queue.append((x, height-1))
            visited.add((x, height-1))
            
    for y in range(height):
        if is_bg(*pixels[0, y]):
            queue.append((0, y))
            visited.add((0, y))
        if is_bg(*pixels[width-1, y]):
            queue.append((width-1, y))
            visited.add((width-1, y))

    # BFS to find all contiguous background
    while queue:
        x, y = queue.pop(0)
        # Make transparent
        pixels[x, y] = (255, 255, 255, 0)
        
        # Check neighbors
        for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                if is_bg(*pixels[nx, ny]):
                    visited.add((nx, ny))
                    queue.append((nx, ny))

    # Crop out the transparent bounding box
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")

flood_fill_transparent('public/assets/logo/logo.jpeg', 'public/assets/logo/logo_transparent.png')
print("Successfully removed background using flood fill.")
