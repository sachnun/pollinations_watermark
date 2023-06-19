const express = require('express');
const axios = require('axios');
const sharp = require('sharp');

const app = express();
const port = 3000;

app.get('/image/:parameter', (req, res) => {
	const imageUrl = `https://image.pollinations.ai/prompt/${req.params.parameter}`;
	const cropHeight = 42;
	const watermarkPath = 'wm.png'; // Path ke file watermark, pastikan file tersebut ada di direktori yang sama dengan script ini

	axios({
		url: imageUrl,
		responseType: 'arraybuffer'
	}).then(response => {
		const imageBuffer = Buffer.from(response.data, 'binary');
		sharp(imageBuffer)
			.metadata()
			.then(metadata => {
				const imageWidth = metadata.width;
				const imageHeight = metadata.height;

				sharp(imageBuffer)
					.extract({ left: 0, top: 0, width: imageWidth, height: imageHeight - cropHeight })
					.composite([{ input: watermarkPath, gravity: 'northwest' }])
					.toBuffer()
					.then(croppedImageBuffer => {
						res.set('Content-Type', 'image/jpeg');
						res.send(croppedImageBuffer);
					})
					.catch(error => {
						console.error('Error occurred while cropping the image:', error);
						res.sendStatus(500);
					});

			})
			.catch(error => {
				console.error('Error occurred while retrieving image metadata:', error);
				res.sendStatus(500);
			});
	}).catch(error => {
		console.error('Error occurred while downloading the image:', error);
		res.sendStatus(500);
	});
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
