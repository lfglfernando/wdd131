const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

document.addEventListener('DOMContentLoaded', () => {
    const temp = 10;
    const windSpeed = 5;

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
        } else {
            return 'N/A';
        }
    }

    document.getElementById('windChill').textContent = calculateWindChill(temp, windSpeed);
});