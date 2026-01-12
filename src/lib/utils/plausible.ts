import { browser } from '$app/environment';

let initialized = false;

export async function initPlausible(): Promise<void> {
	if (!browser || initialized) return;

	const { init } = await import('@plausible-analytics/tracker');

	init({
		domain: 'keanukerr.com',
		autoCapturePageviews: true
	});

	initialized = true;
}
