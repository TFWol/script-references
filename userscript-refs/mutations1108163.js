/* GitHub mutations observer library script v0.6.0
 * Detect changes to various elements and trigger an event
 * This script is meant to be used as a library for GitHub-based userscripts
 * Copyright © 2022 Rob Garrison
 * License: MIT
 */
(() => {
	"use strict";

	// prefix for event & document body class name, e.g. "ghmo:container"
	const prefix = "ghmo";
	const disableAttr = `data-${prefix}-disable`;
	const debounceInterval = 250;
	const targets = {
		// pjax container (covers general, repo & gists)
		// .news = newsfeed layout
		// .repository-content = file code (code folding)
		// body = global changes
		"[data-pjax-container], .news, .repository-content, body": {
			count: 0,
			name: "container"
		},
		// comment preview active
		".js-preview-body": {
			count: 0,
			name: "preview"
		},
		// .js-discussion = wrapper for progressively loaded comments;
		// "# items not shown" example: https://github.com/isaacs/github/issues/18
		// .discussion-item = issue status changed (github-issue-show-status)
		// #progressive-timeline-item-container = load hidden items (old?)
		// #js-progressive-timeline-item-container = load hidden items
		// markdown-toolbar = issue comments
		".js-discussion, .discussion-item, .toolbar-item, #progressive-timeline-item-container, #js-progressive-timeline-item-container, markdown-toolbar": {
			count: 0,
			name: "comments"
		},
		// progressively loaded content (diff files)
		".js-diff-progressive-container, .data.blob-wrapper, .js-diff-load-container, .diff-table tbody, .diff-progressive-loader": {
			count: 0,
			name: "diff"
		},
		// issues/pr sidebar & timeline sections: e.g. form actions, commit
		// references, deployment state & PR checks container
		".js-updatable-content, .js-updatable-content-preserve-scroll-position": {
			count: 0,
			name: "updatable"
		},
		// user profile menu (loads on hover)
		"details-menu": {
			count: 0,
			name: "menu"
		}
	};
	const list = Object.keys(targets);
	let queue = new Set();
