const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'Travertine');
const targetDir = path.join(__dirname, 'Travertine', 'webp');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

async function convertToWebP() {
    try {
        const files = fs.readdirSync(sourceDir);
        
        for (const file of files) {
            // Skip if it's not an image file or if it's already a webp
            if (!['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) {
                continue;
            }

            const inputPath = path.join(sourceDir, file);
            const outputPath = path.join(targetDir, `${path.parse(file).name}.webp`);

            console.log(`Converting ${file} to WebP...`);
            
            await sharp(inputPath)
                .webp({ quality: 80 }) // You can adjust quality (0-100)
                .toFile(outputPath);
                
            console.log(`Successfully converted ${file} to WebP`);
        }
        
        console.log('All images have been converted successfully!');
    } catch (error) {
        console.error('Error during conversion:', error);
    }
}

convertToWebP(); 