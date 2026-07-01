const sharp = require('sharp');

async function createFavicon() {
  console.log('🎨 Creando favicon...');

  // Favicon 32x32 (estándar)
  await sharp('./public/img/logo.png')
    .resize(32, 32)
    .toFile('./public/favicon.ico');
  console.log('✅ favicon.ico creado (32x32)');

  // Apple touch icon 180x180
  await sharp('./public/img/logo.png')
    .resize(180, 180)
    .toFile('./public/apple-touch-icon.png');
  console.log('✅ apple-touch-icon.png creado (180x180)');

  // Favicon 16x16
  await sharp('./public/img/logo.png')
    .resize(16, 16)
    .toFile('./public/favicon-16x16.png');
  console.log('✅ favicon-16x16.png creado');

  // Favicon 32x32
  await sharp('./public/img/logo.png')
    .resize(32, 32)
    .toFile('./public/favicon-32x32.png');
  console.log('✅ favicon-32x32.png creado');

  console.log('🎉 ¡Favicons creados exitosamente!');
}

createFavicon().catch(console.error);
