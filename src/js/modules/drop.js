import { postData } from "../services/requests";

const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, 0.7)';
    }

    function unhighlight(item) {
        const itemStyle = item.closest('.file_upload').style;

        itemStyle.border = 'none';

        if (item.closest('.calc_form')) {
            itemStyle.backgroundColor = '#fff';
        } else if (item.closest('.popup-content')) {
            itemStyle.backgroundColor = '#ededed'; 
        } else {
            itemStyle.backgroundColor = '#f7e7e6';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;

            let dots;
            const arr = input.files[0].name.split('.');
            
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;

            if (!input.closest('.calc_form') && !input.closest('.popup-content'))  {

                var data = new FormData();
                data.append('file', input.files[0]);

                postData('assets/server.php', data)
                    .then(res => {
                        console.log(res);
                    });
            }
        });
    });
};

export default drop;