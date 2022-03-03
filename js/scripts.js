import reflections from './reflections.js'

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    function reflection({ img, name, role, a, b, c }) {
        return `
        <hr>
        <div class="row my-5">
            <div class="col-lg-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="assets/img/profile/${img}" alt="${name}" />
                    <h4>${name}</h4>
                    <p class="text-muted">${role}</p>
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="col-lg-8">
                <ol type="1" class="small">
                    <li>
                        <strong>
                            What are the things you've learn in Adobe Photoshop?
                        </strong>
                        <p>
                           ${a}
                        </p>
                    </li>
                    <li>
                        <strong>
                            Adobe Photoshop as a way of life?
                        </strong>
                        <p>
                          ${b}
                        </p>
                    </li>
                    <li>
                        <strong>
                            Cite a scenario on how you will apply this in real life situation?
                        </strong>
                        <p>
                            ${c}
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    `
    }

    document.querySelector('#reflection-list').innerHTML = reflections.map(reflection).join``
});

