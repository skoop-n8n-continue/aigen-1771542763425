# Modern Weather Signage App

A responsive, horizontal weather card designed for digital signage with a clean, flat design aesthetic.

## Features
- **Responsive 2:1 Layout**: Optimized for wide-screen digital displays.
- **Red Theme**: High-contrast red background with white typography for maximum readability.
- **Dynamic Date**: Automatically updates the current date and day.
- **Animated SVG Icon**: Minimalist sun icon with rotating rays for subtle visual interest.
- **URL Configuration**: Customize the display without changing code.

## URL Parameters
You can customize the content by adding query parameters to the URL:
- `location`: Set the display city (e.g., `?location=Paris`)
- `temp`: Set the temperature (e.g., `?temp=75`)
- `condition`: Set the weather status (e.g., `?condition=Clear`)

Example: `index.html?location=San%20Francisco&temp=68&condition=Partly%20Cloudy`

## Technical Details
- **Font**: Inter (via Google Fonts)
- **Styling**: Modern CSS (Flexbox, aspect-ratio, variables)
- **Performance**: Zero external images; uses inline SVG for speed and sharpness.
- **Cache Control**: Implements meta tags and versioning to prevent stale content on signage hardware.
