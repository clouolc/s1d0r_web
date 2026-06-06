// gallery.js — モーダル開閉

(function () {

    // モーダル本体を body に1つだけ生成
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.innerHTML = '<img id="modal-img" src="" alt="">';
    document.body.appendChild(overlay);

    const modalImg = document.getElementById('modal-img');

    // サムネイルクリックで100%サイズ表示
    document.querySelectorAll('.thumb-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            // src から実際の画像URLを取得
            modalImg.src = link.querySelector('img').src;
            overlay.classList.add('is-open');
        });
    });

    // オーバーレイ（画像以外）クリックで閉じる
    overlay.addEventListener('click', function (e) {
        if (e.target !== modalImg) {
            overlay.classList.remove('is-open');
            modalImg.src = '';
        }
    });

    // Esc キーでも閉じる
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            overlay.classList.remove('is-open');
            modalImg.src = '';
        }
    });

})();
