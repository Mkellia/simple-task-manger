# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the HTML, CSS, and JavaScript files into the container
COPY index.html /usr/share/nginx/html
COPY styles.css /usr/share/nginx/html
COPY app.js /usr/share/nginx/html

# Expose port 80 to allow outside access
EXPOSE 80
