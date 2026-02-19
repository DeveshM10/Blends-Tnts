import urllib.request
import sys

url = "https://upload.wikimedia.org/wikipedia/commons/e/ee/View_of_Lok_Sabha_chamber_in_the_New_Parliament_building%2C_New_Delhi.jpg"
filename = "public/images/jsp-official.jpg"

opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36')]
urllib.request.install_opener(opener)

try:
    urllib.request.urlretrieve(url, filename)
    print(f"Successfully downloaded to {filename}")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
