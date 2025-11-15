
## Resources (in progress)

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
ggplot2 in R has been the go-to tools for plotting in many fields. However, when automating linguistic data analyses or controlling more up-to-date experimental devices (e.g., eyetracker), Python seems to be a more handier option. To better streamlining the transition to Python, I wrote this tutorial to compare plotting in R with ggplot (and related packages) and in Python with seaborn/matplotlib, including frequently manipulated parameters such as font size, legends, size, coloring, linetypes, grids etc. Principles for reader friendly plotting, especially for the visually impaired, are also discussed. 
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
Prior to joining UCLA, I worked as a full-time research assistant at the Speech and Language Science lab at the Polytechnic University of Hong Kong, and at the Psychology Department in University of Manitoba - Winnipeg before completing my exchange study at UC Berkeley. Aside from phonetics, I also enjoy applying data analytics and machine learning techniques to linguistic research.
</div>
<br>
