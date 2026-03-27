\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{baichen_termpapers}[2026/03/14 Baichen Final Paper Class]

% Pass all options through to the base class.
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{cas-sc}}
\ProcessOptions\relax
\LoadClass{cas-sc}

% Keep first and last author names the same color (black) without changing spacing.
\makeatletter
\patchcmd{\author}
  {\textcolor{\l_stm_augroup_color_tl}{\firstname}}
  {\textcolor{\l_stm_augroup_color_tl}{\firstname}}
  {}{}
\patchcmd{\author}
  {\textcolor{\l_stm_augroup_color_tl}{\firstname}}
  {\textcolor{\l_stm_augroup_color_tl}{\firstname}}
  {}{}
\makeatother

% Full-width abstract block (no reserved keyword column space).
\RenewDocumentEnvironment{Abstract}{o}
{
  \IfNoValueF{#1}{\renewcommand\abstractname{#1}}
  \parindent0pt
  \noindent\abstractname\par
  \vskip-4pt
  \noindent\rule{\textwidth}{.2pt}\par\footnotesize
  \ignorespaces\everypar{\parindent=1.5em}
}
{\par}

\ExplSyntaxOn
% Remove short-author/preprint footer text.
\cs_set:Npn \__first_footerline: { }

% Use numeric-only page counter on all pages (e.g., 1/10), no footer rule.
\cs_set:Npn \__first_foot:
{
  \parbox[t]{\textwidth}
  {
    \centering \thepage/\lastpage
  }
}
\cs_set:Npn \__cas_foot:
{
  \parbox[t]{\textwidth}
  {
    \centering \thepage/\lastpage
  }
}

% Remove first-page author footnotes (ORCID, emails, corresponding notes).
\cs_set:Npn \printFirstPageNotes { }
\ExplSyntaxOff

% Project-wide document defaults.
\AtBeginDocument{
  \let\WriteBookmarks\relax
  \def\floatpagepagefraction{1}
  \def\textpagefraction{.001}
  % Re-apply page style after overrides so running pages use custom footer.
  \pagestyle{cas}
}
