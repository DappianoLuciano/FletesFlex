const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = './public/img';
const quality = 80; // Calidad (1-100)
const maxWidth = 1200; // Ancho máximo

async function compressImages() {
  const files = fs.readdirSync(imgDir);
  const jpgFiles = files.filter(f => f.match(/trabajo\d+\.jpg$/));

  console.log(`📸 Comprimiendo ${jpgFiles.length} imágenes...`);

  for (const file of jpgFiles) {
    const inputPath = path.join(imgDir, file);
    const outputPath = path.join(imgDir, file.replace('.jpg', '-optimized.jpg'));

    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

    await sharp(inputPath)
      .resize(maxWidth, null, { withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);

    console.log(`✅ ${file}: ${sizeMB}MB → ${newSizeMB}MB (${reduction}% reducción)`);
  }

  console.log('\n🎉 ¡Compresión completada!');
  console.log('📝 Revisá las imágenes -optimized.jpg y si están bien, reemplazá las originales.');
}

compressImages().catch(console.error);
