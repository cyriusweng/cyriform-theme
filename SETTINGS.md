# Cyriform settings

Style Settings exposes the following 89 controls. The theme supplies the same defaults when the plugin is inactive. Resetting a field returns it to the theme default. Colour overrides are stored independently for light and dark appearance. Font fields accept a CSS font-family stack; class choices apply to the entire workspace. Per-note classes are documented in README.md.

## Identity and colour

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Atmosphere<br>`cyriform-state` | Clarity | Choose a variation of Ground, Force and Variations. Each state retains the same structure and semantic roles. Choices: Clarity, Home, Becoming, Intimacy, Release. |
| Interaction colour<br>`cyriform-accent` | Light `#3156C9`; dark `#91ABFF` | Links, focus and selected controls. |
| Knowledge colour<br>`cyriform-gold` | Light `#795722`; dark `#C6A56F` | Highlights, references and marked knowledge. |
| Attention colour<br>`cyriform-oxblood` | Light `#76273A`; dark `#D695A7` | Critical states and editorial counterforce. |
| Completion colour<br>`cyriform-success` | Light `#35644E`; dark `#92BBA4` | Completed work and positive semantic states. |
| Reading surface<br>`cyriform-paper` | Light `#FBF8F1`; dark `#0C0E13` | The document plane behind prose. |
| Workspace ground<br>`cyriform-ground` | Light `#E8E3D9`; dark `#07080A` | Sidebars, ribbon and the surrounding workspace. |
| Code surface<br>`cyriform-code-bg` | Light `#EEE9DE`; dark `#12151D` | The background of inline and fenced code. |
| Structural line<br>`cyriform-rule` | Light `#C9C1B2`; dark `#353B48` | Fine rules separating related surfaces. |
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
| Emphasis treatment<br>`cyriform-emphasis` | Ink and weight | Use typographic weight or add the knowledge colour to strong text. Choices: Ink and weight, Gold emphasis. |
## Heading hierarchy

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Heading colour system<br>`cyriform-heading-colour` | Bone and ink | Preserve the editorial hierarchy or choose a deliberate colour treatment. Choices: Bone and ink, Interaction accent, Custom by level. |
| Heading rule<br>`cyriform-heading-rule` | Editorial rules | Editorial rules combine the short signal line with the structural rule. Choices: Editorial rules, Fine rules, Open spacing. |
| Heading level labels<br>`cyriform-heading-labels` | Off | Show H1 to H6 markers beside headings using a compact editorial label. |
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
## Layout and geometry

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Reading measure<br>`cyriform-measure` | `70ch` | Maximum prose width. Per-note widths remain available. Range: 45–100ch; step 1. |
| Document gutter<br>`cyriform-gutter` | `36px` | Horizontal breathing space around the document. Range: 16–80px; step 2. |
| Document vertical space<br>`cyriform-vertical-space` | `36px` | Space above and below the editing surface. Range: 12–100px; step 4. |
| List indentation<br>`cyriform-indent` | `2em` | Nested list indentation. Range: 1.2–3.5em; step 0.1. |
| Control corner radius<br>`cyriform-radius` | `3px` | Small, precise corners across the interface. Range: 0–12px; step 1. |
| Structural line width<br>`cyriform-border-width` | `1px` | Width of structural surface borders. Range: 0–2px; step 0.5. |
| Scrollbar width<br>`cyriform-scrollbar` | `8px` | Width of desktop scrollbars. Range: 4–16px; step 1. |
| Workspace density<br>`cyriform-density` | Standard | Adjust the rhythm of navigation and property rows. Choices: Standard, Compact, Spacious. |
| Overlay material<br>`cyriform-surface` | Solid | Transient menus can use a restrained translucent surface. Accessibility preferences retain solid surfaces. Choices: Solid, Translucent. |
| Document ground<br>`cyriform-texture` | Plain | Choose a subtle writing texture with a stable solid fallback. Choices: Plain, Ruled, Dotted. |
| Pane dividing lines<br>`cyriform-pane-lines` | Off | Add fine boundaries between workspace panes. |
| File tree guides<br>`cyriform-tree-guides` | Off | Reveal hierarchy guides beneath file folders. |
| List guides<br>`cyriform-list-guides` | Off | Reveal indentation guides in nested prose lists. |
| Focused writing<br>`cyriform-focus-mode` | Off | Emphasise the active editor line while preserving legibility of surrounding text. |
| Active line surface<br>`cyriform-active-line` | Off | Give the current editor line a quiet raised surface. |
## Content treatments

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Callout treatment<br>`cyriform-callout` | Ledger | Use a fine top rule, outlined boundary, tinted field or open annotation. Choices: Ledger, Outline, Tinted plane, Open margin. |
| Highlight treatment<br>`cyriform-highlight` | Knowledge underline | Choose how marked text carries the knowledge colour. Choices: Knowledge underline, Soft wash, Solid marker. |
| Tag treatment<br>`cyriform-tags` | Index labels | Semantic tags recognise urgent, blocked, done, reference, idea and related English terms. Choices: Index labels, Semantic states, Outlined labels. |
| Folder signals<br>`cyriform-folders` | Plain | Add a measured signal to folder depth or recognised workflow names. Choices: Plain, Depth, Semantic names. |
| Link underline<br>`cyriform-links` | Fine | The interaction colour remains visible for every link treatment. Choices: Fine, On hover, Emphasised. |
| Unresolved links<br>`cyriform-unresolved` | Dashed | Indicate links whose destination is still to be created. Choices: Dashed, Muted. |
| Section dividers<br>`cyriform-dividers` | Signal and rule | Divide prose with the theme’s structural line language. Choices: Fine rule, Signal and rule, Double rule. |
| List marker shape<br>`cyriform-list-markers` | By depth | Keep native list layout while varying the drawn marker. Choices: Round, Square, By depth. |
| Native task appearance<br>`cyriform-native-tasks` | Off | Use the application’s standard checkbox treatment. |
| Wrap code blocks<br>`cyriform-wrap-code` | Off | Wrap long code lines within their container. |
| Full-width tables<br>`cyriform-table-wide` | Off | Allow tables to use the available document width. |
| Table row bands<br>`cyriform-table-stripes` | Off | Add a quiet alternating surface to table rows. |
| Table cell grid<br>`cyriform-table-grid` | Off | Add fine borders around all table cells. |
| Scrollable diagrams<br>`cyriform-diagram-scroll` | Off | Keep wide Mermaid diagrams and equations in a horizontally scrollable region. |
| Compact properties<br>`cyriform-properties-compact` | Off | Reduce vertical space in the property ledger. |
## Images and embedded content

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Image corner radius<br>`cyriform-image-radius` | `2px` | Corner radius for note images. Range: 0–24px; step 1. |
| Maximum image width<br>`cyriform-image-width` | `100%` | Maximum width of ordinary images. Range: 40–100%; step 5. |
| Banner image height<br>`cyriform-banner-height` | `260px` | Height for images with the cyriform-banner layout token. Range: 120–500px; step 10. |
| Embed maximum height<br>`cyriform-embed-height` | `600px` | Scrollable maximum height for embedded notes. Range: 200–1200px; step 20. |
| Image depth<br>`cyriform-image-shadow` | Off | Add a restrained offset shadow beneath note images. |
| Open embeds<br>`cyriform-embed-open` | Off | Use an open ruled treatment for embedded notes. |
## Motion and mobile

| Setting | Default | Behaviour and accepted values |
| --- | --- | --- |
| Motion<br>`cyriform-motion` | Subtle | A brief settling motion accompanies transient layers. System reduced-motion preferences always apply. Choices: Subtle, Still. |
| Settling duration<br>`cyriform-motion-duration` | `160ms` | Duration of the transient-layer settling motion. Range: 80–300ms; step 10. |
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
