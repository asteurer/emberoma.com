// Toggle between local and S3 images
export const useLocalImages = true; // Set to false to use S3 links

// Define base URLs
export const localBaseURL = '/images/';
export const s3BaseURL = 'https://s3.us-east-2.amazonaws.com/emberoma.com-prod/images/';

// Select the base URL based on the toggle
export const imageBaseURL = useLocalImages ? localBaseURL : s3BaseURL;