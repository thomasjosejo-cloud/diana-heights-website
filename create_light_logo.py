from PIL import Image, ImageFilter

def create_light_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # If pixel is opaque and dark (black text), turn it pure white
        if item[3] > 50 and item[0] < 80 and item[1] < 80 and item[2] < 80:
            newData.append((255, 255, 255, item[3]))
        else:
            newData.append(item)

    img.putdata(newData)
    
    # Save the light logo
    img.save(output_path, "PNG")

create_light_logo('public/assets/logo/logo_transparent.png', 'public/assets/logo/logo_light.png')
print("Successfully created logo_light.png")
