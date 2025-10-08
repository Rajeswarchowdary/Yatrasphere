const data = [{
        image: "https://wallpaperaccess.com/full/1398609.jpg",
        text: "Leh–Ladakh, Jammu & Kashmir"
    }, {
        image: "https://media.gettyimages.com/id/2224689490/photo/haridwar-india-an-aerial-view-of-har-ki-paudi-during-ganga-aarti-on-june-27-2025-in-haridwar.jpg?s=612x612&w=0&k=20&c=RPJ4H-4qO9rfdPOoxxS3LymJtqEa-aHFlHG03RMqi6k=",
        text: "Rishikesh & Haridwar, Uttarakhand"
    },
    {
        image: "https://media.gettyimages.com/id/645085786/photo/india-varanasi-ghats-on-the-river-ganges.jpg?s=612x612&w=0&k=20&c=oHDhUQO5jQQrE9iAP2G4yhdGFt2WayOR7s5RUzL7RCA=",
        text: "Varanasi, Uttar Pradesh"
    },
    {
        image: "https://media.gettyimages.com/id/515947487/photo/misty-mornings.jpg?s=612x612&w=0&k=20&c=11NpHybmI94gwIbimpIJ2rTcTdMNbm-i52Df-yyMwjk=",
        text: "Coorg, Karnataka"
    },
    {
        image: "https://3.bp.blogspot.com/-oeojd0zgzPY/VXvPmyUPhII/AAAAAAAABpg/phkymSZHVYM/s1600/ANDAMAN%2BTOURIST%2BDESTINATIONS%252C%2BPLACES%2BTO%2BVISIT%2BIN%2BANDAMAN%252C%2BTRAVEL%2BPLACES%2BIN%2BANDAMAN%2BISLANDS%252C%2BANDAMAN%2BSIGHTSEEING%2BTOUR%252C%2BANDAMAN%2BTOURISM%252C%2BTOURIST%2BPLACES%2BANDAMAN.jpg",
        text: "Andaman & Nicobar Islands"
    }, {
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTw7_x9KF3YngQm7BxOOUZp1Nd5bTngdextr2eeL9OvW2EtFasu3cgGo-01lDZahPf0mLg2TBZClPQwSRgFxfk82qwViDc-qPV23QYfTQ",
        text: "Udaipur, Rajasthan"
    }, {
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSAluZR_gAcbBEpLIQM0Vs0vdg0DTb1907-pnQDyo00PKIORTW5KI6BQz5KrLgzCY2f1WTuS69lvubw14xWuBrht583DndG0mkdD0upcA",
        text: "Hampi, Karnataka"
    }, {
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTVkuvm6-BOcn22kZucR1F-aRuoUe3kZduxtTebGbV-Zw_bzVPfMDfvbrTutq45xau7CBJVfh4T_uStnasqTAkEHFcshd2pAWt2s7eYYGg",
        text: "Darjeeling, West Bengal"
    }, {
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noaXTsp3s9L6vAgJbpMWISSuIjSY0ZTcebq7XHAFs4_KVc8F9Y3CyketWF39fgH6lTwplJjRd-3Xg-AY_DkUMs5192MHgtduzlPcSSjem7UJHwiWjOpru5tizSvHFb7i7ivYND6=w675-h390-n-k-no",
        text: "Manali, Himachal Pradesh"
    }, {
        image: "https://media.istockphoto.com/id/2164463930/photo/view-of-tiger-looking-at-gypsy.jpg?s=612x612&w=0&k=20&c=1ReaxSzztYhUFlYpzwWl_TBgLrRnZbyqvgdmUcDjdis=",
        text: "Ranthambore National Park, Rajasthan"
    }
]

document.addEventListener('DOMContentLoaded', () => {
    const divtag = document.getElementById('scroll');

    data.forEach(el => {
        const element = document.createElement('div');
        element.style.border = '1px solid black';
        element.style.padding = '20px';
        element.style.borderRadius = '7px';
        element.style.textAlign = 'center';
        element.innerHTML = `<img src="${el.image}" alt="Image"/><p>${el.text}</p>`;
        divtag.appendChild(element);
    });

    document.querySelector('.arrow-btn.left').addEventListener('click', () => {
        divtag.scrollBy({ left: -300, behavior: 'smooth' });
    });

    document.querySelector('.arrow-btn.right').addEventListener('click', () => {
        divtag.scrollBy({ left: 300, behavior: 'smooth' });
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     data.map(el => {
//         const divtag = document.getElementById('scroll');
//         const element = document.createElement('div');
//         element.style.border = '1px solid black'
//         element.style.padding = '20px'
//         element.style.borderRadius = "7px"
//         element.innerHTML = `<img src="${el.image}" alt="Image"/>
//                              <p>${el.text}</p>`;
//         divtag.appendChild(element);
//     });
// });

document.getElementById("weatherBtn").addEventListener("click", function() {
    window.location.href = "weather.html";
});



document.getElementById('name').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^A-Za-z\s]/g, '');
});


document.getElementById('number').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Name is required.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (number.length !== 10) {
        alert("Mobile number must be exactly 10 digits.");
        return false;
    }

    return true;
}
document.querySelector('a[href="#containermaindiv"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#containermaindiv').scrollIntoView({
        behavior: 'smooth'
    });
});


// const accessKey = 'rx3FU248Ubhdgi0O6ocjqfoKbG5t9ZJOrB8wvqDVPro';

// async function searchPhotos() {
//     const query = document.getElementById('searchInput').value.trim();
//     const photoGrid = document.getElementById('photoGrid');

//     if (!query) {
//         alert('Please enter a destination to search!');
//         return;
//     }

//     photoGrid.innerHTML = `<p>Loading...</p>`;

//     try {
//         const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${accessKey}`);
//         const data = await response.json();

//         if (data.results.length === 0) {
//             photoGrid.innerHTML = `<p>No results found for "${query}"</p>`;
//             return;
//         }

//         photoGrid.innerHTML = data.results.map(photo => `
//         <img src="${photo.urls.regular}" alt="${photo.alt_description || 'Destination photo'}">
//         `).join('');
//     } catch (error) {
//         console.error('Error fetching photos:', error);
//         photoGrid.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
//     }
// }


// const accessKey = 'rx3FU248Ubhdgi0O6ocjqfoKbG5t9ZJOrB8wvqDVPro';

// async function searchPhotos() {
//     const query = document.getElementById('searchInput').value.trim();

//     if (!query) {
//         alert('Please enter a destination to search!');
//         return;
//     }

//     try {
//         const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${accessKey}`);
//         const data = await response.json();

//         if (data.results.length === 0) {
//             alert(`No results found for "${query}"`);
//             return;
//         }
//         const newWindow = window.open('', '_blank');
//         newWindow.document.write(`<h2>Photos for "${query}"</h2>` style: color :);
//         newWindow.document.write('<div style="display:flex; flex-wrap: wrap;">');

//         data.results.forEach(photo => {
//             newWindow.document.write(`
//                     <div style="margin:5px;">
//                         <img src="${photo.urls.regular}" alt="${photo.alt_description || 'Destination photo'}" style="width:200px; height:150px; object-fit:cover; border-radius:8px;">
//                     </div>
//                 `);
//         });

//         newWindow.document.write('</div>');
//     } catch (error) {
//         console.error('Error fetching photos:', error);
//         alert('Something went wrong. Please try again later.');
//     }
// }

// document.getElementById('searchBtn').addEventListener('click', searchPhotos); 


const accessKey = 'rx3FU248Ubhdgi0O6ocjqfoKbG5t9ZJOrB8wvqDVPro';

async function searchPhotos() {
    const query = document.getElementById('searchInput').value.trim();

    if (!query) {
        alert('Please enter a destination to search!');
        return;
    }

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${accessKey}`);
        const data = await response.json();

        if (data.results.length === 0) {
            alert(`No results found for "${query}"`);
            return;
        }

        const newWindow = window.open('', '_blank');

        newWindow.document.write(`
                <html>
                <head>
                    <title>Photos for ${query}</title>
                    <style>
                        body {
                            background: transparent;
                            font-family: Arial, sans-serif;
                            margin: 20px;
                        }
                        h2 {
                            color: blue;
                        }
                        h2 span {
                            color: orange;
                        }
                        .photo-grid {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 10px;
                        }
                        .photo-container {
                            flex: 1 1 calc(33.33% - 10px);
                            box-sizing: border-box;
                        }
                        .photo-container img {
                            width: 100%;
                            height: 400px;
                            object-fit: cover;
                            border-radius: 8px;
                            display: block;
                        }
                        @media(max-width: 768px) {
                            .photo-container {
                                flex: 1 1 calc(50% - 10px);
                            }
                        }
                        @media(max-width: 480px) {
                            .photo-container {
                                flex: 1 1 100%;
                            }
                        }
                    </style>
                </head>
                <body>
                    <h2>Photos for <span>${query}</span></h2>
                    <div class="photo-grid">
                        ${data.results.map(photo => `
                            <div class="photo-container">
                                <img src="${photo.urls.regular}" alt="${photo.alt_description || 'Destination photo'}">
                            </div>
                        `).join('')}
                    </div>
                </body>
                </html>
            `);

            newWindow.document.close(); // Close document stream
        } catch (error) {
            console.error('Error fetching photos:', error);
            alert('Something went wrong. Please try again later.');
        }
    }

    document.getElementById('searchBtn').addEventListener('click', searchPhotos);