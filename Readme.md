Adobe Creative Suite Scripts
===

CalendarWizard3 Fork
---
These changes to CW3 are optimized for my use. Some stuff is deleted.

It's optimized for a feature-rich calendar in a very small space, with a lot of hardcoded/changed options/defaults, so this is probably not for you, but it may serve as a practical API in-use example.

Original was GPL so this is too. https://sourceforge.net/projects/calendarwizard/

See http://calendarwizard.sourceforge.net/

InsertPicsFromText
---
Modified from importSVGFilesAsLayers.js
https://gist.github.com/robmoggach/9df50a1e4eb936a5a2db

This inserts pictures from a text file. Definition:

	C:/path/to/folder/
	Atago.png
	Comment1
	C:/path/to/folder2/
	Ayanami.png
	Comment2

* Lines with slashes & colons are treated as pathes, and should end with a slash. As such, the first line should be a path. New path = new line
* Files with dots are pictures, and are relative to the previously set path
* Anything else is a comment & will be ignored
* Errors are silently ignored
* To do horizontal layout, set *horizontal* to true
* It is recommend to have your artboard at the top left of the drawing space to discourage pictures being places outside of the drawing space