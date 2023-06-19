# Pollinations Watermark

Pollinations Watermark is a Node.js application that generates watermarked images using the [Express](https://expressjs.com/) framework, [Axios](https://axios-http.com/) for making HTTP requests, and [Sharp](https://sharp.pixelplumbing.com/) for image processing. The application downloads an image from a given URL, crops it, and adds a watermark to the resulting image. This documentation provides an overview of the application's code structure and usage.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/sachnun/pollinations_watermark.git
   ```

2. Navigate to the project directory:

   ```shell
   cd pollinations_watermark
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

## Usage

1. Start the application:

   ```shell
   npm start
   ```

2. The server will start running on port 3000. You can access the root endpoint at `http://localhost:3000/`.

3. To generate a watermarked image, make a GET request to the `/image/:parameter` endpoint, where `:parameter` represents the desired image parameter. The application will download the image from the Pollinations AI website, crop it, add a watermark, and return the resulting image.

   Example request:

   ```shell
   GET /image/parameter-value
   ```

   Replace `parameter-value` with the desired image parameter.

4. The resulting watermarked image will be returned as the response.

## Code Overview

The application code is structured as follows:

- The required modules (`express`, `axios`, and `sharp`) are imported at the beginning.
- An instance of the Express application is created and assigned to the `app` variable.
- The port number `3000` is assigned to the `port` variable.
- The root endpoint `/` is defined to respond with a JSON message indicating the image generation.
- The `/image/:parameter` endpoint is defined to handle image generation requests. It downloads the image from the specified Pollinations AI URL, crops it, adds a watermark, and returns the resulting image.
- The server is started by listening on the specified port.

## Dependencies

The application relies on the following dependencies:

- [Express](https://expressjs.com/): A minimal and flexible Node.js web application framework.
- [Axios](https://axios-http.com/): A promise-based HTTP client for the browser and Node.js.
- [Sharp](https://sharp.pixelplumbing.com/): A high-performance Node.js image processing library.

These dependencies are automatically installed when running `npm install`.

## Conclusion

The Pollinations Watermark application allows you to generate watermarked images by downloading an image from a specified URL, cropping it, and adding a watermark. By following the installation and usage instructions, you can easily run the application and integrate it into your own projects.
