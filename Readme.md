# Simple Contrast Checker

This is a simple contrast checker tool built using HTML and JavaScript. It helps you to check the color contrast between two colors to ensure they meet accessibility standards.

The tool allows you to input two color values (hex or RGB) and calculates the contrast ratio between the background and text colors. The contrast ratio is then compared to the WCAG guidelines to ensure that the colors are accessible for users with visual impairments. 

## Features:
- Hex & RGB color input: You can enter colors in both hexadecimal (e.g., #ffffff) and RGB (e.g., rgb(255, 255, 255)) formats.
- Real-time contrast ratio calculation: As you input colors, the tool instantly calculates the contrast ratio.
- Accessibility check: The tool checks whether the contrast ratio meets the AA or AAA standards according to the WCAG (Web Content Accessibility Guidelines).
- Easy-to-use interface: With just a few clicks, users can quickly determine if their color choices are accessible.
  
## How to Use:
1. Enter the background color in the first color input box.
2. Enter the text color in the second color input box.
3. The contrast ratio will be displayed, and the tool will inform you whether the colors meet the accessibility standards.
4. Adjust the colors to get the best contrast ratio for readability.

## Example:
- Background Color: #000000 (black)
- Text Color: #ffffff (white)

This combination would yield a high contrast ratio of 21:1, which is optimal for accessibility.

Why is Contrast Important?
Ensuring good contrast between text and background is crucial for users with visual impairments, especially those with low vision or color blindness. The WCAG guidelines recommend certain contrast ratios to make content legible to a wider audience.

## WCAG Guidelines:
- AA Level: A contrast ratio of 4.5:1 for normal text and 3:1 for large text.
- AAA Level: A contrast ratio of 7:1 for normal text and 4.5:1 for large text.

By using this contrast checker, you can ensure that your website or application is more accessible to all users.

Code:
The tool is built using HTML, CSS, and JavaScript. It calculates the contrast ratio using the luminosity of the colors, following the WCAG formula.

- HTML: Structure of the tool, including color input fields and the result display.
- CSS: Simple styling for a user-friendly interface.
- JavaScript: Logic for calculating the contrast ratio and checking against the WCAG guidelines.

Feel free to use this tool in your projects and ensure that your web content is accessible to a wider audience!
 
---

## Key Features:
1. Contrast Ratio Calculation: Based on the luminosity of the colors, it calculates the contrast ratio between the background and text.
2. WCAG Guidelines: It helps you check if the contrast ratio meets the AA or AAA standards for accessibility.
3. Real-time Update: The contrast ratio is updated as soon as you change the color inputs.

This description will give the user a clear understanding of what the tool does, how to use it, and why it's important for accessibility.

Let me know if you need any further assistance!