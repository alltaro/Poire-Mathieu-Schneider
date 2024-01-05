import os
import json

# Directory containing your images
# Use double backslashes or a raw string
image_directory = r"C:\Users\romeo\OneDrive\Documents\Lycée\Lycée_NSI\Poire Mathieu Schneider\scripts"

# Filter for JPEG files
image_files = [f for f in os.listdir(image_directory) if f.endswith(".png")]

# Save the list to a JSON file
json_file_path = os.path.join(image_directory, "fileNames.json")
with open(json_file_path, "w") as json_file:
    json.dump(image_files, json_file)

print(f"File names saved to {json_file_path}")
