/**
 * Plausible Analytics - Privacy-friendly analytics
 * https://www.npmjs.com/package/@plausible-analytics/tracker
 *
 * This module is client-side only - uses the official @plausible-analytics/tracker package.
 */
import { browser } from '$app/environment';

let initialized = false;

/**
 * Initialize Plausible analytics (client-side only)
 * Must be called once on app load
 */
export async function initPlausible(): Promise<void> {
	if (!browser || initialized) return;

	const { init } = await import('@plausible-analytics/tracker');

	init({
		domain: 'keanukerr.com',
		autoCapturePageviews: true
	});

	initialized = true;
}

/**
 * Track a custom event
 */
export async function trackEvent(
	eventName: string,
	props?: Record<string, unknown>
): Promise<void> {
	if (!browser) return;

	const { trackEvent: track } = await import('@plausible-analytics/tracker');
	track(eventName, { props });
}
