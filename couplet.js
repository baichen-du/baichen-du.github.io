(function() {
    // 1. 定義中英文兩套數據
    const data = {
        cn: {
            left: "鑽研變調規則 扭盡六壬 理論無甩漏",
            right: "分析語音信號 睇通三關 數據好靚聲",
            top: "結果顯著",
            fontSize: "28px",
            width: "50px",
            writingMode: "vertical-rl"
        },
        en: {
            left: "Features checked, Agree valued, derivation is complete.",
            right: "Peaks aligned, noise reduced, the spectrogram is sweet.",
            top: "$[+SUCCESS]$",
            fontSize: "18px",
            width: "110px",
            writingMode: "horizontal-tb"
        }
    };

    const userConfig = window.cyberCoupletConfig || {};
    const font = userConfig.font || "'Ma Shan Zheng', 'Zhi Mang Xing', 'Courier New', 'Kaiti TC', serif";

    // 2. 注入字體與基礎樣式
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
        .cyber-couplet, .cyber-couplet-top { display: none; } /* 默認隱藏 */
        
        .cyber-couplet-active {
            position: fixed; top: 50%; transform: translateY(-50%);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            height: max-content; max-height: 90vh; overflow: hidden;
            box-sizing: border-box; padding: 25px 8px;
            background-color: #cf2121; color: #1a1a1a;
            font-family: ${font}; font-weight: bold; text-align: center; line-height: 1.2;
            border: 1px solid #991a1a; box-shadow: 2px 2px 10px rgba(0,0,0,0.4), inset 0 0 15px rgba(0,0,0,0.1);
            z-index: 2147483647; user-select: none; transition: all 0.3s ease;
        }
        .cyber-couplet-left { left: 20px; }
        .cyber-couplet-right { right: 20px; }
        
        .cyber-couplet-top-active {
            position: fixed; top: 25px; left: 50%; transform: translateX(-50%);
            display: block; padding: 10px 35px;
            background-color: #cf2121; color: #1a1a1a;
            font-family: ${font}; font-weight: bold; border: 1px solid #991a1a;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 2147483647; white-space: nowrap;
        }
    `;
    document.head.appendChild(style);

    // 3. 全局切換函數
    window.setCyberCouplet = function(mode) {
        // mode: 'off', 'cn', 'en'
        const els = document.querySelectorAll('.cyber-couplet-el');
        if (mode === 'off') {
            els.forEach(el => el.style.display = 'none');
            return;
        }

        const config = data[mode];
        const leftEl = document.getElementById('cyber-l');
        const rightEl = document.getElementById('cyber-r');
        const topEl = document.getElementById('cyber-t');

        [leftEl, rightEl, topEl].forEach(el => {
            el.style.display = (el === topEl) ? 'block' : 'flex';
            el.style.fontSize = config.fontSize;
            el.style.width = (el === topEl) ? 'auto' : config.width;
            el.style.writingMode = config.writingMode;
        });

        // 英文單詞堆疊處理
        const process = (txt) => (mode === 'en' ? txt.split(" ").join("<br>") : txt);
        leftEl.innerHTML = process(config.left);
        rightEl.innerHTML = process(config.right);
        topEl.innerHTML = config.top;
    };

    // 4. 初始化元素
    const init = () => {
        if (document.getElementById('cyber-l')) return;
        const l = document.createElement('div'); l.id = 'cyber-l'; l.className = 'cyber-couplet-active cyber-couplet-left cyber-couplet-el';
        const r = document.createElement('div'); r.id = 'cyber-r'; r.className = 'cyber-couplet-active cyber-couplet-right cyber-couplet-el';
        const t = document.createElement('div'); t.id = 'cyber-t'; t.className = 'cyber-couplet-top-active cyber-couplet-el';
        document.body.append(l, r, t);
        // 初始狀態為關閉
        window.setCyberCouplet('off');
    };

    if (document.readyState === 'complete') init();
    else window.addEventListener('DOMContentLoaded', init);
})();
