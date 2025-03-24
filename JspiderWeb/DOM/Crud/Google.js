const googleProducts = [
    {
        name: "Google Search",
        description: "The most widely used search engine in the world.",
        yearFounded: 1997,
        category: "Search Engine"
    },
    {
        name: "Gmail",
        description: "Google's free email service with over a billion users.",
        yearFounded: 2004,
        category: "Communication"
    },
    {
        name: "Google Maps",
        description: "A web-based mapping service providing navigation and location data.",
        yearFounded: 2005,
        category: "Navigation"
    },
    {
        name: "Google Drive",
        description: "A cloud storage service for storing and sharing files.",
        yearFounded: 2012,
        category: "Cloud Storage"
    },
    {
        name: "Google Docs",
        description: "An online document editor and collaboration tool.",
        yearFounded: 2006,
        category: "Productivity"
    },
    {
        name: "Google Sheets",
        description: "A cloud-based spreadsheet tool for data organization and analysis.",
        yearFounded: 2006,
        category: "Productivity"
    },
    {
        name: "Google Photos",
        description: "A cloud-based photo storage and organization platform.",
        yearFounded: 2015,
        category: "Media & Storage"
    },
    {
        name: "Google Chrome",
        description: "A popular web browser developed by Google.",
        yearFounded: 2008,
        category: "Web Browser"
    },
    {
        name: "YouTube",
        description: "The largest video-sharing platform in the world, owned by Google.",
        yearFounded: 2005,
        category: "Entertainment"
    },
    {
        name: "Google Play Store",
        description: "The official app store for Android devices.",
        yearFounded: 2008,
        category: "App Store"
    },
    {
        name: "Google Meet",
        description: "A video conferencing tool for virtual meetings.",
        yearFounded: 2017,
        category: "Communication"
    },
    {
        name: "Google Calendar",
        description: "An online scheduling and time management tool.",
        yearFounded: 2006,
        category: "Productivity"
    },
    {
        name: "Google Assistant",
        description: "An AI-powered virtual assistant for voice interactions.",
        yearFounded: 2016,
        category: "Artificial Intelligence"
    },
    {
        name: "Google Translate",
        description: "A free multilingual translation service.",
        yearFounded: 2006,
        category: "Language & AI"
    }
];

let table=document.createElement('table');
document.body.appendChild(table);
table.style.border="10px solid yellow";

let headth=document.createElement('tr');
table.appendChild(headth);

let Name=document.createElement('th');
Name.innerText='Name';

let description=document.createElement('th');
description.innerText='Description';

let yearFounded=document.createElement('th');
yearFounded.innerText='yearFounded';

let category=document.createElement('th');
category.innerText='category';

headth.appendChild(Name);
headth.appendChild(description);
headth.appendChild(yearFounded);
headth.appendChild(category);

googleProducts.forEach((el,i)=>{
    let tr=document.createElement('tr');
    let details=Object.values(el);
    details.forEach((data)=>{
        let td=document.createElement('td');
        td.style.border="1px solid red"
td.innerText=data;
tr.appendChild(td);
    })
    table.appendChild(tr);
})