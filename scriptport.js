document.addEventListener('DOMContentLoaded', function() {
    const listContainer = document.querySelector('.portfo-items'); 

    const portfolioData = [
      { 
        title: "Portfolio #1",
        description: "Create and develop the Permata Hati homeschooling website.",
        view: "View",
        imageUrl: "assets/ft2.png",
        url: "https://indonesiasatuhati.id"  
      },
      { 
        title: "Portfolio #2",
        description: "Create and develop homeschooling education management application Permata Hati.",
        view: "View",
        imageUrl: "assets/ft3.png",
        url: "https://indonesiasatuhati.id/login"  
      },
      { 
        title: "Portfolio #3",
        description: "Create and develop campus education management applications.",
        view: "View",
        imageUrl: "assets/ft1.png",
        url: "https://stiesgasantara.ac.id"  
      },
      { 
        title: "Experiense #1",
        description: "Becoming a head of Rekayasa Perangkat Lunak department at Mihadunal Ula Vocational School",
        view: "View",
        imageUrl: "assets/peng1.jpg",
        url: ""
      },
      { 
        title: "Experiense #2",
        description: "Become an IT Staff at Homeschooling Permata Hati",
        view: "View",
        imageUrl: "assets/peng2.png",
        url: ""
      },
      { 
        title: "Experiense #3",
        description: "Becoming a web developer at digitalkode company",
        view: "View",
        imageUrl: "assets/peng3.png",
        url: ""
      }
    ];

    portfolioData.forEach(item => {
      const portfolioItem = document.createElement('div');
      portfolioItem.className = 'item fo-item';

      portfolioItem.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.title}">
        <div class="info">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <a href="https://indonesiasatuhati.id" target="_blank">${item.view} <i class='bx bx-link-external'></i></a>
        </div>
      `;

      listContainer.appendChild(portfolioItem);
    });
  });