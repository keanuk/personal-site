/**
 * Plausible Analytics - Privacy-friendly analytics
 * https://www.npmjs.com/package/@plausible-analytics/tracker
 *
 * This module is client-side only - it dynamically imports
 * the tracker to avoid SSR issues.
 */
import { browser } from '$app/environment';

type PlausibleInstance = {
	enableAutoPageviews: () => () => void;
	trackEvent: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
	trackPageview: () => void;
};

let plausibleInstance: PlausibleInstance | null = null;

/**
 * Initialize Plausible tracker (client-side only)
 */
async function getPlausible(): Promise<PlausibleInstance | null> {
	if (!browser) return null;
	if (plausibleInstance) return plausibleInstance;

	const module = await import('@plausible-analytics/tracker');
	const Plausible = 'default' in module ? module.default : module;

	plausibleInstance = (Plausible as (options: { domain: string }) => PlausibleInstance)({
		domain: 'keanukerr.com'
	});

	return plausibleInstance;
}

/**
 * Enable automatic pageview tracking for SPA navigation
 */
export async function enableAutoPageviews(): Promise<(() => void) | undefined> {
	const plausible = await getPlausible();
	return plausible?.enableAutoPageviews();
}

/**
 * Track a custom event
 */
export async function trackEvent(
	eventName: string,
	props?: Record<string, unknown>
): Promise<void> {
	const plausible = await getPlausible();
	plausible?.trackEvent(eventName, { props });
}
