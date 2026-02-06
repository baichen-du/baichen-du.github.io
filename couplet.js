(function() {
    const userConfig = window.cyberCoupletConfig || {};
    
    // 1. 文本處理邏輯：實現單詞堆疊
    function formatText(text) {
        if (!text) return "";
        // 如果包含空格，視為英文，按單詞切分並插入換行
        if (text.includes(" ")) {
            return text.split(" ").join("<br>");
        }
        // 如果是中文（無空格），則保持原樣（依靠容器寬度自然折行）
        return text;
    }

    const config = {
        leftText: formatText("Features checked Agree valued derivation is complete"),
        rightText: formatText("Formants tracked noise reduced the spectrogram is so sweet"),
        topText: "[+SUCCESS]", 
        color: userConfig.color || "#1a1a1a",
        bg: userConfig.bg || "#cf2121",
        // 增加 Courier New 作為英文等寬字體備選
        font: userConfig.font || "'Ma Shang Zheng','Zhi Mang Xing', 'Courier New', 'Kaiti TC', serif"
    };

    if (!document.getElementById('font-ma-shan-zheng')) {
        const link = document.createElement('link');
        link.id = 'font-ma-shan-zheng';
        link.href = "https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }

    // 3. 注入樣式表
    const style = document.createElement('style');
    style.innerHTML = `
        .cyber-couplet {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            /* 寬度適配：英文單詞一行一個，90px 是比較安全的值 */
            width: 100px; 
            height: max-content;
            max-height: 92vh; 
            overflow: hidden;
            box-sizing: border-box;
            padding: 25px 8px;

            background-color: ${config.bg};
            color: ${config.color};
            font-family: ${config.font};
            
            /* 調整字號以適配長單詞（如 spectrogram） */
            font-size: 18px; 
            font-weight: bold;
            text-align: center;
            line-height: 1.3;
            border: 1px solid #991a1a;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.4), inset 0 0 15px rgba(0,0,0,0.1);
            z-index: 2147483647;
            
            /* 切換為水平模式，以便英文字母正常站立 */
            writing-mode: horizontal-tb; 
            user-select: none;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            /* 防止溢出的最後防線 */
            word-wrap: break-word;
            hyphens: auto;
        }

        .cyber-couplet:hover {
            transform: translateY(-50%) scale(1.05);
        }
        
        .cyber-couplet-left { left: 20px; }
        .cyber-couplet-right { right: 20px; }
        
        .cyber-couplet-top {
            position: fixed;
            top: 25px;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px 35px;
            background-color: ${config.bg};
            color: ${config.color};
            font-family: ${config.font};
            font-size: 24px;
            font-weight: bold;
            border: 1px solid #991a1a;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            z-index: 2147483647;
            white-space: nowrap;
        }

        /* 響應式：小屏幕時進一步縮小寬度和字號 */
        @media (max-height: 750px) {
            .cyber-couplet { 
                font-size: 15px; 
                width: 80px; 
                padding: 15px 5px;
            }
            .cyber-couplet-top { font-size: 20px; }
        }
    `;
    document.head.appendChild(style);

    function createCouplet(text, className) {
        if(!text) return;
        const div = document.createElement('div');
        div.className = className;
        div.innerHTML = text;
        document.body.appendChild(div);
    }

    const init = () => {
        if (document.querySelector('.cyber-couplet')) return;
        createCouplet(config.leftText, 'cyber-couplet cyber-couplet-left');
        createCouplet(config.rightText, 'cyber-couplet cyber-couplet-right');
        createCouplet(config.topText, 'cyber-couplet-top');
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        init();
    } else {
        window.addEventListener('DOMContentLoaded', init);
    }
})();
