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
Hello! I am a PhD student at <a href="https://linguistics.ucla.edu/"> UCLA Linguistics</a>, specializing in Phonetics. I study how the structure and fine details of language are produced, perceived, acquired, and changed with various methodologies, such as expreimentation, computation, and filedworks. Currently, I am a member of the <a href = "https://phonetics.linguistics.ucla.edu/">UCLA Phonetics Lab </a>. I worked on a number of projects on these topics with <a href = "https://linguistics.ucla.edu/person/megha-sundara/"> Megha Sundara</a>, <a href = "https://research.polyu.edu.hk/en/persons/yao-yao"> Yao Yao</a>, <a href="https://linguistics.berkeley.edu/~kjohnson/"> Keith Johnson</a>, <a href="https://www.alexandra-pfiffner.com/"> Alexandra Pfiffner</a>, and <a href="https://Jhavenhill.com"> Jonathan Havenhill</a>. For more details, see my <a href="https://baichen-du.github.io/assets/files/cv/main.pdf">CV</a>.
<br>
</div>
<p></p>

## Current Projects

<div style="text-align: justify">

Collaborating with <a href="https://sites.google.com/view/jlsiah/home">Jian-Leat Siah</a> and Jennifer Shin, I will be on a fieldwork trip this winter to Tawau, Malaysia, to investigate the endangered languages of Kalabakan Murut and Serudung Murut, their unique repair strategies in the coda voicing, and the resulting perceptual differences.
<br>
<br>
&#8226; Sensitivity to tonal information in Mandarin lexical access: Evidence from corpus study, eye tracking, production, and perception
<br>
&#8226; Articulatory gestures and sound changes in the context of Mandarin Chinese
<br>
&#8226; Final devoicing and nasalization in Murut languages of Sabah, Malaysia
<br>
&#8226; Native and non-native speaker's articulation and production of facial gestures
</div>
<br>

## Publications & Presentations

**Journal Papers**

<div style="text-align: justify">
&#8226; <b>Du, B.,</b> Pfiffner, A. (Re-submitted). The co-variance of acoustic cues and lip gestures in the production of the Mandarin sibilant contrast
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
&#8226; <b>Du, B.</b> (2023). <i>The backfire effect in the perception and judgement of congruent and incongruent interpretation of political propaganda.</i> Unpublished undergraduate thesis of political psychology. University of Hong Kong.
</div>
<br>

## Teaching

**As Teaching Assistant**
<div style="text-align: justify">
&#8226; POLI3148: Data Science in Politics and Public Administration (2024 Fall, Dr. Haohan Chen)
<br> 
See the course archive I compiled for more information <a href="https://github.com/haohanchen/dasppa-24f-hku" target="_blank">here</a>.
<br>
&#8226; POLI3148: Data Science in Politics and Public Administration (2026 Spring, Dr. Haohan Chen)
</div>
<br>

## Resources (under work)

<div style="text-align: justify">
Here are some hopefully useful tools, scripts, or small tricks that I developed/wrote/found through my undergraduate study, which is open for anyone to use.
</div>
<br>
**Video Segmentation with Praat TextGrid**
<div style="text-align: justify">
For audiovisual linguistic research, there is no "Praat" for videos. I developed this Python program that takes videos and properly annotated TextGrids as inputs, and segment the videos into smaller clips, which can be further fed to computer visions models for batch processing. Unlike tools such as ffmpeg, I use MoviePy, which is a Python library at the percision of sub-milliseconds, as permitted by the framerate of the input video. This is particularly helpful for computer-vision-assisted articulography, eye-tracking, and pupillometry, which needs to capture the trajectory of fast-moving articulators and frequent eye movements. Or it can be applied in less computationally demanding tasks, such as segmenting sociolinguistic interviews or recordings of head-turning experiments with infants into individual trials.
</div>
<br>
**Automatic interval labelling and segment tracking for TextGrids**
<div style="text-align: justify">
For languages that do not have a properly trained MFA model, sometimes we may want to manually segment recordings into utterances, words, and periodic/non-periodic segments. This set of Praat scripts will handle these jobs all at once, with proper settings for parameters. Though just like MFA, manual adjustments are highly recommended for percision.
</div>
<br>
**Plotting in Python and R: A side-by-side comparison**
<div style="text-align: justify">
ggplot2 in R has been the go-to tools for plotting in many fields. However, when automating linguistic data analyses or controlling more up-to-date experimental devices (e.g., eyetracker), Python seems to be a more handier option. To better streamlining the transition to Python, I wrote this tutorial to compare plotting in R with ggplot (and related packages) and in Python with seaborn/matplotlib, including frequently manipulated parameters such as font size, legends, size, coloring, linetypes, grids etc. Principles for reader friendly plotting, especially for the visually impaired, is also discussed. 
</div>
<br>
**Calling Praat in R for fully replicable acoustic measurement**
<div style="text-align: justify">
Under work
</div>
<br>
**Miscellaneous Rmd and JupyterNotebook tricks**
<div style="text-align: justify">
Under work
</div>
<br>

## Additional Notes

<div style="text-align: justify">
Prior to joining UCLA, I worked as research assistant at the Speech and Language Science lab at the Polytechnic University of Hong Kong, the Psychology Department at University of Manitoba - Winnipeg, and completed my exchange study at UC Berkeley. Aside from phonetics, I also enjoy applying data analytics and machine learning techniques to linguistic research.
</div>
<p></p>
