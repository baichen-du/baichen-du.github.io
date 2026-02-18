---
layout: homepage
---

## About

<style>
div {
  margin-right: 25px;
  margin-left: 25px;
}
</style>
<div style="text-align: justify">
Hello! I am a PhD student at <a href="https://linguistics.ucla.edu/"> UCLA Linguistics</a>, specializing in Phonetics and Phonology. I study how the structure and fine details of language are produced, perceived, and changed with various methodologies, such as experimentation, computation, and fieldwork. In particular, I am interested in the relation between phonology and the phonetic and psycholinguistic reality of articulation, planning, and processing. For more details, see my <a href="https://baichen-du.github.io/assets/files/cv/main.pdf">CV</a>.
<br>
Previously, I worked on a number of projects with <a href = "https://research.polyu.edu.hk/en/persons/yao-yao"> Yao Yao</a>, <a href="https://linguistics.berkeley.edu/~kjohnson/"> Keith Johnson</a>, <a href="https://www.alexandra-pfiffner.com/"> Alexandra Pfiffner</a>, and <a href="https://Jhavenhill.com"> Jonathan Havenhill</a>. 
<br>
</div>
<p></p>

## Current Projects

<div style="text-align: justify">
&#8226; Variation in phonological rule application: The role of production planning.
<br>
&#8226; Sensitivity to tonal information in Mandarin lexical access: Evidence from corpus study, eye tracking, production, and perception
<br>
&#8226; The nasalization of word-final voiced stops in Serudung Murut
<br>
</div>
<br>

## Publications & Presentations

**Journal Articles**

<div style="text-align: justify">
&#8226; <b>Du, B.,</b> Pfiffner, A. The co-variance of acoustic cues and lip gestures in the production of the Mandarin sibilant contrast. Resubmitted to <i>Journal of Laborotary Phonology</i>.
<br>
<br>
&#8226; Yu, X., Van Hoey, T., Tan, F., <b>Du, B.</b> & Do, Y. (2024). Tracking phonological regularities: exploring the influence of learning mode and regularity locus in adult phonological learning. <i>Linguistics Vanguard</i>. <a href="https://doi.org/10.1515/lingvan-2023-0050" target="_blank">doi.org/10.1515/lingvan-2023-0050</a>
</div>
<br>

**Conference Presentations**
<div style="text-align: justify">
&#8226; <b>Du, B.</b>, Pfiffner, A., Johnson, K. (2024, Jan). The role of visible articulatory variation in Mandarin sibilant contrast and merger. Talk given at 2024 LSA Annual Meeting (LSA2024), New York City, NY.
<br>
<br>
&#8226; <b>Du, B.</b>, Pfiffner, A., Johnson, K. (2023, Dec). Consonant and vowel rounding: same acoustics, different visuals. Poster presented at ASA 185th Meeting (ASA185) Sydney, Australia.
<br>
<br>
&#8226; Havenhill, J., <b>Du, B.</b> (2023, Dec). Visual cues in sound change: A cross-modal perceptual account for the typological rarity of labial palatalization. Poster presented at ASA 185th Meeting (ASA185) Sydney, Australia.
<br>
<br>
&#8226; <b>Du, B.</b>, Pfiffner, A., Johnson, K. (2023, Oct). Visible articulatory variation as a cue to sound change: Lip rounding and lip protrusion variability in the Mandarin sibilant merger. Talk given at New Ways of Analyzing Variation 51 (NWAV51), Queens College, New York City, NY.
<br>
<br>
&#8226; <b>Du, B.</b> (2023). Acoustic distance effect on the perception of sibilants mergers between retroflexes and alveolars in Taiwan Mandarin. Poster presented at ASA 184th Meeting (ASA184), Chicago, IL.
</div>
<br>
**Workshops**

<div style="text-align: justify">
&#8226; <b>Du, B.</b> (2023, Sep). Introduction to Advanced R Programming with RMarkdown. The Sociolinguistics Lab, University of California, Berkeley.
</div>
<br>

**Proceedings & Others**

<div style="text-align: justify">
&#8226; <b>Du, B.,</b> Pfiffner, A., Johnson, K. (2024). Visible articulatory variation as a cue to sound change: Lip rounding and lip protrusion variability in the Mandarin sibilant merger. <i>University of Pennsylvania Working Papers in Linguistics, 30.2</i> (Selected Papers from NWAV 51).
<br>
<br>
&#8226; <b>Du, B.</b> (2023). <i>The backfire effect in the perception and judgement of congruent and incongruent interpretation of political propaganda.</i> Unpublished undergraduate thesis in political psychology. University of Hong Kong.
</div>
<br>

## Teaching

**As Teaching Assistant**
<div style="text-align: justify">
&#8226; POLI3148: Data Science in Politics and Public Administration (HKU, 2024 Fall, Dr. Haohan Chen)
<br> 
See the course archive I compiled for more details <a href="https://github.com/haohanchen/dasppa-24f-hku" target="_blank">here</a>.
</div>
<br>

## Additional Notes

<div style="text-align: justify">
My name is spelled as Paak San Dou [pak3 sɐn21 tou2] in Cantonese. Prior to joining UCLA, I worked as a full-time research assistant at the Speech and Language Science lab at the Polytechnic University of Hong Kong, and at the Psychology Department at University of Manitoba - Winnipeg before completing my study abroad at UC Berkeley. I also enjoy applying data analytics and machine learning techniques to linguistic research. 
</div>
<br>

## For Fun

<div style="text-align: justify">
Happy Lunar New Year 2026, the Year of Horse! Click on the floating Lai See at the bottom right to show and switch the special Fai Chun.
</div>
<br>
<p></p>


<script src="/couplet.js"></script>
<div style="position: fixed; bottom: 20px; right: 20px; z-index: 99999;">
    <button id="mode-btn" style="width:50px; height:50px; border-radius:50%; border:2px solid #b33939; background:#fff; cursor:pointer; font-size:20px; box-shadow:0 4px 12px rgba(0,0,0,0.15);">
        <span id="mode-icon">🧧</span>
    </button>
</div>

<script>
(function() {
    const btn = document.getElementById('mode-btn');
    const icon = document.getElementById('mode-icon');
    // 狀態定義：0=off, 1=cn, 2=en
    let state = 0;
    const states = [
        { mode: 'off', icon: '🧧', title: '中文春聯' },
        { mode: 'cn', icon: '🔤', title: 'English Couplet' },
        { mode: 'en', icon: '📄', title: '學術模式 (關閉)' }
    ];

    btn.addEventListener('click', () => {
        state = (state + 1) % 3;
        const current = states[state];
        icon.innerText = current.icon;
        btn.title = current.title;
        
        // 調用 couplet.js 暴露的接口
        if (typeof window.setCyberCouplet === 'function') {
            window.setCyberCouplet(current.mode);
        }
    });
})();
</script>
