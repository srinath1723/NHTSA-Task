## NHTSA(National Highway Traffic Safety Administration)

 * I used NHTSA api to retrieve World Manufacturer Identifier.
 
**Description**
   
   - In [Htmlfile](./index.html):
       
       * In body `div` element serves as a container for the background video. The class root can be used to style this container with custom CSS.
       
       * This `video` element is configured to autoplay, loop continuously, and play without sound (muted). The `id="bgVideo"` can be used to target the video with CSS or JavaScript. 
       
       * The `source` element specifies the video file to be played and its format (MP4).
       
       * In the index.html file, I added a Bootstrap  Icons stylesheet and bundle hosted on a CDN.
   
   - In [javascript](./js/script.js):
       
       * Fetch Data from the NHTSA API: This request aims to retrieve data about World Manufacturer Identifiers (WMIs) for the manufacturer "hon" (Honda) in JSON format.
       
       * Handling the Response Asynchronously: The first `.then()` parses the JSON response, and the second `.then()` calls the `NhtsaData` function to handle the parsed data. If there's an error during the fetch or parsing process, it is caught and logged to the console. 
       
       * Function to Display NHTSA Data: It first selects the HTML element with the ID `NHTSA API` and clears any previous content.
       
       * Loop Through API Data and Create HTML Elements: For each item, it creates a new `div` element, adds Bootstrap grid classes for responsive layout, and fills it with data from the API (such as `Name`, `Country`, `Id`, etc.). This `div `is then appended to the selected container element.
       
       * Using Bootstrap for Styling: The `listItem ` `div` is styled with Bootstrap grid classes (`col-sm-6`, `col-md-4`, etc.), and the content is enclosed in a Bootstrap `card` component for a clean and structured appearance.