(function() {
    const data = {
        cn: {
            left: "钻研变调规则 扭尽六壬 理论无甩漏",
            right: "分析音韵讯号 睇通三关 数据好靓声",
            top: "结果显著",
            fontSizeSide: "28px",
            fontSizeTop: "28px",
            widthSide: "50px"
        },
        en: {
            left: "Features checked, Agree valued, derivation is complete.",
            right: "Formants tracked, noise reduced, the spectrogram is so sweet.",
            top: "[+SUCCESS]",
            fontSizeSide: "18px",
            fontSizeTop: "24px",
            widthSide: "110px"
        }
    };

    const userConfig = window.cyberCoupletConfig || {};
    const font = userConfig.font || "'Ma Shan Zheng', 'Zhi Mang Xing', 'Courier New', 'Kaiti TC', serif";

    if (!document.getElementById('font-ma-shan-zheng')) {
            const link = document.createElement('link');
            link.id = 'font-ma-shan-zheng';
            link.href = "https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap";
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
            font-family: ${font}; font-weight: bold; text-align: center; line-height: 1.2;
            border: 1px solid #991a1a; box-shadow: 2px 2px 10px rgba(0,0,0,0.4), inset 0 0 15px rgba(0,0,0,0.1);
            z-index: 2147483647; user-select: none; transition: all 0.3s ease;
        }
        
        .cyber-top {
            position: fixed; top: 25px; left: 50%; transform: translateX(-50%);
            padding: 10px 40px;
            background-color: #cf2121; color: #1a1a1a;
            font-family: ${font}; font-weight: bold; border: 1px solid #991a1a;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 2147483647; white-space: nowrap;
            /* 橫批永遠強制橫向 */
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

        // 設置側聯 (左右)
        [leftEl, rightEl].forEach(el => {
            el.style.display = 'flex';
            el.style.fontSize = config.fontSizeSide;
            el.style.width = config.widthSide;
            // 中文縱向，英文橫向（配合單詞堆疊）
            el.style.writingMode = (mode === 'cn') ? 'vertical-rl' : 'horizontal-tb';
            el.innerHTML = (mode === 'en') ? config.left.split(" ").join("<br>") : (el === leftEl ? config.left : config.right);
        });

        // 特殊處理右聯文字 (避免中英文模式下innerHTML衝突)
        if(mode === 'en') rightEl.innerHTML = config.right.split(" ").join("<br>");

        // 設置橫批 (頂部)
        topEl.style.display = 'block';
        topEl.style.fontSize = config.fontSizeTop;
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
