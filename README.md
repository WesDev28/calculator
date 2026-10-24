# Calulator Project - The Odin Project.

##Key Learning
The biggest lesson from this project was to keep application state in variables and treat the screen purely as output. My first solution did the reverse: it displayed the input on screen and then parsed the display to recover the numbers and operator. That tied my logic to the formatting of the text, so every change to the display required a matching change to the parsing. Storing the values separately and rendering them from that state gave me a single source of truth, which made the code simpler and much easier to debug.