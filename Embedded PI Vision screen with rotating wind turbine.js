<!-- Embedded PI Vision screen with rotating wind turbines -->
<!-- <html>
<head>
<title>Demos PI Vision</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"> -->
<!-- =<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
<!-- <link rel="stylesheet" href="style.css"> -->
<!-- Wind Turbine Animation -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wind Turbine Animation</title>
  <style>
    /* Add styles here, if needed */
  </style>
</head>
<body>
  <svg width="600" height="600">
    <rect x="0" y="0" width="600" height="600" fill="skyblue" />
    <!-- Wind Farm 1 -->
    <g id="windFarm1">
      <!-- Blade 1 -->
      <path d="M 300 300 L 150 450 L 175 525 Q 300 525 425 450 L 300 300" fill="gray" />
      <!-- Blade 2 -->
      <path d="M 300 300 L 150 450 L 175 525 Q 300 525 425 450 L 300 300" transform="rotate(120 300 300)" fill="gray" />
      <!-- Blade 3 -->
      <path d="M 300 300 L 150 450 L 175 525 Q 300 525 425 450 L 300 300" transform="rotate(240 300 300)" fill="gray" />
      <!-- Wind Farm 1 Name -->
      <text x="120" y="120" fill="black" font-size="24" text-anchor="end">Finiesterre</text>
    </g>
</body>
<body>
    <svg width="600" height="600">
    <rect x="0" y="0" width="600" height="600" fill="skyblue" />
    <!-- Wind Farm 2 -->
    <g id="windFarm2">
      <!-- Blade 1 -->
      <path d="M 300 300 L 150 450 L 175 525 Q 300 525 425 450 L 300 300" fill="gray" />
      <!-- Blade 2 -->
      <path d="M 300 300 L 150 450 L 175 525 Q 300 525 425 450 L 300 300" transform="rotate(120 300 300)" fill="gray" />
      <!-- Blade 3 -->
      <path d="M 300 300 L 150 450 L 175 525 Q 300 525 425 450 L 300 300" transform="rotate(240 300 300)" fill="gray" />
      <!-- Wind Farm 2 Name -->
      <text x="120" y="120" fill="black" font-size="24" text-anchor="end">Mieres</text>
    </g>
</body>
<body>  
    <svg width="600" height="600">
    <rect x="0" y="0" width="600" height="600" fill="skyblue" />
    <!-- Wind Farm 3 -->
    <g id="windFarm3">
      <!-- Blade 1 -->
      <path d="M 300 300 L 150 450 L 175 525 Q 300 525 425 450 L 300 300" fill="gray" />
      <!-- Blade 2 -->
      <path d="M 300 300 L 150 450 L 175 525 Q 300 525 425 450 L 300 300" transform="rotate(120 300 300)" fill="gray" />
      <!-- Blade 3 -->
      <path d="M 300 300 L 150 450 L 175 525 Q 300 525 425 450 L 300 300" transform="rotate(240 300 300)" fill="gray" />
      <!-- Wind Farm 3 Name -->
      <text x="120" y="120" fill="black" font-size="24" text-anchor="end">Santaella</text>
    </g>
</body>
<body>
    <svg width="600" height="600">
    <rect x="0" y="0" width="600" height="600" fill="skyblue" />
    <!-- Wind Farm 4 -->
    <g id="windFarm4">
      <!-- Blade 1 -->
      <path d="M 300 300 L 150 450 L 175 525 Q 300 525 425 450 L 300 300" fill="gray" />
      <!-- Blade 2 -->
      <path d="M 300 300 L 150 450 L 175 525 Q 300 525 425 450 L 300 300" transform="rotate(120 300 300)" fill="gray" />
      <!-- Blade 3 -->
      <path d="M 300 300 L 150 450 L 175 525 Q 300 525 425 450 L 300 300" transform="rotate(240 300 300)" fill="gray" />
      <!-- Wind Farm 4 Name -->
      <text x="120" y="120" fill="black" font-size="24" text-anchor="end">Talavera</text>
    </g>
</body>    
</svg>
</html>
<!DOCTYPE html>
<!--<html>
<head>
<title>Wind Farm Data</title>
<style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
 
        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
 
        tr:hover {background-color: #f5f5f5;}
 
        th {
            background-color: #4CAF50;
            color: white;
        }
</style>
</head>
<body>
 
<h2>Wind Farm Data</h2>
 
<table>
<tr>
<th>Wind Farm</th>
<th>Wind Speed (m/s)</th>
<th>Power (kW)</th>
<th>Date</th>
</tr>
<tr>
<td>Finisterre</td>
<td>5.2</td>
<td>1000</td>
<td>2022-01-01</td>
</tr>
<tr>
<td>Mieres</td>
<td>6.1</td>
<td>1200</td>
<td>2022-01-02</td>
</tr>
<tr>
<td>Santaella</td>
<td>4.8</td>
<td>800</td>
<td>2022-01-03</td>
</tr>
<tr>
<td>Talavera</td>
<td>5.5</td>
<td>1100</td>
<td>2022-01-04</td>
</tr>
</table>
 
</body>
</html>-->
<!--<path d="M 275 120 L 275 500 L 325 500 L 325 100 Z" fill="gray" />-->
<script>
                 // Get reference to the SVG group element containing the blade
        var bladeGroup_1 = document.getElementById('bladeGroup_1');
        var bladeGroup_2 = document.getElementById('bladeGroup_2');
        var bladeGroup_3 = document.getElementById('bladeGroup_3');
        var bladeGroup_4 = document.getElementById('bladeGroup_4');
        var currentAngle = 0; // Initialize current angle
            // Function to update blade rotation
        function updateBladeRotation(windSpeed) {
            // Convert wind speed to rotation speed (degrees per frame)
            var rotationSpeed = windSpeed * 1; // Adjust this factor as needed
            currentAngle += rotationSpeed; // Accumulate rotation angle
            bladeGroup_1.setAttribute('transform', 'rotate(' + currentAngle + ' 300 300)');
            bladeGroup_2.setAttribute('transform', 'rotate(' + currentAngle + ' 300 300)');
            bladeGroup_3.setAttribute('transform', 'rotate(' + currentAngle + ' 300 300)');
            bladeGroup_4.setAttribute('transform', 'rotate(' + currentAngle + ' 300 300)');
                }
                // Example function to retrieve real-time wind speed data
                    function getWindSpeed() {
    // Replace the following variables with your own values
    var piServerUrl = 'https://osisoftpiandafs/piwebapi';
    var windSpeedPointPath = 'pi:\\osisoftpiandafs\OSIDemo_Finisterre.Wind Speed';
    // Define headers for the PI Web API request
var headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Authorization', 'Basic', btoa('OSIsoftPIandAFServer:Welcome@osisoft')); // Replace 'username' and 'password' with your actual credentials
    // Construct the URL for the PI Web API
    var url = piServerUrl + '/points?path=' + encodeURIComponent(windSpeedPointPath);
 
    // Make a GET request to the PI Web API
    fetch(url,{
        method: 'GET',
        headers: headers
    })
       .then(response => response.json())
       .then(data => {
            // Extract the value of the wind speed point
            var windSpeed = data.Value.Value;
 
            // Return the wind speed value
            return windSpeed;
        })
       .catch(error => {
            console.error('Error fetching wind speed data:', error);
            return 0; // Return a default value if there's an error
        });
}

                // Function to animate the blade using requestAnimationFrame for smoothness
                function animateBlade() {
                    var windSpeed = getWindSpeed(); // Retrieve real-time wind speed data
                    updateBladeRotation(windSpeed); // Update blade rotation
                    requestAnimationFrame(animateBlade); // Request the next frame
                }
                requestAnimationFrame(animateBlade); // Start the animation
</script>
</div>
<div class="menu">
<a href="https://osisoftpiandafs/PIVision/#/Displays/72/Wind_Turbine" target="PIVisionFrame" class="btn td"><h4>Turbines</h4></a>
<!--<a href="https://latam-energy/PIVision/#/Displays/82/Power-T-D---Transformer?mode=kiosk" target="PIVisionFrame" class="btn td"><h4>Transformers</h4></a>-->
</div>
<iframe height="75.5%" width="100%" name="PIVisionFrame" ></iframe>
</body>
</html>