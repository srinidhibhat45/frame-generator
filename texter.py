# import required classes
 
from PIL import Image, ImageDraw, ImageFont
 
# create Image object with the input image
 
image = Image.open('M-B.png')
 
# initialise the drawing context with
# the image object as background
 
draw = ImageDraw.Draw(image)

# create font object with the font file and specify
# desired size
 
font = ImageFont.truetype('Roboto-Bold.ttf', size=45)
 
# starting position of the message
 
(x, y) = (50, 50)
message = "Happy Birthday!"
color = 'rgb(0, 0, 0)' # black color
 
# draw the message on the background
 
draw.text((x, y), message, fill=color, font=font)
(x, y) = (150, 150)
name = 'Vinay'
color = 'rgb(255, 255, 255)' # white color
draw.text((x, y), name, fill=color, font=font)
 
# save the edited image
 
image.save('greeting_card.png')