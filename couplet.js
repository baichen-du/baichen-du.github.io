(function() {
    // 1. 在 data 中為中英文分別設置字體
    const data = {
        cn: {
            left: "钻研变调规则 扭尽六壬 理论无甩漏",
            right: "分析音韵讯号 睇通三关 数据好靓声",
            top: "结果显著",
            fontSizeSide: "28px",
            fontSizeTop: "28px",
            widthSide: "50px",
            // 中文：優先使用書法體，保持藝術感
            font: "'Zhi Mang Xing', 'Kaiti TC', 'STKaiti', serif"
        },
        en: {
            left: "Features checked, Agree valued, derivation is complete.",
            right: "Formants tracked, noise reduced, the spectrogram is so sweet.",
            top: "[+SUCCESS]",
            fontSizeSide: "18px",
            fontSizeTop: "22px",
            widthSide: "115px",
            // 英文：使用高品質無襯線體，確保長單詞的識別度
            // Helvetica Neue 是 Mac 系統中最易讀的字體之一
            font: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        }
    };

    // 2. 注入 Google 書法字體 (供中文模式使用)
    if (!document.getElementById('font-zhi-mang-xing')) {
        const link = document.createElement('link');
        link.id = 'font-zhi-mang-xing';
        link.href = "https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }

    const style = document.createElement('style');
    style.id = "cyber-couplet-style";
    style.innerHTML = `
        .cyber-couplet-el { display: none; }
        
        .cyber-side {
            position: fixed; top: 50%; transform: translateY(-50%);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            height: max-content; max-height: 92vh; overflow: hidden;
            box-sizing: border-box; padding: 25px 8px;
            background-color: #cf2121; color: #1a1a1a;
            font-weight: bold; text-align: center; line-height: 1.2;
            border: 1px solid #991a1a; box-shadow: 2px 2px 10px rgba(0,0,0,0.4), inset 0 0 15px rgba(0,0,0,0.1);
            z-index: 2147483647; user-select: none; transition: all 0.3s ease;
        }
        
        .cyber-top {
            position: fixed; top: 25px; left: 50%; transform: translateX(-50%);
            padding: 10px 40px;
            background-color: #cf2121; color: #1a1a1a;
            font-weight: bold; border: 1px solid #991a1a;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 2147483647; white-space: nowrap;
            writing-mode: horizontal-tb !important;
        }

        .cyber-l { left: 20px; }
        .cyber-r { right: 20px; }
    `;
    document.head.appendChild(style);

    window.setCyberCouplet = function(mode) {
        const els = document.querySelectorAll('.cyber-couplet-el');
        if (mode === 'off') {
            els.forEach(el => el.style.display = 'none');
            return;
        }

        const config = data[mode];
        const leftEl = document.getElementById('cyber-l');
        const rightEl = document.getElementById('cyber-r');
        const topEl = document.getElementById('cyber-t');

        // 更新側聯
        [leftEl, rightEl].forEach(el => {
            el.style.display = 'flex';
            el.style.fontSize = config.fontSizeSide;
            el.style.width = config.widthSide;
            // 應用該模式專屬的字體
            el.style.fontFamily = config.font;
            el.style.writingMode = (mode === 'cn') ? 'vertical-rl' : 'horizontal-tb';
            el.innerHTML = (mode === 'en') ? 
                (el === leftEl ? config.left.split(" ").join("<br>") : config.right.split(" ").join("<br>")) : 
                (el === leftEl ? config.left : config.right);
        });

        // 更新橫批
        topEl.style.display = 'block';
        topEl.style.fontSize = config.fontSizeTop;
        topEl.style.fontFamily = config.font;
        topEl.innerHTML = config.top;
    };

    const init = () => {
        if (document.getElementById('cyber-l')) return;
        const l = document.createElement('div'); l.id = 'cyber-l'; l.className = 'cyber-side cyber-l cyber-couplet-el';
        const r = document.createElement('div'); r.id = 'cyber-r'; r.className = 'cyber-side cyber-r cyber-couplet-el';
        const t = document.createElement('div'); t.id = 'cyber-t'; t.className = 'cyber-top cyber-couplet-el';
        document.body.append(l, r, t);
        window.setCyberCouplet('off');
    };

    if (document.readyState === 'complete') init();
    else window.addEventListener('DOMContentLoaded', init);
})();
