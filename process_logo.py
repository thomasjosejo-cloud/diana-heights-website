from PIL import Image

def process_logo(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    # threshold for white background detection
    for item in datas:
        if item[0] > 220 and item[1] > 220 and item[2] > 220:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)

    img.putdata(newData)
    
    # Crop out the transparent bounding box so it fills the header perfectly
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")

process_logo('public/assets/logo/logo.jpeg', 'public/assets/logo/logo_transparent.png')
print("Successfully processed logo.")
