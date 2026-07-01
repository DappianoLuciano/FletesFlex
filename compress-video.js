const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegPath);

const inputVideo = './public/img/mudanza-video.mp4';
const outputVideo = './public/img/mudanza-video-compressed.mp4';

console.log('🎬 Comprimiendo video...');
console.log(`📁 Tamaño original: ${(fs.statSync(inputVideo).size / 1024 / 1024).toFixed(2)} MB`);

ffmpeg(inputVideo)
  .outputOptions([
    '-c:v libx264',           // Codec H.264
    '-crf 28',                // Calidad (18-28, menor = mejor calidad)
    '-preset medium',         // Balance velocidad/compresión
    '-c:a aac',               // Audio AAC
    '-b:a 128k',              // Bitrate audio
    '-vf scale=720:-2',       // Ancho 720px (HD), altura automática
    '-movflags +faststart'    // Optimizado para web
  ])
  .on('progress', (progress) => {
    if (progress.percent) {
      console.log(`⏳ Progreso: ${Math.round(progress.percent)}%`);
    }
  })
  .on('end', () => {
    const newSize = (fs.statSync(outputVideo).size / 1024 / 1024).toFixed(2);
    const originalSize = (fs.statSync(inputVideo).size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - fs.statSync(outputVideo).size / fs.statSync(inputVideo).size) * 100).toFixed(1);

    console.log(`\n✅ ¡Video comprimido exitosamente!`);
    console.log(`📊 ${originalSize}MB → ${newSize}MB (${reduction}% reducción)`);
    console.log(`📝 Archivo: ${outputVideo}`);
  })
  .on('error', (err) => {
    console.error('❌ Error:', err.message);
  })
  .save(outputVideo);
