import type { ApiResponse } from '@/types';

const BASE = ((import.meta.env.VITE_API_BASE_URL as string | undefined) ?? '').replace(/\/$/, '');

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

/** Minimal JSON client shared by every service. */
export async function post<TBody extends object, TData = unknown>(path: string, body: TBody): Promise<ApiResponse<TData>> {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });

  let json: ApiResponse<TData> | undefined;
  try {
    json = (await res.json()) as ApiResponse<TData>;
  } catch {
    json = undefined;
  }

  if (!res.ok) {
    throw new ApiError(json?.message ?? `Request failed (${res.status})`, res.status);
  }
  return json ?? { ok: true };
}
