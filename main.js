
const darkModeToggle = document.getElementById('darkModeToggle');
const logo = document.getElementById('logo');
const newsCards = document.querySelectorAll('.news-card');
const readMoreButtons = document.querySelectorAll('.read-more');
const productDetailButtons = document.querySelectorAll('.product-detail');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close-modal');
const tabs = document.querySelectorAll('.tab');
const notificationBar = document.querySelector('.notification-bar');
const closeNotification = document.querySelector('.close-notification');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.setAttribute('data-theme', 
        document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    

    localStorage.setItem('theme', 
        document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.body.setAttribute('data-theme', 'dark');
}


let clickCount = 0;
logo.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        logo.style.transform = 'scale(1.2) rotate(360deg)';
        setTimeout(() => {
            logo.style.transform = 'scale(1)';
            clickCount = 0;
        }, 1000);
    }
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(t => t.classList.remove('active'));

        tab.classList.add('active');
        
        const filter = tab.getAttribute('data-filter');
        filterNews(filter);
    });
});

function filterNews(filter) {
    newsCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


function openModal(content) {
    modalContent.innerHTML = content;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}


modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModalFunc();
    }
});


closeModal.addEventListener('click', closeModalFunc);

readMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const newsId = button.getAttribute('data-news');
        showNewsDetail(newsId);
    });
});

newsCards.forEach(card => {
    card.addEventListener('click', () => {
        const newsId = card.querySelector('.read-more').getAttribute('data-news');
        showNewsDetail(newsId);
    });
});

function showNewsDetail(newsId) {
    let title, content;
    
    switch(newsId) {
        case '1':
            title = 'OCUCY Whitepaper';
            content = `
                <h3>${title}</h3>
                <p class="news-date">30 Mei 2025</p>
                <p>Whitepaper resmi untuk OCUCY, platform file-based crypto kami, sekarang tersedia untuk diunduh.</p>
                <p>OCUCY memungkinkan:</p>
                <ul>
                    <li>Penyimpanan file terdesentralisasi yang aman</li>
                    <li>Transfer file berbasis blockchain</li>
                    <li>Smart contracts untuk manajemen hak akses</li>
                    <li>Integrasi dengan berbagai platform</li>
                </ul>
                <button class="btn primary" id="downloadWhitepaperBtn">Download Whitepaper</button>
            `;
            break;
        case '2':
            
            title = 'NexISE v2 Beta Release';
            content = `
                <h3>${title}</h3>
                <p class="news-date">June 10, 2023</p>
                <p>Kami dengan bangga mengumumkan versi beta dari NexISE v2, mesin pencari AI generasi berikutnya yang menawarkan:</p>
                <ul>
                    <li>Pemahaman konteks yang lebih dalam</li>
                    <li>Antarmuka pengguna yang lebih intuitif</li>
                    <li>Integrasi dengan lebih banyak sumber data</li>
                    <li>Peningkatan kecepatan pencarian hingga 40%</li>
                </ul>
                <p>Beta tester saat ini dibatasi untuk anggota komunitas Nexmithsl!</p>
            `;
            break;

        case '3':
            title = 'Tech Summit 2023';
            content = `
                <h3>${title}</h3>
                <p class="news-date">May 15, 2023</p>
                <p>Nexmiths meluncurkan blueprint</p>
                <p>Blueprint ini akan menampilkan:</p>
                <ul>
                    <li>rencana pengembangan nexmiths</li>
                    <li>Nilai nilai nexmiths</li>
                </ul>
                <p>Tiket tersedia sekarang dengan diskon khusus untuk anggota komunitas.</p>
            `;
            break;
    }
    
    openModal(content);
setTimeout(() => {
    const dlBtn = document.getElementById('downloadWhitepaperBtn');
    if (dlBtn) {
        dlBtn.addEventListener('click', () => {
            const a = document.createElement('a');
            a.href = 'WhitePaper Ocucy-1.pdf'; 
            a.download = 'WhitePaper Ocucy-1.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }
}, 100); 

}

productDetailButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product');
        showProductDetail(productId);
    });
});

function showProductDetail(productId) {
    let title, content;
    
    switch(productId) {
        case 'nexise':
            title = 'NexISE';
            content = `
                <div class="modal-product-header">
                    <img src="asset/nexise-icon.png" alt="${title}" class="modal-product-icon">
                    <h3>${title}</h3>
                </div>
                <p>NexISE adalah mesin pencari AI generasi berikutnya yang dirancang untuk memahami maksud pencarian Anda secara mendalam, bukan hanya kata kunci.</p>
                <h4>Fitur Utama:</h4>
                <ul>
                    <li>Pemrosesan bahasa alami tingkat lanjut</li>
                    <li>Pembelajaran konteks percakapan</li>
                    <li>Integrasi dengan berbagai sumber pengetahuan</li>
                    <li>Antarmuka yang dapat disesuaikan</li>
                </ul>
                <h4>Teknologi Dasar:</h4>
                <p>Dibangun dengan arsitektur transformer mutakhir dan dilatih pada dataset khusus untuk memahami bahasa teknis dan sehari-hari.</p>
                <div class="modal-actions">
                    <button class="btn primary" id="downloadISEBtn">Download Model</button>
                </div>
            `;
            break;
        case 'ocucy':
            title = 'OCUCY';
            content = `
                <div class="modal-product-header">
                    <img src="asset/ocucy-icon.png" alt="${title}" class="modal-product-icon">
                    <h3>${title}</h3>
                </div>
                <p>OCUCY adalah platform file-based crypto yang memungkinkan penyimpanan dan transfer file yang aman menggunakan teknologi blockchain.</p>
                <h4>Fitur Utama:</h4>
                <ul>
                    <li>Enkripsi end-to-end untuk semua file</li>
                    <li>Transfer peer-to-peer yang terdesentralisasi</li>
                    <li>Smart contracts untuk manajemen hak akses</li>
                    <li>Integrasi dengan penyimpanan cloud yang ada</li>
                </ul>
                <h4>Teknologi Dasar:</h4>
                <p>Menggunakan blockchain khusus dengan konsensus Proof-of-Stake yang efisien dan sistem penyimpanan terdistribusi.</p>
                <div class="modal-actions">
                </div>
            `;
            break;
    }
    
    openModal(content);
    setTimeout(() => {
        const dlBtn = document.getElementById('downloadISEBtn');
        if (dlBtn) {
            dlBtn.addEventListener('click', () => {
                const a = document.createElement('a');
                a.href = 'ISE v1 Alpha.zip'; 
                a.download = 'ISE v1 Alpha.zip';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
        }
    }, 100);
}


if (closeNotification && notificationBar) {
    closeNotification.addEventListener('click', () => {
        notificationBar.style.display = 'none';
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const memberCount = document.querySelector('.member-count');
if (memberCount) {
    let count = 1;
    const targetCount = 3;
    
    const interval = setInterval(() => {
        if (count < targetCount) {
            count++;
            memberCount.textContent = count + '+';
        } else {
            clearInterval(interval);
        }
    }, 100);
}
