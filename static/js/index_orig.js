//window.HELP_IMPROVE_VIDEOJS = false;
//
//
//$(document).ready(function() {
//    // Check for click events on the navbar burger icon
//
//    var options = {
//			slidesToScroll: 1,
//			slidesToShow: 1,
//			loop: true,
//			infinite: true,
//			autoplay: true,
//			autoplaySpeed: 5000,
//    }
//
//		// Initialize all div with carousel class
//    var carousels = bulmaCarousel.attach('.carousel', options);
//
//    bulmaSlider.attach();
//
//})

      document.addEventListener('DOMContentLoaded', function() {
            const thumbnailVideos = document.querySelectorAll('.friendly-interaction-video');
            const inputVideo = document.getElementById('input-video');
            const outputVideo = document.getElementById('output-video');

            const sharedCaption = document.getElementById('shared-caption');

            // Add click event listeners to each thumbnail video
            thumbnailVideos.forEach(video => {
                video.addEventListener('click', function() {
                    // Get the input and output video paths from data attributes
                    const inputSrc = this.getAttribute('data-input');
                    const outputSrc = this.getAttribute('data-output');
                    const captionText = this.getAttribute('data-caption');

                    // Update the source of the large videos
                    inputVideo.querySelector('source').src = inputSrc;
                    outputVideo.querySelector('source').src = outputSrc;

                    sharedCaption.textContent = captionText;

                    // Reload the videos to apply the new sources
                    inputVideo.load();
                    outputVideo.load();

                    // Play the videos
                    inputVideo.play();
                    outputVideo.play();

                    // Remove highlight from all thumbnails
                    thumbnailVideos.forEach(v => {
                        v.style.borderColor = 'transparent';
                    });

                    // Highlight the clicked thumbnail
                    this.style.borderColor = '#3498db';
                });
            });

            // Set initial selection
            thumbnailVideos[5].style.borderColor = '#3498db';
        });

// bootstrap 4 breakpoints
const breakpoint = {
  // small screen / phone
  sm: 576,
  // medium screen / tablet
  md: 768,
  // large screen / desktop
  lg: 992,
  // extra large screen / wide desktop
  xl: 1200
};

// bootstrap 4 responsive multi column slick carousel
$(document).ready(function(){
$('#slick').slick({
  autoplay: true,
  autoplaySpeed: 6000,
  draggable: true,
  pauseOnHover: false,
  infinite: true,
  dots: false,
  arrows: true,
  speed: 1000,
  adaptiveHeight: false,
  useTransform: false, // fix for safari

  mobileFirst: true,

  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [{
      breakpoint: breakpoint.sm,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: breakpoint.md,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: breakpoint.lg,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: breakpoint.xl,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});

document.querySelectorAll('.spotlight').forEach((spotlight, i) => {
  gsap.to(spotlight, {
    opacity: 1,
    duration: 1.5,
    delay: i * 0.2,
    ease: "power2.out"
  });

  // Optional: create soft pulse effect
  gsap.to(spotlight, {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "sine.inOut"
  });
});

// Add this to your index.js file or replace the existing thumbnail video click handler

document.addEventListener('DOMContentLoaded', function() {
    const thumbnailVideos = document.querySelectorAll('.friendly-interaction-video');
    const inputVideo = document.getElementById('input-video');
    const outputVideo = document.getElementById('output-video');
    const sharedCaption = document.getElementById('shared-caption');

    // Function to check if the screen is small (mobile)
    function isMobileView() {
        return window.innerWidth <= 576;
    }

    // Adjust videos container based on screen size
    function adjustVideoContainer() {
        const videoContainer = inputVideo.parentElement;

        if (isMobileView()) {
            // For mobile: stack the videos
            if (videoContainer.style.flexDirection !== 'column') {
                videoContainer.style.flexDirection = 'column';
                videoContainer.style.alignItems = 'center';
            }
        } else {
            // For larger screens: side by side
            if (videoContainer.style.flexDirection !== 'row') {
                videoContainer.style.flexDirection = 'row';
                videoContainer.style.alignItems = 'flex-start';
            }
        }
    }

    // Call this function initially and on window resize
    adjustVideoContainer();
    window.addEventListener('resize', adjustVideoContainer);

    // Add click event listeners to each thumbnail video
    thumbnailVideos.forEach(video => {
        video.addEventListener('click', function() {
            // Get the input and output video paths from data attributes
            const inputSrc = this.getAttribute('data-input');
            const outputSrc = this.getAttribute('data-output');
            const captionText = this.getAttribute('data-caption');

            // Update the source of the large videos
            inputVideo.querySelector('source').src = inputSrc;
            outputVideo.querySelector('source').src = outputSrc;

            sharedCaption.textContent = captionText;

            // Reload the videos to apply the new sources
            inputVideo.load();
            outputVideo.load();

            // Play the videos
            inputVideo.play();
            outputVideo.play();

            // Remove highlight from all thumbnails
            thumbnailVideos.forEach(v => {
                v.style.borderColor = 'transparent';
            });

            // Highlight the clicked thumbnail
            this.style.borderColor = '#3498db';

            // Re-check layout after changing videos
            adjustVideoContainer();
        });
    });

    // Set initial selection
    if (thumbnailVideos.length > 5) {
        thumbnailVideos[5].style.borderColor = '#3498db';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const thumbnailVideos = document.querySelectorAll('.friendly-interaction-video');
    const inputVideo = document.getElementById('input-video');
    const outputVideo = document.getElementById('output-video');
    const sharedCaption = document.getElementById('shared-caption');

    // Function to synchronize the two selected videos
    function syncVideos(video1, video2) {
        // Sync play events
        video1.addEventListener('play', () => {
            if (video2.paused) {
                video2.currentTime = video1.currentTime;
                video2.play().catch(error => console.error('Play error:', error));
            }
        });

        video2.addEventListener('play', () => {
            if (video1.paused) {
                video1.currentTime = video2.currentTime;
                video1.play().catch(error => console.error('Play error:', error));
            }
        });

        // Sync pause events
        video1.addEventListener('pause', () => {
            if (!video2.paused) {
                video2.pause();
            }
        });

        video2.addEventListener('pause', () => {
            if (!video1.paused) {
                video1.pause();
            }
        });

        // Keep time in sync during playback
        video1.addEventListener('timeupdate', () => {
            // Only sync if the time difference is significant
            if (Math.abs(video1.currentTime - video2.currentTime) > 0.3) {
                video2.currentTime = video1.currentTime;
            }
        });
    }

    // Apply synchronization to the main videos
    syncVideos(inputVideo, outputVideo);

    // Function to handle layout changes based on screen size
    function handleResponsiveLayout() {
        const selectedVideosContainer = document.querySelector('.selected-videos-container');

        if (window.innerWidth <= 576) {
            // Mobile view - stack vertically
            selectedVideosContainer.style.flexDirection = 'column';
        } else {
            // Desktop view - side by side
            selectedVideosContainer.style.flexDirection = 'row';
        }
    }

    // Call responsive layout handler on page load and resize
    handleResponsiveLayout();
    window.addEventListener('resize', handleResponsiveLayout);

    // Add click event listeners to thumbnail videos
    thumbnailVideos.forEach(video => {
        video.addEventListener('click', function() {
            // Get video sources and caption
            const inputSrc = this.getAttribute('data-input');
            const outputSrc = this.getAttribute('data-output');
            const captionText = this.getAttribute('data-caption');

            // Update sources
            inputVideo.querySelector('source').src = inputSrc;
            outputVideo.querySelector('source').src = outputSrc;

            // Update caption
            sharedCaption.textContent = captionText;

            // Reload and play videos
            inputVideo.load();
            outputVideo.load();

            // Use a promise to ensure both videos load before playing
            Promise.all([
                new Promise(resolve => {
                    inputVideo.onloadeddata = resolve;
                }),
                new Promise(resolve => {
                    outputVideo.onloadeddata = resolve;
                })
            ]).then(() => {
                inputVideo.play();
                outputVideo.play();
            }).catch(error => {
                console.error('Video loading error:', error);
            });

            // Update UI - highlight the selected thumbnail
            thumbnailVideos.forEach(v => {
                v.style.borderColor = 'transparent';
            });
            this.style.borderColor = '#3498db';
        });
    });

    // Set initial selection
    if (thumbnailVideos.length > 5) {
        thumbnailVideos[5].style.borderColor = '#3498db';
    }

    // Handle video errors gracefully
    [inputVideo, outputVideo, ...thumbnailVideos].forEach(video => {
        video.addEventListener('error', function() {
            console.error('Video error:', this.querySelector('source').src);
            this.style.backgroundColor = '#f8d7da'; // Light red background to indicate error
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Carousel elements
    const carouselTrack = document.querySelector('.video-carousel-track');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const thumbnailVideos = document.querySelectorAll('.video-carousel-track .friendly-interaction-video');
    const inputVideo = document.getElementById('input-video');
    const outputVideo = document.getElementById('output-video');
    const sharedCaption = document.getElementById('shared-caption');

    // Set default selected video
    if (thumbnailVideos.length > 5) {
        thumbnailVideos[5].classList.add('selected');
    }

    // Carousel scroll functionality
    function scrollCarousel(direction) {
        const scrollAmount = 220; // Adjust based on thumbnail width + gap
        if (direction === 'left') {
            carouselTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            carouselTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    // Add event listeners to carousel buttons
    if (prevButton) prevButton.addEventListener('click', () => scrollCarousel('left'));
    if (nextButton) nextButton.addEventListener('click', () => scrollCarousel('right'));

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') scrollCarousel('left');
        if (e.key === 'ArrowRight') scrollCarousel('right');
    });

    // Function to synchronize the two selected videos
    function syncVideos(video1, video2) {
        // Sync play events
        video1.addEventListener('play', () => {
            if (video2.paused) {
                video2.currentTime = video1.currentTime;
                video2.play().catch(error => console.error('Play error:', error));
            }
        });

        video2.addEventListener('play', () => {
            if (video1.paused) {
                video1.currentTime = video2.currentTime;
                video1.play().catch(error => console.error('Play error:', error));
            }
        });

        // Sync pause events
        video1.addEventListener('pause', () => {
            if (!video2.paused) {
                video2.pause();
            }
        });

        video2.addEventListener('pause', () => {
            if (!video1.paused) {
                video1.pause();
            }
        });

        // Keep time in sync during playback
        video1.addEventListener('timeupdate', () => {
            // Only sync if the time difference is significant
            if (Math.abs(video1.currentTime - video2.currentTime) > 0.3) {
                video2.currentTime = video1.currentTime;
            }
        });
    }

    // Apply synchronization to the main videos
    syncVideos(inputVideo, outputVideo);

    // Add click event listeners to each thumbnail video
    thumbnailVideos.forEach(video => {
        video.addEventListener('click', function() {
            // Get the input and output video paths from data attributes
            const inputSrc = this.getAttribute('data-input');
            const outputSrc = this.getAttribute('data-output');
            const captionText = this.getAttribute('data-caption');

            // Update the source of the large videos
            inputVideo.querySelector('source').src = inputSrc;
            outputVideo.querySelector('source').src = outputSrc;

            // Update caption
            sharedCaption.textContent = captionText;

            // Reload the videos to apply the new sources
            inputVideo.load();
            outputVideo.load();

            // Use a promise to ensure both videos load before playing
            Promise.all([
                new Promise(resolve => {
                    inputVideo.onloadeddata = resolve;
                }),
                new Promise(resolve => {
                    outputVideo.onloadeddata = resolve;
                })
            ]).then(() => {
                inputVideo.play();
                outputVideo.play();
            }).catch(error => {
                console.error('Video loading error:', error);
            });

            // Remove highlight from all thumbnails
            thumbnailVideos.forEach(v => {
                v.classList.remove('selected');
            });

            // Highlight the clicked thumbnail
            this.classList.add('selected');
        });
    });

    // Auto-scroll functionality (optional)
    let autoScrollInterval;

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            scrollCarousel('right');
        }, 5000); // Scroll every 5 seconds
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Start auto-scroll
    startAutoScroll();

    // Pause auto-scroll when hovering over carousel
    carouselTrack.addEventListener('mouseenter', stopAutoScroll);
    carouselTrack.addEventListener('mouseleave', startAutoScroll);

    // Stop auto-scroll when user interacts with arrows
    prevButton.addEventListener('click', () => {
        stopAutoScroll();
        // Optionally restart after a delay
        setTimeout(startAutoScroll, 10000);
    });

    nextButton.addEventListener('click', () => {
        stopAutoScroll();
        // Optionally restart after a delay
        setTimeout(startAutoScroll, 10000);
    });

    // Handle touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carouselTrack.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoScroll();
    }, { passive: true });

    carouselTrack.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        // Restart auto-scroll after a delay
        setTimeout(startAutoScroll, 10000);
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe left, scroll right
            scrollCarousel('right');
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe right, scroll left
            scrollCarousel('left');
        }
    }
});

// Modal functionality for comparison wrappers
document.addEventListener('DOMContentLoaded', function() {
  // Add the modal HTML to the body
  const modalHTML = `
    <div id="video-modal" class="video-modal">
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <div class="modal-video-container">
          <div class="modal-video-side">
            <h3>🎬 INPUT VIDEO</h3>
            <div class="modal-video-wrapper">
              <video id="modal-input-video" autoplay loop muted playsinline></video>
            </div>
          </div>
          <div class="modal-video-side">
            <h3>✨ VFX RESULT</h3>
            <div class="modal-video-wrapper">
              <video id="modal-result-video" autoplay loop muted playsinline></video>
            </div>
          </div>
        </div>
        <div class="modal-caption">
          <p id="modal-caption-text"></p>
        </div>
      </div>
    </div>
  `;

  // Append the modal HTML to the body
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Get the modal
  const modal = document.getElementById('video-modal');
  const modalInputVideo = document.getElementById('modal-input-video');
  const modalResultVideo = document.getElementById('modal-result-video');
  const modalCaptionText = document.getElementById('modal-caption-text');
  const closeBtn = document.querySelector('.close-modal');

  // Get all comparison wrappers
  const comparisonWrappers = document.querySelectorAll('.comparison-wrapper');

  // Add click event to all comparison wrappers
  comparisonWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', function(event) {
      // Get the video sources
      const inputVideo = wrapper.querySelector('[id^="input-video_"]');
      const resultVideo = wrapper.querySelector('[id^="result-video_"]');

      if (inputVideo && resultVideo) {
        const inputSrc = inputVideo.querySelector('source').src;
        const resultSrc = resultVideo.querySelector('source').src;

        // Get the prompt text - either from completed typewriter or from data-text attribute
        let captionText = '';
        const typewriterDiv = wrapper.querySelector('[class^="typewriter-input-"]');

        if (typewriterDiv) {
          // Try to get text from typed spans
          const typedSpans = typewriterDiv.querySelectorAll('[class^="typed-text_"]');
          if (typedSpans.length > 0) {
            const textArray = Array.from(typedSpans).map(span => span.textContent);
            captionText = textArray.join('');
          } else if (typewriterDiv.dataset.text) {
            // Fallback to data-text attribute if typing hasn't started
            captionText = typewriterDiv.dataset.text;
          }

          // Another fallback: extract from the typewriter initialization function
          if (!captionText) {
            const idMatch = typewriterDiv.className.match(/typewriter-input-(\d+)/);
            if (idMatch && idMatch[1]) {
              const id = idMatch[1];
              const scripts = document.querySelectorAll('script');
              for (let script of scripts) {
                const content = script.textContent;
                if (content && content.includes(`initializeVideo_${id}`)) {
                  const textMatch = content.match(new RegExp(`text_${id} = ["'](.+?)["']`));
                  if (textMatch && textMatch[1]) {
                    captionText = textMatch[1];
                    break;
                  }
                }
              }
            }
          }
        }

        // Set modal content
        modalInputVideo.innerHTML = `<source src="${inputSrc}" type="video/mp4">`;
        modalResultVideo.innerHTML = `<source src="${resultSrc}" type="video/mp4">`;
        modalCaptionText.textContent = captionText;

        // Load and play videos
        modalInputVideo.load();
        modalResultVideo.load();
        modalInputVideo.play().catch(e => console.log('Play error:', e));
        modalResultVideo.play().catch(e => console.log('Play error:', e));

        // Show modal
        modal.style.display = 'block';

        // Prevent the event from bubbling up
        event.stopPropagation();
      }
    });
  });

  // Close modal when clicking the X
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';

    // Pause videos when closing
    modalInputVideo.pause();
    modalResultVideo.pause();
  });

  // Close modal when clicking outside the content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';

      // Pause videos when closing
      modalInputVideo.pause();
      modalResultVideo.pause();
    }
  });

  // Close modal with ESC key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';

      // Pause videos when closing
      modalInputVideo.pause();
      modalResultVideo.pause();
    }
  });

  // Add data-text attributes to typewriter elements
  function addDataTextAttributes() {
    const typewriterDivs = document.querySelectorAll('[class^="typewriter-input-"]');
    typewriterDivs.forEach(div => {
      const idMatch = div.className.match(/typewriter-input-(\d+)/);
      if (idMatch && idMatch[1]) {
        const id = idMatch[1];
        const scripts = document.querySelectorAll('script');
        for (let script of scripts) {
          const content = script.textContent;
          if (content && content.includes(`initializeVideo_${id}`)) {
            const textMatch = content.match(new RegExp(`text_${id} = ["'](.+?)["']`));
            if (textMatch && textMatch[1]) {
              div.dataset.text = textMatch[1];
              break;
            }
          }
        }
      }
    });
  }

  // Call this function after the page has loaded
  setTimeout(addDataTextAttributes, 500);
});