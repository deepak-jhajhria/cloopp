const mobileView = document.querySelector('.mobileView')

function toggleMobileView() {
    mobileView.classList.toggle('show')
    if (mobileView.classList.contains('show')
    ) {
        document.body.classList.add('overflow-hidden')
        document.getElementById('span1').classList.add('span1')
        document.getElementById('span2').classList.add('span2')
        document.getElementById('span3').classList.add('span3')
    } else {
        document.body.classList.remove('overflow-hidden')
        document.getElementById('span1').classList.remove('span1')
        document.getElementById('span2').classList.remove('span2')
        document.getElementById('span3').classList.remove('span3')
    }
}
function overflowRemoveButton() {
    mobileView.classList.remove('show')
    document.body.classList.remove('overflow-hidden')
    document.getElementById('span1').classList.remove('span1')
    document.getElementById('span2').classList.remove('span2')
    document.getElementById('span3').classList.remove('span3')
}
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        accordionItemHeader.classList.replace('icon', 'minus');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemHeader.classList.replace('minus', 'icon');
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});
const defaultAccordionItemHeader = document.querySelector(".accordion-item-header-1");
if (defaultAccordionItemHeader) {
    defaultAccordionItemHeader.click();
}
const defaultAccordionItemHeader2 = document.querySelector(".accordion-item-header-2");
if (defaultAccordionItemHeader2) {
    defaultAccordionItemHeader2.click();
}

