document.addEventListener("DOMContentLoaded", () => {
    const components = {
        "cpu": {
            "Premium": ["Intel Core i9", "AMD Ryzen 9"],
            "Best Value": ["Intel Core i7", "AMD Ryzen 7"],
            "Budget": ["Intel Core i5", "AMD Ryzen 5"]
        },
        "motherboard": {
            "Premium": ["ASUS ROG", "MSI MEG"],
            "Best Value": ["MSI MPG", "Gigabyte Aorus"],
            "Budget": ["ASRock Phantom", "Gigabyte UD"]
        },
        "ram": {
            "Premium": ["G.SKILL Trident Z 32GB", "Corsair Dominator 32GB"],
            "Best Value": ["Corsair Vengeance 16GB", "Crucial Ballistix 16GB"],
            "Budget": ["Kingston HyperX 8GB", "Patriot Viper 8GB"]
        },
        "storage": {
            "Premium": ["Samsung 970 EVO 2TB", "Western Digital Black 2TB"],
            "Best Value": ["Samsung 970 EVO 1TB", "Crucial MX500 1TB"],
            "Budget": ["Kingston A2000 500GB", "Western Digital Blue 1TB"]
        },
        "gpu": {
            "Premium": ["NVIDIA RTX 3080", "AMD Radeon RX 6900 XT"],
            "Best Value": ["NVIDIA RTX 3070", "AMD Radeon RX 6800"],
            "Budget": ["NVIDIA GTX 1660", "AMD Radeon RX 5700"]
        },
        "psu": {
            "Premium": ["Corsair AX1600i", "Seasonic Prime TX-1000"],
            "Best Value": ["Corsair RM850x", "EVGA SuperNOVA 750"],
            "Budget": ["Cooler Master MWE 650", "Thermaltake Smart 600W"]
        },
        "cooling": {
            "Premium": ["NZXT Kraken Z73", "Corsair H150i Elite"],
            "Best Value": ["Corsair H100i", "Cooler Master Hyper 212"],
            "Budget": ["Cooler Master Hyper 212", "Noctua NH-U12S"]
        },
        "case": {
            "Premium": ["Lian Li PC-O11 Dynamic", "Corsair Obsidian 500D"],
            "Best Value": ["NZXT H510", "Fractal Design Meshify C"],
            "Budget": ["Cooler Master Q300L", "Thermaltake Versa H18"]
        },
        "network": {
            "Premium": ["Intel Wi-Fi 6 AX200", "ASUS PCE-AC88"],
            "Best Value": ["TP-Link Archer T5E", "Gigabyte GC-WB867D"],
            "Budget": ["TP-Link TL-WN881ND", "ASUS PCE-N15"]
        }
    };

    // Populate each dropdown
    for (let component in components) {
        const dropdown = document.getElementById(`${component}Dropdown`);
        const componentGroup = components[component];

        // Clear previous options if any
        while (dropdown.firstChild) {
            dropdown.removeChild(dropdown.firstChild);
        }

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = `--Select a ${component.charAt(0).toUpperCase() + component.slice(1)}--`;
        dropdown.appendChild(defaultOption);

        for (let category in componentGroup) {
            const optgroup = document.createElement("optgroup");
            optgroup.label = `${category}`;
            componentGroup[category].forEach(part => {
                const option = document.createElement("option");
                option.value = `${component} (${category}): ${part}`;
                option.text = part;
                optgroup.appendChild(option);
            });
            dropdown.appendChild(optgroup);
        }
    }
});

function showComponentDetails(component) {
    const dropdown = document.getElementById(`${component}Dropdown`);
    const detailsDiv = document.getElementById(`${component}Details`);
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;
    
    if (selectedOption) {
        detailsDiv.innerHTML = `<p>${selectedOption}</p>`;
    } else {
        detailsDiv.innerHTML = "";
    }
}