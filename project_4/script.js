const themeToggleIcon = document.querySelector(".fa-moon") || document.querySelector(".fa-sun");

if (themeToggleIcon) {
    themeToggleIcon.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const isLightMode = document.body.classList.contains("light-mode");
        
        if (isLightMode) {
            themeToggleIcon.classList.remove("fa-moon");
            themeToggleIcon.classList.add("fa-sun");
        } else {
            themeToggleIcon.classList.remove("fa-sun");
            themeToggleIcon.classList.add("fa-moon");
        }

        const allH2 = document.querySelectorAll("h2");
        const allH3 = document.querySelectorAll("h3"); 
        const allP = document.querySelectorAll("p");
        const innerCircles = document.querySelectorAll(".inner-circle");
        
        allH2.forEach(h2 => {
            h2.style.color = isLightMode ? "#181c32" : "#ffffff"; 
        });
        
        allH3.forEach(h3 => {
            h3.style.color = isLightMode ? "#181c32" : "#ffffff"; 
        });
        
        allP.forEach(p => {
            p.style.color = isLightMode ? "#7e8299" : "#a1a5b7"; 
        });

        innerCircles.forEach(circle => {
            circle.style.color = isLightMode ? "#181c32" : "#ffffff";
        });
        
        const newTextColor = isLightMode ? '#7e8299' : '#a1a5b7';
        const newGridColor = isLightMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.05)';
        
        Chart.defaults.color = newTextColor;
        
        const salesChart = Chart.getChart('salesViewsChart');
        if (salesChart) {
            salesChart.options.scales.y.grid.color = newGridColor;
            salesChart.update();
        }
        
        ['weeklySalesChart', 'totalUsersChart'].forEach(id => {
            const chart = Chart.getChart(id);
            if (chart) chart.update();
        });
    });
}

Chart.defaults.color = "#a1a5b7";
Chart.defaults.font.family = "'Inter', sans-serif";

Chart.defaults.plugins.tooltip.backgroundColor = "rgba(0, 0, 0, 0.9)";
Chart.defaults.plugins.tooltip.padding = 16;
Chart.defaults.plugins.tooltip.titleFont = { size: 45 };
Chart.defaults.plugins.tooltip.bodyFont = { size: 45 };
Chart.defaults.plugins.tooltip.boxPadding = 6;

new Chart(document.getElementById("weeklySalesChart"), {
    type: "line",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            data: [10, 22, 18, 35, 25, 40, 20],
            borderColor: "#069348",
            borderWidth: 4,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 5,
            fill: {
                target: "origin",
                above: 'rgba(21, 131, 72, 0.15)'
            }
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: { display: false },
            y: { display: false, min: 0 }
        },
        interaction: {
            mode: "index",
            intersect: false
        }
    }
});

new Chart(document.getElementById("totalUsersChart"), {
    type: "bar",
    data: {
        labels: ["1","2","3","4","5","6","7","8","9","10","11"],
        datasets: [{
            data: [30, 40, 35, 50, 70, 90, 60, 50, 45, 30, 20],
            backgroundColor: "#f1416c",
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    }
});

new Chart(document.getElementById("salesViewsChart"), {
    type: "bar",
    data: {
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
        datasets: [
            {
                label: "Sales",
                data: [18, 5, 60, 10, 30, 18, 25, 15, 30],
                backgroundColor: "#009ef7",
                borderRadius: 4
            },
            {
                label: "Views",
                data: [16, 10, 42, 15, 25, 15, 40, 8, 20],
                backgroundColor: "#7239ea",
                borderRadius: 4
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: false,
                    boxWidth: 44,
                    boxHeight: 44,
                    padding: 70,
                    font: { size: 58 }
                }
            }
        },
        scales: {
            x: {
                grid: { display: false, drawBorder: false },
                ticks: { font: { size: 50 } }
            },
            y: {
                grid: { color: "#2b2b40", drawBorder: false },
                ticks: { font: { size: 50 } }
            }
        }
    }
});


document.addEventListener("DOMContentLoaded", () => {
    
    
    const effectStyles = document.createElement('style');
    effectStyles.innerHTML = `
        .dash-card {
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.2s ease-out, box-shadow 0.3s ease;
            overflow: hidden; /* Keeps the glow inside the card */
        }
        
        /* The invisible glow layer */
        
        
        /* Show glow on hover */
        .dash-card:hover::before { opacity: 1; }
        
        /* Make all text and charts sit above the glow */
        .dash-card > * { position: relative; z-index: 1; }
        
        /* Darker glow for Light Mode */
        body.light-mode .dash-card::before {
            background: radial-gradient(
                600px circle at var(--mouse-x, 0) var(--mouse-y, 0),
                rgba(0, 0, 0, 0.05),
                transparent 40%
            );
        }
    `;
    document.head.appendChild(effectStyles);

    
    const cards = document.querySelectorAll('.dash-card');

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  

            
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);

            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -4; 
            const rotateY = ((x - centerX) / centerX) * 4;

           
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
        });

        
        card.addEventListener("mouseleave", () => {
            card.style.transform = ''; 
        });
    });
});