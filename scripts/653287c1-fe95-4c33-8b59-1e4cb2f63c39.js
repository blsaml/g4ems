fetch( viewsCacheL10n.admin_ajax_url, {
	method: "POST",
	credentials: 'same-origin',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Cache-Control': 'no-cache',
	},
	body: new URLSearchParams(
		{
			action: 'postviews',
			nonce: viewsCacheL10n.nonce,
			postviews_id: viewsCacheL10n.post_id,
			cache: !1,
		}
	),
})
.then(function(response) {
	return response.json();
})
.then(function(data) {
})
.catch(function(error) {
	console.log('WP-PostViews');
	console.log(error);
});
