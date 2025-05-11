const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'Marble');

function renameToWebP() {
    try {
        const files = fs.readdirSync(sourceDir);
        
        for (const file of files) {
            // Skip if it's not an image file or if it's already a webp
            if (!['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) {
                continue;
            }

            const oldPath = path.join(sourceDir, file);
            const newPath = path.join(sourceDir, `${path.parse(file).name}.webp`);

            console.log(`Renaming ${file} to ${path.basename(newPath)}...`);
            fs.renameSync(oldPath, newPath);
            console.log(`Successfully renamed ${file}`);
        }
        
        console.log('All images have been renamed successfully!');
    } catch (error) {
        console.error('Error during renaming:', error);
    }
}

function updateImagePaths() {
    try {
        // Update index.html
        const indexFilePath = path.join(__dirname, 'index.html');
        if (fs.existsSync(indexFilePath)) {
            let content = fs.readFileSync(indexFilePath, 'utf8');
            
            // Replace image extensions in background-image URLs
            content = content.replace(/(url\(['"]?Marble\/[^'"\)]+)\.(jpg|jpeg|png)(['"]?\))/g, '$1.webp$3');
            
            // Write the updated content back to the file
            fs.writeFileSync(indexFilePath, content, 'utf8');
            console.log('Successfully updated image paths in index.html!');
        }

        // Update onyx.html
        const onyxFilePath = path.join(__dirname, 'marble.html');
        if (fs.existsSync(onyxFilePath)) {
            let content = fs.readFileSync(onyxFilePath, 'utf8');
            
            // Replace image extensions in product objects
            content = content.replace(/(image:\s*"Marble\/[^"]+)\.(jpg|jpeg|png)"/g, '$1.webp"');
            
            // Replace image extensions in background-image URLs
            content = content.replace(/(url\(['"]?Marble\/[^'"\)]+)\.(jpg|jpeg|png)(['"]?\))/g, '$1.webp$3');
            
            // Write the updated content back to the file
            fs.writeFileSync(onyxFilePath, content, 'utf8');
            console.log('Successfully updated image paths in salt.html!');
        }
    } catch (error) {
        console.error('Error updating image paths:', error);
    }
}

renameToWebP();
updateImagePaths(); 