 let saveEmail = document.querySelector('.save-email');
 let saveBtn = document.querySelector('.save-btn');

 const downloadToFile = (content, filename, contentType) => {
        const a = document.createElement('a');
        const file = new Blob([content], {
            type: contentType
        });
        a.href = URL.createObjectURL(file);
        a.download = filename;
        a.click();
        URL.revokeObjectURL(a.href);
    } 
     saveBtn.addEventListener('click', function() {
     data = {
         "email": saveEmail.value
     }
     downloadToFile(saveEmail.value, 'myJson.json', 'text/plain');
 });
