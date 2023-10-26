const Els = document.querySelectorAll('.change-theme')
const HTML = document.querySelector("html")
Els.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        if (localStorage?.theme === 'light') {
            localStorage.setItem('theme', 'dark')
            HTML.classList.add('dark')
        } else {
            localStorage.setItem('theme', 'light')
            HTML.classList.remove('dark')
        }
    })
})


// menu responsive
const els_open = document.querySelectorAll('.open-menu')
const els_close = document.querySelectorAll('.close-menu')
const menu = document.querySelector('.menu-responsive')
const bg_close = document.querySelector('.bg-close')
const classEventsMenuRes = [
    {
        node: menu,
        open: [
            {event: 'add', class: 'translate-x-0'},
            {event: 'add', class: 'pointer-events-all'},
            {event: 'remove', class: 'translate-x-full'},
            {event: 'remove', class: 'pointer-events-none'},
        ],
        close: [
            {event: 'add', class: 'translate-x-full'},
            {event: 'add', class: 'pointer-events-none'},
            {event: 'remove', class: 'translate-x-0'},
            {event: 'remove', class: 'pointer-events-all'},
        ]
    },
    {
        node: bg_close,
        open: [
            {event: 'add', class: 'opacity-1'},
            {event: 'add', class: 'pointer-events-all'},
            {event: 'remove', class: 'opacity-0'},
            {event: 'remove', class: 'pointer-events-none'},
        ],
        close: [
            {event: 'add', class: 'opacity-0'},
            {event: 'add', class: 'pointer-events-none'},
            {event: 'remove', class: 'opacity-1'},
            {event: 'remove', class: 'pointer-events-all'},
        ]
    },
]
els_open.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        classEventsMenuRes.map(itemParent => {
            itemParent.open.map(item => {
                if (item.event === 'add') {
                    itemParent.node.classList.add(item.class)
                } else {
                    itemParent.node.classList.remove(item.class)
                }
            })
        })
    })
})
els_close.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        classEventsMenuRes.map(itemParent => {
            itemParent.close.map(item => {
                if (item.event === 'add') {
                    itemParent.node.classList.add(item.class)
                } else {
                    itemParent.node.classList.remove(item.class)
                }
            })
        })
    })
})

// sub menu
const is_nested_menu = document.querySelectorAll('.menu-mobile > li')
is_nested_menu.forEach(el => {
    if (el.lastElementChild.nodeName === 'UL') {
        el.firstElementChild.innerHTML += '<svg class="w-4 h-4 text-zinc-700 dark:text-white transition"><use href="#chevron-left"></use></svg>'
        el.classList.add('relative')
        el.firstElementChild.addEventListener('click', e => {
            e.preventDefault();

            const classEvents = [
                {
                    node: el.firstElementChild.firstElementChild,
                    open: [
                        {event: 'add', class: 'text-bright-yellow-100'},
                        {event: 'add', class: 'dark:text-bright-yellow-100'},
                        {event: 'remove', class: 'text-zinc-700'},
                        {event: 'remove', class: 'dark:text-white'},
                    ],
                    close: [
                        {event: 'add', class: 'dark:text-white'},
                        {event: 'add', class: 'text-zinc-700'},
                        {event: 'remove', class: 'text-bright-yellow-100'},
                        {event: 'remove', class: 'dark:text-bright-yellow-100'},
                    ]
                },
                {
                    node: el.firstElementChild.lastElementChild,
                    open: [
                        {event: 'add', class: 'text-bright-yellow-100'},
                        {event: 'add', class: 'dark:text-bright-yellow-100'},
                        {event: 'remove', class: 'text-zinc-700'},
                        {event: 'remove', class: 'dark:text-white'},
                    ],
                    close: [
                        {event: 'add', class: 'dark:text-white'},
                        {event: 'add', class: 'text-zinc-700'},
                        {event: 'remove', class: 'text-bright-yellow-100'},
                        {event: 'remove', class: 'dark:text-bright-yellow-100'},
                    ]
                },
                {
                    node: el.lastElementChild,
                    open: [
                        {event: 'add', class: 'opacity-1'},
                        {event: 'add', class: 'h-100'},
                        {event: 'add', class: 'relative'},
                        {event: 'add', class: 'pointer-events-all'},
                        {event: 'remove', class: 'pointer-events-none'},
                        {event: 'remove', class: 'absolute'},
                        {event: 'remove', class: 'h-0'},
                        {event: 'remove', class: 'opacity-0'},
                    ],
                    close: [
                        {event: 'add', class: 'opacity-0'},
                        {event: 'add', class: 'h-0'},
                        {event: 'add', class: 'absolute'},
                        {event: 'add', class: 'pointer-events-none'},
                        {event: 'remove', class: 'pointer-events-all'},
                        {event: 'remove', class: 'opacity-1'},
                        {event: 'remove', class: 'h-100'},
                        {event: 'remove', class: 'relative'},
                    ]
                },
                {
                    node: el.firstElementChild.lastElementChild,
                    open: [
                        {event: 'add', class: 'rotate-[-90deg]'},
                        {event: 'remove', class: 'rotate-0'},
                    ],
                    close: [
                        {event: 'add', class: 'rotate-0'},
                        {event: 'remove', class: 'rotate-[-90deg]'},
                    ]
                }
            ]

            if (el.firstElementChild.getAttribute('data-open') === 'false') {
                classEvents.map(itemParent => {
                    itemParent.open.map(item => {
                        if (item.event === 'add') {
                            itemParent.node.classList.add(item.class)
                        } else {
                            itemParent.node.classList.remove(item.class)
                        }
                    })
                })
                el.firstElementChild.setAttribute('data-open', 'true')
            } else {
                classEvents.map(itemParent => {
                    itemParent.close.map(item => {
                        if (item.event === 'add') {
                            itemParent.node.classList.add(item.class)
                        } else {
                            itemParent.node.classList.remove(item.class)
                        }
                    })
                })
                el.firstElementChild.setAttribute('data-open', 'false')

            }
        })
    }
})

// cart responsive
const els_open_cart = document.querySelectorAll('.open-cart')
const els_close_cart = document.querySelectorAll('.close-cart')
const cart = document.querySelector('.cart-responsive')
const bg_close_cart = document.querySelector('.bg-close-cart')
const classEventsCardRes = [
    {
        node: cart,
        open: [
            {event: 'add', class: 'translate-x-0'},
            {event: 'add', class: 'pointer-events-all'},
            {event: 'remove', class: '-translate-x-full'},
            {event: 'remove', class: 'pointer-events-none'},
        ],
        close: [
            {event: 'add', class: '-translate-x-full'},
            {event: 'add', class: 'pointer-events-none'},
            {event: 'remove', class: 'translate-x-0'},
            {event: 'remove', class: 'pointer-events-all'},
        ]
    },
    {
        node: bg_close_cart,
        open: [
            {event: 'add', class: 'opacity-1'},
            {event: 'add', class: 'pointer-events-all'},
            {event: 'remove', class: 'opacity-0'},
            {event: 'remove', class: 'pointer-events-none'},
        ],
        close: [
            {event: 'add', class: 'opacity-0'},
            {event: 'add', class: 'pointer-events-none'},
            {event: 'remove', class: 'opacity-1'},
            {event: 'remove', class: 'pointer-events-all'},
        ]
    },
]
els_open_cart.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        classEventsCardRes.map(itemParent => {
            itemParent.open.map(item => {
                if (item.event === 'add') {
                    itemParent.node.classList.add(item.class)
                } else {
                    itemParent.node.classList.remove(item.class)
                }
            })
        })
    })
})
els_close_cart.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        classEventsCardRes.map(itemParent => {
            itemParent.close.map(item => {
                if (item.event === 'add') {
                    itemParent.node.classList.add(item.class)
                } else {
                    itemParent.node.classList.remove(item.class)
                }
            })
        })
    })
})

window.addEventListener('load', () => {
    let swiper = new Swiper('.swiper', {
        spaceBetween: 20,
        loop: true,
        slidesPerView: 4,
        paginationClickable: true,

        navigation: {
            nextEl: '.swiper-button-next-best-selling',
            prevEl: '.swiper-button-prev-best-selling',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            768:{
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });
})