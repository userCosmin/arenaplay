import type {
  PartyBookingFormData,
  PlaygroundBookingFormData,
  AfterschoolEnrollFormData,
  ArenaMobilaRequestFormData,
  ContactFormData,
} from '@/utils/validation';
import type { ApiResponse } from './api';

/**
 * MOCKED submission services.
 *
 * These simulate a network round-trip and always resolve successfully so the
 * UI/UX (loading states, success screens, analytics events) can be built and
 * tested end-to-end today. Swap the body of each function for a real
 * `apiPost(...)` call (see `api.ts`) once a backend/CRM endpoint exists —
 * the function signatures are designed to stay stable.
 */

function mockDelay<T>(data: T, ms = 900): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export async function submitPartyBooking(payload: PartyBookingFormData): Promise<ApiResponse> {
  // TODO: replace with `return apiPost('/leads/petreceri', payload);`
  return mockDelay({
    success: true,
    message: 'Cererea ta pentru petrecere a fost trimisă. Te contactăm în curând pentru confirmare.',
    data: payload,
  });
}

export async function submitPlaygroundBooking(payload: PlaygroundBookingFormData): Promise<ApiResponse> {
  // TODO: replace with `return apiPost('/leads/playground', payload);`
  return mockDelay({
    success: true,
    message: 'Rezervarea ta pentru Locul de joacă a fost trimisă. Îți confirmăm disponibilitatea în scurt timp.',
    data: payload,
  });
}

export async function submitAfterschoolEnroll(payload: AfterschoolEnrollFormData): Promise<ApiResponse> {
  // TODO: replace with `return apiPost('/leads/afterschool', payload);`
  return mockDelay({
    success: true,
    message: 'Solicitarea de înscriere Afterschool a fost trimisă. Te contactăm pentru pașii următori.',
    data: payload,
  });
}

export async function submitArenaMobilaRequest(payload: ArenaMobilaRequestFormData): Promise<ApiResponse> {
  // TODO: replace with `return apiPost('/leads/arena-mobila', payload);`
  return mockDelay({
    success: true,
    message: 'Solicitarea ta de ofertă Arena XR a fost trimisă. Nu reprezintă o rezervare confirmată.',
    data: payload,
  });
}

export async function submitContactForm(payload: ContactFormData): Promise<ApiResponse> {
  // TODO: replace with `return apiPost('/leads/contact', payload);`
  return mockDelay({
    success: true,
    message: 'Mesajul tău a fost trimis. Îți răspundem cât mai curând posibil.',
    data: payload,
  });
}
