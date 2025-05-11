const fs = require('fs');
const path = require('path');

function updateIndexImages() {
    try {
        const indexFilePath = path.join(__dirname, 'index.html');
        let content = fs.readFileSync(indexFilePath, 'utf8');
        
        // Replace image extensions in background-image URLs
        content = content.replace(/(url\(['"]?Onyx\/[^'"\)]+)\.(jpg|jpeg|png)(['"]?\))/g, '$1.webp$3');
        
        // Replace image extensions in img src attributes
        content = content.replace(/(src=["']Onyx\/[^"']+)\.(jpg|jpeg|png)(["'])/g, '$1.webp$3');
        
        // Write the updated content back to the file
        fs.writeFileSync(indexFilePath, content, 'utf8');
        console.log('Successfully updated image paths in index.html!');
    } catch (error) {
        console.error('Error updating image paths:', error);
    }
}

updateIndexImages(); 