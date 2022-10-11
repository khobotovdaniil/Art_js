const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    const eventClick = (selector) => {
        const btn = menu.querySelector(selector),
              mark = wrapper.querySelectorAll(selector);

        btn.addEventListener('click', () => {
            if (mark.length == 0) {
                typeFilter();
            } else {
                typeFilter(mark);
            }

        });
    };

    eventClick('.all');
    eventClick('.lovers');
    eventClick('.chef');
    eventClick('.girl');
    eventClick('.guy');
    eventClick('.grandmother');
    eventClick('.granddad');

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    })

};

export default filter;