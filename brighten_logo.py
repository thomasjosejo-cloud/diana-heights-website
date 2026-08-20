from PIL import Image

def brighten_logo(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # item is (R, G, B, A)
        # If the pixel is mostly opaque
        if item[3] > 50:
            # If the pixel is very dark (black/dark gray text)
            if item[0] < 80 and item[1] < 80 and item[2] < 80:
                # Turn it pure white
                newData.append((255, 255, 255, item[3]))
            else:
                newData.append(item)
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

brighten_logo('public/assets/logo/logo_transparent.png', 'public/assets/logo/logo_transparent.png')
print("Successfully brightened dark text in logo.")
