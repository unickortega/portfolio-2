$(document).ready(function(){

    // tooltip
    $('[data-toggle="tooltip"]').tooltip()

    // jquery elements
    var nav_links = $('#nav ul li')
    var sections = $('section')


    /** smooth scroll */
    
    nav_links.find('a').on('click', function(e){
        
        var section = $($(this).attr('href'))
        var hash = this.hash

        // check if section is found
        if(section) {
            e.preventDefault()
            section.scrollTop()
            $('html, body').stop().animate({
                'scrollTop': section.position().top
            }, 800, 'swing', function () {
                window.location.hash = hash;
            });
        }

    })



    /** Highlight the current section on the navigation */

    $(window).on('scroll', function(e){

        updateSideNavigation()

    })

    function updateSideNavigation() {
        let possibly_current;
        const offset = 100;

        sections.each(function(){
            var cal_top = $(this).position().top - offset
            if(cal_top <= $(window).scrollTop()) {
                possibly_current = $(this).attr('id')
            }
        })

        possibly_current = possibly_current || 'home'
        nav_links.removeClass('active')
        nav_links.find('a[href="#'+possibly_current+'"]').parent().addClass('active')
    }
    updateSideNavigation()
    /** ----------------------------------------------- */
})