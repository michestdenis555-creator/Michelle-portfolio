/* =====================================================
   Michelle St-Denis Portfolio
   Gallery, filters, modal, navigation, and animations
   ===================================================== */


/* -----------------------------------------------------
   1. Artwork information

   IMPORTANT:
   The spelling and capitalization of every image path
   must match the actual filename exactly.
   ----------------------------------------------------- */

const artworks = [

  /* =========================
     Digital artwork
     ========================= */

  {
    title: "Keeper of the River",
    category: "digital",
    image: "images/digitalart/Beaver.jpg",
    medium: "Digital Illustration",
    year: "2025",
    description:
      "The beaver pauses along the shoreline, a quiet guardian of the waters, carrying the wisdom of the land in its steady presence."
  },

  {
    title: "Farm Life",
    category: "digital",
    image: "images/digitalart/Farmland.jpg",
    medium: "Digital Illustration",
    year: "2025",
    description:
      "A colorful collection of rural scenes capturing the charm and simplicity of life on the land."
  },

  {
    title: "Scaled in Nature",
    category: "digital",
    image: "images/digitalart/Fish.jpg",
    medium: "Digital Illustration",
    year: "2025",
    description:
      "A striking pinecone fish, inspired by the intricate patterns and textures found in nature."
  },

  {
    title: "Highland Harmony",
    category: "digital",
    image: "images/digitalart/HighlandCow.jpg",
    medium: "Digital Illustration",
    year: "2025",
    description:
      "A golden Highland cow portrayed with warmth, strength, and rustic charm."
  },

  {
    title: "Koa",
    category: "digital",
    image: "images/digitalart/Koa.jpg",
    medium: "Digital Illustration",
    year: "2025",
    description:
      "A striking black-and-white portrait celebrating the quiet strength, loyalty, and spirit of a beloved companion."
  },

  {
    title: "Logo Project",
    category: "digital",
    image: "images/digitalart/LogoProject.jpg",
    medium: "Digital Design",
    year: "2025",
    description:
      "A creative logo project combining illustration and digital design."
  },

  {
    title: "Sounds of the Night",
    category: "digital",
    image: "images/digitalart/NightKoa.jpg",
    medium: "Digital Illustration",
    year: "2025",
    description:
      "A peaceful night beneath the stars, surrounded by the quiet beauty and gentle sounds of nature."
  },

  {
    title: "Beneath the Northern Lights",
    category: "digital",
    image: "images/digitalart/Norwhal.jpg",
    medium: "Digital Illustration",
    year: "2025",
    description:
      "A vibrant underwater scene inspired by the movement and wonder of the aurora-filled sky."
  },

  {
    title: "Onyx",
    category: "digital",
    image: "images/digitalart/Raven.jpg",
    medium: "Digital Illustration",
    year: "2025",
    description:
      "A moonlit raven standing in stillness beneath the night sky, embodying resilience, curiosity, and quiet wonder."
  },

  {
    title: "The Great Upstream",
    category: "digital",
    image: "images/digitalart/Salmon.jpg",
    medium: "Digital Illustration",
    year: "2025",
    description:
      "A flowing salmon symbolizing perseverance, renewal, and the journey home."
  },

  {
    title: "Echos in the Land",
    category: "digital",
    image: "images/digitalart/Wolf.jpg",
    medium: "Digital Illustration",
    year: "2025",
    description:
      "A watchful wolf illuminated by the quiet beauty of the moonlit forest."
  },


  /* =========================
     Paintings
     ========================= */

  {
    title: "Into the Wind",
    category: "painting",
    image: "images/paintings/BearPainting.JPG",
    medium: "Painting",
    year: "2015",
    description:
      "A black bear among birch trees, embodying resilience and a deep connection to nature."
  },

  {
    title: "Father of the Cosmos",
    category: "painting",
    image: "images/paintings/CosmosPainting.JPG",
    medium: "Painting",
    year: "2017",
    description:
      "A vibrant cosmic landscape celebrating the mystery, energy, and wonder of the universe."
  },

  {
    title: "Midnight Muse",
    category: "painting",
    image: "images/paintings/CrowPainting.JPG",
    medium: "Painting",
    year: "2015",
    description:
      "A solitary raven stands beneath the moonlight, symbolizing wisdom, mystery, and quiet reflection."
  },

  {
    title: "Floating between stars",
    category: "painting",
    image: "images/paintings/Feathers.JPG",
    medium: "Painting",
    year: "2016",
    description:
      "Delicate feathers drifting through a starlit sky, symbolizing freedom, wonder, and endless possibilities."
  },

  {
    title: "Ember glow",
    category: "painting",
    image: "images/paintings/OrangeTreesPainting.JPG",
    medium: "Painting",
    year: "2014",
    description:
      "A strong tree standing in warmth and light, rooted deeply through seasons of growth and change."
  },

  {
    title: "The Blue gaze",
    category: "painting",
    image: "images/paintings/TigerPainting.JPG",
    medium: "Drawing and Painting",
    year: "2015",
    description:
      "Piercing blue eyes draw the viewer in, revealing the quiet strength and captivating presence of a majestic white tiger."
  },

  {
    title: "Awakening Light",
    category: "painting",
    image: "images/paintings/Universe.JPG",
    medium: "Painting",
    year: "2018",
    description:
      "A radiant burst of colour and starlight symbolizing new beginnings, discovery, and inner awakening."
  },

  {
    title: "Northern Soul",
    category: "painting",
    image: "images/paintings/WolfPainting.JPG",
    medium: "Painting",
    year: "2014",
    description:
      "A watchful wolf gazes beneath the northern lights, reflecting resilience, wisdom, and a deep connection to the wild."
  },


  /* =========================
     Community artwork
     ========================= */

  /* New community cards — ordered red, blue, pink, yellow */

  /* Gatineau Water & Energy Centre Medicine Wheel Art Project */

  {
    title: "Gatineau Water & Energy Centre – Medicine Wheel Art Project",
    category: "community",
    image: "images/community/medicinegreen.png",
    pages: [
      "images/community/medicinegreen.png",
      "images/community/Medicinewheel.png",
      "images/community/medicinewheel1.png",
      "images/community/Womenwater.png",
      "images/community/backview.png",
      "images/community/Birdseyeview.png"
    ],
    galleryLabel: "View Project",
    medium: "Collaborative Public Art Project",
    description:
      "The Gatineau Water & Energy Centre Medicine Wheel Art Project is a collaborative public art initiative that will bring together the work of many artists, including myself. The artwork will be showcased within a specially designed outdoor structure, creating a space that connects art, community, culture, water, and the surrounding land.<br><br><strong>Project images:</strong><br><strong>Pages 1–3:</strong> 3D concept views of the art display structure<br><strong>Page 4:</strong> Woman Carrying the Water artwork<br><strong>Pages 5–6:</strong> Bird’s-eye views of the future project location"
  },

  {
    title: "Community Cultural & Seasonal Art Project — 1 of 3",
    category: "community",
    image: "images/community/culturallake.png",
    pages: [
      "images/community/culturallake.png",
      "images/community/Culturalsky.jpg",
      "images/community/culturalinside.jpg"
    ],
    galleryLabel: "View Project",
    medium: "Community & Cultural Connections",
    description:
      "I created a commissioned artwork for the Kebaowek Cultural Centre in Kebaowek, Quebec. Inspired by Lake Kipawa, which holds deep cultural and historical significance for the Kebaowek community, the design features a water pattern that symbolizes the community's enduring connection to the land and water. The pattern will be adapted into the colours of the four seasons, reflecting the changes each season brings while representing the generations of community members who have lived, gathered, and travelled along the lake. The artwork will be displayed on banners throughout the building and incorporated into key word installations in collaboration with another artist, celebrating the identity, history, and resilience of the people of Kebaowek."
  },

  {
    title: "Lake Kipawa- Keywords four seasons — 2 of 3",
    category: "community",
    image: "images/community/lakesummer.png",
    pages: [
      "images/community/lakesummer.png",
      "images/community/LakeFall.png",
      "images/community/lakewinter.png",
      "images/community/lakespring.png"
    ],
    galleryLabel: "View Series",
    medium: "Seasonal Lake Map Series",
    description:
      "The keywords are presented in the colours of the four seasons to symbolize change, growth, and the experiences of community members across generations. Created in collaboration with another artist, each section features illustrations paired with interactive audio buttons that allow visitors to hear the words spoken in both Algonquin and English. Together, the artwork celebrates the community's language, culture, and connection to the land and water.<br><br><strong>Series order:</strong><br><strong>Page 1 — Summer:</strong> yellow-outlined background<br><strong>Page 2 — Fall:</strong> warm brown-outlined background<br><strong>Page 3 — Winter:</strong> blue-outlined background<br><strong>Page 4 — Spring:</strong> soft warm beige-outlined background"
  },

  {
    title: "Lake Kipawa Banners Seasons — 3 of 3",
    category: "community",
    image: "images/community/Bannersummer.png",
    pages: [
      "images/community/Bannersummer.png",
      "images/community/Bannerfall.png",
      "images/community/Bannerwinter.png",
      "images/community/Bannerspring.png"
    ],
    galleryLabel: "View Series",
    medium: "Seasonal Community Banner Series",
    description:
    "This digital artwork features the water patterns of Lake Kipawa displayed as large-scale banners throughout the cultural centre. Each banner is designed in a colour palette inspired by one of the four seasons, serving as a visual indicator of the seasonal areas within the building. Representing the beauty and significance of Lake Kipawa, the banners celebrate the community's connection to the land and water while creating a cohesive visual experience throughout the space.<br><br><strong>Series order:</strong><br><strong>Page 1 — Summer:</strong> yellow background<br><strong>Page 2 — Fall:</strong> warm orange background<br><strong>Page 3 — Winter:</strong> soft blue background<br><strong>Page 4 — Spring:</strong> fresh green background"
  },

  {
    title: "Community Art and Cultural Storytelling",
    category: "community",
    image: "images/community/BearOutdoor.JPEG",
    pages: [
      "images/community/BearOutdoor.JPEG",
      "images/community/Outdoorwolf.jpeg",
      "images/community/Trappinggerald.jpeg"
    ],
    galleryLabel: "View Project",
    medium: "Community Art Project",
    description:
      "A collection of community artwork connecting wildlife, the northern landscape, and cultural storytelling through an outdoor bear display, a wolf beneath the northern lights, and a historical trapping-themed presentation."
  },

  {
    title: "Wolf Tote Bag",
    category: "community",
    image: "images/community/Bag.jpeg",
    medium: "Community Art Project",
    year: "2024",
    description:
      "Wolf Print Tote Bag – A reusable canvas tote showcasing wolf artwork."
  },


  /* =========================
     CHILDREN'S BOOK 1
     Forest Friends

     Only the cover appears in the gallery.
     The pages array appears inside the modal.
     ========================= */

  {
    title: "Forest Friends",
    category: "community",

    image: "images/community/ForrestFriends.jpeg",

    pages: [
      "images/community/ForrestFriends.jpeg",
      "images/community/Rabbits.jpeg",
      "images/community/Beaver.jpeg",
      "images/community/Moose.jpeg"
    ],

    medium: "Children's Book Illustration",
    year: "2019",

    description:
      "Children's book illustrations created for children in the community, thoughtfully translated into French and Algonquin to celebrate language, culture, and storytelling."
  },


  /* =========================
     CHILDREN'S BOOK 2
     Caring for the Earth

     Only the cover appears in the gallery.
     The pages array appears inside the modal.
     ========================= */

  {
    title: "Caring for the Earth",
    category: "community",

    image: "images/community/CaringForTheEarth.jpeg",

    pages: [
      "images/community/CaringForTheEarth.jpeg",
      "images/community/Snowman.jpeg",
      "images/community/BookBirds.jpeg"
    ],

    medium: "Children's Book Illustration",
    year: "2019",

    description:
      "Children's book illustrations created for children in the community, helping share the history, culture, and traditions of Kebaowek First Nation."
  },


  {
    title: "Kebaowek First Nation Event",
    category: "community",
    image: "images/community/Jess.jpeg",
    medium: "Community Artwork",
    year: "2019",
    description:
      "A community outdoor painting workshop celebrating creativity, culture, and connection."
  },

  {
    title: "Kebaowek First Nation Event",
    category: "community",
    image: "images/community/KebaowekEvent.jpeg",
    medium: "Community Event",
    year: "2024",
    description:
      "Bringing people together through art, learning, and creativity in the outdoors."
  },

  {
    title: "Madahoki Farm",
    category: "community",
    image: "images/community/MadowkiFarm.jpeg",
    medium: "Community Event",
    year: "2023",
    description:
      "A festive holiday market featuring Indigenous artists, artisans, and community connections."
  },

  {
    title: "Temiscaming Christmas Market",
    category: "community",
    image: "images/community/Market.jpeg",
    medium: "Community Event",
    year: "2023",
    description:
      "Bringing creativity and community together at the Témiscaming Christmas Market."
  },

  {
    title: "First Line Services Women's Paint Night",
    category: "community",
    image: "images/community/Mom.jpeg",
    medium: "Community Artwork",
    year: "2023",
    description:
      "A relaxing paint night designed to encourage creativity, connection, and self-expression at Kebaowek First Nation."
  },

  {
    title: "Community Painting Workshop",
    category: "community",
    image: "images/community/Mya.jpeg",
    medium: "Community Artwork",
    year: "2024",
    description:
      "Painting workshop at a Kebaowek First Nation cultural event, bringing community members together to explore creativity while celebrating Anicinabe culture, traditions, and connection."
  },

  {
    title: "Temiscaming Christmas Market",
    category: "community",
    image: "images/community/Noms.jpeg",
    medium: "Community Project",
    year: "2024",
    description:
      "Market visitor proudly displaying a bear tote bag purchased from my art booth, supporting local art and creativity."
  },

  {
    title: "Cultural Event at Kebaowek First Nation",
    category: "community",
    image: "images/community/OutdoorPainting.jpeg",
    medium: "Outdoor Community Art",
    year: "2024",
    description:
      "Bringing community members of all ages together through creativity, connection, and shared painting experiences."
  },

  {
    title: "Temiscaming Christmas Market",
    category: "community",
    image: "images/community/SarahKyle.jpeg",
    medium: "Community Event",
    year: "2024",
    description:
      "A community market experience celebrating creativity, connection, and local artists."
  },

  {
    title: "Table Print Bag",
    category: "community",
    image: "images/community/TablePrintBag.jpeg",
    medium: "Printmaking Project",
    year: "2023",
    description:
      "A community printmaking project featuring original artwork and design."
  },

  {
    title: "Women's Paint Night",
    category: "community",
    image: "images/community/WomenPaint.jpeg",
    medium: "Community Painting",
    year: "2024",
    description:
      "A creative paint night that fosters connection, inspiration, and mutual support among women."
  }

];


/* -----------------------------------------------------
   2. Category names
   ----------------------------------------------------- */

const categoryLabels = {
  digital: "Digital Art",
  painting: "Painting",
  community: "Community"
};


/* -----------------------------------------------------
   3. Page elements
   ----------------------------------------------------- */

const gallery =
  document.getElementById("gallery");


const filterButtons =
  document.querySelectorAll(".filter-btn");


const modal =
  document.getElementById("modal");


const modalTitle =
  document.getElementById("modalTitle");


const modalDescription =
  document.getElementById("modalDescription");


const modalMedium =
  document.getElementById("modalMedium");


const modalYear =
  document.getElementById("modalYear");


const modalCategory =
  document.getElementById("modalCategory");


const modalArt =
  document.getElementById("modalArt");


/* Book modal controls */

const bookPrev =
  document.getElementById("bookPrev");


const bookNext =
  document.getElementById("bookNext");


const bookPageCount =
  document.getElementById("bookPageCount");


/* Current book / artwork state */

let currentArtwork = null;

let currentPages = [];

let currentPageIndex = 0;


/* Navigation */

const nav =
  document.getElementById("nav");


const navToggle =
  document.getElementById("navToggle");


const navMenu =
  document.getElementById("navMenu");


/* -----------------------------------------------------
   4. Fade-in animation
   ----------------------------------------------------- */

let revealObserver = null;


if ("IntersectionObserver" in window) {

  revealObserver =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }

    );

}


/* Add reveal animation to an element */

function observeReveal(element) {

  if (!element) {
    return;
  }


  if (revealObserver) {

    revealObserver.observe(element);

  } else {

    element.classList.add(
      "is-visible"
    );

  }

}


/* Observe anything already using .reveal */

document
  .querySelectorAll(".reveal")
  .forEach(observeReveal);


/* -----------------------------------------------------
   5. Build gallery
   ----------------------------------------------------- */

function getCardDescription(description, maxLength = 210) {
  const temp = document.createElement("div");
  temp.innerHTML = description || "";
  const text = (temp.textContent || temp.innerText || "").replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return { text, truncated: false };
  const shortened = text.slice(0, maxLength).replace(/\s+\S*$/, "").trim();
  return { text: `${shortened}…`, truncated: true };
}

function buildGallery() {

  if (!gallery) {
    return;
  }


  gallery.innerHTML = artworks
    .map((art, index) => {


      const yearHTML = art.year
        ? `
          <span>·</span>
          <span>${art.year}</span>
        `
        : "";


      /*
       If the artwork has multiple pages,
       show a small book label on the card.
      */

      const bookLabel = art.pages
        ? `
          <span class="art-book-label">
            ${art.galleryLabel || "View Book"}
          </span>
        `
        : "";


      return `

        <button
          class="art-card"
          type="button"
          data-category="${art.category}"
          data-index="${index}"
          aria-label="Open ${art.title}"
        >

          <div class="art-card-image-wrap">

            <img
              src="${art.image}"
              alt="${art.title}, artwork by Michelle St-Denis"
              class="art-card-image"
              loading="lazy"
            >

            ${bookLabel}

          </div>


          <div class="art-card-body">

            <h3>
              ${art.title}
            </h3>


            ${(() => {
              const cardDescription = getCardDescription(art.description);
              return `
                <p class="art-desc">${cardDescription.text}</p>
                ${cardDescription.truncated ? `<span class="art-view-more">View More</span>` : ""}
              `;
            })()}


            <div class="art-meta">

              <span>
                ${categoryLabels[art.category]}
              </span>

              ${yearHTML}

            </div>

          </div>

        </button>

      `;

    })

    .join("");


  /* Add click events to each artwork */

  const artworkCards =
    gallery.querySelectorAll(".art-card");


  artworkCards.forEach(card => {

    card.classList.add("reveal");

    observeReveal(card);


    card.addEventListener(
      "click",
      () => {

        const artworkIndex =
          Number(card.dataset.index);

        openModal(artworkIndex);

      }
    );

  });

}


/* -----------------------------------------------------
   6. Portfolio filters
   ----------------------------------------------------- */

filterButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {


      /* Remove active style from every filter */

      filterButtons.forEach(
        filterButton => {

          filterButton.classList.remove(
            "is-active"
          );

        }
      );


      /* Add active style to clicked filter */

      button.classList.add(
        "is-active"
      );


      const selectedFilter =
        button.dataset.filter;


      /* Show / hide artwork */

      document
        .querySelectorAll(".art-card")
        .forEach(card => {

          const matchesFilter =
            selectedFilter === "all" ||
            card.dataset.category ===
              selectedFilter;


          card.classList.toggle(
            "is-hidden",
            !matchesFilter
          );

        });

    }
  );

});


/* -----------------------------------------------------
   7. Open artwork / book modal
   ----------------------------------------------------- */

function openModal(index) {

  const artwork =
    artworks[index];


  if (!artwork || !modal) {
    return;
  }


  /* Remember the artwork that is currently open */

  currentArtwork =
    artwork;


  /*
   If the artwork has a pages array,
   use all of those images.

   Otherwise use the normal single image.
  */

  currentPages =
    artwork.pages &&
    artwork.pages.length
      ? artwork.pages
      : [artwork.image];


  /* Always begin with the first page */

  currentPageIndex = 0;


  /* Fill modal text */

  if (modalTitle) {

    modalTitle.textContent =
      artwork.title;

  }


  if (modalDescription) {

    modalDescription.innerHTML =
      artwork.description ||
      "More information about this artwork will be added soon.";

  }


  if (modalMedium) {

    modalMedium.textContent =
      artwork.medium ||
      "Not listed";

  }


  if (modalYear) {

    modalYear.textContent =
      artwork.year ||
      "To be added";

  }


  if (modalCategory) {

    modalCategory.textContent =
      categoryLabels[artwork.category] ||
      "Artwork";

  }


  /*
   Display either the artwork or
   the first page of the book.
  */

  updateModalPage();


  /* Open modal */

  modal.classList.add(
    "is-open"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";


  /* Move keyboard focus to close button */

  const closeButton =
    modal.querySelector(
      ".modal-close"
    );


  if (closeButton) {

    closeButton.focus();

  }

}


/* -----------------------------------------------------
   8. Update current book page
   ----------------------------------------------------- */

function updateModalPage() {

  if (
    !currentArtwork ||
    !currentPages.length ||
    !modalArt
  ) {

    return;

  }


  /* Change the displayed image */

  const currentImage =
    currentPages[currentPageIndex];

  modalArt.src =
    currentImage;


  /*
   Use the current artwork as the soft, blurred
   background behind the main image.
  */

  const modalImageWrap =
    modalArt.closest(".modal-image-wrap");

  if (modalImageWrap) {

    modalImageWrap.style.setProperty(
      "--modal-bg-image",
      `url("${currentImage}")`
    );

  }


  /*
   Accessible image description
  */

  if (currentPages.length > 1) {

    modalArt.alt =
      `${currentArtwork.title}, page ${currentPageIndex + 1} of ${currentPages.length}, illustrated by Michelle St-Denis`;

  } else {

    modalArt.alt =
      `${currentArtwork.title}, artwork by Michelle St-Denis`;

  }


  /*
   If there is more than one image,
   this is treated as a book.
  */

  const isBook =
    currentPages.length > 1;


  /* Show / hide previous arrow */

  if (bookPrev) {

    bookPrev.hidden =
      !isBook;

  }


  /* Show / hide next arrow */

  if (bookNext) {

    bookNext.hidden =
      !isBook;

  }


  /* Show / hide page number */

  if (bookPageCount) {

    bookPageCount.hidden =
      !isBook;


    if (isBook) {

      bookPageCount.textContent =
        `Page ${currentPageIndex + 1} of ${currentPages.length}`;

    } else {

      bookPageCount.textContent =
        "";

    }

  }

}


/* -----------------------------------------------------
   9. Change children's book page
   ----------------------------------------------------- */

function changeBookPage(direction) {

  /*
   Regular artwork has only one image,
   so there is nothing to change.
  */

  if (currentPages.length <= 1) {
    return;
  }


  currentPageIndex +=
    direction;


  /*
   If the visitor clicks backwards from
   page 1, loop to the last page.
  */

  if (currentPageIndex < 0) {

    currentPageIndex =
      currentPages.length - 1;

  }


  /*
   If the visitor clicks forward from
   the final page, return to page 1.
  */

  if (
    currentPageIndex >=
    currentPages.length
  ) {

    currentPageIndex = 0;

  }


  updateModalPage();

}


/* Previous page button */

if (bookPrev) {

  bookPrev.addEventListener(
    "click",
    event => {

      /*
       Prevent the click from doing
       anything else inside the modal.
      */

      event.stopPropagation();

      changeBookPage(-1);

    }
  );

}


/* Next page button */

if (bookNext) {

  bookNext.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      changeBookPage(1);

    }
  );

}


/* -----------------------------------------------------
   10. Close artwork modal
   ----------------------------------------------------- */

function closeModal() {

  if (!modal) {
    return;
  }


  modal.classList.remove(
    "is-open"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";


  /*
   Reset book information so the next
   artwork starts fresh.
  */

  currentArtwork = null;

  currentPages = [];

  currentPageIndex = 0;


  if (bookPrev) {

    bookPrev.hidden = true;

  }


  if (bookNext) {

    bookNext.hidden = true;

  }


  if (bookPageCount) {

    bookPageCount.hidden = true;

    bookPageCount.textContent = "";

  }

}


/* Anything with data-close closes modal */

if (modal) {

  modal
    .querySelectorAll("[data-close]")
    .forEach(element => {

      element.addEventListener(
        "click",
        closeModal
      );

    });

}


/* -----------------------------------------------------
   11. Keyboard controls for modal
   ----------------------------------------------------- */

document.addEventListener(
  "keydown",
  event => {


    if (
      !modal ||
      !modal.classList.contains(
        "is-open"
      )
    ) {

      return;

    }


    /* Escape closes the modal */

    if (event.key === "Escape") {

      closeModal();

      return;

    }


    /*
     Arrow keys flip through book pages
     when a book is open.
    */

    if (
      event.key === "ArrowLeft" &&
      currentPages.length > 1
    ) {

      changeBookPage(-1);

    }


    if (
      event.key === "ArrowRight" &&
      currentPages.length > 1
    ) {

      changeBookPage(1);

    }

  }
);


/* -----------------------------------------------------
   12. Mobile navigation
   ----------------------------------------------------- */

if (navToggle && navMenu) {

  navToggle.addEventListener(
    "click",
    () => {


      const menuIsOpen =
        navMenu.classList.toggle(
          "is-open"
        );


      navToggle.classList.toggle(
        "is-open",
        menuIsOpen
      );


      navToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
          ? "true"
          : "false"
      );


      navToggle.setAttribute(
        "aria-label",
        menuIsOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );

    }
  );


  /*
   Close the mobile menu whenever
   a navigation link is selected.
  */

  navMenu
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {


          navMenu.classList.remove(
            "is-open"
          );


          navToggle.classList.remove(
            "is-open"
          );


          navToggle.setAttribute(
            "aria-expanded",
            "false"
          );


          navToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
          );

        }
      );

    });

}


/* -----------------------------------------------------
   13. Navigation shadow
   ----------------------------------------------------- */

window.addEventListener(
  "scroll",
  () => {


    if (!nav) {
      return;
    }


    nav.classList.toggle(
      "is-scrolled",
      window.scrollY > 30
    );

  }
);


/* -----------------------------------------------------
   14. Smooth scrolling
   ----------------------------------------------------- */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {


        const targetID =
          link.getAttribute("href");


        if (
          !targetID ||
          targetID === "#"
        ) {

          return;

        }


        const targetSection =
          document.querySelector(
            targetID
          );


        if (!targetSection) {
          return;
        }


        event.preventDefault();


        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* -----------------------------------------------------
   15. Contact form

   The form submits directly to FormSubmit from index.html
   so messages can be delivered to Michelle's email.
   ----------------------------------------------------- */


/* -----------------------------------------------------
   16. Start the portfolio gallery
   ----------------------------------------------------- */

buildGallery();
