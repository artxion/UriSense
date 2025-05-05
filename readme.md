<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>UriSense</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 900px;
            margin: auto;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #333366;
        }
        ul {
            margin-left: 20px;
        }
        section {
            margin-bottom: 40px;
        }
    </style>
</head>
<body>

    <h1>UriSense</h1>
    <p><strong>UriSense</strong> is a compact, IoT-enabled device designed to measure urinary calcium concentration using a turbidity-based optical method. By enabling early detection of calcium-related diseases, UriSense offers a non-invasive and accessible way to monitor a critical health parameter from the comfort of home or clinic settings.</p>

    <section>
        <h2>Features</h2>
        <ul>
            <li><strong>Turbidity-based Optical Sensing:</strong> Custom-built sensor measures urinary calcium concentration by analyzing sample turbidity.</li>
            <li><strong>Early Disease Detection:</strong> Helps in monitoring and identifying conditions such as kidney stones, hypercalciuria, and other calcium-related disorders.</li>
            <li><strong>Custom IoT Platform:</strong> Sensor data is securely stored on a custom-built IoT platform for real-time tracking, historical reference, and future analysis.</li>
            <li><strong>User-friendly & Non-invasive:</strong> Compact design ensures ease of use and comfort without invasive procedures.</li>
        </ul>
    </section>

    <section>
        <h2>How It Works</h2>
        <ul>
            <li><strong>Sample Collection:</strong> A small urine sample is introduced into the sensor chamber.</li>
            <li><strong>Turbidity Measurement:</strong> The sensor emits light through the sample and measures light scattering to estimate calcium concentration.</li>
            <li><strong>Data Processing & Calibration:</strong> Sensor readings are processed and calibrated using pre-defined calibration curves to ensure accuracy.</li>
            <li><strong>Data Transmission:</strong> The measured data is securely transmitted to the IoT platform via WiFi/Bluetooth.</li>
            <li><strong>Analysis & Visualization:</strong> Users can access historical trends and receive alerts or reports through a web/mobile dashboard.</li>
        </ul>
    </section>

    <section>
        <h2>Tech Stack</h2>
        <h3>Hardware</h3>
        <ul>
            <li>Custom-built optical turbidity sensor</li>
            <li>Microcontroller (ESP32/Arduino)</li>
        </ul>

        <h3>Software</h3>
        <ul>
            <li>Firmware (C/C++)</li>
            <li>IoT Platform (Flask / Node.js backend, MongoDB / Firebase for storage)</li>
            <li>Web Dashboard (React.js / AnyChart / Chart.js for visualization)</li>
        </ul>
    </section>

</body>
</html>
