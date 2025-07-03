console.log("Script carregado com sucesso!");

// Galeria de Vídeos - Modal
function createVideoModal() {
    if (document.getElementById('video-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'video-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-btn" title="Fechar">&times;</button>
            <iframe src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    `;
    document.body.appendChild(modal);
}

function openVideoModal(videoUrl) {
    const modal = document.getElementById('video-modal');
    const iframe = modal.querySelector('iframe');
    iframe.src = videoUrl + '?autoplay=1';
    modal.classList.add('active');
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const iframe = modal.querySelector('iframe');
    iframe.src = '';
    modal.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    createVideoModal();
    document.querySelectorAll('.video-thumb').forEach(function(thumb) {
        thumb.addEventListener('click', function() {
            openVideoModal(this.getAttribute('data-video'));
        });
    });
    document.getElementById('video-modal').addEventListener('click', function(e) {
        if (e.target.classList.contains('close-btn') || e.target.id === 'video-modal') {
            closeVideoModal();
        }
    });
});
