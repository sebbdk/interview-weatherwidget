Curriculum-Vitae
================

My Curriculum Vitae or resumé if you like.
Serves as my data sheet, and as a subject/experiment for needless amounts of load optimization. :)

## How to release
After having done changes to master.
Switch to `gh-pages` branch merge master in and run `yarn ghpages`.
The commit the changes to the branch up the remote and wait a few minutes for the changes to reflect.

## Stuff that needs doing

**Tecknical Todo**
* Cleanup styles and naming to use BEM or Tachyon'ish pattern.
* Implement simple Jest React testing
* Accessibility, Aria.
* Implement as PWA using Workbox
* Implement semantic tags for better indexing and assistive tecknology reasons, main, section etc.
* Migrate to css-in-js
* Make portfolio more DRY, seperate data from view.

**Content todo**
* Improve on print design

**Performance todo**
* Setup dependency analyses 
* Optimise script size
  * Router optimization - only include 1 router type in prod
  * LazyLoad plugin seemed big
* Markdown parsing is heavy (~13kb gzipped), could be pre'rendered and not included in production build
* Portfolio is big and not very DRY.

# Other notes
Initial payload (html+css) budget kb size is max 14 kb.
Defered loaded items can' be larger, goal is less than 100kb, not included media.
