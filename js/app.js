$(document).ready(function (){
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    })
    const bars = document.querySelectorAll('.progress_bar')
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%'
        bar.style.width = percentage + '%'
        
    })

    // img filter
    var $wrapper = $('.portfolio_wrapper');
    
    let lnk = document.querySelectorAll('.tabs a')
    lnk.forEach(link => {
        let selector = link.dataset.filter
        link.addEventListener('click', function(e){
            e.preventDefault();


            $wrapper.isotope({
                filter: selector,
                layoutMode : 'masonry',
                animationOption : {
                    duration : 750,
                    easing: 'linear'
                }
            })
            
            lnk.forEach(link => {
                link.classList.remove('active')
            })
            e.target.classList.add('active')
        })
        
    })
    $(window).bind("load", function () {
        $wrapper.isotope({
            filter: '*',
            layoutMode : 'masonry',
            animationOption : {
                duration : 750,
                easing: 'linear'
            }
        })
    })
    $('.magnify').magnificPopup({
        type:'image',
        gallery:{
            enabled : true
        },
        zoom : {
            enable : true
        }
    })

    $('.slider').slick({
        arrows: false,
        autoplay : true
    })
    
})
document.getElementById('years').innerHTML = new Date().getFullYear();