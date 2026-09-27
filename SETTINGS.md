# Cyriform settings

Open **Settings → Style Settings → Cyriform** to find these 89 controls. The theme uses the listed defaults when Style Settings is inactive. Reset a field to return to its default. You can set colours separately for light and dark mode. Font fields accept a CSS font-family list, such as `"EB Garamond", Georgia, serif`. These controls apply across the vault; the [README](https://github.com/cyriusweng/cyriform-theme#style-individual-notes-with-cyriform-companion) explains per-note styles. Setting names and choices below match the plugin's labels.

## Identity and colour

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Atmosphere<br>`cyriform-state` | Clarity | A preset for page width, spacing, colours, interface density, title lines and animation. Choose Clarity, Home, Becoming, Intimacy or Release. Some presets set their own width and spacing; choose Clarity to use the general layout controls. |
| Interaction colour<br>`cyriform-accent` | Light `#3156C9`; dark `#91ABFF` | Links, focus and selected controls. |
| Knowledge colour<br>`cyriform-gold` | Light `#795722`; dark `#C6A56F` | Gold accents for highlights, references and important items. |
| Attention colour<br>`cyriform-oxblood` | Light `#76273A`; dark `#D695A7` | Red accents for warnings and items needing attention. |
| Completion colour<br>`cyriform-success` | Light `#35644E`; dark `#92BBA4` | Green accents for completed work and success callouts. |
| Reading surface<br>`cyriform-paper` | Light `#FBF8F1`; dark `#0C0E13` | The page background behind your text. |
| Workspace ground<br>`cyriform-ground` | Light `#E8E3D9`; dark `#07080A` | Sidebars, ribbon and the surrounding workspace. |
| Code surface<br>`cyriform-code-bg` | Light `#EEE9DE`; dark `#12151D` | The background of inline and fenced code. |
| Structural line<br>`cyriform-rule` | Light `#C9C1B2`; dark `#353B48` | The colour of borders and dividing lines. |
## Typography

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Reading font<br>`cyriform-font-reading` | `"EB Garamond", Georgia, serif` | Default: EB Garamond. Enter a CSS font-family stack. |
| Heading font<br>`cyriform-font-heading` | `"Cormorant Garamond", Georgia, serif` | Default: Cormorant Garamond. Applies to titles and headings. |
| Interface font<br>`cyriform-font-interface` | `"Beiruti", system-ui, sans-serif` | Default: Beiruti. Applies to navigation and controls. |
| Code font<br>`cyriform-font-code` | `"IBM Plex Mono", "JetBrains Mono", Menlo, Consolas, monospace` | Default: IBM Plex Mono, with local monospace fallbacks. |
| Reading size<br>`cyriform-text-size` | `19px` | Base reading and editing text size. Range: 14–26px; step 1. |
| Interface size<br>`cyriform-ui-size` | `16px` | Navigation and control text size. Range: 13–21px; step 1. |
| Reading line height<br>`cyriform-line-height` | `1.65` | Space between lines of prose. Range: 1.3–2.2; step 0.05. |
| Reading letter spacing<br>`cyriform-tracking` | `0em` | Fine tracking adjustment for the reading font. Range: -0.02–0.06em; step 0.005. |
| Code size<br>`cyriform-code-size` | `0.78em` | Code size relative to prose. Range: 0.7–1.1em; step 0.01. |
| Paragraph spacing<br>`cyriform-paragraph-gap` | `1.1em` | Space after each prose paragraph. Range: 0.5–2em; step 0.1. |
| Code ligatures<br>`cyriform-ligatures` | Off | Enable contextual and discretionary ligatures supported by the chosen code font. |
| First-line paragraph indent<br>`cyriform-prose-indent` | Off | Indent ordinary paragraphs in Reading view; opening paragraphs stay aligned. |
| Emphasis treatment<br>`cyriform-emphasis` | Ink and weight | Keep bold text in the text colour or give it a gold accent. Choose Ink and weight or Gold emphasis. |
## Heading hierarchy

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Heading colour system<br>`cyriform-heading-colour` | Bone and ink | Use the text colour, the accent colour or a separate colour for each heading level. Choose Bone and ink, Interaction accent or Custom by level. |
| Heading rule<br>`cyriform-heading-rule` | Editorial rules | Choose a short coloured line with a longer divider, a fine divider or open spacing. The choices are Editorial rules, Fine rules and Open spacing. |
| Heading level labels<br>`cyriform-heading-labels` | Off | Show compact H1 to H6 labels beside rendered headings in Reading view. Editor headings keep their usual layout. |
| H1 size<br>`cyriform-h1-size` | `2.2em` | Size of level 1 headings in reading and editing. Range: 0.8–3.5em; step 0.05. |
| H1 weight<br>`cyriform-h1-weight` | `600` | Weight of level 1 headings. Range: 400–800; step 50. |
| H1 custom colour<br>`cyriform-h1-colour` | Light `#24262B`; dark `#E8E3D9` | Used by the Custom by level heading system. |
| H2 size<br>`cyriform-h2-size` | `1.7em` | Size of level 2 headings in reading and editing. Range: 0.8–3.5em; step 0.05. |
| H2 weight<br>`cyriform-h2-weight` | `600` | Weight of level 2 headings. Range: 400–800; step 50. |
| H2 custom colour<br>`cyriform-h2-colour` | Light `#24262B`; dark `#E8E3D9` | Used by the Custom by level heading system. |
| H3 size<br>`cyriform-h3-size` | `1.4em` | Size of level 3 headings in reading and editing. Range: 0.8–3.5em; step 0.05. |
| H3 weight<br>`cyriform-h3-weight` | `600` | Weight of level 3 headings. Range: 400–800; step 50. |
| H3 custom colour<br>`cyriform-h3-colour` | Light `#24262B`; dark `#E8E3D9` | Used by the Custom by level heading system. |
| H4 size<br>`cyriform-h4-size` | `1.2em` | Size of level 4 headings in reading and editing. Range: 0.8–3.5em; step 0.05. |
| H4 weight<br>`cyriform-h4-weight` | `650` | Weight of level 4 headings. Range: 400–800; step 50. |
| H4 custom colour<br>`cyriform-h4-colour` | Light `#24262B`; dark `#E8E3D9` | Used by the Custom by level heading system. |
| H5 size<br>`cyriform-h5-size` | `1.08em` | Size of level 5 headings in reading and editing. Range: 0.8–3.5em; step 0.05. |
| H5 weight<br>`cyriform-h5-weight` | `650` | Weight of level 5 headings. Range: 400–800; step 50. |
| H5 custom colour<br>`cyriform-h5-colour` | Light `#24262B`; dark `#E8E3D9` | Used by the Custom by level heading system. |
| H6 size<br>`cyriform-h6-size` | `1em` | Size of level 6 headings in reading and editing. Range: 0.8–3.5em; step 0.05. |
| H6 weight<br>`cyriform-h6-weight` | `650` | Weight of level 6 headings. Range: 400–800; step 50. |
| H6 custom colour<br>`cyriform-h6-colour` | Light `#24262B`; dark `#E8E3D9` | Used by the Custom by level heading system. |
## Page layout and workspace

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Reading measure<br>`cyriform-measure` | `70ch` | Maximum prose width. Per-note widths remain available. Range: 45–100ch; step 1. |
| Document gutter<br>`cyriform-gutter` | `36px` | Space on either side of the note. Range: 16–80px; step 2. |
| Document vertical space<br>`cyriform-vertical-space` | `36px` | Space above and below the editing surface. Range: 12–100px; step 4. |
| List indentation<br>`cyriform-indent` | `2em` | Nested list indentation. Range: 1.2–3.5em; step 0.1. |
| Control corner radius<br>`cyriform-radius` | `3px` | How rounded the corners of interface controls are. Range: 0–12px; step 1. |
| Structural line width<br>`cyriform-border-width` | `1px` | The thickness of interface borders. Range: 0–2px; step 0.5. |
| Scrollbar width<br>`cyriform-scrollbar` | `8px` | Width of desktop scrollbars. Range: 4–16px; step 1. |
| Workspace density<br>`cyriform-density` | Standard | Change the space between navigation and property rows. Choose Standard, Compact or Spacious. |
| Overlay material<br>`cyriform-surface` | Solid | Use Solid or Translucent backgrounds for menus. System preferences for reduced transparency keep them solid. |
| Document ground<br>`cyriform-texture` | Plain | Choose a Plain page background or add Ruled lines or Dotted guides. |
| Pane dividing lines<br>`cyriform-pane-lines` | Off | Add fine boundaries between workspace panes. |
| File tree guides<br>`cyriform-tree-guides` | Off | Reveal hierarchy guides beneath file folders. |
| List guides<br>`cyriform-list-guides` | Off | Reveal indentation guides in nested prose lists. |
| Focused writing<br>`cyriform-focus-mode` | Off | Emphasise the active editor line while preserving legibility of surrounding text. |
| Active line surface<br>`cyriform-active-line` | Off | Add a background tint to the current editor line. |
## Content treatments

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Callout treatment<br>`cyriform-callout` | Ledger | Choose a line along the top, an outline, a tinted background or open spacing. The choices are Ledger, Outline, Tinted plane and Open margin. |
| Highlight treatment<br>`cyriform-highlight` | Knowledge underline | Show highlights as an underline, a soft background or a solid fill. Choose Knowledge underline, Soft wash or Solid marker. |
| Tag treatment<br>`cyriform-tags` | Index labels | Use plain labels, outlines or colours based on tag words such as `urgent`, `done`, `reference` and `idea`. Choose Index labels, Semantic states or Outlined labels. |
| Folder signals<br>`cyriform-folders` | Plain | Keep folders Plain, colour them by Depth, or use Semantic names to recognise paths containing `Archive`, `Project` and `Reference`. |
| Link underline<br>`cyriform-links` | Fine | Choose Fine, On hover or Emphasised underlines. Links keep the accent colour. |
| Unresolved links<br>`cyriform-unresolved` | Dashed | Indicate links whose destination is still to be created. Choices: Dashed, Muted. |
| Section dividers<br>`cyriform-dividers` | Signal and rule | Choose a single line, a line with a short gold segment, or two lines. The choices are Fine rule, Signal and rule and Double rule. |
| List marker shape<br>`cyriform-list-markers` | By depth | Keep native list layout while varying the drawn marker. Choices: Round, Square, By depth. |
| Native task appearance<br>`cyriform-native-tasks` | Off | Use the application’s standard checkbox treatment. |
| Wrap code blocks<br>`cyriform-wrap-code` | Off | Wrap long code lines within their container. |
| Full-width tables<br>`cyriform-table-wide` | Off | Allow tables to use the available document width. |
| Table row bands<br>`cyriform-table-stripes` | Off | Give alternating table rows a background tint. |
| Table cell grid<br>`cyriform-table-grid` | Off | Add fine borders around all table cells. |
| Scrollable diagrams<br>`cyriform-diagram-scroll` | Off | Keep wide Mermaid diagrams and equations in a horizontally scrollable region. |
| Compact properties<br>`cyriform-properties-compact` | Off | Reduce the space between property rows. |
## Images and embedded content

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Image corner radius<br>`cyriform-image-radius` | `2px` | Corner radius for note images. Range: 0–24px; step 1. |
| Maximum image width<br>`cyriform-image-width` | `100%` | Maximum width of ordinary images. Range: 40–100%; step 5. |
| Banner image height<br>`cyriform-banner-height` | `260px` | Height for images with the cyriform-banner layout token. Range: 120–500px; step 10. |
| Embed maximum height<br>`cyriform-embed-height` | `600px` | Scrollable maximum height for embedded notes. Range: 200–1200px; step 20. |
| Image depth<br>`cyriform-image-shadow` | Off | Add a small shadow beneath images. |
| Open embeds<br>`cyriform-embed-open` | Off | Give embedded notes a top and bottom line in place of a full border. |
## Motion and mobile

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Motion<br>`cyriform-motion` | Subtle | Choose a Subtle arrival animation for menus and prompts, or keep them Still. System preferences for reduced motion always apply. |
| Settling duration<br>`cyriform-motion-duration` | `160ms` | How long the menu and prompt animation lasts. Range: 80–300ms; step 10. |
| Mobile control size<br>`cyriform-touch-size` | `44px` | Minimum target height for mobile controls. Range: 44–56px; step 2. |
| Compact mobile reading<br>`cyriform-mobile-dense` | Off | Reduce page gutters while keeping the touch target size. |
| Show mobile ribbon<br>`cyriform-mobile-ribbon` | Off | Keep the native mobile ribbon available within its application layout. |
## Print and PDF export

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Keep dark colours in exports<br>`cyriform-print-dark` | Off | Retain the selected theme palette when the export tool prints backgrounds. |
| Print reading font<br>`cyriform-print-font` | Editorial serif | Choose the reading family for printed pages. Choices: Editorial serif, Interface sans, Monospace. |
| Print paragraph alignment<br>`cyriform-print-align` | Left aligned | Choose paragraph alignment for print. Justified text uses automatic hyphenation. Choices: Left aligned, Justified. |
| Print text size<br>`cyriform-print-size` | `12pt` | Body size for printed pages. Range: 9–18pt; step 0.5. |
| Print link destinations<br>`cyriform-print-links` | Off | Append external URL destinations in printed output. |
