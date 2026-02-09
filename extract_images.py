import re
import base64
import os
import sys

def extract_images(html_file, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find data URI images
    pattern = re.compile(r'data:image/(?P<ext>[^;]+);base64,(?P<data>[A-Za-z0-9+/=]+)')
    
    count = 0
    for match in pattern.finditer(content):
        ext = match.group('ext')
        data = match.group('data')
        
        if len(data) < 5000: # Skip icons/small stuff
            continue
            
        count += 1
        img_data = base64.b64decode(data)
        
        filename = f"extracted_{count}.{ext}"
        filepath = os.path.join(output_dir, filename)
        
        with open(filepath, 'wb') as f_out:
            f_out.write(img_data)
        print(f"Extracted {filename} ({len(img_data)} bytes)")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python extract.py <html_file> <output_dir>")
    else:
        extract_images(sys.argv[1], sys.argv[2])
