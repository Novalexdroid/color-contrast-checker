
    function hexToRgb(hex) {
        if (hex.startsWith('#')) {
            hex = hex.slice(1); 
        }

        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        return { r, g, b };
    }


function getLuminance(color) {
        const rgb = hexToRgb(color);
        const r = rgb.r / 255;
        const g = rgb.g / 255;
        const b = rgb.b / 255;

        const adjustedR = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
        const adjustedG = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
        const adjustedB = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

        return 0.2126 * adjustedR + 0.7152 * adjustedG + 0.0722 * adjustedB;
    }


    function calculateContrastRatio(textColor, bgColor) {
        const luminanceText = getLuminance(textColor);
        const luminanceBg = getLuminance(bgColor);

        const lighter = Math.max(luminanceText, luminanceBg);
        const darker = Math.min(luminanceText, luminanceBg);

        return (lighter + 0.05) / (darker + 0.05);
    }


    function checkContrast() {
        const textColor = document.getElementById('textColor').value;
        const bgColor = document.getElementById('bgColor').value;
const contrastRatio = calculateContrastRatio(textColor, bgColor);
        const contrastResult = document.getElementById('contrastResult');
        const passFail = document.getElementById('passFail');


        contrastResult.textContent = `Contrast Ratio: ${contrastRatio.toFixed(2)}`;

 
        if (contrastRatio >= 7) {
            passFail.textContent = 'Passes AAA';
            passFail.className = 'pass';
        } else if (contrastRatio >= 4.5) {
            passFail.textContent = 'Passes AA';
            passFail.className = 'pass';
        } else {
            passFail.textContent = 'Fails WCAG AA';
            passFail.className = 'fail';
        }

  
        document.getElementById('textBox').style.backgroundColor = textColor;
        document.getElementById('bgBox').style.backgroundColor = bgColor;
    }

    document.getElementById('textColor').addEventListener('input', checkContrast);
    document.getElementById('bgColor').addEventListener('input', checkContrast);

    checkContrast();