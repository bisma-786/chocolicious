# Frisky Chocolate Scrollytelling Experience

An interactive scrollytelling website showcasing the Frisky chocolate wafers production journey through animated sequences.

## Features

- Interactive scroll-driven animations
- Four distinct sequences showing the chocolate-making process
- Responsive design for all screen sizes
- Smooth transitions and professional UI

## Configuration

The website can be easily customized by modifying the `CONFIG` object in the script section of `index.html`:

- `brandName`: Name of the chocolate brand
- `copyrightYear`: Year for the copyright notice
- `productName`: Name of the product
- `contactLink`: Link to contact page
- `ctaLink`: Call-to-action button link
- `sequencePaths`: Paths to image sequences
- `overlayTexts`: Text content for each sequence overlay

## Deployment

This project is designed for static hosting and can be deployed to:

- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

## Project Structure

```
├── index.html          # Main HTML file with embedded CSS and JS
├── sequence1/          # First sequence images (ingredients selection)
├── sequence2/          # Second sequence images (chocolate flow)
├── sequence3/          # Third sequence images (wafer formation)
├── sequence4/          # Fourth sequence images (final packaging)
├── vercel.json         # Vercel deployment configuration
└── .nojekyll           # GitHub Pages configuration
```

## Customization

To customize this project:

1. Replace the images in the sequence folders with your own
2. Update the image arrays in the JavaScript if filenames change
3. Modify the text content in the CONFIG object
4. Adjust colors and styling in the CSS section